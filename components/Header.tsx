"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fish, Menu, Crown, Castle } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import { LanguageSelector } from "./LanguageSelector"
import { CartIcon } from "./CartIcon"
import { getTranslation, type Language } from "@/lib/translations"

interface HeaderProps {
  language?: Language
  onLanguageChange?: (language: Language) => void
}

export function Header({ language = "en", onLanguageChange = () => {} }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: getTranslation(language, "home") },
    { href: "/gallery", label: getTranslation(language, "gallery") },
    { href: "/about", label: getTranslation(language, "about") },
    { href: "/reviews", label: getTranslation(language, "reviews") },
    { href: "/faq", label: getTranslation(language, "faq") },
    { href: "/contact", label: getTranslation(language, "contact") },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Enhanced Purple Fish Symbol */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Main Fish Icon */}
                <Fish
                  className={`h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-all duration-300 ${isLoaded ? "animate-swim-small" : ""}`}
                />

                {/* Animated Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>

                {/* Chess Crown on Hover */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Crown className="h-4 w-4 text-yellow-500 animate-spin-slow" />
                </div>
              </div>

              <span className="text-xl font-bold text-purple-900 group-hover:text-purple-700 transition-colors duration-200 flex items-center">
                Stuffy Purple Fish
                <Fish className="h-4 w-4 ml-1 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-wiggle" />
              </span>
            </Link>

            {/* Desktop Navigation with Chess Elements and White Background for Inactive Items */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 font-medium relative group flex items-center px-4 py-2 rounded-lg bg-white/80 hover:bg-purple-50 shadow-sm hover:shadow-md"
                >
                  {/* Chess piece indicators */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-1">
                    {index === 0 && <Castle className="h-3 w-3 text-purple-400" />}
                    {index === 1 && <span className="text-purple-400 text-xs">♗</span>}
                    {index === 2 && <Crown className="h-3 w-3 text-purple-400" />}
                    {index === 3 && <span className="text-purple-400 text-xs">♘</span>}
                    {index === 4 && <span className="text-purple-400 text-xs">♖</span>}
                    {index === 5 && <span className="text-purple-400 text-xs">♕</span>}
                  </div>

                  {item.label}

                  {/* Purple Fish on Hover */}
                  <Fish className="h-3 w-3 ml-1 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 animate-swim-small" />

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector language={language} onLanguageChange={onLanguageChange} />

              {/* Cart Icon with Fish Animation */}
              <div className="relative group">
                <CartIcon />
                <Fish className="absolute -top-1 -right-1 h-3 w-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce" />
              </div>

              {/* Order Button - Desktop with Enhanced Design - Always Visible Text */}
              <Button
                asChild
                className="hidden lg:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-full px-6 relative group overflow-hidden font-semibold"
              >
                <Link href="#buy" className="flex items-center">
                  {/* Animated Background Fish */}
                  <div className="absolute inset-0 opacity-20">
                    <Fish className="h-full w-auto text-white animate-swim-background" />
                  </div>

                  {/* Always Visible Order Text */}
                  <span className="relative z-10 text-white font-bold">{getTranslation(language, "orderButton")}</span>

                  {/* Chess Crown - Always Visible but More Prominent on Hover */}
                  <Crown className="ml-2 h-4 w-4 relative z-10 text-yellow-300 opacity-70 group-hover:opacity-100 group-hover:text-yellow-200 transition-all duration-300 animate-spin-slow" />
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-purple-600 hover:text-purple-700 hover:bg-purple-50 relative group"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <Fish className="absolute -top-1 -right-1 h-3 w-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-wiggle" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        language={language}
        navItems={navItems}
      />

      <style jsx>{`
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-swim-small { animation: swim-small 2s ease-in-out infinite; }
        .animate-swim-background { animation: swim-background 4s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1.5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
      `}</style>
    </>
  )
}
