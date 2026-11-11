"use client";
import React from "react";
import Image from "next/image";
import { openBookingModal } from "@/components/BookingModal";
import { ArrowDown } from "lucide-react";

interface CaseItem {
  id: string;
  title: string;
  procedure: string;
  image: string;
}

const cases: CaseItem[] = [
  {
    id: "case-contour",
    title: "تحديد ملامح Lumi Face",
    procedure: "كنتور وتناسق الوجه بدون جراحة",
    image: "/case-contour-3.jpg",
  },
  {
    id: "case-lips",
    title: "فيلر شفايف روسي ناعم",
    procedure: "رسم متناسق وامتلاء كرزي طبيعي",
    image: "/case-lips-1.jpg",
  },
  {
    id: "case-water",
    title: "الشد المائي والنضارة الفورية",
    procedure: "فيلر مدمج لاستعادة امتلاء البشرة",
    image: "/case-water-lift-1.jpg",
  },
];

export const BeforeAfterSection = () => {
  return (
    <section id="before-after" className="w-full py-16 sm:py-24 lg:py-32 bg-white text-zinc-950 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Large Central Title */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            حالات قبل وبعد
          </h2>
        </div>

        {/* 3 Clean Before/After Cards with Comfortable Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cases.map((item) => (
            <div
              key={item.id}
              onClick={openBookingModal}
              className="group bg-white rounded-3xl overflow-hidden shadow-md sm:shadow-lg border border-zinc-200/80 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col w-full max-w-sm sm:max-w-none mx-auto"
            >
              {/* Photo Container with Center Down Arrow Transition Indicator */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Central Circle with Down Arrow (Ajmal Style) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880] text-zinc-950 flex items-center justify-center shadow-md border-2 border-white z-10">
                  <ArrowDown className="w-4 h-4 stroke-[3]" />
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 sm:p-6 text-center sm:text-right bg-white" dir="rtl">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-[#9A7B4F] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="pt-10 sm:pt-14">
          <button
            onClick={openBookingModal}
            className="w-full sm:w-auto max-w-xs sm:max-w-none rounded-full px-10 sm:px-14 py-3.5 sm:py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer"
          >
            مشاهدة المزيد وحجز استشارة
          </button>
        </div>

      </div>
    </section>
  );
};
