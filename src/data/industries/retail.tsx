
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved retail-specific visual.
// Prefer a modern retail environment showing
// physical products and digital commerce.
import retailOverviewImg from '@/assets/retail-overview.jpg';

/**
 * Bixeltek — Retail Industry Page
 *
 * Category: Ecommerce & D2C
 *
 * Target businesses:
 * - Independent retail stores
 * - Multi-brand retailers
 * - Online retail businesses
 * - Omnichannel retail companies
 * - Multi-location retail chains
 * - Specialty retail businesses
 * - Retailers expanding into ecommerce
 *
 * Primary customer journey:
 * Discover -> Browse -> Compare ->
 * Check Availability -> Purchase -> Return
 *
 * Core priorities:
 * Product discovery, ecommerce architecture,
 * omnichannel experience, paid acquisition,
 * SEO, conversion optimisation, integrations,
 * customer retention and analytics.
 *
 * Claims about stock availability, pricing,
 * delivery, returns and product performance
 * must reflect verified business information.
 */

export const retailV2Data: IndustryPageData = {
  slug: 'retail',

  aliases: [
    'retail-businesses',
    'retail-stores',
    'online-retail',
    'omnichannel-retail',
  ],

  industryName: 'Retail',

  seo: {
    title:
      'Retail Ecommerce & Digital Growth Solutions | Bixeltek',

    description:
      'Digital solutions for retail stores and ecommerce businesses. Build online stores, improve retail SEO, Google Ads, Meta Ads, shopping experiences, inventory integrations and customer retention.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR RETAIL BUSINESSES',

    title: 'Turn Browsing Shoppers Into',
    highlightedTitle: 'Ecommerce Orders',

    description:
      'Help customers find the right products, shop with confidence and buy across your digital channels. We combine ecommerce development, SEO, Google and Meta Ads, conversion optimisation and retail integrations to support online sales and connected shopping experiences.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW RETAIL CUSTOMERS SHOP TODAY',

    title: (
      <>
        Customers Move Between Channels.
        {' '}
      </>
    ),

    highlightedTitle:
      'Your Retail Experience Should Feel Connected.',

    description:
      'Retail shoppers compare prices, shipping speeds, return policies, and stock availability across multiple open tabs. Hidden delivery fees, complicated checkout steps, or sluggish search filters trigger cart abandonment in seconds. Providing immediate product specifications and transparent fulfillment options reassures buyers and accelerates purchasing decisions.',
    secondaryDescription:
      'Bixeltek optimizes retail storefronts for friction-free discovery and rapid checkout. We align omnichannel inventory visibility, structured product data, and targeted shopping campaigns, enabling independent retailers and multi-location brands to capture high-intent commercial searches and turn casual browsers into loyal, repeat customers across digital and physical touchpoints.',
    imageSrc: retailOverviewImg,

    imageAlt:
      'Modern retail store with organised product displays and digital shopping technology',

    features: [
      {
        title: 'Make Products Easier to Discover',

        description:
          'Help shoppers navigate product categories, find relevant items and understand essential details through better ecommerce architecture, search visibility and merchandising.',
      },

      {
        title: 'Remove Friction From the Buying Journey',

        description:
          'Improve mobile shopping, product pages, cart flows, checkout and customer information so shoppers can make informed purchase decisions.',
      },

      {
        title: 'Connect Digital Commerce With Retail Operations',

        description:
          'Integrate suitable inventory, payment, order and customer systems to support more consistent information and manageable retail workflows.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions for Modern Retail Businesses',

    subheadline:
      'From product discovery to checkout and fulfilment, we connect the digital capabilities that help retailers sell, operate and improve across channels.',

    items: [
      {
        tag: '01 · ECOMMERCE DEVELOPMENT',

        title:
          'Build an Online Store Around Your Products and Operations',

        description:
          'Retail ecommerce requires more than a product catalogue and payment button. We develop online stores with clear category structures, product detail pages, responsive shopping experiences and manageable content workflows. Depending on your requirements, we can work with Shopify, WooCommerce or suitable custom commerce architectures. Platform decisions consider catalogue size, integrations, operational complexity, budget and long-term maintenance.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Retail-ready ecommerce',

        chips: [
          'Shopify development',
          'WooCommerce development',
          'Custom ecommerce',
          'Product catalogue architecture',
          'Category and product pages',
          'Mobile commerce',
        ],
      },

      {
        tag: '02 · RETAIL SEO & PRODUCT DISCOVERY',

        title:
          'Help Customers Find the Products They Are Looking For',

        description:
          'Retail search visibility depends on how products, categories and useful shopping information are organised. We improve technical SEO, product and collection pages, internal linking and relevant local visibility for stores with physical locations. The strategy accounts for changing inventory, product variants and discontinued items rather than creating repetitive pages that provide little value.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Retail ecommerce SEO',
          'Product and category optimisation',
          'Technical and on-page SEO',
          'Local store visibility',
          'Product structured data',
        ],
      },

      {
        tag: '03 · GOOGLE & META ADS',

        title:
          'Reach Shoppers Across Search and Social Discovery',

        description:
          'We plan suitable campaigns around product demand, category priorities, margins and customer intent. Google Shopping and Search can help capture active product searches, while Meta campaigns may support product discovery and remarketing where permitted. Campaign performance depends on accurate product feeds, reliable tracking, competitive offers and the shopping experience after the click.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Product-focused acquisition',

        chips: [
          'Google Shopping campaigns',
          'Performance Max',
          'Google Search campaigns',
          'Meta ecommerce campaigns',
          'Product feed optimisation',
        ],
      },

      {
        tag: '04 · SHOPPING EXPERIENCE & CRO',

        title:
          'Make It Easier to Move From Browsing to Buying',

        description:
          'Customers may abandon a purchase when products are difficult to compare, delivery information is unclear or checkout requires unnecessary effort. We review product discovery, filters, product details, cart interactions, checkout and mobile usability. Improvements are prioritised around observed friction and business requirements rather than assumptions about what will increase conversion.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Find',
            value: 'The product',
          },
          {
            label: 'Evaluate',
            value: 'The offer',
          },
          {
            label: 'Purchase',
            value: 'With clarity',
          },
        ],

        chips: [
          'Product page optimisation',
          'Search and filtering UX',
          'Cart and checkout CRO',
          'Mobile shopping experience',
          'Delivery and return clarity',
          'Conversion analysis',
        ],
      },

      {
        tag: '05 · INVENTORY & RETAIL INTEGRATIONS',

        title:
          'Connect Your Store With the Systems Behind It',

        description:
          'Retail businesses may manage stock across warehouses, stores, marketplaces and ecommerce platforms. We assess integrations with inventory, POS, ERP, payment and order management systems where supported APIs or connectors are available. The goal is to reduce avoidable manual work and improve data consistency. Real-time stock visibility or cross-channel synchronisation is offered only when the underlying systems and implementation support it.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Inventory integrations',
          'POS and ERP connectivity',
          'Payment gateway integrations',
          'Order management workflows',
          'Product data synchronisation',
        ],
      },

      {
        tag: '06 · CUSTOMER RETENTION & AUTOMATION',

        title:
          'Create Better Experiences After the First Purchase',

        description:
          'Retail growth is influenced by repeat purchases as well as new customer acquisition. We can support appropriate customer communication workflows, post-purchase information, consent-based email or messaging and suitable CRM integrations. The strategy should reflect product purchase cycles, customer preferences and privacy requirements rather than sending frequent promotional messages without relevance.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected customer journeys',

        chips: [
          'Post-purchase workflows',
          'Customer segmentation',
          'Email and CRM integrations',
          'Abandoned checkout recovery',
          'Repeat purchase journeys',
        ],
      },

      {
        tag: '07 · RETAIL ANALYTICS & PERFORMANCE',

        title:
          'Understand What Drives Sales Across Products and Channels',

        description:
          'Retail decisions improve when marketing and commerce data are considered together. We help measure product engagement, add-to-cart activity, checkout progression, purchases and available channel performance. Where suitable data exists, reporting can also consider product categories, margins, customer acquisition costs and repeat purchase behaviour. We distinguish tracked sales from actual business profitability and recognise attribution limitations across online and physical stores.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Commerce performance visibility',

        chips: [
          'GA4 ecommerce tracking',
          'Google Tag Manager',
          'Product performance reporting',
          'Checkout funnel analysis',
          'Channel attribution',
          'Customer retention insights',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM PRODUCT DISCOVERY TO PURCHASE',

    headline:
      'Make Every Stage of the Retail Shopping Journey More Useful',

    subheadline:
      'Customers expect relevant products, reliable information and a straightforward path to purchase. We help retailers connect those expectations with the systems that support their business.',

    leftLabel: 'What Retail Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Relevant Products',

        industryStandard:
          'Shoppers may discover products through search engines, social media, advertisements, marketplaces or local retail searches.',

        ourApproach:
          'We improve product and category visibility through suitable SEO, product feeds, paid campaigns and clear landing-page experiences.',
      },

      {
        feature: 'Finding the Right Product',

        industryStandard:
          'Customers need useful categories, search tools, filters and navigation to narrow down available products.',

        ourApproach:
          'We develop product discovery experiences around catalogue structure, meaningful attributes, search functionality and relevant filtering options.',
      },

      {
        feature: 'Comparing Products and Offers',

        industryStandard:
          'Shoppers may compare specifications, photographs, prices, variants, reviews, delivery costs and return policies before purchasing.',

        ourApproach:
          'We improve product information architecture, visual presentation and the clarity of pricing, availability and purchasing conditions using verified business data.',
      },

      {
        feature: 'Checking Availability and Fulfilment',

        industryStandard:
          'Customers may want to know whether an item is available online, in a particular store or through delivery or collection.',

        ourApproach:
          'We can connect suitable inventory and fulfilment information where supported systems are available, while avoiding unsupported promises about real-time stock or delivery.',
      },

      {
        feature: 'Completing the Purchase',

        industryStandard:
          'Shoppers expect a secure and understandable checkout with suitable payment options, clear totals and minimal unnecessary steps.',

        ourApproach:
          'We improve cart and checkout usability and integrate supported payment methods, with appropriate attention to security, platform limitations and transaction reliability.',
      },

      {
        feature: 'Receiving Support After Purchase',

        industryStandard:
          'Customers may need order updates, delivery information, return instructions, support or an easy way to purchase again.',

        ourApproach:
          'We can support appropriate order communication, customer service pathways and retention workflows connected to suitable commerce and CRM systems.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Growth Plan Built Around Your Retail Business',

    subheadline:
      'We start with your products, customers, sales channels and operational requirements. Then we prioritise the ecommerce, marketing and integration improvements that support your business model.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Retail Model',

        summary:
          'We establish how your business sells, which products matter most and how your inventory and fulfilment operations work.',

        details: [
          'Review product categories, brands, pricing and sales channels',
          'Understand physical stores, online sales and fulfilment workflows',
          'Identify customer segments, commercial priorities and constraints',
        ],
      },

      {
        step: '02',

        title: 'Audit the Shopping Experience',

        summary:
          'We assess how customers discover products, navigate the catalogue, evaluate offers and complete purchases.',

        details: [
          'Review website performance, mobile UX and product discovery',
          'Assess SEO, campaigns, product feeds and checkout friction',
          'Evaluate tracking, inventory connections and operational gaps',
        ],
      },

      {
        step: '03',

        title: 'Plan the Commerce and Growth Architecture',

        summary:
          'We recommend improvements based on your catalogue, platform requirements, acquisition opportunities and integration needs.',

        details: [
          'Plan category, product and content architecture',
          'Prioritise suitable SEO, advertising and CRO opportunities',
          'Define integration requirements and platform trade-offs',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Retail Experience',

        summary:
          'We implement the agreed ecommerce and customer journey improvements with attention to usability and maintainability.',

        details: [
          'Develop or optimise storefront and product experiences',
          'Implement approved campaigns and landing pages',
          'Connect supported payment, inventory and order workflows',
        ],
      },

      {
        step: '05',

        title: 'Validate Commerce and Tracking',

        summary:
          'We test critical purchase actions and review whether important data flows work as expected.',

        details: [
          'Test product variants, cart, checkout and payment flows',
          'Validate supported ecommerce events and analytics',
          'Review order handling, inventory updates and customer notifications',
        ],
      },

      {
        step: '06',

        title: 'Review Performance and Refine',

        summary:
          'We evaluate available marketing and commerce data to identify practical improvements across acquisition, shopping experience and retention.',

        details: [
          'Review product and category performance',
          'Analyse checkout friction and acquisition efficiency',
          'Refine campaigns, content and customer journeys using reliable data',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Product Discovery to Retail Growth',

    items: [
      {
        value: 'Discover',

        label: 'Product and category visibility',

        subtext:
          'Review relevant search visibility, campaign reach and traffic to important product and category pages.',
      },

      {
        value: 'Engage',

        label: 'Product discovery and shopping behaviour',

        subtext:
          'Assess product views, search interactions, filtering, add-to-cart actions and other supported engagement events.',
      },

      {
        value: 'Purchase',

        label: 'Checkout and transaction performance',

        subtext:
          'Measure supported checkout events, completed online purchases, conversion rates and available acquisition costs.',
      },

      {
        value: 'Improve',

        label: 'Retail efficiency and customer value',

        subtext:
          'Where reliable data exists, review product contribution, repeat purchases and channel performance while accounting for costs, margins and attribution limits.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS RETAIL BUSINESSES ASK',

    headline:
      'Digital Growth for Retail Businesses: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our retail business grow online?',

        answer:
          'We help retailers improve ecommerce websites, product discovery, search visibility, paid advertising, shopping experiences and suitable operational integrations. Depending on your business model, the work may include Shopify or WooCommerce development, retail SEO, Google Shopping, Meta Ads, conversion optimisation, inventory connections and analytics. The focus is on practical improvements that support sales and operations rather than traffic alone.',
      },

      {
        question:
          'Can you build an ecommerce website for our physical retail store?',

        answer:
          'Yes. We can develop an online store for a physical retailer, with suitable product categories, product pages, payment options, shipping or collection workflows and content management. If you already use a POS or inventory system, we assess whether it can integrate with the ecommerce platform. The right setup depends on catalogue size, inventory processes, fulfilment and budget.',
      },

      {
        question:
          'Should our retail business use Shopify, WooCommerce or a custom ecommerce platform?',

        answer:
          'The right platform depends on your operational requirements. Shopify can suit businesses seeking a hosted commerce environment, while WooCommerce may suit retailers already using WordPress or needing particular content and plugin flexibility. Custom or headless commerce may be appropriate for more complex integrations or experiences, but usually requires greater development and maintenance effort. We evaluate the trade-offs before recommending a platform.',
      },

      {
        question:
          'Can you integrate our online store with our POS and inventory system?',

        answer:
          'We can assess integrations with supported POS, ERP, inventory and order management systems. Possible workflows include product data updates, stock synchronisation and order information exchange. The scope depends on the software, available APIs, data quality and operational rules. Real-time inventory accuracy cannot be promised without validating the complete system and synchronisation process.',
      },

      {
        question:
          'How can SEO help a retail ecommerce business?',

        answer:
          'Retail SEO can improve how relevant product, category and informational pages are discovered through search engines. We work on technical SEO, category structure, product information, internal linking and appropriate structured data. For physical stores, local search visibility may also be relevant. Results depend on competition, catalogue quality, demand and ongoing website maintenance.',
      },

      {
        question:
          'Can you manage Google Shopping and Meta Ads for retail products?',

        answer:
          'Yes. We can plan and manage suitable Google and Meta campaigns for eligible products, subject to platform policies. The work may include product feed review, campaign structure, creative testing, conversion tracking and landing-page improvements. Campaign strategy should consider product margins, stock availability, customer demand and acquisition costs rather than relying only on return-on-ad-spend figures.',
      },

      {
        question:
          'Can you improve our ecommerce conversion rate without rebuilding the store?',

        answer:
          'Yes. We first review product discovery, mobile usability, product detail pages, cart behaviour, checkout and available analytics. Depending on the platform, targeted improvements may address important friction without requiring a complete rebuild. We prioritise changes using evidence and business impact rather than promising a specific conversion uplift.',
      },

      {
        question:
          'Can you help us manage a large retail product catalogue?',

        answer:
          'We can design scalable category structures, product templates, attributes, filters and suitable import or integration workflows. Large catalogues require particular attention to product data quality, variant management, performance and search indexing. The implementation depends on the number of products, catalogue complexity and the systems used to maintain product information.',
      },

      {
        question:
          'Can you connect multiple retail locations with one ecommerce website?',

        answer:
          'Yes, where the underlying platforms and inventory systems support the required workflows. Possible features include store information, location-specific availability and suitable collection or fulfilment options. We assess how stock, orders and store responsibilities are managed before confirming what can be implemented reliably.',
      },

      {
        question:
          'How can we encourage repeat purchases from retail customers?',

        answer:
          'Retention opportunities depend on the products you sell and how often customers reasonably need to purchase again. We can support appropriate post-purchase communication, customer segmentation, email or messaging integrations and repeat purchase journeys. These workflows should respect customer consent, communication preferences and applicable privacy rules.',
      },

      {
        question:
          'How do you measure ecommerce and retail marketing performance?',

        answer:
          'We can configure supported ecommerce tracking for product views, add-to-cart events, checkout actions and purchases, then review available channel and product performance. Where reliable business data exists, analysis may also consider margins, acquisition costs and repeat purchases. Online attribution is imperfect, especially when customers research online and purchase in physical stores.',
      },

      {
        question:
          'Can you migrate our existing retail store to a new ecommerce platform?',

        answer:
          'Yes. We can assess migration of products, categories, content, customer information and other supported data between platforms. Migration planning should also consider URLs, redirects, SEO, integrations, order history, data protection and operational continuity. The exact scope depends on the source platform, destination platform and accessible data.',
      },

      {
        question:
          'How much does a retail ecommerce website or digital growth project cost?',

        answer:
          'Costs depend on catalogue size, platform choice, design requirements, payment and shipping workflows, integrations, migration needs and ongoing marketing scope. A straightforward online store is different from a multi-location retailer requiring complex inventory synchronisation and custom systems. Share your current website, product catalogue, sales channels and operational requirements so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Retail Experience That Works From Discovery to Purchase',

    subheadline:
      'Whether you are launching an online store, improving ecommerce performance or connecting physical and digital retail operations, we can help identify the technology and growth priorities that fit your business.',

    bulletPoints: [
      'Build or improve your retail ecommerce website',
      'Increase relevant product discovery through SEO and advertising',
      'Improve product, cart and checkout experiences',
      'Connect suitable inventory, order and customer systems',
    ],

    buttonText: 'Discuss Your Retail Business',
  },
};

export const retailPage = retailV2Data;
export const retailPageV2 = retailV2Data;
export default retailPage;
