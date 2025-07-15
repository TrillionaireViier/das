"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Fish, Crown } from "lucide-react"
import { getTranslation, type Language } from "@/lib/translations"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  language: Language
  navItems: Array<{ href: string; label: string }>
}

export function MobileMenu({ isOpen, onClose, language, navItems }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Fish className="h-6 w-6 text-purple-600 animate-swim-small" />
              <span className="text-lg font-bold text-purple-900">Stuffy Purple Fish</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-200 group border border-gray-100 hover:border-purple-200"
                  >
                    {/* Chess piece indicators */}
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                      {index === 0 && <span className="text-purple-400 text-sm">♜</span>}
                      {index === 1 && <span className="text-purple-400 text-sm">♗</span>}
                      {index === 2 && <Crown className="h-4 w-4 text-purple-400" />}
                      {index === 3 && <span className="text-purple-400 text-sm">♘</span>}
                      {index === 4 && <span className="text-purple-400 text-sm">♖</span>}
                      {index === 5 && <span className="text-purple-400 text-sm">♕</span>}
                    </div>

                    <span className="font-medium">{item.label}</span>

                    <Fish className="h-3 w-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 animate-wiggle ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Order Button - Always Visible Text */}
          <div className="p-6 border-t border-gray-200">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-full relative group overflow-hidden font-semibold"
            >
              <Link href="#buy" onClick={onClose} className="flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <Fish className="h-full w-auto text-white animate-swim-background" />
                </div>

                {/* Always Visible Order Text */}
                <span className="relative z-10 text-white font-bold">{getTranslation(language, "orderButton")}</span>

                {/* Always Visible Crown */}
                <Crown className="ml-2 h-4 w-4 relative z-10 text-yellow-300 opacity-70 group-hover:opacity-100 group-hover:text-yellow-200 transition-all duration-300 animate-spin-slow" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
