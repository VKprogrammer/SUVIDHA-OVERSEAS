import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import QuickInquiryForm from "@/components/quick-inquiry-form"
import ServicesOverview from "@/components/services-overview"
import SuccessStories from "@/components/success-stories"
import FeaturedDestinations from "@/components/featured-destinations"
import InteractiveTools from "@/components/interactive-tools"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <QuickInquiryForm />
        <ServicesOverview />
        <InteractiveTools />
        <FeaturedDestinations />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}
