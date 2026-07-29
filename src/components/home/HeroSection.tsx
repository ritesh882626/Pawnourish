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
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-100 min-h-[75vh]">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (75vh height, desktop background image enlarged +30%) */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[75vh] items-center">
        
        {/* Desktop Product Bags Image Container (Enlarged by +30%: max-w-[1360px] h-[85vh]) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="max-w-[1536px] mx-auto px-6 h-full relative">
            <div className="absolute left-[440px] xl:left-[480px] right-0 top-[2%] bottom-0 flex items-start justify-end pr-2">
              <div className="relative w-full h-[85vh] max-w-[1360px]">
                <Image
                  src="/images/landscape_hero_section_image.png"
                  alt="Pawnourish B2B Wholesale Hero Background Desktop"
                  fill
                  priority
                  className="object-contain object-right-top"
                  sizes="1360px"
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
      {/* 2. MODERN MOBILE HERO LAYOUT (No Image, Animated B2B Text & Interactive Icons) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-slate-950 text-white overflow-hidden min-h-[85vh] flex flex-col justify-center px-5 sm:px-6 py-12">
        
        {/* Modern Background Radial Ambient Glows */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#005F56_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-sm mx-auto w-full space-y-6 text-left my-auto">
          
          {/* Subheading & Animated B2B Text Tag */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-black text-emerald-400 backdrop-blur-md shadow-xs">
              <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <span>PAWNOURISH® B2B</span>
            </div>

            {/* Framer Motion Text Animation Loop */}
            <div className="h-7 overflow-hidden relative flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-xs sm:text-sm font-extrabold text-emerald-300 tracking-wide uppercase whitespace-nowrap flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{phrases[index]}</span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Main Headline with Emerald Glow */}
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.18]"
          >
            Royal Canin & Drools{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Authorized B2B Partner
            </span>
          </motion.h1>

          {/* Supporting Line */}
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Official wholesale supplier of 100% factory-genuine pet food for pet stores, clinics & vets across Delhi NCR.
          </p>

          {/* Interactive B2B Feature Badges Grid (4 Animated Icon Badges) */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-xs">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-white leading-tight">100% Authentic</div>
                <div className="text-[9px] font-semibold text-slate-400">Direct Brand Stock</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-xs">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-white leading-tight">24H Express</div>
                <div className="text-[9px] font-semibold text-slate-400">NCR Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-xs">
              <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-teal-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-white leading-tight">Max Profit</div>
                <div className="text-[9px] font-semibold text-slate-400">Retailer Margins</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-xs">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Store className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black text-white leading-tight">500+ Outlets</div>
                <div className="text-[9px] font-semibold text-slate-400">Supplied in NCR</div>
              </div>
            </div>
          </div>

          {/* Single Row Action Buttons */}
          <div className="flex flex-row items-center gap-2.5 pt-2">
            <Link
              href="/become-a-dealer"
              className="flex-1 px-4 py-3 bg-[#005F56] hover:bg-emerald-600 active:scale-[0.98] text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>Become Partner</span>
            </Link>

            <button
              onClick={() => openDealerModal()}
              className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 active:scale-[0.98] text-white font-extrabold rounded-xl text-xs sm:text-sm backdrop-blur-md transition-all text-center flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Get Rate Card</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
