'use client';

import { useState } from 'react';
import Image from 'next/image';

const allDesigners = [
  'Abiye Tara',
  'Ad_lineclothing',
  'Adire Butik',
  'Afrikoncept Wears',
  'Alayo The Brand',
  'April Kreations',
  'Astonish Designs',
  'Aura Nigeria',
  'Ayodelejayne Lagos',
  'Bespoke By Nurudeen',
  'Bkco',
  'Ca\'ja Couturier',
  'Casual Queen Clothing',
  'Chicbycandy',
  'D Nexes Stitches',
  'Dazeita Clothing',
  'Dinotailors',
  'Dress Bella',
  'Ebonimode',
  'Eesha Couture',
  'El Elyon Clothing',
  'Eydne',
  'Eyeznika Fashion Studio',
  'Fadars Fashion',
  'Flat17 Studio',
  'Gabc2.da.tribe',
  'Gideliztribe',
  'Gorathy\'s Signature',
  'Greenwoud™',
  'Hot Head Thread Fashion House',
  'House Of Tys And More',
  'Hurikane',
  'Idowu Couture And Wears',
  'Jane\'s Fashion',
  'Jazzeffect Design',
  'Jeda Sanni',
  'Jide Anthony',
  'Just Noble Collection',
  'Kaabis',
  'Kabira Alasho',
  'King Kodo',
  'Knotcraftsbyla',
  'Kola Kuddus',
  'Kovvex',
  'Kure\'s Hands',
  'Lavilah Fashion',
  'Lawiza Creations',
  'Lhambi',
  'Lohije',
  'Lubena Kaftan Hub',
  'Lutaawo',
  'Lysog Chari',
  'Majestik Designs',
  'Man Stitches',
  'Maple Street',
  'Mega Lizzy',
  'Melira',
  'Mettabel\'s Thread',
  'Mieko Michi',
  'Moe Inspired',
  'Namiwa Swim',
  'Needles By Pooki',
  'Nella Stitches',
  'Neptunes Female Clothing',
  'Northarabia Couture',
  'Olive Republic',
  'Oma Apparel Designs',
  'Omaji Designs',
  'On Bended Knees',
  'Outspokn Clothiers',
  'Perlemoni L\'afrique',
  'Preob Atelier',
  'Pushxclusive',
  'Rayha Swish Empire',
  'Rubik',
  'Seamed By Temmy',
  'Shaglloy',
  'Shinne By Sarah Adesemoye',
  'Superior Threads',
  'The Kaonyeli Studio',
  'TÚndÉ ŌnibÀtÀ',
  'Ty Luxury Couture',
  'Un Erret World',
  'Urban Modestee',
  'Uygonish Luxury',
  'Uzoza Couture',
  'Veekee Threads',
  'Velante',
  'Xxhundred',
];

export default function DesignersDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const groupedDesigners = allDesigners.reduce((acc, designer) => {
    const firstLetter = designer[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(designer);
    return acc;
  }, {} as Record<string, string[]>);

  const sortedLetters = Object.keys(groupedDesigners).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="py-2 px-1 hover:opacity-70 cursor-pointer transition text-white font-normal text-sm whitespace-nowrap"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Designers
      </button>

      {isOpen && (
        <div className="fixed left-0 top-[120px] w-full bg-white text-gray-900 shadow-2xl py-8 px-4 z-50 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left section - Designers by letter */}
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="font-bold text-sm mb-8 uppercase tracking-wide text-gray-900">
                DESIGNERS
              </h3>
              
              {/* Alphabet tabs */}
              <div className="mb-8 flex flex-wrap gap-2">
                {sortedLetters.map((letter) => (
                  <button
                    key={letter}
                    className="px-3 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-100 rounded transition"
                  >
                    {letter}
                  </button>
                ))}
              </div>

              {/* Designers list in columns */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {sortedLetters.map((letter) => (
                  <div key={letter}>
                    <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-gray-900">
                      {letter}
                    </h4>
                    <ul className="space-y-2">
                      {groupedDesigners[letter].map((designer) => (
                        <li key={designer}>
                          <a
                            href={`/designers?filter=${encodeURIComponent(designer)}`}
                            className="text-xs text-gray-700 hover:text-gray-900 transition font-normal"
                          >
                            {designer}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right section - Image and text */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 flex flex-col">
              <div className="relative h-64 md:h-80 lg:h-96 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/product-designer-1.jpg"
                  alt="Designers collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-2">
                Style That Suits
              </h4>
              <p className="text-sm text-gray-600">
                For every occasion
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
