import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <Link href={`/product/${id}`} className="block">
        {/* Product Image */}
        <div className="aspect-[3/4] relative overflow-hidden bg-stephanois-gray">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          
          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Heart size={16} className="text-stephanois-burgundy" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <ShoppingCart size={16} className="text-stephanois-burgundy" />
              </button>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <Link href={`/product/${id}`} className="block">
          <h3 className="text-stephanois-black font-medium text-sm sm:text-base mb-1 line-clamp-2">
            {name}
          </h3>
          <p className="text-stephanois-burgundy font-semibold text-sm sm:text-base">
            {price.toLocaleString('fr-MR')} MRU
          </p>
        </Link>
        
        {/* Quick Add to Cart Button */}
        <button className="w-full mt-3 bg-stephanois-burgundy text-white text-sm font-medium py-2 px-3 rounded-md hover:bg-stephanois-burgundy/90 transition-colors duration-200">
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}
