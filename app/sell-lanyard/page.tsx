"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Fish, Upload, DollarSign, Star, Truck } from "lucide-react"

export default function SellLanyardPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lanyardType: "",
    condition: "",
    price: "",
    description: "",
    images: [] as File[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you soon about your Puffy Purple Fish Lanyard.")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files || []),
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Fish className="h-8 w-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-purple-900">Sell Your Puffy Purple Fish Lanyard</h1>
              <p className="text-gray-600">Turn your lanyard into cash with our easy selling process</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span>Lanyard Details</span>
                </CardTitle>
                <CardDescription>
                  Provide details about your Puffy Purple Fish Lanyard to get the best price
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="mt-1"
                    />
                  </div>

                  {/* Lanyard Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lanyardType">Lanyard Type *</Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, lanyardType: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select lanyard type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classic">Classic Puffy Purple Fish</SelectItem>
                          <SelectItem value="premium">Premium Puffy Purple Fish</SelectItem>
                          <SelectItem value="limited">Limited Edition</SelectItem>
                          <SelectItem value="custom">Custom Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="condition">Condition *</Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Brand New</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="price">Asking Price (USD)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter your asking price"
                      value={formData.price}
                      onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your lanyard's condition, any special features, or story behind it..."
                      value={formData.description}
                      onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <Label htmlFor="images">Upload Images</Label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4 bg-transparent"
                        onClick={() => document.getElementById("images")?.click()}
                      >
                        Choose Files
                      </Button>
                    </div>
                    {formData.images.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">{formData.images.length} file(s) selected</p>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                    Submit Lanyard for Sale
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Pricing Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Brand New</span>
                  <Badge variant="secondary">$45-60</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Excellent</span>
                  <Badge variant="secondary">$35-45</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Good</span>
                  <Badge variant="secondary">$25-35</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fair</span>
                  <Badge variant="secondary">$15-25</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <span>How It Works</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Submit Details</h4>
                    <p className="text-sm text-gray-600">Fill out the form with your lanyard information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Get Quote</h4>
                    <p className="text-sm text-gray-600">We'll review and send you a fair offer within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Ship & Get Paid</h4>
                    <p className="text-sm text-gray-600">Ship your lanyard (we cover shipping) and get paid fast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about selling your Puffy Purple Fish Lanyard? We're here to help!
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
