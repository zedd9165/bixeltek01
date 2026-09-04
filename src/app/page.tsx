  export const metadata = {
  title: "Bixeltek | Digital Transformation and Growth Agency India",
  description:
    "Bixeltek is a Google-certified digital transformation and growth agency offering SEO, Google Ads, web design & social media marketing. Trusted in India, USA, Canada & Saudi. & Saudi.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  alternates: {
    canonical: "https://bixeltek.com/",   
  },
  openGraph: {
    title: "Best Digital Marketing Agency | SEO, Google Ads & Web Design",
    description:
      "Bixeltek is a Google-certified digital marketing agency offering SEO, Google Ads, web design & social media marketing. Trusted in India, USA, Canada & Saudi.",
    siteName: "Bixeltek",
    type: "website",
    url: "https://bixeltek.com/",     
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design.",
  },
};

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ContactButton } from "@/sections/contactButton";
import WhyChoose from "@/sections/WhyChoose";
import CardList from "@/components/ServiceCards";
import CarouselSection from "@/components/industriescarosel";
import FAQSection from "@/sections/HomeFaq";
import Blog from "@/sections/Blog";
import Tech2 from "@/components/Tech2";
import TimelineSection from '@/sections/Process'
import GooglePartner from "@/sections/GooglePartner";
import HomeIntegrationMindMap from "@/components/TechHomePage";
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import DynamicIndustrySection from "@/components/Common/IndustryCarousel";
import IntegrationMindMap from "@/components/Common/IntegratedMindMap";

const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industries",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Pet Stores",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil Refineries",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]


export default function Home() {
  return (
    <>
      <Header />
      <Hero /> 
      <LogoTicker />
      <About />
      <CardList />
      <section className="bg-white">
      <WhyChoose/>
      </section>
      {/* <MetricsSection/> */}
      {/* <CarouselSection /> */}
      <DynamicIndustrySection
  heading={
    <>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-gray-800">
                        INDUSTRIES WE
                    </span>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        &nbsp;SERVE
                    </span>
    </>
  }
  description="Discover the diverse industries we proudly cater to, offering innovative solutions to help you excel in your field."
  industries={industries}
  theme="blue"
/>

      <TimelineSection />
      {/* <Testimonials />
      <CallToAction /> */}
      <GooglePartner />
      {/* <HomeIntegrationMindMap/> */}
      <IntegrationMindMap 
      bg='bg-white'
      heading={
        <span>
          Technologies We Work With
        </span>
      }
      description='We leverage cutting-edge tools and frameworks to craft scalable, high-performing digital solutions effortlessly.'
      />
      <Tech2 />
      {/* <Casestudy /> */}
      <FAQSection/>
      <Blog/>
      <ContactButton />
      <Footer />
    </>
  );
}
