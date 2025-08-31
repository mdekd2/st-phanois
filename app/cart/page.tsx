'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Truck, Lock } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const [shippingMethod, setShippingMethod] = useState('standard')

  const subtotal = getCartTotal()
  const shipping = shippingMethod === 'express' ? 200 : 100
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-stephanois-black mb-4">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8">
              Ajoutez des produits à votre panier pour commencer vos achats.
            </p>
            <a href="/shop" className="btn-primary">
              Continuer les achats
            </a>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stephanois-black mb-4">
            Mon Panier
          </h1>
          <p className="text-gray-600">
            Révisez vos articles et procédez au paiement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-serif font-semibold text-stephanois-black mb-6">
                Articles ({items.length})
              </h2>
              
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex space-x-4 border-b border-gray-100 pb-6">
                    <div className="w-24 h-32 bg-stephanois-gray rounded-lg flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-stephanois-black">{item.name}</h3>
                          <p className="text-sm text-gray-600">Taille: {item.size}</p>
                          <p className="text-sm text-gray-600">Couleur: {item.color}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(`${item.id}-${item.size}-${item.color}`)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-semibold text-stephanois-black">
                          {(item.price * item.quantity).toLocaleString('fr-MR')} MRU
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-serif font-semibold text-stephanois-black mb-6">
                Résumé de la commande
              </h2>
              
              {/* Shipping Method */}
              <div className="mb-6">
                <h3 className="font-semibold text-stephanois-black mb-3">Mode de livraison</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === 'standard'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="text-stephanois-burgundy"
                    />
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span className="flex-1">
                      <span className="font-medium">Livraison standard</span>
                      <span className="text-sm text-gray-600 block">3-5 jours ouvrables</span>
                    </span>
                    <span className="font-medium">100 MRU</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === 'express'}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="text-stephanois-burgundy"
                    />
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span className="flex-1">
                      <span className="font-medium">Livraison express</span>
                      <span className="text-sm text-gray-600 block">1-2 jours ouvrables</span>
                    </span>
                    <span className="font-medium">200 MRU</span>
                  </label>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="font-semibold text-stephanois-black mb-3">Mode de paiement</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      defaultChecked
                      className="text-stephanois-burgundy"
                    />
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span>Carte bancaire</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="sedad"
                      className="text-stephanois-burgundy"
                    />
                    <span>Sedad</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="masrivi"
                      className="text-stephanois-burgundy"
                    />
                    <span>Masrivi</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      className="text-stephanois-burgundy"
                    />
                    <span>Paiement à la livraison</span>
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString('fr-MR')} MRU</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shipping.toLocaleString('fr-MR')} MRU</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total.toLocaleString('fr-MR')} MRU</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full btn-primary mt-6 flex items-center justify-center">
                <Lock className="h-5 w-5 mr-2" />
                Procéder au paiement
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Vos informations de paiement sont sécurisées et cryptées
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
