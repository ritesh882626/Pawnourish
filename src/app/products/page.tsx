'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/mockData';
import { ArrowRight, Dog, Cat, ShieldCheck, Truck, Building2 } from 'lucide-react';

export default function ProductsPage() {
  const dogProducts = PRODUCTS.filter(p => p.species === 'Dog');
  const catProducts = PRODUCTS.filter(p => p.species === 'Cat');

  const dogDry = dogProducts.filter(p => p.subCategory.includes('Dry')).length;
  const dogWet = dogProducts.filter(p => p.subCategory.includes('Wet')).length;
  const catDry = catProducts.filter(p => p.subCategory.includes('Dry')).length;
  const catWet = catProducts.filter(p => p.subCategory.includes('Wet') || p.subCategory.includes('Mousse')).length;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs tracking-wider uppercase border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-700" /> B2B Pet Food Wholesale Catalogue
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Explore Our Product Portfolio
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          Explore our range of trusted pet nutrition products for dogs and cats, supplied for retailers, distributors and pet businesses across Delhi NCR.
        </p>
      </div>

      {/* Primary Category Cards (DOG FOOD & CAT FOOD) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* DOG FOOD CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
                <Dog className="w-8 h-8 text-emerald-700" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-black text-xs tracking-wider uppercase">
                {dogProducts.length} Products
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                DOG FOOD
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Official wholesale distribution of Royal Canin and Drools dog food formulas covering dry kibble and wet gravy pouches for all life stages.
              </p>
            </div>

            {/* Sub-format Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700 pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                Dry Food ({dogDry} SKUs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                Wet Food ({dogWet} SKUs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                Royal Canin & Drools
              </span>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <Link
              href="/products/dog-food"
              className="w-full py-4 px-6 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-sm sm:text-base transition-all group-hover:scale-[1.01]"
            >
              <span>Explore Dog Food</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CAT FOOD CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold shadow-sm">
                <Cat className="w-8 h-8 text-amber-700" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-black text-xs tracking-wider uppercase">
                {catProducts.length} Products
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                CAT FOOD
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Complete feline nutrition solutions including hairball care, kitten formulas, Persian breed-specific foods, and delicious ocean fish pouches.
              </p>
            </div>

            {/* Sub-format Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700 pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                Dry Food ({catDry} SKUs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                Wet Food ({catWet} SKUs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                Royal Canin & Drools
              </span>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <Link
              href="/products/cat-food"
              className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base transition-all group-hover:scale-[1.01]"
            >
              <span>Explore Cat Food</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>

      {/* B2B Assurance Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">100% Authentic Stock</h4>
            <p className="text-xs text-slate-400">Direct factory batch sourcing for Royal Canin & Drools</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">24-Hour NCR Dispatch</h4>
            <p className="text-xs text-slate-400">Express delivery to Delhi, Gurugram, Noida, Ghaziabad</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Wholesale Rates & Credit</h4>
            <p className="text-xs text-slate-400">High retailer margins with Net 15/30 terms available</p>
          </div>
        </div>
      </div>

    </div>
  );
}
