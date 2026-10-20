'use client';
import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';
import { MdCall, MdGroups, MdVisibility, MdCheckCircle, MdSecurity } from 'react-icons/md';
import { FaChartLine, FaPuzzlePiece, FaPhoneAlt, FaBolt } from "react-icons/fa"

type StrategyStep = {
    title: string;
    des?: ReactNode;
    points: ReactNode[];
    suffix?: ReactNode;
};

const sections = [
    { id: 'about', label: 'About' },
    { id: 'struggle', label: 'The Struggle' },
    { id: 'strategy', label: 'The Bixeltek Turnaround' },
    { id: 'results', label: 'Results at a Glance' },
    { id: 'client-impact', label: 'Client Impact' },
    { id: 'conclusion', label: 'The Takeaway' },
    { id: 'cta', label: 'Build Your Success Story.' },
];
const strategySteps: StrategyStep[] = [
    {
        title: "The Objective",
        des: "The client approached Bixeltek to solve one core problem:",
        points: [
            "'We need to show up when someone searches for treatments we offer — especially the high-value ones.'"
        ],
        suffix: "They wanted more leads, more calls, and more booked appointments — especially for implants, RCTs, and emergency services."
    },
    {
        title: "The Solution: Dental Marketing That Drives Real Growth",
        des: (
            <>
                As a specialized <Link href="/dental-marketing" className="text-[#670ef7] hover:underline font-medium">digital marketing agency for dentists</Link>, Bixeltek created a strategy focused on:
            </>
        ),
        points: [
            (
                <span key="p1">
                    Improving Google visibility for high-intent dental search terms via targeted <Link href="/services/google-ads" className="text-[#670ef7] hover:underline font-medium">Google Ads</Link> and <Link href="/local-seo" className="text-[#670ef7] hover:underline font-medium">Local SEO</Link>
                </span>
            ),
            (
                <span key="p2">
                    Attracting patients ready to book with dedicated <Link href="/services/web-design" className="text-[#670ef7] hover:underline font-medium">dental landing page design</Link> and <Link href="/services/conversion-rate-optimization" className="text-[#670ef7] hover:underline font-medium">CRO</Link>
                </span>
            ),
            (
                <span key="p3">
                    Prioritizing phone calls and appointment leads with precision <Link href="/services/analytics-tracking" className="text-[#670ef7] hover:underline font-medium">call &amp; analytics tracking</Link>
                </span>
            )
        ],
        suffix: "No gimmicks. No wasted clicks. Just smart digital campaigns built for dental growth.",
    },
];

export default function DentistCaseStudy() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (

        <section className="flex w-full max-w-7xl mx-auto px-6 py-20 space-x-8">
            {/* Sidebar */}


            {/* Content */}
            <div className="w-full md:w-2/3 space-y-12">
                {/* Breadcrumbs & Service Badges */}
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
                        <Link href="/" className="hover:underline">Bixeltek</Link>
                        <span>/</span>
                        <Link href="/dental-marketing" className="hover:underline">Dental Marketing</Link>
                        <span>/</span>
                        <span className="text-gray-600">Client Case Study</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-medium text-gray-500 mr-1">Services:</span>
                        <Link
                            href="/dental-marketing"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Dental Marketing
                        </Link>
                        <Link
                            href="/services/google-ads"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Google Ads Management
                        </Link>
                        <Link
                            href="/local-seo"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Local SEO
                        </Link>
                        <Link
                            href="/services/analytics-tracking"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Call &amp; Lead Tracking
                        </Link>
                    </div>
                </div>

                <div id="about" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">About the Client</h2>
                    <p className='text-lg font-poppins'>
                        A full-service dental clinic in Canada, offering treatments like dental implants, root canals, emergency services, and cosmetic dentistry. The clinic was located in a <span className='font-semibold'>densely competitive area</span>  with numerous nearby clinics bidding for the same audience online.
                    </p>
                    {/* <p className='text-lg mt-3 font-poppins'>But when digital started driving customer decisions, they struggled to keep up. Their offline reputation wasn&apos;t translating into online leads — and the business began feeling the heat.</p> */}

                </div>
                <div id="struggle" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7]">
                        The Struggle
                    </h2>
                    <p className="text-lg font-poppins mb-4 mt-2">
                        <span className="font-semibold">The Common Challenges Most Dental Clinics Face:</span><br />
                        Whether you&apos;re in India, Canada, or the USA, most dental practices struggle with:
                    </p>
                    <ul className="pl-5 space-y-3 text-lg font-poppins">
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Not showing up when potential patients search online
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Spending on ads that don’t lead to bookings
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Competitors winning top positions on Google Search
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Low-quality leads or price-sensitive inquiries
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Inconsistent appointment flow, especially for high-ticket treatments
                        </li>
                    </ul>
                    <p className="mt-4 text-lg font-poppins font-semibold">Sound familiar?</p>
                </div>


                <section
                    id="strategy"
                    className="scroll-mt-32 py-8 px-0 md:px-0 bg-white relative"
                >
                    {/* <h2 className="text-4xl font-bold text-left text-[#670ef7] mb-2 font-sofiasanscondensed">
                        The Bixeltek Turnaround
                    </h2>
                    <p className='text-base text-black max-w-xl mb-12'>We knew this wasn&apos;t just about fixing ads — it was about reviving a legacy brand. As a Google Partner Certified agency, we stepped in with speed and strategy.</p> */}

                    <div className="space-y-14">
                        {strategySteps.map((step, index) => (
                            <article key={step.title}>
                                <div className="mb-4 flex items-center gap-4" aria-hidden="true">
                                    <span className="text-5xl font-bold leading-none text-[#670ef7] font-sofiasanscondensed md:text-6xl">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                                </div>

                                <h3 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl font-sofiasanscondensed">
                                    <span className="sr-only">Step {index + 1}: </span>
                                    {step.title}
                                </h3>
                                {step.des && (
                                    <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.des}</p>
                                )}
                                {step.points && step.points.length > 0 && (
                                    <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-[#670ef7] font-poppins">
                                        {step.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {step.suffix && (
                                    <p className="mt-3 leading-relaxed text-gray-700 font-poppins">{step.suffix}</p>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                <div id="results" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">30-Day Google Ads Results Snapshot (March 18 – April 16, 2025)</h2>
                    <table className="w-full text-sm md:text-base border border-gray-200">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="text-left p-3">Metric</th>
                                <th className="text-left p-3">Result</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdCall className="text-blue-600 text-xl" />
                                    Phone Calls
                                </td>
                                <td className="p-3">212 phone calls from Google Ads</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 flex items-center gap-2">
                                    <MdGroups className="text-green-600 text-xl" />
                                    New Patient Leads
                                </td>
                                <td className="p-3">72 new patient leads</td>
                            </tr>
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdVisibility className="text-purple-600 text-xl" />
                                    Ad Impressions
                                </td>
                                <td className="p-3">Over 36,000 impressions on search</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 flex items-center gap-2">
                                    <MdCheckCircle className="text-emerald-600 text-xl" />
                                    Treatment Inquiries
                                </td>
                                <td className="p-3">30+ implant inquiries, 20+ RCT leads, plus general and emergency calls</td>
                            </tr>
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdSecurity className="text-red-600 text-xl" />
                                    Invalid Clicks Blocked
                                </td>
                                <td className="p-3">137 invalid clicks blocked (protecting ad budget)</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className='mt-4'>The result? A fully booked calendar — especially from dental patients who found them directly through <Link href="/services/google-ads" className="font-semibold text-[#670ef7] hover:underline">Google Ads</Link>.</p>
                </div>

                <div id="client-impact" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold  text-[#670ef7] mb-4">What the Client Said</h2>
                    <blockquote className="italic max-w-[90%] mx-auto text-gray-700 text-2xl md:text-3xl md:text-center border-l-4 border-[#670ef7] pl-4">
                        “The difference was clear — our phones were ringing with the right kind of patients. We started seeing more implant and root canal cases than ever before.”
                        <br /><span className='font-semibold text-lg md:text-2xl'>Dr.Baseer</span>
                    </blockquote>
                </div>

                <div id="conclusion" className="scroll-mt-32 pb-6">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">The Impact</h2>
                    <p className='text-lg font-poppins'>
                        Patients weren&apos;t just browsing — they were calling and booking. The campaign delivered a <span className='font-semibold'>surge in phone calls</span>, many for <span className='font-semibold'>high-margin procedures.</span>
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        This translated into real, predictable growth and better use of the clinic&apos;s marketing budget.
                    </p>
                </div>

                {/* Services Delivered Badges */}
                <div className="pt-2 pb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="font-semibold text-gray-900">Services Delivered:</span>
                    <Link href="/services/google-ads" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Google Ads Management</Link>
                    <Link href="/local-seo" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Local SEO</Link>
                    <Link href="/services/conversion-rate-optimization" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Conversion Rate Optimization</Link>
                    <Link href="/services/analytics-tracking" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Analytics &amp; Call Tracking</Link>
                </div>

                <div id="cta" className="scroll-mt-20 pb-0">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4 flex items-center gap-2">
                        Is Your Dental Clinic Facing the Same Issues?
                    </h2>

                    <ul className="pl-1 space-y-3 text-lg font-poppins mb-6">
                        <li className="flex items-center gap-2">
                            <FaChartLine className="text-[#670ef7]" />
                            Not enough high-value leads?
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPuzzlePiece className="text-[#670ef7]" />
                            Lost in a sea of dental competitors?
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#670ef7]" />
                            Tired of phone calls that never convert?
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-3 flex items-center gap-2">
                        <FaBolt className="text-[#670ef7]" />
                        Let&apos;s Change That.
                    </h2>
                    <p className="text-lg font-poppins mb-6">
                        At Bixeltek, we specialize in <Link href="/services/google-ads" className="text-[#670ef7] hover:underline font-medium">Google Ads</Link> and <Link href="/services/seo-services" className="text-[#670ef7] hover:underline font-medium">SEO for dental clinics</Link> across India, Canada, and the United States.<br />
                        Our campaigns don&apos;t just drive traffic — they bring real patients to your chair.
                    </p>
                </div>

                {/* <div id="cta" className="scroll-mt-32">
                    <h2 className="text-xl font-bold text-[#670ef7] mb-4">Want Similar Results for Your Business?</h2>
                    <ul className="space-y-2">
                        <li>📞 <strong>Book a Free Strategy Session</strong></li>
                        <li>📧 <a href="mailto:hello@bixeltek.com" className="text-[#670ef7] underline">hello@bixeltek.com</a></li>
                        <li>🌐 <a href="https://www.bixeltek.com" target="_blank" className="text-[#670ef7] underline">www.bixeltek.com</a></li>
                    </ul>
                </div> */}
                <section className="relative z-10 overflow-hidden bg-[#670ef7] rounded-2xl py-10 px-8 mt-20">
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="text-center lg:text-left ">
                                    <div className="mb-10 lg:mb-0 ">
                                        <h1
                                            className="mt-0 mb-3 font-sofiasanscondensed tracking-wide font-bold leading-tight text-2xl sm:leading-tight md:text-[35px] md:leading-tight text-white ">
                                             Let&apos;s show you how we can help your clinic grow.</h1>
                                        <p
                                            className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="text-center lg:text-right">
                                    <Link
                                        className="font-semibold rounded-lg mx-auto text-lg inline-flex items-center justify-center bg-white text-[#670ef7] py-4 px-9 hover:bg-opacity-90 transition shadow-md"
                                        href="/contact-us">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="absolute top-0 right-0 -z-10">
                        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
                        </svg>
                    </span>
                </section>
            </div>
            <aside className="w-1/3 sticky top-32 hidden md:flex justify-center items-center h-max">
                <nav className="space-y-3 border-r-4 flex flex-col items-end border-[#ccc] pr-4">
                    {sections.map(sec => (
                        <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className={`block text-sm font-medium transition-colors ${activeId === sec.id ? 'text-[#670ef7] font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {sec.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </section>
    );
}
