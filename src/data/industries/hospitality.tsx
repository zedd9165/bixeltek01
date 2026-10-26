
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved hospitality-specific image.
// Prefer authentic hotel, resort or boutique property
// photography that communicates the guest experience.
import hospitalityOverviewImg from '@/assets/hospitality-overview.jpg';

/**
 * Bixeltek — Hospitality Industry Page
 *
 * Category: Others
 *
 * Target businesses:
 * - Hotels and resorts
 * - Boutique hotels
 * - Luxury accommodation providers
 * - Serviced apartments
 * - Holiday stays and vacation properties
 * - Independent hospitality brands
 * - Multi-property hotel groups
 * - Business and extended-stay accommodation
 * - Hospitality management companies
 *
 * Primary guest journey:
 *
 * Discover Destination ->
 * Explore Accommodation ->
 * Compare Rooms and Amenities ->
 * Check Rates and Availability ->
 * Book / Enquire ->
 * Prepare for Stay ->
 * Experience ->
 * Review / Return
 *
 * Core priorities:
 * Hospitality website development,
 * room and property presentation,
 * hotel SEO and local discovery,
 * Google and Meta Ads,
 * direct booking conversion,
 * booking-engine integrations,
 * guest communication, CRM,
 * multi-property architecture
 * and hospitality analytics.
 *
 * Important:
 * Room rates, availability, amenities,
 * property photographs, cancellation
 * policies, taxes, accessibility,
 * star classifications and guest
 * experience claims must be verified.
 *
 * A direct booking website must not
 * display invented availability or
 * imply a confirmed reservation before
 * the booking provider confirms it.
 *
 * PMS, booking engine and channel manager
 * integrations require compatibility
 * and API access validation.
 */

export const hospitalityV2Data: IndustryPageData = {
  slug: 'hospitality',

  aliases: [
    'hospitality-industry',
    'hotels',
    'hotel-marketing',
    'resorts',
    'hospitality-businesses',
    'hotel-website-development',
  ],

  industryName: 'Hospitality',

  seo: {
    title:
      'Hospitality Website Development & Digital Growth | Bixeltek',

    description:
      'Digital solutions for hotels, resorts and hospitality brands. Build booking-focused websites, improve hotel SEO, Google and Meta Ads, direct booking journeys, guest communication and hospitality analytics.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR HOSPITALITY BRANDS',

    title: 'Turn Guest Searches Into',
    highlightedTitle: 'Direct Room Bookings',

    description:
      'Help travellers discover your property, explore the experience and book with greater confidence. We connect hospitality website development, hotel SEO, paid campaigns, booking journeys and guest communication around how people research and choose where to stay.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW GUESTS CHOOSE WHERE TO STAY',

    title: (
      <>
        Guests Are Not Just Booking a Room.
        {' '}
      </>
    ),

    highlightedTitle:
      'They Are Choosing an Experience They Can Trust.',

    description:
      'Travelers evaluate room layouts, cancellation policies, on-site amenities, and real guest reviews before reserving accommodations. When hotel websites provide slow booking engines, uninspiring photography, or unclear pricing tiers, guests default to third-party online travel agencies. Highlighting unique property benefits and frictionless direct booking keeps guests on your site.',
    secondaryDescription:
      'Bixeltek pairs local hospitality SEO and high-performing ad campaigns with intuitive, mobile-optimized direct booking pathways. We present property amenities, dining venues, and event spaces clearly, reducing dependency on expensive third-party OTAs while capturing higher-margin direct reservations, group bookings, and repeat corporate stays throughout every season.',
    imageSrc: hospitalityOverviewImg,

    imageAlt:
      'Beautifully presented boutique hotel or resort with welcoming guest accommodation and premium hospitality interiors',

    features: [
      {
        title: 'Present the Stay Before Guests Arrive',

        description:
          'Help travellers understand rooms, facilities, location, dining options and the experiences your property genuinely offers.',
      },

      {
        title: 'Build Confidence in the Booking Decision',

        description:
          'Make rates, booking conditions, amenities, availability pathways and relevant guest information easier to understand.',
      },

      {
        title: 'Connect the Website With Guest Operations',

        description:
          'Support suitable booking-engine, property management, enquiry and guest communication integrations based on your existing systems.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions Built Around the Hospitality Guest Journey',

    subheadline:
      'From destination discovery and room exploration to direct bookings and guest communication, we connect the digital capabilities that matter to accommodation businesses.',

    items: [
      {
        tag: '01 · HOSPITALITY WEBSITE DEVELOPMENT',

        title:
          'Build a Property Website That Sells the Experience, Not Just the Room',

        description:
          'A hospitality website should help guests picture their stay while making practical booking information easy to find. We develop property websites with room categories, amenities, galleries, dining and experience pages, location information and clear booking pathways. For hospitality groups, we can structure multi-property experiences with individual property pages and shared brand content. The architecture is designed around your actual accommodation offering, content management needs and existing reservation systems.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Experience-led website development',

        chips: [
          'Hotel and resort websites',
          'Room and suite pages',
          'Property galleries',
          'Dining and experience pages',
          'Multi-property websites',
          'Custom CMS development',
        ],
      },

      {
        tag: '02 · HOTEL SEO & DESTINATION DISCOVERY',

        title:
          'Help Travellers Find Your Property While Planning Their Stay',

        description:
          'Accommodation searches often combine a destination, property type, neighbourhood, amenity or travel purpose. We improve technical SEO, property pages, local visibility and useful destination content around genuine guest search intent. For hotels and resorts, this can include room categories, nearby attractions, business travel needs and relevant experiences. Location claims and amenity information must reflect the property accurately.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Hotel and resort SEO',
          'Google Business Profile optimisation',
          'Destination and local SEO',
          'Room and amenity content',
          'Technical and on-page SEO',
        ],
      },

      {
        tag: '03 · HOSPITALITY PAID ACQUISITION',

        title:
          'Reach Travellers Researching Relevant Stays and Destinations',

        description:
          'Hospitality advertising needs to account for travel intent, location, seasonality and booking economics. We plan suitable Google and Meta campaigns around property searches, destination interest, relevant offers and guest segments. Where supported, campaigns may connect to booking-focused landing pages or eligible hotel advertising integrations. We consider booking quality, acquisition costs and available reservation data rather than optimising only for website traffic or enquiry volume.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Guest acquisition campaigns',

        chips: [
          'Google Search campaigns',
          'Meta hospitality campaigns',
          'Seasonal offer campaigns',
          'Booking landing pages',
          'Hotel ads eligibility assessment',
          'Campaign performance tracking',
        ],
      },

      {
        tag: '04 · DIRECT BOOKING & CONVERSION UX',

        title:
          'Make It Easier for Guests to Move From Interest to Reservation',

        description:
          'A guest may love the property but still leave if room options, booking conditions or the reservation process are unclear. We improve room selection, booking calls to action, rate presentation, mobile usability and the transition into supported booking engines. Where compatible integrations exist, the website can connect with authoritative availability and reservation systems. We also review how direct booking benefits are communicated without misleading price comparisons or promises. Actual reservation confirmation must come from the booking provider.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Explore',
            value: 'The property',
          },
          {
            label: 'Compare',
            value: 'Rooms and rates',
          },
          {
            label: 'Book',
            value: 'With confidence',
          },
        ],

        chips: [
          'Direct booking UX',
          'Room comparison experiences',
          'Booking engine integrations',
          'Rate and policy clarity',
          'Mobile booking optimisation',
          'Conversion funnel analysis',
        ],
      },

      {
        tag: '05 · HOSPITALITY CONTENT & VISUAL STORYTELLING',

        title:
          'Show What Makes the Stay Memorable Before Guests Arrive',

        description:
          'Hospitality decisions are strongly influenced by the quality and accuracy of visual presentation. We can support room photography, property videos, destination content, amenity descriptions and experience-led campaign creative. Content should help guests understand what they can expect rather than relying on exaggerated visuals. Seasonal experiences, dining, wellness and event facilities can be presented where genuinely available.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Property photography',
          'Room and suite content',
          'Hospitality video production',
          'Destination storytelling',
          'Dining and experience content',
          'Campaign creative design',
        ],
      },

      {
        tag: '06 · BOOKING SYSTEMS & GUEST COMMUNICATION',

        title:
          'Connect Guest Enquiries With the Systems Running Your Property',

        description:
          'Hospitality businesses often use booking engines, property management systems, channel managers and guest communication tools. We can assess supported integrations that connect website reservations, enquiries and guest information with existing workflows. Where appropriate, automation may support pre-arrival information, enquiry routing or post-stay communication. Rate synchronisation, inventory management, payment handling and operational workflows depend on the capabilities and permissions of the underlying systems.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected guest operations',

        chips: [
          'Booking engine integration',
          'PMS integration assessment',
          'Channel manager connectivity',
          'Guest enquiry routing',
          'Pre-arrival communication',
          'CRM and automation workflows',
        ],
      },

      {
        tag: '07 · HOSPITALITY ANALYTICS & BOOKING PERFORMANCE',

        title:
          'Understand Which Channels and Experiences Influence Bookings',

        description:
          'Hospitality performance requires more context than visitor counts or booking button clicks. We help measure property-page engagement, room interest, booking-engine transitions and supported reservation events. Where reliable booking and commercial data exists, reporting can consider direct booking contribution, acquisition costs, booking value and seasonal patterns. We distinguish confirmed bookings from booking intent and account for cancellations, OTA influence, attribution gaps and revenue versus profitability.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'From guest interest to confirmed bookings',

        chips: [
          'GA4 and GTM tracking',
          'Room and property engagement',
          'Booking funnel analytics',
          'Confirmed reservation tracking',
          'Channel performance reporting',
          'Direct booking insights',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM DESTINATION DISCOVERY TO RESERVATION',

    headline:
      'Make the Hospitality Booking Journey Clearer at Every Stage',

    subheadline:
      'Guests want to understand the property, compare accommodation options and feel confident about their reservation. We help connect those expectations with better digital experiences.',

    leftLabel: 'What Hospitality Guests Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Accommodation',

        industryStandard:
          'Travellers may search by destination, hotel category, neighbourhood, travel purpose or a particular amenity.',

        ourApproach:
          'We improve relevant property content, local SEO and suitable acquisition campaigns around genuine guest interests and destination searches.',
      },

      {
        feature: 'Exploring the Property Experience',

        industryStandard:
          'Guests want to understand rooms, facilities, dining, location, accessibility and the overall experience before considering a stay.',

        ourApproach:
          'We organise authentic photography, room information, amenity pages and relevant property details into an easy-to-navigate experience.',
      },

      {
        feature: 'Comparing Rooms and Stay Options',

        industryStandard:
          'Travellers may compare room types, occupancy, amenities, rates, packages and relevant booking conditions.',

        ourApproach:
          'We improve room comparison, pricing clarity and navigation using verified information and supported booking system data.',
      },

      {
        feature: 'Evaluating Trust and Booking Conditions',

        industryStandard:
          'Guests may review cancellation policies, taxes, payment requirements, location details, reviews and property credentials.',

        ourApproach:
          'We make important booking information and authentic credibility signals easier to find without inventing ratings or guest experiences.',
      },

      {
        feature: 'Checking Availability and Booking',

        industryStandard:
          'Guests expect accurate availability information, a usable booking process and clear confirmation of their reservation.',

        ourApproach:
          'We improve booking pathways and integrate compatible reservation systems, ensuring that confirmed availability and bookings come from authoritative sources.',
      },

      {
        feature: 'Preparing for and Completing the Stay',

        industryStandard:
          'After booking, guests may need check-in information, directions, property policies, special requests or support before arrival.',

        ourApproach:
          'We can support suitable guest communication and enquiry workflows connected to available property systems and consent requirements.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Property and Guest Experience',

    subheadline:
      'We begin with your accommodation offering, guest segments, booking channels and operational systems. Then we prioritise improvements that make the property easier to discover, evaluate and book.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Property and Guest Segments',

        summary:
          'We establish what makes your property relevant to different guests and how reservations are currently generated and managed.',

        details: [
          'Review property types, rooms, amenities and experiences',
          'Identify guest segments, source markets and seasonal demand',
          'Understand direct bookings, OTA channels and reservation systems',
        ],
      },

      {
        step: '02',

        title: 'Audit the Guest Discovery and Booking Journey',

        summary:
          'We assess how travellers find your property, compare accommodation options and move toward a reservation.',

        details: [
          'Review property pages, room information and mobile usability',
          'Assess hotel SEO, campaigns and local search visibility',
          'Evaluate booking transitions, analytics and guest enquiry friction',
        ],
      },

      {
        step: '03',

        title: 'Plan the Hospitality Website Architecture',

        summary:
          'We organise content and conversion pathways around your property experience, accommodation options and booking operations.',

        details: [
          'Map room, amenity, dining, experience and location pages',
          'Prioritise SEO, content, acquisition and conversion improvements',
          'Define booking engine, PMS and communication integration needs',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Guest Experience',

        summary:
          'We implement the agreed website, content and booking journey improvements with attention to visual quality and usability.',

        details: [
          'Develop or refine property and accommodation pages',
          'Improve room selection and booking calls to action',
          'Implement approved creative, campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Booking and Communication Workflows',

        summary:
          'We test important guest interactions and review how website actions connect with the property’s reservation and communication systems.',

        details: [
          'Test room navigation, booking links and supported reservation flows',
          'Validate available analytics and confirmed booking events',
          'Review enquiry routing, guest communication and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review Booking Quality and Refine',

        summary:
          'We use available marketing, booking and guest behaviour data to improve discovery, conversion and relevant customer communication.',

        details: [
          'Review interest by property, room type and acquisition channel',
          'Assess available confirmed booking and conversion data',
          'Refine content, campaigns and booking journeys using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Property Discovery to Confirmed Booking',

    items: [
      {
        value: 'Discover',

        label: 'Relevant destination and property visibility',

        subtext:
          'Review search visibility, acquisition channels and engagement with important property, room, amenity and destination pages.',
      },

      {
        value: 'Explore',

        label: 'Room and guest experience engagement',

        subtext:
          'Assess supported interactions with accommodation options, galleries, packages, amenities and booking information.',
      },

      {
        value: 'Book',

        label: 'Reservation intent and confirmed bookings',

        subtext:
          'Measure booking-engine transitions and, where supported, completed reservations while distinguishing booking intent from confirmed transactions.',
      },

      {
        value: 'Improve',

        label: 'Direct booking contribution and guest value',

        subtext:
          'Where reliable data exists, review channel costs, booking value, cancellations and repeat stays while recognising attribution and profitability limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS HOSPITALITY BUSINESSES ASK',

    headline:
      'Digital Growth for Hotels & Hospitality: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our hotel or resort increase direct bookings?',

        answer:
          'We help hospitality businesses improve their websites, room presentation, search visibility, acquisition campaigns and booking journeys. Depending on your property, this may include hotel website development, SEO, Google and Meta Ads, booking-engine integration, conversion optimisation and analytics. We focus on reducing avoidable booking friction and improving relevant demand. Direct booking growth depends on pricing, availability, property appeal, channel competition and operational factors.',
      },

      {
        question:
          'Can you build a website for our hotel, resort or boutique property?',

        answer:
          'Yes. We develop hospitality websites with room and suite pages, property galleries, amenities, dining, experiences, location information and suitable booking pathways. The structure is tailored to the property and its guest segments. We also consider content management, mobile usability, performance and compatibility with existing reservation systems.',
      },

      {
        question:
          'Can you integrate our existing hotel booking engine?',

        answer:
          'We can assess and integrate compatible booking engines using supported widgets, links, APIs or other approved methods. The available functionality depends on the booking provider. Real-time rates, availability, payments and reservation confirmation must come from the authoritative booking system. We validate compatibility and data handling before recommending an integration.',
      },

      {
        question:
          'Can you integrate our website with a PMS or channel manager?',

        answer:
          'We can assess supported integrations with property management systems and channel managers where suitable APIs or connectors are available. Potential functionality depends on the provider, permissions and existing configuration. Rate synchronisation, inventory management and operational changes require careful testing to avoid inconsistent booking information.',
      },

      {
        question:
          'How can SEO help our hospitality business?',

        answer:
          'Hospitality SEO can improve visibility for relevant property, destination, neighbourhood and accommodation searches. We work on technical SEO, room and amenity content, local visibility and useful destination information. The approach is tailored to genuine property features and guest search intent. Rankings and bookings depend on competition, demand, property relevance and website quality.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for hotels and resorts?',

        answer:
          'Yes. We can plan suitable Google and Meta campaigns around relevant property searches, destinations, guest segments and seasonal offers. Where eligible, we can assess hotel advertising integrations and supported booking data. Campaign performance should be evaluated using available booking and commercial information rather than traffic or enquiry counts alone.',
      },

      {
        question:
          'Can you help us reduce dependence on online travel agencies?',

        answer:
          'We can help strengthen your direct booking experience through better property content, search visibility, suitable campaigns and a clearer reservation journey. However, OTAs can remain important discovery and distribution channels. The objective is to evaluate a commercially sensible channel mix, considering commissions, acquisition costs, occupancy, guest demand and operational requirements.',
      },

      {
        question:
          'Can you create separate pages for rooms, suites and hotel experiences?',

        answer:
          'Yes. Dedicated room and experience pages can help guests compare relevant accommodation options and understand the property. We recommend accurate photographs, occupancy details, amenities and useful booking information. Additional pages for dining, events, wellness or local experiences should reflect facilities and services the property genuinely offers.',
      },

      {
        question:
          'Can you build a website for a hospitality group with multiple properties?',

        answer:
          'Yes. We can develop multi-property website architectures with shared brand content, individual property pages, location information and suitable booking pathways. The approach depends on whether properties use common or separate reservation systems, content workflows and commercial teams. Multi-property search and availability features require compatible booking data.',
      },

      {
        question:
          'Can you help with hotel photography, video and creative content?',

        answer:
          'We can support property photography, room presentation, hospitality video, destination content and campaign creative within the agreed production scope. Authentic imagery is particularly important because guests rely on photographs when evaluating accommodation. Production logistics, usage rights and any necessary on-site arrangements are scoped separately.',
      },

      {
        question:
          'Can you improve our existing hotel website without rebuilding it?',

        answer:
          'Yes. We first review the current website, mobile usability, room presentation, SEO, page performance and booking experience. If the existing platform supports the required changes, targeted improvements may be more practical than a rebuild. We recommend a new website only where technical or structural limitations justify the investment.',
      },

      {
        question:
          'Can you automate guest enquiries and pre-arrival communication?',

        answer:
          'We can assess suitable communication workflows for enquiry responses, reservation-related information and pre-arrival messages. The implementation depends on available booking or CRM integrations, data accuracy and guest consent requirements. Operationally important messages should use reliable booking information and provide a clear route to human assistance when needed.',
      },

      {
        question:
          'How do you measure hotel website and booking performance?',

        answer:
          'We can track supported interactions such as room-page engagement, booking clicks, enquiry submissions and booking-engine transitions. Where reliable reservation data is available, reporting may also consider confirmed bookings, booking value, cancellations and channel performance. We distinguish website conversion events from actual reservations and recognise that guests often use multiple channels before booking.',
      },

      {
        question:
          'How much does a hospitality website or digital growth project cost?',

        answer:
          'Costs depend on the number of properties, room types, website features, content requirements, booking systems, integrations and marketing scope. A boutique hotel website has different needs from a resort or multi-property hospitality group. Share your current website, accommodation offering, reservation platform and commercial priorities so we can recommend an appropriate project scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Hospitality Experience That Begins Before Check-In',

    subheadline:
      'Whether you manage a boutique hotel, resort or hospitality group, we can help connect your property experience with better digital discovery, clearer booking journeys and suitable guest communication workflows.',

    bulletPoints: [
      'Build a property website that communicates the guest experience',
      'Improve destination visibility through SEO and relevant campaigns',
      'Simplify room exploration and direct booking journeys',
      'Connect suitable booking systems, guest workflows and analytics',
    ],

    buttonText: 'Discuss Your Hospitality Project',
  },
};

export const hospitalityPage = hospitalityV2Data;
export const hospitalityPageV2 = hospitalityV2Data;
export default hospitalityPage;
