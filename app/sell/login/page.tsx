'use client';

import React from "react"

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

export default function SellerLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-md mx-auto px-4 py-24">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your seller account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link href="/sell/forgot-password" className="text-black hover:underline font-medium">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/sell/register" className="font-semibold text-black hover:underline">
            Create a seller account
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
}
