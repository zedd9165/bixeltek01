import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import ComplianceSection from "@/components/WhatsappEcommerce/ComplianceSection";
import AiAndChatbots from "@/components/WhatsAppMarketing/AiAndChatbot";
import ConversationalSalesThread from "@/components/WhatsAppMarketing/ConversationalSales";
import FinalCta from "@/components/WhatsAppMarketing/FinalCta";
import GrowthOptimizationDashboard from "@/components/WhatsAppMarketing/GrowthOptimization";
import Hero from "@/components/WhatsAppMarketing/Hero";
import WhatsAppIntroduction from "@/components/WhatsAppMarketing/Introduction";
import LeadGeneration from "@/components/WhatsAppMarketing/LeadGeneration";
import LifecycleAccordion from "@/components/WhatsAppMarketing/LifecycleAccordion";
import RoiMeasurement from "@/components/WhatsAppMarketing/RoiMeasurement";
import WhatsAppUseCases from "@/components/WhatsAppMarketing/UseCaseCards";
import ValueProps from "@/components/WhatsAppMarketing/Valueprops";
import WhatsAppAutomation from "@/components/WhatsAppMarketing/WhatsAppAutomation";
import WhatsAppCampaigns from "@/components/WhatsAppMarketing/WhatsAppCampaigns";
import WhatsAppFaqs from "@/components/WhatsAppMarketing/WhatsAppFaqs";
import ContactForm from "@/components/WhatsAppMarketing/ContactForm";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "WhatsApp Marketing for E-Commerce | Cart Recovery & Broadcasts | Bixeltek",
  description:
    "Recover abandoned carts, confirm COD orders, and drive repeat purchases with WhatsApp Business API automation for Shopify, WooCommerce & headless stores.",
  alternates: {
    canonical: "https://bixeltek.com/services/ecommerce/whatsapp-marketing",
  },
  openGraph: {
    title: "WhatsApp Marketing for E-Commerce | Bixeltek",
    description:
      "Turn WhatsApp into your highest-converting sales channel — cart recovery, order confirmation, and retention automation for online stores.",
    url: "https://bixeltek.com/services/ecommerce/whatsapp-marketing",
    type: "website",
  },
};

export default function EcommerceWhatsAppMarketingPage() {
  return (
    <main>
      <Hero />
      <LogoTicker2 />
      <WhatsAppIntroduction/>
      <ValueProps/>
      <LifecycleAccordion/>
      <WhatsAppUseCases/>
      <LeadGeneration/>
      <ConversationalSalesThread/>
      <WhatsAppCampaigns/>
      <WhatsAppAutomation/>
      <AiAndChatbots/>
      <ComplianceSection/>
      <RoiMeasurement/>
      <GrowthOptimizationDashboard/>
      <WhatsAppFaqs/>
      <FinalCta/>
      <ContactForm />
    </main>
  );
}