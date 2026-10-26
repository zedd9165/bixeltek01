
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace with an approved education-specific image.
// Prefer authentic students in a modern classroom,
// training environment or university campus.
import educationOverviewImg from '@/assets/education-overview.jpg';

/**
 * Bixeltek — Education Industry Page
 *
 * Target businesses:
 * - Schools and private educational institutions
 * - Colleges and universities
 * - Coaching and training institutes
 * - Professional certification providers
 * - Online learning businesses
 * - Vocational and skill development institutes
 * - Multi-campus educational organisations
 *
 * Primary student journey:
 * Discover -> Explore Programmes ->
 * Evaluate Institution -> Enquire ->
 * Apply -> Enrol
 *
 * Core priorities:
 * Website development, programme discovery,
 * admissions UX, SEO, paid acquisition,
 * LMS development, CRM automation and analytics.
 *
 * Important:
 * Accreditation, affiliations, fees, eligibility,
 * placements, employment outcomes and academic
 * results must be verified before publication.
 */

export const educationV2Data: IndustryPageData = {
  slug: 'education',

  aliases: [
    'education-institutions',
    'educational-institutions',
    'schools-and-colleges',
    'training-institutes',
  ],

  industryName: 'Education',

  seo: {
    title:
      'Education Marketing & Digital Solutions | Bixeltek',

    description:
      'Digital solutions for schools, colleges, universities and training institutes. Improve education websites, course discovery, admissions, SEO, Google Ads, learning platforms and student enquiry workflows.',
  },

  hero: {
    badge: 'DIGITAL SOLUTIONS FOR EDUCATIONAL INSTITUTIONS',

    title: 'Turn Student Searches Into',
    highlightedTitle: 'Course Enrolments',

    description:
      'Build a stronger digital experience for prospective students, parents and learners. We connect education websites, programme discovery, admissions journeys, digital marketing and student enquiry workflows to help institutions communicate their value and manage enrolment interest more effectively.',

    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'UNDERSTANDING THE EDUCATION DECISION JOURNEY',

    title: (
      <>
        Choosing an Institution Takes Research.
        {' '}
      </>
    ),

    highlightedTitle:
      'Your Digital Experience Should Make That Decision Easier.',

    description:
      'Students and parents evaluate curriculum depth, accreditation, fee schedules, and graduate career outcomes over lengthy decision cycles. When program prerequisites are buried or admission steps feel convoluted, qualified prospects drop off before inquiring. Clear academic pathways and accessible enrollment guidance eliminate hesitation for prospective learners.',
    secondaryDescription:
      'Bixeltek organizes educational platforms around prospective student intent, structuring transparent program pages, comprehensive tuition breakdowns, and intuitive application workflows. We align targeted academic search visibility with automated admission nurturing, helping schools, universities, and professional certification providers to consistently attract qualified applicants throughout each seasonal enrollment cycle.',
    imageSrc: educationOverviewImg,

    imageAlt:
      'Students participating in a collaborative learning session in a modern educational environment',

    features: [
      {
        title: 'Make Programmes Easier to Explore',

        description:
          'Help prospective learners understand available courses, eligibility, curriculum, fees, duration and learning formats through structured programme information.',
      },

      {
        title: 'Build Confidence in the Institution',

        description:
          'Present verified accreditation, faculty information, facilities, learning approaches and approved student experiences to support informed decisions.',
      },

      {
        title: 'Simplify Enquiries and Admissions',

        description:
          'Connect course interest with suitable counselling, application and follow-up journeys while reducing unnecessary administrative friction.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE CAN HELP',

    headline:
      'Digital Solutions for Institutions, Students and Learning Experiences',

    subheadline:
      'We support the digital systems that help educational organisations communicate their programmes, reach relevant learners, manage admissions and deliver connected learning experiences.',

    items: [
      {
        tag: '01 · EDUCATION WEBSITE DEVELOPMENT',

        title:
          'Build an Education Website That Makes Information Easy to Find',

        description:
          'Educational websites often serve multiple audiences, including students, parents, faculty, administrators and prospective applicants. We develop clear information architecture for programmes, departments, campuses, admissions, facilities and institutional information. The experience is designed for mobile usability, accessibility and manageable content updates, so important details remain easy to maintain as programmes and admission cycles change.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Institution-focused web development',

        chips: [
          'School and college websites',
          'University websites',
          'Programme and course pages',
          'Admissions information',
          'Multi-campus architecture',
          'CMS development',
        ],
      },

      {
        tag: '02 · EDUCATION SEO & DISCOVERY',

        title:
          'Help Students Find Relevant Courses and Institutions',

        description:
          'Prospective learners search by programme, subject, qualification, location, learning format and career interest. We improve relevant search visibility through useful programme content, technical SEO, local visibility and clear website structure. The strategy considers actual course availability and eligibility rather than creating repetitive location or course pages that do not reflect the institution.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Education SEO',
          'Course and programme SEO',
          'Local institute visibility',
          'Technical and on-page SEO',
          'Relevant search content',
        ],
      },

      {
        tag: '03 · STUDENT ACQUISITION CAMPAIGNS',

        title:
          'Reach Prospective Learners at the Right Stage of Research',

        description:
          'We plan suitable Google and Meta campaigns around programmes, admission periods, locations and intended student audiences. Search campaigns can reach people researching specific courses, while social campaigns may support programme awareness and consideration. Messaging, targeting and landing pages must reflect actual eligibility, fees and outcomes, with additional care where advertising involves minors.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Programme-focused acquisition',

        chips: [
          'Google Search campaigns',
          'Meta Ads',
          'Admission campaign planning',
          'Programme landing pages',
          'Creative and message testing',
        ],
      },

      {
        tag: '04 · ADMISSIONS UX & CONVERSION',

        title:
          'Make the Journey From Course Interest to Application Clearer',

        description:
          'Students may abandon an enquiry when course information is incomplete, eligibility is confusing or application steps are difficult to follow. We review programme pages, fee information, enquiry forms, counselling requests and application journeys to identify avoidable friction. Improvements are prioritised around the institution’s actual admission process and supported by available behavioural and enquiry data.',

        colSpan: 'col-span-2',
        accent: 'cyan',

        stats: [
          {
            label: 'Explore',
            value: 'Programmes',
          },
          {
            label: 'Enquire',
            value: 'With clarity',
          },
          {
            label: 'Apply',
            value: 'With confidence',
          },
        ],

        chips: [
          'Course landing pages',
          'Admission form UX',
          'Eligibility information',
          'Counselling CTAs',
          'Application journey optimisation',
          'Mobile experience',
        ],
      },

      {
        tag: '05 · LEARNING PLATFORMS & PORTALS',

        title:
          'Build Digital Learning Experiences Beyond the Marketing Website',

        description:
          'Institutions and training providers may need learning portals, course delivery systems or student-facing applications in addition to a public website. We can develop suitable web applications and integrations for course access, learning resources, progress visibility and role-based experiences. Requirements such as assessments, grading, live classes and certification workflows are scoped individually rather than assumed to be included in every platform.',

        colSpan: 'col-span-1',
        accent: 'teal',

        checklist: [
          'Learning management platforms',
          'Student portals',
          'Course content access',
          'Role-based dashboards',
          'LMS and API integrations',
        ],
      },

      {
        tag: '06 · ADMISSIONS CRM & AUTOMATION',

        title:
          'Keep Student Enquiries Connected to the Admissions Team',

        description:
          'Education enquiries may arrive from websites, campaigns, phone calls and counselling requests. We can connect suitable CRM systems, enquiry forms, notifications and approved communication workflows to support lead ownership and follow-up. Automation can help organise programme interest, campus preferences and application stages while preserving human involvement in counselling and admissions decisions.',

        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected admissions workflows',

        chips: [
          'Student enquiry routing',
          'Admissions CRM integrations',
          'Counselling notifications',
          'Application status workflows',
          'Consent-based communication',
        ],
      },

      {
        tag: '07 · EDUCATION ANALYTICS & REPORTING',

        title:
          'Understand Which Programmes and Channels Generate Relevant Interest',

        description:
          'Education marketing performance should be evaluated beyond form submission counts. We help measure programme discovery, enquiry actions, counselling requests and available application events. Where reliable admissions data exists, reporting can also examine progression from enquiry to application and enrolment. We distinguish marketing-generated interest from confirmed admissions and account for offline conversations, multiple decision-makers and attribution limitations.',

        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Enrolment journey visibility',

        chips: [
          'GA4 and GTM tracking',
          'Programme engagement reporting',
          'Admission funnel analysis',
          'Campaign attribution',
          'CRM conversion events',
          'Lead quality reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM COURSE DISCOVERY TO ENROLMENT',

    headline:
      'Support Students at Every Stage of Their Education Decision',

    subheadline:
      'Students need accurate information, confidence in their options and clear guidance through the application process. We help institutions build digital experiences around those needs.',

    leftLabel: 'What Students and Parents Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Relevant Institutions and Courses',

        industryStandard:
          'Prospective learners may search by subject, qualification, programme format, institution type, location or career interest.',

        ourApproach:
          'We improve programme discovery through relevant SEO, suitable advertising, clear course architecture and useful landing pages.',
      },

      {
        feature: 'Understanding Programme Details',

        industryStandard:
          'Students want reliable information about curriculum, duration, eligibility, fees, schedules, learning format and admission requirements.',

        ourApproach:
          'We organise programme pages around the questions learners need answered, using information verified and maintained by the institution.',
      },

      {
        feature: 'Evaluating Institutional Credibility',

        industryStandard:
          'Applicants and parents may review accreditation, faculty, facilities, student support, teaching methods and approved graduate outcomes.',

        ourApproach:
          'We present verified institutional information, faculty profiles, campus content and approved student experiences without unsupported accreditation or placement claims.',
      },

      {
        feature: 'Requesting Guidance Before Applying',

        industryStandard:
          'Some learners need clarification about eligibility, programme suitability, fees, financial support or the application process before proceeding.',

        ourApproach:
          'We design appropriate enquiry forms, counselling requests and contact pathways that direct questions to the relevant admissions team.',
      },

      {
        feature: 'Completing an Application',

        industryStandard:
          'Applicants need understandable steps, document requirements, deadlines and a usable application experience across devices.',

        ourApproach:
          'We improve application navigation and, where in scope, develop or integrate suitable admission forms and portals with appropriate data handling.',
      },

      {
        feature: 'Receiving Updates and Next Steps',

        industryStandard:
          'Students and parents may need confirmation, counselling follow-up, application status information and instructions for the next admission stage.',

        ourApproach:
          'We can connect suitable CRM and communication workflows to support timely updates and clear ownership while keeping formal admission decisions with the institution.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',

    headline:
      'A Digital Strategy Built Around Your Programmes and Admission Journey',

    subheadline:
      'We start by understanding your institution, learner audiences, programmes and admissions process. Then we prioritise the digital improvements that support discovery, evaluation and enrolment.',

    steps: [
      {
        step: '01',

        title: 'Understand Your Institution and Learners',

        summary:
          'We establish your programmes, target audiences, admission cycles and digital requirements before recommending a solution.',

        details: [
          'Review institution type, programmes, campuses and learning formats',
          'Identify prospective student and parent audiences',
          'Understand admissions, counselling and application workflows',
        ],
      },

      {
        step: '02',

        title: 'Audit the Digital Student Journey',

        summary:
          'We assess how prospective learners discover courses, compare options, find information and start the admissions process.',

        details: [
          'Review website structure, mobile usability and accessibility',
          'Assess programme SEO, campaigns and content gaps',
          'Evaluate enquiry forms, application journeys and tracking',
        ],
      },

      {
        step: '03',

        title: 'Plan the Website and Admissions Architecture',

        summary:
          'We organise programme information, user journeys and technology requirements around the needs of students and the institution.',

        details: [
          'Map programme, department and admission pages',
          'Prioritise acquisition and conversion improvements',
          'Define CRM, LMS and application integration requirements',
        ],
      },

      {
        step: '04',

        title: 'Build the Digital Experience',

        summary:
          'We implement the agreed website, content, landing-page and platform improvements with attention to usability and maintainability.',

        details: [
          'Develop or refine education and programme pages',
          'Improve counselling, enquiry and application pathways',
          'Implement supported portals and integrations within scope',
        ],
      },

      {
        step: '05',

        title: 'Validate Tracking and Admissions Workflows',

        summary:
          'We test critical interactions and review how enquiries and applications reach the appropriate systems and teams.',

        details: [
          'Test forms, scheduling, application and notification flows',
          'Validate supported analytics and conversion events',
          'Review CRM routing, access controls and data handling',
        ],
      },

      {
        step: '06',

        title: 'Review Enquiry Quality and Improve',

        summary:
          'We use available campaign, website and admissions feedback to refine the digital journey over time.',

        details: [
          'Review interest by programme, location and acquisition channel',
          'Identify friction between enquiry, application and enrolment',
          'Refine content, campaigns and workflows using reliable findings',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Programme Discovery to Enrolment',

    items: [
      {
        value: 'Discover',

        label: 'Relevant programme visibility',

        subtext:
          'Review search visibility, campaign engagement and visits to priority course, programme and institution pages.',
      },

      {
        value: 'Explore',

        label: 'Programme research and engagement',

        subtext:
          'Assess course-page interactions, programme comparisons, information downloads and other supported engagement events.',
      },

      {
        value: 'Enquire',

        label: 'Counselling and application interest',

        subtext:
          'Measure supported enquiry forms, counselling requests and application starts, with attention to programme relevance and eligibility.',
      },

      {
        value: 'Improve',

        label: 'Application and enrolment progression',

        subtext:
          'Where reliable admissions data exists, review movement toward completed applications and confirmed enrolments while recognising offline and multi-channel influences.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS EDUCATIONAL INSTITUTIONS ASK',

    headline:
      'Digital Growth for Education: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our educational institution attract more relevant student enquiries?',

        answer:
          'We help educational institutions improve programme discovery, website experience, digital marketing and admissions journeys. Depending on your needs, this may involve education website development, programme SEO, Google Ads, Meta Ads, landing pages, enquiry optimisation and CRM integrations. We focus on relevant enquiries aligned with your actual programmes, eligibility requirements and admission capacity rather than simply increasing lead volume.',
      },

      {
        question:
          'Can you build a website for our school, college or university?',

        answer:
          'Yes. We develop websites for educational institutions with programme and department pages, admission information, faculty profiles, campus content, resources and suitable enquiry routes. Multi-campus or multi-department structures can be supported where required. The technical approach depends on content management, accessibility, integrations, performance and long-term maintenance needs.',
      },

      {
        question:
          'Can you create individual pages for courses and programmes?',

        answer:
          'Yes. We recommend structured pages for meaningful programmes, with relevant information such as curriculum, duration, eligibility, fees, learning format and admission requirements. The content should reflect the institution’s actual offerings and be maintained as information changes. Programme pages can also support relevant SEO and targeted campaign landing experiences.',
      },

      {
        question:
          'How can SEO help educational institutions?',

        answer:
          'Education SEO can improve the discoverability of relevant programmes, institutional information and useful learning resources. We work on technical SEO, course architecture, internal linking, on-page content and appropriate local visibility. Search performance depends on competition, programme demand, website quality and content accuracy. We do not guarantee rankings or admissions.',
      },

      {
        question:
          'Can you manage Google Ads and Meta Ads for student admissions?',

        answer:
          'Yes. We can plan suitable campaigns for eligible educational programmes, including Google Search and Meta advertising where platform policies permit. Campaigns may be organised around programme demand, admission periods and target locations. Messaging must accurately represent qualifications, fees, eligibility and outcomes, with particular care for minors and sensitive targeting restrictions.',
      },

      {
        question:
          'Can you improve our admissions enquiry and application forms?',

        answer:
          'Yes. We review whether forms are understandable, mobile-friendly and proportionate to the information required at each stage. We can improve enquiry flows and, where in scope, develop or integrate application forms and portals. Sensitive student information and supporting documents should be handled through appropriately secured systems with suitable access controls.',
      },

      {
        question:
          'Can you build an LMS or online learning platform?',

        answer:
          'We can develop suitable learning web applications or integrate existing learning management systems, depending on your requirements. Possible capabilities include course access, learning resources, user roles and progress dashboards. Assessments, grading, live classes, certification and other advanced functions require individual scoping. We recommend the approach based on learners, content delivery needs, integrations and budget.',
      },

      {
        question:
          'Can you integrate our website with an admissions CRM?',

        answer:
          'We can assess integrations with suitable CRM and admissions systems where supported APIs or connectors are available. Potential workflows include enquiry routing, programme interest tagging, counselling notifications and application-stage updates. The implementation depends on your existing software, data requirements and internal admissions process.',
      },

      {
        question:
          'Can you help institutions with multiple campuses or locations?',

        answer:
          'Yes. We can structure websites around multiple campuses, locations, programmes and admission teams. This may include location-specific information, programme availability and relevant contact routes. We recommend separate campus pages where they provide useful, accurate information rather than duplicating generic content.',
      },

      {
        question:
          'How do you measure the quality of student enquiries?',

        answer:
          'We can measure supported course-page interactions, enquiry forms, counselling requests and application events. Where reliable CRM or admissions data exists, reporting may also review programme relevance, eligibility and progression toward completed applications or enrolment. We distinguish enquiries from confirmed admissions and avoid assuming every application resulted from a single marketing channel.',
      },

      {
        question:
          'Can you help us improve an existing education website instead of rebuilding it?',

        answer:
          'Yes. We first assess the current platform, programme architecture, content management, mobile usability, SEO foundations and enquiry experience. If the existing system supports the necessary changes, targeted improvements may be more practical. A rebuild may be appropriate when technical or structural limitations make the website difficult to maintain or expand.',
      },

      {
        question:
          'Can you create education content and student-facing resources?',

        answer:
          'We can support the structure, writing, design and publishing workflows for programme information, admission guidance, FAQs and relevant educational resources. Academic, accreditation, eligibility, fee and outcome-related claims must be verified and approved by the institution. We avoid publishing unsupported placement guarantees or misleading representations of qualifications.',
      },

      {
        question:
          'How much does an education website or digital marketing project cost?',

        answer:
          'Costs depend on the institution type, number of programmes, campuses, website complexity, content requirements, admissions workflows and integrations. A training institute website with enquiry forms differs significantly from a multi-campus institution requiring application portals, CRM integration and learning systems. Share your existing website, programmes, admission process and goals so we can recommend an appropriate scope.',
      },
    ],
  },

  finalCta: {
    headline:
      'Build an Education Experience That Supports Discovery and Enrolment',

    subheadline:
      'Whether you need a stronger institutional website, clearer programme pages, better student acquisition or connected admissions workflows, we can help identify the digital improvements that fit your organisation.',

    bulletPoints: [
      'Build or improve your education website and programme pages',
      'Increase relevant course discovery through SEO and advertising',
      'Simplify counselling, enquiries and application journeys',
      'Connect suitable admissions, CRM and learning systems',
    ],

    buttonText: 'Discuss Your Education Project',
  },
};

export const educationPage = educationV2Data;
export const educationPageV2 = educationV2Data;
export default educationPage;
