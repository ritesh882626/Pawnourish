'use client';

import React from 'react';
import { Product } from '@/data/mockData';
import { X, RotateCcw, Filter, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FilterState {
  brand: string[];
  subCategory: string[];
  lifeStage: string[];
  breedSize: string[];
  productType: string[];
  variantName: string[];
}

interface ProductFilterSidebarProps {
  products: Product[];
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export type FilterableKey = 'brand' | 'subCategory' | 'lifeStage' | 'breedSize' | 'productType' | 'variantName';

export default function ProductFilterSidebar({
  products,
  filters,
  onFilterChange,
  isOpenMobile,
  onCloseMobile
}: ProductFilterSidebarProps) {

  // Calculate dynamic counts based on the current dataset
  const getCounts = (key: FilterableKey, value: string) => {
    return products.filter((p) => p[key] === value).length;
  };

  // Helper to get unique available values present in this collection dataset
  const getAvailableValues = (key: FilterableKey): string[] => {
    const set = new Set<string>();
    products.forEach((p) => {
      const val = p[key];
      if (typeof val === 'string' && val.trim() !== '') {
        set.add(val);
      }
    });
    return Array.from(set).sort();
  };

  const availableBrands = getAvailableValues('brand');
  const availableSubCategories = getAvailableValues('subCategory');
  const availableLifeStages = getAvailableValues('lifeStage');
  const availableBreedSizes = getAvailableValues('breedSize');
  const availableTypes = getAvailableValues('productType');
  const availableVariants = getAvailableValues('variantName');

  const toggleFilter = (category: keyof FilterState, value: string) => {
    const current = filters[category];
    const exists = current.includes(value);
    const updated = exists ? current.filter((item) => item !== value) : [...current, value];
    onFilterChange({ ...filters, [category]: updated });
  };

  const handleClearAll = () => {
    onFilterChange({
      brand: [],
      subCategory: [],
      lifeStage: [],
      breedSize: [],
      productType: [],
      variantName: []
    });
  };

  const hasActiveFilters = Object.values(filters).some((arr) => arr.length > 0);

  const renderFilterSection = (
    title: string,
    category: keyof FilterState,
    availableOptions: string[],
    dataKey: FilterableKey
  ) => {
    if (availableOptions.length === 0) return null;

    return (
      <div className="space-y-3 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex justify-between items-center">
          <span>{title}</span>
          {filters[category].length > 0 && (
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              {filters[category].length}
            </span>
          )}
        </h4>

        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 text-xs">
          {availableOptions.map((opt) => {
            const count = getCounts(dataKey, opt);
            if (count === 0 && !filters[category].includes(opt)) return null;

            const isChecked = filters[category].includes(opt);

            return (
              <label
                key={opt}
                onClick={() => toggleFilter(category, opt)}
                className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${
                  isChecked 
                    ? 'bg-emerald-50 text-emerald-900 font-bold' 
                    : 'text-slate-700 hover:bg-slate-50 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                    isChecked ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="truncate">{opt}</span>
                </div>
                <span className={`text-[11px] font-semibold ml-2 shrink-0 ${isChecked ? 'text-emerald-700' : 'text-slate-400'}`}>
                  ({count})
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  };

  const FilterContent = (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-emerald-700" />
          <h3 className="font-extrabold text-slate-900 text-base">Filter Catalog</h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleClearAll}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Clear All
          </button>
        )}
      </div>

      {/* Filter Categories */}
      {renderFilterSection('Brand', 'brand', availableBrands, 'brand')}
      {renderFilterSection('Sub-Category', 'subCategory', availableSubCategories, 'subCategory')}
      {renderFilterSection('Life Stage', 'lifeStage', availableLifeStages, 'lifeStage')}
      {renderFilterSection('Breed / Size Segment', 'breedSize', availableBreedSizes, 'breedSize')}
      {renderFilterSection('Product Range / Type', 'productType', availableTypes, 'productType')}
      {renderFilterSection('Variant / Flavour', 'variantName', availableVariants, 'variantName')}

    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:block w-72 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm shrink-0 self-start sticky top-24">
        {FilterContent}
      </div>

      {/* Mobile Bottom Sheet Drawer */}
      <AnimatePresence>
        {isOpenMobile && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 z-10 shadow-2xl space-y-6"
            >
              <div className="flex justify-between items-center pb-2">
                <span className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto" />
                <button
                  onClick={onCloseMobile}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {FilterContent}

              <button
                onClick={onCloseMobile}
                className="w-full py-3.5 bg-emerald-700 text-white font-black rounded-2xl shadow-lg text-sm"
              >
                Apply Filters
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
