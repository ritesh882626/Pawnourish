'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Truck, 
  Building2, 
  FileText, 
  ArrowRight, 
  Dog, 
  Cat, 
  Award, 
  PackageCheck, 
  Store, 
  Stethoscope, 
  Scissors, 
  Users,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  const { openDealerModal } = useStore();

  // Dynamic calculations from authoritative product dataset
  const totalProductsCount = PRODUCTS.length;

  const dogProducts = PRODUCTS.filter(p => p.species === 'Dog');
  const dogDryCount = dogProducts.filter(p => p.subCategory.includes('Dry')).length;
  const dogWetCount = dogProducts.filter(p => p.subCategory.includes('Wet')).length;

  const catProducts = PRODUCTS.filter(p => p.species === 'Cat');
  const catDryCount = catProducts.filter(p => p.subCategory.includes('Dry')).length;
  const catWetCount = catProducts.filter(p => p.subCategory.includes('Wet') || p.subCategory.includes('Mousse')).length;

  const droolsProducts = PRODUCTS.filter(p => p.brand === 'Drools');
  const royalCaninProducts = PRODUCTS.filter(p => p.brand === 'Royal Canin');

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      
      {/* ========================================================= */}
      {/* SECTION 01 — HERO */}
      {/* ========================================================= */}
      <section className="relative bg-[#005F56] text-white pt-16 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-700 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT PAWNOURISH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Built for the <br />
              <span className="text-amber-400">Pet Retail Trade.</span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100 max-w-2xl font-medium leading-relaxed">
              Pawnourish is a specialized B2B pet food wholesale distributor operating across Delhi NCR. 
              We supply verified pet retailers, veterinary clinics, and pet professionals with authentic 
              <strong> Royal Canin</strong> and <strong>Drools</strong> formulas backed by reliable local inventory and fast dispatch.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openDealerModal()}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 uppercase tracking-wider"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>REQUEST PRICE</span>
              </button>

              <Link
                href="/products"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Factual Stats Strip */}
            <div className="pt-8 border-t border-emerald-800/80 grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">{totalProductsCount} SKUs</div>
                <div className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Verified Products</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">2 Brands</div>
                <div className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Royal Canin & Drools</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">Delhi NCR</div>
                <div className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Fast Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/15 shadow-2xl space-y-3">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 p-2">
                  <Image 
                    src="/images/royal_canin_dog.jpg" 
                    alt="Royal Canin Dog Food Packaging" 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Royal Canin</span>
                  <p className="text-xs text-white font-bold truncate">Size & Breed Health</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/15 shadow-2xl space-y-3 mt-8">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 p-2">
                  <Image 
                    src="/images/drools_dog.jpg" 
                    alt="Drools Dog Food Packaging" 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Drools</span>
                  <p className="text-xs text-white font-bold truncate">Daily & Focus Nutrition</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 02 — WHO WE ARE */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug max-w-4xl">
              Pawnourish connects pet retailers, veterinary clinics, and stores across Delhi NCR with direct, reliable access to premium pet nutrition.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 font-medium text-base leading-relaxed pt-4 border-t border-slate-100">
            <p>
              Operating as a dedicated B2B wholesale distribution partner, Pawnourish streamlines pet food sourcing for independent pet businesses. We understand that inventory consistency, authentic batch sourcing, and transparent trade terms are essential for retail success.
            </p>
            <p>
              By maintaining curated inventory of leading brands like <strong>Royal Canin</strong> and <strong>Drools</strong>, we enable pet shops, clinics, and dealers to maintain full shelves without heavy upfront capital investment or minimum order constraints.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 03 — WHAT WE SUPPLY */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">WHAT WE SUPPLY</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Wholesale Category Overview</h2>
          </div>
          <p className="text-sm text-slate-500 font-semibold">
            {totalProductsCount} Verified SKUs Across Dog & Cat Nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Dog Dry Food */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Dog className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">Dog Nutrition</span>
              <h3 className="font-extrabold text-lg text-slate-900">Dry Kibble Formulas</h3>
              <p className="text-xs text-slate-500 font-medium">{dogDryCount} SKUs available in multiple pack sizes.</p>
            </div>
            <ul className="text-xs text-slate-600 space-y-1 font-medium pt-2 border-t border-slate-100">
              <li>• Daily Nutrition & Kibble</li>
              <li>• Size Health (Mini, Medium, Maxi)</li>
              <li>• Breed Specific Formulas</li>
            </ul>
          </div>

          {/* Card 2: Dog Wet Food */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <PackageCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">Dog Nutrition</span>
              <h3 className="font-extrabold text-lg text-slate-900">Wet Gravy & Pouches</h3>
              <p className="text-xs text-slate-500 font-medium">{dogWetCount} SKUs available for retail supply.</p>
            </div>
            <ul className="text-xs text-slate-600 space-y-1 font-medium pt-2 border-t border-slate-100">
              <li>• Real Chicken & Meat Pouches</li>
              <li>• Puppy & Adult Gravy</li>
              <li>• High Palatability Formulas</li>
            </ul>
          </div>

          {/* Card 3: Cat Dry Food */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Cat className="w-6 h-6 text-amber-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">Cat Nutrition</span>
              <h3 className="font-extrabold text-lg text-slate-900">Dry Feline Kibble</h3>
              <p className="text-xs text-slate-500 font-medium">{catDryCount} SKUs in various pack options.</p>
            </div>
            <ul className="text-xs text-slate-600 space-y-1 font-medium pt-2 border-t border-slate-100">
              <li>• Feline Health Nutrition</li>
              <li>• Persian & Breed Specific</li>
              <li>• Hairball & Urinary Health</li>
            </ul>
          </div>

          {/* Card 4: Cat Wet Food */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-amber-700" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">Cat Nutrition</span>
              <h3 className="font-extrabold text-lg text-slate-900">Wet Mousse & Pouches</h3>
              <p className="text-xs text-slate-500 font-medium">{catWetCount} SKUs available.</p>
            </div>
            <ul className="text-xs text-slate-600 space-y-1 font-medium pt-2 border-t border-slate-100">
              <li>• Ocean Fish & Gravy Pouches</li>
              <li>• Kitten & Adult Mousse</li>
              <li>• Single Serving Packs</li>
            </ul>
          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* SECTION 04 — OUR BRANDS */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700">OUR BRANDS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Supplying World-Class Nutrition</h2>
          <p className="text-slate-600 text-sm font-medium">
            We stock authentic products from trusted brand portfolios to meet the exact demands of Delhi NCR pet store owners and vets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Brand 1: DROOLS */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-32 h-32 relative rounded-2xl bg-slate-50 p-3 shrink-0 border border-slate-100 flex items-center justify-center">
              <Image 
                src="/images/drools_dog.jpg" 
                alt="Drools Product Portfolio" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
                <Award className="w-3.5 h-3.5 text-red-600" />
                <span>{droolsProducts.length} Verified SKUs</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">DROOLS</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Comprehensive range covering Daily Nutrition (Chicken & Egg, Real Meal), Focus Performance Series, and Wet Gravy formulas for both dogs and cats.
              </p>
              <Link 
                href="/brands#drools"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 hover:text-red-700"
              >
                <span>View Drools Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Brand 2: ROYAL CANIN */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-32 h-32 relative rounded-2xl bg-slate-50 p-3 shrink-0 border border-slate-100 flex items-center justify-center">
              <Image 
                src="/images/royal_canin_dog.jpg" 
                alt="Royal Canin Product Portfolio" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>{royalCaninProducts.length} Verified SKUs</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">ROYAL CANIN</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Precision scientific nutrition featuring Size Health Nutrition (Mini, Medium, Maxi), Breed Health Nutrition (Labrador, German Shepherd, Persian), and Feline Health Nutrition.
              </p>
              <Link 
                href="/brands#royal-canin"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800"
              >
                <span>View Royal Canin Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* SECTION 05 — WHY PAWNOURISH (Factual B2B Advantages) */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700">WHY PAWNOURISH</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Practical Wholesale Advantages</h2>
          <p className="text-slate-600 text-sm font-medium">
            Designed specifically to keep retail shelves stocked and profit margins healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">100% Fresh Stock</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Direct factory-fresh batch supply ensuring maximum shelf life for your store inventory.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <PackageCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Flexible Low MOQs</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Order starting from just 5 bags per order across mixed SKUs without tying up heavy capital.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Truck className="w-5 h-5 text-emerald-700" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Delhi NCR Express</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Same-Day or 24-Hour delivery fleet serving Delhi, Gurugram, Noida, Ghaziabad, and Faridabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-emerald-700" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Wholesale Credit Terms</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Net 15 & Net 30 trade credit options available for verified recurring retail dealers.
            </p>
          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* SECTION 06 — WHO WE SERVE */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700">WHO WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Tailored for B2B Pet Businesses</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Independent Pet Stores</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Local pet shops requiring quick inventory refills of top-selling kibble and wet gravy packs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Veterinary Clinics</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Veterinary hospitals needing reliable supply of prescription diets and scientific nutrition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Scissors className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Grooming & Boutiques</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Specialty pet boutiques offering premium breed-specific nutrition to discerning pet parents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-base text-slate-900">Kennels & Breeders</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Commercial kennels and registered breeders purchasing high-volume performance packs.
            </p>
          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* SECTION 07 — PRODUCT ECOSYSTEM (Dynamic Taxonomy Flow) */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">CATALOGUE STRUCTURE</span>
            <h2 className="text-3xl font-black text-slate-900">Organized for Fast Product Discovery</h2>
            <p className="text-xs text-slate-500 font-medium">
              Understand how our {totalProductsCount} wholesale products are structured across species, food formats, and brand portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
            
            {/* Dog Ecosystem Flow */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <Dog className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Dog Food Ecosystem</h4>
                  <span className="text-xs text-emerald-800 font-bold">{dogProducts.length} Total SKUs</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-emerald-100">
                  <span>Dry Food (Kibble)</span>
                  <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-bold">{dogDryCount} SKUs</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-emerald-100">
                  <span>Wet Food (Gravy & Chunks)</span>
                  <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-bold">{dogWetCount} SKUs</span>
                </div>
              </div>
            </div>

            {/* Cat Ecosystem Flow */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
                  <Cat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Cat Food Ecosystem</h4>
                  <span className="text-xs text-amber-800 font-bold">{catProducts.length} Total SKUs</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-amber-100">
                  <span>Dry Food (Kibble)</span>
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">{catDryCount} SKUs</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-amber-100">
                  <span>Wet Food (Mousse & Pouches)</span>
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">{catWetCount} SKUs</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* ========================================================= */}
      {/* SECTION 08 — B2B CALL TO ACTION */}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-[#005F56] text-white rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">DELHI NCR B2B WHOLESALE</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Looking for reliable pet product supply in Delhi NCR?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Get instant access to complete wholesale dealer rate cards, fast dispatch schedules, and dedicated account support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <button
              onClick={() => openDealerModal()}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>REQUEST PRICE</span>
            </button>

            <Link
              href="/products"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
