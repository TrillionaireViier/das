"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Heart, Star, Users, Smile, Brain, Crown, Castle, Shield } from "lucide-react"
import { PageLoadingSkeleton, FishCardSkeleton, CareGuideSkeleton } from "@/components/skeletons"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"
import { Enhanced3DHero } from "@/components/Enhanced3DHero"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { UkraineCharitySection } from "@/components/UkraineCharitySection"
import { getTranslation, type Language } from "@/lib/translations"
import { ShopSection } from "@/components/ShopSection"
import { useCart } from "@/hooks/useCart"
import { CartDrawer } from "@/components/CartDrawer"
import { CommunitySection } from "@/components/CommunitySection"
import { ResearchSection } from "@/components/ResearchSection"
import { FeaturesComparisonSection } from "@/components/FeaturesComparisonSection"

function DynamicFooterText() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "Danylo Viier worked hard for this website!",
    "Danylo Viier designed the fishy UI!",
    "Danylo Viier coded this purple paradise!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <p>
      © 2025 Purple Fish Lanyards. All rights reserved.{" "}
      <a
        href="https://www.linkedin.com/in/daniel-viier/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 animate-pulse"
      >
        {phrases[currentPhrase]}
      </a>
    </p>
  )
}

function CompanionCard({ companion, index, language }: { companion: any; index: number; language: Language }) {
  return (
    <LazyCard delay={index * 150} fallback={<FishCardSkeleton />} className="h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
        <div className="relative h-48">
          <ProgressiveImage src={companion.image} alt={companion.name} fill className="rounded-t-lg" />
          <Badge className="absolute top-4 right-4 bg-purple-600 animate-fade-in">{companion.difficulty}</Badge>
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center text-white text-sm">
              <Heart className="h-4 w-4 mr-1 text-red-400" />
              <span>{companion.lonelinessReduction} joy</span>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-purple-900">{companion.name}</CardTitle>
          <CardDescription className="italic">{companion.scientificName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{companion.description}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Size:</span>
              <span className="font-medium">{companion.size}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Companionship:</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{companion.companionshipLevel}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Emotional Bond:</span>
              <span className="font-medium text-purple-600">{companion.emotionalBond}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </LazyCard>
  )
}

function CareGuideCard({ guide, index, language }: { guide: any; index: number; language: Language }) {
  return (
    <LazyCard delay={index * 200} fallback={<CareGuideSkeleton />} className="h-full">
      <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 animate-bounce-slow">
            {guide.icon}
          </div>
          <CardTitle className="text-purple-900">{guide.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{guide.description}</p>
        </CardContent>
      </Card>
    </LazyCard>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  return (
    <LazyCard delay={index * 100} animationClass="animate-scale-in" className="text-center">
      <div className="animate-count-up">
        <div className="text-4xl font-bold mb-2">{stat.number}</div>
        <div className="text-purple-100">{stat.label}</div>
      </div>
    </LazyCard>
  )
}

export default function HomePage() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [language, setLanguage] = useState<Language>("en")
  const { addToCart } = useCart()

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language
    if (["en", "uk", "de", "fr"].includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  const featuredCompanions = [
    {
      name: getTranslation(language, "pufferfish.name"),
      scientificName: getTranslation(language, "pufferfish.scientificName"),
      difficulty: getTranslation(language, "pufferfish.difficulty"),
      size: getTranslation(language, "pufferfish.size"),
      image: "/placeholder.svg?height=300&width=400",
      description: getTranslation(language, "pufferfish.description"),
      companionshipLevel: getTranslation(language, "pufferfish.companionshipLevel"),
      lonelinessReduction: getTranslation(language, "pufferfish.lonelinessReduction"),
      emotionalBond: getTranslation(language, "pufferfish.emotionalBond"),
    },
  ]

  const careGuides = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.emotional.title"),
      description: getTranslation(language, "careGuides.emotional.description"),
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.environment.title"),
      description: getTranslation(language, "careGuides.environment.description"),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.routine.title"),
      description: getTranslation(language, "careGuides.routine.description"),
    },
  ]

  // Updated stats: "New" Leading Brand, "$12,450" Donated to Ukraine, "3,200" Families Helped, "$3" Per Sale Aid
  const stats = [
    { number: "New", label: getTranslation(language, "statsAquarists") }, // Leading Purple Fish Brand
    { number: "$12,450", label: "Donated to Ukraine" }, // Updated donation amount
    { number: "3,200", label: "Families Helped" }, // Families assisted
    { number: "$3", label: getTranslation(language, "statsSupport") }, // Per Sale Aid
  ]

  useEffect(() => {
    // Simulate initial app load
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleAddToCart = (productId: string) => {
    addToCart(productId)
  }

  if (isInitialLoading) {
    return <PageLoadingSkeleton />
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Purple Fish Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-swim opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            <Fish className="h-12 w-12 text-purple-600 transform rotate-12" />
          </div>
        ))}
      </div>

      {/* Floating Chess Pieces */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[Crown, Castle, Shield].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <Icon className="h-16 w-16 text-purple-400" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header language={language} onLanguageChange={setLanguage} />
        <Enhanced3DHero language={language} />
        <ShopSection onAddToCart={handleAddToCart} />
        <TestimonialsSection language={language} />
        <CommunitySection language={language} />
        <ResearchSection language={language} />
        <FeaturesComparisonSection language={language} />
        <UkraineCharitySection language={language} />
        <NewsletterSection language={language} />
      </div>

      <CartDrawer />

      <style jsx>{`
        @keyframes swim {
          0% { transform: translateX(-100px) rotate(0deg); }
          50% { transform: translateX(50px) rotate(10deg); }
          100% { transform: translateX(100vw) rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        .animate-swim { animation: swim 25s linear infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
