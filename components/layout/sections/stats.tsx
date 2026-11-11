"use client";
import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  isDecimal?: boolean;
  label: string;
  sublabel?: string;
}

const statsData: StatItem[] = [
  {
    target: 11,
    prefix: "+",
    suffix: "",
    label: "سنة خبرة موثوقة",
    sublabel: "مجمع السامرية منذ 2001",
  },
  {
    target: 100,
    prefix: "",
    suffix: "%",
    label: "مواد أصلية SFDA",
    sublabel: "تفتح العبوة أمامكِ",
  },
  {
    target: 4,
    prefix: "",
    suffix: " فروع",
    label: "فروع تغطي جدة",
    sublabel: "الروضة • طريق الملك • النسيم • السامر",
  },
  {
    target: 19.5,
    prefix: "+",
    suffix: "k",
    isDecimal: true,
    label: "مراجعة وتجربة موثقة",
    sublabel: "تقييم سريري معتمد",
  },
];

export const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Smooth count-up animation over 1.6 seconds
          const duration = 1600;
          const startTime = performance.now();

          const animateCounts = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              statsData.map((item) => {
                const val = easeOut * item.target;
                return item.isDecimal
                  ? Math.round(val * 10) / 10
                  : Math.round(val);
              })
            );

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF9F6] border-y border-[#EBE7DF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#EBE7DF] sm:divide-x sm:divide-x-reverse sm:divide-[#EBE7DF]">
          {statsData.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center py-10 sm:py-14 px-4 transition-all duration-700 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Animated Stat Value */}
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-none tabular-nums font-sans">
                {item.prefix}
                {item.isDecimal ? counts[idx].toFixed(1) : counts[idx]}
                {item.suffix}
              </span>

              {/* Label */}
              <span className="text-xs sm:text-sm lg:text-base font-bold text-zinc-800 mt-3">
                {item.label}
              </span>

              {/* Sublabel */}
              {item.sublabel && (
                <span className="text-[11px] sm:text-xs text-zinc-400 font-normal mt-1">
                  {item.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
