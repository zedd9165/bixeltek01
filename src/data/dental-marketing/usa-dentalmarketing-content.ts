'use client'

import {
  FaChartLine,
  FaDesktop,
  FaPhoneAlt,
  FaRobot,
  FaSearchLocation,
  FaStar,
  FaShieldAlt,
  FaChartBar,
  FaClock,
  FaUserCheck,
  FaRocket,
  FaGlobe,
  FaPaintBrush,
  FaPhone,
  FaLink,
} from "react-icons/fa"
import { LuTestTubes } from "react-icons/lu"

import {
  BenefitsSectionContent,
  HeroSectionContent,
  ImageContentSectionContent,
  ServicesSectionContent,
  TestimonialsSectionContent,
} from "./types"

export const USA_HERO_CONTENT: HeroSectionContent = {
  eyebrowBadge: 'USA Dental Marketing Agency',
  h1Start: 'Dental Growth Marketing for ',
  h1Highlight: 'US Practices',
  h1End: '',
  subtitle: 'Grow Your US Practice With Targeted Google & Meta Campaigns Built for Higher Production & ROI',
  subtext:
    'Turn high-intent Google searches into booked consultations and high-margin restorative cases. Bixeltek builds dedicated patient acquisition systems for US private practices, fee-for-service clinics, and growing dental groups combining HIPAA-compliant Google Ads, Dental SEO, conversion-engineered procedure landing pages, and rapid front-desk lead recovery for Dental Implants, Clear Aligners, and Cosmetic Dentistry.',
  featureTags: [
    { iconType: 'chart', text: 'High-Intent Leads' },
    { iconType: 'tooth', text: 'US Dental Market Specialists' },
    { iconType: 'phone', text: 'HIPAA-Compliant Call & Lead Tracking' },
  ],
  primaryCtaText: 'Schedule Practice Growth Call',
  secondaryCtaText: 'Talk to a Dental Marketing Specialist',
  proofNumber: '102K+',
  proofLabel: 'patient enquiries generated across US and global dental practices',
  trustInitials: ['DM', 'RB', 'MV'],
  calculator: {
    currencySymbol: '$',
    defaultMonthlyBudget: 3500,
    minBudget: 1500,
    maxBudget: 20000,
    budgetStep: 500,
    defaultPatientValue: 1800,
    minPatientValue: 500,
    maxPatientValue: 10000,
    patientValueStep: 100,
    costPerEnquiry: 75,
    enquiryToPatientRate: 0.45,
    budgetLabel: 'Monthly Dental Marketing Ad Budget ($)',
    patientValueLabel: 'Average Patient / Treatment Production ($)',
    assumptionsNotice:
      'Estimates use a fixed $75 cost per phone lead and a 50% phone-lead-to-patient conversion rate.',
    leadsPanelLabel: 'Estimated Patient Enquiries',
    leadsPanelSubtext: 'Expected monthly treatment enquiries',
    patientsPanelLabel: 'Estimated Booked Patients',
    patientsPanelSubtext: 'Based on a 45% consultation booking rate',
    revenuePanelLabel: 'Potential Practice Production',
    revenuePanelSubtext: 'Estimated gross production from new patient cases',
    disclaimerText:
      'Planning assumptions for modelling purposes. Actual patient acquisition costs vary according to local metro territory competition (e.g., Dallas, Houston, Los Angeles, Atlanta, New York, Phoenix, Chicago, Miami, Seattle), clinical case mix (All-on-4 implants, Invisalign, porcelain veneers, emergency dentistry), operatory chair capacity, and front-desk phone & SMS response times.',
    calculatorCtaText: 'Get Your Free Dental Marketing Audit →',
    tags: ['Google Ads USA', 'Dental SEO', 'Implant & Aligner Growth'],
  },
}

export const USA_SERVICES_CONTENT: ServicesSectionContent = {
  badge: 'What We Do',
  headingStart: 'Complete Dental Patient Acquisition ',
  headingHighlight: 'Suite for US Practices',
  headingEnd: '',
  subtext:
    'From high-intent Google Search Ads and Google Map Pack dominance to HIPAA-compliant procedure landing pages, dynamic call tracking, and front-desk conversion systems, we connect every stage of the American patient journey into a predictable acquisition engine.',
  footerText:
    'Claim your free dental marketing audit or schedule a 30-minute one-on-one consultation with our US dental marketing specialists.',
  ctaText: 'Talk to a Dental Marketing Specialist',
  services: [
    {
      icon: FaChartLine,
      title: 'Google Ads & Dental PPC',
      description:
        'Capture private and fee-for-service patients actively searching for high-margin dental procedures in your territory—from Single & Full Arch Implants to Invisalign and Emergency Dental Care.',
      features: [
        'Treatment-intent keyword architecture (implants, veneers, clear aligners)',
        'High-converting ad copy & local call extensions',
        'Zip-code & radius geo-fencing (5–15 mile practice radius)',
        'Negative keyword hygiene (eliminates Medicaid, free clinics, govt queries)',
        'Full conversion tracking for phone calls and online submissions',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaSearchLocation,
      title: 'Dental SEO & Google Map Pack',
      description:
        'Dominate the Google Local 3-Pack and organic search rankings for "best dentist near me" and high-ticket treatments across your city and surrounding suburbs.',
      features: [
        'Google Business Profile (GBP) optimization & weekly geo-updates',
        'Clinical procedure & neighborhood service area pages',
        'US healthcare citation syndication (Healthgrades, WebMD, Zocdoc, Yelp)',
        'Technical SEO, schema markup & Core Web Vitals optimization',
        'Ethical, authoritative dental healthcare link building',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
    {
      icon: FaDesktop,
      title: 'High-Converting Dental Landing Pages',
      description:
        'Convert clicks into booked consultations with treatment-specific landing pages engineered for mobile speed, patient psychology, and trust.',
      features: [
        'Procedure-focused CRO layouts (Implants, Invisalign, Veneers)',
        'Frictionless mobile appointment booking flows',
        'Transparent financing displays (CareCredit, Sunbit, Proceed Finance)',
        'HIPAA-compliant data encryption and secure SSL forms',
        'Sub-second page load speed on mobile devices',
      ],
      accent: '#fdf4ff',
      iconColor: '#9333ea',
    },
    {
      icon: FaPhoneAlt,
      title: 'HIPAA-Compliant Call & Lead Tracking',
      description:
        'Attribute every phone enquiry, form submission, and booked appointment to the exact campaign, keyword, or organic search query that drove it.',
      features: [
        'Dynamic Number Insertion (DNI) across all digital channels',
        'Practice Management Software (PMS) compatibility (Dentrix, Open Dental, Eaglesoft)',
        'Front-desk call recording and intake quality coaching',
        'Treatment-level ROI attribution and cost-per-acquisition metrics',
        'Strict HIPAA compliance with zero unencrypted PHI exposure',
      ],
      accent: '#fff7ed',
      iconColor: '#ea580c',
    },
    {
      icon: FaStar,
      title: '5-Star Reviews & Practice Reputation',
      description:
        'Build the social proof and clinical trust prospective patients demand before calling your office or requesting a consultation.',
      features: [
        'Automated post-appointment review requests via SMS',
        'Consistent Google Business Profile 5-star review velocity',
        'HIPAA-compliant review response frameworks',
        'Patient sentiment monitoring & negative feedback resolution',
        'Local competitor review velocity benchmarking',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaRobot,
      title: 'AI Intake & Missed-Call Text-Back',
      description:
        'Never lose a high-value patient to voicemail with 24/7 conversational intake, instant missed-call SMS recovery, and automated reminders.',
      features: [
        '24/7 conversational patient triage and intake capture',
        'Instant missed-call SMS text-back within 30 seconds',
        'Patient pre-qualification (insurance vs. fee-for-service)',
        'Automated appointment reminders to reduce operatory no-shows',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
  ],
}

export const USA_BENEFITS_CONTENT: BenefitsSectionContent = {
  badge: 'Why Choose Us',
  headingStart: 'Why US Dental Practices Choose ',
  headingHighlight: 'Bixeltek',
  headingEnd: '',
  subtext:
    'We don’t just buy clicks. We build and optimize the entire patient acquisition and production engine behind them—helping fee-for-service clinics, private practices, and growing DSOs attract high-value patients and fill operatory schedules predictably.',
  benefits: [
    {
      icon: FaStar,
      title: 'US Dental Market Specialists',
      description:
        'We understand PPO versus fee-for-service dynamics, high-margin clinical procedures (dental implants, Invisalign, full-mouth reconstruction), and strict HIPAA and ADA advertising guidelines. Every campaign reflects your local territory and clinical strengths.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '01',
    },
    {
      icon: FaShieldAlt,
      title: '60-Day Performance Commitment',
      description:
        'If your campaigns are not showing measurable improvements in qualified patient enquiries, we continue optimizing your campaigns and landing pages at no additional management cost, subject to agreed campaign terms.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '02',
    },
    {
      icon: FaChartBar,
      title: 'Transparent Production & ROI Reporting',
      description:
        'Complete transparency on your marketing investment. Track cost per qualified patient enquiry, phone calls, form completions, and booked clinical consultations with real-time conversion dashboards.',
      accent: '#fdf4ff',
      iconColor: '#9333ea',
      num: '03',
    },
    {
      icon: FaClock,
      title: 'Structured Practice Onboarding',
      description:
        'We launch your procedure landing pages, Google Ads campaigns, local SEO foundations, and call-tracking infrastructure rapidly without creating administrative drag for your office manager or reception team.',
      accent: '#fff7ed',
      iconColor: '#ea580c',
      num: '04',
    },
    {
      icon: FaUserCheck,
      title: 'Dedicated Dental Account Strategist',
      description:
        'Work directly with a senior marketing strategist who understands dental practice operations, chair utilization, clinical terminology, and continuously refines your patient acquisition pipeline.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '05',
    },
    {
      icon: FaRocket,
      title: 'Scale Across Operatories or Multi-Location DSOs',
      description:
        'Whether you need to fill excess chair capacity for a single-doctor practice or scale acquisition across a multi-location dental group, our modular systems scale seamlessly with your schedule.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '06',
    },
  ],
}

export const USA_IMAGE_CONTENT: ImageContentSectionContent = {
  eyebrow: 'Integrated Growth Engine',
  headingStart: 'Everything Else You Need to ',
  headingHighlight: 'Dominate',
  headingEnd: ' Your Local Dental Market',
  subtext:
    'Our US dental marketing engine bridges high-intent search visibility with conversion-engineered procedure pages and practice workflow integrations to deliver consistent, qualified patient appointments.',
  imageSrc:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  imageAlt: 'Modern US dental practice operatory with state-of-the-art equipment',
  floatingStats: {
    top: { label: 'Enquiry Lift', value: '3.6x' },
    bottom: { label: 'Attribution', value: '100%' },
  },
  ctaText: 'Get Your Free Dental Marketing Audit',
  ctaHref: '#audit',
  features: [
    {
      icon: FaGlobe,
      title: 'High-Converting Procedure Landing Pages',
      description:
        'Custom, mobile-first dental landing pages structured specifically around high-value clinical search intent and HIPAA compliance.',
    },
    {
      icon: FaPaintBrush,
      title: 'Ethical Content & Treatment Creative Design',
      description:
        'Procedure-led copywriting, transparent patient financing presentation, and trust-building creative assets.',
    },
    {
      icon: FaChartLine,
      title: 'Real-Time Enquiry & Revenue Analytics',
      description:
        'Track every patient enquiry, appointment booking, and treatment production value with transparent conversion reporting.',
    },
    {
      icon: LuTestTubes,
      title: 'Iterative Conversion Rate Optimization (CRO)',
      description:
        'Continuous A/B testing across headlines, forms, and mobile CTA touchpoints to systematically lower your cost per acquisition.',
    },
    {
      icon: FaPhone,
      title: 'Dynamic US Call Tracking & DNI',
      description:
        'Attribute every phone call back to the exact search keyword, local campaign, and landing page that drove it.',
    },
    {
      icon: FaLink,
      title: 'Practice Management Workflow Sync',
      description:
        'Seamless integration with your front-desk workflows, CRM systems, and appointment scheduling software.',
    },
  ],
}

export const USA_TESTIMONIALS_CONTENT: TestimonialsSectionContent = {
  badge: 'Testimonials',
  headingStart: 'Real Results from ',
  headingHighlight: 'US Dental Practices',
  headingEnd: '',
  subtext:
    'Hear directly from dental practice owners and partners across the United States who transformed their patient acquisition and practice production with Bixeltek.',
  testimonials: [
    {
      name: 'Dr. David Miller',
      location: 'Dallas, TX',
      specialty: 'Implant & General Dentist',
      quote:
        'Before working with Bixeltek, our private practice relied mostly on word of mouth and inconsistent PPO write-offs. Within 60 days of launching their implant campaigns, we were averaging 45+ qualified consultations every month. The transparent dashboard lets us see our exact return on marketing spend.',
      metrics: '+310% Implant Inquiries',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Dr. Rachel Bennett',
      location: 'Phoenix, AZ',
      specialty: 'Cosmetic & Restorative Dentist',
      quote:
        'Their Google Ads and local Map Pack positioning took us from invisible to the top 3 in our metro market for Invisalign and cosmetic veneers. Our front desk is booking high-ticket cases every week, and we had to add two operatory chairs to keep up with demand.',
      metrics: '#1 Google Map Pack',
      color: 'from-purple-400 to-pink-400',
    },
    {
      name: 'Dr. Marcus Vance',
      location: 'Atlanta, GA',
      specialty: 'Multi-Location Dental Partner',
      quote:
        'Every marketing dollar we spend is tracked directly to scheduled consultations and accepted treatment plans. We reduced our cost per acquired patient by 42% while scaling new patient production across three locations.',
      metrics: '+$520K Added Production',
      color: 'from-green-400 to-emerald-400',
    },
  ],
}

