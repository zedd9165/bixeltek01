
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// Replace with a verified construction project image.
// Use an authentic project photograph where possible.
import constructionOverviewImg from '@/assets/constructing-overview.jpg';

/**
 * Bixeltek — Construction Industry Page
 * Category: Business & Professional
 *
 * Target businesses:
 * - General contractors
 * - Commercial construction companies
 * - Residential builders
 * - Design-build contractors
 * - Industrial construction companies
 * - Construction management firms
 *
 * Primary customer journeys:
 * Project Research -> Capability Evaluation ->
 * Project Enquiry -> Qualification -> Proposal
 *
 * Project photography, credentials, safety claims,
 * project values and completed work must be verified.
 */

export const constructionV2Data: IndustryPageData = {
  slug: 'construction',
  aliases: [
    'construction-companies',
    'construction-contractors',
    'general-contractors',
    'commercial-construction',
  ],
  industryName: 'Construction',

  seo: {
    title:
      'Construction Company Marketing & Digital Solutions | Bixeltek',
    description:
      'Digital growth solutions for construction companies and contractors. Bixeltek helps with construction websites, SEO, project portfolios, Google Ads, qualified enquiries and CRM integration.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR CONSTRUCTION COMPANIES',
    title: 'Turn Project Searches Into',
    highlightedTitle: 'Profitable Contracts',
    description:
      'Help property owners, developers and businesses discover your construction company, evaluate your experience and discuss upcoming projects. We connect professional websites, project portfolios, SEO and lead management to support meaningful business opportunities.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'HOW CONSTRUCTION CLIENTS EVALUATE CONTRACTORS',
    title: (
      <>
        Construction Decisions Involve More Than Price.
        {' '}
      </>
    ),
    highlightedTitle: 'Your Digital Presence Should Demonstrate Capability.',
    description:
      'Evaluating a general contractor or commercial builder involves rigorous vetting of safety records, past project delivery, and bonding capacity. When commercial developers or homeowners encounter sparse portfolios, missing certifications, or cumbersome tender submission forms, they look elsewhere. Verifiable project history and clear process timelines prevent lost bid opportunities.',
    secondaryDescription:
      'Bixeltek showcases technical capabilities through structured case studies, searchable project galleries, and clear tender submission channels. We connect industrial SEO and targeted paid positioning with reliable intake workflows, ensuring architects, project managers, and property developers can easily validate your track record and request formal RFP discussions.',
    imageSrc: constructionOverviewImg,
    imageAlt:
      'Professional construction project showing an active building site and commercial construction work',

    features: [
      {
        title: 'Demonstrate Relevant Project Experience',
        description:
          'Present completed projects with genuine photography, scope details, project types and approved information that helps clients assess your capabilities.',
      },
      {
        title: 'Reach the Right Project Decision-Makers',
        description:
          'Improve visibility for construction services, contractor searches and relevant project categories in the geographic markets your company serves.',
      },
      {
        title: 'Make Project Enquiries More Useful',
        description:
          'Help prospective clients submit relevant project requirements and connect those enquiries with the appropriate business development or estimating team.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',
    headline:
      'Digital Capabilities That Support Construction Business Development',
    subheadline:
      'We focus on the areas that matter most when potential clients are evaluating a construction partner: credibility, relevant experience, discoverability and a clear path to project discussions.',

    items: [
      {
        tag: '01 · CONSTRUCTION WEBSITE DEVELOPMENT',
        title:
          'Build a Professional Website Around Your Construction Capabilities',
        description:
          'Construction companies often serve different sectors, deliver complex projects and work with multiple decision-makers. We develop websites that clearly organise your services, project types, company information, team expertise and enquiry routes. The architecture can support residential, commercial or industrial work without forcing every visitor through the same generic service page.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Capability-led website development',
        chips: [
          'Corporate website development',
          'Construction service pages',
          'Sector and capability pages',
          'Company and leadership profiles',
          'Mobile-first UX',
          'Scalable CMS architecture',
        ],
      },
      {
        tag: '02 · PROJECT PORTFOLIOS & CREDIBILITY',
        title:
          'Let Your Completed Projects Demonstrate What You Can Deliver',
        description:
          'Construction clients want to see relevant experience before discussing a project. We structure portfolios and case studies around completed work, project scope, building type, location and verified delivery details. Where approved, project pages can explain challenges, construction approaches and outcomes. This creates a more useful record of experience than a gallery of photographs without context.',
        colSpan: 'col-span-2',
        accent: 'teal',
        pill: 'Evidence-led credibility',
        chips: [
          'Completed project case studies',
          'Project photography galleries',
          'Residential and commercial portfolios',
          'Sector-specific experience',
          'Verified credentials',
          'Project detail templates',
        ],
      },
      {
        tag: '03 · SEO & TARGETED ACQUISITION',
        title:
          'Reach Businesses and Property Owners Looking for Construction Partners',
        description:
          'Construction searches can vary significantly by project type, location and customer intent. We develop relevant SEO foundations, service content and location visibility, with suitable Google Ads campaigns where paid search makes commercial sense. A commercial construction enquiry should not be treated the same as a small residential renovation request, so targeting and landing pages are aligned with the projects your company wants to pursue.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        pill: 'Relevant project discovery',
        chips: [
          'Construction company SEO',
          'Commercial contractor searches',
          'Local and regional visibility',
          'Technical and on-page SEO',
          'Google Search campaigns',
          'Project-specific landing pages',
        ],
      },
      {
        tag: '04 · PROJECT ENQUIRIES & CRM',
        title:
          'Connect Project Interest With a More Organised Enquiry Process',
        description:
          'Construction opportunities may begin with a consultation, request for proposal, tender invitation or discussion about an upcoming development. We design relevant enquiry forms and can connect them with suitable CRM systems, notifications and lead workflows. Where appropriate, forms can collect project type, location, estimated timeline and other useful requirements without creating unnecessary friction or replacing your formal tender process.',
        colSpan: 'col-span-2',
        accent: 'orange',
        pill: 'Business development workflows',
        chips: [
          'Project consultation forms',
          'RFP and tender enquiry routes',
          'CRM integrations',
          'Lead assignment workflows',
          'Enquiry conversion tracking',
          'Business development reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM CONTRACTOR RESEARCH TO PROJECT DISCUSSION',
    headline:
      'Help Prospective Clients Evaluate Your Construction Company',
    subheadline:
      'Property owners, developers and procurement teams need clear evidence of capability before beginning a serious project conversation. Your website should support that evaluation.',

    leftLabel: 'What Construction Clients Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Suitable Contractor',
        industryStandard:
          'Clients need to identify construction companies that handle their project type, serve the required location and have relevant experience.',
        ourApproach:
          'We organise service, sector and location content around your actual capabilities, supported by relevant SEO and acquisition strategies.',
      },
      {
        feature: 'Evaluating Completed Projects',
        industryStandard:
          'Clients often want to review similar completed work, including building type, scope, location and evidence of delivery experience.',
        ourApproach:
          'We create structured project portfolios with approved photographs, relevant specifications and meaningful project descriptions.',
      },
      {
        feature: 'Understanding Technical Capabilities',
        industryStandard:
          'Developers and commercial clients may need information about construction methods, project management, specialist services and the types of work a contractor can undertake.',
        ourApproach:
          'We develop clear capability and sector pages that explain your services, project approach and technical strengths using information verified by your team.',
      },
      {
        feature: 'Assessing Company Credibility',
        industryStandard:
          'Clients may review company history, leadership, certifications, safety credentials, project references and other relevant qualifications.',
        ourApproach:
          'We help present genuine credentials, approved company information and documented experience without making unsupported claims about certifications, safety performance or project outcomes.',
      },
      {
        feature: 'Starting a Project Conversation',
        industryStandard:
          'A residential client may request a consultation, while a developer or procurement team may need to submit project requirements or a formal tender invitation.',
        ourApproach:
          'We design appropriate contact journeys, including consultation forms, project enquiry routes and links to established tender procedures where relevant.',
      },
      {
        feature: 'Managing Enquiries and Next Steps',
        industryStandard:
          'Construction opportunities can involve long evaluation periods, multiple stakeholders and several stages before a contract is awarded.',
        ourApproach:
          'We can connect enquiry forms with CRM and notification workflows to support ownership, qualification and follow-up while respecting the company’s existing proposal and procurement processes.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Digital Strategy Built Around Your Construction Business',
    subheadline:
      'We start with the projects you deliver, the clients you want to attract and the way your business development process works. Then we prioritise improvements that support credible positioning and relevant enquiries.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Construction Business',
        summary:
          'We establish your core services, project categories, target clients and geographic markets before planning website or acquisition improvements.',
        details: [
          'Review residential, commercial and industrial capabilities',
          'Identify priority sectors, project sizes and service areas',
          'Understand consultation, estimating and tender workflows',
        ],
      },
      {
        step: '02',
        title: 'Audit Your Current Digital Presence',
        summary:
          'We examine whether prospective clients can understand your capabilities, verify your experience and contact the appropriate team.',
        details: [
          'Review website structure, performance and mobile experience',
          'Assess project portfolios, credentials and service content',
          'Evaluate search visibility, enquiry forms and existing analytics',
        ],
      },
      {
        step: '03',
        title: 'Plan the Website and Content Architecture',
        summary:
          'We organise the information around how different construction clients research and evaluate potential contractors.',
        details: [
          'Map service, sector and project portfolio pages',
          'Plan relevant case studies and company credibility content',
          'Identify appropriate SEO and paid acquisition opportunities',
        ],
      },
      {
        step: '04',
        title: 'Develop the Digital Experience',
        summary:
          'We implement the agreed website and content improvements with clear navigation, project evidence and appropriate enquiry routes.',
        details: [
          'Build or improve corporate and capability pages',
          'Develop project portfolio and case-study templates',
          'Implement suitable landing pages and consultation forms',
        ],
      },
      {
        step: '05',
        title: 'Connect Tracking and Enquiry Workflows',
        summary:
          'We validate the important contact actions and review how project enquiries are received, assigned and followed up.',
        details: [
          'Test consultation, project enquiry and contact forms',
          'Configure supported analytics and conversion events',
          'Review CRM integration, notifications and enquiry routing',
        ],
      },
      {
        step: '06',
        title: 'Review Opportunities and Refine',
        summary:
          'We use available marketing data and business development feedback to improve relevant visibility, content and enquiry quality.',
        details: [
          'Review enquiries by project category, market and channel',
          'Identify gaps in portfolio and capability information',
          'Refine SEO, landing pages and workflows based on findings',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Contractor Discovery to Project Opportunity',
    items: [
      {
        value: 'Discover',
        label: 'Relevant construction visibility',
        subtext:
          'Review search visibility and visits to priority service, sector and location pages across the markets your company serves.',
      },
      {
        value: 'Evaluate',
        label: 'Project and capability engagement',
        subtext:
          'Assess how visitors interact with project portfolios, capability pages and company information to identify useful engagement patterns.',
      },
      {
        value: 'Enquire',
        label: 'Consultations and project requests',
        subtext:
          'Measure supported calls, project forms and consultation requests. Review whether enquiries match your services, locations and project requirements.',
      },
      {
        value: 'Improve',
        label: 'Qualified opportunities and pipeline visibility',
        subtext:
          'Where reliable CRM data exists, review progression toward qualified discussions, proposals and awarded work while recognising long sales cycles and attribution limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS CONSTRUCTION COMPANIES ASK',
    headline:
      'Digital Growth for Construction Businesses: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our construction company generate more project enquiries?',
        answer:
          'We help construction companies improve how prospective clients discover their services, evaluate completed projects and start business conversations. Depending on your needs, this may involve corporate website development, project portfolios, SEO, targeted Google Ads, conversion optimisation, enquiry tracking and CRM integrations. The goal is to attract relevant opportunities that align with your company’s capabilities rather than maximise enquiry volume regardless of project fit.',
      },
      {
        question:
          'Do construction companies need SEO?',
        answer:
          'SEO can help prospective clients find your company when researching construction services, contractors and project capabilities in relevant markets. We focus on useful service and sector pages, accurate geographic information, technical SEO and credible project content. The value of SEO depends on your target customers, market competition and how clients typically identify potential contractors.',
      },
      {
        question:
          'Can you build a professional construction company website?',
        answer:
          'Yes. We develop construction websites with service and capability pages, project portfolios, company information, team profiles and suitable enquiry routes. The architecture can support different construction sectors and project categories. We recommend the technical approach based on content management needs, integrations, performance requirements and long-term maintainability.',
      },
      {
        question:
          'How important are completed project case studies for a construction website?',
        answer:
          'Project case studies can be particularly useful because clients often want evidence of experience with similar building types or project requirements. We recommend presenting genuine photographs, approved project scope, relevant challenges and verified details. The content should explain what your company actually delivered without inventing results, client endorsements or contract values.',
      },
      {
        question:
          'Can you help us attract commercial construction projects?',
        answer:
          'Yes. We can develop commercial construction capability pages, sector-specific content, relevant project showcases and suitable acquisition strategies. Commercial buyers may need more detailed information about experience, technical capabilities and procurement processes than residential customers. We shape the website and enquiry journey around those requirements.',
      },
      {
        question:
          'Should we create separate pages for residential, commercial and industrial construction?',
        answer:
          'Separate pages are useful when these sectors involve meaningfully different services, customer requirements or project experience. We recommend distinct pages where they help clients understand your capabilities and review relevant work. The structure should reflect your actual services rather than creating categories solely to target keywords.',
      },
      {
        question:
          'Can you improve our existing construction website without rebuilding it?',
        answer:
          'Yes. We first assess the current website, content structure, project presentation, mobile usability, SEO foundations and enquiry experience. If the platform supports the necessary improvements, targeted development may be more practical. A rebuild is considered when technical or structural limitations make the existing site difficult to maintain or expand.',
      },
      {
        question:
          'Can you help us receive tender invitations and requests for proposals?',
        answer:
          'We can create clear business development contact routes and, where appropriate, forms for initial RFP or tender enquiries. These can collect useful information and direct requests to the appropriate team. A website enquiry form does not replace formal procurement systems, bid submission rules or contractual review processes.',
      },
      {
        question:
          'Can you integrate our construction website with a CRM?',
        answer:
          'We can assess integrations with suitable CRM and business development systems where supported APIs or connectors are available. Potential workflows include enquiry notifications, lead assignment, project category tagging and follow-up tracking. The exact scope depends on your existing software, data requirements and internal processes.',
      },
      {
        question:
          'How do you measure the quality of construction enquiries?',
        answer:
          'We can track supported contact forms, consultation requests and other agreed conversion events, then combine that information with available business development feedback. Where CRM data is reliable, reporting may assess project type, location, qualification status and progression toward proposals. Because construction sales cycles can be lengthy, enquiry counts should not be treated as equivalent to awarded contracts.',
      },
      {
        question:
          'Is Google Ads suitable for construction companies?',
        answer:
          'Google Ads can be useful when potential clients actively search for relevant construction services, but suitability depends on project type, market demand, competition and budget. For some highly specialised contractors, relationship-driven business development or a stronger capability website may be a better immediate priority. We assess the opportunity before recommending paid campaigns.',
      },
      {
        question:
          'How much does a construction website or digital marketing project cost?',
        answer:
          'Costs depend on your website requirements, number of service and project pages, content availability, target markets, integrations and acquisition scope. A focused corporate website improvement is different from a complete rebuild with project portfolios, CRM integration and ongoing marketing. Share your current website, core capabilities, target clients and business goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Construction Capabilities',
    subheadline:
      'Whether you need a stronger corporate website, better project portfolios, relevant search visibility or a more organised enquiry process, we can help identify the digital improvements worth prioritising.',
    bulletPoints: [
      'Present construction capabilities and completed projects clearly',
      'Improve relevant search visibility and sector-specific content',
      'Make consultations and project enquiries easier',
      'Connect enquiries with suitable CRM and reporting workflows',
    ],
    buttonText: 'Discuss Your Construction Business',
  },
};

export const constructionPage = constructionV2Data;
export const constructionPageV2 = constructionV2Data;
export default constructionPage;
