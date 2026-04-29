
 export const metadata = {
    title: "Google Ads Management UK & Ireland | Google Partner PPC Agency",
    description:
        "Bixeltek is a certified Google Partner agency helping businesses across the UK & Ireland run smarter PPC campaigns. High-quality leads, lower CPA, and transparent reporting.",
    keywords:
        "Google Ads management UK, Google Ads agency Ireland, PPC agency UK, Google Ads management London, PPC management UK, Google Partner agency UK, pay per click UK, Google Ads Ireland, PPC campaigns UK, Google Ads agency Dublin, paid search UK, PPC management Ireland",
    openGraph: {
        title: "Google Ads Management UK & Ireland | Google Partner PPC Agency",
        description:
            "Bixeltek is a certified Google Partner agency helping businesses across the UK & Ireland run smarter PPC campaigns. High-quality leads, lower CPA, and transparent reporting.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/uk-ireland/google-ads-management",
    },
};



import React from 'react'
import WhyGoogleAdsToronto from '@/components/Toronto/GoogleAds/Section2TG'
import CampaignsSection from '@/components/Toronto/GoogleAds/Sextion3TG'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyGoogleAdsToronto2 from '@/components/Toronto/GoogleAds/Section4TG'
import GoogleAdsServicesSectionToronto from '@/components/Toronto/GoogleAds/Section5TG'
import TextMarquee from '@/components/Toronto/GoogleAds/SectionMaruqq'
import WhoIsThisServiceFor from '@/components/Toronto/GoogleAds/Section6TG'
import GradientBorderContainersMobToronto from '@/components/Toronto/GoogleAds/TimelineTG'
import TGDevFaq from '@/components/Toronto/GoogleAds/SectionFaqTG'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import WhyGoogleAdsUk from '@/components/UK/GoogleAds/WhyGoogleAds';
import CampaignsSectionUk from '@/components/UK/GoogleAds/Campaigns';
import WhyGoogleAdsUk2 from '@/components/UK/GoogleAds/WhyGoogleAds2';

  const services = [
  {
    title: 'Comprehensive Account Setup',
    description: 'From keyword research and competitor analysis to campaign structuring and ad group creation — we design campaigns to target your exact audience across the UK & Ireland.',
  },
  {
    title: 'Expert Ad Copywriting',
    description: 'We craft compelling, conversion-focused ads that resonate with UK & Irish customers and highlight what makes your business the right choice.',
  },
  {
    title: 'Landing Page Optimisation',
    description: 'Drive conversions with dedicated landing pages built around clear calls-to-action, local trust signals, and messaging aligned to your ads.',
  },
  {
    title: 'Conversion Tracking & Analytics',
    description: 'Full tracking implementation for calls, form submissions, purchases, and more — with transparent, real-time reporting you can actually understand.',
  },
  {
    title: 'Budget Management & Bidding',
    description: 'Daily bid management to maximise your ROI and eliminate wasted spend — every pound and euro works harder.',
  },
  {
    title: 'Ongoing Optimisation',
    description: 'Continuous A/B testing, negative keyword refinement, and campaign adjustments to keep performance improving month after month.',
  },
];
   const steps = [
  {
    number: '01',
    title: 'Deep Discovery & Market Analysis',
    text: "We map your goals, competitors, and the unique search behaviour of your target audience across the UK & Ireland — identifying the highest-value opportunities before a single penny is spent.",
    gradient: 'from-blue-500 via-blue-400 to-transparent',
    color: 'text-[#4285F4]',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Custom Campaign Strategy',
    text: "We design campaign structures built for maximum Quality Score and market coverage — pinpointing the highest-converting keywords including long-tail and location-specific terms relevant to your city or region.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-[#34A853]',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Ad & Landing Page Creation',
    text: "We write persuasive, benefits-first ad copy and build UK & Ireland-optimised landing pages complete with calls-to-action, trust badges, reviews, and local social proof.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-[#EA4335]',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Launch, Tracking & Measurement',
    text: "Fast turnaround of 5–10 days from brief to live. Full analytics setup, call tracking, and lead attribution in place from day one — so you know exactly what's working.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-[#FBBC04]',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Ongoing Optimisation',
    text: "Daily management: negative keyword pruning, bid adjustments, search term refinement, and creative testing. Weekly and monthly deep-dive reports with clear ROI recommendations.",
    gradient: 'from-indigo-500 via-transparent to-transparent',
    color: 'text-[#4285F4]',
    bgcolor: 'hover:bg-indigo-500',
  },
];
const faqs = [
  {
    question: "How quickly will I see results from Google Ads?",
    answer:
      "Google Ads can generate leads from the moment your campaign goes live. Most clients begin seeing meaningful results within the first 2–4 weeks, with performance improving steadily as we gather data and optimise.",
  },
  {
    question: "How much should I budget for Google Ads in the UK or Ireland?",
    answer:
      "We work with a range of budgets and will recommend a spend level based on your industry, competition, and goals. We'll always be upfront about what's realistic for your market before you commit.",
  },
  {
    question: "Do you manage campaigns across the whole of the UK & Ireland?",
    answer:
      "Yes — we work with businesses in England, Scotland, Wales, Northern Ireland, and the Republic of Ireland. Whether you're targeting a single city or the entire region, we build campaigns to match your coverage.",
  },
  {
    question: "Will I own my Google Ads account?",
    answer:
      "Always. Your account, your data, your assets — full ownership sits with you from day one.",
  },
  {
    question: "What makes Bixeltek different from other UK PPC agencies?",
    answer:
      "We're a certified Google Partner with a focus on ROI over vanity metrics. You get transparent reporting, direct specialist access, and strategies built around your actual business goals — not generic templates.",
  },
  {
    question: "Do you only run Google Search ads?",
    answer:
      "No — we manage the full suite including Search, Display, Shopping, Performance Max, Local Service Ads, and Remarketing, recommending the right mix based on your goals.",
  },
];



export default function Page() {
  return (
    <>
    <LocationHeroSection
     heading={
                    <>
                    <span>UK & Ireland's <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth</span>
                    </>
                }
     description='Bixeltek is a certified Google Partner agency helping businesses across the UK & Ireland run smarter PPC campaigns that deliver high-quality leads and measurable ROI.'
     primaryCTA={{
        text: 'Get Your Free Google Ads Audit',
        variant: 'primary',
        action: { type: 'link', href: '#form' },
      }}
      secondaryCTA={{
        text: 'Speak to a Specialist',
        variant: 'secondary',
        action: { type: 'link', href: 'mailto:zee@bixeltek.com' },
      }}
    />
      {/* <section className="relative w-full h-[80vh] md:h-[90vh] flex flex-col items-center justify-end lg:justify-center overflow-hidden">
        <div className="absolute inset-0">
        </div>
        <div className="relative z-10 max-w-7xl text-center px-4">
          <h1 className="text-3xl md:text-7xl font-inter font-bold text-white/90 text-white mb-4 leading-tight">
            Toronto’s <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 mb-6">
            Bixeltek is a certified Google Partner agency helping Toronto &amp; GTA businesses run smarter PPC campaigns that deliver high-quality leads and measurable ROI.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="#form">
              <button className="px-6 py-3 bg-black/10 backdrop:blur-2xl border border-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
                Get Your Free Google Ads Audit
              </button>
            </Link>
            <a href="mailto:zee@bixeltek.com">
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition">
                Speak to a Specialist
              </button>
            </a>
          </div>

        </div>
        <div className="absolute inset-0 bg-black/40" />
        <LogoTicker2 />
      </section> */}
      <WhyGoogleAdsUk/>
      <CampaignsSectionUk />
      <MovingBlob />
      <WhyGoogleAdsUk2 />
      <TextMarquee />
      <ServicesSection
            heading='At Bixeltek, We Specialize in'
            spanText='Making Your Ad Spend Work Smarter'
            description='Our Google Ads Management service across the UK & Ireland delivers full-cycle PPC management — tailored to your business goals, your industry, and your local market. We handle all the complexity so you can focus on growing your business and closing leads.'
            services={services}
            />
      {/* <GradientBorderContainersMobToronto /> */}
      <LocationProcessSection
        heading={
          <>
                  <span>Our<span className="text-blue-500"> Proven Google Ads <br /></span>Management Process</span>
          </>
        }
        description='The 5-Step Process That Delivers Results for UK & Irish Businesses'
        steps={steps}
        cta={{
        text: 'Talk To Our Ads Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your Google Ads campaigns are launched fast, optimised daily, and built to maximise ROI across the UK & Ireland."

      />
      <WhoIsThisServiceFor />
      {/* <TGDevFaq /> */}
      <LocationFaqSection
        label='FAQs'
        heading={
          <>
          <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-10">
              Still Got Questions?
            </h2>
          </>
        }
        faqs={faqs}
        />
        <ContactCTASection
        heading='Ready to Boost Your'
        spanText='UK & Ireland Business with Google Ads?'
        description='Customers across the UK & Ireland are searching for your services right now. Don`t let competitors capture those clicks. Partner with Bixeltek — a certified Google Partner agency — to launch highly targeted campaigns that drive leads, sales, and measurable ROI..'
        />

      {/* <section
        className="bg-black p-4 md:p-8 lg:p-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
        id="form"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Boost Your <span className="text-blue-500">Toronto Business with Google Ads?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Toronto customers are searching for your services right now. Don’t let competitors capture those clicks!
              Partner with <span className="font-semibold">Bixeltek</span>, a Google Partner Certified agency,
              to launch highly targeted campaigns that drive leads, sales, and measurable ROI across Toronto and the GTA.
            </p>

            
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <ContactFromNew />
        </div>
      </section> */}
    </>
  )
}
