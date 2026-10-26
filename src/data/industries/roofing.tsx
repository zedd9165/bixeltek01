
import React from 'react';
import { IndustryPageData } from '@/types/industry';

// PLACEHOLDER IMAGE:
// Replace this with an approved roofing industry image.
// Verify the asset path in the actual project.
import roofingOverviewImg from '@/assets/roofing-overview.jpg';

/**
 * Bixeltek — Roofing Industry Page
 *
 * Category: Home & Local Services
 *
 * Primary audiences:
 * - Residential roofing contractors
 * - Commercial roofing companies
 * - Roof repair specialists
 * - Roof replacement and installation businesses
 * - Roofing companies serving multiple locations
 *
 * Customer journey:
 * Search -> Evaluate -> Contact -> Estimate -> Follow-up
 *
 * Content priorities:
 * Local discovery, service relevance, trust, conversion,
 * lead quality, service-area coverage and enquiry handling.
 */

export const roofingV2Data: IndustryPageData = {
  slug: 'roofing',
  aliases: [
    'roofing-companies',
    'roofing-contractors',
    'roofing-services',
  ],
  industryName: 'Roofing',

  seo: {
    title:
      'Roofing Marketing & Digital Growth Solutions | Bixeltek',
    description:
      'Help more local customers find and contact your roofing company. Bixeltek connects roofing SEO, Google Ads, websites, lead tracking and automation to support qualified enquiries.',
  },

  hero: {
    badge: 'DIGITAL GROWTH FOR ROOFING COMPANIES',
    title: 'Turn Local Searches Into',
    highlightedTitle: 'Booked Roofing Jobs',
    description:
      'When someone needs a roof repaired or replaced, they want a contractor who serves their area, understands the job and is easy to reach. We help roofing companies improve local visibility, build credibility and turn relevant searches into calls and estimate requests through connected SEO, Google Ads, website development and conversion optimisation.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },

  overviewData: {
    badge: 'UNDERSTANDING HOW CUSTOMERS CHOOSE ROOFERS',
    title: (
      <>
        Roofing Customers Need Answers.
        {' '}
      </>
    ),
    highlightedTitle: 'Your Digital Presence Should Deliver Them.',
    description:
      'Emergency leak repairs demand immediate response times, while full roof replacements require vetting warranties, past projects, and contractor credentials. Unclear service areas or clumsy quote forms create hesitation, prompting property owners to call the next contractor on Google. Clear proof and quick contact options bridge that gap.',
    secondaryDescription:
      'Bixeltek connects local search visibility, verified project galleries, and frictionless estimate requests into a cohesive acquisition system. We examine how homeowners and property managers evaluate your services, eliminating friction points across search campaigns, mobile landing pages, and lead intake to ensure high-intent visitors turn into booked inspections.',
    imageSrc: roofingOverviewImg,
    imageAlt:
      'Professional roofing contractors inspecting and working on a residential roof, representing roofing expertise and local service delivery',
    features: [
      {
        title: 'Be Visible in the Areas You Actually Serve',
        description:
          'Connect roofing services with relevant towns, neighbourhoods and service areas. Help local customers confirm that your team covers their property without creating repetitive or misleading location pages.',
      },
      {
        title: 'Give Customers Reasons to Trust Your Work',
        description:
          'Present real roofing projects, relevant experience, verified credentials, service information and clear expectations so homeowners and commercial buyers can assess whether your company is a suitable choice.',
      },
      {
        title: 'Make Calls and Estimate Requests Easier',
        description:
          'Provide straightforward contact routes for urgent repairs, planned replacements and commercial enquiries. Reduce unnecessary form friction and make it clear what happens after someone gets in touch.',
      },
    ],
  },

  bentoGrid: {
    badge: 'WHERE WE FOCUS',
    headline:
      'Build a Better Journey From Roofing Search to Estimate Request',
    subheadline:
      'Roofing leads are not all the same. A useful digital strategy connects the service someone needs, the area you cover and the next action they are ready to take.',

    items: [
      {
        tag: '01 · LOCAL SEO',
        title:
          'Show Up for Roofing Searches in Your Service Areas',
        description:
          'People search for roof repair, replacement, installation and local roofing contractors using different terms and locations. We assess your Google Business Profile, organic search visibility, service pages and geographic coverage. Then we improve the information and website structure that help relevant local customers discover your business, without relying on duplicate city pages or locations where you do not genuinely operate.',
        colSpan: 'col-span-2',
        accent: 'navy',
        pill: 'Local search visibility',
        chips: [
          'Google Business Profile',
          'Roofing service SEO',
          'Service-area pages',
          'Local search intent',
          'Technical SEO',
          'Business information consistency',
        ],
      },
      {
        tag: '02 · GOOGLE ADS',
        title:
          'Reach Customers Searching for Roofing Help',
        description:
          'Google Ads can help roofing companies reach people searching for specific services in eligible locations. We structure campaigns around relevant roofing needs, review search terms and align ads with suitable landing pages. Budget decisions should reflect the value of different job types, local competition and your capacity to respond.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Intent-led campaigns',
        chips: [
          'Roof repair searches',
          'Roof replacement campaigns',
          'Location targeting',
          'Negative keywords',
          'Conversion tracking',
        ],
      },
      {
        tag: '03 · SERVICE PAGES',
        title:
          'Give Each Roofing Service a Clear Destination',
        description:
          'A visitor searching for flat roof repair should not have to work through a general company homepage to confirm whether you offer it. We organise pages around your actual services, such as roof inspections, leak repairs, replacement, new installation or commercial roofing, with relevant project information and clear estimate options.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Service-specific information',
          'Relevant project examples',
          'Service-area clarity',
          'Inspection and estimate CTAs',
        ],
      },
      {
        tag: '04 · WEBSITE & CONVERSION',
        title:
          'Turn Website Visits Into Calls and Estimate Enquiries',
        description:
          'Roofing customers often compare several contractors before deciding whom to contact. We review mobile usability, phone visibility, service navigation, project proof and estimate forms. Then we improve the path from identifying the right service to making an enquiry, with separate routes where urgent repairs, planned projects or commercial requirements justify them.',
        colSpan: 'col-span-2',
        accent: 'cyan',
        stats: [
          {
            label: 'Find',
            value: 'The service',
          },
          {
            label: 'Verify',
            value: 'The contractor',
          },
          {
            label: 'Request',
            value: 'An estimate',
          },
        ],
        chips: [
          'Mobile-first contact',
          'Click-to-call',
          'Estimate request forms',
          'Project galleries',
          'Trust and credibility',
          'Landing-page optimisation',
        ],
      },
      {
        tag: '05 · LEAD TRACKING',
        title:
          'Understand Which Channels Bring Relevant Roofing Enquiries',
        description:
          'Clicks and form submissions are useful signals, but a roofing business also needs to understand whether enquiries concern the right services and locations. We configure suitable call, form and campaign tracking where available and permitted, then use business feedback to help distinguish relevant project opportunities from spam and unrelated requests.',
        colSpan: 'col-span-1',
        accent: 'teal',
        checklist: [
          'Call conversion measurement',
          'Form submission tracking',
          'Campaign attribution',
          'Enquiry quality reporting',
        ],
      },
      {
        tag: '06 · ENQUIRY AUTOMATION',
        title:
          'Keep New Enquiries From Getting Lost Between Jobs',
        description:
          'Roofing teams are often on-site when potential customers call or submit forms. We can help connect website enquiries to CRM systems, notifications and suitable follow-up workflows so requests reach the right person. The setup should reflect working hours, service priorities and who is responsible for responding, rather than promising instant availability your team cannot provide.',
        colSpan: 'col-span-1',
        accent: 'orange',
        pill: 'Connected lead handling',
        chips: [
          'CRM integrations',
          'Lead notifications',
          'Enquiry routing',
          'Follow-up workflows',
          'Lead status reporting',
        ],
      },
    ],
  },

  comparison: {
    badge: 'FROM SEARCH TO SERVICE ENQUIRY',
    headline:
      'Make It Easier for Roofing Customers to Choose Your Company',
    subheadline:
      'Whether someone needs an urgent repair, a planned roof replacement or a commercial roofing contractor, their decision depends on finding the right information and feeling confident enough to make contact.',

    leftLabel: 'What Roofing Customers Need',
    rightLabel: 'How We Help',
    featureLabel: 'Part of the Journey',
    rightTag: 'Our Approach',

    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },

    items: [
      {
        feature: 'Finding a Local Roofing Contractor',
        industryStandard:
          'Customers often search for roofers near their property or within a specific town. They need to confirm that the contractor works in their area and provides the roofing service they require.',
        ourApproach:
          'We align your Google Business Profile, local SEO and service-area content with genuine operating locations and the roofing services you offer, helping relevant customers discover and evaluate your business.',
      },
      {
        feature: 'Matching the Right Roofing Service',
        industryStandard:
          'A leaking roof, damaged shingles, planned replacement and commercial roof project can involve very different needs. Customers want to know whether a contractor handles their particular type of work.',
        ourApproach:
          'We structure service pages and relevant campaigns around distinct roofing needs, using accurate descriptions, appropriate examples and clear enquiry options instead of sending every visitor to the same generic page.',
      },
      {
        feature: 'Evaluating Experience and Workmanship',
        industryStandard:
          'Homeowners and property managers may compare completed projects, experience, materials, credentials, customer feedback and available warranty information before requesting an estimate.',
        ourApproach:
          'We help present genuine project photographs, verified reviews, relevant credentials and approved workmanship information in places where visitors can easily find them. We avoid unsupported claims or guarantees.',
      },
      {
        feature: 'Understanding the Estimate Process',
        industryStandard:
          'Before contacting a roofer, customers may want to know whether inspections are offered, what information they should provide and what happens after submitting a request.',
        ourApproach:
          'We design clear estimate and inspection enquiry routes, explain the next steps and ask for practical information such as service type, property location and preferred contact details without making forms unnecessarily long.',
      },
      {
        feature: 'Contacting the Company at the Right Time',
        industryStandard:
          'A homeowner dealing with an active leak may prefer to call, while someone planning a roof replacement may be comfortable completing a form. Commercial buyers may need a more detailed project enquiry route.',
        ourApproach:
          'We make suitable contact methods easy to access, particularly on mobile, and create differentiated enquiry journeys when useful. Emergency availability is communicated only when the roofing company actually provides it.',
      },
      {
        feature: 'Getting a Clear Response and Follow-Up',
        industryStandard:
          'After making contact, customers want to know their request has been received and what to expect next. Missed calls, unclear ownership or inconsistent follow-up can make the process frustrating.',
        ourApproach:
          'We can connect forms, call measurement, notifications and CRM workflows so the team can review incoming requests and follow up consistently. Reporting helps identify which channels and service types produce useful enquiries.',
      },
    ],
  },

  process: {
    badge: 'HOW WE WORK',
    headline:
      'A Roofing Growth Plan Built Around Your Services and Service Areas',
    subheadline:
      'We start by understanding the roofing work you want to attract, where your crews operate and how enquiries are currently handled. Then we prioritise the digital improvements most relevant to your business.',

    steps: [
      {
        step: '01',
        title: 'Understand Your Roofing Business',
        summary:
          'We establish your service mix, geographic coverage, customer types and commercial priorities before deciding which channels or improvements to recommend.',
        details: [
          'Review residential and commercial roofing services',
          'Identify priority towns, service areas and crew capacity',
          'Understand average job types, enquiry handling and business goals',
        ],
      },
      {
        step: '02',
        title: 'Audit Search Visibility and Lead Experience',
        summary:
          'We examine how customers currently discover your business and whether the website gives them enough information and confidence to make contact.',
        details: [
          'Assess Google Business Profile and local organic visibility',
          'Review service pages, mobile experience and project proof',
          'Check existing ads, forms, call routes and measurement gaps',
        ],
      },
      {
        step: '03',
        title: 'Prioritise Services, Locations and Channels',
        summary:
          'We identify which services and areas deserve attention first, considering customer demand, competition, job value and operational capacity.',
        details: [
          'Map priority roofing services to relevant search intent',
          'Plan useful service and geographic content',
          'Determine suitable SEO, Google Ads and website improvements',
        ],
      },
      {
        step: '04',
        title: 'Improve and Connect the Customer Journey',
        summary:
          'We implement the agreed website, search, advertising and enquiry improvements so customers can move from discovery to a relevant contact action.',
        details: [
          'Develop or refine service pages and landing pages',
          'Launch or optimise relevant search campaigns',
          'Improve mobile calls, estimate forms and enquiry routing',
        ],
      },
      {
        step: '05',
        title: 'Validate Tracking and Lead Handling',
        summary:
          'We test the experience and check whether the agreed enquiry actions are being measured before using the data to evaluate performance.',
        details: [
          'Test contact forms, call buttons and submission confirmations',
          'Validate available conversion tracking and campaign attribution',
          'Review notifications, CRM handoffs and response ownership',
        ],
      },
      {
        step: '06',
        title: 'Review Lead Quality and Refine',
        summary:
          'We assess which services, locations and channels are generating useful enquiries and adjust the strategy based on evidence and feedback from your team.',
        details: [
          'Review calls, forms, campaign costs and relevant search queries',
          'Identify irrelevant enquiries and conversion friction',
          'Refine budgets, landing pages and priorities based on actual findings',
        ],
      },
    ],
  },

  metrics: {
    headline:
      'Measure the Journey From Local Search to Roofing Enquiry',
    items: [
      {
        value: 'Discover',
        label: 'Relevant local visibility',
        subtext:
          'Review roofing-related searches, local profile activity and visits to priority service and location pages. Focus on areas the business genuinely serves.',
      },
      {
        value: 'Evaluate',
        label: 'Service and trust engagement',
        subtext:
          'Assess how visitors interact with roofing service information, completed project examples and contact options. Use these signals to identify potential website friction.',
      },
      {
        value: 'Enquire',
        label: 'Calls and estimate requests',
        subtext:
          'Measure calls, forms and agreed estimate actions where tracking is technically available and permitted. Validate whether enquiries relate to suitable services and locations.',
      },
      {
        value: 'Improve',
        label: 'Lead quality and acquisition efficiency',
        subtext:
          'Compare campaign costs and relevant enquiry trends over time. Where reliable CRM data exists, review which enquiries progress to estimates and booked work without assuming every job can be attributed precisely.',
      },
    ],
  },

  faqs: {
    badge: 'QUESTIONS ROOFING COMPANIES ASK',
    headline:
      'Growing Your Roofing Business: Common Questions',

    items: [
      {
        question:
          'How can Bixeltek help our roofing company get more leads?',
        answer:
          'We help roofing businesses improve how local customers find them, evaluate their services and request an estimate. Depending on your current setup, the work may include local SEO, Google Ads, roofing service pages, website development, conversion optimisation, call tracking and enquiry automation. We prioritise relevant enquiries from the services and locations your business can actually support rather than focusing only on traffic or clicks.',
      },
      {
        question:
          'Is Google Ads or SEO better for a roofing company?',
        answer:
          'Both can be useful, but they solve different problems. SEO supports ongoing visibility for relevant roofing and location searches, while Google Ads can help reach people actively searching for services in selected areas. The right starting point depends on your current search presence, competition, budget, landing-page quality and capacity to handle enquiries. We review these factors before recommending where to invest.',
      },
      {
        question:
          'How can we rank for roofing services in multiple cities?',
        answer:
          'A multi-location strategy should reflect where your business genuinely operates and which services you provide in each area. We may improve service-area information, create useful location-specific content and optimise eligible Google Business Profiles. Simply duplicating the same page with different city names is not a sustainable strategy, and service-area businesses should follow Google Business Profile eligibility and location guidelines.',
      },
      {
        question:
          'Do we need separate pages for roof repair, roof replacement and commercial roofing?',
        answer:
          'Separate pages are often useful when services have distinct customer needs, search intent and project requirements. A roof repair visitor may need to understand the inspection and response process, while a replacement customer may be comparing materials and project experience. We recommend focused pages where they add genuine value, not automatically for every keyword variation.',
      },
      {
        question:
          'Can you improve our existing roofing website without rebuilding it?',
        answer:
          'Yes. We first review the website’s structure, speed, mobile usability, service content, project galleries and contact journey. If the existing platform supports the necessary improvements, targeted changes may be more practical than a complete rebuild. A new website becomes more relevant when technical limitations, poor architecture or maintenance problems prevent meaningful improvements.',
      },
      {
        question:
          'Can you help us generate emergency roof repair enquiries?',
        answer:
          'If your business genuinely provides emergency or urgent roofing services, we can assess the relevant search demand, landing-page requirements, contact options and campaign opportunities. The website should communicate actual service availability and coverage accurately. We would not advertise 24-hour response, immediate attendance or emergency availability unless your team can reliably provide it.',
      },
      {
        question:
          'How do you help roofing companies build trust online?',
        answer:
          'We focus on verifiable information such as completed project photographs, relevant service experience, genuine customer reviews, appropriate licences or credentials and clearly explained roofing services. We can improve how this information appears across the website and relevant local profiles. We do not invent testimonials, warranties, qualifications or project results.',
      },
      {
        question:
          'Can you track phone calls and estimate requests from our website?',
        answer:
          'We can implement appropriate tracking for form submissions, phone interactions and supported call-tracking services, depending on the country, provider and technical setup. Some systems can distinguish marketing channels or associate enquiries with campaigns, but attribution has limitations. Call recording and the collection of personal information must follow applicable consent and privacy requirements.',
      },
      {
        question:
          'Can you automate lead follow-ups when our team is working on-site?',
        answer:
          'We can help connect website forms and suitable call events with CRM systems, notifications and follow-up workflows. For example, an enquiry may be assigned to a team member, acknowledged automatically or added to a pipeline for review. The workflow should reflect your working hours, actual response capability and data protection requirements. Automation supports your team rather than replacing the need for timely human follow-up.',
      },
      {
        question:
          'How much does roofing lead generation cost, and how soon can we see results?',
        answer:
          'Costs and timelines depend on your market, competition, service mix, website condition, campaign budget and the scope of work. Paid campaigns may begin generating measurable activity after launch, but lead quality and cost need ongoing evaluation. SEO generally requires sustained work, and neither channel guarantees a fixed number of roofing jobs. We recommend a scope and budget after reviewing your situation.',
      },
      {
        question:
          'What do you need to get started with our roofing company?',
        answer:
          'Start with your website, the roofing services you provide, your main service areas and the types of jobs you want to attract. Existing Google Ads, Google Business Profile, analytics or CRM information can help us understand the current position. It is also useful to know how your team handles calls and estimates, since generating enquiries is only one part of winning suitable roofing work.',
      },
    ],
  },

  finalCta: {
    headline:
      'Help More Local Customers Find and Contact Your Roofing Business',
    subheadline:
      'Whether you want better local visibility, more relevant estimate enquiries, a stronger roofing website or a clearer way to track incoming leads, we can help you identify where to focus. Tell us which roofing services and areas matter most to your business.',
    bulletPoints: [
      'Identify local SEO and service-area opportunities',
      'Improve roofing service pages and customer trust signals',
      'Connect Google Ads with relevant estimate and call journeys',
      'Measure and manage roofing enquiries more effectively',
    ],
    buttonText: 'Discuss Your Roofing Business',
  },
};

export const roofingPage = roofingV2Data;
export const roofingPageV2 = roofingV2Data;
