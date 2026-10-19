import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for SEO Services
import {
  seoServicesMetadata,
  seoServicesHero,
  seoServicesProblems,
  seoServicesOverview,
  seoServicesScope,
  seoServicesUseCases,
  seoServicesProcess,
  seoServicesWhyChoose,
  seoServicesRelatedServices,
  seoServicesFaqs,
  seoServicesFinalCta,
  businessMarketsPreviewData,
  startingSituationsPreviewData,
  conversionJourneyPreviewData,
} from "@/data/service/seo";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";
import type { TechnologyItem } from "@/components/services/common/ServiceTechnologySection";

// Visual Assets
import seoHeroVisualImg from "@/assets/seo-hero.jpg";
import seoOverviewVisualImg from "@/assets/seo-overview.png";
import seoWhyChooseVisualImg from "@/assets/why-choose-bixeltek-for-seo.png";

// Icons for Tech & Measurement Final CTA and Technologies Section
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiGoogletagmanager,
  SiPagespeedinsights as SiGooglepagespeedinsights,
} from "react-icons/si";
import { FaFrog as SiScreamingfrog } from "react-icons/fa6";
import {
  Search,
  Code2,
  Gauge,
  Layers,
  Globe,
  SearchCheck,
  Network,
} from "lucide-react";

// Crisp SVG Ahrefs mark for the Technologies hex tile
const SiAhrefs = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.96 0C5.354 0 0 5.354 0 11.96c0 6.607 5.354 11.96 11.96 11.96 6.607 0 11.96-5.353 11.96-11.96C23.92 5.354 18.567 0 11.96 0zm-1.84 5.24h3.68l4.48 13.52h-3.36l-.96-3.12h-4l-.96 3.12H5.64l4.48-13.52zm1.84 3.76l-1.36 4.4h2.72l-1.36-4.4z" />
  </svg>
);

export const metadata: Metadata = {
  title: seoServicesMetadata.title,
  description: seoServicesMetadata.description,
  keywords: seoServicesMetadata.keywords,
  openGraph: {
    title: seoServicesMetadata.title,
    description: seoServicesMetadata.description,
    type: "website",
    url: "https://bixeltek.com/services/seo-services",
  },
  alternates: {
    canonical: "https://bixeltek.com/services/seo-services",
  },
};

export const dynamic = "force-dynamic";

// Curated Measurement & Diagnostic Systems for Final CTA
const seoMeasurementTools: TechStackItem[] = [
  {
    name: "Google Search Console",
    category: "Search Telemetry",
    description:
      "Monitoring crawl diagnostics, index coverage, query impressions, and click-through performance directly from Google.",
    icon: <SiGooglesearchconsole className="w-5 h-5 text-white" />,
  },
  {
    name: "Google Analytics 4 (GA4)",
    category: "Search Performance",
    description:
      "Tracking organic landing-page behaviour, user journey paths, engagement rates, and confirmed conversion actions.",
    icon: <SiGoogleanalytics className="w-5 h-5 text-white" />,
  },
  {
    name: "Technical Crawl & Diagnostics",
    category: "Crawl Health",
    description:
      "Deep structural auditing evaluating HTTP response status, redirect chains, canonical consistency, and indexability.",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    name: "Structured Data & Schema",
    category: "Semantic Web",
    description:
      "JSON-LD schema implementations communicating entity relationships, local service areas, reviews, and breadcrumbs.",
    icon: <Code2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Search-Intent Architecture",
    category: "Content Strategy",
    description:
      "Aligning keyword clusters and customer questions with distinct commercial, informational, and local landing pages.",
    icon: <Layers className="w-5 h-5 text-white" />,
  },
  {
    name: "Core Web Vitals & Speed",
    category: "Page Experience",
    description:
      "Evaluating LCP, INP, and CLS metrics to ensure technical page performance supports organic discovery and usability.",
    icon: <Gauge className="w-5 h-5 text-white" />,
  },
];

// Curated SEO Technologies Ecosystem
const seoTechnologies: TechnologyItem[] = [
  {
    name: "Google Search Console",
    icon: <SiGooglesearchconsole className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "Google Analytics 4",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    iconColor: "text-orange-500",
  },
  {
    name: "Screaming Frog",
    icon: <SiScreamingfrog className="w-6 h-6" />,
    iconColor: "text-green-600",
  },
  {
    name: "Ahrefs",
    icon: <SiAhrefs className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
  {
    name: "Semrush",
    icon: <SiSemrush className="w-6 h-6" />,
    iconColor: "text-orange-500",
  },
  {
    name: "PageSpeed Insights",
    icon: <SiGooglepagespeedinsights className="w-6 h-6" />,
    iconColor: "text-green-500",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "Schema & Structured Data",
    icon: <Code2 className="w-6 h-6" />,
    iconColor: "text-purple-500",
  },
  {
    name: "Sitebulb",
    icon: <Globe className="w-6 h-6" />,
    iconColor: "text-amber-500",
  },
  {
    name: "Core Web Vitals",
    icon: <Gauge className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
  {
    name: "Technical SEO Audits",
    icon: <SearchCheck className="w-6 h-6" />,
    iconColor: "text-indigo-500",
  },
  {
    name: "Crawl & Indexation Analysis",
    icon: <Network className="w-6 h-6" />,
    iconColor: "text-cyan-600",
  },
];

import SeoServicesClientView from "@/components/services/seo/SeoServicesClientView";

export default function SeoServicesPage() {
  return (
    <SeoServicesClientView
      hero={seoServicesHero}
      overview={seoServicesOverview}
      problems={seoServicesProblems}
      whyChoose={seoServicesWhyChoose}
      scope={seoServicesScope}
      technologies={seoTechnologies}
      useCases={seoServicesUseCases}
      conversionJourneyData={conversionJourneyPreviewData}
      process={seoServicesProcess}
      startingSituationsData={startingSituationsPreviewData}
      businessMarketsData={businessMarketsPreviewData}
      relatedServices={seoServicesRelatedServices}
      faqs={seoServicesFaqs}
      finalCta={seoServicesFinalCta}
      measurementTools={seoMeasurementTools}
      heroVisualImg={seoHeroVisualImg}
      overviewVisualImg={seoOverviewVisualImg}
      whyChooseVisualImg={seoWhyChooseVisualImg}
    />
  );
}
