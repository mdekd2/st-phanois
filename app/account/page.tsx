'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { User, Lock, Mail, Package, Heart, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@/contexts/UserContext'
import Notification from '@/components/Notification'

// Sample orders data - in a real app, this would come from a database
const sampleOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'Livré',
    total: 13500,
    items: [
      { name: 'T-shirt Stéphanois Classic', quantity: 2, price: 4500 },
      { name: 'Hoodie Stéphanois Premium', quantity: 1, price: 4500 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'En cours de livraison',
    total: 9000,
    items: [
      { name: 'Chemise Stéphanois Business', quantity: 2, price: 4500 }
    ]
  }
]

// Sample wishlist data
const sampleWishlist = [
  { id: '1', name: 'T-shirt Stéphanois Classic', price: 4500, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop' },
  { id: '2', name: 'Hoodie Stéphanois Premium', price: 4500, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop' },
  { id: '3', name: 'Chemise Stéphanois Business', price: 4500, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop' }
]

export default function AccountPage() {
  const { user, loading, signInUser, logout } = useUser()
  const [activeTab, setActiveTab] = useState('profile')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error' | 'warning'
    isVisible: boolean
  }>({
    message: '',
    type: 'success',
    isVisible: false
  })

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLoggingIn) return
    
    if (!loginData.email || !loginData.password) {
      showNotification('Veuillez remplir tous les champs', 'warning')
      return
    }

    setIsLoggingIn(true)

    try {
      await signInUser(loginData.email, loginData.password)
      showNotification('Connexion réussie !', 'success')
      setLoginData({ email: '', password: '' })
    } catch (error: any) {
      showNotification(error.message, 'error')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      showNotification('Déconnexion réussie', 'success')
    } catch (error: any) {
      showNotification('Erreur lors de la déconnexion', 'error')
    }
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stephanois-burgundy mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!user) {
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
        
        <main className="max-w-md mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-stephanois-black mb-2">
              Se Connecter
            </h1>
            <p className="text-gray-600">Accédez à votre compte Stéphanois</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stephanois-black mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-stephanois-black mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                    placeholder="Votre mot de passe"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte?{' '}
                <Link href="/signup" className="text-stephanois-burgundy hover:underline font-medium">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-stephanois-black mb-2">
            Mon Compte
          </h1>
          <p className="text-gray-600">Bienvenue, {user.firstName} {user.lastName}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-stephanois-burgundy text-white'
                      : 'text-stephanois-black hover:bg-gray-50'
                  }`}
                >
                  <User className="inline-block w-4 h-4 mr-2" />
                  Profil
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-stephanois-burgundy text-white'
                      : 'text-stephanois-black hover:bg-gray-50'
                  }`}
                >
                  <Package className="inline-block w-4 h-4 mr-2" />
                  Mes Commandes
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'wishlist'
                      ? 'bg-stephanois-burgundy text-white'
                      : 'text-stephanois-black hover:bg-gray-50'
                  }`}
                >
                  <Heart className="inline-block w-4 h-4 mr-2" />
                  Favoris
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 rounded-md text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="inline-block w-4 h-4 mr-2" />
                  Se déconnecter
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-serif font-semibold text-stephanois-black mb-6">
                  Informations du profil
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-stephanois-black mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={`${user.firstName} ${user.lastName}`}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stephanois-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stephanois-black mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={user.phone}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <button className="btn-primary">
                    Sauvegarder les modifications
                  </button>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-serif font-semibold text-stephanois-black mb-6">
                  Mes Commandes
                </h2>
                <div className="space-y-4">
                  {sampleOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-stephanois-black">Commande {order.id}</h3>
                          <p className="text-sm text-gray-600">Date: {order.date}</p>
                          <p className="text-sm text-gray-600">Articles: {order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-stephanois-black">{order.total.toLocaleString('fr-MR')} MRU</p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === 'Livré' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-serif font-semibold text-stephanois-black mb-6">
                  Mes Favoris
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleWishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex space-x-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-stephanois-black">{item.name}</h3>
                          <p className="text-stephanois-black font-medium">{item.price.toLocaleString('fr-MR')} MRU</p>
                          <button className="btn-primary mt-2 text-sm">
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
