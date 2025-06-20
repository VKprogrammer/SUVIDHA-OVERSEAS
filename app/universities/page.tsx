"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface University {
  name: string
  domains: string[]
  web_pages: string[]
  country: string
  alpha_two_code: string
  "state-province": string | null
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Fetch local JSON data from public folder
    fetch("/data/universities.json")
      .then((res) => res.json())
      .then((data) => setUniversities(data))
      .catch((err) => console.error("Failed to load universities:", err))
  }, [])

  const filtered = universities.filter((uni) =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.country.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
    <Header></Header>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-blue-900">Explore Universities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse a global list of universities with links, domains, and details. Use the search to filter by name or country.
          </p>
        </div>

        <div className="flex justify-center mb-10 max-w-lg mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by university or country..."
              className="pl-10 py-6 rounded-xl border-blue-200 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((uni, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl transition-shadow rounded-2xl border border-blue-100 bg-white p-4 shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700 text-center">
                  {uni.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-gray-700">
                <p><strong>Country:</strong> {uni.country}</p>
                {uni["state-province"] && <p><strong>State/Province:</strong> {uni["state-province"]}</p>}
                <p><strong>Domain:</strong> {uni.domains[0]}</p>
                <a
                  href={uni.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No universities found.</p>
        )}
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
