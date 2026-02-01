'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface NavDropdownProps {
  label: string;
  items: {
    title: string;
    subitems: string[];
  };
  designers: string[];
  image: {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
  };
}

export default function NavDropdown({
  label,
  items,
  designers,
  image,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Get the main category link
  const getCategoryLink = () => {
    const labelMap: { [key: string]: string } = {
      'In': '/women/new-in',
      'Shop By': '/shop-by/beach-wear',
      'Clothing': '/clothing',
      'Shoes': '/shoes',
      'Bags': '/bags',
      'Jewellery': '/jewellery',
      'Accessories': '/accessories',
      'Beauty': '/beauty',
      'Homeware': '/homeware',
    };
    return labelMap[label] || '#';
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div
        className="relative group hidden md:block"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          href={getCategoryLink()}
          className="py-2 px-3 lg:px-4 hover:bg-muted rounded-lg cursor-pointer transition-all text-foreground font-medium text-sm whitespace-nowrap inline-block"
          onClick={(e) => {
            if (isOpen) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          {label}
        </Link>

        {isOpen && (
          <div className="fixed left-0 top-full w-full bg-card text-foreground shadow-2xl py-8 px-4 md:px-6 lg:px-8 z-50 animate-in fade-in duration-200 border-t border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Left section - Categories */}
              <div className="min-h-96 md:min-h-auto">
                <h3 className="font-bold text-sm mb-6 uppercase tracking-wide text-foreground">
                  {items.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {items.subitems.map((item) => {
                    const slug = item
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/&/g, 'and');
                    
                    let href = '#';
                    if (label === 'Shop By') {
                      href = `/shop-by/${slug}`;
                    } else if (label === 'In') {
                      // Handle New In items
                      if (item === 'Dresses') {
                        href = `/women/new-in`;
                      } else if (item === 'Kimonos') {
                        href = `/women/clothing`;
                      } else if (item === 'Boubous') {
                        href = `/women/clothing`;
                      } else if (item === 'Coats And Jackets') {
                        href = `/women/clothing`;
                      } else if (item === 'Tops And Blouses') {
                        href = `/women/clothing`;
                      } else if (item === 'Jumpsuits And Playsuits') {
                        href = `/women/clothing`;
                      } else {
                        href = `/women/new-in`;
                      }
                    } else if (label === 'Clothing') {
                      href = `/clothing`;
                    } else if (label === 'Shoes') {
                      href = `/shoes`;
                    } else if (label === 'Bags') {
                      href = `/bags`;
                    } else if (label === 'Jewellery') {
                      href = `/jewellery`;
                    } else if (label === 'Accessories') {
                      href = `/accessories`;
                    } else if (label === 'Beauty') {
                      href = `/beauty`;
                    } else if (label === 'Homeware') {
                      href = `/homeware`;
                    }

                    return (
                      <li key={item}>
                        <Link
                          href={href}
                          className="text-muted-foreground hover:text-foreground transition font-normal hover:translate-x-1 inline-block"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Middle section - Designers */}
              <div className="hidden md:block">
                <h3 className="font-bold text-sm mb-6 uppercase tracking-wide text-foreground">
                  Designers
                </h3>
                <ul className="space-y-3 text-sm">
                  {designers.slice(0, 6).map((designer) => (
                    <li key={designer}>
                      <Link
                        href="/designers"
                        className="text-muted-foreground hover:text-foreground transition font-normal hover:translate-x-1 inline-block"
                      >
                        {designer}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right section - Image and tagline */}
              <div className="hidden md:flex flex-col gap-6">
                <div className="relative aspect-[3/4] w-full max-w-xs rounded-lg overflow-hidden">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground leading-tight">
                    {image.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">{image.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted rounded-lg transition-all text-foreground font-medium text-sm"
        >
          {label}
          <ChevronRight 
            size={18} 
            className={`transition-transform ${isMobileOpen ? 'rotate-90' : ''}`}
          />
        </button>
        
        {isMobileOpen && (
          <div className="bg-muted/30 rounded-lg mt-1 p-3 space-y-2">
            <Link
              href={getCategoryLink()}
              className="block text-sm font-bold text-foreground px-2 py-2 rounded hover:bg-muted transition-all mb-3 border-b border-muted pb-3"
            >
              View all {label}
            </Link>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                {items.title}
              </p>
              <div className="space-y-2">
                {items.subitems.map((item) => {
                  const slug = item
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/&/g, 'and');
                  
                  let href = '#';
                  if (label === 'Shop By') {
                    href = `/shop-by/${slug}`;
                  } else if (label === 'In') {
                    href = `/women/new-in`;
                  } else if (label === 'Clothing') {
                    href = `/clothing`;
                  } else if (label === 'Shoes') {
                    href = `/shoes`;
                  } else if (label === 'Bags') {
                    href = `/bags`;
                  } else if (label === 'Jewellery') {
                    href = `/jewellery`;
                  } else if (label === 'Accessories') {
                    href = `/accessories`;
                  } else if (label === 'Beauty') {
                    href = `/beauty`;
                  } else if (label === 'Homeware') {
                    href = `/homeware`;
                  }

                  return (
                    <Link
                      key={item}
                      href={href}
                      className="block text-sm text-muted-foreground hover:text-foreground px-2 py-2 rounded hover:bg-muted transition-all"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
