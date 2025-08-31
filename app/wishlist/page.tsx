import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'

// Sample wishlist data
const wishlistItems = [
  {
    id: '1',
    name: 'T-Shirt',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=667&fit=crop',
    category: 't-shirts'
  },
  {
    id: '2',
    name: 'Chemise à Carreaux',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=667&fit=crop',
    category: 'shirts'
  },
  {
    id: '3',
    name: 'Pull à Capuche',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=667&fit=crop',
    category: 'hoodies'
  },
  {
    id: '4',
    name: 'Veste Bomber',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=667&fit=crop',
    category: 'jackets'
  }
]

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-stephanois-burgundy mr-3" />
            <h1 className="text-4xl font-serif font-bold text-stephanois-black">
              Mes Favoris
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez tous vos produits favoris. Ajoutez-les à votre panier ou supprimez-les de votre liste.
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-semibold text-stephanois-black mb-2">
              Votre liste de favoris est vide
            </h2>
            <p className="text-gray-600 mb-8">
              Parcourez notre collection et ajoutez vos produits préférés à votre liste de favoris.
            </p>
            <a href="/shop" className="btn-primary">
              Découvrir nos produits
            </a>
          </div>
        ) : (
          <>
            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative">
                  <ProductCard {...item} />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stephanois-burgundy hover:text-white transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="btn-primary flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter tout au panier
                </button>
                <button className="btn-secondary flex items-center justify-center">
                  <Trash2 className="h-5 w-5 mr-2" />
                  Vider la liste
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
