"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Clock } from "lucide-react"

export default function FeaturedDestinations() {
  const destinations = [
    {
      slug: "usa",
      country: "United States",
      flag: "🇺🇸",
      image: "/us.jpeg?height=200&width=300",
      universities: "4000+",
      avgCost: "$30,000-60,000",
      duration: "1-4 years",
      highlights: ["Top-ranked universities", "Research opportunities", "OPT work permit"],
      popularCourses: ["Engineering", "Business", "Computer Science"],
    },
    {
      slug: "canada",
      country: "Canada",
      flag: "🇨🇦",
      image: "/canada.jpg?height=200&width=300",
      universities: "100+",
      avgCost: "$20,000-40,000",
      duration: "1-4 years",
      highlights: ["Post-graduation work permit", "Immigration pathways", "Quality education"],
      popularCourses: ["Engineering", "Healthcare", "Business"],
    },
    {
      slug: "uk",
      country: "United Kingdom",
      flag: "🇬🇧",
      image: "/uk.jpg?height=200&width=300",
      universities: "150+",
      avgCost: "$25,000-50,000",
      duration: "1-3 years",
      highlights: ["Historic universities", "Shorter duration", "Global recognition"],
      popularCourses: ["Business", "Law", "Arts & Humanities"],
    },
    {
      slug: "australia",
      country: "Australia",
      flag: "🇦🇺",
      image: "/aus.jpg?height=200&width=300",
      universities: "40+",
      avgCost: "$25,000-45,000",
      duration: "1-4 years",
      highlights: ["Work while studying", "Post-study work visa", "High quality of life"],
      popularCourses: ["Engineering", "Medicine", "Business"],
    },
    {
      slug: "germany",
      country: "Germany",
      flag: "🇩🇪",
      image: "/germany.jpeg?height=200&width=300",
      universities: "400+",
      avgCost: "$500-20,000",
      duration: "1-3 years",
      highlights: ["Low tuition fees", "Strong economy", "Research excellence"],
      popularCourses: ["Engineering", "Sciences", "Technology"],
    },
    {
      slug: "newzealand",
      country: "New Zealand",
      flag: "🇳🇿",
      image: "/nz.jpg?height=200&width=300",
      universities: "8+",
      avgCost: "$20,000-35,000",
      duration: "1-4 years",
      highlights: ["Safe environment", "Work opportunities", "Beautiful landscapes"],
      popularCourses: ["Agriculture", "Tourism", "Engineering"],
    },
  ]

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations around the world. Each country offers unique opportunities for international
            students with world-class education systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.country}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <span className="text-2xl">{dest.flag}</span>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {dest.universities} Universities
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{dest.country}</h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                    <span>{dest.avgCost}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1 text-blue-500" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {dest.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.popularCourses.map((course, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                  <Link href={`/destinations/${dest.slug}`}>
                    Explore {dest.country}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
