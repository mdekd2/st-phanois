import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden transition-transform duration-200 group-hover:scale-105">
        {/* Product Image */}
        <div className="aspect-[3/4] relative overflow-hidden bg-stephanois-gray">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-stephanois-black font-medium text-sm mb-1">
            {name}
          </h3>
          <p className="text-stephanois-black font-medium">
            {price.toLocaleString('fr-MR')} MRU
          </p>
        </div>
      </div>
    </Link>
  )
}
