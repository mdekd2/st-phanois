'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Notification from '@/components/Notification'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

// Sample product data - in a real app, this would come from a database
const productData = {
  id: '1',
  name: 'T-Shirt',
  price: 4500,
  description: 'T-shirt en coton premium avec une coupe moderne. Parfait pour un usage quotidien, ce t-shirt confortable et élégant présente un design col rond classique.',
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=667&fit=crop',
    'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=667&fit=crop',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=667&fit=crop'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Blanc', 'Noir', 'Bleu Marine', 'Gris'],
  category: 't-shirts',
  rating: 4.5,
  reviews: 24,
  inStock: true
}

export default function ProductPage({ params }: { params: { id: string } }) {
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
      id: productData.id,
      name: productData.name,
      price: productData.price,
      image: productData.images[0],
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden bg-stephanois-gray rounded-lg">
              <Image
                src={productData.images[selectedImage]}
                alt={productData.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden bg-stephanois-gray rounded-lg ${
                    selectedImage === index ? 'ring-2 ring-stephanois-burgundy' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-stephanois-black mb-2">
                {productData.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(productData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {productData.rating} ({productData.reviews} avis)
                </span>
              </div>
              <p className="text-2xl font-bold text-stephanois-black">
                {productData.price.toLocaleString('fr-MR')} MRU
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">
                Couleur: {selectedColor || 'Sélectionnez une couleur'}
              </h3>
              <div className="flex space-x-3">
                {productData.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-stephanois-burgundy text-stephanois-burgundy'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">
                Taille: {selectedSize || 'Sélectionnez une taille'}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-stephanois-burgundy text-stephanois-burgundy'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-stephanois-black mb-3">
                Quantité
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Ajouter au Panier</span>
              </button>
              
              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Ajouter aux Favoris</span>
              </button>
            </div>

            {/* Stock Status */}
            <div className="text-sm text-gray-600">
              {productData.inStock ? (
                <span className="text-green-600">✓ En Stock</span>
              ) : (
                <span className="text-red-600">✗ Rupture de Stock</span>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
