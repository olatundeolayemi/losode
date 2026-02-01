'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const designersByLetter: Record<string, string[]> = {
  A: [
    'Abiye Tara',
    'Ad_lineclothing',
    'Adire Butik',
    'Afrikoncept Wears',
    'Alayo The Brand',
    'April Kreations',
    'Astonish Designs',
    'Aura Nigeria',
    'Ayodelejayne Lagos',
  ],
  B: ['Bespoke By Nurudeen', 'Bkco'],
  C: ['Ca\'ja Couturier', 'Casual Queen Clothing', 'Chicbycandy'],
  D: ['D Nexes Stitches', 'Dazeita Clothing', 'Dinotailors', 'Dress Bella'],
  E: ['Ebonimode', 'Eesha Couture', 'El Elyon Clothing', 'Eydne', 'Eyeznika Fashion Studio'],
  F: ['Fadars Fashion', 'Flat17 Studio'],
  G: ['Gabc2.da.tribe', 'Gideliztribe', 'Gorathy\'s Signature', 'Greenwoud™'],
  H: ['Hot Head Thread Fashion House', 'House Of Tys And More', 'Hurikane'],
  I: ['Idowu Couture And Wears'],
  J: [
    'Jane\'s Fashion',
    'Jazzeffect Design',
    'Jeda Sanni',
    'Jide Anthony',
    'Just Noble Collection',
  ],
  K: ['Kaabis', 'Kabira Alasho', 'King Kodo', 'Knotcraftsbyla', 'Kola Kuddus', 'Kovvex', 'Kure\'s Hands'],
  L: [
    'Lavilah Fashion',
    'Lawiza Creations',
    'Lhambi',
    'Lohije',
    'Lubena Kaftan Hub',
    'Lutaawo',
    'Lysog Chari',
  ],
  M: [
    'Majestik Designs',
    'Man Stitches',
    'Maple Street',
    'Mega Lizzy',
    'Melira',
    'Mettabel\'s Thread',
    'Mieko Michi',
    'Moe Inspired',
  ],
  N: [
    'Namiwa Swim',
    'Needles By Pooki',
    'Nella Stitches',
    'Neptunes Female Clothing',
    'Northarabia Couture',
  ],
  O: [
    'Olive Republic',
    'Oma Apparel Designs',
    'Omaji Designs',
    'On Bended Knees',
    'Outspokn Clothiers',
  ],
  P: ['Perlemoni L\'afrique', 'Preob Atelier', 'Pushxclusive'],
  R: ['Rayha Swish Empire', 'Rubik'],
  S: [
    'Seamed By Temmy',
    'Shaglloy',
    'Shinne By Sarah Adesemoye',
    'Superior Threads',
  ],
  T: ['The Kaonyeli Studio', 'TÚndÉ ŌnibÀtÀ', 'Ty Luxury Couture'],
  U: ['Un Erret World', 'Urban Modestee', 'Uygonish Luxury', 'Uzoza Couture'],
  V: ['Veekee Threads', 'Velante'],
  X: ['Xxhundred'],
};

const letters = Object.keys(designersByLetter);

export default function DesignersPageClient() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Designers</h1>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
              className={`px-3 py-2 font-semibold text-sm transition ${
                selectedLetter === letter
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Designers List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b">
        {selectedLetter ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">{selectedLetter}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designersByLetter[selectedLetter].map((designer) => (
                <Link key={designer} href={`/designers?filter=${encodeURIComponent(designer)}`}>
                  <p className="text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition">
                    {designer}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {letters.map((letter) => (
              <div key={letter}>
                <h2 className="text-2xl font-bold mb-4">{letter}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {designersByLetter[letter].map((designer) => (
                    <Link key={designer} href={`/designers?filter=${encodeURIComponent(designer)}`}>
                      <p className="text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition">
                        {designer}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-4">Get a Discount off your First Order on Losode</h2>
          <p className="text-gray-700 mb-6 max-w-2xl">
            Enjoy 10% off your first order when you sign up to our newsletter.
            <br />
            Be the first to hear about new arrivals, exclusive offers, and more.
          </p>
          <div className="flex gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-2">For any enquires, please contact our User Engagement Call Centre</p>
            <p className="text-gray-900 font-semibold mb-3">02013306011</p>
            <p className="text-gray-700">
              or send an email to <span className="text-gray-900 font-semibold">hello@losode.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Location and Currency</h3>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white w-fit">
              <span className="text-2xl">🇳🇬</span>
              <span className="font-semibold text-gray-900">NGN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
