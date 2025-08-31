import { getProductById, products } from '@/lib/products'
import ProductPageClient from '@/components/ProductPageClient'

// Generate static params for static export
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // Get product data from the products array
  const product = getProductById(params.id)

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-stephanois-black mb-4">
              Produit non trouvé
            </h1>
            <p className="text-gray-600">Le produit que vous recherchez n'existe pas.</p>
          </div>
        </div>
      </div>
    )
  }

  return <ProductPageClient product={product} />
}
