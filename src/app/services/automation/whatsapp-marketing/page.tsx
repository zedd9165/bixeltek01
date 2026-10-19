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
  title: "WhatsApp Marketing & Automation Services | Bixeltek",
  description:
    "Automate lead qualification, appointment booking, and customer engagement with WhatsApp Business API workflows, CRM integration, and conversational sales flows.",
  alternates: {
    canonical: "https://bixeltek.com/services/automation/whatsapp-marketing",
  },
  openGraph: {
    title: "WhatsApp Marketing & Automation Services | Bixeltek",
    description:
      "Turn WhatsApp into your highest-converting engagement and sales channel with automated workflows, CRM sync, and broadcast campaigns.",
    url: "https://bixeltek.com/services/automation/whatsapp-marketing",
    type: "website",
  },
};

export default function WhatsAppMarketingPage() {
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