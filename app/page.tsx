import Header from "@/components/snapfig/header"
import HeroSection from "@/components/snapfig/hero-section"
import TiktokEmbedPlaceholder from "@/components/snapfig/tiktok-embed-placeholder"
import ValuePropsSection from "@/components/snapfig/value-props-section"
import ProcessSection from "@/components/snapfig/process-section"
import GallerySection from "@/components/snapfig/gallery-section"
import UseCasesSection from "@/components/snapfig/use-cases-section"
import DesignSelectionSection from "@/components/snapfig/design-selection-section"
import PricingSection from "@/components/snapfig/pricing-section"
import FaqSection from "@/components/snapfig/faq-section"
import OrderSection from "@/components/snapfig/order-section"
import Footer from "@/components/snapfig/footer"

export default function SnapFigLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TiktokEmbedPlaceholder />
        <ValuePropsSection />
        <ProcessSection />
        <GallerySection />
        <UseCasesSection />
        <DesignSelectionSection />
        <PricingSection />
        <FaqSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  )
}
