import React from "react";
import { Metadata } from "next";

// Data Source of Truth for Mobile App Development
import {
  appDevelopmentMetadata,
  appDevelopmentHeroPreviewData,
  appDevelopmentOverview,
  whenYouNeedMobileApp,
  appDevelopmentScope,
  appDevelopmentUseCases,
  appDevelopmentSystems,
  mobileExperienceSection,
  appDevelopmentProcess,
  appDevelopmentWhyChoose,
  appDevelopmentPostLaunch,
  appDevelopmentRelatedServices,
  appDevelopmentFaqs,
  appDevelopmentFinalCta,
} from "@/data/service/app-development";

// Generic Reusable Service Components
import {
  ServicePageNav,
  ServiceHero,
  ServiceOverviewSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServicePostLaunchSection,
  ServiceSelectedWork,
  ServiceInvestment,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
  ServiceUseCaseSection,
} from "@/components/services/common";

// Dedicated Supporting Components for Structured Content
import AppTechStackSection from "@/components/services/app-development/AppTechStackSection";
import AppSystemsSection from "@/components/services/app-development/AppSystemsSection";

// Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Assets
import mobileExperienceImg from "@/assets/mobile-app-developer-skills.jpeg";
import appHeroImg from "@/assets/distance-learning-app-template-ui.png";
import appOverviewImg from "@/assets/banking-app-interface.png";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";


import {
  SiReact,
  SiExpo,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
} from "react-icons/si";

// Final CTA tool mapping from appDevelopmentTechStack
const appDevelopmentTechStack: TechStackItem[] = [
  {
    name:
      "React Native",

    category:
      "Cross-Platform",

    description:
      "Shared application development for iOS and Android with a strong JavaScript and TypeScript ecosystem.",

    icon: <SiReact/>,
  },

  {
    name:
      "Expo",

    category:
      "React Native Platform",

    description:
      "A practical development and release foundation for React Native applications and modern mobile workflows.",

    icon: <SiExpo/>,
  },

  {
    name:
      "Flutter",

    category:
      "Cross-Platform",

    description:
      "A cross-platform framework suited to custom interfaces, consistent experiences and multi-platform development.",

    icon: <SiFlutter/>,
  },

  {
    name:
      "Firebase & APIs",

    category:
      "Backend & Services",

    description:
      "Authentication, notifications, data services and API connections that support the application beyond its mobile interface.",

    icon: <SiFirebase/>,
  },
];

export const metadata: Metadata = {
  title: appDevelopmentMetadata.title,
  description: appDevelopmentMetadata.description,
  keywords: appDevelopmentMetadata.keywords,
  alternates: {
    canonical: appDevelopmentMetadata.canonical,
  },
  openGraph: {
    title: appDevelopmentMetadata.title,
    description: appDevelopmentMetadata.description,
    url: appDevelopmentMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 03 Hero */}
      <ServiceHero
        eyebrow={appDevelopmentHeroPreviewData.eyebrow}
        h1={appDevelopmentHeroPreviewData.h1}
        p1={appDevelopmentHeroPreviewData.p1}
        p2={appDevelopmentHeroPreviewData.p2}
        primaryButtonText={appDevelopmentHeroPreviewData.primaryButtonText}
        primaryButtonHref={appDevelopmentHeroPreviewData.primaryButtonHref}
        microcopy={appDevelopmentHeroPreviewData.microcopy}
        visualTagSubtitle="Mobile Engineering"
        visualTagTitle="iOS · Android · Cross-Platform"
        visualBadgeText="Production Ready"
        visualImage={appHeroImg}
      />

      {/* 04 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 05 What Mobile App Development Actually Means */}
      <ServiceOverviewSection
        id="what-it-means"
        eyebrow={appDevelopmentOverview.eyebrow}
        h2={appDevelopmentOverview.h2}
        intro={appDevelopmentOverview.intro}
        body={appDevelopmentOverview.body}
        closingCopy={appDevelopmentOverview.closingCopy}
        imageSrc={appOverviewImg}
        imageAlt="Mobile application engineering and product architecture"
        direction="left"
      />

      

      {/* 07 What Our App Development Work Covers */}
      <ServiceScopeSection
        id="what-we-build"
        eyebrow="WHAT OUR APP DEVELOPMENT WORK COVERS"
        h2="End-to-End Application Engineering From Discovery to Store Release"
        intro="We handle the complete product lifecycle, combining mobile product definition, user experience, application architecture, API integration and store release."
        cards={appDevelopmentScope}
        scopeNote="Every engagement is structured around your specific product requirements, platform target, device capabilities and integration roadmap."
      />

       <ServiceRelatedServices
        id="related-services"
        eyebrow="CONNECTED CAPABILITIES"
        h2="Digital Services That Complement Your Mobile Application"
        intro="Mobile products frequently connect with websites, online stores, search visibility, paid campaigns, and analytical reporting across your digital ecosystem."
        cards={appDevelopmentRelatedServices}
      />

      {/* 09 Technology & Platform Choices */}
      {/* <AppTechStackSection
        id="technology"
        eyebrow="TECHNOLOGY & PLATFORM CHOICES"
        h2="Platform Decisions Guided by Product Requirements, Not Presupposition"
        intro="React Native, Expo, Flutter or native iOS/Android development are selected according to your product workflows, device capabilities, integration needs, and long-term maintenance resources."
        stack={appDevelopmentTechStack}
        closingNote="We evaluate your functional requirements, targeted operating system features, performance expectations and team capabilities before finalizing the application architecture."
      /> */}

      {/* 10 Systems & Integrations */}
      <AppSystemsSection
        id="systems-integrations"
        eyebrow="SYSTEMS & INTEGRATIONS"
        h2="A Mobile App Must Seamlessly Connect to Your Operational Infrastructure"
        intro="Mobile development is more than front-end screens. The application relies on secure backend APIs, identity management, payment processing, push messaging, databases and third-party services to function in the real world."
        cards={appDevelopmentSystems}
        supportingNote="A mobile application does not live in isolation. Its durability and usability depend directly on how securely and efficiently it connects to your existing business workflows, databases, and operational systems."
      />

      <ServiceUseCaseSection
        id="app-types"
        eyebrow="WHAT WE BUILD / APP TYPES"
        h2="Mobile Applications Designed Around Distinct Business Contexts"
        intro="From customer-facing services and marketplace platforms to internal tools and product MVPs, we structure mobile engineering around how the application will be used in practice."
        cards={appDevelopmentUseCases}
        badgeLabel="Context"
        examplesTitle="Common Applications"
      />

      {/* 11 Mobile Experience */}
      <ServiceContentPanels
        id="mobile-experience"
        eyebrow={mobileExperienceSection.eyebrow}
        h2={mobileExperienceSection.h2}
        intro={mobileExperienceSection.intro}
        panels={mobileExperienceSection.points}
        image={mobileExperienceImg}
        imageAlt="Real-world mobile experience and performance considerations"
        supportingNote="Engineered for real mobile ergonomics: one-handed use, background transitions, offline resiliency, and responsive data flows."
        direction="right"
      />

      {/* 12 Our Process (How We Work) */}
      <ServiceProcess
        id="app-process"
        eyebrow="OUR PROCESS"
        h2="A Disciplined Development Cycle From Definition to Iterative Growth"
        intro="We structure development into transparent phases, ensuring requirements, user flows, architecture and integrations are verified before and after release."
        stages={appDevelopmentProcess.map((stage) => ({
          stageNumber: stage.number,
          title: stage.title,
          description: stage.description,
        }))}
        supportingParagraph="Effective mobile development requires continuous alignment between product requirements, user experience, and technical implementation."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={appDevelopmentWhyChoose as any}

      />

      {/* 16 Post Launch (Beyond the First Release) */}
      <ServicePostLaunchSection
        id="post-launch"
        eyebrow={appDevelopmentPostLaunch.eyebrow}
        h2={appDevelopmentPostLaunch.h2}
        intro={appDevelopmentPostLaunch.intro}
        items={appDevelopmentPostLaunch.points}
        image={appHeroImg}
        ctaText="Plan My App Project"
        ctaHref="#plan-project"
        browserUrl="app.bixeltek.com/release-monitoring"
        statusText="Active Telemetry"
        badgeSubtitle="Continuous Product Evolution"
        badgeTitle="Iterative Engineering · Telemetry Ready"
      />
     
      {/* 18 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Frequently Asked Questions About Mobile App Development"
        faqs={appDevelopmentFaqs}
      />

      {/* 19 Final CTA & Contact Form */}
      <ServiceFinalCTA
        id="plan-project"
        eyebrow={appDevelopmentFinalCta.eyebrow}
        h2={appDevelopmentFinalCta.h2}
        intro={appDevelopmentFinalCta.description}
        sectionSubtitle="Mobile Engineering & Architecture Stack"
        tools={appDevelopmentTechStack}
      />

      {/* 20 Global Footer */}
      <Footer />
    </main>
  );
}

