'use client';

import { useState } from 'react';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';

interface TaglineGeneratorProps {
  productName?: string;
}

const homewearTaglines = [
  'Elevate your space with timeless elegance and comfort',
  'Transform your house into a sanctuary of style and serenity',
  'Where luxury meets everyday living in perfect harmony',
  'Curated pieces that reflect your unique lifestyle and taste',
  'Create moments worth savoring in spaces you truly love',
  'Discover the art of living beautifully, effortlessly, every day',
  'Invest in comfort, style, and memories that last a lifetime',
  'Your home deserves the same care you give to yourself',
  'Thoughtfully designed for those who live with intention',
  'Where functionality meets aesthetic in every detail',
  'Make your space a reflection of who you are and aspire to be',
  'Premium homeware for modern living with classic appeal',
];

export default function AITaglineGenerator({ productName = 'Homeware' }: TaglineGeneratorProps) {
  const [currentTagline, setCurrentTagline] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateTagline = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const randomTagline = homewearTaglines[Math.floor(Math.random() * homewearTaglines.length)];
      setCurrentTagline(randomTagline);
      setIsLoading(false);
      setCopied(false);
    }, 600);
  };

  const copyToClipboard = async () => {
    if (!currentTagline) return;
    
    await navigator.clipboard.writeText(currentTagline);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 py-20 bg-white border-t-4" style={{ borderColor: 'oklch(0.61 0.165 28.5)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6" style={{ color: 'oklch(0.61 0.165 28.5)' }} />
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            AI Product Tagline Generator
          </h2>
          <Sparkles className="w-6 h-6" style={{ color: 'oklch(0.61 0.165 28.5)' }} />
        </div>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Create compelling product descriptions instantly. Perfect for sellers looking to craft engaging narratives for their homeware collections.
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            onClick={generateTagline}
            disabled={isLoading}
            className="flex items-center gap-2 text-white px-6 py-3 font-semibold rounded hover:opacity-90 transition disabled:opacity-50"
            style={{ backgroundColor: 'oklch(0.61 0.165 28.5)' }}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Generating...' : 'Generate Tagline'}
          </button>

          {currentTagline && (
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 border-2 px-6 py-3 font-semibold rounded hover:opacity-80 transition"
              style={{ borderColor: 'oklch(0.61 0.165 28.5)', color: 'oklch(0.61 0.165 28.5)' }}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>

        {currentTagline && (
          <div className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderColor: 'oklch(0.61 0.165 28.5)' }}>
            <p className="text-lg text-gray-900 font-medium leading-relaxed text-center">
              "{currentTagline}"
            </p>
          </div>
        )}

        {!currentTagline && !isLoading && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-500">
              Click the button above to generate an AI-powered tagline for your {productName.toLowerCase()} product.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
