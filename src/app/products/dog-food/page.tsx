'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/mockData';
import ProductCard from '@/components/catalog/ProductCard';
import ProductFilterSidebar, { FilterState } from '@/components/catalog/ProductFilterSidebar';
import { Search, Filter as FilterIcon, X, RotateCcw, Dog, ChevronRight } from 'lucide-react';

export default function DogFoodPage() {
  const dogProducts = useMemo(() => PRODUCTS.filter((p) => p.species === 'Dog'), []);

  const [activeCategoryTab, setActiveCategoryTab] = useState<'All' | 'Dry Food' | 'Wet Food'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    brand: [],
    subCategory: [],
    lifeStage: [],
    breedSize: [],
    productType: [],
    variantName: []
  });

  const totalDogCount = dogProducts.length;
  const dryCount = dogProducts.filter((p) => p.subCategory.includes('Dry')).length;
  const wetCount = dogProducts.filter((p) => p.subCategory.includes('Wet')).length;

  const filteredProducts = useMemo(() => {
    return dogProducts.filter((p) => {
      // Subcategory Tab Filter
      if (activeCategoryTab === 'Dry Food' && !p.subCategory.includes('Dry')) return false;
      if (activeCategoryTab === 'Wet Food' && !p.subCategory.includes('Wet')) return false;

      // Brand Filter
      if (filters.brand.length > 0 && !filters.brand.includes(p.brand)) return false;

      // SubCategory Filter
      if (filters.subCategory.length > 0 && !filters.subCategory.includes(p.subCategory)) return false;

      // Life Stage Filter
      if (filters.lifeStage.length > 0 && !filters.lifeStage.includes(p.lifeStage)) return false;

      // Breed/Size Segment Filter
      if (filters.breedSize.length > 0 && !filters.breedSize.includes(p.breedSize)) return false;

      // Product Type Filter
      if (filters.productType.length > 0 && !filters.productType.includes(p.productType)) return false;

      // Variant Name Filter
      if (filters.variantName.length > 0 && !filters.variantName.includes(p.variantName)) return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesCode = p.code.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesVariant = p.variantName.toLowerCase().includes(query);
        const matchesSegment = p.breedSize.toLowerCase().includes(query);
        return matchesTitle || matchesCode || matchesBrand || matchesVariant || matchesSegment;
      }

      return true;
    });
  }, [dogProducts, activeCategoryTab, filters, searchQuery]);

  const removeFilterChip = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value)
    }));
  };

  const handleClearAll = () => {
    setFilters({
      brand: [],
      subCategory: [],
      lifeStage: [],
      breedSize: [],
      productType: [],
      variantName: []
    });
    setSearchQuery('');
  };

  const activeChipList: { category: keyof FilterState; value: string }[] = [];
  (Object.entries(filters) as [keyof FilterState, string[]][]).forEach(([cat, vals]) => {
    vals.forEach((v: string) => {
      activeChipList.push({ category: cat, value: v });
    });
  });

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-bold">Dog Food</span>
      </nav>

      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
            <Dog className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              DOG FOOD
            </h1>
            <p className="text-xs sm:text-sm font-bold text-emerald-800">
              {totalDogCount} Wholesale Products Available
            </p>
          </div>
        </div>
        <p className="text-slate-600 text-sm max-w-3xl font-medium">
          Comprehensive canine nutrition for pet stores, clinics, and kennels across Delhi NCR. Featuring Royal Canin Size & Breed Health formulas and Drools Daily, Focus, and Tuscan wet ranges.
        </p>
      </div>

      {/* Subcategory Control Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-full sm:w-auto">
          {[
            { id: 'All', label: `All Dog Food (${totalDogCount})` },
            { id: 'Dry Food', label: `Dry Food (${dryCount})` },
            { id: 'Wet Food', label: `Wet Food (${wetCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategoryTab(tab.id as 'All' | 'Dry Food' | 'Wet Food')}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategoryTab === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
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
            placeholder="Search SKU, brand, breed or variant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Active Filter Chips */}
      {(activeChipList.length > 0 || searchQuery !== '') && (
        <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-500 mr-1">Active Filters:</span>

          {activeChipList.map((chip) => (
            <span
              key={`${chip.category}-${chip.value}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold border border-emerald-200"
            >
              <span>{chip.value}</span>
              <button
                onClick={() => removeFilterChip(chip.category, chip.value)}
                className="hover:text-emerald-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}

          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-900 text-xs font-extrabold">
              <span>Query: &quot;{searchQuery}&quot;</span>
              <button onClick={() => setSearchQuery('')} className="hover:text-slate-700">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}

          <button
            onClick={handleClearAll}
            className="text-xs font-bold text-red-600 hover:text-red-700 ml-auto flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Clear All
          </button>
        </div>
      )}

      {/* Main Layout: Sidebar + Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="w-full py-3 px-4 bg-white border border-slate-200 rounded-2xl font-bold text-xs text-slate-900 flex items-center justify-center gap-2 shadow-sm"
          >
            <FilterIcon className="w-4 h-4 text-emerald-700" />
            <span>FILTER PRODUCTS {activeChipList.length > 0 ? `(${activeChipList.length})` : ''}</span>
          </button>
        </div>

        {/* Filter Sidebar */}
        <ProductFilterSidebar
          products={dogProducts}
          filters={filters}
          onFilterChange={setFilters}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
        />

        {/* Product Grid */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {totalDogCount} Dog Food Products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <p className="text-slate-500 font-medium text-base">No dog food products match your selected filters.</p>
              <button
                onClick={handleClearAll}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl text-xs hover:bg-slate-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
