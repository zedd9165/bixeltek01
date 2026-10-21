'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';


const sections = [
  { id: 'overview', label: 'About the Clinic' },
  { id: 'opportunity', label: 'The Opportunity' },
  { id: 'approach', label: 'Strategy & CRO' },
  { id: 'acquisition', label: 'Lead Acquisition' },
  { id: 'pricing', label: 'Pricing & Scenarios' },
  { id: 'what-changed', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
];


type ApproachStep = {
  title: string;
  description: React.ReactNode;
};

const approachSteps: ApproachStep[] = [
  {
    title: 'Search Visibility and Authority',
    description: (
      <>
        We optimised the website to improve treatment relevance, organic discoverability, and the credibility of the clinic’s Invisalign offering through targeted{' '}
        <Link href="/services/seo-services" className="text-[#670ef7] hover:underline font-medium">
          SEO services
        </Link>{' '}
        and{' '}
        <Link href="/local-seo" className="text-[#670ef7] hover:underline font-medium">
          local SEO
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Conversion Optimisation',
    description: (
      <>
        Through structured{' '}
        <Link href="/services/conversion-rate-optimization" className="text-[#670ef7] hover:underline font-medium">
          conversion rate optimization (CRO)
        </Link>{' '}
        and dedicated{' '}
        <Link href="/services/web-design" className="text-[#670ef7] hover:underline font-medium">
          landing page design
        </Link>
        , we simplified access to treatment information, refined how offers were presented, and reduced friction between initial interest and a phone call or form submission.
      </>
    ),
  },
  {
    title: 'Behaviour-Led Improvements',
    description: (
      <>
        Using Microsoft Clarity and comprehensive{' '}
        <Link href="/services/analytics-tracking" className="text-[#670ef7] hover:underline font-medium">
          analytics &amp; tracking
        </Link>
        , we analysed visitor behaviour and used those observations to guide further website improvements.
      </>
    ),
  },
];

export default function InvisalignCaseStudy() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex w-full max-w-7xl mx-auto px-6 py-16 md:py-20 space-x-0 md:space-x-8">
      {/* Main Content */}
      <div className="w-full md:w-2/3 space-y-12">
        {/* Top Tagline */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/dental-marketing" className="hover:underline">Dental Marketing</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        {/* 1. Overview */}
        <div id="overview" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">
            A Successful Practice with an Underperforming Service
          </h2>
          <div className="space-y-4 text-base md:text-lg font-poppins text-gray-800 leading-relaxed">
            <p>
              Since opening in 2021, this Canadian dental clinic had steadily built its patient base. Emergency appointments, extractions, root canals, and routine hygiene services were consistently bringing patients through the door. Word of mouth had become one of the practice’s strongest growth drivers.
            </p>
            <p className="font-semibold text-gray-900 border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r">
              But that success was not translating into Invisalign cases.
            </p>
            <p>
              Unlike emergency dentistry, Invisalign involves a longer consideration process. Patients research providers, compare treatment options, evaluate costs, and look for reasons to trust a clinic before making contact. The practice offered Invisalign but lacked a reliable way to attract patients actively considering treatment.
            </p>
          </div>
        </div>

        {/* 2. The Opportunity */}
        <div id="opportunity" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">
            The Opportunity Was Not More Traffic. It Was Better Conversion.
          </h2>
          <p className="text-base md:text-lg font-poppins text-gray-800 leading-relaxed mb-6">
            Bixeltek focused on the clinic’s digital presence and the journey prospective Invisalign patients took before making an enquiry.
          </p>

          {/* Strategy Timeline */}
          <div id="approach" className="scroll-mt-32 space-y-14 my-8">
            {approachSteps.map((step, index) => (
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
                <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.description}</p>
              </article>
            ))}
          </div>

          <p className="text-sm md:text-base font-poppins italic text-gray-600 bg-gray-50 border border-gray-200 p-4 rounded-lg">
            This was not a one-time redesign. It was an iterative process of understanding patient behaviour, improving the experience, and supporting a treatment-specific acquisition strategy.
          </p>
        </div>

        {/* 3. Lead Acquisition */}
        <div id="acquisition" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">
            From Unpredictable Demand to Measurable Acquisition Costs
          </h2>
          <div className="space-y-4 text-base md:text-lg font-poppins text-gray-800 leading-relaxed">
            <p>
              The clinic now reports an average of <span className="font-semibold text-gray-900">three to five Invisalign enquiries</span> for every CAD $100 spent on advertising, which is approximately <span className="font-semibold text-[#670ef7]">CAD $20–$33 per lead</span> through high-intent <Link href="/services/google-ads" className="text-[#670ef7] hover:underline font-medium">Google Ads</Link> search campaigns.
            </p>
            <p>
              At its current advertising budget of <span className="font-semibold text-gray-900">CAD $3,000 per month</span>, maintaining that efficiency would imply approximately <span className="font-semibold text-gray-900">90–150 Invisalign enquiries monthly</span>. This is a projection from the reported lead efficiency, not a verified monthly lead count.
            </p>
          </div>
        </div>

        {/* 4. Pricing & Commercial Opportunity Table (Light Purple BG, Dark Purple Text) */}
        <div id="pricing" className="scroll-mt-32">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7]">
              The Commercial Opportunity & Pricing Model
            </h2>
            <span className="text-xs font-semibold bg-[#670ef7]/15 text-[#3b0764] px-3 py-1 rounded-full uppercase tracking-wider">
              Treatment Unit Economics
            </span>
          </div>

          <p className="text-base md:text-lg font-poppins text-gray-800 leading-relaxed mb-6">
            At a starting treatment price of <span className="font-semibold text-gray-900">CAD $4,500</span>, even a modest percentage of enquiries converting into accepted cases could represent meaningful gross treatment revenue.
          </p>

          {/* Pricing Highlight Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f5f0ff] border-2 border-purple-200/80 rounded-xl p-5 text-center shadow-xs">
              <span className="text-xs uppercase font-bold text-[#581c87] tracking-wider block mb-1">
                Acquisition Cost
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#3b0764] font-sofiasanscondensed">
                $20–$33 <span className="text-sm font-semibold">CAD</span>
              </div>
              <p className="text-xs font-medium text-[#581c87]/80 mt-1">
                per Invisalign lead
              </p>
            </div>

            <div className="bg-[#f5f0ff] border-2 border-purple-200/80 rounded-xl p-5 text-center shadow-xs">
              <span className="text-xs uppercase font-bold text-[#581c87] tracking-wider block mb-1">
                Monthly Ad Spend
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#3b0764] font-sofiasanscondensed">
                $3,000 <span className="text-sm font-semibold">CAD</span>
              </div>
              <p className="text-xs font-medium text-[#581c87]/80 mt-1">
                monthly advertising budget
              </p>
            </div>

            <div className="bg-[#f5f0ff] border-2 border-purple-200/80 rounded-xl p-5 text-center shadow-xs">
              <span className="text-xs uppercase font-bold text-[#581c87] tracking-wider block mb-1">
                Starting Treatment
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#3b0764] font-sofiasanscondensed">
                $4,500+ <span className="text-sm font-semibold">CAD</span>
              </div>
              <p className="text-xs font-medium text-[#581c87]/80 mt-1">
                starting treatment price
              </p>
            </div>
          </div>

          {/* Main Pricing & Scenarios Table */}
          <div className="overflow-x-auto rounded-xl border-2 border-purple-200 shadow-sm">
            <table className="w-full text-left font-poppins border-collapse bg-[#f5f0ff] text-[#3b0764]">
              <thead>
                <tr className="bg-[#ebdfff] border-b-2 border-purple-200 text-[#2e0854]">
                  <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold">Metric / Commercial Parameter</th>
                  <th className="p-3.5 sm:p-4 text-sm sm:text-base font-bold text-right">Value / Projection</th>
                  <th className="p-3.5 sm:p-4 text-xs sm:text-sm font-semibold text-gray-700 hidden sm:table-cell">Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-200/70 text-xs sm:text-sm">
                <tr className="hover:bg-purple-100/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#2e0854]">
                    Starting Treatment Price
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-right text-base text-[#3b0764]">
                    CAD $4,500+
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700 hidden sm:table-cell">
                    Base aligner procedure tier
                  </td>
                </tr>

                <tr className="hover:bg-purple-100/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#2e0854]">
                    Monthly Advertising Budget
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-right text-base text-[#3b0764]">
                    CAD $3,000
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700 hidden sm:table-cell">
                    Dedicated patient acquisition spend
                  </td>
                </tr>

                <tr className="hover:bg-purple-100/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#2e0854]">
                    Cost Per Invisalign Lead
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-right text-base text-[#670ef7]">
                    CAD $20 – $33
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700 hidden sm:table-cell">
                    3–5 enquiries per CAD $100 spent
                  </td>
                </tr>

                <tr className="hover:bg-purple-100/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#2e0854]">
                    Projected Monthly Enquiries
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-right text-base text-[#3b0764]">
                    90 – 150 leads
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700 hidden sm:table-cell">
                    Implied at reported lead efficiency
                  </td>
                </tr>

                <tr className="hover:bg-purple-100/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-[#2e0854]">
                    Illustrative Conversion Rate
                  </td>
                  <td className="p-3.5 sm:p-4 font-bold text-right text-base text-[#3b0764]">
                    10%
                  </td>
                  <td className="p-3.5 sm:p-4 text-gray-700 hidden sm:table-cell">
                    9 – 15 accepted Invisalign cases
                  </td>
                </tr>

                <tr className="bg-[#ecdffe] font-bold text-[#2e0854] border-t-2 border-purple-300">
                  <td className="p-4 sm:p-5 text-sm sm:text-base">
                    Potential Monthly Gross Treatment Value
                  </td>
                  <td className="p-4 sm:p-5 text-right text-base sm:text-xl text-[#430b9e] font-extrabold">
                    CAD $40,500 – $67,500
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-gray-800 font-medium hidden sm:table-cell">
                    Illustrative commercial revenue scenario
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table Disclaimer */}
          <p className="mt-3 text-xs md:text-sm font-poppins text-gray-500 italic leading-relaxed">
            * These are illustrative revenue scenarios, not confirmed treatment starts, clinic revenue or profit. Actual outcomes depend on lead quality, consultation attendance, treatment acceptance, and delivery.
          </p>
        </div>

        {/* 5. What Changed */}
        <div id="what-changed" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">
            What Changed
          </h2>
          <div className="space-y-4 text-base md:text-lg font-poppins text-gray-800 leading-relaxed">
            <p>
              The clinic moved beyond relying primarily on existing patients and referrals for Invisalign interest, establishing a more measurable way to attract prospective clear aligner patients and understand enquiry acquisition costs.
            </p>
            <p>
              A busy dental practice is not necessarily growing its most commercially important services. General patient volume can conceal missed opportunities in elective treatments such as Invisalign and implants.
            </p>
          </div>
        </div>

        {/* 6. The Takeaway */}
        <div id="takeaway" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">
            The Takeaway
          </h2>
          <blockquote className="italic max-w-[95%] mx-auto text-gray-900 text-xl md:text-2xl md:text-center border-l-4 border-[#670ef7] pl-4 py-2 bg-purple-50/40 rounded-r-lg">
            “A dental clinic does not necessarily need more patients across every service. It needs a strategy that attracts the right patients for the treatments it wants to grow.”
          </blockquote>
        </div>

        {/* Bottom Service Badges */}
        <div className="pt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/local-seo" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Local Dental SEO</Link>
          <Link href="/services/google-ads" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Google Ads</Link>
          <Link href="/services/conversion-rate-optimization" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Conversion Rate Optimization</Link>
          <Link href="/services/analytics-tracking" className="bg-purple-100 text-[#3b0764] hover:bg-purple-200 transition-colors px-3 py-1 rounded-full text-xs font-semibold">Analytics &amp; Tracking</Link>
        </div>

        {/* CTA Card */}
        <section id="cta" className="relative z-10 overflow-hidden bg-[#670ef7] rounded-2xl py-10 px-8 mt-16 shadow-lg">
          <div className="">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-2/3">
                <div className="text-center lg:text-left">
                  <h3 className="mt-0 mb-3 font-sofiasanscondensed tracking-wide font-bold leading-tight text-2xl sm:text-3xl md:text-4xl text-white">
                    Want a Similar Invisalign Acquisition Strategy for Your Practice in the US or Canada?
                  </h3>
                  <p className="w-full text-sm sm:text-base font-medium text-white/90 font-poppins">
                    From Invisalign to dental implants, we build predictable patient acquisition funnels.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3 mt-6 lg:mt-0">
                <div className="text-center">
                  <Link
                    href="/contact-us"
                    className="font-semibold rounded-lg mx-auto text-base inline-flex items-center justify-center bg-white text-[#670ef7] py-3.5 px-8 hover:bg-gray-100 transition shadow-md"
                  >
                    Talk to a Dental Marketing Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute top-0 right-0 -z-10 opacity-10">
            <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="white" />
            </svg>
          </span>
        </section>
      </div>

      {/* Sticky Desktop Navigation Sidebar */}
      <aside className="w-1/3 sticky top-32 hidden md:flex justify-start items-start h-max pl-4">
        <div className="border-l-2 border-gray-200 pl-4 py-2 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Case Study Navigation
          </p>
          <nav className="space-y-2.5">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`block text-sm font-medium transition-colors ${
                  activeId === sec.id
                    ? 'text-[#670ef7] font-bold translate-x-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {sec.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
}

