import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { UserProvider } from '@/contexts/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://stephanois-bd287.web.app'),
  title: 'Stéphanois - Men\'s Apparel',
  description: 'Modern, elegant men\'s casual wear. Discover our collection of t-shirts, shirts, hoodies, jackets and more.',
  keywords: 'men\'s fashion, casual wear, t-shirts, hoodies, jackets, mauritania',
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Stéphanois - Men\'s Apparel',
    description: 'Modern, elegant men\'s casual wear. Discover our collection of t-shirts, shirts, hoodies, jackets and more.',
    type: 'website',
    locale: 'fr_MR',
    siteName: 'Stéphanois',
    url: 'https://stephanois-bd287.web.app',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Stéphanois - Men\'s Apparel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stéphanois - Men\'s Apparel',
    description: 'Modern, elegant men\'s casual wear. Discover our collection of t-shirts, shirts, hoodies, jackets and more.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B2635" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Stéphanois" />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
