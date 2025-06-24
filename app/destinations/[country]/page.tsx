import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  DollarSign,
  Clock,
  Users,
  GraduationCap,
  MapPin,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Award,
  Briefcase,
  Home,
  Heart,
  Plane,
} from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const getDestinationData = (country: string) => {
  const destinations: Record<string, any> = {
    usa: {
      country: "United States",
      flag: "🇺🇸",
      heroImage: "/placeholder.svg?height=400&width=1200",
      universities: "4000+",
      avgCost: "$30,000-60,000",
      duration: "1-4 years",
      rating: 4.8,
      students: "1M+",
      description:
        "The United States offers world-class education with cutting-edge research facilities, diverse academic programs, and excellent career opportunities.",
      highlights: [
        "Home to 8 of the world's top 10 universities",
        "Optional Practical Training (OPT) work permit",
        "Diverse range of programs and specializations",
        "Strong industry connections and internship opportunities",
        "Multicultural environment with students from 200+ countries",
      ],
      popularCourses: [
        { name: "Computer Science", demand: 95 },
        { name: "Business Administration", demand: 88 },
        { name: "Engineering", demand: 92 },
        { name: "Data Science", demand: 89 },
        { name: "Medicine", demand: 85 },
        { name: "Law", demand: 78 },
      ],
      topUniversities: [
        { name: "Harvard University", ranking: 1, location: "Cambridge, MA" },
        { name: "Stanford University", ranking: 2, location: "Stanford, CA" },
        { name: "MIT", ranking: 3, location: "Cambridge, MA" },
        { name: "University of California, Berkeley", ranking: 4, location: "Berkeley, CA" },
        { name: "Princeton University", ranking: 5, location: "Princeton, NJ" },
      ],
      livingCost: {
        accommodation: "$8,000-15,000",
        food: "$3,000-5,000",
        transport: "$1,000-2,000",
        misc: "$2,000-3,000",
      },
      workOpportunities: {
        duringStudy: "20 hours/week on-campus",
        afterStudy: "12-36 months OPT",
        averageSalary: "$60,000-120,000",
      },
      admissionRequirements: [
        "Bachelor's degree (for Master's programs)",
        "TOEFL/IELTS scores",
        "GRE/GMAT scores (program dependent)",
        "Statement of Purpose",
        "Letters of Recommendation",
        "Financial documentation",
      ],
      visaProcess: [
        "Receive I-20 from university",
        "Pay SEVIS fee",
        "Complete DS-160 form",
        "Schedule visa interview",
        "Attend interview with documents",
        "Receive visa decision",
      ],
    },
    canada: {
      country: "Canada",
      flag: "🇨🇦",
      heroImage: "/placeholder.svg?height=400&width=1200",
      universities: "100+",
      avgCost: "$20,000-40,000",
      duration: "1-4 years",
      rating: 4.7,
      students: "500K+",
      description:
        "Canada offers high-quality education, multicultural environment, and excellent post-study work opportunities with clear pathways to permanent residency.",
      highlights: [
        "Post-Graduation Work Permit (PGWP) up to 3 years",
        "Pathway to permanent residency",
        "Affordable tuition compared to US/UK",
        "Safe and welcoming environment",
        "Bilingual education opportunities",
      ],
      popularCourses: [
        { name: "Engineering", demand: 90 },
        { name: "Computer Science", demand: 93 },
        { name: "Business", demand: 85 },
        { name: "Healthcare", demand: 88 },
        { name: "Environmental Science", demand: 82 },
        { name: "Artificial Intelligence", demand: 91 },
      ],
      topUniversities: [
        { name: "University of Toronto", ranking: 1, location: "Toronto, ON" },
        { name: "McGill University", ranking: 2, location: "Montreal, QC" },
        { name: "University of British Columbia", ranking: 3, location: "Vancouver, BC" },
        { name: "University of Alberta", ranking: 4, location: "Edmonton, AB" },
        { name: "McMaster University", ranking: 5, location: "Hamilton, ON" },
      ],
      livingCost: {
        accommodation: "$6,000-12,000",
        food: "$2,500-4,000",
        transport: "$800-1,500",
        misc: "$1,500-2,500",
      },
      workOpportunities: {
        duringStudy: "20 hours/week off-campus",
        afterStudy: "Up to 3 years PGWP",
        averageSalary: "CAD 45,000-85,000",
      },
      admissionRequirements: [
        "Bachelor's degree (for Master's programs)",
        "IELTS/TOEFL scores",
        "Academic transcripts",
        "Statement of Purpose",
        "Letters of Recommendation",
        "Proof of funds",
      ],
      visaProcess: [
        "Receive Letter of Acceptance",
        "Apply for study permit online",
        "Provide biometrics",
        "Submit required documents",
        "Wait for processing",
        "Receive study permit",
      ],
    },




  australia: {
  country: "Australia",
  flag: "🇦🇺",
  heroImage: "/placeholder.svg?height=400&width=1200",
  universities: "40+",
  avgCost: "AUD 20,000-45,000",
  duration: "1-4 years",
  rating: 4.6,
  students: "400K+",
  description:
    "Australia is known for its globally ranked universities, vibrant student cities, and favorable post-study work opportunities.",
  highlights: [
    "Post-study work visa up to 4 years",
    "World-class research facilities",
    "Safe and student-friendly cities",
    "Excellent work-life balance",
    "Option to work during studies (40 hrs/fortnight)",
  ],
  popularCourses: [
    { name: "Engineering", demand: 89 },
    { name: "Business", demand: 84 },
    { name: "Information Technology", demand: 91 },
    { name: "Healthcare", demand: 87 },
    { name: "Education", demand: 79 },
    { name: "Agriculture", demand: 75 },
  ],
  topUniversities: [
    { name: "University of Melbourne", ranking: 1, location: "Melbourne, VIC" },
    { name: "Australian National University", ranking: 2, location: "Canberra, ACT" },
    { name: "University of Sydney", ranking: 3, location: "Sydney, NSW" },
    { name: "University of Queensland", ranking: 4, location: "Brisbane, QLD" },
    { name: "Monash University", ranking: 5, location: "Melbourne, VIC" },
  ],
  livingCost: {
    accommodation: "AUD 8,000-15,000",
    food: "AUD 3,000-5,000",
    transport: "AUD 800-1,200",
    misc: "AUD 2,000-3,000",
  },
  workOpportunities: {
    duringStudy: "40 hours/fortnight",
    afterStudy: "Temporary Graduate visa (subclass 485)",
    averageSalary: "AUD 50,000-90,000",
  },
  admissionRequirements: [
    "Academic transcripts",
    "English proficiency (IELTS/TOEFL)",
    "Statement of Purpose",
    "Letters of Recommendation",
    "Passport",
    "Proof of funds",
  ],
  visaProcess: [
    "Get admission offer",
    "Apply for student visa (subclass 500)",
    "Provide biometrics",
    "Upload documents",
    "Health checkup",
    "Visa decision",
  ],
},

germany: {
  country: "Germany",
  flag: "🇩🇪",
  heroImage: "/placeholder.svg?height=400&width=1200",
  universities: "300+",
  avgCost: "€0-15,000 (many public universities are tuition-free)",
  duration: "2-4 years",
  rating: 4.5,
  students: "350K+",
  description:
    "Germany is a leading destination for quality, affordable education, especially in engineering and STEM fields, with many public universities offering tuition-free programs.",
  highlights: [
    "Tuition-free education at many public universities",
    "Strong job market for engineers and IT grads",
    "Courses available in English and German",
    "Excellent infrastructure and research",
    "18-month post-study job search visa",
  ],
  popularCourses: [
    { name: "Mechanical Engineering", demand: 95 },
    { name: "Computer Science", demand: 92 },
    { name: "Electrical Engineering", demand: 88 },
    { name: "Business", demand: 84 },
    { name: "Physics", demand: 80 },
    { name: "AI & Robotics", demand: 90 },
  ],
  topUniversities: [
    { name: "Technical University of Munich", ranking: 1, location: "Munich" },
    { name: "Heidelberg University", ranking: 2, location: "Heidelberg" },
    { name: "Ludwig Maximilian University", ranking: 3, location: "Munich" },
    { name: "RWTH Aachen University", ranking: 4, location: "Aachen" },
    { name: "University of Freiburg", ranking: 5, location: "Freiburg" },
  ],
  livingCost: {
    accommodation: "€3,000-6,000",
    food: "€2,000-3,000",
    transport: "€800-1,200",
    misc: "€1,500-2,500",
  },
  workOpportunities: {
    duringStudy: "120 full days or 240 half days/year",
    afterStudy: "18-month job seeker visa",
    averageSalary: "€40,000-70,000",
  },
  admissionRequirements: [
    "Bachelor’s degree",
    "English/German proficiency (IELTS/TestDaF)",
    "CV/Resume",
    "Statement of Purpose",
    "Letter of Recommendation",
    "Academic transcripts",
  ],
  visaProcess: [
    "Secure university admission",
    "Open blocked bank account",
    "Apply for student visa",
    "Attend visa interview",
    "Submit documents and biometrics",
    "Receive visa",
  ],
},

unitedkingdom: {
  country: "United Kingdom",
  flag: "🇬🇧",
  heroImage: "/placeholder.svg?height=400&width=1200",
  universities: "130+",
  avgCost: "£10,000–38,000",
  duration: "1–4 years",
  rating: 4.8,
  students: "600K+",
  description:
    "The UK offers world-renowned universities, diverse student communities, and a strong global alumni network.",
  highlights: [
    "2-year post-study work visa (Graduate Route)",
    "Top-ranked institutions globally",
    "Shorter course duration",
    "Scholarships and funding available",
    "Strong academic and industry linkages",
  ],
  popularCourses: [
    { name: "Business & Management", demand: 90 },
    { name: "Law", demand: 87 },
    { name: "Engineering", demand: 88 },
    { name: "Medicine", demand: 92 },
    { name: "Data Science", demand: 93 },
    { name: "Design & Media", demand: 85 },
  ],
  topUniversities: [
    { name: "University of Oxford", ranking: 1, location: "Oxford" },
    { name: "University of Cambridge", ranking: 2, location: "Cambridge" },
    { name: "Imperial College London", ranking: 3, location: "London" },
    { name: "University College London (UCL)", ranking: 4, location: "London" },
    { name: "University of Edinburgh", ranking: 5, location: "Edinburgh" },
  ],
  livingCost: {
    accommodation: "£6,000-12,000",
    food: "£2,000-3,500",
    transport: "£800-1,200",
    misc: "£1,500-2,500",
  },
  workOpportunities: {
    duringStudy: "20 hours/week",
    afterStudy: "Graduate visa (2 years)",
    averageSalary: "£25,000-45,000",
  },
  admissionRequirements: [
    "Academic transcripts",
    "English proficiency (IELTS/TOEFL)",
    "Statement of Purpose",
    "Letters of Recommendation",
    "CV/Resume",
    "Proof of funds",
  ],
  visaProcess: [
    "Accept university offer",
    "Apply for Student visa (Tier 4)",
    "Submit documents & biometrics",
    "Receive CAS from university",
    "Pay visa fees & IHS",
    "Get visa approval",
  ],
},



newzealand: {
  country: "New Zealand",
  flag: "🇳🇿",
  heroImage: "/placeholder.svg?height=400&width=1200",
  universities: "8 major universities",
  avgCost: "NZD 20,000-35,000",
  duration: "1-3 years",
  rating: 4.4,
  students: "120K+",
  description:
    "New Zealand offers internationally recognized degrees, stunning landscapes, and a safe, student-friendly environment.",
  highlights: [
    "Up to 3 years post-study work visa",
    "Research-driven institutions",
    "Work during studies allowed",
    "Low student-to-teacher ratio",
    "High quality of life",
  ],
  popularCourses: [
    { name: "Environmental Science", demand: 86 },
    { name: "Hospitality & Tourism", demand: 88 },
    { name: "Information Technology", demand: 89 },
    { name: "Agricultural Science", demand: 83 },
    { name: "Engineering", demand: 85 },
    { name: "Business", demand: 82 },
  ],
  topUniversities: [
    { name: "University of Auckland", ranking: 1, location: "Auckland" },
    { name: "University of Otago", ranking: 2, location: "Dunedin" },
    { name: "Victoria University of Wellington", ranking: 3, location: "Wellington" },
    { name: "University of Canterbury", ranking: 4, location: "Christchurch" },
    { name: "Massey University", ranking: 5, location: "Palmerston North" },
  ],
  livingCost: {
    accommodation: "NZD 7,000-12,000",
    food: "NZD 2,500-4,000",
    transport: "NZD 800-1,200",
    misc: "NZD 1,500-2,500",
  },
  workOpportunities: {
    duringStudy: "20 hours/week",
    afterStudy: "Post-study work visa up to 3 years",
    averageSalary: "NZD 40,000-70,000",
  },
  admissionRequirements: [
    "Bachelor’s degree",
    "English proficiency (IELTS/TOEFL)",
    "Academic transcripts",
    "Statement of Purpose",
    "Letters of Recommendation",
    "Passport & Visa application",
  ],
  visaProcess: [
    "Receive offer letter",
    "Submit visa application",
    "Provide financial documents",
    "Medical and police clearance",
    "Get visa approval",
  ],
}

    // Add more countries as needed
  }

  return destinations[country] || destinations.usa
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const data = getDestinationData(params.country)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={data.heroImage || "/placeholder.svg"} alt={data.country} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link href="components/features-destinations">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Button>
            </Link>
            <div className="flex items-center mb-4">
              <span className="text-6xl mr-4">{data.flag}</span>
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">Study in {data.country}</h1>
                <div className="flex items-center text-white/90">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-2" />
                  <span className="text-xl font-semibold mr-4">{data.rating}</span>
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-xl">{data.students} International Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{data.universities}</div>
            <div className="text-gray-600">Universities</div>
          </Card>
          <Card className="text-center p-6">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{data.avgCost}</div>
            <div className="text-gray-600">Annual Cost</div>
          </Card>
          <Card className="text-center p-6">
            <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{data.duration}</div>
            <div className="text-gray-600">Program Duration</div>
          </Card>
          <Card className="text-center p-6">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">{data.rating}/5</div>
            <div className="text-gray-600">Student Rating</div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="costs">Costs</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="visa">Visa</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Why Study in {data.country}?</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                  <div className="space-y-3">
                    {data.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Work Opportunities</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="font-semibold text-gray-900">During Study</div>
                      <div className="text-sm text-gray-600">{data.workOpportunities.duringStudy}</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <div className="font-semibold text-gray-900">After Study</div>
                      <div className="text-sm text-gray-600">{data.workOpportunities.afterStudy}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <div className="font-semibold text-gray-900">Average Salary</div>
                      <div className="text-sm text-gray-600">{data.workOpportunities.averageSalary}</div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-semibold">English</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Currency:</span>
                      <span className="font-semibold">{params.country === "usa" ? "USD" : "CAD"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Zone:</span>
                      <span className="font-semibold">Multiple</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Climate:</span>
                      <span className="font-semibold">Varied</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <h3 className="text-lg font-semibold mb-4">Ready to Apply?</h3>
                  <p className="text-gray-600 mb-4 text-sm">Get personalized guidance from our expert counselors.</p>
                  <Button className="w-full mb-3">Book Free Consultation</Button>
                  <Button variant="outline" className="w-full">
                    Download Guide
                  </Button>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="universities" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Top Universities</h2>
              <div className="space-y-4">
                {data.topUniversities.map((uni: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {uni.ranking}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{uni.name}</h3>
                        <p className="text-gray-600 text-sm flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {uni.location}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Popular Courses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.popularCourses.map((course: any, index: number) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-900">{course.name}</h3>
                      <Badge variant="secondary">{course.demand}% Demand</Badge>
                    </div>
                    <Progress value={course.demand} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Tuition Fees</h2>
                <div className="text-3xl font-bold text-blue-600 mb-2">{data.avgCost}</div>
                <p className="text-gray-600 mb-6">Per year (varies by program and university)</p>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Undergraduate Programs:</span>
                    <span className="font-semibold">$20,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Graduate Programs:</span>
                    <span className="font-semibold">$25,000 - $60,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MBA Programs:</span>
                    <span className="font-semibold">$40,000 - $80,000</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Living Expenses</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Accommodation</span>
                    </div>
                    <span className="font-semibold">{data.livingCost.accommodation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-600 mr-2" />
                      <span>Food & Dining</span>
                    </div>
                    <span className="font-semibold">{data.livingCost.food}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Plane className="h-5 w-5 text-green-600 mr-2" />
                      <span>Transportation</span>
                    </div>
                    <span className="font-semibold">{data.livingCost.transport}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-purple-600 mr-2" />
                      <span>Miscellaneous</span>
                    </div>
                    <span className="font-semibold">{data.livingCost.misc}</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="admission" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">General Requirements</h3>
                  <div className="space-y-3">
                    {data.admissionRequirements.map((req: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Application Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        1
                      </div>
                      <div>
                        <div className="font-semibold">Research & Shortlist</div>
                        <div className="text-sm text-gray-600">6-12 months before</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        2
                      </div>
                      <div>
                        <div className="font-semibold">Prepare Documents</div>
                        <div className="text-sm text-gray-600">4-6 months before</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        3
                      </div>
                      <div>
                        <div className="font-semibold">Submit Applications</div>
                        <div className="text-sm text-gray-600">2-4 months before</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        4
                      </div>
                      <div>
                        <div className="font-semibold">Visa Process</div>
                        <div className="text-sm text-gray-600">After admission</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="visa" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Visa Process</h2>
              <div className="space-y-6">
                {data.visaProcess.map((step: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">{step}</p>
                      {index < data.visaProcess.length - 1 && <div className="w-px h-8 bg-gray-200 ml-4 mt-4"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey to {data.country}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance and personalized support throughout your application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Country Guide
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
