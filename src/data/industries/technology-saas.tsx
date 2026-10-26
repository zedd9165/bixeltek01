
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved technology-specific visual.
// Prefer a real software interface, SaaS dashboard,
// product team or professional technology workspace.
import technologySaasOverviewImg from '@/assets/technology-overview.jpg';

/**
 * Bixeltek — Technology & SaaS Industry Page
 *
 * Category: Technology & Industrial
 *
 * Target businesses:
 * - B2B SaaS companies
 * - Software product businesses
 * - Technology startups
 * - AI software platforms
 * - Enterprise software providers
 * - Subscription-based software companies
 * - Vertical SaaS businesses
 * - Technology solution providers
 *
 * Primary buyer journey:
 * Discover Problem -> Research Solutions ->
 * Evaluate Product -> Compare Alternatives ->
 * Demo or Trial -> Purchase -> Adoption
 *
 * Core priorities:
 * Product positioning, SaaS websites,
 * technical SEO, paid acquisition,
 * demo and trial conversion,
 * product-led experiences, CRM automation,
 * integrations and funnel analytics.
 *
 * Important:
 * Product capabilities, security certifications,
 * compliance claims, integration availability,
 * customer results and performance metrics
 * must be verified before publication.
 *
 * SaaS products have different sales motions.
 * Self-service, product-led and sales-led
 * businesses should not use identical funnels.
 */

export const technologySaasV2Data: IndustryPageData = {
  slug: 'technology-saas',

  aliases: [
    'technology',
    'saas',
    'saas-companies',
    'software-companies',
    'technology-companies',
    'b2b-saas',
  ],

  industryName: 'Technology & SaaS',

  seo: {
    title:
      'Technology & SaaS Marketing and Digital Solutions | Bixeltek',

    description:
      'Digital solutions for SaaS and technology companies. Build high-performing product websites, improve technical SEO, Google Ads, demo conversions, CRM workflows and SaaS growth analytics.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR TECHNOLOGY & SAAS',

    title: 'Turn High-Intent Traffic Into',
    highlightedTitle: 'Scalable SaaS Trials',

    description:
      'Help the right buyers discover your software, understand its value and take the next step with confidence. We connect SaaS website development, product positioning, SEO, paid acquisition, conversion optimisation and CRM workflows around how your customers evaluate technology.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW SOFTWARE BUYERS EVALUATE TECHNOLOGY',

    title: (
      <>
        A Powerful Product Is Not Enough.
        {' '}
      </>
    ),

    highlightedTitle:
      'Buyers Need to Understand Why It Matters.',

    description:
      'SaaS buyers evaluate security compliance, API integrations, implementation timelines, and ROI metrics alongside core features. When software websites present confusing pricing tiers or bury documentation, technical evaluators and procurement leaders delay approvals. Clear product differentiation and frictionless trial access remove barriers to adoption.',
    secondaryDescription:
      'Bixeltek translates complex software functionality into high-converting product pages, interactive demo funnels, and clear solution architectures. We connect targeted developer and executive search traffic directly to automated CRM pipelines, accelerating product-led user onboarding and sales-assisted enterprise demo requests without bloated marketing overhead or unnecessary technical jargon.',
    imageSrc: technologySaasOverviewImg,

    imageAlt:
      'Technology professionals reviewing a modern SaaS product dashboard and discussing software capabilities',

    features: [
      {
        title: 'Explain the Product in Business Terms',

        description:
          'Connect software capabilities with the problems they solve, the teams they serve and the outcomes buyers are trying to achieve.',
      },

      {
        title: 'Support a More Informed Evaluation',

        description:
          'Make product functionality, integrations, implementation requirements, pricing information and verified credibility signals easier to assess.',
      },

      {
        title: 'Match the Conversion Journey to Your Sales Model',

        description:
          'Design appropriate demo, consultation or self-service trial experiences rather than forcing every software buyer through the same contact form.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Capabilities Built Around the SaaS Buying Journey',

    subheadline:
      'From explaining a complex product to reaching the right accounts and measuring pipeline progression, we help technology companies connect their digital presence with the way customers evaluate software.',

    items: [
      {
        tag: '01 · SAAS WEBSITE DEVELOPMENT',

        title:
          'Build a Product Website That Explains What Your Software Actually Solves',

        description:
          'A SaaS website needs to do more than list features. It should explain who the product serves, which problems it addresses, how its capabilities work and what a prospective buyer should do next. We develop scalable product websites with clear navigation, solution pages, feature explanations, integrations, pricing information and relevant conversion paths. For growing software businesses, we also consider CMS architecture, performance, accessibility and the ability to publish new product information without rebuilding the site.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Product-led website architecture',

        chips: [
          'SaaS website development',
          'Product and feature pages',
          'Solution and use-case pages',
          'Integration directories',
          'Pricing and comparison pages',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · SAAS SEO & PRODUCT DISCOVERY',

        title:
          'Reach Buyers Researching the Problems Your Software Solves',

        description:
          'Software searches often begin before buyers know which product they need. They may research a workflow problem, software category, integration requirement or alternative to an existing tool. We develop relevant SEO architecture around genuine search intent, including solution pages, technical content and useful comparisons. The focus is on helping qualified visitors evaluate the product, not producing large volumes of repetitive AI-generated articles.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'B2B SaaS SEO',
          'Solution and use-case SEO',
          'Technical and on-page SEO',
          'Integration-led search content',
          'Comparison and alternative pages',
        ],
      },

      {
        tag: '03 · B2B SAAS PAID ACQUISITION',

        title:
          'Reach Relevant Buyers Without Treating Every Click as a Lead',

        description:
          'SaaS acquisition requires attention to customer fit, buying intent and commercial value. We plan suitable Google and Meta campaigns around relevant software searches, product categories, use cases and audience requirements. Campaigns can support demo requests, qualified consultations or trial sign-ups depending on the sales model. We evaluate landing-page readiness, lead quality and available pipeline feedback rather than relying only on low cost-per-lead figures.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Intent-led software acquisition',

        chips: [
          'Google Search campaigns',
          'B2B paid acquisition',
          'SaaS landing pages',
          'Demo campaign optimisation',
          'Creative and offer testing',
        ],
      },

      {
        tag: '04 · DEMO, TRIAL & CONVERSION OPTIMISATION',

        title:
          'Make the Next Step Match How Buyers Want to Evaluate Your Product',

        description:
          'A visitor exploring enterprise software may need a consultation with a specialist. Someone evaluating a self-service tool may prefer to start a trial immediately. We review how product information, calls to action, forms, scheduling and sign-up journeys support these different behaviours. Improvements can include clearer demo expectations, more relevant qualification questions, reduced form friction and better connections between product pages and conversion destinations.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Understand',
            value: 'The solution',
          },
          {
            label: 'Evaluate',
            value: 'The product',
          },
          {
            label: 'Start',
            value: 'The right journey',
          },
        ],

        chips: [
          'Demo request optimisation',
          'Free trial journeys',
          'Pricing page CRO',
          'Product-led signup UX',
          'Meeting scheduling',
          'Landing page experimentation',
        ],
      },

      {
        tag: '05 · TECHNICAL CONTENT & PRODUCT CREDIBILITY',

        title:
          'Give Technical and Business Stakeholders the Information They Need',

        description:
          'Technology purchases may involve engineering, operations, procurement, security and leadership teams. We help structure approved product information, integration explanations, implementation guides, case studies and technical resources so each audience can find relevant evidence. Security certifications, compliance statements, customer results and performance claims must be verified. The objective is to make genuine capabilities understandable rather than presenting unsubstantiated enterprise-readiness claims.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Technical content architecture',
          'Integration and API pages',
          'Product documentation UX',
          'Verified customer case studies',
          'Security and compliance information',
        ],
      },

      {
        tag: '06 · CRM & REVENUE WORKFLOWS',

        title:
          'Connect Marketing Interest With the Team Responsible for Conversion',

        description:
          'For sales-led SaaS companies, a demo request is only the beginning of a longer buying process. We can connect website forms, scheduling tools and suitable CRM systems to support enquiry routing, account context, notifications and follow-up. For product-led businesses, supported sign-up events and product signals may help teams understand adoption journeys. Integrations are designed around available systems, permissions and data requirements rather than assuming every interaction should trigger automated outreach.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected revenue operations',

        chips: [
          'CRM integrations',
          'Demo enquiry routing',
          'Lead qualification workflows',
          'Sales notifications',
          'Lifecycle automation',
          'Consent-aware data flows',
        ],
      },

      {
        tag: '07 · SAAS FUNNEL ANALYTICS',

        title:
          'Understand the Journey From Product Interest to Revenue Opportunity',

        description:
          'SaaS performance cannot be understood from website traffic or demo counts alone. We help configure supported tracking for product-page engagement, trial starts, demo requests and relevant conversion actions. Where reliable CRM and product data exists, reporting can examine lead quality, sales progression, activation and acquisition efficiency. We distinguish marketing attribution from actual revenue, and account for longer buying cycles, multiple stakeholders and data limitations.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Full-funnel measurement',

        chips: [
          'GA4 and GTM',
          'Demo and trial tracking',
          'CRM conversion events',
          'Funnel analysis',
          'Lead quality reporting',
          'Acquisition and activation insights',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SOFTWARE RESEARCH TO PRODUCT EVALUATION',

    headline:
      'Help Buyers Move From Understanding the Problem to Choosing a Solution',

    subheadline:
      'Technology buyers need clear information about product fit, implementation, integrations and commercial value. We help make those decisions easier through better digital experiences.',

    leftLabel: 'What Technology Buyers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Recognising a Relevant Solution',

        industryStandard:
          'Buyers may search for a software category, workflow problem, industry-specific tool or replacement for an existing platform.',

        ourApproach:
          'We organise relevant solution pages, search content and suitable campaigns around the problems and use cases your product genuinely addresses.',
      },

      {
        feature: 'Understanding Product Capabilities',

        industryStandard:
          'Prospective customers need to know what the software does, which teams use it and how its features support practical workflows.',

        ourApproach:
          'We structure product, feature and use-case pages around clear explanations, useful interface visuals and verified functionality.',
      },

      {
        feature: 'Evaluating Integrations and Technical Fit',

        industryStandard:
          'Technical stakeholders may review APIs, supported integrations, deployment requirements, security information and implementation effort.',

        ourApproach:
          'We help present approved integration details, documentation, technical resources and implementation information without overstating compatibility or security capabilities.',
      },

      {
        feature: 'Comparing Alternatives and Commercial Terms',

        industryStandard:
          'Buyers may compare pricing, feature availability, onboarding requirements, contract terms and the practical differences between products.',

        ourApproach:
          'We improve pricing and comparison experiences using accurate product information, transparent distinctions and relevant answers to common evaluation questions.',
      },

      {
        feature: 'Starting a Demo or Trial',

        industryStandard:
          'Some buyers want to explore the software independently, while others need a guided demonstration or discussion with the sales team.',

        ourApproach:
          'We design conversion journeys around the product’s actual sales motion, improving sign-up, demo and scheduling experiences where appropriate.',
      },

      {
        feature: 'Moving Toward Adoption or Purchase',

        industryStandard:
          'After initial interest, buyers may need stakeholder approval, procurement review, technical validation or onboarding before becoming customers.',

        ourApproach:
          'We can connect suitable CRM, product and communication workflows to improve handoffs and measurement without assuming every demo or trial becomes a customer.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Product and Sales Motion',

    subheadline:
      'We start by understanding your software, ideal customers and evaluation process. Then we prioritise website, acquisition and conversion improvements that match how your business actually sells.',

    steps: [
      {
        step: '01',

        title: 'Understand the Product and Ideal Customer',

        summary:
          'We establish what your software solves, who uses it, who buys it and how customers typically evaluate the product.',

        details: [
          'Review product capabilities, use cases and customer segments',
          'Understand ideal customer profile and buying stakeholders',
          'Identify sales-led, product-led or hybrid conversion journeys',
        ],
      },

      {
        step: '02',

        title: 'Audit the Website and Acquisition Funnel',

        summary:
          'We assess whether the digital experience explains the product clearly and helps relevant buyers reach the appropriate next step.',

        details: [
          'Review product positioning, navigation and solution pages',
          'Assess SEO, campaigns, landing pages and competitor context',
          'Evaluate demo, trial, CRM and tracking friction',
        ],
      },

      {
        step: '03',

        title: 'Plan the Product and Growth Architecture',

        summary:
          'We organise website content and acquisition priorities around product fit, buyer intent and the existing sales process.',

        details: [
          'Map feature, solution, integration and use-case pages',
          'Prioritise SEO, paid acquisition and CRO opportunities',
          'Define CRM, analytics and technical integration requirements',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Digital Experience',

        summary:
          'We implement the agreed website, content and conversion improvements while preserving product accuracy and technical maintainability.',

        details: [
          'Develop or refine SaaS product and solution pages',
          'Improve demo, trial, pricing and landing-page journeys',
          'Implement approved campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Tracking and Revenue Workflows',

        summary:
          'We test important conversion actions and review whether marketing and sales systems exchange the intended information.',

        details: [
          'Test demo requests, scheduling and trial sign-up flows',
          'Validate supported analytics and CRM conversion events',
          'Review enquiry routing, permissions and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review Quality and Refine the Funnel',

        summary:
          'We use available marketing, CRM and product feedback to improve acquisition relevance and reduce avoidable evaluation friction.',

        details: [
          'Review lead quality, demo engagement and trial interest',
          'Identify gaps in product content and conversion journeys',
          'Refine campaigns, landing pages and workflows using reliable data',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Product Discovery to Revenue Opportunity',

    items: [
      {
        value: 'Discover',

        label: 'Relevant software and solution visibility',

        subtext:
          'Review search visibility, acquisition channels and engagement with priority product, feature and solution pages.',
      },

      {
        value: 'Evaluate',

        label: 'Product consideration and engagement',

        subtext:
          'Assess supported interactions with features, integrations, pricing, documentation and other important evaluation content.',
      },

      {
        value: 'Convert',

        label: 'Demo requests and trial sign-ups',

        subtext:
          'Measure suitable conversion actions and review their relevance to your ideal customer profile and sales model.',
      },

      {
        value: 'Improve',

        label: 'Qualified pipeline and product activation',

        subtext:
          'Where reliable CRM or product data exists, examine opportunity progression, trial activation and acquisition efficiency while recognising attribution limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS TECHNOLOGY & SAAS COMPANIES ASK',

    headline:
      'Digital Growth for SaaS Companies: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our SaaS company generate more qualified opportunities?',

        answer:
          'We help SaaS companies improve product positioning, website architecture, search visibility, acquisition campaigns and demo or trial conversion journeys. Depending on your business model, this may include SaaS website development, SEO, Google Ads, landing pages, CRO, CRM integration and analytics. We focus on reaching relevant buyers and improving their evaluation experience rather than maximising lead counts without regard to fit.',
      },

      {
        question:
          'Can you build a SaaS marketing website without rebuilding our software product?',

        answer:
          'Yes. We can develop or improve the public-facing marketing website independently of the software application. This may include product pages, solutions, pricing, integrations, resources and conversion journeys. Where needed, we can connect supported sign-up or demo actions to your existing product or CRM. Changes to the underlying SaaS application are scoped separately.',
      },

      {
        question:
          'How should a SaaS website explain complex technical features?',

        answer:
          'We recommend connecting features to the problems they solve and the workflows they support. Business buyers may need practical use cases and commercial context, while technical evaluators may require integration details, documentation and implementation information. We structure content for both audiences without removing the technical accuracy that serious buyers need.',
      },

      {
        question:
          'Can you create separate pages for features, industries and use cases?',

        answer:
          'Yes. Dedicated pages are useful when they address genuinely different evaluation needs. Feature pages explain capabilities, use-case pages show how the product supports a workflow, and industry pages clarify relevant applications in a particular sector. We avoid creating repetitive pages that imply capabilities or industry expertise the product does not have.',
      },

      {
        question:
          'How can SEO help a B2B SaaS company?',

        answer:
          'SaaS SEO can help prospective buyers discover your product while researching software categories, workflow problems, integrations and alternatives. We work on technical SEO, solution architecture, useful product content and relevant comparison pages. Search visibility and commercial results depend on competition, demand, product positioning and content quality. We do not guarantee rankings or pipeline outcomes.',
      },

      {
        question:
          'Can you manage Google Ads for B2B SaaS products?',

        answer:
          'Yes. We can plan suitable Google Search campaigns around relevant product categories, use cases and high-intent software searches. Campaign planning considers customer fit, search demand, acquisition economics and the quality of the destination page. We recommend measuring demo or trial quality and available pipeline progression rather than optimising only for inexpensive form submissions.',
      },

      {
        question:
          'Can you improve our demo booking conversion rate?',

        answer:
          'We can review the journey from product pages and landing pages to demo requests, including CTA clarity, scheduling, form friction and expectations about the demonstration. We use available behavioural and conversion data to prioritise improvements. Results depend on traffic quality, product relevance and the sales process, so a specific uplift cannot be guaranteed.',
      },

      {
        question:
          'Can you help us increase free trial sign-ups?',

        answer:
          'We can improve trial landing pages, sign-up journeys, messaging and supported tracking. However, more sign-ups do not automatically mean more activated or paying customers. Where product data is available, we recommend considering trial quality and activation alongside sign-up volume. Product onboarding changes are scoped separately when they involve the application itself.',
      },

      {
        question:
          'Can you create integration pages and technical documentation experiences?',

        answer:
          'Yes. We can develop the website architecture and presentation for integration directories, API resources, developer documentation and technical product information. The product team must verify supported integrations, authentication requirements, technical limitations and security claims. Documentation platforms or developer portals requiring specialised functionality are scoped according to their technical requirements.',
      },

      {
        question:
          'Can you integrate our SaaS website with HubSpot, Salesforce or another CRM?',

        answer:
          'We can assess integrations with suitable CRM systems, including HubSpot, Salesforce and other platforms where supported APIs or connectors are available. Potential workflows include demo requests, lead routing, scheduling, notifications and supported conversion events. The implementation depends on your CRM configuration, permissions, data model and internal sales process.',
      },

      {
        question:
          'Can you help us market an AI SaaS product?',

        answer:
          'Yes. We can help AI software companies explain their product capabilities, target use cases, implementation requirements and commercial value. AI products often need especially clear communication about limitations, human oversight, data handling and actual supported functionality. We avoid unsupported claims about accuracy, autonomy, security or guaranteed business outcomes.',
      },

      {
        question:
          'Can you improve our existing SaaS website without rebuilding it?',

        answer:
          'Yes. We first assess product positioning, content architecture, technical performance, SEO, mobile usability and conversion journeys. If the existing platform supports the necessary changes, targeted improvements may be more practical than a complete rebuild. We recommend rebuilding only where technical or structural limitations justify the investment.',
      },

      {
        question:
          'How do you measure SaaS marketing performance beyond lead generation?',

        answer:
          'We can configure supported tracking for website engagement, demo requests, trial sign-ups and relevant conversion events. Where reliable CRM and product data exists, reporting may also consider lead qualification, opportunity progression, activation and acquisition efficiency. We recognise that enterprise buying cycles involve multiple stakeholders and that revenue cannot always be attributed accurately to one marketing interaction.',
      },

      {
        question:
          'How much does a SaaS website or digital growth project cost?',

        answer:
          'Costs depend on the complexity of your product, number of solution and feature pages, website platform, content requirements, integrations and acquisition scope. A startup launching a focused product website has different needs from an enterprise SaaS provider with multiple solutions, integration directories and CRM workflows. Share your product, current website, ideal customers and growth priorities so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Experience That Makes Your SaaS Product Easier to Choose',

    subheadline:
      'Whether you are launching a software product, improving demo conversions or building a more scalable SaaS marketing website, we can help connect your product positioning with the right technology and growth priorities.',

    bulletPoints: [
      'Communicate your product, features and use cases clearly',
      'Reach relevant software buyers through SEO and acquisition',
      'Improve demo, pricing and trial conversion journeys',
      'Connect suitable CRM, tracking and revenue workflows',
    ],

    buttonText: 'Discuss Your SaaS Growth',
  },
};

export const technologySaasPage = technologySaasV2Data;
export const technologySaasPageV2 = technologySaasV2Data;
export default technologySaasPage;
