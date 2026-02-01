import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

export default function SellPage() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Wide Audience',
      description: 'Reach thousands of fashion-conscious shoppers across Africa and beyond',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Grow Your Business',
      description: 'Scale your sales with our powerful marketplace platform',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Exposure',
      description: 'Showcase your designs to our exclusive Losode community',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Easy Management',
      description: 'Manage inventory, orders, and payments from one dashboard',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Create Your Store',
      description: 'Sign up and set up your designer profile with your brand story',
    },
    {
      number: '2',
      title: 'List Your Products',
      description: 'Upload your products with high-quality images and detailed descriptions',
    },
    {
      number: '3',
      title: 'Start Selling',
      description: 'Receive orders and manage sales through your dashboard',
    },
    {
      number: '4',
      title: 'Get Paid',
      description: 'Withdraw earnings directly to your bank account',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/images/sell-hero.jpg"
          alt="Sell on Losode"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Turn Your Passion Into Profit
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join thousands of African designers selling on Losode
            </p>
            <Link href="/sell/register">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                Start Selling Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Why Sell With Losode?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-black">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-20 w-16 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Join the Losode Family?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Showcase your unique designs to a global audience. No hidden fees, transparent pricing, and full support for your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell/register">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                Create Your Store
              </button>
            </Link>
            <Link href="/sell/faq">
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
