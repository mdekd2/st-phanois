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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Mobile menu button - Left side */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-stephanois-black p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo - Center on mobile, left on desktop */}
          <Link href="/" className="flex-shrink-0 lg:flex-shrink-0">
            <div className="relative w-32 h-12 lg:w-56 lg:h-20">
              <Image
                src="/logo.png"
                alt="Stéphanois Men's Apparel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center">
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
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search - Hidden on mobile (will be in mobile menu) */}
            <button className="hidden lg:block text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <Search size={24} />
            </button>
            
            {/* Wishlist - Hidden on mobile (will be in mobile menu) */}
            <Link href="/wishlist" className="hidden lg:block text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <Heart size={24} />
            </Link>
            
            {/* Account - Hidden on mobile (will be in mobile menu) */}
            <Link href="/account" className="hidden lg:block text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
              <User size={24} />
            </Link>
            
            {/* Cart - Always visible */}
            <Link href="/cart" className="text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200 relative p-2">
              <ShoppingBag size={20} className="lg:w-6 lg:h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stephanois-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-32 h-12">
                    <Image
                      src="/logo.png"
                      alt="Stéphanois Men's Apparel"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  className="text-stephanois-black p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-stephanois-burgundy text-white' 
                            : 'text-stephanois-black hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </nav>

              {/* Mobile Icons */}
              <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-4 gap-4">
                  <button className="flex flex-col items-center space-y-1 text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200">
                    <Search size={20} />
                    <span className="text-xs">Rechercher</span>
                  </button>
                  <Link 
                    href="/wishlist" 
                    className="flex flex-col items-center space-y-1 text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart size={20} />
                    <span className="text-xs">Favoris</span>
                  </Link>
                  <Link 
                    href="/account" 
                    className="flex flex-col items-center space-y-1 text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User size={20} />
                    <span className="text-xs">Compte</span>
                  </Link>
                  <Link 
                    href="/cart" 
                    className="flex flex-col items-center space-y-1 text-stephanois-black hover:text-stephanois-burgundy transition-colors duration-200 relative"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBag size={20} />
                    <span className="text-xs">Panier</span>
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-stephanois-burgundy text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
