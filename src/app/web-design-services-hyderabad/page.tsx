import React from 'react'
import Image from 'next/image'
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import { Factory, MapPin } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { FiPhoneCall } from "react-icons/fi";
import WebDevHero from '@/components/WebDevHero'
import chartimg from '@/assets/visitors-1-1.png'
import CaseStudies from '@/components/Webdevcasestudies'
import ContactFromNew from '@/components/ContactFormNew'
import LogoGrid from '@/components/Companies'
import Counter from '@/components/Counter'
import laptop from '@/assets/laptop mockup.jpg'
import DarkFaqSection from '@/components/DarkFaq';
import hyderabad from '@/assets/Hyderabad.jpg'
import section2img2 from '@/assets/laptop dentist 2.png'
import Link from 'next/link'
import { LucidePhone, LucideSearch, LucideLoader, LucideSmartphone, LucideZap } from 'lucide-react';
import star from '@/assets/star-large-1-1.png'
import ServicesSection from '@/components/glowcards'
import { MdTrendingUp, MdDevices, MdOutlineSupportAgent } from 'react-icons/md';
import { ShieldCheck, MonitorSmartphone, LineChart, Server, Zap, Settings2, CreditCard, PlugZap, Timer } from "lucide-react";
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react"
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import StepCards from '@/components/WebdevSteps'
import techimg from '@/assets/techmockup.png'
import Tech2 from '@/components/Tech2'
import section2img3 from '@/assets/Landscap.jpg'
import GooglePartner from '@/sections/GooglePartner'
import img2 from "@/assets/Reflect ✦ MaxiBestOf.jpg";
import ShowcaseSection from '@/components/Showcase';
import WDChallenges from '@/components/Hyderabad/WebDesign/WDChallenges';
import WDStats from '@/components/Hyderabad/WebDesign/WDStats';
import WDCTA1 from '@/components/Hyderabad/WebDesign/WDCTA1';
import WDPartner from '@/components/Hyderabad/WebDesign/WDPartner';
import WDWhyChooseUs from '@/components/Hyderabad/WebDesign/WDWhyChooseUs';
import WDCTA2 from '@/components/Hyderabad/WebDesign/WDCTA2';
import WDLocations from '@/components/Hyderabad/WebDesign/WDLocations';
import WDIndustries from '@/components/Hyderabad/WebDesign/WDIndustries';
import WDContact from '@/components/Hyderabad/WebDesign/WDContact';

export default function WebDevAd() {
    const features = [
        {
            title: "Conversion-Driven Design",
            desc: "Tailor-made design that aligns with your brand identity and encourages user engagement and actions.",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
        },
        {
            title: "Performance Optimized",
            desc: "Mobile-friendly, lightning-fast pages that meet Google’s Core Web Vitals for better ranking and UX.",
            icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
            bg: "bg-red-500",
        },
        {
            title: "Search Engine Optimization",
            desc: "Structured HTML, Keyword Research, On Page SEO and more.",
            icon: <LineChart className="w-6 h-6 text-white" />,
            bg: "bg-yellow-400",
        },
        {
            title: "Lead Generation Setup",
            desc: "Strategic forms, CTAs, WhatsApp chat, and click-to-call features to boost your conversions.",
            icon: <Zap className="w-6 h-6 text-white" />,
            bg: "bg-green-500",
        },
        {
            title: "Analytics & Tracking",
            desc: "Integrated with GA4, Search Console, and Meta Pixel to monitor traffic and behavior effectively.",
            icon: <Server className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
        },
        {
            title: "Hosting & Security",
            desc: "Premium hosting with free SSL, automatic daily backups, and rock-solid security configurations included.",
            icon: <Settings2 className="w-6 h-6 text-white" />,
            bg: "bg-red-500",
        },
        {
            title: "Payment Integrations",
            desc: "Smooth integration with Razorpay, Stripe, and other trusted gateways to collect online payments securely.",
            icon: <CreditCard className="w-6 h-6 text-white" />,
            bg: "bg-yellow-400",
        },
        {
            title: "CRM & Tool Integration",
            desc: "Easily connect CRMs, LMS, booking tools, and other platforms essential for business automation.",
            icon: <PlugZap className="w-6 h-6 text-white" />,
            bg: "bg-green-500",
        },
        {
            title: "Fast Turnaround",
            desc: "Projects completed in 7–15 working days without delays, ensuring quick online presence launch.",
            icon: <Timer className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
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


    const locations = [
        'Hitech City',
        'Gachibowli',
        'Jubilee Hills',
        'Madhapur',
        'Banjara Hills',
        'Kukatpally',
        'Kompally',
        'LB Nagar',
        'Uppal',
        'Kondapur',
        'Begumpet',
    ];

    const problems = [
        {
            icon: <LucideSmartphone className="text-indigo-600 w-6 h-6" />,
            title: 'Mobile-Friendly Web Design Services Hyderabad',
            desc: `Over 70% of internet users in Hyderabad browse on mobile. If your site isn’t `
        },
        {
            icon: <LucideZap className="text-indigo-600 w-6 h-6" />,
            title: ` Conversion-Focused Landing Pages for Google & Meta Ads`,
            desc: `Running Google Ads or Instagram promotions without a conversion-optimized website`
        },
        {
            icon: <LucideSearch className="text-indigo-600 w-6 h-6" />,
            title: `SEO-Friendly Website Design Company in Hyderabad`,
            desc: `If your website structure isn’t SEO-friendly, Google won’t rank you — no matter how go.`
        },
        {
            icon: <LucideLoader className="text-indigo-600 w-6 h-6" />,
            title: `Custom Web Development vs. Wix, GoDaddy, Canva Builders`,
            desc: `These platforms offer convenience, but limit growth. They’re not built for Hyderabad’s `
        },
        {
            icon: <LucidePhone className="text-indigo-600 w-6 h-6" />,
            title: `Improved Customer Contact with UX-driven Web Design`,
            desc: `Many sites lack basic conversion flow. No clickable phone number. No WhatsApp integration`
        },
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


    return (
        <>
            <WebDevHero />
            <WDChallenges/>
            {/* <WebdevCar/> */}
            <WDStats problems={problems}/>
            <WDCTA1/>
            {/* <section className="relative bg-gradient-to-r to-[#5F54D3] from-purple-500 pt-16 pb-16 px-6 md:px-16 text-white overflow-hidden">
                
                <Image
                    src={star}
                    alt="Decorative Star"
                    className="absolute top-0 right-0 w-40 md:w-64 opacity-30 pointer-events-none"
                />

                <div className="max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">

                
                    <div className="flex flex-col md:flex-row gap-14 md:gap-24">
                        <div>
                            <h3 className="text-5xl font-bold">200+</h3>
                            <p className="text-sm text-purple-200 mb-1">Websites Delivered</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold">200+</h3>
                            <p className="text-sm text-purple-200 mb-1">Successful Web Projects</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold">100%</h3>
                            <p className="text-sm text-purple-200 mb-1">Client Satisfaction Rate</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                   
                    <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Looking for Web Design in Hyderabad?</h3>
                        <p className="text-purple-200 text-sm mb-6">
                            Bixeltek builds fast, SEO-optimized, and conversion-driven websites for startups, small businesses, and enterprises in Hyderabad.
                            Get a custom web solution that grows with your brand.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block mt-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                        >
                            Let’s Build Your Website →
                        </a>
                    </div>
                </div>
            </section> */}
            <WDPartner features={features}/>
            <ServicesSection />
             <WDWhyChooseUs/>   
             <WDCTA2/>   
            {/* 
            <section className="bg-[white] text-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    <div className=" col-span-1 md:col-span-3 grid  grid-cols-1 md:grid-rows-2 gap-6">
                       
                       
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 h-full">
                            
                            <div
                                className="col-span-1 md:col-span-2 overflow-hidden rounded-2xl pl-6 sm:pt-5 md:pt-0 items-center bg-yellow-500 pb-6 pr-0 flex flex-row justify-between h-full"
                           
                            >
                                <div>
                                    <h3 className="text-3xl font-sofiasanscondensed text-black font-semibold mb-2">
                                        Timely and Transparent Communication
                                    </h3>
                                    <p className="text-sm font-poppins text-gray-900 mb-4">
                                        Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                                    </p>
                                    <button className="bg-white text-xs text-black font-semibold px-7 py-2 rounded-full w-fit">
                                        LEARN MORE
                                    </button>
                                </div>

                                <div className="mt-0">
                                    <Image src={lpimg} alt="monitor" className=" transalte-x-2 md:translate-x-12" />
                                </div>
                            </div>

                           
                            <div className="bg-[black] text-white rounded-2xl p-6 relative flex flex-col justify-start h-full">
                                <div className="z-10 mr-24">
                                    <h3 className="text-3xl font-sofiasanscondensed font-semibold mb-2">Boost Traffic & Sales</h3>
                                    <p className="text-sm font-poppins text-white mb-4">
                                        Platea rhoncus semper consectetur lêtîus facilisi nec curabitur placerat montes lacinia tincidunt
                                    </p>
                                </div>

                              
                                <div className="absolute bottom-0 right-0">
                                    <Image src={rocketimg} alt="rocket" className=' h-[200px] md:h-[400px]  rounded-2xl object-cover' />
                                </div>
                            </div>
                        </div>


                        
                        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#1B1B2B] rounded-2xl p-6 flex justify-center items-center relative overflow-hidden col-span-1">
                                <div className="absolute inset-0 opacity-10">
                                    <Image src="/rating-bg.png" alt="ratings" fill className="object-cover" />
                                </div>
                                <div className="relative z-10 flex flex-col justify-center items-center">
                                    <h4 className="text-5xl font-sofiasanscondensed text-white font-bold">4.7+</h4>
                                    <p className="text-sm font-semibold mt-1 text-white">Client Ratings</p>
                                    <div className="flex mt-2 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-sm font-poppins text-center text-gray-200 mt-4">
                                        Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar
                                    </p>
                                </div>
                            </div>

                            
                            <div className=" cols-span-1 md:col-span-2 bg-[#7B2CBF] rounded-2xl pr-6 pl-6 pt-0 pb-0 flex justify-between items-end relative overflow-hidden min-h-[500px] md:min-h-[300px]">
                                <div className="z-10 pt-6 pb-8 h-full flex flex-col justify-start md:justify-center">
                                    <h3 className="text-3xl font-sofiasanscondensed text-white mb-2">Responsive and Scalable Solutions</h3>
                                    <p className="text-sm text-gray-200 mb-4 max-w-xs">
                                        Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                                    </p>
                                    <button className="text-xs text-black font-semibold px-7 py-2 bg-white rounded-full w-fit">
                                        LEARN MORE
                                    </button>
                                </div>

                                
                                <div className="absolute bottom-0 -right-5">
                                    <Image src={mobile} alt="wallet UI" width={300} height={400} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#B28BFC] to-[#FF89CA] rounded-2xl p-6 flex flex-col justify-center gap-5 text-center items-center">
                        <div>
                            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/20 text-white text-3xl">
                                <FiPhoneCall />
                            </div>




                            
                            <h3 className="text-2xl font-bold mt-2 mb-1 text-white">(+91) 91000-32301</h3>

        
                            <p className="text-xs text-white/80 mt-2 max-w-xs mx-auto">
                                Book a 30-minute discovery call with our team.
                            </p>
                        </div>

                        
                        <Link href={'tel:+919100032301'}>

                            <button className="bg-black text-white font-semibold mt-6 py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                                CALL NOW!
                            </button>
                        </Link>
                    </div>
                </div>
            </section> */}
            <WDLocations locations={locations}/>
            <Tech2 />
            <WDIndustries industries={industries}/>
            {/* <CaseStudies /> */}
            <LogoGrid />
            <DarkFaqSection faqs={faqs} />
            <WDContact/>
        </>
    )
}
