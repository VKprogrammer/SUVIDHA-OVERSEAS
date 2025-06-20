"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface VisaInfo {
  country: string
  visaTypes: string[]
  requirements: string[]
  applicationLink: string
}

const visaData: VisaInfo[] = [
  {
    country: "United States",
    visaTypes: ["F1 Student Visa", "J1 Exchange Visitor Visa"],
    requirements: [
      "I-20 Form from the university",
      "SEVIS fee payment",
      "Visa application form (DS-160)",
      "Visa interview appointment",
    ],
    applicationLink: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
  },
  {
    country: "Canada",
    visaTypes: ["Study Permit"],
    requirements: [
      "Letter of Acceptance from DLI",
      "Proof of financial support",
      "Medical exam (if required)",
      "Police certificate (if required)",
    ],
    applicationLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
  },
  {
    country: "Australia",
    visaTypes: ["Student Visa (Subclass 500)"],
    requirements: [
      "Confirmation of Enrolment (CoE)",
      "OSHC health insurance",
      "Proof of funds",
      "Genuine Temporary Entrant (GTE) statement",
    ],
    applicationLink: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
]

export default function VisaPage() {
  const [search, setSearch] = useState("")

  const filteredData = visaData.filter((visa) =>
    visa.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
        <Header></Header>
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white py-20 px-4">

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Visa Information</h1>
        <p className="text-gray-600">
          Browse visa types, requirements, and official application links for popular study destinations.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search by country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 py-2 border-blue-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredData.map((visa, index) => (
          <Card key={index} className="bg-white shadow-md rounded-xl hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">{visa.country}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Visa Types:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {visa.visaTypes.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {visa.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <a
                href={visa.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Apply / Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No visa information found for that country.</p>
      )}
    </div>
    <Footer></Footer>
    </div>
  )
}
