import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Graphic Design
import {
  graphicDesignMetadata,
  graphicDesignHero,
  graphicDesignOverview,
  graphicDesignProblems,
  graphicDesignFit,
  graphicDesignScope,
  graphicDesignDecisions,
  graphicDesignUseCases,
  graphicDesignProcess,
  graphicDesignReadiness,
  graphicDesignWhyBixeltek,
  graphicDesignInvestmentFactors,
  graphicDesignRelatedServices,
  graphicDesignFaqs,
  graphicDesignFinalCta,
} from "@/data/service/graphic-design";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceUseCaseSection,
  ServiceProcess,
  ServiceTechnologySection,
  ServiceWhyChooseUs,
  ServiceInvestment,
  ServicePostLaunchSection,
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
import heroImg from "@/assets/graphic-designing-hero.webp";
import overviewImg from "@/assets/graphic-designing-overview.jpg";
import decisionsImg from "@/assets/graphic-designing-controlpanels.png";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-graphic-designing.jpg";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";
import {
  Palette,
  Printer,
  Layout,
  FileCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: graphicDesignMetadata.title,
  description: graphicDesignMetadata.description,
  keywords: graphicDesignMetadata.keywords,
  alternates: {
    canonical: graphicDesignMetadata.canonical,
  },
  openGraph: {
    title: graphicDesignMetadata.title,
    description: graphicDesignMetadata.description,
    url: graphicDesignMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Ecosystem Items for Graphic Design
const graphicDesignTechnologyItems: TechnologyItem[] = [
  {
    name: "Figma",
    icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
    href: "https://www.figma.com/",
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator className="w-8 h-8 text-[#FF9A00]" />,
    href: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="w-8 h-8 text-[#31A8FF]" />,
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Adobe InDesign",
    icon: <SiAdobeindesign className="w-8 h-8 text-[#FF3366]" />,
    href: "https://www.adobe.com/products/indesign.html",
  },
  {
    name: "Brand Design Systems",
    icon: <Palette className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/graphic-design",
  },
  {
    name: "Print & Packaging Dielines",
    icon: <Printer className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/graphic-design",
  },
  {
    name: "Social Media Templates",
    icon: <Layout className="w-8 h-8 text-[#EC4899]" />,
    href: "https://bixeltek.com/services/graphic-design",
  },
  {
    name: "Production Asset Handoff",
    icon: <FileCheck className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/graphic-design",
  },
];

// Curated Graphic Design Stack Tools for Final CTA
const graphicDesignStackTools: TechStackItem[] = [
  {
    name: "Brand Identity Assets",
    category: "Visual Foundations",
    description:
      "Vector logos, primary and secondary lockups, colour palettes, typography rules, and usage guides.",
    icon: <Palette className="w-5 h-5 text-white" />,
  },
  {
    name: "Figma & Vector Systems",
    category: "Design Software",
    description:
      "Scalable vector assets, responsive components, and shared libraries organized for ongoing team collaboration.",
    icon: <SiFigma className="w-5 h-5 text-white" />,
  },
  {
    name: "Campaign & Ad Creatives",
    category: "Marketing Collateral",
    description:
      "Coordinated static ad concepts, promotional banners, and size adaptations designed around clear message hierarchy.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    name: "Print & Packaging Production",
    category: "Physical Delivery",
    description:
      "Vendor-compliant artwork with exact dimensions, bleed, safe areas, colour profiles, and dieline alignments.",
    icon: <Printer className="w-5 h-5 text-white" />,
  },
  {
    name: "Presentation & Pitch Decks",
    category: "Sales Collateral",
    description:
      "Clear visual storytelling, infographics, and structured slide layouts that communicate complex offers effortlessly.",
    icon: <Layout className="w-5 h-5 text-white" />,
  },
  {
    name: "Packaging & File Handoff",
    category: "Asset Governance",
    description:
      "Exported raster and vector formats, linked font guidance, and licensing compliance ready for immediate deployment.",
    icon: <FileCheck className="w-5 h-5 text-white" />,
  },
];

export default function GraphicDesignPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
       variant="vivid"
        eyebrow={graphicDesignHero.eyebrow}
        h1={graphicDesignHero.h1}
        p1={graphicDesignHero.p1}
        p2={graphicDesignHero.p2}
        primaryButtonText={graphicDesignHero.primaryButtonText}
        primaryButtonHref={graphicDesignHero.primaryButtonHref}

        microcopy={graphicDesignHero.microcopy}
        visualTagSubtitle="Brand Assets · Marketing Creative"
        visualTagTitle="Identity · Print · Digital"
        visualBadgeText="Production-Ready Design"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led Design */}
      <ServiceOverviewSection
        id="graphic-design-overview"
        eyebrow={graphicDesignOverview.eyebrow}
        h2={graphicDesignOverview.h2}
        intro={graphicDesignOverview.intro}
        body={graphicDesignOverview.body}
        points={graphicDesignOverview.points}
        closingCopy={graphicDesignOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Purpose-built graphic design and cohesive visual brand systems"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="graphic-design-problems"
        eyebrow="COMMON DESIGN CHALLENGES"
        h2="Where Marketing Assets & Brand Visuals Break Down"
        intro="Without a clear visual system and production-ready handoff, marketing teams face visual drift, unreadable ad variations, and files that fail on print."
        cards={graphicDesignProblems}
        gridCols={3}
      />

      {/* 07 Scope / Deliverable Families */}
      <ServiceScopeSection
        id="graphic-design-scope"
        eyebrow="GRAPHIC DESIGN SCOPE"
        h2="Comprehensive Design Work Across Digital, Sales & Print"
        intro="We design purposeful assets structured around where each file will live, ensuring brand consistency across web, social, packaging, and sales collateral."
        cards={graphicDesignScope}
        scopeNote="Every engagement is scoped around your target touchpoints, supplied copy, image rights, and printer or vendor specifications."
      />

      {/* 08 Key Architectural & Design Decisions */}
      <ServiceContentPanels
        id="graphic-design-decisions"
        eyebrow="DESIGN & PRODUCTION DECISIONS"
        h2="Key Choices to Resolve Before Layout Begins"
        intro="A durable visual design requires early choices around identity equity, bespoke vs template formats, digital vs print requirements, and campaign variation depth."
        panels={graphicDesignDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating design hierarchy, campaign adaptations, and production specifications"
        direction="right"
        supportingNote="We resolve these questions during discovery so that artwork production proceeds with clear creative and technical boundaries."
        supportingLink={{
          text: "Get in Touch",
          destination: "#final-cta",
        }}
      />

      {/* 09 Practical Use Cases */}
      <ServiceUseCaseSection
        id="graphic-design-use-cases"
        eyebrow="GRAPHIC DESIGN USE CASES"
        h2="Design Tailored to Real Business Situations"
        intro="From new brand launches and campaign creative variations to product packaging and B2B sales decks, design delivers value when it solves a specific communication problem."
        cards={graphicDesignUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.designApproach}`,
          examples: uc.deliverables,
        }))}
        badgeLabel="Design Scenario"
        examplesTitle="Deliverables"
      />

      {/* 10 How We Work (Delivery Process) */}
      <ServiceProcess
        id="graphic-design-process"
        eyebrow="OUR DESIGN PROCESS"
        h2="A Methodical, Destination-Led Approach to Graphic Design"
        intro="From brief definition and brand asset review to concept direction, master design, adaptation, and production-ready handoff."
        stages={graphicDesignProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We test readability, message hierarchy, and brand consistency across target formats before preparing final production artwork."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: graphicDesignWhyBixeltek.eyebrow,
          h2: graphicDesignWhyBixeltek.h2,
          intro: graphicDesignWhyBixeltek.intro,
          points: graphicDesignWhyBixeltek.points,
          closingCopy: graphicDesignWhyBixeltek.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Creative & Digital Capabilities"
        intro="Graphic design works hand-in-hand with web design, ecommerce development, search advertising, and conversion tracking."
        cards={graphicDesignRelatedServices}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Graphic Design"
        faqs={graphicDesignFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={graphicDesignFinalCta.eyebrow}
        h2={graphicDesignFinalCta.h2}
        intro={graphicDesignFinalCta.description}
        supportingCopy={graphicDesignFinalCta.supportingCopy}
        sectionSubtitle="Creative Engineering & Graphic Design Stack"
        tools={graphicDesignStackTools}
      />

      {/* 18 Global Footer */}
      <Footer />
    </main>
  );
}

