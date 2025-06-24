import { notFound } from "next/navigation"
import Link from "next/link"

interface VisaDetails {
  id: string
  title: string
  country: string
  flag: string
  description: string
  processingTime: string
  difficulty: "Easy" | "Medium" | "Hard"
  requirements: string[]
  documents: string[]
  fees: {
    application: string
    biometrics?: string
    total: string
  }
  steps: string[]
  tips: string[]
}

const visaData: Record<string, VisaDetails> = {
  "usa-student": {
    id: "usa-student",
    title: "USA Student Visa (F-1)",
    country: "United States",
    flag: "🇺🇸",
    description:
      "The F-1 visa is for international students enrolled in academic programs at US universities and colleges.",
    processingTime: "3-5 weeks",
    difficulty: "Hard",
    requirements: [
      "Acceptance letter from SEVP-approved school",
      "Form I-20 from your school",
      "Proof of financial support ($40,000+ per year)",
      "English proficiency test scores (TOEFL/IELTS)",
      "Academic transcripts and diplomas",
      "Valid passport (6+ months validity)",
    ],
    documents: [
      "DS-160 form confirmation",
      "Visa application fee receipt",
      "SEVIS fee receipt ($350)",
      "Passport-style photographs",
      "Bank statements or financial documents",
      "Academic records and certificates",
      "English test scores",
      "Form I-20",
    ],
    fees: {
      application: "$185",
      biometrics: "$85",
      total: "$270 + SEVIS fee $350",
    },
    steps: [
      "Receive Form I-20 from your school",
      "Pay SEVIS fee online",
      "Complete DS-160 form online",
      "Pay visa application fee",
      "Schedule visa interview",
      "Attend visa interview at US Embassy/Consulate",
      "Wait for visa processing",
      "Receive passport with visa",
    ],
    tips: [
      "Apply early - processing can take several weeks",
      "Prepare for the interview thoroughly",
      "Show strong ties to your home country",
      "Demonstrate sufficient financial resources",
      "Be honest and consistent in your answers",
      "Bring all required documents organized",
    ],
  },
  "uk-student": {
    id: "uk-student",
    title: "UK Student Visa",
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "Student visa for studying at UK universities and educational institutions.",
    processingTime: "3-8 weeks",
    difficulty: "Medium",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of English language ability",
      "Financial evidence (£1,334 per month for living costs)",
      "Academic qualifications",
      "Valid passport",
      "Tuberculosis test results (if required)",
    ],
    documents: [
      "Current passport",
      "CAS reference number",
      "Bank statements (28 days)",
      "Academic transcripts",
      "English language certificate",
      "Tuberculosis test certificate",
      "Passport photographs",
    ],
    fees: {
      application: "£490",
      total: "£490 + Healthcare surcharge",
    },
    steps: [
      "Receive CAS from your university",
      "Gather required documents",
      "Apply online",
      "Pay application fee and healthcare surcharge",
      "Book biometric appointment",
      "Attend biometric appointment",
      "Wait for decision",
      "Collect visa decision",
    ],
    tips: [
      "Apply no more than 6 months before travel",
      "Ensure bank statements show required funds",
      "Keep documents in English or with certified translations",
      "Apply from your home country if possible",
      "Check if you need tuberculosis testing",
    ],
  },
  "canada-student": {
    id: "canada-student",
    title: "Canada Study Permit",
    country: "Canada",
    flag: "🇨🇦",
    description: "Study permit required for international students studying in Canada for more than 6 months.",
    processingTime: "4-12 weeks",
    difficulty: "Medium",
    requirements: [
      "Letter of acceptance from designated learning institution",
      "Proof of financial support (CAD $20,000+ per year)",
      "Letter of explanation",
      "Valid passport or travel document",
      "Medical exam (if required)",
      "Police certificate (if required)",
    ],
    documents: [
      "Letter of acceptance",
      "Proof of identity (passport)",
      "Proof of financial support",
      "Letter of explanation",
      "Certificat d'acceptation du Québec (if studying in Quebec)",
      "Medical exam results",
      "Police certificates",
    ],
    fees: {
      application: "CAD $235",
      biometrics: "CAD $85",
      total: "CAD $320",
    },
    steps: [
      "Get accepted by a designated learning institution",
      "Gather required documents",
      "Apply online or on paper",
      "Pay fees and submit biometrics",
      "Wait for processing",
      "Get your study permit",
      "Travel to Canada",
    ],
    tips: [
      "Apply as early as possible",
      "Show you have enough money for tuition and living expenses",
      "Prove you will leave Canada when your studies are complete",
      "Include a letter explaining your study plans",
      "Check if you need a visitor visa or eTA",
    ],
  },
  "australia-student": {
    id: "australia-student",
    title: "Australia Student Visa (Subclass 500)",
    country: "Australia",
    flag: "🇦🇺",
    description: "Student visa for international students to study full-time in Australia.",
    processingTime: "4-6 weeks",
    difficulty: "Medium",
    requirements: [
      "Confirmation of Enrolment (CoE)",
      "Genuine Temporary Entrant (GTE) statement",
      "English language proficiency",
      "Financial capacity evidence",
      "Health insurance (OSHC)",
      "Health and character requirements",
    ],
    documents: [
      "Confirmation of Enrolment (CoE)",
      "Passport",
      "GTE statement",
      "English test results",
      "Financial documents",
      "Academic transcripts",
      "Health insurance policy",
      "Health examination results",
    ],
    fees: {
      application: "AUD $710",
      total: "AUD $710",
    },
    steps: [
      "Receive CoE from your education provider",
      "Prepare GTE statement",
      "Gather supporting documents",
      "Apply online through ImmiAccount",
      "Pay application fee",
      "Complete health examinations",
      "Wait for visa decision",
      "Prepare for arrival in Australia",
    ],
    tips: [
      "Write a compelling GTE statement",
      "Show genuine intention to study",
      "Demonstrate financial capacity",
      "Meet English language requirements",
      "Get health insurance before applying",
      "Apply at least 6 weeks before course start",
    ],
  },
  "germany-student": {
    id: "germany-student",
    title: "Germany Student Visa",
    country: "Germany",
    flag: "🇩🇪",
    description: "National visa for students planning to study at German universities.",
    processingTime: "6-12 weeks",
    difficulty: "Easy",
    requirements: [
      "University admission letter",
      "Proof of financial resources (€11,208 per year)",
      "Academic qualifications",
      "German or English language proficiency",
      "Health insurance",
      "Clean criminal record",
    ],
    documents: [
      "Completed visa application form",
      "Valid passport",
      "University admission letter",
      "Academic certificates",
      "Language proficiency certificate",
      "Proof of financial resources",
      "Health insurance certificate",
      "Biometric photos",
    ],
    fees: {
      application: "€75",
      total: "€75",
    },
    steps: [
      "Get admission to German university",
      "Gather required documents",
      "Book appointment at German consulate",
      "Submit application and documents",
      "Attend visa interview",
      "Wait for processing",
      "Collect visa",
      "Travel to Germany",
    ],
    tips: [
      "Apply 3 months before intended travel",
      "Show blocked account or scholarship letter",
      "Get documents translated and apostilled",
      "Demonstrate language proficiency",
      "Show clear study plan and career goals",
    ],
  },
  "france-student": {
    id: "france-student",
    title: "France Student Visa",
    country: "France",
    flag: "🇫🇷",
    description: "Long-stay student visa for studying in France for more than 90 days.",
    processingTime: "2-4 weeks",
    difficulty: "Easy",
    requirements: [
      "Acceptance letter from French institution",
      "Proof of financial means (€615 per month)",
      "Academic qualifications",
      "French or English language proficiency",
      "Health insurance",
      "Accommodation proof",
    ],
    documents: [
      "Long-stay visa application form",
      "Passport",
      "Acceptance letter",
      "Academic transcripts",
      "Language certificate",
      "Financial proof",
      "Accommodation certificate",
      "Health insurance",
      "Photos",
    ],
    fees: {
      application: "€99",
      total: "€99",
    },
    steps: [
      "Get accepted by French institution",
      "Complete Campus France procedure (if applicable)",
      "Gather required documents",
      "Submit visa application",
      "Attend interview if required",
      "Wait for processing",
      "Collect visa",
      "Validate visa upon arrival in France",
    ],
    tips: [
      "Start Campus France process early",
      "Show sufficient financial resources",
      "Demonstrate French language skills",
      "Provide clear study motivation letter",
      "Get comprehensive health insurance",
    ],
  },
}

export default function VisaDetailPage({ params }: { params: { id: string } }) {

  const visa = visaData[params.id]

  if (!visa) {
    notFound()
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/visa" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Visa Explorer
          </Link>

          <div className="flex items-center space-x-6">
            <div className="text-6xl">{visa.flag}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{visa.title}</h1>
              <p className="text-xl text-orange-100 mb-4">{visa.description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-orange-200">
                  Processing Time: <span className="text-white font-semibold">{visa.processingTime}</span>
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(visa.difficulty)}`}>
                  {visa.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Requirements
              </h2>
              <ul className="space-y-3">
                {visa.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Required Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {visa.documents.map((doc, index) => (
                  <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Application Process
              </h2>
              <div className="space-y-4">
                {visa.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fees */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visa Fees</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Application Fee:</span>
                  <span className="font-semibold">{visa.fees.application}</span>
                </div>
                {visa.fees.biometrics && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Biometrics:</span>
                    <span className="font-semibold">{visa.fees.biometrics}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Total:</span>
                    <span className="font-bold text-orange-600">{visa.fees.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Pro Tips
              </h3>
              <ul className="space-y-3">
                {visa.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
