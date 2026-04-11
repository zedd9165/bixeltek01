import BenefitsSection from "@/components/DentalMarketing/Variant_C/BenefitsSection"
import CaseStudiesSection from "@/components/DentalMarketing/Variant_C/CaseStudiesSection"
import ComparisonSection from "@/components/DentalMarketing/Variant_C/ComparisonSection"
import ContactSection from "@/components/DentalMarketing/Variant_C/ContactSection"
import FAQSection from "@/components/DentalMarketing/Variant_C/FAQSection"
import HeroSection from "@/components/DentalMarketing/Variant_C/HeroSection"
import ImageContentSection from "@/components/DentalMarketing/Variant_C/ImageContentSection"
import ProcessSection from "@/components/DentalMarketing/Variant_C/ProcessSection"
import ServicesSection from "@/components/DentalMarketing/Variant_C/ServicesSection"
import StatsSection from "@/components/DentalMarketing/Variant_C/StatsSection"
import TestimonialsSection from "@/components/DentalMarketing/Variant_C/TestimonialsSection"
import TrustSection from "@/components/DentalMarketing/Variant_C/TrustSection"
import { Whiteheader } from "@/components/Whiteheader"
import { Footer } from "@/sections/Footer"


export default function Page() {
    return(
        <>
      <Whiteheader/>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ServicesSection />
      <ImageContentSection />
      <ProcessSection />
      <CaseStudiesSection />
      {/* <ComparisonSection /> */}
      <TestimonialsSection />
      <FAQSection />
      {/* <TrustSection /> */}
      <ContactSection />
      <Footer/>
        </>
    )
}