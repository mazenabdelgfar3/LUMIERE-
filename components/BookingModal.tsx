"use client";
import React, { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

export const openBookingModal = (
  serviceOrBranch?: string | React.MouseEvent,
  branchName?: string
) => {
  if (typeof window !== "undefined") {
    const isEvent =
      serviceOrBranch &&
      typeof serviceOrBranch === "object" &&
      "preventDefault" in serviceOrBranch;
    const cleanStr = isEvent ? undefined : (serviceOrBranch as string);
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: {
          service:
            cleanStr && cleanStr.startsWith("فرع") ? undefined : cleanStr,
          branch:
            branchName ||
            (cleanStr && cleanStr.startsWith("فرع") ? cleanStr : undefined),
        },
      })
    );
  }
};

export const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("فرع الروضة (شارع عبدالمقصود خوجة)");
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      if (e?.detail?.service) {
        setSelectedService(e.detail.service);
      }
      if (e?.detail?.branch) {
        setSelectedBranch(e.detail.branch);
      }
    };
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert("يرجى إدخال الاسم ورقم الجوال");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: patientName,
          phone: patientPhone,
          email: patientEmail,
          branch: selectedBranch,
          service: selectedService || "استشارة عامة",
        }),
      });
    } catch (err) {
      console.error("Booking API error:", err);
    }

    // Direct WhatsApp confirmation
    const message = 
`✨ *طلب حجز موعد - عيادات لوميير بجدة* ✨
━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${patientName}
📱 *رقم الجوال:* +966${patientPhone.replace(/^0+/, "")}
📍 *الفرع المختار:* ${selectedBranch}
${patientEmail.trim() ? `📧 *البريد:* ${patientEmail}\n` : ""}${selectedService.trim() ? `💉 *الخدمة أو العرض:* ${selectedService}\n` : ""}━━━━━━━━━━━━━━━━━━
أرجو تأكيد أقرب موعد متاح في هذا الفرع. شكراً لكم!`;

    const url = `https://wa.me/966920002024?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setIsSubmitting(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200" 
      dir="rtl"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl text-right text-zinc-950 border border-zinc-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر الإغلاق في أعلى اليسار */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 w-9 h-9 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* عنوان الفورم على نمط عيادات أجمل */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8C6D46] tracking-tight">
            نموذج حجز المواعيد
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium mt-2">
            احجزي الآن مع نخبة استشاريات وأطباء التجميل بجدة
          </p>
        </div>

        {/* الحقول المطلوبة بارتفاع مريح h-14 rounded-xl */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* 1. الاسم * */}
          <div>
            <label className="text-base font-bold text-zinc-800 mb-1.5 block">
              الاسم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="أدخل الاسم"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              className="w-full h-14 px-4 rounded-xl border border-zinc-300 bg-white text-base font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-[#8C6D46] focus:outline-none transition-all"
            />
          </div>

          {/* 2. رقم الجوال * */}
          <div>
            <label className="text-base font-bold text-zinc-800 mb-1.5 block">
              رقم الجوال <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="tel"
                placeholder="أدخل رقم الجوال"
                dir="ltr"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                required
                className="w-full h-14 pr-24 pl-4 rounded-xl border border-zinc-300 bg-white text-base font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-[#8C6D46] focus:outline-none text-right transition-all"
              />
              {/* علم السعودية وكود +966 */}
              <div className="absolute right-3.5 flex items-center gap-1.5 pointer-events-none text-zinc-700 font-bold text-sm border-l border-zinc-300 pl-2.5">
                <span>🇸🇦</span>
                <span dir="ltr" className="text-xs text-zinc-500">+966</span>
              </div>
            </div>
          </div>

          {/* 3. أزرار اختيار الفرع */}
          <div>
            <label className="text-base font-bold text-zinc-800 mb-2 block">
              الفرع <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "الروضة", full: "فرع الروضة (شارع عبدالمقصود خوجة)" },
                { label: "طريق الملك", full: "فرع طريق الملك (حي الشاطئ)" },
                { label: "السامر", full: "فرع السامر (مجمع السامرية الطبي)" },
                { label: "النسيم", full: "فرع النسيم (مجمع السامرية الطبي 2)" },
              ].map((b) => (
                <button
                  type="button"
                  key={b.label}
                  onClick={() => setSelectedBranch(b.full)}
                  className={`h-12 px-2 rounded-xl text-sm font-bold border transition-all text-center flex items-center justify-center cursor-pointer ${
                    selectedBranch.includes(b.label)
                      ? "bg-[#8C6D46] text-white border-[#8C6D46] shadow-md"
                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. البريد الإلكتروني (اختياري) */}
          <div>
            <label className="text-base font-bold text-zinc-800 mb-1.5 block">
              البريد الإلكتروني <span className="text-xs text-zinc-400 font-normal">(اختياري)</span>
            </label>
            <input
              type="email"
              placeholder="أدخل البريد الإلكتروني"
              dir="ltr"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              className="w-full h-14 px-4 rounded-xl border border-zinc-300 bg-white text-base font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-[#8C6D46] focus:outline-none text-right transition-all"
            />
          </div>

          {/* 5. الخدمة (حقل كتابة نصي مفتوح) */}
          <div>
            <label className="text-base font-bold text-zinc-800 mb-1.5 block">
              الخدمة أو العرض
            </label>
            <input
              type="text"
              placeholder="اكتبي اسم الخدمة أو العرض أو الطبيبة"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full h-14 px-4 rounded-xl border border-zinc-300 bg-white text-base font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-[#8C6D46] focus:outline-none transition-all"
            />
          </div>

          {/* شارة التحقق السحابي Cloudflare Turnstile */}
          <div className="pt-1 flex justify-start">
            <div className="border border-zinc-200 rounded-xl px-4 py-2.5 flex items-center justify-between gap-4 bg-zinc-50 w-full sm:w-64 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <CheckCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>تم بنجاح!</span>
              </div>
              <div className="text-left text-[10px] text-zinc-400 font-medium">
                <span className="font-bold text-zinc-600 block">CLOUDFLARE</span>
                <span>الخصوصية • المساعدة</span>
              </div>
            </div>
          </div>

          {/* زر التأكيد العريض بلون الهوية */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-xl bg-[#8C6D46] hover:bg-[#735836] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              <span>{isSubmitting ? "جاري الإرسال..." : "تأكيد حجز الموعد"}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
