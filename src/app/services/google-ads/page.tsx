import React from "react";
import { Metadata } from "next";
import {
  googleAdsPreviewMetadata,
  heroPreviewData,
  businessProblemPreviewData,
  googleAdsOverviewData,
  googleAdsWhyChooseData,
  googleAdsRelatedServicesData,
  reportingLeadQualityPreviewData,
  faqPreviewData,
  finalOfferPreviewData,
  googleAdsCertificatesData,
} from "@/data/googleAdsPreviewData";

// Remaining Custom Preview Components
import ManagementScopePreview from "@/components/GoogleAds/preview/ManagementScopePreview";
import CampaignSelectionPreview from "@/components/GoogleAds/preview/CampaignSelectionPreview";
import ConversionJourneyPreview from "@/components/GoogleAds/preview/ConversionJourneyPreview";
import StartingSituationsPreview from "@/components/GoogleAds/preview/StartingSituationsPreview";
import OnboardingTimelinePreview from "@/components/GoogleAds/preview/OnboardingTimelinePreview";
import BudgetFeesPreview from "@/components/GoogleAds/preview/BudgetFeesPreview";
import BusinessMarketsPreview from "@/components/GoogleAds/preview/BusinessMarketsPreview";
import GoogleAdsCertificates from "@/components/GoogleAds/preview/GoogleAdsCertificates";

// Reusable Shared Services Components
import {
  ServiceHero,
  ServiceProblemSection,
  ServiceSystemCards,
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

import overviewImg from "@/assets/google-ads-overview.jpg";
import whyChooseImg from "@/assets/google-ads-dentists-reporting-dashboard.webp";

import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Icons for Technologies Ecosystem & Final CTA Stack
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogle,
  SiLooker,
  SiMeta,
  SiSemrush,
  SiShopify,
  SiWordpress,
  SiHubspot,
  SiZapier,
  SiFrappe,
} from "react-icons/si";
import { BarChart3, Database, PhoneCall, Target, ShieldCheck } from "lucide-react";

// Google Ads Technology Ecosystem Items
const googleAdsTechnologies: TechnologyItem[] = [
  {
    name: "Google Ads",
    icon: <SiGoogleads className="w-6 h-6" />,
    iconColor: "text-[#4285F4]",
  },
  {
    name: "Google Analytics 4",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    iconColor: "text-[#E37400]",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-6 h-6" />,
    iconColor: "text-[#246FDB]",
  },
  {
    name: "Merchant Center",
    icon: <SiGoogle className="w-6 h-6" />,
    iconColor: "text-[#34A853]",
  },

  {
    name: "Meta Ads Manager",
    icon: <SiMeta className="w-6 h-6" />,
    iconColor: "text-[#0081FB]",
  },
  {
    name: "Semrush",
    icon: <SiSemrush className="w-6 h-6" />,
    iconColor: "text-[#FF642D]",
  },
  {
    name: "Shopify / Feeds",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "text-[#96BF48]",
  },
  {
    name: "WordPress / Forms",
    icon: <SiWordpress className="w-6 h-6" />,
    iconColor: "text-[#21759B]",
  },
  {
    name: "HubSpot CRM",
    icon: <SiFrappe className="w-6 h-6" />,
    iconColor: "text-[#246FDB]",
  },
  {
    name: "Zapier / Webhooks",
    icon: <SiZapier className="w-6 h-6" />,
    iconColor: "text-[#FF4A00]",
  },
];

// Google Ads Tech & Attribution Stack for Final CTA (6 items, clean white icons)
const googleAdsFinalCtaTools: TechStackItem[] = [
  {
    name: "Google Ads Management",
    category: "PPC & Intent Search",
    description: "Search, Performance Max, and Shopping campaigns structured around commercially viable customer acquisition.",
    icon: <SiGoogleads className="w-5 h-5 text-white" />,
  },
  {
    name: "GA4 & Server-Side GTM",
    category: "Attribution & Tracking",
    description: "Custom conversion events, offline conversion imports, and accurate purchase/lead measurement.",
    icon: <SiGoogleanalytics className="w-5 h-5 text-white" />,
  },
  {
    name: "Looker Studio Dashboards",
    category: "Reporting & Intelligence",
    description: "Live commercial dashboards reporting cost per qualified lead, ROAS, and transparent search metrics.",
    icon: <SiLooker className="w-5 h-5 text-white" />,
  },
  {
    name: "Landing Page Architecture",
    category: "Conversion Engineering",
    description: "High-relevance landing pages and form funnels synchronized to campaign keywords and search intent.",
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    name: "CRM & Call Tracking Integration",
    category: "Lead Pipeline Sync",
    description: "Connecting inbound calls and web inquiries directly into your sales workflow and CRM pipeline.",
    icon: <Database className="w-5 h-5 text-white" />,
  },
  {
    name: "Merchant Center & Feed Sync",
    category: "Catalog & Ecom Feeds",
    description: "Multi-platform product feeds and shopping asset optimization for retail and ecommerce scale.",
    icon: <SiGoogle className="w-5 h-5 text-white" />,
  },
];

export const metadata: Metadata = {
  title: googleAdsPreviewMetadata.title,
  description: googleAdsPreviewMetadata.description,
  openGraph: {
    title: googleAdsPreviewMetadata.openGraph.title,
    description: googleAdsPreviewMetadata.openGraph.description,
  },
  alternates: {
    canonical: googleAdsPreviewMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function GoogleAdsPreviewPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 02 Service Hero (Shared Common Component) */}
      <ServiceHero
        eyebrow={heroPreviewData.eyebrow}
        h1={heroPreviewData.h1}
        p1={heroPreviewData.p1}
        p2={heroPreviewData.p2}
        primaryButtonText={heroPreviewData.primaryButtonText}
        primaryButtonHref={heroPreviewData.primaryButtonHref}
        trustStrip={heroPreviewData.trustStrip}
        visualTagSubtitle="Google Partner Agency"
        visualTagTitle="Search · Performance Max · Shopping"
        visualBadgeText="Verified Management"
        visualImage={whyChooseImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview Section (What is Google Ads) */}
      <ServiceOverviewSection
        id="overview"
        eyebrow={googleAdsOverviewData.eyebrow}
        h2={googleAdsOverviewData.h2}
        intro={googleAdsOverviewData.intro}
        body={googleAdsOverviewData.body}
        closingCopy={googleAdsOverviewData.closingCopy}
        imageSrc={overviewImg}
        imageAlt="What is Google Ads - Intent Search Acquisition by Bixeltek"
        direction="left"
      />

      {/* 05 Problem Section (Shared Common Component) */}
      <ServiceProblemSection
        id="challenges"
        eyebrow={businessProblemPreviewData.eyebrow}
        h2={businessProblemPreviewData.h2}
        intro={businessProblemPreviewData.intro}
        cards={businessProblemPreviewData.cards}
      />

      {/* 07 Management Scope */}
      <ManagementScopePreview />

      {/* 08 Related Services Section */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow={googleAdsRelatedServicesData.eyebrow}
        h2={googleAdsRelatedServicesData.h2}
        intro={googleAdsRelatedServicesData.intro}
        cards={googleAdsRelatedServicesData.cards}
      />

      {/* 09 Campaign Selection */}
      <CampaignSelectionPreview />

      {/* 10 Conversion Journey */}
      <ConversionJourneyPreview />

      {/* 11 Reporting & Lead Quality (Shared System Cards Component) */}
      <ServiceSystemCards
        id="reporting-systems"
        eyebrow={reportingLeadQualityPreviewData.eyebrow}
        h2={reportingLeadQualityPreviewData.h2}
        intro={reportingLeadQualityPreviewData.intro}
        cards={reportingLeadQualityPreviewData.cards}
        supportingNote={reportingLeadQualityPreviewData.supportingParagraph}
      />

            <ServiceWhyChooseUs
        id="why-bixeltek"
        data={googleAdsWhyChooseData}
        defaultImage={whyChooseImg}
      />

      {/* 11b Our Certificates & Google Certified Badges */}
      <GoogleAdsCertificates
        id="our-certificates"
        eyebrow={googleAdsCertificatesData.eyebrow}
        h2={googleAdsCertificatesData.h2}
        intro={googleAdsCertificatesData.intro}
      />

      {/* 12 Technologies Ecosystem (Shared Common Component) */}
      <TechnologiesSection
        id="technologies"
        eyebrow="ADVERTISING & ATTRIBUTION ECOSYSTEM"
        h2="Platforms & Tools Engineered for Measurement & Scale"
        intro="From high-intent search bidding to server-side attribution and live ROAS dashboards, we deploy enterprise marketing technologies to optimize every click."
        technologies={googleAdsTechnologies}
        ctaText="Need custom CRM integration, offline conversion tracking, or server-side GTM?"
        ctaButtonText="Contact Us Now"
        ctaHref="#google-ads-review"
      />

      {/* 13 Starting Situations */}
      <StartingSituationsPreview />

      {/* 14 Onboarding and First 90 Days */}
      <OnboardingTimelinePreview />

      {/* 15 Budget and Fees */}
      <BudgetFeesPreview />

      {/* 16 Business Types and Markets */}
      <BusinessMarketsPreview />

      {/* 17 FAQs (Shared Common Component) */}
      <ServiceFAQ
        id="faqs"
        h2={faqPreviewData.h2}
        faqs={faqPreviewData.faqs}
      />

      {/* 18 Final CTA & Review Form (Shared Common Component) */}
      <ServiceFinalCTA
        id="google-ads-review"
        eyebrow={finalOfferPreviewData.eyebrow}
        h2={finalOfferPreviewData.h2}
        intro={finalOfferPreviewData.intro}
        sectionSubtitle="Measurement & Attribution Stack"
        tools={googleAdsFinalCtaTools}
      />

    </main>
  );
}
