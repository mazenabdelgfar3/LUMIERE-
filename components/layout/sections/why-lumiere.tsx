"use client";
import React from "react";
import { ShieldCheck, Sparkles, Award } from "lucide-react";

export const WhyLumiereSection = () => {
  return (
    <section id="why-lumiere" className="w-full py-18 sm:py-28 lg:py-32 bg-[#181411] text-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
          لماذا عيادات لوميير؟
        </h2>

        {/* Central Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          لأننا نجمع بين دقة المعايير الطبية وفن النحت التجميلي لتقديم نتائج طبيعية تبرز ملامحكِ الأصلية بدون أي مبالغة، تحت إشراف نخبة من استشاريات وأخصائيات الجلدية والتجميل المعتمدات بجدة.
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-right" dir="rtl">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">مواد أصلية 100% SFDA</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              جميع حقن الفيلر، البوتوكس، وإبر النضارة تفتح العبوة أمامكِ مع التحقق من الباركود وتاريخ الصلاحية لضمان أقصى درجات الأمان الطبي.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">أجهزة كانديلا الأصلية</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              نعتمد أحدث أجهزة كانديلا برو ماكس الأمريكية الأصلية بتقنية التبريد الديناميكي DCD لجلسات ليزر فعالة، مريحة، وبدون ألم.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">خبرة أكثر من 20 عاماً</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              امتداد لخبرة مجمع السامرية الطبي في جدة منذ عام 2001 مع أكثر من 19,500 مراجعة وتجربة ناجحة موثقة في 4 فروع رئيسية.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
