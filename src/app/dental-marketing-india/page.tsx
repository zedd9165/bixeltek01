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
  INDIA_BENEFITS_CONTENT,
  INDIA_HERO_CONTENT,
  INDIA_IMAGE_CONTENT,
  INDIA_SERVICES_CONTENT,
  INDIA_TESTIMONIALS_CONTENT,
} from "@/data/dental-marketing/india-dentalmarketing-content"
import Ads_HeroSection from "@/components/DentalMarketing/HeroSection"

export const metadata: Metadata = {
  title: "Dental Marketing Agency in India | Grow Clinic Patients & Revenue | Bixeltek",

  description:
    "India's leading dental marketing agency. We help dental clinics and multi-speciality dental chains in Delhi NCR, Mumbai, Bengaluru, Hyderabad & across India attract high-ticket implant, aligner & cosmetic patients with Google Ads, Dental SEO, and high-converting landing pages.",

  alternates: {
    canonical: "https://bixeltek.com/dental-marketing-india-ind003BXTDENTAL",
  },

  openGraph: {
    title: "Dental Marketing Agency in India | Grow Clinic Patients & Revenue | Bixeltek",
    description:
      "India's leading dental marketing agency. We help dental clinics and multi-speciality dental chains in Delhi NCR, Mumbai, Bengaluru, Hyderabad & across India attract high-ticket implant, aligner & cosmetic patients with Google Ads, Dental SEO, and high-converting landing pages.",
    url: "https://bixeltek.com/dental-marketing-india-ind003BXTDENTAL",
    siteName: "Bixeltek",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Marketing Agency in India | Grow Clinic Patients & Revenue | Bixeltek",
    description:
      "India's leading dental marketing agency. We help dental clinics and multi-speciality dental chains in Delhi NCR, Mumbai, Bengaluru, Hyderabad & across India attract high-ticket implant, aligner & cosmetic patients with Google Ads, Dental SEO, and high-converting landing pages.",
  },
}

export default function Page() {
  return (
    <>
      <Ads_HeroSection content={INDIA_HERO_CONTENT} />
      <StatsSection />
      <ServicesSection content={INDIA_SERVICES_CONTENT} />
      <TreatmentsSection />
      <BenefitsSection content={INDIA_BENEFITS_CONTENT} />
      <ImageContentSection content={INDIA_IMAGE_CONTENT} />
      <ProcessSection />
      <CaseStudiesSection />
      {/* <ComparisonSection /> */}
      <EbookDownloadSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <TrustSection /> */}
      <ContactSection phoneNumber="9100032301" />
      <Footer />
    </>
  )
}

