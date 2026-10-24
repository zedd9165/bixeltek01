import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Meta Ads Management
import {
  metaAdsMetadata,
  metaAdsBreadcrumbs,
  metaAdsJumpLinks,
  metaAdsHero,
  metaAdsPositioning,
  metaAdsChallenges,
  metaAdsObjectives,
  metaAdsScope,
  metaAdsStartingSituations,
  metaAdsConversionJourney,
  metaAdsMeasurement,
  metaAdsProcess,
  metaAdsBusinessMarkets,
  metaAdsUseCases,
  metaAdsCreativeTestingFramework,
  metaAdsLeadQualityLoop,
  metaAdsLaunchReadiness,
  metaAdsWhyBixeltek,
  metaAdsInvestment,
  metaAdsRelatedServices,
  metaAdsFaqs,
  metaAdsFinalCta,
} from "@/data/service/meta-ads";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServicePlatformSection,
  ServiceScopeSection,
  ServiceUseCaseSection,
  ServiceConversionJourney,
  ServiceContentPanels,
  ServiceProcess,
  ServiceTechnologySection,
  ServiceSystemCards,
  ServiceStartingSituations,
  ServiceIndustryCarousel,
  ServiceSuitabilitySection,
  ServiceWhyChooseUs,
  ServiceInvestment,
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
import metaOverviewImg from "@/assets/82f6aa9fef490cf47a8b0695f29dde5f_720w.gif";
import metaCreativeImg from "@/assets/meta-ads-controlpanels.png";
import whyChooseImg from "@/assets/bixeltek-team-4.png";
import instaPhoneImg from "@/assets/meta-hero-phone.jpg";
import saasPostImg from "@/assets/SAAS Startup - Instagram post.jpg";
import tashSocialImg from "@/assets/meta-her-ad-1.png";
import tshirtAdImg from "@/assets/T-shirt Social Media Graphic - Mojahidul Islam.jpg";

// Campaign Objectives Distinct Images
import leadGenImg from "@/assets/lead-generation.jpg";
import ecomSalesImg from "@/assets/discount-shopping-season-with-sale.jpg";
import retargetingImg from "@/assets/Metadata-Change-Alerts.png";
import awarenessImg from "@/assets/business.jpg";
import creativeTestingImg from "@/assets/lab-test-offers.jpg";
import localEnquiryImg from "@/assets/local-market.jpg";

// Campaign Showcase Static Creatives from assets/meta-ads-campaigns
import b2bCampaignImg from "@/assets/meta-ads-campaigns/b2b.jpeg";
import cafeCampaignImg from "@/assets/meta-ads-campaigns/cafe.jpeg";
import dentalCampaignImg from "@/assets/meta-ads-campaigns/dental.jpeg";
import dental2CampaignImg from "@/assets/meta-ads-campaigns/dental-2.jpeg";
import ecomCampaignImg from "@/assets/meta-ads-campaigns/ecom.jpeg";
import ecom2CampaignImg from "@/assets/meta-ads-campaigns/ecom-2.jpeg";
import fitnessCampaignImg from "@/assets/meta-ads-campaigns/fitness.jpeg";
import floristCampaignImg from "@/assets/meta-ads-campaigns/florist.jpeg";
import interiorCampaignImg from "@/assets/meta-ads-campaigns/interior.jpeg";
import itSolutionsCampaignImg from "@/assets/meta-ads-campaigns/it-solutions.jpeg";
import realEstateCampaignImg from "@/assets/meta-ads-campaigns/realppestate.jpeg";
import travelCampaignImg from "@/assets/meta-ads-campaigns/travel.jpeg";

// Icons for Technologies & Final CTA Stack
import {
  SiMeta,
  SiInstagram,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiShopify,
  SiWoo,
  SiHubspot,
  SiZapier,
  SiCanva,
} from "react-icons/si";
import {
  Code2,
  BarChart3,
  Layers,
  Target,
  Workflow,
  Sparkles,
} from "lucide-react";
import ConversionHero, {
  type HeroCard,
  type HeroButton,
  type HeroLogo,
} from "@/components/services/meta-ads/HeroSection";
import { Whiteheader } from "@/components/Whiteheader";
import CampaignShowcaseSection, {
  type CampaignItem,
} from "@/components/services/meta-ads/Campaignshowcasesection";

export const metadata: Metadata = {
  title: metaAdsMetadata.title,
  description: metaAdsMetadata.description,
  keywords: metaAdsMetadata.keywords,
  alternates: {
    canonical: `https://bixeltek.com${metaAdsMetadata.canonicalPath}`,
  },
  openGraph: {
    title: metaAdsMetadata.title,
    description: metaAdsMetadata.description,
    url: `https://bixeltek.com${metaAdsMetadata.canonicalPath}`,
  },
};

export const dynamic = "force-dynamic";

// Distinct image lookup for each campaign objective
const objectiveImages: Record<string, typeof leadGenImg> = {
  "Lead Generation": leadGenImg,
  "Ecommerce Sales": ecomSalesImg,
  "Retargeting": retargetingImg,
  "Awareness & Demand Creation": awarenessImg,
  "Campaign A/B Testing": creativeTestingImg,
  "Local Enquiry Campaigns": localEnquiryImg,
};

// Interactive Campaign Objectives Cards for ServicePlatformSection with distinct images
const metaCampaignObjectivesCards: PlatformOptionCardItem[] = metaAdsObjectives.cards.map((obj) => ({
  title: obj.title,
  description: obj.description,
  badge: obj.bestFor,
  image: objectiveImages[obj.title] || leadGenImg,
}));

// Curated Paid Social & Attribution Tech Stack (Honeycomb Cluster)
const metaTechnologies: TechnologyItem[] = [
  {
    name: "Meta Ads Manager",
    icon: <SiMeta className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "Instagram Ads",
    icon: <SiInstagram className="w-6 h-6" />,
    iconColor: "text-pink-500",
  },
  {
    name: "Conversions API (CAPI)",
    icon: <SiMeta className="w-6 h-6" />,
    iconColor: "text-indigo-600",
  },
  {
    name: "Meta Pixel & Custom Events",
    icon: <Code2 className="w-6 h-6" />,
    iconColor: "text-purple-500",
  },
  {
    name: "Google Tag Manager",
    icon: <SiGoogletagmanager className="w-6 h-6" />,
    iconColor: "text-blue-500",
  },
  {
    name: "Google Analytics 4 (GA4)",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    iconColor: "text-orange-500",
  },
  {
    name: "Shopify Conversion Sync",
    icon: <SiShopify className="w-6 h-6" />,
    iconColor: "text-emerald-500",
  },
  {
    name: "WooCommerce Purchase CAPI",
    icon: <SiWoo className="w-6 h-6" />,
    iconColor: "text-purple-600",
  },
  {
    name: "HubSpot & CRM Sync",
    icon: <SiHubspot className="w-6 h-6" />,
    iconColor: "text-orange-600",
  },
  {
    name: "Zapier Lead Automation",
    icon: <SiZapier className="w-6 h-6" />,
    iconColor: "text-amber-500",
  },
  {
    name: "Creative & Angle Direction",
    icon: <SiCanva className="w-6 h-6" />,
    iconColor: "text-cyan-500",
  },
  {
    name: "Attribution & ROAS Auditing",
    icon: <BarChart3 className="w-6 h-6" />,
    iconColor: "text-blue-600",
  },
];

// Curated Final CTA Measurement & Attribution Stack
const metaFinalCtaTools: TechStackItem[] = [
  {
    name: "Meta Conversions API (CAPI)",
    category: "Server-Side Attribution",
    description: "Bypassing browser ad-blockers and iOS restrictions with direct server event dispatching.",
    icon: <SiMeta className="w-5 h-5 text-white" />,
  },
  {
    name: "Advanced Meta Pixel Setup",
    category: "Event Telemetry",
    description: "Configuring high-intent custom events, content views, initiate checkout, and qualified leads.",
    icon: <Code2 className="w-5 h-5 text-white" />,
  },
  {
    name: "Google Tag Manager Server-Side",
    category: "Tag Governance",
    description: "Centralizing tag execution with deduplicated browser and server event IDs.",
    icon: <SiGoogletagmanager className="w-5 h-5 text-white" />,
  },
  {
    name: "CRM Lead Quality Loop",
    category: "Pipeline Attribution",
    description: "Connecting form submissions to qualified opportunities and closed sales outcomes.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Dynamic Creative Optimization",
    category: "Creative Strategy",
    description: "Testing distinct copy angles, visual hooks, and offers against customer decision points.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    name: "Multi-Touch Revenue Attribution",
    category: "Commercial Analytics",
    description: "Distinguishing first-touch discovery from assisted conversions and last-click purchases.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
  },
];

// Curated Live Creative Showcase Campaigns from assets/meta-ads-campaigns
const metaShowcaseCampaigns: CampaignItem[] = [
  {
    src: realEstateCampaignImg,
    alt: "Luxury Real Estate & Villa Development Meta Ad Creative",
    bg: "#1a1a24",
  },
  {
    src: dentalCampaignImg,
    alt: "Dental Clinic Implant & Smile Makeover Meta Ad Creative",
    bg: "#0d2b45",
  },
  {
    src: ecomCampaignImg,
    alt: "D2C Ecommerce Fashion & Apparel Conversion Meta Ad Creative",
    bg: "#2b1055",
  },
  {
    src: fitnessCampaignImg,
    alt: "Premium Gym & Personal Training Membership Meta Ad Creative",
    bg: "#111827",
  },
  {
    src: cafeCampaignImg,
    alt: "Specialty Cafe & Dining Customer Acquisition Meta Ad Creative",
    bg: "#3b1e08",
  },
  {
    src: b2bCampaignImg,
    alt: "B2B Enterprise SaaS & Professional Lead Generation Meta Ad Creative",
    bg: "#0f172a",
  },
  {
    src: interiorCampaignImg,
    alt: "High-End Interior Architecture & Turnkey Design Meta Ad Creative",
    bg: "#1c1917",
  },
  {
    src: dental2CampaignImg,
    alt: "Clear Aligners & Invisalign Patient Booking Meta Ad Creative",
    bg: "#1e1b4b",
  },
  {
    src: itSolutionsCampaignImg,
    alt: "Cloud Infrastructure & Managed IT Solutions Meta Ad Creative",
    bg: "#022c22",
  },
  {
    src: floristCampaignImg,
    alt: "Boutique Florist & Luxury Gift Delivery Meta Ad Creative",
    bg: "#4a044e",
  },
  {
    src: ecom2CampaignImg,
    alt: "Streetwear & Seasonal Retail Catalog Sales Meta Ad Creative",
    bg: "#18181b",
  },
  {
    src: travelCampaignImg,
    alt: "International Travel & Bespoke Holiday Packages Meta Ad Creative",
    bg: "#082f49",
  },
];

// ConversionHero Buttons
const metaHeroButtons: HeroButton[] = [
  {
    label: metaAdsHero.primaryCta.label,
    href: metaAdsHero.primaryCta.href,
    variant: "primary",
  },
];

// Floating hero cards. Slots follow the reference layout:
// topLeft = image, midLeft = rating pill, bottomLeft = stat,
// topRight = social post, bottomRight = product / ROAS card.
const metaHeroCards: HeroCard[] = [
  {
    position: "topLeft",
    variant: "image",
    src: tashSocialImg.src,
    alt: "Social commerce engagement creative",
    timestamp: "High ROAS",
  },
  {
    position: "midLeft",
    variant: "rating",
    stars: 5,
  },
  {
    position: "bottomLeft",
    variant: "stat",
    label: "Cost Per Qualified Lead",
    value: "-34%",
  },
  {
    position: "topRight",
    variant: "social",
    src: saasPostImg.src,
    alt: "High performing SaaS ad creative test",
    likes: "4.8k",
  },
  {
    position: "bottomRight",
    variant: "product",
    count: "3.8x",
    unit: "ROAS",
    subtitle: "Dynamic Product Ads",
    price: "Catalog Ad",
    src: tshirtAdImg.src,
    alt: "Meta dynamic ecommerce product ad creative",
  },
];

// Curated Meta Ecosystem Logos for Hero Trust Strip
const metaHeroLogos: HeroLogo[] = [
  {
    name: "Meta Ads Manager",
    node: (
      <span className="inline-flex items-center gap-2">
        <SiMeta className="w-5 h-5 text-blue-600" />
        <span>Meta Ads Manager</span>
      </span>
    ),
  },
  {
    name: "Instagram Ads",
    node: (
      <span className="inline-flex items-center gap-2">
        <SiInstagram className="w-5 h-5 text-pink-600" />
        <span>Instagram Ads</span>
      </span>
    ),
  },
  {
    name: "Conversions API",
    node: (
      <span className="inline-flex items-center gap-2">
        <SiGoogletagmanager className="w-5 h-5 text-blue-500" />
        <span>Conversions API (CAPI)</span>
      </span>
    ),
  },
  {
    name: "Google Analytics 4",
    node: (
      <span className="inline-flex items-center gap-2">
        <SiGoogleanalytics className="w-5 h-5 text-amber-500" />
        <span>GA4 Attribution</span>
      </span>
    ),
  },
  {
    name: "Shopify & WooCommerce",
    node: (
      <span className="inline-flex items-center gap-2">
        <SiShopify className="w-5 h-5 text-green-600" />
        <span>Catalog Sync</span>
      </span>
    ),
  },
];

export default function MetaAdsPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Whiteheader />

      {/* 02 Conversion Hero */}
      <ConversionHero
        id="meta-ads-hero"
        h1={
          <>
            Meta Ads Built Around the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Actions That Grow
            </span>{" "}
            Your Business
          </>
        }
        description={metaAdsHero.description}
        buttons={metaHeroButtons}
        phoneImage={{
          src: instaPhoneImg.src,
          alt: "Bixeltek Meta Facebook and Instagram Ads mobile feed mockup",
        }}
        phoneUser={{ name: "Wade Warren" }}
        phoneBadge="Sponsored"
        cards={metaHeroCards}
        logos={metaHeroLogos}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Commercial Purpose */}
      <ServiceOverviewSection
        id="meta-ads-overview"
        eyebrow={metaAdsPositioning.eyebrow}
        h2={metaAdsPositioning.h2}
        intro={metaAdsPositioning.intro}
        body={metaAdsPositioning.points.map((p) => `${p.title}: ${p.description}`).join("\n\n")}
        closingCopy="We plan Meta Ads with the entire customer journey in view—from thumb-stopping creative to post-click conversion and qualified sales feedback."
        imageSrc={metaOverviewImg}
        imageAlt="Meta advertising analytics and audience engagement dashboard"
        direction="left"
      />

      {/* 05 Campaign Challenges */}
      <ServiceProblemSection
        id={metaAdsChallenges.id}
        eyebrow={metaAdsChallenges.eyebrow}
        h2={metaAdsChallenges.h2}
        intro={metaAdsChallenges.intro}
        cards={metaAdsChallenges.cards}
        gridCols={3}
      />

      {/* 06 Campaign Objectives (Interactive Tabbed Selector) */}
      <ServicePlatformSection
        id="campaign-objectives"
        eyebrow={metaAdsObjectives.eyebrow}
        h2={metaAdsObjectives.h2}
        intro={metaAdsObjectives.intro}
        cards={metaCampaignObjectivesCards}
        cta={{
          text: "Book a Free Consultation",
          href: "#meta-ads-contact",
        }}
      />

      {/* 06.5 Campaign Showcase (Curated Visual Feed Creatives) */}
      <CampaignShowcaseSection
        id="campaign-creatives"
        variant="wall"
        direction="left" // "left" showcases creatives on the left; "right" on the right
       eyebrow="META AD CREATIVE SHOWCASE"
        h2="Creative that captures attention, communicates value, and drives action."
        intro="Explore a range of static ad creatives designed for Facebook and Instagram, from attention grabbing hooks and product focused visuals to compelling offers and conversion led messaging. Every creative brings together the right message, visual direction, and call to action to help brands stand out in crowded feeds, connect with relevant audiences, and move potential customers toward the next step. These examples reflect how we approach creative development around campaign objectives, audience needs, and ongoing testing."
        cta={{
          label: "Get a free consultation",
          href: "#meta-ads-contact",
        }}
        speed={55}
        campaigns={metaShowcaseCampaigns}
      />
      {/* 07 Management Scope */}
      <ServiceScopeSection
        id={metaAdsScope.id}
        eyebrow={metaAdsScope.eyebrow}
        h2={metaAdsScope.h2}
        intro={metaAdsScope.intro}
        cards={metaAdsScope.items}
        scopeNote={metaAdsScope.scopeNote}
      />

      {/* 08 Practical Use Cases */}
      <ServiceUseCaseSection
        id={metaAdsUseCases.id}
        eyebrow={metaAdsUseCases.eyebrow}
        h2={metaAdsUseCases.h2}
        intro={metaAdsUseCases.intro}
        cards={metaAdsUseCases.cases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
        }))}
      />

       <ServiceContentPanels
        id={metaAdsCreativeTestingFramework.id}
        eyebrow={metaAdsCreativeTestingFramework.eyebrow}
        h2={metaAdsCreativeTestingFramework.h2}
        intro={metaAdsCreativeTestingFramework.intro}
        panels={metaAdsCreativeTestingFramework.stages.map((s) => ({
          title: s.title,
          description: s.description,
        }))}
        image={metaCreativeImg}
        imageAlt="Structured creative testing and angle validation framework"
        direction="right"
      />


      {/* 09 Ad-to-Conversion Journey */}
      <ServiceConversionJourney
        id="conversion-journey"
        data={metaAdsConversionJourney}
        supportingText="Connecting high-intent paid social impressions with frictionless landing experiences."
      />

     
      {/* 11 How We Work (Delivery Process) */}
      <ServiceProcess
        id={metaAdsProcess.id}
        eyebrow={metaAdsProcess.eyebrow}
        h2={metaAdsProcess.h2}
        intro={metaAdsProcess.intro}
        stages={metaAdsProcess.steps.map((s) => ({
          stageNumber: s.number,
          title: s.title,
          description: s.description,
        }))}
      />

      {/* 12 Technologies Ecosystem (Honeycomb Cluster) */}
      <ServiceTechnologySection
        id="meta-technologies"
        eyebrow="PAID SOCIAL & ATTRIBUTION ECOSYSTEM"
        h2="Platforms & Measurement Tools Engineered for Scale"
        intro="From pixel telemetry and Conversions API to server-side tracking, CRM integration and multi-touch attribution, we deploy enterprise marketing technologies to optimize every ad dollar."
        technologies={metaTechnologies}
        ctaText="Need server-side Conversions API, CRM sync or custom event measurement?"
        ctaButtonText="Discuss Your Project"
        ctaHref="#meta-ads-contact"
      />

      {/* 13 Measurement & Lead Quality (System Cards) */}
      <ServiceSystemCards
        id={metaAdsMeasurement.id}
        eyebrow={metaAdsMeasurement.eyebrow}
        h2={metaAdsMeasurement.h2}
        intro={metaAdsMeasurement.intro}
        cards={metaAdsMeasurement.items}
        supportingNote={metaAdsMeasurement.technologyNote}
      />

           <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: metaAdsWhyBixeltek.eyebrow,
          h2: metaAdsWhyBixeltek.h2,
          intro: metaAdsWhyBixeltek.intro,
          points: metaAdsWhyBixeltek.points,
          closingCopy:
            "The goal is a measurable, sustainable acquisition engine whose decisions are grounded in real business outcomes.",
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

        <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Integrated Digital Capabilities That Complement Our Meta Ads"
        intro="Explore connected services across paid search, organic search visibility, high-converting landing pages, and lead attribution workflows."
        cards={metaAdsRelatedServices.map((s) => ({
          title: s.title,
          description: s.description,
          linkText: `Explore ${s.title}`,
          destination: s.href,
        }))}
        gridCols={4}
      />

      {/* 14 Starting Situations */}
      <ServiceStartingSituations
        id="starting-situations"
        data={metaAdsStartingSituations}
      />

      {/* 15 Business Models & Industry Carousel */}
      <ServiceIndustryCarousel
        id="business-markets"
        eyebrow={metaAdsBusinessMarkets.eyebrow}
        h2={metaAdsBusinessMarkets.h2}
        intro={metaAdsBusinessMarkets.intro}
        cards={metaAdsBusinessMarkets.cards}
      />

      {/* 20 Frequently Asked Questions */}
      <ServiceFAQ
        id={metaAdsFaqs[0]?.question ? "meta-ads-faqs" : "faqs"}
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Everything You Need to Know About Meta Ads Management"
        faqs={metaAdsFaqs}
      />

      {/* 21 Final CTA & Lead Terminal */}
      <ServiceFinalCTA
        id="meta-ads-contact"
        eyebrow={metaAdsFinalCta.eyebrow}
        h2={metaAdsFinalCta.h2}
        intro={metaAdsFinalCta.description}
        supportingCopy="Start with the business goal and customer economics. Campaign setup and scaling come next."
        sectionSubtitle="Paid Social & Attribution Stack"
        tools={metaFinalCtaTools}
      />

      {/* 22 Global Footer */}
      <Footer />
    </main>
  );
}