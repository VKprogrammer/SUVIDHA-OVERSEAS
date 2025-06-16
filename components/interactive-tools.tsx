import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Search, CheckCircle, FileCheck, ArrowRight } from "lucide-react"

export default function InteractiveTools() {
  const tools = [
    {
      icon: CheckCircle,
      title: "Eligibility Checker",
      description: "Check your eligibility for universities and courses based on your academic profile.",
      features: ["Instant results", "University recommendations", "Course suggestions"],
      buttonText: "Check Eligibility",
      color: "bg-green-500",
    },
    {
      icon: Calculator,
      title: "Cost Calculator",
      description: "Calculate the total cost of studying abroad including tuition, living expenses, and more.",
      features: ["Country-wise breakdown", "Living cost estimates", "Scholarship deductions"],
      buttonText: "Calculate Costs",
      color: "bg-blue-500",
    },
    {
      icon: Search,
      title: "University Finder",
      description: "Find the perfect university with our advanced search and filtering system.",
      features: ["500+ universities", "Advanced filters", "Comparison tool"],
      buttonText: "Find Universities",
      color: "bg-purple-500",
    },
    {
      icon: FileCheck,
      title: "Visa Requirements",
      description: "Get detailed visa requirements and documentation checklist for your destination.",
      features: ["Country-specific info", "Document checklist", "Processing times"],
      buttonText: "Check Requirements",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Tools & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our free interactive tools to plan your study abroad journey. Get instant results and personalized
            recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                <ul className="space-y-1">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center justify-center">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${tool.color} hover:opacity-90 text-white`}>
                  {tool.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            While our tools provide great insights, nothing beats personalized consultation. Book a free session with
            our expert counselors.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
