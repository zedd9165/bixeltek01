import React from "react";
import { Metadata } from "next";

// Data Source of Truth for Ecommerce
import {
  ecommercePreviewMetadata,
  ecommercePageNavigationData,
  ecommerceHeroPreviewData,
  ecommerceSelectedWorkPreviewData,
  ecommerceProblemPreviewData,
  ecommerceScopePreviewData,
  ecommercePlatformsPreviewData,
  storeExperiencePreviewData,
  connectedSystemsPreviewData,
  ecommerceProcessPreviewData,
  ecommercePostLaunchPreviewData,
  ecommerceInvestmentPreviewData,
  ecommerceRelatedServicesPreviewData,
  ecommerceFaqPreviewData,
  ecommerceFinalOfferPreviewData,
  ecommerceWhyChoosePreviewData,
} from "@/data/service/ecom";

// Generic Data-Driven Reusable Service Components
import {
  ServiceHero,
  ServiceProblemSection,
  ServiceScopeSection,
  ServicePlatformSection,
  ServiceContentPanels,
  ServiceSystemCards,
  ServiceProcess,
  ServicePostLaunchSection,
  ServiceWhyChooseUs,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import TechnologiesSection, {
  TechnologyItem,
} from "@/components/services/common/ServiceTechnologySection";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";
import ServiceWhyChoose from "@/components/services/common/ServiceWhyChooseUs";

import {
  SiMedusa,
  SiNextdotjs,
  SiShopify,
  SiWoo,
  SiWordpress,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiVercel,
  SiFigma,
  SiStripe,
  SiGoogleanalytics,
  SiStrapi,
  SiRazorpay,
} from "react-icons/si";
import { Code2 } from "lucide-react";

import {
  
} from "react-icons/si";
import { ShoppingCart } from "lucide-react";

const ecommerceTechnologies: TechnologyItem[] = [
  {
    name: "Shopify & Plus",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
  {
    name: "WooCommerce",
    icon: <SiWoo className="w-6 h-6" />,
    iconColor: "text-purple-500",
  },
  {
    name: "Next.js Commerce",
    icon: <SiNextdotjs className="w-6 h-6" />,
    iconColor: "text-black",
  },
  {
    name: "Medusa.js",
    icon: <SiMedusa className="w-6 h-6" />,
    iconColor: "text-indigo-500",
  },
  {
    name: "Stripe",
    icon: <SiStripe className="w-6 h-6" />,
    iconColor: "text-indigo-600",
  },
  {
    name: "Klaviyo & Retention",
    icon: <SiNodedotjs className="w-6 h-6" />,
    iconColor: "text-amber-500",
  },
  {
    name: "GA4 & Ecom Tracking",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    iconColor: "text-amber-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6" />,
    iconColor: "text-cyan-500",
  },
  {
    name: "React",
    icon: <SiReact className="w-6 h-6" />,
    iconColor: "text-sky-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Strapi / Sanity",
    icon: <SiStrapi className="w-6 h-6" />,
    iconColor: "text-purple-600",
  },
  {
    name: "Custom Checkout & ERP",
    icon: <ShoppingCart className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
];

const ecomTechTools: TechStackItem[] = [
  {
    name: "Shopify",
    category: "Ecommerce CRO",
    description: "Optimizing product discovery, merchandising, cart flows, and checkout experiences.",
    icon: <SiShopify className="w-5 h-5 text-emerald-500" />,
  },
  {
    name: "WooCommerce",
    category: "Ecommerce CRO",
    description: "Improving storefront journeys, product pages, cart behaviour, and purchase flows.",
    icon: <SiWoo className="w-5 h-5 text-purple-500" />,
  },
  {
    name: "WordPress",
    category: "Content & Lead Gen",
    description: "Optimizing business websites, landing pages, forms, and lead-generation journeys.",
    icon: <SiWordpress className="w-5 h-5 text-blue-500" />,
  },
  {
    name: "Next.js",
    category: "Custom Web Experiences",
    description: "Building and optimizing high-performance conversion experiences with custom development.",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "Medusa",
    category: "Headless Commerce",
    description: "Optimizing flexible commerce experiences across custom storefronts and purchase journeys.",
    icon: <SiMedusa className="w-5 h-5 text-indigo-400" />,
  },
  {
    name: "Custom Web Applications",
    category: "Custom Experiences",
    description: "Improving conversion flows across business-specific websites, portals, and web applications.",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
  },
];

export const metadata: Metadata = {
  title: ecommercePreviewMetadata.title,
  description: ecommercePreviewMetadata.description,
  openGraph: {
    title: ecommercePreviewMetadata.openGraph.title,
    description: ecommercePreviewMetadata.openGraph.description,
  },
  alternates: {
    canonical: ecommercePreviewMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function EcommercePreviewPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={ecommerceHeroPreviewData.eyebrow}
        h1={ecommerceHeroPreviewData.h1}
        p1={ecommerceHeroPreviewData.p1}
        p2={ecommerceHeroPreviewData.p2}
        primaryButtonText={ecommerceHeroPreviewData.primaryButtonText}
        primaryButtonHref={ecommerceHeroPreviewData.primaryButtonHref}
        secondaryLinkText={ecommerceHeroPreviewData.secondaryLinkText}
        secondaryLinkHref={ecommerceHeroPreviewData.secondaryLinkHref}
        microcopy={ecommerceHeroPreviewData.microcopy}
        visualTagSubtitle="Ecommerce Delivery"
        visualTagTitle="Shopify · WooCommerce · Custom"
        visualBadgeText="Sales & Operations"
        visualImage={ecommerceHeroPreviewData.image}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Why Choose Us */}
      <ServiceWhyChoose data={ecommerceWhyChoosePreviewData} />

      {/* 05 Common Challenges */}
      <ServiceProblemSection
        id="challenges"
        eyebrow={ecommerceProblemPreviewData.eyebrow}
        h2={ecommerceProblemPreviewData.h2}
        intro={ecommerceProblemPreviewData.intro}
        cards={ecommerceProblemPreviewData.cards}
      />

      {/* 06 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow={ecommerceRelatedServicesPreviewData.eyebrow}
        h2={ecommerceRelatedServicesPreviewData.h2}
        intro={ecommerceRelatedServicesPreviewData.intro}
        cards={ecommerceRelatedServicesPreviewData.cards}
      />

      {/* 07 Platforms */}
      <ServicePlatformSection
        id="platforms"
        eyebrow={ecommercePlatformsPreviewData.eyebrow}
        h2={ecommercePlatformsPreviewData.h2}
        intro={ecommercePlatformsPreviewData.intro}
        cards={ecommercePlatformsPreviewData.cards}
      />

      {/* 08 Services Scope */}
      <ServiceScopeSection
        id="services"
        eyebrow={ecommerceScopePreviewData.eyebrow}
        h2={ecommerceScopePreviewData.h2}
        intro={ecommerceScopePreviewData.intro}
        cards={ecommerceScopePreviewData.cards}
      />

      {/* 09 Store Experience (Buyer Journey Panels) */}
      <ServiceContentPanels
        id="experience"
        eyebrow={storeExperiencePreviewData.eyebrow}
        h2={storeExperiencePreviewData.h2}
        intro={storeExperiencePreviewData.intro}
        panels={storeExperiencePreviewData.panels}
        image={storeExperiencePreviewData.image}
      />

      {/* 10 Connected Business Systems */}
      <ServiceSystemCards
        id="systems"
        eyebrow={connectedSystemsPreviewData.eyebrow}
        h2={connectedSystemsPreviewData.h2}
        intro={connectedSystemsPreviewData.intro}
        cards={connectedSystemsPreviewData.cards}
      />

      {/* 11 Dynamic Technology Ecosystem Section */}
      <TechnologiesSection
      id="ecommerce-tech-stack"
      eyebrow="COMMERCE PLATFORMS & ECOSYSTEM"
      h2="Engineered for Scalable, High-Converting Commerce"
      intro="From modern headless architectures to enterprise Shopify Plus setups, we build and scale on proven commerce platforms, payment gateways, and operational integrations."
      technologies={ecommerceTechnologies}
      ctaText="Running on Magento, BigCommerce, SAP, or a custom in-house ERP?"
      ctaButtonText="Discuss Custom Migration & Sync"
    />

      {/* 12 Our Process */}
      <ServiceProcess
        id="process"
        eyebrow={ecommerceProcessPreviewData.eyebrow}
        h2={ecommerceProcessPreviewData.h2}
        stages={ecommerceProcessPreviewData.stages}
      />

      {/* 13 Post-Launch */}
      <ServicePostLaunchSection
        id="beyond-launch"
        eyebrow={ecommercePostLaunchPreviewData.eyebrow}
        h2={ecommercePostLaunchPreviewData.h2}
        intro={ecommercePostLaunchPreviewData.intro}
        description={ecommercePostLaunchPreviewData.description}
        image={ecommercePostLaunchPreviewData.image}
        items={ecommercePostLaunchPreviewData.items}
        ctaText="Plan Store Optimization"
        ctaHref="#plan-project"
      />

      {/* 14 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow={ecommerceFaqPreviewData.eyebrow}
        h2={ecommerceFaqPreviewData.h2}
        faqs={ecommerceFaqPreviewData.faqs}
      />

      {/* 15 Final CTA */}
      <ServiceFinalCTA
        id="plan-project"
        eyebrow={ecommerceFinalOfferPreviewData.eyebrow}
        h2={ecommerceFinalOfferPreviewData.h2}
        intro={ecommerceFinalOfferPreviewData.intro}
        tools={ecomTechTools}
      />

      {/* 16 Footer */}
      <Footer />
    </main>
  );
}