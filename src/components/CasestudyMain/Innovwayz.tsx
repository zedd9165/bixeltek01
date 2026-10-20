'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

const sections = [
  { id: 'about', label: 'About InnovWayz' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'build', label: 'The Bixeltek Build' },
  { id: 'indexing', label: 'SEO & Indexing' },
  { id: 'delivered', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
  { id: 'cta', label: 'Start a Project' },
];

type BuildStep = {
  title: string;
  description: string;
  points: string[];
  outcome: string;
};

/* Step numbers are generated from the array index, so don't type "1." in titles.
   Add or remove steps freely: numbering and layout adjust automatically. */
const buildSteps: BuildStep[] = [
  {
    title: 'Rebuilding the Website with Next.js',
    description:
      'We rebuilt InnovWayz’s existing website around a modern Next.js foundation and Tailwind CSS. The aim was to create a clearer, responsive experience that could support a broad enterprise service portfolio without making future changes unnecessarily difficult.',
    points: [
      'A refreshed layout and responsive page structure',
      'Reusable styling patterns built with Tailwind CSS',
      'A maintainable foundation for adding and improving pages',
    ],
    outcome:
      'The site gained a more flexible front end that could evolve with InnovWayz’s services and business priorities.',
  },
  {
    title: 'Creating a Reusable Service-Page System',
    description:
      'InnovWayz offers services across cybersecurity, PDPL compliance, talent acquisition, digitalization, enterprise applications and IT operations. We used reusable, data-driven page components to build out the service pages while keeping each page focused on its own offering.',
    points: [
      'Shared components for consistent page structure and presentation',
      'Service-specific content instead of one generic description for every offering',
      'A pattern that makes future service updates easier to maintain',
    ],
    outcome:
      'New service content could fit into a consistent system without treating each page as a separate one-off build.',
  },
  {
    title: 'Improving the Journey from Service Discovery to Enquiry',
    description:
      'We applied conversion-focused principles to help visitors understand the offer, scan important information and find a clear next step. The work focused on the user journey and page clarity rather than relying on visual changes alone.',
    points: [
      'Clearer content hierarchy and scannable service information',
      'More deliberate calls to action across key decision points',
      'Consistent navigation and contact paths across the site',
    ],
    outcome:
      'The redesigned experience gives prospective clients a clearer route from evaluating a service to contacting InnovWayz.',
  },
  {
    title: 'Connecting Enquiries with Nodemailer',
    description:
      'We implemented Node.js email handling with Nodemailer so website enquiry submissions could be delivered through the intended email workflow.',
    points: [
      'Server-side email sending for website enquiry forms',
      'A connection between the website contact journey and the team’s inbox workflow',
      'A more practical hand-off from an online enquiry to a human response',
    ],
    outcome:
      'The website was equipped with a working email pathway for contact submissions, rather than relying on a visual form alone.',
  },
  {
    title: 'Addressing the PDPL Page Indexing Issue',
    description:
      'The PDPL service page was not appearing in search results as expected. We investigated its SEO readiness and discoverability, worked through the relevant indexing issues, and checked that the page was indexed.',
    points: [
      'Review of the page’s indexability and page-level SEO signals',
      'Attention to how the page fits into the wider service-page structure',
      'A post-fix check that the PDPL page could be found in the search index',
    ],
    outcome:
      'The PDPL page is now indexed. This confirms indexation for that URL; it does not, by itself, prove a traffic or ranking increase.',
  },
  {
    title: 'Working Through the Project in Reviewable Stages',
    description:
      'We kept communication open throughout the project, checking requirements and sharing progress across the structure, page content, implementation, functional checks and launch preparation.',
    points: [
      'Aligning on the service structure and project priorities',
      'Reviewing page content and design as the website took shape',
      'Checking forms, page behaviour and SEO-related changes before hand-off',
    ],
    outcome:
      'Client feedback could be addressed during the work, rather than being left until the final hand-off.',
  },
];

const deliverables = [
  {
    area: 'Website rebuild',
    detail: 'A refreshed, responsive website built with Next.js and Tailwind CSS.',
  },
  {
    area: 'Service pages',
    detail: 'Service-specific pages built from reusable, data-driven components.',
  },
  {
    area: 'Conversion experience',
    detail: 'Clearer content hierarchy, calls to action and enquiry paths.',
  },
  {
    area: 'Email handling',
    detail: 'Nodemailer integration for website enquiry email delivery.',
  },
  {
    area: 'Search indexation',
    detail: 'The PDPL service page was addressed and is now indexed.',
  },
  {
    area: 'Project collaboration',
    detail: 'Client reviews and communication across planning, build, checks and hand-off.',
  },
];

export default function InnovwayzCaseStudy() {
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0]?.id ?? 'about';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= 160) current = section.id;
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-7xl space-x-0 px-6 py-16 md:space-x-8 md:py-20">
      <div className="w-full space-y-12 md:w-2/3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/services/web-design" className="hover:underline">Website Development</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="about" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            A More Flexible Website for a Broad Enterprise Service Portfolio
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              InnovWayz is an IT services and consulting company offering solutions across cybersecurity, <Link href="/services/pdpl-consulting" className="font-semibold text-[#670ef7] hover:underline">PDPL compliance</Link>, talent acquisition, enterprise applications, digitalization and IT operations. Its website needs to explain a wide range of specialist services to business decision-makers.
            </p>
            <p>
              Bixeltek rebuilt the existing website with <Link href="/services/web-design" className="font-semibold text-[#670ef7] hover:underline">Next.js and modern Web Development</Link>, created a reusable system for the service pages, improved key enquiry journeys through <Link href="/services/conversion-rate-optimization" className="font-semibold text-[#670ef7] hover:underline">conversion-rate optimization (CRO)</Link>, and added email handling for contact submissions.
            </p>
            <p>
              The project also included a focused SEO task: resolving an indexing issue affecting the PDPL service page and verifying that it became indexed via <Link href="/technical-seo" className="font-semibold text-[#670ef7] hover:underline">technical SEO optimization</Link>.
            </p>
          </div>
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Challenge</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The brief was larger than a visual refresh. InnovWayz needed a complete website rebuild that could present its service portfolio clearly and remain practical to maintain as the business evolved.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li><span className="font-semibold">A wide service portfolio:</span> each offering needed a dedicated explanation, without making the whole site feel fragmented.</li>
              <li><span className="font-semibold">Maintainability:</span> repeating page structures needed a reusable component system so updates would not require rebuilding each page independently.</li>
              <li><span className="font-semibold">A clearer enquiry path:</span> the website needed to guide visitors from understanding a service to contacting the team.</li>
              <li><span className="font-semibold">Email functionality:</span> contact submissions needed a working server-side email path.</li>
              <li><span className="font-semibold">Search discoverability:</span> the PDPL page was not being indexed as expected and needed focused investigation.</li>
            </ul>
          </div>
        </div>

        <section id="build" className="scroll-mt-32 py-6">
          <h2 className="mb-2 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">The Bixeltek Build</h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-700 font-poppins">
            We approached the revamp as a connected website system: a modern technical foundation, reusable service-page components, clearer conversion paths, functional enquiry handling and a focused SEO fix.
          </p>

          {/* Numbered steps: no timeline rail. Number sits above the content, full column width. */}
          <div className="space-y-14">
            {buildSteps.map((step, index) => (
              <article key={step.title}>
                {/* Number header with a rule that runs the full width */}
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
                <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-[#670ef7] font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="rounded-lg border border-purple-100 bg-purple-50/60 px-4 py-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">What this achieved</p>
                  <p className="text-sm leading-relaxed text-gray-800 font-poppins">{step.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div id="indexing" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">Getting the PDPL Page Indexed</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              An important service page only helps organic discovery when search engines can find and index it. InnovWayz’s PDPL page was not appearing in the index as expected, so we treated it as a specific <Link href="/technical-seo" className="font-semibold text-[#670ef7] hover:underline">technical SEO</Link> issue instead of assuming that more copy alone would solve it.
            </p>
            <p>
              We reviewed the page’s indexability and SEO setup, worked through the relevant discoverability issue, then checked its indexed status. The page is now indexed, giving the service a searchable destination.
            </p>
            <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm italic text-gray-600">
              Indexation is an important technical milestone, but it is not a guarantee of high rankings or increased organic traffic. Those outcomes require separate measurement over time.
            </p>
          </div>
        </div>

        <div id="delivered" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">What Changed</h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project delivered a more maintainable website foundation, dedicated service content, a working email path for enquiries and a verified indexation outcome for the PDPL page. We are not attaching a traffic or conversion percentage because no before-and-after analytics figures have been provided for this case study.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4">Area</th>
                  <th className="p-4">Delivered</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item, index) => (
                  <tr key={item.area} className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 align-top font-semibold text-gray-900">{item.area}</td>
                    <td className="p-4 text-gray-700">
                      <MdCheckCircle className="mr-2 inline-block text-lg text-[#670ef7]" />
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="takeaway" className="scroll-mt-32 pb-6">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-3 pl-4 text-xl italic text-gray-900 md:text-2xl">
            A service-led website should do more than explain what a company offers. It should make those services easier to navigate, easier to maintain and easier to act on.
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For InnovWayz, that meant combining a Next.js rebuild, a reusable service-page system, clearer conversion paths, server-side email handling and targeted SEO troubleshooting. The result is a stronger digital foundation for presenting its expertise and helping prospective clients take the next step.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          {[
            { label: 'Website Revamp', href: '/services/web-design' },
            { label: 'Next.js Development', href: '/services/web-applications' },
            { label: 'Tailwind CSS', href: '/services/web-design' },
            { label: 'Service Page Architecture', href: '/services/build' },
            { label: 'Conversion-Focused UX', href: '/services/conversion-rate-optimization' },
            { label: 'Technical SEO', href: '/technical-seo' },
            { label: 'PDPL Consulting', href: '/services/pdpl-consulting' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition hover:bg-[#670ef7] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <section id="cta" className="relative mt-10 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need a website that makes your services easier to understand—and easier to enquire about?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base font-poppins">
                Bixeltek builds tailored websites with scalable page systems, thoughtful user journeys and practical technical foundations.
              </p>
            </div>
            <Link href="/contact-us" className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
              Discuss Your Website
            </Link>
          </div>
          <div aria-hidden="true" className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
        </section>
      </div>

      <aside className="sticky top-32 hidden h-max w-1/3 justify-start self-start pl-4 md:flex">
        <div className="border-l-2 border-gray-200 py-2 pl-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Case Study Navigation</p>
          <nav className="space-y-2.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm transition-colors ${activeId === section.id ? 'translate-x-1 font-bold text-[#670ef7]' : 'font-medium text-gray-600 hover:text-black'}`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
}