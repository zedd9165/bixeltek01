import React from "react";
import type { Metadata } from "next";

// Data Imports
import {
  strapiMetadata,
  strapiBreadcrumbs,
  strapiJumpLinks,
  strapiHero,
  strapiProblems,
  strapiOverview,
  whenYouNeedStrapiDevelopment,
  strapiScope,
  strapiUseCases,
  strapiImplementationDecisions,
  strapiTechnologies,
  strapiProcess,
  strapiWhyChoose,
  strapiInvestmentFactors,
  strapiRelatedServices,
  strapiFaqs,
  strapiFinalCta,
} from "@/data/service/strapi";

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
  ServiceProcess,
  ServiceWhyChooseUs,
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
  SiStrapi,
  SiNextdotjs,
  SiReact,
  SiGraphql,
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiGoogleanalytics,
} from "react-icons/si";
import {
  Layers,
  Code2,
  Database,
  Blocks,
  Workflow,
  Search,
  Gauge,
  ShieldCheck,
  Eye,
  Lock,
} from "lucide-react";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import whyChooseAppImg from "@/assets/why-choose-bixeltek-for-strapi.png";
import strapiHeroImg from '@/assets/strapi-hero.png'
import  strapiOverviewImg from '@/assets/strapi-overview.png'
import strapiControlPanelImg from '@/assets/strapicontrolpanels.png' 
import uiVisualsImg from "@/assets/shopify-ui-components-visuals.png";

export const metadata: Metadata = {
  title: strapiMetadata.title,
  description: strapiMetadata.description,
  keywords: strapiMetadata.keywords,
  alternates: {
    canonical: strapiMetadata.canonical,
  },
  openGraph: {
    title: strapiMetadata.title,
    description: strapiMetadata.description,
    url: strapiMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Stack Adaptations for Honeycomb Section
const strapiHoneycombTech: TechnologyItem[] = [
  {
    name: "Strapi v4 / v5 Core",
    icon: <SiStrapi className="w-full h-full text-[#4945FF]" />,
    href: "https://docs.strapi.io/cms/intro",
  },
  {
    name: "Next.js & App Router",
    icon: <SiNextdotjs className="w-full h-full text-white" />,
    href: "https://nextjs.org",
  },
  {
    name: "Content-Type Builder",
    icon: <Blocks className="w-full h-full text-indigo-400" />,
    href: "https://docs.strapi.io/cms/features/content-type-builder",
  },
  {
    name: "GraphQL & REST APIs",
    icon: <SiGraphql className="w-full h-full text-[#E10098]" />,
    href: "https://docs.strapi.io/cms/api/rest",
  },
  {
    name: "TypeScript & Node.js",
    icon: <SiTypescript className="w-full h-full text-[#3178C6]" />,
  },
  {
    name: "PostgreSQL & Database",
    icon: <SiPostgresql className="w-full h-full text-[#4169E1]" />,
  },
  {
    name: "RBAC & Custom Roles",
    icon: <Lock className="w-full h-full text-amber-500" />,
    href: "https://docs.strapi.io/cms/features/rbac",
  },
  {
    name: "Draft & Live Preview",
    icon: <Eye className="w-full h-full text-cyan-400" />,
  },
  {
    name: "Webhooks & Sync",
    icon: <Workflow className="w-full h-full text-emerald-400" />,
  },
  {
    name: "Deployment & Caching",
    icon: <Gauge className="w-full h-full text-rose-400" />,
  },
];

// Tools for Final CTA
const strapiCtaTools: TechStackItem[] = [
  {
    name: "Strapi Headless CMS",
    category: "Structured Content Backend",
    description: "Configured with modular collection types, single types, and reusable components tailored to editorial workflows.",
    icon: <SiStrapi />,
  },
  {
    name: "REST & GraphQL Endpoints",
    category: "API Telemetry & Delivery",
    description: "Explicit query population, field filtering, and deep relation retrieval without payload bloating.",
    icon: <SiGraphql />,
  },
  {
    name: "Role-Based Access & Permissions",
    category: "Access & Governance",
    description: "Granular permissions for content creators, managers, and external API consumers.",
    icon: <ShieldCheck />,
  },
  {
    name: "Draft & Live Preview Mode",
    category: "Editorial Experience",
    description: "Secure preview pipelines letting editors preview unpublished content on live Next.js frontends.",
    icon: <Eye />,
  },
  {
    name: "Webhooks & External Integrations",
    category: "Connected Workflows",
    description: "Automated ISR revalidation, search indexing, and CRM synchronization triggers on content publish.",
    icon: <Workflow />,
  },
  {
    name: "Environments & Database Backups",
    category: "Operational Stability",
    description: "Separated staging and production environments with migration scripting and automated backup plans.",
    icon: <Database />,
  },
];

export default function StrapiDevelopmentPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      <ServiceHero
        eyebrow={strapiHero.eyebrow}
        h1={strapiHero.h1}
        p1={strapiHero.p1}
        p2={strapiHero.p2}
        primaryButtonText={strapiHero.primaryButtonText}
        primaryButtonHref="#contact-us"
        microcopy={strapiHero.microcopy}
        visualImage={strapiHeroImg}
        visualTagSubtitle="Headless Content Architecture"
        visualTagTitle="Structured Models · Custom APIs · Next.js"
        visualBadgeText="API-First System"
      />

      <ClientTrustMarquee />

      <ServiceOverviewSection
        id="strapi-overview"
        eyebrow={strapiOverview.eyebrow}
        h2={strapiOverview.h2}
        intro={strapiOverview.intro}
        body={strapiOverview.body}
        closingCopy={strapiOverview.closingCopy}
        imageSrc={strapiOverviewImg}
        imageAlt="Strapi headless CMS architecture and editorial experience preview"
        direction="left"
      />

      
         <ServiceProblemSection
        id="strapi-challenges"
        eyebrow="COMMON HEADLESS CMS CHALLENGES"
        h2="Why Strapi Projects Need Thoughtful Engineering"
        intro="Without clear content modelling, deliberate API query design, and preview integrations, headless architectures can create editorial friction and maintenance debt."
        cards={strapiProblems}
        gridCols={3}
      />

      {/* 14 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Digital Services That Complement Your Strapi Platform"
        intro="Explore related services across web design, WordPress development, custom-coded web applications, ecommerce, and SEO."
        cards={strapiRelatedServices}
        gridCols={3}
      />

      {/* 06 Common Challenges */}
   
      {/* 08 Capabilities / Scope of Work */}
      <ServiceScopeSection
        id="strapi-capabilities"
        eyebrow="STRAPI DEVELOPMENT SCOPE"
        h2="Technical Scope Across Content Modelling, APIs & Frontends"
        intro="We engineer clean Strapi content schemas, tailored API endpoints, frontend integrations, and reliable publishing workflows."
        cards={strapiScope}
        scopeNote="Every project is planned around your publishing workflows, multi-channel consumers, and operational needs—delivering headless flexibility without unnecessary architectural complexity."
      />

      {/* 09 Practical Strapi Use Cases */}
      {strapiUseCases && (
        <ServiceUseCaseSection
          id="strapi-use-cases"
          eyebrow="STRAPI USE CASES"
          h2="Practical Scenarios Where Strapi Headless Architecture Excels"
          intro="From multi-channel publishing to multilingual Arabic-English platforms and enterprise portals, Strapi provides deep flexibility for structured content."
          cards={strapiUseCases}
        />
      )}

      {/* 10 Implementation Decisions & Trade-Offs (Editorial Split) */}
      <ServiceContentPanels
        id="strapi-decisions"
        eyebrow="ARCHITECTURAL TRADE-OFFS"
        h2="Key Implementation Decisions Behind a Reliable Strapi Platform"
        intro="We evaluate content structure, API query paradigms, custom plugin needs, and deployment models before committing to code."
        panels={strapiImplementationDecisions.map((d) => ({
          title: d.title,
          description: `${d.context} ${d.consideration}`,
        }))}
        image={strapiControlPanelImg}
        imageAlt="Strapi implementation decision architecture"
        direction="right"
        supportingLink={{
          text: "Explore Web Design & Development",
          destination: "/services/web-design",
        }}
        supportingNote="We choose practical, maintainable solutions that keep your content platform scalable, secure, and straightforward for editors to use."
      />

              <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: strapiWhyChoose.eyebrow,
          h2: strapiWhyChoose.h2,
          intro: strapiWhyChoose.intro,
          image: whyChooseAppImg,
          points: strapiWhyChoose.points.map((pt) => ({ title: pt.title })),
          closingCopy: strapiWhyChoose.closingCopy,
          ctaText: strapiWhyChoose.ctaText,
          ctaHref: "#contact-us",
        }}
        defaultImage={whyChooseAppImg}
      />

      {/* 11 Structured Delivery Process */}
      <ServiceProcess
        id="strapi-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Step-by-Step Strapi Implementation Workflow"
        intro="From content discovery through schema modelling, API development, validation, and deployment handover, our process ensures dependable delivery."
        stages={strapiProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate content relations, permission rules, draft preview states, responsive rendering, and webhook triggers before launching into production."
      />

      {/* 15 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About Strapi Development With Bixeltek"
        faqs={strapiFaqs}
      />

      {/* 16 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="contact-us"
        eyebrow={strapiFinalCta.eyebrow}
        h2={strapiFinalCta.h2}
        intro={strapiFinalCta.description}
        sectionSubtitle="Strapi Engineering & Quality Architecture"
        tools={strapiCtaTools}
      />

    </main>
  );
}

