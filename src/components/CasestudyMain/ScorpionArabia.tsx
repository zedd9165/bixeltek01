'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

const sections = [
  { id: 'about', label: 'About Scorpion Arabia' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'strategy', label: 'The Website Strategy' },
  { id: 'conversion', label: 'Conversion-Focused Experience' },
  { id: 'results', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
  { id: 'cta', label: 'Discuss Your Project' },
];

type BuildStep = {
  title: string;
  description: string;
  points: string[];
  outcome: string;
};

const buildSteps: BuildStep[] = [
  {
    title: '1. Establishing an Enterprise WordPress Foundation',
    description:
      'We built Scorpion Arabia’s website on WordPress with the needs of an engineering-led B2B business in mind. The website had to present technical services with clarity, support the company’s credibility and give the team a practical foundation for keeping information current.',
    points: [
      'A structured website experience for a specialist contracting company',
      'Responsive page layouts for desktop, tablet and mobile visitors',
      'A WordPress content foundation that can support ongoing website updates',
    ],
    outcome:
      'Scorpion Arabia gained a more structured corporate website that can communicate its capabilities to project owners, EPC contractors and other prospective partners.',
  },
  {
    title: '2. Organising Complex Services for Technical Buyers',
    description:
      'Trenchless infrastructure work is highly specialized. Visitors may need to understand the difference between drilling, micro-tunnelling, lining and pipeline protection before they know which service fits their project. We organized the service experience so those capabilities are easier to navigate and evaluate.',
    points: [
      'Clearer service groupings and dedicated service information',
      'Content that explains applications and the types of project each method can support',
      'Navigation paths connecting company information, services and relevant project examples',
    ],
    outcome:
      'Prospective clients have a clearer route from understanding a capability to assessing whether it is relevant to their project requirements.',
  },
  {
    title: '3. Building Trust Through Project and Capability Evidence',
    description:
      'Enterprise buyers often evaluate more than a service description. They also look for evidence of relevant experience, equipment, operating capability and quality processes. We used the site structure to make key company and project information easier to find alongside the service offering.',
    points: [
      'Dedicated space for project examples and technical delivery information',
      'More accessible company, capability and equipment information',
      'Clearer routes to supporting details before a prospect makes contact',
    ],
    outcome:
      'The website can help visitors build context and confidence before submitting a technical enquiry.',
  },
  {
    title: '4. Applying Conversion Rate Optimization Principles',
    description:
      'The goal was not simply to make the website look more modern. We considered how a technical buyer moves from discovering a service to deciding whether to contact the team. Calls to action and enquiry routes were placed around the information that helps visitors evaluate the company.',
    points: [
      'Prominent technical-proposal and project-discussion calls to action',
      'Clear contact options for visitors ready to discuss requirements',
      'A more direct path from service and project information to an enquiry',
    ],
    outcome:
      'The website gives interested visitors a clearer next step instead of leaving contact as an afterthought.',
  },
  {
    title: '5. Supporting Search Visibility Through Better Structure',
    description:
      'Search visibility depends on more than metadata. A service-led website needs clear page purpose, useful content and sensible relationships between related topics. We structured the website around the company’s real service areas so both visitors and search engines can better understand its offerings.',
    points: [
      'Dedicated pages for important specialist services',
      'Clearer information hierarchy across service and company content',
      'Contextual connections between relevant services, projects and contact paths',
    ],
    outcome:
      'The site provides a stronger content foundation for organic discovery, without assuming that website changes alone guarantee specific rankings.',
  },
  {
    title: '6. Turning the Website into a Practical Business Enquiry Channel',
    description:
      'The redesigned experience connects service discovery, proof of capability and contact options into one journey. The business reported more conversions and form submissions after the website work, indicating that the site was generating more enquiry activity.',
    points: [
      'Clearer routes for technical proposal requests and project discussions',
      'Service context around key enquiry actions',
      'A website structure that can be improved as service priorities evolve',
    ],
    outcome:
      'Scorpion Arabia reported an increase in conversions and form submissions after the rebuild. Exact before-and-after figures were not provided, so no percentage uplift is claimed here.',
  },
];

const deliverables = [
  {
    area: 'Enterprise website',
    detail: 'A WordPress website structured around the needs of a specialist infrastructure contractor.',
  },
  {
    area: 'Service architecture',
    detail: 'Clearer routes to trenchless, drilling, pipeline and protection services.',
  },
  {
    area: 'Project and capability content',
    detail: 'More accessible project examples and company information to support buyer evaluation.',
  },
  {
    area: 'Conversion-focused UX',
    detail: 'More deliberate calls to action and clearer paths to technical proposals and enquiries.',
  },
  {
    area: 'Organic search foundation',
    detail: 'A more organized service-content structure to support search discovery.',
  },
  {
    area: 'Reported enquiry improvement',
    detail: 'The client reported more conversions and form submissions after the website build; no exact uplift is stated.',
  },
];

export default function ScorpionArabiaCaseStudy() {
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
          <span>Bixeltek</span>
          <span>/</span>
          <span>WordPress Website Development</span>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="about" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            A Digital Presence Built for Complex Infrastructure Services
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Scorpion Arabia for Contracting Services delivers specialized trenchless infrastructure and pipeline solutions across Saudi Arabia and the wider GCC. Its work spans services such as horizontal directional drilling, micro-tunnelling and pipe jacking, pipeline rehabilitation, lining and coating protection.
            </p>
            <p>
              For a business serving technical and enterprise buyers, a website needs to do more than list services. It should make complex capabilities easier to understand, provide useful evidence of experience and help qualified visitors take the next step toward a project discussion.
            </p>
            <p>
              Bixeltek built an enterprise-level WordPress website designed around those needs: clearer service discovery, more accessible project and capability information, and conversion paths that make it easier to request a technical proposal or contact the team.
            </p>
          </div>
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Challenge</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Infrastructure projects involve technical requirements, site constraints, safety considerations and multiple decision-makers. The website therefore needed to help visitors assess the company’s services and credibility before initiating a conversation.
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li><span className="font-semibold">Specialist services are not self-explanatory:</span> visitors need to understand the purpose and applications of different trenchless and pipeline methods.</li>
              <li><span className="font-semibold">Enterprise buyers need confidence:</span> company capabilities, project examples and relevant technical information must be easy to find.</li>
              <li><span className="font-semibold">Enquiries require context:</span> a visitor evaluating a complex project needs a clear route to request a proposal or discuss requirements.</li>
              <li><span className="font-semibold">The website must support ongoing change:</span> service information and project content need a maintainable structure as the business evolves.</li>
              <li><span className="font-semibold">Online activity needs to become business activity:</span> the website should guide relevant visitors toward meaningful enquiries, not just generate page views.</li>
            </ul>
          </div>
        </div>

        <section id="strategy" className="scroll-mt-32 py-6">
          <h2 className="mb-2 text-4xl font-bold text-[#670ef7] font-sofiasanscondensed">The Bixeltek Build</h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-700 font-poppins">
            We treated the website as a business-development tool: organize the service portfolio, make proof easier to assess, guide visitors through the decision journey and give high-intent prospects a clear next step.
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
                <div className="max-w-2xl rounded-lg border border-purple-100 bg-purple-50/60 px-4 py-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#670ef7]">What this achieved</p>
                  <p className="text-sm leading-relaxed text-gray-800 font-poppins">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div id="conversion" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">From Service Discovery to a Project Enquiry</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Conversion Rate Optimization (CRO) informed how the site presents key information and next steps. For a technical contractor, the action is often not an immediate purchase; it is a meaningful conversation about specifications, site conditions, project scope or a request for a technical proposal.
            </p>
            <p>
              We aligned calls to action with that buying journey, making proposal and contact options easier to identify while visitors explore service and project information. This gives prospects a clearer transition from evaluating capability to contacting the business.
            </p>
            <p>
              The client reported that conversions and form submissions increased after the website was built. Without an agreed before-and-after reporting period or verified figures, we are presenting this as a qualitative client-reported outcome rather than assigning an uplift percentage.
            </p>
            <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm italic text-gray-600">
              Conversion performance depends on traffic quality, project demand, form usability and the follow-up process as well as the website itself. The reported improvement is not a guarantee of the same result for every business.
            </p>
            <p>
              This reflects Bixeltek’s approach to <Link href="/services/web-design/wordpress" className="font-semibold text-[#670ef7] underline underline-offset-2 hover:text-purple-900">WordPress website development</Link>: build around the customer journey and content needs, not just the visual layer. For businesses that want to improve the path from relevant visits to enquiries, our <Link href="/services/conversion-rate-optimization" className="font-semibold text-[#670ef7] underline underline-offset-2 hover:text-purple-900">Conversion Rate Optimization service</Link> focuses on identifying and reducing that friction.
            </p>
          </div>
        </div>

        <div id="results" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">What Changed</h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The rebuild gave Scorpion Arabia a clearer enterprise website experience and a more direct route from service research to project enquiries. The client reported more conversions and form submissions following the website work; because exact analytics figures were not provided, the result is described without an unsupported numerical claim.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4">Area</th>
                  <th className="p-4">Delivered / Reported Outcome</th>
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
          <p className="mt-3 text-sm leading-relaxed text-gray-500 font-poppins">
            Outcome note: the increase in conversions and form submissions is based on the project information provided by the client. No exact counts, conversion rates or percentage changes were supplied for publication.
          </p>
        </div>

        <div id="takeaway" className="scroll-mt-32 pb-6">
          <h2 className="mb-4 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-3 pl-4 text-xl italic text-gray-900 md:text-2xl">
            An enterprise website should make complex capabilities easier to evaluate—and make the next business conversation easier to start.
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For Scorpion Arabia, Bixeltek combined a WordPress website build with clearer service organization, stronger access to project and capability information, and conversion-focused enquiry paths. The work was designed to support how enterprise buyers evaluate specialized infrastructure partners and to turn more of that online interest into form submissions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For businesses with complex services and long consideration cycles, the website needs to explain the offer, build confidence and provide a relevant next step. Design, content structure and conversion paths should work together toward that purpose.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          {['WordPress Website Development', 'Enterprise Web Design', 'Service Page Architecture', 'Conversion Rate Optimization', 'B2B Lead Generation'].map((label) => (
            <span key={label} className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764]">{label}</span>
          ))}
        </div>

        <section id="cta" className="relative mt-10 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need an Enterprise Website That Turns Technical Interest into Project Enquiries?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base font-poppins">
                Bixeltek builds WordPress websites for industrial and B2B businesses that need clear service pages, credible project information and more effective enquiry journeys across Saudi Arabia and the GCC.
              </p>
            </div>
            <Link href="/contact-us" className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
              Discuss Your Website Project
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
