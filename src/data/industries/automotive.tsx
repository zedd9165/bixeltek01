
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved automotive-specific image.
// Prefer authentic vehicle showroom, workshop,
// automotive parts or manufacturing photography.
import automotiveOverviewImg from '@/assets/automative-overview.jpg';

/**
 * Bixeltek — Automotive Industry Page
 *
 * Category: Technology & Industrial
 *
 * Target businesses:
 * - Automotive dealerships
 * - Used vehicle dealerships
 * - Vehicle service and repair businesses
 * - Automotive parts and accessories retailers
 * - Aftermarket automotive brands
 * - Automotive component manufacturers
 * - OEM and Tier suppliers
 * - Automotive technology companies
 * - Fleet service providers
 *
 * Primary customer journeys:
 *
 * Vehicle buyers:
 * Discover -> Compare -> Enquire ->
 * Test Drive -> Purchase
 *
 * Service customers:
 * Search -> Evaluate -> Book ->
 * Receive Service -> Return
 *
 * Parts buyers:
 * Find Product -> Verify Compatibility ->
 * Check Availability -> Buy / Request RFQ
 *
 * B2B buyers:
 * Identify Requirement -> Evaluate Supplier ->
 * Review Specifications -> Request RFQ
 *
 * Core priorities:
 * Automotive website development,
 * vehicle and product catalogues,
 * local and technical SEO,
 * Google and Meta Ads,
 * lead generation and booking UX,
 * ecommerce, CRM integrations,
 * automation and analytics.
 *
 * Important:
 * Vehicle pricing, specifications,
 * availability, finance terms,
 * parts compatibility, warranties,
 * certifications and service claims
 * must be verified before publication.
 */

export const automotiveV2Data: IndustryPageData = {
  slug: 'automotive',

  aliases: [
    'automotive-industry',
    'automotive-businesses',
    'automotive-companies',
    'automotive-services',
    'auto-industry',
  ],

  industryName: 'Automotive',

  seo: {
    title:
      'Automotive Website Development & Digital Growth | Bixeltek',

    description:
      'Digital solutions for automotive businesses. Build dealership websites, automotive ecommerce stores, improve automotive SEO, Google Ads, vehicle enquiries, service bookings and CRM workflows.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR AUTOMOTIVE BUSINESSES',

    title: 'Turn Local Driver Searches Into',
    highlightedTitle: 'Showroom Visits & Service Bookings',

    description:
      'Build a stronger digital experience for automotive buyers, vehicle owners and business customers. We connect automotive website development, search visibility, paid campaigns, ecommerce and enquiry workflows to help people discover your offerings and take the right action.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW AUTOMOTIVE CUSTOMERS RESEARCH AND DECIDE',

    title: (
      <>
        Automotive Decisions Start With Research.
        {' '}
      </>
    ),

    highlightedTitle:
      'Your Digital Experience Should Support the Entire Journey.',

    description:
      'Automotive customers demand rapid clarity—whether verifying inventory availability, replacement part compatibility, or booking maintenance appointments. When online catalogs lack filter accuracy or service booking requires tedious phone tags, potential buyers leave. Seamless inventory discovery and instant scheduling convert digital searches into active showroom and service appointments.',
    secondaryDescription:
      'Bixeltek connects local search optimization, live inventory management systems, and targeted paid advertising to drive qualified automotive leads. We streamline vehicle detail pages, parts lookups, and workshop appointment funnels so dealerships and specialty service centers can efficiently capture high-intent local demand and maximize long-term customer value.',
    imageSrc: automotiveOverviewImg,

    imageAlt:
      'Modern automotive showroom and service environment with vehicles and professional automotive operations',

    features: [
      {
        title: 'Make Your Offerings Easier to Explore',

        description:
          'Organise vehicles, services, components or accessories around the information customers need to compare and evaluate options.',
      },

      {
        title: 'Build Confidence Before Contact',

        description:
          'Present accurate specifications, service information, availability, business credentials and relevant customer evidence.',
      },

      {
        title: 'Connect Interest With the Right Action',

        description:
          'Create suitable enquiry, test-drive, service booking, product purchase or RFQ journeys for different automotive business models.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions for Automotive Sales, Services and Products',

    subheadline:
      'Automotive businesses need different digital capabilities depending on what they sell and who they serve. We connect websites, customer acquisition, commerce and operational workflows around those requirements.',

    items: [
      {
        tag: '01 · AUTOMOTIVE WEBSITE DEVELOPMENT',

        title:
          'Build a Website Around How Your Automotive Business Operates',

        description:
          'A dealership website, repair workshop and automotive component supplier should not share the same information architecture. We develop automotive websites with suitable vehicle listings, service pages, product catalogues, location information and conversion journeys. For businesses with multiple branches, brands or product categories, we plan scalable content structures and maintainable systems. The technical approach is selected around your actual requirements, integrations and operational capacity.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Automotive-focused web development',

        chips: [
          'Dealership websites',
          'Vehicle inventory pages',
          'Automotive service websites',
          'Parts and accessories catalogues',
          'Multi-location websites',
          'Custom CMS development',
        ],
      },

      {
        tag: '02 · AUTOMOTIVE SEO & LOCAL DISCOVERY',

        title:
          'Help Customers Find Relevant Vehicles, Services and Parts',

        description:
          'Automotive search intent can be highly specific. Customers may search for a vehicle model, repair service, compatible part or nearby workshop. We improve relevant SEO architecture through service pages, vehicle or product content, local visibility and technical SEO. For multi-location businesses, we structure useful location pages around genuine branches and service coverage rather than creating repetitive geographic content.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Automotive SEO',
          'Local workshop and dealership SEO',
          'Vehicle and product page SEO',
          'Technical and on-page SEO',
          'Multi-location search visibility',
        ],
      },

      {
        tag: '03 · AUTOMOTIVE PAID ACQUISITION',

        title:
          'Reach Customers Searching for Vehicles, Parts and Services',

        description:
          'We plan suitable Google and Meta campaigns around the automotive business model, whether that involves vehicle enquiries, service bookings, aftermarket products or relevant B2B opportunities. Campaigns are connected to focused landing pages and supported conversion actions. Vehicle advertising formats, product feeds and promotional claims must comply with applicable platform requirements and reflect actual availability and pricing.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Intent-led customer acquisition',

        chips: [
          'Google Search campaigns',
          'Meta automotive campaigns',
          'Service booking campaigns',
          'Vehicle enquiry campaigns',
          'Product catalogue advertising',
        ],
      },

      {
        tag: '04 · ENQUIRY, BOOKING & CONVERSION UX',

        title:
          'Make It Easier to Enquire, Book or Request a Quotation',

        description:
          'Automotive customers may be ready to schedule a test drive, request vehicle pricing, book maintenance or ask whether a particular part fits their vehicle. We design conversion journeys around these actions rather than relying on a generic contact form. This can include vehicle-specific enquiries, appointment requests, service selection, parts assistance and B2B RFQ flows. Booking availability and confirmation depend on the systems and processes integrated with the website.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Find',
            value: 'The right option',
          },
          {
            label: 'Evaluate',
            value: 'With clarity',
          },
          {
            label: 'Take',
            value: 'The next step',
          },
        ],

        chips: [
          'Test-drive requests',
          'Vehicle enquiry forms',
          'Service appointment UX',
          'Parts enquiry journeys',
          'RFQ and quotation forms',
          'Mobile conversion optimisation',
        ],
      },

      {
        tag: '05 · AUTOMOTIVE PARTS & ECOMMERCE',

        title:
          'Build Better Shopping Experiences for Parts and Accessories',

        description:
          'Automotive ecommerce requires more than product photographs and a checkout. Buyers may need to verify vehicle make, model, year, variant or part number before purchasing. We develop suitable ecommerce catalogues, product filters, compatibility information and payment experiences using verified product data. Integrations with inventory and fitment databases are assessed individually, since incorrect compatibility information can lead to costly returns and customer frustration.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Automotive ecommerce development',
          'Parts and accessories catalogues',
          'Vehicle compatibility filters',
          'SKU and part-number search',
          'Inventory and payment integrations',
        ],
      },

      {
        tag: '06 · AUTOMOTIVE CRM & AUTOMATION',

        title:
          'Connect Customer Enquiries With Sales and Service Teams',

        description:
          'Automotive enquiries can arrive from vehicle listings, advertising, workshop pages and product catalogues. We can connect supported website forms, scheduling tools and CRM systems to help route enquiries to the appropriate sales, service or parts team. Where suitable, workflows may support appointment notifications, enquiry follow-up and customer communication. Complex dealer management systems, workshop software and ERP integrations require separate technical assessment.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected automotive workflows',

        chips: [
          'CRM integrations',
          'Lead routing',
          'Service booking notifications',
          'Sales team handoffs',
          'DMS integration assessment',
          'Customer communication workflows',
        ],
      },

      {
        tag: '07 · AUTOMOTIVE ANALYTICS & PERFORMANCE',

        title:
          'Understand Which Vehicles, Services and Channels Drive Interest',

        description:
          'Automotive performance should be evaluated beyond website visits or raw enquiry counts. We help measure vehicle listing engagement, service-page interactions, booking requests, product activity and supported conversions. Where reliable CRM, booking or commerce data exists, reporting can examine enquiry quality and progression toward appointments, purchases or commercial opportunities. We account for offline showroom visits, phone conversations and attribution limitations.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Connected customer journey visibility',

        chips: [
          'GA4 and GTM tracking',
          'Vehicle enquiry analytics',
          'Service booking conversions',
          'Product performance reporting',
          'CRM conversion events',
          'Lead quality analysis',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM AUTOMOTIVE DISCOVERY TO ACTION',

    headline:
      'Help Automotive Customers Make More Informed Decisions',

    subheadline:
      'Whether customers are comparing vehicles, booking maintenance or sourcing components, they need relevant information and a clear next step.',

    leftLabel: 'What Automotive Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding Relevant Automotive Options',

        industryStandard:
          'Customers may search for a specific vehicle, nearby service provider, compatible part or industrial automotive supplier.',

        ourApproach:
          'We improve relevant SEO, acquisition campaigns and website architecture around the vehicles, products and services the business actually offers.',
      },

      {
        feature: 'Exploring Vehicles, Products or Services',

        industryStandard:
          'Buyers need useful specifications, product details, service descriptions, photographs and suitable comparison information.',

        ourApproach:
          'We structure vehicle listings, service pages and product catalogues so customers can find and understand relevant information.',
      },

      {
        feature: 'Checking Suitability and Availability',

        industryStandard:
          'Customers may need to verify vehicle availability, service coverage, part compatibility, pricing or appointment options.',

        ourApproach:
          'We present verified business information clearly and assess suitable integrations for inventory, availability or booking data.',
      },

      {
        feature: 'Evaluating Business Credibility',

        industryStandard:
          'Automotive customers may review business experience, customer feedback, service capabilities, warranties and approved credentials.',

        ourApproach:
          'We organise authentic customer evidence, accurate service information and verified business credentials without unsupported claims.',
      },

      {
        feature: 'Making an Enquiry or Booking',

        industryStandard:
          'Customers may want to request a test drive, schedule maintenance, ask about a vehicle, purchase a product or submit a technical RFQ.',

        ourApproach:
          'We create conversion journeys matched to the relevant action, with suitable forms, booking experiences and contact pathways.',
      },

      {
        feature: 'Receiving Follow-Up and Support',

        industryStandard:
          'After an enquiry or purchase, customers may need appointment confirmation, sales follow-up, order information or future service support.',

        ourApproach:
          'We can connect supported CRM, scheduling and communication workflows to improve handoffs and customer visibility.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Automotive Business Model',

    subheadline:
      'We start by understanding whether your business sells vehicles, provides services, distributes products or supplies industrial customers. Then we plan the digital experience around your actual customer journey.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Automotive Business',

        summary:
          'We establish your offerings, customers, locations and operational model before recommending a digital solution.',

        details: [
          'Review vehicle sales, services, products or B2B capabilities',
          'Identify target customers, markets and purchase journeys',
          'Understand sales, booking, inventory and enquiry workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit Customer Discovery and Conversion',

        summary:
          'We assess how customers find your business, evaluate options and move toward an enquiry, booking or purchase.',

        details: [
          'Review website structure, listings, product pages and mobile UX',
          'Assess SEO, campaigns and local search visibility',
          'Evaluate forms, bookings, tracking and existing integrations',
        ],
      },

      {
        step: '03',

        title: 'Plan the Digital Architecture',

        summary:
          'We organise content, technology and acquisition priorities around the automotive journeys that matter to your business.',

        details: [
          'Map vehicle, service, product and location pages',
          'Prioritise SEO, advertising and conversion improvements',
          'Define suitable CRM, inventory and booking integrations',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Experience',

        summary:
          'We implement the agreed website, catalogue, landing-page and conversion improvements with attention to accuracy and usability.',

        details: [
          'Develop or refine automotive pages and catalogues',
          'Improve enquiry, booking and purchasing journeys',
          'Implement approved campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Workflows and Tracking',

        summary:
          'We test important customer interactions and review whether enquiries and transactions reach the intended systems.',

        details: [
          'Test forms, appointment requests and supported purchase flows',
          'Validate analytics and conversion events',
          'Review CRM routing, notifications and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review Performance and Refine',

        summary:
          'We use available website, campaign and operational feedback to improve customer discovery and conversion quality.',

        details: [
          'Review interest by vehicle, service, product and location',
          'Assess enquiry quality and available sales or booking progression',
          'Refine content, campaigns and conversion journeys using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Automotive Discovery to Business Opportunity',

    items: [
      {
        value: 'Discover',

        label: 'Relevant automotive visibility',

        subtext:
          'Review search visibility, acquisition channels and visits to priority vehicle, service, product and location pages.',
      },

      {
        value: 'Evaluate',

        label: 'Vehicle, service and product engagement',

        subtext:
          'Assess supported interactions with listings, specifications, service information, inventory and product details.',
      },

      {
        value: 'Enquire',

        label: 'Bookings, enquiries and purchase actions',

        subtext:
          'Measure supported test-drive requests, service bookings, quotation enquiries and ecommerce conversions.',
      },

      {
        value: 'Improve',

        label: 'Qualified customer and commercial outcomes',

        subtext:
          'Where reliable CRM, booking or transaction data exists, review progression toward appointments, sales and repeat business while accounting for offline activity.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS AUTOMOTIVE BUSINESSES ASK',

    headline:
      'Digital Growth for Automotive Businesses: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our automotive business grow online?',

        answer:
          'We help automotive businesses improve websites, search visibility, paid campaigns, enquiry journeys and suitable operational integrations. Depending on your business model, this may include dealership websites, service booking experiences, automotive ecommerce, local SEO, Google Ads, Meta Ads, CRM integration and analytics. We prioritise the customer actions relevant to your business rather than applying the same strategy to every automotive company.',
      },

      {
        question:
          'Can you build a website for our car dealership?',

        answer:
          'Yes. We can develop dealership websites with vehicle listings, model or inventory pages, location information, enquiry forms and suitable test-drive request journeys. Where supported, vehicle inventory data may be connected to an existing system. The exact functionality depends on your dealership operations, data availability and integration requirements.',
      },

      {
        question:
          'Can you build a website for our automotive repair or service business?',

        answer:
          'Yes. We develop service-focused websites with relevant repair and maintenance pages, location information, contact options and appointment request journeys. We can also improve local SEO and suitable acquisition campaigns. Booking integrations depend on the workshop software and scheduling systems already in use.',
      },

      {
        question:
          'Can you create an ecommerce website for automotive spare parts and accessories?',

        answer:
          'Yes. We can develop automotive ecommerce stores using Shopify, WooCommerce or suitable custom solutions. Depending on the catalogue, this may include part-number search, product categories, compatibility filters, payment integrations and inventory workflows. Accurate fitment data must be supplied or verified through a suitable source before customers rely on it.',
      },

      {
        question:
          'How can SEO help our automotive business?',

        answer:
          'Automotive SEO can help relevant customers find vehicles, services, parts and local business locations. We work on technical SEO, service pages, product architecture, relevant content and local search visibility. The approach differs for dealerships, workshops, ecommerce businesses and industrial suppliers. Results depend on demand, competition, website quality and business relevance.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for automotive businesses?',

        answer:
          'Yes. We can plan suitable Google and Meta campaigns for eligible vehicles, services and automotive products. Campaigns may focus on relevant search demand, product discovery, service enquiries or vehicle interest. Platform eligibility, finance-related claims, inventory accuracy and regional advertising requirements must be reviewed before launch.',
      },

      {
        question:
          'Can you add test-drive booking or vehicle enquiry forms?',

        answer:
          'Yes. We can develop suitable vehicle-specific enquiry and test-drive request journeys. These may collect preferred models, locations, contact details and appointment preferences. Real-time availability and confirmed bookings require integration with the relevant scheduling or dealership systems.',
      },

      {
        question:
          'Can you integrate our automotive website with a CRM or dealer management system?',

        answer:
          'We can assess integrations with suitable CRM, dealer management and workshop systems where supported APIs or connectors are available. Potential workflows include lead routing, inventory updates, appointment notifications and supported reporting. Integration scope depends on the existing software, access permissions and data model.',
      },

      {
        question:
          'Can you help us manage a large automotive parts catalogue?',

        answer:
          'Yes. We can structure product categories, SKU data, manufacturer part numbers, variants and relevant filters. Large catalogues require attention to data quality, search performance, technical SEO and inventory synchronisation. Vehicle compatibility information needs reliable data and appropriate validation.',
      },

      {
        question:
          'Can you support multiple dealership or service centre locations?',

        answer:
          'Yes. We can develop multi-location website structures with accurate branch information, relevant services, location-specific contact routes and suitable enquiry routing. We recommend individual location pages where they provide genuine value and reflect actual operations.',
      },

      {
        question:
          'Can you improve our existing automotive website without rebuilding it?',

        answer:
          'Yes. We first assess the current website, content architecture, mobile usability, SEO, performance and conversion journeys. If the existing platform supports the required changes, targeted improvements may be more practical. A rebuild may be appropriate where technical limitations prevent reliable inventory, booking or catalogue functionality.',
      },

      {
        question:
          'Can you create content and visual assets for our automotive business?',

        answer:
          'We can support automotive content, photography, video and creative design within the agreed scope. This may include vehicle presentation, workshop photography, service explanations and product-focused campaign assets. Vehicle specifications, service claims, pricing and other factual information should be verified before publication.',
      },

      {
        question:
          'How do you measure automotive digital marketing performance?',

        answer:
          'We can track supported interactions such as vehicle listing views, calls, test-drive requests, service bookings, product engagement and ecommerce purchases. Where reliable CRM or operational data exists, reporting may also consider qualified leads, completed appointments and sales progression. We recognise that automotive decisions frequently involve phone calls and offline visits.',
      },

      {
        question:
          'How much does an automotive website or digital growth project cost?',

        answer:
          'Costs depend on your business model, number of locations, vehicle or product catalogue size, booking requirements, integrations and marketing scope. A local service workshop website has different requirements from a dealership platform or automotive parts ecommerce store. Share your current website, offerings and operational needs so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build an Automotive Digital Experience That Moves Customers Forward',

    subheadline:
      'Whether you sell vehicles, provide automotive services, distribute parts or serve industrial buyers, we can help connect your offerings with clearer discovery, stronger digital experiences and relevant business enquiries.',

    bulletPoints: [
      'Build or improve your automotive website and catalogue',
      'Increase relevant discovery through SEO and advertising',
      'Simplify vehicle enquiries, service bookings and product purchases',
      'Connect suitable CRM, inventory and reporting workflows',
    ],

    buttonText: 'Discuss Your Automotive Business',
  },
};

export const automotivePage = automotiveV2Data;
export const automotivePageV2 = automotiveV2Data;
export default automotivePage;
