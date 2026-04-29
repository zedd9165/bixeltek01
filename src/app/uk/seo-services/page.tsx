
export const metadata = {
  title: "SEO Services UK & Ireland | Bixeltek – Trusted SEO Agency",
  description:
    "Bixeltek provides SEO services for businesses across the UK & Ireland. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
  keywords:
    "SEO services UK, SEO agency UK, SEO services Ireland, local SEO UK, SEO agency London, SEO agency Dublin, search engine optimisation UK, technical SEO UK, AI SEO UK, SEO company Ireland, organic search UK, SEO services Manchester, SEO agency Belfast, on-page SEO UK",
  openGraph: {
    title: "SEO Services UK & Ireland | Bixeltek – Trusted SEO Agency",
    description:
      "Bixeltek provides SEO services for businesses across the UK & Ireland. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/uk-ireland/seo-services",
  },
};

import React from 'react'
import TSHero from '@/components/Toronto/SeoServices/TSHero'
import WhySEOToronto from '@/components/Toronto/SeoServices/TSSection1'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import SEOGridSection2 from '@/components/Toronto/SeoServices/TSSection2'
import WhySEOMattersToronto from '@/components/Toronto/SeoServices/TSSection3'
import SEOcategoryServicesToronto from '@/components/Toronto/SeoServices/TSSection4'
import AreasWeServeCanada from '@/components/Toronto/SeoServices/AreasWeServeTS'
import BenefitsSectionTorontoSeo from '@/components/Toronto/SeoServices/TSSection6'
import TSFaq from '@/components/Toronto/SeoServices/TSFaq'
import GradientBorderContainersSEO from '@/components/Toronto/SeoServices/TSTimeline'
import ContactFromNew from '@/components/ContactFormNew';
import IndustriesTS from '@/components/Toronto/SeoServices/TSIndustries';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png'
import starimg from '@/assets/star-shine-svgrepo-com.png'
import googleimg from '@/assets/google-authenticator-svgrepo-com.png'
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import WhySEOUk from '@/components/UK/SeoService/WhySeo';
import SEOGridSection from '@/components/UK/SeoService/SeoGrid';
import WhySEOMattersUk from '@/components/UK/SeoService/WhySeoMatters';
import SEO_BenefitsUk from '@/components/UK/SeoService/Benefits';
import BenefitsSectionUkSeo from '@/components/UK/SeoService/WhyChoose';


 const proofPoints = [
    { id: 1, text: "200+ SEO Campaigns Delivered", icon: starimg },
    { id: 2, text: "Trusted by Brands Across UK & Ireland", icon: iconimg },
    { id: 3, text: "Google Partner Agency", icon: googleimg },
  ];
  

  const services = [
  {
    title: 'SEO Audits',
    description: 'Thorough technical, on-page, off-page, and AI readiness audits to identify issues, uncover opportunities, and optimise your website for maximum organic search performance.',
  },
  {
    title: 'Keyword Strategy',
    description: 'A targeted keyword strategy focused on profitable, intent-driven, and location-specific search terms to attract high-quality traffic from across the UK & Ireland.',
  },
  {
    title: 'On-Page SEO',
    description: 'Optimised metadata, headings, schema markup, internal linking, and page content — ensuring higher rankings, better crawlability, and stronger search engine visibility.',
  },
  {
    title: 'Content Development',
    description: 'High-quality blogs, service pages, and topical clusters that establish authority, improve rankings, and provide genuine value to your visitors over the long term.',
  },
  {
    title: 'Local SEO UK & Ireland',
    description: 'Google Business Profile optimisation, local citation building, and maps visibility to dominate searches in your city — attracting ready-to-buy local customers.',
  },
  {
    title: 'Ecommerce SEO',
    description: 'Product page optimisation, category structuring, structured data, and navigation improvements to drive organic traffic and conversions for UK online stores.',
  },
  {
    title: 'AI SEO Services',
    description: 'Advanced AI-driven SEO strategies to ensure your brand is recognised and recommended by Gemini, ChatGPT, and other emerging AI-powered search engines.',
  },
  {
    title: 'Link Building',
    description: 'White-hat link building campaigns and digital PR strategies that strengthen your domain authority, build trust, and improve search rankings over time.',
  },
  {
    title: 'Technical SEO',
    description: 'Site speed improvements, mobile responsiveness, crawlability, security, and structured data implementation for optimal performance and search engine rankings.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    text: "We begin with a full technical SEO audit, keyword gap analysis, and competitor research — uncovering the opportunities and roadblocks that will shape your entire strategy.",
    gradient: 'from-blue-500 via-blue-400 to-transparent',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    text: "Every campaign follows a prioritised roadmap with clear milestones, actions tied to measurable outcomes, and strategies aligned to your specific business goals across the UK & Ireland.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'On-Page Optimisation',
    text: "We refine metadata, schema markup, internal linking, and content structure — ensuring search engines and users can easily understand, navigate, and trust your website.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content Development',
    text: "From service pages to long-form guides and topical clusters, we create content engineered to rank, engage your audience, and convert visitors into enquiries.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Local SEO UK & Ireland',
    text: "We strengthen your Google Maps presence, local citations, and customer review profiles to help you dominate local searches in your city and surrounding areas.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'AI SEO Integration',
    text: "By defining your brand's entities and establishing context, we prepare your business to be discovered and recommended by AI platforms like Google Gemini and ChatGPT.",
    gradient: 'from-red-500 via-[#13131333] to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
  {
    number: '07',
    title: 'Authority Building',
    text: "High-quality backlinks, digital PR placements, and strategic brand mentions that build trust, domain authority, and competitive strength in your market.",
    gradient: 'from-purple-500 via-pink-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '08',
    title: 'Reporting & Review',
    text: "Transparent monthly reports tracking rankings, organic traffic, leads, and ROI — ensuring you always see clear, real business impact from your SEO investment.",
    gradient: 'from-blue-500 via-transparent to-transparent',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
];

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
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
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
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]

const faqs = [
  {
    question: "How long before SEO shows results in the UK & Ireland?",
    answer:
      "Most businesses begin seeing measurable improvements in rankings and traffic within 3–6 months. Competitive niches may take longer, but the results compound significantly over time — making SEO one of the highest-ROI investments you can make.",
  },
  {
    question: "How is SEO different from Google Ads?",
    answer:
      "Google Ads delivers immediate visibility but stops the moment you stop paying. SEO builds organic authority that continues generating leads long after the initial investment — with compounding returns over time.",
  },
  {
    question: "What is AI SEO and why does it matter?",
    answer:
      "AI SEO optimises your brand to be recognised, understood, and recommended by AI-powered platforms like Google Gemini and ChatGPT. As more customers use AI to find services, being present in these results is becoming as important as traditional Google rankings.",
  },
  {
    question: "Do you create the SEO content for us?",
    answer:
      "Yes. Our team handles everything from keyword research and content strategy to writing, publishing, and optimising — so you don't need an in-house content team to benefit from SEO.",
  },
  {
    question: "Will I receive regular reports?",
    answer:
      "Every client receives transparent monthly reports covering keyword rankings, organic traffic, leads generated, and ROI — with clear commentary so you always understand what's happening and why.",
  },
  {
    question: "Do you work with businesses outside major UK cities?",
    answer:
      "Absolutely. We work with businesses across the entirety of the UK & Ireland — from major cities to regional towns — and tailor our local SEO strategies to match your specific market.",
  },
];                 


export default function page() {

  return (
    <>
      {/* <TSHero /> */}
      <LocationHeroSection
      heading={
        <>
              <span>SEO Services in UK & Ireland Designed for{" "}
              <span className="text-blue-500">Growth and Market Leadership</span></span>

      </>
      }
      description='Bixeltek helps businesses across the UK & Ireland achieve long-term digital visibility through advanced SEO. We combine technical precision, semantic depth, and AI SEO innovation to build rankings that deliver measurable leads and revenue.'
      proofPoints={proofPoints}
      primaryCTA={{
        text: "Request a Free SEO Audit",
        variant: "primary",
        action: {type:'openForm', form:"seo"}
      }}
      secondaryCTA={{
        text: "Speak With an SEO Specialist",
        variant: "secondary",
        action: {type:'link', href:"mailto:zee@bixeltek.com"}
      }}
      />
      <MovingBlob />
      <WhySEOUk />
      <SEOGridSection />
      <WhySEOMattersUk   />
      <ServicesSection
            heading='Our'
            spanText='SEO Services in  UK & Ireland'
            description='Bixeltek delivers end-to-end SEO solutions designed for businesses across the UK & Ireland. Our strategies combine proven fundamentals with emerging AI SEO methods to deliver sustainable, long-term results.'
            services={services}
            />
      {/* <IndustriesTS/> */}
      <LocationIndustrySection
      heading={
        <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        SEO Services in UK & Ireland <br></br> That Drive Traffic, Leads, and Growth
                    </span>
        </>
      }
      description='We`ve built and executed SEO strategies for businesses across the UK & Ireland — tailoring every campaign to how customers in your sector search, compare, and decide.'
      industries={industries}
      />
      {/* <GradientBorderContainersSEO /> */}
          <LocationProcessSection
        heading={
          <>
                  <span>A Proven Process for <span className="text-blue-500">Sustainable Growth</span></span>
          </>
        }
        description='SEO success requires structure, discipline, and ongoing optimisation. Our process ensures every campaign builds momentum, compounds results over time, and ties directly back to your business objectives.'
        steps={steps}
        cta={{
        text: ' Talk To Our SEO Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your SEO campaigns deliver not just rankings — but measurable, compounding business growth."

      />
      <SEO_BenefitsUk />
      <BenefitsSectionUkSeo />
      {/* <AreasWeServeCanada /> */}
      {/* <TSFaq /> */}
      <LocationFaqSection
      label='Frequently Asked Questions'
      heading={
        <>
       <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Still Got Questions? Here Are the Answers.
            </h2>
            </>
      }
      faqs={faqs}
      />

      <ContactCTASection
      heading='Ready to Dominate'
      spanText='Google Rankings in UK & Ireland?'
      description='Your customers are searching on Google right now — but are they finding you or your competitors? Partner with Bixeltek, the UK & Ireland`s trusted SEO agency, to build an organic growth strategy that boosts visibility, builds authority, and delivers long-term ROI.'
      />

      {/* <section
        className="bg-black p-8 lg:p-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
        id="form"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Dominate <span className="text-blue-500">Google Rankings in Toronto?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Your customers are searching on Google right now — but are they finding you or your competitors?
              Partner with <span className="font-semibold">Bixeltek</span>, Toronto’s trusted SEO agency, to build
              an organic growth strategy that boosts visibility, trust, and long-term ROI across Toronto and the GTA.
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
