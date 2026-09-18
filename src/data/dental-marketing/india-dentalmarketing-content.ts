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
} from "react-icons/fa";
import { LuTestTubes } from 'react-icons/lu'

import {
  BenefitsSectionContent,
  HeroSectionContent,
  ImageContentSectionContent,
  ServicesSectionContent,
  TestimonialsSectionContent,
} from "./types";

export const INDIA_HERO_CONTENT: HeroSectionContent = {
  eyebrowBadge: 'India’s Leading Dental Growth Agency',
  h1Start: 'Dental Growth Marketing for ',
  h1Highlight: 'Indian Practices',
  h1End: '',
  subtitle: 'Grow Your Indian Practice With Targeted Google & Meta Campaigns Built for Better ROI',
  subtext:
    'Turn online searches into confirmed clinic visits and high-ticket treatment cases. Bixeltek builds dedicated patient acquisition systems for Indian dental practices—combining hyper-targeted Google Ads, local Dental SEO, high-converting WhatsApp & mobile landing pages, and rapid front-desk lead recovery for Dental Implants, Clear Aligners, and Cosmetic Dentistry.',
  featureTags: [
    { iconType: 'chart', text: 'High-Ticket Treatment Leads' },
    { iconType: 'tooth', text: 'India Dental Market Specialists' },
    { iconType: 'phone', text: 'Direct WhatsApp & Call Tracking' },
  ],
  primaryCtaText: 'Schedule Practice Growth Call',
  secondaryCtaText: 'Talk to a Dental Marketing Specialist',
  proofNumber: '102K+',
  proofLabel: 'patient enquiries generated across Indian and global dental clinics',
  trustInitials: ['RS', 'AS', 'VM'],
  calculator: {
    currencySymbol: '₹',
    defaultMonthlyBudget: 50000,
    minBudget: 20000,
    maxBudget: 200000,
    budgetStep: 5000,
    defaultPatientValue: 25000,
    minPatientValue: 5000,
    maxPatientValue: 150000,
    patientValueStep: 2500,
    costPerEnquiry: 500,
    enquiryToPatientRate: 0.4,
    budgetLabel: 'Monthly Dental Marketing Ad Budget',
    patientValueLabel: 'Average High-Value Treatment Value (₹)',
    assumptionsNotice:
      'Planning model based on an indicative ₹500 cost per qualified enquiry and a 40% enquiry-to-appointment conversion rate across Indian cities.',
    leadsPanelLabel: 'Estimated Patient Enquiries',
    leadsPanelSubtext: 'Expected monthly treatment enquiries',
    patientsPanelLabel: 'Estimated Booked Patients',
    patientsPanelSubtext: 'Based on a 40% clinic consultation booking rate',
    revenuePanelLabel: 'Potential Practice Revenue',
    revenuePanelSubtext: 'Estimated gross revenue from booked treatments',
    disclaimerText:
      'Planning assumptions for modelling purposes. Actual patient acquisition costs vary according to local city competition (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, etc.), clinical treatment focus (e.g. Dental Implants, Invisible Aligners, Smile Makeovers, Root Canals), surgery chair availability, and front-desk WhatsApp & phone response times.',
    calculatorCtaText: 'Get Your Free Dental Marketing Audit →',
    tags: ['Google Ads India', 'Dental SEO', 'Implant & Aligner Growth'],
  },
}

export const INDIA_SERVICES_CONTENT: ServicesSectionContent = {
  badge: 'What We Do',
  headingStart: 'Complete Dental Patient Acquisition ',
  headingHighlight: 'Suite for India',
  headingEnd: '',
  subtext:
    'From high-intent Google Search Ads and Google Maps (GMB) dominance to WhatsApp-first dental landing pages, call tracking, and front-desk conversion training, we connect every stage of the Indian patient journey into a predictable acquisition engine.',
  footerText:
    'Claim your free dental marketing audit or schedule a 30-minute one-to-one consultation with our Indian dental marketing specialists.',
  ctaText: 'Talk to a Dental Marketing Specialist',
  services: [
    {
      icon: FaChartLine,
      title: 'Google Ads & Dental PPC',
      description:
        'Capture private patients actively searching for high-margin dental procedures in your city catchment—from Single & Full Mouth Dental Implants to Clear Aligners and Smile Makeovers.',
      features: [
        'High-intent treatment keyword architecture',
        'High-converting ad copy & local extensions',
        'Pincode & clinic radius geo-fencing (3–10 km)',
        'Negative keyword hygiene (blocks free/govt searches)',
        'Full WhatsApp & phone call conversion tracking',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaSearchLocation,
      title: 'Dental SEO & Google Map Pack',
      description:
        'Dominate the Google Local 3-Pack and organic search rankings for "best dentist near me" and high-ticket treatments across your city and surrounding neighbourhoods.',
      features: [
        'Google Business Profile (GMB) ranking & review growth',
        'Clinical treatment & locality landing page SEO',
        'Healthcare citation consistency (Practo, Justdial, Lybrate)',
        'Technical SEO & lightning-fast Core Web Vitals',
        'Ethical, DCI-compliant healthcare authority link building',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
    {
      icon: FaDesktop,
      title: 'High-Converting Dental Landing Pages',
      description:
        'Turn paid ad clicks into confirmed appointments with mobile-first dental landing pages built specifically for Indian patient behaviour—with 1-click WhatsApp and call actions.',
      features: [
        'Treatment-led CRO layouts engineered for mobile 4G/5G',
        'Direct 1-tap WhatsApp chat & call appointment flows',
        'Transparent fee guides, EMI & finance displays',
        'Doctor credentials, clinic photos & video testimonials',
        'DCI advertising ethics & healthcare compliance',
      ],
      accent: '#fdf4ff',
      iconColor: '#9333ea',
    },
    {
      icon: FaPhoneAlt,
      title: 'WhatsApp & Call Enquiry Tracking',
      description:
        'Eliminate blind spots in your marketing. Attribute every incoming phone call, WhatsApp enquiry, and web form submission to the exact keyword and ad campaign that produced it.',
      features: [
        'Dynamic call tracking (DNI) for Indian virtual numbers',
        'WhatsApp click-to-chat conversion attribution',
        'Receptionist call recording audit & lead quality review',
        'Treatment-level ROI & Cost-Per-Lead (CPL) reporting',
        'Clinic CRM & management software integration',
      ],
      accent: '#fff7ed',
      iconColor: '#ea580c',
    },
    {
      icon: FaStar,
      title: 'Patient Reviews & Reputation Management',
      description:
        'Build unshakeable social proof and digital authority that prospective patients expect before choosing your clinic over local competitors.',
      features: [
        'Automated post-treatment WhatsApp review requests',
        'Google Business Profile 5-star review velocity',
        'Professional review response framework & reputation shield',
        'Patient sentiment monitoring & feedback loops',
        'Local competitor rating & visibility benchmarking',
      ],
      accent: '#eff6ff',
      iconColor: '#1a56db',
    },
    {
      icon: FaRobot,
      title: 'AI Intake & Missed-Call Recovery',
      description:
        'Ensure your clinic never loses a ₹50,000+ implant or aligner case to a missed call. Our automated intake system engages prospective patients within seconds, 24/7.',
      features: [
        'Instant missed-call SMS & WhatsApp auto-response',
        '24/7 automated WhatsApp conversational triage',
        'Lead qualification by procedure, budget & timeline',
        'Automated consultation reminder sequences to cut no-shows',
      ],
      accent: '#ecfdf5',
      iconColor: '#059669',
    },
  ],
}

export const INDIA_BENEFITS_CONTENT: BenefitsSectionContent = {
  badge: 'Why Choose Us',
  headingStart: 'Why Dental Practices Across India Choose ',
  headingHighlight: 'Bixeltek',
  headingEnd: '',
  subtext:
    'We don’t just deliver vanity clicks or low-intent leads. We build and scale the entire patient acquisition engine behind them—helping Indian dental clinics attract high-value patients and fill surgery chairs predictably.',
  benefits: [
    {
      icon: FaStar,
      title: 'Specialized in Indian Dental Economics',
      description:
        'We understand the patient psychology in India—from price sensitivity on general treatments to value-driven decisions on Dental Implants, Clear Aligners, Full Mouth Rehabilitation, and NRI Dental Tourism.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '01',
    },
    {
      icon: FaShieldAlt,
      title: '60-Day Measurable Performance Commitment',
      description:
        'If your campaigns are not demonstrating measurable increases in qualified patient consultations within 60 days, we continue optimising your campaigns and landing pages at zero additional management fee.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '02',
    },
    {
      icon: FaChartBar,
      title: 'Transparent CPL & Revenue Reporting',
      description:
        'Complete transparency on every rupee invested. Track exact cost per qualified lead, phone inquiries, WhatsApp conversations, and booked clinical consultations through real-time dashboards.',
      accent: '#fdf4ff',
      iconColor: '#9333ea',
      num: '03',
    },
    {
      icon: FaClock,
      title: 'Rapid 7-Day Clinic Onboarding',
      description:
        'We build and launch your treatment landing pages, Google Ads campaigns, Google Maps optimization, and call-tracking infrastructure rapidly without taking you away from your clinical chair time.',
      accent: '#fff7ed',
      iconColor: '#ea580c',
      num: '04',
    },
    {
      icon: FaUserCheck,
      title: 'Dedicated Dental Growth Strategist',
      description:
        'Collaborate directly with a dedicated healthcare strategist who understands clinical dental procedures, front-desk triage workflows, and Indian regional market dynamics.',
      accent: '#eff6ff',
      iconColor: '#1a56db',
      num: '05',
    },
    {
      icon: FaRocket,
      title: 'Scale Across Surgery Chairs or Multi-City Clinics',
      description:
        'Whether you need to fill excess chair capacity for a single boutique clinic or scale patient acquisition across a multi-centre dental hospital chain, our modular systems scale seamlessly.',
      accent: '#ecfdf5',
      iconColor: '#059669',
      num: '06',
    },
  ],
}

export const INDIA_IMAGE_CONTENT: ImageContentSectionContent = {
  eyebrow: 'Integrated Patient Acquisition Engine',
  headingStart: 'Everything Your Clinic Needs to ',
  headingHighlight: 'Dominate',
  headingEnd: ' Your Local City Catchment',
  subtext:
    'Our dental marketing engine connects high-intent search visibility with mobile-first landing pages and clinic workflow integrations to deliver predictable, high-value patient appointments.',
  imageSrc:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  imageAlt: 'Modern dental clinic surgery room in India',
  floatingStats: {
    top: { label: 'Inquiry Growth', value: '4.2x' },
    bottom: { label: 'Lead Attribution', value: '100%' },
  },
  ctaText: 'Claim Your Free Dental Marketing Audit',
  ctaHref: '#audit',
  features: [
    {
      icon: FaGlobe,
      title: 'High-Converting Treatment Pages',
      description:
        'Bespoke, mobile-optimized dental landing pages structured specifically around patient intent with seamless WhatsApp and call triggers.',
    },
    {
      icon: FaPaintBrush,
      title: 'Ethical Healthcare Content & Design',
      description:
        'Clear treatment explanations, transparent fee guides, doctor credential displays, and before-after cases that establish trust before enquiry.',
    },
    {
      icon: FaChartLine,
      title: 'Real-Time Lead & Revenue Attribution',
      description:
        'Track every patient enquiry, appointment booking, and treatment case value with transparent live conversion reporting.',
    },
    {
      icon: LuTestTubes,
      title: 'Continuous Conversion Rate Optimisation',
      description:
        'Ongoing A/B testing across headlines, WhatsApp buttons, mobile forms, and trust badges to systematically reduce your cost per consultation.',
    },
    {
      icon: FaPhone,
      title: 'Dynamic Call & WhatsApp Tracking',
      description:
        'Attribute every phone enquiry and WhatsApp chat back to the exact search keyword, local campaign, and landing page that drove it.',
    },
    {
      icon: FaLink,
      title: 'Clinic Front-Desk Workflow Sync',
      description:
        'Seamless integration into your reception team’s workflow, CRM software, and appointment diary for instant 2-minute lead follow-up.',
    },
  ],
}

export const INDIA_TESTIMONIALS_CONTENT: TestimonialsSectionContent = {
  badge: 'Testimonials',
  headingStart: 'Real Growth from ',
  headingHighlight: 'Indian Dental Principals',
  headingEnd: '',
  subtext:
    'Hear directly from dental clinic founders and specialists across India who scaled their patient acquisition and clinical revenue with Bixeltek.',
  testimonials: [
    {
      name: 'Dr. Rajesh Sharma',
      location: 'Bandra West, Mumbai',
      specialty: 'Cosmetic Dentist & Implantologist',
      quote:
        'Before partnering with Bixeltek, our clinic relied almost exclusively on word of mouth. Within 60 days of launching their Google Ads and WhatsApp landing page system, we went from 8-10 implant consultations a month to over 35+ qualified high-ticket leads. Our chair occupancy has never been higher.',
      metrics: '+280% High-Value Cases',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Dr. Ananya Sen',
      location: 'Indiranagar, Bengaluru',
      specialty: 'Orthodontist & Clear Aligner Specialist',
      quote:
        'Bixeltek transformed our clear aligner patient acquisition. We now dominate Google Local 3-Pack and targeted search ads across East Bangalore. The quality of patients walking into our clinic is exceptional—they already know our expertise and come ready to proceed with treatment.',
      metrics: '#1 Google Maps Ranking',
      color: 'from-purple-400 to-pink-400',
    },
    {
      name: 'Dr. Vikram Malhotra',
      location: 'Greater Kailash, Delhi NCR',
      specialty: 'Dental Chain Founder & Chief Prosthodontist',
      quote:
        'Every single rupee we invest with Bixeltek is tracked directly to confirmed patient footfall and accepted treatment plans. Their front-desk follow-up framework alone recovered dozens of missed leads. They are without question the best dental growth agency in India.',
      metrics: '+₹48 Lakhs Treatment Pipeline',
      color: 'from-green-400 to-emerald-400',
    },
  ],
}

