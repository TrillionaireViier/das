"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Fish, Heart, Crown } from "lucide-react"
import type { Language } from "@/lib/translations"

interface Enhanced3DHeroProps {
  language?: Language
}

export function Enhanced3DHero({ language = "en" }: Enhanced3DHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const stats = [
    {
      icon: Crown,
      value: "New",
      label: "Leading Purple Fish Brand",
      color: "text-yellow-400",
      bgColor: "bg-white/20",
    },
    {
      icon: Heart,
      value: "$3",
      label: "Per Sale Aid",
      color: "text-pink-400",
      bgColor: "bg-white/20",
    },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden"
    >
      {/* Swimming Fish Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <Fish
            key={i}
            className={`absolute text-white opacity-10 animate-swim ${i % 2 === 0 ? "h-8 w-8" : "h-6 w-6"}`}
            style={{
              left: `${-10 + i * 15}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-12 min-h-[80vh] flex flex-col justify-center">
          {/* Badge */}
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 text-lg font-medium border-0 hover:scale-105 transition-transform duration-200 inline-flex items-center"
            >
              <Crown className="h-5 w-5 mr-2 text-yellow-400" />
              Leading Purple Fish Brand
            </Badge>
          </div>

          {/* Purple Fish Symbol Hero */}
          <div className={`${isLoaded ? "animate-bounce-gentle" : "opacity-0"}`}>
            <div className="relative inline-block">
              <Fish className="h-32 w-32 text-white mx-auto animate-pulse-gentle" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-ping"></div>
              <Crown className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-8 w-8 text-yellow-400 animate-spin-slow" />
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={`space-y-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              <span className="flex items-center justify-center flex-wrap gap-4">
                Purple Fish
                <Fish className="h-16 w-16 text-purple-300 animate-swim-small" />
              </span>
            </h1>

            <div className="w-32 h-2 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              The perfect purple companion that brings joy and comfort wherever you go. One color to suit it all.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold group relative overflow-hidden"
              asChild
            >
              <a href="#buy" className="flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <Fish className="h-full w-auto text-white animate-swim-background" />
                </div>
                <span className="relative z-10">Order Now</span>
                <Crown className="ml-2 h-5 w-5 relative z-10 text-yellow-300 animate-spin-slow" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200 bg-white/5 rounded-full px-8 py-4 text-lg font-semibold group relative overflow-hidden"
              asChild
            >
              <a href="/gallery" className="flex items-center justify-center">
                <span className="relative z-10 flex items-center">
                  View Gallery
                  <Fish className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-wiggle" />
                </span>
              </a>
            </Button>
          </div>

          {/* Stats Preview */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-110 transition-transform duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} backdrop-blur-sm mb-4 relative`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Fish className="h-4 w-4 text-white animate-wiggle" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm lg:text-base text-white/80 font-medium flex items-center justify-center gap-1">
                  <Fish className="h-4 w-4 text-purple-300 animate-pulse" />
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with Purple Fish */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <Fish className="h-6 w-6 text-white mb-2 animate-swim-small" />
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes swim {
          0% { transform: translateX(-100px) rotate(0deg); }
          50% { transform: translateX(calc(100vw + 100px)) rotate(180deg); }
          100% { transform: translateX(-100px) rotate(360deg); }
        }
        @keyframes swim-small {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(5px) rotate(5deg); }
        }
        @keyframes swim-background {
          0% { transform: translateX(-20px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateX(20px) rotate(10deg); opacity: 0.3; }
          100% { transform: translateX(-20px) rotate(0deg); opacity: 0.1; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-swim { animation: swim linear infinite; }
        .animate-swim-small { animation: swim-small 2s ease-in-out infinite; }
        .animate-swim-background { animation: swim-background 4s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1.5s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
      `}</style>
    </section>
  )
}

export default Enhanced3DHero
