"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "هل أسعار العروض تشمل الكشفية وضريبة القيمة المضافة؟",
    answer:
      "نعم، كافة الأسعار المعروضة في الباقات رسمية وشاملة ضريبة القيمة المضافة (15%)، كما تتضمن الاستشارة المبدئية عند إتمام الإجراء في نفس الجلسة.",
    value: "item-1",
  },
  {
    question: "ما هي المواد المستخدمة في الحقن وهل تفتح العبوة أمامي؟",
    answer:
      "نلتزم في عيادات لوميير بأعلى معايير الأمان الطبي: جميع حقن الفيلر، البوتوكس، البروفايلو، والأكسوزوم أصلية 100% ومصرحة من الهيئة العامة للغذاء والدواء السعودية (SFDA)، وتُفتح العبوة أمامكِ مع التحقق من الباركود وتاريخ الصلاحية.",
    value: "item-2",
  },
  {
    question: "كيف يتم تحديد موعد جلسة الرتوش المجانية؟",
    answer:
      "لجلسات الليزر، تُحدد جلسة الرتوش تلقائياً خلال 10 إلى 14 يوماً من الجلسة الأساسية. أما لحقن الفيلر والبوتوكس، فيتم جدولة مراجعة تقييمية بعد أسبوعين للتأكد من التناسق المثالي وتقديم أي تعديل إضافي إن لزم.",
    value: "item-3",
  },
  {
    question: "ما هي طرق ووسائل الدفع المتاحة داخل الفروع؟",
    answer:
      "نوفر جميع وسائل الدفع المعتمدة: مدى (Mada)، فيزا وماستركارد، Apple Pay، بالإضافة إلى خطط التقسيط الميسر بدون فوائد (تمارا وتابي).",
    value: "item-4",
  },
  {
    question: "ما هي مواعيد العمل في فروع جدة؟",
    answer:
      "نستقبلكم في فروعنا (الروضة، طريق الملك، النسيم، السامر) يومياً من السبت إلى الخميس من الساعة 10:00 صباحاً وحتى 10:00 مساءً. الجمعة عطلة أسبوعية.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-24 sm:py-32 bg-[#141619] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            الأسئلة الشائعة
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full AccordionRoot space-y-4">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem
              key={value}
              value={value}
              className="bg-[#1c1a17] border border-white/10 rounded-2xl px-6 py-2 shadow-sm text-right"
            >
              <AccordionTrigger className="text-right text-base sm:text-lg font-bold text-white hover:text-[#C5A880] transition-colors py-4">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-zinc-300 font-normal leading-relaxed pt-2 pb-4">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
