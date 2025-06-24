"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        toast({
          title: "Welcome aboard! 🎉",
          description: "Thank you for subscribing! Check your email for a welcome message.",
        })
        setEmail("")
      } else {
        toast({
          title: "Subscription failed",
          description: result.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const quickLinks = [
    "About Us", "Services", "Destinations", "Success Stories",
    "Blog", "Contact", "Privacy Policy", "Terms of Service",
  ]

  const services = [
    "Free Consultation", "University Selection", "Admission Support",
    "Visa Processing", "Scholarship Guidance", "Test Preparation",
  ]

  const destinations = [
    "Study in USA", "Study in Canada", "Study in UK",
    "Study in Australia", "Study in Germany", "Study in New Zealand",
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div id="contact" className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Opportunities</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on scholarships, university deadlines, and study abroad tips.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="rounded-r-none bg-white text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            <Button
              type="submit"
              className="rounded-l-none bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Suvidha Overseas</h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for studying abroad. We provide comprehensive guidance and support to help you achieve your international education dreams.
              </p>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@suvidhaoverseas.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <span>123 Education Street, Knowledge City, India 110001</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Button
                  key={i}
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Study Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">{destination}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Suvidha Overseas. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}