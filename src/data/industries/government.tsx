
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved government-specific image.
// Prefer authentic public service environments,
// civic infrastructure, government service counters
// or accessible digital public service imagery.
// Do not imply an official government partnership.
import governmentOverviewImg from '@/assets/physiotherapy-overview.jpg';

/**
 * Bixeltek — Government Industry Page
 *
 * Category: Others
 *
 * Target organisations:
 * - Government departments
 * - Municipal corporations
 * - Local authorities
 * - Public service agencies
 * - Statutory bodies
 * - Public-sector institutions
 * - Government-funded organisations
 * - Public infrastructure authorities
 * - Regulatory and administrative bodies
 * - Citizen service organisations
 *
 * Primary user journeys:
 *
 * Citizens:
 * Find Information ->
 * Understand Eligibility / Requirements ->
 * Access Service ->
 * Submit Request ->
 * Receive Acknowledgement ->
 * Check Status
 *
 * Businesses:
 * Find Regulatory Information ->
 * Understand Procedures ->
 * Access Forms / Services ->
 * Submit Documentation ->
 * Receive Updates
 *
 * Public-sector administrators:
 * Publish Information ->
 * Manage Service Requests ->
 * Review Submissions ->
 * Coordinate Departments ->
 * Report on Service Delivery
 *
 * Core priorities:
 * Government website development,
 * accessible information architecture,
 * public service portals,
 * digital forms and applications,
 * technical SEO and public information discovery,
 * workflow automation,
 * document and content management,
 * system integrations,
 * analytics and maintainability.
 *
 * Important:
 * Government projects may require
 * procurement eligibility, security reviews,
 * accessibility compliance, data residency,
 * privacy assessments, hosting approvals,
 * audit logging and formal acceptance testing.
 *
 * Applicable requirements vary by jurisdiction,
 * department, service and procurement contract.
 *
 * Do not claim:
 * - Government vendor approval
 * - Security certification
 * - Accessibility certification
 * - Regulatory compliance
 * - Government project experience
 * unless independently verified.
 *
 * AI-assisted public service functionality
 * must not replace authorised decisions,
 * official records or required human review.
 */

export const governmentV2Data: IndustryPageData = {
  slug: 'government',

  aliases: [
    'government-sector',
    'government-agencies',
    'public-sector',
    'public-sector-organisations',
    'government-departments',
    'municipalities',
    'civic-services',
    'digital-government',
  ],

  industryName: 'Government',

  seo: {
    title:
      'Government Website Development & Digital Solutions | Bixeltek',

    description:
      'Digital solutions for government departments and public agencies. Build accessible websites, citizen service portals, digital forms, workflow automation, content management and public service analytics.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR GOVERNMENT & PUBLIC SECTOR',

    title: 'Modernize Civic Portals Into',
    highlightedTitle: 'Accessible Public Services',

    description:
      'Help citizens, businesses and public-sector teams find reliable information, complete important tasks and interact with services more effectively. We design and develop accessible government websites, public service portals, digital workflows and connected systems around real user needs and operational requirements.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW PEOPLE INTERACT WITH PUBLIC SERVICES',

    title: (
      <>
        Public Services Must Work for Everyone.
        {' '}
      </>
    ),

    highlightedTitle:
      'Clarity, Accessibility and Reliability Matter.',

    description:
      'Citizens and business owners visit agency portals to complete essential tasks, from permits to compliance notices. When navigation is confusing, forms lack accessibility, or program criteria remain obscure, administrative backlogs grow and public trust erodes. Intuitive digital architecture ensures constituents find answers and submit requests efficiently.',
    secondaryDescription:
      'Bixeltek structures public-sector web platforms around accessibility, clear service taxonomies, and compliant digital workflows. We modernize information discovery, secure online forms, and department routing, helping municipal and government agencies reduce inbound phone inquiries, streamline constituent submissions, and meet mandatory accessibility standards with total technical integrity.',
    imageSrc: governmentOverviewImg,

    imageAlt:
      'Modern public service environment supporting citizens with accessible digital government services',

    features: [
      {
        title: 'Make Official Information Easier to Find',

        description:
          'Organise services, notices, documents and departmental information around the tasks people need to complete.',
      },

      {
        title: 'Reduce Friction in Public Service Journeys',

        description:
          'Create accessible digital forms, clear instructions and suitable submission workflows for supported services.',
      },

      {
        title: 'Support Responsible Digital Operations',

        description:
          'Plan maintainable systems, defined permissions, appropriate integrations and clear operational ownership.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Capabilities for More Accessible Public Services',

    subheadline:
      'From official websites and citizen portals to document workflows and service reporting, we help public-sector organisations improve how information and services are delivered.',

    items: [
      {
        tag: '01 · GOVERNMENT WEBSITE DEVELOPMENT',

        title:
          'Build Public-Sector Websites Around Information People Actually Need',

        description:
          'Government websites often contain large volumes of services, notices, policies, documents and departmental information. We design and develop structured websites that help visitors find relevant content without navigating organisational complexity. This can include department pages, service directories, public notices, document libraries, multilingual content structures and maintainable content management systems. We consider accessibility, performance, responsive design and editorial governance from the planning stage. Compliance with specific public-sector standards requires project-level assessment and validation.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Accessible public information architecture',

        chips: [
          'Government department websites',
          'Municipal and agency websites',
          'Public service directories',
          'Notices and document libraries',
          'Multilingual content architecture',
          'Custom CMS development',
        ],
      },

      {
        tag: '02 · PUBLIC INFORMATION DISCOVERY',

        title:
          'Help People Find the Right Services, Forms and Official Information',

        description:
          'Public information should be discoverable through both search engines and the website itself. We improve technical SEO, navigation, internal search experiences, content structure and appropriate metadata. Information is organised around citizen and business tasks rather than only internal department names. For important procedures, we recommend clear publication dates, responsible content ownership and review processes so outdated guidance is less likely to remain accessible without context.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Government website SEO',
          'Service directory architecture',
          'Document discoverability',
          'Technical and on-page SEO',
          'Accessible site navigation',
          'Content governance support',
        ],
      },

      {
        tag: '03 · CITIZEN SERVICE PORTALS',

        title:
          'Make Digital Service Requests More Understandable and Manageable',

        description:
          'Some public services require more than an informational website. We can develop suitable portals for applications, requests, document submission and status visibility. The experience can guide users through required information, explain next steps and provide appropriate acknowledgements. Identity verification, eligibility decisions, payments, case management and access to official records depend on authorised systems and clearly defined government requirements.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Task-focused citizen experiences',

        chips: [
          'Citizen service portals',
          'Online applications',
          'Service request forms',
          'Document submission',
          'Request status interfaces',
          'Role-based user experiences',
        ],
      },

      {
        tag: '04 · ACCESSIBLE FORMS & SERVICE UX',

        title:
          'Help People Complete Important Tasks With Less Confusion',

        description:
          'A public service form should explain who can apply, what information is required and what happens after submission. We design structured forms with understandable instructions, suitable validation, clear error messages and accessible interaction patterns. Where appropriate, complex journeys can be divided into manageable steps with review screens and save-progress functionality. Sensitive information, identity checks and official submission confirmation must be handled according to the service’s security and operational requirements. Accessibility conformance must be tested against the applicable standard.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Find',
            value: 'The service',
          },
          {
            label: 'Complete',
            value: 'The request',
          },
          {
            label: 'Understand',
            value: 'Next steps',
          },
        ],

        chips: [
          'Accessible form design',
          'Multi-step applications',
          'Clear validation and errors',
          'Document upload workflows',
          'Submission acknowledgements',
          'Mobile-friendly public services',
        ],
      },

      {
        tag: '05 · CONTENT GOVERNANCE & DOCUMENT MANAGEMENT',

        title:
          'Keep Public Information Structured, Current and Accountable',

        description:
          'Government content may include policies, notices, public documents, service instructions and time-sensitive announcements. We develop maintainable content structures and suitable publishing workflows with defined roles and permissions. Where required, systems can support content review, approval stages, publication scheduling and version history. Official records retention, archival rules and public disclosure obligations must be defined by the responsible authority and supported by the chosen technology.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Role-based content management',
          'Publishing and approval workflows',
          'Document libraries',
          'Content versioning',
          'Public notice management',
          'Multilingual content support',
        ],
      },

      {
        tag: '06 · GOVERNMENT WORKFLOW AUTOMATION',

        title:
          'Connect Digital Requests With the Teams Responsible for Processing Them',

        description:
          'Public service requests may pass through multiple departments, review stages and authorised decision-makers. We can develop suitable workflow tools for intake, routing, notifications, status updates and internal coordination. Integrations with existing systems are assessed based on available APIs, security permissions and procurement requirements. Automation can reduce repetitive administrative steps, but statutory decisions, approvals and sensitive determinations must remain under the control of authorised personnel and processes.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Accountable operational workflows',

        chips: [
          'Request intake and routing',
          'Internal workflow tools',
          'Department notifications',
          'Role-based access',
          'System integration assessment',
          'Human approval checkpoints',
        ],
      },

      {
        tag: '07 · PUBLIC SERVICE ANALYTICS & IMPROVEMENT',

        title:
          'Understand Where Digital Services Are Working and Where Users Struggle',

        description:
          'Public-sector analytics should help teams identify accessibility barriers, confusing content, incomplete service journeys and operational bottlenecks. We can implement privacy-conscious analytics for website usage, service navigation, form progression and supported submission events. Where authorised operational data exists, reporting may help assess request volumes and processing stages. We recommend minimising personal data collection and distinguishing digital usage metrics from actual service quality or policy outcomes.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Evidence-led service improvement',

        chips: [
          'Privacy-conscious web analytics',
          'Service journey reporting',
          'Form completion analysis',
          'Content performance insights',
          'Operational dashboard development',
          'Accessibility issue monitoring',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM INFORMATION SEARCH TO SERVICE COMPLETION',

    headline:
      'Make Public Services Easier to Navigate at Every Stage',

    subheadline:
      'Citizens and businesses need accurate information, understandable requirements and clear next steps. We help public-sector organisations design around those needs.',

    leftLabel: 'What Public Service Users Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding the Correct Service',

        industryStandard:
          'People may not know which department is responsible for a service or what terminology the organisation uses internally.',

        ourApproach:
          'We organise service directories, navigation and search-friendly content around user tasks and familiar language.',
      },

      {
        feature: 'Understanding Requirements',

        industryStandard:
          'Applicants may need to understand eligibility, supporting documents, deadlines, procedures and applicable conditions.',

        ourApproach:
          'We present verified instructions, requirements and relevant documents in a clear, structured format with responsible content ownership.',
      },

      {
        feature: 'Accessing Services Inclusively',

        industryStandard:
          'Users may have different accessibility needs, language preferences, devices, connection speeds and levels of digital confidence.',

        ourApproach:
          'We design responsive, accessible experiences and plan relevant language support, with formal conformance testing against applicable standards.',
      },

      {
        feature: 'Submitting Information Securely',

        industryStandard:
          'Some services require personal information, documents, identity checks or sensitive application details.',

        ourApproach:
          'We design appropriate form journeys and assess authentication, data handling and integration controls against the service’s requirements.',
      },

      {
        feature: 'Understanding Submission Status',

        industryStandard:
          'After applying, users may need confirmation, reference information, expected next steps and a way to request assistance.',

        ourApproach:
          'We can implement supported acknowledgements, status interfaces and notification workflows connected to authorised operational systems.',
      },

      {
        feature: 'Receiving Reliable Updates',

        industryStandard:
          'People need to know when procedures, notices, service conditions or application requirements change.',

        ourApproach:
          'We support maintainable content management, appropriate publishing workflows and clear handling of current versus archived information.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Structured Approach to Public-Sector Digital Delivery',

    subheadline:
      'We begin with service requirements, user needs and existing systems. Then we plan implementation around accessibility, security, governance, procurement constraints and operational responsibilities.',

    steps: [
      {
        step: '01',

        title: 'Understand the Service and Stakeholders',

        summary:
          'We establish the public service objectives, user groups, responsible departments and required project constraints.',

        details: [
          'Review services, audiences and current delivery processes',
          'Identify accessibility, privacy and procurement requirements',
          'Understand existing platforms, ownership and approvals',
        ],
      },

      {
        step: '02',

        title: 'Audit Information and User Journeys',

        summary:
          'We assess how people currently find information, complete tasks and interact with the organisation.',

        details: [
          'Review navigation, content structure and document accessibility',
          'Assess mobile usability, performance and technical SEO',
          'Identify form friction, service gaps and workflow limitations',
        ],
      },

      {
        step: '03',

        title: 'Plan Architecture and Controls',

        summary:
          'We define the content, technical and operational architecture before development begins.',

        details: [
          'Map services, departments, documents and application journeys',
          'Define roles, permissions, integrations and data requirements',
          'Plan accessibility validation, security review and acceptance criteria',
        ],
      },

      {
        step: '04',

        title: 'Develop and Integrate the Platform',

        summary:
          'We implement the agreed website, portal or workflow functionality with maintainability and operational ownership in mind.',

        details: [
          'Build accessible interfaces and maintainable content structures',
          'Implement approved forms, portals and workflow features',
          'Integrate supported systems under authorised access controls',
        ],
      },

      {
        step: '05',

        title: 'Test, Validate and Prepare for Handover',

        summary:
          'We review functionality, accessibility and system behaviour against the agreed project requirements.',

        details: [
          'Test important user journeys, forms and error states',
          'Support required accessibility, security and integration validation',
          'Prepare documentation, administrator guidance and handover materials',
        ],
      },

      {
        step: '06',

        title: 'Review Service Performance and Improve',

        summary:
          'After launch, available usage and operational feedback can guide improvements to clarity, accessibility and service delivery.',

        details: [
          'Review authorised analytics and service journey information',
          'Identify recurring user friction and content maintenance needs',
          'Prioritise improvements through the agreed governance process',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure Whether Digital Services Are Easier to Find and Use',

    items: [
      {
        value: 'Discover',

        label: 'Public information accessibility',

        subtext:
          'Review whether users can reach relevant services, documents and official information through search and navigation.',
      },

      {
        value: 'Understand',

        label: 'Clarity of service information',

        subtext:
          'Assess supported interactions with guidance, requirements and service pages to identify potential confusion or information gaps.',
      },

      {
        value: 'Complete',

        label: 'Digital service journey effectiveness',

        subtext:
          'Where authorised, measure form progression, submission completion and common errors without unnecessarily collecting personal data.',
      },

      {
        value: 'Improve',

        label: 'Service usability and operational visibility',

        subtext:
          'Use approved analytics and workflow information to identify accessibility issues, administrative friction and opportunities for improvement.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS GOVERNMENT ORGANISATIONS ASK',

    headline:
      'Government Website & Digital Service Development: Common Questions',

    items: [
      {
        question:
          'What digital services can Bixeltek provide for government organisations?',

        answer:
          'We can design and develop government websites, public information platforms, citizen-facing portals, digital forms, document management experiences and suitable workflow tools. We also support technical SEO, accessibility-focused UX, analytics and integration assessment. Each project must be scoped against the organisation’s procurement, security, hosting, privacy and operational requirements. Our capabilities should not be interpreted as a claim of government-approved vendor status.',
      },

      {
        question:
          'Can you build a website for a government department or public agency?',

        answer:
          'Yes. We can develop structured websites with department information, public services, notices, document libraries, contact details and maintainable content management systems. The architecture is planned around user needs and the department’s publishing responsibilities. Any mandatory government standards, hosting rules or security controls must be identified and validated during project discovery.',
      },

      {
        question:
          'Can you develop an online citizen service portal?',

        answer:
          'We can scope and develop suitable portals for service information, online requests, applications, document submission and supported status visibility. The exact functionality depends on the public service, authorised data access, identity requirements and existing systems. Official eligibility decisions, statutory approvals and records must remain under the appropriate authority.',
      },

      {
        question:
          'Can you build accessible government websites?',

        answer:
          'We design and develop with accessibility considerations such as semantic structure, keyboard navigation, readable content, appropriate contrast and understandable form interactions. Specific compliance requirements may involve WCAG, national government accessibility standards or department-specific policies. Formal conformance requires testing and remediation against the applicable standard; it should not be assumed from the design approach alone.',
      },

      {
        question:
          'Can you support multilingual government websites?',

        answer:
          'Yes. We can develop multilingual content architecture, language navigation and suitable CMS workflows. Translation quality, legal accuracy and language-specific terminology must be reviewed by authorised content owners. Machine translation should not be treated as sufficient verification for official instructions or legally significant information.',
      },

      {
        question:
          'Can you digitise government forms and application processes?',

        answer:
          'We can develop digital forms with appropriate validation, document upload capabilities, acknowledgements and supported workflow integrations. Complex services may require authentication, save-progress functionality, role-based review and connections to official records. The implementation must follow the relevant privacy, security, records management and service requirements.',
      },

      {
        question:
          'Can you integrate government websites with existing databases or internal systems?',

        answer:
          'We can assess integrations where authorised APIs, interfaces and access permissions are available. Potential use cases include service request routing, document workflows, approved status information and reporting. Integration feasibility depends on the legacy system, data classification, network architecture, security controls and procurement requirements.',
      },

      {
        question:
          'How do you approach security and privacy for government projects?',

        answer:
          'Security and privacy requirements must be established during project discovery. Depending on the system, these may involve authentication, access controls, encryption, logging, secure development practices, data minimisation, hosting restrictions and independent security testing. We do not claim that a platform is compliant or certified without the required assessments and evidence. Sensitive or high-assurance systems may require specialist security partners and additional approvals.',
      },

      {
        question:
          'Can you build a public notice and document management system?',

        answer:
          'Yes. We can develop structured notice pages, searchable document libraries, publishing workflows and appropriate role-based content management. Features may include document categorisation, publication dates, approval stages and version history. Legal retention, archival and disclosure requirements must be defined by the responsible government authority.',
      },

      {
        question:
          'Can you automate internal government workflows?',

        answer:
          'We can develop suitable workflow tools for request intake, departmental routing, notifications, status updates and administrative coordination. Automation should operate within defined permissions and accountability structures. Statutory decisions, sensitive determinations and approvals must retain the required authorised review and human oversight.',
      },

      {
        question:
          'Can you improve an existing government website without rebuilding it?',

        answer:
          'Yes. We can assess the current platform, information architecture, accessibility, performance, content governance and technical limitations. Where feasible, targeted improvements may be more economical and less disruptive than a rebuild. Any changes must account for existing contracts, deployment processes, security controls and approval requirements.',
      },

      {
        question:
          'Can you help government information become easier to find through search engines?',

        answer:
          'Yes. We can improve technical SEO, page structure, internal linking, metadata and document discoverability for appropriate public information. Government SEO should prioritise accuracy, accessibility and findability rather than commercial-style lead generation. Sensitive or restricted information must never be exposed for indexing simply to improve search visibility.',
      },

      {
        question:
          'How do you measure the effectiveness of a government website or digital service?',

        answer:
          'We can implement privacy-conscious analytics to understand navigation, content usage, form progression and supported service interactions. Where authorised operational data is available, reporting may also examine request volumes and processing stages. Digital metrics should be interpreted alongside accessibility testing, user feedback and actual service outcomes. We avoid unnecessary collection of personal or sensitive information.',
      },

      {
        question:
          'How much does a government website or public service platform cost?',

        answer:
          'Costs depend on the number of services, content volume, accessibility requirements, authentication, integrations, security assessments, hosting constraints and procurement deliverables. A public information website differs significantly from a transactional citizen portal connected to official systems. We recommend a discovery and requirements phase before providing a detailed implementation scope. Any engagement is subject to applicable procurement and vendor eligibility requirements.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build Public Digital Services That People Can Understand and Use',

    subheadline:
      'Whether your organisation needs a clearer government website, accessible service forms, a citizen portal or connected administrative workflows, we can help evaluate the requirements and plan a practical digital solution.',

    bulletPoints: [
      'Build accessible, maintainable public-sector websites',
      'Make services, documents and official information easier to find',
      'Simplify digital applications and citizen service journeys',
      'Connect authorised workflows with appropriate governance and controls',
    ],

    buttonText: 'Discuss Your Government Project',
  },
};

export const governmentPage = governmentV2Data;
export const governmentPageV2 = governmentV2Data;
export default governmentPage;
