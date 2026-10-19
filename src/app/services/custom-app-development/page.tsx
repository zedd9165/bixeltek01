import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Web & Mobile Application Development Pillar Page
import {
  applicationDevelopmentMetadata,
  applicationDevelopmentBreadcrumbs,
  applicationDevelopmentJumpLinks,
  applicationDevelopmentHero,
  applicationDevelopmentOverview,
  applicationDevelopmentApproach,
  applicationDevelopmentFit,
  applicationDevelopmentScope,
  applicationDevelopmentProcess,
  applicationDevelopmentWhyChoose,
  applicationDevelopmentRelatedServices,
  applicationDevelopmentFaqs,
  applicationDevelopmentFinalCta,
} from "@/data/service/web-mobile-app-development";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServicePlatformSection,
  ServiceContentPanels,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceProcess,
  ServiceTechnologySection,
  ServiceWhyChooseUs,
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
import heroVisualImg from "@/assets/web-and-mobile.jpg";
import overviewVisualImg from "@/assets/web-and-mobile-overview.jpg";
import approachVisualImg from "@/assets/mobile-app-developer-skills.jpeg";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-app-development.png";
import webAppImg from "@/assets/dashboard-image.png";
import mobileAppImg from "@/assets/distance-learning-app-template-ui.png";
import connectedImg from "@/assets/easypaymentsgateway-panel-responsive-1200-desktop-tablet-mobile-no-padding.png";

// Tech Stack Icons
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiDocker,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaApple,
} from "react-icons/fa6";
import {
  Smartphone,
  Globe,
  Layers,
  Workflow,
  ShieldCheck,
  Cloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: applicationDevelopmentMetadata.title,
  description: applicationDevelopmentMetadata.description,
  keywords: applicationDevelopmentMetadata.keywords,
  alternates: {
    canonical: applicationDevelopmentMetadata.canonical,
  },
  openGraph: {
    title: applicationDevelopmentMetadata.title,
    description: applicationDevelopmentMetadata.description,
    url: applicationDevelopmentMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Core Pillars Showcase: Web, Mobile & Unified Connected Ecosystems
const applicationPillarOptions: PlatformOptionCardItem[] = [
  {
    title: "Web Application Development",
    description:
      "Browser-based software, internal operations portals, customer self-service workspaces, interactive dashboards and API-driven web systems engineered with Next.js, React and scalable backends.",
    linkText: "Explore Web Applications",
    destination: "/services/custom-app-development/web-application-development",
    badge: "Browser & Cloud Portals",
    image: webAppImg,
  },
  {
    title: "Mobile Application Development",
    description:
      "Native and cross-platform apps for iOS and Android engineered for mobile-first tasks, on-the-go interactions, offline capabilities, push notifications and device hardware integration.",
    linkText: "Explore Mobile Applications",
    destination: "/services/custom-app-development/mobile-app-development",
    badge: "iOS & Android Apps",
    image: mobileAppImg,
  },
  {
    title: "Connected Multi-Platform Products",
    description:
      "Unified digital products sharing a single backend, database and authentication layer across web and mobile—giving administrators desktop control and mobile users fast on-the-go execution.",
    linkText: "Discuss Your Architecture",
    destination: "#final-cta",
    badge: "Unified Platforms",
    image: connectedImg,
  },
];

// Curated Engineering Technology Ecosystem for Honeycomb Hub
const applicationTechnologies: TechnologyItem[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6" />,
    iconColor: "text-black",
  },
  {
    name: "React",
    icon: <SiReact className="w-6 h-6" />,
    iconColor: "text-sky-500",
  },
  {
    name: "React Native",
    icon: <SiReact className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "iOS (Swift)",
    icon: <SiSwift className="w-6 h-6" />,
    iconColor: "text-orange-500",
  },
  {
    name: "Android (Kotlin)",
    icon: <SiKotlin className="w-6 h-6" />,
    iconColor: "text-purple-600",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-6 h-6" />,
    iconColor: "text-cyan-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6" />,
    iconColor: "text-emerald-600",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6" />,
    iconColor: "text-sky-600",
  },
  {
    name: "GraphQL & REST",
    icon: <SiGraphql className="w-6 h-6" />,
    iconColor: "text-pink-600",
  },
  {
    name: "Docker & Cloud",
    icon: <SiDocker className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
];

// Curated Application Tech Stack for Final CTA Terminal
const webMobileAppStackTools: TechStackItem[] = [
  {
    name: "Next.js & React",
    category: "Web Frontend Architecture",
    description:
      "Server-rendered and client-side interfaces built for fast interaction, state management, and intuitive workflows.",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "React Native & Flutter",
    category: "Cross-Platform Mobile",
    description:
      "Single-codebase mobile applications targeting iOS and Android with native performance and shared business logic.",
    icon: <Smartphone className="w-5 h-5 text-white" />,
  },
  {
    name: "Swift & Kotlin",
    category: "Native Platform Development",
    description:
      "Platform-native engineering leveraging deep OS capabilities, sensors, background execution, and hardware features.",
    icon: <FaApple className="w-5 h-5 text-white" />,
  },
  {
    name: "TypeScript & Node.js",
    category: "Type-Safe Backend Systems",
    description:
      "Reliable API servers and business logic services with strict data schemas and automated test suites.",
    icon: <SiTypescript className="w-5 h-5 text-white" />,
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Relational Data Models",
    description:
      "Structured, query-optimized relational databases designed around strict data integrity, indexing, and transactional safety.",
    icon: <SiPostgresql className="w-5 h-5 text-white" />,
  },
  {
    name: "Cloud & Container Pipelines",
    category: "Infrastructure & Telemetry",
    description:
      "Automated staging, containerized deployments, health monitoring, session telemetry, and granular role permissions.",
    icon: <Cloud className="w-5 h-5 text-white" />,
  },
];

export default function WebMobileAppDevelopmentPillarPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero Section */}
      <ServiceHero
        eyebrow={applicationDevelopmentHero.eyebrow}
        h1={applicationDevelopmentHero.h1}
        p1={applicationDevelopmentHero.p1}
        p2={applicationDevelopmentHero.p2}
        primaryButtonText={applicationDevelopmentHero.primaryButtonText}
        primaryButtonHref={applicationDevelopmentHero.primaryButtonHref}
        microcopy={applicationDevelopmentHero.microcopy}
        visualImage={heroVisualImg}
        visualTagSubtitle="Application Engineering"
        visualTagTitle="Web · Mobile · Cloud Systems"
        visualBadgeText="Workflow-First Architecture"
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 What Application Development Means (Overview) */}
      <ServiceOverviewSection
        id="application-development-overview"
        eyebrow={applicationDevelopmentOverview.eyebrow}
        h2={applicationDevelopmentOverview.h2}
        intro={applicationDevelopmentOverview.intro}
        body={applicationDevelopmentOverview.body}
        closingCopy={applicationDevelopmentOverview.closingCopy}
        imageSrc={overviewVisualImg}
        imageAlt="Web and mobile application user interface and system architecture"
        direction="left"
      />


      {/* 06 Architecture & Approach Decisions (Editorial Split) */}
      <ServiceContentPanels
        id="application-approach"
        eyebrow={applicationDevelopmentApproach.eyebrow}
        h2={applicationDevelopmentApproach.h2}
        intro={applicationDevelopmentApproach.intro}
        panels={applicationDevelopmentApproach.panels.map((p) => ({
          title: p.title,
          description: `${p.context} ${p.consideration}`,
        }))}
        image={approachVisualImg}
        imageAlt="Evaluating web, mobile, and connected product delivery architectures"
        direction="right"
        supportingNote={applicationDevelopmentApproach.supportingNote}
        supportingLink={{
          text: "Explore Our Full Development Scope",
          destination: "#application-capabilities",
        }}
      />

      {/* 08 Application Capabilities (Scope) */}
      <ServiceScopeSection
        id="application-capabilities"
        eyebrow="APPLICATION CAPABILITIES"
        h2="From Internal Operations to Customer-Facing Products"
        intro="We engineer custom web and mobile applications across the entire product lifecycle—ensuring robust architecture, intuitive interfaces, and dependable integrations."
        cards={applicationDevelopmentScope}
        scopeNote="Every application project is planned around your users' actual workflows, security requirements, and operational data—delivering immediate utility with room for future iteration."
      />

      {/* 09 Delivery Process (How We Work) */}
      <ServiceProcess
        id="application-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical Process Grounded in Real Business Requirements"
        intro="From understanding user workflows and choosing the right platform to interface design, system integration, and iterative post-launch improvements."
        stages={applicationDevelopmentProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate critical user journeys, role permissions, API data flows, and edge-case handling before launch, ensuring your team has a dependable system."
      />

      {/* 10 Technology Ecosystem (Shared Honeycomb Cluster) */}
      <ServiceTechnologySection
        id="application-technologies"
        eyebrow="ENGINEERING ECOSYSTEM"
        h2="Modern Frameworks & Cloud Architecture Built to Scale"
        intro="We select technologies suited to your operational requirements—deploying type-safe web stacks, high-performance mobile frameworks, and scalable cloud services."
        technologies={applicationTechnologies}
        ctaText="Need tailored architecture advice, API integration, or multi-platform planning?"
        ctaButtonText="Get In Touch"
        ctaHref="#final-cta"
      />

      {/* 11 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: applicationDevelopmentWhyChoose.eyebrow,
          h2: applicationDevelopmentWhyChoose.h2,
          intro: applicationDevelopmentWhyChoose.intro,
          points: applicationDevelopmentWhyChoose.points,
          closingCopy: applicationDevelopmentWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 12 Detailed Service Paths (Direct routing to Web Apps & Mobile Apps) */}
      <ServiceRelatedServices
        id="service-paths"
        eyebrow="DETAILED SERVICE PATHS"
        h2="Explore Dedicated Web, Mobile & Digital Capabilities"
        intro="Dive deeper into our specialist service pages for dedicated browser applications, native iOS/Android mobile development, website engineering, and commerce."
        cards={applicationDevelopmentRelatedServices}
        gridCols={4}
      />

      {/* 13 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About Application Development"
        faqs={applicationDevelopmentFaqs}
      />

      {/* 14 Final CTA & Contact Terminal */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={applicationDevelopmentFinalCta.eyebrow}
        h2={applicationDevelopmentFinalCta.h2}
        intro={applicationDevelopmentFinalCta.description}
        supportingCopy={applicationDevelopmentFinalCta.supportingCopy}
        sectionSubtitle="Application Stack & Engineering Standards"
        tools={webMobileAppStackTools}
      />

      {/* 15 Global Footer */}
      <Footer />
    </main>
  );
}

