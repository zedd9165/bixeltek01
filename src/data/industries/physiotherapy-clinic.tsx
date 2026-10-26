import React from 'react';
import { IndustryPageData } from '@/types/industry';
import physiotherapyClinicImg from '@/assets/physiotherapy-overview.jpg';

/**
 * Physiotherapy clinics industry page.
 * Conversion-led content built around how people choose a physiotherapist:
 * understand the service, check practical details, and make an enquiry.
 * Replace the image import with an approved physiotherapy-specific asset if available.
 */
export const physiotherapyClinicsPage: IndustryPageData = {
  slug: 'physiotherapy-clinics',
  aliases: ['physiotherapy', 'physiotherapy-clinic'],
  industryName: 'Physiotherapy Clinics',
  seo: {
    title: 'Physiotherapy Marketing Agency | Bixeltek',
    description:
      'Help more people find your physiotherapy clinic and enquire about the right service. Bixeltek connects local SEO, Google Ads, service pages and conversion-focused website improvements around the way patients search for physiotherapy.',
  },

  hero: {
    badge: 'Marketing for Physiotherapy Clinics',
    title: 'Turn Local Searches Into',
    highlightedTitle: 'Physiotherapy Enquiries',
    description:
      'People searching for a physiotherapist want to know whether you can help, which services you offer, where you are located and how to book. We connect local search, relevant campaigns and a clearer website journey so the next step is easier to take.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

  overviewData: {
    badge: 'Built Around the Patient’s Decision',
    title: (
      <>
        A Smarter Way to Grow <br className="hidden sm:inline" />
      </>
    ),
    highlightedTitle: 'Your Medical Practice',
    description:
      'Someone looking for back-pain support, sports rehabilitation or help after surgery is not simply browsing “healthcare.” They are looking for a service that fits their situation, a clinic they can realistically visit and a clear way to ask about the next appointment. If your website makes those answers hard to find, the person may continue comparing other clinics.',
    secondaryDescription:
      'Bixeltek helps physiotherapy practices make that decision easier. We review how people discover your clinic, how clearly your services are explained, whether location and practitioner details build confidence, and how smoothly a visitor can call or enquire. Then we prioritise the changes most relevant to your services, capacity and growth goals.',
    imageSrc: physiotherapyClinicImg,
    imageAlt:
      'Healthcare professional in a clinical setting, representing the expertise and service information patients look for when choosing a physiotherapy clinic',
    features: [
      {
        title: 'Match the Search to the Service',
        description:
          'Give distinct services a clear destination—such as sports physiotherapy, musculoskeletal care or post-operative rehabilitation when offered—so visitors can quickly confirm that your clinic provides the support they are looking for.',
      },
      {
        title: 'Answer Practical Questions Before the Call',
        description:
          'Make your clinic location, practitioner information, appointment process, opening hours and what to expect from an initial visit easy to find. Use clinic-approved descriptions and avoid promising specific recovery outcomes.',
      },
      {
        title: 'Make Enquiry the Natural Next Step',
        description:
          'Keep phone, enquiry and booking options visible on mobile. Remove unnecessary form friction and make it clear what happens after someone contacts the clinic.',
      },
    ],
  },

  bentoGrid: {
    badge: 'Where We Focus',
    headline: 'Improve the Steps That Turn Physiotherapy Searches Into Enquiries',
    subheadline:
      'More traffic alone is not the goal. The search, service page and contact experience should line up—so the right local visitor can understand your offering and take a useful next step.',
    items: [
      {
        tag: '01 · Local SEO',
        title: 'Be Discoverable for the Services You Actually Offer',
        description:
          'Review local search visibility, Google Business Profile information and service-and-location page coverage. Focus on relevant searches in the areas your clinic serves instead of broad terms that bring visitors who are unlikely to attend.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local relevance',
        chips: [
          'Google Business Profile',
          'Service and location pages',
          'Local search intent',
          'Consistent clinic details',
        ],
      },
      {
        tag: '02 · Service Pages',
        title: 'Give Each Priority Service a Clear Destination',
        description:
          'Create or improve pages for services your clinic provides, such as sports physiotherapy, back and neck care, mobility support or rehabilitation after surgery. Each page should answer the visitor’s likely questions and lead to a relevant contact option.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Accurate service descriptions',
          'Who the service may suit',
          'Clear appointment next step',
        ],
      },
      {
        tag: '03 · Google Ads',
        title: 'Reach People Searching With a Clear Need',
        description:
          'Align campaign keywords, ad messages and landing pages with the services and locations you want to promote. Review search terms and spend regularly so irrelevant clicks can be identified and addressed.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Intent-led campaigns',
        chips: [
          'Service-specific ad groups',
          'Location targeting',
          'Search-term reviews',
        ],
      },
      {
        tag: '04 · Website Conversion',
        title: 'Remove Friction Between “This Looks Right” and “Contact the Clinic”',
        description:
          'Review the mobile layout, page speed, phone visibility, form length and clarity of the booking process. Make it easy to ask a question or request an appointment without forcing every visitor through the same route.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          { label: 'Understand', value: 'The service' },
          { label: 'Check', value: 'Clinic details' },
          { label: 'Enquire', value: 'With confidence' },
        ],
        chips: [
          'Mobile-first contact paths',
          'Call and form usability',
          'Clear submission confirmation',
          'Conversion event tracking',
        ],
      },
    ],
  },

 
    comparison: {
      badge: 'A More Connected Approach',
      headline: 'Make It Easier for Patients to Choose Your Physiotherapy Clinic',
      subheadline:
        'From finding a nearby clinic to understanding available treatments and making an enquiry, each step should help people feel informed about their options and confident about what to do next.',

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
          feature: 'Being Found for Relevant Services',
          industryStandard:
            'People may search for sports physiotherapy, back and neck care, mobility support or rehabilitation near them. Their searches often reflect a specific need or goal.',
          ourApproach:
            'We align local SEO, business profile information and service-specific content with the treatments your clinic offers and the locations it serves.',
        },
        {
          feature: 'Understanding Treatment Options',
          industryStandard:
            'Visitors may want to understand which services are available, what a session involves and whether the clinic offers support for their particular needs.',
          ourApproach:
            'We organise service pages around common patient questions, explain available treatments in accessible language and make it easy to enquire about the appropriate next step.',
        },
        {
          feature: 'Connecting Searches With Relevant Campaigns',
          industryStandard:
            'Someone searching for a specific physiotherapy service should find information that relates directly to that search, rather than having to navigate a general homepage.',
          ourApproach:
            'We connect campaign targeting, ad messaging and landing-page content, then use search-term and enquiry data to identify opportunities for refinement.',
        },
        {
          feature: 'Making Appointment Enquiries Easier',
          industryStandard:
            'Patients should be able to find contact details, understand how to ask about an appointment and use the website comfortably on a mobile device.',
          ourApproach:
            'We make contact options easy to use, keep enquiry forms focused and explain what happens next, while collecting only the information needed at that stage.',
        },
        {
          feature: 'Understanding What Drives Enquiries',
          industryStandard:
            'Website visits and advertising clicks can show interest, but they do not tell the whole story of how people go on to contact a clinic.',
          ourApproach:
            'Where tracking and consent allow, we review calls, form submissions and available booking actions alongside campaign costs and enquiry relevance to guide future improvements.',
        },
      ],
    },

  process: {
    badge: 'From Audit to Improvement',
    headline: 'A Practical Plan for Growing Your Physiotherapy Clinic',
    subheadline:
      'We start with your services, catchment area and current patient enquiry journey. The work is prioritised around your actual setup—not a fixed package or an unsupported promise of results.',
    steps: [
      {
        step: '01',
        title: 'Choose the Services and Locations to Prioritise',
        summary:
          'Clarify what the clinic wants to grow, which areas it serves and what a good enquiry looks like for the team.',
        details: [
          'Review priority services, locations and appointment routes',
          'Understand current marketing activity and capacity',
          'Agree the business questions the work should answer',
        ],
      },
      {
        step: '02',
        title: 'Find Where Potential Patients Drop Off',
        summary:
          'Review how people discover the clinic and whether the information they need is available before they decide to contact you.',
        details: [
          'Assess local search presence and service-page coverage',
          'Check mobile usability, page relevance and contact visibility',
          'Identify the most important gaps and opportunities',
        ],
      },
      {
        step: '03',
        title: 'Improve the Highest-Priority Touchpoints',
        summary:
          'Apply the right mix of SEO, landing-page improvements, Google Ads and website conversion work to the problems identified.',
        details: [
          'Refine or create focused service and location pages',
          'Align campaigns with the service and the page visitors reach',
          'Make calls, enquiries or existing booking routes easier to use',
        ],
      },
      {
        step: '04',
        title: 'Measure Enquiries and Decide What Comes Next',
        summary:
          'Establish a baseline, check whether the intended actions are being recorded correctly and use the findings to guide the next improvements.',
        details: [
          'Define the call, form or booking actions worth measuring',
          'Check tracking quality and applicable privacy requirements',
          'Review channel costs, enquiry relevance and next priorities',
        ],
      },
    ],
  },

  metrics: {
    headline: 'Measure the Journey From Local Discovery to Enquiry',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local visibility',
        subtext:
          'Review service-related search queries, local profile interactions and visits to priority service pages.',
      },
      {
        value: 'Evaluate',
        label: 'Useful service-page engagement',
        subtext:
          'Check whether visitors reach practical information, understand the service and use the intended contact options.',
      },
      {
        value: 'Enquire',
        label: 'Calls and appointment requests',
        subtext:
          'Measure calls, forms or booking actions where tracking is available and permitted, then validate enquiry relevance with the clinic.',
      },
      {
        value: 'Refine',
        label: 'Cost and conversion trends',
        subtext:
          'Compare channel costs and enquiry patterns over time, taking account of budget, location, seasonality and available appointment capacity.',
      },
    ],
  },

  faqs: {
    badge: 'Questions Physiotherapy Clinics Ask',
    headline: 'Physiotherapy Marketing, Explained',
    items: [
      {
        question: 'How can marketing help a physiotherapy clinic get more enquiries?',
        answer:
          'Marketing can help relevant local patients discover the clinic, understand which services are available and find a clear way to make contact. The work may include local SEO, Google Ads, service-page improvements and a simpler mobile enquiry journey. Enquiry volume depends on factors such as local demand, competition, budget, clinic capacity, and the quality of the experience.',
      },
      {
        question: 'Should we promote the whole clinic or individual physiotherapy services?',
        answer:
          'Usually, the decision depends on your priorities and the services you actually provide. A clinic overview helps people understand the practice, while focused pages can better answer searches for specific services such as sports physiotherapy or post-operative rehabilitation. We would prioritise the pages that match your goals and patient demand rather than create pages for every possible treatment.',
      },
      {
        question: 'Is local SEO important for physiotherapy clinics?',
        answer:
          'Local SEO helps people discover and assess a clinic when they search for physiotherapy in a particular area. Accurate business details, a well-maintained Google Business Profile and useful service and location pages can support that discovery. Results vary by location, competition, website history and ongoing work.',
      },
      {
        question: 'When should a physiotherapy clinic use Google Ads?',
        answer:
          'Google Ads may be useful when you want to target relevant searches for a priority service or location and have a budget to test demand. Before launching, it is important to check the landing page, targeting, search terms, enquiry tracking and the clinic’s ability to respond to new enquiries.',
      },
      {
        question: 'Do we need a separate landing page for sports physiotherapy or rehabilitation?',
        answer:
          'A separate page can help when a service has a distinct audience, search intent or set of questions. It should explain only services the clinic genuinely offers, provide useful and accurate information, and make contacting the clinic straightforward. A separate page is not automatically necessary for every treatment.',
      },
      {
        question: 'Can you improve our current website instead of replacing it?',
        answer:
          'Yes, if the existing platform can support the improvements needed. We can review service content, mobile experience, page speed, calls to action and enquiry routes before recommending a larger rebuild. The recommendation should follow the audit, not precede it.',
      },
      {
        question: 'How do you measure whether enquiries are useful?',
        answer:
          'We can measure agreed actions such as phone clicks, calls, forms or booking requests where the technical setup and consent requirements allow. The clinic’s feedback helps distinguish relevant enquiries from missed calls, spam or requests for services that are not offered.',
      },
      {
        question: 'Can you promise a certain number of new patients?',
        answer:
          'No responsible marketing plan can guarantee a fixed number of new patients in every location and situation. Demand, competition, budget, availability, response time and the patient experience all affect outcomes. We focus on improving the parts we can measure and influence, then use actual data to guide decisions.',
      },
      {
        question: 'What do you need to get started?',
        answer:
          'Start with your website, clinic location or locations, the services you want to prioritise and your main growth challenge. Existing ad or analytics data can help, but we can identify what is needed during the initial review.',
      },
    ],
  },

  finalCta: {
    headline: 'Make It Easier for the Right Patients to Choose Your Clinic',
    subheadline:
      'Tell us which physiotherapy services and locations you want to focus on. We’ll look at how people find your clinic, what they see before contacting you and which practical improvements could make the biggest difference to your enquiry journey.',
    bulletPoints: [
      'Identify gaps in local search and service-page visibility',
      'Make priority services and clinic details easier to understand',
      'Connect Google Ads to relevant pages and contact options',
      'Measure calls and appointment enquiries where possible',
    ],
    buttonText: 'Discuss Your Clinic’s Growth',
  },
};

export const physiotherapyClinicsV2Data = physiotherapyClinicsPage;
export const physiotherapyClinicsPageV2 = physiotherapyClinicsPage;
export const physiotherapyPage = physiotherapyClinicsPage;
