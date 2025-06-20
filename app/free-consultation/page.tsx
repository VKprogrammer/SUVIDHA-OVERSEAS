"use client"
import Link from "next/link";
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Users,
  MapPin,
  FileText,
  Calendar,
  Phone,
  Mail,
  User,
  Video,
  MessageSquare,
  Target,
  BookOpen,
  Globe,
} from "lucide-react"

export default function FreeConsultationService() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consultationTime: "",
    studyDestination: "",
    currentEducation: "",
    preferredMode: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
        education_level: formData.currentEducation,
        preferred_destination: formData.studyDestination,
        consultation_mode: formData.preferredMode,
        preferred_time_slot: formData.consultationTime
      })
    });

    if (response.ok) {
      alert("Thank you! Your consultation has been booked. We'll contact you within 24 hours.");
      // Optionally reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        consultationTime: "",
        studyDestination: "",
        currentEducation: "",
        preferredMode: ""
      });
    } else {
      alert("Something went wrong while booking your consultation. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Server error. Please try again later.");
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/#services" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
  <ArrowLeft className="h-4 w-4 mr-1" />
  Back to Services
</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Free Consultation</span>
          </div>
        </div>
      </div>

      {/* Service Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Free Service</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Consultation Service</h1>
              <p className="text-xl text-gray-600 mb-6">
                Get expert guidance from our certified education consultants. Discuss your study abroad goals, explore
                options, and create a personalized roadmap for your international education journey.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  45-60 minutes
                </div>
                <div className="flex items-center">
                  <Video className="h-4 w-4 mr-1" />
                  Online or In-person
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  No commitment required
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
                <p className="text-gray-600 mb-4">Book your free consultation now</p>
                <Button
                  onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We'll Cover in Your Consultation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive consultation is designed to give you clarity and direction for your study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Goal Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Understanding your career objectives, academic interests, and personal preferences to create a
                  tailored plan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Course & Program Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exploring suitable courses, specializations, and degree programs that align with your career goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Country & University Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discussing the best countries and universities based on your budget, preferences, and academic
                  profile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Application Process Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step breakdown of application requirements, deadlines, and documentation needed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Financial Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discussion about tuition fees, living costs, scholarships, and financial aid opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Next Steps & Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating a personalized timeline and action plan for your study abroad preparation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple 3-step process to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Your Slot</h3>
              <p className="text-gray-600">
                Fill out the form below with your details and preferred consultation time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We'll Contact You</h3>
              <p className="text-gray-600">Our team will reach out within 24 hours to confirm your appointment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Expert Guidance</h3>
              <p className="text-gray-600">
                Attend your consultation and get personalized advice for your study abroad journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
            <p className="text-lg text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentEducation">Current Education Level</Label>
                    <Select onValueChange={(value) => handleInputChange("currentEducation", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12th">12th Grade/High School</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studyDestination">Preferred Study Destination</Label>
                    <Select onValueChange={(value) => handleInputChange("studyDestination", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="netherlands">Netherlands</SelectItem>
                        <SelectItem value="undecided">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredMode">Consultation Mode</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredMode", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select consultation mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online (Video Call)</SelectItem>
                        <SelectItem value="office">Visit Office</SelectItem>
                        <SelectItem value="either">Either is fine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consultationTime">Preferred Time Slot</Label>
                  <Select onValueChange={(value) => handleInputChange("consultationTime", value)}>
                    <SelectTrigger>
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="weekend">Weekend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  Book My Free Consultation
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By booking this consultation, you agree to our terms and privacy policy. No spam, we respect your
                  privacy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What exactly is covered in the free consultation?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Our free consultation covers goal assessment, course selection guidance, country and university
                recommendations, application process overview, financial planning discussion, and a personalized
                timeline for your study abroad journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                How long does the consultation take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                The consultation typically lasts 45-60 minutes, giving us enough time to understand your goals and
                provide comprehensive guidance without rushing through important details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Can I have the consultation online?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes! We offer both online (via Zoom/Google Meet) and in-person consultations. Online consultations are
                just as effective and convenient, especially if you're not in our city.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Will I be pressured to buy other services?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Absolutely not. Our free consultation is genuinely free with no strings attached. We'll only discuss
                additional services if you specifically ask about them or if they're relevant to your goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What should I prepare for the consultation?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Come with your academic transcripts, any standardized test scores (if available), a rough idea of your
                budget, and most importantly, your questions and concerns about studying abroad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
