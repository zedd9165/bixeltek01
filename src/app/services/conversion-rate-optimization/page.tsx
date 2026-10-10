import React from "react";
import { Metadata } from "next";

import {
  conversionRateOptimizationMetadata,
  conversionRateOptimizationBreadcrumbs,
  conversionRateOptimizationJumpLinks,
  conversionRateOptimizationHero,
  conversionRateOptimizationProblems,
  conversionRateOptimizationOverview,
  whenYouNeedCRO,
  conversionRateOptimizationScope,
  croOpportunityFramework,
  whatWeOptimize,
  conversionRateOptimizationProcess,
  conversionRateOptimizationWhyChoose,
  conversionRateOptimizationInvestmentFactors,
  conversionRateOptimizationRelatedServices,
  conversionRateOptimizationFaqs,
  conversionRateOptimizationFinalCta,
} from "@/data/service/conversionRateOptimization";

// Reusable Generic Service Components
import {
  ServicePageNav,
  ServiceHero,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServicePostLaunchSection,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceSelectedWork,
  ServiceInvestment,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";


import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
} from "react-icons/si";
import { TbFlame, TbDeviceAnalytics } from "react-icons/tb";
import { FlaskConical } from "lucide-react";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

const croTechTools: TechStackItem[] = [
  {
    name: "Google Analytics 4",
    category: "Funnels & Paths",
    description: "Event tracking, drop-offs, and journey attribution.",
    icon: <SiGoogleanalytics />,
  },
  {
    name: "Google Tag Manager",
    category: "Tag Architecture",
    description: "Setting up events and conversion tracking without code deploys.",
    icon: <SiGoogletagmanager />,
  },
  {
    name: "Microsoft Clarity",
    category: "Heatmaps & Replays",
    description: "Session recordings, dead clicks, and user friction points.",
    icon: <TbFlame />,
  },
  {
    name: "Google Search Console",
    category: "Search Intent",
    description: "Connecting organic landing page intent to on-page conversion paths.",
    icon: <TbDeviceAnalytics />,
  },
  {
    name: "Google Ads & Meta CAPI",
    category: "Paid Traffic",
    description: "Feeding deep conversion signals into bidding algorithms.",
    icon: <SiGoogleads />,
  },
  {
    name: "A/B Testing Platforms",
    category: "Hypothesis Lab",
    description: "Controlled variant rollouts and statistical power evaluation.",
    icon: <FlaskConical />,
  },
];


// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: conversionRateOptimizationMetadata.title,
  description: conversionRateOptimizationMetadata.description,
  keywords: conversionRateOptimizationMetadata.keywords,
  alternates: {
    canonical: conversionRateOptimizationMetadata.canonical,
  },
  openGraph: {
    title: conversionRateOptimizationMetadata.title,
    description: conversionRateOptimizationMetadata.description,
    url: conversionRateOptimizationMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function ConversionRateOptimizationPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 03 Hero */}
      <ServiceHero
        eyebrow={conversionRateOptimizationHero.eyebrow}
        h1={conversionRateOptimizationHero.h1}
        p1={conversionRateOptimizationHero.p1}
        p2={conversionRateOptimizationHero.p2}
        primaryButtonText={conversionRateOptimizationHero.primaryButtonText}
        primaryButtonHref={conversionRateOptimizationHero.primaryButtonHref}
        microcopy={conversionRateOptimizationHero.microcopy}
        visualTagSubtitle="Conversion Engineering"
        visualTagTitle="Analytics · UX · Optimization"
        visualBadgeText="Evidence Led"
        visualImage={conversionRateOptimizationHero.image}
      />

      {/* Trust Strip Marquee */}
      <ClientTrustMarquee />


      {/* 05 What CRO Actually Means (Educational Overview) */}
      {conversionRateOptimizationOverview && (
        <ServiceOverviewSection
          id="what-is-cro"
          eyebrow={conversionRateOptimizationOverview.eyebrow}
          h2={conversionRateOptimizationOverview.h2}
          intro={conversionRateOptimizationOverview.intro}
          body={conversionRateOptimizationOverview.body}
        closingCopy={conversionRateOptimizationOverview.closingCopy}
        imageSrc={conversionRateOptimizationOverview.image}
        direction="left"
      />)}


      {/* 07 What Our CRO Work Covers */}
      <ServiceScopeSection
        id="cro-scope"
        eyebrow="WHAT OUR CRO WORK COVERS"
        h2="A Methodical Scope of Work Across Funnels, Behaviour & Testing"
        intro="We examine the entire conversion surface, from analytics foundation and visitor behaviour to UX clarity and controlled experimentation."
        cards={conversionRateOptimizationScope}
        scopeNote="Every engagement is structured around your specific funnel requirements, tracking capabilities and business conversion goals."
      />

       <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Capabilities That Support Conversion Growth"
        intro="CRO does not operate in a vacuum. Often, optimization insights highlight opportunities across web development, search visibility, paid media and analytics."
        cards={conversionRateOptimizationRelatedServices}
      />
      {/* 09 What We Optimize (Customer Journey Areas) */}
      <ServicePostLaunchSection
        id="what-we-optimize"
        eyebrow={whatWeOptimize.eyebrow}
        h2={whatWeOptimize.h2}
        intro={whatWeOptimize.intro}
        items={whatWeOptimize.points}
        image={whatWeOptimize.image}
        ctaText="Review My Conversion Journey"
        ctaHref="#final-cta"
      />

      {/* 10 Our CRO Process (Diagnose → Prioritize → Hypothesize → Test → Measure) */}
      <ServiceProcess
        id="cro-process"
        eyebrow="OUR CRO PROCESS"
        h2="A Disciplined, Evidence-Led Cycle of Continuous Improvement"
        intro="We move from data diagnosis through prioritized hypotheses to measured implementation, ensuring every change is backed by evidence."
        stages={conversionRateOptimizationProcess.map((stage) => ({
          stageNumber: stage.number || stage.stageNumber || "01",
          title: stage.title,
          description: stage.description,
        }))}
        supportingParagraph="Effective optimization requires clear communication, rapid iteration and honest measurement of what moves the needle."
      />

      {/* 11 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={conversionRateOptimizationWhyChoose as any}
      />

      {/* 14 Related Services */}
     

      {/* 15 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Frequently Asked Questions About Conversion Rate Optimization"
        faqs={conversionRateOptimizationFaqs}
      />

      {/* 16 Final CTA */}
      <ServiceFinalCTA
          id="contact-us"
          eyebrow={conversionRateOptimizationFinalCta.eyebrow}
          h2={conversionRateOptimizationFinalCta.h2}
          intro={conversionRateOptimizationFinalCta.description}
          sectionSubtitle="CRO Diagnostic & Testing Stack"
          tools={croTechTools}
        />

      {/* 17 Global Footer */}
      <Footer />
    </main>
  );
}
