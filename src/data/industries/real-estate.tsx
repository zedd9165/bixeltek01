
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved real-estate-specific image.
// Verify the asset path before publishing.
import realEstateOverviewImg from '@/assets/real-estate-overview.jpg';

/**
 * Bixeltek — Real Estate Industry Page
 *
 * Category: Business & Professional
 *
 * Target businesses:
 * - Real estate agencies and brokerages
 * - Independent real estate agents
 * - Residential property developers
 * - Commercial real estate consultancies
 * - Property sales and leasing businesses
 * - Multi-location real estate companies
 *
 * Customer journeys:
 *
 * Buyer:
 * Discover -> Explore Properties -> Evaluate
 * -> Enquire -> Viewing -> Follow-up
 *
 * Seller:
 * Research Agents -> Evaluate Experience
 * -> Request Valuation -> Consultation
 *
 * Developer:
 * Discover Project -> Explore Details
 * -> Register Interest -> Sales Consultation
 *
 * Core priorities:
 * Property discovery, local SEO, paid acquisition,
 * listing experiences, project landing pages,
 * enquiry qualification, CRM integration and analytics.
 *
 * All property details, availability, pricing,
 * approvals, agent credentials and claims must
 * be verified before publication.
 */

export const realEstateV2Data: IndustryPageData = {
  slug: 'real-estate',
  aliases: [
    'real-estate-agencies',
    'real-estate-marketing',
    'property-developers',
    'real-estate-brokers',
  ],
  industryName: 'Real Estate',

  seo: {
    title:
      'Real Estate Marketing & Digital Growth Solutions | Bixeltek',
    description:
      'Digital growth solutions for real estate agencies, brokers and developers. Explore property websites, real estate SEO, Google Ads, lead generation, CRM integration and analytics.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR REAL ESTATE BUSINESSES',
    title: 'Turn Buyer & Seller Searches Into',
    highlightedTitle: 'Closed Real Estate Deals',
    description:
      'Help buyers, sellers and investors discover your properties, explore opportunities and connect with your team. We combine real estate websites, SEO, Google Ads and lead management to support property enquiries, viewing requests and sales conversations.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'UNDERSTANDING THE REAL ESTATE BUYING JOURNEY',
    title: (
      <>
        Property Decisions Take Research.
        {' '}
      </>
    ),
    highlightedTitle: 'Your Digital Experience Should Make It Easier.',
    description:
      'Real estate decisions unfold across weeks of neighborhood research, floor-plan comparisons, and market valuations. When property listings lack high-resolution media, accurate details, or direct agent contact paths, prospective buyers and sellers move on. Providing immediate clarity and localized market insights eliminates hesitation.',
    secondaryDescription:
      'Bixeltek builds modern property discovery experiences that combine targeted local search, immersive development showcases, and responsive lead routing. We streamline how buyers, sellers, and commercial investors discover your portfolio, turning property views into scheduled viewings, appraisal requests, and qualified broker conversations that advance active transactions.',
    imageSrc: realEstateOverviewImg,
    imageAlt:
      'Modern residential property development with landscaped surroundings, representing real estate marketing and property discovery',

    features: [
      {
        title: 'Make Properties Easier to Discover',
        description:
          'Help customers find relevant listings, developments and property services through structured websites, location-focused content and suitable search campaigns.',
      },
      {
        title: 'Build Confidence Before the First Conversation',
        description:
          'Present accurate property details, genuine photography, floor plans, verified credentials and clear sales processes so buyers and sellers can evaluate your business.',
      },
      {
        title: 'Connect Enquiries With the Right Sales Team',
        description:
          'Improve viewing requests, valuation enquiries and project registrations, then connect suitable CRM and follow-up workflows to help teams manage opportunities.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',
    headline:
      'Digital Solutions Built Around How Real Estate Businesses Grow',
    subheadline:
      'From property discovery and project launches to seller enquiries and CRM workflows, we connect the digital capabilities that support your sales and leasing journey.',

    items: [
      {
        tag: '01 · REAL ESTATE WEBSITE DEVELOPMENT',
        title:
          'Build a Property Website That Makes Discovery and Enquiries Easier',
        description:
          'A real estate website needs to do more than display attractive properties. Buyers should be able to explore relevant listings, understand essential details and contact the appropriate agent. We develop responsive websites with clear navigation, property categories, location information, enquiry routes and content structures that can support growing inventories, agents and developments.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Property-focused digital experience',
        chips: [
          'Real estate website development',
          'Property listing architecture',
          'Agent and agency profiles',
          'Project landing pages',
          'Responsive property galleries',
          'Content management systems',
        ],
      },
      {
        tag: '02 · REAL ESTATE SEO',
        title:
          'Help Buyers and Sellers Find You Through Relevant Searches',
        description:
          'Real estate searches often reflect property type, location and customer intent. We improve website structure, local business visibility and useful content for the markets you serve. The focus is on relevant neighbourhood, property and service information rather than repetitive location pages or unsupported ranking claims.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Real estate local SEO',
          'Property and location pages',
          'Buyer and seller search intent',
          'Technical and on-page SEO',
          'Google Business Profile',
        ],
      },
      {
        tag: '03 · GOOGLE & META ADS',
        title:
          'Reach People Exploring Properties and Real Estate Services',
        description:
          'We plan suitable paid campaigns for property enquiries, project launches, agency services and seller consultations. Campaign structure, creative and landing pages should reflect the offer and market. Housing advertising requires additional attention to platform targeting rules, fair-housing requirements and accurate property claims.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Policy-aware acquisition',
        chips: [
          'Google Search campaigns',
          'Meta property campaigns',
          'Project launch advertising',
          'Landing-page alignment',
          'Conversion tracking',
        ],
      },
      {
        tag: '04 · PROPERTY EXPERIENCE & CRO',
        title:
          'Turn Property Browsing Into Viewings and Qualified Enquiries',
        description:
          'Property interest does not automatically become a sales conversation. Visitors may need to compare listings, review floor plans, check availability or ask questions before contacting an agent. We improve property navigation, mobile experiences, listing details, enquiry forms and viewing requests so the next step is clear without forcing visitors into premature commitments.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Discover',
            value: 'Properties',
          },
          {
            label: 'Evaluate',
            value: 'The details',
          },
          {
            label: 'Connect',
            value: 'With an agent',
          },
        ],
        chips: [
          'Property search and filters',
          'Listing detail pages',
          'Floor plans and galleries',
          'Viewing request forms',
          'Project registration',
          'Conversion optimisation',
        ],
      },
      {
        tag: '05 · SELLER & DEVELOPER LEAD GENERATION',
        title:
          'Create Dedicated Journeys for Property Sellers and New Projects',
        description:
          'A homeowner choosing an agent needs different information from a buyer exploring a new development. We build focused experiences for property valuation requests, agency consultations and development enquiries. Each journey can communicate relevant expertise, project information and clear next steps without relying on generic lead forms.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Property valuation enquiries',
          'Seller consultation pages',
          'New development landing pages',
          'Project registration forms',
          'Agent enquiry routing',
        ],
      },
      {
        tag: '06 · CRM & SALES AUTOMATION',
        title:
          'Keep Property Enquiries Connected to Your Sales Process',
        description:
          'Real estate leads may arrive through property listings, campaigns, calls and project registrations. We can connect these touchpoints with suitable CRM systems, notifications and lead workflows to help teams manage enquiries, viewing requests and follow-up. The implementation should reflect actual inventory, agent responsibilities and data permissions.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected sales operations',
        chips: [
          'Real estate CRM integrations',
          'Lead assignment',
          'Viewing enquiry workflows',
          'Sales notifications',
          'Follow-up automation',
        ],
      },
      {
        tag: '07 · ANALYTICS & LEAD QUALITY',
        title:
          'Understand Which Properties, Campaigns and Channels Drive Opportunities',
        description:
          'A property enquiry is only one stage of a longer sales process. We help measure calls, forms, viewing requests and project registrations, then review available data by property, location and acquisition channel. Where reliable CRM information exists, reporting can also examine progression to qualified conversations, site visits and transactions without assuming every outcome can be attributed precisely.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Better sales visibility',
        chips: [
          'Property enquiry tracking',
          'Viewing conversion events',
          'Campaign attribution',
          'Lead qualification reporting',
          'CRM conversion integration',
          'Sales funnel dashboards',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM PROPERTY SEARCH TO SALES CONVERSATION',
    headline:
      'Make Every Step of the Real Estate Journey More Useful',
    subheadline:
      'Buyers, sellers and investors need different information before making contact. We help connect property discovery, credibility, enquiries and follow-up into a clearer digital experience.',

    leftLabel: 'What Real Estate Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding Relevant Properties or Agents',
        industryStandard:
          'Buyers search by location, property type and requirements, while sellers may look for an agent with relevant market experience. They need to find a suitable starting point without navigating unrelated information.',
        ourApproach:
          'We organise property listings, agency services and location-focused content around relevant customer intent, supported by suitable SEO and paid acquisition strategies.',
      },
      {
        feature: 'Exploring Property Details',
        industryStandard:
          'Property seekers often compare photographs, floor plans, location, pricing, specifications and availability before deciding whether to make an enquiry.',
        ourApproach:
          'We improve listing pages, search filters, galleries and property information architecture so visitors can evaluate available opportunities using accurate, maintained information.',
      },
      {
        feature: 'Evaluating the Agent or Developer',
        industryStandard:
          'Customers may review agent credentials, company experience, completed developments, genuine reviews and the sales process before trusting a business with an important property decision.',
        ourApproach:
          'We help present verified company information, relevant experience, approved project details and genuine credibility signals in a clear, accessible format.',
      },
      {
        feature: 'Requesting a Viewing or Consultation',
        industryStandard:
          'A buyer may want to schedule a property viewing, a seller may request a valuation and a commercial client may need a more detailed discussion.',
        ourApproach:
          'We design relevant enquiry forms and contact journeys that gather useful information without unnecessary friction, with separate routes for buyers, sellers and project enquiries where appropriate.',
      },
      {
        feature: 'Understanding Availability and Next Steps',
        industryStandard:
          'Customers need to know whether a property is available, how to obtain further information and what happens after they register interest or contact an agent.',
        ourApproach:
          'We help structure accurate listing statuses, enquiry confirmations and sales handoffs, with integrations where suitable systems are available. Availability is not presented as live unless the underlying data supports it.',
      },
      {
        feature: 'Receiving Relevant Follow-Up',
        industryStandard:
          'Real estate decisions can involve several conversations and property comparisons. Customers benefit when agents understand their enquiry and provide appropriate updates.',
        ourApproach:
          'We can connect property forms, campaign data and CRM workflows so teams can manage lead ownership, viewing requests and follow-up while respecting consent and privacy requirements.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Digital Growth Plan Built Around Your Real Estate Business',
    subheadline:
      'We start by understanding your properties, markets, sales process and customer segments. Then we prioritise the digital improvements that can support discovery, qualified enquiries and sales-team efficiency.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Real Estate Business Model',
        summary:
          'We establish whether your priorities involve property sales, leasing, seller acquisition, development launches or a combination of services.',
        details: [
          'Review agency, brokerage and development services',
          'Identify target markets, property categories and inventory',
          'Understand enquiry qualification, sales ownership and CRM workflows',
        ],
      },
      {
        step: '02',
        title: 'Audit Discovery and Property Experience',
        summary:
          'We review how customers find your business and whether your website gives them enough information to explore properties or request a consultation.',
        details: [
          'Assess organic visibility, local search and existing campaigns',
          'Review listings, property galleries, mobile UX and enquiry forms',
          'Check current tracking, CRM integration and content maintenance',
        ],
      },
      {
        step: '03',
        title: 'Plan the Right Customer Journeys',
        summary:
          'We identify where buyers, sellers, investors and project enquiries need different pages, information and contact options.',
        details: [
          'Map property discovery and seller acquisition search intent',
          'Plan listing, project, agent and location page architecture',
          'Prioritise suitable SEO, advertising and conversion improvements',
        ],
      },
      {
        step: '04',
        title: 'Build and Connect the Digital Experience',
        summary:
          'We implement the agreed website, landing-page and acquisition improvements around the actual information and systems your business uses.',
        details: [
          'Develop or improve property listings and project pages',
          'Configure suitable search and social campaigns',
          'Improve viewing requests, valuation forms and consultation CTAs',
        ],
      },
      {
        step: '05',
        title: 'Validate Data, Tracking and CRM Workflows',
        summary:
          'We test important enquiry actions and confirm that the available integrations support accurate handoffs and useful measurement.',
        details: [
          'Test property forms, project registrations and viewing requests',
          'Validate supported conversion tracking and campaign attribution',
          'Review CRM assignment, lead status and listing data processes',
        ],
      },
      {
        step: '06',
        title: 'Review Lead Quality and Improve',
        summary:
          'We evaluate available marketing and sales feedback to understand which channels, locations and property journeys generate useful opportunities.',
        details: [
          'Review enquiries by campaign, property and customer intent',
          'Identify friction in listing experiences and contact forms',
          'Refine content, campaigns and workflows using reliable evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Property Discovery to Sales Opportunity',
    items: [
      {
        value: 'Discover',
        label: 'Relevant property and agency visibility',
        subtext:
          'Review search visibility, campaign traffic and visits to relevant property, location, agent and project pages.',
      },
      {
        value: 'Explore',
        label: 'Property and project engagement',
        subtext:
          'Assess how visitors interact with listing details, galleries, filters and enquiry options to identify useful engagement patterns and potential friction.',
      },
      {
        value: 'Enquire',
        label: 'Viewings, valuations and project registrations',
        subtext:
          'Measure supported calls, forms, viewing requests and registrations. Review whether enquiries relate to available properties and relevant business services.',
      },
      {
        value: 'Improve',
        label: 'Lead quality and sales progression',
        subtext:
          'Where reliable CRM data exists, review progression toward qualified conversations, site visits, proposals and completed transactions while recognising longer sales cycles and attribution limits.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS REAL ESTATE BUSINESSES ASK',
    headline:
      'Growing Your Real Estate Business: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our real estate business generate more enquiries?',
        answer:
          'We help real estate agencies, brokers and developers improve how customers discover properties, evaluate opportunities and contact their sales teams. Depending on your business model, this may include SEO, Google Ads, Meta Ads, property websites, project landing pages, conversion optimisation, CRM integration and analytics. The objective is to support relevant buyer, seller and project enquiries rather than simply increase traffic.',
      },
      {
        question:
          'Is Google Ads or SEO better for real estate lead generation?',
        answer:
          'Both can support different parts of the customer journey. SEO helps develop ongoing visibility for relevant agency, property and location searches, while Google Ads can help reach people actively researching suitable services or opportunities. The right balance depends on your market, inventory, budget, competition and website readiness. Advertising must also comply with applicable housing policies and local regulations.',
      },
      {
        question:
          'Can you build a real estate website with property listings and search filters?',
        answer:
          'Yes. We can develop property-focused websites with suitable listing structures, property categories, search filters, galleries, agent profiles and enquiry forms. The right architecture depends on your inventory size, content management needs and available property data. If you need integration with an existing listing feed or property management system, we assess its technical access and terms before confirming the scope.',
      },
      {
        question:
          'Can you create landing pages for individual property developments?',
        answer:
          'Yes. Development landing pages can present approved project information, location details, available unit types, floor plans, galleries and registration options. We can also connect these pages to suitable advertising and CRM workflows. Project approvals, pricing, completion dates, inventory and investment claims must be verified and maintained by the responsible business.',
      },
      {
        question:
          'How can we attract homeowners looking to sell their properties?',
        answer:
          'Seller acquisition requires a different approach from promoting property listings. We can develop agency service pages, local market content, valuation enquiry journeys and suitable campaigns that help homeowners understand your experience and request a conversation. The content should explain your actual valuation and sales process without guaranteeing a selling price or timeline.',
      },
      {
        question:
          'Can you improve our real estate website without rebuilding it?',
        answer:
          'Yes. We first review the existing platform, listing structure, page performance, SEO foundations, mobile usability and enquiry experience. Targeted improvements may be sufficient when the current website supports them. A rebuild becomes more appropriate when the architecture cannot reliably support property updates, integrations, navigation or other essential requirements.',
      },
      {
        question:
          'How do you handle SEO for properties that are sold or no longer available?',
        answer:
          'Property availability changes frequently, so the website needs a clear content lifecycle. We assess whether unavailable listings should remain accessible with an accurate status, redirect to a relevant alternative or be removed from indexing based on their value and the site`s architecture. We avoid leaving misleading availability claims online or automatically redirecting every expired listing to an unrelated page.',
      },
      {
        question:
          'Can you integrate our real estate website with a CRM?',
        answer:
          'We can assess integrations with real estate CRM systems and other sales tools where supported APIs or connectors are available. Possible workflows include property-specific lead capture, agent assignment, viewing requests, project registrations and lead status updates. The implementation depends on your software, access permissions, data structure and operational requirements.',
      },
      {
        question:
          'Can you help us generate commercial real estate enquiries?',
        answer:
          'Yes. Commercial buyers and tenants often require information about property specifications, location, permitted uses, lease or purchase terms and availability. We can build relevant commercial property pages, improve search visibility and create enquiry routes suited to these requirements. The strategy should reflect the type of commercial inventory and customers your business serves.',
      },
      {
        question:
          'Are there advertising restrictions for real estate campaigns?',
        answer:
          'Yes. Housing advertising can be subject to platform-specific targeting restrictions and local fair-housing or advertising laws. For example, Google restricts certain demographic and ZIP code targeting for housing ads in the United States and Canada. We review applicable campaign policies and targeting options before launch. Property and investment claims must also be accurate and appropriately approved.',
      },
      {
        question:
          'How do you measure the quality of real estate leads?',
        answer:
          'We can measure property enquiries, calls, viewing requests, valuation forms and project registrations, then combine these signals with available CRM feedback. Where data is reliable, reporting may examine lead relevance, agent follow-up, site visits and sales progression. Real estate sales cycles can be long, so enquiry volume and immediate campaign conversions should not be treated as equivalent to completed transactions.',
      },
      {
        question:
          'How much does real estate digital marketing cost, and what do you need to get started?',
        answer:
          'Costs depend on your business model, market, inventory, existing website, advertising budget and technical requirements. A single project landing page has a different scope from a property portal with advanced search and CRM integration. To begin, share your website, target markets, property types, current acquisition channels and the enquiries you want to attract. We can then recommend suitable priorities and an implementation scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Turn More Property Interest Into Meaningful Business Conversations',
    subheadline:
      'Whether you want stronger property visibility, a better real estate website, more relevant buyer and seller enquiries or a connected sales process, we can help identify the digital improvements worth prioritising.',
    bulletPoints: [
      'Improve real estate SEO and property discovery',
      'Build stronger listing, project and agency experiences',
      'Connect paid campaigns with relevant enquiry journeys',
      'Track leads and streamline suitable CRM workflows',
    ],
    buttonText: 'Discuss Your Real Estate Business',
  },
};

export const realEstatePage = realEstateV2Data;
export const realEstatePageV2 = realEstateV2Data;
export default realEstatePage;
