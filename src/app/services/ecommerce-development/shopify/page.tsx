import React from "react";
import type { Metadata } from "next";

// Data Imports
import {
  shopifyMetadata,
  shopifyBreadcrumbs,
  shopifyJumpLinks,
  shopifyHero,
  shopifyProblems,
  shopifyOverview,
  shopifyPlatformFit,
  whenYouNeedShopifyDevelopment,
  shopifyScope,
  shopifyUseCases,
  shopifyImplementationDecisions,
  shopifyPlatformComparison,
  shopifySeoAndQa,
  shopifyTechnologies,
  shopifyProcess,
  shopifyWhyChoose,
  shopifyInvestmentFactors,
  shopifyRelatedServices,
  shopifyFaqs,
  shopifyFinalCta,
} from "@/data/service/shopify";

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
  ServiceComparisonSection,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceSelectedWork,
  ServiceInvestment,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import TechnologiesSection from "@/components/services/common/ServiceTechnologySection";
import type { TechnologyItem } from "@/components/services/common/ServiceTechnologySection";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Icons for Tech Ecosystem & Final CTA
import {
  SiShopify,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiMeta,
} from "react-icons/si";
import {
  ShoppingBag,
  Code2,
  Workflow,
  Search,
  Cpu,
  Database,
  Mail,
} from "lucide-react";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Local Assets
import shopifyHeroImg from "@/assets/shopify-industry.webp";
import storeJourneyImg from "@/assets/shopify-overview.jpg";
import shopifyPanels from '@/assets/shopify-ui-components-visuals.png'
import whyChooseShopifyImg from "@/assets/why-choose-bixeltek-for-shopify.webp";

export const metadata: Metadata = {
  title: shopifyMetadata.title,
  description: shopifyMetadata.description,
  keywords: shopifyMetadata.keywords,
  alternates: {
    canonical: shopifyMetadata.canonical,
  },
  openGraph: {
    title: shopifyMetadata.title,
    description: shopifyMetadata.description,
    url: shopifyMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Stack Adaptations for Honeycomb Section
const shopifyHoneycombTech: TechnologyItem[] = [
  {
    name: "Shopify OS 2.0",
    icon: <SiShopify />,
    iconColor: "text-[#95BF47]",
    href: "https://shopify.dev/docs/themes",
  },
  {
    name: "Liquid Templates",
    icon: <Code2 className="w-full h-full text-blue-500" />,
    href: "https://shopify.dev/docs/api/liquid",
  },
  {
    name: "GraphQL Storefront API",
    icon: <Cpu className="w-full h-full text-pink-500" />,
    href: "https://shopify.dev/docs/api/storefront",
  },
  {
    name: "Checkout Extensibility",
    icon: <ShoppingBag className="w-full h-full text-purple-500" />,
    href: "https://shopify.dev/docs/apps/checkout",
  },
  {
    name: "Google Analytics 4",
    icon: <SiGoogleanalytics />,
    iconColor: "text-[#E37400]",
    href: "https://analytics.google.com",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager />,
    iconColor: "text-[#246FDB]",
    href: "https://tagmanager.google.com",
  },
  {
    name: "Meta Conversions API",
    icon: <SiMeta />,
    iconColor: "text-[#0081FB]",
  },
  {
    name: "Klaviyo & CRM",
    icon: <Mail className="w-full h-full text-indigo-500" />,
  },
  {
    name: "Webhooks & Automation",
    icon: <Workflow className="w-full h-full text-amber-500" />,
  },
  {
    name: "ERP & Inventory Sync",
    icon: <Database className="w-full h-full text-emerald-500" />,
  },
];

// Tools for Final CTA
const shopifyCtaTools: TechStackItem[] = [
  {
    name: "Shopify Online Store 2.0",
    category: "Storefront & Theme",
    description: "Modular sections, JSON templates, and app blocks without theme clutter.",
    icon: <SiShopify />,
  },
  {
    name: "GraphQL & Webhooks",
    category: "Data Connections",
    description: "Reliable synchronization between Shopify Admin, ERPs, and fulfillment pipelines.",
    icon: <Workflow />,
  },
  {
    name: "Google Analytics 4 & GTM",
    category: "Conversion Funnels",
    description: "Validated purchase, checkout, and cart interaction telemetry.",
    icon: <SiGoogleanalytics />,
  },
  {
    name: "Meta Conversions API (CAPI)",
    category: "Paid Attribution",
    description: "Server-side event dispatching for high-signal ad optimization.",
    icon: <SiMeta />,
  },
  {
    name: "SEO Canonical & Schema",
    category: "Organic Visibility",
    description: "Clean URL structure, 301 redirect mapping, and Product JSON-LD schema.",
    icon: <Search />,
  },
  {
    name: "Checkout Extensibility",
    category: "Checkout Mechanics",
    description: "App-based checkout UI and functions tailored to plan entitlements.",
    icon: <ShoppingBag />,
  },
];

export default function ShopifyDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      <Header/>

      {/* 02 Hero Section */}
      <ServiceHero
        eyebrow={shopifyHero.eyebrow}
        h1={shopifyHero.h1}
        p1={shopifyHero.p1}
        p2={shopifyHero.p2}
        primaryButtonText={shopifyHero.primaryButtonText}
        primaryButtonHref={shopifyHero.primaryButtonHref}
        microcopy={shopifyHero.microcopy}
        visualImage={shopifyHeroImg}
        visualTagSubtitle="Shopify Storefront Delivery"
        visualTagTitle="Theme Customization · Integrations · Architecture"
        visualBadgeText="Production Tested"
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      <ServiceOverviewSection
        id="shopify-overview"
        eyebrow={shopifyOverview.eyebrow}
        h2={shopifyOverview.h2}
        intro={shopifyOverview.intro}
        body={shopifyOverview.body}
        closingCopy={shopifyOverview.closingCopy}
        imageSrc={storeJourneyImg}
        imageAlt="Shopify storefront design and architecture preview"
        direction="left"
      />


         <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Digital Capabilities That Complement Your Store"
        intro="An online store flourishes when web development, search visibility, paid ad attribution, and conversion rate optimization work together seamlessly."
        cards={shopifyRelatedServices}
      />

      {/* 09 Capabilities / Scope of Work */}
      <ServiceScopeSection
        id="shopify-capabilities"
        eyebrow="SHOPIFY DEVELOPMENT SCOPE"
        h2="Technical Scope of Work Across Storefronts, Migrations & APIs"
        intro="We handle store setups, deep theme refactors, migration continuity, and systems integration with a focus on code maintainability and commercial reliability."
        cards={shopifyScope}
        scopeNote="Every project is scoped around your catalogue hierarchy, operational systems, and commerce goals—avoiding unnecessary bespoke code where native configuration suffices."
      />

      {/* 10 Practical Shopify Use Cases */}
      {shopifyUseCases && (
        <ServiceUseCaseSection
          id="shopify-use-cases"
          eyebrow="SHOPIFY STORE SCENARIOS"
          h2="Practical Store Scenarios Where Shopify Excels"
          intro="From direct-to-consumer store launches to catalogue expansions and operational systems sync, we build around how your business sells."
          cards={shopifyUseCases}
        />
      )}

      {/* 11 Implementation Decisions & Trade-Offs (Editorial Split - 4 Panels) */}
      <ServiceContentPanels
        id="shopify-decisions"
        eyebrow="ARCHITECTURAL TRADE-OFFS"
        h2="The Key Implementation Decisions Behind a Reliable Shopify Store"
        intro="We evaluate your store's requirements, platform limitations and long-term maintenance needs before choosing the right implementation approach."
        panels={shopifyImplementationDecisions.map((d) => ({
          title: d.title,
          description: `${d.context} ${d.consideration}`,
        }))}
        image={shopifyPanels}
        imageAlt="Shopify implementation decision architecture"
        direction="right"
        supportingLink={{
          text: "Explore Our Ecommerce Development Solutions",
          destination: "/services/ecommerce-development",
        }}
        supportingNote="We choose the simplest maintainable solution that meets your business requirements."
      />

      {/* 12 Shopify vs Custom-Coded Ecommerce Comparison */}
      <ServiceComparisonSection
        id="shopify-comparison"
        eyebrow={shopifyPlatformComparison.eyebrow}
        h2={shopifyPlatformComparison.h2}
        intro={shopifyPlatformComparison.intro}
        platformLabel={shopifyPlatformComparison.platformLabel}
        customCodedLabel={shopifyPlatformComparison.customCodedLabel}
        rows={shopifyPlatformComparison.rows}
        platformBestFor={shopifyPlatformComparison.platformBestFor}
        customCodedBestFor={shopifyPlatformComparison.customCodedBestFor}
        closingNote={shopifyPlatformComparison.closingNote}
        pillarHref="/services/ecommerce-development"
        pillarText="Explore Ecommerce Architecture"
        customEcommerceHref="/custom-coded-websites"
        customEcommerceText="Explore Custom Coded Websites"
      />

      {/* 14 Technology & Integration Ecosystem (Honeycomb Cluster) */}
      <TechnologiesSection
        id="shopify-integrations"
        eyebrow="TECHNOLOGY & INTEGRATIONS"
        h2="Connected Systems Built on Shopify's Modern Architecture"
        intro="We connect your Shopify storefront to your ERP, CRM, fulfilment, and analytics infrastructure via standard APIs, webhooks, and theme app extensions."
        technologies={shopifyHoneycombTech}
        centerTitle="Shopify Core"
        centerSubtitle="OS 2.0 & APIs"
        centerIcon={<SiShopify className="text-white" />}
        ctaTitle="Have proprietary or third-party systems?"
        ctaText="We connect custom APIs, ERP software, and marketing platforms directly into Shopify's event ecosystem."
        ctaButtonText="Get In Touch"
        ctaHref="#final-cta"
      />

      {/* 15 Structured Delivery Process */}
      <ServiceProcess
        id="shopify-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Step-by-Step Shopify Implementation Workflow"
        intro="From requirement analysis through schema structure and payment verification, our workflow ensures seamless launch delivery."
        stages={shopifyProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We believe disciplined launch checks, staging validation, and documented handovers are the foundations of long-term store stability."
      />

      {/* 16 Why Choose Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: shopifyWhyChoose.eyebrow,
          h2: shopifyWhyChoose.h2,
          intro: shopifyWhyChoose.intro,
          image: whyChooseShopifyImg,
          points: shopifyWhyChoose.points.map((pt) => ({ title: pt.title })),
          closingCopy: shopifyWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseShopifyImg}
      />

      {/* 20 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About Shopify Development with Bixeltek"
        faqs={shopifyFaqs}
      />

      {/* 21 Final CTA & Interactive Contact Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={shopifyFinalCta.eyebrow}
        h2={shopifyFinalCta.h2}
        intro={shopifyFinalCta.description}
        sectionSubtitle="Technology & Verification Architecture"
        tools={shopifyCtaTools}
      />
    <Footer/>
    </main>
  );
}

