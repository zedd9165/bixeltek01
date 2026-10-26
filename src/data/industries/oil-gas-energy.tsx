
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved oil, gas and energy image.
// Prefer authentic industrial infrastructure,
// energy facilities, engineering teams or
// equipment used in the client's actual sector.
import oilGasEnergyOverviewImg from '@/assets/oil-gas-overview.jpg';

/**
 * Bixeltek — Oil, Gas & Energy Industry Page
 *
 * Category: Technology & Industrial
 *
 * Target businesses:
 * - Oilfield services companies
 * - Oil and gas equipment suppliers
 * - EPC and engineering contractors
 * - Industrial maintenance providers
 * - Energy technology companies
 * - Power generation equipment suppliers
 * - Renewable energy equipment and service providers
 * - Industrial inspection and testing companies
 * - Energy infrastructure contractors
 *
 * Primary buyer journey:
 * Identify Project Requirement ->
 * Research Suppliers and Contractors ->
 * Evaluate Technical Capabilities ->
 * Review Qualifications and Experience ->
 * Submit RFQ / RFI / Tender Interest ->
 * Technical and Commercial Evaluation
 *
 * Core priorities:
 * Corporate website development,
 * technical service architecture,
 * industrial SEO, B2B acquisition,
 * project and capability content,
 * RFQ workflows, CRM integrations
 * and performance analytics.
 *
 * Important:
 * Safety records, certifications, approvals,
 * project experience, equipment specifications,
 * regulatory compliance and operational
 * capabilities must be verified.
 *
 * Marketing must not imply that a supplier
 * is approved by a particular operator,
 * regulator or industry body unless confirmed.
 */

export const oilGasEnergyV2Data: IndustryPageData = {
  slug: 'oil-gas-energy',

  aliases: [
    'oil-and-gas',
    'oil-gas',
    'energy',
    'energy-companies',
    'oilfield-services',
    'energy-sector',
  ],

  industryName: 'Oil, Gas & Energy',

  seo: {
    title:
      'Oil, Gas & Energy Website Development and Digital Solutions | Bixeltek',

    description:
      'Digital solutions for oil, gas and energy companies. Build professional energy websites, showcase technical capabilities, improve industrial SEO and connect RFQ enquiries with business development teams.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR OIL, GAS & ENERGY',

    title: 'Turn Energy Procurement Searches Into',
    highlightedTitle: 'Qualified Vendor Contracts',

    description:
      'Help operators, contractors, procurement teams and project stakeholders understand your services, equipment and industry experience. We build credible digital experiences that connect technical information, industrial search visibility and relevant business enquiries.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW ENERGY SECTOR BUYERS EVALUATE SUPPLIERS',

    title: (
      <>
        Complex Projects Require More Than a Company Profile.
        {' '}
      </>
    ),

    highlightedTitle:
      'Buyers Need Confidence in Your Capabilities.',

    description:
      'Energy sector procurement requires rigorous verification of HSE compliance, technical specifications, and past field deployments across operators and EPC contractors. When enterprise energy websites present vague service overviews without documentation of certifications or operating capacity, prospective partners look elsewhere. Transparent technical capabilities remove friction from vendor pre-qualification.',
    secondaryDescription:
      'Bixeltek structures energy and industrial service websites around documented project history, regulatory certifications, and enterprise RFP workflows. We align targeted B2B search visibility with structured technical content, enabling energy service providers and equipment fabricators to reach corporate procurement decision-makers and successfully secure high-value commercial supplier contracts.',
    imageSrc: oilGasEnergyOverviewImg,

    imageAlt:
      'Energy infrastructure and engineering operations at a modern industrial facility',

    features: [
      {
        title: 'Explain Your Technical Service Scope',

        description:
          'Present equipment, engineering capabilities, maintenance services and project expertise in a structure buyers can navigate and evaluate.',
      },

      {
        title: 'Support Supplier Credibility',

        description:
          'Make verified certifications, quality systems, project experience and relevant company information easier for procurement stakeholders to review.',
      },

      {
        title: 'Connect Enquiries With the Right Teams',

        description:
          'Create appropriate RFQ, project enquiry and business development pathways that reflect the complexity of industrial procurement.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions for Technical and Project-Driven Energy Businesses',

    subheadline:
      'From communicating engineering capabilities to supporting supplier discovery and quotation workflows, we build digital experiences around the way energy sector organisations evaluate business partners.',

    items: [
      {
        tag: '01 · ENERGY WEBSITE DEVELOPMENT',

        title:
          'Build a Corporate Website That Reflects Your Operational Capabilities',

        description:
          'Oil, gas and energy websites often need to communicate multiple service divisions, technical capabilities, equipment categories, project experience and geographic operations. We develop structured corporate websites with clear service navigation, relevant industry applications, company information and enquiry pathways. For organisations operating across regions or business units, we plan scalable content architecture and maintainable page templates rather than relying on a collection of disconnected brochures.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Enterprise-ready web architecture',

        chips: [
          'Energy corporate websites',
          'Oilfield service pages',
          'Engineering service architecture',
          'Equipment and product catalogues',
          'Multi-division websites',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · ENERGY SEO & INDUSTRIAL DISCOVERY',

        title:
          'Help Relevant Buyers Find Your Equipment and Services',

        description:
          'Energy sector searches may involve specific equipment, technical processes, maintenance requirements, engineering services or supplier locations. We improve search visibility through accurate service pages, equipment categories, technical content and strong SEO foundations. Geographic targeting reflects genuine operational coverage and service availability rather than creating generic country or city pages without meaningful differences.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Oil and gas SEO',
          'Energy service SEO',
          'Equipment and capability pages',
          'Technical and on-page SEO',
          'Regional supplier visibility',
        ],
      },

      {
        tag: '03 · INDUSTRIAL LEAD GENERATION',

        title:
          'Reach Companies Researching Relevant Energy Services',

        description:
          'Digital acquisition in the energy sector requires careful targeting because technical searches may attract researchers, job seekers and buyers with very different needs. We plan suitable Google Search campaigns around relevant equipment, services and procurement intent. Campaigns can direct visitors to focused capability or quotation pages. We evaluate enquiry relevance and available sales feedback rather than treating every contact as a qualified project opportunity.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Relevant B2B enquiries',

        chips: [
          'Google Search campaigns',
          'Industrial keyword research',
          'Service landing pages',
          'RFQ-focused campaigns',
          'Lead qualification insights',
        ],
      },

      {
        tag: '04 · RFQ & PROJECT ENQUIRY EXPERIENCE',

        title:
          'Make It Easier to Start the Right Technical Conversation',

        description:
          'Energy sector enquiries may involve equipment specifications, service locations, operating conditions, project schedules or technical documents. A generic contact form often provides too little context, while an excessively detailed form may discourage early enquiries. We design appropriate RFQ, RFI and project enquiry experiences that collect useful initial information and direct it to the relevant team. Formal tender management and confidential document exchange require separate scoping.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Identify',
            value: 'The service',
          },
          {
            label: 'Describe',
            value: 'The requirement',
          },
          {
            label: 'Connect',
            value: 'With the team',
          },
        ],

        chips: [
          'RFQ and RFI forms',
          'Project enquiry workflows',
          'Equipment specification fields',
          'Location-based enquiry routing',
          'Secure document handling',
          'Technical consultation CTAs',
        ],
      },

      {
        tag: '05 · TECHNICAL CONTENT & PROJECT CREDIBILITY',

        title:
          'Present the Evidence Procurement and Engineering Teams Look For',

        description:
          'Energy sector buyers may review technical datasheets, equipment capabilities, project references, quality procedures and applicable certifications before considering a supplier. We help organise approved technical resources, company credentials and relevant project content. Safety statistics, operator approvals, regulatory compliance and performance claims must be verified by the business. Sensitive project information and client identities should be published only with appropriate permission.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Technical datasheets',
          'Equipment specifications',
          'Approved project case studies',
          'Verified certifications',
          'Quality and HSE information',
        ],
      },

      {
        tag: '06 · CRM & BUSINESS DEVELOPMENT WORKFLOWS',

        title:
          'Connect Industrial Enquiries With the Right Business Development Teams',

        description:
          'An energy project enquiry may require review by sales, engineering, estimating or regional operations teams. We can connect website forms with suitable CRM systems, notifications and routing workflows to improve visibility and ownership. Enquiries may be organised by service category, region or project requirement. Complex tender management, ERP connections and document approval processes are assessed separately based on available systems and security requirements.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected project enquiries',

        chips: [
          'CRM integrations',
          'Project enquiry routing',
          'Regional sales notifications',
          'Technical team handoffs',
          'Workflow automation',
          'Enquiry status visibility',
        ],
      },

      {
        tag: '07 · ENERGY SECTOR ANALYTICS',

        title:
          'Understand Which Services Generate Relevant Commercial Interest',

        description:
          'Website traffic alone provides limited insight into energy sector business development. We help measure engagement with service pages, equipment information, technical resources and enquiry actions. Where reliable CRM data exists, reporting can consider qualified enquiries and progression toward commercial discussions. We account for long procurement cycles, offline relationships, framework agreements and the limitations of attributing project awards to digital marketing.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Industrial opportunity visibility',

        chips: [
          'GA4 and GTM tracking',
          'Service engagement reporting',
          'RFQ conversion tracking',
          'Technical resource analytics',
          'CRM opportunity signals',
          'B2B acquisition reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SUPPLIER DISCOVERY TO PROJECT ENQUIRY',

    headline:
      'Support the Technical Evaluation Behind Energy Sector Procurement',

    subheadline:
      'Industrial buyers need credible service information, relevant technical evidence and clear enquiry pathways. We help organise the digital journey around those requirements.',

    leftLabel: 'What Energy Sector Buyers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Relevant Suppliers',

        industryStandard:
          'Buyers may search for equipment, engineering services, maintenance contractors, inspection providers or suppliers serving a particular region.',

        ourApproach:
          'We structure relevant service and capability pages around the company’s actual offerings and support appropriate industrial search visibility.',
      },

      {
        feature: 'Understanding Technical Capabilities',

        industryStandard:
          'Engineering and project teams need to evaluate supported equipment, services, technical specifications and operational requirements.',

        ourApproach:
          'We organise approved service information, equipment specifications and technical resources into clear, navigable website experiences.',
      },

      {
        feature: 'Reviewing Supplier Qualifications',

        industryStandard:
          'Procurement teams may examine certifications, quality systems, safety information, project references and relevant supplier experience.',

        ourApproach:
          'We present verified credentials, approved project experience and suitable company information without implying unconfirmed approvals or compliance.',
      },

      {
        feature: 'Assessing Project and Geographic Fit',

        industryStandard:
          'Buyers may need to confirm service coverage, equipment suitability, mobilisation capability, project experience and operational constraints.',

        ourApproach:
          'We communicate confirmed geographic coverage, service scope and project capabilities while directing detailed requirements to the appropriate technical team.',
      },

      {
        feature: 'Initiating an RFQ or Technical Discussion',

        industryStandard:
          'Initial enquiries may include project scope, equipment requirements, specifications, site locations and relevant documents.',

        ourApproach:
          'We develop structured enquiry journeys that collect useful information and support secure handling of technical attachments where required.',
      },

      {
        feature: 'Moving Through Procurement Review',

        industryStandard:
          'Supplier evaluation may involve technical clarification, prequalification, commercial review, formal tenders and multiple internal stakeholders.',

        ourApproach:
          'We can connect enquiries with suitable CRM and internal workflows while keeping supplier qualification, technical approvals and procurement decisions with the responsible organisations.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Energy Sector Capabilities',

    subheadline:
      'We begin with your services, technical expertise, target markets and business development process. Then we prioritise digital improvements that support credible supplier discovery and relevant commercial enquiries.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Position in the Energy Sector',

        summary:
          'We establish your services, equipment, operational capabilities and the types of organisations you want to reach.',

        details: [
          'Review service divisions, equipment and technical capabilities',
          'Identify target buyers, regions and project categories',
          'Understand business development and procurement workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit the Existing Digital Presence',

        summary:
          'We assess whether your website communicates your technical scope and helps relevant stakeholders evaluate your business.',

        details: [
          'Review service architecture and technical information',
          'Assess industrial SEO, performance and acquisition channels',
          'Evaluate project credibility, RFQ forms and enquiry handling',
        ],
      },

      {
        step: '03',

        title: 'Plan the Capability and Content Architecture',

        summary:
          'We organise digital information around actual services, equipment, project experience and procurement requirements.',

        details: [
          'Map service, equipment and industry application pages',
          'Plan technical resources and approved project content',
          'Prioritise SEO, enquiry and CRM integration requirements',
        ],
      },

      {
        step: '04',

        title: 'Build the Corporate and Technical Experience',

        summary:
          'We implement the agreed website, content and conversion improvements with attention to clarity, security and maintainability.',

        details: [
          'Develop or refine service and equipment pages',
          'Improve navigation, mobile usability and technical resources',
          'Implement approved landing pages and enquiry journeys',
        ],
      },

      {
        step: '05',

        title: 'Validate Enquiries and Data Flows',

        summary:
          'We test important contact journeys and review how project enquiries reach the appropriate teams and systems.',

        details: [
          'Test RFQ forms, notifications and permitted attachments',
          'Validate supported analytics and conversion events',
          'Review CRM routing, access permissions and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review Commercial Interest and Refine',

        summary:
          'We use available website, campaign and business development feedback to improve relevant discovery and enquiry quality.',

        details: [
          'Review engagement by service, equipment and target market',
          'Assess enquiry relevance and available opportunity progression',
          'Refine technical content, campaigns and enquiry workflows',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Technical Discovery to Commercial Opportunity',

    items: [
      {
        value: 'Discover',

        label: 'Relevant service and equipment visibility',

        subtext:
          'Review search visibility, acquisition channels and visits to priority service, equipment and industry application pages.',
      },

      {
        value: 'Evaluate',

        label: 'Technical content and company engagement',

        subtext:
          'Assess supported interactions with specifications, project information, certifications and other relevant technical resources.',
      },

      {
        value: 'Enquire',

        label: 'RFQs and project discussions',

        subtext:
          'Measure supported quotation requests, technical enquiries and relevant contact actions while assessing their fit with the company’s capabilities.',
      },

      {
        value: 'Improve',

        label: 'Qualified industrial opportunities',

        subtext:
          'Where reliable CRM data exists, review enquiry qualification and commercial progression while recognising lengthy procurement cycles and offline relationships.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS OIL, GAS & ENERGY COMPANIES ASK',

    headline:
      'Digital Solutions for Oil, Gas & Energy: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our oil and gas company improve its digital presence?',

        answer:
          'We help oil, gas and energy businesses develop professional websites, communicate technical capabilities, improve relevant search visibility and manage suitable enquiry workflows. Depending on your needs, this may include corporate website development, industrial SEO, Google Ads, technical content, RFQ optimisation and CRM integrations. The approach is shaped around your actual services, target buyers and business development process.',
      },

      {
        question:
          'Can you build a corporate website for an oilfield services or energy company?',

        answer:
          'Yes. We develop corporate websites for energy sector businesses with service divisions, equipment categories, technical resources, company credentials, project information and relevant enquiry pathways. The architecture can support multiple regions, facilities or business units. We recommend the technical approach based on content requirements, integrations, performance, security and long-term maintenance.',
      },

      {
        question:
          'Can you create separate pages for our equipment and technical services?',

        answer:
          'Yes. Dedicated pages can help buyers evaluate genuinely different equipment categories, engineering services and operational capabilities. We recommend structuring pages around meaningful technical distinctions, applications and buyer requirements. All specifications and capability statements should be verified by your engineering or product teams.',
      },

      {
        question:
          'How can SEO help oil, gas and energy companies?',

        answer:
          'Industrial SEO can help relevant buyers discover equipment, engineering services, maintenance capabilities and suppliers through search engines. We work on technical SEO, service architecture, equipment pages, internal linking and useful technical content. Search performance depends on demand, competition, website quality and service relevance. We do not guarantee rankings or project awards.',
      },

      {
        question:
          'Can you manage Google Ads for energy equipment and industrial services?',

        answer:
          'We can plan suitable Google Search campaigns for eligible industrial services and equipment. Campaign structure should reflect relevant technical search intent, target markets and business priorities. We recommend focused service landing pages and meaningful conversion tracking. Advertising eligibility depends on applicable platform policies and the specific products or services promoted.',
      },

      {
        question:
          'Can you create an equipment catalogue without ecommerce checkout?',

        answer:
          'Yes. Many energy suppliers need searchable equipment catalogues, specification pages, downloadable resources and RFQ options rather than online checkout. We can develop suitable catalogue structures for products that require technical review, custom quotations or project-specific commercial terms.',
      },

      {
        question:
          'Can you build RFQ forms for technical equipment and project enquiries?',

        answer:
          'Yes. We can design structured enquiry forms for relevant information such as service category, equipment requirements, project location and technical details. Where necessary, we can assess secure file upload workflows. Confidential drawings, project documents and other sensitive materials require appropriate access controls, storage and retention policies.',
      },

      {
        question:
          'Can you help us showcase project experience and completed work?',

        answer:
          'Yes. We can structure project pages and case studies around approved scope, technical challenges, services delivered and verified outcomes. Energy sector projects may involve confidentiality obligations, so customer names, site photographs, operational details and performance claims should be published only with appropriate authorisation.',
      },

      {
        question:
          'Can you display our certifications, HSE information and quality standards?',

        answer:
          'Yes. We can develop suitable sections for verified certifications, quality systems, safety policies and approved HSE information. The business must confirm the validity, scope and current status of each claim. We avoid suggesting operator approvals, regulatory compliance or safety performance that has not been substantiated.',
      },

      {
        question:
          'Can you help our energy company reach buyers in Saudi Arabia and other international markets?',

        answer:
          'We can structure websites and suitable acquisition strategies for international markets that your business genuinely serves. This may include region-specific service information, multilingual content where required and appropriate enquiry routing. Geographic coverage, operational capability and regulatory eligibility must be verified by the company before publication.',
      },

      {
        question:
          'Can you integrate our website with CRM or project enquiry systems?',

        answer:
          'We can assess integrations with suitable CRM and business development systems where supported APIs or connectors are available. Possible workflows include enquiry routing, notifications, service categorisation and supported reporting. Complex tender management, ERP integration and approval workflows require separate technical scoping.',
      },

      {
        question:
          'Can you improve our existing energy company website without rebuilding it?',

        answer:
          'Yes. We first review service architecture, technical content, performance, SEO, mobile usability and enquiry journeys. Where the current platform supports the required changes, targeted improvements may be sufficient. A rebuild may be recommended when technical or structural limitations make the website difficult to maintain or expand.',
      },

      {
        question:
          'How do you measure digital marketing performance for energy companies?',

        answer:
          'We can measure supported interactions with service pages, equipment content, technical resources and enquiry actions. Where reliable CRM data exists, reporting may also consider qualified enquiries and commercial progression. Energy sector procurement often involves long sales cycles, existing relationships and offline negotiations, so project revenue cannot always be attributed to a single digital interaction.',
      },

      {
        question:
          'How much does an oil, gas or energy website project cost?',

        answer:
          'Costs depend on the number of services, equipment categories, project pages, geographic markets, content requirements and integrations. A focused website for a specialist equipment supplier has different needs from a multi-division engineering contractor with extensive technical resources and regional operations. Share your current website, services and business goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Energy Sector Expertise',

    subheadline:
      'Whether you need a stronger corporate website, clearer technical service pages, relevant industrial enquiries or connected business development workflows, we can help identify the digital improvements worth prioritising.',

    bulletPoints: [
      'Showcase technical services, equipment and project capabilities',
      'Improve relevant industrial search visibility and supplier discovery',
      'Create clearer RFQ and project enquiry journeys',
      'Connect suitable CRM, reporting and business development workflows',
    ],

    buttonText: 'Discuss Your Energy Project',
  },
};

export const oilGasEnergyPage = oilGasEnergyV2Data;
export const oilGasEnergyPageV2 = oilGasEnergyV2Data;
export default oilGasEnergyPage;
