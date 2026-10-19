import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Local SEO
import {
  localSeoMetadata,
  localSeoHero,
  localSeoOverview,
  localSeoProblems,
  localSeoScope,
  localSeoDecisions,
  localSeoUseCases,
  localSeoProcess,
  localSeoMeasurement,
  localSeoFit,
  localSeoWhyChoose,
  localSeoInvestmentFactors,
  localSeoRelatedServices,
  localSeoFaqs,
  localSeoFinalCta,
} from "@/data/service/local-seo";

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
import heroImg from "@/assets/Local-SEO-Dashboard-Customize.webp";
import overviewImg from "@/assets/local-seo-services-1024x990.webp";
import decisionsImg from "@/assets/gmb-dasboard-seoreseller-1-1024x683.png";
import measurementImg from "@/assets/seo-reporting-dashboard-seoreseller-1024x683.png";
import whyChooseImg from "@/assets/seo-overview.png";

// Icons for Local SEO Ecosystem & Final CTA
import {
  SiGooglemaps,
  SiGoogleanalytics,
  SiGooglesearchconsole,
} from "react-icons/si";
import {
  MapPin,
  Building2,
  Star,
  PhoneCall,
  Search,
  FileCheck2,
  Workflow,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: localSeoMetadata.title,
  description: localSeoMetadata.description,
  keywords: localSeoMetadata.keywords,
  alternates: {
    canonical: localSeoMetadata.canonical,
  },
  openGraph: {
    title: localSeoMetadata.title,
    description: localSeoMetadata.description,
    url: localSeoMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Local SEO Platform & Technology Ecosystem Items
const localSeoTechnologyItems: TechnologyItem[] = [
  {
    name: "Google Business Profile",
    icon: <SiGooglemaps className="w-8 h-8 text-[#4285F4]" />,
    href: "https://www.google.com/business/",
  },
  {
    name: "Google Maps Platform",
    icon: <MapPin className="w-8 h-8 text-[#EA4335]" />,
    href: "https://maps.google.com/",
  },
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
    name: "Local Citation Accuracy",
    icon: <Building2 className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/seo-services/local-seo",
  },
  {
    name: "Reputation & Review Workflows",
    icon: <Star className="w-8 h-8 text-[#F59E0B]" />,
    href: "https://bixeltek.com/services/seo-services/local-seo",
  },
  {
    name: "Local Call & Lead Tracking",
    icon: <PhoneCall className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/seo-services/local-seo",
  },
  {
    name: "LocalBusiness Schema Markup",
    icon: <FileCheck2 className="w-8 h-8 text-[#06B6D4]" />,
    href: "https://bixeltek.com/services/seo-services/local-seo",
  },
];

// Curated Local SEO Stack Capabilities for Final CTA
const localSeoStackTools: TechStackItem[] = [
  {
    name: "Google Business Profile Hygiene",
    category: "Map Pack Visibility",
    description:
      "Accurate primary categories, service menus, verified hours, geo-tagged imagery, and verified address handling.",
    icon: <MapPin className="w-5 h-5 text-white" />,
  },
  {
    name: "Service-Area & Location Pages",
    category: "Organic Search Relevance",
    description:
      "Purposeful location landing pages with distinct local service context, staff information, and booking actions.",
    icon: <Compass className="w-5 h-5 text-white" />,
  },
  {
    name: "LocalBusiness Structured Data",
    category: "Schema & Technical Markup",
    description:
      "Standard-compliant JSON-LD markup validating business name, address, phone (NAP), opening hours, and service areas.",
    icon: <FileCheck2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Citation & Directory Governance",
    category: "Authority & NAP Consistency",
    description:
      "Cleaning duplicate listings, outdated phone numbers, and address mismatches across high-trust local directories.",
    icon: <Building2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Policy-Compliant Review Workflows",
    category: "Trust & Social Proof",
    description:
      "Ethical post-service review request cadences and structured response processes without gating or incentives.",
    icon: <Star className="w-5 h-5 text-white" />,
  },
  {
    name: "Local Call & Conversion Attribution",
    category: "Measurement & Reporting",
    description:
      "Distinguishing profile calls, direction requests, website clicks, and qualified inbound leads with UTM parameters.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
];

export default function LocalSeoServicePage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 02 Hero */}
      <ServiceHero
        eyebrow={localSeoHero.eyebrow}
        h1={localSeoHero.h1}
        p1={localSeoHero.p1}
        p2={localSeoHero.p2}
        primaryButtonText={localSeoHero.primaryButtonText}
        primaryButtonHref={localSeoHero.primaryButtonHref}
        microcopy={localSeoHero.microcopy}
        visualTagSubtitle="Google Business Profile · Maps Visibility"
        visualTagTitle="Local Discovery · Real Leads"
        visualBadgeText="Verified Local SEO"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led Local SEO */}
      <ServiceOverviewSection
        id="local-seo-overview"
        eyebrow={localSeoOverview.eyebrow}
        h2={localSeoOverview.h2}
        intro={localSeoOverview.intro}
        body={localSeoOverview.body}
        points={localSeoOverview.points}
        closingCopy={localSeoOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Local SEO connecting discovery to customer calls, visits and enquiries"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="local-seo-problems"
        eyebrow="COMMON LOCAL SEARCH CHALLENGES"
        h2="Where Local Search Breaks Down Between Maps & Revenue"
        intro="When local visibility falls short, the issue may be incomplete categories, duplicate listings, unhelpful location pages, or inconsistent review management."
        cards={localSeoProblems}
        gridCols={3}
      />

      {/* 06 Scope / What We Work On */}
      <ServiceScopeSection
        id="local-seo-scope"
        eyebrow={localSeoScope.eyebrow}
        h2={localSeoScope.h2}
        intro={localSeoScope.intro}
        cards={localSeoScope.items}
        scopeNote={localSeoScope.scopeNote}
      />

      {/* 07 Key Architectural & Strategy Decisions */}
      <ServiceContentPanels
        id="local-seo-decisions"
        eyebrow="LOCAL STRATEGY DECISIONS"
        h2="Choices That Protect Your Business Profile & Search Performance"
        intro="Effective local SEO requires early decisions around storefront vs service-area classification, multi-location structures, authentic review cadences, and realistic reporting."
        panels={localSeoDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating Google Business Profile settings, service area boundaries, and location pages"
        direction="right"
        supportingNote="We resolve these questions during discovery so that local search work builds durable prominence without violating platform guidelines."
        supportingLink={{
          text: "Explore Full SEO Services",
          destination: "/services/seo-services",
        }}
      />

      {/* 08 Practical Use Cases */}
      <ServiceUseCaseSection
        id="local-seo-use-cases"
        eyebrow="LOCAL SEO USE CASES"
        h2="Local Search Tailored to How Your Business Operates"
        intro="From medical practices and storefront retailers to multi-location franchises and home service businesses with mobile teams."
        cards={localSeoUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
          examples: uc.successSignals,
        }))}
        badgeLabel="Local Business Scenario"
        examplesTitle="Key Success Signals"
      />

      {/* 09 How We Work (Delivery Process) */}
      <ServiceProcess
        id="local-seo-process"
        eyebrow={localSeoProcess.eyebrow}
        h2={localSeoProcess.h2}
        intro={localSeoProcess.intro}
        stages={localSeoProcess.stages.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We sequence improvements to resolve core profile and data conflicts first before creating new location pages or expanding local distribution."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: localSeoWhyChoose.eyebrow,
          h2: localSeoWhyChoose.h2,
          intro: localSeoWhyChoose.intro,
          points: localSeoWhyChoose.points,
          closingCopy: localSeoWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Digital & Marketing Capabilities"
        intro="Local SEO works in tandem with full organic SEO, Google Ads management, conversion rate optimization, and website development."
        cards={localSeoRelatedServices}
        gridCols={3}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Local SEO"
        faqs={localSeoFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={localSeoFinalCta.eyebrow}
        h2={localSeoFinalCta.h2}
        intro={localSeoFinalCta.description}
        supportingCopy={localSeoFinalCta.supportingCopy}
        sectionSubtitle="Local SEO Architecture & Growth Stack"
        tools={localSeoStackTools}
      />
    </main>
  );
}

