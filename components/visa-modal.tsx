"use client"
import { useRouter } from "next/navigation"

interface VisaOption {
  id: string
  title: string
  country: string
  flag: string
  description: string
  processingTime: string
  difficulty: "Easy" | "Medium" | "Hard"
}

interface VisaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VisaModal({ isOpen, onClose }: VisaModalProps) {
  const router = useRouter()

  const visaOptions: VisaOption[] = [
    {
      id: "usa-student",
      title: "USA Student Visa",
      country: "United States",
      flag: "🇺🇸",
      description: "F-1 Student Visa for academic studies",
      processingTime: "3-5 weeks",
      difficulty: "Hard",
    },
    {
      id: "uk-student",
      title: "UK Student Visa",
      country: "United Kingdom",
      flag: "🇬🇧",
      description: "Student Route Visa for UK universities",
      processingTime: "3-8 weeks",
      difficulty: "Medium",
    },
    {
      id: "canada-student",
      title: "Canada Student Visa",
      country: "Canada",
      flag: "🇨🇦",
      description: "Study Permit for Canadian institutions",
      processingTime: "4-12 weeks",
      difficulty: "Medium",
    },
    {
      id: "australia-student",
      title: "Australia Student Visa",
      country: "Australia",
      flag: "🇦🇺",
      description: "Subclass 500 Student Visa",
      processingTime: "4-6 weeks",
      difficulty: "Medium",
    },
    {
      id: "germany-student",
      title: "Germany Student Visa",
      country: "Germany",
      flag: "🇩🇪",
      description: "National Visa for studies",
      processingTime: "6-12 weeks",
      difficulty: "Easy",
    },
    {
      id: "france-student",
      title: "France Student Visa",
      country: "France",
      flag: "🇫🇷",
      description: "Long-stay student visa",
      processingTime: "2-4 weeks",
      difficulty: "Easy",
    },
  ]

  const handleVisaSelect = (visaId: string) => {
    router.push(`/visa/${visaId}`)
    onClose()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100"
      case "Medium":
        return "text-amber-600 bg-amber-100"
      case "Hard":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Choose Your Destination</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-orange-100 mt-2">Select a country to view detailed visa information</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visaOptions.map((visa) => (
              <div
                key={visa.id}
                onClick={() => handleVisaSelect(visa.id)}
                className="group bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{visa.flag}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{visa.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{visa.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Processing:</span> {visa.processingTime}
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(visa.difficulty)}`}
                      >
                        {visa.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                  <span>View Details</span>
                  <svg
                    className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
