'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Search, Heart, User } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Boutique', href: '/shop' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  
  const cartItemsCount = getCartCount()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left section: Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-56 h-20"> {/* Logo on the left */}
              <Image
                src="/logo.png"
                alt="Stéphanois Men's Apparel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center section: Navigation links */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Right section: Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <Search size={24} />
            </button>
            <Link href="/wishlist" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <Heart size={24} />
            </Link>
            <Link href="/account" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <User size={24} />
            </Link>
            <Link href="/cart" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200 relative">
              <ShoppingBag size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stephanois-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-stephanois-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="flex flex-col space-y-4 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            
            {/* Mobile Icons */}
            <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-100">
              <button className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
                <Search size={20} />
              </button>
              <Link href="/wishlist" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
                <Heart size={20} />
              </Link>
              <Link href="/account" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
                <User size={20} />
              </Link>
              <Link href="/cart" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200 relative">
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-stephanois-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
