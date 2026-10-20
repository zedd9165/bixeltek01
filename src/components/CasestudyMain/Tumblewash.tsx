'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from 'react-icons/md';
type StrategyStep = {
    title: string;
    points: string[];
};

const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'strategy', label: 'Our Strategic Approach' },
    { id: 'results', label: 'Results at a Glance' },
    { id: 'client-impact', label: 'Client Impact' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'cta', label: 'Get Results' },
];
const strategySteps = [
    {
        title: "Intent-Driven Keyword Targeting",
        des: "The original campaign used broad-match keywords with little intent filtering. We rebuilt the keyword strategy from scratch:",
        points: [
            "Targeted high-converting, location-based queries like “laundry pickup in Gurgaon,” “dry cleaning service near me,” and “affordable laundry same day.",
            "Built a negative keyword library to block unqualified traffic.",
            "Prioritized keywords that aligned with immediate customer action, not passive browsing.",
        ],
    },
    {
        title: "Ad Copy That Demands Attention",
        des: "Our creative team rewrote all ad copy with a focus on clarity, urgency, and local relevance:",
        points: [
            "Headlines like: “Same-Day Laundry Pickup in Gurgaon”, “Affordable Dry Clean Service – Book Now”",
            "Benefits upfront: Free pickup & delivery, Stain removal included, Fast turnaround",
            "Clear, compelling CTAs: Call Now, Book Pickup, Get a Quote Instantly",
        ],
        suffix: "This led to a 21% increase in click-through rate (CTR) in the first 30 days."
    },
    {
        title: "Landing Page Optimization",
        des: "The client's old landing page wasn’t converting. We rebuilt it with:",
        points: [
            "Mobile-first design for the 90% mobile audience",
            "Trust builders: real customer testimonials, star ratings, and payment options",
            "Prominent CTA buttons: Call Now and Book Pickup",
            "A short, frictionless form that collected just what was needed: name, location, phone number",
        ],
        suffix: "The result? Over 400 form submissions in 90 days with qualified customer inquiries.",
    },
    {
        title: "Smart Bidding + Budget",
        des: "We restructured the campaign to make every rupee work harder",
        points: [
            "Shifted from automated bidding to manual CPC with device-level modifiers",
            "Increased bids on mobile during high-conversion hours (9 AM–12 PM, 5 PM–9 PM)",
            "Allocated more budget to geo-locations with proven conversion history",
        ],
        suffix: "This dropped the average CPC from ₹18 to ₹10 — while boosting conversions."
    },
    {
        title: "Weekly Optimization & Reporting",
        des: "We didn’t stop at launch. We ran continuous A/B tests on:",
        points: [
            "Ad copy variations",
            "Call extensions vs. sitelinks",
            "Different form CTA placements",
        ],
        suffix: "Every week, we shared real-time performance dashboards with the client — keeping them in the loop and part of the process."
    },
];

export default function TumbleWashCaseStudySection() {
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
                        <Link href="/services/google-ads" className="hover:underline">Google Ads</Link>
                        <span>/</span>
                        <Link href="/services/grow" className="hover:underline">Paid Media (Grow)</Link>
                        <span>/</span>
                        <span className="text-gray-500">Case Study</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-medium text-gray-500 mr-1">Services:</span>
                        <Link
                            href="/services/google-ads"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Google Ads Management
                        </Link>
                        <Link
                            href="/services/conversion-rate-optimization"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Conversion Rate Optimization (CRO)
                        </Link>
                        <Link
                            href="/services/analytics-tracking"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Analytics &amp; Tracking
                        </Link>
                        <Link
                            href="/services/grow"
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-[#670ef7] border border-purple-200 hover:bg-[#670ef7] hover:text-white transition-colors"
                        >
                            Performance Marketing
                        </Link>
                    </div>
                </div>

                <div id="overview" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">Overview</h2>
                    <p className='text-lg font-poppins'>
                        In mid-2024, a Gurgaon-based laundry and dry-cleaning business came to Bixeltek with a critical problem. Despite running <Link href="/services/google-ads" className="text-[#670ef7] font-semibold hover:underline">Google Ads</Link> with a daily spend of ₹2,000, the campaign was falling flat.
                    </p>
                    <p className='text-lg mt-3 font-poppins'>Their ads were attracting unqualified leads, the cost per acquisition (CPA) stood at ₹754, and they weren&apos;t seeing a measurable return on ad spend (ROAS). They were close to pulling the plug on paid advertising.</p>
                    <p className='text-lg mt-3 font-poppins'>Their objective was ambitious: <span className='font-semibold'>cut the budget in half and double the results.</span> <br />
                        We delivered exactly that — and more.</p>
                </div>

                <div id="objectives" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">Objectives</h2>
                    <ul className="list-disc pl-5 space-y-3 text-lg font-poppins">
                        <li>Reduce CPA from ₹754 to below ₹100</li>
                        <li>Generate 10+ high-quality calls every day</li>
                        <li>Drive over 400 monthly form submissions</li>
                        <li>Optimize the landing page for mobile conversions with <Link href="/services/conversion-rate-optimization" className="text-[#670ef7] font-medium hover:underline">Conversion Rate Optimization (CRO)</Link></li>
                        <li>Increase ROAS and improve budget efficiency</li>
                    </ul>
                </div>

                <section
                    id="strategy"
                    className="scroll-mt-32 py-8 px-0 md:px-0 bg-white relative"
                >
                    <h2 className="text-4xl font-bold text-left text-[#670ef7] mb-2 font-sofiasanscondensed">
                        Our Strategic Approach
                    </h2>
                    <p className='text-base text-black max-w-xl mb-12'>We implemented a complete full-funnel transformation — not just ad tweaks, but a <Link href="/services/grow" className="text-[#670ef7] font-semibold hover:underline">performance marketing overhaul</Link>. Here’s how:</p>

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
                                <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.des}</p>
                                {step.points && step.points.length > 0 && (
                                    <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-[#670ef7] font-poppins">
                                        {step.points.map((point) => (
                                            <li key={point}>{point}</li>
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
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">Results at a Glance (90 Days)</h2>
                    <table className="w-full text-xs md:text-sm border border-gray-200">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="text-left p-2">Metric</th>
                                <th className="text-left p-2">Aug 2024</th>
                                <th className="text-left p-2">Nov 2024</th>
                                <th className="text-left p-2">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2">Monthly Phone Calls</td><td className="p-2">170</td><td className="p-2">477+</td><td className="p-2"><MdKeyboardArrowUp className='text-green-600 inline-block text-xl' /> 180%</td></tr>
                            <tr><td className="p-2">Cost Per Acquisition (CPA)</td><td className="p-2">₹754</td><td className="p-2">₹77</td><td className="p-2"><MdKeyboardArrowDown className='text-red-600 inline text-xl' /> 90%</td></tr>
                            <tr><td className="p-2">Form Fills</td><td className="p-2">0</td><td className="p-2">400+</td><td className="p-2">n/a (<Link href="/services/analytics-tracking" className="text-[#670ef7] hover:underline font-medium">tracking added</Link>)</td></tr>
                            <tr><td className="p-2">Return on Ad Spend (ROAS)</td><td className="p-2">0.41x (41%)</td><td className="p-2">4.36x (436.7%)</td><td className="p-2"><MdKeyboardArrowUp className='text-green-600 inline-block text-xl' /> 10x+</td></tr>
                            <tr><td className="p-2">Avg. CPC</td><td className="p-2">₹18</td><td className="p-2">₹10</td><td className="p-2"><MdKeyboardArrowDown className='text-red-600 inline text-xl' /> 44%</td></tr>
                            <tr><td className="p-2">Avg. CTR</td><td className="p-2">3.1%</td><td className="p-2">4.8%</td><td className="p-2"><MdKeyboardArrowUp className='text-green-600 inline-block text-xl' /> 21%</td></tr>
                        </tbody>
                    </table>
                </div>

                <div id="client-impact" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold  text-[#670ef7] mb-4">Client Impact</h2>
                    <blockquote className="italic text-gray-700 text-2xl md:text-3xl md:text-center border-l-4 border-[#670ef7] pl-4">
                        “We thought Google Ads didn&apos;t work. Now, we&apos;re getting 15–20 quality calls every day. Our delivery team is busier than ever — and we&apos;ve even started thinking about expansion.”
                        <br /><span className='font-semibold text-lg md:text-2xl'>Founder, Laundry Service in Gurgaon</span>
                    </blockquote>
                </div>

                <div id="conclusion" className="scroll-mt-32 pb-10">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">Conclusion</h2>
                    <p className='text-lg font-poppins'>
                        This case study reflects the power of strategic thinking, full-funnel alignment, and relentless optimization.
                        At Bixeltek, we don&apos;t just run ads — we engineer systems for sustainable growth through our <Link href="/services/grow" className="text-[#670ef7] font-semibold hover:underline">performance marketing solutions</Link>.
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        If your business is spending on ads and not getting results, discover how our dedicated <Link href="/services/google-ads" className="text-[#670ef7] font-semibold hover:underline">Google Ads management</Link> and <Link href="/services/analytics-tracking" className="text-[#670ef7] font-semibold hover:underline">analytics tracking</Link> turn wasted budgets into predictable customer acquisition.
                    </p>
                </div>

                <div id="cta" className="scroll-mt-20 pb-20">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">
                        Ready to Cut Wasted Spend and Scale Your ROAS?
                    </h2>
                    <p className="text-lg font-poppins text-gray-800">
                        Whether you need expert <Link href="/services/google-ads" className="text-[#670ef7] font-medium underline underline-offset-2 hover:opacity-80">Google Ads management</Link>, landing page <Link href="/services/conversion-rate-optimization" className="text-[#670ef7] font-medium underline underline-offset-2 hover:opacity-80">conversion rate optimization</Link>, or end-to-end <Link href="/services/grow" className="text-[#670ef7] font-medium underline underline-offset-2 hover:opacity-80">performance marketing</Link>, Bixeltek helps you turn ad spend into profitable revenue.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-lg bg-[#670ef7] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#520bc4]"
                        >
                            Book a Free Strategy Session
                        </Link>
                        <Link
                            href="/services/google-ads"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-[#670ef7] px-6 py-3 text-base font-semibold text-[#670ef7] transition-colors hover:bg-purple-50"
                        >
                            Explore Google Ads Services
                        </Link>
                    </div>
                </div>
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
