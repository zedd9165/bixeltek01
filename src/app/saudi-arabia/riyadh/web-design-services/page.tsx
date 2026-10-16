export const metadata = {
    title:  "Top Web Design Company in Riyadh | Fast & SEO-Ready",
    description:
        " Rank higher and sell faster with a conversion-focused website. Bixeltek builds premium, bilingual sites that perform across Google Ads and SEO..",
    openGraph: {
        title: " Top Web Design Company in Riyadh | Fast & SEO-Ready",
        description:
            " Rank higher and sell faster with a conversion-focused website. Bixeltek builds premium, bilingual sites that perform across Google Ads and SEO.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh/web-design-services",
    },
};



import HeroRiyadhWebDesign from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDHero';
import SaudiRiWebIndustry from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDInd';
import RiyadhWebDesignWorkflow from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDProcess';
import WebSpeedRiyadh from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection1';
import SaudiRiWDSection2 from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection2';
import GradientCards from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection4';
import WebDesignServicesRiyadh from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection5';
import RiyadhWebMapSection from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection6';
import ShowcaseSectionVanc from '@/components/Vancouver/WebDesign/ShowcaseWebVanc';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'
import WebDevRiyadhShowcase from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection3';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import wordpressIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
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
    { id: 1, text: "Next.js & WordPress Experts", icon: wordpressIcon },
    { id: 2, text: "Google Partner Certified", icon: googleIcon },
    { id: 3, text: "90% Client Retention", icon: clientIcon },
  ];

  const services = [
    {
      title: "Custom Website Design & Development",
      description:
        "Tailored websites reflecting your brand identity and business goals.",
      link: "/custom-coded-websites",
    },
    {
      title: "CMS Website Development",
      description:
        "WordPress, Webflow, or headless CMS for easy content management and scalable performance.",
      link: "/custom-cms-websites",
    },
    {
      title: "Landing Pages for CRO Campaigns",
      description:
        "High-intent pages for Google Ads, Meta, and remarketing funnels.",
      link: "#",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Fast, secure, bilingual online stores with payment gateway integration (SADAD, HyperPay, PayTabs, Stripe).",
      link: "/services/ecommerce-development",
    },
    {
      title: "Website Redesign & UX Optimization",
      description:
        "Transform underperforming sites into conversion-driven assets.",
      link: "#",
    },
    {
      title: "Ongoing Maintenance & Security",
      description:
        "24/7 monitoring, updates, backups, and malware protection.",
      link: "#",
    },
  ]; 

  const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "Identify your business goals, audience behavior, and competitor landscape to define the website’s strategy and KPIs.",
    gradient: "from-yellow-400 via-green-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-yellow-500/20",
  },
  {
    number: "02",
    title: "Strategy & Wireframing",
    text: "Plan site structure, user flows, and conversion funnels, ensuring SEO readiness and marketing alignment.",
    gradient: "from-green-500 via-purple-400 to-transparent",
    color: "text-orange-500",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Create SEO-optimized, mobile-first pages with clear CTAs, modern UI/UX, and bilingual content support.",
    gradient: "from-purple-400 via-blue-300 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-lime-500/20",
  },
  {
    number: "04",
    title: "QA & Launch",
    text: "Test website performance, Core Web Vitals, and bilingual functionality before go-live.",
    gradient: "from-pink-300 via-orange-400 to-transparent",
    color: "text-red-400",
    bgcolor: "hover:bg-yellow-400/20",
  },
  {
    number: "05",
    title: "Optimization & Maintenance",
    text: "Continuous improvements including CRO tweaks, analytics monitoring, updates, and security checks.",
    gradient: "from-green-400 via-transparent to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-green-500/20",
  },
];

const industries =[
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
   {/* <HeroRiyadhWebDesign/> */}
   <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Web Design Company in Riyadh{" "}
              <span className="text-yellow-500">
                That Turns Clicks Into Clients
              </span></span>
                </>
            }
            description='We design high-performance, SEO-ready, bilingual websites built
              for conversion. From Riyadh startups to enterprise brands, our
              sites load fast, rank high, and sell better.'
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get My Free Ads Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a PPC Expert ',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
   <WebSpeedRiyadh />
   <SaudiRiWDSection2 />
   <GradientCards/>
   {/* <WebDesignServicesRiyadh/> */}
   <ServicesSection
   theme='green'
   heading='Comprehensive'
   spanText='Web Design & Development Services in Riyadh'
   description='We build websites designed to convert from day one — whether you need a new build, a redesign, or ongoing optimization. Every project includes analytics, SEO alignment, and marketing readiness.'
   services={services}
   />
   {/* <RiyadhWebDesignWorkflow /> */}
   <LocationProcessSection
   heading={
    <>
    <span>Every High-Performing Website <br />
        <span className="text-yellow-500">Follows a Proven Process.</span></span>
    </>
   }
   description='We build websites designed to convert from day one — from discovery to launch and beyond, each step ensures measurable performance and ROI.'
   steps={steps}
   footerText='Our process ensures your website keeps performing long after launch — optimized for conversions, speed, and growth.'
   cta={{
    text:'Talk To Web Design Expert',
    href:'mailto:zee@bixeltek.com',
    bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
   }}
   />
   <WebDevRiyadhShowcase />
   {/* <ShowcaseSectionVanc/> */}
   <RiyadhWebMapSection />
   {/* <SaudiRiWebIndustry /> */}
   <LocationIndustrySection
   theme='green'
   heading={
    <>
    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                         Web Design Tailored for Every Riyadh Industry
                    </span>
    </>
   }
   industries={industries}
   />
   <section
  className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
  id="webdesign-cta"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
      Ready to Build a Website That<span className="text-yellow-500"> Converts Visitors Into Customers?</span>
    </h2>

    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Your website is your growth engine. Let <span className="text-yellow-400 font-semibold">Bixeltek</span> design, develop, 
      and optimize a high-performance site built for Riyadh’s fast-moving digital economy.
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
  </div>

  {/* RIGHT SIDE — FORM */}
  <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

   </>

  )
}
