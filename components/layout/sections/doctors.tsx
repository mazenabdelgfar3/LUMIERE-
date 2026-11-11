"use client";
import React from "react";
import Image from "next/image";
import { openBookingModal } from "@/components/BookingModal";
import { Calendar } from "lucide-react";

interface DoctorCard {
  id: string;
  name: string;
  image: string;
  title: string;
  specialties: string;
}

const doctors: DoctorCard[] = [
  {
    id: "dr-menna",
    name: "د. منة غزالة",
    image: "/dr-menna-ghazala.png",
    title: "أخصائية الجلدية والتجميل والليزر",
    specialties: "البوتوكس، الفيلر، البلازما، وعلاج الندبات وحب الشباب",
  },
  {
    id: "dr-heba",
    name: "د. هبة يونس",
    image: "/dr-heba-younes.png",
    title: "أخصائية الجلدية والتجميل والليزر",
    specialties: "الحقن التجميلي، النضارة، الليزر، وعلاج مشاكل البشرة والشعر",
  },
];

export const DoctorsSection = () => {
  return (
    <section id="doctors" className="w-full py-20 sm:py-28 bg-[#141619] text-white text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#C5A880] tracking-widest uppercase block">
            نخبة طبيبات لوميير
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.25]">
            إشراف طبي متخصص <br />
            <span className="text-[#C5A880] font-bold">بأعلى معايير الخبرة والأمان</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-lg mx-auto">
            تألقي بجمال طبيعي متوازن تحت إشراف نخبة من الطبيبات المعتمدات في جدة
          </p>
        </div>

        {/* Two Doctors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#1c1a17] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-right shadow-2xl transition-all duration-300 hover:border-[#C5A880]/60 hover:shadow-[#C5A880]/10"
            >
              {/* Image Canvas */}
              <div className="w-full h-80 sm:h-96 relative flex items-end justify-center mb-6 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  priority
                  className="object-contain object-bottom select-none pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/60 to-transparent pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {doc.name}
                </h3>
                <p className="text-sm font-semibold text-[#C5A880]">
                  {doc.title}
                </p>
                <div className="pt-3 border-t border-white/10 mt-3">
                  <span className="text-xs text-zinc-400 font-medium block mb-1">
                    مجالات التخصص الدقيقة:
                  </span>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    {doc.specialties}
                  </p>
                </div>
              </div>

              {/* Booking CTA Button */}
              <button
                onClick={() => openBookingModal(`حجز موعد مع ${doc.name}`)}
                className="w-full h-12 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>حجز موعد مع {doc.name}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
