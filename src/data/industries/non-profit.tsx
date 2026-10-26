
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved non-profit-specific image.
// Prefer authentic community programme photography,
// volunteer activities or approved impact documentation.
// Obtain consent and respect beneficiary privacy.
import nonProfitOverviewImg from '@/assets/non-profit-overview.jpg';

/**
 * Bixeltek — Non-Profit Industry Page
 *
 * Category: Others
 *
 * Target organisations:
 * - Non-governmental organisations (NGOs)
 * - Registered charities
 * - Charitable foundations
 * - Community development organisations
 * - Humanitarian organisations
 * - Educational non-profits
 * - Environmental organisations
 * - Social impact initiatives
 * - Volunteer-led organisations
 * - Non-profit networks and associations
 *
 * Primary supporter journeys:
 *
 * Donors:
 * Discover Cause -> Understand Mission ->
 * Review Credibility and Impact ->
 * Choose Contribution -> Donate ->
 * Receive Acknowledgement -> Stay Engaged
 *
 * Volunteers:
 * Discover Opportunity -> Review Requirements ->
 * Apply -> Receive Confirmation ->
 * Participate -> Stay Involved
 *
 * Partners:
 * Discover Organisation ->
 * Review Programmes and Impact ->
 * Evaluate Alignment ->
 * Submit Partnership Enquiry ->
 * Discuss Collaboration
 *
 * Core priorities:
 * Non-profit website development,
 * programme and impact content,
 * SEO and cause awareness,
 * eligible Google Ad Grants support,
 * fundraising campaign pages,
 * donation UX and payment integrations,
 * volunteer registration,
 * CRM and supporter workflows,
 * accessibility and analytics.
 *
 * Important:
 * Legal status, registration numbers,
 * tax deductibility, donation restrictions,
 * financial statements, programme outcomes,
 * impact metrics and fundraising claims
 * must be verified by the organisation.
 *
 * Donation processing must use appropriate
 * payment providers and security controls.
 *
 * Eligibility for Google Ad Grants or
 * regional charitable benefits must be
 * checked against current programme rules.
 *
 * Beneficiary stories, images and personal
 * information require appropriate consent,
 * safeguarding and privacy considerations.
 */

export const nonProfitV2Data: IndustryPageData = {
  slug: 'non-profit',

  aliases: [
    'nonprofit',
    'non-profits',
    'nonprofit-organisations',
    'non-profit-organizations',
    'ngo',
    'ngos',
    'charities',
    'charitable-organisations',
    'foundations',
    'social-impact',
  ],

  industryName: 'Non-Profit',

  seo: {
    title:
      'Non-Profit Website Development & Digital Marketing | Bixeltek',

    description:
      'Digital solutions for NGOs, charities and non-profits. Build accessible websites, improve non-profit SEO, donation experiences, fundraising campaigns, volunteer registration and supporter CRM workflows.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR NON-PROFIT ORGANISATIONS',

    title: 'Turn Mission Awareness Into',
    highlightedTitle: 'Sustainable Funding',

    description:
      'Help donors, volunteers, communities and partners discover your work, understand its impact and take meaningful action. We connect non-profit website development, search visibility, fundraising experiences, supporter communication and operational workflows around your organisation’s mission.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'HOW PEOPLE CHOOSE TO SUPPORT A CAUSE',

    title: (
      <>
        People May Believe in Your Cause.
        {' '}
      </>
    ),

    highlightedTitle:
      'They Still Need Confidence in Your Organisation.',

    description:
      'Donors, volunteers, and grant-makers look for verified impact metrics, financial transparency, and governance accountability before contributing. When nonprofit websites rely on vague appeals without detailing program allocations or secure donation options, potential supporters hesitate. Demonstrating clear outcomes and straightforward participation paths inspires trust and sustained donor engagement.',
    secondaryDescription:
      'Bixeltek builds trustworthy digital foundations for mission-driven organizations by unifying program transparency, verified financial reporting, and streamlined donor conversion pathways. We optimize cause-related search discovery, Google Ad Grants, and recurring giving systems, enabling nonprofits to attract committed advocates and reliably expand their vital community initiatives.',
    imageSrc: nonProfitOverviewImg,

    imageAlt:
      'Non-profit volunteers participating in an authentic community support programme',

    features: [
      {
        title: 'Explain the Mission and Programmes',

        description:
          'Help visitors understand the causes you address, the communities you serve and the programmes your organisation actually operates.',
      },

      {
        title: 'Make Trust and Transparency Visible',

        description:
          'Present verified impact information, governance details, approved reports and clear explanations of how supporters can contribute.',
      },

      {
        title: 'Create Meaningful Ways to Participate',

        description:
          'Support appropriate donation, volunteering, programme enquiry and partnership journeys without unnecessary friction.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Capabilities That Help Your Mission Reach Further',

    subheadline:
      'From communicating programmes and building supporter confidence to accepting donations and coordinating volunteers, we develop digital solutions around the practical needs of non-profit organisations.',

    items: [
      {
        tag: '01 · NON-PROFIT WEBSITE DEVELOPMENT',

        title:
          'Build a Website That Explains Your Mission and Makes Participation Clear',

        description:
          'A non-profit website may serve donors, volunteers, beneficiaries, institutional partners and community members at the same time. We develop accessible, maintainable websites with mission pages, programme information, verified impact stories, reports, campaigns and clear participation pathways. For organisations managing several initiatives or regional chapters, we plan scalable content structures that keep programmes and information organised. The website should reflect the organisation’s real work rather than relying on generic fundraising language.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Mission-led website architecture',

        chips: [
          'NGO and charity websites',
          'Programme and initiative pages',
          'Impact and annual reports',
          'Campaign landing pages',
          'Accessible website development',
          'Scalable CMS solutions',
        ],
      },

      {
        tag: '02 · NON-PROFIT SEO & CAUSE AWARENESS',

        title:
          'Help People Find Relevant Programmes, Resources and Opportunities',

        description:
          'Non-profit search intent varies widely. Visitors may be researching a social issue, looking for community assistance, seeking volunteer opportunities or evaluating organisations to support. We improve technical SEO, programme pages, resource content and relevant local visibility. Content is organised around genuine services and information needs, without exploiting sensitive topics or publishing unsupported impact claims.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Non-profit and NGO SEO',
          'Programme page optimisation',
          'Community resource visibility',
          'Volunteer opportunity discovery',
          'Technical and on-page SEO',
          'Relevant local SEO',
        ],
      },

      {
        tag: '03 · AWARENESS & FUNDRAISING CAMPAIGNS',

        title:
          'Connect Relevant Audiences With Campaigns Worth Supporting',

        description:
          'Non-profit campaigns may focus on awareness, fundraising, volunteer recruitment or programme participation. We plan suitable Google and Meta advertising around the organisation’s objectives and available resources. For eligible organisations, we can assess Google Ad Grants requirements and support appropriate campaign planning. Grant eligibility, advertising restrictions and available benefits depend on current programme rules. We avoid assuming that more impressions or low-cost clicks automatically translate into meaningful support.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Purpose-led digital campaigns',

        chips: [
          'Google Ads for non-profits',
          'Google Ad Grants assessment',
          'Meta awareness campaigns',
          'Fundraising landing pages',
          'Volunteer recruitment campaigns',
          'Campaign performance tracking',
        ],
      },

      {
        tag: '04 · DONATION & FUNDRAISING EXPERIENCE',

        title:
          'Make Giving Clear, Secure and Respectful',

        description:
          'A donation journey should explain the cause, contribution options and important payment information without pressuring supporters. We design donation pages with suitable one-time or recurring contribution choices, transparent messaging and mobile-friendly payment experiences. Where compatible payment providers exist, we can integrate supported donation processing and acknowledgement workflows. Tax receipts, recurring payment mandates, donor restrictions and cross-border contributions depend on the organisation’s legal status, jurisdiction and payment provider. We do not imply that a donation is tax-deductible unless confirmed.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Understand',
            value: 'The cause',
          },
          {
            label: 'Choose',
            value: 'How to help',
          },
          {
            label: 'Contribute',
            value: 'With confidence',
          },
        ],

        chips: [
          'Donation page UX',
          'One-time and recurring giving',
          'Payment gateway integrations',
          'Campaign-specific donation pages',
          'Donation acknowledgement flows',
          'Mobile accessibility and CRO',
        ],
      },

      {
        tag: '05 · IMPACT CONTENT & RESPONSIBLE STORYTELLING',

        title:
          'Show the Work Behind the Mission With Credible Evidence',

        description:
          'Supporters often want to understand what an organisation has done, what remains to be addressed and how programmes are delivered. We help structure approved impact stories, programme updates, reports, photographs and videos. Outcomes should be supported by the organisation’s records and described with appropriate context. Stories involving children, vulnerable individuals or sensitive circumstances require careful consent, safeguarding and privacy review. Effective communication should preserve dignity rather than turning beneficiaries into marketing material.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Verified impact stories',
          'Programme updates',
          'Annual report presentation',
          'Responsible photography and video',
          'Campaign content creation',
          'Accessible information design',
        ],
      },

      {
        tag: '06 · VOLUNTEER & SUPPORTER WORKFLOWS',

        title:
          'Connect People Who Want to Help With the Right Opportunities',

        description:
          'Non-profit participation can involve volunteer applications, programme registrations, partnership enquiries and donor communication. We can develop suitable forms and connect them with supported CRM, email and internal workflow tools. Depending on the organisation’s requirements, workflows may support opportunity selection, application routing, confirmations and approved follow-up communication. Background checks, safeguarding assessments, volunteer approval and beneficiary case management remain separate operational responsibilities requiring appropriate controls.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected supporter journeys',

        chips: [
          'Volunteer registration',
          'Donor CRM integrations',
          'Partnership enquiry workflows',
          'Application routing',
          'Supporter communications',
          'Consent-aware automation',
        ],
      },

      {
        tag: '07 · NON-PROFIT ANALYTICS & REPORTING',

        title:
          'Understand How Digital Engagement Supports Your Mission',

        description:
          'Non-profit digital performance should not be judged solely by traffic or donation totals. We help measure programme engagement, donation journey interactions, volunteer applications, resource usage and supported campaign conversions. Where reliable CRM and payment data exists, reporting can consider completed donations, recurring support and qualified participation. We distinguish digital engagement from real-world programme impact and avoid presenting website metrics as evidence of social outcomes without independent programme data.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'From awareness to meaningful participation',

        chips: [
          'GA4 and GTM tracking',
          'Donation funnel analytics',
          'Volunteer application reporting',
          'Campaign engagement insights',
          'Donor CRM conversion events',
          'Supporter journey analysis',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM CAUSE DISCOVERY TO MEANINGFUL SUPPORT',

    headline:
      'Make It Easier for People to Understand, Trust and Support Your Work',

    subheadline:
      'Supporters, volunteers, partners and beneficiaries need different information. We help organise the digital experience around their real questions and next steps.',

    leftLabel: 'What Visitors Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering the Cause or Programme',

        industryStandard:
          'Visitors may be researching an issue, looking for community assistance or seeking an organisation whose mission aligns with their interests.',

        ourApproach:
          'We improve programme architecture, useful content, relevant SEO and clear pathways for different visitor needs.',
      },

      {
        feature: 'Understanding the Organisation',

        industryStandard:
          'People want to know what the organisation does, where it operates, whom it serves and how its programmes are delivered.',

        ourApproach:
          'We structure mission, programme, team and organisational information so visitors can understand the work without unnecessary complexity.',
      },

      {
        feature: 'Evaluating Credibility and Transparency',

        industryStandard:
          'Supporters may review registration details, governance information, financial reports, impact evidence and organisational history.',

        ourApproach:
          'We make verified credentials, approved reports and responsibly presented programme outcomes easier to find and evaluate.',
      },

      {
        feature: 'Choosing How to Contribute',

        industryStandard:
          'Visitors may want to donate, volunteer, become a partner, participate in a campaign or access a relevant service.',

        ourApproach:
          'We create distinct conversion pathways for different participation types instead of sending every visitor to the same generic contact form.',
      },

      {
        feature: 'Completing a Donation or Application',

        industryStandard:
          'Supporters need clear contribution options, appropriate payment security, relevant policies and understandable confirmation steps.',

        ourApproach:
          'We design accessible donation and registration journeys with suitable payment, CRM and workflow integrations.',
      },

      {
        feature: 'Staying Informed and Involved',

        industryStandard:
          'After contributing, supporters may want acknowledgement, programme updates, future opportunities and clear communication preferences.',

        ourApproach:
          'We can connect suitable CRM and consent-aware communication workflows that support ongoing relationships without excessive messaging.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Mission and Operational Capacity',

    subheadline:
      'We begin with your programmes, communities, supporters and existing systems. Then we prioritise improvements that make information easier to access and participation easier to manage.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Mission and Stakeholders',

        summary:
          'We establish your organisation’s programmes, audiences, priorities and the ways people currently interact with your work.',

        details: [
          'Review mission, programmes and verified impact information',
          'Identify donors, volunteers, beneficiaries and partner audiences',
          'Understand fundraising, communication and operational workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit the Existing Digital Experience',

        summary:
          'We assess whether visitors can understand your organisation, find relevant information and participate without avoidable friction.',

        details: [
          'Review programme content, accessibility and mobile usability',
          'Assess SEO, campaign visibility and website performance',
          'Evaluate donation, volunteer and enquiry journeys',
        ],
      },

      {
        step: '03',

        title: 'Plan the Website and Participation Architecture',

        summary:
          'We organise the digital experience around the needs of different audiences and the actions your organisation can support.',

        details: [
          'Map mission, programme, impact and resource pages',
          'Prioritise donation, volunteering and partnership journeys',
          'Define suitable payment, CRM and communication integrations',
        ],
      },

      {
        step: '04',

        title: 'Build and Improve the Digital Experience',

        summary:
          'We implement the agreed website, content and participation improvements with attention to accessibility, clarity and maintainability.',

        details: [
          'Develop or refine programme and campaign pages',
          'Improve donation, registration and contact experiences',
          'Implement approved content, campaigns and supported integrations',
        ],
      },

      {
        step: '05',

        title: 'Validate Payments and Supporter Workflows',

        summary:
          'We test important visitor actions and review how information moves between the website, payment providers and internal teams.',

        details: [
          'Test supported donation and registration journeys',
          'Validate available analytics and payment confirmation events',
          'Review CRM routing, privacy, permissions and communication flows',
        ],
      },

      {
        step: '06',

        title: 'Review Engagement and Improve',

        summary:
          'We use available website, campaign and operational feedback to improve access to information and meaningful participation.',

        details: [
          'Review programme engagement and supporter journey data',
          'Assess completed donations and qualified volunteer applications',
          'Refine content, campaigns and workflows using evidence',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Awareness to Meaningful Participation',

    items: [
      {
        value: 'Discover',

        label: 'Relevant cause and programme visibility',

        subtext:
          'Review search visibility, acquisition channels and engagement with priority mission, programme and resource pages.',
      },

      {
        value: 'Understand',

        label: 'Programme and impact engagement',

        subtext:
          'Assess supported interactions with impact reports, programme information, campaign content and relevant resources.',
      },

      {
        value: 'Participate',

        label: 'Donations, applications and enquiries',

        subtext:
          'Measure completed donations where supported, volunteer applications, partnership enquiries and other meaningful participation actions.',
      },

      {
        value: 'Improve',

        label: 'Supporter relationships and digital effectiveness',

        subtext:
          'Where reliable CRM and payment data exists, review recurring support, campaign costs and participation quality while keeping social impact measurement separate.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS NON-PROFIT ORGANISATIONS ASK',

    headline:
      'Digital Solutions for Non-Profits: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our NGO or non-profit organisation?',

        answer:
          'We help non-profit organisations build accessible websites, communicate programmes, improve relevant search visibility and simplify donation, volunteering and partnership journeys. Depending on your needs, this may include website development, SEO, eligible advertising campaigns, donation integrations, CRM workflows, content creation and analytics. We prioritise solutions that support your mission and operational capacity rather than focusing only on website traffic or fundraising volume.',
      },

      {
        question:
          'Can you build a professional website for our NGO, charity or foundation?',

        answer:
          'Yes. We develop non-profit websites with mission information, programme pages, approved impact stories, reports, campaign pages and suitable participation pathways. The structure can support multiple programmes, locations or organisational chapters. We consider accessibility, mobile usability, content management, privacy and long-term maintenance when recommending the technical approach.',
      },

      {
        question:
          'Can you integrate secure online donations into our website?',

        answer:
          'Yes. We can assess and integrate suitable payment providers for eligible donation use cases. Depending on the provider and organisation, functionality may include one-time donations, recurring contributions and payment acknowledgements. Tax treatment, donor eligibility, international contributions and fundraising restrictions depend on the organisation’s legal status and jurisdiction. We do not represent a donation as tax-deductible without verification.',
      },

      {
        question:
          'Can you create recurring donation and monthly giving options?',

        answer:
          'We can develop recurring giving journeys where the chosen payment provider supports appropriate mandates and subscription functionality. The implementation should clearly explain payment frequency, contribution amount, cancellation procedures and applicable terms. Recurring payment management and confirmation depend on the authorised payment system.',
      },

      {
        question:
          'How can SEO help a non-profit organisation?',

        answer:
          'Non-profit SEO can help relevant audiences find programmes, resources, volunteering opportunities and information about a cause. We work on technical SEO, programme architecture, useful content and relevant local visibility. The approach should prioritise accurate information and genuine audience needs, especially when discussing sensitive social or humanitarian issues. Rankings and fundraising outcomes cannot be guaranteed.',
      },

      {
        question:
          'Can you help us with Google Ad Grants?',

        answer:
          'We can assess whether your organisation may be eligible for Google Ad Grants and support suitable website and campaign planning. Eligibility, application requirements, available advertising benefits and account policies are determined by Google and can change. We do not guarantee grant approval or imply that every non-profit qualifies. Grant campaigns also require ongoing compliance with applicable programme rules.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for fundraising campaigns?',

        answer:
          'We can plan suitable campaigns for eligible non-profit activities, including awareness, fundraising and volunteer recruitment. Advertising eligibility depends on the cause, region, platform policies and specific campaign claims. We recommend transparent messaging, appropriate audience targeting and reporting that distinguishes awareness from completed donations or participation.',
      },

      {
        question:
          'Can you create volunteer registration and application forms?',

        answer:
          'Yes. We can develop volunteer opportunity pages, registration forms and suitable application workflows. Depending on your requirements, forms may capture interests, availability and relevant experience. Sensitive personal information should be limited to what is necessary. Background checks, safeguarding decisions and volunteer approval remain the organisation’s operational responsibilities.',
      },

      {
        question:
          'Can you help us publish impact reports and success stories?',

        answer:
          'Yes. We can design programme updates, annual report pages, impact dashboards and approved case studies. The organisation must verify all statistics, financial figures and programme outcomes. Stories involving beneficiaries require appropriate consent and safeguarding considerations. We recommend presenting both the work undertaken and the context behind reported outcomes.',
      },

      {
        question:
          'Can you integrate our website with donor CRM or email systems?',

        answer:
          'We can assess integrations with suitable donor management, CRM and communication platforms where supported APIs or connectors are available. Potential workflows include donation records, enquiry routing, volunteer applications and approved supporter communication. Data access, consent, privacy and security requirements must be defined before implementation.',
      },

      {
        question:
          'Can you build a website for a non-profit with multiple programmes or locations?',

        answer:
          'Yes. We can develop scalable website structures for multiple initiatives, regional chapters and programme categories. The architecture can help visitors find relevant local information while giving authorised teams appropriate content management access. We recommend the approach based on organisational structure, programme ownership and maintenance capacity.',
      },

      {
        question:
          'Can you improve our existing non-profit website instead of rebuilding it?',

        answer:
          'Yes. We first assess the existing website, accessibility, content architecture, SEO, performance and participation journeys. Targeted improvements may be sufficient when the current platform supports them. A rebuild may be appropriate when technical limitations prevent reliable donations, content management, integrations or accessible user experiences.',
      },

      {
        question:
          'How do you measure non-profit website and campaign performance?',

        answer:
          'We can track supported interactions such as programme engagement, resource usage, donation journey events, completed contributions, volunteer applications and partnership enquiries. Where reliable CRM and payment data exists, reporting may also consider recurring support and campaign effectiveness. We do not treat website engagement or donation totals as direct proof of social impact; programme outcomes require separate evidence.',
      },

      {
        question:
          'How much does a non-profit website or digital project cost?',

        answer:
          'Costs depend on programme complexity, content requirements, donation functionality, accessibility needs, integrations and campaign scope. A small community organisation website differs from a multi-programme NGO platform with donor management, volunteer workflows and detailed reporting. We can recommend a phased scope that prioritises essential functionality and considers your available resources and maintenance capacity.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build a Digital Experience That Helps More People Support Your Mission',

    subheadline:
      'Whether you need a clearer non-profit website, better programme visibility, accessible donation journeys or connected supporter workflows, we can help identify practical digital improvements aligned with your organisation’s mission and resources.',

    bulletPoints: [
      'Build accessible websites that explain your mission and programmes',
      'Improve cause awareness through SEO and eligible campaigns',
      'Simplify donations, volunteer applications and partnership enquiries',
      'Connect suitable donor CRM, communication and reporting workflows',
    ],

    buttonText: 'Discuss Your Non-Profit Project',
  },
};

export const nonProfitPage = nonProfitV2Data;
export const nonProfitPageV2 = nonProfitV2Data;
export default nonProfitPage;
