"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Award, Target, Fish, Crown, Castle, Shield } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const team = [
    {
      name: "Dr. Marina Coral",
      role: "Marine Biologist & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in marine biology, Dr. Coral founded Purple Fish World to share her passion for these magnificent creatures.",
      specialties: ["Marine Biology", "Fish Behavior", "Aquarium Design"],
      chessTitle: "Grandmaster of Fish Care",
    },
    {
      name: "Alex Reef",
      role: "Aquarium Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex has been keeping and breeding purple fish for over a decade, specializing in rare species and advanced care techniques.",
      specialties: ["Fish Breeding", "Water Chemistry", "Tank Setup"],
      chessTitle: "Master of Aquatic Strategy",
    },
    {
      name: "Sophie Tang",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sophie connects our community of purple fish enthusiasts, organizing events and facilitating knowledge sharing.",
      specialties: ["Community Building", "Education", "Customer Support"],
      chessTitle: "Queen of Community",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Fish",
      description: "We're driven by genuine love for purple fish and their wellbeing in captivity.",
      chessIcon: <Crown className="h-6 w-6" />,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "Building a supportive community where beginners and experts learn together.",
      chessIcon: <Castle className="h-6 w-6" />,
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Knowledge",
      description: "Providing scientifically-backed information from marine biology professionals.",
      chessIcon: <Shield className="h-6 w-6" />,
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Sustainable Practices",
      description: "Promoting responsible fishkeeping and supporting sustainable aquaculture.",
      chessIcon: <Fish className="h-6 w-6" />,
    },
  ]

  const milestones = [
    { year: "2018", event: "Purple Fish World founded by Dr. Marina Coral", chessMove: "e4" },
    { year: "2019", event: "Reached 1,000 community members", chessMove: "Nf3" },
    { year: "2020", event: "Launched comprehensive care guide database", chessMove: "Bc4" },
    { year: "2021", event: "Partnered with marine conservation organizations", chessMove: "O-O" },
    { year: "2022", event: "10,000+ successful fish placements", chessMove: "d3" },
    { year: "2023", event: "Opened research facility for purple fish breeding", chessMove: "Bg5" },
    { year: "2024", event: "Launched mobile app for fish care tracking", chessMove: "Qd2" },
    { year: "2025", event: "Celebrating 50,000+ happy aquarists worldwide", chessMove: "Checkmate!" },
  ]

  const FloatingChessPiece = ({ piece, delay }: { piece: string; delay: number }) => (
    <div
      className={`absolute opacity-10 text-purple-300 animate-float`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
      }}
    >
      <span className="text-6xl">{piece}</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Floating Chess Pieces Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingChessPiece piece="♔" delay={0} />
        <FloatingChessPiece piece="♕" delay={1} />
        <FloatingChessPiece piece="♖" delay={2} />
        <FloatingChessPiece piece="♗" delay={3} />
        <FloatingChessPiece piece="♘" delay={4} />
        <FloatingChessPiece piece="♙" delay={5} />
      </div>

      {/* Animated Purple Fish Symbols */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-swim opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <Fish className="h-8 w-8 text-purple-400 transform rotate-12" />
          </div>
        ))}
      </div>

      {/* Header */}
      <Header language="en" onLanguageChange={() => {}} />

      {/* Hero Section with Purple Fish Symbol */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            {/* Large Purple Fish Symbol */}
            <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "animate-bounce-gentle" : "opacity-0"}`}>
              <div className="relative inline-block">
                <Fish className="h-24 w-24 text-purple-600 mx-auto animate-pulse-gentle" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-purple-900 mb-6 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            >
              About Purple Fish World
              <Fish className="inline-block h-12 w-12 ml-4 text-purple-600 animate-wiggle" />
            </h2>
            <p
              className={`text-xl text-gray-600 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Dedicated to helping aquarists create thriving purple fish communities since 2018
            </p>
            <Link href="/">
              <Button
                variant="outline"
                className={`border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent transform hover:scale-105 transition-all duration-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "600ms" }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
                <Fish className="ml-2 h-4 w-4 animate-swim-small" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement with Chess Board Pattern */}
      <LazySection className="py-16 px-4 bg-white relative">
        {/* Chess Board Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`${(Math.floor(i / 8) + i) % 2 === 0 ? "bg-purple-900" : "bg-transparent"} animate-chess-fade`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <Fish className="h-8 w-8 text-purple-600 mr-4 animate-swim-small" />
            <h3 className="text-3xl font-bold text-purple-900">Our Mission</h3>
            <Fish className="h-8 w-8 text-purple-600 ml-4 animate-swim-small" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in-up">
            At Purple Fish World, we believe that every aquarist deserves access to expert knowledge and a supportive
            community. Our mission is to make purple fish keeping accessible, enjoyable, and successful for enthusiasts
            of all levels while promoting sustainable and ethical practices in the aquarium hobby.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <LazyCard key={index} delay={index * 150}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 relative group-hover:animate-spin-slow">
                      {value.icon}
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {value.chessIcon}
                      </div>
                    </div>
                    <CardTitle className="text-purple-900 flex items-center justify-center">
                      {value.title}
                      <Fish className="h-4 w-4 ml-2 text-purple-400 animate-pulse" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Team Section with Purple Fish Integration */}
      <LazySection className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Fish className="h-6 w-6 text-purple-600 mr-3 animate-swim-small" />
              <h3 className="text-3xl font-bold text-purple-900">Meet Our Team</h3>
              <Fish className="h-6 w-6 text-purple-600 ml-3 animate-swim-small" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of marine biologists, aquarium specialists, and community builders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <LazyCard key={index} delay={index * 200}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-2 hover:rotate-1 group">
                  <CardHeader>
                    <div className="relative">
                      <ProgressiveImage
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4 group-hover:animate-pulse"
                      />
                      <div className="absolute -top-2 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                        <Fish className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <CardTitle className="text-purple-900 flex items-center justify-center flex-col">
                      {member.name}
                      <div className="flex items-center mt-2 text-sm text-purple-600">
                        <Crown className="h-4 w-4 mr-1" />
                        {member.chessTitle}
                      </div>
                    </CardTitle>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors duration-200 flex items-center"
                        >
                          <Fish className="h-3 w-3 mr-1" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Timeline with Chess Moves */}
      <LazySection className="py-16 px-4 bg-white relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Fish className="h-6 w-6 text-purple-600 mr-3 animate-swim-small" />
              <h3 className="text-3xl font-bold text-purple-900">Our Journey</h3>
              <Fish className="h-6 w-6 text-purple-600 ml-3 animate-swim-small" style={{ animationDelay: "0.7s" }} />
            </div>
            <p className="text-gray-600">Key milestones in our mission to support purple fish enthusiasts</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <LazyCard key={index} delay={index * 100}>
                <div className="flex items-center space-x-6 group hover:bg-purple-50 p-4 rounded-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold relative group-hover:animate-pulse">
                    {milestone.year}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Fish className="h-6 w-6 text-purple-300 animate-bounce" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-2">{milestone.event}</p>
                    <div className="flex items-center text-sm text-purple-600">
                      <Crown className="h-4 w-4 mr-1" />
                      <span className="font-mono">Chess Move: {milestone.chessMove}</span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Fish className="h-8 w-8 text-purple-400 animate-wiggle" />
                  </div>
                </div>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Contact CTA with Enhanced Purple Fish Design */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 relative overflow-hidden group">
            {/* Animated Background Fish */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <Fish
                  key={i}
                  className="absolute h-12 w-12 text-purple-200 opacity-30 animate-swim-background"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 1.5}s`,
                    animationDuration: `${6 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            <CardHeader className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Fish className="h-8 w-8 text-purple-600 mr-3 animate-bounce" />
                <CardTitle className="text-2xl text-purple-900">Join Our Community</CardTitle>
                <Fish className="h-8 w-8 text-purple-600 ml-3 animate-bounce" style={{ animationDelay: "0.5s" }} />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600 mb-6">
                Ready to start your purple fish journey with expert guidance and community support?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center">
                    Get in Touch
                    <Fish className="ml-2 h-4 w-4 animate-swim-small" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent transform hover:scale-105 transition-all duration-200 flex items-center"
                  >
                    Explore Fish Species
                    <Fish className="ml-2 h-4 w-4 animate-wiggle" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </LazySection>

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
          50% { transform: translateX(10px) rotate(5deg); }
        }
        @keyframes swim-background {
          0% { transform: translateX(-50px) translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateX(50px) translateY(-20px) rotate(15deg); opacity: 0.3; }
          100% { transform: translateX(-50px) translateY(0px) rotate(0deg); opacity: 0.1; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes chess-fade {
          0% { opacity: 0; }
          50% { opacity: 0.1; }
          100% { opacity: 0.05; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-swim { animation: swim 12s linear infinite; }
        .animate-swim-small { animation: swim-small 3s ease-in-out infinite; }
        .animate-swim-background { animation: swim-background 8s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-chess-fade { animation: chess-fade 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </div>
  )
}
