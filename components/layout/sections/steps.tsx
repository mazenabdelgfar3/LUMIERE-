import React from "react";
import { ArrowLeft } from "lucide-react";

interface StepItem {
  number: string;
  isAccent?: boolean;
  title: string;
  description: string;
}

const stepsList: StepItem[] = [
  {
    number: "١",
    title: "تحددي رغبتكِ",
    description: "اختاري الإجراء المناسب لاحتياجكِ: إبر نضارة، تحديد الفك، فيلر شفايف، أو ليزر كانديلا.",
  },
  {
    number: "٢",
    title: "ننسق الموعد والفرع",
    description: "نحدد الفرع الأقرب لكِ في جدة (الروضة، طريق الملك، النسيم، السامر) والاستشارية المتخصصة في دقائق.",
  },
  {
    number: "٣",
    title: "استشارة وفحص أولاً",
    description: "جلسة كشف وتصميم خطة علاجية مخصصة لملامحكِ قبل البدء لضمان الأمان والنتيجة الطبيعية.",
  },
  {
    number: "٤",
    isAccent: true,
    title: "تتألقي بنتيجة طبيعية",
    description: "تنفيذ بأعلى معايير الدقة الطبية مع متابعة سريرية مستمرة وجلسة رتوش مجانية.",
  },
];

export const StepsSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-24 text-right bg-[#FAF9F6]">
      
      {/* Two-Tone Clean Heading */}
      <div className="mb-14 space-y-1">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
          أربع خطوات،
        </h2>
        <h3 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#C8A97A]">
          وإحنا معاكِ في كل واحدة.
        </h3>
      </div>

      {/* 4 Steps Grid (Light Luxury Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stepsList.map((step) => (
          <div
            key={step.number}
            className="bg-white border border-[#EBE7DF] rounded-3xl p-6 flex flex-col justify-between text-right space-y-5 shadow-sm transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Number Badge */}
            <div>
              {step.isAccent ? (
                <div className="w-11 h-11 rounded-2xl bg-[#C8A97A] text-zinc-950 font-bold text-lg flex items-center justify-center shadow-sm">
                  {step.number}
                </div>
              ) : (
                <div className="w-11 h-11 rounded-2xl border border-[#EBE7DF] text-zinc-800 font-bold text-lg flex items-center justify-center bg-[#FAF9F6]">
                  {step.number}
                </div>
              )}
            </div>

            {/* Step Content */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-zinc-950 tracking-tight">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Link Strip */}
      <div className="mt-12 pt-6 border-t border-[#EBE7DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        <span className="text-zinc-600 font-normal">
          مش متأكدة أي إجراء أو فرع يناسبكِ؟
        </span>

        <a
          href="https://wa.me/966920002024?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA%20%D9%84%D9%88%D9%85%D9%8A%D9%8A%D8%B1%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-[#C8A97A] hover:text-[#b89868] transition-colors group"
        >
          <span>تحدثي مع منسقة لوميير عبر واتساب مباشرة</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
  );
};
