import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for React Native Specialist Service
import {
  reactNativeMetadata,
  reactNativeHero,
  reactNativeProblems,
  reactNativeOverview,
  reactNativeScope,
  reactNativeFit,
  reactNativeUseCases,
  reactNativeImplementationDecisions,
  reactNativeProcess,
  reactNativeWhyChoose,
  reactNativeInvestmentFactors,
  reactNativeRelatedServices,
  reactNativeFaqs,
  reactNativeFinalCta,
} from "@/data/service/react-native-app-development";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceScopeSection,
  ServiceSuitabilitySection,
  ServiceUseCaseSection,
  ServiceContentPanels,
  ServiceProcess,
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
import heroImg from "@/assets/rn-hero.jpg";
import overviewImg from "@/assets/rn-overview.webp";
import decisionsImg from "@/assets/rn-controlpanels.webp";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-react-native.jpg";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiReact,
  SiTypescript,
  SiExpo,
  SiApple,
  SiAndroid,
  SiFirebase,
  SiGraphql,
  SiJest,
} from "react-icons/si";
import {
  Cpu,
  Workflow,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: reactNativeMetadata.title,
  description: reactNativeMetadata.description,
  keywords: reactNativeMetadata.keywords,
  alternates: {
    canonical: reactNativeMetadata.canonical,
  },
  openGraph: {
    title: reactNativeMetadata.title,
    description: reactNativeMetadata.description,
    url: reactNativeMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Ecosystem Items for React Native
const reactNativeTechnologyItems: TechnologyItem[] = [
  {
    name: "React Native",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    href: "https://reactnative.dev/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Expo",
    icon: <SiExpo className="w-8 h-8 text-black" />,
    href: "https://docs.expo.dev/",
  },
  {
    name: "iOS (Apple)",
    icon: <SiApple className="w-8 h-8 text-gray-400" />,
    href: "https://developer.apple.com/ios/",
  },
  {
    name: "Android",
    icon: <SiAndroid className="w-8 h-8 text-[#3DDC84]" />,
    href: "https://developer.android.com/",
  },
  {
    name: "REST & GraphQL",
    icon: <SiGraphql className="w-8 h-8 text-[#E10098]" />,
    href: "https://reactnative.dev/docs/network",
  },
  {
    name: "Firebase & Cloud",
    icon: <SiFirebase className="w-8 h-8 text-[#FFCA28]" />,
    href: "https://firebase.google.com/",
  },
  {
    name: "Jest & Testing",
    icon: <SiJest className="w-8 h-8 text-[#C21325]" />,
    href: "https://reactnative.dev/docs/testing-overview",
  },
];

// Curated React Native Stack Tools for Final CTA
const reactNativeStackTools: TechStackItem[] = [
  {
    name: "React Native & TypeScript",
    category: "Cross-Platform Framework",
    description:
      "Modern component architecture sharing core workflows and business logic across iOS and Android.",
    icon: <SiReact className="w-5 h-5 text-white" />,
  },
  {
    name: "Expo & EAS Build",
    category: "Development & Build Workflow",
    description:
      "Production-ready tooling, config plugins, custom dev clients, and automated cloud compilation.",
    icon: <SiExpo className="w-5 h-5 text-white" />,
  },
  {
    name: "iOS & Android Targets",
    category: "Target Operating Systems",
    description:
      "Platform-native view mapping with compliance for Apple App Store and Google Play guidelines.",
    icon: <Smartphone className="w-5 h-5 text-white" />,
  },
  {
    name: "REST & GraphQL APIs",
    category: "Data & Systems Integration",
    description:
      "Predictable state synchronization, session handling, token refresh, and resilient offline queues.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Native Modules & Bridges",
    category: "Hardware & Device Capabilities",
    description:
      "Swift/Kotlin bridging for camera, geolocation, biometric authentication, and Bluetooth hardware.",
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
  {
    name: "Automated QA & Diagnostics",
    category: "Testing & Release Readiness",
    description:
      "Unit and component verification, device profiling, crash reporting, and store release checklists.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
];

export default function ReactNativeAppDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={reactNativeHero.eyebrow}
        h1={reactNativeHero.h1}
        p1={reactNativeHero.p1}
        p2={reactNativeHero.p2}
        primaryButtonText={reactNativeHero.primaryButtonText}
        primaryButtonHref={reactNativeHero.primaryButtonHref}
        microcopy={reactNativeHero.microcopy}
        visualTagSubtitle="Cross-Platform Mobile"
        visualTagTitle="iOS · Android · React"
        visualBadgeText="Production React Native"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview */}
      <ServiceOverviewSection
        id="react-native-overview"
        eyebrow={reactNativeOverview.eyebrow}
        h2={reactNativeOverview.h2}
        intro={reactNativeOverview.intro}
        body={reactNativeOverview.body}
        closingCopy={reactNativeOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="React Native cross-platform application interface and mobile architecture"
        direction="left"
      />

      {/* 05 Common Challenges */}
      <ServiceProblemSection
        id="react-native-problems"
        eyebrow="COMMON CROSS-PLATFORM CHALLENGES"
        h2="Where Cross-Platform Apps Fall Down Without Careful Planning"
        intro="React Native lets you share UI and logic across iOS and Android, but production success depends on how you handle architecture, data flow, device features, and release testing."
        cards={reactNativeProblems}
        gridCols={3}
      />

      {/* 06 Capabilities / Scope */}
      <ServiceScopeSection
        id="react-native-capabilities"
        eyebrow="WHAT WE BUILD & DELIVER"
        h2="Complete React Native Engineering From Discovery to Store Release"
        intro="We build purposeful React Native applications across iOS and Android, scoped around your users' actual workflows, device capabilities, and backend requirements."
        cards={reactNativeScope}
        scopeNote="Every engagement is scoped around your product's specific needs, API readiness, offline requirements, and operational responsibilities."
      />

      {/* 08 Key Architectural & Engineering Decisions */}
      <ServiceContentPanels
        id="react-native-decisions"
        eyebrow="ENGINEERING & IMPLEMENTATION DECISIONS"
        h2="Key Architectural Choices to Resolve Early"
        intro="A successful React Native product requires clear decisions around Expo workflows, code sharing, state boundaries, device profiling, and long-term release ownership."
        panels={reactNativeImplementationDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating mobile architecture, backend readiness, and React Native implementation choices"
        direction="right"
        supportingNote="We resolve these questions during discovery so that delivery proceeds with clear technical boundaries."
        supportingLink={{
          text: "Compare General Mobile App Options",
          destination: "/services/custom-app-development/mobile-app-development",
        }}
      />

      {/* 09 Product Use Cases */}
      <ServiceUseCaseSection
        id="react-native-use-cases"
        eyebrow="PRODUCT USE CASES"
        h2="Where React Native Applications Deliver Practical Product Value"
        intro="From existing web-to-mobile products and booking self-service to commerce and field operations, React Native is effective when common workflows benefit from a shared codebase."
        cards={reactNativeUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.businessSituation} ${uc.implementationConsideration}`,
          examples: [uc.acceptanceSignal],
        }))}
        badgeLabel="Application Workflow"
        examplesTitle="Acceptance Signal"
      />

      {/* 10 Delivery Process */}
      <ServiceProcess
        id="react-native-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Journey-First Approach to React Native Engineering"
        intro="From workflow discovery and architecture validation to incremental feature builds, multi-device testing, and store submission."
        stages={reactNativeProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate critical user journeys, API failure handling, offline states, and platform permissions across iOS and Android before release."
      />
      
      {/* 12 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: reactNativeWhyChoose.eyebrow,
          h2: reactNativeWhyChoose.h2,
          intro: reactNativeWhyChoose.intro,
          points: reactNativeWhyChoose.points,
          closingCopy: reactNativeWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 14 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Engineering & Digital Capabilities"
        intro="Explore related engineering capabilities depending on whether your product requires browser applications, mobile strategy, or commerce foundations."
        cards={reactNativeRelatedServices}
      />

      {/* 15 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About React Native App Development"
        faqs={reactNativeFaqs}
      />

      {/* 16 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={reactNativeFinalCta.eyebrow}
        h2={reactNativeFinalCta.h2}
        intro={reactNativeFinalCta.description}
        supportingCopy={reactNativeFinalCta.supportingCopy}
        sectionSubtitle="Mobile Engineering & React Native Ecosystem"
        tools={reactNativeStackTools}
      />

      {/* 17 Global Footer */}
      <Footer />
    </main>
  );
}

