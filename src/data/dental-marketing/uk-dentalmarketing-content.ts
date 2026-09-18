'use client'
import { FaChartLine, FaDesktop, FaPhoneAlt, FaRobot, FaSearchLocation, FaStar,FaShieldAlt,
  FaChartBar,
  FaClock,
  FaUserCheck,
  FaRocket, 
    FaGlobe,
  FaPaintBrush,
  FaPhone,
  FaLink,
} from "react-icons/fa";
import { LuTestTubes } from 'react-icons/lu'

import { BenefitsSectionContent, HeroSectionContent, ImageContentSectionContent, ServicesSectionContent, TestimonialsSectionContent } from "./types";

export const UK_HERO_CONTENT: HeroSectionContent = {
  eyebrowBadge: 'UK Dental Marketing Agency',
  h1Start: 'Dental Growth Marketing for ',
  h1Highlight: 'UK Practices',
  h1End: '',
  subtitle: 'Grow Your UK Practice With Targeted Google & Meta Campaigns Built for Better ROI',
  subtext:
    'Turn Google searches into qualified patient enquiries and booked appointments. Bixeltek builds dedicated patient acquisition systems for UK private and mixed dental practices—combining high-intent Google Ads, dental SEO, conversion-led landing pages, and rapid follow-up tracking.',
  featureTags: [
    { iconType: 'chart', text: 'High-Intent Leads' },
    { iconType: 'tooth', text: 'UK Dental Market Specialists' },
    { iconType: 'phone', text: 'Full-Funnel Enquiry Tracking' },
  ],
  primaryCtaText: 'Schedule An Appointment ',
  secondaryCtaText: 'Talk to a Dental Marketing Specialist',
  proofNumber: '102K+',
  proofLabel: 'patient enquiries generated globally across client practices',
  trustInitials: ['LD', 'MK', 'SR'],
  calculator: {
    currencySymbol: '£',
    defaultMonthlyBudget: 2500,
    minBudget: 1000,
    maxBudget: 10000,
    budgetStep: 250,
    defaultPatientValue: 750,
    minPatientValue: 300,
    maxPatientValue: 4000,
    patientValueStep: 50,
    costPerEnquiry: 65,
    enquiryToPatientRate: 0.5,
    budgetLabel: 'Monthly Dental Marketing Budget',
    patientValueLabel: 'Average New Patient / Treatment Value',
    assumptionsNotice:
      'Planning model based on an indicative £65 cost per qualified enquiry and a 40% enquiry-to-appointment conversion rate.',
    leadsPanelLabel: 'Estimated Patient Enquiries',
    leadsPanelSubtext: 'Expected monthly treatment enquiries',
    patientsPanelLabel: 'Estimated Booked Patients',
    patientsPanelSubtext: 'Based on a 50% enquiry-to-booking rate',
    revenuePanelLabel: 'Potential Practice Revenue',
    revenuePanelSubtext: 'Estimated gross revenue from booked treatments',
    disclaimerText:
      'Planning assumptions for modelling purposes. Actual acquisition costs vary according to local territory competition, clinical treatment mix (e.g. implants, Invisalign, general dentistry), surgery diary availability, and front-desk enquiry response times.',
    calculatorCtaText: 'Get Your Free Dental Marketing Audit →',
    tags: ['Google Ads', 'Dental SEO', 'Private Practice Growth'],
  },
}


export const UK_SERVICES_CONTENT: ServicesSectionContent = {
  badge: 'What we do',
  headingStart: 'Complete Dental Patient Acquisition ',
  headingHighlight: 'Suite',
  headingEnd: '',
  subtext:
    'From high-intent Google Ads and dental SEO to treatment-specific landing pages, call tracking, and rapid follow-up, we connect every stage of the UK patient journey into a single acquisition system.',
  footerText:
    'Claim your free dental marketing audit or schedule a 30-minute one-to-one consultation with a dental marketing specialist.',
  ctaText: 'Talk to a Dental Marketing Specialist',
  services: [
    {
      icon: FaChartLine,
      title: 'Google Ads & Dental PPC',
      description:
        'Target private patients actively searching for dental treatments in your territory—from dental implants and Invisalign to emergency appointments.',
      features: [
        'Treatment-intent keyword strategy',
        'High-converting ad copy & extensions',
        'Postcode & territory radius targeting',
        'Negative keyword hygiene',
        'Full enquiry conversion tracking',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaSearchLocation,
      title: 'Dental SEO & Local Map Pack',
      description:
        'Build long-term organic authority and dominate local search results for high-value treatments and "dentist near me" searches.',
      features: [
        'Google Business Profile optimisation',
        'Clinical treatment page architecture',
        'Local citation consistency across the UK',
        'Technical SEO & Core Web Vitals',
        'Ethical, GDC-compliant link building',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
    {
      icon: FaDesktop,
      title: 'Dental Websites & Landing Pages',
      description:
        'Convert traffic into booked appointments with treatment-specific landing pages engineered for speed, mobile usability, and trust.',
      features: [
        'Treatment-led CRO layouts',
        'Mobile-first appointment booking flows',
        'Transparent fee guide & finance displays',
        'GDC & ASA advertising compliance',
        'Fast page speed optimisation',
      ],
      accent: '#fdf4ff',
      iconColor: '#9333ea',
    },
    {
      icon: FaPhoneAlt,
      title: 'Enquiry & Call Tracking',
      description:
        'Attribute every phone enquiry, form submission, and booked appointment to the exact campaign, keyword, or organic search query.',
      features: [
        'Dynamic UK number insertion (DNI)',
        'Dental practice software & CRM sync',
        'Reception team call recording review',
        'Treatment-level ROI reporting',
        'Transparent acquisition cost metrics',
      ],
      accent: '#fff7ed',
      iconColor: '#ea580c',
    },
    {
      icon: FaStar,
      title: 'Patient Reviews & Reputation',
      description:
        'Build the social proof and clinical trust prospective patients expect before joining your practice diary.',
      features: [
        'Automated post-treatment review requests',
        'Google Business Profile review growth',
        'Professional review response framework',
        'Patient sentiment monitoring',
        'Local competitor benchmarking',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaRobot,
      title: 'AI Intake & Missed-Call Recovery',
      description:
        'Ensure your practice never loses a private patient to an unanswered call with 24/7 conversational intake, booking assistance, and instant follow-up.',
      features: [
        '24/7 conversational triage & intake',
        'Instant missed-call SMS recovery',
        'Enquiry qualification & booking triage',
        'Automated appointment reminders',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
  ],
}


export const UK_BENEFITS_CONTENT: BenefitsSectionContent = {
  badge: 'Why choose us',
  headingStart: 'Why UK Dental Practices Choose ',
  headingHighlight: 'Bixeltek',
  headingEnd: '',
  subtext:
    'We don’t simply buy clicks. We build and optimise the complete patient acquisition system behind them—helping private and mixed UK practices attract high-intent patient enquiries and fill appointment diaries predictably.',
  benefits: [
    {
      icon: FaStar,
      title: 'UK Dental Marketing Specialists',
      description:
        'We understand NHS versus private dynamics, high-value clinical treatments (implants, Invisalign, cosmetic bonding), and GDC/ASA advertising compliance. Every campaign reflects your local territory, clinical strengths, and practice growth goals.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '01',
    },
    {
      icon: FaShieldAlt,
      title: '60-Day Performance Commitment',
      description:
        'If your campaigns are not showing measurable improvements in qualified enquiries, we continue optimising your campaigns and landing pages at no additional management cost, subject to agreed campaign terms.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '02',
    },
    {
      icon: FaChartBar,
      title: 'Transparent Enquiry & ROI Reporting',
      description:
        'Full transparency on your marketing investment. Track cost per qualified patient enquiry, phone calls, form completions, and booked clinical consultations with real-time conversion dashboards.',
      accent: '#fdf4ff',
      iconColor: '#9333ea',
      num: '03',
    },
    {
      icon: FaClock,
      title: 'Structured Practice Onboarding',
      description:
        'We launch your treatment landing pages, Google Ads campaigns, local SEO foundations, and call-tracking infrastructure rapidly without creating administrative drag for your practice manager or reception team.',
      accent: '#fff7ed',
      iconColor: '#ea580c',
      num: '04',
    },
    {
      icon: FaUserCheck,
      title: 'Dedicated Account Strategist',
      description:
        'Work directly with a dedicated marketing strategist who understands dental practice operations, answers questions promptly, and continuously refines your patient acquisition pipeline.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '05',
    },
    {
      icon: FaRocket,
      title: 'Scale Across Surgery Rooms or Locations',
      description:
        'Whether you need to fill excess surgery capacity for a single private practice or scale acquisition across a multi-location dental group, our modular systems scale seamlessly with your diary availability.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '06',
    },
  ],
}



export const UK_IMAGE_CONTENT: ImageContentSectionContent = {
  eyebrow: 'Integrated Marketing Engine',
  headingStart: 'Everything Else You Need to ',
  headingHighlight: 'Grow',
  headingEnd: ' Your Local Territory',
  subtext:
    'Our dental marketing engine connects high-intent search visibility with conversion-tested landing pages and practice workflow integrations to deliver predictable patient appointments.',
  imageSrc:
    'https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Modern UK dental practice surgery',
  floatingStats: {
    top: { label: 'Enquiry Lift', value: '3.4x' },
    bottom: { label: 'Attribution', value: '100%' },
  },
  ctaText: 'Get Your Free Dental Marketing Audit',
  ctaHref: '#audit',
  features: [
    {
      icon: FaGlobe,
      title: 'High-Converting Treatment Pages',
      description:
        'Bespoke, mobile-first dental landing pages structured specifically around patient search intent and GDC compliance.',
    },
    {
      icon: FaPaintBrush,
      title: 'Ethical Content & Creative Asset Design',
      description:
        'Treatment-led copywriting, fee-transparency presentation, and imagery that build patient trust before enquiry.',
    },
    {
      icon: FaChartLine,
      title: 'Real-Time Enquiry & Revenue Analytics',
      description:
        'Track every patient enquiry, appointment booking, and treatment value with transparent conversion reporting.',
    },
    {
      icon: LuTestTubes,
      title: 'Iterative Conversion Rate Optimisation',
      description:
        'Ongoing A/B testing across headlines, forms, and mobile CTA touchpoints to reduce your cost per qualified enquiry.',
    },
    {
      icon: FaPhone,
      title: 'Dynamic UK Call Tracking',
      description:
        'Attribute every phone enquiry back to the exact search keyword, local campaign, and landing page that drove it.',
    },
    {
      icon: FaLink,
      title: 'Practice Management Workflow Sync',
      description:
        'Seamless handoff into your practice team workflows, CRM systems, and appointment diary processes.',
    },
  ],
}


export const UK_TESTIMONIALS_CONTENT: TestimonialsSectionContent = {
  badge: 'Testimonials',
  headingStart: 'Real Results from ',
  headingHighlight: 'Real Dentists',
  headingEnd: '',
  subtext:
    'Hear directly from dental practice principals who transformed their patient acquisition with our Google Ads and dental SEO systems.',
  testimonials: [
    // TODO: Replace with verified UK case study / testimonial
    {
      name: 'Dr. James Harrison',
      location: 'Surrey, UK',
      specialty: 'Private Practice Principal',
      quote:
        'Before working with Bixeltek, our private diary relied heavily on word of mouth. Now we see 45+ qualified treatment enquiries each month for Invisalign and restorative care. The transparent reporting dashboard gives us complete clarity on our marketing spend.',
      metrics: '+260% Patient Enquiries',
      color: 'from-blue-400 to-cyan-400',
    },
    // TODO: Replace with verified UK case study / testimonial
    {
      name: 'Dr. Alistair MacIntyre',
      location: 'Edinburgh, UK',
      specialty: 'Cosmetic & Implant Dentist',
      quote:
        'Their Google Ads and local SEO positioning moved us from barely visible to capturing high-intent searches for dental implants across the Lothians. The quality of patient consultations coming through has been exceptional.',
      metrics: 'Top 3 Local Visibility',
      color: 'from-purple-400 to-pink-400',
    },
    // TODO: Replace with verified UK case study / testimonial
    {
      name: 'Dr. Priya Patel',
      location: 'Birmingham, UK',
      specialty: 'Mixed Dental Practice Partner',
      quote:
        'Every pound we invest in Google Ads is directly tracked to clinical consultations and accepted treatment plans. We have never had this level of visibility or lead accountability with an agency before.',
      metrics: '+£340K Treatment Pipeline',
      color: 'from-green-400 to-emerald-400',
    },
  ],
}