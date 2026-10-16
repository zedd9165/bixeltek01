

export const metadata = {
    title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
    description:
        " Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
        description:
            "Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto/web-design",
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


const proofPoints = [
    { id: 1, text: "200+ Websites Delivered Across Canada", icon: starimg },
    { id: 2, text: "Specialists in WordPress, Next.js, Ecommerce & Custom Builds", icon: iconimg },
    { id: 3, text: "Google Partner Certified Agency", icon: googleimg },
  ];


      const services = [
    {
      title: "Custom Website Design",
      description: "We create unique, brand-aligned website designs that build trust, engage visitors, and reflect your company’s personality, ensuring a strong and memorable online presence.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom Coded Websites",
      description: "Develop complex, feature-rich websites using clean, efficient code tailored to your advanced requirements, providing performance, scalability, and full customization for your business needs.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom CMS Development",
      description: "Build fully custom content management systems with WordPress, Next.js, or bespoke platforms, designed to streamline your workflows and give you complete control over website content.",
      link: "/custom-cms-websites",
    },
    {
      title: "Ecommerce Websites",
      description: "Create Shopify, WooCommerce, or custom ecommerce websites optimized for sales, providing seamless user experiences, smooth checkout processes, and high conversion rates for online stores.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description: "Integrate secure, reliable payment gateways into your website, enabling smooth online transactions, protecting sensitive data, and offering multiple payment options for your customers.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Landing Page Design",
      description: "Design high-converting landing pages tailored for campaigns, promotions, and PPC ads, crafted to capture leads effectively and maximize marketing ROI for your business.",
      link: "#",
    },
    {
      title: "Website Redesigns",
      description: "Modernize outdated websites with fresh designs, improved functionality, and optimized user experience, ensuring your site aligns with current trends and enhances brand credibility.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description: "Provide ongoing website support including updates, backups, security monitoring, and performance optimization, ensuring your website remains reliable, fast, and secure at all times.",
      link: "#",
    },
  ];

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    text: 'Weeks 1–2 focus on understanding your goals, reviewing competitors, analyzing your current website, and mapping opportunities to ensure a strong foundation for success.',
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Wireframing',
    text: 'Weeks 2–3 involve creating detailed strategies, planning user flows, and developing wireframes that align design layouts with your business objectives and audience needs.',
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: 'Weeks 3–5 focus on building responsive, visually appealing, and SEO-optimized websites, turning wireframes into fully functional designs ready for content integration.',
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content & SEO Integration',
    text: 'Weeks 5–6 involve adding high-quality content, visuals, and on-page SEO elements including metadata, schema, and internal linking to improve visibility and engagement.',
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Testing & QA',
    text: 'Weeks 6–7 focus on comprehensive testing across devices, browsers, and platforms to ensure flawless performance, responsiveness, and an excellent user experience before launch.',
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Launch & Support',
    text: 'Week 8 is dedicated to a smooth go-live, monitoring performance, and providing ongoing maintenance, updates, and support to ensure long-term website reliability and success.',
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
    question: "Why isn’t my current website generating leads?",
    answer:
      "It may lack conversion-focused design, clear calls-to-action, or an SEO foundation to attract qualified traffic.",
  },
  {
    question: "How long does a redesign take?",
    answer:
      "Most website redesigns take 6–8 weeks, depending on scope, complexity, and content migration requirements.",
  },
  {
    question: "Will my new website rank on Google?",
    answer:
      "Yes — all sites are built SEO-friendly, with proper schema, metadata, mobile optimization, and fast loading times.",
  },
  {
    question: "Which platforms do you use?",
    answer:
      "We work with WordPress, Next.js, Shopify, and fully custom-coded solutions tailored to your business needs.",
  },
  {
    question: "Do you provide support post-launch?",
    answer:
      "Absolutely. We offer ongoing maintenance, performance monitoring, security updates, and optimizations after launch.",
  },
  {
    question: "Can you build eCommerce websites?",
    answer:
      "Yes — we develop Shopify, WooCommerce, and custom eCommerce stores with optimized user experience and secure payment gateways.",
  },
  {
    question: "Do you ensure mobile responsiveness?",
    answer:
      "All websites are fully responsive, ensuring smooth performance and usability across mobile phones, tablets, and desktop devices.",
  },
  {
    question: "Will my website load fast?",
    answer:
      "Yes — we optimize images, code, and server configurations to ensure fast loading speeds and improved user engagement.",
  },
  {
    question: "Can you integrate third-party tools?",
    answer:
      "We seamlessly integrate CRMs, booking systems, analytics tools, and payment gateways to streamline your operations.",
  },
  {
    question: "Do you offer custom web design?",
    answer:
      "Yes — we create unique, brand-aligned designs that enhance credibility, improve conversions, and reflect your business vision.",
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
            description='Your website should be your strongest sales tool — but for many Toronto businesses, it’s an expensive liability. 
              Outdated design, slow loading, or poor usability drives customers away. 
              At Bixeltek, we design websites that fix these problems and deliver results: modern, fast, SEO-ready, and built to convert.'
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
            <WhyWebsiteToronto />
            <SolutionSection />
            <WebDesignToronto2 />
            <WebsiteMattersSection />
            <ServicesSection
            heading='Full-Spectrum '
            spanText='Web Design & Development Services'
            description='Different businesses have different needs. That’s why we provide a complete range of web design and development services — from simple landing pages to complex custom builds. Whatever your vision, we deliver websites that scale with your business.'
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
      footerText="From discovery to launch, we audit, strategize, design, develop, integrate content, optimize SEO, test thoroughly, and provide ongoing support"

      />
            <BenefitsSectionWebDesign />
            <AreasWeServeCanadaTW />
            {/* <TWFaq /> */}
            <LocationFaqSection
            label='Frequently Asked Questions'
            heading={
                <>
                <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-6">
              Questions We Hear From Toronto Businesses
            </h2>
                </>
            }
            description='Here are answers to the most common questions Toronto businesses ask us about web design, development, and online growth.'
            faqs={faqs}
            />

            <ContactCTASection
            heading=' Ready to Fix What’s'
            spanText='Holding Your Website Back?'
            description='If your website is outdated, slow, or failing to bring results, it’s costing you more than you realize. At Bixeltek, we design websites that solve problems, remove customer frustrations, and generate measurable business growth.'
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
