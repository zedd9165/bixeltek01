import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for AI Automation
import {
  aiAutomationMetadata,
  aiAutomationHero,
  aiAutomationOverview,
  aiAutomationProblems,
  aiAutomationFit,
  aiAutomationScope,
  aiAutomationDecisions,
  aiAutomationUseCases,
  aiAutomationWorkflowModel,
  aiAutomationControls,
  aiAutomationProcess,
  aiAutomationWhyBixeltek,
  aiAutomationInvestmentFactors,
  aiAutomationRelatedServices,
  aiAutomationFaqs,
  aiAutomationFinalCta,
} from "@/data/service/ai-automation";

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
import heroImg from "@/assets/ai-automation-hero.jpg";
import overviewImg from "@/assets/ai-automation-overview.jpg";
import dashboardImg from "@/assets/ai-automation-controlpanels.png";
import whyChooseImg from "@/assets/why-choose-bixeltek-for-ai-automation.jpg";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiOpenai,
  SiAnthropic,
  SiPython,
} from "react-icons/si";
import {
  Bot,
  Sparkles,
  Cpu,
  Workflow,
  ShieldCheck,
  FileText,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: aiAutomationMetadata.title,
  description: aiAutomationMetadata.description,
  keywords: aiAutomationMetadata.keywords,
  alternates: {
    canonical: aiAutomationMetadata.canonical,
  },
  openGraph: {
    title: aiAutomationMetadata.title,
    description: aiAutomationMetadata.description,
    url: aiAutomationMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Ecosystem Items for AI Automation
const aiTechnologyItems: TechnologyItem[] = [
  {
    name: "OpenAI Models",
    icon: <SiOpenai className="w-8 h-8 text-[#10A37F]" />,
    href: "https://openai.com/",
  },
  {
    name: "Anthropic Claude",
    icon: <SiAnthropic className="w-8 h-8 text-[#D97706]" />,
    href: "https://www.anthropic.com/",
  },
  {
    name: "Python & LangChain",
    icon: <SiPython className="w-8 h-8 text-[#3776AB]" />,
    href: "https://www.python.org/",
  },
  {
    name: "Workflow Orchestration",
    icon: <Workflow className="w-8 h-8 text-[#6366F1]" />,
    href: "https://bixeltek.com/services/automation",
  },
  {
    name: "Document Extractors",
    icon: <FileText className="w-8 h-8 text-[#EC4899]" />,
    href: "https://bixeltek.com/services/automation",
  },
  {
    name: "CRM & ERP Connectors",
    icon: <Database className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/automation",
  },
  {
    name: "Human-in-the-Loop",
    icon: <ShieldCheck className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/automation",
  },
  {
    name: "Model Diagnostics",
    icon: <Cpu className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/automation",
  },
];

// Curated AI Automation Stack Tools for Final CTA
const aiStackTools: TechStackItem[] = [
  {
    name: "LLM Interpretation Layer",
    category: "Intelligent Processing",
    description:
      "Language model integration configured for structured extraction, request classification, and context summarization.",
    icon: <Bot className="w-5 h-5 text-white" />,
  },
  {
    name: "Deterministic Workflow Rules",
    category: "Execution Control",
    description:
      "Fixed business logic, validation schemas, and approval thresholds governing what actions can be triggered.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Human Review Gates",
    category: "Safety & Governance",
    description:
      "Review queues, confidence filters, and escalation paths ensuring humans verify sensitive or uncertain outputs.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    name: "CRM & API Connectors",
    category: "Systems Integration",
    description:
      "Bi-directional data exchange with HubSpot, Salesforce, Zendesk, ERPs, and custom backend databases.",
    icon: <Database className="w-5 h-5 text-white" />,
  },
  {
    name: "Document Processing",
    category: "Intake & Parsing",
    description:
      "Automated extraction and field mapping across PDF invoices, incoming emails, and form attachments.",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    name: "Evaluation & Run Auditing",
    category: "Quality Monitoring",
    description:
      "Systematic correction logging, latency tracking, cost monitoring, and exception dashboards.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
];

export default function AIAutomationPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={aiAutomationHero.eyebrow}
        h1={aiAutomationHero.h1}
        p1={aiAutomationHero.p1}
        p2={aiAutomationHero.p2}
        primaryButtonText={aiAutomationHero.primaryButtonText}
        primaryButtonHref={aiAutomationHero.primaryButtonHref}
        microcopy={aiAutomationHero.microcopy}
        visualTagSubtitle="Intelligent Workflows & Agents"
        visualTagTitle="LLMs · Automation · APIs"
        visualBadgeText="Production AI Systems"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Architectural Purpose */}
      <ServiceOverviewSection
        id="ai-automation-overview"
        eyebrow={aiAutomationOverview.eyebrow}
        h2={aiAutomationOverview.h2}
        intro={aiAutomationOverview.intro}
        body={aiAutomationOverview.body}
        points={aiAutomationOverview.points}
        closingCopy={aiAutomationOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="AI workflow architecture and business process integration"
        direction="left"
      />

      {/* 05 Problems / Where Unstructured Work Creates Friction */}
      <ServiceProblemSection
        id="ai-automation-problems"
        eyebrow="WHERE UNSTRUCTURED WORK CREATES FRICTION"
        h2="The Operational Gaps Fixed by Intelligent Automation"
        intro="When customer requests, emails, and documents arrive in variable formats, rigid rules break and manual handling slows the entire operation down."
        cards={aiAutomationProblems}
        gridCols={3}
      />


      {/* 07 Scope / What We Build */}
      <ServiceScopeSection
        id="ai-automation-scope"
        eyebrow="WHAT OUR AI AUTOMATION WORK COVERS"
        h2="Structured Implementation from Task Selection to Governed Systems"
        intro="We build AI steps inside controlled business workflows, connecting language models, document parsers, and CRM systems with explicit human validation rules."
        cards={aiAutomationScope}
        scopeNote="Every engagement is scoped around your existing data sources, business rules, and operational risk boundaries."
      />

      {/* 08 Key Architectural & Implementation Decisions */}
      <ServiceContentPanels
        id="ai-automation-decisions"
        eyebrow="IMPLEMENTATION DECISIONS"
        h2="Key Architectural Choices to Resolve Early"
        intro="A successful AI workflow requires clear choices around agent vs workflow boundaries, tool permissions, context scoping, and human approval gates."
        panels={aiAutomationDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={dashboardImg}
        imageAlt="Evaluating AI agent architecture, tool permissions, and human-in-the-loop controls"
        direction="right"
        supportingNote="We resolve these questions during discovery so that delivery proceeds with clear technical and safety boundaries."
        supportingLink={{
          text: "Explore General Business Automation",
          destination: "/services/automation",
        }}
      />

      {/* 09 Intelligent Workflow Use Cases */}
      <ServiceUseCaseSection
        id="ai-automation-use-cases"
        eyebrow="INTELLIGENT WORKFLOW USE CASES"
        h2="Where AI Automation Delivers Practical Business Value"
        intro="From enquiry triage and document intake to knowledge retrieval and handover summaries, AI excels where varied inputs meet defined business steps."
        cards={aiAutomationUseCases.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} AI Role: ${uc.aiRole} Control: ${uc.control}`,
          examples: uc.signals,
        }))}
        badgeLabel="Workflow Scenario"
        examplesTitle="Measurable Signals"
      />

      {/* 11 Delivery Process */}
      <ServiceProcess
        id="ai-automation-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Risk-Reduced Approach to AI Engineering"
        intro="From single-workflow selection and contract definition to evaluation, safe tool permissions, and operational monitoring."
        stages={aiAutomationProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: `${p.description} Deliverable: ${p.deliverable}`,
        }))}
        supportingParagraph="We validate outputs against real edge cases and establish human approval gates before workflows touch production databases or customers."
      />

      {/* 13 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: aiAutomationWhyBixeltek.eyebrow,
          h2: aiAutomationWhyBixeltek.h2,
          intro: aiAutomationWhyBixeltek.intro,
          points: aiAutomationWhyBixeltek.points,
          closingCopy: aiAutomationWhyBixeltek.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />
      
      {/* 15 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Automation & Engineering Capabilities"
        intro="AI automation works hand-in-hand with core workflow automation, conversion optimization, mobile applications, and ecommerce systems."
        cards={aiAutomationRelatedServices}
      />

      {/* 16 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About AI Automation"
        faqs={aiAutomationFaqs}
      />

      {/* 17 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={aiAutomationFinalCta.eyebrow}
        h2={aiAutomationFinalCta.h2}
        intro={aiAutomationFinalCta.description}
        supportingCopy={aiAutomationFinalCta.supportingCopy}
        sectionSubtitle="AI Engineering & Workflow Automation Stack"
        tools={aiStackTools}
      />

      {/* 18 Global Footer */}
      <Footer />
    </main>
  );
}

