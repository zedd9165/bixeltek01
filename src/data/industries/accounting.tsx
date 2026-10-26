
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved accounting-specific image.
// Prefer an authentic professional accounting team
// or client advisory meeting.
import accountingOverviewImg from '@/assets/accounting-overview.jpg';

/**
 * Bixeltek — Accounting Industry Page
 *
 * Category: Business & Professional
 *
 * Target businesses:
 * - Accounting and bookkeeping firms
 * - Chartered accountant practices
 * - CPA firms
 * - Tax advisory and preparation firms
 * - Outsourced accounting providers
 * - Business accounting and payroll firms
 * - Audit and assurance firms, where authorised
 *
 * Primary customer journey:
 * Discover -> Identify Relevant Service ->
 * Evaluate Credentials -> Understand Process ->
 * Request Consultation -> Onboarding
 *
 * Core priorities:
 * Service clarity, trust, search visibility,
 * professional websites, qualified enquiries,
 * secure contact journeys and CRM workflows.
 *
 * Credentials, regulated services, client claims,
 * tax advice and jurisdiction-specific requirements
 * must be verified before publication.
 */

export const accountingV2Data: IndustryPageData = {
  slug: 'accounting',
  aliases: [
    'accounting-firms',
    'accounting-services',
    'bookkeeping-services',
    'tax-accounting',
  ],

  industryName: 'Accounting',

  seo: {
    title:
      'Accounting Firm Marketing & Digital Solutions | Bixeltek',
    description:
      'Digital solutions for accounting firms, CPAs and bookkeeping businesses. Improve your accounting website, SEO, service visibility, consultation enquiries and client onboarding workflows.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR ACCOUNTING FIRMS',
    title: 'Turn Online Searches Into',
    highlightedTitle: 'High-Value Retainer Clients',
    description:
      'Help individuals and businesses find the accounting services they need, evaluate your firm and enquire with confidence. We combine professional websites, SEO, conversion optimisation and lead management to support relevant consultations and long-term client relationships.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW ACCOUNTING CLIENTS CHOOSE A FIRM',

    title: (
      <>
        Financial Decisions Require Confidence.
        {' '}
      </>
    ),

    highlightedTitle:
      'Your Digital Presence Should Help Build It.',

    description:
      'Selecting an accounting firm requires evaluating technical rigor, regulatory jurisdiction, and proactive communication. When websites present generic lists of services without clarifying fee structures, industry specializations, or partner credentials, prospective clients hesitate. Clear explanations of engagement models and credentials establish trust before the first phone call.',
    secondaryDescription:
      'Bixeltek structures accounting websites around specific client needs—from ongoing bookkeeping and corporate tax strategy to audit representation. We align targeted search visibility with intuitive onboarding workflows, making it simple for business owners and high-net-worth individuals to evaluate your practice expertise and book confidential introductory consultations with ease.',
    imageSrc: accountingOverviewImg,

    imageAlt:
      'Professional accounting advisors reviewing financial documents and discussing business reporting with a client',

    features: [
      {
        title: 'Make the Right Accounting Service Easy to Find',
        description:
          'Help visitors distinguish between bookkeeping, tax, payroll, financial reporting and advisory services, with clear explanations of what your firm actually provides.',
      },
      {
        title: 'Demonstrate Professional Credibility',
        description:
          'Present verified qualifications, relevant experience, service processes and genuine client feedback to help prospective clients evaluate your practice.',
      },
      {
        title: 'Create a Clear Path to Consultation',
        description:
          'Make it straightforward to request an initial discussion, while supporting appropriate qualification, confidentiality and follow-up workflows.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions That Support Accounting Firm Growth',

    subheadline:
      'From helping clients understand your services to building professional credibility and improving enquiry management, we focus on the digital foundations that matter to accounting practices.',

    items: [
      {
        tag: '01 · ACCOUNTING WEBSITE DEVELOPMENT',

        title:
          'Build a Professional Website That Explains Your Services Clearly',

        description:
          'Accounting firms often serve clients with very different financial and compliance needs. We develop websites that organise services around actual practice areas, client types and jurisdictions. A business owner looking for outsourced bookkeeping should be able to find relevant information without navigating unrelated personal tax services. The experience should communicate your expertise, explain the next steps and make contact straightforward across desktop and mobile.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Professional service architecture',

        chips: [
          'Accounting website development',
          'Tax and bookkeeping service pages',
          'Business and individual client journeys',
          'Partner and team profiles',
          'Mobile-first UX',
          'Scalable CMS architecture',
        ],
      },

      {
        tag: '02 · SEO & SERVICE DISCOVERY',

        title:
          'Reach People Searching for Relevant Accounting Expertise',

        description:
          'Accounting searches often reflect a specific service, location or financial requirement. We improve local search visibility, service-page architecture, technical SEO and useful content around the work your firm is qualified to perform. For practices serving multiple business sectors or locations, we recommend dedicated pages only where they provide meaningful information. Suitable Google Ads campaigns can also support clearly defined services when search demand and economics justify them.',

        colSpan: 'col-span-2',
        accent: 'cyan',
        pill: 'Relevant client discovery',

        chips: [
          'Accounting firm SEO',
          'Local accounting searches',
          'Bookkeeping and tax service SEO',
          'Google Business Profile',
          'Technical and on-page SEO',
          'Google Search campaigns',
        ],
      },

      {
        tag: '03 · TRUST, EXPERTISE & CONTENT',

        title:
          'Help Prospective Clients Evaluate Your Firm With Confidence',

        description:
          'Accounting clients may share sensitive business and financial information, making credibility an important part of their decision. We help present verified professional credentials, team experience, service processes and approved client feedback. Useful articles and resources can explain accounting topics, filing processes and common business questions, provided the information is reviewed for accuracy and relevant jurisdictions. The goal is to demonstrate genuine expertise without making unsupported tax, savings or compliance claims.',

        colSpan: 'col-span-2',
        accent: 'teal',
        pill: 'Evidence-led credibility',

        chips: [
          'Verified professional credentials',
          'Partner and advisor profiles',
          'Accounting insights and resources',
          'Client-specific service content',
          'Genuine testimonials',
          'Clear engagement information',
        ],
      },

      {
        tag: '04 · CONSULTATIONS & CLIENT WORKFLOWS',

        title:
          'Turn Relevant Enquiries Into Organised Client Conversations',

        description:
          'An accounting enquiry may involve a one-time tax matter, recurring bookkeeping, business advisory work or a request to change accountants. We design suitable consultation forms and contact journeys that gather enough context for initial qualification without unnecessarily collecting confidential financial documents. Where supported, enquiries can connect with CRM, scheduling and notification systems. More sensitive document collection should use appropriately secured processes rather than ordinary marketing forms.',

        colSpan: 'col-span-2',
        accent: 'orange',
        pill: 'Connected client acquisition',

        chips: [
          'Consultation request forms',
          'Client enquiry qualification',
          'CRM integrations',
          'Meeting scheduling',
          'Lead notifications',
          'Secure onboarding pathways',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SERVICE SEARCH TO CLIENT CONSULTATION',

    headline:
      'Make It Easier for Clients to Choose the Right Accounting Firm',

    subheadline:
      'Accounting clients want clarity about services, confidence in professional expertise and an understandable process before beginning an engagement.',

    leftLabel: 'What Accounting Clients Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding the Right Accounting Service',

        industryStandard:
          'Clients may need bookkeeping, tax preparation, payroll, financial reporting or specialist advisory services. They want to identify a firm that actually handles their requirements.',

        ourApproach:
          'We organise service pages around genuine practice areas, explaining the scope of each service and guiding visitors toward the most relevant contact route.',
      },

      {
        feature: 'Checking Qualifications and Experience',

        industryStandard:
          'Prospective clients may review professional designations, licensing, team experience, industry knowledge and the types of clients a firm serves.',

        ourApproach:
          'We help present verified credentials, advisor profiles and relevant experience clearly, without suggesting authorisations or regulated capabilities that have not been confirmed.',
      },

      {
        feature: 'Understanding the Engagement Process',

        industryStandard:
          'Businesses and individuals may want to understand what information is required, how an engagement begins and whether support is ongoing or project-specific.',

        ourApproach:
          'We structure clear service explanations, onboarding information and consultation journeys that set realistic expectations about the initial process.',
      },

      {
        feature: 'Evaluating Trust and Confidentiality',

        industryStandard:
          'Clients may be concerned about sharing financial records, business information and personal details with a new accounting provider.',

        ourApproach:
          'We help communicate verified confidentiality practices and provide appropriate contact pathways, with sensitive document collection handled through suitable secured systems.',
      },

      {
        feature: 'Requesting a Consultation',

        industryStandard:
          'A business seeking ongoing accounting support may need a discovery conversation, while an individual with a specific tax question may require a more focused enquiry.',

        ourApproach:
          'We design relevant consultation forms and scheduling options that collect useful initial context without introducing unnecessary complexity or asking for sensitive financial data too early.',
      },

      {
        feature: 'Receiving Follow-Up and Next Steps',

        industryStandard:
          'Prospective clients want to know their enquiry was received, who will respond and what happens before an engagement can begin.',

        ourApproach:
          'We can connect suitable CRM and notification workflows to support enquiry ownership, appointment coordination and consistent follow-up, subject to the firm’s operational and privacy requirements.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Accounting Practice',

    subheadline:
      'We begin by understanding your services, ideal clients, jurisdictions and engagement process. Then we prioritise digital improvements that support relevant discovery, credibility and consultation enquiries.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Practice and Client Focus',

        summary:
          'We establish which accounting services you provide, who you serve and the types of client relationships you want to develop.',

        details: [
          'Review bookkeeping, tax, payroll and advisory services',
          'Identify business, individual and industry-specific client segments',
          'Understand jurisdictions, capacity and current onboarding processes',
        ],
      },

      {
        step: '02',

        title: 'Audit Your Website and Search Presence',

        summary:
          'We assess whether prospective clients can discover your firm, understand its expertise and make an enquiry with confidence.',

        details: [
          'Review local search visibility and existing marketing channels',
          'Assess service clarity, professional credibility and mobile usability',
          'Evaluate contact forms, privacy considerations and tracking gaps',
        ],
      },

      {
        step: '03',

        title: 'Plan the Service and Content Architecture',

        summary:
          'We organise the digital experience around the accounting services, client needs and search opportunities most relevant to your practice.',

        details: [
          'Map service pages and relevant client segments',
          'Plan useful resources and verified credibility content',
          'Prioritise SEO, website and suitable paid acquisition opportunities',
        ],
      },

      {
        step: '04',

        title: 'Improve the Website and Enquiry Journey',

        summary:
          'We implement the agreed changes to help visitors understand your services, evaluate your firm and request the appropriate next step.',

        details: [
          'Develop or refine accounting service pages',
          'Improve navigation, mobile usability and consultation CTAs',
          'Publish approved content and configure suitable landing pages',
        ],
      },

      {
        step: '05',

        title: 'Validate Tracking and Client Workflows',

        summary:
          'We test contact actions and review how new enquiries reach your team, with attention to confidentiality and data handling.',

        details: [
          'Test consultation forms, phone links and scheduling',
          'Validate supported analytics and conversion events',
          'Review CRM handoffs, notifications and secure onboarding routes',
        ],
      },

      {
        step: '06',

        title: 'Review Enquiry Quality and Refine',

        summary:
          'We assess available marketing data and feedback from your practice to improve relevant visibility, service content and enquiry handling.',

        details: [
          'Review enquiries by service, client type and acquisition channel',
          'Identify gaps in service content and consultation journeys',
          'Refine campaigns, SEO and workflows using reliable evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Accounting Search to Client Enquiry',

    items: [
      {
        value: 'Discover',

        label: 'Relevant accounting service visibility',

        subtext:
          'Review search visibility and visits to priority accounting, bookkeeping, tax and advisory pages in relevant markets.',
      },

      {
        value: 'Evaluate',

        label: 'Service and credibility engagement',

        subtext:
          'Assess how visitors interact with service information, professional profiles, resources and consultation options to identify useful patterns.',
      },

      {
        value: 'Enquire',

        label: 'Consultation and service requests',

        subtext:
          'Measure supported contact forms, calls and appointment requests. Review whether enquiries match your services, jurisdictions and client criteria.',
      },

      {
        value: 'Improve',

        label: 'Qualified opportunities and client acquisition',

        subtext:
          'Where reliable CRM data exists, review progression toward consultations, proposals and new engagements while respecting privacy and attribution limitations.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS ACCOUNTING FIRMS ASK',

    headline:
      'Digital Growth for Accounting Firms: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our accounting firm attract more clients?',

        answer:
          'We help accounting firms improve how potential clients discover their services, evaluate their expertise and request consultations. Depending on your current setup, this may include professional website development, local SEO, service pages, Google Ads, content strategy, conversion optimisation and CRM integrations. The focus is on relevant enquiries that match your practice areas and capacity rather than simply increasing website traffic.',
      },

      {
        question:
          'Is SEO important for accounting firms?',

        answer:
          'SEO can help accounting firms appear when businesses and individuals search for relevant accounting, bookkeeping, tax or advisory services. It can also support prospective clients who research a firm after receiving a referral. We focus on accurate service information, local visibility, technical SEO and useful content rather than promising specific rankings or results.',
      },

      {
        question:
          'Can you build a professional website for a CPA or chartered accountant firm?',

        answer:
          'Yes. We develop websites for accounting and advisory practices with structured service pages, professional profiles, firm information, useful resources and appropriate consultation routes. The website should reflect the firm’s actual qualifications, jurisdictions and authorised services. We recommend the technical approach based on content requirements, performance, integrations and long-term maintenance.',
      },

      {
        question:
          'Should we create separate pages for bookkeeping, tax, payroll and accounting services?',

        answer:
          'Separate pages are useful when services involve different client needs, search intent and engagement processes. A business looking for recurring bookkeeping support may need different information from someone seeking tax preparation or payroll services. We recommend focused pages for meaningful services your firm provides, avoiding repetitive content created solely for keyword variations.',
      },

      {
        question:
          'Can you help us attract business accounting clients instead of individual tax enquiries?',

        answer:
          'Yes. We can shape service content, search targeting, landing pages and enquiry forms around business accounting needs such as bookkeeping, reporting, payroll or outsourced finance support. The strategy should clearly explain which organisations your firm serves and the scope of its services. We can also review enquiry quality to understand whether the website is attracting your preferred client segments.',
      },

      {
        question:
          'Can you help accounting firms generate leads through Google Ads?',

        answer:
          'Google Ads may be suitable for clearly defined accounting services with relevant search demand. We assess competition, location, expected enquiry value, landing-page quality and advertising requirements before recommending campaigns. Some services or markets may be better served by SEO, referrals and professional credibility content. We do not assume paid advertising is the best approach for every accounting practice.',
      },

      {
        question:
          'How should an accounting website demonstrate trust and credibility?',

        answer:
          'A credible accounting website should make the firm’s services, professional qualifications, team experience and engagement process clear. Where permitted, genuine client feedback and relevant experience can provide additional context. We help present verified information without inventing certifications, suggesting unauthorised services or guaranteeing tax or financial outcomes.',
      },

      {
        question:
          'Can you help us publish accounting and tax-related content?',

        answer:
          'Yes. We can support the structure, presentation and publishing workflow for useful accounting resources, service explanations and articles. However, tax rules, accounting standards and filing obligations vary by jurisdiction and change over time. Technical financial and regulatory content should be reviewed and approved by qualified professionals within your firm before publication.',
      },

      {
        question:
          'Can you improve our existing accounting website without rebuilding it?',

        answer:
          'Yes. We first assess your existing platform, service structure, SEO foundations, mobile usability, credibility content and enquiry experience. If the website supports the necessary changes, targeted improvements may be more practical than a complete rebuild. We recommend rebuilding when technical or structural limitations prevent meaningful improvements.',
      },

      {
        question:
          'Can you integrate our website with a CRM or client onboarding system?',

        answer:
          'We can assess integrations with suitable CRM, scheduling and client management systems where supported APIs or connectors are available. Potential workflows include consultation requests, enquiry assignment, appointment coordination and onboarding notifications. Sensitive financial documents should be handled through appropriately secured systems, and implementation depends on your software and data protection requirements.',
      },

      {
        question:
          'Can you help accounting firms target clients in multiple locations or countries?',

        answer:
          'We can develop suitable service and geographic content based on the markets your firm genuinely serves. International accounting and tax services require particular care because professional qualifications, licensing and regulatory requirements vary. We ensure the website structure reflects confirmed service coverage and avoid suggesting your firm is authorised to provide services in jurisdictions where it is not.',
      },

      {
        question:
          'How do you measure the quality of accounting enquiries?',

        answer:
          'We can measure supported calls, consultation forms and scheduling actions, then review available information about service relevance and client type. Where reliable CRM data exists, reporting may also examine progression toward consultations, proposals and new engagements. We avoid using confidential financial information for unnecessary marketing analysis and recognise that not every new client can be attributed to a single channel.',
      },

      {
        question:
          'How much does an accounting website or digital marketing project cost?',

        answer:
          'Costs depend on your practice size, service structure, target markets, existing website, content needs and technical integrations. A focused local SEO project differs from a complete website rebuild with multiple service pages, resources and CRM workflows. Share your current website, main services, jurisdictions and ideal clients so we can recommend an appropriate scope and investment.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Accounting Expertise',

    subheadline:
      'Whether you need a stronger accounting website, clearer service pages, better search visibility or a more organised consultation process, we can help identify the digital improvements worth prioritising for your firm.',

    bulletPoints: [
      'Present accounting services and professional expertise clearly',
      'Improve relevant search visibility and local discovery',
      'Make consultations and client enquiries easier',
      'Connect enquiry workflows with suitable CRM and onboarding tools',
    ],

    buttonText:
      'Discuss Your Accounting Business',
  },
};

export const accountingPage = accountingV2Data;
export const accountingPageV2 = accountingV2Data;
export default accountingPage;
