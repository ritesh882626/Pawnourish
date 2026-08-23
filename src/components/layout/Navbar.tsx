'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { PRODUCTS } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight,
  Dog, 
  Cat, 
  ArrowRight, 
  MessageCircle, 
  FileText,
  Award,
  ShieldCheck
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'brands' | null>(null);
  const { openDealerModal } = useStore();

  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock background page scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Dynamic calculations from product dataset
  const dogProducts = PRODUCTS.filter(p => p.species === 'Dog');
  const dogDryCount = dogProducts.filter(p => p.subCategory.includes('Dry')).length;
  const dogWetCount = dogProducts.filter(p => p.subCategory.includes('Wet')).length;

  const catProducts = PRODUCTS.filter(p => p.species === 'Cat');
  const catDryCount = catProducts.filter(p => p.subCategory.includes('Dry')).length;
  const catWetCount = catProducts.filter(p => p.subCategory.includes('Wet') || p.subCategory.includes('Mousse')).length;

  const handleMouseEnter = (type: 'products' | 'brands') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#005F56] text-white border-b border-emerald-800 shadow-lg">
      
      {/* ========================================================= */}
      {/* DESKTOP HEADER (Unchanged, Visible on >= lg) */}
      {/* ========================================================= */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 h-20 items-center justify-between gap-6">
        
        {/* Desktop Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/10 shrink-0">
            <Image
              src="/images/pawnourish_logo.png"
              alt="Pawnourish Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-white leading-tight">
              pawnourish
            </span>
            <span className="text-[10px] font-bold tracking-wider text-emerald-200 uppercase">
              B2B Pet Wholesale • Delhi NCR
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation Links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-bold tracking-wide transition-colors py-2 ${
              pathname === '/' ? 'text-amber-400 font-extrabold border-b-2 border-amber-400' : 'text-emerald-100 hover:text-white'
            }`}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={`text-sm font-bold tracking-wide transition-colors py-2 ${
              pathname === '/about' ? 'text-amber-400 font-extrabold border-b-2 border-amber-400' : 'text-emerald-100 hover:text-white'
            }`}
          >
            ABOUT
          </Link>

          {/* PRODUCTS MEGA MENU TRIGGER */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/products"
              className={`text-sm font-bold tracking-wide transition-colors py-2 flex items-center gap-1.5 ${
                pathname.startsWith('/products') || pathname === '/catalogue'
                  ? 'text-amber-400 font-extrabold border-b-2 border-amber-400'
                  : 'text-emerald-100 hover:text-white'
              }`}
            >
              <span>PRODUCTS</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-amber-400' : ''}`} />
            </Link>

            {/* TWO-COLUMN PRODUCTS MEGA MENU */}
            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[580px] z-50"
                >
                  <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 grid grid-cols-2 gap-8 text-left">
                    
                    {/* DOG FOOD COLUMN */}
                    <div className="space-y-4 border-r border-slate-100 pr-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                          <Dog className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-base tracking-wide">DOG FOOD</h4>
                          <p className="text-[11px] text-slate-500 font-semibold">{dogProducts.length} Products Available</p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-xs font-semibold text-slate-600 pt-1">
                        <li>
                          <Link href="/products/dog-food" className="hover:text-emerald-700 block py-1.5 flex items-center justify-between group/link">
                            <span className="group-hover/link:translate-x-0.5 transition-transform">Dry Food (Kibble)</span>
                            <span className="text-[11px] text-slate-400 font-normal bg-slate-100 px-2 py-0.5 rounded-full">{dogDryCount} SKUs</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/dog-food" className="hover:text-emerald-700 block py-1.5 flex items-center justify-between group/link">
                            <span className="group-hover/link:translate-x-0.5 transition-transform">Wet Food</span>
                            <span className="text-[11px] text-slate-400 font-normal bg-slate-100 px-2 py-0.5 rounded-full">{dogWetCount} SKUs</span>
                          </Link>
                        </li>
                      </ul>

                      <Link
                        href="/products/dog-food"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 pt-3"
                      >
                        <span>Explore Dog Food</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* CAT FOOD COLUMN */}
                    <div className="space-y-4 pl-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                          <Cat className="w-5 h-5 text-amber-700" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-base tracking-wide">CAT FOOD</h4>
                          <p className="text-[11px] text-slate-500 font-semibold">{catProducts.length} Products Available</p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-xs font-semibold text-slate-600 pt-1">
                        <li>
                          <Link href="/products/cat-food" className="hover:text-amber-800 block py-1.5 flex items-center justify-between group/link">
                            <span className="group-hover/link:translate-x-0.5 transition-transform">Dry Food (Kibble)</span>
                            <span className="text-[11px] text-slate-400 font-normal bg-slate-100 px-2 py-0.5 rounded-full">{catDryCount} SKUs</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/cat-food" className="hover:text-amber-800 block py-1.5 flex items-center justify-between group/link">
                            <span className="group-hover/link:translate-x-0.5 transition-transform">Wet Food</span>
                            <span className="text-[11px] text-slate-400 font-normal bg-slate-100 px-2 py-0.5 rounded-full">{catWetCount} SKUs</span>
                          </Link>
                        </li>
                      </ul>

                      <Link
                        href="/products/cat-food"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-800 hover:text-amber-900 pt-3"
                      >
                        <span>Explore Cat Food</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BRANDS MEGA MENU TRIGGER */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('brands')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/brands"
              className={`text-sm font-bold tracking-wide transition-colors py-2 flex items-center gap-1.5 ${
                pathname === '/brands' ? 'text-amber-400 font-extrabold border-b-2 border-amber-400' : 'text-emerald-100 hover:text-white'
              }`}
            >
              <span>BRANDS</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'brands' ? 'rotate-180 text-amber-400' : ''}`} />
            </Link>

            {/* BRANDS MEGA MENU POPOVER */}
            <AnimatePresence>
              {activeDropdown === 'brands' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[500px] z-50"
                >
                  <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 grid grid-cols-2 gap-6 text-left">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-red-600" />
                        <h4 className="font-black text-slate-900 text-base">DROOLS</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        36 SKUs covering Daily Nutrition, Focus Series, and Wet Gravy formulas.
                      </p>
                      <Link
                        href="/brands#drools"
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-red-600 hover:text-red-700 pt-1"
                      >
                        <span>View Drools</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-700" />
                        <h4 className="font-black text-slate-900 text-base">ROYAL CANIN</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        25 SKUs covering Size Health, Breed Health, and Feline Health lines.
                      </p>
                      <Link
                        href="/brands#royal-canin"
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 pt-1"
                      >
                        <span>View Royal Canin</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/become-a-dealer"
            className={`text-sm font-bold tracking-wide transition-colors py-2 ${
              pathname === '/become-a-dealer' ? 'text-amber-400 font-extrabold border-b-2 border-amber-400' : 'text-emerald-100 hover:text-white'
            }`}
          >
            BECOME A DEALER
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-bold tracking-wide transition-colors py-2 ${
              pathname === '/contact' ? 'text-amber-400 font-extrabold border-b-2 border-amber-400' : 'text-emerald-100 hover:text-white'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Desktop Primary Header Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="https://wa.me/919711633094" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center shadow-md"
            title="WhatsApp Sales (+91 97116 33094)"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#005F56]" />
          </a>

          <button
            onClick={() => openDealerModal()}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl shadow-xl text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
          >
            <FileText className="w-4 h-4 text-slate-950" />
            <span>REQUEST PRICE</span>
          </button>
        </div>

      </div>


      {/* ========================================================= */}
      {/* CLOSED MOBILE/TABLET HEADER (< lg) */}
      {/* EXTREMELY MINIMAL: ONLY [LOGO] pawnourish ... ☰ */}
      {/* ========================================================= */}
      <div className="lg:hidden h-[68px] px-5 sm:px-6 flex items-center justify-between">
        
        {/* LEFT: [LOGO] pawnourish */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/pawnourish_logo.png"
              alt="Pawnourish Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base font-extrabold tracking-tight text-white lowercase">
            pawnourish
          </span>
        </Link>

        {/* RIGHT: Animated Hamburger Icon (☰ ↔ X) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white focus:outline-none"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <span 
            className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 transform origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`} 
          />
          <span 
            className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 transform origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`} 
          />
        </button>

      </div>


      {/* ========================================================= */}
      {/* OPEN MOBILE/TABLET FULL-SCREEN NAVIGATION */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col justify-between lg:hidden overflow-hidden"
          >
            
            {/* Header Inside Open Menu */}
            <div className="h-[68px] px-5 sm:px-6 flex items-center justify-between border-b border-slate-800/80 shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/pawnourish_logo.png"
                    alt="Pawnourish Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-base font-extrabold tracking-tight text-white lowercase">
                  pawnourish
                </span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white focus:outline-none"
                aria-label="Close Menu"
              >
                <span className="w-5 h-[2px] bg-white rounded-full transform rotate-45 translate-y-[3.5px]" />
                <span className="w-5 h-[2px] bg-white rounded-full opacity-0 scale-0" />
                <span className="w-5 h-[2px] bg-white rounded-full transform -rotate-45 -translate-y-[3.5px]" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              
              {/* 1. Home */}
              <div>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-amber-400 transition-colors block py-1.5"
                >
                  Home
                </Link>
              </div>

              {/* 2. About Us */}
              <div>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-amber-400 transition-colors block py-1.5"
                >
                  About Us
                </Link>
              </div>

              {/* 3. Products Accordion */}
              <div className="space-y-3">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between text-2xl font-black text-white hover:text-amber-400 transition-colors py-1.5 text-left"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-4 pt-1 overflow-hidden border-l-2 border-slate-800"
                    >
                      {/* Dog Food Group */}
                      <div className="space-y-2">
                        <Link
                          href="/products/dog-food"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-extrabold text-emerald-400 hover:text-emerald-300 block"
                        >
                          Dog Food
                        </Link>
                        <div className="pl-3 space-y-1.5 text-sm font-semibold text-slate-300">
                          <Link
                            href="/products/dog-food"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block hover:text-white py-1"
                          >
                            Dry Food (Kibble)
                          </Link>
                          <Link
                            href="/products/dog-food"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block hover:text-white py-1"
                          >
                            Wet Food (Gravy & Chunks)
                          </Link>
                        </div>
                      </div>

                      {/* Cat Food Group */}
                      <div className="space-y-2 pt-1">
                        <Link
                          href="/products/cat-food"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-extrabold text-amber-400 hover:text-amber-300 block"
                        >
                          Cat Food
                        </Link>
                        <div className="pl-3 space-y-1.5 text-sm font-semibold text-slate-300">
                          <Link
                            href="/products/cat-food"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block hover:text-white py-1"
                          >
                            Dry Food (Kibble)
                          </Link>
                          <Link
                            href="/products/cat-food"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block hover:text-white py-1"
                          >
                            Wet Food (Mousse & Pouches)
                          </Link>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Brands Accordion */}
              <div className="space-y-3">
                <button
                  onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                  className="w-full flex items-center justify-between text-2xl font-black text-white hover:text-amber-400 transition-colors py-1.5 text-left"
                >
                  <span>Brands</span>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileBrandsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2.5 pt-1 overflow-hidden border-l-2 border-slate-800"
                    >
                      <Link
                        href="/brands#drools"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-extrabold text-slate-200 hover:text-white block py-1"
                      >
                        Drools (36 SKUs)
                      </Link>
                      <Link
                        href="/brands#royal-canin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-extrabold text-slate-200 hover:text-white block py-1"
                      >
                        Royal Canin (25 SKUs)
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. Become a Dealer */}
              <div>
                <Link
                  href="/become-a-dealer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors block py-1.5"
                >
                  Become a Dealer
                </Link>
              </div>

              {/* 6. Contact Us */}
              <div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-amber-400 transition-colors block py-1.5"
                >
                  Contact Us
                </Link>
              </div>

            </div>

            {/* STICKY BOTTOM CTA */}
            <div className="p-6 bg-slate-950 border-t border-slate-800/80 shrink-0 shadow-2xl">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDealerModal();
                }}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-center text-sm shadow-xl tracking-wider uppercase transition-transform active:scale-[0.98]"
              >
                REQUEST PRICE
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
