import type { StaticImageData } from 'next/image';

// Industry Overview Assets
import dentalImg from '@/assets/dental-clinic.jpg';
import medicalImg from '@/assets/medical-clinics-overview.jpg';
import aestheticImg from '@/assets/aesthetic-overview.jpg';
import physiotherapyImg from '@/assets/physiotherapy-overview.jpg';
import pharmaImg from '@/assets/pharma-healthcare-overview.jpg';
import roofingImg from '@/assets/roofing-overview.jpg';
import cleaningImg from '@/assets/cleaning-overview.jpg';
import hvacImg from '@/assets/hvac.jpg';
import plumbingImg from '@/assets/plumbing-overview.jpg';
import landscapingImg from '@/assets/landscaping-overview.jpg';
import realEstateImg from '@/assets/real-estate-overview.jpg';
import constructionImg from '@/assets/constructing-overview.jpg';
import consultingImg from '@/assets/consulting-overview.jpg';
import accountingImg from '@/assets/accounting-overview.jpg';
import legalImg from '@/assets/legal-overview.jpg';
import retailImg from '@/assets/retail-overview.jpg';
import fashionImg from '@/assets/fashion-overview.jpg';
import foodImg from '@/assets/food-beverage-overview.jpg';
import educationImg from '@/assets/education-overview.jpg';
import techImg from '@/assets/technology-overview.jpg';
import manufacturingImg from '@/assets/manufacturing-overview.jpg';
import oilGasImg from '@/assets/oil-gas-overview.jpg';
import automotiveImg from '@/assets/automative-overview.jpg';
import hospitalityImg from '@/assets/hospitality-overview.jpg';
import travelImg from '@/assets/travel-overview.jpg';
import entertainmentImg from '@/assets/entertainment-overview.jpg';
import nonProfitImg from '@/assets/non-profit-overview.jpg';

export interface PillarIndustryItem {
  slug: string;
  name: string;
  headline: string;
  description: string;
  tags: string[];
  link: string;
  badge?: string;
  image: StaticImageData;
}

export interface IndustryCategoryGroup {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: 'HeartPulse' | 'Home' | 'Briefcase' | 'ShoppingBag' | 'Cpu' | 'Globe';
  industries: PillarIndustryItem[];
}

export const industryCategoryGroups: IndustryCategoryGroup[] = [
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    badge: "Clinical & Practice Growth",
    subtitle: "High-trust acquisition funnels, local search dominance, and HIPAA-ready patient inquiry workflows.",
    iconName: "HeartPulse",
    industries: [
      {
        slug: "dental-practices",
        name: "Dental Clinics",
        headline: "High-Ticket Patient Acquisition for Modern Dental Clinics",
        description: "Targeted campaigns for cosmetic, implant, and orthodontic practices that convert local high-intent searchers into booked consultations.",
        tags: ["Cosmetic & Implants", "Local Map Pack", "Patient Pipeline"],
        link: "/industries/dental-practices",
        badge: "Popular",
        image: dentalImg,
      },
      {
        slug: "medical-clinics",
        name: "Medical Clinics",
        headline: "Turn Online Searches Into Patient Inquiries",
        description: "Connect local SEO, Google Ads, and a clearer clinic website to help prospective patients discover your care with confidence.",
        tags: ["Specialist Pages", "Patient Discovery", "Call Attribution"],
        link: "/industries/medical-clinics",
        image: medicalImg,
      },
      {
        slug: "aesthetic-clinics",
        name: "Aesthetic Clinics",
        headline: "Help More Clients Discover, Trust & Choose Your Clinic",
        description: "Turn considered treatment evaluations into scheduled consultations with procedure guides, practitioner proof, and transparent pricing.",
        tags: ["Treatment Funnels", "Consultation Booking", "High-LTV Acquisition"],
        link: "/industries/aesthetic-clinics",
        image: aestheticImg,
      },
      {
        slug: "physiotherapy-clinics",
        name: "Physiotherapy Clinics",
        headline: "Turn Local Searches Into Physiotherapy Inquiries",
        description: "Help patients find the right therapy for their condition, verify location convenience, and book appointments without friction.",
        tags: ["Local Search", "Condition Targeting", "Direct Booking"],
        link: "/industries/physiotherapy-clinics",
        image: physiotherapyImg,
      },
      {
        slug: "pharma-healthcare",
        name: "Pharma & Healthcare",
        headline: "Build a Stronger Digital Presence for Pharma & Health Brands",
        description: "Communicate clinical authority, meet regulatory compliance standards, and connect enterprise healthcare buyers to your capabilities.",
        tags: ["Compliance-Ready", "B2B Procurement", "Authority Stack"],
        link: "/industries/pharma-healthcare",
        image: pharmaImg,
      },
    ],
  },
  {
    id: "home-local",
    title: "Home & Local Services",
    badge: "Contractors & Field Services",
    subtitle: "Local service area dominance, Google LSAs, tap-to-call mobile funnels, and CRM dispatch integrations.",
    iconName: "Home",
    industries: [
      {
        slug: "roofing",
        name: "Roofing Contractors",
        headline: "Turn Local Searches Into Booked Roofing Jobs",
        description: "Capture urgent repair needs and planned replacements with neighborhood-specific landing pages and frictionless inspection requests.",
        tags: ["Emergency Dispatch", "Commercial Roofs", "Estimate Funnels"],
        link: "/industries/roofing",
        image: roofingImg,
      },
      {
        slug: "cleaning-services",
        name: "Cleaning Services",
        headline: "Turn Online Searches Into Recurring Cleaning Bookings",
        description: "Segment residential recurring cleaning from commercial janitorial contracts with transparent scope definitions and instant booking.",
        tags: ["Residential & Office", "Service Area SEO", "Instant Quotes"],
        link: "/industries/cleaning-services",
        image: cleaningImg,
      },
      {
        slug: "hvac",
        name: "HVAC Services",
        headline: "Turn Local Searches Into Booked HVAC Service Calls",
        description: "Bridge emergency heating and cooling breakdowns to immediate dispatch, while driving high-ticket seasonal system replacements.",
        tags: ["Emergency Dispatch", "High-Efficiency Replacements", "Google LSAs"],
        link: "/industries/hvac",
        image: hvacImg,
      },
      {
        slug: "plumbing",
        name: "Plumbing Contractors",
        headline: "Get Your Plumbing Business Found, Trusted & Booked",
        description: "Dominate local map packs, capture high-intent emergency plumbing queries, and convert mobile visitors with instant tap-to-call actions.",
        tags: ["Emergency Calls", "Tap-to-Call UI", "Service-Area Coverage"],
        link: "/industries/plumbing",
        image: plumbingImg,
      },
      {
        slug: "landscaping",
        name: "Landscaping & Outdoor Living",
        headline: "Turn Property Searches Into High-Value Landscaping Projects",
        description: "Showcase completed outdoor living transformations, architectural masonry, and commercial maintenance contracts that close high-ticket clients.",
        tags: ["Project Portfolios", "Seasonal Campaigns", "Property Owner Leads"],
        link: "/industries/landscaping",
        image: landscapingImg,
      },
    ],
  },
  {
    id: "business-professional",
    title: "Business & Professional Services",
    badge: "B2B & Advisory Practices",
    subtitle: "Establish professional authority, generate qualified partner-level inquiries, and nurture high-retainer accounts.",
    iconName: "Briefcase",
    industries: [
      {
        slug: "real-estate",
        name: "Real Estate & Brokerages",
        headline: "Turn Buyer & Seller Searches Into Closed Real Estate Deals",
        description: "Establish geographic hyper-local authority, capture high-intent home valuations, and present premium commercial listings.",
        tags: ["High-Value Listings", "Neighborhood Authority", "Valuation Funnels"],
        link: "/industries/real-estate",
        image: realEstateImg,
      },
      {
        slug: "construction",
        name: "Construction & Commercial Builders",
        headline: "Turn Project Searches Into Profitable Construction Contracts",
        description: "Highlight engineering credentials, commercial bonding capacity, and past milestones to win prime subcontracts and general contracting RFQs.",
        tags: ["Commercial & Residential", "Capability Portfolios", "RFQ Generation"],
        link: "/industries/construction",
        image: constructionImg,
      },
      {
        slug: "consulting",
        name: "Management & Advisory Consulting",
        headline: "Turn Advisory Expertise Into Qualified Client Engagements",
        description: "Differentiate niche methodology, showcase board-level business impact, and drive qualified enterprise consultation inquiries.",
        tags: ["Authority Building", "Executive Inquiries", "Thought Leadership"],
        link: "/industries/consulting",
        image: consultingImg,
      },
      {
        slug: "accounting",
        name: "Accounting & CPA Firms",
        headline: "Turn Online Searches Into High-Value Retainer Clients",
        description: "Position specialized tax advisory, fractional CFO services, and year-round corporate retainers beyond basic tax-prep queries.",
        tags: ["Tax Advisory", "Corporate Retainers", "Consultation Intake"],
        link: "/industries/accounting",
        image: accountingImg,
      },
      {
        slug: "legal",
        name: "Legal & Law Practices",
        headline: "Turn Legal Searches Into Qualified Client Consultations",
        description: "Build immediate credibility, clarify practice-area expertise, and provide confidential, frictionless inquiry channels for prospective clients.",
        tags: ["Practice-Area Authority", "Discreet Intake", "High-Intent Search"],
        link: "/industries/legal",
        image: legalImg,
      },
    ],
  },
  {
    id: "ecommerce-d2c",
    title: "Ecommerce & D2C",
    badge: "Retail & Digital Brands",
    subtitle: "Scalable shopping funnels, high-converting product detail pages, paid social attribution, and customer LTV retention.",
    iconName: "ShoppingBag",
    industries: [
      {
        slug: "retail",
        name: "Retail & Multi-Channel Stores",
        headline: "Turn Browsing Shoppers Into Repeat Ecommerce Orders",
        description: "Synchronize catalog discovery, automated Google Shopping campaigns, and checkout optimizations that increase average order value.",
        tags: ["Shopping Campaigns", "CRO Architecture", "Repeat Orders"],
        link: "/industries/retail",
        image: retailImg,
      },
      {
        slug: "fashion-apparel",
        name: "Fashion & Apparel",
        headline: "Turn Style Shoppers Into High-LTV Fashion Buyers",
        description: "Eliminate fit and sizing doubt with interactive product merchandising, visual storytelling, and paid social retargeting engines.",
        tags: ["Visual Merchandising", "D2C Storefronts", "Paid Social Scaling"],
        link: "/industries/fashion-apparel",
        image: fashionImg,
      },
      {
        slug: "food-beverage",
        name: "Food & Beverage Brands",
        headline: "Turn Hungry Searchers Into Loyal Brand Customers",
        description: "Drive specialty D2C subscriptions and retail store locator lookups with appetising visual presentation and subscription management.",
        tags: ["Packaged Goods", "D2C Subscriptions", "Brand Loyalty"],
        link: "/industries/food-beverage",
        image: foodImg,
      },
      {
        slug: "education",
        name: "Education & EdTech",
        headline: "Turn Student Searches Into Qualified Course Enrolments",
        description: "Provide transparent curriculum structures, tuition breakdowns, and frictionless admission workflows that guide students to enroll.",
        tags: ["Course Enrolments", "Admission Funnels", "Tuition Transparency"],
        link: "/industries/education",
        image: educationImg,
      },
    ],
  },
  {
    id: "tech-industrial",
    title: "Technology & Industrial",
    badge: "B2B Software & Manufacturing",
    subtitle: "Complex product positioning, B2B procurement funnels, enterprise RFQs, and product-led trial acquisitions.",
    iconName: "Cpu",
    industries: [
      {
        slug: "technology-saas",
        name: "Technology & SaaS",
        headline: "Turn High-Intent Traffic Into Scalable SaaS Demos & Trials",
        description: "Communicate product value in seconds, optimize interactive product tours, and capture qualified demo requests from decision-makers.",
        tags: ["Demo Bookings", "Feature Comparison", "Product-Led Growth"],
        link: "/industries/technology-saas",
        image: techImg,
      },
      {
        slug: "manufacturing",
        name: "Manufacturing & Industrial",
        headline: "Turn Industrial Searches Into High-Volume Manufacturing RFQs",
        description: "Showcase facility capabilities, tolerance specs, and custom fabrication capacity to procurement directors looking for verified vendors.",
        tags: ["Technical Specifications", "RFQ Pipelines", "Industrial Buyers"],
        link: "/industries/manufacturing",
        image: manufacturingImg,
      },
      {
        slug: "oil-gas-energy",
        name: "Oil, Gas & Energy",
        headline: "Turn Energy Procurement Searches Into Qualified Vendor Contracts",
        description: "Demonstrate rigorous HSE compliance, regional infrastructure footprints, and field-tested reliability to industrial operators.",
        tags: ["HSE Credentials", "Enterprise Bidding", "B2B Procurement"],
        link: "/industries/oil-gas-energy",
        image: oilGasImg,
      },
      {
        slug: "automotive",
        name: "Automotive & Dealerships",
        headline: "Turn Local Driver Searches Into Showroom Visits & Service Bookings",
        description: "Connect high-intent vehicle shoppers to real-time inventory and drive service bays with localized maintenance scheduling.",
        tags: ["Inventory Search", "Service Bay Bookings", "Local Geofencing"],
        link: "/industries/automotive",
        image: automotiveImg,
      },
    ],
  },
  {
    id: "public-experiences",
    title: "Public, Hospitality & Experiences",
    badge: "Hospitality & Civic Institutions",
    subtitle: "Direct reservation engines, experiential destination marketing, donor engagement, and civic accessibility.",
    iconName: "Globe",
    industries: [
      {
        slug: "hospitality",
        name: "Hospitality & Boutique Resorts",
        headline: "Turn Guest Searches Into Direct Room Bookings",
        description: "Reduce third-party OTA commission fees with engaging virtual tours, transparent direct booking perks, and seasonal offers.",
        tags: ["Direct Bookings", "OTA Commission Reduction", "Amenity Showcases"],
        link: "/industries/hospitality",
        image: hospitalityImg,
      },
      {
        slug: "travel-tourism",
        name: "Travel & Guided Tourism",
        headline: "Turn Traveler Searches Into Direct Tour Bookings",
        description: "Transform itinerary inspiration into booked excursions with clear travel schedules, transparent pricing, and instant mobile reservation.",
        tags: ["Tour Itineraries", "Seasonal Booking Engines", "Destination Authority"],
        link: "/industries/travel-tourism",
        image: travelImg,
      },
      {
        slug: "entertainment",
        name: "Entertainment & Live Events",
        headline: "Turn Fan Attention Into Sold-Out Ticket Sales",
        description: "Maximize event sell-outs with viral social campaigns, rapid-checkout mobile ticket pages, and automated performance updates.",
        tags: ["Event Promotion", "Ticket Conversions", "Audience Nurturing"],
        link: "/industries/entertainment",
        image: entertainmentImg,
      },
      {
        slug: "non-profit",
        name: "Non-Profit & Philanthropy",
        headline: "Turn Mission Awareness Into Sustainable Donor Funding",
        description: "Turn mission awareness into recurring donor funding with transparent impact reporting, grant landing pages, and one-click donations.",
        tags: ["Donation Pathways", "Verified Impact", "Grant & Donor Outreach"],
        link: "/industries/non-profit",
        image: nonProfitImg,
      },
      {
        slug: "government",
        name: "Government & Civic Portals",
        headline: "Modernize Civic Portals Into Accessible Public Services",
        description: "Streamline public service delivery, maintain WCAG accessibility compliance, and keep civic announcements effortlessly searchable.",
        tags: ["WCAG Accessibility", "Public Information", "Secure Digital Portals"],
        link: "/industries/government",
        image: consultingImg,
      },
    ],
  },
];
