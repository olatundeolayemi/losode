import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Losóde – Premium African Fashion & Homeware Marketplace',
  description: 'Discover authentic African fashion, premium homeware, and lifestyle products. Trusted by 10,000+ customers. Shop luxury designers, furniture, textiles, and accessories with fast delivery.',
  keywords: ['African fashion', 'homeware', 'luxury marketplace', 'sustainable design', 'Nigerian brands', 'African designers'],
  authors: [{ name: 'Olatunde Olayemi' }],
  creator: 'Olatunde Olayemi',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://losode.com',
    siteName: 'Losóde',
    title: 'Losóde – Premium African Fashion & Homeware',
    description: 'Discover authentic African fashion, premium homeware, and lifestyle products. Trusted by 10,000+ customers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Losóde - Premium African Fashion & Homeware Marketplace',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter metadata for social sharing
  twitter: {
    card: 'summary_large_image',
    title: 'Losóde – Premium African Fashion & Homeware',
    description: 'Discover authentic African fashion and premium homeware. Trusted by 10,000+ customers.',
    images: ['/og-image.jpg'],
    creator: '@losode_official',
  },

  // Additional metadata
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  // Mobile
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
