
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER: Replace with an approved cleaning-services image.
// Verify the actual asset path before publishing.
import cleaningOverviewImg from '@/assets/cleaning-overview.jpg';

/**
 * Bixeltek — Cleaning Services Industry Page
 *
 * Category: Home & Local Services
 *
 * Audience:
 * Residential cleaning companies, commercial cleaning
 * contractors, office cleaning businesses, deep cleaning
 * specialists and multi-location cleaning providers.
 *
 * Journey:
 * Discover -> Compare -> Request -> Schedule -> Retain
 *
 * All service descriptions, insurance claims, credentials,
 * pricing and customer results require business approval.
 */

export const cleaningV2Data: IndustryPageData = {
  slug: 'cleaning-services',
  aliases: [
    'cleaning',
    'cleaning-companies',
    'commercial-cleaning',
  ],
  industryName: 'Cleaning Services',

  seo: {
    title:
      'Cleaning Company Marketing & Digital Growth | Bixeltek',
    description:
      'Grow your cleaning business with local SEO, Google Ads, conversion-focused websites, quote requests and booking automation. Digital solutions for residential and commercial cleaning companies.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR CLEANING COMPANIES',
    title: 'Turn Online Searches Into',
    highlightedTitle: 'Recurring Bookings',
    description:
      'Reach homeowners and businesses looking for reliable cleaning services in your area. We connect local SEO, Google Ads, website development and better booking experiences to help turn relevant searches into enquiries and cleaning appointments.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'BUILT AROUND HOW CUSTOMERS BOOK CLEANING',
    title: (
      <>
        Customers Want a Cleaner Space.
        {' '}
      </>
    ),
    highlightedTitle: 'They Also Want an Easier Way to Book.',
    description:
      'Residential clients look for rapid pricing and immediate scheduling, while commercial facility managers evaluate staffing reliability, insurance, and tailored service contracts. When checklists are vague or booking steps feel opaque, prospective clients leave. A transparent, segmented digital journey removes doubt and encourages immediate inquiries.',
    secondaryDescription:
      'Bixeltek aligns local search visibility, clear scope definitions, and frictionless booking paths with your actual operational capacity. We optimize how residential and commercial clients discover your cleaning services, structuring quote forms and automated follow-ups to turn local search traffic into predictable, recurring service revenue without unnecessary administrative overhead.',
    imageSrc: cleaningOverviewImg,
    imageAlt:
      'Professional cleaning team providing a residential or commercial cleaning service',

    features: [
      {
        title: 'Reach Customers in the Right Areas',
        description:
          'Help people discover your cleaning services in the neighbourhoods, towns and commercial areas your teams actually cover. Align local visibility with realistic travel distances and service availability.',
      },
      {
        title: 'Make Services and Expectations Clear',
        description:
          'Explain the difference between regular cleaning, deep cleaning, move-in or move-out cleaning and commercial contracts where offered. Help customers understand the scope before requesting a quote.',
      },
      {
        title: 'Simplify Quotes, Bookings and Follow-Up',
        description:
          'Make it easy to share property details, request a cleaning estimate or enquire about recurring services. Connect appropriate booking and follow-up workflows so enquiries can be handled consistently.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',
    headline:
      'Digital Solutions That Help Cleaning Companies Win and Manage Enquiries',
    subheadline:
      'From the first local search to a completed booking, we improve the digital touchpoints that help customers choose your service and your team manage the demand.',

    items: [
      {
        tag: '01 · LOCAL SEO',
        title:
          'Get Found Where Your Cleaning Teams Actually Work',
        description:
          'Cleaning searches are highly location-dependent. We review your Google Business Profile, service-area information, local rankings and relevant website pages to improve visibility for the services and locations you cover. The focus is on useful geographic relevance rather than repetitive city pages or addresses that do not represent real operations.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local service visibility',
        chips: [
          'Google Business Profile',
          'Residential cleaning SEO',
          'Commercial cleaning SEO',
          'Service-area pages',
          'Local search intent',
          'Technical SEO',
        ],
      },
      {
        tag: '02 · GOOGLE ADS',
        title:
          'Reach Customers Actively Looking for Cleaning',
        description:
          'We build and refine search campaigns around the cleaning services you want to promote, the locations you serve and the enquiries your team can handle. Search-term reviews, negative keywords and relevant landing pages help identify and reduce spending on unrelated clicks.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Intent-led acquisition',
        chips: [
          'Service-specific campaigns',
          'Location targeting',
          'Search-term optimisation',
          'Conversion measurement',
        ],
      },
      {
        tag: '03 · SERVICE PAGES',
        title:
          'Give Every Priority Cleaning Service a Clear Destination',
        description:
          'Regular home cleaning, end-of-tenancy cleaning and office cleaning can involve different requirements. We organise focused pages around the services you actually provide, explaining what is included, relevant property types, booking expectations and the next step.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Residential service pages',
          'Commercial cleaning pages',
          'Clear service inclusions',
          'Relevant enquiry options',
        ],
      },
      {
        tag: '04 · WEBSITE & CRO',
        title:
          'Make It Easier to Request a Quote or Book a Clean',
        description:
          'Customers should not have to search through your website to find pricing guidance, service details or a contact option. We improve mobile usability, service navigation, quote forms and booking journeys. Where appropriate, we create different paths for one-time residential cleans, recurring appointments and commercial contract enquiries.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Find',
            value: 'The service',
          },
          {
            label: 'Confirm',
            value: 'Availability',
          },
          {
            label: 'Request',
            value: 'A booking',
          },
        ],
        chips: [
          'Mobile-first website UX',
          'Quote request forms',
          'Booking integrations',
          'Service comparison',
          'Conversion optimisation',
          'Contact visibility',
        ],
      },
      {
        tag: '05 · TRUST & CUSTOMER CONFIDENCE',
        title:
          'Show Customers What They Can Expect From Your Team',
        description:
          'Inviting cleaners into a home or workplace requires confidence. We help present genuine reviews, relevant experience, service procedures, approved team information and verified insurance or credential details where applicable. Clear expectations can be more useful than broad promises about quality.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Verified customer reviews',
          'Service process information',
          'Team and company details',
          'Credibility-focused content',
        ],
      },
      {
        tag: '06 · BOOKINGS & AUTOMATION',
        title:
          'Keep Cleaning Enquiries and Repeat Bookings Organised',
        description:
          'When requests arrive through forms, calls and messages, manual coordination can become difficult. We can connect suitable booking tools, CRM systems, enquiry notifications and follow-up workflows to help your team manage new requests, scheduling questions and recurring customer communication.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected operations',
        chips: [
          'Booking integrations',
          'CRM workflows',
          'Lead notifications',
          'Customer follow-ups',
          'Recurring service reminders',
        ],
      },
      {
        tag: '07 · TRACKING & PERFORMANCE',
        title:
          'Understand Which Services and Channels Bring Valuable Enquiries',
        description:
          'A cleaning business needs to know more than how many people visited its website. We help measure calls, quote requests and supported booking actions, then review results alongside service type, location and available customer feedback. Where systems allow, this can help distinguish one-time enquiries from recurring contract opportunities and guide future investment.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Better business decisions',
        chips: [
          'Call and form tracking',
          'Booking conversion events',
          'Lead source reporting',
          'Service-level performance',
          'Campaign analytics',
          'CRM data integration',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SEARCH TO CLEANING APPOINTMENT',
    headline:
      'Make It Easier for Customers to Choose Your Cleaning Company',
    subheadline:
      'Whether someone needs a single home clean or an ongoing commercial contract, they want clear service information, reliable communication and a straightforward way to take the next step.',

    leftLabel: 'What Cleaning Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Nearby Cleaning Provider',
        industryStandard:
          'Customers often begin with searches for house cleaners, deep cleaning or office cleaning in a particular location. They need to confirm that the company serves their property and offers the required service.',
        ourApproach:
          'We align local SEO, business profile information and relevant service pages with your actual coverage areas, helping prospective customers find the appropriate service without navigating unrelated content.',
      },
      {
        feature: 'Understanding What Is Included',
        industryStandard:
          'A standard home clean, deep clean, move-out service and commercial cleaning contract can have different scopes. Customers may want to understand inclusions, exclusions, supplies and preparation requirements.',
        ourApproach:
          'We structure service pages and FAQs around the questions customers commonly ask, using your approved service descriptions to explain what is offered and when a custom assessment may be necessary.',
      },
      {
        feature: 'Evaluating Reliability and Trust',
        industryStandard:
          'Customers may compare reviews, business experience, cleaning procedures, team information and any relevant insurance or service policies before allowing a provider into their property.',
        ourApproach:
          'We help present genuine customer feedback, verified business information and clear service expectations. The website can support informed decisions without relying on invented guarantees or unsupported claims.',
      },
      {
        feature: 'Understanding Quotes and Availability',
        industryStandard:
          'Customers often want to know whether a clean can be scheduled, what affects pricing and which property details are needed. Commercial clients may require an assessment or tailored proposal.',
        ourApproach:
          'We create relevant quote and enquiry forms, explain the factors affecting estimates and connect suitable booking options where available. The journey reflects your actual pricing model and scheduling process.',
      },
      {
        feature: 'Requesting the Right Type of Service',
        industryStandard:
          'A homeowner booking a one-time clean may prefer a short form or online booking, while a facilities manager may need to submit property details, cleaning frequency and contract requirements.',
        ourApproach:
          'We design different enquiry routes where they add value, keeping forms focused and mobile-friendly while collecting enough information for your team to respond appropriately.',
      },
      {
        feature: 'Receiving Confirmation and Follow-Up',
        industryStandard:
          'After submitting a request, customers want confirmation that it was received and clarity about what happens next. Recurring customers may also need reminders or a convenient way to request changes.',
        ourApproach:
          'We can connect forms, booking systems and CRM workflows to support acknowledgements, internal notifications and appropriate follow-up. The implementation depends on your scheduling tools and operational capacity.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Digital Growth Plan Built Around Your Cleaning Business',
    subheadline:
      'We start with your services, service areas, booking model and current enquiry journey. Then we prioritise improvements that can support both customer acquisition and the way your team operates.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Services and Business Model',
        summary:
          'We establish which cleaning services you provide, who your customers are and which enquiries are most valuable to your business.',
        details: [
          'Review residential, commercial and specialist cleaning services',
          'Identify priority locations, service capacity and scheduling constraints',
          'Understand one-time bookings, recurring services and contract enquiries',
        ],
      },
      {
        step: '02',
        title: 'Audit Local Discovery and Booking Experience',
        summary:
          'We review how customers currently find your company and whether your website makes it easy to understand services and request a booking.',
        details: [
          'Assess local search visibility and Google Business Profile information',
          'Review service pages, mobile usability and customer trust signals',
          'Check quote forms, booking tools and existing analytics',
        ],
      },
      {
        step: '03',
        title: 'Prioritise Services, Locations and Channels',
        summary:
          'We identify the opportunities most relevant to your business goals, taking into account demand, competition, customer type and operational capacity.',
        details: [
          'Map search demand to priority cleaning services',
          'Plan useful service and location content',
          'Decide where SEO, paid campaigns or website improvements are appropriate',
        ],
      },
      {
        step: '04',
        title: 'Improve the Website and Acquisition Journey',
        summary:
          'We implement the agreed improvements across relevant pages, campaigns and customer contact routes.',
        details: [
          'Build or refine cleaning service pages and landing pages',
          'Configure suitable Google Ads campaigns and targeting',
          'Improve quote forms, booking options and mobile contact experiences',
        ],
      },
      {
        step: '05',
        title: 'Connect Tracking and Enquiry Workflows',
        summary:
          'We test important actions and connect suitable systems so your team can receive, manage and evaluate incoming requests.',
        details: [
          'Validate calls, forms and supported booking conversion events',
          'Review CRM, booking and notification integrations',
          'Test confirmation messages and internal enquiry routing',
        ],
      },
      {
        step: '06',
        title: 'Review Lead Quality and Keep Improving',
        summary:
          'We use available data and business feedback to refine acquisition, booking journeys and operational priorities over time.',
        details: [
          'Review relevant enquiries by service, location and channel',
          'Identify unnecessary form friction and irrelevant search traffic',
          'Adjust campaigns, content and workflows based on actual findings',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Local Discovery to Cleaning Booking',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local search visibility',
        subtext:
          'Review cleaning-related searches, business profile interactions and visits to priority service pages in the locations your team serves.',
      },
      {
        value: 'Evaluate',
        label: 'Service and booking engagement',
        subtext:
          'Assess whether visitors reach service information, quote guidance and booking options. Use behaviour signals to identify potential friction rather than assuming every interaction indicates intent.',
      },
      {
        value: 'Enquire',
        label: 'Quotes, calls and booking requests',
        subtext:
          'Measure agreed contact and booking actions where tracking is available and permitted. Validate service relevance and location suitability using feedback from the business.',
      },
      {
        value: 'Improve',
        label: 'Lead quality and recurring opportunities',
        subtext:
          'Compare acquisition costs and enquiry patterns over time. Where reliable booking or CRM data exists, review which requests become completed or recurring services without overstating attribution.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS CLEANING COMPANIES ASK',
    headline:
      'Growing Your Cleaning Business: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our cleaning company get more bookings?',
        answer:
          'We help cleaning businesses improve local visibility, explain services clearly and make quote or booking requests easier. Depending on your needs, this may include local SEO, Google Ads, website development, service landing pages, conversion optimisation, booking integrations and enquiry tracking. The goal is to attract relevant customers and improve the journey from discovery to booking, not simply generate more website visits.',
      },
      {
        question:
          'Should a cleaning company invest in Google Ads or local SEO?',
        answer:
          'Both can support customer acquisition. Local SEO helps your business become discoverable through relevant organic and local searches, while Google Ads can reach people searching for specific cleaning services in selected areas. The best starting point depends on competition, budget, your current online presence and how many additional bookings your team can handle. We review these factors before recommending a strategy.',
      },
      {
        question:
          'Can you help us attract commercial cleaning contracts?',
        answer:
          'Yes. Commercial cleaning usually involves a different decision process from residential bookings. Office managers, facilities teams and business owners may need information about cleaning schedules, property types, service capabilities and quotation procedures. We can develop commercial-focused pages, relevant search strategies and enquiry forms that collect the details needed for a useful business discussion.',
      },
      {
        question:
          'Do we need separate pages for house cleaning, deep cleaning and move-out cleaning?',
        answer:
          'Separate pages can be valuable when services have different customer needs, search demand or booking requirements. For example, an end-of-tenancy cleaning enquiry may involve different expectations from a recurring weekly home clean. We recommend dedicated pages where they help customers understand the service and take the right next step, rather than creating repetitive content for every keyword.',
      },
      {
        question:
          'How can our cleaning company appear in searches across multiple areas?',
        answer:
          'We review your actual service coverage, Google Business Profile eligibility and relevant local search demand. Improvements may include accurate service-area information, useful location content and consistent business details. We avoid misleading addresses, duplicate location pages and claims that your team serves areas it cannot realistically cover.',
      },
      {
        question:
          'Can you build an online booking system for our cleaning services?',
        answer:
          'We can integrate a suitable booking platform or scope a custom booking experience if the business requires it. The right approach depends on whether customers choose fixed packages, request custom estimates, select time slots or book recurring services. We review availability management, service areas, pricing rules and existing scheduling software before recommending an implementation.',
      },
      {
        question:
          'Can you improve our current cleaning website instead of replacing it?',
        answer:
          'Yes. We first assess the current platform, service navigation, mobile performance, local SEO foundations, quote forms and booking experience. If the website can support the improvements needed, targeted development may be more practical. A rebuild is considered when the existing architecture or technical limitations prevent meaningful progress.',
      },
      {
        question:
          'How can we improve trust when customers are inviting cleaners into their homes?',
        answer:
          'We focus on accurate and verifiable information such as genuine customer reviews, clear service procedures, company details, approved team information and relevant insurance or credential details where applicable. We can also make service expectations and contact information easier to find. Trust should be built through real evidence rather than unsupported guarantees.',
      },
      {
        question:
          'Can you automate cleaning enquiries, reminders and follow-ups?',
        answer:
          'We can connect appropriate website forms, booking platforms, CRM systems and communication workflows to support enquiry acknowledgements, internal notifications, scheduling reminders and follow-up. The exact functionality depends on your existing tools, customer consent, service process and operational requirements. Automation should support accurate communication without promising bookings or availability that have not been confirmed.',
      },
      {
        question:
          'How do you measure whether cleaning enquiries are valuable?',
        answer:
          'We can measure calls, quote requests and supported booking events, then combine those signals with available information about service type, location and booking outcomes. Where CRM or scheduling data is reliable, we may also assess repeat booking patterns. Attribution is not always complete, so reporting should distinguish recorded enquiries from confirmed jobs and recurring customers.',
      },
      {
        question:
          'How much does cleaning company marketing cost, and what do you need to get started?',
        answer:
          'Costs depend on your service areas, competition, website condition, advertising budget, required integrations and project scope. A focused local SEO improvement is different from developing a complete booking website with CRM automation. To begin, share your website, cleaning services, target locations, current booking process and the main challenges you want to solve. We can then recommend suitable priorities and a realistic scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Make It Easier for Customers to Find and Book Your Cleaning Services',
    subheadline:
      'Whether you want more local enquiries, a better booking experience, stronger commercial cleaning visibility or improved lead management, we can help identify the digital improvements worth prioritising for your business.',
    bulletPoints: [
      'Identify local SEO and cleaning service visibility opportunities',
      'Improve quote requests, booking journeys and customer confidence',
      'Connect Google Ads with relevant service landing pages',
      'Track enquiries and streamline suitable follow-up workflows',
    ],
    buttonText: 'Discuss Your Cleaning Business',
  },
};

export const cleaningPage = cleaningV2Data;
export const cleaningServicesPage = cleaningV2Data;
export const cleaningPageV2 = cleaningV2Data;
