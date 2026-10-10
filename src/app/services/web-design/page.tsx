
import React from "react";
import { Metadata } from "next";

// Data Source of Truth for Web Design
import {
  webDesignMetadata,
  webDesignHeroData,
  websiteProblemData,
  webDesignOverviewData,
  webDesignWhyChooseData,
  webDesignFaqData,
  webDesignFinalOfferData,
  relatedWebServicesData,
} from "@/data/service/webdesing";

// Isolated / Specialized Preview Components for Web Design
import WebDesignShowcaseSection from "@/components/WebDesign/preview/WebDesignWorkShowcase";
import WebDesignScopePreview from "@/components/WebDesign/preview/WebDesignScopePreview";
import WebDesignWebsiteTypesPreview from "@/components/WebDesign/preview/WebDesignWebsiteTypesPreview";
import CroLandingSection from "@/components/WebDesign/preview/CroLandingSection";
import WebDesignConversionPreview from "@/components/WebDesign/preview/WebDesignConversionPreview";
import WebDesignStartingSituationsPreview from "@/components/WebDesign/preview/WebDesignStartingSituationsPreview";
import WebDesignGrowthConnectionPreview from "@/components/WebDesign/preview/WebDesignGrowthConnectionPreview";
import WebDesignProcessPreview from "@/components/WebDesign/preview/WebDesignProcessPreview";
import WebDesignInvestmentPreview from "@/components/WebDesign/preview/WebDesignInvestmentPreview";
import WebDesignBusinessMarketsPreview from "@/components/WebDesign/preview/WebDesignBusinessMarketsPreview";

// Reusable Shared Service Components
import {
  ServiceHero,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceWhyChooseUs,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import TechnologiesSection, {
  TechnologyItem,
} from "@/components/services/common/ServiceTechnologySection";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Assets
import webdevCorporateImg from "@/assets/webdev-corporate-image.jpg";
import whyChooseImg from "@/assets/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import weboverview from '@/assets/webdev-overview.webp'

// Global Layout & Trust Shell Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// React Icons for Technologies Ecosystem & Final CTA
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiWordpress,
  SiShopify,
  SiWoo,
  SiStrapi,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiFigma,
  SiStripe,
  SiGoogleanalytics,
  SiHubspot,
  SiFrappe,
} from "react-icons/si";
import { Code2, Cpu, Database, Globe, Layers, ShieldCheck } from "lucide-react";

// Web Design Technology Ecosystem Items
const webDesignTechnologies: TechnologyItem[] = [
  {
    name: "Next.js 15",
    icon: <SiNextdotjs className="w-6 h-6" />,
    iconColor: "text-black",
  },
  {
    name: "React 19",
    icon: <SiReact className="w-6 h-6" />,
    iconColor: "text-sky-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6" />,
    iconColor: "text-cyan-500",
  },
  {
    name: "WordPress / Headless",
    icon: <SiWordpress className="w-6 h-6" />,
    iconColor: "text-[#21759B]",
  },
  {
    name: "Shopify / Liquid",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
  {
    name: "WooCommerce",
    icon: <SiWoo className="w-6 h-6" />,
    iconColor: "text-purple-500",
  },
  {
    name: "Strapi CMS",
    icon: <SiStrapi className="w-6 h-6" />,
    iconColor: "text-indigo-500",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6" />,
    iconColor: "text-emerald-600",
  },
  {
    name: "GraphQL & REST",
    icon: <SiGraphql className="w-6 h-6" />,
    iconColor: "text-pink-500",
  },
  {
    name: "Vercel & Edge",
    icon: <SiVercel className="w-6 h-6" />,
    iconColor: "text-black",
  },
  {
    name: "Figma UI/UX",
    icon: <SiFigma className="w-6 h-6" />,
    iconColor: "text-purple-400",
  },
];

// Web Design Tech Stack & Architecture for Final CTA (6 items, clean white icons)
const webDesignFinalCtaTools: TechStackItem[] = [
  {
    name: "Next.js & Modern React",
    category: "Frontend Engineering",
    description: "High-performance, SSR & Edge-rendered web experiences optimized for Google Core Web Vitals.",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "TypeScript & Tailwind",
    category: "Design System & UI",
    description: "Strictly typed codebases and modular utility styling ensuring scalable, maintainable design systems.",
    icon: <SiTypescript className="w-5 h-5 text-white" />,
  },
  {
    name: "Headless CMS & APIs",
    category: "Content Architecture",
    description: "Custom content schemas via Strapi, Sanity, or WordPress REST/GraphQL for effortless team publishing.",
    icon: <SiStrapi className="w-5 h-5 text-white" />,
  },
  {
    name: "Shopify & WooCommerce",
    category: "Ecommerce Engines",
    description: "Engineered product discovery, catalog structures, and frictionless checkout conversion paths.",
    icon: <SiShopify className="w-5 h-5 text-white" />,
  },
  {
    name: "Analytics & Event Tracking",
    category: "Measurement & CRO",
    description: "Server-side GTM, GA4 custom event tracking, and heatmap behavioral feedback integration.",
    icon: <SiGoogleanalytics className="w-5 h-5 text-white" />,
  },
  {
    name: "CRM & Automation Sync",
    category: "Pipeline Integration",
    description: "Direct API lead capture, automated form notifications, and seamless Frappe CRM synchronization.",
    icon: <SiFrappe className="w-5 h-5 text-white" />,
  },
];

export const metadata: Metadata = {
  title: webDesignMetadata.title,
  description: webDesignMetadata.description,
  openGraph: {
    title: webDesignMetadata.openGraph.title,
    description: webDesignMetadata.openGraph.description,
  },
  alternates: {
    canonical: webDesignMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function WebDesignPreviewPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 02 Service Hero (Shared Common Component) */}
      <ServiceHero
        eyebrow={webDesignHeroData.eyebrow}
        h1={webDesignHeroData.h1}
        p1={webDesignHeroData.p1}
        p2={webDesignHeroData.p2}
        primaryButtonText={webDesignHeroData.primaryButtonText}
        primaryButtonHref={webDesignHeroData.primaryButtonHref}
        microcopy={webDesignHeroData.microcopy}
        trustStrip={webDesignHeroData.trustStrip}
        visualTagSubtitle="Technical Delivery"
        visualTagTitle="Strategy · Design · Engineering"
        visualBadgeText="Production Ready"
        visualImage={webdevCorporateImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview Section (What is Strategic Web Design) */}
      <ServiceOverviewSection
        id="overview"
        eyebrow={webDesignOverviewData.eyebrow}
        h2={webDesignOverviewData.h2}
        intro={webDesignOverviewData.intro}
        body={webDesignOverviewData.body}
        closingCopy={webDesignOverviewData.closingCopy}
        imageSrc={weboverview}
        imageAlt="Strategic Web Design and Development - Bixeltek"
        direction="left"
      />

      {/* 05 Selected Work Showcase */}
      <WebDesignShowcaseSection />

      {/* 06 Problems Section (Shared Common Component - Dynamic Grid Cols) */}
      <ServiceProblemSection
        id="problems"
        eyebrow={websiteProblemData.eyebrow}
        h2={websiteProblemData.h2}
        intro={websiteProblemData.intro}
        cards={websiteProblemData.cards}
        gridCols={3}
        mdGridCols={2}
        lgGridCols={3}
      />

      {/* 07 Why Choose Bixeltek for Web Design */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={webDesignWhyChooseData}
        defaultImage={whyChooseImg}
      />

      {/* 08 Scope / What's Included */}
      <WebDesignScopePreview />

      {/* 09 Website Types */}
      <WebDesignWebsiteTypesPreview />

      {/* 10 Related Services (Shared Common Component) */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow={relatedWebServicesData.eyebrow}
        h2={relatedWebServicesData.h2}
        intro={relatedWebServicesData.intro}
        cards={relatedWebServicesData.cards}
        gridCols={3}
      />

      {/* 11 CRO Landing Page Development */}
      <CroLandingSection />

      {/* 12 Conversion Journey */}
      <WebDesignConversionPreview />

      {/* 13 Technology Ecosystem (Shared Common Component) */}
      <TechnologiesSection
        id="technology"
        eyebrow="ENGINEERED WITH MODERN TECH"
        h2="Platforms & Frameworks Built Around What Your Website Needs"
        intro="From high-speed headless architectures and Next.js applications to flexible WordPress publishing and Shopify commerce, we build on proven technologies tailored to your business."
        technologies={webDesignTechnologies}
        ctaText="Need custom API integrations, legacy migrations, or headless architecture?"
        ctaButtonText="Get in Touch"
        ctaHref="#website-project"
      />

      {/* 14 Starting Situations */}
      <WebDesignStartingSituationsPreview />

      {/* 15 Growth Connection */}
      <WebDesignGrowthConnectionPreview />

      {/* 16 Process */}
      <WebDesignProcessPreview />

      {/* 17 Investment */}
      <WebDesignInvestmentPreview />

      {/* 18 Business Markets */}
      <WebDesignBusinessMarketsPreview />

      {/* 19 FAQs (Shared Common Component) */}
      <ServiceFAQ
        id="faqs"
        h2={webDesignFaqData.h2}
        faqs={webDesignFaqData.faqs}
      />

      {/* 20 Final CTA & Project Consultation (Shared Common Component) */}
      <ServiceFinalCTA
        id="website-project"
        eyebrow={webDesignFinalOfferData.eyebrow}
        h2={webDesignFinalOfferData.h2}
        intro={webDesignFinalOfferData.intro}
        sectionSubtitle="Engineering & Architecture Stack"
        tools={webDesignFinalCtaTools}
      />

    </main>
  );
}
