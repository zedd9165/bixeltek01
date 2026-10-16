export const metadata = {
    title:  " Web Design & Development | Eastern Province – Bixeltek",
    description:
        " Build SEO-ready, conversion-focused websites in Khobar, Dammam & Dhahran. Launch your site in 30 days with Bixeltek’s expert web design team.",
    openGraph: {
        title: " Web Design & Development | Eastern Province – Bixeltek",
        description:
            " Build SEO-ready, conversion-focused websites in Khobar, Dammam & Dhahran. Launch your site in 30 days with Bixeltek’s expert web design team.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/web-design-services",
    },
};


import HeroWebDesignSEO from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDHero';
import SaudiEPWDIndustries from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDInd';
import WebDesignFramework from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDProcess';
import WebsiteTrustSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection1';
import WebsiteAuditSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection2';
import WebDesignScienceSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection3';
import WebDevServicesEasternProvince from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection4';
import GrowthStatsSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection5';
import WebsiteInvestmentSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection6';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import heroBg from "@/assets/122748606.jpg"; 
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import expertIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg"
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg"
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg"
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg"

 const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "200+ Global Clients", icon: clientIcon },
    { id: 3, text: "Web Design + SEO Experts", icon: expertIcon },
  ];
  
  const services = [
    {
      title: "Custom CMS Builds",
      description:
        "Powerful, flexible websites built on WordPress, Next.js, or fully custom frameworks — easy for your team to manage, scale, and update without technical hassle.",
      link: "/custom-cms-websites",
    },
    {
      title: "E-Commerce Websites",
      description:
        "Launch your online store with seamless checkout flows, conversion-driven product grids, and lightning-fast mobile optimization that drives real sales.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description:
        "From Razorpay and PayTabs to Stripe, we integrate secure, multi-currency payment systems tailored for Saudi businesses and international scalability.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Custom Coded Websites",
      description:
        "For enterprises and complex workflows, we engineer fully bespoke web solutions — clean, maintainable, and built for long-term performance.",
      link: "/custom-cms-websites",
    },
    {
      title: "Conversion Landing Pages",
      description:
        "Data-driven landing pages crafted for ad campaigns — fast, goal-focused, and optimized to convert clicks into calls, bookings, or purchases.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description:
        "Ongoing site monitoring, backups, plugin updates, and performance optimization — so your website stays secure, smooth, and ahead of competitors.",
      link: "#",
    },
  ]; 

  const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We deep-dive into your audience behavior, market trends, and competitive edge to define the purpose of every page.",
    gradient: "from-green-500 via-green-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "02",
    title: "UX Wireframing",
    text: "We create data-driven layouts based on heatmaps, user journey analysis, and visual hierarchy principles.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500/20",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Every design goes through pixel-perfect refinement before development using Next.js, React, or WordPress with SEO-first structure.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500/20",
  },
  {
    number: "04",
    title: "SEO Integration",
    text: "Your website’s foundation includes schema markup, meta architecture, sitemap generation, and Core Web Vitals optimization.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500/20",
  },
  {
    number: "05",
    title: "Launch, Testing & Analytics",
    text: "We test speed, UX flow, and analytics tracking — ensuring every visitor action is measurable from day one.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500/20",
  },
];

const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: " Healthcare & Dental Clinics",
                            description: "Rank for treatments, attract patients, and grow visibility.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Construction & Engineering",
                            text: "Construction & Engineering",
                            description: " Generate high-intent B2B inquiries from organic traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Industries",
                            text: " Industrial & Manufacturing Firms ",
                            description: "Build supplier visibility and trust online.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Ecommerce",
                            text: "E-commerce & Retail",
                            description: "Rank for products and drive consistent conversions.",
                        },
                        {
                            id: "lawncare",
                            img: pet,
                            label: "Digital Marketing for Education & Training Institutes",
                            text: "Education & Training Institutes",
                            description: "Capture enrollments through search visibility and local maps.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Corporate & Consulting Firms",
                            text: "Corporate & Consulting Firms",
                            description: "Build credibility and inbound visibility for brand trust.",
                        },
                    ]

export default function page() {
  return (
    <>
    {/* <HeroWebDesignSEO/> */}
    <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Your Website Shouldn’t Just Look Good —{" "}
          <span className="text-yellow-500">It Should Grow Your Business.</span></span>
                </>
            }
            description='Serving Khobar, Dammam, and Dhahran — 
          Bixeltek designs SEO-ready, mobile-first, high-conversion websites that turn visitors into paying customers.'
            statement = {
                <>
                <p className="mt-8 text-xl md:text-2xl font-semibold text-yellow-400">
          Launch a High-Performing Website in Just 30 Days — Built to Rank, Convert, and Scale.
        </p>
                </>
            }
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free Website Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a Web Design Expert',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                backgroundImage={heroBg}      
            />
    <WebsiteTrustSection />
    <WebsiteAuditSection />
    <WebDesignScienceSection />
    {/* <WebDevServicesEasternProvince/> */}
    <ServicesSection
    theme='green'
    heading='Complete Web Design & Development Services'
    spanText='for the Eastern Province'
    description='Whether you’re a small business in Khobar or a corporate firm in Dammam, our websites are tailored to your
            scale, audience, and objectives.'
     services={services} 
     hoverStyle='hover:bg-gradient-to-tr hover:from-black hover:via-green-800 hover:to-green-500'      
    />
    {/* <WebDesignFramework/> */}
    <LocationProcessSection
    heading={
      <>
      <span>A Framework That Turns Your <br /> <span className="text-yellow-500">Vision Into a Conversion Machine</span></span>
      </>
    }
    description='Our design process is engineered to deliver predictable quality — on time, on budget, and optimized for results.'
    steps={steps}
    footerText='Each stage is documented and transparent — so you always know what’s being built and why.'
    cta={{
      text:'Book a Free Strategy Call',
      href:'mailto:zee@bixeltek.com',
      bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
    }}
    />
    {/* <SaudiEPWDIndustries /> */}
    <LocationIndustrySection
    theme='green'
    heading={
      <>
      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                     Websites Built for the  <br /> Eastern Province’s Growth Industries
                    </span>
      </>
    }
    description='We design high-performing websites for businesses across sectors shaping Saudi Arabia’s economy:'
    industries={industries}
    />
    <GrowthStatsSection />
    <WebsiteInvestmentSection />
    <section
      className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
      id="website-cta"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
          Build a Website That <span className="text-yellow-500">Works as Hard as You Do</span>
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
          Stop treating your website as decoration — turn it into your business’s growth engine.
          Launch a conversion-focused, SEO-ready, mobile-optimized website designed to help you dominate the Eastern Province market.
        </p>
         <ul className="text-sm mt-5 flex flex-row md:flex-row gap-5 md:gap-10  transition-all duration-500">
            <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
              <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partner Badge"
                className="w-auto h-16 md:h-24" />
            </a></li>
            <li>
              <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
            </li>

          </ul>

        {/* Optional CTA buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/website-audit">
            <button className="px-7 py-3 rounded-2xl bg-yellow-600 text-white font-semibold text-sm shadow-lg hover:bg-yellow-700 transition">
              Get a Free Website Audit
            </button>
          </a>
          <a href="/contact-us">
            <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
              Talk to an Expert
            </button>
          </a>
        </div> */}
      </div>

      {/* RIGHT SIDE — CONTACT FORM */}
      <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>

    </>
  )
}
