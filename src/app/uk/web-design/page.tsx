

export const metadata = {
    title: "Web Design Services UK & Ireland | Bixeltek – Websites That Convert & Grow",
    description:
        "Looking for web design services in the UK & Ireland? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across the UK & Ireland.",
    keywords:
        "web design UK, web design Ireland, website design London, web development UK, custom website design UK, SEO-ready websites UK, web design agency Dublin, WordPress development UK, Next.js development UK, ecommerce website UK, responsive web design UK, web design Manchester, website development Ireland, conversion-focused web design UK",
    openGraph: {
        title: "Web Design Services UK & Ireland | Bixeltek – Websites That Convert & Grow",
        description:
            "Looking for web design services in the UK & Ireland? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across the UK & Ireland.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/uk-ireland/web-design",
    },
};


import React from 'react'
import TWHero from '@/components/Toronto/Webdev/TWHero'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyWebsiteToronto from '@/components/Toronto/Webdev/TWSection1'
import SolutionSection from '@/components/Toronto/Webdev/TWSection2'
import WebDesignToronto2 from '@/components/Toronto/Webdev/TWSection3'
import WebsiteMattersSection from '@/components/Toronto/Webdev/TWSection4'
import WebDesignServicesToronto from '@/components/Toronto/Webdev/TWSection5'
import IndustryCarouselSectionSeo from '@/components/Toronto/Webdev/TWSection6'
import ProcessTorontoWebdev from '@/components/Toronto/Webdev/TWTimeline'
import BenefitsSectionWebDesign from '@/components/Toronto/Webdev/TWBenefits'
import AreasWeServeCanadaTW from '@/components/Toronto/Webdev/TWAreasWeServe'
import ContactFromNew from '@/components/ContactFormNew'
import TMWebIndustries from '@/components/Toronto/Webdev/TWSection6';
import TWFaq from '@/components/Toronto/Webdev/TWFaq'
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
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
import WhyWebsiteUk from '@/components/UK/WebDesign/WhyWebsite';
import SolutionSectionUk from '@/components/UK/WebDesign/Solution';
import WebDesignUk2 from '@/components/UK/WebDesign/WebDesignUk';
import WebsiteMattersSectionUk from '@/components/UK/WebDesign/WhyItMatters';
import BenefitsSectionWebDesignUk from '@/components/UK/WebDesign/Benefits';


const proofPoints = [
    { id: 1, text: "200+ Websites Delivered Across Canada", icon: starimg },
    { id: 2, text: "Specialists in WordPress, Next.js, Ecommerce & Custom Builds", icon: iconimg },
    { id: 3, text: "Google Partner Certified Agency", icon: googleimg },
  ];


      const services = [
  {
    title: "Custom Website Design",
    description: "Unique, brand-aligned website designs that build trust, engage visitors, and reflect your company's identity — creating a strong and memorable online presence.",
    link: "/custom-coded-websites",
  },
  {
    title: "Custom Coded Websites",
    description: "Complex, feature-rich websites built with clean, efficient code tailored to your specific requirements — delivering performance, scalability, and full customisation.",
    link: "/custom-coded-websites",
  },
  {
    title: "Custom CMS Development",
    description: "Fully custom content management systems built on WordPress, Next.js, or bespoke platforms — designed to streamline your workflows and give you complete control.",
    link: "/custom-cms-websites",
  },
  {
    title: "Ecommerce Websites",
    description: "Shopify, WooCommerce, or custom ecommerce websites optimised for sales — with seamless user experiences, smooth checkout processes, and high conversion rates.",
    link: "/ecommerce-websites",
  },
  {
    title: "Payment Gateway Integrations",
    description: "Secure, reliable payment gateway integrations enabling smooth online transactions — supporting Stripe, PayPal, and other leading UK & Irish payment providers.",
    link: "/payment-gateway-integrations",
  },
  {
    title: "Landing Page Design",
    description: "High-converting landing pages tailored for campaigns, promotions, and PPC ads — crafted to capture leads and maximise marketing ROI.",
    link: "#",
  },
  {
    title: "Website Redesigns",
    description: "Modernise outdated websites with fresh design, improved functionality, and optimised user experience — aligned with current standards and your brand's ambitions.",
    link: "#",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing website support including updates, backups, security monitoring, and performance optimisation — keeping your site reliable, fast, and secure at all times.",
    link: "#",
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    text: "We start by understanding your goals, reviewing competitors, analysing your current website, and mapping opportunities — building a strong strategic foundation before a single design decision is made.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Wireframing',
    text: "We create detailed strategies, plan user flows, and develop wireframes that align design layouts with your business objectives and the expectations of UK & Irish audiences.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: "We build responsive, visually compelling, and SEO-optimised websites — turning wireframes into fully functional designs ready for content and integration.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content & SEO Integration',
    text: "We add high-quality content, visuals, and on-page SEO elements — including metadata, schema markup, and internal linking — to improve visibility and engagement from launch.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Testing & QA',
    text: "Comprehensive testing across devices, browsers, and platforms ensures flawless performance, full responsiveness, and an excellent user experience before anything goes live.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Launch & Support',
    text: "A smooth, monitored go-live — followed by ongoing maintenance, updates, and performance support to ensure long-term reliability and continued results.",
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
];

const industries=[
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
    question: "Why isn't my current website generating leads?",
    answer:
      "Most underperforming websites share the same core issues — slow load times, poor mobile experience, weak calls-to-action, or no SEO foundation. We audit your site and fix the exact problems that are costing you customers.",
  },
  {
    question: "How long does a website redesign take?",
    answer:
      "Most projects are completed within 6–8 weeks. Simpler sites can be delivered faster, while more complex custom builds or ecommerce platforms may take longer. We'll give you a clear timeline before we begin.",
  },
  {
    question: "Will my new website rank on Google?",
    answer:
      "Yes — every website we build is structured with SEO best practices from the ground up, including technical SEO, metadata, schema markup, and content architecture designed to rank in UK & Irish search results.",
  },
  {
    question: "Which platforms do you build on?",
    answer:
      "We work across WordPress, Next.js, Shopify, WooCommerce, and fully custom-coded solutions — recommending the right platform based on your goals, budget, and long-term needs.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. We offer ongoing maintenance packages covering updates, backups, security monitoring, and performance optimisation — so your website stays in peak condition after going live.",
  },
  {
    question: "Can you build ecommerce websites for UK & Irish businesses?",
    answer:
      "Yes. We build Shopify, WooCommerce, and custom ecommerce websites optimised for UK & Irish customers — including local payment gateway integrations, VAT compliance-ready structures, and conversion-focused product pages.",
  },
  {
    question: "Will my website be mobile-responsive?",
    answer:
      "Every website we deliver is fully responsive — tested across all major devices and browsers to ensure a flawless experience whether your customer is on desktop, tablet, or smartphone.",
  },
  {
    question: "Will my website load fast?",
    answer:
      "Speed is built into our development process. We optimise images, use modern frameworks, and follow Core Web Vitals best practices to ensure your site loads quickly and keeps visitors engaged.",
  },
  {
    question: "Can you integrate third-party tools?",
    answer:
      "Yes — we integrate CRMs, booking systems, live chat tools, analytics platforms, payment gateways, and more. If your business relies on a specific tool, we'll make sure your website connects with it seamlessly.",
  },
  {
    question: "Do you offer fully custom web design?",
    answer:
      "Every website we build is designed from scratch for your brand — no templates, no generic layouts. Your website will be unique to your business and built to reflect exactly who you are.",
  },
];

export default function page() {

    return (
        <>
            {/* <TWHero /> */}
            <LocationHeroSection
            heading={
                <>
                <span>Struggling With a <span className='text-blue-500'>Website That Doesn’t Deliver?</span></span>
                </>
            }
            description="Your website should be your strongest sales tool — but for many businesses across the UK & Ireland, it's an expensive liability. Outdated design, slow loading, and poor usability drive customers away before they even engage. At Bixeltek, we design websites that fix these problems and deliver real results — modern, fast, SEO-ready, and built to convert.'\"
              proofPoints={proofPoints}
             primaryCTA={{
                text: 'Get a Free Website Consultation',
                variant: 'primary',
                action: { type: 'openForm', form: 'contact' },
            }}
            secondaryCTA={{
                text: 'Speak With a Web Design Expert',
                variant: 'secondary',
                action: { type: 'link', href: 'mailto:zee@bixeltek.com' },
            }}
            />
            <MovingBlob />
            <WhyWebsiteUk />
            <SolutionSectionUk />
            <WebDesignUk2 />
            <WebsiteMattersSectionUk />
            <ServicesSection
            heading='Full-Spectrum '
            spanText='Web Design & Development Services'
            description='Different businesses have different needs. That`s why we provide a complete range of web design and development services — from simple landing pages to complex custom builds. Whatever your vision, we deliver websites that scale with your business across the UK & Ireland.'
            services={services}
            />
            {/* <TMWebIndustries /> */}
            <LocationIndustrySection
            heading={
                <>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        Websites Built for<br></br> Ambitious Businesses
                    </span>
                </>    
            }
            description=' Our services are for businesses that view their website as a growth engine, not just a digital placeholder. We work with:'
            industries={industries}
            />
            {/* <ProcessTorontoWebdev /> */}
            <LocationProcessSection
        heading={
          <>
                  <span>From Audit to Launch — <span className="text-blue-500">How We Work </span></span>
          </>
        }
        description='Our process is transparent, collaborative, and outcome-driven. Most projects are completed within 6–8 weeks, depending on complexity.'
        steps={steps}
        cta={{
        text: 'Talk To Our Web Design Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="From discovery to launch, we audit, strategise, design, develop, integrate content, optimise for SEO, test thoroughly, and provide ongoing support — so your website is always working for your business."

      />
            <BenefitsSectionWebDesignUk />
            {/* <AreasWeServeCanadaTW /> */}
            {/* <TWFaq /> */}
            <LocationFaqSection
            label='Frequently Asked Questions'
            heading={
                <>
                <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-6">
              Questions We Hear From UK & Irish Businesses
            </h2>
                </>
            }
            // description='Here are answers to the most common questions Toronto businesses ask us about web design, development, and online growth.'
            faqs={faqs}
            />

            <ContactCTASection
            heading=' Ready to Fix What’s'
            spanText='Holding Your Website Back?'
            description='If your website is outdated, slow, or failing to bring in results, it’s costing you more than you realise. At Bixeltek, we design websites that solve problems, remove customer frustrations, and generate measurable business growth — for companies across the UK & Ireland.'
            />

            {/* <section
                className="bg-black p-8 lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row"
                id="form"
            >
                <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Fix What’s <span className="text-blue-500">Holding Your Website Back?</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            If your website is outdated, slow, or failing to bring results, it’s costing you more than you realize. At Bixeltek, we design websites that solve problems, remove customer frustrations, and generate measurable business growth.
                        </p>

                       
                    </div>
                </div>

                <div className="lg:w-[87%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section> */}
        </>
    )
}
