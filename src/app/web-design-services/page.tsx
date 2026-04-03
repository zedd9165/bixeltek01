
export const metadata = {
    title: "Best Web Design & Development Company in Hyderabad | Bixeltek",
    description: "Looking for a top website design company in Hyderabad? Bixeltek builds SEO-ready, lightning-fast websites for startups, local businesses & enterprises.",
    keywords:
        "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
    openGraph: {
        title: "Bixeltek – Hyderabad's Web Design & Development Experts",
        description:
            "Bixeltek builds high-performance, SEO-optimized websites in Hyderabad. Specializing in custom web development, e-commerce, CMS solutions, and digital marketing.",
        type: "website",
    },
                alternates: {
    canonical: "https://bixeltek.com/web-design-services", // 👈 canonical URL here
  },
};



export const dynamic = "force-dynamic";
import React from 'react'

import ctaimg from '@/assets/hhOinD4Qhn5ozsoOwtEjM.png'
import DarkFaqSection from '@/components/DarkFaq';
import { MdOutlineMedicalServices, MdLocationPin } from "react-icons/md";
import webimg from '@/assets/Screenshot 2025-07-28 174851.png'
import { FaRocket, FaHandHoldingHeart } from "react-icons/fa";
import ServicesSection from '@/components/glowcards';
import WebDevHero from '@/components/WebDevHero';
import landingpage from '@/assets/abstract-sales-landing-page-with-photo.png'
import landingpage2 from '@/assets/landingpage2.jpg'
import landingpage3 from '@/assets/landingpage3 (1).jpg'
import Tech2 from '@/components/Tech2';
import landingpage4 from '@/assets/landingpage4 (1).jpg'
import landingpage5 from '@/assets/gettyimages-1877336255-612x612 (1).jpg'
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import IndustrySolutions from '@/components/WebdevSection1';
import Counter from '@/components/Counter';
import { AlertTriangle, Smartphone, TrendingDown, Search } from "lucide-react";
import TestimonialWebdev from '@/components/TestimonialWebdev';
import section2img2 from '@/assets/laptop dentist 2.png'
import section3img from '@/assets/laptop mockup.jpg'
import Smfeatures from '@/components/smfeatures';
import Image from 'next/image';
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import AboutUsSection from '@/components/WebdevComparison';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import reportdb from '@/assets/a69f506baacc0461988a06e5d136524e.jpg'



export default function Webdev() {




    const products = [
        {
            title: "Product 1",
            link: "/product-1",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 2",
            link: "/product-2",
            thumbnail: landingpage2.src,
        },
        {
            title: "Product 3",
            link: "/product-3",
            thumbnail: landingpage4.src,
        },
        {
            title: "Product 4",
            link: "/product-4",
            thumbnail: landingpage3.src,
        },
        {
            title: "Product 5",
            link: "/product-5",
            thumbnail: landingpage5.src,
        },
        {
            title: "Product 6",
            link: "/product-6",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 7",
            link: "/product-7",
            thumbnail: landingpage5.src,
        },
        {
            title: "Product 8",
            link: "/product-8",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 9",
            link: "/product-9",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 10",
            link: "/product-10",
            thumbnail: landingpage5.src,
        },
        {
            title: "Product 11",
            link: "/product-11",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 12",
            link: "/product-12",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 13",
            link: "/product-13",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 14",
            link: "/product-14",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 15",
            link: "/product-15",
            thumbnail: landingpage5.src,
        },
    ];
    const industries = [
        { name: "Dental", icon: <FaTooth /> },
        { name: "Healthcare", icon: <FaHospital /> },
        { name: "Pet Shops", icon: <FaDog /> },
        { name: "Oil & Gas", icon: <FaGasPump /> },
        { name: "Automobile", icon: <FaCar /> },
        { name: "Roof Cleaning", icon: <FaBroom /> },
        { name: "Education", icon: <FaGraduationCap /> },
        { name: "Real Estate", icon: <FaBuilding /> },
        { name: "Arborist & Tree Removal", icon: <FaTree /> },
        { name: "Lawn Care", icon: <FaSeedling /> },
    ];

    const faqs = [
        {
            question: " Do you offer SEO services along with web design?",
            answer: "Yes. Every website we build is SEO-optimized at the structure level, and we also offer full-scale SEO campaigns if needed.",
        },
        {
            question: "What’s your timeline to deliver a website?",
            answer: " Typical delivery time is between 10–30 days, depending on complexity and content readiness.",
        },
        {
            question: "Can you redesign my old WordPress site?",
            answer: "Absolutely. We specialize in redesigns that preserve your SEO value while improving performance and conversions.",
        },
        {
            question: "Will I own the website after delivery?",
            answer: " Yes — 100%. All source code, content, and access credentials are handed over.",
        },
        {
            question: "Can you manage my website post-launch?",
            answer: "Yes. We offer affordable monthly maintenance and update plans.",
        }
    ];

    const points = [
        {
            icon: <MdOutlineMedicalServices className="text-white text-2xl" />,
            bg: "#EA4335",
            title: "Dentists & Clinics",
            desc: "SEO-optimized websites that boost appointment bookings and trust.",
        },
        {
            icon: <FaRocket className="text-white text-2xl" />,
            bg: "#FBBC05",
            title: "Startups & Entrepreneurs",
            desc: "Agile, scalable platforms with clean UX and investor-ready polish.",
        },
        {
            icon: <FaHandHoldingHeart className="text-white text-2xl" />,
            bg: "#34A853",
            title: "NGOs & Non-profits",
            desc: "Trust-building platforms that simplify donations and communicate your impact.",
        },
        {
            icon: <FaBuilding className="text-white text-2xl" />,
            bg: "#4285F4",
            title: "Corporates & Enterprises",
            desc: "Secure, structured, CMS-driven platforms with advanced workflows and integrations.",
        },
        {
            icon: <MdLocationPin className="text-white text-2xl" />,
            bg: "#FF6D01",
            title: "Local Businesses & Service Providers",
            desc: "Location-based SEO landing pages to capture “near me” searches and phone leads.",
        },
    ];


    return (

        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <section>
                <WebDevHero />
            </section>

            <section className=" md:pt-24 flex justify-center items-center max-w-[100%] md:max-w-[83%] mx-auto text-black sm:pt-14 sm:pb-10">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-1/2 md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-14">
                        {/* <h3 className="mb-2 text-purple-600">Why Choose Us?</h3> */}

                        <h2 className="mb-5 text-4xl font-semibold capitalize">
                            Websites Built for Performance,<br /> Not Just Looks
                        </h2>

                        <h3 className="mb-5 text-xl font-poppins font-normal capitalize">
                            Web Design & Development Services in Hyderabad
                        </h3>

                        <p className="text-gray-900 mt-6 text-sm md:text-base leading-relaxed tracking-wide ">
                            Your website isn’t just a digital brochure — it’s your 24/7 salesperson, your brand ambassador, and your customer’s first impression.
                            In a fast-moving city like Hyderabad, where competition is fierce and attention spans are short, a pretty website isn’t enough.
                            You need one that performs. That loads instantly. That ranks on Google. That compels your visitor to act.
                        </p>
                        <p className="text-gray-900 mt-6 text-sm md:text-base leading-relaxed tracking-wide">
                            We go beyond cookie-cutter templates. Every site we build is fully custom, mobile-first, and strategically aligned with your goals.
                            From appointment-booking for healthcare providers to lead-generation for IT consultants — we ensure your website becomes your strongest growth tool.
                        </p>

                        <p className="text-gray-900 mt-6 text-sm md:text-base leading-relaxed tracking-wide">
                            So whether you&apos;re a startup, a scaling enterprise, or an established business in Hyderabad looking for a digital revamp — Bixeltek is your go-to partner.
                            Let&apos;s build a website that works as hard as you do.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        </div>

                        <div className='flex flex-row gap-2'>
                            <Link href={'tel:+919100032301'} target='_blank'>
                                <button className="mt-10 px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Get A Custom Website
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="w-1/2">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={section2img2}
                                alt="Blended Image"

                                className="object-cover z-0 rounded-2xl"
                                priority
                            />

                            {/* Top Gradient */}

                        </div>

                    </div>

                    {/* <ContactFrom /> */}
                </div>
            </section>
            <AboutUsSection />

            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-14">

                    {/* Left Side: Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-black">
                            <Image
                                src={section3img}
                                alt="Custom Website Preview"
                                fill
                                className="object-cover rounded-2xl z-0 brightness-[0.95]"
                                priority
                            />

                        </div>
                    </div>

                    {/* Right Side: Text */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl font-bold">
                            Your Website Could Be <span className="text-[#bf47ff]">Costing You Business</span>
                        </h2>
                        <h3 className="text-2xl md:text-xl lg:text-2xl mt-5 font-medium">
                            Why Your Hyderabad Business Needs a Custom Website
                        </h3>
                        <p className="text-gray-900 mt-6 text-[16px] md:text-[19px]">
                            Most websites today fail to generate results because they’re either built on cookie-cutter templates or weren’t designed with performance in mind.
                            If your site isn’t generating leads or showing up on Google, you’re already behind.
                        </p>
                        <p className="text-gray-900 mt-4 text-[16px] md:text-[19px] ">
                            At <span className="text-purple-600 font-medium">Bixeltek</span>, we focus on user behavior, search engine signals, and conversion pathways — so your website attracts the right audience and guides them to action.
                            From slow load times to outdated branding, we fix what’s holding you back and build what moves you forward.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link href="/casestudies-bixeltek/Tumblewash-Casestudy" target="_blank">
                                <button className="px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Explore Our Projects
                                </button>
                            </Link>

                            <Link href="/contact-us" target="_blank">
                                <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                    Book a Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-[85%] px-6 lg:px-8">
                    <div className="mx-auto  grid grid-cols-1 gap-x-14 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="lg:pr-0 lg:pt-4  ">
                            <div className="">

                                <h2 className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                                    Is Your Website Holding You Back?
                                </h2>
                                <p className="mt-6 text-lg text-gray-900">
                                    A website doesn&apos;t need to be broken to be costing you business. Many signs are subtle — but if you’re experiencing even a few of these, it’s time for an upgrade.
                                </p>

                                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-900 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-bold text-black">
                                            <AlertTriangle className="absolute left-1 top-1 h-6 w-6 text-indigo-400" />
                                            Your bounce rate is climbing.
                                        </dt>
                                        <dd className="inline">
                                            &nbsp;Visitors leave before they even scroll. That’s a trust and usability issue.
                                        </dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-bold text-black">
                                            <Smartphone className="absolute left-1 top-1 h-6 w-6 text-indigo-400" />
                                            Mobile users struggle to navigate.
                                        </dt>
                                        <dd className="inline">
                                            &nbsp;Over 60% of Hyderabad’s users are on mobile — if they can’t use your site easily, they’ll leave.
                                        </dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-bold text-black">
                                            <TrendingDown className="absolute left-1 top-1 h-6 w-6 text-indigo-400" />
                                            You’re investing in ads, but conversions are flat.
                                        </dt>
                                        <dd className="inline">
                                            &nbsp;If your website isn’t built for performance, your marketing spend is going to waste.
                                        </dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-bold text-black">
                                            <Search className="absolute left-1 top-1 h-6 w-6 text-indigo-400" />
                                            Your competitors rank higher than you on Google.
                                        </dt>
                                        <dd className="inline">
                                            &nbsp;An outdated or unoptimized site is the biggest SEO bottleneck.
                                        </dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-bold text-black">
                                            <AlertTriangle className="absolute left-1 top-1 h-6 w-6 text-indigo-400" />
                                            Google isn’t indexing your pages correctly.
                                        </dt>
                                        <dd className="inline">
                                            &nbsp;Slow speeds, broken structures, and poor hierarchy hurt your visibility.
                                        </dd>
                                    </div>
                                </dl>

                                <p className="mt-8 text-lg text-gray-900">
                                    A professionally rebuilt website doesn’t just look better — it boosts your marketing ROI, improves user trust, and unlocks long-term SEO visibility.
                                </p>
                                <p className="mt-4 text-black font-medium">
                                    Let’s make sure your website is working for you — not against you.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="flex translate-x-32 justify-center"> {/* 🔥 This centers the image vertically */}
    <Image
      src={reportdb}
      alt="Product screenshot"
      className="w-[48rem] border max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
    />
  </div>
                    </div>
                </div>
            </div>
            <ServicesSection />
            <section className="w-[92%] mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10 py-20 px-6 md:px-20 bg-white text-black">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <div className="mt-8 pl-0 md:pl-20 flex flex-col gap-6">
                        {/* 1. Dentists */}
                        <div className="flex gap-4 items-start mb-2">
                            <div className="bg-[#EA4335] rounded-full p-5">
                                <MdOutlineMedicalServices className="text-white text-2xl" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className="text-xl font-semibold text-black">Dentists & Clinics</h4>
                                <p className="text-sm text-gray-800">SEO-optimized websites that boost appointment bookings and trust.</p>
                            </div>
                        </div>

                        {/* 2. Startups */}
                        <div className="flex gap-4 items-start mb-2">
                            <div className="bg-[#FBBC05] rounded-full p-5">
                                <FaRocket className="text-white text-2xl" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className="text-xl font-semibold text-black">Startups & Entrepreneurs</h4>
                                <p className="text-base text-gray-800">Agile, scalable platforms with clean UX and investor-ready polish.</p>
                            </div>
                        </div>

                        {/* 3. NGOs */}
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#34A853] rounded-full p-5">
                                <FaHandHoldingHeart className="text-white text-2xl" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className="text-xl font-semibold text-black">NGOs & Non-profits</h4>
                                <p className="text-base text-gray-800">Trust-building platforms that simplify donations and communicate your impact.</p>
                            </div>
                        </div>

                        {/* 4. Corporates */}
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#4285F4] rounded-full p-5">
                                <FaBuilding className="text-white text-2xl" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className="text-xl font-semibold text-black">Corporates & Enterprises</h4>
                                <p className="text-base text-gray-800">Secure, structured, CMS-driven platforms with advanced workflows and integrations.</p>
                            </div>
                        </div>

                        {/* 5. Local Businesses */}
                        <div className="flex gap-4 items-start">
                            <div className="bg-[#FF6D01] rounded-full p-5">
                                <MdLocationPin className="text-white text-2xl" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className="text-xl font-semibold text-black">Local Businesses & Service Providers</h4>
                                <p className="text-base text-gray-800">Location-based SEO landing pages to capture “near me” searches and phone leads.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-[#bf47ff]">Tailored Web Solutions for </span>Hyderabad’s Growth-Driven Businesses
                    </h2>

                    <h3 className="text-xl md:text-2xl mt-6 font-medium text-black">
                        Web Development for Dentists, Startups, NGOs & Corporates
                    </h3>

                    <p className="text-gray-900 mt-6 font-semibold text-[16px] md:text-[16px] leading-relaxed">
                        Every business has a different story, audience, and user journey. Our approach isn’t one-size-fits-all — it’s hyper-specific, built around who you are and what your customers need.
                    </p>

                    <p className="text-gray-900 font-semibold mt-8 text-sm md:text-sm">
                        If you’re based in Hyderabad and serious about growth — <span className="font-semibold text-white">we’re the team that builds with that in mind.</span>
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link href="/casestudies-bixeltek/Tumblewash-Casestudy" target="_blank">
                                <button className="px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Explore Our Projects
                                </button>
                            </Link>

                            <Link href="/contact-us" target="_blank">
                                <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                    Book a Free Consultation
                                </button>
                            </Link>
                    </div>
                </div>
            </section>

            <section className='py-20'>

                <div className="flex flex-col  text-black gap-12  md:flex-row items-center max-w-[93%] mx-auto justify-center px-6 md:px-20 py-5 overflow-hidden">
                    <div className="relative w-full md:w-1/2 h-[70vh] flex justify-center items-center overflow-hidden">
                        <Image
                            src={webimg}
                            alt="Web Image"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-black/90 via-black/5 to-transparent z-10 pointer-events-none" />
                    </div>


                    <div className="md:w-1/2 text-black text-center md:text-left">
                        <h2 className="text-2xl md:text-[40px] leading-[35px] md:leading-[50px] text-black font-bold mt-4">
                            Built In-House. <span className="text-[#73e2e4]">Optimized for Results.</span>
                            Trusted Globally.
                        </h2>

                        <h3 className="text-lg md:text-2xl font-semibold mt-6 text-black">
                            Why Choose Bixeltek as Your Web Design Partner in Hyderabad
                        </h3>

                        <p className=" mt-6 text-sm md:text-base leading-7 text-black">
                            Bixeltek is not a freelance patchwork or outsourcing agency. Our in-house web development team writes every line of code, designs every page layout, and tests every performance metric — all under one roof.
                        </p>
                        <p className="text-black mt-4 text-sm md:text-base leading-7">
                            We’ve delivered results for clients in Canada, USA, UK, Germany, Saudi Arabia, UAE, and India, adapting our solutions to different industries and cultures. This international experience gives us insight — and a competitive edge for our Hyderabad clients.
                        </p>

                        <ul className="mt-8 space-y-3 text-left text-black text-sm md:text-base">
                            <li className="flex items-start">
                                <span className="text-[#73e2e4] text-lg mr-2 mt-1">✔</span> SEO-optimized from the ground up
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#73e2e4] text-lg mr-2 mt-1">✔</span> Fully mobile-responsive and Core Web Vitals compliant
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#73e2e4] text-lg mr-2 mt-1">✔</span> Built with clean, scalable, and secure code
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#73e2e4] text-lg mr-2 mt-1">✔</span> Designed to increase conversions, reduce bounce rates, and load in {"<"}2.5 seconds
                            </li>
                        </ul>

                        <p className="mt-8 text-gray-900 text-sm md:text-base font-medium italic">
                            This isn’t just web design. It’s digital infrastructure for business growth.
                        </p>
                    </div>

                </div>

            </section>
            <Counter />
            <section>
                <IndustrySolutions />
            </section>
            <section className="bg-white py-20 lg:py-20 border-none rounded-tr-[150px] rounded-tl-[150px] shadow-glow xl:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-700">How It Works</p>
                        <h2 className="mt-6 text-3xl font-semibold font-sofiasanscondensed tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">
                            How Our Website Design Process Works at Bixeltek — <br /> <span className='text-purple-500 tracking-wide'>Fast, Focused & Built for Growth</span>
                        </h2>
                        <p className="mx-auto mt-4  max-w-4xl text-sm md:text-lg font-normal text-gray-700 lg:text-lg lg:leading-1">
                            Most agencies overcomplicate web design. We don&apos;t.<br />
                            At Bixeltek, we use a streamlined, transparent process that gets you from strategy to live site — without endless meetings, bloated timelines, or tech headaches.
                            Whether you&apos;re a startup founder or a growing business looking for a top-tier <span className='text-purple-700 italic font-semibold'>website development company in Hyderabad</span> , this is how we get it done:

                        </p>
                    </div>

                    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-4">
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-database text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900"> Discovery & Strategy Call</h2>
                                <h4 className="mt-2 text-sm lg:text-base text-gray-700"> We understand your goals, audience, and current challenges. What makes your business tick — and what your website needs to do.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-map text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Wireframe & Content Flow</h2>
                                <h4 className="mt-2 text-sm lg:text-base text-gray-700">We craft layouts and messaging that convert — combining UX best practices with persuasive copy.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-globe text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Design, Development<br /> & SEO</h2>
                                <h4 className="mt-2 text-sm lg:text-base text-gray-700"> We build your site using clean, scalable code. Optimized for mobile, speed, Google, and your customer&apos;s attention span.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-rocket text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Launch + Support</h2>
                                <h4 className="mt-2 text-sm lg:text-base text-gray-700">Final QA, testing, and go-live. You get 30 days of support, site ownership, and access to performance analytics.</h4>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
            <TestimonialWebdev />
            <section className="mx-auto my-10 w-screen max-w-screen-xl px-4">
                <div className="flex rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-lg overflow-hidden">

                    {/* Left Text Content */}
                    <div className="py-16 px-8 lg:px-12 w-full lg:w-1/2">
                        <h1 className="text-3xl font-sofiasanscondensed md:text-5xl font-bold leading-tight">
                            Let’s Build a Website That Reflects Your Business
                        </h1>

                        <p className="mt-4 text-lg md:text-xl font-medium">
                            Book a Free Discovery Call with Hyderabad’s Top Web Design Agency
                        </p>

                        <p className="mt-4 text-base md:text-lg text-white/90">
                            Your website should be your top salesperson — not just a digital placeholder.
                            With <span className="font-semibold text-white">Bixeltek</span>, you get an experienced in-house team, proven frameworks, and global perspective — all tailored for Hyderabad’s business environment.
                        </p>

                        <p className="mt-4 text-sm md:text-base text-white/80">
                            Based in Hyderabad | Serving Clients Across India, Canada, USA, UK, Saudi Arabia & UAE
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-6">
                            <button
                                type="button"
                                className="group flex items-center gap-3 bg-white text-black text-lg font-semibold px-6 py-3 rounded-md hover:bg-transparent hover:text-white hover:border-white hover:border transition-all"
                            >
                                Request Your Free Quote
                            </button>

                            <button
                                type="button"
                                className="group flex items-center gap-3 border border-white text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all"
                            >
                                Book a 15-Minute Discovery Call
                            </button>
                        </div>
                    </div>

                    {/* Right Image Full Height */}
                    <div className="hidden lg:flex w-1/2">
                        <Image
                            src={ctaimg}
                            alt="CTA Visual"
                            className="w-full h-full object-center"
                        />
                    </div>
                </div>
            </section>

            <Tech2 />
            <section className="py-24">
                <div className="mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <span
                            className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">Excellence</span>
                        <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
                            Why Partner with Bixeltek?
                        </h2>
                        <p className="text-lg font-normal text-black max-w-md md:max-w-2xl mx-auto">
                            Bixeltek delivers innovative, results-driven web solutions with cutting-edge technology and market expertise.
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                                <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                        stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                                Cutting-edge Technologies
                            </h4>
                            <p className="text-sm font-normal text-gray-900">
                                Constant innovation with advanced web technologies.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                                Local Insights, Global Impact
                            </h4>
                            <p className="text-sm font-normal text-gray-900">
                                Combining deep Hyderabad market insights with international standards in web design.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                                <svg className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                                        stroke="" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                                Proven Success
                            </h4>
                            <p className="text-sm font-normal text-gray-900">
                                Trusted by numerous businesses and recognized for exceptional service delivery.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                                <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                                        stroke="" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                                Results-Driven Approach
                            </h4>
                            <p className="text-sm font-normal text-gray-900">
                                Websites strategically built to achieve measurable business goals.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                                <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                                        stroke="" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                                Custom Websites
                            </h4>
                            <p className="text-sm font-normal text-gray-900">
                                Websites strategically built to achieve measurable business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
            <section className='w-full flex flex-wrap sm:max-w-[90%] md:max-w-[85%] mx-auto lg:flex-nowrap overflow-y-hidden items-center'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-1 md:px-6 py-10 lg:py-14'>
                    <h2 className="text-4xl md:text-5xl font-semibold font-sofiasanscondensed text-black">
                        Building High Converting Websites Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-sm md:text-lg text-gray-900">
                        Our web design expertise spans multiple industries, helping businesses achieve higher conversion rates through stragically designed websites conpatible for SEO, Google Ads and Meta Marketing. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-sm md:text-lg text-gray-900">
                        Explore how our beautifully crafted websites deliver success by increasing engagement rate, by delivering more conversions, leads, sales and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-black">
                                <span className="text-black text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-sm'>Web-design services for {industry.name}</h2>
                            </div>
                        ))}
                    </div>
                     <div className="flex flex-wrap gap-4 mt-10">
                        <Link href="/casestudies-bixeltek/Tumblewash-Casestudy" target="_blank">
                                <button className="px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Explore Our Projects
                                </button>
                            </Link>

                            <Link href="/contact-us" target="_blank">
                                <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                    Book a Free Consultation
                                </button>
                            </Link>
                    </div>
                   
                </div>
                <div className="flex w-full lg:w-1/2 justify-center gap-4 p-1">
                    <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
                        <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
                        <Image src={oil} alt='oil' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col gap-3'>
                        <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
                        <Image src={pet} alt='pet' className='rounded-xl'></Image>
                        <Image src={school} alt='dental' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col justify-center gap-3'>
                        <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
                        <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
                    </div>
                </div>
            </section>
            <DarkFaqSection faqs={faqs} />
        </>
    )
}
