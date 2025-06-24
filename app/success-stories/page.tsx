"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Quote,
  Search,
  GraduationCap,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Globe,
  Heart,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    university: "Stanford University",
    course: "MS Computer Science",
    country: "USA",
    flag: "🇺🇸",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2023",
    testimonial:
      "Suvidha Overseas made my dream of studying at Stanford a reality. Their guidance throughout the application process was exceptional, and they helped me secure a scholarship worth $25,000. The team was always available to answer my questions and provided personalized support that made all the difference.",
    achievement: "Full Scholarship Recipient",
    scholarshipAmount: "$25,000",
    category: "Engineering",
    duration: "2 years",
    currentRole: "Software Engineer at Google",
    detailedStory:
      "Coming from a middle-class family in Mumbai, studying at Stanford seemed like an impossible dream. Suvidha Overseas not only helped me with the application process but also guided me through scholarship applications. Today, I'm working at Google and couldn't be more grateful for their support.",
    challenges: ["Financial constraints", "Competitive admissions", "Visa documentation"],
    solutions: ["Scholarship guidance", "Application strategy", "Document preparation"],
  },
  {
    id: 2,
    name: "Rahul Patel",
    university: "University of Toronto",
    course: "MBA",
    country: "Canada",
    flag: "🇨🇦",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2022",
    testimonial:
      "The team at Suvidha Overseas provided personalized attention and helped me navigate the complex admission process. I'm now pursuing my MBA at one of Canada's top universities. Their expertise in Canadian immigration policies was invaluable.",
    achievement: "Admitted to Top 10 MBA Program",
    scholarshipAmount: "$15,000",
    category: "Business",
    duration: "2 years",
    currentRole: "Management Consultant",
    detailedStory:
      "After 5 years in the corporate world, I wanted to enhance my skills with an MBA. Suvidha Overseas helped me choose the right program and guided me through the entire process, including GMAT preparation strategies.",
    challenges: ["Career transition", "GMAT preparation", "Work experience documentation"],
    solutions: ["Career counseling", "Test prep guidance", "Profile building"],
  },
  {
    id: 3,
    name: "Sneha Reddy",
    university: "University of Melbourne",
    course: "MS Data Science",
    country: "Australia",
    flag: "🇦🇺",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2023",
    testimonial:
      "From university selection to visa approval, Suvidha Overseas supported me at every step. Their expertise in Australian education system is remarkable. I got my visa approved in just 2 weeks!",
    achievement: "Visa Approved in 2 Weeks",
    scholarshipAmount: "$10,000",
    category: "Technology",
    duration: "1.5 years",
    currentRole: "Data Scientist at Commonwealth Bank",
    detailedStory:
      "As a working professional, I needed guidance on balancing work and applications. Suvidha Overseas created a timeline that worked perfectly with my schedule and helped me secure admission to my dream university.",
    challenges: ["Time management", "Technical portfolio", "Visa processing"],
    solutions: ["Structured timeline", "Portfolio guidance", "Fast-track visa process"],
  },
  {
    id: 4,
    name: "Arjun Kumar",
    university: "Technical University of Munich",
    course: "MS Mechanical Engineering",
    country: "Germany",
    flag: "🇩🇪",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2022",
    testimonial:
      "I was initially confused about studying in Germany, but Suvidha Overseas provided clear guidance and helped me secure admission with minimal tuition fees. The language preparation support was excellent.",
    achievement: "Zero Tuition Fees",
    scholarshipAmount: "€0 (Public University)",
    category: "Engineering",
    duration: "2 years",
    currentRole: "Automotive Engineer at BMW",
    detailedStory:
      "Germany's free education system attracted me, but the application process seemed complex. Suvidha Overseas simplified everything and even helped me with basic German language preparation.",
    challenges: ["Language barrier", "Document translation", "University selection"],
    solutions: ["Language support", "Translation services", "University matching"],
  },
  {
    id: 5,
    name: "Ananya Singh",
    university: "University of Cambridge",
    course: "MS Economics",
    country: "UK",
    flag: "🇬🇧",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2023",
    testimonial:
      "Getting into Cambridge was my biggest dream. Suvidha Overseas helped me craft the perfect personal statement and prepared me for the interview process. Their mock interviews were incredibly helpful.",
    achievement: "Cambridge Admission",
    scholarshipAmount: "£20,000",
    category: "Economics",
    duration: "1 year",
    currentRole: "Economic Analyst at Bank of England",
    detailedStory:
      "The competition for Cambridge was intense. Suvidha Overseas helped me understand what the admissions committee was looking for and guided me through every step of the application process.",
    challenges: ["Highly competitive admission", "Personal statement", "Interview preparation"],
    solutions: ["Application strategy", "Statement crafting", "Mock interviews"],
  },
  {
    id: 6,
    name: "Vikram Joshi",
    university: "ETH Zurich",
    course: "MS Computer Science",
    country: "Switzerland",
    flag: "🇨🇭",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2022",
    testimonial:
      "ETH Zurich is known for its rigorous admission process. Suvidha Overseas helped me understand the requirements and prepared a strong application that stood out among thousands of applicants.",
    achievement: "Top 1% Admission",
    scholarshipAmount: "CHF 15,000",
    category: "Technology",
    duration: "2 years",
    currentRole: "Research Scientist at Google DeepMind",
    detailedStory:
      "Research was my passion, and ETH Zurich was the perfect place to pursue it. Suvidha Overseas helped me connect with professors and build a research-focused application.",
    challenges: ["Research experience", "Professor connections", "Technical portfolio"],
    solutions: ["Research guidance", "Networking support", "Portfolio development"],
  },
  {
    id: 7,
    name: "Kavya Nair",
    university: "University of British Columbia",
    course: "MS Environmental Science",
    country: "Canada",
    flag: "🇨🇦",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2023",
    testimonial:
      "My passion for environmental conservation led me to UBC. Suvidha Overseas understood my goals and helped me find the perfect program that aligned with my career aspirations.",
    achievement: "Research Assistantship",
    scholarshipAmount: "CAD 18,000",
    category: "Environmental Science",
    duration: "2 years",
    currentRole: "Environmental Consultant",
    detailedStory:
      "Finding a program that combined my interests in policy and science was challenging. Suvidha Overseas researched various options and helped me find the perfect fit at UBC.",
    challenges: ["Niche field selection", "Research alignment", "Funding options"],
    solutions: ["Program research", "Professor matching", "Funding guidance"],
  },
  {
    id: 8,
    name: "Rohan Gupta",
    university: "University of Sydney",
    course: "MS Finance",
    country: "Australia",
    flag: "🇦🇺",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    year: "2022",
    testimonial:
      "The finance program at University of Sydney was exactly what I was looking for. Suvidha Overseas helped me understand the Australian job market and choose a program with excellent placement records.",
    achievement: "100% Placement Record",
    scholarshipAmount: "AUD 12,000",
    category: "Finance",
    duration: "1.5 years",
    currentRole: "Investment Banker at Macquarie Group",
    detailedStory:
      "Career prospects were my primary concern when choosing a program. Suvidha Overseas provided detailed insights into job markets and helped me make an informed decision.",
    challenges: ["Career prospects", "Program selection", "Industry connections"],
    solutions: ["Market analysis", "Program comparison", "Industry networking"],
  },
]

export default function SuccessStoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid")

  // Get unique values for filters
  const countries = [...new Set(successStories.map((story) => story.country))]
  const categories = [...new Set(successStories.map((story) => story.category))]
  const years = [...new Set(successStories.map((story) => story.year))]

  // Filter stories
  const filteredStories = successStories.filter((story) => {
    const matchesSearch =
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.testimonial.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCountry = selectedCountry === "all" || story.country === selectedCountry
    const matchesCategory = selectedCategory === "all" || story.category === selectedCategory
    const matchesYear = selectedYear === "all" || story.year === selectedYear

    return matchesSearch && matchesCountry && matchesCategory && matchesYear
  })

  const StoryCard = ({ story, isDetailed = false }: { story: (typeof successStories)[0]; isDetailed?: boolean }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <CardContent className="p-6 space-y-4 h-full flex flex-col">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={story.image || "/placeholder.svg"}
              alt={story.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 text-lg">{story.flag}</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
            <p className="text-blue-600 font-semibold">{story.course}</p>
            <p className="text-gray-600 text-sm flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {story.university}, {story.country}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex space-x-1">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Badge variant="secondary" className="text-xs">
                {story.year}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-3 flex-1">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
            🏆 {story.achievement}
          </div>

          <blockquote className="text-gray-700 italic leading-relaxed">
            <Quote className="h-4 w-4 text-blue-200 inline mr-2" />"{story.testimonial}"
          </blockquote>

          {isDetailed && (
            <div className="space-y-4 pt-4 border-t">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Detailed Story</h4>
                <p className="text-gray-600 text-sm">{story.detailedStory}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenges Faced</h4>
                  <ul className="space-y-1">
                    {story.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm text-red-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solutions Provided</h4>
                  <ul className="space-y-1">
                    {story.solutions.map((solution, idx) => (
                      <li key={idx} className="text-sm text-green-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t text-center">
          <div>
            <div className="text-sm text-gray-500">Scholarship</div>
            <div className="font-semibold text-green-600">{story.scholarshipAmount}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Duration</div>
            <div className="font-semibold text-blue-600">{story.duration}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Category</div>
            <div className="font-semibold text-purple-600">{story.category}</div>
          </div>
        </div>

        <div className="pt-2">
          <div className="text-sm text-gray-500">Current Role</div>
          <div className="font-semibold text-gray-900">{story.currentRole}</div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Success Stories That Inspire</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how our students achieved their dreams of studying abroad. Their journeys showcase the power of
              proper guidance and determination.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search by name, university, or course..."
                  className="pl-10 h-12 text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{filteredStories.length} Success Stories Found</h2>
            <p className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
              {selectedCountry !== "all" && ` in ${selectedCountry}`}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant={viewMode === "grid" ? "default" : "outline"} onClick={() => setViewMode("grid")} size="sm">
              Grid View
            </Button>
            <Button
              variant={viewMode === "detailed" ? "default" : "outline"}
              onClick={() => setViewMode("detailed")}
              size="sm"
            >
              Detailed View
            </Button>
          </div>
        </div>

        {/* Success Stories Display */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Stories ({filteredStories.length})</TabsTrigger>
            <TabsTrigger value="Engineering">Engineering</TabsTrigger>
            <TabsTrigger value="Business">Business</TabsTrigger>
            <TabsTrigger value="Technology">Technology</TabsTrigger>
            <TabsTrigger value="Others">Others</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredStories.map((story) => (
                <StoryCard key={story.id} story={story} isDetailed={viewMode === "detailed"} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredStories
                  .filter((story) => story.category === category)
                  .map((story) => (
                    <StoryCard key={story.id} story={story} isDetailed={viewMode === "detailed"} />
                  ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="Others">
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredStories
                .filter((story) => !["Engineering", "Business", "Technology"].includes(story.category))
                .map((story) => (
                  <StoryCard key={story.id} story={story} isDetailed={viewMode === "detailed"} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No success stories found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCountry("all")
                setSelectedCategory("all")
                setSelectedYear("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Statistics Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">These numbers represent real dreams achieved and lives transformed.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Students Placed</div>
              <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mt-2" />
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Visa Success Rate</div>
              <Award className="h-8 w-8 text-green-500 mx-auto mt-2" />
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Partner Universities</div>
              <GraduationCap className="h-8 w-8 text-purple-500 mx-auto mt-2" />
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <Globe className="h-8 w-8 text-orange-500 mx-auto mt-2" />
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-pink-200" />
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have achieved their dreams with our expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Journey Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book Free Consultation
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
