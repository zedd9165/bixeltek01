import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for On-Page SEO
import {
  onPageSeoMetadata,
  onPageSeoHero,
  onPageSeoOverview,
  onPageSeoProblems,
  onPageSeoScope,
  onPageSeoDecisions,
  onPageSeoUseCases,
  onPageSeoProcess,
  onPageSeoMeasurement,
  onPageSeoFit,
  onPageSeoWhyChoose,
  onPageSeoInvestmentFactors,
  onPageSeoRelatedServices,
  onPageSeoFaqs,
  onPageSeoFinalCta,
} from "@/data/service/on-page-seo";

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
import heroImg from "@/assets/seo-reporting-dashboard-seoreseller-1024x683.png";
import overviewImg from "@/assets/seo-overview.png";
import decisionsImg from "@/assets/seo-analytics-dashboard.png";
import measurementImg from "@/assets/Hero_SEO_Dashboard_Template_a958c5b551.webp";
import whyChooseImg from "@/assets/SEO-SERVICESToronto-1.webp";

// Icons for On-Page SEO Platform Ecosystem & Final CTA
import {
  SiGooglesearchconsole,
  SiGoogleanalytics,
} from "react-icons/si";
import {
  Search,
  FileText,
  Heading,
  Link2,
  FileCheck2,
  Sparkles,
  BarChart3,
  Workflow,
  LayoutTemplate,
} from "lucide-react";

export const metadata: Metadata = {
  title: onPageSeoMetadata.title,
  description: onPageSeoMetadata.description,
  keywords: onPageSeoMetadata.keywords,
  alternates: {
    canonical: onPageSeoMetadata.canonical,
  },
  openGraph: {
    title: onPageSeoMetadata.title,
    description: onPageSeoMetadata.description,
    url: onPageSeoMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// On-Page SEO Technology & Ecosystem Items
const onPageSeoTechnologyItems: TechnologyItem[] = [
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
    name: "Search Intent Alignment",
    icon: <Search className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
  {
    name: "Metadata & Snippet Precision",
    icon: <FileText className="w-8 h-8 text-[#F59E0B]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
  {
    name: "Heading Hierarchy & Structure",
    icon: <Heading className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
  {
    name: "Internal Authority Linking",
    icon: <Link2 className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
  {
    name: "Structured Data & Schema",
    icon: <FileCheck2 className="w-8 h-8 text-[#06B6D4]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
  {
    name: "Organic Conversion Architecture",
    icon: <BarChart3 className="w-8 h-8 text-[#EC4899]" />,
    href: "https://bixeltek.com/services/seo-services/on-page-seo",
  },
];

// Curated On-Page SEO Capabilities for Final CTA
const onPageSeoStackTools: TechStackItem[] = [
  {
    name: "Search Intent Mapping",
    category: "Relevance Strategy",
    description:
      "Aligning priority keywords with the exact format buyers expect: informational guides, commercial comparisons, or service pages.",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    name: "Title & Meta Snippet Optimization",
    category: "Search Appearance",
    description:
      "Crafting concise, descriptive titles and value-driven meta descriptions engineered to improve organic click-through rates.",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    name: "Heading & Content Hierarchy",
    category: "Semantic Information Architecture",
    description:
      "Structuring content from H1 to H3 so readers and search engine crawlers can scan, understand, and navigate effortlessly.",
    icon: <Heading className="w-5 h-5 text-white" />,
  },
  {
    name: "Contextual Internal Linking",
    category: "Site Architecture & Authority Flow",
    description:
      "Connecting related services, products, and informational guides with descriptive anchor text that aids crawling and discovery.",
    icon: <Link2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Structured Data & Schema Validation",
    category: "Machine-Readable Entities",
    description:
      "Implementing and validating Article, FAQ, Product, and Service schema to qualify pages for eligible rich snippets.",
    icon: <FileCheck2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Conversion & Landing Experience",
    category: "Post-Click Journey",
    description:
      "Ensuring organic visitors encounter clear value propositions, trust signals, and prominent next steps to enquire or buy.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
];

export default function OnPageSeoServicePage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 02 Hero */}
      <ServiceHero
        eyebrow={onPageSeoHero.eyebrow}
        h1={onPageSeoHero.h1}
        p1={onPageSeoHero.p1}
        p2={onPageSeoHero.p2}
        primaryButtonText={onPageSeoHero.primaryButtonText}
        primaryButtonHref={onPageSeoHero.primaryButtonHref}
        microcopy={onPageSeoHero.microcopy}
        visualTagSubtitle="Content Structure · Internal Linking"
        visualTagTitle="Intent Mapping · Click-Through Velocity"
        visualBadgeText="Verified On-Page SEO"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led On-Page SEO */}
      <ServiceOverviewSection
        id="on-page-seo-overview"
        eyebrow={onPageSeoOverview.eyebrow}
        h2={onPageSeoOverview.h2}
        intro={onPageSeoOverview.intro}
        body={onPageSeoOverview.body}
        points={onPageSeoOverview.points}
        closingCopy={onPageSeoOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="On-page SEO structuring content, headings, and internal links for search relevance"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="on-page-seo-problems"
        eyebrow="COMMON PAGE-LEVEL SEO ISSUES"
        h2="Where Website Pages Fall Short in Organic Search"
        intro="When pages receive impressions without clicks or traffic without conversions, the issue is often search intent mismatches, buried details, or competing URLs."
        cards={onPageSeoProblems}
        gridCols={3}
      />

      {/* 06 Scope / What We Optimize */}
      <ServiceScopeSection
        id="on-page-seo-scope"
        eyebrow={onPageSeoScope.eyebrow}
        h2={onPageSeoScope.h2}
        intro={onPageSeoScope.intro}
        cards={onPageSeoScope.items}
        scopeNote={onPageSeoScope.scopeNote}
      />

      {/* 07 Key Strategic Decisions */}
      <ServiceContentPanels
        id="on-page-seo-decisions"
        eyebrow="STRATEGIC PAGE DECISIONS"
        h2="Trade-Offs That Determine Organic Performance"
        intro="Effective on-page optimization requires clear decisions around updating vs creating pages, real content depth vs keyword stuffing, and developer dependencies."
        panels={onPageSeoDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating search intent mapping, page hierarchy, and schema validation"
        direction="right"
        supportingNote="We resolve these questions during discovery so that editorial revisions create genuine clarity rather than keyword clutter."
        supportingLink={{
          text: "Explore Full SEO Services",
          destination: "/services/seo-services",
        }}
      />

      {/* 08 Practical Use Cases */}
      <ServiceUseCaseSection
        id="on-page-seo-use-cases"
        eyebrow="ON-PAGE SEO USE CASES"
        h2="Optimization Tailored to Your Specific Website Challenge"
        intro="From B2B service firms and ecommerce stores to sites resolving keyword cannibalization and multilingual targeting."
        cards={onPageSeoUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
          examples: uc.successSignals,
        }))}
        badgeLabel="Optimization Scenario"
        examplesTitle="Key Success Signals"
      />

      {/* 09 How We Work (Delivery Process) */}
      <ServiceProcess
        id="on-page-seo-process"
        eyebrow={onPageSeoProcess.eyebrow}
        h2={onPageSeoProcess.h2}
        intro={onPageSeoProcess.intro}
        stages={onPageSeoProcess.stages.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We prioritize priority URLs with clear business intent first, implementing editorial and technical improvements methodically."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: onPageSeoWhyChoose.eyebrow,
          h2: onPageSeoWhyChoose.h2,
          intro: onPageSeoWhyChoose.intro,
          points: onPageSeoWhyChoose.points,
          closingCopy: onPageSeoWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Search & Digital Capabilities"
        intro="On-page SEO pairs directly with technical SEO, local SEO, conversion rate optimization, and custom web development."
        cards={onPageSeoRelatedServices}
        gridCols={3}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About On-Page SEO"
        faqs={onPageSeoFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={onPageSeoFinalCta.eyebrow}
        h2={onPageSeoFinalCta.h2}
        intro={onPageSeoFinalCta.description}
        supportingCopy={onPageSeoFinalCta.supportingCopy}
        sectionSubtitle="On-Page SEO Architecture & Organic Growth Stack"
        tools={onPageSeoStackTools}
      />

    </main>
  );
}

