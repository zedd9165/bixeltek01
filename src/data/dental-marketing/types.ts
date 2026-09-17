import { IconType } from "react-icons"

export interface HeroCalculatorConfig {
  currencySymbol: string
  defaultMonthlyBudget: number
  minBudget: number
  maxBudget: number
  budgetStep: number
  defaultPatientValue: number
  minPatientValue: number
  maxPatientValue: number
  patientValueStep: number
  costPerEnquiry: number
  enquiryToPatientRate: number
  budgetLabel: string
  patientValueLabel: string
  assumptionsNotice: string
  leadsPanelLabel: string
  leadsPanelSubtext: string
  patientsPanelLabel: string
  patientsPanelSubtext: string
  revenuePanelLabel: string
  revenuePanelSubtext: string
  disclaimerText: string
  calculatorCtaText: string
  tags: string[]
}

export interface HeroFeatureTag {
  iconType: 'chart' | 'tooth' | 'phone'
  text: string
}

export interface HeroSectionContent {
  eyebrowBadge: string
  h1Start: string
  h1Highlight: string
  h1End?: string
  subtext: string
  featureTags: HeroFeatureTag[]
  primaryCtaText: string
  secondaryCtaText: string
  proofNumber: string
  proofLabel: string
  trustInitials: string[]
  calculator: HeroCalculatorConfig
}

export interface ServiceItem {
  icon: IconType
  title: string
  description: string
  features: string[]
  accent: string
  iconColor: string
}

export interface ServicesSectionContent {
  badge: string
  headingStart: string
  headingHighlight: string
  headingEnd?: string
  subtext: string
  services: ServiceItem[]
  footerText: string
  ctaText: string
}

export interface BenefitItem {
  icon: IconType
  title: string
  description: string
  accent: string
  iconColor: string
  num: string
}

export interface BenefitsSectionContent {
  badge: string
  headingStart: string
  headingHighlight: string
  headingEnd?: string
  subtext: string
  benefits: BenefitItem[]
}

export interface ImageFeatureItem {
  icon: IconType
  title: string
  description: string
}

export interface FloatingStat {
  label: string
  value: string
}

export interface ImageContentSectionContent {
  eyebrow: string
  headingStart: string
  headingHighlight: string
  headingEnd?: string
  subtext: string
  imageSrc: string
  imageAlt: string
  floatingStats: {
    top: FloatingStat
    bottom: FloatingStat
  }
  ctaText: string
  ctaHref?: string
  features: ImageFeatureItem[]
}

export interface TestimonialItem {
  name: string
  location: string
  specialty: string
  quote: string
  metrics: string
  color: string
}

export interface TestimonialsSectionContent {
  badge: string
  headingStart: string
  headingHighlight: string
  headingEnd?: string
  subtext: string
  testimonials: TestimonialItem[]
}