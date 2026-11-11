"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { openBookingModal } from "@/components/BookingModal";
import { X, Phone, Menu } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 flex items-center ${
          isScrolled
            ? "bg-white shadow-sm border-b border-zinc-200"
            : "bg-[#181411]/90 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full h-full flex items-center justify-between">
          
          {/* أقصى اليمين: اللوجو واسم "عيادات لوميير" نظيف ومقروء */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`relative w-11 h-11 rounded-full overflow-hidden border shadow-sm flex-shrink-0 transition-colors ${
                isScrolled
                  ? "border-[#9A7B4F]/40 bg-white"
                  : "border-[#C5A880]/50 bg-black"
              }`}
            >
              <Image
                src="/lumiere-logo.jpg"
                alt="عيادات لوميير"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span
              className={`font-extrabold text-xl sm:text-2xl tracking-tight leading-none transition-colors ${
                isScrolled ? "text-[#9A7B4F]" : "text-white"
              }`}
            >
              عيادات لوميير
            </span>
          </Link>

          {/* أقصى اليسار: عناصر التحكم وزر الحجز المخصص للديسكتوب فقط */}
          <div className="flex items-center gap-4 sm:gap-6" dir="ltr">
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              <div className="flex flex-col justify-center gap-1.5">
                <span
                  className={`w-7 h-[3px] rounded-full transition-colors ${
                    isScrolled ? "bg-[#9A7B4F]" : "bg-white"
                  }`}
                />
                <span
                  className={`w-7 h-[3px] rounded-full transition-colors ${
                    isScrolled ? "bg-[#9A7B4F]" : "bg-white"
                  }`}
                />
                <span
                  className={`w-7 h-[3px] rounded-full transition-colors ${
                    isScrolled ? "bg-[#9A7B4F]" : "bg-white"
                  }`}
                />
              </div>
            </button>

            {/* زر اللغة EN ظاهر في الموبايل والديسكتوب بأقصى اليسار بجانب المنيو */}
            <button
              onClick={() => alert("النسخة الإنجليزية قريباً")}
              className={`font-extrabold text-sm sm:text-base tracking-wider transition-colors cursor-pointer px-1 py-1 ${
                isScrolled
                  ? "text-zinc-950 hover:text-[#9A7B4F]"
                  : "text-white hover:text-[#C5A880]"
              }`}
            >
              EN
            </button>

            {/* زر حجز المواعيد: مخفي تماماً في الموبايل (< md) ويظهر في الديسكتوب فقط */}
            <button
              onClick={() => openBookingModal()}
              className="hidden md:inline-flex rounded-full px-8 py-3 bg-[#C5A880] hover:bg-[#b5966c] text-zinc-950 font-extrabold text-sm sm:text-base shadow-md transition-all transform hover:scale-[1.02] cursor-pointer border-none"
            >
              حجز المواعيد
            </button>

          </div>

        </div>
      </header>

      {/* القائمة الجانبية المنبثقة */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-start bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" 
          dir="rtl"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="relative w-full max-w-sm h-full bg-[#141619] border-l border-[#C5A880]/30 p-8 flex flex-col justify-between text-right text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-bold text-xl text-[#DFC298]">عيادات لوميير</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 py-6">
              <a 
                href="#hero" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold hover:text-[#C5A880] transition-colors"
              >
                الرئيسية
              </a>
              <a 
                href="#before-after" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold hover:text-[#C5A880] transition-colors"
              >
                حالات قبل وبعد
              </a>
              <a 
                href="#pricing" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold hover:text-[#C5A880] transition-colors"
              >
                العروض والباقات
              </a>
              <a 
                href="#branches" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold hover:text-[#C5A880] transition-colors"
              >
                فروعنا بجدة
              </a>
            </div>

            {/* Footer / CTA in Menu */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full py-3.5 rounded-full bg-[#C5A880] text-zinc-950 font-extrabold text-base text-center shadow-lg hover:bg-[#b5966c] cursor-pointer border-none"
              >
                حجز المواعيد
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span dir="ltr">920002024</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
