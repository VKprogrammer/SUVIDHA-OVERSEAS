import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, DollarSign, Clock, Users, GraduationCap, Search, Filter, Star } from "lucide-react"
import Link from "next/link"

export default function AllDestinations() {
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
      description: "Home to world's top universities with cutting-edge research facilities.",
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
      description: "Known for high-quality education and excellent post-study opportunities.",
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
      description: "Rich academic heritage with world-renowned universities.",
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
      description: "Europe's economic powerhouse offering affordable education.",
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
      description: "Historic universities with rich cultural heritage.",
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
      description: "Vibrant culture with affordable education options.",
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
      description: "Premium education with surprisingly affordable tuition.",
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
      description: "Innovation-focused education with sustainability emphasis.",
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
      description: "Free education with stunning natural environment.",
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
      description: "Happiest country with excellent work-life balance.",
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
      description: "World-class education system with technology focus.",
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
      description: "Rich cultural heritage with affordable education.",
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
      description: "Heart of Europe with multilingual education.",
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
      description: "Affordable education with beautiful coastal lifestyle.",
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
      description: "Historic charm with affordable quality education.",
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
      description: "Excellent value education with growing opportunities.",
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
      description: "Gateway to Europe with thriving tech industry.",
      featured: false,
      budget: "medium",
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
      description: "Excellent education with beautiful landscapes.",
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
      description: "Safe, peaceful country with stunning natural beauty.",
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
      description: "Modern city-state in the heart of Asia.",
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
      description: "Technology and innovation leader with rich culture.",
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
      description: "Dynamic country with growing global influence.",
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
      description: "World's second-largest economy with rich heritage.",
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
      description: "International financial hub bridging East and West.",
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
      description: "Affordable education in multicultural environment.",
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
      description: "Affordable education with rich cultural experience.",
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
      description: "Technology-focused education with excellent scholarships.",
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
      description: "Affordable education with growing tech industry.",
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
      description: "Modern education hub with excellent facilities.",
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
      description: "World-class education with excellent scholarships.",
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
      description: "Affordable education with unique cultural experience.",
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
      description: "Vibrant culture with affordable education options.",
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
      description: "Affordable education with rich cultural heritage.",
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
      description: "Stable country with growing education sector.",
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
      description: "Rich cultural heritage with affordable education.",
      featured: false,
      budget: "low",
    },

    // Additional European Countries
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
      description: "EU education with affordable costs and rich history.",
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
      description: "Affordable EU education with growing opportunities.",
      featured: false,
      budget: "low",
    },
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
      description: "Most affordable EU education with beautiful landscapes.",
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
      description: "Stunning coastline with affordable EU education.",
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
      description: "Small country with personalized education experience.",
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
      description: "Central European education with excellent value.",
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
      description: "Baltic state with growing technology sector.",
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
      description: "Baltic education with rich cultural heritage.",
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
      description: "Most digital society with innovative education.",
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
      description: "Mediterranean island with excellent climate and education.",
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
      description: "English-speaking EU island with unique culture.",
      featured: false,
      budget: "medium",
    },
  ]

  const featuredDestinations = destinations.filter((dest) => dest.featured)
  const otherDestinations = destinations.filter((dest) => !dest.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Study Abroad Destinations</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover your perfect study destination from our comprehensive list of top countries offering world-class
            education and incredible opportunities.
          </p>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Search destinations..." className="pl-10 h-12 text-gray-900" />
              </div>
              <Select>
                <SelectTrigger className="h-12 text-gray-900">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Under $20,000</SelectItem>
                  <SelectItem value="medium">$20,000 - $40,000</SelectItem>
                  <SelectItem value="high">Above $40,000</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Destinations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Featured Destinations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Popular Choices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These destinations are chosen by 80% of our students for their excellent education quality and
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <Card
                key={dest.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg"
              >
                <div className="relative">
                  <img
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.country}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <span className="text-3xl">{dest.flag}</span>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">Featured</Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{dest.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{dest.country}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{dest.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                      <div>
                        <div className="text-xs text-gray-500">Annual Cost</div>
                        <div className="font-semibold text-sm">{dest.avgCost}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-blue-500" />
                      <div>
                        <div className="text-xs text-gray-500">Duration</div>
                        <div className="font-semibold text-sm">{dest.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="h-5 w-5 mr-2 text-purple-500" />
                      <div>
                        <div className="text-xs text-gray-500">Universities</div>
                        <div className="font-semibold text-sm">{dest.universities}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-orange-500" />
                      <div>
                        <div className="text-xs text-gray-500">Students</div>
                        <div className="font-semibold text-sm">{dest.students}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.popularCourses.map((course, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href={`/destinations/${dest.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 text-base font-semibold">
                      Explore {dest.country}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Destinations */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore additional study destinations with unique opportunities and advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherDestinations.map((dest) => (
              <Card key={dest.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.country}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md">
                    <span className="text-xl">{dest.flag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    <Star className="h-3 w-3 inline mr-1 fill-yellow-400 text-yellow-400" />
                    {dest.rating}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{dest.country}</h3>
                    <p className="text-gray-600 text-sm">{dest.description}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cost:</span>
                      <span className="font-semibold">{dest.avgCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Universities:</span>
                      <span className="font-semibold">{dest.universities}</span>
                    </div>
                  </div>

                  <Link href={`/destinations/${dest.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized guidance from our expert counselors to choose the perfect destination for your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center mt-16">
        <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          <Link href="/destinations/all">View All 50+ Destinations</Link>
        </Button>
      </div>
    </div>
  )
}
