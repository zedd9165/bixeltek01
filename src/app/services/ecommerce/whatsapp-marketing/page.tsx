import type { Metadata } from "next";
import Hero from "@/components/WhatsappEcommerce/Hero";
import ValueProps from "@/components/WhatsappEcommerce/Valueprops";
import UseCaseCards from "@/components/WhatsappEcommerce/UseCaseCards";
import PainPoints from "@/components/WhatsappEcommerce/PainPoints";
import WhyItConverts from "@/components/WhatsappEcommerce/WhyItConverts";
import GrowthChecklist from "@/components/WhatsappEcommerce/GrowthChecklist";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import LocationProcessSection from "@/components/Common/location/LocationProcessSection";
import { faqs, whatsappProcessSteps } from "@/data/whatsappEcommerce";
import AreasWeServe from "@/components/WebDev/WebSection8";
import LocationFaqSection from "@/components/Common/location/LocationFaqSection";
import AiAndChatbots from "@/components/WhatsappEcommerce/AiAndChatbots";
import ComplianceSection from "@/components/WhatsappEcommerce/ComplianceSection";
import BusinessAppVsPlatform from "@/components/WhatsappEcommerce/BusinessAppVsPlatform";
import RoiMeasurement from "@/components/WhatsappEcommerce/RoiMeasurement";
import ProcessTimeline from "@/components/WhatsappEcommerce/ProcessTimeline";
import ContactForm from "@/components/WhatsappEcommerce/ContactForm";


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
      <ValueProps />
      <UseCaseCards />
      <PainPoints />
      <ProcessTimeline/>
      <GrowthChecklist />
      <WhyItConverts />
      <AiAndChatbots />
      <ComplianceSection/>
      <BusinessAppVsPlatform />
      <RoiMeasurement/>
      <AreasWeServe />
     <LocationFaqSection
             heading={
               <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
                 Still Got Questions?
               </h2>
             }
             description="Honest, detailed answers to the questions our clients ask most before starting their mobile app project."
             faqs={faqs}
           />
      <ContactForm />
    </main>
  );
}