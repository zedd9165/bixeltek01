import React from "react";
import type { Metadata } from "next";

// Data Imports
import {
  wordpressMetadata,
  wordpressBreadcrumbs,
  wordpressJumpLinks,
  wordpressHero,
  wordpressProblems,
  wordpressOverview,
  whenYouNeedWordPressDevelopment,
  wordpressScope,
  wordpressImplementationDecisions,
  wordpressTechnologies,
  wordpressProcess,
  wordpressWhyChoose,
  wordpressInvestmentFactors,
  wordpressRelatedServices,
  wordpressFaqs,
  wordpressFinalCta,
} from "@/data/service/wordpress";

// Reusable Service Components
import {
  ServiceHero,
  ServicePageNav,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
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
  SiWordpress,
  SiPhp,
  SiMysql,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";
import {
  Code2,
  Database,
  Layers,
  Palette,
  Blocks,
  Workflow,
  Search,
  Gauge,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import wpDashboardImg from "@/assets/wordpress-hero.webp";
import wordpresscontrolpanel from '@/assets/wordpress-controlpanel.png'
import wpoverview from '@/assets/wordpress-overview.jpg'
import whyChooseWpImg from "@/assets/why-choose-bixeltek-for-wordpress.webp";


export const metadata: Metadata = {
  title: wordpressMetadata.title,
  description: wordpressMetadata.description,
  keywords: wordpressMetadata.keywords,
  alternates: {
    canonical: wordpressMetadata.canonical,
  },
  openGraph: {
    title: wordpressMetadata.title,
    description: wordpressMetadata.description,
    url: wordpressMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Stack Adaptations for Honeycomb Section
const wordpressHoneycombTech: TechnologyItem[] = [
  {
    name: "Block Editor (Gutenberg)",
    icon: <Blocks className="w-full h-full text-blue-500" />,
    href: "https://wordpress.org/documentation/article/wordpress-editor/",
  },
  {
    name: "Site Editor & Block Themes",
    icon: <Palette className="w-full h-full text-indigo-500" />,
    href: "https://wordpress.org/documentation/article/site-editor/",
  },
  {
    name: "Themes & Child Themes",
    icon: <Layers className="w-full h-full text-purple-500" />,
    href: "https://wordpress.org/documentation/article/work-with-themes/",
  },
  {
    name: "Plugins & Custom Post Types",
    icon: <Code2 className="w-full h-full text-cyan-500" />,
    href: "https://wordpress.org/documentation/",
  },
  {
    name: "REST API & Headless",
    icon: <Workflow className="w-full h-full text-amber-500" />,
    href: "https://developer.wordpress.org/rest-api/",
  },
  {
    name: "Google Analytics 4 & GTM",
    icon: <SiGoogleanalytics />,
    iconColor: "text-[#E37400]",
    href: "https://analytics.google.com",
  },
  {
    name: "PHP 8+ & Custom Hooks",
    icon: <SiPhp />,
    iconColor: "text-[#777BB4]",
  },
  {
    name: "MySQL & Database Optimization",
    icon: <SiMysql />,
    iconColor: "text-[#00758F]",
  },
  {
    name: "Technical SEO & Schema",
    icon: <Search className="w-full h-full text-emerald-500" />,
  },
  {
    name: "Site Health & Performance",
    icon: <HeartPulse className="w-full h-full text-rose-500" />,
    href: "https://wordpress.org/documentation/article/site-health-screen/",
  },
];

// Tools for Final CTA
const wordpressCtaTools: TechStackItem[] = [
  {
    name: "WordPress Core & Block System",
    category: "CMS Foundation",
    description: "Configured cleanly with structured reusable blocks and custom content fields to prevent plugin dependency.",
    icon: <SiWordpress />,
  },
  {
    name: "WordPress REST API & Webhooks",
    category: "Data & Integrations",
    description: "Supported endpoints and webhook handlers connecting CRM, booking, lead forms, and business tools.",
    icon: <Workflow />,
  },
  {
    name: "Diagnostics & Object Caching",
    category: "Performance Engineering",
    description: "Server-side caching and script optimization addressing measured bottlenecks across hosting and assets.",
    icon: <Gauge />,
  },
  {
    name: "Google Analytics 4 & Tag Manager",
    category: "Measurement & Analytics",
    description: "Standardized event telemetry tracking key visitor interactions, enquiry submissions, and conversions.",
    icon: <SiGoogleanalytics />,
  },
  {
    name: "Search Architecture & Redirects",
    category: "Search Continuity",
    description: "Clean taxonomy hierarchy, XML sitemaps, semantic structure, and 301 URL migration mapping.",
    icon: <Search />,
  },
  {
    name: "Staging, Backups & Security",
    category: "Quality & Governance",
    description: "Isolated staging environments with update verification protocols and recovery plans.",
    icon: <ShieldCheck />,
  },
];

export default function WordPressDevelopmentPage() {
  return (
   <main className="bg-[#08080C] min-h-screen"> 
      {/* 02 Hero Section */}
      <ServiceHero
        eyebrow={wordpressHero.eyebrow}
        h1={wordpressHero.h1}
        p1={wordpressHero.p1}
        p2={wordpressHero.p2}
        primaryButtonText={wordpressHero.primaryButtonText}
        primaryButtonHref={wordpressHero.primaryButtonHref}
        microcopy={wordpressHero.microcopy}
        visualImage={wpDashboardImg}
        visualTagSubtitle="WordPress Platform Delivery"
        visualTagTitle="Custom Themes · Block Architecture · Integrations"
        visualBadgeText="Production Tested"
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 05 Overview Section */}
      <ServiceOverviewSection
        id="wordpress-overview"
        eyebrow={wordpressOverview.eyebrow}
        h2={wordpressOverview.h2}
        intro={wordpressOverview.intro}
        body={wordpressOverview.body}
        closingCopy={wordpressOverview.closingCopy}
        imageSrc={wpoverview}
        imageAlt="WordPress custom theme and dashboard preview"
        direction="left"
      />

      {/* 14 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Digital Services That Complement Your WordPress Site"
        intro="Explore related services across web design, custom-coded web applications, ecommerce development, SEO, and conversion optimization."
        cards={wordpressRelatedServices}
        gridCols={3}
      />

      {/* 06 Common Challenges */}
      <ServiceProblemSection
        id="wordpress-challenges"
        eyebrow="COMMON WORDPRESS CHALLENGES"
        h2="Why WordPress Sites Require Thoughtful Engineering"
        intro="A site assembled without clear architecture can accumulate overlapping plugins, brittle dependencies, slow page loads, and fragile editing workflows."
        cards={wordpressProblems}
        gridCols={3}
      />
      {/* 08 Capabilities / Scope of Work */}
      <ServiceScopeSection
        id="wordpress-capabilities"
        eyebrow="WORDPRESS DEVELOPMENT SCOPE"
        h2="Technical Scope Across Development, Customization & Integrations"
        intro="We engineer clean WordPress architectures, tailored templates, structured editorial workflows, and reliable system connections."
        cards={wordpressScope}
        scopeNote="Every project is planned around your content hierarchy, editorial workflow, and business requirements—avoiding unnecessary plugins and bespoke code where native configuration suffices."
      />

      {/* 09 Implementation Decisions & Trade-Offs (Editorial Split) */}
      <ServiceContentPanels
        id="wordpress-decisions"
        eyebrow="ARCHITECTURAL TRADE-OFFS"
        h2="Key Implementation Decisions Behind a Maintainable WordPress Site"
        intro="We evaluate theme capabilities, block editor suitability, plugin dependencies, performance diagnostics, and migration risks before writing code."
        panels={wordpressImplementationDecisions.map((d) => ({
          title: d.title,
          description: `${d.context} ${d.consideration}`,
        }))}
        image={wordpresscontrolpanel}
        imageAlt="WordPress implementation decision architecture"
        direction="right"
        supportingLink={{
          text: "Explore Web Design & Development",
          destination: "/services/web-design",
        }}
        supportingNote="We choose practical, maintainable solutions that keep your WordPress website fast, secure, and straightforward for your team to manage."
      />

                   <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: wordpressWhyChoose.eyebrow,
          h2: wordpressWhyChoose.h2,
          intro: wordpressWhyChoose.intro,
          image: whyChooseWpImg,
          points: wordpressWhyChoose.points.map((pt) => ({ title: pt.title })),
          closingCopy: wordpressWhyChoose.closingCopy,
          ctaText: wordpressWhyChoose.ctaText,
          ctaHref: wordpressWhyChoose.ctaHref,
        }}
        defaultImage={whyChooseWpImg}
      />


      {/* 11 Structured Delivery Process */}
      <ServiceProcess
        id="wordpress-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Step-by-Step WordPress Development Workflow"
        intro="From requirement analysis through architecture, development, QA testing, and launch handover, our process ensures stable delivery."
        stages={wordpressProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We test template responsiveness, form submissions, redirects, analytics events, and editing workflows in staging before launch."
      />

      {/* 15 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About WordPress Development With Bixeltek"
        faqs={wordpressFaqs}
      />

      {/* 16 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={wordpressFinalCta.eyebrow}
        h2={wordpressFinalCta.h2}
        intro={wordpressFinalCta.description}
        sectionSubtitle="WordPress Engineering & Quality Architecture"
        tools={wordpressCtaTools}
      />

    </main>
  );
}

