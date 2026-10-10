import React from "react";
import { Metadata } from "next";

// Data Source of Truth for Automation
import {
  automationMetadata,
  automationBreadcrumbs,
  automationJumpLinks,
  automationHeroPreviewData,
  automationOverview,
  automationProblems,
  whenAutomationMakesSense,
  automationScope,
  automationUseCases,
  automationSystems,
  automationPrinciples,
  automationMeasurement,
  automationProcess,
  automationWhyChoose,
  automationCaseStudies,
  automationInvestmentFactors,
  automationPostLaunch,
  automationRelatedServices,
  automationFaqs,
  automationFinalCta,
} from "@/data/service/automation";

// Generic Reusable Service Components
import {
  ServicePageNav,
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServiceSuitabilitySection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceSelectedWork,
  ServiceInvestment,
  ServicePostLaunchSection,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
  ServiceUseCaseSection,
} from "@/components/services/common";

// Dedicated Supporting Components for Structured Content
import AutomationSystemsSection from "@/components/services/automation/AutomationSystemsSection";

// Global Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Assets & Icons
import techMockupImg from "@/assets/techmockup.png";
import dashboardImg from "@/assets/dashboard-image.png";
import heroImg from "@/assets/automation-hero.jpg";
import overviewImg from "@/assets/automation-overview.jpg";
import postlauncImg from "@/assets/post-launch-automation.jpg";
import {
  GitBranch,
  Database,
  Megaphone,
  MessageSquare,
  BarChart3,
  Code2,
} from "lucide-react";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Tools / capabilities ledger for ServiceFinalCTA derived from automation scope & systems
const automationFinalCtaTools: TechStackItem[] = [
  {
    name: "CRM & Pipelines",
    category: "Lead Management",
    description: "Configuring stages, routing, assignment, and ownership rules across your CRM.",
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "Marketing & Campaigns",
    category: "Acquisition Flow",
    description: "Connecting Google Ads, Meta campaigns, and form submissions into the CRM.",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    name: "Customer Messaging",
    category: "Communication",
    description: "Automating transactional emails, notifications, and scheduled follow-ups.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    name: "Operational Workflows",
    category: "Business Logic",
    description: "Automating internal handoffs, approvals, status updates, and tasks.",
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    name: "Reporting & Visibility",
    category: "Analytics",
    description: "Synchronizing data sources to eliminate repetitive manual report compilation.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    name: "Custom APIs & Webhooks",
    category: "Integrations",
    description: "Connecting non-standard business tools and legacy databases reliably.",
    icon: <Code2 className="w-5 h-5" />,
  },
];

export const metadata: Metadata = {
  title: automationMetadata.title,
  description: automationMetadata.description,
  keywords: automationMetadata.keywords,
  alternates: {
    canonical: automationMetadata.canonical,
  },
  openGraph: {
    title: automationMetadata.title,
    description: automationMetadata.description,
    url: automationMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function AutomationServicePage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      <Header />

      {/* 03 Hero */}
      <ServiceHero
        eyebrow={automationHeroPreviewData.eyebrow}
        h1={automationHeroPreviewData.h1}
        p1={automationHeroPreviewData.p1}
        p2={automationHeroPreviewData.p2}
        primaryButtonText={automationHeroPreviewData.primaryButtonText}
        primaryButtonHref={automationHeroPreviewData.primaryButtonHref}
        microcopy={automationHeroPreviewData.microcopy}
        visualTagSubtitle="Process Engineering"
        visualTagTitle="CRM · Workflows · Integrations"
        visualBadgeText="Production Ready"
        visualImage={heroImg}
      />

      {/* 04 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 05 What Business Automation Actually Means */}
      <ServiceOverviewSection
        id="what-automation-means"
        eyebrow={automationOverview.eyebrow}
        h2={automationOverview.h2}
        intro={automationOverview.intro}
        body={automationOverview.body}
        closingCopy={automationOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Business automation, workflow design, and systems connection"
        direction="left"
      />

      {/* <ServiceProblemSection
        id="where-opportunities-are-lost"
        eyebrow="WHERE OPPORTUNITIES ARE LOST"
        h2="The Operational Gaps That Make Growth Harder to Manage"
        intro="When marketing, enquiries, and operations sit in disconnected systems, important actions fall through the cracks between the steps."
        cards={automationProblems}
      />

      <ServiceSuitabilitySection
        id="when-automation-makes-sense"
        eyebrow={whenAutomationMakesSense.eyebrow}
        h2={whenAutomationMakesSense.h2}
        intro={whenAutomationMakesSense.intro}
        points={whenAutomationMakesSense.points}
        advisory={whenAutomationMakesSense.notAlwaysNeeded}
      /> */}

      {/* 08 What We Automate (Service Scope) */}
      <ServiceScopeSection
        id="what-we-automate"
        eyebrow="WHAT OUR AUTOMATION WORK COVERS"
        h2="End-to-End Workflow Engineering from Process Mapping to Connected Systems"
        intro="We structure automation around your actual operations, connecting customer touchpoints, lead handoffs, internal workflows, and reporting."
        cards={automationScope}
        scopeNote="Every engagement begins by mapping your existing business workflows, identifying friction, and establishing clear process rules before technical implementation."
      />

       <ServiceRelatedServices
        id="related-services"
        eyebrow="CONNECTED CAPABILITIES"
        h2="Digital Capabilities That Connect with Your Business Automation"
        intro="Automation does not operate in isolation. It coordinates with your website, ad campaigns, search visibility, online store, CRO, and mobile applications."
        cards={automationRelatedServices}
      />

         <AutomationSystemsSection
        id="crm-integrations"
        eyebrow="CRM & INTEGRATIONS"
        h2="Connecting the Core Systems Behind Your Business Operations"
        intro="Automation depends on clean data movement between platforms. We integrate CRM records, website forms, ad channels, messaging platforms, operations and custom APIs so your tools work as a single coordinated system."
        cards={automationSystems}
        supportingNote="Automation should connect the tools your team already uses rather than creating another isolated system. We focus on reliable data flow and clear boundaries between platforms."
      />

      {/* 09 Automation Use Cases */}
      <ServiceUseCaseSection
        id="workflows"
        eyebrow="AUTOMATION USE CASES"
        h2="Practical Automation Across Distinct Business Functions"
        intro="From enquiry routing and pipeline updates to customer communication and recurring reporting, we structure automation around where repetitive manual work creates friction."
        cards={automationUseCases}
        badgeLabel="Workflow"
        examplesTitle="Workflow Elements"
      />

      {/* 10 CRM & Integrations */}
     

      {/* 11 Automation Principles (How We Design Automation) */}
      <ServiceContentPanels
        id="principles"
        eyebrow="HOW WE DESIGN AUTOMATION"
        h2="Workflows Built for Dependability and Human Reality"
        intro="Automation should make work clearer, not more complicated. We build around business processes, clear ownership, and exception paths rather than automating blindly."
        panels={automationPrinciples}
        image={dashboardImg}
        imageAlt="Automation architecture, workflow design, and operational visibility"
        direction="right"
        supportingNote="Engineered for real operational resilience: clear ownership, exception handling, data integrity, and measurable business impact."
      />

      {/* 13 Our Process (How We Work) */}
      <ServiceProcess
        id="automation-process"
        eyebrow="OUR AUTOMATION PROCESS"
        h2="A Methodical Lifecycle from Process Mapping to Continuous Optimization"
        intro="We move from understanding the current process through workflow design, integration, and comprehensive journey testing to post-launch refinement."
        stages={automationProcess.map((stage) => ({
          stageNumber: stage.number,
          title: stage.title,
          description: stage.description,
        }))}
        supportingParagraph="Effective automation requires continuous alignment between operational rules, team ownership, and data reliability."
      />

      {/* 14 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={automationWhyChoose as any}
      />

      {/* 15 Selected Work (Graceful Empty State with Consultation CTA) */}
      {/* <ServiceSelectedWork
        id="selected-work"
        eyebrow="SELECTED WORK"
        h2="Practical Business Automation Systems Built for Measurable Value"
        intro="We build workflows and integrations that eliminate manual bottlenecks, protect customer data, and improve operational visibility."
        cards={automationCaseStudies}
        supportingNote="We maintain strict client confidentiality. Verified case studies with attributable workflow outcomes are added as engagements become publicly shareable."
        emptyStateCtaText="Review My Business Workflow"
        emptyStateCtaHref="#plan-project"
      /> */}

      {/* 16 Investment Factors */}
      {/* <ServiceInvestment
        id="investment"
        eyebrow="INVESTMENT & SCOPE"
        h2="How Business Automation Investment Is Determined"
        intro="There is no single package for business automation. Project investment reflects workflow complexity, system integration requirements, data quality, and ongoing optimization needs."
        cards={automationInvestmentFactors}
        closingCopy="We map your workflows and technical dependencies before proposing an engagement scope, ensuring the investment matches actual operational value."
        buttonText="Review My Business Workflow"
        buttonHref="#plan-project"
      /> */}

      {/* 17 Post Launch (Beyond the First Workflow) */}
      <ServicePostLaunchSection
        id="post-launch"
        eyebrow={automationPostLaunch.eyebrow}
        h2={automationPostLaunch.h2}
        intro={automationPostLaunch.intro}
        items={automationPostLaunch.points}
        image={postlauncImg}
        ctaText="Review My Business Workflow"
        ctaHref="#plan-project"
        browserUrl="ops.bixeltek.com/workflow-monitoring"
        statusText="Active Telemetry"
        badgeSubtitle="Continuous Workflow Evolution"
        badgeTitle="Exception Handling & Auditing Active"
      />

      {/* 18 Related Services */}


      {/* 19 FAQs */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Frequently Asked Questions About Business Automation"
        faqs={automationFaqs}
      />

      {/* 20 Final CTA & Contact Form */}
      <ServiceFinalCTA
        id="plan-project"
        eyebrow={automationFinalCta.eyebrow}
        h2={automationFinalCta.h2}
        intro={automationFinalCta.description}
        sectionSubtitle="Workflow & Integration Capabilities"
        tools={automationFinalCtaTools}
      />

      {/* 21 Global Footer */}
      <Footer />
    </main>
  );
}

