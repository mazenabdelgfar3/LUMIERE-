"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { openBookingModal } from "@/components/BookingModal";

interface DoctorSlide {
  id: string;
  name: string;
  pillText: string;
  image: string;
  alt: string;
}

const doctorsSlides: DoctorSlide[] = [
  {
    id: "dr-menna",
    name: "د. منة غزالة",
    pillText: "د. منة غزالة • أخصائية الجلدية والتجميل والليزر",
    image: "/dr-menna-ghazala.png",
    alt: "د. منة غزالة - أخصائية الجلدية والتجميل والليزر",
  },
  {
    id: "dr-heba",
    name: "د. هبة يونس",
    pillText: "د. هبة يونس • أخصائية الجلدية والتجميل والليزر",
    image: "/dr-heba-younes.png",
    alt: "د. هبة يونس - أخصائية الجلدية والتجميل والليزر",
  },
];

export const HeroSection = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDoctor((prev) => (prev + 1) % doctorsSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeDoctor = doctorsSlides[currentDoctor];

  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden text-right pt-28 lg:pt-32"
    >
      
      {/* 1. خلفية الهيرو: تدرج برونزي موكا دافئ ومشرق فوق صورة العيادة */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clinic-room.jpg"
          alt="عيادات لوميير بجدة"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#261F1A]/90 via-[#1F1915]/85 to-[#181310]/95" />
      </div>

      {/* 2. توزيع الهيرو المتناسق بدون تداخل وبخطوط أنيقة متناسقة */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between pb-6 lg:pb-8">
          
          {/* الكتلة النصية وزر الحجز: في الموبايل بالأعلى (order-1) • وفي الديسكتوب على اليمين بالـ RTL */}
          <div className="order-1 w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-right pt-2 sm:pt-4 lg:pt-0 pb-6 lg:pb-0 px-2 sm:px-4 lg:pr-8 lg:pl-4 z-10">
            
            {/* العنوان الرئيسي الكبير بوزن متناسق font-bold */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-normal leading-[1.25] text-white drop-shadow-sm mb-2">
              عيادات لوميير بجدة
            </h1>

            {/* العنوان الفرعي بوزن متوسط font-medium ولون شامبين فخم */}
            <h2 className="text-lg sm:text-2xl font-medium text-[#E5C99B] leading-relaxed mt-2 mb-6 drop-shadow-sm">
              وجهتكِ الأولى للجمال الطبيعي والجلدية
            </h2>

            {/* زر الحجز المباشر الموزون */}
            <div className="w-full flex justify-center lg:justify-start mb-6">
              <button
                onClick={() => openBookingModal()}
                className="px-10 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer border-none text-center"
              >
                حجز المواعيد
              </button>
            </div>

          </div>

          {/* صورة الطبيبة بالأسفل بدون أي أقواس هندسية أو منقطة */}
          <div className="order-2 w-full lg:w-5/12 relative flex flex-col items-center justify-end mt-2 lg:mt-0">
            
            {/* إضاءة خلفية ناعمة جداً blur-3xl */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-[#C5A880]/15 blur-3xl pointer-events-none" />

            {/* صورة الطبيبة بارتفاع متناسق h-[280px] sm:h-[380px] lg:h-[560px] */}
            <div 
              className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[460px] h-[280px] sm:h-[380px] lg:h-[560px] z-10"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            >
              {doctorsSlides.map((doctor, index) => {
                const isActive = index === currentDoctor;
                return (
                  <div
                    key={doctor.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-end justify-center ${
                      isActive 
                        ? "opacity-100 scale-100 pointer-events-auto" 
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={doctor.image}
                      alt={doctor.alt}
                      fill
                      priority={index === 0}
                      className="object-contain object-bottom select-none pointer-events-none"
                      sizes="(max-width: 768px) 80vw, 460px"
                    />
                  </div>
                );
              })}
            </div>

            {/* كبسولة صغيرة أنيقة جداً بسطر واحد فقط لا غير */}
            <div className="relative z-20 -mt-4 sm:-mt-6 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-bold text-center mb-4 shadow-lg">
              {activeDoctor.pillText}
            </div>

          </div>

        </div>
      </div>

      {/* 3. شريط الإحصائيات بأرقام ثابتة وواضحة فور تحميل الصفحة */}
      <div className="relative z-10 w-full bg-[#8C6D46] text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 py-6 lg:py-8 divide-y sm:divide-y-0 divide-white/20 lg:divide-x lg:divide-x-reverse lg:divide-white/25">
            
            {/* 1. +19,500 مراجعة وتجربة موثقة */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4">
              <span className="text-3xl lg:text-4xl font-bold tracking-tight leading-none text-white drop-shadow-sm tabular-nums">
                +19,500
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 mt-1.5 sm:mt-2">
                مراجعة وتجربة موثقة
              </span>
            </div>

            {/* 2. 4 فروع تغطي جدة */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4">
              <span className="text-3xl lg:text-4xl font-bold tracking-tight leading-none text-white drop-shadow-sm tabular-nums">
                4
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 mt-1.5 sm:mt-2">
                فروع تغطي جدة
              </span>
            </div>

            {/* 3. 100% مواد وأجهزة معتمدة SFDA */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/20">
              <span className="text-3xl lg:text-4xl font-bold tracking-tight leading-none text-white drop-shadow-sm tabular-nums">
                100%
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 mt-1.5 sm:mt-2">
                مواد وأجهزة معتمدة SFDA
              </span>
            </div>

            {/* 4. 4.9 ★ تقييم رضا العميلات */}
            <div className="flex flex-col items-center justify-center text-center px-3 sm:px-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/20">
              <span className="text-3xl lg:text-4xl font-bold tracking-tight leading-none text-white drop-shadow-sm tabular-nums">
                4.9 ★
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 mt-1.5 sm:mt-2">
                تقييم رضا العميلات
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
