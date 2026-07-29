'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import { FileText, Filter, PackageCheck, Search } from 'lucide-react';

export default function CataloguePage() {
  const { openDealerModal } = useStore();
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = PRODUCTS.filter((p) => {
    const matchesBrand = brandFilter === 'all' || p.brand === brandFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center sm:text-left space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Official Distributor Catalogue</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Royal Canin & Drools Product Catalogue</h1>
        <p className="text-slate-600 text-base max-w-2xl">
          Browse our active wholesale inventory available for express 24-hour delivery in Delhi NCR. Click any item to request stock availability & dealer rate card.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Brand Tabs */}
        <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Brands' },
            { id: 'Royal Canin', label: 'Royal Canin' },
            { id: 'Drools', label: 'Drools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setBrandFilter(tab.id)}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                brandFilter === tab.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input 
            type="text"
            placeholder="Search SKU or Product Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600"
          />
        </div>

      </div>

      {/* Catalogue Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.brand}
              </span>
              {product.badge && (
                <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">{product.category}</span>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {product.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">{product.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <PackageCheck className="w-4 h-4 text-emerald-600" /> Sizes: {product.packagingSizes.join(", ")}
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-900">
                  <strong>Minimum Order:</strong> {product.moq}
                </div>
              </div>

              <button
                onClick={() => openDealerModal(product)}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <FileText className="w-4 h-4" /> Request Wholesale Pricing & Stock
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
