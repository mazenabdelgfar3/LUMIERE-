"use client";
import React from "react";
import Image from "next/image";
import { openBookingModal } from "@/components/BookingModal";
import { Sparkles, Calendar } from "lucide-react";

interface DoctorCard {
  name: string;
  image: string;
  title: string;
  credentials: string;
}

const doctors: DoctorCard[] = [
  {
    name: "د. هبة يونس",
    image: "/dr-heba-younes.png",
    title: "أخصائية جلدية وتجميل وليزر",
    credentials:
      "علاجات التصبغات العميقة، الأكسوزوم، ونضارة وترميم خلايا البشرة • فرع السامر & النسيم",
  },
  {
    name: "دكتورة منة غزالة",
    image: "/dr-menna-ghazala.png",
    title: "أخصائية جلدية وتجميل وليزر",
    credentials:
      "علاج الندبات وآثار حب الشباب، إجراءات الفيلر الطبيعي للشفايف والبوتوكس • فرع الروضة & النسيم",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="w-full py-24 sm:py-32 bg-[#141619] text-white text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Clean Heading */}
        <div className="max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-[#C5A880] tracking-wider uppercase block">
            نخبة الطبيبات في جدة
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            كادر طبي معتمد <br />
            <span className="font-bold text-[#C5A880]">بإشراف استشاريات متخصصات</span>
          </h2>
        </div>

        {/* Two Doctor Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-[#1c1a17] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-right shadow-xl transition-all duration-300 hover:border-[#C5A880]/50"
            >
              {/* Image Canvas with bottom fade into dark card */}
              <div className="w-full h-80 sm:h-96 relative flex items-end justify-center mb-6 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/50 to-transparent pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {doc.name}
                </h3>
                <p className="text-sm font-semibold text-[#C5A880]">
                  {doc.title}
                </p>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed pt-1">
                  {doc.credentials}
                </p>
              </div>

              {/* Booking CTA Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={openBookingModal}
                  className="w-full h-12 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-zinc-950" />
                  <span>حجز استشارة مع {doc.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
