'use client';

import React from "react"

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CurrencyOption {
  code: string;
  country: string;
  flag: string;
}

const currencyOptions: CurrencyOption[] = [
  { code: 'NGN', country: 'Nigeria', flag: '🇳🇬' },
  { code: 'USD', country: 'United States of America', flag: '🇺🇸' },
  { code: 'CAD', country: 'Canada', flag: '🇨🇦' },
  { code: 'GBP', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'EUR', country: 'France', flag: '🇫🇷' },
  { code: 'EUR', country: 'Netherlands', flag: '🇳🇱' },
];

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>(currencyOptions[0]);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize from localStorage on client side
  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('selectedCurrency');
    if (stored) {
      try {
        setSelectedCurrency(JSON.parse(stored));
      } catch {
        setSelectedCurrency(currencyOptions[0]);
      }
    }
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (option: CurrencyOption) => {
    setSelectedCurrency(option);
    setIsOpen(false);
    localStorage.setItem('selectedCurrency', JSON.stringify(option));
  };

  if (!isMounted) {
    return (
      <div 
        className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border-2 bg-white text-gray-900 text-xs font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all"
        style={{ borderColor: '#8B7F77' }}
      >
        <span className="text-sm">{currencyOptions[0].flag}</span>
        <span className="hidden sm:inline text-xs">{currencyOptions[0].code}</span>
        <ChevronDown className="w-2.5 h-2.5" />
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current location: ${selectedCurrency.country}, Currency: ${selectedCurrency.code}`}
        className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border-2 bg-white text-gray-900 text-xs font-semibold hover:shadow-lg active:shadow-md transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-offset-1"
        style={{ 
          borderColor: '#8B7F77',
          backgroundColor: isOpen ? '#F5F3F0' : 'white',
        }}
      >
        <span className="text-sm leading-none">{selectedCurrency.flag}</span>
        <span className="hidden sm:inline text-xs" style={{ color: '#8B7F77' }}>{selectedCurrency.code}</span>
        <ChevronDown 
          className="w-2.5 h-2.5 transition-transform duration-200" 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#8B7F77'
          }}
        />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full mt-1 left-0 bg-white shadow-2xl rounded-lg overflow-hidden z-50 w-64 border-2 animate-in fade-in slide-in-from-top-2"
          style={{ borderColor: '#8B7F77' }}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b-2" style={{ borderColor: '#E8E5E0', backgroundColor: '#F5F3F0' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B7F77' }}>
              Location & Currency
            </p>
          </div>

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto bg-white" role="listbox">
            {currencyOptions.map((option, index) => {
              const isSelected = 
                selectedCurrency.code === option.code && 
                selectedCurrency.country === option.country;

              return (
                <button
                  key={`${option.code}-${option.country}-${index}`}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={isSelected}
                  className={`w-full text-left px-3 py-2 transition-all duration-150 flex items-center gap-2 border-b last:border-b-0 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:bg-gray-50 ${
                    isSelected ? 'font-semibold' : ''
                  }`}
                  style={{ 
                    borderColor: '#E8E5E0',
                    backgroundColor: isSelected ? '#FFF5F0' : 'white'
                  }}
                >
                  {/* Flag */}
                  <span className="text-xl leading-none flex-shrink-0">
                    {option.flag}
                  </span>

                  {/* Text Content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span 
                      className="text-xs truncate font-bold"
                      style={{ color: isSelected ? '#8B7F77' : '#1A1A1A' }}
                    >
                      {option.code}
                    </span>
                    <span className="text-xs text-gray-600 truncate">
                      {option.country}
                    </span>
                  </div>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="flex items-center flex-shrink-0 rounded-full p-0.5" style={{ backgroundColor: '#8B7F77' }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="px-3 py-2 border-t-2" style={{ borderColor: '#E8E5E0', backgroundColor: '#F5F3F0' }}>
            <p className="text-xs font-medium" style={{ color: '#8B7F77' }}>
              Prices vary by location
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
