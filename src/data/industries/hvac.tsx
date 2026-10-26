
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved HVAC-specific image.
// Verify the actual asset path before publishing.
import hvacOverviewImg from '@/assets/hvac.jpg';

/**
 * Bixeltek — HVAC Industry Page
 *
 * Category: Home & Local Services
 *
 * Target businesses:
 * - HVAC contractors
 * - Heating and cooling companies
 * - Air conditioning repair and installation businesses
 * - Furnace and heat pump service providers
 * - Commercial HVAC contractors
 * - HVAC maintenance companies
 *
 * Customer journey:
 * Discover -> Evaluate -> Contact -> Schedule -> Retain
 *
 * Core priorities:
 * Local SEO, Google Ads, service pages, conversion
 * optimisation, call tracking and lead management.
 *
 * Service availability, emergency response, licensing,
 * financing and warranty claims require client approval.
 */

export const hvacV2Data: IndustryPageData = {
  slug: 'hvac',
  aliases: [
    'hvac-services',
    'hvac-contractors',
    'heating-and-cooling',
    'air-conditioning-services',
  ],
  industryName: 'HVAC',

  seo: {
    title:
      'HVAC Marketing & Digital Growth Solutions | Bixeltek',
    description:
      'Help more local customers find your HVAC company. Bixeltek connects HVAC SEO, Google Ads, website development, lead tracking and automation to support calls, service enquiries and installation leads.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR HVAC COMPANIES',
    title: 'Turn Local Searches Into',
    highlightedTitle: 'Booked HVAC Service Calls',
    description:
      'Reach homeowners and businesses searching for heating, cooling, repair and installation services. We connect local SEO, Google Ads, conversion-focused websites and lead management to help turn relevant searches into service calls and estimate requests.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'BUILT AROUND HOW HVAC CUSTOMERS DECIDE',
    title: (
      <>
        HVAC Customers Have Different Needs.
        {' '}
      </>
    ),
    highlightedTitle: 'Your Website Should Understand Them.',
    description:
      'Emergency heating and cooling failures demand instant dispatch and clear coverage details, whereas high-efficiency system replacements require transparent financing and equipment comparisons. If emergency contact options are buried or system pricing feels unclear, frustrated homeowners turn to competing contractors. Differentiating these journeys removes hesitation.',
    secondaryDescription:
      'Bixeltek synchronizes local search rankings, targeted paid campaigns, and mobile-first landing pages directly with your seasonal technician capacity. We clarify service capabilities, present energy-rebate guidance, and streamline direct call and booking paths so that high-intent searches consistently convert into profitable repair calls and high-ticket installation consultations.',
    imageSrc: hvacOverviewImg,
    imageAlt:
      'Professional HVAC technician inspecting and servicing a residential heating and air conditioning system',

    features: [
      {
        title: 'Be Visible for the Right HVAC Searches',
        description:
          'Help customers find your business when searching for air conditioning repair, heating services, HVAC installation or maintenance in areas your technicians genuinely cover.',
      },
      {
        title: 'Match the Experience to the Service Need',
        description:
          'Give urgent repair customers a direct contact route while providing installation and replacement customers with useful information about equipment, processes, credentials and estimates.',
      },
      {
        title: 'Connect Enquiries With Your Service Team',
        description:
          'Make calls, appointment requests and estimates easier to manage through suitable tracking, CRM integrations and follow-up workflows that reflect your actual scheduling capacity.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',
    headline:
      'Digital Solutions That Help HVAC Companies Attract and Manage Leads',
    subheadline:
      'From emergency repair searches to planned installations and maintenance contracts, we connect the digital touchpoints that help customers find the right service and contact your team.',

    items: [
      {
        tag: '01 · LOCAL SEO',
        title:
          'Be Found When Customers Search for HVAC Services Nearby',
        description:
          'Heating and cooling searches are strongly influenced by location, service type and season. We assess your Google Business Profile, local organic visibility, service-area coverage and website structure to help customers discover your business for relevant searches. The approach focuses on real operating areas and useful local content rather than duplicate city pages or misleading business locations.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local service visibility',
        chips: [
          'Google Business Profile',
          'HVAC local SEO',
          'AC and heating service pages',
          'Service-area optimisation',
          'Technical SEO',
          'Local search intent',
        ],
      },
      {
        tag: '02 · GOOGLE ADS',
        title:
          'Reach Customers Actively Searching for HVAC Help',
        description:
          'We develop and refine Google Search campaigns around the services and locations you want to prioritise. Repair, replacement and installation searches can have different commercial value, so targeting, landing pages and budgets should reflect those differences. Search-term reviews and conversion data help identify irrelevant clicks and opportunities for improvement.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'High-intent acquisition',
        chips: [
          'AC repair campaigns',
          'Heating service campaigns',
          'Installation lead generation',
          'Location targeting',
          'Search-term optimisation',
        ],
      },
      {
        tag: '03 · HVAC SERVICE PAGES',
        title:
          'Give Every Priority Heating and Cooling Service a Clear Destination',
        description:
          'A customer searching for furnace repair needs different information from someone comparing new air conditioning systems. We create or improve focused pages for the HVAC services your company actually offers, helping visitors understand the service, your coverage area and how to request an appointment or estimate.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'AC repair and installation pages',
          'Heating and furnace services',
          'Heat pump service information',
          'Maintenance and tune-up pages',
          'Relevant contact options',
        ],
      },
      {
        tag: '04 · WEBSITE & CONVERSION',
        title:
          'Make It Easier to Turn HVAC Searches Into Service Enquiries',
        description:
          'Customers should not have to navigate multiple pages to request help with a broken heating or cooling system. We improve mobile usability, click-to-call visibility, service navigation, appointment forms and estimate requests. Different contact routes can support urgent repairs, planned replacements and commercial projects without forcing every visitor through the same process.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Find',
            value: 'The service',
          },
          {
            label: 'Confirm',
            value: 'Coverage',
          },
          {
            label: 'Request',
            value: 'Assistance',
          },
        ],
        chips: [
          'Mobile-first UX',
          'Click-to-call',
          'Appointment requests',
          'Installation estimate forms',
          'Landing-page optimisation',
          'Trust and credibility',
        ],
      },
      {
        tag: '05 · TRUST & CREDIBILITY',
        title:
          'Give Customers Confidence in Your HVAC Experience',
        description:
          'HVAC work can involve significant repair costs, equipment decisions and access to a customer’s property. We help present genuine customer reviews, verified credentials, completed projects, service processes and relevant warranty information. The goal is to help visitors assess your company using accurate evidence rather than unsupported promises.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Verified customer reviews',
          'Licensing and credentials',
          'Completed installation projects',
          'Service and warranty information',
          'Technician and company details',
        ],
      },
      {
        tag: '06 · LEAD MANAGEMENT & AUTOMATION',
        title:
          'Keep Service Requests Organised When Technicians Are Busy',
        description:
          'HVAC teams may be handling calls, field appointments and installation projects throughout the day. We can connect website enquiries with suitable CRM systems, notifications, scheduling tools and follow-up workflows. The implementation should account for working hours, dispatch responsibilities and actual service availability rather than automatically promising immediate attendance.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected operations',
        chips: [
          'CRM integrations',
          'Lead notifications',
          'Service enquiry routing',
          'Scheduling integrations',
          'Customer follow-ups',
        ],
      },
      {
        tag: '07 · ANALYTICS & LEAD TRACKING',
        title:
          'Understand Which HVAC Services and Campaigns Bring Useful Leads',
        description:
          'Website visits and advertising clicks do not show whether an enquiry becomes a relevant service opportunity. We help measure calls, forms, appointment requests and supported booking actions, then review the available data by service type, location and marketing channel. Where reliable CRM information exists, this can support better decisions about repair campaigns, installation leads and seasonal budgets.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Performance visibility',
        chips: [
          'Call conversion tracking',
          'Form submission analytics',
          'Service-level reporting',
          'Campaign attribution',
          'Lead quality analysis',
          'CRM conversion integration',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SEARCH TO SERVICE APPOINTMENT',
    headline:
      'Help HVAC Customers Find the Right Service and Contact Your Team',
    subheadline:
      'Urgent repairs, planned installations and commercial maintenance involve different decisions. We help your digital presence provide the information and contact options customers need at each stage.',

    leftLabel: 'What HVAC Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Local HVAC Contractor',
        industryStandard:
          'Customers often search for air conditioning repair, heating services or HVAC contractors near their property. They want to confirm that the company serves their location and handles the system or service they need.',
        ourApproach:
          'We improve local search visibility, service-area information and relevant service pages so customers can discover your company and confirm whether it is a suitable provider.',
      },
      {
        feature: 'Getting Help With an Urgent Problem',
        industryStandard:
          'When heating or cooling fails unexpectedly, customers may prioritise response availability, a clear phone number and straightforward information about how to request service.',
        ourApproach:
          'We make urgent service contact routes easy to access on mobile and ensure availability claims reflect your actual operating hours and dispatch capabilities. We can create dedicated repair landing pages where appropriate.',
      },
      {
        feature: 'Comparing Installation and Replacement Options',
        industryStandard:
          'Customers considering a new AC unit, furnace or heat pump may want to understand available services, the assessment process, equipment considerations and how estimates are prepared.',
        ourApproach:
          'We organise installation and replacement pages around practical customer questions, relevant equipment information, verified experience and clear estimate requests without promising fixed costs or savings that have not been established.',
      },
      {
        feature: 'Evaluating Contractor Credibility',
        industryStandard:
          'Homeowners and property managers may compare licences, certifications, reviews, project examples, service procedures and available warranties before selecting an HVAC contractor.',
        ourApproach:
          'We help present verified credentials, genuine reviews, completed work and approved service information in a clear and accessible way. Claims are based on what the business can substantiate.',
      },
      {
        feature: 'Requesting an Appointment or Estimate',
        industryStandard:
          'A repair customer may prefer to call, while someone planning an installation may want to submit property and system details. Commercial enquiries can require additional project information.',
        ourApproach:
          'We design contact routes that match these situations, including mobile calls, focused service forms and estimate requests. The objective is to gather useful information without adding unnecessary friction.',
      },
      {
        feature: 'Receiving Confirmation and Follow-Up',
        industryStandard:
          'After making contact, customers want to know whether their request was received and what happens next. HVAC businesses also need a reliable way to route enquiries to the appropriate team.',
        ourApproach:
          'We can connect forms, notifications, scheduling tools and CRM workflows to support enquiry management. Available tracking and service feedback help identify opportunities to improve response processes.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Practical Digital Growth Plan for Your HVAC Business',
    subheadline:
      'We begin with your service mix, coverage areas, seasonal demand and existing lead flow. The strategy is prioritised around the work your team wants and has the capacity to deliver.',

    steps: [
      {
        step: '01',
        title: 'Understand Your HVAC Services and Business Goals',
        summary:
          'We identify your main services, target customers, service areas and operational priorities before recommending acquisition channels or website changes.',
        details: [
          'Review repair, installation, replacement and maintenance services',
          'Identify residential, commercial and geographic priorities',
          'Understand technician capacity, scheduling and enquiry handling',
        ],
      },
      {
        step: '02',
        title: 'Audit Local Visibility and Customer Experience',
        summary:
          'We examine how customers discover your business and whether the website supports their decision to call or request an appointment.',
        details: [
          'Review Google Business Profile and local search presence',
          'Assess service pages, mobile usability and credibility signals',
          'Check existing campaigns, forms, calls and analytics',
        ],
      },
      {
        step: '03',
        title: 'Prioritise Services, Locations and Campaigns',
        summary:
          'We map the opportunities against your business goals, including differences between repair demand, planned installations and maintenance services.',
        details: [
          'Identify relevant HVAC search intent and service-area opportunities',
          'Plan priority landing pages and useful location content',
          'Determine appropriate SEO, paid search and website improvements',
        ],
      },
      {
        step: '04',
        title: 'Implement and Connect the Lead Journey',
        summary:
          'We improve the relevant website pages, campaigns and enquiry routes so customers can move from search to an appropriate contact action.',
        details: [
          'Build or refine service pages and conversion-focused landing pages',
          'Configure suitable Google Ads campaigns and targeting',
          'Improve calls, appointment forms and estimate request journeys',
        ],
      },
      {
        step: '05',
        title: 'Validate Tracking and Enquiry Handling',
        summary:
          'We test important contact actions and check that available tracking and internal workflows operate as expected.',
        details: [
          'Test phone links, forms and appointment request confirmations',
          'Validate supported conversion events and analytics configuration',
          'Review lead notifications, CRM routing and scheduling integrations',
        ],
      },
      {
        step: '06',
        title: 'Review Performance and Refine Priorities',
        summary:
          'We evaluate enquiry quality, service demand and campaign performance using the available evidence and feedback from your team.',
        details: [
          'Review relevant calls, forms, search terms and campaign costs',
          'Assess performance by service, location and seasonal conditions',
          'Refine landing pages, targeting and lead workflows over time',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From HVAC Search to Service Enquiry',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local HVAC visibility',
        subtext:
          'Review heating and cooling search queries, local profile interactions and visits to priority service pages across the locations your technicians cover.',
      },
      {
        value: 'Evaluate',
        label: 'Service information and contact engagement',
        subtext:
          'Assess how visitors interact with repair, installation and maintenance information, credibility signals and contact options to identify potential friction.',
      },
      {
        value: 'Enquire',
        label: 'Service calls and estimate requests',
        subtext:
          'Measure calls, appointment forms and estimate requests where technically available and permitted. Validate enquiry relevance using feedback from your service team.',
      },
      {
        value: 'Improve',
        label: 'Lead quality and acquisition efficiency',
        subtext:
          'Compare channel costs, relevant enquiry trends and available booked-job information. Interpret results alongside weather, seasonality, service capacity and tracking limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS HVAC COMPANIES ASK',
    headline:
      'Growing Your HVAC Business: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our HVAC company get more service calls and installation leads?',
        answer:
          'We help HVAC businesses improve how local customers discover their services, evaluate the company and request assistance. Depending on your current setup, this may involve local SEO, Google Ads, service landing pages, website development, conversion optimisation, call tracking and enquiry automation. We focus on attracting relevant requests for services and locations your team can support rather than simply increasing website traffic.',
      },
      {
        question:
          'Is Google Ads or SEO better for HVAC lead generation?',
        answer:
          'Both can be useful. SEO supports ongoing visibility for relevant local heating and cooling searches, while Google Ads can reach people actively searching for selected services in your coverage area. The right balance depends on competition, seasonality, advertising budget, website readiness and your capacity to handle new enquiries. We assess these factors before recommending priorities.',
      },
      {
        question:
          'Can you help us generate emergency AC repair or heating repair leads?',
        answer:
          'If your business genuinely provides urgent or emergency HVAC services, we can develop relevant service pages, search campaigns and mobile contact journeys. The website and ads should communicate your actual availability and service areas accurately. We would not advertise 24-hour response, immediate dispatch or emergency coverage unless your business can reliably provide it.',
      },
      {
        question:
          'Should we create separate pages for AC repair, furnace repair and HVAC installation?',
        answer:
          'Separate pages can be valuable because these services involve different customer needs, search terms and enquiry journeys. Repair customers may prioritise availability, while installation customers often need information about equipment, assessment and estimates. We recommend focused pages for services you actually provide when the additional content helps customers make informed decisions.',
      },
      {
        question:
          'How can our HVAC business appear in searches across multiple cities?',
        answer:
          'We review your genuine service coverage, Google Business Profile eligibility and relevant geographic search demand. Improvements may include accurate service-area information, useful location-specific content and stronger internal linking. We avoid duplicate city pages, misleading addresses and claims about locations your technicians do not serve.',
      },
      {
        question:
          'Can you help us get more HVAC replacement and installation enquiries?',
        answer:
          'We can improve installation-focused service pages, search visibility, eligible campaigns and estimate request journeys. These pages should explain the types of systems your company works with, how assessments are handled and what customers can expect before receiving a quote. Relevant credentials, completed projects and approved financing information may also be useful when genuinely available.',
      },
      {
        question:
          'Can you improve our current HVAC website instead of building a new one?',
        answer:
          'Yes. We first assess the current platform, service content, local SEO foundations, mobile usability, page speed and contact routes. If the existing website supports the necessary changes, targeted improvements may be more practical than a full rebuild. We recommend replacement only when technical or structural limitations justify it.',
      },
      {
        question:
          'Can you track calls and enquiries from Google Ads and our HVAC website?',
        answer:
          'We can configure suitable form, phone interaction and supported call-tracking integrations depending on your location, provider and technical setup. These tools can help measure important actions and, in some cases, associate enquiries with marketing channels. Call recording and personal data processing must follow applicable consent and privacy requirements, and attribution may not capture every customer interaction.',
      },
      {
        question:
          'Can you connect our HVAC website with scheduling or field-service software?',
        answer:
          'We can assess integrations with CRM, scheduling and field-service systems where suitable APIs or supported connectors are available. Potential workflows include enquiry routing, appointment requests, notifications and status updates. The implementation depends on your existing software, data quality, access permissions and how your dispatch team operates.',
      },
      {
        question:
          'How do you handle seasonal changes in HVAC demand?',
        answer:
          'Heating and cooling demand can change with weather, location and seasonal conditions. We review historical performance where available and adjust service priorities, landing pages and campaign budgets based on relevant demand and your operational capacity. Seasonal planning should be informed by actual market and business data rather than assuming the same pattern applies everywhere.',
      },
      {
        question:
          'How much does HVAC marketing cost, and what do you need to get started?',
        answer:
          'Costs depend on your target market, competition, website condition, service priorities, advertising budget and technical requirements. A local SEO improvement project is different from a complete website rebuild with campaign management and CRM integrations. To get started, share your website, HVAC services, service areas, existing marketing activity and the types of jobs you want to attract. We can then recommend a suitable scope and implementation plan.',
      },
    ],
  },

  finalCta: {
    headline:
      'Help More Local Customers Find and Contact Your HVAC Business',
    subheadline:
      'Whether you want more relevant repair enquiries, stronger installation visibility, a better website or improved lead management, we can help identify the digital opportunities worth prioritising for your heating and cooling business.',
    bulletPoints: [
      'Identify HVAC SEO and local service-area opportunities',
      'Improve repair, installation and maintenance service pages',
      'Connect Google Ads with relevant calls and estimate requests',
      'Track enquiries and streamline suitable lead management workflows',
    ],
    buttonText: 'Discuss Your HVAC Business',
  },
};

export const hvacPage = hvacV2Data;
export const hvacPageV2 = hvacV2Data;
