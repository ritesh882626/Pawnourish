'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 max-w-4xl mx-auto px-6 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Retailer Assistance</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">B2B Wholesale FAQs</h2>
        <p className="text-slate-600 text-base">Got questions about dealership terms or delivery timelines?</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 text-left font-bold text-base text-slate-900 flex justify-between items-center"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                {faq.q}
              </span>
              <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
