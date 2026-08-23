'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin, Zap, CheckCircle2, Users, ShieldCheck, Truck, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const { openDealerModal } = useStore();

  // Dynamic text animation phrases for B2B pet food platform
  const phrases = [
    "Factory Direct Supply for Retailers",
    "24-Hour Express Delhi NCR Dispatch",
    "100% Genuine Royal Canin & Drools",
    "Maximum B2B Retailer Margins"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-100 min-h-[75vh]">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (Exact Original Desktop Hero - 100% Untouched)      */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[75vh] items-center overflow-hidden">
        
        {/* Desktop Dog Hero Image Container */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="max-w-[1536px] mx-auto px-6 h-full relative">
            <div className="absolute left-[520px] xl:left-[560px] right-0 top-[-10%] bottom-0 flex items-center justify-end pr-0 translate-x-[40px]">
              <div className="relative w-full h-[110vh] max-w-[1800px]">
                <Image
                  src="/images/landscape_hero_section_image.png"
                  alt="Pawnourish B2B Wholesale Hero Dog Background Desktop"
                  fill
                  priority
                  className="object-contain object-right-center scale-150"
                  sizes="1800px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 w-full">
          <div className="max-w-xl space-y-6 text-left">
            
            {/* Service Area Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 shadow-xs">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Official B2B Wholesale Supplier • Delhi NCR Region</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-slate-900">
              Authorized Wholesale Distributor of{' '}
              <span className="text-emerald-700 font-extrabold">
                Royal Canin & Drools
              </span>
            </h1>

            {/* Direct Subheading */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Official wholesale supplier of 100% genuine Royal Canin & Drools in Delhi NCR. Guaranteed factory stock with 24-hour dispatch.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-row items-center gap-4 pt-2">
              <Link
                href="/become-a-dealer"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg text-base transition-all group whitespace-nowrap"
              >
                <Building2 className="w-5 h-5 shrink-0" /> 
                <span>Become a Dealer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <button
                onClick={() => openDealerModal()}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-2xl border border-slate-300 shadow-md transition-all text-base flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-amber-600 shrink-0" /> 
                <span>Rate Card</span>
              </button>
            </div>

          </div>
        </div>

      </div>


      {/* ========================================================================= */}
      {/* 2. MOBILE HERO LAYOUT (Exact User Specified Mobile Studio Image #f9f3ea)   */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-[#f9f3ea] overflow-hidden flex flex-col justify-between pt-6 pb-2">
        
        {/* Content Container (Top Section z-20) */}
        <div className="relative z-20 px-5 sm:px-6 text-left max-w-sm w-full">
          
          <div className="space-y-3">
            
            {/* Subheading Tag & Framer Motion Text Loop */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-white/90 border border-emerald-200 px-3 py-1 rounded-full text-xs font-black text-emerald-800 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-emerald-600 animate-pulse shrink-0" />
                <span>PAWNOURISH® B2B</span>
              </div>

              {/* Dynamic B2B Animated Text */}
              <div className="h-6 overflow-hidden relative flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-xs font-black text-emerald-800 tracking-wide uppercase whitespace-nowrap flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{phrases[index]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
              Royal Canin & Drools <span className="text-emerald-700 font-extrabold">Authorized Dealer</span>
            </h1>

            {/* Supporting Line */}
            <div className="pt-0.5">
              <p className="text-xs font-black tracking-wider text-slate-600 uppercase">
                Authorized B2B Supplier
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-2 pt-1 max-w-full">
              <Link
                href="/become-a-dealer"
                className="px-4 py-2.5 bg-[#005F56] hover:bg-[#004D46] active:scale-[0.98] text-white font-extrabold rounded-xl text-xs shadow-md transition-all whitespace-nowrap text-center flex items-center gap-1.5"
              >
                <span>Become partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => openDealerModal()}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-950 font-extrabold rounded-xl border border-slate-300 shadow-xs transition-all text-xs whitespace-nowrap text-center"
              >
                Get Quote
              </button>
            </div>

          </div>

        </div>

        {/* Mobile Studio Hero Image (z-10, Seamless #f9f3ea background fit) */}
        <div className="relative w-full h-[46vh] min-h-[360px] mx-auto shrink-0 z-10 flex items-end justify-center overflow-hidden pointer-events-none mt-2 -mb-2">
          <Image
            src="/images/studio_drools_mobile_hero.png"
            alt="Pawnourish B2B Mobile Hero Studio Golden Retriever holding Drools SUPUPPY pack"
            fill
            priority
            className="object-contain object-bottom scale-110 translate-y-1"
            sizes="100vw"
          />
        </div>

        {/* Bottom Green Stat Bar (z-30) */}
        <div className="relative z-30 mx-3 sm:mx-4 mt-1 mb-2 bg-[#004D43] text-white rounded-2xl p-3 border border-emerald-700/60 shadow-xl grid grid-cols-4 gap-1 text-center">
          
          <div className="flex flex-col items-center space-y-0.5">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-black text-white leading-tight">500+</span>
            <span className="text-[8px] font-bold text-emerald-200 uppercase tracking-tight leading-none">NCR Retailers</span>
          </div>

          <div className="flex flex-col items-center space-y-0.5 border-l border-emerald-700/60 pl-1">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-black text-white leading-tight">100%</span>
            <span className="text-[8px] font-bold text-emerald-200 uppercase tracking-tight leading-none">Authentic Stock</span>
          </div>

          <div className="flex flex-col items-center space-y-0.5 border-l border-emerald-700/60 pl-1">
            <Truck className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-black text-white leading-tight">24-Hour</span>
            <span className="text-[8px] font-bold text-emerald-200 uppercase tracking-tight leading-none">NCR Dispatch</span>
          </div>

          <div className="flex flex-col items-center space-y-0.5 border-l border-emerald-700/60 pl-1">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-black text-white leading-tight">Max</span>
            <span className="text-[8px] font-bold text-emerald-200 uppercase tracking-tight leading-none">Retailer Margins</span>
          </div>

        </div>

      </div>

    </section>
  );
}
