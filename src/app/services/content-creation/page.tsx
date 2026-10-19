import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Content Creation
import {
  contentCreationMetadata,
  contentCreationHero,
  contentCreationOverview,
  contentCreationProblems,
  contentCreationFit,
  contentCreationScope,
  contentCreationDecisions,
  contentCreationUseCases,
  contentCreationProcess,
  contentCreationReadiness,
  contentCreationWhyBixeltek,
  contentCreationInvestmentFactors,
  contentCreationRelatedServices,
  contentCreationFaqs,
  contentCreationFinalCta,
} from "@/data/service/content-creation";

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

import heroImg from "@/assets/content-hero.jpg";
import overviewImg from "@/assets/content-overview.jpg";
import decisionsImg from "@/assets/content-controlpanel.png";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-content-creation.jpg";

// Icons for Production Ecosystem & Final CTA
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
} from "react-icons/si";
import {
  Camera,
  Video,
  Film,
  Sparkles,
  Clapperboard,
  Layers,
  FileCheck,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: contentCreationMetadata.title,
  description: contentCreationMetadata.description,
  keywords: contentCreationMetadata.keywords,
  alternates: {
    canonical: contentCreationMetadata.canonical,
  },
  openGraph: {
    title: contentCreationMetadata.title,
    description: contentCreationMetadata.description,
    url: contentCreationMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Production Ecosystem Items for Content Creation
const contentCreationTechnologyItems: TechnologyItem[] = [
  {
    name: "Adobe Premiere Pro",
    icon: <SiAdobepremierepro className="w-8 h-8 text-[#9999FF]" />,
    href: "https://www.adobe.com/products/premiere.html",
  },
  {
    name: "Adobe After Effects",
    icon: <SiAdobeaftereffects className="w-8 h-8 text-[#9999FF]" />,
    href: "https://www.adobe.com/products/aftereffects.html",
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="w-8 h-8 text-[#31A8FF]" />,
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Adobe Lightroom",
    icon: <SiAdobelightroom className="w-8 h-8 text-[#31A8FF]" />,
    href: "https://www.adobe.com/products/photoshop-lightroom.html",
  },
  {
    name: "Commercial Photography",
    icon: <Camera className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/content-creation",
  },
  {
    name: "Cinematic Video Capture",
    icon: <Video className="w-8 h-8 text-[#F59E0B]" />,
    href: "https://bixeltek.com/services/content-creation",
  },
  {
    name: "Vertical Social Re-framing",
    icon: <Film className="w-8 h-8 text-[#EC4899]" />,
    href: "https://bixeltek.com/services/content-creation",
  },
  {
    name: "Multi-Format Handover",
    icon: <FileCheck className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/content-creation",
  },
];

// Curated Content Production Stack Tools for Final CTA
const contentCreationStackTools: TechStackItem[] = [
  {
    name: "Brief & Pre-Production",
    category: "Creative Foundations",
    description:
      "Structured shot lists, talking points, mood boards, and location planning resolved before the cameras roll.",
    icon: <Clapperboard className="w-5 h-5 text-white" />,
  },
  {
    name: "Ecommerce & Product Capture",
    category: "Commercial Imagery",
    description:
      "Detailed packshots, in-use demonstrations, scale references, and lifestyle contexts tailored for web stores.",
    icon: <Camera className="w-5 h-5 text-white" />,
  },
  {
    name: "Short-Form Vertical Video",
    category: "Social Placements",
    description:
      "Reels, Shorts, and TikTok-ready assets with thoughtful pacing, safe-zone framing, and readable captions.",
    icon: <Video className="w-5 h-5 text-white" />,
  },
  {
    name: "Founder & Team Interviews",
    category: "Brand Authority",
    description:
      "Grounded on-camera discussions with clean audio and focused edits that present expertise authentically.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    name: "Post-Production & Colour",
    category: "Asset Finishing",
    description:
      "Trimming, colour grading, audio cleanup, subtitles, titles, and channel-ready aspect ratio adaptations.",
    icon: <Layers className="w-5 h-5 text-white" />,
  },
  {
    name: "Channel-Ready Asset Handover",
    category: "Asset Governance",
    description:
      "Cleanly organized exports, documented licensing rights, and agreed source file access for long-term reuse.",
    icon: <Share2 className="w-5 h-5 text-white" />,
  },
];

export default function ContentCreationPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        variant="aurora"
        eyebrow={contentCreationHero.eyebrow}
        h1={contentCreationHero.h1}
        p1={contentCreationHero.p1}
        p2={contentCreationHero.p2}
        primaryButtonText={contentCreationHero.primaryButtonText}
        primaryButtonHref={contentCreationHero.primaryButtonHref}
        microcopy={contentCreationHero.microcopy}
        visualTagSubtitle="Photo & Video Production · Deliverables First"
        visualTagTitle="Commercial · Social · Web"
        visualBadgeText="Planned Content Production"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Purpose-Led Production */}
      <ServiceOverviewSection
        id="content-creation-overview"
        eyebrow={contentCreationOverview.eyebrow}
        h2={contentCreationOverview.h2}
        intro={contentCreationOverview.intro}
        body={contentCreationOverview.body}
        points={contentCreationOverview.points}
        closingCopy={contentCreationOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Purpose-planned content creation, product photography and brand video production"
        direction="left"
      />

      {/* 05 Problems / Recognized Friction */}
      <ServiceProblemSection
        id="content-creation-problems"
        eyebrow="COMMON PRODUCTION CHALLENGES"
        h2="Where Content Shoots & Media Libraries Break Down"
        intro="Without an agreed brief, destination-specific framing, and organized handover, businesses end up with footage they cannot easily use."
        cards={contentCreationProblems}
        gridCols={3}
      />


      {/* 07 Scope / Deliverable Families */}
      <ServiceScopeSection
        id="content-creation-scope"
        eyebrow="PRODUCTION SCOPE"
        h2="Planned Deliverables Across Photography, Video & Post-Production"
        intro="We structure shoots around agreed outputs and destinations rather than vague day rates, producing assets ready for web, ecommerce, social, and campaigns."
        cards={contentCreationScope}
        scopeNote="Every shoot is scoped around required scenes, product samples, location permissions, participant releases, and agreed delivery formats."
      />

      {/* 08 Key Architectural & Production Decisions */}
      <ServiceContentPanels
        id="content-creation-decisions"
        eyebrow="PRODUCTION DECISIONS"
        h2="Choices to Resolve Before Cameras Roll"
        intro="Effective content requires clear decisions about hero vs batch capture, single vs multi-channel framing, authentic demonstration vs stylized creative, and rights clearance."
        panels={contentCreationDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating shoot planning, camera framing, and destination format requirements"
        direction="right"
        supportingNote="We resolve these questions during pre-production so production time is spent capturing agreed assets rather than fixing preventable gaps on set."
        supportingLink={{
          text: "Get in Touch",
          destination: "#final-cta",
        }}
      />

      {/* 09 Practical Use Cases */}
      <ServiceUseCaseSection
        id="content-creation-use-cases"
        eyebrow="CONTENT CREATION USE CASES"
        h2="Production Tailored to Real Business Needs"
        intro="From ecommerce catalog upgrades and service walkthroughs to founder introductions, repeatable social libraries, and paid campaign creative concepts."
        cards={contentCreationUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
          examples: uc.deliverables,
        }))}
        badgeLabel="Production Scenario"
        examplesTitle="Deliverables"
      />

      {/* 10 How We Work (Delivery Process) */}
      <ServiceProcess
        id="content-creation-process"
        eyebrow="OUR PRODUCTION PROCESS"
        h2="A Methodical, Destination-Led Approach to Content Production"
        intro="From brief and intended use to shot planning, production preparation, capture, review rounds, and organized export handover."
        stages={contentCreationProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We check framing, lighting, focus, and audio on set so avoidable coverage gaps are identified while they can still be corrected."
      />


      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: contentCreationWhyBixeltek.eyebrow,
          h2: contentCreationWhyBixeltek.h2,
          intro: contentCreationWhyBixeltek.intro,
          points: contentCreationWhyBixeltek.points,
          closingCopy: contentCreationWhyBixeltek.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />



      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Creative & Distribution Capabilities"
        intro="Content creation pairs directly with social media marketing, graphic design, paid advertising campaigns, and web development."
        cards={contentCreationRelatedServices}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Content Production"
        faqs={contentCreationFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={contentCreationFinalCta.eyebrow}
        h2={contentCreationFinalCta.h2}
        intro={contentCreationFinalCta.description}
        supportingCopy={contentCreationFinalCta.supportingCopy}
        sectionSubtitle="Creative Engineering & Content Production Stack"
        tools={contentCreationStackTools}
      />

      {/* 18 Global Footer */}
      <Footer />
    </main>
  );
}

