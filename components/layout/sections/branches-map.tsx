"use client";
import React, { useState } from "react";
import { MapPin, Clock, Phone, ExternalLink, Navigation } from "lucide-react";
import { openBookingModal } from "@/components/BookingModal";

interface Branch {
  id: string;
  name: string; // "فرع الروضة"
  district: string;
  street: string;
  fullAddress: string;
  landmark: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
}

const branches: Branch[] = [
  {
    id: "rawdah",
    name: "فرع الروضة",
    district: "حي الروضة",
    street: "شارع عبدالمقصود خوجة",
    fullAddress: "شارع عبدالمقصود خوجة، حي الروضة، جدة (بجوار ممشى الروضة)",
    landmark: "بجوار ممشى الروضة",
    hours: "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 2:00 م - 10:00 م",
    phone: "920002024",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Abdul%20Maqsoud%20Khojah%20Ar%20Rawdah%20Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lumiere+Clinics+Rawdah+Jeddah",
  },
  {
    id: "king-road",
    name: "فرع طريق الملك",
    district: "حي الشاطئ",
    street: "طريق الملك عبدالعزيز",
    fullAddress: "طريق الملك عبدالعزيز، حي الشاطئ، جدة (أبراج الكورنيش - طريق الملك)",
    landmark: "أبراج الكورنيش - طريق الملك",
    hours: "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 2:00 م - 10:00 م",
    phone: "920002024",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=King%20Abdul%20Aziz%20Rd%20Ash%20Shati%20Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lumiere+Clinics+King+Road+Jeddah",
  },
  {
    id: "samir",
    name: "فرع السامر",
    district: "حي السامر",
    street: "شارع أنقرة الرئيسي",
    fullAddress: "شارع أنقرة الرئيسي، حي السامر، جدة (مجمع السامرية الطبي العام)",
    landmark: "مجمع السامرية الطبي العام",
    hours: "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 2:00 م - 10:00 م",
    phone: "920002024",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Al%20Samir%20District%20Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Samiriyah+Medical+Complex+Jeddah",
  },
  {
    id: "naseem",
    name: "فرع النسيم",
    district: "حي النسيم",
    street: "شارع علي المرتضى",
    fullAddress: "شارع علي المرتضى، حي النسيم، جدة (مجمع السامرية الطبي 2)",
    landmark: "مجمع السامرية الطبي 2",
    hours: "السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 2:00 م - 10:00 م",
    phone: "920002024",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Al%20Naseem%20District%20Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Samiriyah+Naseem+Jeddah",
  },
];

export const BranchesMapSection = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("rawdah");

  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) || branches[0];

  return (
    <section id="branches" className="w-full bg-white text-zinc-900 py-16 sm:py-24 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. العنوان والوصف بخطوط كبيرة وواضحة */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 mb-3 tracking-tight">
            فروع عيادات لوميير بجدة
          </h2>
          <p className="text-lg sm:text-xl font-medium text-zinc-600 mb-8 leading-relaxed">
            نسعد باستقبالكِ في 4 فروع رئيسية تغطي أرقى أحياء جدة بكامل التجهيزات الطبية
          </p>
        </div>

        {/* 2. أزرار الفروع الأربعة الكبيرة بدون حشو */}
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 mb-6">
          {branches.map((branch) => {
            const isSelected = branch.id === selectedBranchId;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`py-3.5 px-6 rounded-2xl text-base sm:text-lg font-bold tracking-tight transition-all duration-200 cursor-pointer text-center ${
                  isSelected
                    ? "bg-[#8C6D46] text-white shadow-lg scale-[1.02]"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 border border-zinc-200"
                }`}
              >
                {branch.name}
              </button>
            );
          })}
        </div>

        {/* 3. شريط عنوان الفرع المختار التفصيلي فوق الخريطة مباشرة */}
        <div className="w-full bg-[#8C6D46]/10 border border-[#8C6D46]/30 rounded-2xl p-4 sm:p-5 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#8C6D46]">
            <MapPin className="w-5 h-5 text-[#8C6D46] flex-shrink-0" />
            <span>{selectedBranch.name}: {selectedBranch.fullAddress}</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-zinc-600 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6D46] flex-shrink-0" />
            <span>{selectedBranch.hours}</span>
          </div>
        </div>

        {/* 4. إطار الخريطة العريض مع كارت تفاصيل الفرع */}
        <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100">
          
          <iframe
            key={selectedBranch.id}
            src={selectedBranch.mapEmbedUrl}
            title={selectedBranch.name}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[15%] contrast-[1.05]"
          />

          {/* كارت تفاصيل الفرع العائم فوق الخريطة */}
          <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-zinc-200 text-right z-10 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-3">
              <span className="font-extrabold text-xl text-zinc-950">
                {selectedBranch.name}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6D46] bg-[#8C6D46]/10 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#8C6D46]" />
                {selectedBranch.district}
              </span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-zinc-600 font-medium">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#8C6D46] flex-shrink-0" />
                <span>{selectedBranch.street} • {selectedBranch.landmark}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6D46] flex-shrink-0" />
                <span>{selectedBranch.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8C6D46] flex-shrink-0" />
                <span dir="ltr" className="font-bold text-zinc-800">920002024</span>
              </div>
            </div>

            {/* الأزرار التفاعلية للكارت */}
            <div className="flex items-center gap-3 pt-4 mt-2">
              <button
                onClick={() => openBookingModal(selectedBranch.name)}
                className="flex-1 py-3 rounded-full bg-[#8C6D46] hover:bg-[#775a36] text-white font-extrabold text-xs sm:text-sm text-center shadow-md transition-all cursor-pointer border-none"
              >
                حجز موعد بهذا الفرع
              </button>
              <a
                href={selectedBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs sm:text-sm transition-all border border-zinc-300"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C6D46]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
