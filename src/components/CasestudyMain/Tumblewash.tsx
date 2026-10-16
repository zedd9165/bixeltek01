'use client';
import { useEffect, useState } from 'react';
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
        title: "1. Intent-Driven Keyword Targeting",
        des: "The original campaign used broad-match keywords with little intent filtering. We rebuilt the keyword strategy from scratch:",
        points: [
            "Targeted high-converting, location-based queries like “laundry pickup in Gurgaon,” “dry cleaning service near me,” and “affordable laundry same day.",
            "Built a negative keyword library to block unqualified traffic.",
            "Prioritized keywords that aligned with immediate customer action, not passive browsing.",
        ],
    },
    {
        title: "2. Ad Copy That Demands Attention",
        des: "Our creative team rewrote all ad copy with a focus on clarity, urgency, and local relevance:",
        points: [
            "Headlines like: “Same-Day Laundry Pickup in Gurgaon”, “Affordable Dry Clean Service – Book Now”",
            "Benefits upfront: Free pickup & delivery, Stain removal included, Fast turnaround",
            "Clear, compelling CTAs: Call Now, Book Pickup, Get a Quote Instantly",
        ],
        suffix: "This led to a 21% increase in click-through rate (CTR) in the first 30 days."
    },
    {
        title: "3. Landing Page Optimization",
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
        title: "4. Smart Bidding + Budget",
        des: "We restructured the campaign to make every rupee work harder",
        points: [
            "Shifted from automated bidding to manual CPC with device-level modifiers",
            "Increased bids on mobile during high-conversion hours (9 AM–12 PM, 5 PM–9 PM)",
            "Allocated more budget to geo-locations with proven conversion history",
        ],
        suffix: "This dropped the average CPC from ₹18 to ₹10 — while boosting conversions."
    },
    {
        title: "5. Weekly Optimization & Reporting",
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
                <div id="overview" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">Overview</h2>
                    <p className='text-lg font-poppins'>
                        In mid-2024, a Gurgaon-based laundry and dry-cleaning business came to Bixeltek with a critical problem. Despite running Google Ads with a daily spend of ₹2,000, the campaign was falling flat.

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
                        <li>Optimize the landing page for mobile conversions</li>
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
                    <p className='text-base text-black max-w-xl mb-12'>We implemented a complete full-funnel transformation — not just ad tweaks, but a performance marketing overhaul. Here’s how:</p>

                    <div className="relative border-l-4 border-[#670ef7] ml-1 md:ml-4 space-y-16">
                        {strategySteps.map((step, index) => {
                            

                            return (
                                <div
                                    key={index}
                                    className="relative pl-5 md:pl-10"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[12px] top-1 w-5 h-5 bg-[#670ef7] rounded-full border-4 border-white z-10" />

                                    {/* Step Content */}
                                    <h3 className="text-2xl font-sofiasanscondensed font-semibold mb-1">{step.title}</h3>
                                    <p className='mb-3 max-w-xl'>{step.des}</p>
                                    <ul className="list-disc md:text-lg pl-5 text-gray-700  space-y-1">
                                        {step.points.map((point, i) => (
                                             <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className='mt-3 max-w-xl'>{step.suffix}</p>
                                </div>
                            );
                        })}
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
                            <tr><td className="p-2">Form Fills</td><td className="p-2">0</td><td className="p-2">400+</td><td className="p-2">n/a (tracking added)</td></tr>
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

                <div id="conclusion" className="scroll-mt-32 pb-20">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">Conclusion</h2>
                    <p className='text-lg font-poppins'>
                        This case study reflects the power of strategic thinking, full-funnel alignment, and relentless optimization.
                        At Bixeltek, we don&apos;t just run ads — we engineer systems for growth.
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        If your business is spending on ads and not getting results, maybe it&apos;s not your product — maybe it&apos;s your performance strategy.
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
