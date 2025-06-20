"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  FileText,
  MessageSquare,
  BarChart3,
  Users,
  Award,
  HeadphonesIcon,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"

export default function VisaProcessingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      type: "Student Visa",
      content:
        "Got my F1 visa after 221g delay. Their team helped every step of the way. The document checklist was comprehensive and the interview preparation was excellent.",
      rating: 5,
    },
    {
      name: "Rajiv Kumar",
      type: "Student Visa - Canada",
      content: "Student visa for Canada approved smoothly. The team guided me through every requirement perfectly.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      type: "Student Visa - UK",
      content: "Got my student visa for UK without any hassle. Excellent support throughout the process.",
      rating: 5,
    },
  ]
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  country: "",
  message: "",
})
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.id]: e.target.value })
}


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const response = await fetch("/api/visa-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })

  const result = await response.json()

  if (response.ok) {
    alert("Your message has been sent successfully!")
    setFormData({ name: "", email: "", country: "", message: "" })
  } else {
    alert("Something went wrong: " + result.message)
  }
}

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 text-blue-600 mr-2" />
            <Link href="/#services" className="text-blue-600 hover:text-blue-800 transition-colors">
  Back to Services
</Link>

            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Visa Processing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Visa Processing</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              End-to-end student visa assistance with 95% success rate and expert guidance. Let us simplify your study
              abroad journey with personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Suvidha Foundation, we understand that student visa applications can be complex and overwhelming. Our
              experienced team simplifies the entire process for aspiring students, providing comprehensive support from
              initial consultation to post-visa assistance. With our proven track record and personalized approach, we
              ensure your student visa journey is smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive visa assistance tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Document Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Complete documentation guidance for student visas with personalized checklists for your chosen
                  destination.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Interview Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Mock interviews and preparation for common visa interview questions to boost your confidence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Status Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Real-time updates on your application status with dedicated support team guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Application Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Complete form filling support, fee assistance, and thorough application review.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of successful visa applicants worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">95% Success Rate</h3>
              <p className="text-gray-600">Proven track record with high approval rates across all visa categories.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">Initial consultation at no cost to understand your specific requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Visa Advisors</h3>
              <p className="text-gray-600">Experienced team with in-depth knowledge of visa processes worldwide.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Support</h3>
              <p className="text-gray-600">Tailored guidance based on your unique profile and destination country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Visa Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to ensure your visa success</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600 flex-grow">Free assessment of your profile and visa requirements.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Verification</h3>
                  <p className="text-gray-600 flex-grow">Thorough review and verification of all required documents.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
                  <p className="text-gray-600 flex-grow">
                    Professional submission of your visa application with all supporting documents.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Preparation</h3>
                  <p className="text-gray-600 flex-grow">Comprehensive interview coaching and mock sessions.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Tracking</h3>
                  <p className="text-gray-600 flex-grow">Real-time updates on your application status and progress.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col min-h-[200px]">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    6
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Post-Visa Support</h3>
                  <p className="text-gray-600 flex-grow">
                    Continued assistance even after visa approval for travel preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Success stories from satisfied visa applicants</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <Badge variant="secondary" className="mt-2">
                    {testimonials[currentTestimonial].type}
                  </Badge>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get answers to common visa processing questions</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  How long does student visa approval typically take?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Student visa processing times vary by country. US F1 visas typically take 2-8 weeks, Canadian study
                  permits take 4-12 weeks, and UK student visas usually process within 3-6 weeks. We provide specific
                  timelines based on your destination during consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  What if my visa application is rejected?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  In the rare case of rejection, we analyze the reasons and provide guidance for reapplication. Our team
                  helps address any issues identified by the consulate and strengthens your profile for a successful
                  resubmission. We also offer appeal assistance where applicable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Do you support visa applications for multiple countries?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Yes, we assist with student visa applications for over 50 countries including USA, Canada, UK,
                  Australia, Germany, France, and many more. Our team has expertise in student visa categories across
                  different countries and stays updated with changing immigration policies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  What documents do I need for student visa application?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Required documents include passport, academic transcripts, acceptance letter from university,
                  financial statements, language proficiency scores, and specific forms. We provide a personalized
                  checklist during your consultation based on your destination country.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

    {/* Contact/CTA Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Visa Journey?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Get in touch with our expert team for personalized visa assistance
      </p>
    </div>

    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">visa@suvidhafoundation.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Mumbai, India</span>
          </div>
        </div>
      </div>

      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Send us a Message</CardTitle>
          <CardDescription>We'll get back to you within 24 hours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="country">Destination Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g., USA, Canada, UK, Australia"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your visa requirements..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
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
