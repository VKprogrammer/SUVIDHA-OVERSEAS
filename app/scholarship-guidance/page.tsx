"use client"

import {
  ArrowLeft,
  Star,
  CheckCircle,
  Database,
  FileText,
  Calculator,
  Target,
  UserCheck,
  Search,
  PenTool,
  Send,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function ScholarshipGuidancePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    country: formData.get('country'),
    studyLevel: formData.get('studyLevel'),
    fieldOfStudy: formData.get('fieldOfStudy'),
    scholarshipType: Array.from(formData.getAll('scholarshipType')).join(', '),
    message: formData.get('message'),
  }

  try {
    const response = await fetch('/api/scholarship-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    if (result.success) alert('Inquiry submitted successfully!')
    else alert('Something went wrong. Please try again.')
  } catch (error) {
    alert('Error submitting form')
    console.error(error)
  }
}

  const services = [
    {
      icon: Database,
      title: "Scholarship Database Access",
      description: "Access to our comprehensive database of 1000+ scholarships from universities worldwide.",
      features: ["Global scholarships", "Regular updates", "Advanced filters"],
    },
    {
      icon: FileText,
      title: "Application Assistance",
      description: "Expert guidance through every step of your scholarship application process.",
      features: ["Document review", "Application strategy", "Submission support"],
    },
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Comprehensive financial planning to maximize your funding opportunities.",
      features: ["Budget analysis", "Cost estimation", "Funding strategies"],
    },
    {
      icon: Target,
      title: "Merit & Need-Based Matching",
      description: "Personalized matching based on your academic profile and financial needs.",
      features: ["Profile analysis", "Smart matching", "Success probability"],
    },
  ]

  const benefits = [
    {
      icon: UserCheck,
      title: "Expert Matching",
      description: "AI-powered matching with expert review",
    },
    {
      icon: Database,
      title: "1000+ Scholarships",
      description: "Comprehensive global scholarship database",
    },
    {
      icon: CheckCircle,
      title: "Deadline Alerts",
      description: "Never miss important application deadlines",
    },
    {
      icon: PenTool,
      title: "SOP & Essay Review",
      description: "Professional review of all application documents",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Profile Evaluation",
      description: "Comprehensive assessment of your academic background, achievements, and financial needs.",
      icon: UserCheck,
    },
    {
      step: "02",
      title: "Scholarship Matching",
      description: "AI-powered matching with our database of 1000+ scholarships based on your profile.",
      icon: Search,
    },
    {
      step: "03",
      title: "Document Preparation",
      description: "Guidance on preparing all required documents including transcripts and certificates.",
      icon: FileText,
    },
    {
      step: "04",
      title: "Application Drafting",
      description: "Expert assistance in crafting compelling SOPs, essays, and application forms.",
      icon: PenTool,
    },
    {
      step: "05",
      title: "Submission & Follow-up",
      description: "Timely submission of applications and regular follow-up with scholarship providers.",
      icon: Send,
    },
    {
      step: "06",
      title: "Award Support",
      description: "Continued support after receiving scholarship offers and award acceptance guidance.",
      icon: Award,
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      program: "DAAD Scholarship",
      university: "Technical University of Munich",
      rating: 5,
      text: "The scholarship guidance team helped me secure a full DAAD scholarship for my Master's in Germany. Their database and application support were invaluable.",
      amount: "€1,200/month",
    },
    {
      name: "Rahul Patel",
      program: "Fulbright Scholarship",
      university: "Stanford University",
      rating: 5,
      text: "Thanks to their expert guidance, I received the prestigious Fulbright scholarship. The SOP review and interview preparation were exceptional.",
      amount: "$50,000",
    },
    {
      name: "Ananya Singh",
      program: "Chevening Scholarship",
      university: "University of Oxford",
      rating: 5,
      text: "Their personalized approach and deadline management helped me secure the Chevening scholarship. Highly recommend their services!",
      amount: "£18,000",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with light background */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 text-blue-600 mr-2" />
            <Link href="/#services" className="text-blue-600 hover:text-blue-800 transition-colors">
              Back to Services
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Scholarship Guidance</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Scholarship Guidance</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Maximize your funding opportunities with our comprehensive scholarship database and personalized
              application support. Let us simplify your study abroad journey with personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Gateway to Educational Funding</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Suvidha Overseas, we understand that financing your international education can be challenging. Our
              dedicated scholarship guidance team works tirelessly to connect students with the right funding
              opportunities, from merit-based scholarships to need-based grants. With access to over 1000 scholarships
              worldwide and personalized application support, we help turn your educational dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Scholarship Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support to help you secure the funding you need for your international education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Scholarship Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide unmatched expertise and resources to maximize your scholarship success rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Scholarship Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to help you secure the best scholarship opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
                <CardHeader className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-bold">
                      {step.step}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who secured prestigious scholarships with our guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="text-center flex-1">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      <div className="flex items-center justify-center gap-4">
                        <Badge className="bg-blue-100 text-blue-800">{testimonials[currentTestimonial].program}</Badge>
                        <Badge className="bg-green-100 text-green-800">{testimonials[currentTestimonial].amount}</Badge>
                      </div>
                      <p className="text-gray-600">{testimonials[currentTestimonial].university}</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Inquiry Form */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need Information About a Specific Scholarship?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our scholarship experts will get back to you with personalized guidance.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Study Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700 mb-2">
                        Study Level *
                      </label>
                      <select
                        id="studyLevel"
                        name="studyLevel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select study level</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="masters">Master's</option>
                        <option value="phd">PhD</option>
                        <option value="diploma">Diploma</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-2">
                      Field of Study
                    </label>
                    <input
                      type="text"
                      id="fieldOfStudy"
                      name="fieldOfStudy"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Computer Science, Business Administration"
                    />
                  </div>

                  <div>
                    <label htmlFor="scholarshipType" className="block text-sm font-medium text-gray-700 mb-2">
                      Scholarship Type of Interest
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      {["Merit-based", "Need-based", "Sports", "Research"].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            name="scholarshipType"
                            value={type.toLowerCase()}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us about your academic background, specific scholarships you're interested in, or any questions you have..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-3 text-lg"
                    >
                      Submit Inquiry
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      Our scholarship experts will contact you within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
