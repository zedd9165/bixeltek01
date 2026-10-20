import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Graphic Design
import {
  graphicDesignMetadata,
  graphicDesignHero,
  graphicDesignOverview,
  graphicDesignProblems,
  graphicDesignScope,
  graphicDesignDecisions,
  graphicDesignUseCases,
  graphicDesignProcess,
  graphicDesignWhyBixeltek,
  graphicDesignRelatedServices,
  graphicDesignFaqs,
  graphicDesignFinalCta,
} from "@/data/service/graphic-design";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Visual Assets
import heroImg from "@/assets/graphic-designing-hero.webp";
import overviewImg from "@/assets/graphic-designing-overview.jpg";
import decisionsImg from "@/assets/graphic-designing-controlpanels.png";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-graphic-designing.jpg";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiFigma,
} from "react-icons/si";
import {
  Palette,
  Printer,
  Layout,
  FileCheck,
  Sparkles,
} from "lucide-react";

import GraphicDesignClientView from "@/components/services/graphic-design/GraphicDesignClientView";

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
    <GraphicDesignClientView
      hero={graphicDesignHero}
      overview={graphicDesignOverview}
      problems={graphicDesignProblems}
      scope={graphicDesignScope}
      decisions={graphicDesignDecisions}
      useCases={graphicDesignUseCases}
      process={graphicDesignProcess}
      whyBixeltek={graphicDesignWhyBixeltek}
      relatedServices={graphicDesignRelatedServices}
      faqs={graphicDesignFaqs}
      finalCta={graphicDesignFinalCta}
      stackTools={graphicDesignStackTools}
      heroImg={heroImg}
      overviewImg={overviewImg}
      decisionsImg={decisionsImg}
      whyChooseImg={whyChooseImg}
    />
  );
}
