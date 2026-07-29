import React from 'react';
import DealerEnquirySection from '@/components/home/DealerEnquirySection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';

export default function BecomeADealerPage() {
  return (
    <div>
      <div className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Delhi NCR Distribution Network</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Become an Authorized Pawnourish Dealer</h1>
          <p className="text-slate-300 text-base">
            Partner with Delhi NCR's most dependable wholesale supplier for Royal Canin and Drools. Enjoy high profit margins, same-day dispatch, and flexible credit terms.
          </p>
        </div>
      </div>

      <DealerEnquirySection />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
