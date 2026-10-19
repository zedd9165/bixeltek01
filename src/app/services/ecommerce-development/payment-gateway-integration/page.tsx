import React from "react";
import type { Metadata } from "next";

// Data Source of Truth for Payment Gateway Integration
import {
  paymentIntegrationMetadata,
  paymentIntegrationHero,
  paymentIntegrationOverview,
  paymentIntegrationProblems,
  whenYouNeedPaymentIntegration,
  paymentIntegrationScope,
  paymentIntegrationDecisions,
  paymentIntegrationTechnologies,
  paymentIntegrationUseCases,
  paymentIntegrationProcess,
  paymentIntegrationWhyBixeltek,
  paymentIntegrationInvestmentFactors,
  paymentIntegrationRelatedServices,
  paymentIntegrationFaqs,
  paymentIntegrationFinalCta,
} from "@/data/service/payment-gateway-integration";

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

// Global Layout & Shell Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

// Visual Assets
import heroImg from "@/assets/payment-hero.png";
import decisionsImg from "@/assets/payment-controlpanels.webp";
import overviewImg from "@/assets/payment-overview.webp"
import whyChooseImg from "@/assets/why-choose-bixeltek-for-payment-gateway-integration.png";

// Icons for Engineering Ecosystem & Final CTA
import {
  SiStripe,
  SiRazorpay,
  SiPaypal,
  SiShopify,
  SiWoocommerce,
} from "react-icons/si";
import {
  CreditCard,
  Lock,
  ShieldCheck,
  Workflow,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: paymentIntegrationMetadata.title,
  description: paymentIntegrationMetadata.description,
  keywords: paymentIntegrationMetadata.keywords,
  alternates: {
    canonical: paymentIntegrationMetadata.canonical,
  },
  openGraph: {
    title: paymentIntegrationMetadata.title,
    description: paymentIntegrationMetadata.description,
    url: paymentIntegrationMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

// Technology Ecosystem Items for Payment Gateways
const paymentTechnologyItems: TechnologyItem[] = [
  {
    name: "Stripe",
    icon: <SiStripe className="w-8 h-8 text-[#635BFF]" />,
    href: "https://stripe.com/",
  },
  {
    name: "Razorpay",
    icon: <SiRazorpay className="w-8 h-8 text-[#0C2340]" />,
    href: "https://razorpay.com/",
  },
  {
    name: "PayPal",
    icon: <SiPaypal className="w-8 h-8 text-[#00457C]" />,
    href: "https://www.paypal.com/",
  },
  {
    name: "Shopify Checkout",
    icon: <SiShopify className="w-8 h-8 text-[#96BF48]" />,
    href: "https://www.shopify.com/",
  },
  {
    name: "WooCommerce",
    icon: <SiWoocommerce className="w-8 h-8 text-[#96588A]" />,
    href: "https://woocommerce.com/",
  },
  {
    name: "Server APIs",
    icon: <Workflow className="w-8 h-8 text-[#3B82F6]" />,
    href: "https://bixeltek.com/services/ecommerce-development",
  },
  {
    name: "Webhooks & Events",
    icon: <Cpu className="w-8 h-8 text-[#8B5CF6]" />,
    href: "https://bixeltek.com/services/ecommerce-development",
  },
  {
    name: "Verification & Security",
    icon: <ShieldCheck className="w-8 h-8 text-[#10B981]" />,
    href: "https://bixeltek.com/services/ecommerce-development",
  },
];

// Curated Payment Stack Tools for Final CTA
const paymentStackTools: TechStackItem[] = [
  {
    name: "Payment Gateways",
    category: "Payment Processing",
    description:
      "Stripe, Razorpay, PayPal, and PayTabs integration tailored to regional merchant accounts and payment methods.",
    icon: <CreditCard className="w-5 h-5 text-white" />,
  },
  {
    name: "Server-Side Verification",
    category: "Transaction Integrity",
    description:
      "Secure backend signature checks and API confirmations preventing unverified callbacks from updating orders.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    name: "Webhooks & Event Handlers",
    category: "Asynchronous Reliability",
    description:
      "Authenticated notification processing, idempotency guards, and automated state synchronization.",
    icon: <Workflow className="w-5 h-5 text-white" />,
  },
  {
    name: "Shopify & WooCommerce",
    category: "Platform Integration",
    description:
      "Supported extensions, custom checkout apps, and theme integration aligned with platform guidelines.",
    icon: <SiShopify className="w-5 h-5 text-white" />,
  },
  {
    name: "Refund & Status Workflows",
    category: "Operational Workflows",
    description:
      "Full and partial refund reconciliation, transaction references, and operational exception tracking.",
    icon: <Lock className="w-5 h-5 text-white" />,
  },
  {
    name: "Multi-Currency & Regional Methods",
    category: "Market Expansion",
    description:
      "UPI, credit/debit cards, digital wallets, and international currency settlement support.",
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
];

export default function PaymentGatewayIntegrationPage() {
  return (
    <main className="bg-[#08080C] min-h-screen">
      {/* 01 Global Header */}
      <Header />

      {/* 02 Hero */}
      <ServiceHero
        eyebrow={paymentIntegrationHero.eyebrow}
        h1={paymentIntegrationHero.h1}
        p1={paymentIntegrationHero.p1}
        p2={paymentIntegrationHero.p2}
        primaryButtonText={paymentIntegrationHero.primaryButtonText}
        primaryButtonHref={paymentIntegrationHero.primaryButtonHref}
        microcopy={paymentIntegrationHero.microcopy}
        visualTagSubtitle="Ecommerce Checkout & Gateway"
        visualTagTitle="Stripe · Razorpay · PayPal"
        visualBadgeText="Verified Payments"
        visualImage={heroImg}
      />

      {/* 03 Client Trust Marquee */}
      <ClientTrustMarquee />

      {/* 04 Overview / Commercial & Architectural Purpose */}
      <ServiceOverviewSection
        id="payment-integration-overview"
        eyebrow={paymentIntegrationOverview.eyebrow}
        h2={paymentIntegrationOverview.h2}
        intro={paymentIntegrationOverview.intro}
        body={paymentIntegrationOverview.body}
        points={paymentIntegrationOverview.points}
        closingCopy={paymentIntegrationOverview.closingCopy}
        imageSrc={overviewImg}
        imageAlt="Payment gateway architecture and checkout verification workflow"
        direction="left"
      />

      {/* 05 Common Payment Challenges */}
      <ServiceProblemSection
        id="payment-integration-problems"
        eyebrow="COMMON PAYMENT CHALLENGES"
        h2="Where Checkout & Payment Flows Break Down in Practice"
        intro="A payment gateway is only one part of an online order. Broken callbacks, duplicate charges, unhandled retries, and mismatched refund records can disrupt sales and operations."
        cards={paymentIntegrationProblems}
        gridCols={3}
      />


      {/* 06 Capabilities & Scope */}
      <ServiceScopeSection
        id="payment-integration-scope"
        eyebrow="PAYMENT INTEGRATION SCOPE"
        h2="Technical Scope of Work Across Gateways, Checkouts & Order States"
        intro="We connect payment providers through supported platform integrations or custom server-side API workflows, ensuring every transaction is verified and orders stay accurate."
        cards={paymentIntegrationScope}
        scopeNote="Every engagement is scoped around your merchant account eligibility, checkout platform constraints, and operational refund workflows."
      />

      {/* 07 Key Architectural & Implementation Decisions */}
      <ServiceContentPanels
        id="payment-integration-decisions"
        eyebrow="IMPLEMENTATION & ARCHITECTURE DECISIONS"
        h2="Key Architectural Choices to Resolve Before Integration"
        intro="A reliable checkout requires clear decisions around plugin vs custom API work, hosted vs embedded experiences, server verification rules, and multi-gateway complexity."
        panels={paymentIntegrationDecisions.map((item) => ({
          title: item.title,
          description: `${item.context} ${item.consideration}`,
        }))}
        image={decisionsImg}
        imageAlt="Evaluating payment gateway architecture, checkout verification, and webhook handling"
        direction="right"
        supportingNote="We resolve these questions during discovery so that delivery proceeds with clear technical boundaries."
        supportingLink={{
          text: "Explore Ecommerce Development",
          destination: "/services/ecommerce-development",
        }}
      />

      {/* 08 Practical Use Cases */}
      <ServiceUseCaseSection
        id="payment-integration-use-cases"
        eyebrow={paymentIntegrationUseCases.eyebrow}
        h2={paymentIntegrationUseCases.h2}
        intro={paymentIntegrationUseCases.intro}
        cards={paymentIntegrationUseCases.items.map((uc) => ({
          title: uc.title,
          description: `${uc.situation} ${uc.approach}`,
          examples: [uc.successSignal],
        }))}
        badgeLabel="Payment Scenario"
        examplesTitle="Success Signal"
      />

      {/* 09 Delivery Process */}
      <ServiceProcess
        id="payment-integration-process"
        eyebrow="OUR DELIVERY PROCESS"
        h2="A Methodical, Verification-First Approach to Payment Integration"
        intro="From checkout discovery and payment state definition to signature verification, sandbox scenario testing, and go-live handover."
        stages={paymentIntegrationProcess.map((p) => ({
          stageNumber: p.number,
          title: p.title,
          description: p.description,
        }))}
        supportingParagraph="We validate complete transaction scenarios including success, decline, cancel, retry, and asynchronous webhook delivery before store launch."
      />


      {/* 11 Why Bixeltek */}
      <ServiceWhyChooseUs
        id="why-bixeltek"
        data={{
          eyebrow: paymentIntegrationWhyBixeltek.eyebrow,
          h2: paymentIntegrationWhyBixeltek.h2,
          intro: paymentIntegrationWhyBixeltek.intro,
          points: paymentIntegrationWhyBixeltek.points,
          closingCopy: paymentIntegrationWhyBixeltek.closingCopy,
        }}
        defaultImage={whyChooseImg}
        direction="left"
      />

      {/* 13 Related Services */}
      <ServiceRelatedServices
        id="related-services"
        eyebrow="RELATED SERVICES"
        h2="Connected Ecommerce & Engineering Capabilities"
        intro="Payment integration works hand-in-hand with store development, platform specialization, search marketing, and conversion tracking."
        cards={paymentIntegrationRelatedServices}
        gridCols={3}
      />

      {/* 14 Frequently Asked Questions */}
      <ServiceFAQ
        id="faqs"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        h2="Common Questions About Payment Gateway Integration"
        faqs={paymentIntegrationFaqs}
      />

      {/* 15 Final CTA & Lead Form */}
      <ServiceFinalCTA
        id="final-cta"
        eyebrow={paymentIntegrationFinalCta.eyebrow}
        h2={paymentIntegrationFinalCta.h2}
        intro={paymentIntegrationFinalCta.description}
        supportingCopy={paymentIntegrationFinalCta.supportingCopy}
        sectionSubtitle="Ecommerce Engineering & Payment Gateway Stack"
        tools={paymentStackTools}
      />

      {/* 16 Global Footer */}
      <Footer />
    </main>
  );
}

