"use client"

import { useState } from "react"
import VisaModal from "@/components/visa-modal"


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Visa Types
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover student visa options for your dream destination. Get detailed information about requirements,
              processing times, and application procedures.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Visa Options
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200 to-orange-200 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Visa Modal */}
      <VisaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
