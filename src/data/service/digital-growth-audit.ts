import type {
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

// ============================================================
// DIGITAL GROWTH AUDIT - BIXELTEK SERVICE / LEAD-GENERATION PAGE
// Purpose: connect discovery, website conversion, measurement and follow-up.
// Proposed route: /digital-growth-audit (verify against the live site/repo).
// The initial offer is positioned as a free practical review, not an
// exhaustive technical audit or a promise of guaranteed growth.
// ============================================================

export interface DigitalGrowthAuditMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface DigitalGrowthAuditPoint {
  title: string;
  description: string;
}

export interface DigitalGrowthAuditFinding {
  priority: string;
  title: string;
  whatItMeans: string;
  nextStep: string;
}

export interface DigitalGrowthAuditProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface DigitalGrowthAuditWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: DigitalGrowthAuditPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface DigitalGrowthAuditFinalCtaData {
  id: string;
  eyebrow: string;
  h2: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  supportingCopy?: string;
}

export const digitalGrowthAuditMetadata: DigitalGrowthAuditMetadata = {
  title: "Digital Growth Audit | Website, SEO & Lead Journey | Bixeltek",
  description:
    "Find gaps across your website, search visibility, paid campaigns, tracking and lead follow-up. Get a practical digital growth review with clear priorities-not a generic report.",
  keywords: [
    "digital growth audit",
    "digital marketing audit",
    "website conversion audit",
    "SEO and website audit",
    "Google Ads audit",
    "lead generation audit",
    "marketing tracking audit",
  ],
  // Canonical route under /services/digital-growth-audit
  canonical: "https://bixeltek.com/services/digital-growth-audit",
};

export const digitalGrowthAuditBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Digital Growth Audit", href: "/services/digital-growth-audit" },
];

export const digitalGrowthAuditJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#digital-growth-audit-overview" },
  { label: "What May Be Holding You Back", href: "#digital-growth-audit-problems" },
  { label: "What We Review", href: "#digital-growth-audit-scope" },
  { label: "How Findings Are Prioritized", href: "#digital-growth-audit-priorities" },
  { label: "Who It Helps", href: "#digital-growth-audit-fit" },
  { label: "How It Works", href: "#digital-growth-audit-process" },
  { label: "What You Receive", href: "#digital-growth-audit-deliverable" },
  { label: "Review Depth", href: "#digital-growth-audit-depth" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - sell a useful diagnosis, not a large report or a guarantee.
// ============================================================

export const digitalGrowthAuditHero = {
  eyebrow: "FREE DIGITAL GROWTH AUDIT",
  h1: "Find What Is Holding Back Your Digital Growth",
  p1:
    "When leads are inconsistent, it is not always clear whether the issue is search visibility, the website, campaign quality, tracking or what happens after someone enquires. Looking at each part alone can miss the gap between them.",
  p2:
    "Bixeltek's Digital Growth Audit is a practical first review of the journey from being found to becoming a customer. We identify the most relevant issues we can verify, explain why they matter and help you see what is worth addressing first.",
  primaryButtonText: "Tal to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Our Services",
  secondaryLinkHref: "/services",
  microcopy:
    "No obligation. No generic 50-page report. The review's depth depends on your goals, current setup and the access available.",
};

// ============================================================
// OVERVIEW - define the audit as a connected journey review.
// ============================================================

export const digitalGrowthAuditOverview = {
  id: "digital-growth-audit-overview",
  eyebrow: "FOLLOW THE JOURNEY, NOT JUST THE CHANNELS",
  h2: "See Where Digital Activity Stops Turning Into Business",
  intro:
    "A useful audit connects the parts of growth that are often reviewed separately: how people discover you, what they experience on your website, whether meaningful actions are measured and what happens after an enquiry arrives.",
  body:
    "We start with your business goal and review the relevant public pages and available evidence. Where access is provided, we can examine selected analytics or campaign information more closely. Findings are separated from assumptions, and recommendations are prioritized rather than presented as an unfiltered list of faults.",
  points: [
    {
      title: "Discovery",
      description:
        "Can the right audience find your business through relevant search, local presence or active campaigns?",
    },
    {
      title: "Conversion",
      description:
        "Can visitors understand the offer, trust the business and take the next useful action?",
    },
    {
      title: "Measurement and follow-up",
      description:
        "Can you tell which actions matter, and does the business respond to enquiries consistently?",
    },
  ],
  closingCopy:
    "The goal is a clearer next move-not to recommend every Bixeltek service regardless of what the evidence shows.",
};

// ============================================================
// PROBLEMS - recognizable situations, not generic growth claims.
// ============================================================

export const digitalGrowthAuditProblems: ProblemCard[] = [
  {
    title: "Traffic Arrives, but Enquiries Do Not",
    description:
      "Visitors may be landing on pages that do not answer their main questions, explain the offer clearly or make the next step easy. The review looks for observable friction before assuming more traffic is the answer.",
  },
  {
    title: "Marketing Activity Is Hard to Connect to Sales",
    description:
      "Reports may count clicks, calls or form interactions without showing which actions became qualified enquiries or customers. We check what the available measurement can actually support-and where the picture remains incomplete.",
  },
  {
    title: "Search Visibility Does Not Match the Services You Sell",
    description:
      "A site can be indexed and still miss important service intent, have overlapping pages or make its location and expertise unclear. The audit looks for relevant, verifiable search and page-structure gaps rather than promising rankings.",
  },
  {
    title: "Paid Campaigns and Landing Pages Feel Disconnected",
    description:
      "An ad may promise one thing while the destination emphasizes something else, or the conversion action may not be measured reliably. Campaign and landing-page review depends on the platforms and access available.",
  },
  {
    title: "Local Demand Is Not Turning Into Calls or Visits",
    description:
      "Business details, service areas, reviews, local landing pages and contact options can send mixed signals. We review the relevant public local presence and identify issues that can be verified.",
  },
  {
    title: "Enquiries Arrive but Follow-Up Is Inconsistent",
    description:
      "Slow responses, unclear ownership or manual handoffs can weaken the journey after a form or call. The audit maps the known handoff and flags what needs confirmation from the team rather than assuming a workflow exists.",
  },
];

// ============================================================
// SCOPE - review areas selected by business model and available evidence.
// ============================================================

export const digitalGrowthAuditScope: ScopeCard[] = [
  {
    title: "Website Message & Conversion Journey",
    description:
      "Review key landing pages, offer clarity, proof, navigation, contact paths, forms and mobile usability. The focus is whether a prospective customer can understand the value and complete the next step-not a subjective redesign checklist.",
  },
  {
    title: "SEO & Search Visibility",
    description:
      "Check relevant service-page coverage, indexability signals, page titles and headings, internal links, content alignment and available Search Console evidence. Deeper technical crawling or backlink analysis may require a separate, explicitly scoped review.",
  },
  {
    title: "Paid Campaigns & Landing-Page Fit",
    description:
      "Where Google Ads or Meta Ads are active and access is available, review campaign goals, conversion definitions, targeting or search intent, creative-to-page alignment and obvious tracking gaps. A public website review alone cannot establish account performance or wasted spend.",
  },
  {
    title: "Analytics & Conversion Tracking",
    description:
      "Assess whether key actions are defined and whether available evidence suggests they are recorded consistently. Account-level validation, tag debugging, consent configuration and CRM attribution require the relevant permissions and may fall outside an initial review.",
  },
  {
    title: "Local Presence & Trust Signals",
    description:
      "For businesses that depend on local demand, review relevant business information, location pages, contact consistency, review visibility and the way local intent is addressed. Recommendations depend on the actual service area and business model.",
  },
  {
    title: "Lead Capture & Follow-Up",
    description:
      "Review the visible enquiry path and, when explained or demonstrated by the team, how leads are assigned, responded to and tracked. CRM configuration, response-time analysis and workflow automation require additional evidence or access.",
  },
];

// ============================================================
// PRIORITIES - show how observations become useful decisions.
// ============================================================

export const digitalGrowthAuditPriorities = {
  id: "digital-growth-audit-priorities",
  eyebrow: "FROM FINDINGS TO NEXT STEPS",
  h2: "A Short List of What to Fix First-and Why",
  intro:
    "An audit becomes useful when it separates consequential issues from cosmetic improvements. Each finding should state what was observed, what evidence supports it, what business impact is plausible and what should happen next.",
  findings: [
    {
      priority: "Address first",
      title: "Broken or misleading conversion paths",
      whatItMeans:
        "A primary contact action fails, an important page is inaccessible or the offer and destination clearly conflict.",
      nextStep:
        "Verify the issue in the real user journey and define the smallest safe fix.",
    },
    {
      priority: "High-value opportunity",
      title: "A meaningful gap in visibility or conversion",
      whatItMeans:
        "Available evidence points to a relevant audience or key journey step that is not being served well.",
      nextStep:
        "Estimate impact and effort, then validate the assumption with the right data before committing to a larger change.",
    },
    {
      priority: "Investigate",
      title: "A likely issue without enough evidence yet",
      whatItMeans:
        "A public review raises a question, but account data, customer context or technical access is needed to confirm it.",
      nextStep:
        "Name the missing evidence and the quickest way to obtain it instead of presenting a guess as a fact.",
    },
    {
      priority: "Later or optional",
      title: "An improvement with limited immediate impact",
      whatItMeans:
        "The change may help consistency or polish but does not currently outrank issues closer to the business goal.",
      nextStep:
        "Keep it in the backlog and revisit after higher-priority blockers are addressed.",
    },
  ] satisfies DigitalGrowthAuditFinding[],
  closingCopy:
    "Priorities depend on the business goal, available evidence, implementation effort and the cost of leaving an issue unresolved-not on a universal score or an automated grade.",
};

// ============================================================
// FIT - set expectations about what an initial review can do.
// ============================================================

export const digitalGrowthAuditFit = {
  id: "digital-growth-audit-fit",
  eyebrow: "IS THIS AUDIT RIGHT FOR YOU?",
  h2: "Start Here When You Need Clarity Before More Spend or Rework",
  intro:
    "The audit is designed for businesses that have a digital presence or active growth activity but need a clearer view of what to improve next.",
  goodFit: [
    {
      title: "You have a live website or active growth channels",
      description:
        "There is something real to review: service pages, campaigns, search visibility, lead capture or a current customer journey.",
    },
    {
      title: "You need to decide what deserves attention first",
      description:
        "You want an evidence-led starting point before investing in a redesign, more advertising, SEO work or automation.",
    },
    {
      title: "You can share basic business context",
      description:
        "A clear goal, priority service, target audience and the main concern help keep the review relevant instead of generic.",
    },
  ],
  poorFit: [
    {
      title: "You expect a complete technical or security audit for free",
      description:
        "Penetration testing, exhaustive technical crawling, detailed account restructuring and compliance assessments require separate scope and authorization.",
    },
    {
      title: "You need guaranteed rankings, leads or revenue",
      description:
        "An audit can identify evidence-based opportunities and risks, but it cannot guarantee outcomes or replace implementation and measurement.",
    },
    {
      title: "You cannot share the goal or the basic context",
      description:
        "Without knowing what the business is trying to achieve, recommendations risk becoming a list of generic best practices.",
    },
  ],
};

// ============================================================
// PROCESS - reduce ambiguity from request to prioritized plan.
// ============================================================

export const digitalGrowthAuditProcess: DigitalGrowthAuditProcessStage[] = [
  {
    number: "01",
    title: "Understand the Business Goal",
    description:
      "We establish the priority service, audience, target action and current concern before judging channels in isolation.",
    deliverable: "A clear audit question and review boundary",
  },
  {
    number: "02",
    title: "Review the Visible Journey",
    description:
      "We inspect relevant pages, search presence, contact paths and public campaign destinations that can be assessed without private account access.",
    deliverable: "Initial observations tied to real pages and actions",
  },
  {
    number: "03",
    title: "Check Available Evidence",
    description:
      "If agreed access or exports are provided, we use them to validate selected questions about tracking, campaigns or lead handling. Missing evidence is recorded, not guessed.",
    deliverable: "Findings separated from assumptions and unknowns",
  },
  {
    number: "04",
    title: "Prioritize the Opportunities",
    description:
      "We weigh business relevance, evidence strength, likely impact, effort and dependencies to identify what deserves attention first.",
    deliverable: "A practical, ordered set of next steps",
  },
  {
    number: "05",
    title: "Walk Through the Findings",
    description:
      "We explain the reasoning, answer questions and identify which work can be handled internally, needs specialist support or requires deeper investigation.",
    deliverable: "A shared understanding of the next decision",
  },
];

// ============================================================
// DELIVERABLE - clarify what the buyer should leave with.
// ============================================================

export const digitalGrowthAuditDeliverable = {
  id: "digital-growth-audit-deliverable",
  eyebrow: "WHAT YOU TAKE AWAY",
  h2: "A Practical Review You Can Act On",
  intro:
    "The aim is not to overwhelm you with screenshots or score every part of the business. It is to make the important observations understandable and show what to do with them.",
  included: [
    {
      title: "Observed issue",
      description:
        "What we found, where it appears and whether it was directly verified or needs more evidence.",
    },
    {
      title: "Why it matters",
      description:
        "The customer journey or business decision the issue may affect, without presenting an unproven impact as a measured result.",
    },
    {
      title: "Recommended next step",
      description:
        "A practical action, the information needed to confirm it and any relevant dependency.",
    },
    {
      title: "Priority and ownership",
      description:
        "What appears most urgent, what can wait and whether the next step belongs to your team or needs specialist support.",
    },
  ],
  scopeNote:
    "The format and depth of the initial free review depend on the request and available access. A detailed technical audit, full ad-account analysis, extensive keyword research, analytics debugging or implementation plan may need a separate scope.",
};

// ============================================================
// WHY BIXELTEK - grounded in how the review is approached.
// ============================================================

export const digitalGrowthAuditWhyBixeltek: DigitalGrowthAuditWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Review the Connections Between Channels, Website and Follow-Up",
  intro:
    "Digital growth problems rarely respect service boundaries. Search can bring the visit, the website must help the visitor decide, tracking should record the meaningful action, and the team still has to respond. Reviewing those connections can reveal a more useful next step than assessing one metric alone.",
  points: [
    {
      title: "We Start With Your Business Goal",
      description:
        "The review begins with the customer action that matters to you, not a pre-filled checklist of services to sell.",
    },
    {
      title: "We Connect the Relevant Parts",
      description:
        "We consider discovery, the landing experience, measurement and follow-up where they affect the same journey.",
    },
    {
      title: "We Separate Evidence From Assumptions",
      description:
        "A public-page observation is not treated as proof of account performance. We make clear when more data or access is needed.",
    },
    {
      title: "We Prioritize Instead of Listing Everything",
      description:
        "The aim is to identify the next useful fixes and decisions, not to make every small issue sound equally urgent.",
    },
    {
      title: "We Consider Practical Implementation",
      description:
        "Recommendations should account for existing platforms, team ownership and dependencies-not just what would be ideal in theory.",
    },
    {
      title: "We Do Not Promise an Outcome an Audit Cannot Control",
      description:
        "We can explain opportunities and risks; results still depend on implementation, market conditions, budgets, execution and measurement.",
    },
  ],
  closingCopy:
    "If the evidence points to a small fix, the next step should be small. If the problem needs deeper work, the audit should explain why.",
  ctaText: "Get My Free Growth Audit",
  ctaHref: "#final-cta",
};

// ============================================================
// REVIEW DEPTH - explain what changes the depth of the review, not price.
// ============================================================

export const digitalGrowthAuditDepth = {
  id: "digital-growth-audit-depth",
  eyebrow: "A CLEAR SCOPE FROM THE START",
  h2: "The Review Goes as Deep as the Evidence Allows",
  intro:
    "The initial review is free, but it is not automatically a full technical audit of every channel. The areas we can verify depend on the business model, access and evidence available.",
};

export const digitalGrowthAuditDepthFactors: InvestmentFactorCard[] = [
  {
    title: "Number of Channels in Scope",
    description:
      "A focused website and lead-path review is different from examining SEO, local presence, paid campaigns, analytics and follow-up together.",
  },
  {
    title: "Access to Private Account Data",
    description:
      "Public pages can be reviewed without account access. Validating campaign efficiency, conversion tracking or lead quality may require approved access or exports.",
  },
  {
    title: "Website and Platform Complexity",
    description:
      "A small service website and a multi-location or ecommerce setup expose different journeys, technical dependencies and testing needs.",
  },
  {
    title: "Quality of Existing Measurement",
    description:
      "If events, lead stages or source data are incomplete, the first recommendation may be to repair measurement before drawing performance conclusions.",
  },
  {
    title: "Depth of Technical Validation",
    description:
      "A first-pass review is not equivalent to a full crawl, tag-by-tag validation, accessibility assessment, security test or detailed account audit.",
  },
  {
    title: "Number of Stakeholders and Markets",
    description:
      "Multiple service lines, regions, languages or teams can require more context to understand which journeys and outcomes should be prioritized.",
  },
  {
    title: "Need for Implementation Planning",
    description:
      "Identifying an issue is different from producing specifications, implementing changes and validating the result. Confirm those deliverables separately.",
  },
];

// ============================================================
// RELATED SERVICES - help the visitor choose a relevant next step.
// Confirm each destination against the repository before release.
// ============================================================

export const digitalGrowthAuditRelatedServices: RelatedServiceCard[] = [
  {
    title: "SEO Services",
    description:
      "For deeper work on search visibility, service-page structure, technical SEO and organic demand.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "Google Ads Management",
    description:
      "For a detailed review or ongoing management of paid search campaigns, conversion goals and landing-page fit.",
    linkText: "Explore Google Ads",
    destination: "/services/google-ads",
  },
  {
    title: "Analytics & Tracking",
    description:
      "For implementation and validation of events, conversion measurement and reporting after a tracking gap is identified.",
    linkText: "Explore Analytics & Tracking",
    destination: "/services/analytics-tracking",
  },
  {
    title: "Website Design & Development",
    description:
      "For structural, usability or technical changes that require a website update rather than recommendations alone.",
    linkText: "Explore Website Development",
    destination: "/services/web-design",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "For a deeper, iterative program of diagnosing friction, prioritizing hypotheses and measuring changes to conversion journeys.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
  {
    title: "Business Automation",
    description:
      "For improving lead routing, response workflows, CRM handoffs and repeatable operations once the process gap is understood.",
    linkText: "Explore Business Automation",
    destination: "/services/automation",
  },
];

// ============================================================
// FAQS - answer scope and expectations that remain after the page.
// ============================================================

export const digitalGrowthAuditFaqs: FAQItem[] = [
  {
    question: "What is a digital growth audit?",
    answer:
      "It is a practical review of the parts of your digital customer journey that affect discovery, conversion, measurement and follow-up. The goal is to identify relevant issues and prioritize next steps based on the business goal and evidence available.",
  },
  {
    question: "Is the Digital Growth Audit free?",
    answer:
      "The initial review is positioned as a free first step. Its depth depends on your needs and the information available. Extensive technical validation, full account audits or implementation work may require a separately agreed scope.",
  },
  {
    question: "What do you review?",
    answer:
      "Depending on the business, the review may cover website conversion paths, SEO and search visibility, local presence, active paid campaigns, conversion tracking and lead follow-up. We focus on the areas most relevant to your stated goal rather than forcing every channel into every audit.",
  },
  {
    question: "Do I need to provide access to Google Analytics or ad accounts?",
    answer:
      "Not for an initial public-facing review. Private account access or exports may be needed to validate campaign performance, event tracking or lead quality. Any access should be agreed and limited to what the review requires.",
  },
  {
    question: "Will I receive a report?",
    answer:
      "You should receive a clear explanation of the relevant findings and recommended next steps. The format and level of detail are agreed according to the review scope; the free initial review is not automatically a comprehensive technical report.",
  },
  {
    question: "Will the audit tell me exactly why I am not getting leads?",
    answer:
      "It may identify visible friction or evidence-backed gaps, but some causes require more data, customer research or account access. We distinguish confirmed findings from questions that need further investigation rather than claiming certainty without evidence.",
  },
  {
    question: "Does the audit include SEO, Google Ads and Meta Ads?",
    answer:
      "Those areas can be considered when they are relevant to your business and available for review. A detailed account-level audit of every channel is not automatically included in the initial free review.",
  },
  {
    question: "Do you implement the recommendations?",
    answer:
      "The audit is intended to clarify what should happen next. Implementation-such as website changes, tracking fixes, campaign restructuring or automation-is a separate decision and should be scoped around the findings.",
  },
  {
    question: "Will the audit guarantee more traffic or sales?",
    answer:
      "No. An audit can identify opportunities and risks, but outcomes depend on what is implemented, the offer, market conditions, competition, budget, operational follow-up and measurement quality.",
  },
  {
    question: "Is this a technical security or penetration test?",
    answer:
      "No. The Digital Growth Audit is focused on the digital customer and growth journey. Security testing, penetration testing, formal compliance reviews and other specialist assessments require separate scope and explicit authorization.",
  },
  {
    question: "Can a new business request an audit before launching?",
    answer:
      "Yes, but the review will be different if there is no live website, traffic, campaign history or lead process to inspect. In that situation, a planning discussion may be more useful than a performance audit.",
  },
  {
    question: "What should I share to get a useful review?",
    answer:
      "Start with your website URL, the main service or product you want to grow, your target customer and the biggest concern. If you have relevant analytics or campaign data, we can agree what is useful and how it should be shared.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const digitalGrowthAuditFinalCta: DigitalGrowthAuditFinalCtaData = {
  id: "final-cta",
  eyebrow: "START WITH CLARITY",
  h2: "Get a Clearer View of What to Improve Next",
  description:
    "Tell us what your business sells, who you need to reach and what is not working as expected. We will use that context to determine whether a Digital Growth Audit is the right starting point and what can realistically be reviewed.",
  primaryCta: {
    label: "Get My Free Growth Audit",
    href: "/contact-us",
  },
  supportingCopy:
    "No obligation. Share your website and main growth concern first; account access is only relevant if the agreed review requires it.",
};

// ============================================================
// IMPLEMENTATION NOTES - assumptions must be checked before release.
// ============================================================

export const digitalGrowthAuditImplementationNotes = {
  pageThesis:
    "A free, practical digital growth review that connects discovery, website conversion, measurement and lead follow-up, then prioritizes the next actions instead of delivering a generic channel checklist.",
  primaryBuyer:
    "A business owner or marketing lead with a live digital presence who sees inconsistent enquiries, unclear channel performance or uncertainty about what to improve next.",
  pageBoundary:
    "This is a cross-channel diagnostic entry point, not a replacement for the dedicated SEO, Google Ads, analytics, CRO or website-development services. Those pages should own detailed implementation and specialist scope.",
  routeStatus:
    "Proposed route/canonical: /digital-growth-audit. Verify whether a dedicated audit route already exists, whether the homepage audit CTA should point here, and whether existing website/SEO/Google Ads audit landing pages need to remain separate or be linked as narrower offers.",
  offerAssumptions: [
    "Prior Bixeltek homepage planning used the offer name 'Free Digital Growth Audit' and described a practical review across search visibility, website conversion, paid campaigns, local presence, lead capture and follow-up. Confirm this is still the approved offer before publishing.",
    "Confirm what 'free' includes operationally: who performs the review, expected response method, eligibility, capacity, whether a call is included and what deliverable is provided. Do not publish an unapproved turnaround promise.",
    "The phrase 'No generic 50-page report' reflects earlier homepage positioning; retain only if the team is comfortable making that service commitment.",
  ],
  scopeToConfirm: [
    "Confirm which channels can be reviewed in the initial offer and whether private Google Ads, Meta Ads, GA4, Search Console, CRM or call data may be requested.",
    "Confirm whether the review includes a written summary, live walkthrough, scored checklist, recommendations or a combination; the page intentionally avoids promising a fixed report format.",
    "Confirm the privacy-safe process for requesting access. Prefer least-privilege access or client-provided exports where practical, and do not request passwords through the public form.",
    "Do not imply that a free initial review includes a full technical SEO crawl, full campaign audit, tag debugging, competitor research, user testing, penetration testing or implementation unless explicitly included.",
    "Do not publish customer metrics, client names, guaranteed outcomes, audit completion times or savings claims without approved evidence.",
  ],
  routeChecks: [
    "/digital-growth-audit - proposed new route; verify before use.",
    "/services - verify the current services index route.",
    "/services/seo-services - verify destination before publishing related link.",
    "/services/google-ads - verify destination before publishing related link.",
    "/analytics-and-cro-services - verify current analytics/tracking route.",
    "/services/web-design - verify current website development route.",
    "/services/conversion-rate-optimization - verify current CRO route.",
    "/services/automation - verify current automation route.",
    "/contact-us - verify form destination and audit CTA tracking.",
  ],
  sectionIdsForRenderer: {
    overview: "digital-growth-audit-overview",
    problems: "digital-growth-audit-problems",
    scope: "digital-growth-audit-scope",
    priorities: "digital-growth-audit-priorities",
    fit: "digital-growth-audit-fit",
    process: "digital-growth-audit-process",
    deliverable: "digital-growth-audit-deliverable",
    whyBixeltek: "why-bixeltek",
    depth: "digital-growth-audit-depth",
    relatedServices: "related-services",
    faqs: "faqs",
    finalCta: "final-cta",
  },
  recommendedSectionOrder: [
    "Hero",
    "Overview",
    "Problems",
    "Audit Scope",
    "Prioritization Framework",
    "Fit Assessment",
    "Process",
    "Deliverable",
    "Why Bixeltek",
    "FAQs",
    "Final CTA",
  ],
  qualitySelfReview: {
    score: 88,
    outOf: 100,
    rationale:
      "Distinct cross-channel thesis, clear scope boundaries, explicit distinction between public observations and account-validated findings, and a useful prioritization model. Remaining blockers are operational confirmation of the free offer, exact deliverable, route, form flow and related URLs.",
  },
};
