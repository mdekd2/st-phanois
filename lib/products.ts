export interface Product {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  sizes: string[]
  colors: string[]
  category: string
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'T-Shirt Premium',
    price: 4500,
    description: 'T-shirt en coton premium avec une coupe moderne. Parfait pour un usage quotidien, ce t-shirt confortable et élégant présente un design col rond classique.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=667&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=667&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=667&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanc', 'Noir', 'Bleu Marine', 'Gris'],
    category: 't-shirts',
    rating: 4.5,
    reviews: 24,
    inStock: true
  },
  {
    id: '2',
    name: 'Chemise Élégante',
    price: 8500,
    description: 'Chemise élégante en coton de qualité supérieure. Idéale pour les occasions professionnelles et les sorties décontractées.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=667&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=667&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc', 'Bleu', 'Rose'],
    category: 'shirts',
    rating: 4.3,
    reviews: 18,
    inStock: true
  },
  {
    id: '3',
    name: 'Hoodie Stéphanois',
    price: 12000,
    description: 'Hoodie confortable avec le logo Stéphanois. Parfait pour les journées fraîches et le style urbain.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=667&fit=crop',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=667&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris', 'Bleu Marine'],
    category: 'hoodies',
    rating: 4.7,
    reviews: 32,
    inStock: true
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}
