
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved food and beverage image.
// Prefer premium packaged food, beverage products,
// or an authentic lifestyle product photoshoot.
import foodBeverageOverviewImg from '@/assets/food-beverage-overview.jpg';

/**
 * Bixeltek — Food & Beverage Industry Page
 *
 * Category: Ecommerce & D2C
 *
 * Target businesses:
 * - Packaged food brands
 * - D2C food and beverage companies
 * - Snack and confectionery brands
 * - Coffee and tea brands
 * - Specialty and gourmet food businesses
 * - Health-focused food and beverage brands
 * - Food manufacturers expanding into ecommerce
 * - Beverage and consumer packaged goods brands
 *
 * Primary customer journey:
 * Discover -> Explore Products ->
 * Evaluate Ingredients and Value ->
 * Purchase -> Experience -> Reorder
 *
 * Core priorities:
 * Ecommerce development, product presentation,
 * food and beverage SEO, paid acquisition,
 * content creation, conversion optimisation,
 * subscriptions, retention, integrations
 * and ecommerce analytics.
 *
 * Important:
 * Ingredients, allergens, nutritional information,
 * certifications, health claims, shelf life,
 * delivery conditions and availability must
 * reflect verified product information.
 *
 * Advertising and labelling requirements vary
 * by product category and target jurisdiction.
 */

export const foodBeverageV2Data: IndustryPageData = {
  slug: 'food-beverage',

  aliases: [
    'food-and-beverage',
    'food-beverage-brands',
    'food-brands',
    'beverage-brands',
    'food-ecommerce',
  ],

  industryName: 'Food & Beverage',

  seo: {
    title:
      'Food & Beverage Ecommerce and Digital Growth | Bixeltek',

    description:
      'Ecommerce development and digital growth for food and beverage brands. Build D2C stores, improve product discovery, Google and Meta Ads, subscriptions, repeat purchases and customer experience.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR FOOD & BEVERAGE BRANDS',

    title: 'Turn Hungry Searchers Into',
    highlightedTitle: 'Loyal Brand Customers',

    description:
      'Help customers discover your food and beverage products, understand what makes them different and purchase with confidence. We connect ecommerce development, creative content, SEO, paid campaigns and customer retention to support stronger digital shopping experiences.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW FOOD & BEVERAGE CUSTOMERS DISCOVER AND BUY',

    title: (
      <>
        Great Products Create Interest.
        {' '}
      </>
    ),

    highlightedTitle:
      'A Better Digital Experience Helps Turn It Into Purchase.',

    description:
      'Without the ability to taste or smell items in person, online food buyers rely on vivid product photography, nutritional labels, and allergen disclosures. When websites lack ingredient clarity, freshness guarantees, or clear shipping timelines, consumers abandon carts. Transparent product details eliminate uncertainty and encourage confident orders.',
    secondaryDescription:
      'Bixeltek builds high-converting food and beverage storefronts designed for rapid product discovery, subscription reorders, and temperature-sensitive fulfillment logistics. We align targeted culinary search campaigns with rich product presentation and frictionless checkout funnels, turning first-time food shoppers into loyal, recurring subscribers across direct-to-consumer and wholesale retail channels.',
    imageSrc: foodBeverageOverviewImg,

    imageAlt:
      'Premium packaged food and beverage products arranged for a modern ecommerce brand photoshoot',

    features: [
      {
        title: 'Make Products Easier to Understand',

        description:
          'Present flavours, ingredients, pack sizes, dietary information and product benefits clearly using accurate descriptions and useful visual content.',
      },

      {
        title: 'Build Confidence Before Checkout',

        description:
          'Help shoppers evaluate freshness information, delivery conditions, availability and purchase options without relying on unsupported product claims.',
      },

      {
        title: 'Support the Next Purchase',

        description:
          'Create appropriate reorder, subscription and customer communication journeys for products that customers may want to buy regularly.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions Built Around How Food & Beverage Brands Grow',

    subheadline:
      'From product discovery and storytelling to checkout, fulfilment and repeat orders, we connect the digital capabilities that support food and beverage commerce.',

    items: [
      {
        tag: '01 · FOOD & BEVERAGE ECOMMERCE',

        title:
          'Build an Online Store That Makes Your Products Easy to Buy',

        description:
          'Food and beverage ecommerce needs clear product organisation, accurate product information and a shopping experience suited to how customers purchase. We develop storefronts with product collections, pack sizes, bundles, variants, payment options and manageable content workflows. Depending on your requirements, we can work with Shopify, WooCommerce or suitable custom commerce architectures. Platform decisions consider catalogue complexity, fulfilment, integrations and long-term operating costs.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Product-focused ecommerce',

        chips: [
          'Shopify development',
          'WooCommerce development',
          'Custom ecommerce',
          'Product and collection pages',
          'Bundles and pack sizes',
          'Mobile shopping experiences',
        ],
      },

      {
        tag: '02 · FOOD & BEVERAGE SEO',

        title:
          'Help Customers Discover Products That Match Their Preferences',

        description:
          'Food and beverage searches often combine product type, flavour, ingredients, dietary preferences, brand or intended use. We improve relevant product and collection pages, technical SEO, internal linking and useful informational content. The strategy focuses on accurate product descriptions and meaningful search intent rather than publishing unsupported nutritional or health claims.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Food and beverage SEO',
          'Product and category optimisation',
          'Technical and on-page SEO',
          'Product structured data',
          'Useful product-led content',
        ],
      },

      {
        tag: '03 · PAID CAMPAIGNS & PRODUCT DISCOVERY',

        title:
          'Introduce Your Products to Relevant Shoppers',

        description:
          'Food and beverage advertising can combine active product searches with visual discovery. We plan suitable Google and Meta campaigns around product categories, offers, audience intent and commercial priorities. Creative testing can explore product demonstrations, packaging, usage occasions and different messages. All campaigns must respect applicable advertising policies, particularly for products with restricted ingredients or regulated claims.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Product-led acquisition',

        chips: [
          'Google Search campaigns',
          'Eligible Shopping campaigns',
          'Meta ecommerce campaigns',
          'Creative and offer testing',
          'Product feed optimisation',
        ],
      },

      {
        tag: '04 · PRODUCT EXPERIENCE & CONVERSION',

        title:
          'Help Customers Understand the Product Before They Buy',

        description:
          'Online food shoppers need more than attractive packaging. They may want to know ingredients, allergens, nutritional information, pack quantity, flavour, shelf life, storage instructions and delivery conditions. We improve product-page structure, mobile usability, product comparisons, cart interactions and checkout clarity. Information is based on verified product data, with appropriate attention to jurisdiction-specific labelling requirements.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Discover',
            value: 'The product',
          },
          {
            label: 'Understand',
            value: 'What is inside',
          },
          {
            label: 'Purchase',
            value: 'With confidence',
          },
        ],

        chips: [
          'Product detail optimisation',
          'Ingredients and allergen information',
          'Pack size and variant UX',
          'Bundle presentation',
          'Cart and checkout CRO',
          'Mobile shopping optimisation',
        ],
      },

      {
        tag: '05 · FOOD CONTENT & BRAND STORYTELLING',

        title:
          'Show Customers What Makes Your Products Different',

        description:
          'Food and beverage products benefit from visual content that communicates texture, preparation, serving ideas, packaging and everyday usage. We can support product photography, short-form videos, recipe or serving content, campaign creative and brand storytelling. The content should reflect the actual product and avoid misleading representations of ingredients, preparation methods or health-related benefits.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Food product photography',
          'Beverage product shoots',
          'Short-form video content',
          'Recipe and serving content',
          'Campaign creative design',
        ],
      },

      {
        tag: '06 · SUBSCRIPTIONS & REPEAT PURCHASES',

        title:
          'Make Reordering Easier for Products Customers Use Regularly',

        description:
          'Some food and beverage products lend themselves to repeat purchases, including coffee, tea, snacks and everyday pantry items. We can support reorder journeys, suitable subscription integrations, customer segmentation and consent-based communication workflows. Subscription features require clear billing, cancellation and fulfilment rules. The approach should reflect realistic consumption patterns and product suitability rather than assuming every product needs a subscription model.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Retention and reorder journeys',

        chips: [
          'Subscription integrations',
          'Easy reorder experiences',
          'Product bundles',
          'Post-purchase workflows',
          'CRM and email integrations',
        ],
      },

      {
        tag: '07 · COMMERCE OPERATIONS & ANALYTICS',

        title:
          'Connect Product Performance With Orders, Inventory and Customer Behaviour',

        description:
          'Food and beverage businesses need to understand which products sell, which campaigns attract relevant customers and how fulfilment affects the experience. We help configure ecommerce tracking and assess suitable inventory, order and customer system integrations. Where reliable data exists, reporting can consider product performance, repeat purchases, acquisition costs and available operational signals. Batch, expiry or temperature-sensitive workflows require separate technical scoping and validation.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Connected commerce visibility',

        chips: [
          'GA4 ecommerce tracking',
          'Google Tag Manager',
          'Product and bundle analytics',
          'Inventory integrations',
          'Order management workflows',
          'Customer retention reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM PRODUCT DISCOVERY TO REORDER',

    headline:
      'Make Every Step of the Food & Beverage Shopping Journey More Useful',

    subheadline:
      'Customers want appealing products, reliable information and a convenient purchasing experience. We help brands connect those expectations with practical ecommerce systems.',

    leftLabel: 'What Food & Beverage Shoppers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering New Products',

        industryStandard:
          'Customers may discover food and beverage brands through search, social content, advertising, recommendations or product-related interests.',

        ourApproach:
          'We connect suitable acquisition campaigns and relevant search visibility with product and collection pages that clearly communicate the offer.',
      },

      {
        feature: 'Understanding the Product',

        industryStandard:
          'Shoppers may compare flavours, ingredients, nutritional information, dietary suitability, quantities and product characteristics.',

        ourApproach:
          'We organise verified product information, useful photographs and relevant product details so customers can make more informed decisions.',
      },

      {
        feature: 'Evaluating Value and Purchase Options',

        industryStandard:
          'Customers may compare pack sizes, bundles, prices, delivery costs and available purchase options before ordering.',

        ourApproach:
          'We improve variant selection, bundle presentation, pricing clarity and relevant shopping information using accurate business data.',
      },

      {
        feature: 'Checking Delivery and Product Handling',

        industryStandard:
          'Food customers may need information about delivery coverage, estimated fulfilment, storage requirements and product suitability for shipping.',

        ourApproach:
          'We present supported delivery and handling information clearly and assess suitable fulfilment integrations where required.',
      },

      {
        feature: 'Completing the Purchase',

        industryStandard:
          'Shoppers expect a secure checkout, understandable order totals, suitable payment options and minimal unnecessary steps.',

        ourApproach:
          'We improve cart and checkout usability, supported payment integrations and mobile shopping flows to reduce avoidable friction.',
      },

      {
        feature: 'Reordering and Staying Connected',

        industryStandard:
          'Customers who enjoy a product may want to reorder it, discover related products or subscribe to suitable recurring purchases.',

        ourApproach:
          'We can support easy reorder paths, appropriate subscriptions and consent-based retention journeys connected to suitable commerce systems.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Growth Plan Built Around Your Food & Beverage Brand',

    subheadline:
      'We begin with your products, customer preferences, distribution model and operational requirements. Then we prioritise the ecommerce, creative and marketing improvements that fit your business.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Products and Business Model',

        summary:
          'We establish what you sell, who buys it and how your products are packaged, priced, distributed and fulfilled.',

        details: [
          'Review product categories, variants, bundles and pricing',
          'Understand customer segments, purchase frequency and channels',
          'Identify storage, fulfilment and product information requirements',
        ],
      },

      {
        step: '02',

        title: 'Audit Product Discovery and Shopping UX',

        summary:
          'We assess how customers find your products, understand their characteristics and move through the purchasing journey.',

        details: [
          'Review product pages, mobile usability and checkout',
          'Assess SEO, campaigns, creative and product feed quality',
          'Evaluate analytics, retention and operational integrations',
        ],
      },

      {
        step: '03',

        title: 'Plan the Commerce and Content Architecture',

        summary:
          'We recommend improvements based on your catalogue, brand identity, product information needs and commercial priorities.',

        details: [
          'Plan product and collection structure',
          'Prioritise SEO, creative, paid acquisition and CRO opportunities',
          'Define suitable subscription, fulfilment and integration needs',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Shopping Experience',

        summary:
          'We implement the agreed storefront, product content and marketing improvements with attention to accuracy and usability.',

        details: [
          'Develop or refine product and collection pages',
          'Improve bundle, variant, cart and checkout journeys',
          'Implement approved creative, campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Orders, Data and Workflows',

        summary:
          'We test critical ecommerce actions and review whether customer, order and marketing data flows operate as intended.',

        details: [
          'Test product selection, cart, checkout and payment flows',
          'Validate supported ecommerce tracking and conversion events',
          'Review inventory, fulfilment and subscription workflows in scope',
        ],
      },

      {
        step: '06',

        title: 'Review Product Performance and Improve',

        summary:
          'We use available commerce and customer behaviour data to refine discovery, shopping experiences and suitable retention journeys.',

        details: [
          'Review product, bundle and acquisition performance',
          'Identify product-page and checkout friction',
          'Refine campaigns, content and repeat purchase workflows',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Product Discovery to Repeat Purchase',

    items: [
      {
        value: 'Discover',

        label: 'Relevant product visibility',

        subtext:
          'Review search visibility, campaign engagement and traffic to important food and beverage product and collection pages.',
      },

      {
        value: 'Explore',

        label: 'Product and offer engagement',

        subtext:
          'Assess product views, variant selection, bundle interactions, add-to-cart activity and other supported shopping events.',
      },

      {
        value: 'Purchase',

        label: 'Checkout and order performance',

        subtext:
          'Measure supported checkout events, completed online orders, conversion rates and available acquisition costs.',
      },

      {
        value: 'Improve',

        label: 'Repeat purchases and product economics',

        subtext:
          'Where reliable data exists, review reorder behaviour, subscription activity, product contribution and retention after relevant costs.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS FOOD & BEVERAGE BRANDS ASK',

    headline:
      'Digital Growth for Food & Beverage: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our food or beverage brand grow online?',

        answer:
          'We help food and beverage businesses improve ecommerce storefronts, product discovery, creative campaigns, conversion journeys and suitable retention workflows. Depending on your needs, this may include Shopify or WooCommerce development, SEO, Google and Meta Ads, product content, CRO, analytics and operational integrations. The strategy is shaped around your products, customer demand, margins and fulfilment requirements.',
      },

      {
        question:
          'Can you build a Shopify or WooCommerce website for our food brand?',

        answer:
          'Yes. We develop ecommerce websites for packaged food and beverage businesses with product collections, variants, bundles, suitable payment options and manageable content workflows. We can also assess subscriptions and integrations where required. Platform recommendations depend on catalogue complexity, fulfilment, content needs, operational systems and budget.',
      },

      {
        question:
          'Can you create subscription and repeat-order features?',

        answer:
          'We can implement suitable subscription integrations and reorder experiences where supported by the ecommerce platform and payment provider. Subscription products require clear billing terms, customer consent, cancellation options and reliable fulfilment. We assess whether subscriptions make commercial and operational sense for the products before recommending them.',
      },

      {
        question:
          'How can SEO help a food and beverage ecommerce brand?',

        answer:
          'SEO can improve the discoverability of relevant product, collection and informational pages. We work on technical SEO, product information, category structure, internal linking and useful content around genuine customer interests. Ingredient, dietary, nutrition and health-related information must be accurate and appropriately reviewed. Search performance depends on competition, demand and website quality.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for food and beverage products?',

        answer:
          'We can plan and manage suitable campaigns for eligible products, subject to advertising platform policies and applicable regulations. Campaigns may include Search, Shopping and Meta ecommerce advertising. Certain products, ingredients and health-related claims may be restricted. We review product eligibility, creative, targeting, tracking and landing-page readiness before launch.',
      },

      {
        question:
          'Can you help with food photography, product videos and social content?',

        answer:
          'Yes. We can support product photography, beverage shoots, short-form videos, serving demonstrations, recipe content and campaign creative within the agreed production scope. The creative should represent the actual product accurately. Production planning, models, locations, props and usage rights are scoped according to the project.',
      },

      {
        question:
          'Can you improve our product pages to increase customer confidence?',

        answer:
          'We can improve product-page structure, visual presentation, ingredient information, pack sizes, variants, pricing clarity and relevant delivery information. Food and beverage customers may need more detail than shoppers in other categories, particularly around allergens, storage and dietary suitability. All product information should be verified by the business before publication.',
      },

      {
        question:
          'Can you integrate our ecommerce store with inventory and order management systems?',

        answer:
          'We can assess integrations with supported inventory, ERP, POS and order management systems. Potential workflows include product updates, stock synchronisation and order information exchange. Requirements involving batch tracking, expiry dates, temperature-sensitive products or specialised fulfilment need separate technical scoping and validation.',
      },

      {
        question:
          'Can you help us sell product bundles or multipacks?',

        answer:
          'Yes. We can develop suitable bundle and multipack shopping experiences depending on your platform and catalogue. This may include fixed packs, product combinations or supported bundle applications. Pricing, inventory allocation, fulfilment and promotional rules must be considered so that the customer-facing experience matches how orders are processed.',
      },

      {
        question:
          'Can you improve our existing food ecommerce website without rebuilding it?',

        answer:
          'Yes. We first review your current platform, product architecture, mobile experience, checkout, SEO and integrations. Where the existing system supports the required improvements, targeted changes may be more practical than a complete rebuild. A new platform may be considered when technical or operational limitations prevent the business from meeting its needs.',
      },

      {
        question:
          'Can you help us improve repeat purchases and customer retention?',

        answer:
          'We can support appropriate reorder journeys, customer segmentation, post-purchase communication and subscription integrations where relevant. The approach depends on product consumption patterns, customer preferences and available systems. Communication workflows should respect consent and applicable privacy requirements, and repeat purchase improvements cannot be guaranteed.',
      },

      {
        question:
          'How do you measure food and beverage ecommerce performance?',

        answer:
          'We can configure supported tracking for product views, add-to-cart events, checkout actions and online purchases. Where reliable data exists, reporting may also review product categories, bundles, acquisition costs, repeat orders and subscription activity. We distinguish advertising return figures from profitability and account for fulfilment costs, returns and attribution limitations.',
      },

      {
        question:
          'Can you support food and beverage brands selling across multiple countries?',

        answer:
          'We can develop suitable ecommerce structures and digital experiences for supported markets. However, food labelling, product claims, shipping restrictions, taxes and import requirements vary by jurisdiction. The business must verify product eligibility and regulatory requirements for each market. Technical implementation is scoped around the platforms, payment providers and fulfilment systems available.',
      },

      {
        question:
          'How much does a food and beverage ecommerce project cost?',

        answer:
          'Costs depend on your catalogue, platform, product content, design requirements, subscriptions, integrations, fulfilment complexity and marketing scope. A small packaged food brand launching a focused D2C store has different requirements from a beverage company with multiple markets and recurring subscriptions. Share your current website, product range, sales channels and operational requirements so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Food & Beverage Brand Experience That Customers Want to Return To',

    subheadline:
      'Whether you are launching a packaged food brand, improving your ecommerce store or building repeat purchase journeys, we can help connect your products with the right digital experience and growth priorities.',

    bulletPoints: [
      'Build an ecommerce store designed around your products',
      'Improve product discovery, content and purchase confidence',
      'Connect relevant campaigns with better shopping experiences',
      'Support suitable subscriptions, fulfilment and retention workflows',
    ],

    buttonText: 'Discuss Your Food & Beverage Brand',
  },
};

export const foodBeveragePage = foodBeverageV2Data;
export const foodBeveragePageV2 = foodBeverageV2Data;
export default foodBeveragePage;
