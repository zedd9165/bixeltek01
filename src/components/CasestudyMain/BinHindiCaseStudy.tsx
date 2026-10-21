'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import binHindiImg from '@/assets/binhindi-casestudy.png';
import { MdCheckCircle } from 'react-icons/md';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'audit', label: 'What We Identified' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'redesign', label: 'The Redesign' },
  { id: 'outcome', label: 'The Outcome' },
  { id: 'lessons', label: 'Key Lessons' },
];

const issues = [
  {
    number: '01',
    title: 'Visitors had to work too hard to navigate',
    description:
      'The existing experience made it harder than necessary for users to move through the website and find the information relevant to them. When navigation adds friction, visitors can struggle to reach the pages that matter.',
    impact:
      'More effort for visitors to find information and decide where to go next.',
  },
  {
    number: '02',
    title: 'Calls to action were not positioned effectively',
    description:
      'The website did not make its next steps clear enough at the right points in the user journey. A visitor may be interested in a business but still leave if the next action is difficult to notice or find.',
    impact:
      'Potential customers could miss opportunities to take the next step.',
  },
  {
    number: '03',
    title: 'The experience was not designed around conversion',
    description:
      'A website can contain the right information without guiding users towards an enquiry or another meaningful action. We needed to look at the experience as a complete journey, rather than treating each page as an isolated design.',
    impact:
      'The website needed a clearer connection between information, intent and action.',
  },
];

const auditItems = [
  {
    title: 'How easily could visitors find what they needed?',
    description:
      'Navigation should help visitors orient themselves without forcing them to guess where information lives. We considered the effort required to move through the existing experience and locate relevant content.',
  },
  {
    title: 'Could visitors recognise the next step?',
    description:
      'A call to action is only useful when people can notice it and understand why they should use it. We identified ineffective CTA placement as an area that needed greater attention in the rebuilt website.',
  },
  {
    title: 'Did the page content support the decision?',
    description:
      'Visitors need enough context to understand an offering before they act. We considered how content and navigation could work together to make the experience easier to follow.',
  },
  {
    title: 'Was the experience designed around an outcome?',
    description:
      'The website needed to support more than browsing. We approached the rebuild with the intended user action in mind, so conversion considerations informed the design rather than being left until later.',
  },
];

const decisions = [
  {
    number: '01',
    title: 'Understand before redesigning',
    description:
      'We started by analysing the existing website and looking for the reasons the experience was not supporting conversions as effectively as it could. This helped us focus on usability and conversion barriers instead of jumping straight into visual changes.',
  },
  {
    number: '02',
    title: 'Reduce unnecessary friction',
    description:
      'We considered how visitors moved between sections, how easily they could locate relevant information and where the experience created unnecessary effort. The redesign was guided by the need to make the website easier to use.',
  },
  {
    number: '03',
    title: 'Make the next step more obvious',
    description:
      'Calls to action need to appear where they make sense in the visitor\'s journey. We approached the redesign with greater attention to their placement, visibility and relationship to the content around them.',
  },
  {
    number: '04',
    title: 'Treat the website as a conversion journey',
    description:
      'Instead of focusing only on individual sections, we considered how the full experience could move a visitor from discovering information to understanding the offering and deciding what to do next.',
  },
];

const redesignPillars = [
  {
    title: 'Make navigation easier to follow',
    description:
      'A more considered user journey helps people move between relevant sections without unnecessary confusion. The goal is to help visitors find information instead of making them search for it.',
  },
  {
    title: 'Give calls to action a clear role',
    description:
      'Calls to action should relate to the information on the page and the decision a visitor may be ready to make. We treated their placement and visibility as part of the conversion strategy, rather than as decorative buttons.',
  },
  {
    title: 'Connect information with action',
    description:
      'Visitors should not have to work out the next step on their own. The experience needs to help them move from learning about a business to identifying a relevant action.',
  },
  {
    title: 'Build with conversion in mind',
    description:
      'CRO was part of the website rebuild itself. This allowed us to consider the user journey while shaping the experience, rather than treating conversion improvements as a later add-on.',
  },
];

const outcomes = [
  {
    title: 'A conversion-focused redesign',
    description:
      'We rebuilt the website with conversion rate optimization as a core consideration, rather than treating CRO as a set of changes to make after launch.',
  },
  {
    title: 'A more intentional user journey',
    description:
      'The redesign placed greater emphasis on helping visitors navigate the experience, find relevant information and identify the next step.',
  },
  {
    title: 'More purposeful CTA placement',
    description:
      'Calls to action became a deliberate part of the conversion experience, with attention to where visitors may be ready to act.',
  },
  {
    title: 'A foundation for continued optimization',
    description:
      'The rebuilt website provides a stronger starting point for future measurement, testing and refinements as verified performance data becomes available.',
  },
];

const lessons = [
  {
    title: 'A good-looking site is not enough',
    description:
      'Design needs to support the visitor\'s goals and the business\'s goals. A visually appealing page can still create friction if people cannot find information or act.',
  },
  {
    title: 'CTA placement is a business decision',
    description:
      'A call to action should be visible, relevant and connected to the visitor\'s context. Placement is part of the journey, not just a styling detail.',
  },
  {
    title: 'Diagnose before investing more',
    description:
      'Before spending more to attract visitors, review what happens after they arrive. Improving the experience can be an important part of a wider growth strategy.',
  },
];

export default function BinHindiCaseStudy() {
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
          <Link href="/services/web-design" className="hover:underline">Website Development</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        {/* 01 Overview */}
        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            A Website Should Do More Than Look Good. It Should Help People Take Action.
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              When a website is not generating the conversions a business expects, it is easy to assume that the answer is more traffic, more advertising or a fresh visual design. But before investing further in acquisition, it is worth understanding what happens after a visitor lands on the website.
            </p>
            <p>
              Can people find the information they need? Is the navigation intuitive? Do the pages explain the offering clearly? When a visitor is ready to take the next step, is the call to action visible and easy to understand?
            </p>
            <p>
              These were the kinds of questions that guided our work with Bin Hindi. We first analysed the existing website to understand why its experience was not supporting conversions effectively. We identified user-experience difficulties and calls to action that were not positioned effectively, then rebuilt the website with <Link href="/services/conversion-rate-optimization" className="font-medium text-[#670ef7] hover:underline">conversion rate optimization (CRO)</Link> as a core part of the process.
            </p>
            <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-2 pl-4 text-lg italic text-gray-900 md:text-xl font-poppins">
              Our focus was not simply to change how the website looked. It was to make the experience more useful, reduce unnecessary friction and give visitors clearer opportunities to act.
            </blockquote>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Client</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Bin Hindi</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">A website rebuild focused on removing friction from the visitor experience and making conversion paths more intentional.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Project Focus</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Website Redesign &amp; CRO</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">UX navigation, CTA visibility and conversion-focused web engineering.</p>
            </div>
          </div>
        </div>

        {/* Project Showcase Image */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={binHindiImg}
            alt="Bin Hindi website redesign and CRO case study by Bixeltek"
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        {/* 02 Challenge */}
        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: The Journey Visitors Had to Take Through the Website
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Our initial analysis highlighted usability issues that could make it harder for visitors to move through the website and complete the next step. The experience needed to do a better job of connecting what visitors wanted to know with what the business wanted them to do.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {issues.map((issue) => (
              <div
                key={issue.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Left Number / Badge */}
                  <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-1.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-base font-bold text-[#670ef7] border border-purple-100 group-hover:bg-[#670ef7] group-hover:text-white transition-colors duration-200 font-sofiasanscondensed">
                      {issue.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 sm:text-center">
                      Issue
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed tracking-wide md:text-2xl">
                      {issue.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 font-poppins md:text-base">
                      {issue.description}
                    </p>

                    {/* Why It Matters / Impact Strip */}
                    <div className="mt-3 flex flex-wrap items-baseline gap-2 rounded-lg bg-purple-50/60 px-3.5 py-2 border border-purple-100/80">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">
                        Why it matters:
                      </span>
                      <span className="text-xs text-gray-700 font-poppins md:text-sm">
                        {issue.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#17131f] p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">The Key Question</p>
            <p className="mt-3 text-xl font-medium leading-relaxed md:text-2xl font-sofiasanscondensed">
              If someone arrives on the website with genuine interest, does the experience make it easy for them to understand the business and take the next step?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 font-poppins">
              That question shaped our approach to the redesign. Instead of assuming the solution was purely visual, we focused on the experience that connects a visitor&apos;s interest to an action.
            </p>
          </div>
        </div>

        {/* 03 Audit / What We Identified */}
        <div id="audit" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            What We Identified: Small Details That Create Big Friction
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            Effective CRO begins with understanding the existing experience. Before deciding how to rebuild the site, we examined how the layout, navigation and calls to action worked together.
          </p>

          <div className="space-y-4">
            {auditItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-purple-50/20 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm font-bold text-[#670ef7]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700 font-poppins">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-purple-200 bg-purple-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">Our Principle</p>
            <p className="mt-1 text-base font-semibold text-gray-900 font-poppins">
              We do not redesign first and ask conversion questions later. Conversion thinking needs to inform the decisions from the start.
            </p>
          </div>
        </div>

        {/* 04 Approach */}
        <div id="approach" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Our Approach: Analyse, Reduce Friction, Rebuild with Purpose
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            We used the analysis of the existing website to guide the rebuild. This meant approaching the project as a conversion problem as well as a <Link href="/services/custom-app-development" className="font-medium text-[#670ef7] hover:underline">web development</Link> project.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {decisions.map((decision) => (
              <div
                key={decision.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">Decision {decision.number}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900 font-sofiasanscondensed">{decision.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">{decision.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-purple-50/30 p-5 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Phase 1</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Analyse</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Understand the usability and conversion problems in the existing website.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Phase 2</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Redesign</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Rework the experience around clearer navigation and more purposeful calls to action.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Phase 3</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Support Conversion</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Build a website with a more intentional path from information to action.</p>
            </div>
          </div>
        </div>

        {/* 05 Redesign */}
        <div id="redesign" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Redesign: Rebuilding Around How Visitors Make Decisions
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The new website was developed with CRO as a central consideration. We wanted the design and development decisions to support the visitor journey instead of treating conversion as a separate task.
            </p>
            <p>
              That meant giving greater attention to the relationship between page content, navigation, calls to action and the point at which a visitor might be ready to take action.
            </p>
          </div>

          <div className="my-8 space-y-10">
            {redesignPillars.map((pillar, index) => (
              <article key={pillar.title}>
                <div className="mb-3 flex items-center gap-4" aria-hidden="true">
                  <span className="font-sofiasanscondensed text-4xl font-bold leading-none text-[#670ef7] md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 font-sofiasanscondensed">
                  {pillar.title}
                </h3>
                <p className="leading-relaxed text-gray-700 font-poppins">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#17131f] p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">The Bigger Idea</p>
            <p className="mt-3 text-xl font-medium leading-relaxed md:text-2xl font-sofiasanscondensed">
              Every extra step, unclear link or overlooked CTA can add friction to a visitor&apos;s decision.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 font-poppins">
              The solution is not to add more buttons everywhere. It is to understand what the visitor needs, then make the appropriate next step clear at the point where it makes sense.
            </p>
          </div>
        </div>

        {/* 06 Outcome */}
        <div id="outcome" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Outcome: A Website Rebuilt to Make the Visitor Journey Work Harder
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Our work moved the project beyond a conventional redesign. We analysed the existing experience, identified usability issues and ineffective CTA placement, and rebuilt the website with conversion-focused decisions guiding the process.
            </p>
            <p>
              The result of the work was a redesigned website with a stronger focus on navigation, clearer conversion paths and the role of calls to action in helping visitors move forward. It created a more purposeful foundation for the business&apos;s online experience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-sm"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50/50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">Why This Matters</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900 font-sofiasanscondensed md:text-2xl">
              You may not need more visitors first. You may need to make better use of the visitors already reaching your website.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 font-poppins">
              When a website is difficult to navigate or its calls to action are not easy to find, potential customers can struggle to move forward. Reviewing the user journey can reveal opportunities that are easy to overlook when the focus is only on visual design or traffic growth.
            </p>
          </div>

          <p className="mt-4 text-xs italic text-gray-500 font-poppins">
            We have not included a percentage conversion lift, additional lead volume or revenue increase because verified before-and-after performance figures were not provided for this project.
          </p>
        </div>

        {/* 07 Key Lessons */}
        <div id="lessons" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            What Other Businesses Can Learn
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            Small usability decisions can shape the entire conversion experience.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Delivered Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Website Development</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Conversion Rate Optimization (CRO)</Link>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">UX &amp; UI Design</Link>
          <Link href="/services/custom-app-development" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Frontend Engineering</Link>
        </div>

        {/* 08 CTA */}
        <section id="cta" className="relative z-10 mt-16 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-full lg:w-[60%]">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Getting Visitors but Not Enough Enquiries?
              </h3>
              <p className="font-poppins text-sm font-medium text-white/90 sm:text-base">
                We can help you review your website, identify friction in the user journey and build an experience that makes it easier for the right visitors to take the next step.
              </p>
            </div>
            <div className="w-full lg:w-1/3 text-center">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
                Discuss Your Website
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
