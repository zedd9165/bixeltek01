import React from "react";
import type { Metadata } from "next";

// Data Imports
import {
  woocommerceMetadata,
  woocommerceBreadcrumbs,
  woocommerceJumpLinks,
  woocommerceHero,
  woocommerceOverview,
  woocommerceProblems,
  whenYouNeedWooCommerceDevelopment,
  woocommerceCapabilities,
  woocommerceUseCases,
  woocommerceImplementationDecisions,
  woocommerceSystems,
  woocommercePlatformComparison,
  woocommerceTechnologies,
  woocommerceProcess,
  woocommerceInvestment,
  woocommerceWhyChoose,
  woocommercePostLaunch,
  woocommerceRelatedServices,
  woocommerceFAQs,
  woocommerceFinalCTA,
} from "@/data/service/woocommerce";

// Reusable Service Components
import {
  ServiceHero,
  ServicePageNav,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceUseCaseSection,
  ServiceContentPanels,
  ServiceSystemCards,
  ServiceComparisonSection,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceSelectedWork,
  ServiceInvestment,
  ServicePostLaunchSection,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Icons for Tech Ecosystem & Final CTA
import {
  SiWordpress,
  SiWoocommerce,
  SiPhp,
  SiMysql,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";
import {
  Layers,
  Code2,
  Database,
  PlugZap,
  ShieldCheck,
  Gauge,
  ShoppingCart,
  BarChart3,
  Search,
  Lock,
  Workflow,
} from "lucide-react";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Local Assets
import wooHeroImg from "@/assets/woocommerce-industry.webp";
import storeJourneyImg from "@/assets/Flowers Shop Ecommerce Website.png";
import wooOverview from '@/assets/woo-overview.jpg'
import wooControlPanel from '@/assets/woo-controlpanel.webp'
import whyChooseWooImg from "@/assets/why-choose-bixeltek-for-woocommerce.webp";
import wooPostLaunch from '@/assets/woocommerce-postlaunch.webp'

export const metadata: Metadata = {
  title: woocommerceMetadata.title,
  description: woocommerceMetadata.description,
  alternates: {
    canonical: woocommerceMetadata.canonical,
  },
  openGraph: {
    title: woocommerceMetadata.openGraph.title,
    description: woocommerceMetadata.openGraph.description,
    url: woocommerceMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Tools for Final CTA
const wooCtaTools: TechStackItem[] = [
  {
    name: "WordPress & WooCommerce Core",
    category: "Commerce Platform",
    description: "Configured without plugin bloat, keeping database queries lean and core files maintainable.",
    icon: <SiWoocommerce />,
  },
  {
    name: "WooCommerce REST API",
    category: "Operational Sync",
    description: "Reliable webhook dispatching and endpoint syncing for inventory, ERPs, and fulfilment.",
    icon: <PlugZap />,
  },
  {
    name: "Object Caching & Redis",
    category: "Storefront Speed",
    description: "Server-side caching strategies that safeguard dynamic carts and checkout queries.",
    icon: <Gauge />,
  },
  {
    name: "Google Analytics 4 & GTM",
    category: "Analytics Telemetry",
    description: "Verified ecommerce data layer events tracking product views, cart updates, and purchases.",
    icon: <SiGoogleanalytics />,
  },
  {
    name: "Schema & On-Page SEO",
    category: "Search Visibility",
    description: "Product and Offer structured data with clean WordPress taxonomy indexing.",
    icon: <Search />,
  },
  {
    name: "Staging & Update Protocols",
    category: "Security & QA",
    description: "Isolated staging environments with automated backups and regress-testing workflows.",
    icon: <ShieldCheck />,
  },
];

export default function WooCommerceDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero Section */}
      <ServiceHero
        eyebrow={woocommerceHero.eyebrow}
        h1={woocommerceHero.h1}
        p1={woocommerceHero.p1}
        p2={woocommerceHero.p2}
        primaryButtonText={woocommerceHero.primaryButtonText}
        primaryButtonHref={woocommerceHero.primaryButtonHref}
        microcopy={woocommerceHero.microcopy}
        visualImage={wooHeroImg}
        visualTagSubtitle="WooCommerce Storefront Delivery"
        visualTagTitle="WordPress Commerce · Custom Themes · Integrations"
        visualBadgeText="WordPress Enterprise"
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />
      {/* 05 Overview Section */}
      <ServiceOverviewSection
        id="woocommerce-overview"
        eyebrow={woocommerceOverview.eyebrow}
        h2={woocommerceOverview.h2}
        intro={woocommerceOverview.intro}
        body={woocommerceOverview.body}
        closingCopy={woocommerceOverview.closingCopy}
        imageSrc={wooOverview}
        imageAlt="WooCommerce storefront design and content integration"
        direction="left"
      />

      

      {/* 06 Common Challenges */}
      <ServiceProblemSection
        id="woocommerce-challenges"
        eyebrow="COMMON WOOCOMMERCE CHALLENGES"
        h2="Why WooCommerce Stores Need Thoughtful Engineering"
        intro="Plugin bloat, sluggish database queries, brittle updates, and fragmented operational systems can limit store stability if not properly engineered from the beginning."
        cards={woocommerceProblems}
      />
      {/* 08 Capabilities / Scope of Work */}
      <ServiceScopeSection
        id="woocommerce-capabilities"
        eyebrow="WOOCOMMERCE DEVELOPMENT SCOPE"
        h2="Technical Scope of Work Across Storefronts, Plugins & APIs"
        intro="We engineer clean WordPress ecommerce architectures, tailor templates, optimize database queries, and connect critical operational tools."
        cards={woocommerceCapabilities}
        scopeNote="Every project is planned around your catalogue hierarchy, WordPress editorial setup, and operational goals—minimizing plugin dependencies wherever possible."
      />

      {/* 09 Practical WooCommerce Use Cases */}
      {woocommerceUseCases && (
        <ServiceUseCaseSection
          id="woocommerce-use-cases"
          eyebrow="WOOCOMMERCE USE CASES"
          h2="Practical Store Scenarios Where WooCommerce Excels"
          intro="From content-rich brand websites adding ecommerce to stores with complex product configurations and operational syncing, WooCommerce provides deep flexibility."
          cards={woocommerceUseCases}
        />
      )}
    
      {/* 10 Implementation Decisions (Editorial Split) */}
      <ServiceContentPanels
        id="woocommerce-decisions"
        eyebrow="ARCHITECTURAL TRADE-OFFS"
        h2="The Key Implementation Decisions Behind a Reliable WooCommerce Store"
        intro="We evaluate theme capabilities, extension overlap, hosting performance, and maintenance responsibilities before committing to code."
        panels={woocommerceImplementationDecisions.map((d) => ({
          title: d.title,
          description: `${d.context} ${d.consideration}`,
        }))}
        image={wooControlPanel}
        imageAlt="WooCommerce implementation decision architecture"
        direction="left"
        supportingLink={{
          text: "Explore Overarching Ecommerce Solutions",
          destination: "/services/ecommerce-development",
        }}
        supportingNote="We choose maintainable, high-performance solutions that keep your WordPress store secure and easy to manage."
      />

      {/* 11 Connected Systems & Integrations */}
      <ServiceSystemCards
        id="woocommerce-integrations"
        eyebrow="CONNECTED SYSTEMS & INTEGRATIONS"
        h2="Connect WooCommerce With Your Business Operations"
        intro="A reliable ecommerce website cannot live in isolation. We connect WooCommerce with payments, inventory, accounting, CRM, and marketing tools."
        cards={woocommerceSystems}
        supportingNote="Integrations are built with clean webhook pipelines, explicit data ownership, and error-recovery mechanisms."
      />

      {/* 12 WooCommerce vs Custom-Coded Ecommerce Comparison */}
      <ServiceComparisonSection
        id="woocommerce-comparison"
        eyebrow={woocommercePlatformComparison.eyebrow}
        h2={woocommercePlatformComparison.h2}
        intro={woocommercePlatformComparison.intro}
        platformLabel={woocommercePlatformComparison.woocommerceLabel}
        customCodedLabel={woocommercePlatformComparison.customCodedLabel}
        rows={woocommercePlatformComparison.rows}
        platformBestFor={woocommercePlatformComparison.woocommerceBestFor}
        customCodedBestFor={woocommercePlatformComparison.customCodedBestFor}
        closingNote={woocommercePlatformComparison.closingNote}
        pillarHref="/services/ecommerce-development"
        pillarText="Explore Ecommerce Architecture"
        customEcommerceHref="/custom-coded-websites"
        customEcommerceText="Explore Custom Coded Websites"
      />

      {/* 13 Structured Development Process */}
      <ServiceProcess
        id="woocommerce-process"
        eyebrow={woocommerceProcess.eyebrow}
        h2={woocommerceProcess.h2}
        intro="We follow a disciplined process from requirements discovery to staging quality assurance and launch handover."
        stages={woocommerceProcess.stages}
        supportingParagraph="We test payment flows, variant combinations, and integration webhooks in staging before touching production traffic."
      />

      {/* 15 Why Choose Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: woocommerceWhyChoose.eyebrow,
          h2: woocommerceWhyChoose.h2,
          intro: woocommerceWhyChoose.intro,
          image: whyChooseWooImg,
          points: woocommerceWhyChoose.points.map((pt) => ({ title: pt.title })),
          closingCopy: woocommerceWhyChoose.closingCopy,
          ctaText: "Talk to an Expert",
          ctaHref: "#contact",
        }}
        defaultImage={whyChooseWooImg}
      />

      {/* 18 Post-Launch Support & Maintenance */}
      <ServicePostLaunchSection
        id="woocommerce-post-launch"
        eyebrow={woocommercePostLaunch.eyebrow}
        h2={woocommercePostLaunch.h2}
        intro={woocommercePostLaunch.intro}
        items={woocommercePostLaunch.points}
        image={wooPostLaunch}
        ctaText="Plan Store Maintenance"
        ctaHref="#contact"
      />   

      {/* 20 FAQs */}
      <ServiceFAQ
        id="woocommerce-faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About WooCommerce Development"
        faqs={woocommerceFAQs}
      />

      {/* 21 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="contact"
        eyebrow={woocommerceFinalCTA.eyebrow}
        h2={woocommerceFinalCTA.h2}
        intro={woocommerceFinalCTA.description}
        sectionSubtitle="WooCommerce Engineering & Quality Architecture"
        tools={wooCtaTools}
      />

      {/* 22 Global Footer */}
      <Footer />
    </main>
  );
}

