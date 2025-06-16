"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuickInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    course: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const destinations = ["USA", "Canada", "UK", "Australia", "Germany", "New Zealand"]
  const courses = [
    "Engineering",
    "Business & Management",
    "Computer Science",
    "Medicine",
    "Arts & Humanities",
    "Sciences",
    "Law",
    "Other",
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.destination) newErrors.destination = "Destination is required"
    if (!formData.course) newErrors.course = "Course interest is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission
      alert("Thank you! We will contact you soon for your free consultation.")
      setFormData({ name: "", email: "", phone: "", destination: "", course: "" })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Consultation Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your international education journey. Our expert counselors will guide you
            through every step.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-2xl text-center">Quick Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination *</label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) => handleInputChange("destination", value)}
                  >
                    <SelectTrigger className={errors.destination ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Interest *</label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                    <SelectTrigger className={errors.course ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your course interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg"
                >
                  Get Free Consultation
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
