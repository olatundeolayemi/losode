'use client';

import React from "react"

import { useState } from 'react';
import Image from 'next/image';

export default function PromoSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <div className="flex-1 bg-card dark:bg-card p-6 md:p-8 rounded-lg w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              Enjoy 10% Off Your First Order!
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-2 leading-relaxed">
              Discover the latest styles and refresh your wardrobe with Losode
            </p>
            <p className="text-foreground font-semibold text-sm md:text-base mb-4">
              Use code <span className="font-bold text-primary">NEW10</span> at checkout and save on your first order
            </p>
            <a href="#" className="text-primary font-semibold underline hover:opacity-80 transition text-sm md:text-base">
              Shop thousands of styles now
            </a>
          </div>

          <div className="flex-1 h-48 sm:h-64 md:h-80 relative rounded-lg overflow-hidden w-full">
            <Image
              src="/products/party-wear-1.jpg"
              alt="Promotional collection - Get 10% off your first order"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              Get a Discount off your First Order on Losode
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-2 leading-relaxed">
              Enjoy 10% off your first order when you sign up to our newsletter.
            </p>
            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Be the first to hear about new arrivals, exclusive offers, and more.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border border-border px-3 sm:px-4 py-2 md:py-3 text-sm bg-card text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 md:py-3 font-semibold hover:bg-primary/90 active:bg-primary/80 transition rounded-lg whitespace-nowrap text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">Thank you for subscribing!</p>
            )}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              Need Help?
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
              For any enquires, please contact our User Engagement Call Centre 02013306011 or send an email to hello@losode.com
            </p>

            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Location and Currency</h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇳🇬</span>
                <span className="font-semibold text-foreground">NGN</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 md:mb-4 text-balance leading-tight">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition text-sm md:text-base font-medium">Instagram</a>
              <a href="#" className="hover:text-foreground transition text-sm md:text-base font-medium">Facebook</a>
              <a href="#" className="hover:text-foreground transition text-sm md:text-base font-medium">Twitter</a>
              <a href="#" className="hover:text-foreground transition text-sm md:text-base font-medium">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
