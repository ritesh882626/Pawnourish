import React from 'react';
import { FileText, PhoneCall, CheckCircle2, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Submit Dealer Enquiry",
      desc: "Fill out the online application or contact our sales team directly on WhatsApp with your store details."
    },
    {
      num: "02",
      icon: PhoneCall,
      title: "Receive Rate Card & Verification",
      desc: "Our NCR wholesale manager shares the latest Royal Canin & Drools price list and verifies your dealer credentials."
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Place B2B Order",
      desc: "Choose your required mix of SKUs with retailer-friendly MOQs (starting at 5 bags) via phone or WhatsApp."
    },
    {
      num: "04",
      icon: Truck,
      title: "24-Hour Express Delivery",
      desc: "Receive fresh, authentic manufacturer stock directly at your pet store or clinic in Delhi NCR."
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Seamless Onboarding</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How to Become a Pawnourish Partner</h2>
        <p className="text-slate-600 text-base">Get your store approved and stocked in 4 quick steps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative space-y-4">
              <span className="text-3xl font-black text-emerald-100 block">{s.num}</span>
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl w-fit">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
