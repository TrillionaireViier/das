export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  description: string
  hasLanyard: boolean
  size: string
  features: string[]
  badge: string
  quantity: number
}

export const PRODUCTS: Omit<CartItem, "quantity">[] = [
  {
    id: "purple-fish-with-lanyard",
    name: "Purple Fish with Lanyard",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Perfect purple fish companion with practical lanyard for keys, bags, or daily carry. Soft, cuddly, and always ready for adventure!",
    hasLanyard: true,
    size: "6 inches",
    features: [
      "Ultra-soft premium plush material",
      "Durable detachable lanyard included",
      "Perfect for keys, bags, or backpacks",
      "Stress-relief companion",
      "Machine washable",
    ],
    badge: "Most Popular",
  },
  {
    id: "purple-fish-plush-only",
    name: "Purple Fish Plush Only",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Pure comfort-focused purple fish plush. Designed for maximum cuddliness and emotional support without any attachments.",
    hasLanyard: false,
    size: "6 inches",
    features: [
      "Extra-soft premium plush material",
      "Optimized for comfort and cuddling",
      "Perfect bedside companion",
      "Anxiety and stress relief",
      "Machine washable",
    ],
    badge: "Comfort Focus",
  },
]

export function calculateCartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const ukraineDonation = items.reduce((sum, item) => sum + 3 * item.quantity, 0)
  const total = subtotal + shipping + ukraineDonation

  return {
    subtotal,
    shipping,
    ukraineDonation,
    total,
  }
}
