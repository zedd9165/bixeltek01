import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Flutter Specialist Service
import {
  flutterMetadata,
  flutterHero,
  flutterProblems,
  flutterOverview,
  flutterScope,
  flutterFit,
  flutterUseCases,
  flutterImplementationDecisions,
  flutterProcess,
  flutterWhyChoose,
  flutterInvestmentFactors,
  flutterRelatedServices,
  flutterFaqs,
  flutterFinalCta,
} from "@/data/service/flutter";

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
import flutterHeroImg from "@/assets/Flutter-App-Development.png";
import flutterOverviewImg from "@/assets/flutter-app-overview.png";
import flutterDecisionsImg from "@/assets/flutter-app-development-panels.webp";
import whyChooseFlutterImg from "@/assets/why-choose-bixeltek-for-flutter-apps.webp";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiFlutter,
  SiDart,
  SiApple,
  SiAndroid,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";
import {
  Cpu,
  Code2,
  Workflow,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: flutterMetadata.title,
  description: flutterMetadata.description,
  keywords: flutterMetadata.keywords,
  alternates: {
    canonical: flutterMetadata.canonical,
  },
  openGraph: {
    title: flutterMetadata.title,
    description: flutterMetadata.description,
    url: flutterMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Ecosystem Items for Flutter
const flutterTechnologyItems: TechnologyItem[] = [
  {
    name: "Flutter",
    icon: <SiFlutter className="w-8 h-8 text-[#02569B]" />,
    href: "https://flutter.dev/",
  },
  {
    name: "Dart",
    icon: <SiDart className="w-8 h-8 text-[#0175C2]" />,
    href: "https://dart.dev/",
  },
  {
    name: "iOS (Apple)",
    icon: <SiApple className="w-8 h-8 text-gray-600" />,
    href: "https://developer.apple.com/ios/",
  },
  {
    name: "Android",
    icon: <SiAndroid className="w-8 h-8 text-[#3DDC84]" />,
    href: "https://developer.android.com/",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-8 h-8 text-[#FFCA28]" />,
    href: "https://firebase.google.com/",
  },
  {
    name: "REST & GraphQL APIs",
    icon: <SiGraphql className="w-8 h-8 text-[#E10098]" />,
    href: "https://docs.flutter.dev/data-and-backend/networking",
  },
  {
    name: "Platform Channels",
    icon: <Cpu className="w-8 h-8 text-[#670EF7]" />,
    href: "https://docs.flutter.dev/platform-integration/platform-channels",
  },
  {
    name: "DevTools & Testing",
    icon: <Code2 className="w-8 h-8 text-[#00B4D8]" />,
    href: "https://docs.flutter.dev/testing/overview",
  },
];

// Curated Flutter Stack Tools for Final CTA
const flutterStackTools: TechStackItem[] = [
  {
    name: "Flutter & Dart",
    category: "Cross-Platform Framework",
    description:
      "Single codebase delivering high-performance UI and shared application logic across iOS and Android.",
    icon: <SiFlutter className="w-5 h-5 text-white" />,
  },
  {
    name: "iOS & Android Targets",
    category: "Target Operating Systems",
    description:
      "Native platform compilation with platform-aware interaction design and compliance with App Store & Google Play guidelines.",
    icon: <Smartphone className="w-5 h-5 text-white" />,
  },
  {
    name: "REST & GraphQL APIs",
    category: "Data & System Integration",
    description:
      "Reliable backend connections, data serialization, authentication tokens, and offline synchronization protocols.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Platform Channels",
    category: "Native Device Bridges",
    description:
      "Direct integration with device hardware including camera, location, biometrics, Bluetooth, and local sensors.",
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
  {
    name: "Firebase & Cloud Services",
    category: "Backend & Identity",
    description:
      "Push notifications, secure session management, real-time database syncing, and cloud file storage.",
    icon: <SiFirebase className="w-5 h-5 text-white" />,
  },
  {
    name: "Automated QA & CI/CD",
    category: "Testing & Release Readiness",
    description:
      "Unit, widget, and integration testing with automated deployment pipelines for staging and store submissions.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
];

export default function FlutterAppDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={flutterHero.eyebrow}
        h1={flutterHero.h1}
        p1={flutterHero.p1}
        p2={flutterHero.p2}
        primaryButtonText={flutterHero.primaryButtonText}
        primaryButtonHref={flutterHero.primaryButtonHref}
        secondaryLinkText={flutterHero.secondaryLinkText}
        secondaryLinkHref={flutterHero.secondaryLinkHref}
        microcopy={flutterHero.microcopy}
        visualTagSubtitle="Cross-Platform Mobile"
        visualTagTitle="iOS · Android · Dart"
        visualBadgeText="Production Flutter"
        visualImage={flutterHeroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      <ServiceOverviewSection
        id="flutter-overview"
        eyebrow={flutterOverview.eyebrow}
        h2={flutterOverview.h2}
        intro={flutterOverview.intro}
        body={flutterOverview.body}
        closingCopy={flutterOverview.closingCopy}
        imageSrc={flutterOverviewImg}
        imageAlt="Flutter cross-platform application interface and mobile architecture"
        direction="left"
      />

      {/* 04 Common Challenges */}
      <ServiceProblemSection
        id="flutter-problems"
        eyebrow="COMMON CROSS-PLATFORM CHALLENGES"
        h2="Where Cross-Platform Apps Fall Down Without Careful Planning"
        intro="Flutter shares your UI and logic across iOS and Android, but product success depends on how you handle architecture, data flow, device features and release testing."
        cards={flutterProblems}
        gridCols={3}
      />

      {/* 06 Capabilities / Scope */}
      <ServiceScopeSection
        id="flutter-capabilities"
        eyebrow="WHAT WE BUILD & DELIVER"
        h2="Complete Flutter Engineering From Discovery to Store Release"
        intro="We build purposeful Flutter applications across iOS and Android, scoped around your users' actual workflows, device capabilities and backend requirements."
        cards={flutterScope}
        scopeNote="Every engagement is scoped around your product's specific needs, API readiness, offline requirements, and operational responsibilities."
      />

      <ServiceContentPanels
        id="flutter-decisions"
        eyebrow="ENGINEERING & IMPLEMENTATION DECISIONS"
        h2="Key Architectural Choices to Resolve Early"
        intro="A successful Flutter product requires clear decisions around backend readiness, native capabilities, offline requirements, and long-term release ownership."
        panels={flutterImplementationDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={flutterDecisionsImg}
        imageAlt="Evaluating mobile architecture, backend readiness, and Flutter implementation choices"
        direction="right"
        supportingNote="We resolve these questions during discovery so that delivery proceeds with clear technical boundaries."
        supportingLink={{
          text: "Compare General Mobile App Options",
          destination: "/services/custom-app-development/mobile-app-development",
        }}
      />

      <ServiceUseCaseSection
        id="flutter-use-cases"
        eyebrow="PRODUCT USE CASES"
        h2="Where Flutter Applications Deliver Practical Product Value"
        intro="From customer self-service portals and field operations to commerce apps, Flutter is effective when common workflows benefit from a shared codebase."
        cards={flutterUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.businessSituation} ${uc.implementationConsideration}`,
          examples: [uc.successSignal],
        }))}
        badgeLabel="Application Workflow"
        examplesTitle="Success Signal"
      />

      {/* 10 Delivery Process */}
      <ServiceProcess
        id="flutter-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Journey-First Approach to Flutter Engineering"
        intro="From workflow discovery and platform validation to incremental slice builds, multi-device testing, and store submission."
        stages={flutterProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate critical user journeys, API failure handling, offline states, and platform permissions across iOS and Android before release."
      />

      {/* 11 Technology Ecosystem */}
      <ServiceTechnologySection
        id="flutter-technologies"
        eyebrow="ENGINEERING ECOSYSTEM"
        h2="Curated Frameworks & Tools for Production Flutter Apps"
        intro="We choose mobile frameworks, API layers, and platform bridges that support your product requirements without unnecessary complexity."
        technologies={flutterTechnologyItems}
        ctaText="Need advice on whether Flutter fits your product workflows, device needs, or existing backend?"
        ctaButtonText="Get in Touch"
        ctaHref="#final-cta"
      />

      {/* 12 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: flutterWhyChoose.eyebrow,
          h2: flutterWhyChoose.h2,
          intro: flutterWhyChoose.intro,
          points: flutterWhyChoose.points,
          closingCopy: flutterWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseFlutterImg}
        direction="left"
      />

      {/* 14 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Engineering & Digital Capabilities"
        intro="Explore related engineering capabilities depending on whether your product requires browser applications, mobile strategy, or commerce foundations."
        cards={flutterRelatedServices}
        gridCols={3}
      />

      {/* 15 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Flutter App Development"
        faqs={flutterFaqs}
      />

      {/* 16 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={flutterFinalCta.eyebrow}
        h2={flutterFinalCta.h2}
        intro={flutterFinalCta.description}
        supportingCopy={flutterFinalCta.supportingCopy}
        sectionSubtitle="Mobile Engineering & Flutter Ecosystem"
        tools={flutterStackTools}
      />

      {/* 17 Global Footer */}
      <Footer />
    </main>
  );
}

