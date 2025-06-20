// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   ArrowLeft,
//   GraduationCap,
//   Brain,
//   BarChart3,
//   FileText,
//   FolderOpen,
//   MessageCircle,
//   Target,
//   Globe,
//   Search,
//   Clock,
//   User,
// } from "lucide-react"

// export default function UniversityCourseSelectionPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumb Navigation */}
//       <div className="bg-gray-50 py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center space-x-2 text-sm">
//             <Link href="/#services" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
//               <ArrowLeft className="w-4 h-4 mr-1" />
//               Back to Services
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-600">University & Course Selection</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             University & Course Selection
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Find the best-fit university and course based on your academic profile, budget, and career aspirations. Let
//             our expert counselors guide you through 500+ top global institutions.
//           </p>
//         </div>
//       </section>

//       {/* What We Offer Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Comprehensive guidance to help you make the right choice for your future
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <GraduationCap className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">500+ Global University Options</h3>
//                 <p className="text-gray-600">Access to top universities across USA, UK, Canada, Australia, and more</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Brain className="w-8 h-8 text-indigo-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Matching with Career Goals</h3>
//                 <p className="text-gray-600">Align your course selection with your long-term career objectives</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <BarChart3 className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Country & Ranking Insights</h3>
//                 <p className="text-gray-600">Detailed analysis of university rankings and country-specific benefits</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FileText className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Profile Evaluation</h3>
//                 <p className="text-gray-600">Comprehensive assessment of your academic and professional background</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FolderOpen className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Requirements by Country</h3>
//                 <p className="text-gray-600">Country-specific guidance on documentation and application processes</p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <MessageCircle className="w-8 h-8 text-pink-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">One-on-One Counseling</h3>
//                 <p className="text-gray-600">Personalized sessions with experienced education consultants</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Guidance?</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Experience the difference with our proven approach to university selection
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Target className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Recommendations</h3>
//               <p className="text-gray-600">Tailored suggestions based on your unique profile and goals</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Globe className="w-8 h-8 text-indigo-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Global University Partnerships</h3>
//               <p className="text-gray-600">Direct connections with top universities worldwide</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Search className="w-8 h-8 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparent Admission Criteria</h3>
//               <p className="text-gray-600">Clear insights into admission requirements and success rates</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Clock className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Turnaround Time</h3>
//               <p className="text-gray-600">Fast and efficient guidance to meet application deadlines</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How Our Process Works */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               A systematic approach to finding your perfect university match
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 step: "1",
//                 title: "Profile Analysis",
//                 description: "Comprehensive evaluation of your academic background, achievements, and preferences",
//               },
//               {
//                 step: "2",
//                 title: "Country & Course Shortlisting",
//                 description: "Identify the best countries and courses aligned with your career goals",
//               },
//               {
//                 step: "3",
//                 title: "Academic & Financial Fit Matching",
//                 description: "Match universities based on your academic profile and budget requirements",
//               },
//               {
//                 step: "4",
//                 title: "Counseling Session",
//                 description: "Detailed discussion with our experts about your shortlisted options",
//               },
//               {
//                 step: "5",
//                 title: "Final University Selection",
//                 description: "Make informed decisions with our guidance on the best-fit universities",
//               },
//               {
//                 step: "6",
//                 title: "Application Planning",
//                 description: "Strategic planning for your university applications and deadlines",
//               },
//             ].map((item, index) => (
//               <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <CardContent className="p-8">
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//                       {item.step}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
//                   </div>
//                   <p className="text-gray-600">{item.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Student Success Stories */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Hear from students who found their perfect university match with our guidance
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                     <User className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
//                     <p className="text-sm text-gray-600">MS Computer Science, Stanford University</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">
//                   "Suvidha Overseas helped me identify the perfect program that matched my research interests. Their
//                   guidance was invaluable in securing admission to my dream university."
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                     <User className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Rahul Patel</h4>
//                     <p className="text-sm text-gray-600">MBA, London Business School</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">
//                   "The personalized counseling sessions helped me understand which universities would be the best fit
//                   for my career goals. Excellent service and support throughout the process."
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
//                     <User className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Anita Singh</h4>
//                     <p className="text-sm text-gray-600">PhD Engineering, University of Toronto</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">
//                   "Their comprehensive approach to university selection made the entire process smooth and stress-free.
//                   I'm now pursuing my PhD at one of the top universities in Canada."
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Help Choosing the Right University?</h2>
//             <p className="text-xl opacity-90">
//               Book a free session with our counselors and make your dream university a reality.
//             </p>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <Card className="border-0 shadow-2xl">
//               <CardContent className="p-8">
//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Full Name
//                       </label>
//                       <Input id="name" type="text" placeholder="Enter your full name" className="w-full" />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address
//                       </label>
//                       <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Destination Country
//                     </label>
//                     <Input
//                       id="destination"
//                       type="text"
//                       placeholder="e.g., USA, UK, Canada, Australia"
//                       className="w-full"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Tell us about your academic background and goals
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Share your academic qualifications, field of interest, and career goals..."
//                       rows={4}
//                       className="w-full"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
//                   >
//                     Get Started
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  GraduationCap,
  Brain,
  BarChart3,
  FileText,
  FolderOpen,
  MessageCircle,
  Target,
  Globe,
  Search,
  Clock,
  User,
} from "lucide-react"

export default function UniversityCourseSelectionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    preferredCountry: "",
    academicBackground: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/university-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          preferred_country: formData.preferredCountry,
          academic_background: formData.academicBackground
        })
      });

      if (response.ok) {
        alert("Thank you! We’ve received your request.");
        setFormData({
          fullName: "",
          email: "",
          preferredCountry: "",
          academicBackground: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/#services" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">University & Course Selection</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            University & Course Selection
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find the best-fit university and course based on your academic profile, budget, and career aspirations. Let
            our expert counselors guide you through 500+ top global institutions.
          </p>
        </div>
      </section>

            {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive guidance to help you make the right choice for your future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">500+ Global University Options</h3>
                <p className="text-gray-600">Access to top universities across USA, UK, Canada, Australia, and more</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Matching with Career Goals</h3>
                <p className="text-gray-600">Align your course selection with your long-term career objectives</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Country & Ranking Insights</h3>
                <p className="text-gray-600">Detailed analysis of university rankings and country-specific benefits</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Profile Evaluation</h3>
                <p className="text-gray-600">Comprehensive assessment of your academic and professional background</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FolderOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Requirements by Country</h3>
                <p className="text-gray-600">Country-specific guidance on documentation and application processes</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">One-on-One Counseling</h3>
                <p className="text-gray-600">Personalized sessions with experienced education consultants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Guidance?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our proven approach to university selection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Recommendations</h3>
              <p className="text-gray-600">Tailored suggestions based on your unique profile and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global University Partnerships</h3>
              <p className="text-gray-600">Direct connections with top universities worldwide</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparent Admission Criteria</h3>
              <p className="text-gray-600">Clear insights into admission requirements and success rates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Turnaround Time</h3>
              <p className="text-gray-600">Fast and efficient guidance to meet application deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Process Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to finding your perfect university match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Profile Analysis",
                description: "Comprehensive evaluation of your academic background, achievements, and preferences",
              },
              {
                step: "2",
                title: "Country & Course Shortlisting",
                description: "Identify the best countries and courses aligned with your career goals",
              },
              {
                step: "3",
                title: "Academic & Financial Fit Matching",
                description: "Match universities based on your academic profile and budget requirements",
              },
              {
                step: "4",
                title: "Counseling Session",
                description: "Detailed discussion with our experts about your shortlisted options",
              },
              {
                step: "5",
                title: "Final University Selection",
                description: "Make informed decisions with our guidance on the best-fit universities",
              },
              {
                step: "6",
                title: "Application Planning",
                description: "Strategic planning for your university applications and deadlines",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who found their perfect university match with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                    <img
          src="/priya.avif"
          alt="priya"
          className="w-full h-full object-cover object-center"
        />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">MS Computer Science, Stanford University</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Suvidha Overseas helped me identify the perfect program that matched my research interests. Their
                  guidance was invaluable in securing admission to my dream university."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-indigo-600"  />
                    <img
          src="/rahul.jpg"
          alt="Rahul Patel"
          className="w-full h-full object-cover object-center"
        />
                  </div>
                  <div>
                    
                    <h4 className="font-semibold text-gray-900">Rahul Patel</h4>
                    <p className="text-sm text-gray-600">MBA, London Business School</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The personalized counseling sessions helped me understand which universities would be the best fit
                  for my career goals. Excellent service and support throughout the process."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-purple-600" />
                    <img
          src="/sharma.jpg"
          alt=" anita singh"
          className="w-full h-full object-cover object-center"
        />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anita Singh</h4>
                    <p className="text-sm text-gray-600">PhD Engineering, University of Toronto</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Their comprehensive approach to university selection made the entire process smooth and stress-free.
                  I'm now pursuing my PhD at one of the top universities in Canada."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Help Choosing the Right University?</h2>
            <p className="text-xl opacity-90">
              Book a free session with our counselors and make your dream university a reality.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredCountry" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Destination Country
                    </label>
                    <Input
                      id="preferredCountry"
                      type="text"
                      placeholder="e.g., USA, UK, Canada, Australia"
                      className="w-full"
                      value={formData.preferredCountry}
                      onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="academicBackground" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your academic background and goals
                    </label>
                    <Textarea
                      id="academicBackground"
                      placeholder="Share your academic qualifications, field of interest, and career goals..."
                      rows={4}
                      className="w-full"
                      value={formData.academicBackground}
                      onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
                  >
                    Get Started
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

