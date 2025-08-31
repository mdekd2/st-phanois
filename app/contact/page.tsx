'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, CreditCard } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Merci pour votre message ! Nous vous répondrons bientôt.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stephanois-black mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-nous. Nous aimerions avoir de vos nouvelles et répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-stephanois-black mb-6">
              Envoyez-nous un Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stephanois-black mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stephanois-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stephanois-black mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                  placeholder="De quoi s'agit-il ?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stephanois-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-stephanois-burgundy focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-stephanois-black mb-6">
              Contactez-Nous
            </h2>
            
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stephanois-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stephanois-black mb-1">Téléphone</h3>
                    <p className="text-gray-600">+222 XXX XXX XXX</p>
                    <p className="text-sm text-gray-500">Lundi - Vendredi, 9h00 - 18h00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stephanois-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stephanois-black mb-1">Email</h3>
                    <p className="text-gray-600">contact@stephanois.com</p>
                    <p className="text-sm text-gray-500">Nous répondrons dans les 24 heures</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stephanois-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stephanois-black mb-1">Adresse</h3>
                    <p className="text-gray-600">Nouakchott, Mauritanie</p>
                    <p className="text-sm text-gray-500">Visitez notre boutique pour la meilleure expérience</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-stephanois-black">WhatsApp</h3>
                    <p className="text-sm text-gray-600">Support rapide via WhatsApp</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/222XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-stephanois-black mb-4">Suivez-Nous</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-stephanois-burgundy rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-stephanois-burgundy rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="font-semibold text-stephanois-black mb-4">Modes de Paiement</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Carte bancaire</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>Sedad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>Masrivi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💵</span>
                    <span>Paiement à la livraison</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
