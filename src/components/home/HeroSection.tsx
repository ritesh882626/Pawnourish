'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Floating kibble / treat particles for subtle background animation
const KIBBLE_PARTICLES = [
  { id: 1, top: '15%', left: '55%', size: 'w-3 h-3', delay: 0, duration: 5.2 },
  { id: 2, top: '35%', left: '78%', size: 'w-4 h-4', delay: 1.2, duration: 6.1 },
  { id: 3, top: '65%', left: '50%', size: 'w-2.5 h-2.5', delay: 2.4, duration: 4.8 },
  { id: 4, top: '25%', left: '88%', size: 'w-3.5 h-3.5', delay: 0.8, duration: 5.7 },
  { id: 5, top: '75%', left: '82%', size: 'w-3 h-3', delay: 3.1, duration: 6.5 },
  { id: 6, top: '50%', left: '60%', size: 'w-2 h-2', delay: 1.9, duration: 5.0 },
];

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
    <section className="relative w-full bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200 min-h-[75vh]">
      
      {/* ========================================================================= */}
      {/* BACKGROUND FLOATING ANIMATION LAYER (BEHIND HERO IMAGE z-5)               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {KIBBLE_PARTICLES.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ y: 0, opacity: 0.2, rotate: 0 }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
            style={{ top: particle.top, left: particle.left }}
            className={`absolute ${particle.size} bg-amber-600/40 rounded-full blur-[0.5px] shadow-sm`}
          />
        ))}
      </div>


      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (>= lg)                                            */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[75vh] items-center overflow-hidden">
        
        {/* Desktop Dog Hero Image Container */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex items-center justify-end pr-12 xl:pr-24">
          <div className="relative w-[50vw] max-w-[700px] h-[70vh] min-h-[500px]">
            <Image
              src="/images/golden_drools_hero.jpg"
              alt="Golden Retriever holding Drools SUPUPPY pack"
              fill
              priority
              className="object-contain object-center drop-shadow-2xl"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Desktop Hero Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-14 w-full">
          <div className="max-w-xl space-y-6 text-left">
            
            {/* Service Area Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 px-4 py-2 rounded-full text-xs font-black text-emerald-900 shadow-sm">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Official B2B Wholesale Supplier • Delhi NCR Region</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
              Authorized Wholesale Distributor of{' '}
              <span className="text-emerald-700 font-extrabold">
                Royal Canin & Drools
              </span>
            </h1>

            {/* Direct Subheading */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              Official wholesale supplier of 100% genuine Royal Canin & Drools in Delhi NCR. Guaranteed factory stock with 24-hour dispatch.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-4 pt-2">
              <Link
                href="/become-a-dealer"
                className="px-8 py-4 bg-[#005F56] hover:bg-emerald-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg text-base transition-all group whitespace-nowrap"
              >
                <Building2 className="w-5 h-5 shrink-0" /> 
                <span>Become a Dealer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <button
                onClick={() => openDealerModal()}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-black rounded-2xl border border-slate-300 shadow-md transition-all text-base flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-amber-600 shrink-0" /> 
                <span>Rate Card</span>
              </button>
            </div>

          </div>
        </div>

      </div>


      {/* ========================================================================= */}
      {/* 2. MOBILE HERO LAYOUT (< lg)                                              */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-slate-50 overflow-hidden min-h-[65vh] flex flex-col justify-between pt-6 pb-4">
        
        {/* Content Container (Top Section) */}
        <div className="relative z-20 px-5 sm:px-6 text-left max-w-sm w-full">
          
          <div className="space-y-3.5">
            
            {/* Subheading Tag & Framer Motion Text Loop */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 border border-emerald-300 px-3 py-1 rounded-full text-xs font-black text-emerald-900 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-emerald-700 animate-pulse shrink-0" />
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
                    className="text-xs font-extrabold text-emerald-800 tracking-wide uppercase whitespace-nowrap flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{phrases[index]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-[1.2]">
              Royal Canin & Drools <span className="text-emerald-700 font-extrabold">Authorized Dealer</span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-2 pt-1 max-w-full">
              <Link
                href="/become-a-dealer"
                className="px-4 py-3 bg-[#005F56] hover:bg-emerald-800 active:scale-[0.98] text-white font-extrabold rounded-xl text-xs shadow-md transition-all whitespace-nowrap text-center"
              >
                Become Partner
              </Link>

              <button
                onClick={() => openDealerModal()}
                className="px-4 py-3 bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-950 font-black rounded-xl border border-slate-300 shadow-xs transition-all text-xs whitespace-nowrap text-center"
              >
                Get Quote
              </button>
            </div>

          </div>

        </div>

        {/* Mobile Dog Hero Image (z-10) */}
        <div className="relative w-full h-[45vh] min-h-[320px] mx-auto shrink-0 z-10 flex items-end justify-center overflow-hidden pointer-events-none mt-4">
          <Image
            src="/images/golden_drools_hero.jpg"
            alt="Golden Retriever holding Drools SUPUPPY pack"
            fill
            priority
            className="object-contain object-bottom drop-shadow-xl"
            sizes="100vw"
          />
        </div>

      </div>

    </section>
  );
}
