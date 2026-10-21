'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import rootedHeroImg from '@/assets/rooted-tree-casestudy.png';
import { MdAdsClick, MdCheckCircle, MdLocationOn, MdOutlineWeb, MdPhoneInTalk, MdTrendingUp } from 'react-icons/md';

const sections = [
  { id: 'overview', label: 'About Rooted Tree Services' },
  { id: 'challenge', label: 'The Acquisition Challenge' },
  { id: 'approach', label: 'The Combined Strategy' },
  { id: 'website', label: 'The Website' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'results', label: 'What Changed' },
  { id: 'takeaway', label: 'The Takeaway' },
  { id: 'cta', label: 'Grow Your Local Service Business' },
];

type ApproachStep = {
  title: string;
  description: ReactNode;
  points: string[];
  outcome: string;
  challenge?: {
    problem: string;
    solution: string;
  };
};

const approachSteps: ApproachStep[] = [
  {
    title: 'Build the Website Around the Services Customers Actually Need',
    description: (
      <>
        Rooted offers more than one type of tree care. We structured the website so visitors can find the right service (from emergency tree removal and branch removal to pruning, stump grinding, crane-assisted work, and arborist reports) without having to interpret a generic list. The build is presented as a connected service website, not simply a digital brochure.
      </>
    ),
    points: [
      'Clear paths into core tree-care services and specialist jobs',
      'Prominent calls to call the team or request a free quote',
      'Service information organized to support both urgent and planned work',
    ],
    outcome:
      'Visitors arriving with a specific tree problem have a clearer route to relevant information and the next step.',
    challenge: {
      problem:
        'A tree-care company may handle very different jobs, but one generic page can make visitors work too hard to confirm that the team handles their particular need.',
      solution:
        'We used a service-led structure with dedicated pages and clear enquiry actions, so people can move from the job they need done to a relevant service page or quote request.',
    },
  },
  {
    title: 'Make Local Coverage Clear Across the GTA',
    description: (
      <>
        Tree-service searches are closely tied to where a customer needs work done. The website supports local discovery with service-area pages for Toronto, Mississauga, Etobicoke and other Greater Toronto Area communities.
      </>
    ),
    points: [
      'Location pages for key communities served by the business',
      'Service and contact information connected to local needs',
      'A structure that helps visitors check whether their property is within the service area',
    ],
    outcome:
      'The site can speak more directly to the locations Rooted serves instead of relying on a single generic service-area statement.',
  },
  {
    title: 'Bring Experience and Trust Into the Decision',
    description:
      'Tree removal and emergency work can involve safety risks, property access and significant costs. Customers need confidence in the people they invite onto their property before requesting an estimate.',
    points: [
      'ISA-certified arborist positioning and long-standing business experience',
      'Customer reviews, project imagery and service-specific information',
      'Visible contact options, free-quote messaging and safety-related credentials',
    ],
    outcome:
      'Relevant proof and practical information help visitors evaluate the provider before making contact.',
    challenge: {
      problem:
        'Strong field expertise does not automatically come across online if credentials, previous work, contact details and service expectations are difficult to find.',
      solution:
        'We brought trust information and practical calls to action into the website journey, helping the site explain not only what Rooted does but why a visitor can consider the team for the job.',
    },
  },
  {
    title: 'Align Google Ads With High-Intent Local Searches',
    description: (
      <>
        We focused paid search around relevant tree-service demand in Rooted’s service area. The campaign approach connects the customer’s immediate need, such as emergency removal, tree removal, or pruning, with an ad message and a destination that makes the next step clear.
      </>
    ),
    points: [
      'Service-led targeting for relevant tree-care searches',
      'Geographic focus aligned with the communities Rooted can serve',
      'Ad messaging and calls to action designed around calls and quote requests',
    ],
    outcome:
      'Google Ads is treated as a local job-acquisition channel, not a way to buy clicks without considering their relevance.',
    challenge: {
      problem:
        'A campaign can spend consistently while attracting searches that are too broad, outside the service area or unrelated to the jobs the team wants.',
      solution:
        'The management focus was local lead relevance and budget efficiency: align keywords and locations with real services, review search-term quality, and use campaign feedback to guide exclusions and budget decisions.',
    },
  },
  {
    title: 'Connect the Ad Click to a Clear Quote Journey',
    description: (
      <>
        A relevant click needs a useful next step. The website combines direct phone contact with a free-quote form that asks for practical job details, helping visitors describe their tree-care needs and giving the business a route to follow up.
      </>
    ),
    points: [
      'Phone and quote actions are easy to find',
      'The enquiry form captures contact and service-location details',
      'Visitors can indicate the service they need instead of sending an unclear general message',
    ],
    outcome:
      'The website and ads work as one journey: the campaign attracts local demand and the page helps turn that interest into a call or quote request.',
  },
  {
    title: 'Optimise for Job Requests, Not Click Volume Alone',
    description: (
      <>
        The ongoing Google Ads approach prioritizes the commercial value of local enquiries. Search relevance, campaign spending and the actions people take after clicking are more useful inputs than impressions or clicks in isolation.
      </>
    ),
    points: [
      'Review search terms and campaign relevance',
      'Refine targeting and budget allocation as evidence accumulates',
      'Use calls and quote enquiries as the business-facing conversion goals where tracking is available',
    ],
    outcome:
      'Campaign decisions stay connected to the work Rooted wants to win, with room to adjust as demand and job mix change.',
  },
];

// Publishing verification: Bixeltek's public Google Ads page includes a testimonial attributed to 'Mark R., Arborist (Canada)' describing steadier job requests while spending less. The public page does not name Rooted Tree Services; only add that specific result after confirming the attribution.

const outcomeCards = [
  {
    icon: MdOutlineWeb,
    title: 'A Website Built for Service Discovery',
    description:
      'Dedicated service and location paths help prospective customers find relevant information without navigating a one-size-fits-all page.',
  },
  {
    icon: MdLocationOn,
    title: 'Clearer Local Relevance',
    description:
      'The website reflects the Greater Toronto Area communities and the range of tree-care services Rooted provides.',
  },
  {
    icon: MdAdsClick,
    title: 'More Focused Paid Search',
    description:
      'Google Ads management centers on relevant local searches and budget efficiency rather than maximising traffic for its own sake.',
  },
  {
    icon: MdPhoneInTalk,
    title: 'A Direct Route to Enquiry',
    description:
      'Calls and quote requests are presented as clear next steps for both urgent jobs and planned tree care.',
  },
];

export default function RootedTreeServicesCaseStudy() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveId(section.id);
            break;
          }
        }
      }
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
          <Link href="/services/google-ads" className="hover:underline">Google Ads</Link>
          <span>/</span>
          <Link href="/services/web-design" className="hover:underline">Web Design</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            About Rooted Tree Services
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Rooted Tree Services provides professional tree care across Toronto and the Greater Toronto Area. Its work spans emergency tree removal, tree and branch removal, pruning and trimming, crane-assisted jobs, stump grinding, tree planting, root care and arborist reports.
            </p>
            <p>
              The business brings long-standing industry experience and ISA-certified arborist expertise to residential, commercial and urgent tree-care needs. Its online presence therefore has two important jobs: help people understand the right service for their situation and make it straightforward to request help.
            </p>
            <p>
              Bixeltek built the Rooted Tree Services website and worked on its <Link href="/services/google-ads" className="font-medium text-[#670ef7] hover:underline">Google Ads</Link> acquisition channel, bringing the <Link href="/services/web-design" className="font-medium text-[#670ef7] hover:underline">website experience</Link> and paid search closer together around local service enquiries.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={rootedHeroImg}
            alt="Rooted Tree Services Website and Google Ads Showcase"
            className="h-auto w-full object-cover"
          />
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: Turn Local Demand Into Relevant Job Requests
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              Tree-service customers often search when they have a specific job in mind: a dangerous tree, storm damage, overgrown branches, a stump that needs removal or a planned pruning job. They need to know quickly whether a company handles that work, serves their location and can be contacted.
            </p>
            <p>
              At the same time, Google Ads can become expensive when campaigns attract broad or poorly matched searches. For a local service business, the goal is not simply to increase clicks. It is to reach people with relevant needs in the areas the company can serve and give them a clear route to request an estimate.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">A Wide Range of Job Types</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">Emergency removals, planned pruning and specialist arborist work require clear service information rather than one generic offer.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">A Defined Service Area</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">Campaigns and landing pages need to reflect the communities the team actually serves across the GTA.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Trust Before the Quote</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">Property owners need confidence in safety, credentials, experience and the company’s working process.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">Advertising Efficiency</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-poppins">Spend needs to support relevant calls and quote requests, not traffic that is unlikely to become a viable job.</p>
            </div>
          </div>
        </div>

        <div id="approach" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Bixeltek Approach: Website + Google Ads
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            We treated the website and paid search as connected parts of the acquisition journey. The website gives each service a clearer home; Google Ads focuses on relevant local demand; calls and quote requests provide a practical next step for prospective customers.
          </p>
          <div className="space-y-14">
            {approachSteps.map((step, index) => (
              <article key={step.title}>
                <div className="mb-4 flex items-center gap-4" aria-hidden="true">
                  <span className="text-5xl font-bold leading-none text-[#670ef7] md:text-6xl font-sofiasanscondensed">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl font-sofiasanscondensed">
                  <span className="sr-only">Step {index + 1}: </span>{step.title}
                </h3>
                <div className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.description}</div>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 md:text-base font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <p className="rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/60 px-4 py-3 text-sm leading-relaxed text-gray-800 md:text-base font-poppins">
                  <span className="font-semibold text-gray-900">Why it matters: </span>{step.outcome}
                </p>
                {step.challenge && (
                  <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                    <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">The Challenge</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700 font-poppins">{step.challenge.problem}</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#670ef7]">Our Response</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700 font-poppins">{step.challenge.solution}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div id="website" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">A Website That Helps Customers Choose the Right Service</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The website combines practical service information with credibility signals and direct contact paths. Visitors can learn about the type of job they need, review experience and customer feedback, explore service-area information, and move toward a phone call or free quote.
            </p>
            <p>
              This is important for a business with both urgent jobs and planned tree care. Someone dealing with a storm-damaged tree needs an obvious emergency contact path; someone planning pruning or stump removal may want to compare services before requesting an estimate. The site supports both journeys.
            </p>
            <p>
              The website also creates a useful base for ongoing <Link href="/services/web-design" className="font-medium text-[#670ef7] hover:underline">website improvement</Link> and <Link href="/local-seo" className="font-medium text-[#670ef7] hover:underline">local SEO</Link>, with service and location pages that can be maintained as business priorities evolve.
            </p>
          </div>
        </div>

        <div id="google-ads" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">Google Ads Built Around Local Job Intent</h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              For tree care, a search for emergency tree removal is not the same as a search for tree planting or routine pruning. Campaigns are more useful when keyword groups, ad copy, location settings and destination pages reflect these differences.
            </p>
            <p>
              Bixeltek’s Google Ads work focused on local lead relevance and more disciplined budget use. The campaign approach prioritises searches that match Rooted’s services and service area, reviews search-term quality, and connects ads to a clear call or quote action rather than treating every click as equal.
            </p>
            <p>
              This follows the same performance principles used in our <Link href="/services/google-ads" className="font-medium text-[#670ef7] hover:underline">Google Ads management</Link> work: assess intent, align the ad with the landing experience, review conversion signals and keep optimising based on the business objective. Exact account metrics are not included here because a verified before-and-after report was not supplied for publication.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 md:p-6">
            <h3 className="mb-3 text-xl font-semibold text-gray-900 font-sofiasanscondensed">What the Combined System Supports</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Service-specific search intent',
                'Targeting within the actual service area',
                'Clear call and quote-request paths',
                'A website that reinforces credibility after the click',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 font-poppins">
                  <MdCheckCircle className="mt-0.5 shrink-0 text-[#670ef7]" aria-hidden="true" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="results" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">What Changed</h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The project connected a service-led website with Google Ads focused on local job intent. Rather than publish an unverified percentage increase, we have highlighted the practical changes that support acquisition and make further optimisation possible.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {outcomeCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <Icon className="mb-3 text-[#670ef7]" size={26} aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 font-sofiasanscondensed">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 font-poppins">{card.description}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-gray-500 font-poppins">
            Calls, quote requests and completed jobs are different outcomes. They should be reviewed separately when assessing lead quality and campaign efficiency.
          </p>
        </div>

        <div id="takeaway" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/50 px-5 py-4 text-xl italic leading-relaxed text-gray-900 md:text-2xl font-poppins">
            “Local lead generation works best when the website answers the customer’s question and the campaign reaches people who are actually looking for that service.”
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The Rooted Tree Services project shows why websites and paid search should not be treated as separate tasks. Service clarity, local context, trust and a straightforward enquiry path give advertising traffic a stronger destination, giving the business a more useful foundation for ongoing optimisation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services delivered:</span>
          <Link href="/services/web-design" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Website Development</Link>
          <Link href="/services/google-ads" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Google Ads Management</Link>
          <Link href="/local-seo" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Local SEO</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Conversion Rate Optimization</Link>
        </div>

        <section id="cta" className="relative z-10 mt-10 overflow-hidden rounded-2xl bg-[#670ef7] px-6 py-10 shadow-lg md:px-8">
          <div className="flex flex-wrap items-center gap-y-6">
            <div className="w-full lg:w-2/3 lg:pr-6">
              <h2 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need More Qualified Tree-Service Leads?
              </h2>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base font-poppins">
                Bixeltek connects conversion-focused websites with Google Ads built around local service intent, helping arborists and home-service businesses create a clearer path from search to quote request.
              </p>
            </div>
            <div className="w-full text-center lg:w-1/3">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
                Discuss Your Lead Generation Strategy
              </Link>
            </div>
          </div>
          <span className="pointer-events-none absolute -right-8 -top-10 -z-0 h-40 w-40 rounded-full border-[28px] border-white/10" aria-hidden="true" />
        </section>
      </div>

      <aside className="hidden h-max w-1/3 justify-start pl-4 md:sticky md:top-32 md:flex">
        <div className="space-y-3 border-l-2 border-gray-200 py-2 pl-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Case Study Navigation</p>
          <nav aria-label="Case study sections" className="space-y-2.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeId === section.id ? 'location' : undefined}
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
