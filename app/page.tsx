"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  BarChart3,
  CheckCircle,
  Users,
  FileText,
  Download,
  Star,
  ArrowRight,
  Play,
  Shield,
  Smartphone,
  Globe,
  User2Icon,
  MapPinIcon,
} from "lucide-react"
import { CalendarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/bazarbuddy-logo.png" alt="BazarBuddy" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900">BazarBuddy</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#start" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Home
              </Link>

              <Link href="#process" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Process
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="#faqs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                FAQs
              </Link>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 transition-colors">
                <Link href="https://app-bazarbuddy.netlify.app/">
                  Sign In
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-gray-900 text-white rounded-full px-4 py-2 text-sm font-medium">
              New ✨ Make your family feel organized with Smart Features →
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            A grocery system that
            <br />
            works like an
            <span className="text-emerald-500 relative inline-block ml-2">
              <span className="relative z-10 overflow-hidden">
                <span className="inline-block bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-500 bg-clip-text text-transparent animate-[slideUp_3s_ease-in-out_infinite]">
                  Organiser
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 blur-lg animate-pulse"></span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 animate-[expandWidth_3s_ease-in-out_infinite]"></span>
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Great families deserve a system that does it all, from making shopping lists and smooth checkouts to helping
            you track expenses and manage budgets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-4 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 mr-2" href='#' />
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-4 transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-gray-500">Free 30-day trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-20" id="process">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm text-emerald-600 font-semibold mb-4 tracking-wide uppercase">How It Works</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get started in 3 simple steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From creating your first list to tracking expenses, BazarBuddy makes grocery management effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200"></div>

            <Card className="bg-white border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Create Your List</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Set up your grocery list in minutes. Add a title, select the month, and you're ready to start adding
                  items.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Quick setup</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Monthly organization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Custom naming</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Add Items & Prices</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Add grocery items with quantities, units, and price estimates. Our smart system helps you track
                  everything.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">B</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-gray-900">Smart Suggestion</div>
                      <div className="text-xs text-gray-600">Rice - 1kg added for ৳130.00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Track & Export</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Monitor your spending history and export professional PDF reports for easy shopping and record
                  keeping.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700">May_List.pdf</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-purple-600 font-medium">Ready</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Creating Lists Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">No credit card required • Free forever plan available</p>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Live Product Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See BazarBuddy in <span className="text-emerald-600">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the power of smart grocery management with our intuitive interface designed for modern families
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Main Feature Showcase */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-700 group">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-300 text-sm font-medium">BazarBuddy Create List Action</div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bLvs5ss98MUvvsjj234avyALnXJ7CF.png"
                      alt="Create New List Interface"
                      width={800}
                      height={600}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Create Lists Effortlessly</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our intuitive interface makes it incredibly easy to create and manage your grocery lists. Add items
                    with quantities, units, and price estimates in seconds.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Smart Item Entry</h4>
                      <p className="text-gray-600 text-sm">Intelligent suggestions based on your shopping history</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-time Price Tracking</h4>
                      <p className="text-gray-600 text-sm">Automatic cost calculations as you add items</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Organized Categories</h4>
                      <p className="text-gray-600 text-sm">Automatic categorization for efficient shopping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Track Your Shopping History</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Keep detailed records of all your grocery purchases with comprehensive cost breakdowns, dates, and
                    easy-to-read summaries.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">৳2,020</div>
                    <div className="text-sm text-gray-600">Total Spent</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600 mb-2">15</div>
                    <div className="text-sm text-gray-600">Lists Created</div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="https://app-bazarbuddy.netlify.app/">
                    Try It Free Now
                  </Link>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-700 group">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-300 text-sm font-medium">List History</div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJY9bidvzb1YQk1s3rvY3UIJ1Rbe88.png"
                      alt="List History Interface"
                      width={800}
                      height={600}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Grid */}
            <div className="mt-24 grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">PDF Export</h4>
                <p className="text-gray-600">
                  Generate professional shopping lists you can print or share with family members.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Family Sharing</h4>
                <p className="text-gray-600">
                  Collaborate with family members and keep everyone updated on shopping needs.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Analytics</h4>
                <p className="text-gray-600">
                  Get insights into your spending patterns and optimize your grocery budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              Customer Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-emerald-600">10,000+</span> Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how BazarBuddy is transforming grocery management for families worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "BazarBuddy has completely transformed how our family manages grocery shopping. The expense tracking
                feature helped us save over ৳5,000 last month!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Ahmed</div>
                  <div className="text-sm text-gray-500">Mother of 3, Dhaka</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Featured */}
            <div className="bg-gradient-to-br from-[#ea580c] to-[#ea5a0c97] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-white transform md:scale-105 group">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-emerald-50 mb-6 leading-relaxed text-lg">
                "We've managed thousands of grocery lists with BazarBuddy. The dashboard keeps our family budget
                organized and our shopping incredibly efficient."
              </blockquote>
              {/* <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="MD. Farhan Shahriyar"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-emerald-300"
                />
                <div>
                  <div className="font-semibold text-white">MD. Farhan Shahriyar</div>
                  <div className="text-sm text-emerald-200">Family User, Chittagong</div>
                </div>
              </div> */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Anika Rahman</div>
                  <div className="text-sm text-white">Mother of 1, Rajshahi</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-600 fill-current" />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "The PDF export feature is a game-changer! I can share shopping lists with my husband and track our
                monthly expenses effortlessly."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rashida Khan</div>
                  <div className="text-sm text-gray-500">Working Mom, Sylhet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Lists Created</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">৳2M+</div>
              <div className="text-gray-600">Money Tracked</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8">Trusted by families across Bangladesh</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Dhaka</div>
              <div className="text-2xl font-bold text-gray-400">Chittagong</div>
              <div className="text-2xl font-bold text-gray-400">Sylhet</div>
              <div className="text-2xl font-bold text-gray-400">Rajshahi</div>
              <div className="text-2xl font-bold text-gray-400">Khulna</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-24" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for <span className="text-emerald-600">Smart</span> Grocery Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intelligent list creation to advanced analytics, BazarBuddy provides all the tools your family needs
              to shop smarter and save more.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 - Smart Lists */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Lists</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Create intelligent shopping lists with automatic categorization, smart suggestions, and seamless
                  organization that learns from your shopping patterns.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Monthly list organization</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Smart quantity tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Real-time price estimation</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">5</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Items added this week</span>
                    </div>
                    <div className="text-emerald-600 font-semibold text-sm">+25%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Expense Tracking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expense Tracking</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Monitor your spending patterns with detailed analytics, monthly breakdowns, and intelligent insights
                  that help you optimize your grocery budget.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-100">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">৳1,170</div>
                    <div className="text-sm text-gray-500">May Total Spending</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">vs Last Month</span>
                    <span className="text-green-600 font-semibold">-12% ↓</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Monthly cost analysis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Item-wise pricing breakdown</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Spending trend insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - PDF Export & Sharing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Export & Share</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Generate professional PDF reports, share lists with family members, and keep organized records of all
                  your grocery shopping activities.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 mb-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700">May_Grocery_List.pdf</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-purple-600 font-medium">Ready</span>
                    </div>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Professional PDF formatting</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Family sharing capabilities</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">One-click export & print</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mobile Friendly</h4>
              <p className="text-gray-600 text-sm">Access your lists anywhere, anytime on any device</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h4>
              <p className="text-gray-600 text-sm">Your data is encrypted and completely secure</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Family Collaboration</h4>
              <p className="text-gray-600 text-sm">Share and collaborate with all family members</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Suggestions</h4>
              <p className="text-gray-600 text-sm">AI-powered recommendations based on your habits</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">Start with our free plan • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-24" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Simple Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-emerald-600">Perfect</span> Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start free and upgrade as your family grows. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-medium">For Individuals</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    ৳0<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Perfect for getting started</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Up to 5 lists per month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Basic expense tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">PDF export functionality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Mobile app access</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 py-3 font-semibold transition-all duration-300"
                >
                  Get Started Free
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">No credit card required</p>
              </div>
            </div>

            {/* Family Plan - Most Popular */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-emerald-200 group relative overflow-hidden transform lg:scale-105">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg mt-7">
                  ⭐ Most Popular
                </div>
              </div>

              <div className="relative mt-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-emerald-600 font-semibold">For Families</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Family</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    ৳299<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Everything your family needs</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Unlimited grocery lists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Advanced expense analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Family sharing & collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Priority customer support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Smart shopping suggestions</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">15 day free trial • Cancel anytime</p>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-600 font-semibold">For Power Users</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    ৳599<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Advanced features & customization</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Everything in Family plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Custom categories & tags</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">API access for integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">White-label customization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-purple-700 py-3 font-semibold transition-all duration-300"
                >
                  Contact Sales
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">Custom pricing available</p>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare Plans</h3>
              <p className="text-gray-600">See what's included in each plan</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                <div className="font-semibold text-gray-900">Features</div>
                <div className="text-center font-semibold text-gray-700">Free</div>
                <div className="text-center font-semibold text-emerald-600">Family</div>
                <div className="text-center font-semibold text-purple-600">Premium</div>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-4 gap-4 p-6 items-center">
                  <div className="text-gray-700">Monthly Lists</div>
                  <div className="text-center text-gray-600">5</div>
                  <div className="text-center text-emerald-600 font-semibold">Unlimited</div>
                  <div className="text-center text-purple-600 font-semibold">Unlimited</div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 items-center">
                  <div className="text-gray-700">Family Members</div>
                  <div className="text-center text-gray-600">1</div>
                  <div className="text-center text-emerald-600 font-semibold">Up to 6</div>
                  <div className="text-center text-purple-600 font-semibold">Unlimited</div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 items-center">
                  <div className="text-gray-700">Advanced Analytics</div>
                  <div className="text-center">❌</div>
                  <div className="text-center">✅</div>
                  <div className="text-center">✅</div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 items-center">
                  <div className="text-gray-700">Priority Support</div>
                  <div className="text-center">❌</div>
                  <div className="text-center">✅</div>
                  <div className="text-center">✅</div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-6 items-center">
                  <div className="text-gray-700">API Access</div>
                  <div className="text-center">❌</div>
                  <div className="text-center">❌</div>
                  <div className="text-center">✅</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto" id="faqs">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Pricing FAQ
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">?</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        Can I change plans anytime?
                      </h4>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-all duration-300 group-open:rotate-180">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-6">
                      <p className="text-gray-600 leading-relaxed">
                        Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and
                        we'll prorate any billing adjustments. No hassle, no long-term commitments.
                      </p>
                      <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Instant plan changes • Prorated billing • No cancellation fees
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Is there a free trial?
                      </h4>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-open:rotate-180">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Absolutely! All paid plans come with a 15 day free trial. No credit card required to start, and
                        you can cancel anytime during the trial period without any charges.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="text-blue-600 font-semibold text-sm mb-1">15 Days Free</div>
                          <div className="text-gray-600 text-xs">Full access to all features</div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                          <div className="text-green-600 font-semibold text-sm mb-1">No Credit Card</div>
                          <div className="text-gray-600 text-xs">Start immediately</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        What payment methods do you accept?
                      </h4>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-all duration-300 group-open:rotate-180">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We accept all major credit cards, debit cards, and popular mobile banking services in Bangladesh
                        including bKash, Nagad, and Rocket for your convenience.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Visa</div>
                        <div className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                          Mastercard
                        </div>
                        <div className="px-3 py-2 bg-orange-100 rounded-lg text-sm font-medium text-orange-700">
                          bKash
                        </div>
                        <div className="px-3 py-2 bg-green-100 rounded-lg text-sm font-medium text-green-700">
                          Nagad
                        </div>
                        <div className="px-3 py-2 bg-purple-100 rounded-lg text-sm font-medium text-purple-700">
                          Rocket
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        How many family members can use one account?
                      </h4>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-orange-600 transition-all duration-300 group-open:rotate-180">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        The Family plan supports up to 6 family members, while the Premium plan offers unlimited users.
                        Each member gets their own profile and can collaborate on shared lists.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                          <span className="text-emerald-700 font-medium">Family Plan</span>
                          <span className="text-emerald-600 font-bold">Up to 6 members</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                          <span className="text-purple-700 font-medium">Premium Plan</span>
                          <span className="text-purple-600 font-bold">Unlimited members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        Is my data secure and private?
                      </h4>
                    </div>
                    <div className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-all duration-300 group-open:rotate-180">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Absolutely! We use bank-level encryption to protect your data. Your grocery lists and spending
                        information are stored securely and never shared with third parties.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                          <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <div className="text-green-700 font-semibold text-sm">256-bit SSL</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-blue-700 font-semibold text-sm">GDPR Compliant</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                          <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-purple-700 font-semibold text-sm">No Data Sharing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h4>
                <p className="text-gray-600 mb-6">Our friendly support team is here to help you get started.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Support
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Free Trial Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">Join 10,000+ families already using BazarBuddy</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-10 w-16 h-16 bg-orange-400 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Join 10,000+ Happy Families
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Grocery Shopping?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of families who have revolutionized their grocery management with BazarBuddy's smart
              features and intuitive design.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-gray-400 text-sm">Lists Created</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">৳2M+</div>
                <div className="text-gray-400 text-sm">Money Saved</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-gray-400 text-sm">User Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group text-lg font-semibold"
              >
                <Link href="https://app-bazarbuddy.netlify.app/" className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Free Trial
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-300 hover:text-white backdrop-blur-sm px-10 py-4 rounded-full transition-all duration-300 group text-lg font-semibold"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">15-Day Free Trial</div>
                  <div className="text-gray-400 text-sm">No commitment required</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">No Credit Card</div>
                  <div className="text-gray-400 text-sm">Start immediately</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Cancel Anytime</div>
                  <div className="text-gray-400 text-sm">Full flexibility</div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-lg">
                Trusted by families across Bangladesh •
                <span className="text-emerald-400 font-semibold"> Dhaka • Chittagong • Sylhet • Rajshahi • Khulna</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Stay in the Loop
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  Smart Tips
                </span>{" "}
                & Updates
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join 5,000+ smart families getting weekly tips on grocery management, budget optimization, and exclusive
                feature updates.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto mb-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const email = (e.target as HTMLFormElement).email.value

                  // TODO: Backend Integration for Newsletter Subscription
                  // I will implement the backend logic to handle newsletter subscriptions.
                  // This will include:
                  // - Send email to newsletter subscription API endpoint
                  // - Handle validation and error responses
                  // - Store subscriber data in database
                  // - Send welcome email via email service (example: SendGrid, Mailgun)
                  // - Add to email marketing platform (example:  Mailchimp, ConvertKit)

                  // For now, show success toast
                  if (email) {
                    // Show success toast (you'll need to implement toast functionality)
                    alert(`🎉 Welcome aboard! Check your email (${email}) for confirmation.`)
                      ; (e.target as HTMLFormElement).reset()
                  }
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1 relative group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full h-14 px-6 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 text-lg placeholder:text-gray-400 group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-2xl px-8 shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold text-lg"
                >
                  Subscribe Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Weekly Tips</h4>
                <p className="text-gray-600 text-sm">
                  Smart grocery management strategies and money-saving tips delivered weekly.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h4>
                <p className="text-gray-600 text-sm">Be the first to try new features and get exclusive beta access.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-gray-600 text-sm">
                  Join our community of smart families sharing tips and experiences.
                </p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center gap-8 opacity-70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-bold">+</span>
                  </div>
                </div>
                <span className="text-gray-600 text-sm font-medium">5,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 text-sm font-medium ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 group">
              <div className="relative">
                <Image
                  src="/bazarbuddy-logo.png"
                  alt="BazarBuddy"
                  width={48}
                  height={48}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                BazarBuddy
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Revolutionizing grocery management for modern families across Bangladesh
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div className="space-y-6 group">
              <h4 className="text-lg font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Careers
                  </Link>
                </li>

              </ul>
            </div>

            {/* Product */}
            <div className="space-y-6 group">
              <h4 className="text-lg font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Pricing
                  </Link>
                </li>

              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 group">
              <h4 className="text-lg font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Help Center
                  </Link>
                </li>


                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-orange-400 mb-4">Connect With Us</h4>

              {/* Social Media */}
              <div className="flex gap-4 mb-6">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300 hover:scale-110 group text-white bg-emerald-700"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-sm font-bold">f</span>
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-black">
                    <span className="text-sm font-bold">t</span>
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-300 hover:scale-110 bg-cyan-500 text-white"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </Button>
              </div>

            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-t border-gray-700">
            <div className="text-center group">
              <div className="text-3xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-gray-400 text-sm">Lists Created</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                ৳2M+
              </div>
              <div className="text-gray-400 text-sm">Money Saved</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9★
              </div>
              <div className="text-gray-400 text-sm">User Rating</div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                <p>© 2025 BazarBuddy. All rights reserved.</p>
                {/* <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>© <a href="https://mdfarhanshahriyar2024.netlify.app/" className="hover:underline">MD FARHAN SHAHRIYAR</a></span>
                </div> */}
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="cursor-pointer hover:underline">
                        © <a href="https://mdfarhanshahriyar2024.netlify.app/" target="_blank" rel="noopener noreferrer">MD FARHAN SHAHRIYAR</a>
                      </span>
                    </HoverCardTrigger>

                    <HoverCardContent className="w-80">
                      <div className="flex justify-between gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/farhanshahriyar.png" alt="Farhan Avatar" />
                          <AvatarFallback>FS</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">MD FARHAN SHAHRIYAR</h4>
                          <p className="text-sm">
                           From UI to API — I own the stack.
                          </p>
                          <div className="flex items-center gap-2">
                          <Link
                            href="https://github.com/farhanshahriyar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-emerald-500 hover:underline"
                          >
                            Visit my Github 
                          </Link>
                          | 
                          <Link
                            href="https://mdfarhanshahriyar2024.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-emerald-500 hover:underline"
                          >
                            My Portfolio
                          </Link>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="#privacy" className="hover:text-emerald-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="hover:text-emerald-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="#cookie" className="hover:text-emerald-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 animate-pulse"></div>
      </footer>
    </div>
  )
}
