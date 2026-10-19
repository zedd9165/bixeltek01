import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Technical SEO
import {
  technicalSeoMetadata,
  technicalSeoHero,
  technicalSeoOverview,
  technicalSeoProblems,
  technicalSeoScope,
  technicalSeoDecisions,
  technicalSeoUseCases,
  technicalSeoProcess,
  technicalSeoMeasurement,
  technicalSeoFit,
  technicalSeoWhyChoose,
  technicalSeoInvestmentFactors,
  technicalSeoRelatedServices,
  technicalSeoFaqs,
  technicalSeoFinalCta,
} from "@/data/service/technical-seo";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceUseCaseSection,
  ServiceProcess,
  ServiceSuitabilitySection,
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
import heroImg from "@/assets/a-full-suite-of-SEO-tools.webp";
import overviewImg from "@/assets/All_SEO_data_sources_1d5f013db2.webp";
import decisionsImg from "@/assets/seo-analysis-menu-item-in-all-in-one-seo-1.webp";
import measurementImg from "@/assets/Automate_SEO_insights_d27f27be8d.webp";
import whyChooseImg from "@/assets/Connect_data_from_all_your_SEO_tools_3c4223e73f.webp";

// Icons for Technical SEO Platform Ecosystem & Final CTA
import {
  SiGooglesearchconsole,
  SiGoogleanalytics,
} from "react-icons/si";
import {
  Terminal,
  Server,
  Zap,
  Network,
  FileCheck2,
  Cpu,
  Layers,
  Workflow,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: technicalSeoMetadata.title,
  description: technicalSeoMetadata.description,
  keywords: technicalSeoMetadata.keywords,
  alternates: {
    canonical: technicalSeoMetadata.canonical,
  },
  openGraph: {
    title: technicalSeoMetadata.title,
    description: technicalSeoMetadata.description,
    url: technicalSeoMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technical SEO Technology & Ecosystem Items
const technicalSeoTechnologyItems: TechnologyItem[] = [
  {
    name: "Google Search Console",
    icon: <SiGooglesearchconsole className="w-8 h-8 text-[#4285F4]" />,
    href: "https://search.google.com/search-console/about",
  },
  {
    name: "Google Analytics 4 (GA4)",
    icon: <SiGoogleanalytics className="w-8 h-8 text-[#E37400]" />,
    href: "https://marketingplatform.google.com/about/analytics/",
  },
  {
    name: "Crawl & Indexation Control",
    icon: <Terminal className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
  {
    name: "Canonical & Redirect Routing",
    icon: <Network className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
  {
    name: "JavaScript Rendering & Hydration",
    icon: <Cpu className="w-8 h-8 text-[#F59E0B]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
  {
    name: "Core Web Vitals Performance",
    icon: <Zap className="w-8 h-8 text-[#EC4899]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
  {
    name: "Server Status & Log Diagnostics",
    icon: <Server className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
  {
    name: "JSON-LD Structured Data",
    icon: <FileCheck2 className="w-8 h-8 text-[#06B6D4]" />,
    href: "https://bixeltek.com/services/seo-services/technical-seo",
  },
];

// Curated Technical SEO Capabilities for Final CTA
const technicalSeoStackTools: TechStackItem[] = [
  {
    name: "Crawlability & HTTP Status Codes",
    category: "Search Engine Access",
    description:
      "Eliminating 4xx/5xx errors, redirect loops, and crawl blockers in robots.txt to ensure bots can fetch critical assets.",
    icon: <Server className="w-5 h-5 text-white" />,
  },
  {
    name: "Indexation & Canonical Integrity",
    category: "URL Governance",
    description:
      "Aligning self-referential canonicals, XML sitemaps, and robots directives so search engines pick the preferred URLs.",
    icon: <Network className="w-5 h-5 text-white" />,
  },
  {
    name: "JavaScript SEO & Hydration",
    category: "Modern Web Frameworks",
    description:
      "Validating that client-rendered Next.js or React pages expose complete semantic HTML, metadata, and crawlable links.",
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
  {
    name: "Core Web Vitals Engineering",
    category: "Page Experience & CWV",
    description:
      "Diagnosing real-user LCP, INP, and CLS field data to optimize asset loading, layout stability, and execution latency.",
    icon: <Zap className="w-5 h-5 text-white" />,
  },
  {
    name: "Schema Markup & Entity Architecture",
    category: "Rich Feature Eligibility",
    description:
      "Deploying standard-compliant JSON-LD structured data for Organization, Breadcrumbs, Articles, and Products.",
    icon: <FileCheck2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Migration & URL Restructure Safety",
    category: "Risk Mitigation",
    description:
      "Executing 1:1 redirect mapping, preserving existing equity, and auditing staging environments prior to public launch.",
    icon: <ShieldAlert className="w-5 h-5 text-white" />,
  },
];

export default function TechnicalSeoServicePage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 02 Hero */}
      <ServiceHero
        eyebrow={technicalSeoHero.eyebrow}
        h1={technicalSeoHero.h1}
        p1={technicalSeoHero.p1}
        p2={technicalSeoHero.p2}
        primaryButtonText={technicalSeoHero.primaryButtonText}
        primaryButtonHref={technicalSeoHero.primaryButtonHref}
        microcopy={technicalSeoHero.microcopy}
        visualTagSubtitle="Crawling · Indexing · Core Web Vitals"
        visualTagTitle="Engineering-Led Technical SEO"
        visualBadgeText="Verified Technical SEO"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led Technical SEO */}
      <ServiceOverviewSection
        id="technical-seo-overview"
        eyebrow={technicalSeoOverview.eyebrow}
        h2={technicalSeoOverview.h2}
        intro={technicalSeoOverview.intro}
        body={technicalSeoOverview.body}
        points={technicalSeoOverview.points}
        closingCopy={technicalSeoOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Technical SEO resolving crawling, indexing, rendering and architecture barriers"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="technical-seo-problems"
        eyebrow="COMMON TECHNICAL SEO CHALLENGES"
        h2="Where Search Engines Encounter Website Roadblocks"
        intro="When important pages fail to get indexed or organic traffic drops unexpectedly, the root cause is often access blocks, duplicate signals, or rendering failures."
        cards={technicalSeoProblems}
        gridCols={3}
      />

      {/* 06 Scope / What We Investigate and Fix */}
      <ServiceScopeSection
        id="technical-seo-scope"
        eyebrow={technicalSeoScope.eyebrow}
        h2={technicalSeoScope.h2}
        intro={technicalSeoScope.intro}
        cards={technicalSeoScope.items}
        scopeNote={technicalSeoScope.scopeNote}
      />

      {/* 07 Key Strategic Decisions */}
      <ServiceContentPanels
        id="technical-seo-decisions"
        eyebrow="TECHNICAL ARCHITECTURE DECISIONS"
        h2="Choices That Determine Search Reliability & Scalability"
        intro="Effective technical SEO requires resolving URL indexing policies, evaluating whether crawl budget is genuinely constrained, testing rendering methods, and prioritizing real user performance."
        panels={technicalSeoDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating canonical tags, indexation directives, and JavaScript rendering output"
        direction="right"
        supportingNote="We resolve these questions using verifiable crawl and server evidence so fixes address root causes rather than surface symptoms."
        supportingLink={{
          text: "Explore Full SEO Services",
          destination: "/services/seo-services",
        }}
      />

      {/* 08 Practical Use Cases */}
      <ServiceUseCaseSection
        id="technical-seo-use-cases"
        eyebrow="TECHNICAL SEO USE CASES"
        h2="Technical Solutions Built for Real System Complexities"
        intro="From search-safe website migrations and JavaScript SPA indexing to ecommerce faceted navigation governance and post-release traffic recoveries."
        cards={technicalSeoUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
          examples: uc.successSignals,
        }))}
        badgeLabel="Technical Scenario"
        examplesTitle="Key Success Signals"
      />

      {/* 09 How We Work (Delivery Process) */}
      <ServiceProcess
        id="technical-seo-process"
        eyebrow={technicalSeoProcess.eyebrow}
        h2={technicalSeoProcess.h2}
        intro={technicalSeoProcess.intro}
        stages={technicalSeoProcess.stages.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We translate complex technical audit findings into prioritized developer tickets with clear reproduction steps and verification criteria."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: technicalSeoWhyChoose.eyebrow,
          h2: technicalSeoWhyChoose.h2,
          intro: technicalSeoWhyChoose.intro,
          points: technicalSeoWhyChoose.points,
          closingCopy: technicalSeoWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />


      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Engineering & Organic Growth Capabilities"
        intro="Technical SEO works hand-in-hand with full organic SEO strategy, on-page optimization, local SEO, and custom web development."
        cards={technicalSeoRelatedServices}
        gridCols={3}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Technical SEO"
        faqs={technicalSeoFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={technicalSeoFinalCta.eyebrow}
        h2={technicalSeoFinalCta.h2}
        intro={technicalSeoFinalCta.description}
        supportingCopy={technicalSeoFinalCta.supportingCopy}
        sectionSubtitle="Technical SEO Architecture & Site Health Stack"
        tools={technicalSeoStackTools}
      />
    </main>
  );
}

