"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Flag, Users, Shield } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { getTranslation, type Language } from "@/lib/translations"

interface UkraineCharitySectionProps {
  language: Language
}

export function UkraineCharitySection({ language }: UkraineCharitySectionProps) {
  return (
    <LazySection className="py-16 px-4 bg-gradient-to-r from-blue-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              <Flag className="h-8 w-8 text-blue-600" />
              <Heart className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-blue-900 mb-4">{getTranslation(language, "charityTitle")}</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            {getTranslation(language, "charityDescription")}
          </p>
        </div>

        {/* Main Charity Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-100 to-yellow-100 border-blue-200 shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 bg-blue-500 mr-2"></div>
                  <div className="w-12 h-8 bg-yellow-400"></div>
                  <span className="ml-3 text-lg font-semibold text-blue-900">Ukraine Support</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-4">$3 Donated Per Purchase</h4>
                <p className="text-gray-700 mb-4">
                  Every stuffy purple fish lanyard sold directly contributes to Ukrainian humanitarian aid. Your
                  purchase helps provide food, shelter, medical care, and educational support to families affected by
                  the ongoing conflict.
                </p>
                <div className="flex items-center text-sm text-blue-700">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>100% of donations go directly to verified Ukrainian aid organizations</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$8,100</div>
                  <div className="text-gray-600 mb-4">Total Donated to Ukraine</div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>2,700 families helped</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partner Organizations */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center bg-white border-blue-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <CardTitle className="text-blue-900">UNICEF Ukraine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Providing emergency aid, clean water, healthcare, and education support to Ukrainian children and
                families.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border-blue-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-blue-900">Save the Children Ukraine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Delivering life-saving aid and long-term support to help Ukrainian children recover and rebuild their
                lives.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border-blue-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-blue-900">Ukrainian Red Cross</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Providing humanitarian assistance, medical care, and emergency relief to those affected by the conflict.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">{getTranslation(language, "charityPartners")}</p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Heart className="mr-2 h-4 w-4" />
            Shop & Support Ukraine
          </Button>
        </div>
      </div>
    </LazySection>
  )
}
