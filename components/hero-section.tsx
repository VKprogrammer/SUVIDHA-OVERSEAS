import { Button } from "@/components/ui/button"
import { ArrowRight, Users, GraduationCap, Award } from "lucide-react"
import Image from "next/image"
export default function HeroSection() {
  const stats = [
    { icon: Users, label: "Students Helped", value: "5000+" },
    { icon: GraduationCap, label: "Universities Partnered", value: "500+" },
    { icon: Award, label: "Success Rate", value: "95%" },
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Dream University Awaits
                <span className="block text-orange-400">Free Consultation</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Expert guidance for studying abroad. Get personalized counseling, admission support, and visa assistance
                from certified education consultants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiries">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>

               <a href="#success">
  <Button
    size="lg"
    variant="outline"
    className="border-white text-orange-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
  >
    Watch Success Stories
  </Button>
</a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-8">
              <img
                src="/studyabroad.jpg?height=500&width=500"
                alt="Students studying abroad"
                className="w-full h-full object-cover object-left-[60%] rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white text-blue-600 p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold">Free Consultation</div>
              <div className="text-xs text-gray-600">Available 24/7</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold">Visa Success</div>
              <div className="text-xs">95% Approval Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
