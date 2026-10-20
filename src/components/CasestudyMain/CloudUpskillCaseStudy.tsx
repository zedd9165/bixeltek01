'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cloudUpskillImg from '@/assets/cloudupskill-casestudy.png';
import type { ReactNode } from 'react';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'approach', label: 'The WordPress Build' },
  { id: 'course-experience', label: 'Course Discovery' },
  { id: 'enquiry-journey', label: 'Enquiry Journey' },
  { id: 'deliverables', label: 'What We Delivered' },
  { id: 'takeaway', label: 'The Takeaway' },
];

type ApproachStep = {
  title: string;
  description: ReactNode;
  points: string[];
};

const approachSteps: ApproachStep[] = [
  {
    title: 'Building the Website on WordPress',
    description: (
      <>
        We built Cloud Upskill’s website on WordPress to give the training team a practical platform for presenting courses, explaining its learning offer and updating information as the programme portfolio evolves. The website needed to serve both first-time learners comparing options and working professionals looking for a specific technical skill.
      </>
    ),
    points: [
      'A content-managed website for course information and supporting pages',
      'Consistent page patterns to keep the learning offer easy to navigate',
      'A foundation that can accommodate additional courses and updated programme details',
    ],
  },
  {
    title: 'Organising a Broad Course Portfolio',
    description: (
      <>
        Cloud Upskill offers training across different technical disciplines, from cloud and data engineering to programming, software testing, analytics, AI, ERP and cybersecurity. We organized the website around course groups so visitors can start with an area of interest and move toward a relevant programme.
      </>
    ),
    points: [
      'Course navigation grouped by related skill areas',
      'Clear routes from broader categories to individual course details',
      'A structure that reduces the need to search through one long, undifferentiated course list',
    ],
  },
  {
    title: 'Making Individual Course Pages More Useful',
    description: (
      <>
        A prospective learner needs more than a course title. Course pages bring the programme’s subject, learning outcomes, intended audience and relevant course information into one place, with a clear route to ask questions or take the next step.
      </>
    ),
    points: [
      'Course-specific information presented in a consistent format',
      'Key details and learning benefits surfaced before the enquiry action',
      'Related course resources and supporting information placed within the decision journey where available',
    ],
  },
  {
    title: 'Connecting Course Interest to Enquiry Actions',
    description: (
      <>
        Course discovery only helps the business when an interested visitor can act on it. We built clear paths for people to explore a course, request a brochure, book a free demo or contact the team, keeping the next step visible throughout the site.
      </>
    ),
    points: [
      'Calls to action such as View Details, Download Brochure and Book Free Demo',
      'Contact forms that capture learner details and the course area they are interested in',
      'Contact information that gives visitors an alternative way to reach the team',
    ],
  },
  {
    title: 'Presenting the Support Behind the Training',
    description: (
      <>
        Choosing a training provider involves more than comparing subjects. The website also communicates the support around learning, including live instruction, practical projects, mentoring, mock interviews, placement assistance and study resources, based on the information presented by Cloud Upskill.
      </>
    ),
    points: [
      'Dedicated areas for learning benefits and student support',
      'Course and career-support information placed alongside programme discovery',
      'Space for testimonials, alumni information and other trust signals',
    ],
  },
  {
    title: 'Creating a Foundation for Ongoing Content Updates',
    description: (
      <>
        Training programmes change as technologies and learner needs change. The WordPress build gives the team a content-managed foundation for maintaining course information, adding programmes and publishing supporting content without treating every update as a brand-new website project.
      </>
    ),
    points: [
      'Repeatable content patterns for new or updated course pages',
      'A connected structure for courses, supporting information, blogs and contact options',
      'A foundation for continued content, usability and search improvements',
    ],
  },
];

export default function CloudUpskillCaseStudy() {
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
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/services/web-design" className="hover:underline">Website Design &amp; Development</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            A Website Built Around Technical Learning and Course Discovery
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Cloud Upskill is an IT training provider offering courses across cloud and data engineering, full-stack development, software testing, analytics, AI, ERP and cybersecurity. Its audience includes students, fresh graduates, working professionals and people looking to build new technical skills.
            </p>
            <p>
              Bixeltek built a <Link href="/services/web-design/wordpress" className="font-medium text-[#670ef7] hover:underline">WordPress website</Link> to bring this broad training portfolio into a clearer digital experience. Visitors can explore course categories, review individual programmes, learn about the support available and move toward actions such as downloading a brochure, booking a free demo or contacting the team.
            </p>
            <p className="border-l-4 border-[#670ef7] bg-purple-50/60 py-2 pl-4 font-semibold text-gray-900">
              The goal was to make a wide range of training options easier to understand and enquire about.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={cloudUpskillImg}
            alt="Cloud Upskill WordPress Website Showcase"
            className="h-auto w-full object-cover"
          />
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: Turning Course Information Into a Clear Journey
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Technical training is a considered purchase. Visitors need to understand what a course covers, whether it fits their current experience, how learning is delivered and what support is available before they commit to speaking with an advisor.
            </p>
            <p>
              With programmes spanning several technology categories, the website needed to balance breadth with clarity. Course discovery, supporting proof and enquiry actions had to work together rather than leave visitors to piece together information across disconnected pages.
            </p>
          </div>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-gray-700 font-poppins">
            <li>Help visitors navigate a broad and evolving course portfolio.</li>
            <li>Give individual programmes a consistent, useful information structure.</li>
            <li>Explain learning support and career guidance without burying the course details.</li>
            <li>Make brochure downloads, demo requests and contact options easy to find.</li>
            <li>Provide a manageable WordPress foundation for ongoing updates.</li>
          </ul>
        </div>

        <div id="approach" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Build: A Course-Focused WordPress Website
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            We approached the website as a connected path from interest to enquiry: organize the programmes, explain each course clearly, reinforce the value of the training experience and make the next action straightforward.
          </p>
          <div className="my-8 space-y-14">
            {approachSteps.map((step, index) => (
              <article key={step.title}>
                <div className="mb-4 flex items-center gap-4" aria-hidden="true">
                  <span className="font-sofiasanscondensed text-5xl font-bold leading-none text-[#670ef7] md:text-6xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl font-sofiasanscondensed">
                  <span className="sr-only">Step {index + 1}: </span>{step.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.description}</p>
                <ul className="list-disc space-y-2 pl-5 leading-relaxed text-gray-700 font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div id="course-experience" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Course Discovery Across Multiple Technical Fields
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The live website groups programmes into areas including cloud and data engineering, full-stack and programming, testing and QA, business intelligence and AI, ERP and CRM, and cybersecurity and governance. This category structure gives visitors different entry points based on the skills or career direction they want to explore.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse text-left text-sm md:text-base font-poppins">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Website element</th>
                  <th className="p-4 font-semibold">Role in the learner journey</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Course categories</td>
                  <td className="p-4 text-gray-700">Help learners move from a broad skill area to relevant courses.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Individual course pages</td>
                  <td className="p-4 text-gray-700">Present programme information in a dedicated place for evaluation.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Learning support content</td>
                  <td className="p-4 text-gray-700">Explain mentorship, practical work, mock interviews and career support described by the provider.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Supporting content</td>
                  <td className="p-4 text-gray-700">Give visitors more context through FAQs, course resources, student feedback and related information.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="enquiry-journey" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Making the Next Step Clear
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              A prospective learner may be ready to compare a curriculum, ask about the format or speak with an advisor before enrolling. The website supports these different levels of intent with actions such as viewing course details, downloading a brochure, booking a free demo and submitting a contact enquiry.
            </p>
            <p>
              The contact form also lets visitors identify the course area they are interested in, giving the team more context for responding. Clear calls to action and accessible contact information help connect course research with a practical next step.
            </p>
            <p>
              These are conversion-focused design decisions, not a claim of a measured conversion-rate lift. Without a verified before-and-after dataset, the case study focuses on the enquiry paths built into the experience rather than assigning an unsupported percentage to their impact.
            </p>
          </div>
        </div>

        <div id="deliverables" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            What We Delivered
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project brought Cloud Upskill’s course portfolio, programme information, learner-support messaging and enquiry options into a single WordPress website.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Platform</p>
              <p className="mt-2 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">WordPress</p>
              <p className="mt-1 text-sm text-gray-700">Content-managed website</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Course coverage</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Multi-category</p>
              <p className="mt-1 text-sm text-gray-700">Technical training portfolio</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Enquiry paths</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Connected</p>
              <p className="mt-1 text-sm text-gray-700">Course details, brochures, demos and contact</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-600 font-poppins">
            The public website describes a range of course areas and learner-support features. This case study does not assign a specific traffic, enquiry or enrolment increase to the build because verified before-and-after figures were not provided.
          </p>
        </div>

        <div id="takeaway" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-2 pl-4 text-xl italic text-gray-900 md:text-2xl">
            A training website should do more than list courses. It should help learners understand their options and make it easy to take the next step.
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For Cloud Upskill, Bixeltek built a WordPress experience around course discovery, programme information and enquiry actions. For training providers that need a clearer digital presence and a site they can continue to grow, our{' '}
            <Link href="/services/web-design" className="font-medium text-[#670ef7] hover:underline">website design and development</Link>{' '}
            service covers the structure, content experience and conversion paths that help visitors move from research to a meaningful enquiry.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Website Design &amp; Development</Link>
          <Link href="/services/seo-services" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">SEO Foundations</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Conversion-Focused UX</Link>
        </div>

        <section id="cta" className="relative z-10 mt-16 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-full lg:w-2/3">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need a Website That Turns Course Interest Into Enquiries?
              </h3>
              <p className="font-poppins text-sm font-medium text-white/90 sm:text-base">
                We build content-managed websites that organize complex service or course portfolios and make the next step clear for prospective customers.
              </p>
            </div>
            <div className="w-full lg:w-1/3 lg:text-right">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
                Discuss Your Website Project
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
