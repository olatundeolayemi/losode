'use client';

import { Lock, Truck, RotateCcw, Award, Shield, CheckCircle } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'Secure Payment',
    description: 'SSL encrypted checkout. Your data is safe and secure.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: '2-4 days delivery across Nigeria. Free shipping on orders over ₦50,000.',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Not satisfied? Return within 30 days for a full refund, no questions asked.',
  },
  {
    icon: Award,
    title: 'Verified Products',
    description: 'All items 100% authentic. Direct partnerships with premium brands.',
  },
  {
    icon: Shield,
    title: 'Buyer Protection',
    description: 'Money-back guarantee if items don\'t meet description.',
  },
  {
    icon: CheckCircle,
    title: '24/7 Support',
    description: 'Dedicated customer service team ready to help anytime.',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-serif mb-3" style={{ color: '#1A1A1A' }}>
            Why Shop with Losóde
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We prioritize your satisfaction and trust above everything
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#8B7F7722' }}
                  >
                    <Icon size={24} style={{ color: '#8B7F77' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Security Badges */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-xs font-semibold mb-2" style={{ color: '#8B7F77' }}>
                Secure Payment
              </div>
              <div className="text-2xl">🔒</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-semibold mb-2" style={{ color: '#8B7F77' }}>
                SSL Certified
              </div>
              <div className="text-2xl">✓</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-semibold mb-2" style={{ color: '#8B7F77' }}>
                Money Back Guarantee
              </div>
              <div className="text-2xl">💰</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xs font-semibold mb-2" style={{ color: '#8B7F77' }}>
                24/7 Support
              </div>
              <div className="text-2xl">☎️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
