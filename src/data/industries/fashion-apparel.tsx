
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved fashion-specific photograph.
// Prefer an editorial-style apparel campaign or
// authentic fashion ecommerce photoshoot.
import fashionApparelOverviewImg from '@/assets/fashion-overview.jpg';

/**
 * Bixeltek — Fashion & Apparel Industry Page
 *
 * Category: Ecommerce & D2C
 *
 * Target businesses:
 * - D2C clothing and apparel brands
 * - Fashion labels and boutiques
 * - Footwear and accessories brands
 * - Ethnic and occasion wear businesses
 * - Premium and designer fashion brands
 * - Multi-brand fashion retailers
 * - Established apparel businesses expanding online
 *
 * Primary customer journey:
 * Discover -> Explore Collections ->
 * Evaluate Style and Fit -> Select Variant ->
 * Purchase -> Post-Purchase -> Return
 *
 * Core priorities:
 * Ecommerce development, visual merchandising,
 * product photography and content, size and fit UX,
 * SEO, Google and Meta Ads, CRO, inventory
 * integrations, retention and analytics.
 *
 * Product claims, pricing, material composition,
 * stock availability, delivery and return policies
 * must reflect verified business information.
 */

export const fashionApparelV2Data: IndustryPageData = {
  slug: 'fashion-apparel',

  aliases: [
    'fashion',
    'apparel',
    'fashion-brands',
    'clothing-brands',
    'fashion-ecommerce',
  ],

  industryName: 'Fashion & Apparel',

  seo: {
    title:
      'Fashion & Apparel Ecommerce and Digital Growth | Bixeltek',

    description:
      'Ecommerce development and digital growth solutions for fashion and apparel brands. Build Shopify stores, improve product discovery, Meta Ads, Google Shopping, conversion rates and customer retention.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR FASHION & APPAREL BRANDS',

    title: 'Turn Style Shoppers Into',
    highlightedTitle: 'High-LTV Fashion Buyers',

    description:
      'Turn fashion discovery into a shopping experience customers can trust. We help apparel brands build better ecommerce stores, present collections, improve sizing and product journeys, run relevant campaigns and connect the systems behind online sales.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW FASHION CUSTOMERS DISCOVER AND BUY',

    title: (
      <>
        Fashion Is Discovered Visually.
        {' '}
      </>
    ),

    highlightedTitle:
      'But Purchases Depend on More Than Appearance.',

    description:
      'Fashion consumers move quickly between social inspiration, style discovery, and fit evaluation. When apparel stores lack detailed sizing charts, garment composition, or clear return guidelines, hesitation peaks and carts are abandoned. Seamless mobile navigation and authentic customer proof give shoppers the confidence to purchase immediately.',
    secondaryDescription:
      'Bixeltek combines compelling aesthetic brand storytelling with rigorous ecommerce conversion optimization. We refine collection hierarchies, mobile product detail pages, and dynamic acquisition funnels to showcase fit and fabric clearly, turning seasonal interest into measurable checkout velocity and sustained customer lifetime value for growing apparel labels.',
    imageSrc: fashionApparelOverviewImg,

    imageAlt:
      'Fashion models wearing contemporary apparel in an editorial-style clothing campaign',

    features: [
      {
        title: 'Make Collections Worth Exploring',

        description:
          'Present your brand, collections and products through strong visual hierarchy, useful merchandising and shopping experiences that work across devices.',
      },

      {
        title: 'Reduce Size and Fit Uncertainty',

        description:
          'Help customers understand measurements, fit, fabric, variants and return conditions before they commit to a purchase.',
      },

      {
        title: 'Connect Campaigns With Commerce',

        description:
          'Bring product discovery, paid campaigns, ecommerce tracking and suitable inventory workflows together to support more informed growth decisions.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions Built Around How Fashion Brands Sell',

    subheadline:
      'From presenting a new collection to helping customers choose the right size and complete a purchase, we connect brand experience with the technology and marketing behind it.',

    items: [
      {
        tag: '01 · FASHION ECOMMERCE DEVELOPMENT',

        title:
          'Build a Storefront That Feels Like Your Brand and Works Like a Business',

        description:
          'A fashion website needs to express brand identity without making shopping difficult. We develop ecommerce experiences with collection-led navigation, strong product presentation, responsive layouts and manageable content workflows. Depending on your requirements, we can work with Shopify, WooCommerce or suitable custom commerce architectures. Platform choices account for product variants, catalogue management, integrations, budget and ongoing maintenance.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Brand-led ecommerce development',

        chips: [
          'Shopify fashion stores',
          'WooCommerce development',
          'Custom ecommerce experiences',
          'Collection landing pages',
          'Mobile-first storefronts',
          'Product variant management',
        ],
      },

      {
        tag: '02 · FASHION SEO & COLLECTION DISCOVERY',

        title:
          'Help Shoppers Find the Styles They Are Already Looking For',

        description:
          'Fashion searches can be highly specific, combining garment type, occasion, material, fit, colour or style. We improve collection architecture, product content, internal linking and technical SEO around meaningful shopping intent. The strategy also accounts for seasonal collections, changing inventory, product variants and discontinued styles to avoid unnecessary duplication or broken discovery journeys.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Fashion ecommerce SEO',
          'Collection and category SEO',
          'Product page optimisation',
          'Technical SEO',
          'Seasonal collection strategy',
        ],
      },

      {
        tag: '03 · FASHION CAMPAIGNS & CREATIVE',

        title:
          'Turn Collection Launches and Product Stories Into Relevant Campaigns',

        description:
          'Fashion advertising depends heavily on the relationship between creative, audience, product and offer. We plan suitable Meta and Google campaigns around collection launches, seasonal demand, product categories and business economics. Creative testing can explore different styling, formats, messaging and product presentations. Product feeds, stock availability and landing-page quality are considered alongside campaign metrics.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Creative-led acquisition',

        chips: [
          'Meta fashion campaigns',
          'Google Shopping campaigns',
          'Collection launch campaigns',
          'Creative and offer testing',
          'Product catalogue ads',
        ],
      },

      {
        tag: '04 · PRODUCT EXPERIENCE & CONVERSION',

        title:
          'Help Customers Choose the Right Style, Size and Fit',

        description:
          'Fashion purchases carry uncertainty that a physical fitting room would normally resolve. We improve product pages with clearer size information, fit guidance, model references, variant selection, fabric details and useful imagery. We also review filtering, mobile navigation, cart interactions and checkout friction. Recommendations are based on the products, customer behaviour and available evidence rather than generic conversion tactics.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Discover',
            value: 'The style',
          },
          {
            label: 'Choose',
            value: 'The right fit',
          },
          {
            label: 'Purchase',
            value: 'With confidence',
          },
        ],

        chips: [
          'Size and fit guidance',
          'Product detail UX',
          'Colour and size variants',
          'Collection filtering',
          'Cart and checkout CRO',
          'Mobile shopping optimisation',
        ],
      },

      {
        tag: '05 · FASHION CONTENT & VISUAL MERCHANDISING',

        title:
          'Present Collections Through Better Creative and Product Content',

        description:
          'Fashion shoppers need to see how products look, fit and work together. We can support product photography, campaign content, short-form video, creative design and the way these assets appear across your storefront and campaigns. Content planning can include collection stories, styling inspiration and product-focused creative. The goal is to make the visual presentation useful to customers while maintaining a consistent brand identity.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Fashion campaign content',
          'Product photography',
          'Model shoots',
          'Short-form product video',
          'Lookbook and collection design',
        ],
      },

      {
        tag: '06 · INVENTORY, RETURNS & RETENTION',

        title:
          'Connect the Shopping Experience With What Happens After the Order',

        description:
          'Apparel businesses manage size and colour variants, changing stock, exchanges and returns. We assess suitable inventory, order and customer system integrations, alongside clear post-purchase communication. Where supported, retention workflows can help customers discover relevant new arrivals, restocks and complementary products. Returns and exchanges remain subject to the brand’s actual policies and operational capabilities.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected fashion operations',

        chips: [
          'Size and colour inventory',
          'Order management integrations',
          'Returns and exchange journeys',
          'Restock notifications',
          'CRM and retention workflows',
        ],
      },

      {
        tag: '07 · FASHION COMMERCE ANALYTICS',

        title:
          'Understand Which Products, Collections and Campaigns Drive Sales',

        description:
          'Fashion performance can vary by collection, season, product category, size availability and acquisition channel. We help track product engagement, variant selection, cart activity, checkout progression and supported purchases. Where reliable business data exists, reporting can also examine collection performance, acquisition costs, returns and repeat purchase behaviour. We distinguish advertising metrics from profitability and account for attribution limitations.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Collection-level performance visibility',

        chips: [
          'GA4 ecommerce tracking',
          'Google Tag Manager',
          'Collection performance',
          'Product and variant analytics',
          'Checkout funnel reporting',
          'Retention and return insights',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM FASHION DISCOVERY TO PURCHASE',

    headline:
      'Make the Fashion Shopping Journey Feel More Confident',

    subheadline:
      'Customers need visual inspiration, accurate product information and a clear path to purchase. We help connect those expectations with practical ecommerce experiences.',

    leftLabel: 'What Fashion Shoppers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Styles and Collections',

        industryStandard:
          'Shoppers may discover apparel through social content, creators, advertisements, search engines or recommendations from other customers.',

        ourApproach:
          'We connect relevant acquisition campaigns with collection landing pages, product discovery and a consistent brand presentation.',
      },

      {
        feature: 'Exploring Products and Styling',

        industryStandard:
          'Customers want to browse categories, see garments from useful angles, explore colour options and understand how products can be styled.',

        ourApproach:
          'We develop collection navigation, product galleries, merchandising sections and relevant content that make browsing easier and more informative.',
      },

      {
        feature: 'Choosing the Right Size and Fit',

        industryStandard:
          'Uncertainty about measurements, fit, model sizing and fabric behaviour can prevent customers from purchasing apparel online.',

        ourApproach:
          'We improve size guides, fit information, product descriptions and variant selection using verified measurements and product details.',
      },

      {
        feature: 'Checking Availability and Delivery',

        industryStandard:
          'Shoppers need accurate size availability, delivery information, final pricing and clear exchange or return conditions.',

        ourApproach:
          'We present supported stock and fulfilment information clearly, with suitable integrations where the underlying commerce systems allow them.',
      },

      {
        feature: 'Completing the Purchase',

        industryStandard:
          'Customers expect an understandable cart and checkout, suitable payment methods and minimal unnecessary friction on mobile devices.',

        ourApproach:
          'We review checkout usability, cart interactions, payment integrations and supported recovery journeys to improve the purchasing experience.',
      },

      {
        feature: 'Receiving the Product and Returning',

        industryStandard:
          'After ordering, shoppers may need tracking information, customer support, exchanges, returns or recommendations for future purchases.',

        ourApproach:
          'We can support order communication, clear returns pathways and consent-based retention workflows connected to suitable ecommerce and customer systems.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Growth Plan Built Around Your Fashion Brand',

    subheadline:
      'We start with your products, audience, collections and operational model. Then we prioritise the ecommerce, creative and marketing improvements that support your brand and business goals.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Brand and Product Model',

        summary:
          'We establish your brand positioning, product categories, customer segments and the way your collections and inventory are managed.',

        details: [
          'Review apparel categories, pricing, margins and customer segments',
          'Understand seasonal launches, collections and product variants',
          'Identify fulfilment, returns and operational constraints',
        ],
      },

      {
        step: '02',

        title: 'Audit the Fashion Shopping Journey',

        summary:
          'We assess how customers discover your brand, explore collections, evaluate products and complete purchases.',

        details: [
          'Review storefront design, mobile UX and collection navigation',
          'Assess size guidance, product content and checkout friction',
          'Evaluate SEO, paid campaigns, tracking and retention workflows',
        ],
      },

      {
        step: '03',

        title: 'Plan the Storefront and Growth Architecture',

        summary:
          'We recommend improvements based on your catalogue, brand requirements, customer behaviour and technology needs.',

        details: [
          'Plan collection and product information architecture',
          'Prioritise creative, SEO, paid acquisition and CRO opportunities',
          'Define suitable platform, inventory and integration requirements',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Commerce Experience',

        summary:
          'We implement the agreed storefront, merchandising and acquisition improvements while maintaining brand consistency.',

        details: [
          'Develop or refine collection and product pages',
          'Improve size, variant, cart and checkout journeys',
          'Implement approved campaigns, creative and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Purchases and Tracking',

        summary:
          'We test critical ecommerce interactions and review whether product, order and marketing data flows operate as expected.',

        details: [
          'Test product variants, availability, cart and payment flows',
          'Validate supported ecommerce analytics and conversion events',
          'Review order notifications, inventory updates and returns pathways',
        ],
      },

      {
        step: '06',

        title: 'Review Collections and Refine Performance',

        summary:
          'We use available commerce data and customer behaviour insights to improve product discovery, campaigns and shopping experiences.',

        details: [
          'Review collection, product and acquisition performance',
          'Identify sizing, product-page and checkout friction',
          'Refine creative, campaigns and retention workflows using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Fashion Discovery to Repeat Purchase',

    items: [
      {
        value: 'Discover',

        label: 'Collection and product visibility',

        subtext:
          'Review relevant search visibility, campaign engagement and traffic to important collections and product pages.',
      },

      {
        value: 'Explore',

        label: 'Product and variant engagement',

        subtext:
          'Assess product views, size and colour selection, collection navigation, add-to-cart activity and other supported shopping interactions.',
      },

      {
        value: 'Purchase',

        label: 'Checkout and sales performance',

        subtext:
          'Measure supported checkout events, completed online purchases, conversion rates and available customer acquisition costs.',
      },

      {
        value: 'Improve',

        label: 'Customer retention and product performance',

        subtext:
          'Where reliable data exists, review repeat purchases, collection performance, return patterns and contribution after relevant costs.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS FASHION BRANDS ASK',

    headline:
      'Digital Growth for Fashion & Apparel: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our fashion brand grow online?',

        answer:
          'We help fashion and apparel brands improve ecommerce websites, product discovery, creative campaigns, conversion journeys and suitable operational integrations. Depending on your needs, this may include Shopify or WooCommerce development, fashion SEO, Meta Ads, Google Shopping, product content, CRO, analytics and retention workflows. The goal is to connect brand presentation with a practical shopping experience and measurable business priorities.',
      },

      {
        question:
          'Can you build a Shopify website for our clothing brand?',

        answer:
          'Yes. We develop Shopify storefronts for fashion businesses with collection pages, product variants, size information, mobile shopping experiences and suitable payment and fulfilment workflows. We can also assess integrations and theme customisation requirements. The implementation depends on your catalogue, brand design, operational processes and budget.',
      },

      {
        question:
          'Should our apparel brand use Shopify, WooCommerce or custom ecommerce?',

        answer:
          'The right choice depends on your products, integrations, content requirements and long-term plans. Shopify can be suitable for brands seeking a hosted commerce environment. WooCommerce may be appropriate where WordPress content flexibility is important. Custom or headless approaches can support specialised experiences but generally require more development and maintenance. We evaluate these trade-offs before recommending a platform.',
      },

      {
        question:
          'How can we reduce sizing confusion on our fashion website?',

        answer:
          'We can improve size charts, measurement guidance, fit descriptions, model references and product variant interactions using accurate product information. Different apparel categories may need different guidance. These improvements can help customers make more informed decisions, but they do not eliminate sizing-related returns or replace the need for consistent product measurements.',
      },

      {
        question:
          'Can you improve our fashion ecommerce conversion rate without rebuilding the store?',

        answer:
          'Yes. We first review collection navigation, product content, size selection, mobile usability, cart behaviour and checkout. Where the existing platform supports the necessary changes, targeted improvements may be more practical than a rebuild. We prioritise changes using available evidence and do not guarantee a specific conversion uplift.',
      },

      {
        question:
          'Can you manage Meta Ads and Google Shopping for our fashion brand?',

        answer:
          'Yes. We can plan and manage suitable Meta and Google campaigns for eligible fashion products. This may include product catalogue advertising, collection launch campaigns, creative testing, search campaigns and shopping feeds. We assess stock availability, product margins, customer demand, tracking quality and landing-page readiness before recommending campaign structure or budgets.',
      },

      {
        question:
          'Can you help us create fashion content, product photography and videos?',

        answer:
          'We can support fashion content creation, including campaign concepts, product photography, model shoots, short-form video and creative assets, subject to the agreed production scope. Content planning should reflect the brand identity and show products accurately. Styling, models, locations, production costs and usage rights are scoped according to the project.',
      },

      {
        question:
          'How can SEO help a clothing or fashion ecommerce brand?',

        answer:
          'Fashion SEO can improve discovery for relevant clothing categories, styles, product types and shopping searches. We work on collection architecture, product content, internal linking, technical SEO and suitable structured data. Seasonal inventory and product variants require careful handling to avoid duplicate or outdated pages. Results depend on competition, demand and website quality.',
      },

      {
        question:
          'Can you help us manage size and colour variants across our catalogue?',

        answer:
          'We can develop suitable product variant structures and assess inventory integrations for sizes, colours and other product attributes. The implementation depends on your ecommerce platform, inventory system and product data quality. Reliable stock synchronisation requires testing across the connected systems and cannot be assumed without validating the workflow.',
      },

      {
        question:
          'Can you support seasonal collections and new product launches?',

        answer:
          'Yes. We can help plan collection landing pages, product presentation, campaign creative, suitable paid acquisition and supporting website updates. Seasonal launches benefit from coordinated product data, inventory readiness, merchandising and tracking. The scope can be adapted to your launch frequency and internal team responsibilities.',
      },

      {
        question:
          'Can you improve our returns and exchange experience?',

        answer:
          'We can improve how return and exchange information is presented and, where supported, integrate suitable workflows or third-party systems. The experience should clearly explain the brand’s actual policies, eligibility conditions and process. Operational decisions, refunds and exchange fulfilment remain governed by the business and its systems.',
      },

      {
        question:
          'How do you measure fashion ecommerce marketing performance?',

        answer:
          'We can configure supported ecommerce tracking for product views, variant interactions, add-to-cart events, checkout actions and purchases. Where reliable data exists, reporting may also consider collection performance, acquisition costs, repeat purchases and returns. Advertising return figures alone do not establish profitability, so we distinguish marketing signals from broader business outcomes.',
      },

      {
        question:
          'Can you migrate our fashion store to Shopify or another platform?',

        answer:
          'Yes. We can assess migration of products, collections, variants, content and supported customer or order data. Migration planning also considers redirects, SEO, design, integrations, data protection and operational continuity. The exact scope depends on the source platform, destination platform and accessible data.',
      },

      {
        question:
          'How much does a fashion ecommerce website or digital growth project cost?',

        answer:
          'Costs depend on your catalogue, platform choice, design requirements, product content, integrations, migration needs and marketing scope. A new fashion label launching a focused collection has different requirements from an established apparel retailer with thousands of variants and complex inventory workflows. Share your current store, product range, sales channels and goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Fashion Ecommerce Experience That Works Beyond the First Impression',

    subheadline:
      'Whether you are launching a clothing brand, improving an existing fashion store or preparing for your next collection, we can help connect the right ecommerce technology, creative experiences and growth priorities.',

    bulletPoints: [
      'Build a fashion storefront that reflects your brand',
      'Improve collection discovery, product pages and size guidance',
      'Connect creative campaigns with relevant shopping journeys',
      'Track sales and support suitable inventory and retention workflows',
    ],

    buttonText: 'Discuss Your Fashion Brand',
  },
};

export const fashionApparelPage = fashionApparelV2Data;
export const fashionApparelPageV2 = fashionApparelV2Data;
export default fashionApparelPage;
