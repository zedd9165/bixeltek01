import type { Metadata } from "next"

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
import TreatmentsSection from "@/components/DentalMarketing/Variant_C/TreatmentsSection"
import TrustSection from "@/components/DentalMarketing/Variant_C/TrustSection"
import { Whiteheader } from "@/components/Whiteheader"
import { Footer } from "@/sections/Footer"
import EbookDownloadSection from "@/components/DentalMarketing/EBookDownloadSection"
import {
  USA_BENEFITS_CONTENT,
  USA_HERO_CONTENT,
  USA_IMAGE_CONTENT,
  USA_SERVICES_CONTENT,
  USA_TESTIMONIALS_CONTENT,
} from "@/data/dental-marketing/usa-dentalmarketing-content"
import Ads_HeroSection from "@/components/DentalMarketing/HeroSection"

export const metadata: Metadata = {
  title: "Dental Marketing Agency USA | Attract High-Value Patients | Bixeltek",

  description:
    "Leading dental marketing agency in the USA. We help private practices and dental groups attract high-value implant, cosmetic, and Invisalign patients with HIPAA-compliant Google Ads, Dental SEO, local Map Pack dominance, and high-converting landing pages.",

  alternates: {
    canonical: "https://bixeltek.com/dental-marketing-usa",
  },

  openGraph: {
    title: "Dental Marketing Agency USA | Attract High-Value Patients | Bixeltek",
    description:
      "Leading dental marketing agency in the USA. We help private practices and dental groups attract high-value implant, cosmetic, and Invisalign patients with HIPAA-compliant Google Ads, Dental SEO, local Map Pack dominance, and high-converting landing pages.",
    url: "https://bixeltek.com/dental-marketing-usa",
    siteName: "Bixeltek",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Marketing Agency USA | Attract High-Value Patients | Bixeltek",
    description:
      "Leading dental marketing agency in the USA. We help private practices and dental groups attract high-value implant, cosmetic, and Invisalign patients with HIPAA-compliant Google Ads, Dental SEO, local Map Pack dominance, and high-converting landing pages.",
  },
}

export default function Page() {
  return (
    <>
      <Ads_HeroSection content={USA_HERO_CONTENT} />
      <StatsSection />
      <ServicesSection content={USA_SERVICES_CONTENT} />
      <TreatmentsSection />
      <BenefitsSection content={USA_BENEFITS_CONTENT} />
      <ImageContentSection content={USA_IMAGE_CONTENT} />
      <ProcessSection />
      <CaseStudiesSection />
      {/* <ComparisonSection /> */}
      <EbookDownloadSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <TrustSection /> */}
      <ContactSection phoneNumber="+1 437 525 2301" phoneHref="tel:+14375252301" />
      <Footer />
    </>
  )
}

