'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Chioma Adeyemi',
    role: 'Fashion Entrepreneur',
    image: 'CA',
    rating: 5,
    quote: 'Losóde has transformed how I shop for premium pieces. The quality and service are unmatched. I\'ve already recommended it to all my friends!',
  },
  {
    id: 2,
    name: 'Tunde Okonkwo',
    role: 'Interior Designer',
    image: 'TO',
    rating: 5,
    quote: 'The homeware collection is absolutely stunning. I use Losóde for both personal projects and client recommendations. Exceptional quality.',
  },
  {
    id: 3,
    name: 'Amara Uche',
    role: 'Fashion Blogger',
    image: 'AU',
    rating: 5,
    quote: 'Finally, a marketplace that celebrates African design authentically. The curation is impeccable and delivery is lightning-fast!',
  },
  {
    id: 4,
    name: 'Kunle Ibrahim',
    role: 'Business Owner',
    image: 'KI',
    rating: 5,
    quote: 'Trusted Losóde with gifts for important clients. Every product arrived beautifully packaged. Highly professional service.',
  },
];

const stats = [
  { value: '10,000+', label: 'Satisfied Customers' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '2-4 Days', label: 'Average Delivery' },
  { value: '500+', label: 'Premium Products' },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 md:mb-4" style={{ color: '#1A1A1A' }}>
            Trusted by 10,000+ Customers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered authentic African fashion and premium homeware
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#8B7F77' }}>
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: '#8B7F77' }}
                >
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Join our community of satisfied customers
          </p>
          <button
            className="px-6 md:px-8 py-3 font-semibold transition rounded-lg"
            style={{
              backgroundColor: '#8B7F77',
              color: 'white',
            }}
          >
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
}
