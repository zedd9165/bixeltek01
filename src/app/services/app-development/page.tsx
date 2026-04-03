"use client";

import {
  Zap,
  Shield,
  Users,
  ArrowRight,
  Globe,
  BarChart3,
  RefreshCw,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import LocationProcessSection from "@/components/Common/location/LocationProcessSection";
import WebdevTestimonials from "@/components/WebDev/WebDevTestimonials";
import LocationFaqSection from "@/components/Common/location/LocationFaqSection";
import DynamicIndustrySection from "@/components/Common/IndustryCarousel";
import AreasWeServe from "@/components/WebDev/WebSection8";

import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import pet from "@/assets/digital marketing for pet stores.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import AppDevHero from "@/components/AppDev/Hero";
import WhyAppDevMatter from "@/components/AppDev/WhyItMatter";
import WhyChooseUs from "@/components/AppDev/WhyUs";
import HowAppWorksForBrand from "@/components/AppDev/HowItWorks";
import CustomSolutionsSection from "@/components/AppDev/CustomSolution";
import ServiceAppDevSection from "@/components/AppDev/ServiceGrid";
import { FaApple, FaFlutter, FaReact } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { BiLogoAdobe } from "react-icons/bi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import TechStackSlider from "@/components/AppDev/TechStack";


const services = [
  {
    icon: <FaApple className="w-8 h-8" />,
    title: "iOS App Development",
    description:
      "We engineer premium native iOS applications using Swift and Objective-C — purpose-built for iPhone, iPad, and Apple Watch. From seamless App Store submission to deep integration with Apple's ecosystem, we deliver apps that meet Apple's exacting standards and delight your users.",
  },
  {
    icon:<IoLogoAndroid className="w-8 h-8"/>,
    title: "Android App Development",
    description:
      "Our Android engineers craft high-performance, secure, and visually polished applications in Kotlin and Java — rigorously tested across 1,000+ device configurations and optimized for Google Play's guidelines, discoverability, and conversion.",
  },
  {
    icon:<FaReact className="w-8 h-8" />,
    title: "React Native Development",
    description:
      "One unified codebase, two world-class apps. We leverage React Native to deliver near-native performance on both iOS and Android simultaneously — cutting development time and cost without sacrificing quality, speed, or user experience.",
  },
  {
    icon:<FaFlutter className="w-8 h-8"/>,
    title: "Flutter Development",
    description:
      "Using Google's Flutter framework, we build natively compiled, visually stunning applications across mobile, web, and desktop — all from a single codebase. Perfect for businesses that demand a consistent, premium experience on every platform.",
  },
  {
    icon:<FaFigma  className="w-8 h-8"/>,
    title: "UI/UX Design for Mobile",
    description:
      "Great apps are built on great design. Our UX team crafts research-backed user flows, pixel-perfect wireframes, and interactive prototypes that are validated with real users before a single line of production code is written — so every decision is deliberate.",
  },
  {
    icon:<MdOutlineAppSettingsAlt className="w-8 h-8" />,
    title: "App Maintenance & Support",
    description:
      "Your launch is just the beginning. We provide comprehensive post-launch support — covering OS compatibility updates, performance tuning, security patches, bug resolution, and iterative feature development — so your app stays fast, secure, and ahead of the curve.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We conduct an in-depth analysis of your business objectives, target audience, competitive landscape, and technical requirements. This foundation ensures every product decision is aligned to your growth goals — not assumptions.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-[#4285F4]",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "UI/UX Design",
    text: "Our designers translate strategy into stunning, user-validated interfaces. From low-fidelity wireframes to fully interactive prototypes, every screen is crafted with conversion, retention, and brand consistency in mind — approved by you before development begins.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-[#34A853]",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Development",
    text: "Agile, two-week sprints with regular demos keep you informed and in control throughout the build. Our engineers write clean, scalable, well-documented code — following industry best practices for architecture, security, and long-term maintainability.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-[#EA4335]",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "QA & Testing",
    text: "Before any release, your app undergoes rigorous multi-device, multi-OS testing — covering functional correctness, performance under load, security vulnerability scanning, accessibility compliance, and real-world UX validation across hundreds of scenarios.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-[#FBBC04]",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Launch",
    text: "We manage the full App Store and Google Play submission process — from metadata and screenshots to compliance reviews and phased rollouts. Our listing optimization strategies give your app the best possible visibility from day one.",
    gradient: "from-indigo-500 via-transparent to-transparent",
    color: "text-[#4285F4]",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Growth & Scale",
    text: "Post-launch is where the real work begins. We monitor analytics, gather user feedback, run A/B tests, and implement iterative improvements — scaling your infrastructure and feature set in lockstep with your growing user base and evolving business needs.",
    gradient: "from-red-500 via-[#13131333] to-[#13131333]",
    color: "text-red-500",
  },
];

const industries = [
  {
    id: "health",
    img: healthcare,
    label: "Digital Marketing for Healthcare",
    text: "Health Care Practices",
    description: "HIPAA-compliant patient apps, appointment booking systems, and telemedicine platforms that modernize healthcare delivery.",
  },
  {
    id: "auto",
    img: blackcar,
    label: "Digital Marketing for Automobiles",
    text: "Automobile Industries",
    description: "Fleet management tools, car booking platforms, and dealer apps that streamline operations and drive more showroom visits.",
  },
  {
    id: "cleaning",
    img: cleaningcomp,
    label: "Digital Marketing for Cleaning Companies",
    text: "Cleaning Industries",
    description: "On-demand service booking apps with real-time scheduling, GPS tracking, and automated customer communication.",
  },
  {
    id: "roofing",
    img: roofing,
    label: "Digital Marketing for Roofing Companies",
    text: "Roofing Industries",
    description: "Field service apps with job tracking, quote generation, and CRM integration built for high-ticket trade businesses.",
  },
  {
    id: "lawncare",
    img: lawncare,
    label: "Digital Marketing for Lawn Care and Landscaping",
    text: "Lawn Care Industries",
    description: "Route optimization and recurring service management apps that grow subscription revenue for outdoor service companies.",
  },
  {
    id: "dental",
    img: dental,
    label: "Digital Marketing for Dental Clinic",
    text: "Dental Clinics",
    description: "Patient engagement apps with digital records, appointment reminders, and post-treatment follow-up automation.",
  },
  {
    id: "pet",
    img: pet,
    label: "Digital Marketing for Pet Stores",
    text: "Pet Stores",
    description: "E-commerce and loyalty apps for pet brands — featuring subscription orders, vet directories, and pet health tracking.",
  },
  {
    id: "oil",
    img: oil,
    label: "Digital Marketing for Oil Refineries",
    text: "Oil & Energy",
    description: "B2B procurement portals, field inspection apps, and supply chain management tools built for the energy sector.",
  },
];

const whyUs = [
  {
    icon: <Shield size={22} className="w-8 h-8 group-hover:text-white text-blue-500" />,
    title: "Security-First Architecture",
    desc: "Every application we build is engineered with enterprise-grade security at its core — end-to-end encryption, biometric authentication, OWASP compliance, and secure API design are non-negotiables, not afterthoughts.",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: <Zap size={22} className="w-8 h-8 group-hover:text-white text-indigo-500" />,
    title: "Rapid Time-to-Market",
    desc: "Our lean, agile sprint model is engineered for speed without sacrificing quality. Most MVPs are live on the app store within 8–10 weeks — giving you a competitive head start while others are still planning.",
    hoverBg: "hover:bg-indigo-600",
  },
  {
    icon: <Users size={22} className="w-8 h-8 group-hover:text-white text-green-500" />,
    title: "Dedicated Cross-Functional Team",
    desc: "You get a full product pod assigned exclusively to your project — a Product Manager, UX Designer, iOS/Android Engineers, QA Specialist, and a Technical Lead — all aligned around a single goal: your app's success.",
    hoverBg: "hover:bg-green-600",
  },
  {
    icon: <RefreshCw size={22} className="w-8 h-8 group-hover:text-white text-yellow-500" />,
    title: "Continuous Iteration & Improvement",
    desc: "We don't disappear after launch. Real users generate real data — and we use it. Monthly reviews, data-driven feature prioritization, and iterative releases ensure your app keeps improving and your users keep coming back.",
    hoverBg: "hover:bg-yellow-500",
  },
  {
    icon: <BarChart3 size={22} className="w-8 h-8 group-hover:text-white text-pink-500" />,
    title: "Built-in Analytics & Tracking",
    desc: "From session recordings to funnel analysis and crash reporting, we integrate robust analytics from day one — so you always have the visibility to make smart, evidence-based product decisions.",
    hoverBg: "hover:bg-pink-500",
  },
  {
    icon: <Globe size={22} className="w-8 h-8 group-hover:text-white text-red-500" />,
    title: "Global Delivery, Local Expertise",
    desc: "With active clients across India, Canada, USA, UAE, and Saudi Arabia, our globally distributed team understands diverse markets, regulatory environments, and user behaviors — giving your app a true international edge.",
    hoverBg: "hover:bg-red-600",
  },
];

const faqs = [
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "App development costs depend on the complexity of features, the number of platforms targeted, and the level of design polish required. A well-scoped MVP typically starts at ₹3–6 Lakhs for a single platform, while a full-featured, dual-platform app with backend infrastructure can range significantly higher. We provide a detailed, no-obligation cost estimate after a discovery session — so you know exactly what you're investing in before we begin.",
  },
  {
    question: "How long does mobile app development take?",
    answer:
      "A focused, well-scoped MVP can be delivered in as little as 8–10 weeks. Mid-complexity apps with custom backend systems, third-party integrations, and rich UI typically take 3–5 months. Enterprise-grade applications with advanced features may take 6+ months. We work in transparent agile sprints with weekly demos, so you always know where your project stands.",
  },
  {
    question: "Do you develop for both iOS and Android?",
    answer:
      "Yes — we build across all major platforms. We develop native iOS apps (Swift), native Android apps (Kotlin), and cross-platform apps using React Native and Flutter. We'll recommend the right approach for your budget, timeline, and audience after our discovery session.",
  },
  {
    question: "Will I own the source code and IP?",
    answer:
      "Absolutely and unconditionally. Full intellectual property transfer is a standard term in every Bixeltek engagement. You own 100% of the source code, design assets, documentation, and all associated materials from day one. We operate as your development partner, not a vendor retaining leverage.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes. We offer structured post-launch maintenance plans that cover OS version compatibility updates, bug resolution, performance monitoring, security patches, and iterative feature development. We treat post-launch as the beginning of the product lifecycle — not the end of our responsibility.",
  },
  {
    question: "Can you work with our existing codebase or backend?",
    answer:
      "Absolutely. Many of our clients come to us with existing products that need to be rebuilt, extended, or modernized. Our team conducts a technical audit first, then scopes a plan that builds on what's working and improves what isn't — minimizing risk and maximizing continuity.",
  },
];

// ─── WHY MOBILE MATTERS BULLETS ─────────────────────────────────────────────

const whyMatters = [
  "Puts your brand directly in your customers' pockets — available 24/7, no browser required.",
  "Delivers faster load times, smoother interactions, and a far superior UX compared to mobile websites.",
  "Unlocks native device capabilities — push notifications, GPS, camera, biometrics — to build deeply engaging products.",
  "Builds long-term loyalty through personalized experiences, in-app rewards, and direct communication channels.",
  "Drives measurable revenue: businesses with dedicated mobile apps report up to 3× higher conversion rates than mobile web alone.",
];


export default function MobileDevelopmentPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <AppDevHero/>
      <LogoTicker2 />
       <WhyAppDevMatter whyMatters={whyMatters} /> 
       <HowAppWorksForBrand/>
      <ServiceAppDevSection
        heading="What We Build"
        spanText="Our Mobile Development Services"
        description="End-to-end mobile engineering — from strategy and design through to native iOS, native Android, and cross-platform development — all under one roof, built to perform."
        services={services}
      />
      <LocationProcessSection
        heading={<span>Our Development Process</span>}
        description="A battle-tested, six-stage process engineered for clarity, speed, and zero surprises — from first conversation to live app store listing."
        steps={steps}
        cta={{
          text: "Talk To Our App Specialist",
          href: "mailto:hello@bixeltek.com",
        }}
      />
      <TechStackSlider/>
      <CustomSolutionsSection/>
      <DynamicIndustrySection
        heading={
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
            App Development Solutions <br /> Tailored for Every Industry
          </span>
        }
        description="From healthcare to FinTech, we build mobile apps calibrated to the unique compliance requirements, user behaviors, and competitive dynamics of your industry."
        industries={industries}
        backgroundColor="bg-black"
      />
      <WhyChooseUs whyUs={whyUs} />
      <AreasWeServe />
      <WebdevTestimonials />
      <LocationFaqSection
        heading={
          <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
            Still Got Questions?
          </h2>
        }
        description="Honest, detailed answers to the questions our clients ask most before starting their mobile app project."
        faqs={faqs}
      />

    </div>
  );
}