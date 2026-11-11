"use client";
import React from "react";
import { openBookingModal } from "@/components/BookingModal";

interface Offer {
  title: string;
  price: number;
}

const officialOffers: Offer[] = [
  {
    title: "لومي فيس لتحديد الفك والذقن",
    price: 1899,
  },
  {
    title: "فيلر شفايف ريف",
    price: 799,
  },
  {
    title: "باقة 4 خيوط لشد الوجه",
    price: 1249,
  },
  {
    title: "إبرة الياقوت والأكسوزوم للنضارة",
    price: 749,
  },
  {
    title: "ليزر كانديلا جسم كامل + رتوش",
    price: 514,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full bg-[#FAF8F5] py-20 sm:py-28 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            العروض والباقات
          </h2>
        </div>

        {/* شبكة الكروت الفندقية الفاخرة - 3 عناصر فقط لكل كارت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {officialOffers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-3xl p-8 border border-[#E8DFD1] hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-right"
            >
              {/* 1. اسم العرض */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 leading-snug">
                  {offer.title}
                </h3>
              </div>

              {/* 2. السعر النهائي فقط */}
              <div className="my-6">
                <span className="text-4xl sm:text-5xl font-bold text-[#8C6D46] tracking-tight">
                  {offer.price}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#8C6D46] mr-2">
                  ريال
                </span>
              </div>

              {/* 3. زر الحجز المباشر */}
              <div>
                <button
                  onClick={() => openBookingModal(offer.title)}
                  className="w-full py-4 rounded-2xl bg-zinc-900 hover:bg-[#8C6D46] text-white font-bold text-base transition-colors cursor-pointer border-none text-center shadow-md hover:shadow-lg"
                >
                  احجزي العرض الآن
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
