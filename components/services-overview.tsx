import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, FileText, Plane, DollarSign, BookOpen, Users, ArrowRight } from "lucide-react"
import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      icon: Users,
      title: "Free Consultation",
      description: "Get personalized guidance from certified education consultants with 10+ years of experience.",
      features: ["One-on-one counseling", "Career guidance", "University selection"],
      color: "bg-blue-500",
      link: "/free-consultation",
    },
    {
      icon: GraduationCap,
      title: "University & Course Selection",
      description: "Find the perfect university and course that matches your academic profile and career goals.",
      features: ["500+ partner universities", "Course matching", "Ranking analysis"],
      color: "bg-green-500",
      link:"/university-course-selection",
    },
    {
      icon: FileText,
      title: "Admission Application",
      description: "Complete application support including SOP writing, document preparation, and submission.",
      features: ["SOP writing", "Document verification", "Application tracking"],
      color: "bg-purple-500",
      link:"/admission-application"
    },
    {
      icon: Plane,
      title: "Visa Processing",
      description: "End-to-end visa assistance with 95% success rate and expert guidance throughout the process.",
      features: ["Document checklist", "Interview preparation", "Status tracking"],
      color: "bg-orange-500",
      link: "/visa-processing",
    },
    {
      icon: DollarSign,
      title: "Scholarship Guidance",
      description:
        "Maximize your funding opportunities with our comprehensive scholarship database and application support.",
      features: ["Scholarship search", "Application assistance", "Financial planning"],
      color: "bg-red-500",
      link:"/scholarship-guidance"
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "IELTS, TOEFL, GRE, GMAT preparation with experienced trainers and proven study materials.",
      features: ["Expert trainers", "Mock tests", "Score improvement"],
      color: "bg-indigo-500",
      link:"/test-preparation"
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to visa approval, we provide end-to-end support for your study abroad journey with
            personalized attention at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link ? (
  <Link href={service.link}>
    <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
) : (
  <Button variant="outline" disabled className="opacity-50 cursor-not-allowed">
    Learn More
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
)}

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Book Your Free Consultation Now
          </Button>
        </div>
      </div>
    </section>
  )
}
