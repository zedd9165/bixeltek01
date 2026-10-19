import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Digital Growth Audit
import {
  digitalGrowthAuditMetadata,
  digitalGrowthAuditHero,
  digitalGrowthAuditOverview,
  digitalGrowthAuditProblems,
  digitalGrowthAuditScope,
  digitalGrowthAuditPriorities,
  digitalGrowthAuditFit,
  digitalGrowthAuditProcess,
  digitalGrowthAuditDeliverable,
  digitalGrowthAuditWhyBixeltek,
  digitalGrowthAuditDepth,
  digitalGrowthAuditDepthFactors,
  digitalGrowthAuditRelatedServices,
  digitalGrowthAuditFaqs,
  digitalGrowthAuditFinalCta,
} from "@/data/service/digital-growth-audit";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceSuitabilitySection,
  ServiceProcess,
  ServicePostLaunchSection,
  ServiceTechnologySection,
  ServiceWhyChooseUs,
  ServiceInvestment,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import type { TechnologyItem } from "@/components/services/common/ServiceTechnologySection";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Global Layout & Trust Shell Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import heroImg from "@/assets/audit-hero.jpg";
import overviewImg from "@/assets/audit-overview.jpg";
import decisionsImg from "@/assets/audit-controlpanels.webp";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-growth-audit.webp";

// Icons for Audit Ecosystem & Final CTA
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";
import {
  Search,
  Layout,
  GitBranch,
  ShieldAlert,
  BarChart3,
  Target,
  FileCheck2,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: digitalGrowthAuditMetadata.title,
  description: digitalGrowthAuditMetadata.description,
  keywords: digitalGrowthAuditMetadata.keywords,
  alternates: {
    canonical: digitalGrowthAuditMetadata.canonical,
  },
  openGraph: {
    title: digitalGrowthAuditMetadata.title,
    description: digitalGrowthAuditMetadata.description,
    url: digitalGrowthAuditMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Audit Inspection Ecosystem Items
const auditTechnologyItems: TechnologyItem[] = [
  {
    name: "Google Analytics 4 (GA4)",
    icon: <SiGoogleanalytics className="w-8 h-8 text-[#E37400]" />,
    href: "https://marketingplatform.google.com/about/analytics/",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-8 h-8 text-[#246FDB]" />,
    href: "https://tagmanager.google.com/",
  },
  {
    name: "Google Search Console",
    icon: <Search className="w-8 h-8 text-[#4285F4]" />,
    href: "https://search.google.com/search-console/about",
  },
  {
    name: "Google Ads Measurement",
    icon: <SiGoogleads className="w-8 h-8 text-[#F4B400]" />,
    href: "https://ads.google.com/",
  },
  {
    name: "Meta Pixel & Conversions API",
    icon: <SiMeta className="w-8 h-8 text-[#0081FB]" />,
    href: "https://business.facebook.com/",
  },
  {
    name: "Conversion Journey Inspection",
    icon: <Layout className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/digital-growth-audit",
  },
  {
    name: "Lead Flow & CRM Handoff",
    icon: <GitBranch className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/digital-growth-audit",
  },
  {
    name: "Friction & Risk Diagnosis",
    icon: <ShieldAlert className="w-8 h-8 text-[#EF4444]" />,
    href: "https://bixeltek.com/services/digital-growth-audit",
  },
];

// Curated Audit Capabilities for Final CTA
const auditStackTools: TechStackItem[] = [
  {
    name: "Website Conversion Journey",
    category: "Landing Experience",
    description:
      "Inspect headline clarity, value proposition, trust elements, navigation paths, and contact form usability.",
    icon: <Layout className="w-5 h-5 text-white" />,
  },
  {
    name: "SEO & Search Visibility Signals",
    category: "Organic Discovery",
    description:
      "Review service page coverage, indexability status, meta tagging hierarchy, and visible search intent alignment.",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    name: "Campaign & Destination Fit",
    category: "Paid Acquisition",
    description:
      "Examine message consistency between ads and landing pages, intent match, and conversion definition integrity.",
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    name: "Analytics & Tracking Hygiene",
    category: "Data Integrity",
    description:
      "Assess whether key conversion events are tracked consistently without duplicate firings or attribution blind spots.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
  {
    name: "Lead Capture & Follow-Up Flow",
    category: "Post-Conversion Handoff",
    description:
      "Map how inbound enquiries are routed, verified, acknowledged, and handed off to sales or CRM systems.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Prioritized Action Plan",
    category: "Actionable Strategy",
    description:
      "Deliver a clear list of what to fix first based on verified business impact, without generic 50-page clutter.",
    icon: <FileCheck2 className="w-5 h-5 text-white" />,
  },
];

export default function DigitalGrowthAuditPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={digitalGrowthAuditHero.eyebrow}
        h1={digitalGrowthAuditHero.h1}
        p1={digitalGrowthAuditHero.p1}
        p2={digitalGrowthAuditHero.p2}
        primaryButtonText={digitalGrowthAuditHero.primaryButtonText}
        primaryButtonHref={digitalGrowthAuditHero.primaryButtonHref}
        microcopy={digitalGrowthAuditHero.microcopy}
        visualTagSubtitle="Practical Review · No Generic Fluff"
        visualTagTitle="Discovery · Conversion · Tracking"
        visualBadgeText="Digital Growth Diagnosis"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led Audit */}
      <ServiceOverviewSection
        id="digital-growth-audit-overview"
        eyebrow={digitalGrowthAuditOverview.eyebrow}
        h2={digitalGrowthAuditOverview.h2}
        intro={digitalGrowthAuditOverview.intro}
        body={digitalGrowthAuditOverview.body}
        points={digitalGrowthAuditOverview.points}
        closingCopy={digitalGrowthAuditOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Comprehensive digital growth audit inspecting discovery, conversion, and measurement"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="digital-growth-audit-problems"
        eyebrow="WHERE DIGITAL GROWTH STALLS"
        h2="Observable Bottlenecks Between Visits & Revenue"
        intro="When leads stall, teams often guess which channel is at fault. A connected audit identifies whether the break is in traffic quality, page clarity, tracking, or follow-up."
        cards={digitalGrowthAuditProblems}
        gridCols={3}
      />

      {/* 06 Scope / What We Review */}
      <ServiceScopeSection
       variant="stack"
        id="digital-growth-audit-scope"
        eyebrow="AUDIT SCOPE"
        h2="Key Areas Examined Across the Customer Journey"
        intro="We review the critical touchpoints where prospective buyers discover your business, evaluate your offer, and take action."
        cards={digitalGrowthAuditScope}
        scopeNote="Every review is tailored to your business model, available public pages, and any private account access or data exports provided."
      />

      {/* 07 Prioritization Framework / Content Panels */}
      <ServiceContentPanels
        id="digital-growth-audit-priorities"
        eyebrow={digitalGrowthAuditPriorities.eyebrow}
        h2={digitalGrowthAuditPriorities.h2}
        intro={digitalGrowthAuditPriorities.intro}
        panels={digitalGrowthAuditPriorities.findings.map((item) => ({
          title: `[${item.priority}] ${item.title}`,
          description: `${item.whatItMeans} Recommended action: ${item.nextStep}`,
        }))}
        image={decisionsImg}
        imageAlt="Actionable prioritization framework turning audit observations into ordered decisions"
        direction="right"
        supportingNote={digitalGrowthAuditPriorities.closingCopy}
        supportingLink={{
          text: "Explore Analytics & Tracking Services",
          destination: "/services/analytics-tracking",
        }}
      />

      {/* 09 How It Works (Audit Process) */}
      <ServiceProcess
        id="digital-growth-audit-process"
        eyebrow="OUR AUDIT PROCESS"
        h2="A Methodical 5-Step Diagnostic Workflow"
        intro="From business goal definition and visible journey review to evidence validation, opportunity prioritization, and findings walkthrough."
        stages={digitalGrowthAuditProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We separate verified evidence from assumptions at every stage so your team gets actionable clarity rather than unverified speculation."
      />


      {/* 12 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: digitalGrowthAuditWhyBixeltek.eyebrow,
          h2: digitalGrowthAuditWhyBixeltek.h2,
          intro: digitalGrowthAuditWhyBixeltek.intro,
          points: digitalGrowthAuditWhyBixeltek.points,
          closingCopy: digitalGrowthAuditWhyBixeltek.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />
      {/* 14 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Capabilities to Solve Identified Gaps"
        intro="Once growth blockers are prioritized, we provide the specialized engineering, design, and marketing services to fix them."
        cards={digitalGrowthAuditRelatedServices}
        gridCols={3}
      />

      {/* 15 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About the Digital Growth Audit"
        faqs={digitalGrowthAuditFaqs}
      />

      {/* 16 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={digitalGrowthAuditFinalCta.eyebrow}
        h2={digitalGrowthAuditFinalCta.h2}
        intro={digitalGrowthAuditFinalCta.description}
        supportingCopy={digitalGrowthAuditFinalCta.supportingCopy}
        sectionSubtitle="Diagnostic Capabilities & Review Scope"
        tools={auditStackTools}
      />

      {/* 17 Global Footer */}
      <Footer />
    </main>
  );
}

