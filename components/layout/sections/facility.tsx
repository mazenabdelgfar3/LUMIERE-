"use client";
import React from "react";
import Image from "next/image";
import { openBookingModal } from "@/components/BookingModal";

export const FacilitySection = () => {
  return (
    <section id="facilities" className="relative w-full py-24 sm:py-32 lg:py-40 text-center overflow-hidden">
      
      {/* 1. Full-bleed background of clinic room with luxury dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clinic-room.jpg"
          alt="غرف وتجهيزات عيادات لوميير بجدة"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Identity Overlay for 100% text readability */}
        <div className="absolute inset-0 bg-[#141210]/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Heading 1 (Matching Ajmal Clinics style) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
          غرف إجراءات وأجهزة مجهزة بالكامل
        </h2>

        {/* Subtitle */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#DFC298] tracking-tight mt-3 sm:mt-4 drop-shadow-sm">
          بأحدث التقنيات والأجهزة المعتمدة
        </h3>

        {/* Descriptive Text */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-200 font-medium leading-relaxed max-w-2xl mx-auto mt-4 sm:mt-6 drop-shadow-sm">
          نحرص في عيادات لوميير على توفير بيئة علاجية فندقية توفر لكِ أعلى درجات الخصوصية والأمان، بأحدث أجهزة كانديلا الأصلية وتقنيات الحقن والشد المعتمدة من هيئة الغذاء والدواء.
        </p>

        {/* CTA Button */}
        <div className="pt-6 sm:pt-8 flex justify-center">
          <button
            onClick={openBookingModal}
            className="rounded-full px-10 sm:px-14 py-3.5 sm:py-4 bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-extrabold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] cursor-pointer border-none"
          >
            حجز المواعيد
          </button>
        </div>

      </div>

    </section>
  );
};
