import { IndustryPageData } from '@/types/industry';

export const dentalIndustryData: IndustryPageData = {
  slug: 'dental-practices',
  industryName: 'Dental Practices',
  hero: {
    badge: 'Specialized Growth Infrastructure',
    title: 'High-Ticket Patient Acquisition for',
    highlightedTitle: 'Modern Dental Clinics',
    description:
      'Engineered specifically for cosmetic, implant, and orthodontic practices. We convert local high-intent searchers into prepaid consultations without wasted ad spend.',
    primaryCtaText: 'Schedule a 1-on-1 Consultation',
    primaryCtaLink: '#booking',


  },
  bentoGrid: {
    badge: 'Precision Capabilities',
    headline: 'Eliminate Leaks in Your Patient Pipeline',
    subheadline: 'Generic agency retainers fail medical practices. Our focused stack plugs every conversion hole.',
    items: [
      {
        tag: 'Hyper-Local Targeting',
        title: 'Geofenced Treatment Campaigns',
        description: 'Micro-targeted Meta and Google campaigns tuned strictly to high-income zip codes within driving distance.',
        colSpan: 'col-span-2',
        metric: '3.8x',
        metricLabel: 'Average ROAS on All-on-4 & Invisalign',
      },
      {
        tag: 'HIPAA Compliant',
        title: 'Protected Lead Flow',
        description: 'Encrypted lead delivery straight into your PMS or CRM with zero data exposure.',
        colSpan: 'col-span-1',
      },
      {
        tag: 'Speed to Lead',
        title: 'Automated 60-Second Callback AI',
        description: 'Engage inbound patient inquiries before they can call the next clinic on Google.',
        colSpan: 'col-span-1',
        metric: '< 2 min',
        metricLabel: 'Response speed guarantee',
      },
      {
        tag: 'Conversion Rate Engineering',
        title: 'Dedicated Treatment Landing Funnels',
        description: 'Tailored single-treatment landing architectures engineered with social proof, transparent financing breakdowns, and friction-free booking.',
        colSpan: 'col-span-2',
      },
    ],
  },
  comparison: {
    badge: 'Why Specialization Matters',
    headline: 'The Generic Agency Model vs. Our CRO Engine',
    subheadline: 'See how standard marketing practices silently burn clinical acquisition budget.',
    cta: {
      label: 'Book a free audit',
      href: '#lead-form',
    },
    items: [
      {
        feature: 'Lead Qualification',
        industryStandard: 'Sends raw form fills with high no-show and bad phone rates.',
        ourApproach: '2-step pre-qualifying questionnaire screening for budget & intent before booking.',
      },
      {
        feature: 'Landing Page Experience',
        industryStandard: 'Dumps paid traffic directly onto cluttered, slow clinic homepages.',
        ourApproach: 'Dedicated sub-second load treatment pages focused exclusively on 1 procedure.',
      },
      {
        feature: 'Follow-up Cadence',
        industryStandard: 'Leaves front desk staff to manually call leads when time permits.',
        ourApproach: 'Automated multi-channel SMS & call-scheduling cadence operating 24/7.',
      },
      {
        feature: 'Analytics & Tracking',
        industryStandard: 'Reports on vanity clicks and impressions.',
        ourApproach: 'Directly tracks chairside revenue and patient lifetime value (LTV).',
      },
    ],
  },
  process: {
    badge: 'Structured Delivery',
    headline: 'Our 4-Phase Revenue Deployment',
    subheadline: 'A predictable, measurable framework deployed within 14 business days.',
    steps: [
      {
        step: '01',
        title: 'Unit Economics & Offer Architecture',
        summary: 'We diagnose your highest-margin treatments and structure compelling patient financing hooks.',
        details: ['Procedure margin audit', 'Financing partner integration', 'Offer messaging angles'],
      },
      {
        step: '02',
        title: 'Dedicated Funnel Deployment',
        summary: 'We build high-speed, CRO-tested landing engines engineered for conversion clarity.',
        details: ['Next.js micro-funnels', 'Trust badge & doctor proof stacking', 'Instant calendar booking'],
      },
      {
        step: '03',
        title: 'Multi-Network Media Deployment',
        summary: 'Targeted Google Search & Meta ad creative deployment directed solely at ready-to-book patients.',
        details: ['Emergency vs. Elective ad sets', 'Negative keyword scrubbing', 'Creative fatigue rotation'],
      },
      {
        step: '04',
        title: 'Front-Desk Conversion Training',
        summary: 'We equip your clinic team with battle-tested scripts and pipeline management dashboards.',
        details: ['Lead triage guidelines', 'Objection handling cheat-sheets', 'Bi-weekly pipeline audits'],
      },
    ],
  },
  metrics: {
    headline: 'Measured Clinical Performance Across Active Accounts',
    items: [
      { value: '41%', label: 'Show-Up Rate Lift', subtext: 'via automated SMS validation sequences' },
      { value: '2.4x', label: 'Case Value Growth', subtext: 'by steering traffic to cosmetic & implant treatments' },
      { value: '14 Days', label: 'Average Launch Cycle', subtext: 'from initial onboarding to live acquisition' },
      { value: '98.6%', label: 'Lead Contact Rate', subtext: 'through instant front-office routing' },
    ],
  },
  faqs: {
    badge: 'Clarifications',
    headline: 'Frequently Asked Questions',
    items: [
      {
        question: 'How does this integrate with our current dental software (PMS)?',
        answer: 'We connect directly with systems like Dentrix, Eaglesoft, Open Dental, or your independent CRM via secure Webhooks and Zapier workflows to push qualified consultations straight into your schedule.',
      },
      {
        question: 'How quickly can we expect booked consultations after launch?',
        answer: 'Once the campaigns and customized CRO landing pages are cleared for deployment (usually within 10-14 days), qualified appointment requests typically begin arriving within the first 48 to 72 hours of ad spend activation.',
      },
      {
        question: 'Do you offer exclusivity for our geographical territory?',
        answer: 'Yes. We enforce strict territorial exclusivity within a defined radius (typically 5 to 10 miles depending on population density) to prevent competing against our own partner practices.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready to Fill Your Practice Schedule with High-Value Procedures?',
    subheadline: 'Claim a territory check and comprehensive competitor acquisition audit with our team.',
    bulletPoints: [
      'Zero-obligation clinic funnel audit',
      'Zip-code territorial availability check',
      'Customized patient acquisition forecast',
    ],
    buttonText: 'Claim Your Territory Audit',
  },
};
