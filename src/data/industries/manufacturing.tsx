
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved manufacturing-specific image.
// Prefer authentic industrial production photography,
// CNC machining, fabrication or a modern factory floor.
import manufacturingOverviewImg from '@/assets/manufacturing-overview.jpg';

/**
 * Bixeltek — Manufacturing Industry Page
 *
 * Category: Technology & Industrial
 *
 * Target businesses:
 * - Industrial manufacturers
 * - OEM and component suppliers
 * - Contract manufacturers
 * - CNC machining and fabrication companies
 * - Machinery and equipment manufacturers
 * - Industrial product manufacturers
 * - Export-oriented manufacturing businesses
 * - Multi-facility manufacturing companies
 *
 * Primary buyer journey:
 * Identify Requirement -> Discover Suppliers ->
 * Evaluate Capabilities -> Review Specifications ->
 * Request RFQ -> Technical Discussion ->
 * Supplier Qualification -> Purchase
 *
 * Core priorities:
 * Industrial website development,
 * capability and product architecture,
 * manufacturing SEO, B2B acquisition,
 * RFQ optimisation, technical content,
 * CRM integration and analytics.
 *
 * Important:
 * Manufacturing capabilities, tolerances,
 * production capacity, certifications,
 * compliance standards, lead times,
 * materials and quality claims must be
 * verified by the manufacturer.
 *
 * The website should not imply that every
 * manufacturer offers the same production
 * processes, certifications or services.
 */

export const manufacturingV2Data: IndustryPageData = {
  slug: 'manufacturing',

  aliases: [
    'manufacturers',
    'industrial-manufacturing',
    'manufacturing-companies',
    'industrial-manufacturers',
    'b2b-manufacturing',
  ],

  industryName: 'Manufacturing',

  seo: {
    title:
      'Manufacturing Website Development & Digital Growth | Bixeltek',

    description:
      'Digital solutions for manufacturers and industrial suppliers. Build professional manufacturing websites, improve industrial SEO, showcase production capabilities and generate relevant RFQ enquiries.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR MANUFACTURERS',

    title: 'Turn Industrial Searches Into',
    highlightedTitle: 'High-Volume Manufacturing RFQs',

    description:
      'Help procurement teams, engineers and industrial buyers understand your production capabilities, evaluate your company and request quotations with confidence. We connect manufacturing website development, industrial SEO, technical content and B2B enquiry workflows around how buyers select suppliers.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW INDUSTRIAL BUYERS SELECT MANUFACTURERS',

    title: (
      <>
        Industrial Buyers Need More Than a Supplier List.
        {' '}
      </>
    ),

    highlightedTitle:
      'They Need Evidence That You Can Deliver.',

    description:
      'Industrial procurement teams and design engineers scrutinize production tolerances, material certifications, machinery capabilities, and facility capacity before shortlisting suppliers. When manufacturer websites hide technical spec sheets or mandate phone calls for basic feasibility checks, buyers move on. Clear technical documentation streamlines RFQ qualification.',
    secondaryDescription:
      'Bixeltek organizes industrial manufacturing websites around rigorous engineering specifications, certified quality standards, and structured RFQ workflows. We drive qualified industrial search traffic from commercial buyers and corporate procurement managers, ensuring your facilities, machinery, and production capabilities are accurately showcased to generate high-value contract manufacturing opportunities.',
    imageSrc: manufacturingOverviewImg,

    imageAlt:
      'Modern industrial manufacturing facility with precision machinery and production equipment',

    features: [
      {
        title: 'Present Your Manufacturing Capabilities Clearly',

        description:
          'Help buyers understand the processes, materials, equipment, product categories and production services your business actually offers.',
      },

      {
        title: 'Build Confidence Through Technical Evidence',

        description:
          'Communicate verified certifications, quality processes, manufacturing experience and relevant project examples to support supplier evaluation.',
      },

      {
        title: 'Make Technical Enquiries Easier to Manage',

        description:
          'Create suitable RFQ and consultation pathways that collect useful project information and connect enquiries with the responsible team.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Capabilities That Support Industrial Business Development',

    subheadline:
      'From communicating production capabilities to helping procurement teams request quotations, we build digital experiences around the way manufacturing businesses win and manage B2B opportunities.',

    items: [
      {
        tag: '01 · MANUFACTURING WEBSITE DEVELOPMENT',

        title:
          'Build an Industrial Website That Communicates Your Capabilities',

        description:
          'A manufacturing website should explain what the company produces, which processes it supports and which industries it serves. We develop websites with clear capability pages, product categories, facility information, technical resources and relevant contact journeys. For manufacturers with multiple plants, business divisions or extensive product ranges, we plan scalable information architecture and content management workflows that keep technical information organised and maintainable.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Capability-led website architecture',

        chips: [
          'Manufacturing website development',
          'Production capability pages',
          'Industrial product catalogues',
          'Factory and facility profiles',
          'Industry application pages',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · INDUSTRIAL SEO & BUYER DISCOVERY',

        title:
          'Reach Buyers Searching for Specific Manufacturing Capabilities',

        description:
          'Industrial search intent is often highly specific. Buyers may search by manufacturing process, component type, material, application or supplier location. We improve technical SEO, capability pages, product architecture and useful search content around the services you actually provide. For manufacturers serving different regions, geographic targeting should reflect real service coverage and export capabilities rather than generic location pages.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Manufacturing SEO',
          'Industrial service SEO',
          'Product and capability pages',
          'Technical and on-page SEO',
          'Regional supplier visibility',
        ],
      },

      {
        tag: '03 · B2B INDUSTRIAL ACQUISITION',

        title:
          'Connect With Companies Actively Researching Suppliers',

        description:
          'Manufacturing advertising should be aligned with relevant technical requirements and commercial opportunity. We plan suitable Google Search campaigns around manufacturing processes, product categories and supplier intent. Campaigns can direct buyers to specific capability or quotation pages instead of a generic homepage. We assess search demand, enquiry relevance and available sales feedback rather than assuming high lead volume means better performance.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Qualified industrial enquiries',

        chips: [
          'Google Search campaigns',
          'Industrial keyword targeting',
          'B2B landing pages',
          'RFQ campaign optimisation',
          'Lead quality reporting',
        ],
      },

      {
        tag: '04 · RFQ & TECHNICAL ENQUIRY EXPERIENCE',

        title:
          'Make It Easier for Buyers to Request a Relevant Quotation',

        description:
          'Manufacturing enquiries often require more context than a name, email and message. Depending on the process, buyers may need to specify materials, quantities, dimensions, tolerances, drawings or delivery requirements. We design appropriate RFQ journeys that help buyers provide useful initial information without making the form unnecessarily complex. Where sensitive engineering files are involved, secure upload and handling requirements are scoped separately.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Identify',
            value: 'The capability',
          },
          {
            label: 'Specify',
            value: 'The requirement',
          },
          {
            label: 'Request',
            value: 'A quotation',
          },
        ],

        chips: [
          'RFQ form development',
          'Technical enquiry qualification',
          'Drawing upload workflows',
          'Material and quantity fields',
          'Quotation request routing',
          'Mobile-friendly enquiry UX',
        ],
      },

      {
        tag: '05 · TECHNICAL CONTENT & SUPPLIER CREDIBILITY',

        title:
          'Give Engineers and Procurement Teams the Information They Need',

        description:
          'Industrial buyers may need technical specifications, material information, process descriptions, quality documentation and examples of relevant work before shortlisting a supplier. We help structure approved product data, capability content, downloadable resources and case studies. Certifications, tolerances, standards and performance claims must be verified by the manufacturer. The goal is to make genuine production expertise easier to evaluate.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Technical product content',
          'Material and process information',
          'Specification resources',
          'Verified certifications',
          'Manufacturing case studies',
        ],
      },

      {
        tag: '06 · CRM & INDUSTRIAL SALES WORKFLOWS',

        title:
          'Connect RFQs With the Teams Responsible for Reviewing Them',

        description:
          'A manufacturing RFQ may require technical feasibility review, costing, procurement input and multiple follow-up discussions. We can connect website enquiries with suitable CRM systems, notifications and internal workflows to support routing and ownership. Enquiries may be categorised by product, manufacturing process or intended market. More complex quoting, ERP and production planning integrations require separate assessment of the underlying systems and business rules.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected RFQ workflows',

        chips: [
          'CRM integrations',
          'RFQ routing',
          'Sales notifications',
          'Technical team handoffs',
          'ERP integration assessment',
          'Enquiry status workflows',
        ],
      },

      {
        tag: '07 · MANUFACTURING ANALYTICS & REPORTING',

        title:
          'Understand Which Capabilities Generate Relevant Business Interest',

        description:
          'Industrial marketing performance should be evaluated beyond traffic and contact form counts. We help measure capability-page engagement, technical resource interactions, quotation requests and available acquisition data. Where reliable CRM information exists, reporting can examine enquiry relevance, qualified opportunities and progression toward commercial discussions. We account for long B2B buying cycles, offline negotiations and the limitations of attributing orders to individual website visits.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'B2B opportunity visibility',

        chips: [
          'GA4 and GTM tracking',
          'Capability page analytics',
          'RFQ conversion tracking',
          'CRM conversion events',
          'Lead quality analysis',
          'B2B pipeline reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SUPPLIER SEARCH TO QUOTATION',

    headline:
      'Help Industrial Buyers Evaluate Your Manufacturing Business',

    subheadline:
      'Procurement and engineering teams need accurate capabilities, technical information and clear quotation processes. We help manufacturers organise the digital experience around those expectations.',

    leftLabel: 'What Industrial Buyers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Suitable Manufacturer',

        industryStandard:
          'Buyers may search by manufacturing process, material, component type, application, location or production capability.',

        ourApproach:
          'We structure capability pages, product content and relevant SEO around the manufacturing services your company genuinely provides.',
      },

      {
        feature: 'Understanding Production Capabilities',

        industryStandard:
          'Engineering and procurement teams need to understand supported processes, equipment, materials, dimensions and available production services.',

        ourApproach:
          'We organise verified technical information into clear capability and product pages with useful supporting resources.',
      },

      {
        feature: 'Evaluating Quality and Supplier Credibility',

        industryStandard:
          'Buyers may review quality systems, certifications, facility information, relevant industry experience and production consistency.',

        ourApproach:
          'We help present approved certifications, manufacturing processes, facility information and genuine project examples without unsupported claims.',
      },

      {
        feature: 'Checking Technical and Commercial Fit',

        industryStandard:
          'Prospective customers may need to assess minimum order quantities, production capacity, lead times, material compatibility and geographic service coverage.',

        ourApproach:
          'We present confirmed capabilities and commercial information clearly, with appropriate enquiry routes for requirements that need individual assessment.',
      },

      {
        feature: 'Submitting a Request for Quotation',

        industryStandard:
          'An RFQ may require quantities, drawings, specifications, material requirements, delivery locations and other project details.',

        ourApproach:
          'We design structured quotation journeys that collect relevant initial information and support secure technical file handling where required.',
      },

      {
        feature: 'Moving Into Technical and Commercial Review',

        industryStandard:
          'Manufacturing opportunities often involve feasibility discussions, engineering review, pricing, sampling and supplier qualification before an order is placed.',

        ourApproach:
          'We can connect RFQs with suitable CRM and internal workflows to support ownership and follow-up while leaving technical and commercial decisions with the manufacturer.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Manufacturing Capabilities',

    subheadline:
      'We start with your products, processes, target industries and sales workflow. Then we prioritise digital improvements that help the right buyers understand your capabilities and make relevant enquiries.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Manufacturing Business',

        summary:
          'We establish what you manufacture, which production capabilities you offer and which buyers and markets matter most.',

        details: [
          'Review products, processes, materials and supported industries',
          'Identify target buyers, procurement requirements and markets',
          'Understand quotation, engineering and sales workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit the Existing Digital Presence',

        summary:
          'We assess whether your website communicates technical capabilities clearly and helps relevant industrial buyers find your business.',

        details: [
          'Review capability pages, product information and navigation',
          'Assess industrial SEO, campaigns and technical performance',
          'Evaluate RFQ forms, credibility content and enquiry handling',
        ],
      },

      {
        step: '03',

        title: 'Plan the Capability and Content Architecture',

        summary:
          'We organise website information around actual manufacturing processes, product categories and industrial applications.',

        details: [
          'Map manufacturing capabilities and product pages',
          'Plan technical resources, industry applications and credibility content',
          'Prioritise relevant SEO, acquisition and RFQ improvements',
        ],
      },

      {
        step: '04',

        title: 'Build the Industrial Website Experience',

        summary:
          'We implement the agreed website, technical content and quotation journey improvements with attention to accuracy and maintainability.',

        details: [
          'Develop or refine capability and product pages',
          'Improve technical navigation and mobile usability',
          'Implement approved landing pages and RFQ experiences',
        ],
      },

      {
        step: '05',

        title: 'Connect and Validate Enquiry Workflows',

        summary:
          'We test critical contact actions and review how quotation requests move from the website to the appropriate teams.',

        details: [
          'Test RFQ forms, attachments and notification workflows',
          'Validate supported analytics and conversion tracking',
          'Review CRM routing, access controls and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review RFQ Quality and Refine',

        summary:
          'We use available website, campaign and sales feedback to improve industrial buyer discovery and enquiry relevance.',

        details: [
          'Review interest by manufacturing capability and product category',
          'Assess RFQ quality and available opportunity progression',
          'Refine content, campaigns and quotation journeys using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Industrial Discovery to Qualified RFQ',

    items: [
      {
        value: 'Discover',

        label: 'Relevant industrial search visibility',

        subtext:
          'Review search visibility, acquisition channels and visits to priority manufacturing capability, product and application pages.',
      },

      {
        value: 'Evaluate',

        label: 'Technical content and supplier engagement',

        subtext:
          'Assess supported interactions with specifications, capability information, facility pages and relevant technical resources.',
      },

      {
        value: 'Enquire',

        label: 'RFQs and technical discussions',

        subtext:
          'Measure supported quotation requests, calls and technical enquiries while reviewing their relevance to actual manufacturing capabilities.',
      },

      {
        value: 'Improve',

        label: 'Qualified industrial opportunities',

        subtext:
          'Where reliable CRM data exists, review progression toward technical discussions, quotations and commercial opportunities while accounting for long sales cycles.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS MANUFACTURING COMPANIES ASK',

    headline:
      'Digital Growth for Manufacturers: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our manufacturing company generate more relevant enquiries?',

        answer:
          'We help manufacturers improve their websites, communicate production capabilities, increase relevant search visibility and simplify quotation requests. Depending on your business, this may include manufacturing website development, industrial SEO, Google Ads, technical content, RFQ optimisation and CRM integrations. The objective is to attract enquiries aligned with your actual processes, materials, capacity and target markets rather than simply increasing contact form submissions.',
      },

      {
        question:
          'Can you build a professional website for our manufacturing company?',

        answer:
          'Yes. We develop manufacturing websites with capability pages, industrial product catalogues, facility information, technical resources, relevant certifications and quotation journeys. The architecture can support multiple manufacturing processes, product divisions or facilities. We recommend the technical approach based on catalogue complexity, content management, integrations, performance and long-term maintenance.',
      },

      {
        question:
          'Should we create separate pages for each manufacturing process or capability?',

        answer:
          'Dedicated capability pages are useful when they explain genuinely different processes or services. For example, CNC machining, sheet metal fabrication, injection moulding and contract assembly involve different technical requirements and buyer searches. We recommend separate pages for capabilities the business actually provides, supported by accurate information about materials, equipment and production limitations.',
      },

      {
        question:
          'How can SEO help an industrial manufacturing business?',

        answer:
          'Industrial SEO can help relevant buyers discover your company while searching for specific manufacturing processes, components, materials or suppliers. We work on technical SEO, capability pages, product architecture, internal linking and useful technical content. Search performance depends on demand, competition, website quality and the relevance of your manufacturing capabilities. We do not guarantee rankings or orders.',
      },

      {
        question:
          'Can you manage Google Ads for manufacturing and industrial suppliers?',

        answer:
          'Yes. We can plan suitable Google Search campaigns around relevant manufacturing capabilities, component categories and supplier searches. Campaigns should lead to focused capability or quotation pages. We consider search intent, target markets, enquiry quality and available sales feedback rather than optimising only for low-cost leads.',
      },

      {
        question:
          'Can you develop a product catalogue without online checkout?',

        answer:
          'Yes. Many manufacturers need a structured digital catalogue rather than a traditional ecommerce store. We can develop searchable product categories, specification pages, downloadable resources and quotation requests without requiring online purchasing. This approach can suit products with custom pricing, technical configuration, minimum order quantities or project-specific commercial terms.',
      },

      {
        question:
          'Can you build RFQ forms that accept technical drawings and specifications?',

        answer:
          'We can develop structured RFQ journeys with relevant fields such as product type, material, quantity and project requirements. Where necessary, we can assess secure file upload workflows for drawings and technical documents. File size limits, storage, access controls, retention and confidentiality requirements must be defined before implementation.',
      },

      {
        question:
          'Can you showcase our factory, machinery and manufacturing capabilities?',

        answer:
          'Yes. We can structure facility pages, production capability content, equipment information and approved photography or video assets. The presentation should reflect your actual machinery, processes and production environment. Where content production is part of the scope, factory photography and video requirements can be planned separately.',
      },

      {
        question:
          'Can you help us present certifications and quality standards?',

        answer:
          'Yes. We can design suitable sections for verified certifications, quality processes, inspection capabilities and approved documentation. The manufacturer must confirm the validity, scope and current status of each certification. We avoid suggesting compliance with standards or quality capabilities that have not been verified.',
      },

      {
        question:
          'Can you help our manufacturing business reach international buyers?',

        answer:
          'We can develop relevant website content and suitable digital acquisition strategies for international markets your business genuinely serves. This may include country-specific information, export capabilities and appropriate contact routes. Claims about shipping coverage, certifications, regulatory compliance and export eligibility must be verified by the manufacturer.',
      },

      {
        question:
          'Can you integrate RFQ enquiries with our CRM or ERP system?',

        answer:
          'We can assess integrations with suitable CRM, ERP and quotation management systems where supported APIs or connectors are available. Potential workflows include enquiry routing, notifications and supported data transfer. Complex costing, production planning, inventory or quotation automation requires separate scoping based on your systems and business rules.',
      },

      {
        question:
          'Can you improve our existing manufacturing website instead of rebuilding it?',

        answer:
          'Yes. We first assess the existing website structure, capability content, technical SEO, mobile usability, performance and quotation experience. Targeted improvements may be sufficient when the current platform supports them. We recommend rebuilding only when technical or structural limitations justify a larger investment.',
      },

      {
        question:
          'How do you measure manufacturing marketing performance?',

        answer:
          'We can track supported interactions such as capability-page engagement, technical resource downloads, calls and RFQ submissions. Where reliable CRM data exists, reporting may also consider qualified enquiries, quotation progression and available opportunity information. Industrial sales often involve long cycles and offline negotiations, so not every order can be attributed to a single website visit or advertisement.',
      },

      {
        question:
          'How much does a manufacturing website or digital marketing project cost?',

        answer:
          'Costs depend on your product catalogue, manufacturing processes, technical content requirements, number of facilities, target markets, integrations and marketing scope. A focused website for a specialist fabrication company differs from a multi-division manufacturer with hundreds of products and complex RFQ workflows. Share your current website, capabilities and business goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Manufacturing Capabilities',

    subheadline:
      'Whether you need a stronger industrial website, better technical content, more relevant supplier enquiries or connected RFQ workflows, we can help identify the digital improvements worth prioritising for your manufacturing business.',

    bulletPoints: [
      'Showcase manufacturing processes and technical capabilities',
      'Improve relevant industrial search visibility and buyer discovery',
      'Make RFQ and technical enquiry journeys easier',
      'Connect suitable CRM, reporting and quotation workflows',
    ],

    buttonText: 'Discuss Your Manufacturing Business',
  },
};

export const manufacturingPage = manufacturingV2Data;
export const manufacturingPageV2 = manufacturingV2Data;
export default manufacturingPage;
