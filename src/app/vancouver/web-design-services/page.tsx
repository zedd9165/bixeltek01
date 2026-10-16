export const metadata = {
    title: "Web Design Services Vancouver | Custom Websites & Conversion Landing Pages – Bixeltek",
    description:
        "Bixeltek builds SEO-ready, conversion-focused websites and landing pages for Vancouver businesses. From custom-coded sites to ecommerce and CMS platforms — we design websites that deliver real ROI.",
    keywords:
        "Web development Vancouver, Best web development company Vancouver, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Web Design Services Vancouver | Custom Websites & Conversion Landing Pages – Bixeltek",
        description:
            "Bixeltek builds SEO-ready, conversion-focused websites and landing pages for Vancouver businesses. From custom-coded sites to ecommerce and CMS platforms — we design websites that deliver real ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/web-design-services",
    },
};

import React from 'react'
import HeroWebDesignVancouver from '@/components/Vancouver/WebDesign/VancHeroWeb';
import WebsiteFailureSection from '@/components/Vancouver/WebDesign/VancWebSection';
import WebsiteFailureSection2 from '@/components/Vancouver/WebDesign/VanWebSection2';
import WebDesignServicesVancouver from '@/components/Vancouver/WebDesign/VanWebSection3';
import WebDesignProcessVancouver from '@/components/Vancouver/WebDesign/VanWebProcess';
import WhyChooseBixeltekVancouver from '@/components/Vancouver/WebDesign/VancWebSection4';
import AreasWeServeVancWeb from '@/components/Vancouver/WebDesign/AreasWeServe';
import WebVanIndustries from '@/components/Vancouver/WebDesign/VancIndustries';
import WebTech from '@/components/WebDev/WebTech';
import ShowcaseSectionVanc from '@/components/Vancouver/WebDesign/ShowcaseWebVanc';
import ContactFromNew from '@/components/ContactFormNew';
import VancouverWebDesignFaqs from '@/components/Vancouver/WebDesign/WebVancFaq';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from "@/assets/medal-ribbons-star-svgrepo-com.png";
import starimg from "@/assets/star-shine-svgrepo-com.png";
import googleimg from "@/assets/google-authenticator-svgrepo-com.png";
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

  const proofPoints = [
    { id: 1, text: "200+ Websites Built Across Canada", icon: starimg },
    { id: 2, text: "4+ Years of Web Design Experience", icon: iconimg },
    { id: 3, text: "Conversion-Focused + SEO-Driven Design", icon: googleimg },
  ];


     const services = [
    {
      title: "Custom CMS Builds",
      description:
        "Dynamic and scalable websites built on flexible CMS platforms like WordPress — fully optimized for SEO and easy content management.",
      link: "/custom-cms-websites",
    },
    {
      title: "Custom-Coded Websites",
      description:
        "For businesses needing advanced functionality or unique design systems, we develop tailor-made websites with performance and scalability in mind.",
      link: "/custom-coded-websites",
    },
    {
      title: "Ecommerce Websites",
      description:
        "Boost online sales with ecommerce stores optimized for speed, conversions, and secure checkout experiences.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Conversion Landing Pages",
      description:
        "We design dedicated landing pages for campaigns, offers, or product launches — built using conversion psychology, persuasive copy, and fast-loading architecture. Perfect for Google Ads, Meta Ads, or email marketing funnels.",
      link: "#",
    },
    {
      title: "Payment Gateway Integrations",
      description:
        "Seamless, secure, and fast payment integrations that enhance user trust and improve conversion rates.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing performance monitoring, updates, and support to ensure your website stays secure, fast, and fully functional.",
      link: "#",
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
    question: "How long does it take to build a website?",
    answer:
      "Typically 3–6 weeks, depending on the project scope and complexity of design and functionality.",
  },
  {
    question: "Do you create landing pages for campaigns and promotions?",
    answer:
      "Yes — we specialize in conversion-optimized landing pages for Google Ads, Meta campaigns, and email funnels.",
  },
  {
    question: "Are Bixeltek websites SEO-friendly?",
    answer:
      "Absolutely. All sites are built following best practices for structure, speed, and technical SEO.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes — we can revamp your website’s design, performance, and user experience while keeping your brand identity intact.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We start by understanding your goals, target audience, and competitors in the Vancouver market. This phase uncovers business objectives, customer pain points, and opportunities for high-converting design solutions.",
    gradient: "from-blue-500 via-blue-400 to-black",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Wireframing & Visual Planning",
    text: "We create intuitive layouts and mockups that map user journeys and highlight key conversion opportunities. Wireframes ensure every page element aligns with your business goals before moving to development.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Our team builds responsive, SEO-friendly websites with clean, scalable code. Visual design and functionality are integrated seamlessly to provide an engaging user experience that converts visitors into customers.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Conversion Optimization",
    text: "We implement trust elements, persuasive CTAs, and strategic layouts to maximize leads. Every component is crafted to reduce friction and guide visitors through the conversion funnel effectively.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Testing & Launch",
    text: "Before going live, we rigorously test performance, page speed, responsiveness, and cross-device compatibility. This ensures your website runs flawlessly and delivers consistent results from day one.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Maintenance & Growth",
    text: "After launch, we monitor analytics, track conversions, and optimize continuously. This ongoing support ensures your website evolves with market trends, maintaining performance and ROI over time.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

export default function page() {
 
    return (
        <>
            {/* <HeroWebDesignVancouver /> */}
            <LocationHeroSection
            heading={
              <>
              <span> Web Design Services in Vancouver{" "}
              <span className="text-blue-500">That Turn Clicks Into Customers</span></span>
              </>
            }
            description=' In Vancouver’s fast-paced digital world, your website is more than just an online brochure — it’s your 24/7 salesperson. At Bixeltek, we design SEO-ready, high-converting websites and landing pages that help businesses attract, engage, and convert customers consistently.
              Whether you’re launching a new business or upgrading your existing website, our team ensures your site is fast, mobile-optimized, and built to generate measurable ROI.
            '
            proofPoints={proofPoints}
            primaryCTA={{
                    text: 'Get a Free Website Consultation',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: ' Get In Touch With Us',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
            <WebsiteFailureSection />
            <WebsiteFailureSection2 />
            <ServicesSection
            heading='Websites Designed to'
            spanText='Convert, Built to Last'
            description=' Bixeltek offers full-service web design and development solutions, customized for Vancouver businesses. Every build is crafted to reflect your brand, enhance visibility, and increase conversions.'
            services={services}
            />
            {/* <WebDesignProcessVancouver /> */}
            <LocationProcessSection
              heading={
                <>
                        <span>Our Proven Web Design Process<span className="text-blue-500"><br />That Delivers ROI</span></span>
                </>
              }
              description='Our process combines design thinking, data insights, and SEO strategy to ensure your website not only looks great but performs flawlessly.'
              steps={steps}
              cta={{
              text: 'Talk to a Web Design Expert',
              href: 'mailto:zee@bixeltek.com',
            }}
            footerText="This structured methodology ensures Vancouver businesses get websites that are visually appealing, conversion-focused, and optimized for long-term ROI."

            />
            <ShowcaseSectionVanc />
            <WebTech />
            <WhyChooseBixeltekVancouver />
            <AreasWeServeVancWeb />
            {/* <WebVanIndustries /> */}
            <LocationIndustrySection
            heading={
              <>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                     Web Design Solutions for <br></br> Every Industry in Vancouver
                    </span>
              </>
            }
            description='Different industries require different design approaches. We craft custom solutions that speak directly to your audience’s needs and motivations.'
            industries={industries}
            />
            {/* <VancouverWebDesignFaqs /> */}
            <LocationFaqSection
            label='Web Design FAQs'
            heading={
              <>
              <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Web Design Questions for <br />
              <span className="text-blue-500">Vancouver Businesses</span>
            </h2>
            </>
            }
            description='Answers to the most common questions Vancouver businesses have about web design and development.'
            faqs={faqs}
            />

            <ContactCTASection
            heading='Ready to Build a Website'
            spanText='That Converts?'
            description='Your website should be your best sales tool — not just an online presence. Let Bixeltek design a conversion-focused website and landing page strategy that elevates your brand and drives measurable ROI.'
            />

            {/* <section
                className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start md:px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                       Ready to Build a Website <span className="text-blue-500">That Converts?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your website should be your best sales tool — not just an online presence. Let Bixeltek design a conversion-focused website and landing page strategy that elevates your brand and drives measurable ROI.
                    </p>


                </div>

                <div className="lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section> */}
        </>
    )
}
