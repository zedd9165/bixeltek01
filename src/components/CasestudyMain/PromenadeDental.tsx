'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';
import promenadeImg from '@/assets/promenade-casestudy.png';

const sections = [
  { id: 'overview', label: 'About Promenade Dental' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'build', label: 'The Website Rebuild' },
  { id: 'cro', label: 'CRO & Patient Journey' },
  { id: 'visibility', label: 'Online Visibility' },
  { id: 'delivered', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
  { id: 'cta', label: 'Build Your Website' },
];

type BuildStep = {
  title: string;
  description: string;
  points: string[];
  outcome: string;
  challenge?: {
    problem: string;
    solution: string;
  };
};

const buildSteps: BuildStep[] = [
  {
    title: '1. Rebuilding the Website on a Modern Stack',
    description:
      'We rebuilt Promenade Dental’s existing website with Next.js and Tailwind CSS, replacing the older implementation with a more flexible foundation for the practice’s online presence.',
    points: [
      'A responsive front end designed for desktop and mobile visits',
      'Reusable styling and layout patterns for a consistent experience',
      'A structure that is easier to maintain and extend as the practice evolves',
    ],
    outcome:
      'The website moved to a modern, maintainable foundation instead of carrying the constraints of the previous implementation forward.',
    challenge: {
      problem:
        'A rebuild can improve appearance but still leave the business tied to a structure that is difficult to expand or maintain.',
      solution:
        'We treated the work as a technical rebuild, creating a component-led front end rather than simply reproducing the old pages in a new visual style.',
    },
  },
  {
    title: '2. Creating a Scalable Service-Page System',
    description:
      'Dental practices need to explain different treatments without making each new service page a separate development project. We created reusable page patterns that allow service-specific content to sit within a consistent website theme.',
    points: [
      'Reusable components for service-page sections and layouts',
      'Content structured around each treatment rather than repeated generic copy',
      'A foundation for adding or expanding services without rebuilding the entire site',
    ],
    outcome:
      'The practice has a more scalable structure for growing its service content while keeping the experience consistent.',
  },
  {
    title: '3. Organising Services Around Patient Needs',
    description:
      'Patients often arrive with a specific question or concern—not a full understanding of a dental practice’s service catalogue. We organised the experience to make core care areas easier to explore and understand.',
    points: [
      'Clear routes into family and preventive, cosmetic, restorative and emergency care',
      'Dedicated content for relevant treatment needs and patient questions',
      'Clearer connections between service information and the next step',
    ],
    outcome:
      'Visitors can move from a concern or treatment interest toward more relevant information instead of having to interpret a generic list of services.',
  },
  {
    title: '4. Applying Conversion Rate Optimization (CRO) Principles',
    description:
      'A dental website should help patients feel informed enough to call or book. We applied CRO principles to make the journey from service discovery to appointment action more direct.',
    points: [
      'Clear calls to action around booking and contacting the practice',
      'Trust-building information placed within the decision journey',
      'A more deliberate hierarchy for service details, patient reassurance and next steps',
    ],
    outcome:
      'The experience is structured around the action a visitor may want to take—not just around presenting information.',
    challenge: {
      problem:
        'A visitor may understand that a practice offers a treatment but still hesitate if booking options, trust information or the next step are hard to find.',
      solution:
        'We used conversion-focused page hierarchy and clearer appointment pathways to reduce avoidable friction. These are CRO improvements to the journey; no measured conversion uplift is claimed without before-and-after analytics.',
    },
  },
  {
    title: '5. Building a Stronger Foundation for Local Discovery',
    description:
      'Promenade Dental serves patients in Chandler, Arizona, including nearby communities such as Fulton Ranch, Ocotillo and Sun Lakes. The site needed a structure that could communicate its services and local relevance clearly to visitors and search engines.',
    points: [
      'Service-focused page structure with clear headings and page purposes',
      'Local business and contact details available within the patient journey',
      'A better foundation for expanding relevant service and location content over time',
    ],
    outcome:
      'The rebuilt site gives the practice a clearer base for communicating local relevance and developing organic visibility. Traffic or ranking growth is not quantified here because verified before-and-after figures were not provided.',
  },
  {
    title: '6. Preparing the Site for Ongoing Improvement',
    description:
      'A website rebuild is not finished when the pages look right. The experience also needs to work across screen sizes and leave the practice with a structure that can keep evolving.',
    points: [
      'Review of page layouts and key actions across common screen sizes',
      'Consistent reusable components across the site',
      'A foundation for future service additions, content changes and conversion improvements',
    ],
    outcome:
      'Promenade Dental can build on the new website structure as its priorities and service content change, without treating every update as a full redesign.',
  },
];

const deliverables = [
  {
    area: 'Technology',
    detail: 'Existing website rebuilt using Next.js and Tailwind CSS.',
  },
  {
    area: 'Scalable architecture',
    detail: 'Reusable page and component patterns that support future service expansion.',
  },
  {
    area: 'Service discovery',
    detail: 'Clearer routes to treatment information and practice services.',
  },
  {
    area: 'Conversion Rate Optimization',
    detail: 'More deliberate calls to action and patient journeys toward contacting or booking.',
  },
  {
    area: 'Online presence',
    detail: 'A clearer page structure and local-business context to support ongoing search visibility work.',
  },
  {
    area: 'Maintainability',
    detail: 'A website foundation designed to accommodate future content and service changes.',
  },
];

export default function PromenadeDentalCaseStudy() {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0]?.id ?? 'overview';
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
          <span>Bixeltek</span>
          <span>/</span>
          <span>Dental Website Development</span>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            A More Scalable Digital Experience for Promenade Dental
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Promenade Dental is a family and cosmetic dental practice in Chandler, Arizona, serving patients across a range of needs—from preventive and cosmetic care to restorative treatment, emergency dentistry and sleep-apnea solutions. Its website needs to help people understand their options and find a practical next step.
            </p>
            <p>
              Bixeltek rebuilt the existing website using Next.js and Tailwind CSS, moving it from an older technical foundation to a more maintainable and scalable system. The work combined reusable service-page patterns with a clearer patient journey and conversion-focused improvements.
            </p>
            <p>
              The goal was not just a newer-looking website. It was to give the practice a stronger online presence and a platform that could support future services, content and ongoing optimization.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={promenadeImg}
            alt="Promenade Dental Website Rebuild Showcase"
            className="h-auto w-full object-cover"
          />
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Challenge</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The existing website needed more than a visual refresh. It needed a modern technical foundation, clearer service discovery and a page structure that could grow with the practice.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li><span className="font-semibold">An older technology base:</span> the rebuild needed to make the site easier to maintain and evolve.</li>
              <li><span className="font-semibold">Room to expand:</span> new services should fit into the website without requiring a separate, one-off layout each time.</li>
              <li><span className="font-semibold">Patient decision-making:</span> visitors needed a clearer route from exploring a treatment to contacting or booking with the practice.</li>
              <li><span className="font-semibold">Online discoverability:</span> service information and local context needed a clearer structure to support search visibility.</li>
              <li><span className="font-semibold">Conversion readiness:</span> the site needed to guide interested visitors toward meaningful actions, not just present information.</li>
            </ul>
          </div>
        </div>

        <section id="build" className="scroll-mt-32 py-6">
          <h2 className="mb-2 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">The Bixeltek Build</h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-700 font-poppins">
            We approached the project as a connected system: modern technology, reusable service pages, a patient-focused information structure, CRO principles and a foundation for ongoing local search improvements.
          </p>
          <div className="relative ml-1 space-y-12 border-l-4 border-[#670ef7] md:ml-4">
            {buildSteps.map((step, index) => (
              <div key={step.title} className="relative pl-5 md:pl-10">
                <div className="absolute -left-[12px] top-1 z-10 h-5 w-5 rounded-full border-4 border-white bg-[#670ef7]" />
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Step {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 font-sofiasanscondensed">{step.title}</h3>
                <p className="mb-3 max-w-2xl leading-relaxed text-gray-700 font-poppins">{step.description}</p>
                <ul className="mb-4 max-w-2xl list-disc space-y-2 pl-5 text-gray-700 font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                {step.challenge && (
                  <div className="mb-4 max-w-2xl overflow-hidden rounded-lg border border-gray-200">
                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">The Challenge</p>
                      <p className="text-sm leading-relaxed text-gray-700 font-poppins">{step.challenge.problem}</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">How We Addressed It</p>
                      <p className="text-sm leading-relaxed text-gray-700 font-poppins">{step.challenge.solution}</p>
                    </div>
                  </div>
                )}
                <div className="max-w-2xl rounded-lg border border-purple-100 bg-purple-50/60 px-4 py-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">What this achieved</p>
                  <p className="text-sm leading-relaxed text-gray-800 font-poppins">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div id="cro" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">Using CRO to Improve the Patient Journey</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Conversion Rate Optimization (CRO) starts with a simple question: once someone reaches the website, can they understand the care available and confidently take the next step?
            </p>
            <p>
              For a dental practice, that journey can include reviewing a treatment, evaluating the dentist and practice, understanding what happens at a first visit, and then choosing to call or schedule online. We used that journey to guide content hierarchy, calls to action and the placement of trust-building information.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Make booking and contact options easier to locate.</li>
              <li>Connect treatment information to a relevant next step.</li>
              <li>Bring practice, team and patient-trust details into the decision journey.</li>
              <li>Keep the experience clear across desktop and mobile layouts.</li>
            </ul>
            <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm italic text-gray-600">
              These are conversion-focused design and content improvements. No percentage increase in bookings or conversion rate is claimed because verified before-and-after analytics were not provided for this case study.
            </p>
          </div>
        </div>

        <div id="visibility" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">A Stronger Foundation for Online Visibility</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The rebuilt website presents Promenade Dental’s services through clearer page structure and more focused treatment information. This gives visitors direct paths into the care they are looking for and gives the practice a better foundation for maintaining and expanding its organic search presence.
            </p>
            <p>
              Local context matters for a dental practice. Promenade Dental serves Chandler and nearby communities, including Fulton Ranch, Ocotillo and Sun Lakes. Keeping service content, practice details and relevant local information connected helps the website communicate where the practice operates and what it offers.
            </p>
            <p>
              For businesses planning a similar project, Bixeltek’s <Link href="/services/web-design" className="font-semibold text-[#670ef7] underline decoration-purple-300 underline-offset-4 hover:decoration-[#670ef7]">website design and development services</Link> combine custom implementation with the structure needed to support future growth.
            </p>
          </div>
        </div>

        <div id="delivered" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">What Changed</h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project delivered a modern technical foundation, a reusable approach to service pages and a website journey more deliberately structured around patient questions and appointment actions. These are qualitative project outcomes; verified before-and-after traffic, ranking or booking figures were not supplied.
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
            A dental website should do more than look current. It should make services easier to discover, appointments easier to pursue and future improvements easier to deliver.
          </blockquote>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">Website Rebuild</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">Next.js</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">Tailwind CSS</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">CRO</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">SEO Foundations</span>
        </div>

        <section id="cta" className="relative z-10 mt-12 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Looking for a Similar Dental Website Rebuild in the US or Canada?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base font-poppins">
                We help dental practices modernize older websites, organize treatment pages, and create clearer patient journeys with scalable development and CRO principles.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-center text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100"
              >
                Discuss Your Website Project
              </Link>
            </div>
          </div>
        </section>
      </div>

      <aside className="sticky top-32 hidden h-max w-1/3 items-start justify-start pl-4 md:flex">
        <div className="space-y-3 border-l-2 border-gray-200 py-2 pl-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Case Study Navigation</p>
          <nav className="space-y-2.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm font-medium transition-colors ${
                  activeId === section.id
                    ? 'translate-x-1 font-bold text-[#670ef7]'
                    : 'text-gray-600 hover:text-black'
                }`}
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
