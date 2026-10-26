
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER:
// Replace with an approved consulting-specific visual.
// Prefer an authentic consulting workshop, executive
// discussion or professional advisory setting.
import consultingOverviewImg from '@/assets/consulting-overview.jpg';

/**
 * Bixeltek — Consulting Industry Page
 *
 * Category: Business & Professional
 *
 * Target businesses:
 * - Management consulting firms
 * - Business advisory companies
 * - Strategy consulting firms
 * - Operations and process consultants
 * - Technology and digital advisory firms
 * - Independent and specialist consultants
 * - Multi-disciplinary consulting practices
 *
 * Primary customer journey:
 * Discover -> Understand Expertise ->
 * Evaluate Credibility -> Explore Insights ->
 * Request Consultation -> Qualification
 *
 * Core priorities:
 * Professional positioning, service architecture,
 * thought leadership, SEO, credibility,
 * qualified enquiries and CRM workflows.
 *
 * All credentials, client references, case studies
 * and performance claims must be verified.
 */

export const consultingV2Data: IndustryPageData = {
  slug: 'consulting',
  aliases: [
    'consulting-firms',
    'business-consulting',
    'management-consulting',
    'consulting-companies',
  ],

  industryName: 'Consulting',

  seo: {
    title:
      'Consulting Firm Marketing & Digital Solutions | Bixeltek',
    description:
      'Digital solutions for consulting firms and business advisors. Build a stronger consulting website, improve SEO, showcase expertise, publish insights and generate qualified consultation enquiries.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR CONSULTING FIRMS',
    title: 'Turn Advisory Expertise Into',
    highlightedTitle: 'Client Engagements',
    description:
      'Help business leaders discover your consulting expertise, understand your services and connect with confidence. We combine professional websites, SEO, thought leadership and lead management to support meaningful consulting enquiries.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'HOW CONSULTING CLIENTS MAKE DECISIONS',

    title: (
      <>
        Clients Are Not Just Buying Advice.
        {' '}
      </>
    ),

    highlightedTitle:
      'They Are Choosing Who to Trust With Important Decisions.',

    description:
      'Retaining an advisory firm involves substantial financial and operational scrutiny. Decision-makers need to verify domain expertise, methodology, and past outcomes before reaching out. When consulting websites rely on vague corporate buzzwords instead of demonstrable case studies, prospective executives hesitate, delaying conversations or selecting more transparent competitors.',
    secondaryDescription:
      'Bixeltek sharpens advisory positioning by organizing complex consulting capabilities into focused practice areas, evidence-led case studies, and thoughtful executive content. We optimize your organic search footprint and consultation funnels so enterprise leaders can readily validate your track record and initiate confidential introductory discussions with complete confidence.',
    imageSrc: consultingOverviewImg,

    imageAlt:
      'Business consultants and executives discussing strategy and reviewing business information during a professional advisory meeting',

    features: [
      {
        title: 'Communicate Your Specialisation Clearly',
        description:
          'Help prospective clients understand the problems your firm addresses, the industries you serve and the consulting capabilities you provide without relying on broad, interchangeable claims.',
      },
      {
        title: 'Demonstrate Expertise Through Useful Evidence',
        description:
          'Present relevant case studies, methodologies, team experience and original insights so decision-makers can evaluate your approach before starting a conversation.',
      },
      {
        title: 'Create a More Relevant Consultation Journey',
        description:
          'Guide visitors from service exploration to an appropriate consultation or project enquiry, with suitable qualification and CRM workflows for your business development team.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Capabilities That Support Consulting Firm Growth',

    subheadline:
      'We focus on the digital foundations that help consulting firms explain their expertise, earn consideration and connect with organisations that need their services.',

    items: [
      {
        tag: '01 · CONSULTING WEBSITE DEVELOPMENT',

        title:
          'Build a Website That Communicates What Your Firm Actually Does',

        description:
          'Consulting websites often rely on broad language about transformation, innovation and business growth without explaining the work behind those promises. We create clear service architecture around your consulting disciplines, client challenges, industries and engagement models. Visitors should be able to understand what you advise on, who you work with and how to start a relevant conversation. The website is designed for credibility, usability and future content expansion.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Expertise-led positioning',

        chips: [
          'Corporate website development',
          'Consulting service pages',
          'Industry expertise pages',
          'Partner and leadership profiles',
          'Engagement model content',
          'Scalable CMS architecture',
        ],
      },

      {
        tag: '02 · THOUGHT LEADERSHIP & CREDIBILITY',

        title:
          'Give Decision-Makers a Reason to Trust Your Perspective',

        description:
          'Consulting clients often evaluate how a firm thinks before deciding whether to engage it. We help structure useful insights, research articles, methodologies and approved client case studies around the questions your audience is trying to answer. Rather than publishing generic content for volume, the focus is on demonstrating practical understanding, relevant experience and a distinctive point of view supported by genuine evidence.',

        colSpan: 'col-span-2',
        accent: 'teal',
        pill: 'Evidence-led authority',

        chips: [
          'Thought leadership articles',
          'Consulting case studies',
          'Research and insights hubs',
          'Methodology pages',
          'Verified client experience',
          'Leadership expertise',
        ],
      },

      {
        tag: '03 · SEO & TARGETED DISCOVERY',

        title:
          'Reach Organisations Researching the Problems You Solve',

        description:
          'Prospective consulting clients may begin with a specific business challenge rather than searching for a consulting firm by name. We develop relevant search visibility through focused service pages, useful problem-led content, technical SEO and appropriate industry or geographic pages. Where paid acquisition is commercially justified, we can support targeted search campaigns and dedicated landing pages. The strategy prioritises relevance and client fit over attracting broad, low-intent traffic.',

        colSpan: 'col-span-2',
        accent: 'cyan',
        pill: 'Intent-led visibility',

        chips: [
          'Consulting services SEO',
          'Problem-led search content',
          'Industry-specific landing pages',
          'Technical and on-page SEO',
          'Google Search campaigns',
          'Content architecture',
        ],
      },

      {
        tag: '04 · CONSULTATION JOURNEYS & CRM',

        title:
          'Turn Relevant Interest Into Better Business Conversations',

        description:
          'Consulting engagements often begin with a discovery call, referral introduction, workshop request or project discussion. We design consultation journeys that make the next step clear without pressuring visitors into generic lead forms. Where appropriate, enquiries can capture the consulting need, organisation type and project context, then connect with suitable CRM, scheduling and notification workflows. This helps your team evaluate opportunities and maintain consistent follow-up.',

        colSpan: 'col-span-2',
        accent: 'orange',
        pill: 'Qualified business development',

        chips: [
          'Consultation request forms',
          'Discovery call scheduling',
          'Project enquiry qualification',
          'CRM integrations',
          'Lead routing and notifications',
          'Conversion analytics',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM EXPERTISE DISCOVERY TO CONSULTATION',

    headline:
      'Help Potential Clients Understand Why Your Firm Is Relevant',

    subheadline:
      'Consulting buyers need more than a polished corporate website. They need clarity about your expertise, confidence in your approach and a practical way to explore working together.',

    leftLabel:
      'What Consulting Clients Need',

    rightLabel:
      'How We Help',

    featureLabel:
      'Part of the Journey',

    rightTag:
      'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature:
          'Recognising Relevant Expertise',

        industryStandard:
          'Business leaders may be researching a specific strategic, operational or technical challenge. They need to identify firms with relevant capabilities rather than navigate broad descriptions of consulting services.',

        ourApproach:
          'We organise consulting services around actual specialisations, business challenges and client needs, helping visitors understand whether your expertise is relevant to their situation.',
      },

      {
        feature:
          'Understanding Your Consulting Approach',

        industryStandard:
          'Clients often want to know how a firm diagnoses problems, develops recommendations and supports implementation before discussing an engagement.',

        ourApproach:
          'We help explain your approved methodologies, engagement stages, deliverables and working principles in accessible language without exposing confidential intellectual property.',
      },

      {
        feature:
          'Evaluating Experience and Credibility',

        industryStandard:
          'Prospective clients may review leadership experience, relevant industries, case studies, professional credentials and client references before trusting a consulting firm.',

        ourApproach:
          'We present verified team information, approved project examples and genuine evidence of experience in a structure that supports informed evaluation.',
      },

      {
        feature:
          'Exploring Insights Before Making Contact',

        industryStandard:
          'Some decision-makers spend time reading articles, research and practical guidance to assess whether a consulting firm understands their challenges.',

        ourApproach:
          'We create structured insights and resource sections that connect useful expertise with relevant consulting services, making deeper exploration possible without unnecessary promotional content.',
      },

      {
        feature:
          'Starting a Relevant Business Conversation',

        industryStandard:
          'A consulting prospect may want an introductory call, a capability discussion or a proposal for a defined project. They may not be ready to submit a detailed brief immediately.',

        ourApproach:
          'We design appropriate contact options, consultation forms and scheduling journeys that gather useful context while keeping the first interaction straightforward.',
      },

      {
        feature:
          'Managing the Evaluation and Follow-Up',

        industryStandard:
          'Consulting decisions can involve several stakeholders, internal approvals and a longer evaluation period before an engagement begins.',

        ourApproach:
          'We can connect enquiries with suitable CRM workflows and measurement systems to support lead ownership, qualification and follow-up without treating every website interaction as a sales-ready opportunity.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Consulting Expertise',

    subheadline:
      'We start by understanding your advisory services, ideal clients and business development process. Then we improve how your firm communicates its expertise and converts relevant interest into conversations.',

    steps: [
      {
        step: '01',

        title:
          'Understand Your Firm and Consulting Services',

        summary:
          'We identify your specialisations, target clients, industry focus and business development priorities before planning the digital strategy.',

        details: [
          'Review consulting disciplines, engagement models and service scope',
          'Identify ideal clients, industries and geographic markets',
          'Understand referrals, proposals and existing consultation workflows',
        ],
      },

      {
        step: '02',

        title:
          'Audit Positioning and Digital Experience',

        summary:
          'We assess whether your current digital presence communicates your expertise clearly and supports how prospective clients evaluate your firm.',

        details: [
          'Review website positioning, navigation and service clarity',
          'Assess case studies, insights, leadership profiles and credibility',
          'Evaluate search visibility, enquiry journeys and analytics',
        ],
      },

      {
        step: '03',

        title:
          'Plan the Expertise and Content Architecture',

        summary:
          'We organise your website around the questions, challenges and decision criteria that matter to your target clients.',

        details: [
          'Map consulting service and industry pages',
          'Plan useful case studies, insights and methodology content',
          'Prioritise SEO and acquisition opportunities based on client intent',
        ],
      },

      {
        step: '04',

        title:
          'Develop the Website and Discovery Journey',

        summary:
          'We implement the agreed improvements so visitors can understand your expertise, explore relevant evidence and take the next step.',

        details: [
          'Build or refine consulting service and industry pages',
          'Develop insight hubs, case-study templates and leadership sections',
          'Improve consultation CTAs, landing pages and mobile usability',
        ],
      },

      {
        step: '05',

        title:
          'Connect Tracking and Consultation Workflows',

        summary:
          'We validate important contact actions and assess how enquiries move into your business development process.',

        details: [
          'Test consultation requests, forms and scheduling journeys',
          'Configure supported analytics and conversion tracking',
          'Review CRM integration, notifications and lead qualification',
        ],
      },

      {
        step: '06',

        title:
          'Review Enquiry Quality and Refine',

        summary:
          'We evaluate available marketing data and business feedback to improve relevance, content effectiveness and consultation journeys.',

        details: [
          'Review enquiries by consulting service, market and channel',
          'Identify gaps in expertise content and conversion journeys',
          'Refine SEO, campaigns and workflows based on reliable findings',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Expertise Discovery to Consulting Opportunity',

    items: [
      {
        value: 'Discover',

        label:
          'Relevant consulting visibility',

        subtext:
          'Review search visibility and visits to priority consulting service, industry and problem-led content pages.',
      },

      {
        value: 'Evaluate',

        label:
          'Expertise and credibility engagement',

        subtext:
          'Assess engagement with case studies, methodologies, leadership profiles and insight content to identify useful patterns and potential friction.',
      },

      {
        value: 'Enquire',

        label:
          'Consultations and project discussions',

        subtext:
          'Measure supported consultation forms, discovery call requests and relevant contact actions. Validate whether enquiries align with your consulting capabilities.',
      },

      {
        value: 'Improve',

        label:
          'Qualified opportunities and pipeline progression',

        subtext:
          'Where reliable CRM data exists, review progression toward qualified discussions, proposals and engagements while recognising long sales cycles and incomplete attribution.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS CONSULTING FIRMS ASK',

    headline:
      'Digital Growth for Consulting Firms: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our consulting firm attract more relevant clients?',

        answer:
          'We help consulting firms communicate their expertise more clearly, improve relevant search visibility and create better consultation journeys. Depending on your needs, this may include corporate website development, consulting service pages, SEO, thought leadership content, case-study architecture, conversion optimisation and CRM integration. The focus is on attracting organisations whose needs align with your advisory capabilities rather than maximising generic lead volume.',
      },

      {
        question:
          'Do consulting firms need SEO if most business comes through referrals?',

        answer:
          'SEO can still be valuable because referred prospects often research a consulting firm before making contact. A clear, discoverable website helps them verify services, experience and credibility. Search visibility may also support new client discovery for relevant consulting challenges. The right investment depends on how your target clients research advisors and how much demand exists for your specialisations.',
      },

      {
        question:
          'Can you build a professional website for our consulting firm?',

        answer:
          'Yes. We develop consulting websites with service pages, industry expertise sections, leadership profiles, insights, case studies and relevant enquiry routes. The architecture is designed around your firm’s actual services and business model. We recommend the technical approach based on content management needs, performance, integrations and long-term maintainability.',
      },

      {
        question:
          'How should a consulting firm present its services on its website?',

        answer:
          'Consulting services should explain the business challenges they address, the scope of advisory work, the types of organisations they serve and how engagements typically begin. We recommend organising services around meaningful specialisations rather than relying on broad descriptions that could apply to any firm. Where relevant, supporting industry pages, methodologies and case studies can help visitors evaluate fit.',
      },

      {
        question:
          'How important are case studies for consulting firms?',

        answer:
          'Case studies can help prospective clients understand how your firm approaches real business challenges. Useful examples may explain the client context, problem, scope of engagement, methodology and verified outcomes. Confidentiality is especially important in consulting, so we can structure anonymised case studies or capability examples where client approval or disclosure restrictions require it. We do not invent results or imply client endorsement without permission.',
      },

      {
        question:
          'Can you help us build thought leadership and an insights section?',

        answer:
          'Yes. We can help structure an insights hub and develop suitable content workflows for articles, research summaries, practical guidance and consulting perspectives. Strong thought leadership should reflect genuine expertise and provide value to the intended audience. We recommend prioritising useful, well-supported material rather than publishing large volumes of generic content.',
      },

      {
        question:
          'Should we create separate pages for each consulting industry we serve?',

        answer:
          'Industry pages can be useful when your firm has meaningful experience, distinct service applications or specific challenges to address within a sector. For example, operational consulting for manufacturing companies may involve different requirements from advisory work for professional services businesses. We recommend dedicated pages where they can provide relevant insight and evidence, not simply repeat generic consulting copy with different industry names.',
      },

      {
        question:
          'Can you help our consulting firm generate B2B enquiries through Google Ads?',

        answer:
          'Google Ads can be useful for consulting services with identifiable search demand and clear commercial intent. However, some highly specialised advisory engagements are more relationship-driven and may not benefit from broad paid search campaigns. We assess relevant search terms, competition, budgets, landing-page readiness and the potential value of enquiries before recommending paid acquisition.',
      },

      {
        question:
          'Can you improve our current consulting website instead of rebuilding it?',

        answer:
          'Yes. We first assess your existing website, service architecture, positioning, mobile usability, SEO foundations and enquiry experience. If the current platform supports the necessary improvements, targeted changes may be more practical than a rebuild. A new website becomes relevant when technical limitations or structural problems prevent the firm from presenting and maintaining its content effectively.',
      },

      {
        question:
          'Can you connect consultation requests with our CRM or scheduling software?',

        answer:
          'We can assess integrations with suitable CRM, scheduling and business development tools where supported APIs or connectors are available. Potential workflows include consultation notifications, enquiry assignment, meeting requests and lead status tracking. The implementation depends on your existing software, access permissions and internal process. Sensitive client information should be collected and handled appropriately.',
      },

      {
        question:
          'How do you measure whether consulting marketing is working?',

        answer:
          'We can measure relevant search visibility, service-page engagement, consultation requests and supported conversion actions. Where reliable CRM data exists, reporting may also examine lead relevance, qualified discussions, proposals and engagement progression. Consulting decisions can involve referrals, multiple stakeholders and long sales cycles, so we distinguish measurable digital signals from confirmed commercial outcomes.',
      },

      {
        question:
          'How much does a consulting website or digital marketing project cost?',

        answer:
          'Costs depend on your firm’s size, service structure, website requirements, content availability, target markets and technical integrations. A focused positioning and website improvement project differs from a complete corporate website with an insights hub, case-study library, SEO and CRM workflows. Share your current website, consulting services, target clients and business development goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Consulting Expertise',

    subheadline:
      'Whether you need clearer positioning, a stronger consulting website, better search visibility or a more effective consultation journey, we can help identify the improvements worth prioritising for your firm.',

    bulletPoints: [
      'Communicate consulting services and specialisations clearly',
      'Build credibility through genuine expertise and case studies',
      'Improve relevant search visibility and consultation journeys',
      'Connect enquiries with suitable CRM and reporting workflows',
    ],

    buttonText:
      'Discuss Your Consulting Business',
  },
};

export const consultingPage = consultingV2Data;
export const consultingPageV2 = consultingV2Data;
export default consultingPage;
