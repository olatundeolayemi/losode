'use client';

import { Award, Leaf, Truck, Shield } from 'lucide-react';

export default function HomewareFeatures() {
  const features = [
    {
      icon: Award,
      title: 'Curated Selection',
      description: 'Hand-picked pieces from top artisans and designers across Africa',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-friendly materials and ethical production practices',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping across Nigeria with real-time tracking',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium craftsmanship and materials guaranteed on every piece',
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: 'oklch(0.61 0.165 28.5)/10' }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: 'oklch(0.61 0.165 28.5)' }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
