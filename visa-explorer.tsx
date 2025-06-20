export default function VisaExplorer() {
  const visaTypes = [
    {
      id: 1,
      title: "USA Student Visa",
      country: "United States",
      flag: "🇺🇸",
      description: "F-1 Student Visa",
    },
    {
      id: 2,
      title: "UK Student Visa",
      country: "United Kingdom",
      flag: "🇬🇧",
      description: "Student Route Visa",
    },
    {
      id: 3,
      title: "Canada Student Visa",
      country: "Canada",
      flag: "🇨🇦",
      description: "Study Permit",
    },
    {
      id: 4,
      title: "Australia Student Visa",
      country: "Australia",
      flag: "🇦🇺",
      description: "Subclass 500 Visa",
    },
    {
      id: 5,
      title: "Germany Student Visa",
      country: "Germany",
      flag: "🇩🇪",
      description: "Student Visa",
    },
    {
      id: 6,
      title: "France Student Visa",
      country: "France",
      flag: "🇫🇷",
      description: "Student Visa",
    },
    {
      id: 7,
      title: "Netherlands Student Visa",
      country: "Netherlands",
      flag: "🇳🇱",
      description: "Student Visa",
    },
    {
      id: 8,
      title: "New Zealand Student Visa",
      country: "New Zealand",
      flag: "🇳🇿",
      description: "Student Visa",
    },
    {
      id: 9,
      title: "Ireland Student Visa",
      country: "Ireland",
      flag: "🇮🇪",
      description: "Study Visa",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">Explore Visa Types</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover student visa options for your dream destination. Click on any card to learn more about requirements
            and application processes.
          </p>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visaTypes.map((visa) => (
            <div
              key={visa.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer border border-sky-100 overflow-hidden"
            >
              <div className="p-8">
                {/* Flag and Country */}
                <div className="flex items-center justify-center mb-6">
                  <div className="text-4xl mb-2">{visa.flag}</div>
                </div>

                {/* Country Name */}
                <div className="text-center mb-4">
                  <h3 className="text-sm font-medium text-sky-500 uppercase tracking-wide mb-1">{visa.country}</h3>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{visa.title}</h2>
                  <p className="text-sm text-gray-500 mb-6">{visa.description}</p>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="inline-flex items-center text-sky-600 font-medium group-hover:text-sky-700 transition-colors duration-200">
                    <span className="text-sm">Click to view details</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-sky-400 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-sky-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-600 mb-6">
              Our expert consultants are here to help you choose the right visa and guide you through the application
              process.
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
