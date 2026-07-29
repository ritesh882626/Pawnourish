'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
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
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Scroll Progress within sticky container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001
  });

  const progressPercent = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const packFloat = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -12, 0, -12, 0, -12]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const index = Math.min(
        BENEFITS.length - 1,
        Math.floor(latest * BENEFITS.length)
      );
      setActiveIndex(index);
      setIsCompleted(latest >= 0.92);
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const activeBenefit = BENEFITS[activeIndex] || BENEFITS[0];

  return (
    <section ref={targetRef} className="relative bg-white text-slate-900 min-h-[500vh] lg:min-h-[300vh]">
      
      {/* Background: Linear/Vercel style ultra-subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-emerald-500/[0.03] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] bg-emerald-400/[0.03] rounded-full blur-[180px]" />
        
        {/* Fine background mesh line */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-4 lg:py-5 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Section Header: Retailer Journey */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 z-10 pt-1 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Retailer Journey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Your Store. <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Powered by Pawnourish.</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-normal">
            Everything a modern pet retailer needs—from genuine products and reliable inventory to higher margins and dependable support—all delivered through one trusted wholesale partner.
          </p>
        </div>


        {/* ================= DESKTOP LAYOUT (300vh Scroll Experience) ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-6 my-auto z-10 items-center flex-1 min-h-0 py-2">
          
          {/* Left Column (40%): Pinned Glassmorphism Timeline */}
          <div className="col-span-5 bg-slate-50/90 backdrop-blur-2xl border border-slate-200/90 rounded-[2rem] p-4 lg:p-5 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
            
            {/* Background Line Track (Centered at left-[44px]) */}
            <div className="absolute left-[44px] top-8 bottom-8 w-2 bg-slate-200/80 rounded-full" />
            
            {/* Active Green Progress Fill (Centered at left-[44px]) */}
            <motion.div
              style={{ height: progressPercent }}
              className="absolute left-[44px] top-8 w-2 bg-emerald-500 rounded-full shadow-[0_0_16px_rgba(16,185,129,0.6)] origin-top"
            />

            {/* 6 Milestone Nodes */}
            <div className="relative flex flex-col justify-between h-full z-10 py-1">
              {BENEFITS.map((benefit, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx < activeIndex;

                return (
                  <motion.div
                    key={benefit.id}
                    animate={{
                      scale: isActive ? 1.03 : 1,
                      x: isActive ? 6 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition-all ${
                      isActive 
                        ? "bg-white border border-emerald-200 shadow-md shadow-emerald-500/10" 
                        : "hover:bg-white/40"
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
                      <span className={`text-[9px] font-extrabold uppercase tracking-wider ${
                        isActive ? "text-emerald-700" : isPassed ? "text-slate-700" : "text-slate-400"
                      }`}>
                        0{benefit.id} {benefit.tagline}
                      </span>
                      <span className={`text-xs font-extrabold leading-tight ${
                        isActive ? "text-slate-900 text-sm" : isPassed ? "text-slate-800" : "text-slate-400 font-medium"
                      }`}>
                        {benefit.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>


          {/* Right Column (60%): Hero Drools Pack + Story Card */}
          <div className="col-span-7 flex flex-col justify-between h-full relative pl-2">
            
            {/* Hero Drools Pack */}
            <div className="relative flex-1 flex items-center justify-center min-h-0 py-2">
              <motion.div
                style={{ y: packFloat }}
                className="relative w-full h-full max-h-[360px] lg:max-h-[390px] flex items-center justify-center"
              >
                <div className="relative w-[280px] lg:w-[320px] h-[340px] lg:h-[370px] filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/images/drools_packaging.png"
                    alt="Drools Product Pack Hero"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1200px) 300px, 400px"
                  />
                </div>
              </motion.div>
            </div>

            {/* Active Story Card Display */}
            <div className="shrink-0 pt-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/95 backdrop-blur-2xl border-2 border-emerald-100 rounded-2xl lg:rounded-3xl p-4 lg:p-5 shadow-xl shadow-emerald-500/5 flex items-center gap-4 lg:gap-5"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm">
                    {React.createElement(activeBenefit.icon, { className: "w-6 h-6 lg:w-7 lg:h-7" })}
                  </div>

                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Retailer Advantage 0{activeBenefit.id}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] lg:text-xs text-emerald-700 font-bold">
                        <DogFoodBagSVG active className="w-3.5 h-3.5" /> {activeBenefit.tagline}
                      </span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight">
                      {activeBenefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">
                      {activeBenefit.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>


        {/* ================= MOBILE LAYOUT (500vh Scroll Experience) ================= */}
        <div className="lg:hidden flex flex-col justify-between my-auto z-10 space-y-3 pt-1 flex-1 min-h-0">
          
          <div className="flex items-stretch gap-3 flex-1 min-h-0">
            
            {/* Left Column (25%): Vertical Progress Bar */}
            <div className="w-1/4 bg-slate-50 border border-slate-200 rounded-2xl p-2 flex flex-col justify-between items-center relative overflow-hidden shadow-inner">
              <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-1.5 bg-slate-200/80 rounded-full" />
              
              <motion.div
                style={{ height: progressPercent }}
                className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.6)] origin-top"
              />

              <div className="relative z-10 flex flex-col justify-between h-full w-full items-center py-0.5">
                {BENEFITS.map((benefit, idx) => {
                  const isActive = idx === activeIndex;
                  const isPassed = idx < activeIndex;

                  return (
                    <div 
                      key={benefit.id} 
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isActive 
                          ? "bg-emerald-500 border-2 border-emerald-700 shadow-[0_0_10px_rgba(16,185,129,0.5)] scale-110" 
                          : isPassed 
                          ? "bg-emerald-100 border border-emerald-300" 
                          : "bg-white border border-slate-300"
                      }`}
                    >
                      <DogFoodBagSVG active={isActive || isPassed} className="w-3.5 h-3.5" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (75%): Product Pack & Benefit Card */}
            <div className="w-3/4 flex flex-col justify-between space-y-2 pb-1">
              
              {/* Mobile Drools Pack (45vh height - raised by 15% so content sits cleanly above CTA) */}
              <div className="relative flex-1 min-h-[32vh] max-h-[46vh] h-[45vh] w-full flex items-center justify-center -mt-2">
                <motion.div
                  style={{ y: packFloat }}
                  className="relative w-full h-full max-h-[46vh] flex items-center justify-center"
                >
                  <div className="relative w-[60vw] max-w-[240px] h-[42vh] max-h-[42vh] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
                    <Image
                      src="/images/drools_packaging.png"
                      alt="Drools Product Pack Mobile"
                      fill
                      className="object-contain"
                      priority
                      sizes="70vw"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Active Benefit Detail Card (Positioned cleanly above CTA) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/95 backdrop-blur-md border-2 border-emerald-100 p-3 rounded-2xl space-y-1 shadow-lg shrink-0 z-20"
                >
                  <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 w-max block">
                    Step {activeBenefit.id} of 6 • {activeBenefit.tagline}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                    {activeBenefit.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {activeBenefit.description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>


        {/* ================= FINAL STATE CTA PANEL ================= */}
        <div className="z-30 pt-2 shrink-0 w-full">
          <motion.div
            animate={{
              borderColor: isCompleted ? "#10B981" : "#334155",
              boxShadow: isCompleted ? "0 10px 30px rgba(16, 185, 129, 0.25)" : "0 10px 25px rgba(0, 0, 0, 0.15)",
            }}
            className="w-full bg-slate-900 text-white rounded-2xl lg:rounded-3xl p-4 lg:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4 transition-all border border-slate-800"
          >
            <div className="text-center sm:text-left space-y-0.5">
              <h4 className="text-base lg:text-lg font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <span>Ready to Grow Your Pet Store?</span>
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              </h4>
              <p className="text-[11px] lg:text-xs text-slate-300">
                Become a trusted Pawnourish retail partner today and get verified dealer pricing.
              </p>
            </div>

            <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
              <button
                onClick={() => openDealerModal()}
                className="flex-1 sm:flex-initial px-5 lg:px-6 py-2.5 lg:py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl text-xs lg:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <span>Become a Dealer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openDealerModal()}
                className="flex-1 sm:flex-initial px-5 lg:px-6 py-2.5 lg:py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 text-xs lg:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Request Pricing</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
