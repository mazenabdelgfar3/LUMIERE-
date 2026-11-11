"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Syringe, Scissors, Zap, Check, ArrowLeft } from "lucide-react";

interface ServiceItem {
  id: string;
  category: "skin" | "filler" | "threads" | "laser";
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  highlight?: string;
  perks: string[];
}

const serviceCategories = [
  { id: "all", label: "جميع الأقسام", icon: Sparkles },
  { id: "skin", label: "جلسات النضارة والبروفايلو", icon: Syringe },
  { id: "filler", label: "لومي فيس وفيلر الشفايف", icon: Sparkles },
  { id: "threads", label: "الشد بالخيوط بدون جراحة", icon: Scissors },
  { id: "laser", label: "إزالة الشعر بالليزر", icon: Zap },
];

const serviceItems: ServiceItem[] = [
  {
    id: "profhilo",
    category: "skin",
    title: "حقن البروفايلو الأصلي (Profhilo)",
    subtitle: "تقنية الـ 5 نقاط الإيطالية لشد وترميم خلايا بشرة الوجه والرقبة",
    price: 1499,
    originalPrice: 2100,
    highlight: "الأكثر طلباً للنضارة",
    perks: ["تحفيز الإيلاستين والكولاجين", "ترطيب عميق وتوحيد اللون", "نتائج طبيعية وفورية"],
  },
  {
    id: "magic",
    category: "skin",
    title: "إبرة النضارة ماجيك",
    subtitle: "تركيبة حيوية مكثفة تعيد الحيوية للبشرة المجهدة والباهتة",
    price: 1199,
    originalPrice: 1600,
    perks: ["إشراقة ونعومة حريرية", "مناسبة قبل المناسبات", "تحفيز امتلاء البشرة"],
  },
  {
    id: "skin-booster",
    category: "skin",
    title: "إبرة التوتيا الفائقة (Skin Booster)",
    subtitle: "معزز ترطيب عالي النقاء لمنح البشرة مظهر زجاجي ناعم",
    price: 1149,
    originalPrice: 1500,
    perks: ["حمض الهيالورونيك النقي", "ترطيب عميق متوازن", "تحسين ملمس ومسام الجلد"],
  },
  {
    id: "exosomes-sapphire",
    category: "skin",
    title: "إبرة الياقوت والأكسوزوم",
    subtitle: "أحدث ثورة في الطب التجديدي لعلاج التصبغات وتضييق المسام",
    price: 749,
    originalPrice: 1100,
    highlight: "علاج التصبغات والمسام",
    perks: ["إعادة ترميم خلايا الجلد", "تقليل التصبغات وآثار الحبوب", "نضارة فائقة بدون قشور"],
  },
  {
    id: "lumi-face",
    category: "filler",
    title: "لومي فيس ناعم (تحديد الفك والذقن)",
    subtitle: "Jawline & Chin Contour لنحت ملامح الوجه وتحديد زاوية الفك",
    price: 1899,
    originalPrice: 2600,
    highlight: "نحت الملامح الطبيعي",
    perks: ["تحديد دقيق لزاوية الفك", "مواد فيلر أوروبية أصلية", "فتح العبوة أمام المراجعة"],
  },
  {
    id: "reve-lips",
    category: "filler",
    title: "فيلر شفايف ريف (Reve Lips - 1 مل)",
    subtitle: "رسم الشفايف الروسي أو الفرنسي المتناسق مع رتوش مجانية",
    price: 799,
    originalPrice: 1300,
    highlight: "يشمل جلسة رتوش",
    perks: ["1 مل فيلر أصلي معتمد", "رسم ملامح طبيعي جذاب", "جلسة رتوش مجانية بعد أسبوعين"],
  },
  {
    id: "botox",
    category: "filler",
    title: "بوتوكس تجاعيد الجبهة وحول العين",
    subtitle: "إخفاء الخطوط التعبيرية وتجاعيد الابتسامة بلمسة شبابية ناعمة",
    price: 699,
    originalPrice: 1100,
    perks: ["إزالة خطوط الجبهة والتعبير", "رفع زاوية العين والحواجب", "مواد بوتوكس معتمدة"],
  },
  {
    id: "threads-4",
    category: "threads",
    title: "باقة 4 خيوط شد الوجه التجميلية",
    subtitle: "رفع الترهلات الخفيفة والمتوسطة وتحفيز إنتاج الكولاجين",
    price: 1249,
    originalPrice: 1800,
    perks: ["شد ورفع فوري للخدود", "خيوط طبية قابلة للامتصاص", "بدون جراحة أو فترة نقاهة"],
  },
  {
    id: "threads-full",
    category: "threads",
    title: "باقة شد الوجه والفك بالكامل",
    subtitle: "باقة النحت الكامل للترهلات وتحديد اللغلوغ والرقبة",
    price: 3049,
    originalPrice: 4200,
    highlight: "باقة النحت الكامل",
    perks: ["نحت كامل لخط الفك واللغلوغ", "رفع زوايا الفم والخدين", "نتائج ملموسة تدوم طويلاً"],
  },
  {
    id: "single-thread",
    category: "threads",
    title: "الخيط التجميلي الفردي",
    subtitle: "إجراء تكميلي موضعي حسب توصية وتوجيه الطبيبة الاستشارية",
    price: 449,
    originalPrice: 650,
    perks: ["شد موضعي مستهدف", "إجراء سريع خلال 20 دقيقة", "إشراف طبي متكامل"],
  },
  {
    id: "laser-full",
    category: "laser",
    title: "ليزر كانديلا جسم كامل + رتوش",
    subtitle: "بأحدث جهاز كانديلا جنتل برو ماكس مع تبريد ديناميكي",
    price: 514,
    originalPrice: 900,
    highlight: "جنتل برو ماكس الأصلي",
    perks: ["تبريد هوائي مريح وبدون ألم", "شامل جلسة رتوش مجانية", "أخصائيات ليزر مدربات ومؤهلات"],
  },
  {
    id: "laser-2-sessions",
    category: "laser",
    title: "باقة جلستين جسم كامل + 2 رتوش",
    subtitle: "الباقة التوفيرية لنتائج متسارعة ودائمة على مدار الموسم",
    price: 899,
    originalPrice: 1600,
    highlight: "وفرتي 701 ريال",
    perks: ["جلستان أساسيتان كاملتان", "جلستا رتوش مجانيتان", "أقصى فاعلية في إيقاف نمو الشعر"],
  },
];

export const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? serviceItems
      : serviceItems.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="container py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-bold text-zinc-950 tracking-tight">
          أقسام الخدمات الطبية
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 font-normal">
          اختاري الإجراء المناسب للاطلاع على الأسعار والتقنيات التجميلية المعتمدة
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {serviceCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 px-5 py-2.5 ${
                isActive
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-[#F4F5F7] text-zinc-700 hover:bg-zinc-200/80"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4F5F7] rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-medium text-zinc-700 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {item.category === "skin" && "النضارة والبروفايلو"}
                  {item.category === "filler" && "الفيلر والملامح"}
                  {item.category === "threads" && "الشد بالخيوط"}
                  {item.category === "laser" && "الليزر كانديلا"}
                </span>
                {item.highlight && (
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-zinc-950 tracking-tight mt-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed font-normal">
                {item.subtitle}
              </p>

              <div className="space-y-1.5 my-4 pt-3 border-t border-zinc-200/70">
                {item.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-600 font-normal">
                    <Check className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200/70">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-zinc-950">{item.price}</span>
                  <span className="text-xs text-zinc-500 mr-1">ريال</span>
                </div>
                <div className="text-xs text-zinc-400 line-through">
                  {item.originalPrice} ريال
                </div>
              </div>

              <Button
                asChild
                className="w-full rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm h-11 transition-all"
              >
                <a
                  href={`https://wa.me/966920002024?text=${encodeURIComponent(
                    `مرحباً عيادات لوميير، أرغب في حجز عرض: ${item.title} بسعر ${item.price} ريال`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>احجزي هذا الإجراء</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
