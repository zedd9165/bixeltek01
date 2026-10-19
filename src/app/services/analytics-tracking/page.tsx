import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Analytics & Tracking Services
import {
  analyticsTrackingMetadata,
  analyticsTrackingHero,
  analyticsTrackingOverview,
  analyticsTrackingProblems,
  analyticsTrackingStartingSituations,
  analyticsTrackingScope,
  analyticsTrackingEventFramework,
  analyticsTrackingAudit,
  analyticsTrackingMeasurementModel,
  analyticsTrackingProcess,
  analyticsTrackingBusinessFit,
  analyticsTrackingPrivacyAndGovernance,
  analyticsTrackingReporting,
  analyticsTrackingWhyBixeltek,
  analyticsTrackingInvestment,
  analyticsTrackingRelatedServices,
  analyticsTrackingFaqs,
  analyticsTrackingFinalCta,
} from "@/data/service/analytics-tracking";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServicePlatformSection,
  ServiceScopeSection,
  ServiceUseCaseSection,
  ServiceContentPanels,
  ServiceProcess,
  ServiceTechnologySection,
  ServiceSystemCards,
  ServiceStartingSituations,
  ServiceWhyChooseUs,
  ServiceInvestment,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import type { PlatformOptionCardItem } from "@/components/services/common/ServicePlatformSection";
import type { TechnologyItem } from "@/components/services/common/ServiceTechnologySection";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Global Layout & Trust Shell Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import analyticsHeroImg from "@/assets/analytics-hero.jpg";
import analyticsOverviewImg from "@/assets/analytics-overview.webp";
import leadEventsImg from "@/assets/lead-generation.jpg";
import ecomEventsImg from "@/assets/discount-shopping-season-with-sale.jpg";
import contentEventsImg from "@/assets/Banner-Social-Media-Analytics-Dashboard.png";
import analyticsControlpanelImg from '@/assets/analytics-controlpanels.png'
import whyChooseImg from "@/assets/why-choose-bixeltek-for-analytics.jpeg";

// Icons for Technologies & Final CTA Stack
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMeta,
  SiShopify,
  SiWoo,
  SiHubspot,
  SiBigcommerce,
  SiLooker,
} from "react-icons/si";
import {
  Code2,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: analyticsTrackingMetadata.title,
  description: analyticsTrackingMetadata.description,
  keywords: analyticsTrackingMetadata.keywords,
  alternates: {
    canonical: `https://bixeltek.com${analyticsTrackingMetadata.canonicalPath}`,
  },
  openGraph: {
    title: analyticsTrackingMetadata.title,
    description: analyticsTrackingMetadata.description,
    url: `https://bixeltek.com${analyticsTrackingMetadata.canonicalPath}`,
  },
};

export const dynamic = "force-dynamic";

// Distinct event group images for ServicePlatformSection tabbed selector
const eventGroupImages: Record<string, typeof leadEventsImg> = {
  "Lead Generation & Service Websites": leadEventsImg,
  "Ecommerce & Online Payments": ecomEventsImg,
  "Content, Campaigns & Customer Engagement": contentEventsImg,
};

// Interactive Event Framework Cards for ServicePlatformSection
const analyticsEventFrameworkCards: PlatformOptionCardItem[] = analyticsTrackingEventFramework.groups.map(
  (group) => ({
    title: group.title,
    description: `${group.description} Key milestones: ${group.events.map((e) => e.name).join(" · ")}`,
    badge: "Milestone Framework",
    image: eventGroupImages[group.title] || leadEventsImg,
  })
);

// Curated Measurement & Tag Management Technologies (Honeycomb Cluster)
const analyticsTechnologies: TechnologyItem[] = [
  {
    name: "Google Analytics 4 (GA4)",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    iconColor: "text-orange-500",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "GTM Server-Side Tagging",
    icon: <Code2 className="w-6 h-6" />,
    iconColor: "text-indigo-500",
  },
  {
    name: "Google Ads Enhanced Conversions",
    icon: <SiGoogleads className="w-6 h-6" />,
    iconColor: "text-amber-500",
  },
  {
    name: "Meta Pixel & Conversions API",
    icon: <SiMeta className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Shopify Customer Events & CAPI",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
  {
    name: "WooCommerce Data Layer",
    icon: <SiWoo className="w-6 h-6" />,
    iconColor: "text-purple-600",
  },
  {
    name: "BigCommerce Web Analytics",
    icon: <SiBigcommerce className="w-6 h-6" />,
    iconColor: "text-slate-700",
  },
  {
    name: "HubSpot & CRM Attribution Sync",
    icon: <SiHubspot className="w-6 h-6" />,
    iconColor: "text-orange-600",
  },
  {
    name: "Looker Studio Dashboards",
    icon: <SiLooker className="w-6 h-6" />,
    iconColor: "text-blue-400",
  },
  {
    name: "Consent Mode v2 Implementation",
    icon: <ShieldCheck className="w-6 h-6" />,
    iconColor: "text-emerald-600",
  },
  {
    name: "Custom Data Layer Pipelines",
    icon: <Workflow className="w-6 h-6" />,
    iconColor: "text-violet-500",
  },
];

// Curated Final CTA Measurement Stack
const analyticsFinalCtaTools: TechStackItem[] = [
  {
    name: "Google Analytics 4 (GA4)",
    category: "Telemetry & Attribution",
    description: "Configuring property streams, custom parameters, data retention, and key conversion events.",
    icon: <SiGoogleanalytics className="w-5 h-5 text-white" />,
  },
  {
    name: "Google Tag Manager (Web & Server)",
    category: "Tag Governance",
    description: "Centralized tag deployment with rigorous trigger sequencing and zero script clutter.",
    icon: <SiGoogletagmanager className="w-5 h-5 text-white" />,
  },
  {
    name: "Consent Mode v2 Architecture",
    category: "Privacy & Compliance",
    description: "Configuring region-specific consent states and conversion modeling signals.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    name: "Ad Platform Conversion APIs",
    category: "Server-Side Telemetry",
    description: "Deduplicated direct server events for Google Ads, Meta CAPI, and third-party ad networks.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Ecommerce Data Layer Validation",
    category: "Funnel Integrity",
    description: "Verifying currency, item arrays, cart transitions, and transaction idempotency.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    name: "Looker Studio Executive Dashboards",
    category: "Business Intelligence",
    description: "Consolidating acquisition costs, conversion velocity, and pipeline revenue into actionable reports.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
];

export default function AnalyticsTrackingPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={analyticsTrackingHero.eyebrow}
        h1={analyticsTrackingHero.h1}
        p1={analyticsTrackingHero.description}
        p2={analyticsTrackingHero.supportingText}
        primaryButtonText={analyticsTrackingHero.primaryCta.label}
        primaryButtonHref="#analytics-tracking-contact"
        microcopy="GA4 Setup · Google Tag Manager · Enhanced Conversions · CAPI · Looker Studio"
        visualImage={analyticsHeroImg}
        visualTagSubtitle="Measurement Architecture"
        visualTagTitle="GA4 · GTM · CAPI Telemetry"
        visualBadgeText="Verified Data"
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Commercial Purpose */}
      <ServiceOverviewSection
        id="analytics-tracking-overview"
        eyebrow={analyticsTrackingOverview.eyebrow}
        h2={analyticsTrackingOverview.h2}
        intro={analyticsTrackingOverview.intro}
        body={`${analyticsTrackingOverview.body}\n\n${analyticsTrackingOverview.points
          .map((p) => `${p.title}: ${p.description}`)
          .join("\n\n")}`}
        closingCopy={analyticsTrackingOverview.closingCopy}
        imageSrc={analyticsOverviewImg}
        imageAlt="Business analytics dashboard showing verified digital conversion performance"
        direction="left"
      />

      {/* 05 Common Tracking Problems */}
      <ServiceProblemSection
        id={analyticsTrackingProblems.id}
        eyebrow={analyticsTrackingProblems.eyebrow}
        h2={analyticsTrackingProblems.h2}
        intro={analyticsTrackingProblems.intro}
        cards={analyticsTrackingProblems.cards}
        gridCols={3}
      />

      {/* 07 Scope of Services */}
      <ServiceScopeSection
        id={analyticsTrackingScope.id}
        eyebrow={analyticsTrackingScope.eyebrow}
        h2={analyticsTrackingScope.h2}
        intro={analyticsTrackingScope.intro}
        cards={analyticsTrackingScope.items}
        scopeNote={analyticsTrackingScope.scopeNote}
      />

      {/* 08 Measurement Model / Control Panels */}
      <ServiceContentPanels
        id="measurement-model"
        eyebrow={analyticsTrackingMeasurementModel.eyebrow}
        h2={analyticsTrackingMeasurementModel.h2}
        intro={analyticsTrackingMeasurementModel.intro}
        panels={analyticsTrackingMeasurementModel.layers.map((layer) => ({
          title: layer.title,
          description: layer.description,
        }))}
        image={analyticsControlpanelImg}
        imageAlt="Clear digital measurement and reporting architecture model"
        direction="right"
        supportingNote={`${analyticsTrackingMeasurementModel.example.title}: ${analyticsTrackingMeasurementModel.example.lesson}`}
        supportingLink={{
          text: "Explore Our Google Ads Management Services",
          destination: "/services/google-ads",
        }}
      />

      {/* 09 Tracking Audit Checklist (System Cards) */}
      <ServiceSystemCards
        id="tracking-audit"
        eyebrow={analyticsTrackingAudit.eyebrow}
        h2={analyticsTrackingAudit.h2}
        intro={analyticsTrackingAudit.intro}
        cards={analyticsTrackingAudit.checks.map((check) => ({
          title: check.title,
          description: `${check.description} Evidence reviewed: ${check.evidenceToReview}`,
        }))}
        supportingNote={analyticsTrackingAudit.closingCopy}
      />

      {/* 10 How We Work (Delivery Process) */}
      <ServiceProcess
        id={analyticsTrackingProcess.id}
        eyebrow={analyticsTrackingProcess.eyebrow}
        h2={analyticsTrackingProcess.h2}
        intro={analyticsTrackingProcess.intro}
        stages={analyticsTrackingProcess.steps.map((s) => ({
          stageNumber: s.number,
          title: s.title,
          description: s.description,
        }))}
        supportingParagraph="We validate tag triggers, data-layer events and live reporting streams before finalizing handover documentation."
      />

      {/* 11 Technologies Ecosystem (Honeycomb Cluster) */}
      <ServiceTechnologySection
        id="analytics-technologies"
        eyebrow="ANALYTICS & MEASUREMENT ECOSYSTEM"
        h2="Enterprise Tagging, Attribution & Reporting Tools"
        intro="From GA4 properties and Google Tag Manager containers to server-side CAPI integrations, Looker Studio dashboards and consent governance, we deploy verified tools that deliver dependable data."
        technologies={analyticsTechnologies}
        ctaText="Need server-side GTM, custom data layer implementation or Looker Studio reporting?"
        ctaButtonText="Audit Your Tracking Setup"
        ctaHref="#analytics-tracking-contact"
      />

      {/* 12 Business Models Fit (Use Cases) */}
      <ServiceUseCaseSection
        id="business-fit"
        eyebrow={analyticsTrackingBusinessFit.eyebrow}
        h2={analyticsTrackingBusinessFit.h2}
        intro={analyticsTrackingBusinessFit.intro}
        cards={analyticsTrackingBusinessFit.cards.map((card) => ({
          title: card.title,
          description: card.description,
        }))}
      />

      {/* 14 Privacy, Governance & Consent Principles */}
      <ServiceSystemCards
        id="privacy-governance"
        eyebrow={analyticsTrackingPrivacyAndGovernance.eyebrow}
        h2={analyticsTrackingPrivacyAndGovernance.h2}
        intro={analyticsTrackingPrivacyAndGovernance.intro}
        cards={analyticsTrackingPrivacyAndGovernance.principles}
        supportingNote={analyticsTrackingPrivacyAndGovernance.note}
      />

      {/* 15 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: analyticsTrackingWhyBixeltek.eyebrow,
          h2: analyticsTrackingWhyBixeltek.h2,
          intro: analyticsTrackingWhyBixeltek.intro,
          points: analyticsTrackingWhyBixeltek.points,
          closingCopy:
            "The aim is a dependable, consent-aware measurement system whose reports your leadership team can trust.",
          ctaText: "Review My Tracking Setup",
          ctaHref: "#analytics-tracking-contact",
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 17 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Capabilities That Depend on Dependable Data"
        intro="Explore connected services across paid search, paid social, SEO visibility, custom web engineering and ecommerce."
        cards={analyticsTrackingRelatedServices.map((s) => ({
          title: s.title,
          description: s.description,
          linkText: `Explore ${s.title}`,
          destination: s.href,
        }))}
        gridCols={3}
      />

      {/* 18 Frequently Asked Questions */}
      <ServiceFAQ
        id={analyticsTrackingFaqs[0]?.question ? "analytics-tracking-faqs" : "faqs"}
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About Analytics & Tracking"
        faqs={analyticsTrackingFaqs}
      />

      {/* 19 Final CTA & Lead Terminal */}
      <ServiceFinalCTA
        id="analytics-tracking-contact"
        eyebrow={analyticsTrackingFinalCta.eyebrow}
        h2={analyticsTrackingFinalCta.h2}
        intro={analyticsTrackingFinalCta.description}
        supportingCopy={analyticsTrackingFinalCta.supportingCopy}
        sectionSubtitle="Analytics & Attribution Stack"
        tools={analyticsFinalCtaTools}
      />

      {/* 20 Global Footer */}
      <Footer />
    </main>
  );
}

