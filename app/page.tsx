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
      <section className="relative bg-stephanois-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stephanois-black mb-6">
            Nouvelle Collection
          </h1>
          <p className="text-xl text-stephanois-black mb-8 max-w-2xl mx-auto">
            Découvrez nos dernières arrivées en vêtements décontractés pour hommes. 
            Mode moderne, élégante et abordable pour l'homme contemporain.
          </p>
          <Link href="/shop" className="btn-primary">
            Acheter Maintenant
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-stephanois-black mb-4">
              Produits Vedettes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos articles les plus populaires de la dernière collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary">
              Voir Tous les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-stephanois-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-semibold text-stephanois-black mb-6">
              À Propos de Stéphanois
            </h2>
            <p className="text-lg text-stephanois-black max-w-3xl mx-auto mb-8">
              Nous sommes passionnés par l'apport des dernières tendances de la mode masculine. 
              Notre collection allie style, confort et accessibilité pour répondre aux besoins 
              de l'homme moderne en Mauritanie et au-delà.
            </p>
            <Link href="/about" className="btn-primary">
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
