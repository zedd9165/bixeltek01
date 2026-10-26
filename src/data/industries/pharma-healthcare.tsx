
import React from 'react';
import { IndustryPageData } from '@/types/industry';
import pharmaHealthcareImg from '@/assets/pharma-healthcare-overview.jpg';

export const pharmaHealthcarePage: IndustryPageData = {
  slug: 'pharma-healthcare',
  aliases: [
    'pharma',
    'healthcare-industry',
    'pharmaceutical-industry',
    'pharmaceutical-healthcare',
  ],
  industryName: 'Pharma & Healthcare',

  seo: {
    title:
      'Pharma & Healthcare Digital Solutions | Bixeltek',
    description:
      'Digital growth and technology solutions for pharmaceutical and healthcare companies. Bixeltek builds websites, B2B enquiry journeys, SEO, web applications and connected digital systems.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR PHARMA & HEALTHCARE',
    title: 'Build a Stronger Digital Presence for',
    highlightedTitle: 'Your Pharma & Healthcare Business',
    description:
      'Help buyers, distributors and business partners discover your company, explore your products and connect with confidence. We combine website development, SEO and digital technology to strengthen your online presence and support business growth.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'BEYOND A CORPORATE WEBSITE',
    title: (
      <>
        Complex Businesses Need
        {' '}
      </>
    ),
    highlightedTitle: 'Clearer Digital Experiences.',
    description:
      'A pharmaceutical manufacturer, medical equipment supplier or healthcare distributor rarely has just one type of website visitor. Procurement teams may be evaluating suppliers, distributors may be exploring partnerships, healthcare professionals may need accurate product information and prospective employees may be assessing the organisation. Each audience arrives with different questions, yet many corporate websites expect everyone to navigate the same general pages.',
    secondaryDescription:
      'Bixeltek helps businesses organise their digital presence around those different needs. We review how your company, capabilities, products and services are presented, how potential partners discover you and how enquiries move through your organisation. From corporate websites and search visibility to product catalogues, portals and workflow automation, we recommend solutions based on your business model, existing systems and operational priorities.',
    imageSrc: pharmaHealthcareImg,
    imageAlt:
      'Modern pharmaceutical manufacturing and healthcare technology environment representing digital solutions for pharma and healthcare businesses',
    features: [
      {
        title: 'Present Your Capabilities Clearly',
        description:
          'Help buyers and partners understand your business, manufacturing or service capabilities, product categories, operating locations and relevant certifications without searching through disconnected information.',
      },
      {
        title: 'Connect With Relevant Business Audiences',
        description:
          'Structure your digital presence around the searches and information needs of procurement teams, distributors, healthcare organisations and other appropriate professional audiences.',
      },
      {
        title: 'Support the Business Behind the Website',
        description:
          'Connect enquiry handling, product information, partner access and internal workflows with suitable digital systems when a public-facing website alone cannot support your operations.',
      },
    ],
  },

  
    bentoGrid: {
      badge: 'WHERE WE CAN HELP',
      headline:
        'Digital Solutions That Support How Pharma & Healthcare Businesses Operate',
      subheadline:
        'Different organisations have different commercial and technical priorities. We connect the right digital capabilities to the audiences you serve, the information you manage and the processes your team depends on.',

      items: [
        {
          tag: '01 · CORPORATE WEB DEVELOPMENT',
          title:
            'Build a Corporate Website That Represents the Scale of Your Business',
          description:
            'Your website should help visitors understand who you are, what you provide and why your organisation may be relevant to their requirements. We develop structured, responsive corporate websites with clear capability pages, company information, approved credentials, locations and enquiry routes. The architecture can also support multiple divisions, business units or markets without making the experience difficult to manage.',
          colSpan: 'col-span-2',
          accent: 'navy',
          pill: 'Corporate digital presence',
          chips: [
            'Corporate website development',
            'Manufacturing capability pages',
            'Multi-location architecture',
            'Product and service navigation',
            'Technical SEO foundations',
            'Content management systems',
          ],
        },
        {
          tag: '02 · B2B SEO & DISCOVERY',
          title:
            'Help Relevant Buyers and Partners Find Your Business',
          description:
            'Procurement and business-development searches are often specific to a product category, manufacturing capability, supplier type or geography. We assess relevant search demand and create an information structure that helps eligible business audiences find accurate, useful company information. The strategy must respect applicable restrictions on pharmaceutical product promotion.',
          colSpan: 'col-span-1',
          accent: 'teal',
          checklist: [
            'B2B search intent research',
            'Capability and category pages',
            'Technical and on-page SEO',
            'Market-specific visibility',
          ],
        },
        {
          tag: '03 · PRODUCT INFORMATION',
          title:
            'Make Complex Product Information Easier to Navigate',
          description:
            'Large product portfolios can become difficult to maintain when information is scattered across PDFs, spreadsheets and individual pages. We build structured catalogues and content systems that help authorised audiences find relevant categories, specifications, documents and enquiry options. Publication and access rules are defined around the products and markets involved.',
          colSpan: 'col-span-1',
          accent: 'orange',
          pill: 'Structured product discovery',
          chips: [
            'Product catalogue systems',
            'Category navigation',
            'Technical documentation',
            'Controlled content access',
            'Product enquiry forms',
          ],
        },
        {
          tag: '04 · B2B LEAD GENERATION',
          title:
            'Turn Business Interest Into Actionable Enquiries',
          description:
            'A potential distributor or institutional buyer may need to request a quotation, ask about supply capabilities or discuss a partnership rather than make an immediate online purchase. We improve the pages, forms and enquiry routes that support these decisions, and assess paid acquisition only where the product category, audience, target location and advertising policies permit it.',
          colSpan: 'col-span-2',
          accent: 'cyan',
          stats: [
            {
              label: 'Discover',
              value: 'Capabilities',
            },
            {
              label: 'Evaluate',
              value: 'Suitability',
            },
            {
              label: 'Connect',
              value: 'With your team',
            },
          ],
          chips: [
            'B2B landing pages',
            'Quotation requests',
            'Distributor enquiries',
            'Enquiry routing',
            'Conversion tracking',
          ],
        },
        {
          tag: '05 · PORTALS & WEB APPLICATIONS',
          title:
            'Create Digital Tools for Partners and Internal Teams',
          description:
            'Some workflows need more than a website form. Depending on the business, a secure portal may help approved distributors access information, customers submit requests or internal teams manage enquiries. We scope role-based access, data structures, integrations and operational requirements before deciding whether a custom application is appropriate.',
          colSpan: 'col-span-1',
          accent: 'teal',
          checklist: [
            'Distributor and partner portals',
            'Customer enquiry dashboards',
            'Role-based access controls',
            'Custom workflow applications',
          ],
        },
        {
          tag: '06 · AUTOMATION & ANALYTICS',
          title:
            'Reduce Manual Work Between Enquiry and Response',
          description:
            'When business enquiries arrive through multiple forms, inboxes or teams, follow-up can become inconsistent. We help map suitable workflows for enquiry capture, assignment, CRM integration, status tracking and reporting. Sensitive data, approval requirements and exceptions remain important design considerations rather than afterthoughts.',
          colSpan: 'col-span-1',
          accent: 'orange',
          pill: 'Connected operations',
          chips: [
            'CRM integrations',
            'Lead routing',
            'Workflow automation',
            'Analytics dashboards',
            'System integrations',
          ],
        },
        {
          tag: '07 · CONTENT & DIGITAL GOVERNANCE',
          title:
            'Keep Healthcare Content Accurate, Approved & Up to Date',
          description:
            'Pharmaceutical and healthcare websites often contain information that requires careful review before publication. Outdated product documents, inconsistent claims or uncontrolled content changes can create confusion and business risk. We help implement structured content management, approval workflows, role-based publishing permissions and document organisation so authorised teams can maintain accurate information across websites and digital platforms. Regulatory and medical approval remains with the responsible professionals.',
          colSpan: 'col-span-2',
          accent: 'navy',
          pill: 'Controlled content management',
          chips: [
            'Content approval workflows',
            'Role-based publishing',
            'Document version management',
            'Structured CMS architecture',
            'Content update governance',
            'Audit-friendly change history',
          ],
        },
      ],
    },


  comparison: {
    badge: 'UNDERSTANDING THE BUYER JOURNEY',
    headline:
      'Make It Easier for Business Buyers to Evaluate and Contact You',
    subheadline:
      'Pharmaceutical and healthcare procurement decisions can involve technical requirements, commercial discussions, approvals and multiple stakeholders. Your digital presence should make relevant information accessible while supporting the appropriate next step.',

    leftLabel: 'What Business Buyers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding Relevant Suppliers',
        industryStandard:
          'Procurement teams and potential distributors may search by product category, manufacturing capability, supplier location or business specialisation. They need to identify organisations that may meet their requirements.',
        ourApproach:
          'We develop a search-informed website structure with clear business divisions, capability pages and relevant geographic information. SEO work focuses on legitimate discovery opportunities and appropriately approved content.',
      },
      {
        feature: 'Understanding Company Capabilities',
        industryStandard:
          'Business buyers often need to understand what a company manufactures, distributes or supports, which markets it serves and whether its facilities or capabilities match their requirements.',
        ourApproach:
          'We organise company information, capabilities, facilities, operating locations and approved credentials into clear, navigable pages that help visitors assess business suitability.',
      },
      {
        feature: 'Reviewing Product Information',
        industryStandard:
          'Buyers may need to compare product categories, specifications, packaging options, documentation or other approved technical details before approaching the commercial team.',
        ourApproach:
          'We build structured product information experiences with logical categories, useful filters, controlled document access where required and relevant enquiry paths. The client retains responsibility for technical accuracy and publication approval.',
      },
      {
        feature: 'Evaluating Business Credibility',
        industryStandard:
          'Before initiating a commercial relationship, organisations may look for verified company details, relevant certifications, manufacturing information, established operations and a clear point of contact.',
        ourApproach:
          'We make genuine company credentials and supporting information easier to verify. This includes presenting approved certificates, facility information, organisational details and relevant corporate documentation without inventing qualifications or endorsements.',
      },
      {
        feature: 'Initiating Commercial Discussions',
        industryStandard:
          'A buyer may want to request a quotation, discuss distribution, submit a supply enquiry or contact a specific department. A generic contact form may not collect enough information to direct the request effectively.',
        ourApproach:
          'We design relevant enquiry routes for the business model, such as quotation requests, partnership enquiries and department-specific contact forms, while avoiding unnecessary or sensitive data collection.',
      },
      {
        feature: 'Managing Enquiries and Follow-Up',
        industryStandard:
          'Once an enquiry is submitted, it may need to reach sales, exports, procurement, technical support or another team. Unclear ownership and disconnected systems can make follow-up difficult.',
        ourApproach:
          'Where appropriate, we connect forms with CRM systems, notifications, assignment workflows and reporting. We also define how exceptions, permissions and manual approvals should be handled before automation is introduced.',
      },
    ],
  },

  process: {
    badge: 'OUR WORKING APPROACH',
    headline:
      'From Business Requirements to Connected Digital Solutions',
    subheadline:
      'We start with how your organisation operates, who needs to use the digital experience and which problems are worth solving. The resulting plan may involve a website, search strategy, application or integration rather than automatically recommending every service.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Business and Stakeholders',
        summary:
          'We identify the organisation’s business model, audiences, operating markets and digital priorities before deciding what needs to be built or improved.',
        details: [
          'Review business divisions, product categories and service capabilities',
          'Identify buyers, distributors, partners and internal user groups',
          'Understand approval processes, target markets and existing systems',
        ],
      },
      {
        step: '02',
        title: 'Audit the Existing Digital Experience',
        summary:
          'We review how your current website and digital systems support discovery, information access, enquiries and day-to-day business processes.',
        details: [
          'Assess website structure, technical performance and search visibility',
          'Review product information, navigation and enquiry workflows',
          'Identify content, integration, usability and operational gaps',
        ],
      },
      {
        step: '03',
        title: 'Define the Right Architecture and Priorities',
        summary:
          'We translate the findings into a practical scope, deciding which improvements can be made within existing systems and which require new development.',
        details: [
          'Prioritise corporate pages, catalogues, enquiry routes and SEO opportunities',
          'Choose suitable CMS, web application or integration approaches',
          'Define content governance, permissions and measurable objectives',
        ],
      },
      {
        step: '04',
        title: 'Develop and Integrate the Solution',
        summary:
          'We implement the agreed website, content structure, digital tools and integrations around the organisation’s actual requirements.',
        details: [
          'Develop responsive pages, reusable components and structured content',
          'Build approved product information and B2B enquiry experiences',
          'Connect eligible workflows with CRM, analytics or existing systems',
        ],
      },
      {
        step: '05',
        title: 'Validate Before Launch',
        summary:
          'We test the experience and coordinate necessary approvals before making the solution available to its intended users.',
        details: [
          'Test navigation, forms, mobile layouts and technical performance',
          'Validate permissions, integrations and agreed analytics events',
          'Coordinate client approval of regulated claims and technical content',
        ],
      },
      {
        step: '06',
        title: 'Measure, Maintain and Improve',
        summary:
          'After launch, we review the available evidence and identify further improvements based on user behaviour, enquiry quality and operational feedback.',
        details: [
          'Review search visibility, content engagement and relevant enquiries',
          'Assess form quality, workflow issues and system performance',
          'Prioritise content updates, technical refinements and new requirements',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure Digital Progress Beyond Website Traffic',
    items: [
      {
        value: 'Discover',
        label: 'Relevant business visibility',
        subtext:
          'Assess organic visibility, relevant search queries and visits to corporate, capability and product-category pages. Focus on the audiences and markets the business is authorised and equipped to serve.',
      },
      {
        value: 'Evaluate',
        label: 'Useful information engagement',
        subtext:
          'Review interactions with capability pages, product information, approved documents and company details. Engagement signals can reveal usability opportunities but do not establish procurement intent on their own.',
      },
      {
        value: 'Enquire',
        label: 'Relevant commercial enquiries',
        subtext:
          'Measure quotation requests, partnership enquiries, eligible product enquiries and other agreed actions. Validate lead relevance through sales or business-development feedback where available.',
      },
      {
        value: 'Improve',
        label: 'Digital and operational efficiency',
        subtext:
          'Evaluate form completion, enquiry routing, workflow exceptions and available response metrics. Review improvements against the original baseline and acknowledge gaps in attribution or system data.',
      },
    ],
  },

  faqs: {
    badge: 'COMMON BUSINESS QUESTIONS',
    headline:
      'Digital Growth for Pharma & Healthcare: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help a pharmaceutical or healthcare company grow digitally?',
        answer:
          'We help organisations improve how they present their business, make information accessible, attract relevant enquiries and manage digital workflows. Depending on the business, this may involve corporate website development, SEO, product catalogues, B2B enquiry experiences, web applications, CRM integrations or automation. We start by identifying the audiences, business priorities and operational problems involved rather than applying the same marketing package to every company.',
      },
      {
        question:
          'Do pharmaceutical companies need SEO if most of their business comes through distributors?',
        answer:
          'SEO can still support corporate and B2B discovery when procurement teams, prospective distributors and business partners research potential suppliers online. Useful opportunities may include company capabilities, manufacturing services, product categories and relevant market information. However, search demand and publication restrictions differ by business and product type. SEO should support the commercial model rather than assume every company needs consumer-facing product promotion.',
      },
      {
        question:
          'Can you build a pharmaceutical corporate website with a large product portfolio?',
        answer:
          'Yes. We can plan a structured corporate website with product categories, searchable listings, approved technical information, downloadable documents and relevant enquiry options. The implementation may use a CMS or a custom application depending on catalogue size, content workflows, integrations and access requirements. Product claims, regulated information and publication permissions must be reviewed and approved by the organisation.',
      },
      {
        question:
          'Can pharmaceutical and healthcare businesses run Google Ads?',
        answer:
          'Some healthcare and pharmaceutical advertising is permitted, but eligibility depends on the business type, product, target country, certification requirements and advertising platform policies. For example, pharmaceutical manufacturers face specific restrictions on prescription and over-the-counter medicine promotion. We assess whether a proposed campaign is eligible before recommending paid advertising. Corporate visibility or B2B objectives do not automatically exempt an advertisement from applicable restrictions.',
      },
      {
        question:
          'Can you develop websites for medical equipment manufacturers and suppliers?',
        answer:
          'Yes. We can build websites that organise equipment categories, technical specifications, approved documentation, business capabilities and quotation enquiries. The experience can be designed around distributors, procurement professionals, healthcare institutions or other relevant buyers. Product information and any clinical or performance claims must be accurate, approved and appropriate for the intended market.',
      },
      {
        question:
          'Can you create distributor portals or B2B customer dashboards?',
        answer:
          'We can scope and develop portals for approved partners or internal teams when the business case justifies a custom system. Potential functions include role-based access, product information, document access, enquiry status and selected workflow integrations. Features, security controls and system connections are determined during requirements analysis. A custom portal is not automatically necessary when an existing platform can meet the same needs.',
      },
      {
        question:
          'Can you connect our website with CRM, ERP or existing business systems?',
        answer:
          'Integration is possible when the existing systems provide suitable APIs, supported connectors or other approved methods of data exchange. We first review what information needs to move between systems, which team owns it, how records should be matched and what should happen when an integration fails. The scope depends on the software, permissions, data quality and technical constraints.',
      },
      {
        question:
          'How do you handle compliance-sensitive pharmaceutical content?',
        answer:
          'We distinguish corporate information, professional content, product information and promotional material before deciding how each should be published. The client’s authorised regulatory, medical or legal reviewers remain responsible for approving claims and confirming applicable requirements. We can implement content workflows, access controls and technical safeguards, but website development or SEO does not itself establish regulatory compliance.',
      },
      {
        question:
          'Should we rebuild our existing healthcare website or improve what we already have?',
        answer:
          'That depends on the condition and limitations of the existing platform. If the website supports content updates, performance improvements, better navigation and reliable integrations, targeted development may be sufficient. A rebuild becomes more relevant when the architecture restricts growth, information is difficult to maintain, security or performance problems are significant, or required functionality cannot be implemented practically.',
      },
      {
        question:
          'How much does a pharma or healthcare digital project cost, and what is needed to get started?',
        answer:
          'Cost and timeline depend on the scope, number of pages or products, content readiness, integrations, languages, approval requirements and custom functionality. A corporate website, searchable catalogue and integrated partner portal have different development needs. To begin, share your existing website, business divisions, priority audiences, key requirements and any relevant system information. We can then define a phased scope and discuss suitable implementation options.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Experience That Supports Your Business',
    subheadline:
      'Whether you need a stronger corporate website, better B2B visibility, a structured product catalogue or connected business workflows, we can help you assess what makes sense for your organisation. Start with your current challenges and the audiences you want to serve.',
    bulletPoints: [
      'Identify website, content and search visibility opportunities',
      'Improve how buyers and partners discover your capabilities',
      'Explore product catalogues, portals and custom web applications',
      'Connect enquiries, workflows and analytics where appropriate',
    ],
    buttonText: 'Discuss Your Digital Requirements',
  },
};

export const pharmaHealthcarePageV2 = pharmaHealthcarePage;
export const pharmaHealthcareV2Data = pharmaHealthcarePage;
