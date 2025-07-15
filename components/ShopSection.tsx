"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Link, Gift, Star, Plus, Fish, Crown } from "lucide-react"
import { PRODUCTS } from "@/lib/cart"
import { ProgressiveImage } from "@/components/ProgressiveImage"

interface ShopSectionProps {
  onAddToCart: (productId: string) => void
}

export function ShopSection({ onAddToCart }: ShopSectionProps) {
  const [addingToCart, setAddingToCart] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleAddToCart = async (productId: string) => {
    setAddingToCart(productId)
    onAddToCart(productId)

    // Reset loading state after animation
    setTimeout(() => {
      setAddingToCart(null)
    }, 1000)
  }

  const chessIcons = [Crown, Fish]

  return (
    <section id="shop" className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Chess Pieces */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`chess-${i}`}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <span className="text-6xl text-purple-900">{["♔", "♕", "♖", "♗", "♘", "♙"][i]}</span>
          </div>
        ))}

        {/* Swimming Purple Fish */}
        {[...Array(4)].map((_, i) => (
          <Fish
            key={`fish-${i}`}
            className="absolute h-8 w-8 text-purple-200 opacity-20 animate-swim"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header with Purple Fish Symbols */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Fish className="h-8 w-8 text-purple-600 mr-4 animate-swim-small" />
            <h2 className="text-4xl font-bold text-purple-900">Choose Your Purple Fish</h2>
            <Fish className="h-8 w-8 text-purple-600 ml-4 animate-swim-small" style={{ animationDelay: "1s" }} />
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Two perfect options to bring purple fish joy into your life. Each purchase donates $3 to Ukrainian families
            in need.
          </p>
        </div>

        {/* Products Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map((product, index) => {
            const ChessIcon = chessIcons[index % chessIcons.length]
            return (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-2 hover:border-purple-300 relative group"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-x"></div>

                {/* Product Image with Purple Fish Overlay */}
                <div className="relative h-64 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
                  <ProgressiveImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Floating Purple Fish on Hover */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredCard === product.id ? "opacity-100" : "opacity-0"}`}
                  >
                    {[...Array(3)].map((_, i) => (
                      <Fish
                        key={i}
                        className="absolute h-6 w-6 text-purple-400 animate-swim-overlay"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>

                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white flex items-center">
                    <ChessIcon className="h-3 w-3 mr-1" />
                    {product.badge}
                  </Badge>

                  <div className="absolute top-4 left-4">
                    {product.hasLanyard ? (
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:animate-bounce">
                        <Link className="h-5 w-5 text-purple-600" />
                      </div>
                    ) : (
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:animate-bounce">
                        <Gift className="h-5 w-5 text-purple-600" />
                      </div>
                    )}
                  </div>

                  {/* Chess Pattern Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {["♔", "♕", "♖"].map((piece, i) => (
                        <span
                          key={i}
                          className="text-white text-lg opacity-60 animate-fade-in"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {piece}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-purple-900 flex items-center">
                      {product.name}
                      <Fish className="h-4 w-4 ml-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-swim-small" />
                    </CardTitle>
                    <div className="text-2xl font-bold text-purple-600 flex items-center">
                      ${product.price}
                      <Crown className="h-4 w-4 ml-1 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List with Chess Icons */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <Fish className="h-4 w-4 mr-2 text-purple-600" />
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-center mr-2">
                            <Star className="h-4 w-4 text-purple-400 mr-1" />
                            <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {["♔", "♕", "♖", "♗"][idx % 4]}
                            </span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lanyard Status with Animation */}
                  <div className="mb-6 p-3 bg-purple-50 rounded-lg border border-purple-100 group-hover:bg-purple-100 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-900 flex items-center">
                        <Fish className="h-4 w-4 mr-2 animate-pulse" />
                        {product.hasLanyard ? "Includes Lanyard" : "Plush Only"}
                      </span>
                      <div className="flex items-center text-sm text-purple-600">
                        {product.hasLanyard ? (
                          <>
                            <Link className="h-4 w-4 mr-1 group-hover:animate-wiggle" />
                            Perfect for keys & bags
                          </>
                        ) : (
                          <>
                            <Gift className="h-4 w-4 mr-1 group-hover:animate-bounce" />
                            Pure comfort focus
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Ukraine Donation Callout with Enhanced Design */}
                  <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-yellow-50 border border-blue-200 rounded-lg relative overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                    <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Fish className="h-12 w-12 text-blue-400 animate-swim-small" />
                    </div>
                    <div className="flex items-center text-sm relative z-10">
                      <Heart className="h-4 w-4 text-red-500 mr-2 animate-pulse" />
                      <span className="text-gray-700">
                        <strong>$3 donated to Ukraine</strong> with this purchase
                      </span>
                      <Crown className="h-4 w-4 ml-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />
                    </div>
                  </div>

                  {/* Add to Cart Button with Enhanced Animation */}
                  <Button
                    onClick={() => handleAddToCart(product.id)}
                    disabled={addingToCart === product.id}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    {addingToCart === product.id ? (
                      <div className="flex items-center relative z-10">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Adding to Cart...
                        <Fish className="ml-2 h-4 w-4 animate-wiggle" />
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        <Plus className="h-5 w-5 mr-2" />
                        Add to Cart - ${product.price}
                        <Fish className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-swim-small" />
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA with Chess Board Pattern */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-8 max-w-2xl mx-auto relative overflow-hidden group">
            {/* Chess Board Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 h-full">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${(Math.floor(i / 8) + i) % 2 === 0 ? "bg-purple-900" : "bg-transparent"} animate-chess-fade`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Swimming Fish Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <Fish
                  key={i}
                  className="absolute h-16 w-16 text-purple-300 opacity-10 animate-swim-background"
                  style={{
                    top: `${20 + i * 30}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${8 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-6 w-6 text-yellow-500 mr-3 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-purple-900">Leading Purple Fish Brand</h3>
                <Fish className="h-6 w-6 text-purple-600 ml-3 animate-wiggle" />
              </div>

              <p className="text-purple-700 mb-6">
                As the newest and most prominent purple fish lanyard company, we're committed to bringing joy while
                making a difference. Every purchase supports Ukrainian families in need.
              </p>

              <div className="text-center">
                <div className="group hover:transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold text-purple-900 flex items-center justify-center">
                    New
                    <Crown className="h-5 w-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-sm text-purple-600">Leading Brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes swim {
          0% { transform: translateX(-100px) rotate(0deg); }
          50% { transform: translateX(50px) rotate(10deg); }
          100% { transform: translateX(100vw) rotate(0deg); }
        }
        @keyframes swim-small {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(8px) rotate(5deg); }
        }
        @keyframes swim-overlay {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateX(20px) translateY(-10px) rotate(15deg); opacity: 0.7; }
        }
        @keyframes swim-background {
          0% { transform: translateX(-50px) translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateX(50px) translateY(-20px) rotate(15deg); opacity: 0.2; }
          100% { transform: translateX(-50px) translateY(0px) rotate(0deg); opacity: 0.1; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes chess-fade {
          0% { opacity: 0; }
          50% { opacity: 0.1; }
          100% { opacity: 0.05; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-swim { animation: swim 15s linear infinite; }
        .animate-swim-small { animation: swim-small 2s ease-in-out infinite; }
        .animate-swim-overlay { animation: swim-overlay 4s ease-in-out infinite; }
        .animate-swim-background { animation: swim-background 10s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-chess-fade { animation: chess-fade 2s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </section>
  )
}
