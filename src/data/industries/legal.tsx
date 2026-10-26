
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved legal-industry visual.
// Prefer an authentic law office, legal consultation
// or professional legal team photograph.
import legalOverviewImg from '@/assets/legal-overview.jpg';

/**
 * Bixeltek — Legal Industry Page
 *
 * Category: Business & Professional
 *
 * Target businesses:
 * - Law firms and legal practices
 * - Corporate and commercial law firms
 * - Litigation and dispute resolution practices
 * - Property and real estate law firms
 * - Family and estate law practices
 * - Immigration law firms
 * - Independent legal professionals
 *
 * Primary customer journey:
 * Identify Legal Need -> Find Relevant Practice ->
 * Evaluate Credentials -> Understand Process ->
 * Make Confidential Enquiry -> Consultation
 *
 * Core priorities:
 * Professional credibility, practice-area clarity,
 * compliant visibility, website experience,
 * appropriate enquiries and secure workflows.
 *
 * IMPORTANT:
 * Legal advertising, solicitation, testimonials,
 * specialisation claims and client confidentiality
 * are subject to jurisdiction-specific rules.
 *
 * All legal content and professional claims must
 * be reviewed by the responsible legal practice.
 */

export const legalV2Data: IndustryPageData = {
  slug: 'legal',

  aliases: [
    'legal-services',
    'law-firms',
    'lawyers',
    'legal-practices',
  ],

  industryName: 'Legal',

  seo: {
    title:
      'Law Firm Websites & Digital Solutions | Bixeltek',

    description:
      'Digital solutions for law firms and legal professionals. Explore professional legal websites, practice-area SEO, credibility-focused content, consultation journeys and secure enquiry workflows.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR LAW FIRMS',

    title: 'Turn Legal Searches Into',
    highlightedTitle: 'Client Consultations',

    description:
      'Help individuals and businesses understand your legal services, evaluate your practice and find the right way to contact your team. We develop professional websites, structured practice-area content and digital workflows with attention to credibility, confidentiality and applicable professional rules.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW PEOPLE CHOOSE LEGAL REPRESENTATION',

    title: (
      <>
        Legal Decisions Require Trust.
        {' '}
      </>
    ),

    highlightedTitle:
      'Your Website Should Help People Make an Informed Choice.',

    description:
      'Clients seeking legal counsel face stressful, unfamiliar circumstances across corporate disputes, estate planning, or litigation. When law firm websites obscure attorney backgrounds, jurisdictional scope, or initial intake procedures behind generic statements, prospective clients hesitate. Clear practice-area guidance and transparent consultation steps provide the reassurance needed to initiate contact.',
    secondaryDescription:
      'Bixeltek organizes legal websites into clear practice hierarchies, verified attorney bios, and compliant inquiry mechanisms. We strengthen local and practice-specific search presence while respecting strict professional conduct rules, ensuring qualified commercial and individual clients can readily navigate your firm\'s expertise and book confidential case evaluations.',
    imageSrc: legalOverviewImg,

    imageAlt:
      'Legal professionals discussing documents during a confidential client consultation in a professional law office',

    features: [
      {
        title: 'Make Legal Practice Areas Understandable',

        description:
          'Help visitors identify relevant legal services, understand the general scope of your practice and determine whether your firm handles matters in their jurisdiction.',
      },

      {
        title: 'Present Verified Professional Credibility',

        description:
          'Communicate lawyer profiles, qualifications, admissions, relevant experience and firm information accurately, subject to applicable professional rules.',
      },

      {
        title: 'Support Appropriate and Confidential Enquiries',

        description:
          'Provide clear consultation routes and intake guidance without unnecessarily collecting sensitive information or implying that an enquiry automatically creates a lawyer-client relationship.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Foundations for a Credible Legal Practice',

    subheadline:
      'We focus on the capabilities that help people understand your services, evaluate your practice and make contact appropriately, while accounting for legal advertising and confidentiality requirements.',

    items: [
      {
        tag: '01 · LAW FIRM WEBSITE DEVELOPMENT',

        title:
          'Build a Professional Website Around Your Legal Practice',

        description:
          'A law firm website should help visitors find the relevant practice area, understand the firm’s services and identify the right next step. We develop clear website architecture for practice areas, lawyer profiles, office locations, firm information and consultation pathways. For multi-practice or multi-location firms, the structure can support different teams and jurisdictions without presenting services or professional authorisations inaccurately.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Professional legal website',

        chips: [
          'Law firm website development',
          'Practice-area architecture',
          'Lawyer and partner profiles',
          'Office and jurisdiction pages',
          'Accessible mobile UX',
          'Scalable CMS development',
        ],
      },

      {
        tag: '02 · PRACTICE-AREA SEO & DISCOVERY',

        title:
          'Help People Find Relevant Legal Information and Services',

        description:
          'Legal searches often begin with a specific question, practice area or jurisdiction. Where permitted, we improve technical SEO, practice-area organisation, local visibility and useful informational content. The strategy prioritises accurate explanations and relevant search intent rather than aggressive claims, misleading location pages or unsupported promises. Paid campaigns are considered only where applicable professional and advertising rules permit them.',

        colSpan: 'col-span-2',
        accent: 'cyan',
        pill: 'Jurisdiction-aware visibility',

        chips: [
          'Legal practice-area SEO',
          'Technical and on-page SEO',
          'Local search visibility',
          'Jurisdiction-specific content',
          'Legal information architecture',
          'Policy-reviewed acquisition',
        ],
      },

      {
        tag: '03 · CREDIBILITY & LEGAL CONTENT',

        title:
          'Communicate Professional Experience Without Overstating Claims',

        description:
          'Prospective clients need confidence in the people and practice they are considering. We help present verified professional qualifications, relevant experience, firm history and approved service information. Useful articles and FAQs can explain general legal processes and common questions, with substantive legal content reviewed by qualified professionals. Client testimonials, case outcomes, specialist designations and comparative claims are used only where accurate and permitted by the relevant rules.',

        colSpan: 'col-span-2',
        accent: 'teal',
        pill: 'Verified professional credibility',

        chips: [
          'Lawyer biographies',
          'Verified admissions and qualifications',
          'Practice-area explanations',
          'Legal insights and FAQs',
          'Approved experience summaries',
          'Professional content review',
        ],
      },

      {
        tag: '04 · CLIENT INTAKE & WORKFLOW INTEGRATION',

        title:
          'Make Initial Legal Enquiries Clearer and More Organised',

        description:
          'Legal enquiries can involve confidential circumstances, conflicts of interest and matters requiring timely attention. We design appropriate contact and consultation journeys that gather only necessary initial information, explain the next steps and avoid requesting detailed confidential documents through ordinary marketing forms. Where suitable, we can integrate scheduling, notifications and approved intake or practice management systems, with security and privacy requirements assessed before implementation.',

        colSpan: 'col-span-2',
        accent: 'orange',
        pill: 'Responsible client intake',

        chips: [
          'Consultation request forms',
          'Practice-area enquiry routing',
          'Scheduling integrations',
          'Conflict-check handoff',
          'Secure intake pathways',
          'Practice management integration',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM LEGAL RESEARCH TO INITIAL CONSULTATION',

    headline:
      'Help Prospective Clients Find the Right Information and Next Step',

    subheadline:
      'Legal clients need clarity about practice areas, professional credentials, jurisdiction and confidentiality before discussing a matter with a law firm.',

    leftLabel: 'What Legal Clients Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Identifying the Relevant Practice Area',

        industryStandard:
          'A prospective client may be unsure whether their matter falls under corporate, property, family, employment, immigration or another area of law.',

        ourApproach:
          'We organise actual practice areas clearly, with accessible explanations and relevant navigation so visitors can understand whether the firm handles their type of matter.',
      },

      {
        feature: 'Confirming Jurisdiction and Service Coverage',

        industryStandard:
          'Legal services depend on applicable laws, professional admissions and jurisdiction. Clients need to know whether the firm can assist with matters in the relevant location.',

        ourApproach:
          'We present verified office information, practice coverage and professional admissions without implying that lawyers are authorised in jurisdictions where they are not.',
      },

      {
        feature: 'Evaluating Professional Credentials',

        industryStandard:
          'Prospective clients may review lawyer qualifications, professional experience, firm history and permitted evidence of relevant work.',

        ourApproach:
          'We develop accurate lawyer profiles and credibility content based on information approved by the firm and consistent with applicable professional advertising rules.',
      },

      {
        feature: 'Understanding the Initial Legal Process',

        industryStandard:
          'Clients often want to know how to request a consultation, what information is needed and whether fees or eligibility requirements apply.',

        ourApproach:
          'We help explain the firm’s actual consultation and intake process, including appropriate fee information and limitations where confirmed by the practice.',
      },

      {
        feature: 'Making an Appropriate Confidential Enquiry',

        industryStandard:
          'Clients may hesitate to share sensitive information online and may not understand whether contacting a firm establishes a professional relationship.',

        ourApproach:
          'We create clear contact pathways, appropriate notices and minimal initial forms, with secure intake options for sensitive information where suitable systems are available.',
      },

      {
        feature: 'Receiving Clear Next Steps',

        industryStandard:
          'After contacting a firm, prospective clients need to understand the next stage, which may include conflict checks, eligibility assessment or scheduling.',

        ourApproach:
          'We can connect enquiry notifications and intake workflows to help the firm manage initial requests without bypassing conflict checks or implying that representation has been accepted.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Approach Built Around Your Legal Practice',

    subheadline:
      'We begin with your practice areas, jurisdictions and professional requirements. Then we improve the website, content and intake experience within an agreed and appropriately reviewed scope.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Practice and Requirements',

        summary:
          'We establish your legal services, professional jurisdictions, intended audience and applicable digital communication constraints.',

        details: [
          'Review practice areas, office locations and client categories',
          'Identify applicable advertising, solicitation and content restrictions',
          'Understand consultation, conflict-check and client intake procedures',
        ],
      },

      {
        step: '02',

        title: 'Audit the Existing Digital Presence',

        summary:
          'We review whether your website communicates the practice accurately and supports accessible, appropriate contact journeys.',

        details: [
          'Assess navigation, practice-area pages and lawyer profiles',
          'Review technical SEO, performance and accessibility',
          'Examine contact forms, notices, privacy and intake pathways',
        ],
      },

      {
        step: '03',

        title: 'Plan the Content and Website Structure',

        summary:
          'We organise approved information around practice areas, professional profiles, jurisdictions and the questions prospective clients need answered.',

        details: [
          'Map relevant practice-area and office pages',
          'Plan approved biographies, FAQs and informational resources',
          'Define content review and jurisdiction-specific approval requirements',
        ],
      },

      {
        step: '04',

        title: 'Develop the Professional Website Experience',

        summary:
          'We implement the agreed design and content improvements with attention to accuracy, usability and professional presentation.',

        details: [
          'Build or improve practice-area and lawyer profile pages',
          'Implement accessible navigation and mobile-friendly layouts',
          'Develop approved consultation and contact pathways',
        ],
      },

      {
        step: '05',

        title: 'Validate Enquiry and Privacy Workflows',

        summary:
          'We test website contact actions and review how information moves into the firm’s existing intake process.',

        details: [
          'Test forms, scheduling links and enquiry notifications',
          'Review privacy notices, secure handoffs and data minimisation',
          'Validate permitted analytics without exposing sensitive matter details',
        ],
      },

      {
        step: '06',

        title: 'Review, Maintain and Improve',

        summary:
          'We assess available website performance and firm feedback while ensuring that ongoing content changes receive appropriate professional review.',

        details: [
          'Review relevant page engagement and supported enquiry events',
          'Identify usability and information gaps',
          'Maintain approved content and refine suitable digital workflows',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Legal Information to Appropriate Enquiry',

    items: [
      {
        value: 'Discover',

        label: 'Relevant practice-area visibility',

        subtext:
          'Review permitted search visibility and visits to relevant practice-area, lawyer and office pages.',
      },

      {
        value: 'Understand',

        label: 'Service information and website usability',

        subtext:
          'Assess aggregate engagement with practice-area information, professional profiles and consultation guidance without analysing confidential matter details.',
      },

      {
        value: 'Enquire',

        label: 'Initial consultation requests',

        subtext:
          'Measure supported contact actions and form submissions where appropriate, while respecting professional obligations, privacy and data minimisation.',
      },

      {
        value: 'Improve',

        label: 'Client intake experience',

        subtext:
          'Use suitable aggregate feedback to improve navigation, information clarity and intake workflows without treating every enquiry as an accepted client relationship.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS LAW FIRMS ASK',

    headline:
      'Digital Solutions for Law Firms: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our law firm improve its digital presence?',

        answer:
          'We help law firms develop professional websites, organise practice-area information, improve usability and create clearer contact journeys. Where applicable professional rules permit, we can also support SEO, informational content and appropriately scoped digital acquisition. Our role is to improve the digital experience and technical implementation, while the law firm remains responsible for approving legal content, professional claims and jurisdiction-specific compliance.',
      },

      {
        question:
          'Can you build a professional website for our law firm?',

        answer:
          'Yes. We develop law firm websites with practice-area pages, lawyer profiles, office information, firm history, approved resources and appropriate consultation routes. The architecture can support multiple lawyers, practice groups and locations. We recommend the technology based on content management needs, security requirements, accessibility, integrations and long-term maintainability.',
      },

      {
        question:
          'Are law firms allowed to advertise or use SEO?',

        answer:
          'The rules vary significantly by jurisdiction and professional regulator. Some jurisdictions permit lawyer advertising subject to restrictions, while others impose strict limitations on promotional activity and solicitation. SEO-related technical improvements and factual website content may also need to be evaluated under local professional rules. We do not assume that an advertising strategy permitted in one country is acceptable elsewhere. The responsible law firm should confirm the applicable requirements before implementation.',
      },

      {
        question:
          'Can you help our law firm appear in relevant Google searches?',

        answer:
          'Where permitted, we can improve technical SEO, website structure, practice-area content and relevant local business information. The objective is to make accurate, useful information easier to discover, not to promise rankings or generate misleading claims. Any acquisition strategy is reviewed against applicable professional rules before launch.',
      },

      {
        question:
          'Should we create separate pages for different legal practice areas?',

        answer:
          'Dedicated practice-area pages are useful when they explain genuinely different legal services and help visitors identify the appropriate team. For example, corporate transactions, employment disputes and estate planning involve different questions and processes. We recommend separate pages for services the firm actually provides, with accurate jurisdiction information and professional review.',
      },

      {
        question:
          'Can you create individual lawyer and partner profile pages?',

        answer:
          'Yes. We can develop structured professional profiles featuring approved biographies, qualifications, admissions, practice areas and relevant experience. Information about specialisation, awards, rankings and professional status should be accurate, verifiable and permitted under the applicable rules. We avoid unsupported comparative claims or implied guarantees.',
      },

      {
        question:
          'Can you help us publish legal articles and FAQs?',

        answer:
          'Yes. We can build the content architecture and publishing workflow for general legal information, insights and frequently asked questions. Because laws vary by jurisdiction and change over time, substantive legal content must be reviewed and approved by appropriately qualified legal professionals. General information should not be presented as personalised legal advice.',
      },

      {
        question:
          'Can you improve our existing law firm website without rebuilding it?',

        answer:
          'Yes. We first assess the existing platform, practice-area structure, mobile usability, accessibility, technical SEO, performance and contact experience. Targeted improvements may be sufficient if the current website supports them. A rebuild may be appropriate where technical limitations, security concerns or content architecture prevent meaningful improvements.',
      },

      {
        question:
          'How do you handle confidentiality in legal enquiry forms?',

        answer:
          'We recommend collecting only the information needed for an initial enquiry and avoiding unnecessary confidential details or document uploads through ordinary marketing forms. Where appropriate, we can implement clear notices, secure intake pathways and integrations with approved systems. Technical safeguards and data handling requirements must be assessed against the firm’s professional obligations and applicable privacy laws.',
      },

      {
        question:
          'Can our website connect with legal practice management software?',

        answer:
          'We can assess integrations with suitable practice management, scheduling and intake systems where supported APIs or connectors are available. Potential workflows include initial enquiry routing, appointment requests and notifications. Any integration involving confidential information requires careful review of access controls, security, data retention and professional obligations. We do not recommend bypassing existing conflict-check or client acceptance procedures.',
      },

      {
        question:
          'Can you support law firms operating across multiple jurisdictions?',

        answer:
          'Yes. We can structure websites for multiple offices, practice groups and jurisdictions, provided the content accurately reflects where each professional is authorised to practise. Geographic pages and legal information should account for differences in local law and professional advertising rules. The firm must review and approve jurisdiction-specific claims before publication.',
      },

      {
        question:
          'Can you help us attract corporate and commercial legal enquiries?',

        answer:
          'We can develop clearer corporate and commercial practice-area pages, professional profiles, sector-specific information and suitable consultation journeys. Where marketing activity is permitted, relevant search visibility may also support discovery. The approach should reflect the firm’s actual experience, intended clients and professional restrictions rather than relying on broad lead-generation claims.',
      },

      {
        question:
          'How do you measure whether a law firm website is effective?',

        answer:
          'We can review permitted aggregate metrics such as relevant page visits, navigation patterns, supported contact actions and technical performance. Where appropriate, the firm may also provide feedback on whether enquiries reach the correct practice group. We avoid collecting unnecessary confidential matter information for marketing attribution and do not equate website enquiries with accepted client relationships or legal outcomes.',
      },

      {
        question:
          'How much does a law firm website or digital project cost?',

        answer:
          'Costs depend on the number of practice areas, lawyer profiles, office locations, content requirements, integrations, security considerations and ongoing maintenance needs. A focused website improvement project differs from a complete multi-practice corporate website with approved resources and intake integrations. Share your current website, practice structure, jurisdictions and technical requirements so we can recommend a suitable scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Presence That Reflects Your Legal Practice',

    subheadline:
      'Whether you need a more professional law firm website, clearer practice-area content, better usability or an improved client intake experience, we can help plan and implement the right digital foundations.',

    bulletPoints: [
      'Present legal practice areas and verified credentials clearly',
      'Improve website usability and relevant information discovery',
      'Create appropriate consultation and contact journeys',
      'Connect approved intake workflows with suitable systems',
    ],

    buttonText:
      'Discuss Your Law Firm Website',
  },
};

export const legalPage = legalV2Data;
export const legalPageV2 = legalV2Data;
export default legalPage;
