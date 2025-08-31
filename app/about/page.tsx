import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stephanois-black mb-6">
            À Propos de Stéphanois
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vêtements décontractés masculins modernes et élégants pour l'homme contemporain
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-stephanois-black mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Stéphanois est né d'une passion pour apporter la mode contemporaine 
                à l'homme moderne en Mauritanie et au-delà. Nous croyons que le style 
                doit être accessible, confortable et intemporel.
              </p>
              <p>
                Fondée avec la vision de créer une marque qui allie qualité 
                d'artisanat et prix abordables, nous avons bâti notre réputation 
                sur la livraison d'une valeur exceptionnelle sans compromettre le style ou le confort.
              </p>
              <p>
                Nos collections sont conçues pour l'homme urbain et conscient de la mode 
                qui apprécie les lignes épurées, les matériaux de qualité et les pièces 
                polyvalentes qui conviennent à toutes les occasions.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] bg-stephanois-gray rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=450&fit=crop"
              alt="Boutique Stéphanois"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-stephanois-black text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stephanois-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stephanois-black mb-3">
                Qualité
              </h3>
              <p className="text-gray-600">
                Nous ne compromettons jamais sur la qualité. Chaque pièce de notre collection 
                est fabriquée avec des matériaux premium et une attention aux détails.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-stephanois-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stephanois-black mb-3">
                Accessibilité
              </h3>
              <p className="text-gray-600">
                Nous croyons qu'un grand style ne devrait pas avoir un prix élevé. 
                Notre mission est de rendre la mode de qualité accessible à tous.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-stephanois-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stephanois-black mb-3">
                Style
              </h3>
              <p className="text-gray-600">
                Nos designs s'inspirent des tendances mondiales tout en maintenant 
                un attrait intemporel. Nous créons des pièces qui conviennent à toutes les occasions.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-stephanois-gray rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-semibold text-stephanois-black mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Devenir la destination de référence pour les vêtements décontractés masculins modernes 
            en Mauritanie, offrant une expérience d'achat exceptionnelle en ligne et en magasin. 
            Nous nous engageons à étendre notre portée et à apporter notre mélange unique de 
            style, qualité et accessibilité aux hommes conscients de la mode partout.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
