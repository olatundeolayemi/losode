'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">Get in Touch</h1>
            <p className="text-gray-300 text-sm md:text-lg">
              We'd love to hear from you. Our team is here to help and answer any question you might have.
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Email */}
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#8B7F7722' }}>
                    <Mail size={24} style={{ color: '#8B7F77' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-3">support@losode.com</p>
                <a href="mailto:support@losode.com" className="text-xs font-medium hover:underline" style={{ color: '#8B7F77' }}>
                  Send an email
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#8B7F7722' }}>
                    <Phone size={24} style={{ color: '#8B7F77' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-gray-600 mb-3">+234 (0) 123-456-7890</p>
                <a href="tel:+2341234567890" className="text-xs font-medium hover:underline" style={{ color: '#8B7F77' }}>
                  Call us
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#8B7F7722' }}>
                    <MapPin size={24} style={{ color: '#8B7F77' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-sm text-gray-600 mb-3">Lagos, Nigeria</p>
                <a href="#" className="text-xs font-medium hover:underline" style={{ color: '#8B7F77' }}>
                  Get directions
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: '#8B7F7722' }}>
                    <Clock size={24} style={{ color: '#8B7F77' }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-gray-600 mb-3">Monday - Friday: 9AM - 6PM</p>
                <p className="text-xs text-gray-500">Saturday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-6" style={{ color: '#1A1A1A' }}>
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold mb-2">Thank you for your message!</p>
                    <p className="text-sm text-green-700">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm"
                        style={{ focusRingColor: '#8B7F77' }}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm"
                        placeholder="+234 (0) 123-456-7890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Issue</option>
                        <option value="return">Return/Refund</option>
                        <option value="product">Product Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 font-semibold rounded-lg transition-all text-white"
                      style={{ backgroundColor: '#8B7F77' }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-serif mb-6" style={{ color: '#1A1A1A' }}>
                  We're Here to Help
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Response Time</h4>
                    <p className="text-sm text-gray-600">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Support Channels</h4>
                    <p className="text-sm text-gray-600 mb-3">Reach us through:</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Email: support@losode.com</li>
                      <li>• WhatsApp: +234 (0) 123-456-7890</li>
                      <li>• Instagram: @losode_official</li>
                      <li>• Twitter: @losode</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Follow Us</h4>
                    <p className="text-sm text-gray-600">
                      Stay updated with new collections, promotions, and exclusive offers. Follow us on social media!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
