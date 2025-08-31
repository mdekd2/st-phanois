'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Notification from '@/components/Notification'
import { ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { Product } from '@/lib/products'
import Link from 'next/link'

interface ProductPageClientProps {
  product: Product
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error' | 'warning'
    isVisible: boolean
  }>({
    message: '',
    type: 'success',
    isVisible: false
  })
  
  const { addToCart } = useCart()

  const showNotification = (message: string, type: 'success' | 'error' | 'warning') => {
    setNotification({
      message,
      type,
      isVisible: true
    })
  }

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      showNotification('Veuillez sélectionner la taille et la couleur avant d\'ajouter au panier', 'warning')
      return
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    })
    
    showNotification('Produit ajouté au panier avec succès !', 'success')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Custom Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6">
          <Link href="/shop" className="inline-flex items-center text-stephanois-burgundy hover:text-stephanois-burgundy/80 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Retour à la boutique
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden bg-stephanois-gray rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? 'border-stephanois-burgundy' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Vue ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stephanois-black mb-2 sm:mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-stephanois-burgundy">
                {product.price.toLocaleString('fr-MR')} MRU
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">Taille</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-stephanois-burgundy bg-stephanois-burgundy text-white'
                        : 'border-gray-300 hover:border-stephanois-burgundy'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">Couleur</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'border-stephanois-burgundy bg-stephanois-burgundy text-white'
                        : 'border-gray-300 hover:border-stephanois-burgundy'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">Quantité</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 sm:w-16 text-center text-sm sm:text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-3 sm:py-4 text-base sm:text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>
                  {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
                </span>
              </button>
              
              <button className="w-full btn-secondary flex items-center justify-center space-x-2 py-3 sm:py-4 text-base sm:text-lg">
                <Heart className="w-5 h-5" />
                <span>Ajouter aux favoris</span>
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Catégorie</span>
                <span className="text-sm font-medium text-stephanois-black capitalize">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Disponibilité</span>
                <span className={`text-sm font-medium ${
                  product.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.inStock ? 'En stock' : 'Rupture de stock'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
