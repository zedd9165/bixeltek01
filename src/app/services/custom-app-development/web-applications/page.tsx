import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Web Applications
import {
  webApplicationsMetadata,
  webApplicationsBreadcrumbs,
  webApplicationsJumpLinks,
  webApplicationsHero,
  webApplicationsOverview,
  webApplicationsFit,
  webApplicationsScope,
  webApplicationsUseCases,
  webApplicationsControlPanels,
  webApplicationsProcess,
  webApplicationsWhyChoose,
  webApplicationsRelatedServices,
  webApplicationsFaqs,
  webApplicationsFinalCta,
} from "@/data/service/web-applications";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServicePageNav,
  ServiceOverviewSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceUseCaseSection,
  ServiceContentPanels,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import webAppHeroImg from "@/assets/web-app-hero.jpg";
import webAppOverviewImg from "@/assets/web-application-overview.webp";
import webApplicationsControlPanelsImage from "@/assets/web-app-controlpanels.webp";
import whyChooseAppImg from "@/assets/why-choose-bixeltek-for-app-development.png";

// Icons for Tech Stack in Final CTA
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
} from "react-icons/si";
import {
  ShieldCheck,
  Workflow,
  Cloud,
  Layers,
  Database,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: webApplicationsMetadata.title,
  description: webApplicationsMetadata.description,
  keywords: webApplicationsMetadata.keywords,
  alternates: {
    canonical: webApplicationsMetadata.canonical,
  },
  openGraph: {
    title: webApplicationsMetadata.title,
    description: webApplicationsMetadata.description,
    url: webApplicationsMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Curated Application Tech Stack for Final CTA
const webAppStackTools: TechStackItem[] = [
  {
    name: "Next.js & React",
    category: "Modern Frontend Architecture",
    description:
      "Server-rendered and client-side interfaces built for fast interaction, clean state management, and intuitive workflows.",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "TypeScript & Node.js",
    category: "Type-Safe Backend Logic",
    description:
      "Reliable application logic and server APIs with strict type validation, reducing runtime errors and maintenance overhead.",
    icon: <SiTypescript className="w-5 h-5 text-white" />,
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Relational Data Models",
    description:
      "Structured, query-optimized relational databases designed around data integrity, relations, and reliable backups.",
    icon: <SiPostgresql className="w-5 h-5 text-white" />,
  },
  {
    name: "REST & GraphQL APIs",
    category: "System Integrations",
    description:
      "Clean API integrations connecting your application with existing ERPs, CRMs, payment providers, and external tools.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "RBAC & Authentication",
    category: "Access & Governance",
    description:
      "Granular role-based permissions, session security, and user accounts tailored to internal teams and external customers.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    name: "Cloud & CI/CD Pipelines",
    category: "Operational Stability",
    description:
      "Automated staging and production deployment environments with health telemetry, error logging, and scalability.",
    icon: <Cloud className="w-5 h-5 text-white" />,
  },
];

export default function WebApplicationsPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 01 Hero */}
      <ServiceHero
        eyebrow={webApplicationsHero.eyebrow}
        h1={webApplicationsHero.h1}
        p1={webApplicationsHero.p1}
        p2={webApplicationsHero.p2}
        primaryButtonText={webApplicationsHero.primaryButtonText}
        primaryButtonHref={webApplicationsHero.primaryButtonHref}
        microcopy={webApplicationsHero.microcopy}
        visualImage={webAppHeroImg}
        visualTagSubtitle="Custom Web Engineering"
        visualTagTitle="Portals · Dashboards · APIs"
        visualBadgeText="Workflow-First"
      />

      {/* 02 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 03 What a Web Application Is / Overview */}
      <ServiceOverviewSection
        id="web-app-overview"
        eyebrow={webApplicationsOverview.eyebrow}
        h2={webApplicationsOverview.h2}
        intro={webApplicationsOverview.intro}
        body={webApplicationsOverview.body}
        closingCopy={webApplicationsOverview.closingCopy}
        imageSrc={webAppOverviewImg}
        imageAlt="Custom web application architecture and dashboard interface"
        direction="left"
      />

      {/* 05 Application Types / Scope */}
      <ServiceScopeSection
        id="web-app-scope"
        eyebrow="APPLICATION TYPES & SCOPE"
        h2="Focused Web Applications Shaped Around Defined Business Needs"
        intro="We build purposeful web applications that connect your team, clients, and operational systems—delivering reliable functionality without unnecessary architectural bloat."
        cards={webApplicationsScope}
        scopeNote="Every application scope is shaped around your users' actual workflows, security constraints, and operational data—delivering immediate utility with room for future iteration."
      />

      {/* 06 Practical Web Application Use Cases */}
      <ServiceUseCaseSection
        id="web-app-use-cases"
        eyebrow="PRACTICAL APPLICATION USE CASES"
        h2="Where Custom Web Applications Deliver Real Operational Value"
        intro="From replacing spreadsheet-driven operations to customer self-service workspaces and connected system integrations, here is how custom web applications support daily workflows."
        cards={webApplicationsUseCases}
      />

      {/* 07 Control Panels & Operational Interfaces */}
      <ServiceContentPanels
        id="web-app-control-panels"
        eyebrow="CONTROL PANELS & OPERATIONAL INTERFACES"
        h2="Give Your Team Clear Control Over Daily Operations"
        intro="A useful control panel does more than display data. It gives the right people a clear view of activity, the ability to take appropriate actions and a reliable way to understand what needs attention."
        panels={webApplicationsControlPanels.map((panel) => ({
          title: panel.title,
          description: `${panel.context} ${panel.consideration}`,
        }))}
        image={webApplicationsControlPanelsImage}
        imageAlt="Business web application control panel showing operational data, workflow status and management actions"
        direction="right"
        supportingLink={{
          text: "Explore Our Web Design & Development Services",
          destination: "/services/web-design",
        }}
        supportingNote="We design operational interfaces around real tasks, appropriate permissions and the information each user needs."
      />

      {/* 08 How We Work / Process */}
      <ServiceProcess
        id="web-app-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Workflow-First Approach to Application Development"
        intro="From initial workflow mapping and scope definition to interface design, API integration, and user validation, our process focuses on delivering a reliable tool."
        stages={webApplicationsProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate user journeys, role permissions, API data flows, and edge-case handling before launch, ensuring your team has a dependable system."
      />

      {/* 09 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: webApplicationsWhyChoose.eyebrow,
          h2: webApplicationsWhyChoose.h2,
          intro: webApplicationsWhyChoose.intro,
          points: webApplicationsWhyChoose.points,
          closingCopy: webApplicationsWhyChoose.closingCopy,
        }}
        defaultImage={whyChooseAppImg}
        direction="left"
      />

      {/* 10 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Digital Capabilities Across Web Engineering"
        intro="Explore related website solutions depending on whether your primary objective is marketing communication, tailored frontends, or structured content publishing."
        cards={webApplicationsRelatedServices}
        gridCols={3}
      />

      {/* 11 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Custom Web Application Development"
        faqs={webApplicationsFaqs}
      />

      {/* 12 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={webApplicationsFinalCta.eyebrow}
        h2={webApplicationsFinalCta.h2}
        intro={webApplicationsFinalCta.description}
        supportingCopy={webApplicationsFinalCta.supportingCopy}
        sectionSubtitle="Application Stack & Engineering Standards"
        tools={webAppStackTools}
      />

      {/* 13 Footer */}
      <Footer />
    </main>
  );
}
