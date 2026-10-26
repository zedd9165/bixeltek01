import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved plumbing industry image.
// Verify the actual asset path before publishing.
import plumbingOverviewImg from '@/assets/plumbing-overview.jpg';

/**
 * Bixeltek — Plumbing Industry Page
 *
 * Category: Home & Local Services
 *
 * Target businesses:
 * - Residential plumbing contractors
 * - Emergency plumbing service providers
 * - Drain cleaning and sewer line specialists
 * - Water heater repair and installation companies
 * - Whole-home repiping contractors
 * - Commercial plumbing contractors
 *
 * Customer journey:
 * Discover -> Evaluate -> Call -> Dispatch -> Follow-up
 *
 * Core priorities:
 * Local SEO, Google Local Services Ads (LSAs), Google Ads, tap-to-call mobile UI,
 * call tracking, service-area coverage, and dispatch CRM integrations.
 */

export const plumbingV2Data: IndustryPageData = {
  slug: 'plumbing',
  aliases: [
    'plumbing-services',
    'plumbers',
    'plumbing-contractors',
    'emergency-plumbing',
  ],
  industryName: 'Plumbing',

  seo: {
    title: 'Plumbing Marketing & Digital Growth Solutions | Bixeltek',
    description:
      'Help more local homeowners and businesses find and hire your plumbing company. Bixeltek connects plumbing SEO, Google Ads, high-converting websites, call tracking, and CRM automation to drive qualified service calls.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR PLUMBING CONTRACTORS',
    title: 'Get Your Plumbing Business Found,',
    highlightedTitle: 'Trusted & Booked.',
    description:
      'When pipes leak or drains back up, homeowners want a licensed plumber who responds quickly and services their neighborhood. We help plumbing contractors dominate local search, convert emergency calls, and win high-ticket repiping and water heater replacements through proven digital infrastructure.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'BUILT AROUND HOW PLUMBING CLIENTS DECIDE',
    title: (
      <>
        Urgent Emergencies Need Fast Action.
        {' '}
      </>
    ),
    highlightedTitle: 'High-Ticket Projects Demand Credibility.',
    description:
      'Someone dealing with a burst pipe, overflowing toilet, or failed water heater is looking for immediate dispatch and upfront pricing transparency. Conversely, a homeowner or facility manager planning a whole-home repipe, sewer trenchless lining, or commercial rough-in spends time comparing contractor licenses, customer reviews, financing options, and warranty terms before booking.',
    secondaryDescription:
      'Bixeltek designs plumbing websites and digital campaigns that excel in both scenarios. We streamline tap-to-call mobile paths for frantic emergency searches while providing deep, educational service guides and project showcases for high-margin replacements. Every enquiry connects directly to your dispatch team with zero lead slippage.',
    imageSrc: plumbingOverviewImg,
    imageAlt:
      'Professional licensed plumber inspecting residential pipe fittings and water distribution equipment',

    features: [
      {
        title: 'Dominate High-Intent Local Searches',
        description:
          'Position your business at the top of Google Maps and local search results when homeowners search for emergency plumbers, drain clearing, or water heater installation in your exact service zones.',
      },
      {
        title: 'Instant Mobile Tap-to-Call Conversion',
        description:
          'Over 75% of emergency plumbing searches happen on smartphones. We engineer mobile landing interfaces that load in milliseconds and make contacting your dispatch desk completely frictionless.',
      },
      {
        title: 'Track Revenue From Call to Booked Job',
        description:
          'Eliminate guesswork with dynamic call tracking, form attribution, and seamless integration with dispatch software like ServiceTitan, Housecall Pro, or Jobber.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE FOCUS',
    headline: 'Turn Local Searches Into High-Margin Booked Jobs',
    subheadline:
      'Plumbing leads range from quick drain snaking to multi-thousand-dollar sewer lines. We build digital campaigns tailored to the high-value services your business wants to grow.',

    items: [
      {
        tag: '01 · LOCAL MAPS & SEO',
        title: 'Rank in the Google Local 3-Pack for High-Value Queries',
        description:
          'We optimize your Google Business Profile, service-area schema, localized landing pages, and citation authority so your trucks are the first option customers see when water problems strike in your target suburbs.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Map pack domination',
        chips: [
          'Google Business Profile',
          'Local 3-Pack ranking',
          'Service-area landing pages',
          'Review velocity strategy',
          'Plumbing schema markup',
          'Geo-targeted citation signals',
        ],
      },
      {
        tag: '02 · GOOGLE ADS & LSAS',
        title: 'Capture Urgent Emergency Demand Instantly',
        description:
          'Target ready-to-book homeowners searching for active leaks, backed-up drains, and broken heaters. We combine Google Local Services Ads (Google Guaranteed) with tightly scrubbed search campaigns to keep your cost per qualified lead low.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'High-intent search ads',
        chips: [
          'Google Guaranteed / LSAs',
          'Negative keyword filtering',
          'Tap-to-call mobile extensions',
          'After-hours campaign rules',
        ],
      },
      {
        tag: '03 · DEDICATED SERVICE PAGES',
        title: 'Separate Emergency Fixes From High-Ticket Replacements',
        description:
          'A generic services list confuses buyers. We create dedicated landing architectures for water heaters, tankless conversions, trenchless sewer repair, and whole-home repiping with clear financing options and proof.',
        colSpan: 'col-span-1',
        accent: 'teal',
        pill: 'Dedicated service funnels',
        chips: [
          'Tankless water heaters',
          'Sewer line repair',
          'Whole-home repiping',
          'Water treatment & filtration',
        ],
      },
      {
        tag: '04 · DISPATCH & AUTOMATION',
        title: 'Plug Into Your Dispatch Software (ServiceTitan, Jobber, Housecall Pro)',
        description:
          'Connect website booking forms and phone calls directly into your dispatch calendar or CRM. Automate instant SMS confirmations and customer notifications to lock in appointments before competitors can respond.',
        colSpan: 'col-span-2',
        accent: 'violet',
        pill: 'CRM & dispatch sync',
        chips: [
          'ServiceTitan / Jobber sync',
          'Instant 60-second SMS replies',
          'Dynamic call recording & tracking',
          'After-hours lead routing',
          'Appointment reminder sequences',
        ],
      },
    ],
  },

  comparison: {
    badge: 'WHY SPECIALIZATION MATTERS',
    headline: 'Generic Agency Templates vs. High-Performance Plumbing Architecture',
    subheadline:
      'See why conventional contractor websites lose emergency calls and waste precious ad spend on tire-kickers.',
    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },
    items: [
      {
        feature: 'Mobile Emergency UX',
        industryStandard:
          'Cluttered navigation menus, tiny phone numbers, and slow popups that frustrate frantic homeowners during a leak.',
        ourApproach:
          'Persistent tap-to-call sticky header, instant 1-tap dial, upfront emergency dispatch confirmation, and sub-second loading.',
      },
      {
        feature: 'Targeted Service Structure',
        industryStandard:
          'A single generic "Services" page that dumps all plumbing tasks together, failing to rank for high-ticket search queries.',
        ourApproach:
          'Dedicated, indexable service silos for water heaters, drain snaking, repiping, and sewer work with specific customer proof.',
      },
      {
        feature: 'Call & Lead Attribution',
        industryStandard:
          'Counts raw pageviews and form submissions with zero insight into which campaign produced an actual dispatched technician.',
        ourApproach:
          'Dynamic number insertion (DNI) tracking phone calls, campaign sources, keyword origin, and booked revenue per channel.',
      },
      {
        feature: 'Service Area Targeting',
        industryStandard:
          'Spammy, duplicate city pages generated with low-quality AI text that risk Google search penalties and confuse visitors.',
        ourApproach:
          'Authentic service-area architecture demonstrating genuine local coverage, local testimonials, and verified contractor licensing.',
      },
      {
        feature: 'Speed to Lead & Dispatch',
        industryStandard:
          'Inbound forms sit in an unmonitored inbox for hours while the homeowner calls the next plumber on the search results.',
        ourApproach:
          'Instant lead notifications pushed straight to dispatch via SMS and CRM integration, enabling callbacks within 2 minutes.',
      },
    ],
  },

  process: {
    badge: 'STRUCTURED IMPLEMENTATION',
    headline: 'Our 4-Step Plumbing Growth Roadmap',
    subheadline:
      'A predictable, transparent deployment framework designed to expand your service coverage and keep your crews booked.',
    steps: [
      {
        step: '01',
        title: 'Market Audit & Service-Area Analysis',
        summary:
          'We review your service radius, technician capacity, current search rankings, and competitors to pinpoint your most profitable growth opportunities.',
        details: [
          'Google Business Profile and local citation health check',
          'Analysis of high-margin jobs (repipe, water heaters, sewer)',
          'Competitor ad spend and local organic keyword mapping',
          'Current phone conversion and dispatch process review',
        ],
      },
      {
        step: '02',
        title: 'High-Converting Website & Mobile Architecture',
        summary:
          'We engineer a fast, modern digital presence tailored to how residential homeowners and commercial clients search for plumbing help.',
        details: [
          'Mobile-first tap-to-call interface with sub-second speeds',
          'Service-specific landing pages with transparent trust badges',
          'Licensing, insurance, and warranty assurance displays',
          'Streamlined quote request and emergency scheduling forms',
        ],
      },
      {
        step: '03',
        title: 'Local SEO & Google Ads Campaign Activation',
        summary:
          'We launch targeted local visibility campaigns to capture homeowners actively seeking emergency repairs and planned replacements.',
        details: [
          'Google Local Services Ads (Google Guaranteed) configuration',
          'High-intent Google Ads with strict negative keyword scrubbing',
          'Google Maps optimization and local review generation plan',
          'Hyper-local landing pages for primary service suburbs',
        ],
      },
      {
        step: '04',
        title: 'Tracking, CRM Integration & Ongoing Optimization',
        summary:
          'We connect call analytics and dispatch workflows to measure return on investment and continuously lower your customer acquisition cost.',
        details: [
          'Call recording and keyword attribution setup',
          'Integration with ServiceTitan, Jobber, Housecall Pro, or CRM',
          'Bi-weekly lead quality audits and negative keyword updates',
          'Monthly transparent reporting on cost per booked call',
        ],
      },
    ],
  },

  metrics: {
    headline: 'Measurable Impact Across Every Stage of the Plumbing Funnel',
    items: [
      {
        value: 'Discover',
        label: 'Local search & map impressions',
        subtext:
          'Increase qualified visibility in the Google Local 3-Pack and paid search ads across your key service territories.',
      },
      {
        value: 'Evaluate',
        label: 'Trust & conversion signals',
        subtext:
          'Reassure homeowners with transparent licensing, verified reviews, upfront financing details, and clear service expectations.',
      },
      {
        value: 'Call & Book',
        label: 'Dispatched phone calls & leads',
        subtext:
          'Drive direct phone calls and qualified estimate submissions straight into your dispatch calendar with minimal friction.',
      },
      {
        value: 'Retain',
        label: 'Repeat service & maintenance agreements',
        subtext:
          'Help build ongoing customer value through annual plumbing inspection programs, water heater flushes, and service memberships.',
      },
    ],
  },

  faqs: {
    badge: 'FREQUENTLY ASKED QUESTIONS',
    headline: 'Common Questions From Plumbing Business Owners',
    items: [
      {
        question: 'How do you help our plumbing company get more high-paying jobs like repiping and water heaters?',
        answer:
          'We build dedicated service landing pages specifically engineered for high-ticket installations like tankless water heaters, whole-home repiping, and trenchless sewer repairs. These pages highlight manufacturer certifications, financing alternatives, project timelines, and transparent warranties—answering customer concerns before they call.',
      },
      {
        question: 'Should our plumbing business invest in Google Ads or Local SEO first?',
        answer:
          'Both serve essential roles at different stages. Google Ads and Local Services Ads (Google Guaranteed) deliver immediate phone calls from homeowners needing same-day service. Local SEO builds long-term organic authority and Map Pack prominence that continuously delivers low-cost calls month after month. We often combine both for optimal short-term and sustained growth.',
      },
      {
        question: 'Can you integrate incoming leads with our dispatch software (like ServiceTitan or Housecall Pro)?',
        answer:
          'Yes. Depending on your dispatch or CRM platform, we connect website appointment requests and call tracking endpoints directly via webhooks or native integrations. This ensures your dispatchers receive immediate notifications with caller details and marketing source attribution.',
      },
      {
        question: 'How do you prevent wasting ad spend on low-profit or out-of-area calls?',
        answer:
          'We implement strict geo-fencing limited strictly to the zip codes and municipalities your technicians cover. Additionally, we actively maintain exhaustive negative keyword lists to filter out searches for DIY plumbing advice, cheap part numbers, mobile home plumbing, or services your business does not provide.',
      },
      {
        question: 'Can we improve our existing website instead of completely redesigning it?',
        answer:
          'Yes. We first conduct an audit of your current site speed, mobile user experience, conversion paths, and local SEO structure. If the underlying codebase is sound, targeted optimizations to your mobile header, service pages, and call tracking may be all that is needed.',
      },
      {
        question: 'How do you track whether calls generated actually turned into paid jobs?',
        answer:
          'We configure dynamic call tracking numbers that associate phone calls with specific campaigns, keywords, and landing pages. By cross-referencing call logs and recordings with your dispatch software or job invoice records, you can clearly evaluate your true cost per booked job and return on ad spend.',
      },
    ],
  },

  finalCta: {
    headline: 'Ready to Fill Your Plumbing Dispatch Board With Profitable Jobs?',
    subheadline:
      'Whether you want to capture more same-day emergency calls, dominate local Google Maps, or grow your installation revenue, we build the digital foundation your plumbing business needs.',
    bulletPoints: [
      'Dominate the Google Local 3-Pack in your primary service areas',
      'Deploy mobile-first tap-to-call architecture for emergency jobs',
      'Capture high-margin water heater, repiping, and sewer replacements',
      'Integrate leads seamlessly with your dispatch software and CRM',
    ],
    buttonText: 'Discuss Your Plumbing Business',
  },
};

export const plumbingPage = plumbingV2Data;
export const plumbingPageV2 = plumbingV2Data;
export default plumbingPage;
