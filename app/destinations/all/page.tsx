"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  GraduationCap,
  Search,
  Star,
  Globe,
  MapPin,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

// Comprehensive destinations data (50+ countries)
const destinations = [
  // North America
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "4000+",
    avgCost: "$30,000-60,000",
    duration: "1-4 years",
    rating: 4.8,
    students: "1M+",
    language: "English",
    highlights: ["Top-ranked universities", "Research opportunities", "OPT work permit"],
    popularCourses: ["Engineering", "Business", "Computer Science"],
    description:
      "Home to world's top universities with cutting-edge research facilities and diverse academic programs.",
    featured: true,
    budget: "high",
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    region: "North America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "100+",
    avgCost: "$20,000-40,000",
    duration: "1-4 years",
    rating: 4.7,
    students: "500K+",
    language: "English/French",
    highlights: ["Post-graduation work permit", "Immigration pathways", "Quality education"],
    popularCourses: ["Engineering", "Healthcare", "Business"],
    description: "Known for high-quality education, multicultural environment, and excellent post-study opportunities.",
    featured: true,
    budget: "medium",
  },

  // Europe
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "150+",
    avgCost: "$25,000-50,000",
    duration: "1-3 years",
    rating: 4.6,
    students: "400K+",
    language: "English",
    highlights: ["Historic universities", "Shorter duration", "Global recognition"],
    popularCourses: ["Business", "Law", "Arts & Humanities"],
    description: "Rich academic heritage with world-renowned universities and shorter program durations.",
    featured: true,
    budget: "high",
  },
  {
    id: "germany",
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "400+",
    avgCost: "$500-20,000",
    duration: "1-3 years",
    rating: 4.4,
    students: "350K+",
    language: "German/English",
    highlights: ["Low tuition fees", "Strong economy", "Research excellence"],
    popularCourses: ["Engineering", "Sciences", "Technology"],
    description: "Europe's economic powerhouse offering affordable education and excellent career prospects.",
    featured: false,
    budget: "low",
  },
  {
    id: "france",
    country: "France",
    flag: "🇫🇷",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "300+",
    avgCost: "$3,000-15,000",
    duration: "1-3 years",
    rating: 4.3,
    students: "300K+",
    language: "French/English",
    highlights: ["Cultural heritage", "Affordable education", "EU access"],
    popularCourses: ["Arts", "Business", "Engineering"],
    description: "Rich culture and affordable education in the heart of Europe.",
    featured: false,
    budget: "low",
  },
  {
    id: "netherlands",
    country: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "50+",
    avgCost: "$10,000-25,000",
    duration: "1-3 years",
    rating: 4.5,
    students: "100K+",
    language: "Dutch/English",
    highlights: ["English-taught programs", "Innovation hub", "High quality of life"],
    popularCourses: ["Engineering", "Business", "Agriculture"],
    description: "Innovation-driven education with excellent English programs.",
    featured: false,
    budget: "medium",
  },
  {
    id: "italy",
    country: "Italy",
    flag: "🇮🇹",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "200+",
    avgCost: "$2,000-20,000",
    duration: "1-3 years",
    rating: 4.2,
    students: "200K+",
    language: "Italian/English",
    highlights: ["Rich history", "Affordable tuition", "Cultural experience"],
    popularCourses: ["Arts", "Architecture", "Fashion"],
    description: "Historic universities with rich cultural heritage and artistic excellence.",
    featured: false,
    budget: "low",
  },
  {
    id: "spain",
    country: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "150+",
    avgCost: "$1,500-12,000",
    duration: "1-4 years",
    rating: 4.1,
    students: "150K+",
    language: "Spanish/English",
    highlights: ["Vibrant culture", "Low cost", "Beautiful climate"],
    popularCourses: ["Business", "Languages", "Tourism"],
    description: "Vibrant culture with affordable education options and beautiful climate.",
    featured: false,
    budget: "low",
  },
  {
    id: "switzerland",
    country: "Switzerland",
    flag: "🇨🇭",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "30+",
    avgCost: "$1,000-2,000",
    duration: "1-3 years",
    rating: 4.7,
    students: "50K+",
    language: "German/French/English",
    highlights: ["World-class education", "Low tuition", "Beautiful landscapes"],
    popularCourses: ["Business", "Hospitality", "Engineering"],
    description: "Premium education with surprisingly affordable tuition in stunning Alpine setting.",
    featured: false,
    budget: "low",
  },
  {
    id: "sweden",
    country: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "40+",
    avgCost: "$15,000-25,000",
    duration: "1-2 years",
    rating: 4.4,
    students: "40K+",
    language: "Swedish/English",
    highlights: ["Innovation focus", "High quality of life", "Sustainability"],
    popularCourses: ["Technology", "Engineering", "Environmental Science"],
    description: "Innovation-focused education with sustainability emphasis and high living standards.",
    featured: false,
    budget: "medium",
  },
  {
    id: "norway",
    country: "Norway",
    flag: "🇳🇴",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "25+",
    avgCost: "$0-2,000",
    duration: "1-2 years",
    rating: 4.5,
    students: "25K+",
    language: "Norwegian/English",
    highlights: ["Free tuition", "High quality of life", "Natural beauty"],
    popularCourses: ["Engineering", "Marine Sciences", "Energy"],
    description: "Free education with stunning natural environment and high living standards.",
    featured: false,
    budget: "low",
  },
  {
    id: "denmark",
    country: "Denmark",
    flag: "🇩🇰",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "30+",
    avgCost: "$15,000-20,000",
    duration: "1-2 years",
    rating: 4.3,
    students: "30K+",
    language: "Danish/English",
    highlights: ["Happy country", "Work-life balance", "Innovation"],
    popularCourses: ["Design", "Engineering", "Business"],
    description: "Happiest country with excellent work-life balance and innovative education.",
    featured: false,
    budget: "medium",
  },
  {
    id: "finland",
    country: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "35+",
    avgCost: "$0-15,000",
    duration: "1-2 years",
    rating: 4.4,
    students: "20K+",
    language: "Finnish/English",
    highlights: ["Free education", "Technology focus", "High quality"],
    popularCourses: ["Technology", "Education", "Engineering"],
    description: "World-class education system with technology focus and free tuition.",
    featured: false,
    budget: "low",
  },
  {
    id: "austria",
    country: "Austria",
    flag: "🇦🇹",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "70+",
    avgCost: "$1,500-15,000",
    duration: "1-3 years",
    rating: 4.2,
    students: "75K+",
    language: "German/English",
    highlights: ["Central Europe", "Affordable", "Cultural heritage"],
    popularCourses: ["Music", "Business", "Engineering"],
    description: "Rich cultural heritage with affordable education in the heart of Europe.",
    featured: false,
    budget: "low",
  },
  {
    id: "belgium",
    country: "Belgium",
    flag: "🇧🇪",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "40+",
    avgCost: "$5,000-15,000",
    duration: "1-2 years",
    rating: 4.1,
    students: "50K+",
    language: "Dutch/French/English",
    highlights: ["EU headquarters", "Multilingual", "Central location"],
    popularCourses: ["International Relations", "Business", "Engineering"],
    description: "Heart of Europe with multilingual education and EU connections.",
    featured: false,
    budget: "medium",
  },
  {
    id: "portugal",
    country: "Portugal",
    flag: "🇵🇹",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "50+",
    avgCost: "$3,000-8,000",
    duration: "1-3 years",
    rating: 4.0,
    students: "40K+",
    language: "Portuguese/English",
    highlights: ["Affordable living", "Beautiful coast", "Growing tech scene"],
    popularCourses: ["Business", "Tourism", "Engineering"],
    description: "Affordable education with beautiful coastal lifestyle and growing tech sector.",
    featured: false,
    budget: "low",
  },
  {
    id: "czech-republic",
    country: "Czech Republic",
    flag: "🇨🇿",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "70+",
    avgCost: "$2,000-12,000",
    duration: "1-3 years",
    rating: 4.1,
    students: "45K+",
    language: "Czech/English",
    highlights: ["Historic cities", "Affordable", "Central Europe"],
    popularCourses: ["Engineering", "Medicine", "Arts"],
    description: "Historic charm with affordable quality education in Central Europe.",
    featured: false,
    budget: "low",
  },
  {
    id: "poland",
    country: "Poland",
    flag: "🇵🇱",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "130+",
    avgCost: "$2,000-8,000",
    duration: "1-3 years",
    rating: 4.0,
    students: "60K+",
    language: "Polish/English",
    highlights: ["Very affordable", "Growing economy", "Rich history"],
    popularCourses: ["Medicine", "Engineering", "Business"],
    description: "Excellent value education with growing opportunities and rich cultural heritage.",
    featured: false,
    budget: "low",
  },
  {
    id: "ireland",
    country: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "30+",
    avgCost: "$15,000-35,000",
    duration: "1-4 years",
    rating: 4.2,
    students: "35K+",
    language: "English",
    highlights: ["English-speaking", "EU access", "Tech hub"],
    popularCourses: ["Technology", "Business", "Pharmaceuticals"],
    description: "Gateway to Europe with thriving tech industry and warm, welcoming culture.",
    featured: false,
    budget: "medium",
  },
  {
    id: "hungary",
    country: "Hungary",
    flag: "🇭🇺",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "65+",
    avgCost: "$4,000-12,000",
    duration: "1-3 years",
    rating: 4.0,
    students: "35K+",
    language: "Hungarian/English",
    highlights: ["EU member", "Affordable", "Historic cities"],
    popularCourses: ["Medicine", "Engineering", "Business"],
    description: "EU education with affordable costs and rich historical heritage.",
    featured: false,
    budget: "low",
  },
  {
    id: "romania",
    country: "Romania",
    flag: "🇷🇴",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "90+",
    avgCost: "$2,500-8,000",
    duration: "1-3 years",
    rating: 3.9,
    students: "25K+",
    language: "Romanian/English",
    highlights: ["Very affordable", "EU member", "Growing IT sector"],
    popularCourses: ["Medicine", "IT", "Engineering"],
    description: "Affordable EU education with growing opportunities in technology sector.",
    featured: false,
    budget: "low",
  },

  // Asia-Pacific
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "40+",
    avgCost: "$25,000-45,000",
    duration: "1-4 years",
    rating: 4.5,
    students: "300K+",
    language: "English",
    highlights: ["Work while studying", "Post-study work visa", "High quality of life"],
    popularCourses: ["Engineering", "Medicine", "Business"],
    description: "Excellent education system with beautiful landscapes and great work-life balance.",
    featured: false,
    budget: "high",
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    flag: "🇳🇿",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "8+",
    avgCost: "$20,000-35,000",
    duration: "1-4 years",
    rating: 4.3,
    students: "50K+",
    language: "English",
    highlights: ["Safe environment", "Work opportunities", "Beautiful landscapes"],
    popularCourses: ["Agriculture", "Tourism", "Engineering"],
    description: "Safe, peaceful country with stunning natural beauty and innovative education system.",
    featured: false,
    budget: "medium",
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "15+",
    avgCost: "$20,000-40,000",
    duration: "1-3 years",
    rating: 4.4,
    students: "80K+",
    language: "English",
    highlights: ["Asian hub", "Multicultural", "Business opportunities"],
    popularCourses: ["Business", "Engineering", "Finance"],
    description: "Modern city-state offering world-class education in the heart of Asia.",
    featured: false,
    budget: "medium",
  },
  {
    id: "japan",
    country: "Japan",
    flag: "🇯🇵",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "200+",
    avgCost: "$8,000-15,000",
    duration: "1-4 years",
    rating: 4.3,
    students: "200K+",
    language: "Japanese/English",
    highlights: ["Technology leader", "Rich culture", "Innovation"],
    popularCourses: ["Technology", "Engineering", "Robotics"],
    description: "Technology and innovation leader with rich culture and cutting-edge research.",
    featured: false,
    budget: "medium",
  },
  {
    id: "south-korea",
    country: "South Korea",
    flag: "🇰🇷",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "100+",
    avgCost: "$6,000-12,000",
    duration: "1-4 years",
    rating: 4.2,
    students: "120K+",
    language: "Korean/English",
    highlights: ["Technology hub", "K-culture", "Affordable"],
    popularCourses: ["Technology", "Business", "Arts"],
    description: "Dynamic country with growing global influence and vibrant culture.",
    featured: false,
    budget: "medium",
  },
  {
    id: "china",
    country: "China",
    flag: "🇨🇳",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "1000+",
    avgCost: "$3,000-10,000",
    duration: "1-4 years",
    rating: 4.1,
    students: "400K+",
    language: "Chinese/English",
    highlights: ["Growing economy", "Scholarships", "Ancient culture"],
    popularCourses: ["Business", "Engineering", "Medicine"],
    description: "World's second-largest economy with rich heritage and modern opportunities.",
    featured: false,
    budget: "low",
  },
  {
    id: "hong-kong",
    country: "Hong Kong",
    flag: "🇭🇰",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "12+",
    avgCost: "$15,000-25,000",
    duration: "1-3 years",
    rating: 4.4,
    students: "30K+",
    language: "English/Chinese",
    highlights: ["Financial hub", "East meets West", "International"],
    popularCourses: ["Finance", "Business", "International Relations"],
    description: "International financial hub bridging East and West with world-class education.",
    featured: false,
    budget: "medium",
  },
  {
    id: "malaysia",
    country: "Malaysia",
    flag: "🇲🇾",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "50+",
    avgCost: "$4,000-8,000",
    duration: "1-4 years",
    rating: 4.0,
    students: "150K+",
    language: "English/Malay",
    highlights: ["Affordable", "Multicultural", "Gateway to Asia"],
    popularCourses: ["Business", "Engineering", "Medicine"],
    description: "Affordable education in multicultural environment, gateway to Southeast Asia.",
    featured: false,
    budget: "low",
  },
  {
    id: "thailand",
    country: "Thailand",
    flag: "🇹🇭",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "40+",
    avgCost: "$3,000-6,000",
    duration: "1-4 years",
    rating: 3.9,
    students: "25K+",
    language: "Thai/English",
    highlights: ["Low cost", "Beautiful culture", "Tropical climate"],
    popularCourses: ["Hospitality", "Business", "International Studies"],
    description: "Affordable education with rich cultural experience and tropical lifestyle.",
    featured: false,
    budget: "low",
  },
  {
    id: "taiwan",
    country: "Taiwan",
    flag: "🇹🇼",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "50+",
    avgCost: "$3,000-8,000",
    duration: "1-4 years",
    rating: 4.1,
    students: "130K+",
    language: "Chinese/English",
    highlights: ["Technology focus", "Scholarships", "Safe environment"],
    popularCourses: ["Technology", "Engineering", "Business"],
    description: "Technology-focused education with excellent scholarships and safe environment.",
    featured: false,
    budget: "low",
  },
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "800+",
    avgCost: "$2,000-8,000",
    duration: "1-4 years",
    rating: 3.8,
    students: "50K+",
    language: "English/Hindi",
    highlights: ["Very affordable", "IT hub", "Diverse culture"],
    popularCourses: ["Technology", "Medicine", "Business"],
    description: "Affordable education with growing tech industry and incredible cultural diversity.",
    featured: false,
    budget: "low",
  },

  // Middle East & Africa
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    image: "/placeholder.svg?height=300&width=400",
    universities: "30+",
    avgCost: "$15,000-30,000",
    duration: "1-4 years",
    rating: 4.2,
    students: "80K+",
    language: "English/Arabic",
    highlights: ["Tax-free income", "Modern facilities", "Business hub"],
    popularCourses: ["Business", "Engineering", "Hospitality"],
    description: "Modern education hub with excellent facilities and business opportunities.",
    featured: false,
    budget: "medium",
  },
  {
    id: "qatar",
    country: "Qatar",
    flag: "🇶🇦",
    region: "Middle East",
    image: "/placeholder.svg?height=300&width=400",
    universities: "15+",
    avgCost: "$20,000-35,000",
    duration: "1-4 years",
    rating: 4.1,
    students: "15K+",
    language: "English/Arabic",
    highlights: ["World-class facilities", "Scholarships", "Safe environment"],
    popularCourses: ["Business", "Engineering", "Medicine"],
    description: "World-class education with excellent scholarships and state-of-the-art facilities.",
    featured: false,
    budget: "medium",
  },
  {
    id: "south-africa",
    country: "South Africa",
    flag: "🇿🇦",
    region: "Africa",
    image: "/placeholder.svg?height=300&width=400",
    universities: "25+",
    avgCost: "$3,000-8,000",
    duration: "1-4 years",
    rating: 3.9,
    students: "80K+",
    language: "English",
    highlights: ["Affordable", "Diverse wildlife", "Rich culture"],
    popularCourses: ["Medicine", "Engineering", "Business"],
    description: "Affordable education with unique cultural experience and incredible biodiversity.",
    featured: false,
    budget: "low",
  },

  // Latin America
  {
    id: "brazil",
    country: "Brazil",
    flag: "🇧🇷",
    region: "Latin America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "200+",
    avgCost: "$2,000-6,000",
    duration: "1-4 years",
    rating: 3.8,
    students: "20K+",
    language: "Portuguese/English",
    highlights: ["Vibrant culture", "Affordable", "Growing economy"],
    popularCourses: ["Business", "Engineering", "Medicine"],
    description: "Vibrant culture with affordable education options and emerging opportunities.",
    featured: false,
    budget: "low",
  },
  {
    id: "argentina",
    country: "Argentina",
    flag: "🇦🇷",
    region: "Latin America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "100+",
    avgCost: "$1,500-5,000",
    duration: "1-4 years",
    rating: 3.7,
    students: "15K+",
    language: "Spanish/English",
    highlights: ["Very affordable", "Rich culture", "Beautiful landscapes"],
    popularCourses: ["Medicine", "Arts", "Business"],
    description: "Affordable education with rich cultural heritage and stunning natural beauty.",
    featured: false,
    budget: "low",
  },
  {
    id: "chile",
    country: "Chile",
    flag: "🇨🇱",
    region: "Latin America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "60+",
    avgCost: "$3,000-8,000",
    duration: "1-4 years",
    rating: 3.9,
    students: "12K+",
    language: "Spanish/English",
    highlights: ["Stable economy", "Natural beauty", "Growing education"],
    popularCourses: ["Engineering", "Business", "Environmental Science"],
    description: "Stable country with growing education sector and spectacular landscapes.",
    featured: false,
    budget: "low",
  },
  {
    id: "mexico",
    country: "Mexico",
    flag: "🇲🇽",
    region: "Latin America",
    image: "/placeholder.svg?height=300&width=400",
    universities: "150+",
    avgCost: "$2,000-6,000",
    duration: "1-4 years",
    rating: 3.8,
    students: "25K+",
    language: "Spanish/English",
    highlights: ["Close to US", "Rich culture", "Affordable"],
    popularCourses: ["Business", "Medicine", "Arts"],
    description: "Rich cultural heritage with affordable education and proximity to North America.",
    featured: false,
    budget: "low",
  },

  // Additional European Countries
  {
    id: "bulgaria",
    country: "Bulgaria",
    flag: "🇧🇬",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "50+",
    avgCost: "$3,000-8,000",
    duration: "1-3 years",
    rating: 3.8,
    students: "15K+",
    language: "Bulgarian/English",
    highlights: ["Lowest costs in EU", "Beautiful nature", "Historic"],
    popularCourses: ["Medicine", "Engineering", "Business"],
    description: "Most affordable EU education with beautiful landscapes and rich history.",
    featured: false,
    budget: "low",
  },
  {
    id: "croatia",
    country: "Croatia",
    flag: "🇭🇷",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "35+",
    avgCost: "$2,000-6,000",
    duration: "1-3 years",
    rating: 4.0,
    students: "10K+",
    language: "Croatian/English",
    highlights: ["Beautiful coastline", "EU member", "Affordable"],
    popularCourses: ["Tourism", "Medicine", "Engineering"],
    description: "Stunning coastline with affordable EU education and Mediterranean lifestyle.",
    featured: false,
    budget: "low",
  },
  {
    id: "slovenia",
    country: "Slovenia",
    flag: "🇸🇮",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "15+",
    avgCost: "$3,000-8,000",
    duration: "1-2 years",
    rating: 4.1,
    students: "8K+",
    language: "Slovenian/English",
    highlights: ["Small class sizes", "Beautiful nature", "Safe"],
    popularCourses: ["Engineering", "Business", "Environmental Science"],
    description: "Small country with personalized education experience and stunning Alpine scenery.",
    featured: false,
    budget: "low",
  },
  {
    id: "slovakia",
    country: "Slovakia",
    flag: "🇸🇰",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "35+",
    avgCost: "$2,000-7,000",
    duration: "1-3 years",
    rating: 3.9,
    students: "12K+",
    language: "Slovak/English",
    highlights: ["Central Europe", "Affordable", "EU member"],
    popularCourses: ["Medicine", "Engineering", "Business"],
    description: "Central European education with excellent value and EU benefits.",
    featured: false,
    budget: "low",
  },
  {
    id: "lithuania",
    country: "Lithuania",
    flag: "🇱🇹",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "25+",
    avgCost: "$3,000-10,000",
    duration: "1-2 years",
    rating: 4.0,
    students: "8K+",
    language: "Lithuanian/English",
    highlights: ["Baltic charm", "EU member", "Growing tech"],
    popularCourses: ["Technology", "Business", "Medicine"],
    description: "Baltic state with growing technology sector and charming medieval cities.",
    featured: false,
    budget: "low",
  },
  {
    id: "latvia",
    country: "Latvia",
    flag: "🇱🇻",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "20+",
    avgCost: "$3,000-9,000",
    duration: "1-2 years",
    rating: 3.9,
    students: "6K+",
    language: "Latvian/English",
    highlights: ["Baltic culture", "Affordable", "EU access"],
    popularCourses: ["Business", "IT", "Medicine"],
    description: "Baltic education with rich cultural heritage and affordable living costs.",
    featured: false,
    budget: "low",
  },
  {
    id: "estonia",
    country: "Estonia",
    flag: "🇪🇪",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "15+",
    avgCost: "$3,000-8,000",
    duration: "1-2 years",
    rating: 4.2,
    students: "5K+",
    language: "Estonian/English",
    highlights: ["Digital society", "Innovation", "EU member"],
    popularCourses: ["IT", "Digital Innovation", "Business"],
    description: "Most digital society with innovative education and cutting-edge technology focus.",
    featured: false,
    budget: "low",
  },
  {
    id: "cyprus",
    country: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "12+",
    avgCost: "$8,000-15,000",
    duration: "1-3 years",
    rating: 4.0,
    students: "25K+",
    language: "Greek/English",
    highlights: ["Mediterranean climate", "EU member", "English programs"],
    popularCourses: ["Business", "Hospitality", "Medicine"],
    description: "Mediterranean island with excellent climate, EU education, and English-taught programs.",
    featured: false,
    budget: "medium",
  },
  {
    id: "malta",
    country: "Malta",
    flag: "🇲🇹",
    region: "Europe",
    image: "/placeholder.svg?height=300&width=400",
    universities: "8+",
    avgCost: "$10,000-18,000",
    duration: "1-3 years",
    rating: 4.1,
    students: "12K+",
    language: "English/Maltese",
    highlights: ["English-speaking", "EU member", "Island life"],
    popularCourses: ["Business", "Gaming", "Finance"],
    description: "English-speaking EU island with unique culture and growing digital economy.",
    featured: false,
    budget: "medium",
  },

  // Additional Asia-Pacific
  {
    id: "philippines",
    country: "Philippines",
    flag: "🇵🇭",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "100+",
    avgCost: "$2,000-5,000",
    duration: "1-4 years",
    rating: 3.7,
    students: "15K+",
    language: "English/Filipino",
    highlights: ["English-speaking", "Very affordable", "Tropical islands"],
    popularCourses: ["Medicine", "Nursing", "Business"],
    description: "English-speaking tropical paradise with very affordable education costs.",
    featured: false,
    budget: "low",
  },
  {
    id: "vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "60+",
    avgCost: "$2,000-4,000",
    duration: "1-4 years",
    rating: 3.6,
    students: "8K+",
    language: "Vietnamese/English",
    highlights: ["Very low cost", "Growing economy", "Rich culture"],
    popularCourses: ["Business", "Engineering", "Hospitality"],
    description: "Rapidly growing economy with very affordable education and rich cultural heritage.",
    featured: false,
    budget: "low",
  },
  {
    id: "indonesia",
    country: "Indonesia",
    flag: "🇮🇩",
    region: "Asia-Pacific",
    image: "/placeholder.svg?height=300&width=400",
    universities: "80+",
    avgCost: "$2,500-5,000",
    duration: "1-4 years",
    rating: 3.7,
    students: "10K+",
    language: "Indonesian/English",
    highlights: ["Affordable", "Diverse culture", "Growing economy"],
    popularCourses: ["Business", "Engineering", "Tourism"],
    description: "World's largest archipelago with diverse culture and growing educational opportunities.",
    featured: false,
    budget: "low",
  },
]

export default function AllDestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [sortBy, setSortBy] = useState("rating")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique values for filters
  const regions = [...new Set(destinations.map((d) => d.region))]
  const languages = [...new Set(destinations.flatMap((d) => d.language.split("/")))]

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    const filtered = destinations.filter((dest) => {
      const matchesSearch =
        dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.popularCourses.some((course) => course.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesRegion = selectedRegion === "all" || dest.region === selectedRegion
      const matchesBudget = selectedBudget === "all" || dest.budget === selectedBudget
      const matchesLanguage = selectedLanguage === "all" || dest.language.includes(selectedLanguage)

      return matchesSearch && matchesRegion && matchesBudget && matchesLanguage
    })

    // Sort destinations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "cost-low":
          return (
            Number.parseInt(a.avgCost.split("-")[0].replace(/[^0-9]/g, "")) -
            Number.parseInt(b.avgCost.split("-")[0].replace(/[^0-9]/g, ""))
          )
        case "cost-high":
          return (
            Number.parseInt(b.avgCost.split("-")[0].replace(/[^0-9]/g, "")) -
            Number.parseInt(a.avgCost.split("-")[0].replace(/[^0-9]/g, ""))
          )
        case "alphabetical":
          return a.country.localeCompare(b.country)
        case "students":
          return Number.parseInt(b.students.replace(/[^0-9]/g, "")) - Number.parseInt(a.students.replace(/[^0-9]/g, ""))
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedRegion, selectedBudget, selectedLanguage, sortBy])

  // Group destinations by region
  const destinationsByRegion = useMemo(() => {
    const grouped = filteredDestinations.reduce(
      (acc, dest) => {
        if (!acc[dest.region]) {
          acc[dest.region] = []
        }
        acc[dest.region].push(dest)
        return acc
      },
      {} as Record<string, typeof destinations>,
    )
    return grouped
  }, [filteredDestinations])

  const DestinationCard = ({ dest, isListView = false }: { dest: (typeof destinations)[0]; isListView?: boolean }) => (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${isListView ? "flex" : ""}`}>
      <div className={`relative ${isListView ? "w-48 flex-shrink-0" : ""}`}>
        <img
          src={dest.image || "/placeholder.svg"}
          alt={dest.country}
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            isListView ? "w-full h-32" : "w-full h-48"
          }`}
        />
        <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-lg">
          <span className={isListView ? "text-lg" : "text-2xl"}>{dest.flag}</span>
        </div>
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          <Star className="h-3 w-3 inline mr-1 fill-yellow-400 text-yellow-400" />
          {dest.rating}
        </div>
        {dest.featured && <Badge className="absolute bottom-3 left-3 bg-blue-600 text-white">Featured</Badge>}
      </div>

      <CardContent className={`space-y-3 ${isListView ? "flex-1 p-4" : "p-6"}`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`font-bold text-gray-900 ${isListView ? "text-lg" : "text-xl"}`}>{dest.country}</h3>
            <p className="text-gray-600 text-sm flex items-center mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {dest.region}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {dest.language}
          </Badge>
        </div>

        <p className={`text-gray-600 text-sm leading-relaxed ${isListView ? "line-clamp-2" : ""}`}>
          {dest.description}
        </p>

        <div className={`grid gap-3 text-sm ${isListView ? "grid-cols-2" : "grid-cols-2"}`}>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2 text-green-500" />
            <div>
              <div className="text-xs text-gray-500">Cost</div>
              <div className="font-semibold">{dest.avgCost}</div>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-purple-500" />
            <div>
              <div className="text-xs text-gray-500">Universities</div>
              <div className="font-semibold">{dest.universities}</div>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-500" />
            <div>
              <div className="text-xs text-gray-500">Duration</div>
              <div className="font-semibold">{dest.duration}</div>
            </div>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2 text-orange-500" />
            <div>
              <div className="text-xs text-gray-500">Students</div>
              <div className="font-semibold">{dest.students}</div>
            </div>
          </div>
        </div>

        {!isListView && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Courses:</h4>
            <div className="flex flex-wrap gap-1">
              {dest.popularCourses.slice(0, 3).map((course, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Link href={`/destinations/${dest.id}`}>
          <Button className="w-full group-hover:bg-blue-600 transition-colors">
            Explore {dest.country}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">All Study Destinations</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover your perfect study destination from our comprehensive collection of 50+ countries offering
              world-class education and incredible opportunities.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-6 gap-4 mb-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search destinations, courses..."
                  className="pl-10 h-12 text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Budgets</SelectItem>
                  <SelectItem value="low">Low (Under $15K)</SelectItem>
                  <SelectItem value="medium">Medium ($15K-$30K)</SelectItem>
                  <SelectItem value="high">High (Above $30K)</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="h-12 border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                More
              </Button>
            </div>

            {showFilters && (
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-10 text-gray-900">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="cost-low">Lowest Cost</SelectItem>
                    <SelectItem value="cost-high">Highest Cost</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="students">Most Students</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="flex-1"
                  >
                    <Grid3X3 className="h-4 w-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="flex-1"
                  >
                    <List className="h-4 w-4 mr-2" />
                    List
                  </Button>
                </div>

                <div className="text-sm text-gray-600 flex items-center justify-end">
                  <Globe className="h-4 w-4 mr-2" />
                  {filteredDestinations.length} destinations found
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{filteredDestinations.length} Destinations Found</h2>
            <p className="text-gray-600">
              {searchTerm && `Results for "${searchTerm}"`}
              {selectedRegion !== "all" && ` in ${selectedRegion}`}
              {selectedBudget !== "all" && ` with ${selectedBudget} budget`}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="cost-low">Lowest Cost</SelectItem>
                <SelectItem value="cost-high">Highest Cost</SelectItem>
                <SelectItem value="alphabetical">A-Z</SelectItem>
                <SelectItem value="students">Most Students</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Destinations Display */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All ({filteredDestinations.length})</TabsTrigger>
            <TabsTrigger value="North America">North America</TabsTrigger>
            <TabsTrigger value="Europe">Europe</TabsTrigger>
            <TabsTrigger value="Asia-Pacific">Asia-Pacific</TabsTrigger>
            <TabsTrigger value="Middle East">Middle East</TabsTrigger>
            <TabsTrigger value="Others">Others</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDestinations.map((dest) => (
                  <DestinationCard key={dest.id} dest={dest} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDestinations.map((dest) => (
                  <DestinationCard key={dest.id} dest={dest} isListView />
                ))}
              </div>
            )}
          </TabsContent>

          {regions.map((region) => (
            <TabsContent key={region} value={region}>
              {viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {(destinationsByRegion[region] || []).map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {(destinationsByRegion[region] || []).map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} isListView />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}

          <TabsContent value="Others">
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDestinations
                  .filter((dest) => !["North America", "Europe", "Asia-Pacific", "Middle East"].includes(dest.region))
                  .map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDestinations
                  .filter((dest) => !["North America", "Europe", "Asia-Pacific", "Middle East"].includes(dest.region))
                  .map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} isListView />
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <Globe className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedRegion("all")
                setSelectedBudget("all")
                setSelectedLanguage("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Decide? We're Here to Help!</h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized recommendations based on your preferences, budget, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Personalized Recommendations
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Compare Destinations
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
