"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const stories = [
    {
      name: "Priya Sharma",
      university: "Stanford University",
      course: "MS Computer Science",
      country: "USA",
      image: "/priya.avif?height=100&width=100",
      rating: 5,
      testimonial:
        "Suvidha Overseas made my dream of studying at Stanford a reality. Their guidance throughout the application process was exceptional, and they helped me secure a scholarship worth $25,000.",
      achievement: "Full Scholarship Recipient",
    },
    {
      name: "Rahul Patel",
      university: "University of Toronto",
      course: "MBA",
      country: "Canada",
      image: "/rahul.jpg.svg?height=100&width=100",
      rating: 5,
      testimonial:
        "The team at Suvidha Overseas provided personalized attention and helped me navigate the complex admission process. I'm now pursuing my MBA at one of Canada's top universities.",
      achievement: "Admitted to Top 10 MBA Program",
    },
    {
      name: "Sneha Reddy",
      university: "University of Melbourne",
      course: "MS Data Science",
      country: "Australia",
      image: "/sneha.jpeg?height=100&width=100",
      rating: 5,
      testimonial:
        "From university selection to visa approval, Suvidha Overseas supported me at every step. Their expertise in Australian education system is remarkable.",
      achievement: "Visa Approved in 2 Weeks",
    },
    {
      name: "Arjun Kumar",
      university: "Technical University of Munich",
      course: "MS Mechanical Engineering",
      country: "Germany",
      image: "/arjun.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "I was initially confused about studying in Germany, but Suvidha Overseas provided clear guidance and helped me secure admission with minimal tuition fees.",
      achievement: "Zero Tuition Fees",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories That Inspire</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read about our students who achieved their dreams of studying abroad. Their success stories could be your
            inspiration for the next chapter.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-center space-y-6">
                <div className="relative">
                  <Quote className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                  <img
                    src={stories[currentSlide].image || "/placeholder.svg"}
                    alt={stories[currentSlide].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{stories[currentSlide].name}</h3>
                  <p className="text-blue-600 font-semibold">{stories[currentSlide].course}</p>
                  <p className="text-gray-600">
                    {stories[currentSlide].university}, {stories[currentSlide].country}
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(stories[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg text-gray-700 italic leading-relaxed max-w-2xl mx-auto">
                  "{stories[currentSlide].testimonial}"
                </blockquote>

                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block">
                  🏆 {stories[currentSlide].achievement}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Read More Success Stories
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Visa Success Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Universities</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
