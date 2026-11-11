"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  initials: string;
  name: string;
  procedure: string;
  branch: string;
  comment: string;
}

const reviewList: ReviewProps[] = [
  {
    initials: "س. غ",
    name: "سارة الغامدي",
    procedure: "تحديد الفك والذقن (لومي فيس)",
    branch: "فرع الروضة",
    comment:
      "تحديد زاوية الفك مع الطبيبة كان قمة في الإتقان والنعومة. النتيجة طبيعية جداً ووجهي محدد بدون أي مبالغة أو انتفاخ غير طبيعي. شكراً لوميير.",
  },
  {
    initials: "ن. ش",
    name: "نورة الشهري",
    procedure: "حقن البروفايلو الأصلي وإبر النضارة",
    branch: "فرع السامر",
    comment:
      "البروفايلو مع د. هبة فرق في نضارة وشد بشرتي بعد أسبوعين. العيادة راقية والتعامل محترم وفتحوا العبوة أمامي وتأكدت من السيريال.",
  },
  {
    initials: "ر. ب",
    name: "ريناد باحارث",
    procedure: "ليزر كانديلا جنتل برو ماكس",
    branch: "فرع النسيم",
    comment:
      "جهاز كانديلا الجديد تبريده ممتاز وما حسيت بأي ألم يذكر. التزام تام بالمواعيد ونظافة الأجهزة ممتازة، وجلسة الرتوش كانت دقيقة جداً.",
  },
  {
    initials: "ل. ح",
    name: "ليلى الحربي",
    procedure: "فيلر شفايف ريف (Reve Lips)",
    branch: "فرع الروضة",
    comment:
      "شفايفي رسمتها طلعت طبيعية ورقيقة جداً مع دكتورة منة. المتابعة بعد أسبوعين في جلسة الرتوش خلت النتيجة تدوم بأفضل شكل.",
  },
];

export const TestimonialSection = () => {
  return (
    <section id="before-after" className="container py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 bg-white text-right">
      <div className="max-w-xl mx-auto mb-14 space-y-2 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
          تجارب مراجعاتنا
        </h2>
        <div className="flex items-center justify-center gap-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-semibold text-zinc-700 mr-2">
            (متوسط تقييم 4.9 من 5 بناءً على 19,500+ مراجعة)
          </span>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full flex flex-col justify-between bg-[#F8F9FA] rounded-[2rem] p-6 text-right space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 font-bold text-xs">
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-950">
                        {review.name}
                      </h3>
                      <p className="text-xs text-zinc-600 font-medium">
                        {review.procedure}
                      </p>
                      <span className="text-[11px] text-zinc-400 block font-normal">
                        {review.branch}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
