import { IndustryPageData } from '@/types/industry';
import doctorConsultImg from '@/assets/medical-clinics-overview.jpg';

/**
 * Medical Clinics industry page content.
 * Keep claims evidence-led: no invented client results, rankings, compliance
 * guarantees, booking integrations, or fixed deployment timelines.
 */
export const medicalClinicsPage: IndustryPageData = {
  slug: 'medical-clinics',
  industryName: 'Medical Clinics',
  seo: {
    title: 'Medical Clinic Marketing Agency | Bixeltek',
    description:
      'Help patients discover your medical clinic, understand the services you offer and take the next step. Bixeltek brings local SEO, Google Ads, clinic website improvements and enquiry measurement into one practical growth plan.',
  },

hero: {
  badge: 'Digital Growth for Medical Clinics',
  title: 'Turn Online Searches Into',
  highlightedTitle: 'Patient Enquiries',
  description:
    'Connect local SEO, Google Ads and a clearer clinic website to help prospective patients discover your services, understand their options and take the next step with confidence.',
  primaryCtaText: 'Schedule a 1-on-1 Consultation',
  primaryCtaLink: '#booking',
},

  overviewData: {
    badge: 'The Patient Decision Journey',
    title: 'A Patient Shouldn’t Have to Piece Together',
    highlightedTitle: 'Why, Where and How to Contact You',
    description:
      'A clinic may offer excellent care and still be difficult to choose online. Service information can be vague, location details may be hard to find, and the route from a Google search to a phone call can feel uncertain. Those gaps can cause people to leave before your team ever hears from them.',
    secondaryDescription:
      'We look at the journey from the patient’s first search to the enquiry: what they are trying to find, what information helps them decide, what could be creating hesitation and which next step should be easiest. The plan may involve improving your existing website, building focused service pages, strengthening local visibility or refining paid campaigns—not automatically rebuilding everything.',
    imageSrc: doctorConsultImg,
    imageAlt: 'Doctor in a modern clinic, representing the people and services patients want to learn about before making an enquiry',
    features: [
      {
        title: 'Make Each Service Understandable',
        description:
          'Explain the clinic’s actual services, who they are intended for, what a first visit involves and how someone can ask a question or request an appointment. Keep clinical information accurate and approved by the clinic.',
      },
      {
        title: 'Make Local Details Easy to Verify',
        description:
          'Keep clinic locations, opening hours, contact details, practitioner information and service availability clear and consistent wherever prospective patients discover you.',
      },
      {
        title: 'Make the Next Step Obvious',
        description:
          'Give visitors a clear route to call, enquire or use an existing booking process, especially on mobile. Reduce unnecessary friction without promising availability or outcomes the clinic cannot guarantee.',
      },
    ],
  },

  bentoGrid: {
    badge: 'What We Can Improve',
    headline: 'Fix the Gaps Between Being Found and Being Contacted',
    subheadline:
      'A clinic’s marketing is not just traffic. The service being promoted, the page a person lands on, the details they need and the way an enquiry is handled should all make sense together.',
    items: [
      {
        tag: '01 · Local Discovery',
        title: 'Show Up for the Services and Areas You Actually Serve',
        description:
          'Review local search visibility, Google Business Profile information, service-page coverage and location consistency. Prioritise relevant searches in the areas the clinic can realistically serve instead of chasing broad traffic with little appointment intent.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local intent first',
        chips: ['Google Business Profile', 'Clinic and service pages', 'Location consistency', 'Search intent review'],
      },
      {
        tag: '02 · Service Clarity',
        title: 'Answer the Questions Patients Need to Resolve',
        description:
          'Build or refine pages around real clinic services, with clear explanations, practitioner details where relevant, practical visit information and a suitable contact route.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: ['Accurate service descriptions', 'Relevant practitioner information', 'Clear location and contact details'],
      },
      {
        tag: '03 · Paid Search',
        title: 'Connect Search Ads to the Right Destination',
        description:
          'Align Google Ads keywords, ad copy and landing-page content so someone searching for a specific service does not land on an unrelated generic homepage.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Message match',
        chips: ['Search intent', 'Relevant landing pages', 'Budget and query reviews'],
      },
      {
        tag: '04 · Conversion Experience',
        title: 'Remove the Small Frictions That Stop an Enquiry',
        description:
          'Review mobile usability, page speed, call visibility, form length, error states and what happens after submission. Make the preferred next step easy to spot and test changes against meaningful enquiry signals.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          { label: 'Find', value: 'Relevant service' },
          { label: 'Understand', value: 'Clinic details' },
          { label: 'Contact', value: 'Clear next step' },
        ],
        chips: ['Mobile-first journey', 'Call and form UX', 'Thank-you states', 'Conversion measurement'],
      },
    ],
  },


comparison: {
  badge: 'A More Connected Approach',
  headline: 'Every Step Should Make It Easier to Choose Your Clinic',
  subheadline:
    'From the first search to the moment someone makes an enquiry, each interaction shapes how prospective patients understand your services, evaluate their options and decide what to do next.',

  leftLabel: 'What Patients Need',
  rightLabel: 'How We Help',
  featureLabel: 'Growth Opportunity',
  rightTag: 'Our Approach',

  cta: {
    label: 'Book a free audit',
    href: '#lead-form',
  },

  items: [
    {
      feature: 'Being Found at the Right Moment',
      industryStandard:
        'Patients may search for a particular speciality, explore a treatment or look for a clinic nearby. Their search intent varies depending on what they need.',
      ourApproach:
        'We align local SEO, business profile information and service-specific content with relevant searches and the locations your clinic serves.',
    },
    {
      feature: 'Understanding Your Services',
      industryStandard:
        'Visitors often want to know which services are available, who provides them and what to expect before deciding whether to contact a clinic.',
      ourApproach:
        'We organise service pages around real visitor questions, communicate your offerings clearly and make the next step easy to understand.',
    },
    {
      feature: 'Finding Relevant Information After an Ad Click',
      industryStandard:
        'People need a clear connection between the service they searched for, the message in an advertisement and the page they reach.',
      ourApproach:
        'We connect campaign targeting, ad messaging and landing-page content, then use search-term and enquiry data to guide improvements.',
    },
    {
      feature: 'Making Contact Feel Straightforward',
      industryStandard:
        'Visitors should be able to find the right contact details, use the website on mobile and understand what happens after submitting an enquiry.',
      ourApproach:
        'We make contact options visible, keep forms focused and clarify the next step while collecting only the information needed at that stage.',
    },
    {
      feature: 'Knowing Where to Improve',
      industryStandard:
        'Traffic, advertising clicks and enquiries offer different insights into how people discover and interact with a clinic.',
      ourApproach:
        'Where tracking and consent allow, we review available campaign and website data to understand enquiry quality, channel costs and opportunities for improvement.',
    },
  ],
},


  process: {
    badge: 'How We Work',
    headline: 'Start With the Patient Journey, Then Choose the Right Fix',
    subheadline:
      'A practical process that begins with the clinic’s goals and current setup. Scope and timing depend on the website, services, locations, access and campaign requirements.',
    steps: [
      {
        step: '01',
        title: 'Understand the Clinic and Its Priorities',
        summary:
          'Clarify which services and locations matter most, who the clinic wants to reach and what a useful enquiry means to the team.',
        details: [
          'Review services, locations and existing patient enquiry routes',
          'Discuss current marketing, constraints and business priorities',
          'Identify the most important gaps to investigate first',
        ],
      },
      {
        step: '02',
        title: 'Map Search Intent to Useful Information',
        summary:
          'Find where people discover the clinic and whether the pages they reach answer the questions behind their search.',
        details: [
          'Review local visibility and service-page coverage',
          'Check page relevance, mobile experience and contact paths',
          'Prioritise improvements by relevance, effort and available evidence',
        ],
      },
      {
        step: '03',
        title: 'Improve the Highest-Impact Touchpoints',
        summary:
          'Implement the right combination of content, website improvements, local SEO and paid campaigns instead of applying the same package to every clinic.',
        details: [
          'Refine or create service and location pages where needed',
          'Align Google Ads with the service and landing experience',
          'Keep clinic-approved details and contact routes consistent',
        ],
      },
      {
        step: '04',
        title: 'Measure, Learn and Refine',
        summary:
          'Establish a baseline, check whether the changes help people take the intended next step and use the findings to plan the next round of work.',
        details: [
          'Define useful enquiry and website actions before reporting',
          'Check tracking quality and privacy requirements',
          'Review results in context and prioritise the next improvements',
        ],
      },
    ],
  },

  metrics: {
    headline: 'Measure What Helps the Clinic Make Better Decisions',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local visibility',
        subtext: 'Review search queries, profile interactions and visits to service or location pages.',
      },
      {
        value: 'Engage',
        label: 'Useful service-page activity',
        subtext: 'Look at whether visitors reach key information and use meaningful contact actions.',
      },
      {
        value: 'Enquire',
        label: 'Calls and form submissions',
        subtext: 'Track relevant enquiries where measurement is available and permitted; validate quality with the clinic.',
      },
      {
        value: 'Improve',
        label: 'Cost and conversion trends',
        subtext: 'Compare channel costs and enquiry patterns over time, accounting for budget, seasonality and local competition.',
      },
    ],
  },

  faqs: {
    badge: 'Before You Get Started',
      headline: 'Questions About Growing Your Medical Clinic',
    items: [
      {
        question: 'What does a medical clinic marketing agency actually help with?',
        answer:
          'The work can include local SEO, Google Business Profile improvements, service-page content, Google Ads, website conversion improvements and enquiry measurement. The right mix depends on what the clinic offers, where it operates and what is currently preventing people from contacting it.',
      },
      {
        question: 'Should our clinic focus on SEO or Google Ads first?',
        answer:
          'It depends on the goal, competition, available budget and current visibility. Google Ads can provide a paid route to relevant searches, while SEO builds discoverability over time. We would review the current situation before recommending where to start; neither channel guarantees a particular number of enquiries.',
      },
      {
        question: 'Do we need a completely new website?',
        answer:
          'Not necessarily. If the existing site can support clear service information, a usable mobile experience and reliable contact paths, targeted improvements may be enough. A rebuild is worth considering only when the current platform or structure prevents important improvements.',
      },
      {
        question: 'Can you market individual specialties or services separately?',
        answer:
          'Yes, where the clinic genuinely provides those services. Dedicated pages and campaigns can answer more specific searches than a broad homepage, provided the content is accurate, clinically reviewed where appropriate and useful to the intended audience.',
      },
      {
        question: 'Can you help a clinic with more than one location?',
        answer:
          'Yes. The plan can account for multiple locations while keeping each address, opening hours, service availability and contact details accurate. The right page and campaign structure depends on how the clinics are organised and which services are offered at each site.',
      },
      {
        question: 'How do you know whether marketing is generating useful enquiries?',
        answer:
          'We can define measurable actions such as calls, form submissions and appointment-request clicks, then connect them to pages or campaigns where the available tools and consent requirements allow. The clinic’s feedback is important for distinguishing relevant enquiries from noise.',
      },
      {
        question: 'How do you handle healthcare privacy and clinical accuracy?',
        answer:
          'Clinic-approved information should be used for clinical claims, and tracking or form collection should be reviewed against the rules that apply to the clinic and its audience. Specific legal or regulatory compliance should be confirmed with the clinic’s qualified adviser; we do not assume every tool or setup is automatically compliant.',
      },
      {
        question: 'When should a clinic expect to see results?',
        answer:
          'There is no universal timeline. Paid campaigns can start collecting activity once approved and launched, while SEO typically requires sustained work and depends on competition and the site’s starting point. We agree on a baseline and review progress using the data available rather than promising a fixed result.',
      },
      {
        question: 'What should we prepare for an initial discussion?',
        answer:
          'Your website and clinic locations, the services you want to prioritise, your main business goal and any current marketing information are useful starting points. You do not need a perfect analytics setup to begin identifying the questions that should be investigated.',
      },
    ],
  },

  finalCta: {
    headline: 'Find the Missing Step Between a Patient’s Search and Your Clinic',
    subheadline:
      'Tell us which services or locations you want to grow and what feels difficult about your current online journey. We’ll discuss practical opportunities across local search, service content, advertising, website experience and enquiry measurement based on your actual setup.',
    bulletPoints: [
      'Find gaps in local search and service-page visibility',
      'Make clinic services and location details easier to understand',
      'Connect campaigns to relevant, useful landing pages',
      'Identify which enquiry actions can be measured and improved',
    ],
    buttonText: 'Discuss Your Clinic’s Growth',
  },
};

export const medicalClinicsPageV2 = medicalClinicsPage;
export const medicalClinicsV2Data = medicalClinicsPage;