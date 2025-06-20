import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Services",
    "Destinations",
    "Success Stories",
    "Blog",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
  ]

  const services = [
    "Free Consultation",
    "University Selection",
    "Admission Support",
    "Visa Processing",
    "Scholarship Guidance",
    "Test Preparation",
  ]

  const destinations = [
    "Study in USA",
    "Study in Canada",
    "Study in UK",
    "Study in Australia",
    "Study in Germany",
    "Study in New Zealand",
  ]

  return (
    <footer  className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div id="contact" className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Opportunities</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on scholarships, university deadlines, and study abroad
              tips.
            </p>
            <div className="flex max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-r-none bg-white text-gray-900"
              />
              <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Suvidha Overseas</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your trusted partner for studying abroad. We provide comprehensive guidance and support to help you
                  achieve your international education dreams.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+91-9876543210</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@suvidhaoverseas.org</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                  <span>123 Education Street, Knowledge City, India 110001</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
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
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Study Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Suvidha Overseas. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
