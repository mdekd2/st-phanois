import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'

// Sample product data matching the image
const products = [
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

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-stephanois-black">
            Boutique
          </h1>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
