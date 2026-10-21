'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import petGroomingImg from '@/assets/pet-grooming-case-study.jpg';
import { MdCheckCircle } from 'react-icons/md';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'local-seo-cro', label: 'Local SEO & CRO' },
  { id: 'nuxt-migration', label: 'The Nuxt 4 Migration' },
  { id: 'engineering', label: 'Engineering Challenges' },
  { id: 'delivered', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
];

type BuildStep = {
  number: string;
  title: string;
  description: string;
  points: string[];
  outcome: string;
};

const buildSteps: BuildStep[] = [
  {
    number: '01',
    title: 'Identify and address the existing SEO issues',
    description:
      'We started by reviewing the existing website to understand what could be limiting its search visibility. The work focused on the website’s SEO foundation and the way its pages communicated relevance to search engines and potential customers.',
    points: [
      'Reviewed the existing website structure and on-page SEO foundations.',
      'Identified opportunities to improve page relevance and location targeting.',
      'Considered how the site structure could better support organic discovery.',
      'Connected the SEO work to the information customers need before enquiring.',
    ],
    outcome:
      'A clearer SEO improvement plan based on the existing website’s problems, rather than adding pages without addressing the underlying issues.',
  },
  {
    number: '02',
    title: 'Build a stronger city- and state-specific SEO structure',
    description:
      'A local service business needs to reach customers across the locations it serves. We developed city-specific and state-specific pages to give the website a more relevant structure for geographically targeted searches.',
    points: [
      'Created dedicated pages targeting relevant cities and states.',
      'Structured location content around the geographic areas the business serves.',
      'Improved the relationship between service information and location relevance.',
      'Built a more scalable foundation for expanding the website’s local search coverage.',
    ],
    outcome:
      'A website structure designed to support broader geographic visibility across the US, with location-focused pages that can serve distinct search needs.',
  },
  {
    number: '03',
    title: 'Improve the customer journey with CRO',
    description:
      'Search visibility is only one part of customer acquisition. Visitors also need a straightforward way to understand the service and take the next step. We reviewed the conversion journey and simplified the enquiry experience.',
    points: [
      'Reduced the number of steps required to complete the enquiry form.',
      'Made the path from discovering the service to submitting an enquiry more direct.',
      'Considered usability and friction points throughout the customer journey.',
      'Aligned the website experience more closely with the goal of generating enquiries.',
    ],
    outcome:
      'A simpler conversion path with fewer steps between a potential customer’s visit and their decision to enquire. We do not attribute a specific conversion-rate increase without verified measurement data.',
  },
  {
    number: '04',
    title: 'Create a more maintainable frontend structure',
    description:
      'Supporting a growing location-based website requires a frontend structure that can accommodate different pages without making every update a separate implementation. We worked on reusable patterns to support consistency and maintainability.',
    points: [
      'Organised page structures around reusable implementation patterns.',
      'Maintained consistency across the website’s location-focused experiences.',
      'Considered how shared components and page-specific content should work together.',
      'Prepared the frontend for the requirements of the framework migration.',
    ],
    outcome:
      'A more structured foundation for maintaining the website and supporting future page and frontend changes.',
  },
  {
    number: '05',
    title: 'Migrate the website from Nuxt 2 to Nuxt 4',
    description:
      'The project later required a migration from Nuxt 2 to Nuxt 4. This was not simply a framework-version change: the existing website’s functionality and expected behaviour needed to continue working throughout the transition.',
    points: [
      'Updated the frontend to work with the Nuxt 4 application structure and conventions.',
      'Replaced outdated implementation patterns where they no longer fit the newer framework.',
      'Reviewed existing functionality while updating the underlying frontend implementation.',
      'Addressed issues discovered during migration and validation.',
    ],
    outcome:
      'A migrated Nuxt 4 frontend with the focus on preserving existing functionality and maintaining the expected user experience.',
  },
  {
    number: '06',
    title: 'Resolve hydration issues and coordinate with the backend team',
    description:
      'The migration also required attention to rendering behaviour and the integration between the frontend and backend. Hydration issues needed to be investigated, while frontend changes had to remain compatible with the backend team’s expectations.',
    points: [
      'Investigated hydration mismatches between server-rendered markup and client-side rendering.',
      'Updated frontend patterns contributing to framework compatibility problems.',
      'Coordinated with the backend team around API integration and expected behaviour.',
      'Validated affected functionality as frontend changes were introduced.',
    ],
    outcome:
      'A more stable migration process with closer alignment between rendering behaviour, frontend functionality and backend integration.',
  },
];

const deliverables = [
  {
    title: 'SEO foundation review',
    description:
      'Identified issues and improvement opportunities in the existing website before expanding its search strategy.',
  },
  {
    title: 'Location-focused SEO',
    description:
      'Created city- and state-specific pages to support geographically relevant organic search visibility.',
  },
  {
    title: 'Conversion journey improvements',
    description:
      'Simplified the enquiry form and reduced the steps required for a visitor to get in touch.',
  },
  {
    title: 'UX improvements',
    description:
      'Refined the experience around how visitors discover services, understand the offering and take action.',
  },
  {
    title: 'Nuxt 4 migration',
    description:
      'Updated the frontend from Nuxt 2 to Nuxt 4 while working to preserve existing website functionality.',
  },
  {
    title: 'Rendering and integration fixes',
    description:
      'Addressed hydration issues and coordinated frontend changes with the client’s backend team.',
  },
];

const challenges = [
  {
    title: 'An existing website with SEO limitations',
    description:
      'Expanding organic visibility required more than publishing additional content. We first needed to identify weaknesses in the existing website and improve its SEO foundation.',
  },
  {
    title: 'Reaching customers across different locations',
    description:
      'A single general service page has limited flexibility for communicating geographic relevance. City- and state-specific pages gave the website a more location-oriented structure.',
  },
  {
    title: 'Reducing friction in the enquiry process',
    description:
      'A potential customer should not have to navigate unnecessary steps to make an enquiry. We simplified the form journey to make the next action more straightforward.',
  },
  {
    title: 'Modernising the framework without losing functionality',
    description:
      'Moving from Nuxt 2 to Nuxt 4 meant reviewing implementation patterns, rendering behaviour and existing functionality instead of treating the upgrade as a simple version change.',
  },
];

const localSeoCroAreas = [
  {
    step: '01 / Search visibility',
    title: 'Addressing the existing SEO foundation',
    description:
      'We reviewed the existing website and identified SEO issues before developing a more location-oriented structure. This helped connect the website’s technical and on-page foundations with its broader organic search objectives.',
    points: [
      'Reviewed the existing website for SEO improvement opportunities.',
      'Considered page structure, relevance and geographic targeting.',
      'Focused on creating a stronger foundation for organic discovery.',
    ],
  },
  {
    step: '02 / Location-focused pages',
    title: 'Creating city- and state-specific landing pages',
    description:
      'We built dedicated city and state pages to support the business’s geographic reach. Rather than relying on one general page to address every location, the website could present content aligned with specific service areas.',
    points: [
      'Developed pages for targeted cities and states.',
      'Created a scalable structure for location-specific content.',
      'Supported a more geographically relevant organic search strategy.',
    ],
  },
  {
    step: '03 / Conversion rate optimization',
    title: 'Reducing the steps between interest and action',
    description:
      'Bringing visitors to a website is not enough if the enquiry process creates unnecessary friction. We simplified the form journey by reducing the number of steps users needed to complete, while improving the overall path from service discovery to enquiry.',
    points: [
      'Reduced the number of steps in the enquiry form.',
      'Reviewed the customer journey for avoidable friction.',
      'Focused on making the intended next action clearer.',
    ],
  },
];

const preserveItems = [
  {
    title: 'Existing functionality',
    description:
      'Established website features needed to continue behaving as expected.',
  },
  {
    title: 'Rendering behaviour',
    description:
      'Server-rendered output and client-side hydration needed to remain compatible.',
  },
  {
    title: 'Application integrations',
    description:
      'Frontend changes needed to respect the data and behaviour expected by connected systems.',
  },
  {
    title: 'Maintainability',
    description:
      'The updated code needed to follow implementation patterns suitable for the newer framework.',
  },
];

export default function USPetGroomingCaseStudy() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = section.id;
            break;
          }
        }
      }
      if (current) setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-7xl space-x-0 px-6 py-16 md:space-x-8 md:py-20">
      <div className="w-full space-y-12 md:w-2/3">
        {/* Breadcrumb Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/services/seo-services" className="hover:underline">Local SEO &amp; CRO</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        {/* 01 Overview */}
        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Connecting Local Search Visibility, Conversion-Focused UX and Modern Frontend Engineering
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              We worked with a US pet grooming business that needed a stronger website foundation for organic discovery and customer enquiries. The work combined an SEO review, location-focused page development, conversion rate optimization (CRO), user experience improvements and, later, a migration from Nuxt 2 to Nuxt 4.
            </p>
            <p>
              These workstreams addressed different parts of the same customer journey. <Link href="/services/seo-services" className="font-medium text-[#670ef7] hover:underline">SEO</Link> helped shape how the website could be discovered, <Link href="/services/conversion-rate-optimization" className="font-medium text-[#670ef7] hover:underline">CRO</Link> informed how visitors could take action, and <Link href="/services/custom-app-development" className="font-medium text-[#670ef7] hover:underline">frontend engineering</Link> supported the website’s functionality and maintainability.
            </p>
            <p className="border-l-4 border-[#670ef7] bg-purple-50/60 py-2 pl-4 font-semibold text-gray-900">
              The objective was to connect local discovery, enquiry UX and frontend reliability into one coherent website system.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Business</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">US Pet Grooming Business</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">A local service business targeting customers across multiple geographic areas.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Project Focus</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">SEO, CRO &amp; Nuxt Migration</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">Search visibility, enquiry experience and frontend reliability.</p>
            </div>
          </div>
        </div>

        {/* Project Showcase Image */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={petGroomingImg}
            alt="Website project for a US pet grooming business"
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        {/* 02 Challenge */}
        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: Supporting Both Discovery and Conversion
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The original website had SEO issues that limited the effectiveness of its search foundation. At the same time, the customer journey needed attention: improving the experience meant helping visitors find relevant information and making it easier for them to submit an enquiry.
            </p>
            <p>
              As the project evolved, the technical requirements grew too. The move from Nuxt 2 to Nuxt 4 required changes to frontend implementation patterns, careful handling of hydration issues and coordination with the backend team.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">
                  {challenge.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 03 Local SEO and CRO */}
        <div id="local-seo-cro" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Local SEO &amp; CRO: Building a Useful Path from Search to Enquiry
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            Our SEO and CRO work focused on two connected questions: how could the website become more relevant to customers searching in different locations, and how could those visitors take the next step with less friction?
          </p>

          <div className="space-y-6">
            {localSeoCroAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-gray-200 bg-purple-50/30 p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">
                  {area.step}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 font-sofiasanscondensed md:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-700 font-poppins">
                  {area.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {area.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-700 font-poppins">
                      <MdCheckCircle
                        className="mt-1 shrink-0 text-[#670ef7]"
                        size={18}
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-gray-500 font-poppins">
            These changes were designed to improve the conditions for search discovery and enquiry completion. We are not publishing specific ranking, traffic or conversion-rate gains because verified figures have not been provided for this case study.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/conversion-rate-optimization"
              className="inline-flex items-center rounded-lg border border-purple-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#670ef7] shadow-sm transition hover:bg-purple-50"
            >
              Explore CRO Services
              <span className="ml-1.5" aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/services/web-design"
              className="inline-flex items-center rounded-lg border border-purple-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#670ef7] shadow-sm transition hover:bg-purple-50"
            >
              Website Design &amp; Development
              <span className="ml-1.5" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* 04 Nuxt 4 Migration */}
        <div id="nuxt-migration" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Nuxt 4 Migration: Modernising Without Breaking Functionality
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Migrating a live application from Nuxt 2 to Nuxt 4 involves more than changing the framework version. Existing functionality, rendering behaviour, data flows and integrations all need to be considered as the application moves to a newer framework structure.
            </p>
            <p>
              We updated the frontend implementation to align with Nuxt 4, replaced patterns that no longer suited the newer framework and worked through issues encountered during validation. The objective was to modernise the application while preserving the behaviour the existing website depended on.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-purple-50/60 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl font-sofiasanscondensed">
              What the migration needed to preserve
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {preserveItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 05 Engineering Challenges */}
        <div id="engineering" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Engineering Challenges: Resolving Hydration &amp; Backend Alignment
          </h2>

          <p className="text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            Framework migrations can expose issues that were not obvious in the previous implementation. In this project, hydration behaviour and frontend/backend coordination required particular attention.
          </p>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-[#670ef7] bg-purple-50/30 py-3 pl-5 md:pl-7 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">
                Handling hydration mismatches
              </h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700 font-poppins">
                Hydration problems occur when the markup generated on the server does not match what the client-side application expects to render. We investigated these issues during the migration and adjusted frontend implementation patterns where required to improve compatibility between server and client rendering.
              </p>
            </div>

            <div className="border-l-4 border-[#670ef7] bg-purple-50/30 py-3 pl-5 md:pl-7 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">
                Replacing outdated framework patterns
              </h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700 font-poppins">
                Existing code cannot always be carried forward unchanged when moving between major framework generations. We reviewed and replaced patterns that were no longer appropriate for the Nuxt 4 implementation while keeping the intended application behaviour in view.
              </p>
            </div>

            <div className="border-l-4 border-[#670ef7] bg-purple-50/30 py-3 pl-5 md:pl-7 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">
                Coordinating with the backend team
              </h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700 font-poppins">
                Frontend changes can affect how data is requested, processed and displayed. We coordinated with the client’s backend team during the migration so that frontend updates continued to work with expected backend responses and application flows.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white md:p-8 border border-purple-500/20 shadow-md">
            <p className="text-xs font-bold uppercase tracking-wider text-purple-400 font-poppins">
              Engineering principle
            </p>
            <p className="mt-3 text-lg font-medium leading-relaxed md:text-xl font-sofiasanscondensed">
              &ldquo;A successful migration is not just about running on a newer framework. It is about preserving the behaviour users and connected systems already rely on.&rdquo;
            </p>
          </div>
        </div>

        {/* 06 Deliverables */}
        <div id="delivered" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            What Changed: A Connected Set of SEO, UX and Engineering Improvements
          </h2>

          <p className="text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project brought together improvements to the website’s search foundation, geographic page structure, enquiry journey and frontend implementation. Each area addressed a different requirement, but all contributed to making the website more suitable for ongoing business and technical needs.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
              >
                <span className="font-sofiasanscondensed text-2xl font-bold text-[#670ef7]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-900 font-sofiasanscondensed">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Framework</p>
              <p className="mt-2 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">Nuxt 4</p>
              <p className="mt-1 text-sm text-gray-700">Migrated from Nuxt 2</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Local SEO</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">City &amp; State</p>
              <p className="mt-1 text-sm text-gray-700">Dedicated landing pages</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Customer Journey</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Shorter Funnel</p>
              <p className="mt-1 text-sm text-gray-700">Reduced enquiry friction</p>
            </div>
          </div>
        </div>

        {/* 07 Takeaway & Steps */}
        <div id="takeaway" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Takeaway
          </h2>

          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-2 pl-4 text-xl italic text-gray-900 md:text-2xl">
            For a local service business, organic visibility and conversion experience are closely connected. Location pages help the website address geographically relevant searches, while a simpler enquiry journey gives visitors a more direct way to take action.
          </blockquote>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The technical foundation matters too. Updating a live website to a newer framework requires attention to existing functionality, rendering and system integrations. Treating SEO, UX and engineering as connected workstreams helps create a website that is easier to discover, use and maintain.
            </p>
            <p>
              For businesses planning a similar project, our <Link href="/services/seo-services" className="font-medium text-[#670ef7] hover:underline">local SEO</Link> and <Link href="/services/custom-app-development" className="font-medium text-[#670ef7] hover:underline">custom web engineering</Link> services cover the structure and technical foundation needed to support both organic discovery and reliable application performance.
            </p>
          </div>

          {/* Six Implementation Steps with New Pattern */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold tracking-wide text-gray-900 font-sofiasanscondensed md:text-3xl">
              The Six Areas We Addressed
            </h3>

            <div className="my-8 space-y-14">
              {buildSteps.map((step, index) => (
                <article key={step.title}>
                  <div className="mb-4 flex items-center gap-4" aria-hidden="true">
                    <span className="font-sofiasanscondensed text-5xl font-bold leading-none text-[#670ef7] md:text-6xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl font-sofiasanscondensed">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.description}</p>
                  {step.points && step.points.length > 0 && (
                    <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-[#670ef7] font-poppins">
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {step.outcome && (
                    <div className="rounded-lg border border-purple-100 bg-purple-50/60 px-4 py-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">What this achieved</p>
                      <p className="text-sm leading-relaxed text-gray-800 font-poppins">{step.outcome}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Services Delivered Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/services/seo-services" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Local SEO</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Conversion Rate Optimization (CRO)</Link>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Website UX &amp; Design</Link>
          <Link href="/services/custom-app-development" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Nuxt 4 Migration &amp; Frontend</Link>
        </div>

        {/* 08 CTA */}
        <section id="cta" className="relative z-10 mt-16 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-full lg:w-[60%]">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need SEO, CRO or Website Migration Support?
              </h3>
              <p className="font-poppins text-sm font-medium text-white/90 sm:text-base">
                We help businesses improve their websites through location-focused SEO, conversion-focused user experiences and practical frontend engineering.
              </p>
            </div>
            <div className="w-full lg:w-1/3 text-center">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
                Discuss Your Project
              </Link>
            </div>
          </div>
          <span className="absolute -right-6 -top-8 -z-10 opacity-10" aria-hidden="true">
            <svg width="300" height="240" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M160 0L0 240H300V0H160Z" fill="white" />
            </svg>
          </span>
        </section>
      </div>

      {/* Sticky Right Navigation */}
      <aside className="sticky top-32 hidden h-max w-1/3 justify-start pl-4 md:flex">
        <div className="space-y-3 border-l-2 border-gray-200 py-2 pl-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Case Study Navigation</p>
          <nav className="space-y-2.5" aria-label="Case study sections">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm font-medium transition-colors ${activeId === section.id ? 'translate-x-1 font-bold text-[#670ef7]' : 'text-gray-600 hover:text-black'}`}
              >
                {section.label}
              </a>
            ))}
            <a href="#cta" className="block text-sm font-medium text-gray-600 transition-colors hover:text-black">Discuss a Project</a>
          </nav>
        </div>
      </aside>
    </section>
  );
}
