'use client';

import { X } from 'lucide-react';

interface CookiesModalProps {
  onAccept: () => void;
}

export default function CookiesModal({ onAccept }: CookiesModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4" style={{ backgroundColor: 'rgba(26, 45, 77, 0.7)' }}>
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onAccept}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          COOKIES AND PRIVACY
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Our site uses cookies and similar technologies to offer you a better experience. We use analytical cookies (our own and third party) to understand and improve your browsing experience, and advertising cookies (our own and third party) to send you advertisements in line with your preferences.
          </p>

          <p className="text-gray-700 leading-relaxed">
            To modify or opt-out of the use of some or all of our cookies, please go to our{' '}
            <a href="#" className="underline" style={{ color: 'oklch(0.61 0.165 28.5)' }}>
              Cookie Policy
            </a>{' '}
            to find out more. By clicking "Accept" you consent to the use these cookies.
          </p>
        </div>

        <hr className="mb-6" />

        <div className="flex gap-4">
          <button
            onClick={onAccept}
            className="flex-1 text-white px-6 py-3 font-semibold transition hover:opacity-90"
            style={{ backgroundColor: '#1a2d4d' }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
