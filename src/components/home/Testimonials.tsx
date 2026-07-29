'use client';

import React, { useState } from 'react';
import { Star, Award, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      store: "Paws & Claws Pet Store, South Extension, Delhi",
      text: "Pawnourish has been our most reliable wholesale supplier for Royal Canin. Stock is always genuine, fresh batch, and delivered to our store within 24 hours.",
      badge: "Verified Retailer"
    },
    {
      name: "Dr. Ananya Gupta, DVM",
      store: "Vets For Pets Clinic, Sector 56, Gurugram",
      text: "We require consistent supplies of Royal Canin Veterinary Prescription diets. Pawnourish has never failed on inventory availability or batch invoicing.",
      badge: "Veterinary Clinic"
    },
    {
      name: "Vikas Malhotra",
      store: "Pet Paradise, Sector 18, Noida",
      text: "Drools Focus and Real Chicken & Rice move very fast at our store. Pawnourish's wholesale rate card gives us great profit margins and easy credit terms.",
      badge: "Retailer Partner"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Trusted Retailer Network</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What NCR Pet Retailers Say</h2>
          <p className="text-slate-600 text-base">Partnering with 500+ pet stores and clinics in Delhi NCR.</p>
        </div>

        {/* Desktop Grid Layout (3 Columns - Visible on md and above) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Award className="w-3 h-3" /> {t.badge}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {t.store}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel (Visible on Mobile only) */}
        <div className="md:hidden space-y-6">
          
          <div className="overflow-hidden relative rounded-3xl">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <Award className="w-3 h-3" /> {t.badge}
                      </span>
                    </div>

                    <p className="text-slate-700 text-base leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {t.store}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls & Pagination Dots */}
          <div className="flex items-center justify-between pt-2">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-800 shadow-sm active:scale-95 transition-transform"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx 
                      ? 'w-8 bg-emerald-700' 
                      : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-800 shadow-sm active:scale-95 transition-transform"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
