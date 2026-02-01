'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface AdvancedFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
  onReset?: () => void;
}

export interface FilterState {
  priceRange: [number, number];
  brands: string[];
  colors: string[];
  sizes: string[];
  rating: number;
}

const initialFilters: FilterState = {
  priceRange: [0, 500000],
  brands: [],
  colors: [],
  sizes: [],
  rating: 0,
};

const brands = [
  { id: 'brand-1', label: 'African Threads' },
  { id: 'brand-2', label: 'Lagos Luxe' },
  { id: 'brand-3', label: 'Savanna Designs' },
  { id: 'brand-4', label: 'Heritage Collective' },
];

const colors = [
  { id: 'color-black', label: 'Black', color: '#000000' },
  { id: 'color-white', label: 'White', color: '#FFFFFF' },
  { id: 'color-brown', label: 'Brown', color: '#8B4513' },
  { id: 'color-gold', label: 'Gold', color: '#FFD700' },
  { id: 'color-navy', label: 'Navy', color: '#000080' },
  { id: 'color-emerald', label: 'Emerald', color: '#50C878' },
];

const sizes = [
  { id: 'size-xs', label: 'XS' },
  { id: 'size-s', label: 'S' },
  { id: 'size-m', label: 'M' },
  { id: 'size-l', label: 'L' },
  { id: 'size-xl', label: 'XL' },
  { id: 'size-xxl', label: 'XXL' },
];

export function AdvancedFilters({
  onFilterChange,
  onReset,
}: AdvancedFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brand: true,
    color: false,
    size: false,
    rating: false,
  });

  const handlePriceChange = (min: number, max: number) => {
    const updated = { ...filters, priceRange: [min, max] };
    setFilters(updated);
    onFilterChange?.(updated);
  };

  const handleBrandToggle = (brandId: string) => {
    const updated = {
      ...filters,
      brands: filters.brands.includes(brandId)
        ? filters.brands.filter((b) => b !== brandId)
        : [...filters.brands, brandId],
    };
    setFilters(updated);
    onFilterChange?.(updated);
  };

  const handleColorToggle = (colorId: string) => {
    const updated = {
      ...filters,
      colors: filters.colors.includes(colorId)
        ? filters.colors.filter((c) => c !== colorId)
        : [...filters.colors, colorId],
    };
    setFilters(updated);
    onFilterChange?.(updated);
  };

  const handleSizeToggle = (sizeId: string) => {
    const updated = {
      ...filters,
      sizes: filters.sizes.includes(sizeId)
        ? filters.sizes.filter((s) => s !== sizeId)
        : [...filters.sizes, sizeId],
    };
    setFilters(updated);
    onFilterChange?.(updated);
  };

  const handleRatingChange = (rating: number) => {
    const updated = { ...filters, rating };
    setFilters(updated);
    onFilterChange?.(updated);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    onReset?.();
  };

  const isFiltered =
    filters.brands.length > 0 ||
    filters.colors.length > 0 ||
    filters.sizes.length > 0 ||
    filters.rating > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 500000;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Filters</h3>
        {isFiltered && (
          <button
            onClick={handleReset}
            className="text-xs text-gray-600 hover:text-gray-900 transition flex items-center gap-1"
          >
            <X size={14} />
            Reset
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Price Range */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() =>
              setExpandedSections({
                ...expandedSections,
                price: !expandedSections.price,
              })
            }
            className="w-full flex items-center justify-between font-medium text-sm"
          >
            Price Range
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expandedSections.price ? '' : '-rotate-90'
              }`}
            />
          </button>
          {expandedSections.price && (
            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs text-gray-600">Min: ₦{filters.priceRange[0].toLocaleString()}</label>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange(
                      Number(e.target.value),
                      filters.priceRange[1]
                    )
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Max: ₦{filters.priceRange[1].toLocaleString()}</label>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange(
                      filters.priceRange[0],
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() =>
              setExpandedSections({
                ...expandedSections,
                brand: !expandedSections.brand,
              })
            }
            className="w-full flex items-center justify-between font-medium text-sm"
          >
            Brand
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expandedSections.brand ? '' : '-rotate-90'
              }`}
            />
          </button>
          {expandedSections.brand && (
            <div className="mt-4 space-y-2">
              {brands.map((brand) => (
                <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand.id)}
                    onChange={() => handleBrandToggle(brand.id)}
                    className="w-4 h-4 rounded accent-gray-800"
                  />
                  <span className="text-sm text-gray-700">{brand.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Color */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() =>
              setExpandedSections({
                ...expandedSections,
                color: !expandedSections.color,
              })
            }
            className="w-full flex items-center justify-between font-medium text-sm"
          >
            Color
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expandedSections.color ? '' : '-rotate-90'
              }`}
            />
          </button>
          {expandedSections.color && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {colors.map((col) => (
                <button
                  key={col.id}
                  onClick={() => handleColorToggle(col.id)}
                  className={`p-3 rounded-lg border-2 transition ${
                    filters.colors.includes(col.id)
                      ? 'border-gray-900'
                      : 'border-gray-200'
                  }`}
                  title={col.label}
                >
                  <div
                    className="w-full h-6 rounded"
                    style={{ backgroundColor: col.color, border: '1px solid #ccc' }}
                  />
                  <p className="text-xs mt-1">{col.label}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Size */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() =>
              setExpandedSections({
                ...expandedSections,
                size: !expandedSections.size,
              })
            }
            className="w-full flex items-center justify-between font-medium text-sm"
          >
            Size
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expandedSections.size ? '' : '-rotate-90'
              }`}
            />
          </button>
          {expandedSections.size && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => handleSizeToggle(size.id)}
                  className={`py-2 px-3 rounded-lg border-2 font-medium text-sm transition ${
                    filters.sizes.includes(size.id)
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="pb-4">
          <button
            onClick={() =>
              setExpandedSections({
                ...expandedSections,
                rating: !expandedSections.rating,
              })
            }
            className="w-full flex items-center justify-between font-medium text-sm"
          >
            Rating
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expandedSections.rating ? '' : '-rotate-90'
              }`}
            />
          </button>
          {expandedSections.rating && (
            <div className="mt-4 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    {rating} star{rating > 1 ? 's' : ''} & up
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
