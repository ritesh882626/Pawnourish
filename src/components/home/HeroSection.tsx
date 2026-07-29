'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin, ShieldCheck, Truck, TrendingUp, Store, Zap, CheckCircle2 } from 'lucide-react';
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
    <section className="relative z-10 w-full bg-white text-slate-900 border-b border-slate-100 min-h-[75vh]">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (Image shifted slightly right)                    */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[75vh] items-center overflow-hidden">
        
        {/* Desktop Dog Hero Image Container (Shifted slightly right: left-[520px] xl:left-[560px] translate-x-[40px]) */}
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

            {/* Shortened Direct Subheading */}
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
      {/* 2. MOBILE HERO LAYOUT (Dog image 100% larger, sitting BEHIND green strip) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-white min-h-[58vh] flex flex-col justify-between">
        
        {/* Content Container (Top Section) */}
        <div className="relative z-20 px-5 sm:px-6 text-left max-w-sm w-full pt-6 sm:pt-8">
          
          <div className="space-y-3.5">
            
            {/* Subheading Tag & Framer Motion Text Loop */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50/90 border border-emerald-200 px-3 py-1 rounded-full text-xs font-black text-emerald-800 shadow-2xs">
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
                    className="text-xs font-extrabold text-emerald-700 tracking-wide uppercase whitespace-nowrap flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{phrases[index]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.2]">
              Royal Canin & Drools <span className="text-emerald-700 font-extrabold">Authorized Dealer</span>
            </h1>

            {/* Supporting Line */}
            <div className="pt-0.5">
              <p className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-600 uppercase">
                Authorized B2B Supplier
              </p>
            </div>

            {/* Single Row Action Buttons */}
            <div className="flex flex-row items-center gap-2 pt-1 max-w-full">
              
              {/* Button 1: Become partner */}
              <Link
                href="/become-a-dealer"
                className="px-3.5 py-2.5 bg-[#005F56] hover:bg-[#004D46] active:scale-[0.98] text-white font-extrabold rounded-lg sm:rounded-xl text-xs shadow-md transition-all whitespace-nowrap text-center"
              >
                Become partner
              </Link>

              {/* Button 2: Get Quote */}
              <button
                onClick={() => openDealerModal()}
                className="px-3.5 py-2.5 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-950 font-extrabold rounded-lg sm:rounded-xl border border-slate-300 shadow-xs transition-all text-xs whitespace-nowrap text-center"
              >
                Get Quote
              </button>

            </div>

          </div>

        </div>

        {/* Mobile Dog Hero Image (100% larger scale-[2.1] sitting BEHIND the green TrustIndicators strip at z-10) */}
        <div className="relative w-full h-[48vh] min-h-[340px] max-w-xl mx-auto shrink-0 z-10 flex items-end justify-center -mb-20 sm:-mb-24 pointer-events-none">
          <Image
            src="/images/dalmatian_hero_mobile.png"
            alt="Pawnourish B2B Mobile Hero Dog Background"
            fill
            priority
            className="object-contain object-bottom scale-[2.1] translate-y-6"
            sizes="100vw"
          />
        </div>

      </div>

    </section>
  );
}
