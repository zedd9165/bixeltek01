
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved entertainment-specific image.
// Prefer authentic concert, performance, event production,
// theatre or entertainment venue photography.
// Avoid unrelated stock imagery and unlicensed celebrity images.
import entertainmentOverviewImg from '@/assets/entertainment-overview.jpg';

/**
 * Bixeltek — Entertainment Industry Page
 *
 * Category: Others
 *
 * Target businesses:
 * - Event organisers and promoters
 * - Concert and live entertainment companies
 * - Entertainment venues
 * - Theatre and performing arts organisations
 * - Film and video production houses
 * - Music and entertainment brands
 * - Talent management agencies
 * - Festivals and cultural event organisers
 * - Entertainment production companies
 * - Experience-led entertainment businesses
 *
 * Primary audience journeys:
 *
 * Live events:
 * Discover Event -> Explore Lineup / Details ->
 * Evaluate Venue and Pricing ->
 * Select Tickets -> Purchase ->
 * Attend -> Engage Again
 *
 * Production services:
 * Discover Company -> Explore Portfolio ->
 * Evaluate Capabilities -> Submit Brief ->
 * Discuss Project -> Engage Services
 *
 * Talent management:
 * Discover Talent -> Review Portfolio ->
 * Check Suitability -> Submit Enquiry ->
 * Discuss Availability and Terms
 *
 * Core priorities:
 * Entertainment website development,
 * event and artist page architecture,
 * SEO and audience discovery,
 * Google and Meta Ads,
 * ticketing conversion UX,
 * production portfolio presentation,
 * content creation, CRM integrations,
 * audience communication and analytics.
 *
 * Important:
 * Event dates, ticket availability,
 * ticket prices, performer lineups,
 * age restrictions, venue access,
 * refund policies, artist affiliations,
 * intellectual property rights and
 * promotional claims must be verified.
 *
 * Ticket inventory and purchase confirmation
 * must come from the authorised ticketing system.
 *
 * Photography, videos, music and artist imagery
 * require appropriate usage rights.
 */

export const entertainmentV2Data: IndustryPageData = {
  slug: 'entertainment',

  aliases: [
    'entertainment-industry',
    'entertainment-companies',
    'live-entertainment',
    'event-entertainment',
    'entertainment-production',
    'concerts-events',
    'entertainment-brands',
  ],

  industryName: 'Entertainment',

  seo: {
    title:
      'Entertainment Website Development & Digital Marketing | Bixeltek',

    description:
      'Digital solutions for entertainment companies, event organisers and production houses. Build entertainment websites, promote events, improve SEO, ticketing journeys, audience engagement and booking workflows.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR ENTERTAINMENT BUSINESSES',

    title: 'Turn Fan Attention Into',
    highlightedTitle: 'Sold-Out Ticket Sales',

    description:
      'Help audiences discover events, explore entertainment experiences and take the next step. We connect entertainment website development, SEO, paid campaigns, content creation, ticketing journeys and enquiry workflows around how people discover, choose and engage with entertainment brands.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW ENTERTAINMENT AUDIENCES DISCOVER AND DECIDE',

    title: (
      <>
        Getting Attention Is Only the Beginning.
        {' '}
      </>
    ),

    highlightedTitle:
      'The Experience Must Give People a Reason to Act.',

    description:
      'Audiences and corporate talent buyers evaluate creative portfolios, venue logistics, and production capabilities in fast-paced environments. When event dates are obscure, media reels fail to load smoothly, or booking pathways feel disjointed, interest cools. Immediate access to schedules, portfolios, and ticketing links secures prompt commitment.',
    secondaryDescription:
      'Bixeltek designs high-impact entertainment websites, event landing pages, and talent booking portals tailored to modern audiences. We integrate targeted paid advertising, localized event search, and frictionless ticketing or inquiry funnels, ensuring production companies, venues, and artists convert digital hype into verified box-office sales and confirmed production contracts.',
    imageSrc: entertainmentOverviewImg,

    imageAlt:
      'Live entertainment event with stage lighting, performers and an engaged audience',

    features: [
      {
        title: 'Make Events and Experiences Easier to Discover',

        description:
          'Organise upcoming events, performances, productions and entertainment offerings around how audiences search and explore.',
      },

      {
        title: 'Turn Interest Into the Right Action',

        description:
          'Support ticket purchases, event registrations, production enquiries or talent booking requests with clear conversion journeys.',
      },

      {
        title: 'Build Relationships Beyond One Event',

        description:
          'Connect suitable audience communication, event updates and CRM workflows to support future engagement and repeat attendance.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions That Connect Entertainment With Its Audience',

    subheadline:
      'From event discovery and production portfolios to ticketing and audience communication, we build digital experiences around how entertainment businesses attract, convert and retain interest.',

    items: [
      {
        tag: '01 · ENTERTAINMENT WEBSITE DEVELOPMENT',

        title:
          'Build a Digital Experience That Reflects Your Entertainment Brand',

        description:
          'Entertainment websites need to communicate what is happening, why it matters and how people can participate. We develop event websites, entertainment brand platforms, production company portfolios and venue websites with relevant event listings, artist or project pages, schedules, galleries and conversion pathways. For organisations managing recurring events or multiple productions, we plan scalable content architecture that supports frequent updates without making the website difficult to maintain.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Audience-focused web experiences',

        chips: [
          'Entertainment websites',
          'Concert and event websites',
          'Production company portfolios',
          'Artist and performer pages',
          'Event calendars',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · ENTERTAINMENT SEO & DISCOVERY',

        title:
          'Help Audiences Find Relevant Events, Venues and Productions',

        description:
          'Entertainment searches may involve an artist, event type, venue, city, date or production service. We improve technical SEO, event and venue pages, portfolio architecture and useful search content. Where relevant, we implement appropriate structured data using verified event details. For recurring events, we plan how dated content, cancellations and past event pages should be handled without creating confusing or outdated search experiences.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Entertainment SEO',
          'Event and venue SEO',
          'Production portfolio SEO',
          'Technical and on-page SEO',
          'Event structured data',
          'Local entertainment discovery',
        ],
      },

      {
        tag: '03 · EVENT & ENTERTAINMENT CAMPAIGNS',

        title:
          'Reach Relevant Audiences Before the Moment Passes',

        description:
          'Entertainment advertising often works within a fixed promotional window. We plan suitable Google and Meta campaigns around event dates, audience interests, locations, approved creative assets and available ticket inventory. For production and talent businesses, campaigns can focus on relevant commercial enquiries instead of attendance. We evaluate acquisition costs and available conversion data while accounting for ticketing fees, changing inventory and the importance of campaign timing.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Time-sensitive audience acquisition',

        chips: [
          'Google Search campaigns',
          'Meta event campaigns',
          'Ticket sales campaigns',
          'Event launch promotions',
          'Audience remarketing',
          'Creative and offer testing',
        ],
      },

      {
        tag: '04 · TICKETING, REGISTRATION & CONVERSION UX',

        title:
          'Make It Easier to Move From Excitement to Attendance',

        description:
          'An interested audience member still needs practical information before committing. Event pages should make dates, venues, schedules, ticket categories, fees, age restrictions and important policies easy to understand. We improve event detail pages, ticket selection pathways and the transition to authorised ticketing platforms. Where compatible APIs exist, we can assess ticketing integrations and registration workflows. Availability, seat allocation, payments and confirmed purchases remain the responsibility of the authoritative ticketing system.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Discover',
            value: 'The event',
          },
          {
            label: 'Explore',
            value: 'The details',
          },
          {
            label: 'Attend',
            value: 'The experience',
          },
        ],

        chips: [
          'Event landing pages',
          'Ticketing platform integrations',
          'Ticket category presentation',
          'Registration workflows',
          'Mobile ticketing UX',
          'Conversion funnel optimisation',
        ],
      },

      {
        tag: '05 · CREATIVE CONTENT & PRODUCTION SHOWCASE',

        title:
          'Use Authentic Creative Work to Build Interest and Credibility',

        description:
          'Entertainment audiences respond to the experience they can see and hear. We can support event photography, promotional videos, social content, motion graphics and campaign creative. For production houses and talent businesses, we help structure showreels, portfolios and approved project work so potential clients can evaluate capabilities. Music, footage, performer images and third-party creative assets must be used with appropriate permissions and licensing.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Event promotional videos',
          'Short-form social content',
          'Production showreels',
          'Artist and talent portfolios',
          'Campaign graphic design',
          'Event photography',
        ],
      },

      {
        tag: '06 · AUDIENCE CRM & BOOKING WORKFLOWS',

        title:
          'Connect Ticket Interest, Enquiries and Audience Communication',

        description:
          'Entertainment businesses may need to manage event enquiries, production briefs, talent booking requests, registration information and audience updates. We can connect suitable website forms with CRM, notification and communication tools. Where authorised data is available, workflows may support event reminders, relevant updates and post-event communication. Ticketing, email marketing and audience data integrations depend on provider permissions, consent requirements and the quality of the underlying information.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected audience workflows',

        chips: [
          'CRM integrations',
          'Talent booking enquiries',
          'Production brief forms',
          'Event registration workflows',
          'Audience notifications',
          'Consent-aware communication',
        ],
      },

      {
        tag: '07 · ENTERTAINMENT ANALYTICS & PERFORMANCE',

        title:
          'Understand What Drives Attendance, Enquiries and Engagement',

        description:
          'Entertainment performance needs to be evaluated against the business model. For ticketed events, we help measure event-page engagement, ticketing transitions and supported purchase events. For production companies, reporting can focus on portfolio engagement and qualified project enquiries. Where reliable ticketing or CRM data exists, analysis may consider campaign costs, confirmed transactions, repeat attendance or commercial opportunities. We distinguish audience interest from paid attendance and account for offline sales, refunds and attribution limitations.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'From attention to measurable action',

        chips: [
          'GA4 and GTM tracking',
          'Event engagement analytics',
          'Ticket conversion tracking',
          'Campaign performance reporting',
          'CRM enquiry quality',
          'Audience journey analysis',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM AUDIENCE DISCOVERY TO ENGAGEMENT',

    headline:
      'Help People Discover, Evaluate and Experience Your Entertainment Brand',

    subheadline:
      'Audiences and commercial clients need different information before acting. We help entertainment businesses create clear digital journeys around those decisions.',

    leftLabel: 'What Audiences and Clients Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Events and Entertainment',

        industryStandard:
          'Audiences may discover experiences through artists, genres, venues, locations, social content or event searches.',

        ourApproach:
          'We improve event architecture, relevant SEO, landing pages and suitable promotional campaigns around genuine audience interests.',
      },

      {
        feature: 'Understanding the Experience',

        industryStandard:
          'People need to know what the event, production or entertainment experience involves and why it is relevant to them.',

        ourApproach:
          'We organise approved visuals, event descriptions, performer information, schedules and relevant production content.',
      },

      {
        feature: 'Checking Practical Event Information',

        industryStandard:
          'Attendees may need dates, locations, accessibility details, age restrictions, ticket categories and event policies.',

        ourApproach:
          'We make verified event information easier to find and maintain, including clear handling of schedule changes and important notices.',
      },

      {
        feature: 'Evaluating Credibility and Suitability',

        industryStandard:
          'Audiences may look for organiser credibility, while production clients may evaluate portfolios, previous work and professional experience.',

        ourApproach:
          'We present authentic reviews, approved project work, company information and relevant credentials without unsupported claims.',
      },

      {
        feature: 'Purchasing Tickets or Making Enquiries',

        industryStandard:
          'Customers may want to purchase tickets, register for an event, request a production quote or enquire about talent availability.',

        ourApproach:
          'We create appropriate conversion journeys and integrate compatible ticketing or enquiry systems for the relevant action.',
      },

      {
        feature: 'Staying Engaged After the Experience',

        industryStandard:
          'Attendees may want future event announcements, while commercial clients may need project follow-up or continued communication.',

        ourApproach:
          'We can support suitable CRM and consent-aware communication workflows that connect initial engagement with future opportunities.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Audience and Entertainment Model',

    subheadline:
      'We start with your events, productions, audience segments and commercial goals. Then we prioritise the digital experiences that help people discover your offerings and take meaningful action.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Entertainment Business',

        summary:
          'We establish what you produce, promote or manage and how audiences or clients engage with your business.',

        details: [
          'Review events, venues, productions, talent or entertainment services',
          'Identify audience segments, markets and commercial priorities',
          'Understand ticketing, bookings, content and operational workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit Discovery and Conversion Journeys',

        summary:
          'We assess how audiences find your offerings, explore the details and move toward attendance or a commercial enquiry.',

        details: [
          'Review event pages, portfolios, mobile usability and content',
          'Assess SEO, advertising and promotional landing pages',
          'Evaluate ticketing transitions, enquiry forms and tracking',
        ],
      },

      {
        step: '03',

        title: 'Plan the Content and Campaign Architecture',

        summary:
          'We organise the digital experience around relevant events, entertainment categories, productions and conversion actions.',

        details: [
          'Map event, artist, venue, project and service pages',
          'Prioritise promotional content, SEO and acquisition campaigns',
          'Define ticketing, CRM and audience communication requirements',
        ],
      },

      {
        step: '04',

        title: 'Build and Launch the Digital Experience',

        summary:
          'We implement the agreed website, content and campaign improvements with attention to performance and ease of use.',

        details: [
          'Develop or refine event and entertainment pages',
          'Improve ticketing, registration and enquiry journeys',
          'Implement approved creative, campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Ticketing and Enquiry Workflows',

        summary:
          'We test important audience interactions and review whether transactions and enquiries reach the intended systems.',

        details: [
          'Test event links, registration and supported ticketing flows',
          'Validate available analytics and confirmed conversion events',
          'Review CRM routing, permissions and communication workflows',
        ],
      },

      {
        step: '06',

        title: 'Review Audience Response and Refine',

        summary:
          'We use available campaign, website and operational feedback to improve engagement and relevant commercial outcomes.',

        details: [
          'Review interest by event, audience segment and channel',
          'Assess supported ticket sales or qualified enquiry progression',
          'Refine content, campaigns and conversion journeys using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Audience Attention to Meaningful Engagement',

    items: [
      {
        value: 'Discover',

        label: 'Relevant entertainment visibility',

        subtext:
          'Review search visibility, acquisition channels and engagement with event, artist, venue, production or service pages.',
      },

      {
        value: 'Engage',

        label: 'Audience and content interaction',

        subtext:
          'Assess supported interactions with event details, videos, lineups, schedules, portfolios and promotional content.',
      },

      {
        value: 'Convert',

        label: 'Tickets, registrations and enquiries',

        subtext:
          'Measure supported ticketing actions, completed purchases where available, event registrations and relevant commercial enquiries.',
      },

      {
        value: 'Improve',

        label: 'Attendance and commercial contribution',

        subtext:
          'Where reliable ticketing or CRM data exists, review confirmed transactions, qualified opportunities and repeat engagement while accounting for refunds and attribution limits.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS ENTERTAINMENT BUSINESSES ASK',

    headline:
      'Digital Growth for Entertainment: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our entertainment business grow online?',

        answer:
          'We help entertainment businesses improve their websites, event discovery, digital campaigns, content presentation and conversion journeys. Depending on your business model, this may include entertainment website development, SEO, Google and Meta Ads, ticketing integrations, production portfolios, CRM workflows and analytics. We align the strategy with whether your goal is ticket sales, event registrations, production enquiries, talent bookings or audience engagement.',
      },

      {
        question:
          'Can you build a website for our entertainment or event company?',

        answer:
          'Yes. We develop entertainment websites with event listings, performance schedules, artist or production pages, galleries, venue information and relevant booking pathways. The architecture can support recurring events, multiple productions or several entertainment categories. We recommend the technical approach based on content volume, ticketing systems, update frequency and long-term maintenance.',
      },

      {
        question:
          'Can you create event pages with ticket booking integrations?',

        answer:
          'Yes. We can develop event landing pages and integrate compatible authorised ticketing providers through supported links, widgets or APIs. Available functionality depends on the ticketing system. Ticket inventory, seat allocation, payments, refunds and confirmed purchases must be managed by the authoritative ticketing provider or an appropriately scoped custom system.',
      },

      {
        question:
          'Can you help us promote concerts, festivals and live events?',

        answer:
          'We can plan suitable Google and Meta campaigns, event landing pages, promotional creative and conversion tracking. Campaign planning considers event dates, location, audience relevance, available inventory and promotional budgets. We recommend evaluating confirmed ticket sales where reliable data exists rather than relying only on impressions, clicks or ticket button interactions.',
      },

      {
        question:
          'How can SEO help an entertainment company?',

        answer:
          'Entertainment SEO can improve discovery for relevant events, venues, artists, productions and services. We work on technical SEO, event architecture, useful content, internal linking and suitable structured data. Time-sensitive event information must be kept accurate, including changes to dates, locations or cancellations. Search rankings and ticket sales cannot be guaranteed.',
      },

      {
        question:
          'Can you build a portfolio website for our film or production company?',

        answer:
          'Yes. We develop production company websites with showreels, project portfolios, service pages, team information and suitable commercial enquiry journeys. We can organise projects by production type, industry or capability so prospective clients can evaluate relevant experience. Published work, client names, music and footage must have appropriate usage permissions.',
      },

      {
        question:
          'Can you create a website for a talent management agency?',

        answer:
          'Yes. We can develop talent management websites with artist profiles, approved photographs, showreels, professional information and booking enquiry pathways. Availability and commercial terms can be handled through suitable enquiry workflows. Talent representation claims, profile information and media usage rights must be confirmed before publication.',
      },

      {
        question:
          'Can you build an entertainment venue website with an event calendar?',

        answer:
          'Yes. We can create venue websites with event calendars, individual event pages, venue facilities, location information, accessibility details and suitable ticketing or private booking enquiries. For venues managing frequent events, we recommend a maintainable CMS and a clear process for updating schedules and event information.',
      },

      {
        question:
          'Can you create promotional videos, social media content and event graphics?',

        answer:
          'We can support event promotional videos, short-form content, photography, graphic design and campaign creative within the agreed scope. Production planning should account for filming permissions, talent releases, music licensing and usage rights. We recommend creative assets that accurately represent the event or entertainment experience.',
      },

      {
        question:
          'Can you connect our website with ticketing and CRM systems?',

        answer:
          'We can assess integrations with suitable ticketing, registration and CRM systems where supported APIs or connectors are available. Potential workflows include enquiry routing, approved ticketing events, audience communication and supported reporting. Integration scope depends on provider permissions, data access and the operational requirements of your business.',
      },

      {
        question:
          'Can you help us manage multiple events or entertainment brands?',

        answer:
          'Yes. We can develop scalable content structures for multiple events, venues, productions or entertainment brands. Depending on your organisation, this may involve a shared website, separate branded experiences or reusable event templates. We recommend the architecture based on audience overlap, operational ownership, content management and commercial requirements.',
      },

      {
        question:
          'Can you improve our existing entertainment website without rebuilding it?',

        answer:
          'Yes. We first assess the existing website, event content, performance, mobile usability, SEO and ticketing or enquiry journeys. Targeted improvements may be sufficient when the platform supports the required functionality. A rebuild may be recommended where technical or structural limitations make frequent updates, integrations or conversion journeys difficult to manage.',
      },

      {
        question:
          'How do you measure entertainment marketing performance?',

        answer:
          'We can track supported interactions such as event-page visits, lineup engagement, ticketing transitions, registrations and commercial enquiries. Where reliable ticketing or CRM data exists, reporting may consider confirmed purchases, ticket value, campaign costs and qualified business opportunities. We distinguish ticket clicks from actual sales and account for refunds, offline transactions and attribution limitations.',
      },

      {
        question:
          'How much does an entertainment website or digital marketing project cost?',

        answer:
          'Costs depend on the business model, number of events or productions, content requirements, ticketing integrations, campaign scope and operational workflows. A production portfolio website differs from a festival platform with recurring events, ticketing integrations and frequent promotional updates. Share your current website, offerings and commercial priorities so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build an Entertainment Experience That Connects Attention With Action',

    subheadline:
      'Whether you promote live events, manage talent, operate a venue or produce entertainment content, we can help connect your audience with better digital discovery, clearer experiences and more useful booking journeys.',

    bulletPoints: [
      'Build event, production and entertainment websites',
      'Improve audience discovery through SEO and relevant campaigns',
      'Simplify ticketing, registrations and commercial enquiries',
      'Connect suitable CRM, communication and performance workflows',
    ],

    buttonText: 'Discuss Your Entertainment Project',
  },
};

export const entertainmentPage = entertainmentV2Data;
export const entertainmentPageV2 = entertainmentV2Data;
export default entertainmentPage;
