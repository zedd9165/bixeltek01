'use client'

import {
  FileSearch,
  ClipboardList,
  PenLine,
  Users,
  AlertTriangle,
  Globe2,
  ShieldCheck,
  FileCheck2,
  Users2,
  RefreshCw,
  Globe,
  Lock,
} from "lucide-react";

import ServiceAppDevSection from "@/components/AppDev/ServiceGrid";
import TechStackSlider from "@/components/AppDev/TechStack";
import WhyChooseUs from "@/components/AppDev/WhyUs";
import DynamicIndustrySection from "@/components/Common/IndustryCarousel";
import LocationFaqSection from "@/components/Common/location/LocationFaqSection";
import LocationProcessSection from "@/components/Common/location/LocationProcessSection";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import ComplianceSnapshot from "@/components/PDPL/ComplianceSnapshot";
import PdplHero from "@/components/PDPL/PdlpHero";
import PdplCustomSolutions from "@/components/PDPL/PdplCustomSolutions";
import WhyPdplMatters from "@/components/PDPL/WhyPdplMatters";
import WebdevTestimonials from "@/components/WebDev/WebDevTestimonials";
import AreasWeServe from "@/components/WebDev/WebSection8";

// Reusing existing site imagery where the industry overlaps with your
// AppDev/WebDev pages. Swap these for dedicated PDPL industry shots when
// you have them — banking/e-commerce/government don't have direct matches
// in your current asset library, so these three are placeholders.
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg"; // placeholder → swap for a real-estate shot
import blackcar from "@/assets/digital marketing for car detailers.jpg"; // placeholder → swap for a banking/fintech shot
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg"; // placeholder → swap for e-commerce/retail shot

// ─── WHY IT MATTERS (custom WhyPdplMatters component — takes {title, description}[]) ──
const whyMatters = [
  {
    title: "Regulatory exposure is real",
    description:
      "SDAIA actively enforces PDPL, with fines that scale with the severity of the violation.",
  },
  {
    title: "Customer trust is on the line",
    description:
      "Transparent data practices are increasingly a factor in who customers choose to do business with.",
  },
  {
    title: "It touches every department",
    description:
      "Marketing, HR, and product teams all handle personal data — compliance can't live in one silo.",
  },
];

// ─── SERVICES (ServiceAppDevSection / ServiceGrid — icon must be a JSX element) ──
const services = [
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "PDPL Gap Assessment",
    description:
      "A full audit of your data practices, benchmarked against SDAIA's requirements — covering consent, retention, and processing records.",
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Data Mapping",
    description:
      "Processing records that show exactly what personal data you hold, where it lives, and why you're allowed to hold it.",
  },
  {
    icon: <PenLine className="w-8 h-8" />,
    title: "Policy & Consent Drafting",
    description:
      "Privacy notices, consent flows, and retention policies written to hold up under regulatory scrutiny, not just look compliant.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "DPO Advisory",
    description:
      "Guidance on whether you're required to appoint a Data Protection Officer, or acting as your outsourced compliance contact.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Breach Response Planning",
    description:
      "A rehearsed incident playbook so your team knows exactly how to act and report within PDPL's required timelines.",
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Cross-Border Transfer Review",
    description:
      "Assessing data flows to providers and processors outside the Kingdom against PDPL's transfer conditions.",
  },
];

// ─── PROCESS STEPS (LocationProcessSection — field is "text", not "description") ──
const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    text: "We review your business model, systems, and data flows to see exactly how PDPL applies to you — no generic checklist, no guesswork.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-[#4285F4]",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Gap Assessment",
    text: "A structured audit against SDAIA's PDPL requirements, flagging every point of exposure across policy, consent, and infrastructure.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-[#34A853]",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Remediation Plan",
    text: "A prioritized roadmap covering documentation, consent flows, data handling procedures, and technical safeguards — ranked by risk.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-[#EA4335]",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Implementation",
    text: "We draft the required documentation, configure consent mechanisms, and train your team on the day-to-day of staying compliant.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-[#FBBC04]",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Sign-Off & Launch",
    text: "Final review and rollout of your compliance program, with documentation your team can present to auditors or regulators on request.",
    gradient: "from-indigo-500 via-transparent to-transparent",
    color: "text-[#4285F4]",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Ongoing Compliance",
    text: "Scheduled reviews keep you compliant as your business grows and SDAIA guidance evolves — compliance as a process, not a one-time project.",
    gradient: "from-red-500 via-[#13131333] to-[#13131333]",
    color: "text-red-500",
  },
];

// ─── INDUSTRIES (DynamicIndustrySection / IndustryCarousel — id, img, label, text, description) ──
const industries = [
  {
    id: "health",
    img: healthcare,
    label: "PDPL Compliance for Healthcare",
    text: "Health Care Practices",
    description:
      "Patient data mapping, consent for treatment records, and breach protocols built for the sensitivity of medical information.",
  },
  {
    id: "banking",
    img: blackcar,
    label: "PDPL Compliance for Banking & FinTech",
    text: "Banking & FinTech",
    description:
      "Financial data handling, KYC consent flows, and cross-border transfer review for regulated financial products.",
  },
  {
    id: "ecommerce",
    img: cleaningcomp,
    label: "PDPL Compliance for E-Commerce & Retail",
    text: "E-Commerce & Retail",
    description:
      "Customer data governance across marketing, loyalty programs, and payment processing at retail scale.",
  },
  {
    id: "realestate",
    img: roofing,
    label: "PDPL Compliance for Real Estate",
    text: "Real Estate",
    description:
      "Buyer and tenant data protection across CRM systems, listings platforms, and third-party agent networks.",
  },
  {
    id: "oil",
    img: oil,
    label: "PDPL Compliance for Oil & Energy",
    text: "Oil & Energy",
    description:
      "Employee and contractor data governance across large, distributed workforces in the energy sector.",
  },
];

// ─── WHY CHOOSE US (WhyChooseUs / WhyUs — icon JSX, field is "desc", plus hoverBg) ──
const whyUs = [
  {
    icon: <ShieldCheck size={22} className="w-8 h-8 group-hover:text-white text-blue-500" />,
    title: "Saudi-Aligned, Vision 2030 Ready",
    desc: "We understand both the regulatory context and the business reality of operating in the Kingdom — not a generic global template.",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: <FileCheck2 size={22} className="w-8 h-8 group-hover:text-white text-indigo-500" />,
    title: "Built to Operate, Not Sit in a Binder",
    desc: "Every policy and process we deliver is one your team can actually run day to day, not a document that gathers dust.",
    hoverBg: "hover:bg-indigo-600",
  },
  {
    icon: <Users2 size={22} className="w-8 h-8 group-hover:text-white text-green-500" />,
    title: "Technical, Not Just Legal-Adjacent",
    desc: "We implement the consent systems and data infrastructure too, not just the documents describing them.",
    hoverBg: "hover:bg-green-600",
  },
  {
    icon: <RefreshCw size={22} className="w-8 h-8 group-hover:text-white text-yellow-500" />,
    title: "A Retained Partner, Not a One-Off Vendor",
    desc: "PDPL compliance is ongoing. We stay engaged with scheduled reviews as your business and regulation evolve.",
    hoverBg: "hover:bg-yellow-500",
  },
  {
    icon: <Lock size={22} className="w-8 h-8 group-hover:text-white text-pink-500" />,
    title: "Built-In Breach Readiness",
    desc: "Every engagement includes a rehearsed incident response plan, not just a policy that assumes nothing will go wrong.",
    hoverBg: "hover:bg-pink-500",
  },
  {
    icon: <Globe size={22} className="w-8 h-8 group-hover:text-white text-red-500" />,
    title: "Global Delivery, Local Expertise",
    desc: "Active clients across India, Canada, USA, UAE, and Saudi Arabia give us a grounded view of cross-border data obligations.",
    hoverBg: "hover:bg-red-600",
  },
];

// ─── FAQs (LocationFaqSection — question / answer, this shape was already correct) ──
const faqs = [
  {
    question: "What is the PDPL and who does it apply to?",
    answer:
      "The Personal Data Protection Law is Saudi Arabia's national data protection regulation, enforced by SDAIA. It applies to any entity, inside or outside the Kingdom, that processes personal data of individuals residing in Saudi Arabia.",
  },
  {
    question: "What happens if my business isn't compliant?",
    answer:
      "Non-compliance can lead to financial penalties, suspension of processing activities, and reputational damage, with fines that scale with severity.",
  },
  {
    question: "Do I need to appoint a Data Protection Officer?",
    answer:
      "Organizations processing sensitive or large-scale personal data are typically required to appoint a DPO. We assess whether it applies to you.",
  },
  {
    question: "How long does a PDPL engagement take?",
    answer:
      "Gap assessments usually take 1–2 weeks. Full remediation typically runs 4–8 weeks depending on your data complexity.",
  },
  {
    question: "We already have some policies. Can you build on those?",
    answer:
      "Yes. Most engagements start from partial compliance — our gap assessment identifies exactly what's missing or outdated.",
  },
];

export default function PdplConsultingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <PdplHero />
      <LogoTicker2 />
      <WhyPdplMatters whyMatters={whyMatters} />
      <ComplianceSnapshot />

      <ServiceAppDevSection
        heading="What We Deliver"
        spanText="Our PDPL Consulting Services"
        description="End-to-end PDPL compliance — from gap assessment and data mapping through to policy drafting, DPO support, and staff training — all under one engagement."
        services={services}
      />

      <LocationProcessSection
        heading={<span>Our Compliance Process</span>}
        description="A structured, six-stage process engineered for clarity and zero surprises — from first assessment to an audit-ready business."
        steps={steps}
        cta={{
          text: "Talk To A PDPL Specialist",
          href: "mailto:hello@bixeltek.com",
        }}
      />

      <TechStackSlider />
      <PdplCustomSolutions />

      <DynamicIndustrySection
        heading={
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
            PDPL Compliance Built <br /> for Every Industry
          </span>
        }
        description="From healthcare to FinTech, we calibrate your compliance program to the data sensitivity, volume, and regulatory expectations specific to your industry."
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
        description="Honest, detailed answers to the questions our clients ask most before starting a PDPL compliance engagement."
        faqs={faqs}
      />
    </div>
  );
}