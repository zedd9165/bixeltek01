
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved landscaping-specific image.
// Verify the actual asset path before publishing.
import landscapingOverviewImg from '@/assets/landscaping-overview.jpg';

/**
 * Bixeltek — Landscaping Industry Page
 *
 * Category: Home & Local Services
 *
 * Target businesses:
 * - Residential landscaping companies
 * - Landscape design and installation contractors
 * - Lawn care and garden maintenance providers
 * - Hardscaping and outdoor living specialists
 * - Commercial landscaping contractors
 * - Grounds maintenance companies
 *
 * Customer journey:
 * Discover -> Explore Work -> Evaluate -> Enquire
 * -> Consultation / Estimate -> Ongoing Relationship
 *
 * Core priorities:
 * Local SEO, project portfolios, Google Ads,
 * conversion-focused websites, quote requests,
 * seasonal campaigns and recurring service enquiries.
 *
 * All project outcomes, certifications, warranties,
 * service coverage and pricing claims require verification.
 */

export const landscapingV2Data: IndustryPageData = {
  slug: 'landscaping',
  aliases: [
    'landscaping-services',
    'landscaping-companies',
    'landscape-contractors',
    'lawn-care',
  ],
  industryName: 'Landscaping',

  seo: {
    title:
      'Landscaping Marketing & Digital Growth Solutions | Bixeltek',
    description:
      'Grow your landscaping business with local SEO, Google Ads, project-focused websites, lead generation and automation. Digital solutions for landscape design, installation and maintenance companies.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR LANDSCAPING COMPANIES',
    title: 'Turn Local Property Searches Into',
    highlightedTitle: 'High-Value Landscaping Projects',
    description:
      'Help homeowners and businesses discover your landscaping services, explore your work and request a consultation or estimate. We connect local SEO, Google Ads, conversion-focused websites and lead management to turn relevant interest into project enquiries.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'HOW LANDSCAPING CUSTOMERS CHOOSE',
    title: (
      <>
        Customers Want to See What Is Possible.
        {' '}
      </>
    ),
    highlightedTitle: 'Your Website Should Help Them Imagine It.',
    description:
      'Homeowners planning major outdoor transformations evaluate design styles, past craftsmanship, and budget ranges, whereas routine maintenance clients prioritize reliability and service schedules. When portfolios lack project scope or inquiry forms are overly complex, prospects hesitate. Segmenting services and showing verified work clarifies decisions.',
    secondaryDescription:
      'Bixeltek bridges visual storytelling with disciplined local search optimization and high-intent lead generation. We structure your digital presence around regional service zones, distinct project tiers, and clear consultation requests, ensuring your team attracts qualified design-build clients and stable commercial accounts aligned with your seasonal capacity.',
    imageSrc: landscapingOverviewImg,
    imageAlt:
      'Professionally landscaped residential outdoor space featuring garden planting, lawn, stone pathways and outdoor design',

    features: [
      {
        title: 'Show the Quality of Your Actual Work',
        description:
          'Use genuine project photography, before-and-after examples and clear service explanations to help customers evaluate your landscaping experience and approach.',
      },
      {
        title: 'Reach Customers in the Right Locations',
        description:
          'Improve visibility for landscaping, lawn care, garden design and maintenance searches in areas your team genuinely serves, with content aligned to your actual services.',
      },
      {
        title: 'Make Consultations and Estimates Easier',
        description:
          'Give customers straightforward ways to share project requirements, property details and service needs, then connect enquiries with suitable follow-up workflows.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',
    headline:
      'Digital Solutions That Help Landscaping Companies Attract Better Opportunities',
    subheadline:
      'From inspiring project portfolios to local discovery and estimate requests, we build digital experiences around how customers evaluate landscaping work and choose a contractor.',

    items: [
      {
        tag: '01 · LOCAL SEO',
        title:
          'Get Found for Landscaping Services in Your Service Areas',
        description:
          'Landscaping customers often search for contractors based on the type of work and their property location. We review your Google Business Profile, organic search presence, service-area coverage and website structure to improve discovery for relevant local searches. The strategy reflects where your teams actually operate and avoids repetitive location pages that offer little value.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local landscaping visibility',
        chips: [
          'Google Business Profile',
          'Landscaping local SEO',
          'Service-area optimisation',
          'Landscape design searches',
          'Lawn care and maintenance SEO',
          'Technical SEO',
        ],
      },
      {
        tag: '02 · GOOGLE ADS',
        title:
          'Reach Customers Planning Landscaping Projects',
        description:
          'We structure search campaigns around the landscaping services and locations you want to prioritise. A garden design project, patio installation and recurring lawn care enquiry may have very different commercial value, so campaigns, landing pages and budgets should reflect those differences. Search-term reviews help reduce irrelevant traffic.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Service-focused campaigns',
        chips: [
          'Landscape design campaigns',
          'Installation enquiries',
          'Lawn care lead generation',
          'Location targeting',
          'Conversion tracking',
        ],
      },
      {
        tag: '03 · PROJECT PORTFOLIOS',
        title:
          'Turn Completed Landscaping Projects Into Stronger Trust Signals',
        description:
          'Customers want to see examples of the spaces you have created or maintained. We develop structured project galleries and case-study pages that can explain the property type, scope of work, design decisions and completed result. Genuine photographs and useful project details help visitors evaluate whether your experience matches their needs.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Before-and-after galleries',
          'Residential project showcases',
          'Commercial project examples',
          'Project scope descriptions',
          'Mobile-friendly image galleries',
        ],
      },
      {
        tag: '04 · WEBSITE & CRO',
        title:
          'Turn Landscaping Inspiration Into Consultation and Estimate Requests',
        description:
          'A strong landscaping website should help visitors move naturally from exploring services and completed projects to discussing their own property. We improve mobile usability, project navigation, service information, consultation CTAs and quote forms. Different enquiry routes can support design projects, installations and recurring maintenance without making the experience unnecessarily complicated.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Explore',
            value: 'Your work',
          },
          {
            label: 'Evaluate',
            value: 'Your services',
          },
          {
            label: 'Enquire',
            value: 'About a project',
          },
        ],
        chips: [
          'Portfolio-led website design',
          'Consultation request forms',
          'Project estimate enquiries',
          'Mobile-first UX',
          'Service landing pages',
          'Conversion optimisation',
        ],
      },
      {
        tag: '05 · SERVICE & SEASONAL CONTENT',
        title:
          'Help Customers Understand Your Services Throughout the Year',
        description:
          'Landscaping demand can change with climate, season and property needs. We organise useful content around the services you offer, such as garden design, planting, lawn care, irrigation or seasonal maintenance. Clear service information helps customers understand when to enquire and what work your company can provide.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Landscape design pages',
          'Hardscaping service content',
          'Lawn and garden maintenance',
          'Seasonal service information',
          'Commercial grounds care',
        ],
      },
      {
        tag: '06 · CRM & ENQUIRY AUTOMATION',
        title:
          'Keep Landscaping Consultations and Service Requests Organised',
        description:
          'Landscaping enquiries may involve site visits, project discussions, quotations and follow-up over several weeks. We can connect website forms with suitable CRM systems, notifications and workflow tools to help teams track enquiries and next steps. Recurring maintenance requests can also follow a different process from one-time design and installation projects.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected lead management',
        chips: [
          'CRM integrations',
          'Consultation enquiry routing',
          'Quote follow-up workflows',
          'Lead status tracking',
          'Maintenance enquiry management',
        ],
      },
      {
        tag: '07 · ANALYTICS & LEAD QUALITY',
        title:
          'Understand Which Landscaping Services Bring Valuable Project Enquiries',
        description:
          'Not every website enquiry represents the same business opportunity. A small maintenance request and a complete landscape installation may involve very different project values and sales processes. We help measure calls, consultation requests and estimate forms, then review available performance data by service, location and marketing channel. Where reliable CRM data exists, we can assess how enquiries progress toward consultations, proposals and confirmed work.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Better marketing decisions',
        chips: [
          'Consultation conversion tracking',
          'Quote request analytics',
          'Service-level reporting',
          'Campaign attribution',
          'Lead quality analysis',
          'CRM data integration',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM INSPIRATION TO PROJECT ENQUIRY',
    headline:
      'Help Landscaping Customers Move From Ideas to the Right Contractor',
    subheadline:
      'Customers need more than a list of services. They want to see relevant work, understand your capabilities and feel confident about discussing their property with your team.',

    leftLabel: 'What Landscaping Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Landscaping Company Nearby',
        industryStandard:
          'Homeowners and property managers often search for landscaping services within a specific area. They need to confirm that a contractor covers their property and offers the work they require.',
        ourApproach:
          'We improve local search visibility, service-area information and relevant landscaping pages so prospective customers can discover your company and understand where you operate.',
      },
      {
        feature: 'Exploring Landscaping Ideas and Previous Work',
        industryStandard:
          'Customers planning an outdoor transformation often want to see completed gardens, patios, planting schemes and similar projects before deciding which contractors to contact.',
        ourApproach:
          'We organise genuine project photographs, before-and-after examples and detailed project pages so visitors can explore your work and assess its relevance to their own plans.',
      },
      {
        feature: 'Understanding Services and Capabilities',
        industryStandard:
          'A customer may need landscape design, installation, hardscaping, irrigation or ongoing maintenance. They want to understand which services are available and whether the contractor can handle their project.',
        ourApproach:
          'We structure service pages around your actual capabilities, explaining relevant project types, processes and enquiry options without presenting services your business does not offer.',
      },
      {
        feature: 'Evaluating Experience and Reliability',
        industryStandard:
          'Customers may compare genuine reviews, relevant experience, project examples, business credentials and maintenance arrangements before choosing a landscaping provider.',
        ourApproach:
          'We help present verified business information, customer feedback and completed work in a clear, credible format, avoiding unsupported promises about project outcomes.',
      },
      {
        feature: 'Requesting a Consultation or Estimate',
        industryStandard:
          'Landscaping projects may require a site assessment, discussion of goals and an estimate based on property size, materials and scope. Maintenance customers may need a simpler service enquiry.',
        ourApproach:
          'We design relevant consultation and quote forms that collect useful project information while keeping the process manageable. Different contact journeys can support design, installation and recurring maintenance.',
      },
      {
        feature: 'Managing the Decision and Follow-Up',
        industryStandard:
          'Customers may compare several landscaping proposals before committing, especially for larger outdoor projects. Clear communication and timely follow-up can help maintain confidence throughout the decision.',
        ourApproach:
          'We can connect enquiry forms, CRM workflows and notifications so your team can manage consultations, quotations and follow-up. Available reporting helps identify where enquiries progress or become delayed.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Digital Growth Plan Built Around Your Landscaping Services',
    subheadline:
      'We start by understanding the landscaping projects you want, the areas you serve and how customers currently find and contact your company. Then we prioritise the improvements most relevant to your business.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Services and Ideal Projects',
        summary:
          'We identify your landscaping capabilities, target customers, preferred project types and operational priorities before planning acquisition or website improvements.',
        details: [
          'Review design, installation, hardscaping and maintenance services',
          'Identify residential, commercial and service-area priorities',
          'Understand project capacity, consultation processes and business goals',
        ],
      },
      {
        step: '02',
        title: 'Audit Visibility, Portfolio and Customer Experience',
        summary:
          'We examine how customers discover your company and whether your website helps them evaluate your work and request a consultation.',
        details: [
          'Review local search visibility and Google Business Profile information',
          'Assess project galleries, service pages and mobile usability',
          'Check enquiry forms, existing campaigns and tracking gaps',
        ],
      },
      {
        step: '03',
        title: 'Prioritise Services, Locations and Content',
        summary:
          'We identify the most relevant opportunities based on search demand, competition, service value and the types of projects your team wants to attract.',
        details: [
          'Map landscaping services to relevant customer search intent',
          'Plan service pages, project showcases and useful local content',
          'Determine appropriate SEO, Google Ads and website priorities',
        ],
      },
      {
        step: '04',
        title: 'Build a Stronger Project Enquiry Journey',
        summary:
          'We implement the agreed improvements so customers can explore your work, understand your services and request the next step.',
        details: [
          'Develop or refine service pages and project portfolios',
          'Configure suitable search campaigns and landing pages',
          'Improve consultation CTAs, estimate forms and mobile navigation',
        ],
      },
      {
        step: '05',
        title: 'Connect Tracking and Enquiry Management',
        summary:
          'We validate important customer actions and connect suitable workflows to help your team manage new project opportunities.',
        details: [
          'Test calls, consultation requests and estimate forms',
          'Validate supported analytics and conversion tracking',
          'Review CRM handoffs, notifications and quotation follow-up',
        ],
      },
      {
        step: '06',
        title: 'Review Lead Quality and Refine the Strategy',
        summary:
          'We assess available performance data and feedback from your team to understand which services and channels are generating relevant opportunities.',
        details: [
          'Review enquiry quality by service, location and channel',
          'Identify portfolio, landing-page and form improvements',
          'Refine campaigns and content around demand and operational capacity',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Landscaping Discovery to Project Enquiry',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local landscaping visibility',
        subtext:
          'Review local searches, business profile interactions and visits to priority landscaping service pages across your genuine service areas.',
      },
      {
        value: 'Explore',
        label: 'Portfolio and service engagement',
        subtext:
          'Assess how visitors interact with completed projects, service information and consultation options to identify useful engagement patterns and possible friction.',
      },
      {
        value: 'Enquire',
        label: 'Consultations and estimate requests',
        subtext:
          'Measure calls, consultation forms and project estimate requests where tracking is available and permitted. Review whether enquiries match your preferred services and locations.',
      },
      {
        value: 'Improve',
        label: 'Project lead quality and acquisition efficiency',
        subtext:
          'Compare relevant enquiry trends and acquisition costs. Where reliable CRM data exists, review progression toward site visits, proposals and confirmed projects while recognising attribution limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS LANDSCAPING COMPANIES ASK',
    headline:
      'Growing Your Landscaping Business: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our landscaping company get more project enquiries?',
        answer:
          'We help landscaping businesses improve local search visibility, present their services and completed work more effectively, and make consultation or estimate requests easier. Depending on your current setup, this may include local SEO, Google Ads, project portfolio development, website improvements, conversion optimisation, tracking and CRM integration. The goal is to attract relevant enquiries for the projects and areas your company wants to serve.',
      },
      {
        question:
          'Is Google Ads or SEO better for landscaping lead generation?',
        answer:
          'Both can be useful for different objectives. Local SEO supports ongoing visibility for relevant landscaping and service-area searches, while Google Ads can help reach customers actively searching for selected services. The right approach depends on competition, seasonality, budget, website quality and the type of projects you want to attract. We review these factors before recommending priorities.',
      },
      {
        question:
          'Can you help us attract larger landscape design and installation projects?',
        answer:
          'Yes. Larger landscaping projects often involve more research and comparison than routine maintenance services. We can improve design and installation pages, develop detailed project showcases, assess relevant search opportunities and create consultation journeys that help potential customers explain their goals. We also review lead quality with your team so the strategy does not focus solely on enquiry volume.',
      },
      {
        question:
          'How important are project galleries and before-and-after photos?',
        answer:
          'They can be especially useful for visual services such as landscaping because they help customers understand your experience, design approach and completed work. We recommend genuine, well-organised photographs supported by relevant project details where available. A portfolio should make it easy to explore similar work and move toward a consultation without relying on exaggerated results or stock images presented as completed projects.',
      },
      {
        question:
          'Should we have separate pages for landscape design, hardscaping and lawn maintenance?',
        answer:
          'Dedicated pages can be valuable when services involve different customer needs, search intent and enquiry requirements. A landscape design project may require a consultation, while recurring lawn maintenance may involve service frequency and property details. We recommend focused pages for meaningful services your company actually provides rather than creating repetitive pages for minor keyword variations.',
      },
      {
        question:
          'How can our landscaping company rank in multiple cities or neighbourhoods?',
        answer:
          'We review your genuine service coverage, Google Business Profile eligibility and geographic search demand. Improvements may include accurate service-area information, useful location-specific content, relevant project examples and stronger internal linking. We avoid misleading addresses or near-identical city pages that do not provide meaningful information.',
      },
      {
        question:
          'Can you help us get recurring lawn care and landscape maintenance enquiries?',
        answer:
          'Yes. Recurring maintenance customers often evaluate service coverage, frequency, reliability and the scope of work. We can create appropriate maintenance service pages, improve local visibility and develop enquiry forms that capture useful details such as property type, location and requested service frequency. The strategy should reflect your actual maintenance capacity and available packages.',
      },
      {
        question:
          'Can you improve our current landscaping website without rebuilding it?',
        answer:
          'Yes. We first assess the current platform, project galleries, mobile usability, service navigation, page performance, SEO foundations and enquiry experience. If the website can support the necessary improvements, targeted development may be more practical than a full rebuild. A replacement becomes relevant when technical or structural limitations prevent meaningful progress.',
      },
      {
        question:
          'Can you help us manage seasonal landscaping demand?',
        answer:
          'We can review seasonal search patterns and historical business performance where available, then align suitable content, campaigns and budgets with the services you offer during different periods. Seasonal priorities depend on climate, location and operational capacity. We do not assume that the same landscaping calendar applies to every market.',
      },
      {
        question:
          'Can you connect landscaping enquiries with our CRM or quotation process?',
        answer:
          'We can assess integrations with suitable CRM, scheduling and workflow systems where supported APIs or connectors are available. Potential workflows include consultation notifications, enquiry assignment, quote follow-up and lead status tracking. The implementation depends on your existing tools, project workflow and data requirements.',
      },
      {
        question:
          'How much does landscaping marketing cost, and what do you need to get started?',
        answer:
          'Costs depend on your target market, competition, website condition, advertising budget, service priorities and technical requirements. A focused local SEO project is different from a portfolio-led website rebuild with campaign management and CRM integrations. To begin, share your website, main landscaping services, service areas, project examples and the types of enquiries you want to attract. We can then recommend practical priorities and an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Help More Local Customers Discover Your Landscaping Work',
    subheadline:
      'Whether you want more landscape design enquiries, stronger local visibility, a better project portfolio or a more organised lead process, we can help identify the digital improvements worth prioritising for your business.',
    bulletPoints: [
      'Improve landscaping SEO and local service-area visibility',
      'Showcase completed projects through a stronger website experience',
      'Connect Google Ads with relevant consultations and estimates',
      'Track project enquiries and streamline suitable follow-up workflows',
    ],
    buttonText: 'Discuss Your Landscaping Business',
  },
};

export const landscapingPage = landscapingV2Data;
export const landscapingPageV2 = landscapingV2Data;
export default landscapingPage;
