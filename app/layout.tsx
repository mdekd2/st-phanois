import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { UserProvider } from '@/contexts/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stéphanois - Men\'s Apparel',
  description: 'Modern, elegant men\'s casual wear. Discover our collection of t-shirts, shirts, hoodies, jackets and more.',
  keywords: 'men\'s fashion, casual wear, t-shirts, hoodies, jackets, mauritania',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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
