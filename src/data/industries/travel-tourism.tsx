
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved travel and tourism image.
// Prefer authentic destination photography, a guided
// travel experience or an actual tour operator's
// destination and itinerary imagery.
import travelTourismOverviewImg from '@/assets/travel-overview.jpg';

/**
 * Bixeltek — Travel & Tourism Industry Page
 *
 * Category: Others
 *
 * Target businesses:
 * - Travel agencies
 * - Tour operators
 * - Destination management companies (DMCs)
 * - Holiday and vacation package providers
 * - Inbound and outbound tourism companies
 * - Adventure and experience-based tour operators
 * - Group and corporate travel providers
 * - Luxury and bespoke travel planners
 * - Local activity and excursion providers
 * - Multi-destination travel brands
 *
 * Primary customer journey:
 *
 * Discover Destination ->
 * Explore Experiences ->
 * Compare Itineraries ->
 * Evaluate Operator ->
 * Enquire / Customise ->
 * Book / Pay ->
 * Prepare for Trip ->
 * Travel / Return
 *
 * Core priorities:
 * Travel website development,
 * destination and itinerary architecture,
 * travel SEO, paid acquisition,
 * itinerary and booking UX,
 * CRM and enquiry automation,
 * booking and payment integrations,
 * travel content and analytics.
 *
 * Important:
 * Travel pricing, availability, itineraries,
 * accommodation categories, inclusions,
 * exclusions, cancellation terms,
 * visa requirements, safety information
 * and supplier claims must be verified.
 *
 * Real-time inventory and confirmed bookings
 * require an authoritative booking system.
 *
 * Travel regulations, licensing,
 * consumer protections and payment
 * requirements vary by jurisdiction.
 */

export const travelTourismV2Data: IndustryPageData = {
  slug: 'travel-tourism',

  aliases: [
    'travel-and-tourism',
    'travel',
    'tourism',
    'travel-agencies',
    'tour-operators',
    'holiday-packages',
    'destination-management',
  ],

  industryName: 'Travel & Tourism',

  seo: {
    title:
      'Travel & Tourism Website Development and Digital Growth | Bixeltek',

    description:
      'Digital solutions for travel agencies, tour operators and tourism businesses. Build travel websites, improve destination SEO, Google and Meta Ads, itinerary enquiries, booking journeys and CRM workflows.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR TRAVEL & TOURISM',

    title: 'Turn Traveler Searches Into',
    highlightedTitle: 'Direct Tour Bookings',

    description:
      'Help travellers discover destinations, explore experiences, compare itineraries and take the next step with confidence. We connect travel website development, destination SEO, paid campaigns, booking experiences and enquiry workflows around how people research and plan their trips.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW TRAVELLERS RESEARCH AND PLAN',

    title: (
      <>
        Travel Begins With Inspiration.
        {' '}
      </>
    ),

    highlightedTitle:
      'Booking Depends on Clarity and Confidence.',

    description:
      'Travelers research destinations, detailed daily itineraries, inclusions, and safety standards long before committing to a tour. When tour operators hide pricing, display incomplete itineraries, or complicate inquiry procedures, prospective travelers hesitate and seek alternative agencies. Transparent tour details and effortless booking channels encourage confident travel commitments.',
    secondaryDescription:
      'Bixeltek turns travel inspiration into confirmed reservations through immersive tour pages, transparent pricing, and responsive lead qualification. We optimize search campaigns and itinerary presentations to match traveler intent, whether booking bespoke luxury vacations or group expeditions, ensuring your sales team receives high-intent inquiries ready for immediate itinerary confirmation.',
    imageSrc: travelTourismOverviewImg,

    imageAlt:
      'Travellers exploring a scenic destination during an organised travel experience',

    features: [
      {
        title: 'Help Travellers Discover the Right Experience',

        description:
          'Organise destinations, travel styles, itineraries and trip categories around what different travellers want to explore.',
      },

      {
        title: 'Make Trip Details Easier to Evaluate',

        description:
          'Present verified itineraries, inclusions, exclusions, pricing conditions and practical travel information before an enquiry or booking.',
      },

      {
        title: 'Support Different Booking Models',

        description:
          'Create suitable instant booking, availability request or customised itinerary journeys based on how your travel business actually operates.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions Built Around How Travellers Discover and Book',

    subheadline:
      'From destination discovery and itinerary exploration to booking, payment and traveller communication, we connect digital capabilities with the way travel businesses operate.',

    items: [
      {
        tag: '01 · TRAVEL WEBSITE DEVELOPMENT',

        title:
          'Build a Travel Website That Helps People Explore Before They Enquire',

        description:
          'A travel website needs to communicate destinations, experiences and practical trip information without overwhelming visitors. We develop scalable websites with destination categories, tour listings, itinerary pages, travel themes, galleries and relevant enquiry pathways. For operators managing multiple destinations or frequent departures, we plan content structures that make packages easier to update and maintain. The architecture reflects whether your business sells fixed departures, private tours, customised itineraries or a combination of these.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Destination-led website architecture',

        chips: [
          'Travel agency websites',
          'Tour operator websites',
          'Destination landing pages',
          'Holiday package catalogues',
          'Itinerary management',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · TRAVEL SEO & DESTINATION DISCOVERY',

        title:
          'Reach Travellers While They Research Destinations and Experiences',

        description:
          'Travel searches often combine destinations, activities, trip duration, season, budget or travel style. We improve technical SEO, destination pages, tour categories and useful travel content around relevant search intent. Rather than creating repetitive destination pages, we focus on information that helps travellers compare actual experiences. Entry requirements, travel advisories and other time-sensitive details should be checked against authoritative sources.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Travel and tourism SEO',
          'Destination page optimisation',
          'Tour and package SEO',
          'Technical and on-page SEO',
          'Useful travel planning content',
        ],
      },

      {
        tag: '03 · TRAVEL CAMPAIGNS & CUSTOMER ACQUISITION',

        title:
          'Connect Relevant Travel Demand With the Right Packages',

        description:
          'Travel advertising needs to account for seasonality, destination demand, booking windows and the value of different trip types. We plan suitable Google and Meta campaigns around destination searches, travel interests, specific packages and approved offers. Campaigns can direct travellers to relevant itinerary or enquiry pages instead of a generic homepage. We evaluate enquiry relevance and available booking data rather than treating every click or form submission as a successful sale.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Destination and experience campaigns',

        chips: [
          'Google Search campaigns',
          'Meta travel campaigns',
          'Destination promotions',
          'Seasonal travel campaigns',
          'Package landing pages',
          'Creative and offer testing',
        ],
      },

      {
        tag: '04 · ITINERARY, ENQUIRY & BOOKING UX',

        title:
          'Help Travellers Understand the Trip and Take the Right Next Step',

        description:
          'A traveller may be interested in a package but still need clarity about the route, accommodation, activities, group size, departure dates, inclusions and cancellation conditions. We improve itinerary layouts, package comparisons, date selection and enquiry journeys. For customised travel, forms can capture destination, preferred dates, traveller count and important preferences without demanding excessive information upfront. Instant booking and confirmed availability are implemented only where supported by authoritative reservation systems.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Explore',
            value: 'The itinerary',
          },
          {
            label: 'Plan',
            value: 'The experience',
          },
          {
            label: 'Enquire',
            value: 'Or book',
          },
        ],

        chips: [
          'Day-by-day itinerary UX',
          'Departure date selection',
          'Package comparison',
          'Custom trip enquiries',
          'Booking engine integrations',
          'Mobile conversion optimisation',
        ],
      },

      {
        tag: '05 · DESTINATION CONTENT & TRAVEL STORYTELLING',

        title:
          'Bring Destinations and Experiences to Life With Better Content',

        description:
          'Travel decisions are influenced by what people can see, understand and imagine experiencing. We can support destination photography, travel videos, itinerary content, campaign creative and useful planning resources. Strong content should show what the tour actually includes, distinguish optional experiences from included activities and accurately represent accommodation or transport arrangements. Authenticity matters because misleading destination or package imagery can create expectations the operator cannot fulfil.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Destination photography',
          'Travel video content',
          'Itinerary storytelling',
          'Short-form social content',
          'Experience-led creative',
          'Travel planning resources',
        ],
      },

      {
        tag: '06 · TRAVEL CRM & BOOKING WORKFLOWS',

        title:
          'Connect Traveller Enquiries With Your Sales and Operations Teams',

        description:
          'Travel enquiries often require follow-up, itinerary customisation, supplier confirmation, payment coordination and pre-departure communication. We can connect supported website forms with CRM systems, notifications and appropriate enquiry workflows. Depending on your existing technology, integrations may support booking requests, traveller information and communication status. Supplier inventory, ticketing, reservation systems and complex itinerary costing require separate technical discovery and validation.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected travel operations',

        chips: [
          'Travel CRM integrations',
          'Enquiry routing',
          'Custom itinerary workflows',
          'Booking system assessment',
          'Payment integrations',
          'Pre-departure communication',
        ],
      },

      {
        tag: '07 · TRAVEL ANALYTICS & BOOKING PERFORMANCE',

        title:
          'Understand Which Destinations and Campaigns Generate Valuable Demand',

        description:
          'Travel performance should be measured beyond website visits or brochure downloads. We help track destination-page engagement, itinerary interactions, enquiry submissions and supported booking events. Where reliable CRM and reservation data exists, reporting can consider qualified enquiries, confirmed bookings, trip value and acquisition costs. We distinguish enquiries from actual reservations and account for cancellations, supplier costs, offline discussions and longer planning cycles.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'From destination interest to booking',

        chips: [
          'GA4 and GTM tracking',
          'Destination engagement analytics',
          'Itinerary conversion tracking',
          'Travel enquiry reporting',
          'CRM booking events',
          'Campaign and booking insights',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM DESTINATION INSPIRATION TO TRAVEL BOOKING',

    headline:
      'Make Every Stage of Travel Planning More Useful',

    subheadline:
      'Travellers need inspiration, practical details and confidence in the operator. We help turn those needs into a clearer digital journey from discovery to enquiry or booking.',

    leftLabel: 'What Travellers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Destinations and Experiences',

        industryStandard:
          'Travellers may search for a destination, activity, travel style, season or holiday experience before deciding on a specific package.',

        ourApproach:
          'We organise relevant destination content, tour categories and suitable acquisition campaigns around genuine travel interests and available offerings.',
      },

      {
        feature: 'Exploring Tour and Package Options',

        industryStandard:
          'Customers want to understand trip duration, routes, activities, accommodation arrangements and available travel options.',

        ourApproach:
          'We develop clear tour listings and itinerary pages with useful descriptions, authentic visuals and verified package information.',
      },

      {
        feature: 'Comparing Costs and Inclusions',

        industryStandard:
          'Travellers may compare prices, group sizes, inclusions, exclusions, optional activities, deposits and cancellation conditions.',

        ourApproach:
          'We improve pricing and package presentation using accurate terms and clearly distinguish included services from optional costs.',
      },

      {
        feature: 'Evaluating the Travel Operator',

        industryStandard:
          'Customers may review company experience, genuine traveller feedback, support arrangements and the operator’s ability to deliver the itinerary.',

        ourApproach:
          'We present verified credentials, authentic reviews, relevant trip experience and useful booking information without unsupported claims.',
      },

      {
        feature: 'Customising or Booking the Trip',

        industryStandard:
          'Some travellers want to book a fixed package, while others need a customised itinerary or confirmation of dates and availability.',

        ourApproach:
          'We design suitable booking and enquiry journeys that reflect the operator’s actual reservation and trip planning model.',
      },

      {
        feature: 'Preparing for Departure',

        industryStandard:
          'After booking, travellers may need confirmation, payment details, travel documents, meeting instructions and relevant trip updates.',

        ourApproach:
          'We can support suitable CRM and traveller communication workflows using verified reservation information and approved operational processes.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Destinations and Travel Model',

    subheadline:
      'We begin with your travel products, customer segments, booking process and supplier relationships. Then we prioritise improvements that help travellers discover, evaluate and book the right experiences.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Travel Business',

        summary:
          'We establish which destinations and experiences you sell, who your customers are and how bookings are managed.',

        details: [
          'Review destinations, packages, itineraries and travel styles',
          'Identify target travellers, source markets and seasonal demand',
          'Understand customisation, reservations and supplier workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit the Traveller Discovery Journey',

        summary:
          'We assess how travellers find your business, explore packages and move toward enquiries or reservations.',

        details: [
          'Review destination pages, itineraries and mobile usability',
          'Assess travel SEO, campaigns and content quality',
          'Evaluate booking forms, enquiries and tracking limitations',
        ],
      },

      {
        step: '03',

        title: 'Plan the Destination and Booking Architecture',

        summary:
          'We organise the website around meaningful destinations, experiences, package categories and conversion journeys.',

        details: [
          'Map destination, tour, itinerary and experience pages',
          'Prioritise SEO, acquisition and conversion opportunities',
          'Define CRM, booking, payment and supplier integration needs',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Travel Experience',

        summary:
          'We implement the agreed website, content and booking journey improvements with attention to clarity, performance and usability.',

        details: [
          'Develop or refine destination and itinerary pages',
          'Improve package comparison and enquiry experiences',
          'Implement approved campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Enquiries, Payments and Booking Flows',

        summary:
          'We test important traveller actions and review whether booking requests and customer information reach the intended systems.',

        details: [
          'Test enquiry forms, date selection and supported booking flows',
          'Validate available analytics and confirmed reservation events',
          'Review CRM routing, payment handling and data permissions',
        ],
      },

      {
        step: '06',

        title: 'Review Booking Quality and Refine',

        summary:
          'We use available website, campaign and sales feedback to improve destination discovery and the quality of travel enquiries.',

        details: [
          'Review interest by destination, package and travel segment',
          'Assess qualified enquiries and confirmed booking progression',
          'Refine itineraries, campaigns and conversion journeys using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Travel Inspiration to Confirmed Booking',

    items: [
      {
        value: 'Discover',

        label: 'Relevant destination and tour visibility',

        subtext:
          'Review search visibility, acquisition channels and engagement with priority destination, experience and tour pages.',
      },

      {
        value: 'Explore',

        label: 'Itinerary and package engagement',

        subtext:
          'Assess supported interactions with itinerary details, departure information, package comparisons and planning resources.',
      },

      {
        value: 'Enquire',

        label: 'Trip requests and booking intent',

        subtext:
          'Measure custom itinerary requests, availability enquiries and supported booking actions while distinguishing interest from confirmed reservations.',
      },

      {
        value: 'Improve',

        label: 'Qualified enquiries and booking contribution',

        subtext:
          'Where reliable CRM and reservation data exists, review confirmed bookings, acquisition costs and trip value while accounting for cancellations and supplier expenses.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS TRAVEL & TOURISM BUSINESSES ASK',

    headline:
      'Digital Growth for Travel & Tourism: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our travel agency or tour company grow online?',

        answer:
          'We help travel businesses improve websites, destination discovery, package presentation, acquisition campaigns and enquiry or booking journeys. Depending on your model, this may include travel website development, SEO, Google and Meta Ads, itinerary content, conversion optimisation, CRM integrations and analytics. The strategy is shaped around your destinations, traveller segments, booking processes and commercial priorities.',
      },

      {
        question:
          'Can you build a travel agency or tour operator website?',

        answer:
          'Yes. We develop travel websites with destination pages, tour listings, itinerary details, galleries, package categories and suitable enquiry or booking pathways. The structure can support fixed departures, customised trips, private tours or multiple travel themes. Platform recommendations depend on content requirements, inventory, integrations and long-term maintenance.',
      },

      {
        question:
          'Can you create detailed day-by-day itinerary pages?',

        answer:
          'Yes. We can develop itinerary layouts that present daily activities, destinations, accommodation arrangements, transport information and relevant inclusions or exclusions. We can also structure itineraries so your team can update them through a suitable CMS. The operator must verify schedules, suppliers and other trip details before publication.',
      },

      {
        question:
          'Can you build a travel booking engine with online payments?',

        answer:
          'We can assess booking engines and payment integrations suited to your business model. Functionality may include date selection, traveller counts, availability requests and supported checkout flows. Real-time inventory, supplier confirmation, reservation management and ticketing depend on authoritative systems and available APIs. A custom booking engine with complex inventory rules requires separate technical scoping.',
      },

      {
        question:
          'Can you support customised holiday and itinerary enquiries?',

        answer:
          'Yes. We can create enquiry journeys that collect relevant information such as destinations, preferred travel dates, group size, budget range and trip preferences. The goal is to give travel consultants enough context to begin a useful discussion without creating unnecessary form friction. We can also assess CRM routing and follow-up workflows.',
      },

      {
        question:
          'How can SEO help our travel and tourism business?',

        answer:
          'Travel SEO can improve visibility for relevant destination, tour, activity and travel planning searches. We work on technical SEO, destination architecture, tour pages, internal linking and useful travel content. We recommend content that reflects actual packages and helps travellers make decisions rather than creating large numbers of repetitive destination pages. Rankings and bookings cannot be guaranteed.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for holiday packages?',

        answer:
          'Yes. We can plan suitable Google and Meta campaigns around destinations, travel experiences, seasonal demand and relevant customer segments. Campaigns can direct visitors to focused itinerary or package landing pages. Pricing, availability, offer terms and other advertising claims must be accurate. We recommend evaluating enquiry quality and available confirmed booking data.',
      },

      {
        question:
          'Can you help us promote seasonal travel packages?',

        answer:
          'Yes. We can support seasonal campaign planning, relevant landing pages, creative content and suitable acquisition campaigns. Travel seasonality depends on destination, weather, school holidays, local events and traveller preferences. We recommend aligning campaigns with real package availability, booking windows and commercial capacity.',
      },

      {
        question:
          'Can you create a website for a destination management company?',

        answer:
          'Yes. We can develop websites for destination management companies with destination capabilities, services, group travel information, MICE-related offerings where applicable, partner resources and B2B enquiry pathways. The architecture should reflect the company’s actual operational coverage, supplier relationships and target markets.',
      },

      {
        question:
          'Can you integrate our travel website with CRM and booking systems?',

        answer:
          'We can assess integrations with suitable CRM, reservation and travel management systems where supported APIs or connectors are available. Potential workflows include enquiry routing, booking information exchange, notifications and supported reporting. Airline distribution systems, hotel inventory, supplier APIs and complex ticketing workflows require separate technical discovery and validation.',
      },

      {
        question:
          'Can you help us create travel photography, video and destination content?',

        answer:
          'We can support destination content, travel video, short-form social creative and itinerary storytelling within the agreed scope. Content should accurately represent the experiences being sold. Destination footage, supplier imagery, licensing, on-site production and usage rights must be considered during planning.',
      },

      {
        question:
          'Can you improve our existing travel website without rebuilding it?',

        answer:
          'Yes. We first review destination architecture, package pages, mobile usability, technical SEO, performance and enquiry or booking flows. Where the current platform supports the required improvements, targeted changes may be more practical. We recommend a rebuild only when technical or structural limitations justify it.',
      },

      {
        question:
          'How do you measure travel marketing and booking performance?',

        answer:
          'We can track supported interactions such as destination-page engagement, itinerary views, enquiry submissions, booking-engine transitions and confirmed reservation events where available. With reliable CRM and booking data, reporting may also consider qualified enquiries, booking value and acquisition costs. We account for cancellations, offline sales discussions and the difference between booking revenue and profitability.',
      },

      {
        question:
          'How much does a travel and tourism website project cost?',

        answer:
          'Costs depend on the number of destinations, itinerary complexity, content management requirements, booking model, payment integrations and marketing scope. A travel agency with customised holiday enquiries has different requirements from a tour operator offering live departure availability and online booking. Share your current website, destinations, packages and operational systems so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Travel Experience That Inspires Exploration and Makes Planning Easier',

    subheadline:
      'Whether you manage a travel agency, tour company or destination management business, we can help connect your destinations and experiences with better discovery, clearer itineraries and more useful booking journeys.',

    bulletPoints: [
      'Build destination and itinerary experiences travellers can explore',
      'Improve relevant discovery through travel SEO and campaigns',
      'Simplify package enquiries, customisation and booking journeys',
      'Connect suitable CRM, payment and traveller communication workflows',
    ],

    buttonText: 'Discuss Your Travel Business',
  },
};

export const travelTourismPage = travelTourismV2Data;
export const travelTourismPageV2 = travelTourismV2Data;
export default travelTourismPage;
