'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Calculator, X, ArrowRight, ArrowLeft, TrendingUp, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function RetailerMarginCalculatorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const { openDealerModal } = useStore();

  // Form State
  const [brand, setBrand] = useState<'Royal Canin' | 'Drools'>('Royal Canin');
  const [category, setCategory] = useState<string>('Size Health / Dry Food');
  const [monthlyQty, setMonthlyQty] = useState<number>(50);
  const [sellingPrice, setSellingPrice] = useState<number>(2500);
  const [currentCost, setCurrentCost] = useState<number>(2200);

  // Auto Trigger on Scroll to 3rd section (~30% scroll)
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem('pawnourish_margin_calc_shown');
    if (hasTriggered) return;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 25) {
        setIsOpen(true);
        sessionStorage.setItem('pawnourish_margin_calc_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isOpen) return null;

  // Margin calculation formula (Pawnourish direct wholesale slab gives ~22% margin)
  const pawnourishCostPerUnit = sellingPrice * 0.78; // 22% margin
  const monthlyRevenue = sellingPrice * monthlyQty;
  const monthlyProfit = (sellingPrice - pawnourishCostPerUnit) * monthlyQty;
  const annualRevenue = monthlyRevenue * 12;
  const annualProfit = monthlyProfit * 12;

  const currentMonthlyProfit = currentCost ? (sellingPrice - currentCost) * monthlyQty : 0;
  const extraMonthlyGain = monthlyProfit - currentMonthlyProfit;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#005F56] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl leading-tight">
                Retailer Margin Calculator
              </h3>
              <p className="text-xs text-emerald-200">
                Estimate your monthly & annual profit with Pawnourish Wholesale Rates
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Progress Indicator */}
          {step <= 5 && (
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Step {step} of 5</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      step >= i ? 'w-6 bg-emerald-700' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Select Brand */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-slate-900">Step 1: Select Wholesale Brand</h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { setBrand('Royal Canin'); setStep(2); }}
                  className={`p-6 rounded-2xl border-2 text-center transition-all ${
                    brand === 'Royal Canin' 
                      ? 'border-red-600 bg-red-50/40 text-slate-900 font-extrabold shadow-md' 
                      : 'border-slate-200 hover:border-red-300 text-slate-700'
                  }`}
                >
                  <div className="text-xl font-black text-red-600 mb-1">ROYAL CANIN</div>
                  <div className="text-xs text-slate-500 font-medium">Health Nutrition & Vet Diets</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setBrand('Drools'); setStep(2); }}
                  className={`p-6 rounded-2xl border-2 text-center transition-all ${
                    brand === 'Drools' 
                      ? 'border-amber-500 bg-amber-50/40 text-slate-900 font-extrabold shadow-md' 
                      : 'border-slate-200 hover:border-amber-300 text-slate-700'
                  }`}
                >
                  <div className="text-xl font-black text-amber-600 mb-1">Drools</div>
                  <div className="text-xs text-slate-500 font-medium">Focus & VetPro Super Premium</div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Product Category */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-slate-900">Step 2: Select {brand} Product Category</h4>
              <div className="space-y-2.5">
                {[
                  'Size Health / Dry Food (Mini, Medium, Maxi)',
                  'Breed Specific Nutrition',
                  'Prescription / Vet Clinical Diets',
                  'Wet Food & Pouches / Treats'
                ].map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => { setCategory(cat); setStep(3); }}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all ${
                      category === cat
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span>{cat}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Monthly Quantity Sold */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-slate-900">Step 3: Estimated Monthly Quantity Sold</h4>
              <p className="text-xs text-slate-500">How many bags/units do you sell per month at your pet store or clinic?</p>
              
              <div className="space-y-4 pt-2">
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={monthlyQty}
                  onChange={(e) => setMonthlyQty(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="text-center bg-slate-50 py-3 rounded-xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-emerald-800">{monthlyQty}</span>
                  <span className="text-xs font-semibold text-slate-500 ml-2">Units / Month</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Average Selling Price */}
          {step === 4 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-slate-900">Step 4: Average MRP / Retail Selling Price per Unit</h4>
              <p className="text-xs text-slate-500">Enter average selling price (in ₹) for this product line.</p>
              
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-300 font-bold text-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                  placeholder="2500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="flex-1 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Current Purchase Cost (Optional) */}
          {step === 5 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-slate-900">Step 5: Current Purchase Cost (Optional)</h4>
              <p className="text-xs text-slate-500">What do you currently pay your existing supplier per unit? (Leave blank if starting new)</p>
              
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-300 font-bold text-lg text-slate-900 focus:outline-none focus:border-emerald-700"
                  placeholder="2200"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep(4)}
                  className="px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(6)}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-extrabold shadow-lg flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" /> Calculate My Profits
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Results Screen */}
          {step === 6 && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="text-center space-y-1">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Estimated Profit Potential
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">Your B2B Wholesale Profit Overview</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 text-center space-y-1">
                  <div className="text-[10px] font-bold text-emerald-800 uppercase">Estimated Monthly Profit</div>
                  <div className="text-2xl font-black text-emerald-700">₹{monthlyProfit.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-emerald-600">Revenue: ₹{monthlyRevenue.toLocaleString('en-IN')}</div>
                </div>

                <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-center space-y-1">
                  <div className="text-[10px] font-bold text-amber-900 uppercase">Potential Annual Profit</div>
                  <div className="text-2xl font-black text-amber-700">₹{annualProfit.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-amber-600">Revenue: ₹{annualRevenue.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {extraMonthlyGain > 0 && (
                <div className="bg-emerald-700 text-white p-4 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>You could gain an extra +₹{extraMonthlyGain.toLocaleString('en-IN')}/month with Pawnourish direct wholesale pricing!</span>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-3">
                <p className="text-xs font-bold text-slate-800">
                  Want Better Wholesale Pricing? Become a Pawnourish Retail Partner Today.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => { setIsOpen(false); openDealerModal(); }}
                    className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    <FileText className="w-4 h-4" /> Request Dealer Pricing
                  </button>

                  <a
                    href={`https://wa.me/919711633094?text=Hi%20Pawnourish%2C%20I%20used%20the%20Margin%20Calculator%20for%20${brand}%20(${monthlyQty}%20units/mo).%20I%20want%20to%20get%20wholesale%20rates.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#25D366] hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700 underline"
                >
                  Recalculate with different numbers
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
