'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BrandsPage() {
  const { openDealerModal } = useStore();

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Official Wholesale Lines</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Authorized Royal Canin & Drools Supplier</h1>
        <p className="text-slate-600 text-base">
          Pawnourish supplies fresh-batch manufacturer inventory to pet stores, veterinary clinics, and pet professionals in Delhi NCR.
        </p>
      </div>

      {/* Royal Canin Detailed Showcase */}
      <div id="royal-canin" className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-red-100 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">Global Leader in Pet Health</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Royal Canin Product Range</h2>
          </div>

          <button
            onClick={() => openDealerModal()}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
          >
            <FileText className="w-4 h-4" /> Request Royal Canin Price List
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Size Health Nutrition</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Targeted formulas for Mini, Medium, Maxi, and Giant breed dogs across all age stages (Puppy, Adult, Senior).
            </p>
          </div>

          <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Breed Health Nutrition</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Custom kibble shapes and nutrient ratios for Golden Retrievers, Labradors, German Shepherds, and Persian Cats.
            </p>
          </div>

          <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Veterinary Prescription Diets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clinical diets for Gastrointestinal, Renal, Hypoallergenic, Urinary, and Cardiac conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Drools Detailed Showcase */}
      <div id="drools" className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-amber-100 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">India's Premier Nutrition</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Drools Product Range</h2>
          </div>

          <button
            onClick={() => openDealerModal()}
            className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
          >
            <FileText className="w-4 h-4" /> Request Drools Price List
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Drools Focus Series</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Super premium no-corn, no-wheat real chicken and egg formula for optimal digestive health.
            </p>
          </div>

          <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Drools VetPro Clinical Diets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Veterinary prescribed diets for Skin & Coat, Obesity, Hypoallergenic, and Renal management.
            </p>
          </div>

          <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">Real Chicken & Cat Range</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ocean Fish cat food, feline treats, and daily maintenance adult dog food for mass retail demand.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
