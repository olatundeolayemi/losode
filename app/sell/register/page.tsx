'use client';

import React from "react"

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Mail, Lock, User, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function SellerRegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    country: '',
    state: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      step > num ? 'bg-black' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            {step === 1 && <p className="text-gray-600">Personal Information</p>}
            {step === 2 && <p className="text-gray-600">Business Details</p>}
            {step === 3 && <p className="text-gray-600">Create Account</p>}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold mb-8">Personal Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="+234 800 000 0000"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold mb-8">Business Details</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your Brand Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select business type</option>
                  <option value="designer">Designer/Boutique</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="retailer">Retailer</option>
                  <option value="artisan">Artisan/Craftsperson</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="NG">Nigeria</option>
                      <option value="KE">Kenya</option>
                      <option value="GH">Ghana</option>
                      <option value="ZA">South Africa</option>
                      <option value="Other">Other African Country</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State/Region *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Lagos"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Create Account */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold mb-8">Create Account</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-2">You're almost there!</p>
                    <p>
                      Once you create your account, you'll have access to your seller dashboard where you can upload products, manage orders, and track your sales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" id="terms" className="rounded" required />
                <label htmlFor="terms">
                  I agree to the{' '}
                  <Link href="/terms" className="underline hover:text-gray-900">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="underline hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10 pt-6 border-t">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              {step === 3 ? 'Create Account' : 'Continue'}
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-6">
          Already a seller?{' '}
          <Link href="/sell/login" className="font-semibold text-black hover:underline">
            Sign in here
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
}
