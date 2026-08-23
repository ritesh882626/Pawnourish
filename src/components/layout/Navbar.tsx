'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { PRODUCTS } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Dog, 
  Cat, 
  ArrowRight, 
  X, 
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
      
      {/* Top Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-tight">
              Pawnourish
            </span>
            <span className="text-[10px] font-bold tracking-wider text-emerald-200 uppercase">
              B2B Pet Wholesale • Delhi NCR
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          
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

            {/* CLEAN TWO-COLUMN PRODUCTS MEGA MENU (NO POPULAR RANGES) */}
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
                    
                    {/* DROOLS */}
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

                    {/* ROYAL CANIN */}
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
        <div className="hidden lg:flex items-center gap-3 shrink-0">
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

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => openDealerModal()}
            className="px-3.5 py-2 bg-amber-400 text-slate-950 font-black rounded-xl text-xs"
          >
            REQUEST PRICE
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-10 h-10 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 text-white flex items-center justify-center border border-emerald-400/20"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 w-5">
              <span className="block w-full h-0.5 bg-white rounded-full" />
              <span className="block w-full h-0.5 bg-white rounded-full" />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-[85%] sm:w-[380px] h-full bg-[#FAFAFA] text-slate-900 z-[110] shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            >

              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black">P</div>
                  <span className="font-extrabold text-xl text-slate-900">Pawnourish B2B</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-4 my-auto">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-black text-slate-900">
                  Home
                </Link>

                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-black text-slate-900">
                  About Us
                </Link>

                {/* Mobile Products Accordion */}
                <div className="space-y-2 border-y border-slate-100 py-3">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between text-xl font-black text-slate-900 text-left"
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileProductsOpen && (
                    <div className="pl-4 space-y-2 pt-2 text-sm font-bold text-slate-700">
                      <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block text-emerald-700">
                        Explore Portfolio Overview →
                      </Link>
                      <Link href="/products/dog-food" onClick={() => setMobileMenuOpen(false)} className="block">
                        Dog Food ({dogProducts.length} Products)
                      </Link>
                      <Link href="/products/cat-food" onClick={() => setMobileMenuOpen(false)} className="block">
                        Cat Food ({catProducts.length} Products)
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Brands Accordion */}
                <div className="space-y-2 border-b border-slate-100 pb-3">
                  <button
                    onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                    className="w-full flex items-center justify-between text-xl font-black text-slate-900 text-left"
                  >
                    <span>Brands</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileBrandsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileBrandsOpen && (
                    <div className="pl-4 space-y-2 pt-2 text-sm font-bold text-slate-700">
                      <Link href="/brands#drools" onClick={() => setMobileMenuOpen(false)} className="block">
                        Drools (36 SKUs)
                      </Link>
                      <Link href="/brands#royal-canin" onClick={() => setMobileMenuOpen(false)} className="block">
                        Royal Canin (25 SKUs)
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/become-a-dealer" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-black text-emerald-700">
                  Become a Dealer
                </Link>

                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-black text-slate-900">
                  Contact Sales
                </Link>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <a
                  href="https://wa.me/919711633094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-700 text-white font-bold rounded-2xl text-center shadow-md text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp (+91 97116 33094)</span>
                </a>

                <button
                  onClick={() => { setMobileMenuOpen(false); openDealerModal(); }}
                  className="w-full py-4 bg-amber-400 text-slate-950 font-black rounded-2xl text-center shadow-lg text-sm"
                >
                  REQUEST PRICE
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </header>
  );
}
