"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("فرع الروضة");
  const [selectedService, setSelectedService] = useState("لومي فيس ناعم (1,899 ريال)");
  const [notes, setNotes] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim() || !patientPhone.trim()) {
      alert("يرجى إدخال اسمكِ ورقم الواتساب");
      return;
    }

    const message = 
`✨ *طلب حجز موعد - عيادات لوميير للتجميل* ✨
━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${patientName}
📱 *رقم واتساب:* ${patientPhone}
📍 *الفرع المطلوب:* ${selectedBranch}
💉 *الإجراء / العرض:* ${selectedService}
${notes.trim() ? `📝 *ملاحظات:* ${notes.trim()}\n` : ""}━━━━━━━━━━━━━━━━━━
أرجو تأكيد أقرب موعد متاح. شكراً لكم!`;

    const url = `https://wa.me/966920002024?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-right bg-[#141619] text-white">
      
      {/* Luxury Form Container */}
      <div className="bg-[#1c1a17] rounded-3xl border border-white/10 p-8 sm:p-14 shadow-2xl text-right">
        
        {/* Header directly above the form */}
        <div className="text-center max-w-md mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#C5A880] tracking-wider uppercase block">
            عيادات لوميير للتجميل
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            احجزي استشارتكِ
          </h2>
        </div>

        {/* Clean High-Contrast Form */}
        <form onSubmit={handleBookingSubmit} className="space-y-6 max-w-2xl mx-auto">
          
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                اسمكِ
              </label>
              <input
                type="text"
                placeholder="اسمكِ الكريم"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-white/15 text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A880] bg-white/5 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                رقم واتساب
              </label>
              <input
                type="tel"
                placeholder="05xxxxxxxx"
                dir="ltr"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-white/15 text-sm font-medium text-white placeholder:text-zinc-500 text-right focus:outline-none focus:border-[#C5A880] bg-white/5 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Service Selection */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-2">
              الإجراء أو العرض المطلوب
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-white/15 text-sm font-medium text-white focus:outline-none focus:border-[#C5A880] bg-[#141619] transition-colors"
            >
              <option value="لومي فيس ناعم (1,899 ريال)">لومي فيس ناعم - تحديد الفك والذقن (1,899 ريال)</option>
              <option value="فيلر شفايف ريف مع رتوش (799 ريال)">فيلر شفايف ريف مع رتوش (799 ريال)</option>
              <option value="الشد المائي الملكي (1,299 ريال)">الشد المائي الملكي واستعادة النضارة (1,299 ريال)</option>
              <option value="تحفيز الكولاجين بالنضارة (999 ريال)">تحفيز الكولاجين بالنضارة العميقة (999 ريال)</option>
              <option value="جلسة ليزر كانديلا جنتل برو (299 ريال)">جلسة ليزر كانديلا جنتل برو ماكس (299 ريال)</option>
              <option value="استشارة جلدية وتجميل عامة">استشارة جلدية وتجميل عامة مع الاستشارية</option>
            </select>
          </div>

          {/* Row 3: Branch Selection */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-2">
              الفرع الأقرب لكِ في جدة
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { name: "فرع الروضة", id: "rawdah" },
                { name: "طريق الملك", id: "king-rd" },
                { name: "فرع النسيم", id: "naseem" },
                { name: "فرع السامر", id: "samer" },
              ].map((branch) => (
                <button
                  type="button"
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.name)}
                  className={`h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedBranch === branch.name
                      ? "border-[#C5A880] bg-[#C5A880] text-zinc-950 shadow-sm"
                      : "border-white/15 bg-white/5 text-zinc-300 hover:border-white/30"
                  }`}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Optional Notes */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-2">
              ملاحظات أو رغبة محددة (اختياري)
            </label>
            <textarea
              rows={3}
              placeholder="مثال: أفضل موعد في الفترة المسائية، أو الاستشارة مع د. ياسمين فؤاد..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-4 rounded-xl border border-white/15 text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C5A880] bg-white/5 transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-14 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              <MessageCircle className="w-5 h-5 fill-zinc-950 text-[#C5A880]" />
              <span>تأكيد الحجز المباشر عبر واتساب</span>
              <ArrowLeft className="w-4 h-4 mr-1" />
            </button>
          </div>

        </form>

      </div>

    </section>
  );
};
