'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { 
  ShieldCheck, 
  Truck, 
  TrendingUp, 
  Stethoscope, 
  Calendar, 
  Wallet, 
  Check, 
  FileText, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
}

const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "100% Genuine Guaranteed",
    shortTitle: "Genuine Stock",
    tagline: "Direct Manufacturer Lines",
    description: "Receive only 100% authentic Royal Canin and Drools products sourced directly from official manufacturer facilities with full GST batch traceability.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "24-Hour Dispatch Fleet",
    shortTitle: "24h Dispatch",
    tagline: "Same-Day Delivery in NCR",
    description: "Dedicated warehouse fleet across Delhi, Gurugram, Noida, Ghaziabad & Faridabad ensures your store shelves stay fully stocked with zero downtime.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Maximum Retailer Margins",
    shortTitle: "Higher Margins",
    tagline: "Slab Discounts & Rebates",
    description: "Highly competitive wholesale pricing slabs and volume rebate structures designed specifically to maximize pet shop profitability.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Prescription Diets in Stock",
    shortTitle: "Rx Diets",
    tagline: "Veterinary Diets Ready",
    description: "Instant access to high-demand veterinary clinical diets (Gastrointestinal, Renal, Hypoallergenic) when pet parents and clinics need them.",
    icon: Stethoscope,
  },
  {
    id: 5,
    title: "Fresh Manufacturing Dates",
    shortTitle: "Fresh Inventory",
    tagline: "Long Remaining Shelf Life",
    description: "Direct manufacturer inventory turnover guarantees maximum remaining product shelf life, building customer trust for your store.",
    icon: Calendar,
  },
  {
    id: 6,
    title: "Flexible Retailer Credit",
    shortTitle: "Flexible Credit",
    tagline: "Custom Credit Cycles",
    description: "Tailored credit payment terms and Net billing options designed to support steady retail cash flow and long-term business partnerships.",
    icon: Wallet,
  },
];

// Custom Dog Food Bag SVG Icon (Emerald Green Theme)
const DogFoodBagSVG = ({ className = "w-5 h-5", active = false }: { className?: string; active?: boolean }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M6 7.5L7.4 20.1C7.5 21.2 8.4 22 9.5 22H14.5C15.6 22 16.5 21.2 16.6 20.1L18 7.5H6Z" 
      fill={active ? "#10B981" : "#F8FAFC"} 
      stroke={active ? "#047857" : "#94A3B8"} 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <path 
      d="M5 4.5C5 3.7 5.7 3 6.5 3H17.5C18.3 3 19 3.7 19 4.5V7.5H5V4.5Z" 
      fill={active ? "#6EE7B7" : "#E2E8F0"} 
      stroke={active ? "#047857" : "#94A3B8"} 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <circle cx="12" cy="14.5" r="1.8" fill={active ? "#064E3B" : "#64748B"} />
    <circle cx="10.2" cy="12" r="0.9" fill={active ? "#064E3B" : "#64748B"} />
    <circle cx="13.8" cy="12" r="0.9" fill={active ? "#064E3B" : "#64748B"} />
    <circle cx="8.8" cy="13.8" r="0.8" fill={active ? "#064E3B" : "#64748B"} />
    <circle cx="15.2" cy="13.8" r="0.8" fill={active ? "#064E3B" : "#64748B"} />
  </svg>
);

export default function WholesaleAdvantage() {
  const { openDealerModal } = useStore();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatic repetitive animation loop (changes step every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BENEFITS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeBenefit = BENEFITS[activeIndex] || BENEFITS[0];
  const progressPercentage = (activeIndex / (BENEFITS.length - 1)) * 100;

  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-24">
      
      {/* Background: Linear/Vercel style ultra-subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-emerald-500/[0.03] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-emerald-400/[0.03] rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Retailer Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Your Store. <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Powered by Pawnourish.</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Everything a modern pet retailer needs—from genuine products and reliable inventory to higher margins and dependable support—all delivered through one trusted wholesale partner.
          </p>
        </div>


        {/* ================= MAIN INTERACTIVE STORYTELLING GRID (Desktop & Mobile) ================= */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Column (Desktop 5-cols / 40%): Timeline List */}
          <div className="lg:col-span-5 bg-slate-50/90 backdrop-blur-2xl border border-slate-200/90 rounded-[2rem] p-5 lg:p-6 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            
            {/* Background Line Track (Centered at left-[44px]) */}
            <div className="absolute left-[44px] top-10 bottom-10 w-2 bg-slate-200/80 rounded-full" />
            
            {/* Active Green Progress Fill (Centered at left-[44px]) */}
            <motion.div
              animate={{ height: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-[44px] top-10 w-2 bg-emerald-500 rounded-full shadow-[0_0_16px_rgba(16,185,129,0.6)] origin-top"
            />

            {/* 6 Milestone Nodes */}
            <div className="relative flex flex-col justify-between h-full z-10 py-1 space-y-3">
              {BENEFITS.map((benefit, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx < activeIndex;

                return (
                  <motion.div
                    key={benefit.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsPaused(true);
                    }}
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      x: isActive ? 6 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-center gap-3.5 cursor-pointer p-2.5 rounded-2xl transition-all ${
                      isActive 
                        ? "bg-white border border-emerald-200 shadow-lg shadow-emerald-500/10" 
                        : "hover:bg-white/60"
                    }`}
                  >
                    {/* Dog Food Bag SVG Icon Marker (w-10 h-10, centered on left-[44px]) */}
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                        isActive 
                          ? "bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.5)] border-2 border-emerald-500" 
                          : isPassed 
                          ? "bg-emerald-50 border border-emerald-300" 
                          : "bg-slate-200/80 border border-slate-300"
                      }`}
                    >
                      {isPassed ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <DogFoodBagSVG active={isActive || isPassed} className="w-5 h-5" />
                      )}
                    </div>

                    {/* Milestone Text Info */}
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                        isActive ? "text-emerald-700 font-black" : isPassed ? "text-slate-700" : "text-slate-400"
                      }`}>
                        0{benefit.id} {benefit.tagline}
                      </span>
                      <span className={`text-xs sm:text-sm font-extrabold leading-tight ${
                        isActive ? "text-slate-900" : isPassed ? "text-slate-800" : "text-slate-400 font-medium"
                      }`}>
                        {benefit.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>


          {/* Right Column (Desktop 7-cols / 60%): Hero Drools Pack + Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            
            {/* Hero Drools Product Pack (Floating Motion) */}
            <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="relative w-[280px] sm:w-[340px] h-[300px] sm:h-[370px] filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.16)]"
              >
                <Image
                  src="/images/drools_packaging.png"
                  alt="Drools Product Pack Hero"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1200px) 300px, 400px"
                />
              </motion.div>
            </div>

            {/* Active Story Card Display */}
            <div className="shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/95 backdrop-blur-2xl border-2 border-emerald-100 rounded-3xl p-5 sm:p-6 shadow-xl shadow-emerald-500/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm">
                    {React.createElement(activeBenefit.icon, { className: "w-7 h-7" })}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Retailer Advantage 0{activeBenefit.id}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
                        <DogFoodBagSVG active className="w-4 h-4" /> {activeBenefit.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {activeBenefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {activeBenefit.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>


        {/* ================= CTA BANNER (Positioned 100px Down from Retailer Journey section) ================= */}
        <div className="mt-[100px]">
          <motion.div
            animate={{
              borderColor: activeIndex === BENEFITS.length - 1 ? "#10B981" : "#334155",
              boxShadow: activeIndex === BENEFITS.length - 1 ? "0 10px 30px rgba(16, 185, 129, 0.25)" : "0 10px 25px rgba(0, 0, 0, 0.15)",
            }}
            className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all border border-slate-800"
          >
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <span>Ready to Grow Your Pet Store?</span>
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Become a trusted Pawnourish retail partner today and get verified dealer pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => openDealerModal()}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <span>Become a Dealer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openDealerModal()}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Request Wholesale Pricing</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
