import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stephanois-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="relative w-32 h-12 mb-4">
              <Image
                src="/logo.png"
                alt="Stéphanois Men's Apparel"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm sm:text-base">
              Modern, elegant men's casual wear. Discover our collection of t-shirts, 
              shirts, hoodies, jackets and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-stephanois-burgundy transition-colors p-2">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-stephanois-burgundy transition-colors p-2">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Mon Compte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">+222 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">contact@stephanois.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Nouakchott, Mauritania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
          <p className="text-sm sm:text-base">&copy; 2024 Stéphanois. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
