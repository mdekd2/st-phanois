import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

// Sample product data - in a real app, this would come from a database
const featuredProducts = [
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
    name: 'Polo',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=667&fit=crop',
    category: 'polos'
  },
  {
    id: '5',
    name: 'Pull DENIM',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=667&fit=crop',
    category: 'hoodies'
  },
  {
    id: '6',
    name: 'Veste Bomber',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=667&fit=crop',
    category: 'jackets'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-stephanois-gray py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stephanois-black mb-4 sm:mb-6">
            Nouvelle Collection
          </h1>
          <p className="text-lg sm:text-xl text-stephanois-black mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Découvrez nos dernières arrivées en vêtements décontractés pour hommes. 
            Mode moderne, élégante et abordable pour l'homme contemporain.
          </p>
          <Link href="/shop" className="btn-primary text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4">
            Acheter Maintenant
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stephanois-black mb-3 sm:mb-4">
              Produits Vedettes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Explorez nos articles les plus populaires de la dernière collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/shop" className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
              Voir Tous les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-stephanois-gray py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-stephanois-black mb-4 sm:mb-6">
              À Propos de Stéphanois
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Stéphanois est une marque de vêtements décontractés pour hommes qui allie style, 
              confort et qualité. Notre mission est de proposer des vêtements modernes et élégants 
              à des prix accessibles, pour l'homme qui souhaite s'habiller avec style au quotidien.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/about" className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stephanois-burgundy rounded-lg p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white mb-4">
              Restez Informé
            </h2>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir en avant-première nos nouvelles collections 
              et offres exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-stephanois-black"
              />
              <button className="bg-white text-stephanois-burgundy font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
