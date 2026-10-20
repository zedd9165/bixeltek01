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
  { id: 'cta', label: 'Work With Bixeltek' },
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
    title: 'Improving Local Search Visibility',
    description:
      'The first phase focused on helping a US pet-grooming business become easier to discover in the cities and service areas it wanted to reach. We reviewed opportunities to make its local service coverage clearer and built out pages around relevant city-level searches.',
    points: [
      'City-specific landing pages focused on the service and local audience',
      'A clearer structure for presenting pet-grooming services in each target area',
      'Page components that could support further location expansion without rebuilding each page from scratch',
    ],
    outcome:
      'The new local pages helped strengthen organic visibility and improve rankings for relevant local searches, without relying on one generic page to serve every city.',
    challenge: {
      problem:
        'Location pages can become repetitive when only the city name changes. That gives customers little local value and can weaken the purpose of the page.',
      solution:
        'We used a reusable page structure while keeping the content focused on each target area and service intent. The goal was to make every page a useful destination, not just another URL targeting a city keyword.',
    },
  },
  {
    title: 'Applying CRO to the Customer Journey',
    description:
      'Local visibility only creates an opportunity. Once visitors land on the website, they still need to understand the service and find a clear next step. We applied Conversion Rate Optimization (CRO) principles alongside the local SEO work.',
    points: [
      'A clearer hierarchy for service information and key messages',
      'More direct paths from location-specific pages to the next action',
      'Page components designed to make essential information easier to scan and use',
    ],
    outcome:
      'The site was structured to support both discovery and action: attracting relevant local visitors while making the next step easier to understand.',
  },
  {
    title: 'Building Reusable Components for Growth',
    description:
      'Rather than creating every new city page as a separate build, we introduced components that could be reused across the existing site. This created a more consistent way to expand local content while retaining control over each page’s purpose.',
    points: [
      'Reusable sections for location-focused landing pages',
      'A consistent design system across the pages added to the existing site',
      'A structure that makes future service-area expansion easier to maintain',
    ],
    outcome:
      'The website gained a more scalable approach to location-page creation, reducing the need to treat each new target area as a one-off development task.',
  },
  {
    title: 'Planning and Executing the Nuxt 2 to Nuxt 4 Migration',
    description:
      'After the local visibility work, the project expanded to a framework migration. The existing website was running on Nuxt 2, and we moved it to Nuxt 4 while preserving the established experience and the functionality visitors relied on.',
    points: [
      'Reviewed existing pages, components and application behavior before changing the framework',
      'Updated legacy implementation patterns and dependencies that did not carry forward cleanly',
      'Retested key routes and interactions as the application moved to the newer framework',
    ],
    outcome:
      'The migration modernized the application foundation while keeping continuity of the existing website and its customer-facing workflows as a core requirement.',
    challenge: {
      problem:
        'A major framework migration is more than changing a version number. Older conventions and dependencies may no longer behave as expected, and quick fixes can introduce regressions elsewhere in the site.',
      solution:
        'We handled the move as a compatibility and regression exercise: identify legacy patterns, update the affected implementation, and retest the pages and flows that depended on them.',
    },
  },
  {
    title: 'Diagnosing Hydration Mismatches',
    description:
      'During the migration, we encountered hydration issues where the markup produced on the server did not consistently match the client’s initial render. Those mismatches needed to be investigated rather than hidden, because they can affect the reliability of interactive pages.',
    points: [
      'Traced the affected components and the conditions producing inconsistent renders',
      'Aligned server-rendered output with the initial client-side state where needed',
      'Retested the affected UI after changes to confirm the application behaved consistently',
    ],
    outcome:
      'Resolving the hydration issues helped stabilize the migrated frontend and reduced the risk of carrying framework-transition problems into the finished site.',
    challenge: {
      problem:
        'Hydration warnings can be symptoms of differences in data, state or markup between server and browser rendering. Suppressing the warning alone would not address the underlying mismatch.',
      solution:
        'We traced the affected components, corrected the rendering assumptions and checked the result through the migrated user interface instead of relying on the absence of a console warning as the only test.',
    },
  },
  {
    title: 'Coordinating Frontend and Backend Behavior',
    description:
      'The frontend migration also required close coordination with the client’s backend team. The goal was to update the application without changing the expected user experience or breaking the way the frontend and backend exchanged data.',
    points: [
      'Worked with the backend team to verify data contracts and expected responses',
      'Checked how integrated pages handled available data and relevant loading or error states',
      'Validated key journeys across the updated frontend and existing services',
    ],
    outcome:
      'Joint testing helped keep frontend changes aligned with backend behavior, so the migration was treated as an integrated application change rather than an isolated UI update.',
  },
];

const deliverables = [
  {
    area: 'Local SEO',
    detail: 'City-specific pages built to support relevant local searches and service-area discovery.',
  },
  {
    area: 'CRO',
    detail: 'A clearer journey from local landing pages to service information and the next customer action.',
  },
  {
    area: 'Reusable architecture',
    detail: 'Location-page components that support future expansion while keeping the experience consistent.',
  },
  {
    area: 'Framework migration',
    detail: 'Existing website moved from Nuxt 2 to Nuxt 4 with compatibility changes and regression checks.',
  },
  {
    area: 'Rendering stability',
    detail: 'Hydration mismatches investigated and addressed in the affected components.',
  },
  {
    area: 'Team coordination',
    detail: 'Frontend changes validated in coordination with the client’s backend team.',
  },
];

export default function USPetGroomingCaseStudy() {
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
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/local-seo" className="hover:underline">Local SEO</Link>
          <span>/</span>
          <Link href="/services/web-design" className="hover:underline">Web Development</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Growing Local Visibility, Then Modernizing the Website Behind It
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              A US pet-grooming business wanted to improve how potential customers discovered its services in the local areas it served. The first phase focused on <Link href="/local-seo" className="font-medium text-[#670ef7] hover:underline">local SEO</Link> and <Link href="/services/conversion-rate-optimization" className="font-medium text-[#670ef7] hover:underline">conversion-focused improvements</Link> to the existing website, including the creation of city-specific pages and reusable components.
            </p>
            <p>
              As the website’s local presence expanded, the work grew into a larger engineering project: migrating the application from Nuxt 2 to Nuxt 4. That meant more than moving to a newer version. Existing behavior needed to remain dependable while legacy patterns, hydration issues and frontend-backend integration were addressed.
            </p>
            <p>
              The project connected two kinds of work that are often handled separately: helping the site become easier to find, then improving the technical foundation required to maintain and extend it.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={petGroomingImg}
            alt="US Pet Grooming Website Local SEO & Nuxt Migration Showcase"
            className="h-auto w-full object-cover"
          />
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Challenge</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The business needed stronger local discovery and a website that could keep evolving without putting the existing experience at risk. The work had to balance search visibility, conversion paths and technical continuity.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li><span className="font-semibold">Limited local targeting:</span> the existing page structure needed more relevant city-level entry points for customers searching for pet grooming nearby.</li>
              <li><span className="font-semibold">Visitors needed a clearer next step:</span> local pages had to help people understand the service and continue toward an enquiry or booking action.</li>
              <li><span className="font-semibold">Expansion needed a repeatable system:</span> creating more location pages one by one would make consistency and maintenance harder.</li>
              <li><span className="font-semibold">A major framework jump:</span> the move from Nuxt 2 to Nuxt 4 introduced compatibility work across legacy code and dependencies.</li>
              <li><span className="font-semibold">Hydration and integration risks:</span> server/client rendering differences and the need to keep frontend behavior aligned with backend responses required focused debugging and coordination.</li>
            </ul>
          </div>
        </div>

        <section id="local-seo-cro" className="scroll-mt-32 py-6">
          <h2 className="mb-3 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">Phase One: Local SEO and CRO</h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-700 font-poppins">
            We first worked on how people found the business and what they encountered after arriving on the site. City-specific pages created more relevant local entry points, while CRO principles helped the page experience guide visitors toward useful service information and clear next actions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Local discovery</p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Pages for Relevant City Searches</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">
                We introduced location-focused pages to connect the business’s services with the areas it wanted to reach. The goal was to give each page a useful purpose and make its local relevance clear, rather than simply duplicate one page and swap place names.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Conversion journey</p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">From Discovery to Action</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">
                CRO improvements focused on making service information easier to follow and the next step clearer. The objective was to help local visitors move from finding a relevant page to acting on their interest.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 sm:col-span-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Scalable delivery</p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Reusable Components, Localized Content</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">
                Reusable components made it easier to add location pages within the existing site design. The structure could be reused; local content still needed to reflect each target area&apos;s relevance and the services available there.
              </p>
            </div>
          </div>
          <p className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm italic leading-relaxed text-gray-600 font-poppins">
            The reported outcome was improved organic visibility and rankings for relevant local searches. No specific traffic, ranking-position or conversion-rate figures are stated because verified before-and-after numbers were not supplied.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For businesses looking to improve local discovery beyond this project, Bixeltek’s <Link href="/local-seo" className="font-semibold text-[#670ef7] underline decoration-purple-300 underline-offset-4 hover:decoration-[#670ef7]">Local SEO services</Link> focus on useful location pages, accurate local information and the journey from search to enquiry.
          </p>
        </section>

        <section id="nuxt-migration" className="scroll-mt-32 py-6">
          <h2 className="mb-3 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">Phase Two: Migrating from Nuxt 2 to Nuxt 4</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Following the local SEO and CRO work, the business entrusted Bixeltek with migrating its existing website from Nuxt 2 to Nuxt 4. The challenge was to modernize the implementation while preserving the behavior customers already depended on.
            </p>
            <p>
              The migration required a review of older application patterns, updates to code that no longer fit the newer framework conventions, and testing across routes and interactive components. We treated compatibility as a project-wide responsibility rather than assuming that a successful build meant the migration was complete.
            </p>
            <p>
              We also coordinated with the backend team as frontend components were updated. That collaboration helped verify that data responses and user-facing states remained aligned across the application.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Migration priority</p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Preserve Existing Behavior</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">
                Route behavior, existing page content and key interactions had to keep working as the framework and implementation patterns changed.
              </p>
            </div>
            <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#670ef7]">Validation priority</p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Verify the Integrated Site</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">
                Frontend behavior was checked alongside backend responses so the migrated experience worked as a connected application, not just as independently updated pieces.
              </p>
            </div>
          </div>
        </section>

        <section id="engineering" className="scroll-mt-32 py-6">
          <h2 className="mb-2 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">The Bixeltek Build</h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-700 font-poppins">
            The work progressed from local search improvements to a deeper framework migration. Each stage addressed a specific problem while protecting the parts of the website that were already in use.
          </p>
          <div className="space-y-14">
            {buildSteps.map((step, index) => (
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
                <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-[#670ef7] font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                {step.challenge && (
                  <div className="mb-5 overflow-hidden rounded-lg border border-gray-200">
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
                <div className="rounded-lg border border-purple-100 bg-purple-50/60 px-4 py-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">Project outcome</p>
                  <p className="text-sm leading-relaxed text-gray-800 font-poppins">{step.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div id="delivered" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">What Changed</h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project paired local search improvements with a deeper application migration. It improved the site’s local targeting, established a reusable pattern for location pages and moved the existing application to Nuxt 4 while addressing compatibility, hydration and integration issues along the way.
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
                    <td className="p-4 text-gray-700"><MdCheckCircle className="mr-2 inline-block text-lg text-[#670ef7]" />{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="takeaway" className="scroll-mt-32 pb-6">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-3 pl-4 text-xl italic text-gray-900 md:text-2xl">
            Local growth works best when the pages that attract customers and the technology that supports them are built to improve together.
          </blockquote>
          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            This project demonstrates how SEO, CRO and frontend engineering can support the same business objective: helping local customers find the right service while giving the website a more maintainable foundation for future growth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            Learn more about Bixeltek’s <Link href="/technical-seo" className="font-semibold text-[#670ef7] underline decoration-purple-300 underline-offset-4 hover:decoration-[#670ef7]">technical SEO services</Link> for businesses that need to protect search visibility while changing or modernizing a website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/local-seo" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Local SEO</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">CRO</Link>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">City-Specific Pages</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">Nuxt 2 to Nuxt 4 Migration</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">Hydration Debugging</span>
        </div>

        <section id="cta" className="relative z-10 mt-12 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need Better Local Visibility or a Nuxt Migration for Your Pet Grooming Business?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base font-poppins">
                Bixeltek connects local SEO, CRO and modern frontend engineering to help businesses improve discoverability and evolve their websites without losing sight of the customer journey.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-center text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100"
              >
                Contact Us
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
