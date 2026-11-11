"use client";
import React from "react";
import Link from "next/link";
import { openBookingModal } from "@/components/BookingModal";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full bg-[#8C6D46] text-white text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        
        {/* التخطيط العلوي للفوتر: 12 عمود على نمط عيادات أجمل */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start pb-12 border-b border-white/20">
          
          {/* العمود 1 (أقصى اليمين): شعار كبير واسم لوميير - 3 أعمدة */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
              لوميير
            </h2>
            <p className="text-sm sm:text-base font-bold tracking-widest text-white/90 uppercase">
              LUMIERE CLINICS
            </p>
            <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed pt-2">
              إشراف طبي متكامل وامتداد لخبرة مجمع السامرية الطبي في جدة منذ عام 2001.
            </p>
          </div>

          {/* العمود 2: روابط سريعة - 3 أعمدة */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight">
              روابط سريعة
            </h3>
            <ul className="space-y-3 text-base font-medium text-white/90">
              <li>
                <a href="#hero" className="hover:text-white transition-opacity hover:opacity-75 block">
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#branches"
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  عن العيادة والفروع
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-opacity hover:opacity-75 block">
                  طبيبات لوميير
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-opacity hover:opacity-75 block">
                  حالات قبل وبعد
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-opacity hover:opacity-75 block">
                  العروض والباقات
                </a>
              </li>
            </ul>
          </div>

          {/* العمود 3: خدماتنا - 3 أعمدة */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight">
              خدماتنا
            </h3>
            <ul className="space-y-3 text-base font-medium text-white/90">
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("الجلدية والليزر (كانديلا)");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  الجلدية والليزر (كانديلا)
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("الحقن التجميلي والفيلر");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  الحقن التجميلي والفيلر
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("جلسات النضارة والاكسوزوم");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  جلسات النضارة والاكسوزوم
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("العناية بالبشرة والتصبغات");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  العناية بالبشرة والتصبغات
                </a>
              </li>
            </ul>
          </div>

          {/* العمود 4: الإجراءات غير الجراحية - 3 أعمدة */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight">
              الإجراءات غير الجراحية
            </h3>
            <ul className="space-y-3 text-base font-medium text-white/90">
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("نحت وتحديد الفك (لومي فيس)");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  نحت وتحديد الفك (لومي فيس)
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("فيلر الشفايف الطبيعي");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  فيلر الشفايف الطبيعي
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("شد الوجه بالخيوط");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  شد الوجه بالخيوط
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookingModal("علاج الندبات وحب الشباب");
                  }}
                  className="hover:text-white transition-opacity hover:opacity-75 block"
                >
                  علاج الندبات وحب الشباب
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* بلوك التواصل المباشر (Contact Block) */}
        <div className="pt-10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-right">
          <div>
            <p className="text-base sm:text-lg font-medium text-white/95 mb-1.5">
              هل لديكِ سؤال أو استفسار؟ تواصلي معنا مباشرة عبر النموذج أو الهاتف:
            </p>
            <a
              href="mailto:info@lumiereclinics.sa"
              className="text-lg sm:text-xl font-bold text-white hover:underline transition-all block mb-4"
              dir="ltr"
            >
              info@lumiereclinics.sa
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-sm sm:text-base font-medium text-white/90 mb-1">
              اتصلي بنا (الرقم الموحد):
            </span>
            <a
              href="tel:920002024"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest hover:opacity-90 transition-opacity"
              dir="ltr"
            >
              920002024
            </a>
          </div>
        </div>

        {/* خط فاصل رفيع مطابق لستايل أجمل */}
        <div className="border-t border-white/30 my-6" />

        {/* الشريط السفلي: أيقونات التواصل الاجتماعي الدائرية وحقوق الملكية */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          
          {/* أيقونات التواصل الاجتماعي داخل دوائر بيضاء مفرغة (Instagram, TikTok, Snapchat, WhatsApp) */}
          <div className="flex items-center gap-3 order-2 sm:order-1">
            
            {/* Instagram */}
            <a
              href="https://instagram.com/lumieregroup.ksa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#8C6D46] transition-all shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@lumieregroup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#8C6D46] transition-all shadow-sm"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.35a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.28 8.28 0 0 0 5.12 1.79V7.42a4.83 4.83 0 0 1-1.35-.73z" />
              </svg>
            </a>

            {/* Snapchat */}
            <a
              href="https://snapchat.com/add/lumiereclinics"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#8C6D46] transition-all shadow-sm"
              aria-label="Snapchat"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.002 2c-3.568 0-6.002 2.766-6.002 5.762 0 1.258.441 2.457 1.092 3.328-.157.48-.521.895-.972 1.157-.457.266-.889.37-1.12.399-.219.027-.37.199-.347.417.025.234.195.385.404.42 1.01.168 1.93.81 2.395 1.666.273.504.66.793 1.147.857.348.046.732.012 1.15-.098.398-.106.84-.282 1.35-.453.605-.203 1.252-.379 1.903-.379.643 0 1.285.176 1.888.379.51.171.954.347 1.354.453.418.11.802.144 1.15.098.487-.064.874-.353 1.147-.857.465-.856 1.385-1.498 2.395-1.666.209-.035.379-.186.404-.42.023-.218-.128-.39-.347-.417-.231-.029-.663-.133-1.12-.399-.451-.262-.815-.677-.972-1.157.651-.871 1.092-2.07 1.092-3.328 0-2.996-2.434-5.762-6.002-5.762z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/966920002024"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#8C6D46] transition-all shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

          </div>

          {/* نص حقوق الملكية الفكرية */}
          <div className="order-1 sm:order-2 text-center sm:text-left">
            <p className="text-sm sm:text-base font-medium text-white/95">
              © جميع الحقوق محفوظة لـ عيادات لوميير (Lumiere Clinics) 2026
            </p>
          </div>

        </div>

        {/* توقيع المطور (Powered by Mazen Abdelgfar) */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-white text-xs sm:text-sm">
              POWERED BY MAZEN ABDELGFAR
            </span>
          </div>
          
          <div className="flex items-center gap-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/201022234967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors font-semibold"
              dir="ltr"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>01022234967</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mazenabdelgfar/?hl=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-pink-300 transition-colors font-semibold"
              aria-label="Mazen Abdelgfar Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-300" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
