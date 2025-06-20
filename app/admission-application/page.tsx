"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  FileText,
  FolderCheck,
  PenTool,
  Send,
  Search,
  TrendingUp,
  CheckCircle,
  Shield,
  RotateCcw,
  Clock,
  User,
  Users,
  FileCheck,
  Edit,
  Upload,
  BarChart3,
  Star,
} from "lucide-react"

export default function AdmissionApplicationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    background: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/admission-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", destination: "", background: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/#services"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Admission Application</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Admission Application</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get complete support with your university admission — from SOP and LOR writing to document verification
              and real-time application tracking. Let us handle the formalities so you can focus on your future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services - Feature Cards Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{"What's Included"}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <PenTool className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">SOP & LOR Writing</h3>
                </div>
                <p className="text-gray-600">
                  Expert-crafted Statement of Purpose and Letters of Recommendation tailored to your profile and target
                  universities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <FolderCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Document Verification</h3>
                </div>
                <p className="text-gray-600">
                  Thorough verification of all academic and personal documents to ensure compliance with university
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Edit className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Form Filling Support</h3>
                </div>
                <p className="text-gray-600">
                  Complete assistance with filling out complex university application forms accurately and efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Send className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">University Application Submission</h3>
                </div>
                <p className="text-gray-600">
                  Secure and timely submission of your applications to multiple universities with proper documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Search className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Application Review & Edits</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive review and editing services to enhance your application before final submission.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Application Progress Tracking</h3>
                </div>
                <p className="text-gray-600">
                  Real-time tracking and updates on your application status across all universities you've applied to.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Students Trust Suvidha Overseas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SOPs & LORs tailored by experts</h3>
                <p className="text-gray-600 text-sm">
                  Personalized documents crafted by experienced professionals who understand university requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% data privacy and transparency</h3>
                <p className="text-gray-600 text-sm">
                  Your personal information and documents are completely secure with full transparency in our process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlimited edits until submission</h3>
                <p className="text-gray-600 text-sm">
                  We work with you until your application is perfect, with unlimited revisions at no extra cost.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely application submissions</h3>
                <p className="text-gray-600 text-sm">
                  Never miss a deadline with our systematic approach to application management and submission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Application Process Works</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Initial Profile Review",
                  description:
                    "Comprehensive assessment of your academic background, achievements, and career goals to identify the best-fit universities.",
                  icon: User,
                },
                {
                  number: "2",
                  title: "University Shortlisting",
                  description:
                    "Strategic selection of universities based on your profile, preferences, and admission requirements.",
                  icon: Users,
                },
                {
                  number: "3",
                  title: "Document Collection",
                  description: "Systematic gathering and organization of all required academic and personal documents.",
                  icon: FileCheck,
                },
                {
                  number: "4",
                  title: "SOP & LOR Drafting",
                  description:
                    "Expert writing of compelling Statement of Purpose and coordination of Letters of Recommendation.",
                  icon: Edit,
                },
                {
                  number: "5",
                  title: "Final Application Submission",
                  description:
                    "Careful review and timely submission of complete applications to your selected universities.",
                  icon: Upload,
                },
                {
                  number: "6",
                  title: "Progress Tracking & Updates",
                  description:
                    "Regular monitoring of application status and providing you with real-time updates throughout the process.",
                  icon: BarChart3,
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hear from Our Successful Applicants</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Suvidha Overseas made my dream of studying at MIT a reality. Their SOP writing was exceptional and
                  the entire process was so smooth. Highly recommended!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-500">MIT, USA</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The team handled everything from document verification to application tracking. Got accepted to
                  University of Toronto with their expert guidance!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Rahul Patel</p>
                  <p className="text-sm text-gray-500">University of Toronto, Canada</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Professional service with unlimited edits until perfection. Their attention to detail helped me
                  secure admission to Oxford University!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ananya Singh</p>
                  <p className="text-sm text-gray-500">Oxford University, UK</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Expert Help Choosing the Right University?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Book a free session with our counselors and make your dream university a reality.
              </p>
            </div>

            {/* Contact Form - Full Width */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Destination Country
                      </label>
                      <Input
                        id="destination"
                        type="text"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., USA, UK, Canada, Australia"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your academic background and goals
                      </label>
                      <Textarea
                        id="background"
                        value={formData.background}
                        onChange={handleChange}
                        placeholder="Share your academic qualifications, field of interest, and career goals..."
                        rows={4}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Get Started"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
