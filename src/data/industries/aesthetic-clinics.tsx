
import React from 'react';
import { IndustryPageData } from '@/types/industry';
import aestheticClinicImg from '@/assets/aesthetic-overview.jpg';

export const aestheticClinicsPage: IndustryPageData = {
  slug: 'aesthetic-clinics',
  aliases: [
    'aesthetic-clinic',
    'aesthetics',
    'medical-aesthetics',
  ],
  industryName: 'Aesthetic Clinics',

  seo: {
    title: 'Aesthetic Clinic Marketing & Digital Growth | Bixeltek',
    description:
      'Grow your aesthetic clinic with Bixeltek. Connect local SEO, Google Ads, treatment pages, website development and conversion optimisation to help prospective clients discover your clinic and enquire with confidence.',
  },

  hero: {
    badge: 'Digital Growth for Aesthetic Clinics',
    title: 'Help More Clients Discover, Trust &',
    highlightedTitle: 'Choose Your Clinic',
    description:
      'Choosing an aesthetic treatment is a considered decision. Prospective clients compare clinics, research procedures, assess practitioner experience and look for reassurance before making contact. We connect search visibility, digital campaigns, treatment-focused websites and better consultation journeys to help your clinic attract relevant enquiries.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',
  },

    overviewData: {
      badge: 'A BETTER APPROACH TO AESTHETIC CLINIC GROWTH',
      title: (
        <>
          Grow Your Clinic With
          {' '}
        </>
      ),
      highlightedTitle: 'A More Connected Digital Strategy.',
      description:
        'Someone considering skin rejuvenation, laser treatments or injectable aesthetics may spend considerable time comparing their options before contacting a clinic. They want to understand what a treatment involves, whether it may be suitable, who performs it, what risks or limitations apply and how a consultation works. A polished website alone cannot answer these questions unless the information is thoughtfully organised.',
      secondaryDescription:
        'Bixeltek helps aesthetic clinics connect the different parts of that journey. We assess how prospective clients discover your treatments, whether your website communicates accurate information and professional credibility, how campaigns reach relevant audiences and where the enquiry process creates unnecessary friction. The priorities depend on your actual treatment offering, location, clinical approvals and business goals.',
      imageSrc: aestheticClinicImg,
      imageAlt:
        'Professional aesthetic clinic consultation setting with a practitioner discussing treatment options with a prospective client',
      features: [
        {
          title: 'Help Clients Find Relevant Treatments',
          description:
            'Organise your website and search presence around the services you genuinely provide. Help visitors move from a specific concern or treatment search to clear, clinic-approved information without navigating unrelated pages.',
        },
        {
          title: 'Build Confidence Before Consultation',
          description:
            'Make practitioner credentials, clinic information, consultation procedures, treatment considerations and appropriate evidence easy to evaluate. Present benefits and limitations responsibly rather than relying on exaggerated promises.',
        },
        {
          title: 'Make the Next Step Comfortable',
          description:
            'Give visitors a clear way to request a consultation, ask a question or contact your clinic. Explain what happens after submitting an enquiry, minimise unnecessary data collection and make the experience work smoothly on mobile.',
        },
      ],
    },

  bentoGrid: {
    badge: 'WHERE GROWTH OPPORTUNITIES EXIST',
    headline:
      'Connect Treatment Discovery With the Confidence to Enquire',
    subheadline:
      'Aesthetic clinic growth involves more than generating website visits. Each digital touchpoint should help the right prospective client understand your services, assess your clinic and take an appropriate next step.',

    items: [
      {
        tag: '01 · LOCAL SEO & DISCOVERY',
        title:
          'Be Visible When People Research Aesthetic Treatments Nearby',
        description:
          'People may search for a specific treatment, compare aesthetic clinics in their area or look for qualified practitioners. We review your local search presence, Google Business Profile, treatment-page coverage and location relevance. The goal is to make your actual services discoverable to people within a realistic catchment area, not simply increase traffic from unrelated searches.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Relevant local discovery',
        chips: [
          'Google Business Profile',
          'Treatment-specific SEO',
          'Local search visibility',
          'Clinic location pages',
          'Search intent analysis',
        ],
      },
      {
        tag: '02 · TREATMENT PAGES',
        title:
          'Give Every Priority Treatment the Information It Deserves',
        description:
          'A general services list rarely answers the questions people have about an individual procedure. We create or improve pages that explain the treatment, consultation process, suitability considerations, potential limitations and next steps using information approved by the clinic.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Clear treatment explanations',
          'Practitioner and clinic information',
          'Risks and limitations where relevant',
          'Consultation-focused next steps',
        ],
      },
      {
        tag: '03 · PAID ACQUISITION',
        title:
          'Reach Relevant Audiences Without Relying on Broad Advertising',
        description:
          'Google Ads and eligible social campaigns can support treatment awareness and enquiries when targeting, messaging and landing pages are aligned. We assess platform restrictions, local advertising rules and the nature of the treatments before recommending a campaign. Sensitive personal attributes and unsupported medical claims must not be used in ad messaging.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Policy-aware campaigns',
        chips: [
          'Google Search campaigns',
          'Eligible Meta campaigns',
          'Landing-page alignment',
          'Search-term refinement',
          'Campaign measurement',
        ],
      },
      {
        tag: '04 · WEBSITE & CONVERSION EXPERIENCE',
        title:
          'Make the Journey From Research to Consultation Easier',
        description:
          'A prospective client may be interested but not ready to book immediately. We review how your website presents practitioner information, treatment details, clinic facilities, FAQs and contact options. Then we improve navigation, mobile usability, form experience and consultation pathways so visitors can progress at a pace appropriate to their decision.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Explore',
            value: 'Treatments',
          },
          {
            label: 'Evaluate',
            value: 'The clinic',
          },
          {
            label: 'Connect',
            value: 'For consultation',
          },
        ],
        chips: [
          'Mobile-first experience',
          'Treatment page UX',
          'Consultation forms',
          'Practitioner credibility',
          'Conversion tracking',
          'Website performance',
        ],
      },
    ],
  },

  comparison: {
    badge: 'A MORE CONNECTED CLIENT JOURNEY',
    headline:
      'Help Prospective Clients Make Informed Decisions About Your Clinic',
    subheadline:
      'From discovering a treatment to evaluating the practitioner and arranging a consultation, each stage presents different questions. We help organise your digital presence around those decisions rather than expecting every visitor to enquire immediately.',

    leftLabel: 'What Prospective Clients Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Discovering Relevant Treatments',
        industryStandard:
          'Someone researching skin treatments, laser procedures or aesthetic consultations needs to identify clinics that genuinely provide the service they are considering. Their search may begin with a treatment name, a concern or a nearby location.',
        ourApproach:
          'We map relevant search demand to your approved treatment offering, improve local discovery and develop focused pages that connect each search with useful information about the services available at your clinic.',
      },
      {
        feature: 'Understanding Treatment Information',
        industryStandard:
          'Prospective clients often want to know what a procedure involves, whether an assessment is required, what limitations or risks may apply and what they should expect during the consultation process.',
        ourApproach:
          'We structure clinic-approved treatment content around real decision-making questions. Clear headings, accessible explanations, relevant FAQs and appropriate consultation guidance help visitors evaluate the service without misleading promises.',
      },
      {
        feature: 'Evaluating Practitioner Credibility',
        industryStandard:
          'For many aesthetic procedures, the qualifications and experience of the practitioner matter as much as the clinic environment. Visitors may look for credentials, professional background, clinical standards and credible information before making contact.',
        ourApproach:
          'We help present verified practitioner profiles, relevant qualifications, clinic information and appropriately approved supporting material. The objective is to make genuine credentials easier to assess rather than manufacture trust through unsupported claims.',
      },
      {
        feature: 'Comparing Clinics and Practical Details',
        industryStandard:
          'Visitors may compare locations, consultation availability, treatment approaches, published pricing information and the overall experience of contacting different clinics. Missing or confusing details can make that comparison difficult.',
        ourApproach:
          'We improve the visibility of practical clinic information, organise relevant FAQs and clarify the consultation process. Where appropriate, we help communicate pricing structures and factors affecting treatment costs without presenting misleading fixed promises.',
      },
      {
        feature: 'Taking the First Step',
        industryStandard:
          'Not every interested visitor is ready to commit to a procedure. Some want to request an assessment, ask about availability or understand whether a consultation is the appropriate next step.',
        ourApproach:
          'We design clear, low-friction consultation and enquiry routes, with accessible contact options, focused forms and understandable confirmation messages. Clinical suitability remains a decision for appropriately qualified professionals.',
      },
      {
        feature: 'Understanding Enquiry Quality',
        industryStandard:
          'Website traffic, ad clicks and social engagement can indicate interest, but they do not establish whether enquiries relate to available treatments or lead to attended consultations.',
        ourApproach:
          'We define measurable actions such as consultation requests, calls and eligible booking events. Where systems, consent and privacy requirements allow, we combine channel performance with clinic feedback to identify which activities attract relevant enquiries.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Growth Plan Built Around Your Treatments, Clinic and Clients',
    subheadline:
      'We begin by understanding the treatments you provide, the clients you want to reach and the digital experience you already have. Recommendations follow the evidence and your clinic’s priorities rather than a predefined marketing package.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Clinic and Treatment Priorities',
        summary:
          'We establish what your clinic offers, which services you want to develop and how consultations are currently handled.',
        details: [
          'Review approved treatments, practitioner information and clinic locations',
          'Understand consultation capacity, target catchment areas and business priorities',
          'Identify advertising restrictions and content approval requirements',
        ],
      },
      {
        step: '02',
        title: 'Review Discovery, Trust and Enquiry Gaps',
        summary:
          'We examine how prospective clients find your clinic, what information they encounter and where they may struggle to progress.',
        details: [
          'Assess local SEO, treatment-page visibility and existing campaign performance',
          'Review website usability, treatment content and practitioner credibility signals',
          'Evaluate consultation forms, mobile contact routes and existing analytics',
        ],
      },
      {
        step: '03',
        title: 'Prioritise the Most Useful Improvements',
        summary:
          'We develop a practical sequence of work based on the opportunities identified, your available resources and the importance of each part of the client journey.',
        details: [
          'Identify priority treatment pages and local visibility opportunities',
          'Determine whether website improvements, campaigns or a larger rebuild are appropriate',
          'Agree measurement requirements, approvals and implementation priorities',
        ],
      },
      {
        step: '04',
        title: 'Implement and Connect the Digital Experience',
        summary:
          'We improve the relevant touchpoints so discovery, information, advertising and consultation pathways support one another.',
        details: [
          'Build or refine treatment pages and conversion-focused website components',
          'Configure eligible campaigns and align messaging with landing pages',
          'Improve enquiry forms, contact options and approved tracking integrations',
        ],
      },
      {
        step: '05',
        title: 'Validate the Experience and Tracking',
        summary:
          'Before relying on performance reports, we check whether the implemented experience works correctly and whether important actions are being recorded as intended.',
        details: [
          'Test mobile usability, forms, contact actions and page performance',
          'Validate conversion events and analytics configuration',
          'Review published treatment content and advertising against required approvals',
        ],
      },
      {
        step: '06',
        title: 'Review Enquiry Quality and Refine',
        summary:
          'We use available performance data and feedback from the clinic to decide which improvements deserve further attention.',
        details: [
          'Review relevant searches, campaign spend and consultation enquiry trends',
          'Identify friction, irrelevant leads and underperforming treatment pages',
          'Adjust priorities based on actual findings, clinic capacity and business goals',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure Progress From Treatment Discovery to Consultation Enquiry',
    items: [
      {
        value: 'Discover',
        label: 'Relevant treatment visibility',
        subtext:
          'Review treatment-related search queries, local discovery, Google Business Profile activity and visits to priority pages. Visibility should be assessed against the clinic’s actual services and locations.',
      },
      {
        value: 'Evaluate',
        label: 'Engagement with useful information',
        subtext:
          'Assess engagement with treatment pages, practitioner profiles, FAQs and consultation information. These signals help identify areas to investigate but do not independently prove client confidence.',
      },
      {
        value: 'Enquire',
        label: 'Consultation requests and calls',
        subtext:
          'Track agreed contact actions, forms and booking events where technically available and permitted. Use clinic feedback to distinguish relevant consultation enquiries from spam or unrelated requests.',
      },
      {
        value: 'Improve',
        label: 'Enquiry quality and acquisition efficiency',
        subtext:
          'Compare eligible campaign costs, enquiry trends and available consultation outcomes over time. Interpret results in the context of treatment demand, competition, seasonality and appointment availability.',
      },
    ],
  },

  faqs: {
    badge: 'COMMON QUESTIONS',
    headline:
      'Growing Your Aesthetic Clinic: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our aesthetic clinic attract more consultation enquiries?',
        answer:
          'We start by understanding your treatments, locations, ideal client journey and current digital performance. Depending on the gaps, we may recommend local SEO, treatment-page improvements, Google Ads, eligible social campaigns, website development, conversion optimisation or better enquiry tracking. The objective is to help relevant prospective clients discover your clinic, evaluate the information they need and make contact. Results depend on demand, competition, budget, clinic capacity and the quality of the overall experience.',
      },
      {
        question:
          'Should our aesthetic clinic invest in SEO or Google Ads first?',
        answer:
          'The right starting point depends on your current visibility, budget, treatment priorities and website readiness. SEO can support ongoing discovery for relevant treatments and local searches, while Google Ads may provide a way to test eligible, high-intent search demand. Some treatments or promotional approaches may face advertising restrictions. We review those conditions alongside your website and consultation process before recommending a channel.',
      },
      {
        question:
          'Do we need individual website pages for every aesthetic treatment?',
        answer:
          'Not necessarily. Dedicated pages can be useful when treatments have distinct search demand, consultation requirements or questions that cannot be answered clearly on a general services page. We prioritise treatments your clinic actually offers and avoid creating repetitive pages simply to target more keywords. Every published page should use accurate, clinic-approved information about the procedure and its limitations.',
      },
      {
        question:
          'Can you market treatments such as Botox, fillers, laser procedures or skin rejuvenation?',
        answer:
          'We can assess digital opportunities for the treatments your clinic is authorised to provide, but the available advertising options vary by treatment, jurisdiction and platform. Prescription-only products, injectable procedures, sensitive health-related targeting and certain treatment claims may be restricted or prohibited in specific contexts. We review the applicable requirements before proposing campaigns and rely on the clinic’s qualified team for medical accuracy and approval.',
      },
      {
        question:
          'Can you improve our existing aesthetic clinic website instead of rebuilding it?',
        answer:
          'Yes. A complete rebuild is not always necessary. We first assess the current platform, mobile usability, treatment-page structure, speed, practitioner information and consultation journey. If the existing website can support the necessary improvements, targeted development and CRO work may be more practical. A rebuild is considered when the current system creates meaningful technical, content or operational limitations.',
      },
      {
        question:
          'How do you help build trust without making exaggerated treatment claims?',
        answer:
          'We focus on information visitors can genuinely evaluate, such as verified practitioner credentials, clinic details, accurate treatment explanations, consultation procedures and relevant policies. Testimonials, treatment photographs and before-and-after material require appropriate permissions and must comply with applicable rules. We do not invent clinical results, promise outcomes or substitute marketing content for professional medical advice.',
      },
      {
        question:
          'Is Instagram or Meta advertising important for aesthetic clinics?',
        answer:
          'Visual platforms can help some clinics communicate their brand, facilities, educational content and eligible services. However, aesthetic and health-related advertising is subject to platform policies, including restrictions around personal attributes, sensitive targeting, procedures and claims. We evaluate whether Meta campaigns are suitable for your offering and whether they support your wider client acquisition journey rather than treating social engagement as the main success measure.',
      },
      {
        question:
          'Can you help improve consultation bookings and follow-up processes?',
        answer:
          'We can review the digital steps around consultation requests, including website forms, booking integrations, enquiry routing, confirmation messages and appropriate administrative follow-up workflows. Where useful, these can connect with existing CRM or booking systems. The clinic remains responsible for clinical assessments, treatment recommendations, sensitive patient information and compliance with applicable privacy requirements.',
      },
      {
        question:
          'How will we know whether the marketing is bringing relevant clients?',
        answer:
          'We define meaningful actions such as calls, consultation forms and booking requests, then configure appropriate measurement where consent, platform capabilities and the technical setup permit. We also encourage feedback from the clinic about enquiry relevance, appointment attendance and common questions. Not every consultation or eventual treatment can be attributed reliably to a single marketing channel, so reporting should acknowledge those limitations.',
      },
      {
        question:
          'What affects the cost and timeline of growing an aesthetic clinic online?',
        answer:
          'The scope depends on your current website, number of priority treatments, locations, existing search visibility, advertising requirements, integrations and content readiness. Improving a few existing treatment pages is different from rebuilding a website or establishing a complete acquisition and tracking system. We review your priorities and current setup before recommending a phased scope, budget and realistic implementation plan.',
      },
      {
        question:
          'What information should we prepare before discussing our clinic’s growth?',
        answer:
          'It helps to share your website, clinic locations, treatment list, practitioner information, priority services and the main challenges you want to address. Existing advertising or analytics data, booking information and content approval requirements can also help. You do not need to have every detail prepared before the first conversation; we can identify the most important information during the initial assessment.',
      },
    ],
  },

  finalCta: {
    headline:
      'Help the Right Clients Find and Choose Your Aesthetic Clinic',
    subheadline:
      'Whether you want to improve treatment visibility, strengthen your website, reach relevant audiences or make consultation enquiries easier, we can help you identify where your digital experience needs attention. Tell us about your clinic and the treatments you want to prioritise.',
    bulletPoints: [
      'Review treatment visibility and local search opportunities',
      'Identify gaps in website content, trust and consultation experience',
      'Explore suitable advertising and digital growth channels',
      'Connect enquiry journeys with meaningful performance measurement',
    ],
    buttonText: 'Discuss Your Clinic’s Growth',
  },
};

export const aestheticClinicsPageV2 = aestheticClinicsPage;
export const aestheticClinicsV2Data = aestheticClinicsPage;
