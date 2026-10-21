'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mfPrintImg from '@/assets/mf-print-casestudy.webp';
import { MdCheckCircle } from 'react-icons/md';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'strategy', label: 'Our Approach' },
  { id: 'website', label: 'Website Development' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'outcome', label: 'The Outcome' },
  { id: 'deliverables', label: 'What We Delivered' },
];

const deliverables = [
  {
    number: '01',
    title: 'Custom website development',
    description:
      'A website built around the business\'s requirements rather than a generic, off-the-shelf layout.',
  },
  {
    number: '02',
    title: 'Online business presence',
    description:
      'A dedicated digital destination where prospective customers can discover the business and learn more before reaching out.',
  },
  {
    number: '03',
    title: 'Google Ads campaign launch',
    description:
      'Paid search campaigns designed to put the business in front of relevant people actively looking for solutions.',
  },
  {
    number: '04',
    title: 'A foundation for growth',
    description:
      'A starting point for developing a more scalable customer acquisition strategy as the business grows.',
  },
];

const projectPrinciples = [
  {
    title: 'Build for the actual business',
    description:
      'The website needed to reflect the client\'s requirements and commercial goals, not simply fill a page with generic content.',
  },
  {
    title: 'Make the business discoverable',
    description:
      'A business needs a digital presence that prospective customers can find, visit and use to understand what it offers.',
  },
  {
    title: 'Connect visibility with acquisition',
    description:
      'Launching a website was only one part of the work. Google Ads gave the business an additional way to reach prospective customers.',
  },
  {
    title: 'Use early feedback to guide the next stage',
    description:
      'The initial response created a basis for discussing how to build on the campaign rather than treating launch as the finish line.',
  },
];

const challenges = [
  {
    number: '01',
    title: 'Limited online discoverability',
    description:
      'Without a dedicated website, people searching online had no central business website to visit, explore, and use to learn more about the company.',
    whyItMatters:
      'Potential customers in need of printing services had fewer ways to discover the business.',
  },
  {
    number: '02',
    title: 'No dedicated digital destination',
    description:
      'The business needed a place where its information could be presented in a structured way and where interested visitors could take the next step.',
    whyItMatters:
      'Prospective clients could not easily review capabilities, services, or get in touch.',
  },
  {
    number: '03',
    title: 'An opportunity to reach active searchers',
    description:
      'A website alone would establish a presence, but paid search offered a way to actively introduce the business to relevant audiences instead of waiting for visitors to find it.',
    whyItMatters:
      'Google Ads provided direct access to active commercial intent from day one.',
  },
];

export default function MFPrintingInternationalCaseStudy() {
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
            Giving a Business a Way to Be Found Online
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              MF Printing International came to us at a point where its business needed a stronger digital presence. Without an established website, prospective customers had fewer ways to discover the company online, understand its offering, and take the next step towards becoming customers.
            </p>
            <p>
              We approached the project as more than a website build. The goal was to create a digital foundation for the business and pair it with a channel that could bring relevant prospects to it. That meant developing a website around the client&apos;s requirements and using <Link href="/services/google-ads" className="font-medium text-[#670ef7] hover:underline">Google Ads</Link> to help the business reach people searching online.
            </p>
            <p>
              The early response was encouraging. According to the project feedback shared with us, customers started coming through Google Ads within the first two to three days after the campaigns went live. That gave the client a tangible early indication of what a more deliberate online acquisition approach could make possible.
            </p>
            <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-2 pl-4 text-lg italic text-gray-900 md:text-xl font-poppins">
              The project connected two important pieces: a website built for the business and a paid search channel designed to bring potential customers to it.
            </blockquote>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Client</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">MF Printing International</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">A printing company establishing its dedicated online presence and paid search acquisition.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Project Focus</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Website Development &amp; Google Ads</p>
              <p className="mt-1 text-sm text-gray-700 font-poppins">Custom website, search advertising, and rapid customer acquisition within 2–3 days.</p>
            </div>
          </div>
        </div>

        {/* Project Showcase Image */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={mfPrintImg}
            alt="MF Printing International Website and Google Ads Project Showcase"
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        {/* 02 The Challenge */}
        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: A Business Capable of Serving Customers, but Difficult to Discover Online
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Before the project, MF Printing International did not have an established online presence. That left an important gap between the business and potential customers who were looking for relevant services online.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-purple-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Left Number / Badge */}
                  <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-1.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-base font-bold text-[#670ef7] border border-purple-100 group-hover:bg-[#670ef7] group-hover:text-white transition-colors duration-200 font-sofiasanscondensed">
                      {challenge.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 sm:text-center">
                      Challenge
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed tracking-wide md:text-2xl">
                      {challenge.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 font-poppins md:text-base">
                      {challenge.description}
                    </p>

                    {/* Impact Strip */}
                    <div className="mt-3 flex flex-wrap items-baseline gap-2 rounded-lg bg-purple-50/60 px-3.5 py-2 border border-purple-100/80">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">
                        Impact:
                      </span>
                      <span className="text-xs text-gray-700 font-poppins md:text-sm">
                        {challenge.whyItMatters}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#17131f] p-7 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">The Business Problem</p>
            <p className="mt-3 text-xl font-medium leading-relaxed md:text-2xl font-sofiasanscondensed">
              How could we help MF Printing International become easier to discover online and create a practical route from search to customer enquiry?
            </p>
          </div>
        </div>

        {/* 03 Our Approach */}
        <div id="strategy" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Our Approach: Build the Foundation, Then Bring the Right People to It
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            We treated the website and Google Ads as connected parts of the same business objective. The website would establish the company&apos;s online presence; Google Ads would help potential customers discover it.
          </p>

          <div className="my-8 space-y-10">
            {projectPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <div className="mb-3 flex items-center gap-4" aria-hidden="true">
                  <span className="font-sofiasanscondensed text-4xl font-bold leading-none text-[#670ef7] md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 font-sofiasanscondensed">
                  {principle.title}
                </h3>
                <p className="leading-relaxed text-gray-700 font-poppins">{principle.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-purple-50/30 p-5 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Step 1</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Establish the Presence</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Build a custom website for the business.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Step 2</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Create Visibility</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Launch Google Ads to reach relevant searchers.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Step 3</p>
              <h4 className="mt-1 text-base font-bold text-gray-900 font-sofiasanscondensed">Build on Response</h4>
              <p className="mt-1 text-xs text-gray-600 font-poppins">Use early customer response as a starting point for future growth.</p>
            </div>
          </div>
        </div>

        {/* 04 Website Development */}
        <div id="website" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Website Development: A Custom Website Built Around the Business
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              We developed a customized website for MF Printing International rather than relying on a generic template that might not fit its needs. The purpose was to give the company its own online destination and establish a stronger foundation for digital customer acquisition.
            </p>
            <p>
              The site needed to serve a practical business purpose: help visitors understand the company, provide a professional point of reference, and support the next step when someone was interested in working with the business.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed mb-5">
              What the Website Was Intended to Solve
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-sofiasanscondensed text-lg">A Dedicated Online Presence</h4>
                  <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                    Give potential customers a website to visit when discovering the business online.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-sofiasanscondensed text-lg">A Business-Specific Experience</h4>
                  <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                    Shape the website around the client&apos;s requirements instead of forcing the business into a one-size-fits-all design.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-sofiasanscondensed text-lg">A Destination for Paid Traffic</h4>
                  <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                    Provide Google Ads visitors with a website where they can learn about the business before deciding to contact it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#670ef7]">
                  <MdCheckCircle size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-sofiasanscondensed text-lg">Room for Future Development</h4>
                  <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                    Create a digital starting point that can support further marketing activity as the business&apos;s goals evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <h4 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">More Than a Digital Brochure</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                The website was the foundation of the wider acquisition effort. It gave the business a place to direct potential customers rather than sending paid traffic into an online journey without a dedicated company website.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-purple-50/40 p-5">
              <h4 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">A Foundation That Can Evolve</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                As the company grows, its website can continue to support clearer service information, additional landing pages, stronger conversion paths and future marketing campaigns where those additions are needed.
              </p>
            </div>
          </div>
        </div>

        {/* 05 Google Ads */}
        <div id="google-ads" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Google Ads: Turning Online Visibility Into Customer Opportunities
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Once the website provided a destination for potential customers, we ran Google Ads to help MF Printing International reach people searching for relevant services.
            </p>
            <p>
              The important distinction was that the project did not stop at making the business visible online. We also introduced a paid acquisition channel with the aim of bringing potential customers to the business.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">01 / Reach People Searching Online</h3>
              <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                Google Ads gave the business an active way to reach relevant searchers, rather than relying exclusively on people who already knew the company.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">02 / Connect Ads to the Website</h3>
              <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                The website gave campaign visitors a dedicated place to learn more about the business and consider taking the next step.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-bold text-gray-900 font-sofiasanscondensed">03 / Learn From the Early Response</h3>
              <p className="mt-1 text-sm text-gray-700 font-poppins leading-relaxed">
                The client reported that customers began coming through Google Ads within the first two to three days. That initial response provided a practical reason to explore further growth.
              </p>
            </div>
          </div>

          {/* Early Response Banner */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-[#17131f] p-7 text-white md:p-8">
            <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">Early Campaign Response</p>
                <h3 className="mt-2 text-2xl font-bold leading-tight font-sofiasanscondensed md:text-3xl">
                  First customers started coming through Google Ads within 2–3 days
                </h3>
                <p className="mt-2 text-sm text-white/70 font-poppins">
                  This was the early result shared with us by the client. It demonstrates the initial customer response, not a verified long-term performance or profitability figure.
                </p>
              </div>
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-center">
                <span className="text-3xl font-bold text-white font-sofiasanscondensed">2–3</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c5a8ff]">Days</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs italic text-gray-500 font-poppins">
            We have not included an exact lead count, advertising budget, cost per lead, conversion rate or ROAS because those figures have not been provided for publication.
          </p>
        </div>

        {/* 06 The Outcome */}
        <div id="outcome" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Outcome: An Encouraging Start and a Plan to Scale Further
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              For MF Printing International, the project established an online presence and introduced Google Ads as a channel for reaching potential customers. The early customer response was encouraging, and the client gave us positive feedback about the work.
            </p>
            <p>
              The next opportunity is to build on that foundation. The client is now planning to scale the activity to a much larger level. That creates room to review campaign performance, identify the strongest opportunities and develop the website and advertising strategy in line with the business&apos;s goals.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-sm">
              <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">
                Established
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900 font-sofiasanscondensed">
                The Digital Foundation is in Place
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                The company now has a custom website and a paid search channel that can be developed as its online acquisition needs evolve.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-200/80 bg-white p-6 transition hover:border-purple-300 hover:shadow-sm">
              <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">
                Next Opportunity
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900 font-sofiasanscondensed">
                Scale With Performance in Mind
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 font-poppins">
                The client&apos;s plan to scale creates an opportunity to use campaign data and business feedback to guide future investment and improvements.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-purple-200 bg-purple-50/50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">What This Project Demonstrates</p>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <div>
                <h4 className="text-base font-bold text-gray-900 font-sofiasanscondensed">Presence is the Starting Point</h4>
                <p className="mt-1 text-xs text-gray-600 font-poppins leading-relaxed">
                  A business needs a credible place online where potential customers can learn more about it.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 font-sofiasanscondensed">Traffic Needs a Destination</h4>
                <p className="mt-1 text-xs text-gray-600 font-poppins leading-relaxed">
                  Advertising works alongside the website, helping bring potential customers into a business-specific online journey.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 font-sofiasanscondensed">Growth Should Be Measured</h4>
                <p className="mt-1 text-xs text-gray-600 font-poppins leading-relaxed">
                  Scaling responsibly means evaluating lead quality, conversion performance and commercial outcomes—not just increasing advertising spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 07 What We Delivered */}
        <div id="deliverables" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Project Scope: What We Delivered
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The work combined a tailored website with a customer acquisition channel, creating a practical starting point for the company&apos;s next phase of digital growth.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-900 font-sofiasanscondensed">{item.title}</h3>
                  <span className="text-sm font-bold text-[#670ef7] font-sofiasanscondensed">
                    {item.number}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Delivered Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Custom Website Development</Link>
          <Link href="/services/google-ads" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Google Ads Management</Link>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">UI &amp; UX Design</Link>
          <Link href="/services/custom-app-development" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Frontend Engineering</Link>
        </div>

        {/* 08 CTA */}
        <section id="cta" className="relative z-10 mt-16 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-full lg:w-[60%]">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need a Website That Supports Your Next Stage of Business Growth?
              </h3>
              <p className="font-poppins text-sm font-medium text-white/90 sm:text-base">
                We can help you build a digital presence around your business and develop a practical approach to attracting customers online—from the website to the campaigns that bring people to it.
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
