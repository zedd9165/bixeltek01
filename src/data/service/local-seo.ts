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
// LOCAL SEO - BIXELTEK SERVICE PAGE DATA
// Purpose: improve qualified local discovery and the journey from
// Google Search / Maps to calls, appointments, visits and enquiries.
// Keep the existing live URL unless the route owner approves a migration.
// ============================================================

export interface LocalSeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface LocalSeoPoint {
  title: string;
  description: string;
}

export interface LocalSeoDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface LocalSeoUseCase {
  title: string;
  situation: string;
  approach: string;
  successSignals: string[];
}

export interface LocalSeoProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface LocalSeoMetric {
  name: string;
  whatItShows: string;
  howToInterpret: string;
}

export interface LocalSeoWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: LocalSeoPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface LocalSeoFinalCtaData {
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

export const localSeoMetadata: LocalSeoMetadata = {
  title: "Local SEO Services | Google Business Profile & Maps - Bixeltek",
  description:
    "Improve local search visibility with Google Business Profile, accurate listings, useful location pages and review workflows. Track calls and enquiries.",
  keywords: [
    "local SEO services",
    "local SEO agency",
    "Google Business Profile optimization",
    "Google Maps SEO",
    "local search optimization",
    "local citation building",
    "location page SEO",
    "service area business SEO",
    "multi-location SEO",
    "local SEO audit",
  ],
  // Canonical route for Local SEO
  canonical: "https://bixeltek.com/services/seo-services/local-seo",
};

export const localSeoBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "Local SEO", href: "/services/seo-services/local-seo" },
];

export const localSeoJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#local-seo-overview" },
  { label: "Common Problems", href: "#local-seo-problems" },
  { label: "What We Work On", href: "#local-seo-scope" },
  { label: "Key Decisions", href: "#local-seo-decisions" },
  { label: "Use Cases", href: "#local-seo-use-cases" },
  { label: "Our Process", href: "#local-seo-process" },
  { label: "Measurement", href: "#local-seo-measurement" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - emphasize qualified local discovery, not a ranking promise.
// ============================================================

export const localSeoHero = {
  eyebrow: "LOCAL SEO · GOOGLE BUSINESS PROFILE · MAPS VISIBILITY",
  h1: "Help Nearby Customers Find and Choose Your Business",
  p1:
    "When customers search for a service nearby, the business they choose is not decided by a keyword alone. Accurate business information, local relevance, reputation and a useful website experience all influence whether someone calls, books or visits.",
  p2:
    "Bixeltek helps local and multi-location businesses improve the parts of local search they can control-from Google Business Profile and listing accuracy to location pages, review processes and conversion measurement.",
  primaryButtonText: "Talk to our seo experts",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore SEO Services",
  secondaryLinkHref: "/services/seo-services",
  microcopy:
    "For businesses with a real customer-facing location or a legitimate service area. Local rankings vary by search, location and competition; no fixed position is guaranteed.",
};

// ============================================================
// OVERVIEW - show how local discovery turns into a customer action.
// ============================================================

export const localSeoOverview = {
  id: "local-seo-overview",
  eyebrow: "FROM LOCAL DISCOVERY TO A REAL ENQUIRY",
  h2: "Local Visibility Is Only Useful When the Next Step Is Clear",
  intro:
    "Local SEO helps people discover relevant businesses through Google Search, Google Maps and other useful local discovery surfaces. The work connects the accuracy of your business information with the relevance of your website and the confidence a customer needs before getting in touch.",
  body:
    "We review the local search journey as a whole: what a person searches for, which profile or page they land on, what they learn about the business and how easily they can call, book, request a quote or visit. The priorities differ for a clinic, a walk-in store, a home-service business and a company with several branches.",
  points: [
    {
      title: "Relevance",
      description:
        "Make the services, categories, location details and website content clear enough to match the searches the business is genuinely suited to serve.",
    },
    {
      title: "Local trust",
      description:
        "Keep real-world business information consistent and help customers assess the business through useful photos, accurate details and genuine customer feedback.",
    },
    {
      title: "Action and measurement",
      description:
        "Make it straightforward to call, request directions, book or submit an enquiry, then measure those actions where the available tools support it.",
    },
  ],
  closingCopy:
    "Google describes local results in terms of relevance, distance and prominence. SEO can improve the information and experience around a business, but it cannot change a searcher's proximity or guarantee a specific map position.",
};

// ============================================================
// PROBLEMS - situations a buyer can recognize, not generic SEO claims.
// ============================================================

export const localSeoProblems: ProblemCard[] = [
  {
    title: "Competitors Appear in Maps More Often",
    description:
      "Your business may be relevant but less visible for particular searches or parts of a city. We review profile completeness, categories, service relevance, the website and local prominence signals to identify issues worth addressing-without treating one ranking screenshot as the full picture.",
  },
  {
    title: "The Profile Gets Views but Few Calls",
    description:
      "Customers may not see the information they need to decide: the correct services, hours, location, appointment path or a clear explanation of what makes the business relevant. We check profile information and the next step a prospective customer is expected to take.",
  },
  {
    title: "Business Details Differ Across Listings",
    description:
      "Old phone numbers, duplicate records, outdated hours or inconsistent addresses can confuse customers and make location data harder to maintain. We identify the important discrepancies and prioritize corrections rather than submitting the business to every directory available.",
  },
  {
    title: "The Business Serves Several Areas, but the Website Does Not Explain How",
    description:
      "A single generic service page may not answer location-specific questions, while near-identical city pages can add little value. We map the real areas served and decide where a useful location or service-area page can help customers make a better decision.",
  },
  {
    title: "Reviews Are Inconsistent or Difficult to Manage",
    description:
      "Feedback may arrive sporadically, unanswered concerns may remain visible, or no team member owns responses. We help define a consistent, policy-compliant process for requesting genuine reviews and responding to feedback without incentives or review gating.",
  },
  {
    title: "Rankings Are Reported but Business Impact Is Unclear",
    description:
      "A position report does not tell you whether customers called, booked or became paying clients. We connect available profile, website and lead data to a more useful view of activity, while making gaps in attribution explicit.",
  },
];

// ============================================================
// SCOPE - separate workstreams, each tied to a practical need.
// ============================================================

export const localSeoScope: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  items: ScopeCard[];
  scopeNote: string;
} = {
  id: "local-seo-scope",
  eyebrow: "WHAT WE WORK ON",
  h2: "A Local Search System Built Around Your Business Model",
  intro:
    "We prioritize work based on the current profile, website, number of real locations, service area and quality of available data. Not every business needs every workstream; the scope should follow the gaps found during review.",
  items: [
    {
      title: "Google Business Profile Review & Optimization",
      description:
        "Review eligibility, primary and relevant secondary categories, services, business description, hours, contact details, photos and destination links. Changes must represent the real business accurately; adding keywords to the business name or using an ineligible address is not an optimization strategy.",
    },
    {
      title: "Location, Address & Service-Area Accuracy",
      description:
        "Clarify whether customers visit the premises, staff travel to customers or the business operates as a hybrid. Align the profile with the actual operating model and set a realistic service area; do not create extra profiles simply to target more towns.",
    },
    {
      title: "Listing & Citation Cleanup",
      description:
        "Check key directories and data sources for wrong contact details, duplicates, outdated hours and inconsistent business information. Prioritize relevant, trusted sources instead of chasing a high submission count; legitimate local mentions or links can be explored separately when they fit the market and scope.",
    },
    {
      title: "Useful Location & Service-Area Pages",
      description:
        "Plan pages for real branches or meaningfully served areas when they help a customer understand availability, services, access, local experience or contact details. Each page should offer a clear purpose and distinct value-not just swap a city name into the same copy.",
    },
    {
      title: "Local On-Page SEO & Internal Linking",
      description:
        "Align page titles, headings, service information, contact details and internal links with the way customers search and choose. Review which page should answer each service-and-location intent to reduce overlap between the homepage, service pages and location pages.",
    },
    {
      title: "LocalBusiness Structured Data Checks",
      description:
        "Assess whether relevant location pages need accurate structured business information and whether the markup matches visible page content. Structured data can clarify information for search engines; it does not guarantee a rich result or higher ranking.",
    },
    {
      title: "Review Request & Response Workflows",
      description:
        "Create a practical process for inviting genuine feedback after a real customer interaction and responding constructively. Reviews must reflect authentic experiences; incentives, fabricated reviews and filtering requests so only happy customers are asked are not part of the approach.",
    },
    {
      title: "Local Visibility & Conversion Measurement",
      description:
        "Use available Business Profile performance data, Search Console, analytics, appropriately tagged profile links and lead records to review discovery and action. Where supported, UTM parameters can help distinguish profile-driven website visits. Calls, website clicks, direction requests and tracked enquiries are different signals and should not be treated as interchangeable revenue outcomes.",
    },
  ],
  scopeNote:
    "Profile reinstatement support, large-scale listing distribution, custom dashboards, call-tracking systems, multilingual content and CRM integrations depend on the situation and available tools. Confirm these deliverables separately rather than assuming they are included in every Local SEO engagement.",
};

// ============================================================
// KEY DECISIONS - explain important trade-offs, not another scope list.
// ============================================================

export const localSeoDecisions: LocalSeoDecisionItem[] = [
  {
    title: "How Should Business Profiles Be Structured?",
    context:
      "Storefronts, service-area businesses and multi-location brands have different profile requirements.",
    consideration:
      "Verify eligibility, address visibility and genuine service areas. Map each eligible location to its own accurate profile, contact details and lead owner.",
  },
  {
    title: "When Does a Location Page Make Sense?",
    context:
      "Near-identical city pages can offer little value and risk becoming doorway pages.",
    consideration:
      "Create a page when it adds useful local details, such as services, coverage, access, team or local proof. Otherwise, improve the existing page.",
  },
  {
    title: "How Should Reviews Be Requested?",
    context:
      "Poorly designed review campaigns can lead to selective requests, pressure or policy violations.",
    consideration:
      "Request honest feedback neutrally after genuine interactions. Never buy reviews, offer incentives or solicit only positive feedback.",
  },
  {
    title: "Which Local SEO Results Matter?",
    context:
      "Rankings vary by searcher location, and profile interactions do not always become leads.",
    consideration:
      "Use local ranking samples as diagnostics, then track relevant visits, calls, qualified enquiries and booked appointments where measurable.",
  },
];

// ============================================================
// USE CASES - specific buying situations and meaningful signals.
// ============================================================

export const localSeoUseCases: LocalSeoUseCase[] = [
  {
    title: "A Clinic Wants More Appointment Enquiries",
    situation:
      "The clinic wants to attract patients for specific treatments, but its profile and website provide little guidance on services or booking.",
    approach:
      "Align profile information with relevant treatment pages and make the consultation path clear. Track enquiry quality and bookings where measurable.",
    successSignals: [
      "Relevant local visibility",
      "Profile calls and website clicks",
      "Treatment-page visits",
      "Qualified appointment enquiries",
      "Consultations booked",
    ],
  },
  {
    title: "A Home-Service Business Wants Better Local Coverage",
    situation:
      "Customers cannot easily confirm whether the business serves their area, and profile or website details may be unclear.",
    approach:
      "Verify profile eligibility, address visibility and service areas. Clearly communicate coverage and make quote requests easy.",
    successSignals: [
      "Relevant local discovery",
      "Calls and quote requests from served areas",
      "Fewer out-of-area enquiries",
      "Qualified leads by service area",
    ],
  },
  {
    title: "A Multi-Location Brand Needs Consistent Local SEO",
    situation:
      "Branches have inconsistent business details, reviews or landing pages, with unclear ownership of local updates.",
    approach:
      "Map each legitimate branch to its profile and page, standardize core information, and assign responsibility for updates and reviews.",
    successSignals: [
      "Accurate location data",
      "Fewer listing discrepancies",
      "Local actions by branch",
      "Qualified enquiries by location",
    ],
  },
  {
    title: "A Store Wants More Local Visits",
    situation:
      "Potential customers discover the business online but lack clear information about hours, availability, directions or contact options.",
    approach:
      "Keep profile details current, add relevant photos and information, and link to a page that answers practical visit questions.",
    successSignals: [
      "Profile discovery and engagement",
      "Website clicks and direction requests",
      "Calls and appointment actions",
      "Store visits or sales where measurable",
    ],
  },
  {
    title: "A Franchise Needs Local Relevance at Scale",
    situation:
      "The brand needs consistent standards without making every location page and profile look identical.",
    approach:
      "Set shared brand rules while giving each eligible location accurate details about its services, team, access and contact options.",
    successSignals: [
      "Consistent core business information",
      "Accurate location-specific details",
      "Local profile engagement",
      "Enquiries attributed to the right branch",
    ],
  },
  {
    title: "A Business Wants to Diagnose Weak Local Visibility",
    situation:
      "The business has updated its profiles but still cannot identify what limits local discovery or enquiries.",
    approach:
      "Review representative local searches, profiles, listings, website pages and available performance data. Separate confirmed issues from hypotheses and prioritize actionable fixes.",
    successSignals: [
      "Clear visibility baseline and issue list",
      "Priority fixes completed",
      "Changes in local visibility",
      "Profile interactions and qualified enquiries",
    ],
  },
];

// ============================================================
// PROCESS - show what each stage resolves or produces.
// ============================================================

export const localSeoProcess: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  stages: LocalSeoProcessStage[];
} = {
  id: "local-seo-process",
  eyebrow: "HOW THE WORK PROGRESSES",
  h2: "Build a Reliable Local Presence, Step by Step",
  intro:
    "We establish accurate business information first, improve local relevance next, and measure whether those improvements lead to meaningful customer actions.",
  stages: [
    {
      number: "01",
      title: "Map Locations and Priorities",
      description:
        "Confirm business locations, service areas, priority services, existing profiles and customer actions.",
      deliverable: "A location and service inventory",
    },
    {
      number: "02",
      title: "Audit the Current Presence",
      description:
        "Review Business Profiles, listings, website pages, reviews and available performance data to identify gaps.",
      deliverable: "A documented baseline and prioritized issues",
    },
    {
      number: "03",
      title: "Fix Business Information",
      description:
        "Address inaccurate details, duplicate listings, profile eligibility concerns and inconsistencies across important platforms.",
      deliverable: "A prioritized correction list with ownership",
    },
    {
      number: "04",
      title: "Improve Profiles and Reputation",
      description:
        "Refine eligible profile details, services, photos and review-response practices using accurate, policy-compliant information.",
      deliverable: "An agreed profile and reputation improvement plan",
    },
    {
      number: "05",
      title: "Strengthen Local Website Relevance",
      description:
        "Improve useful location and service pages, internal links and local information that helps customers choose and contact the business.",
      deliverable: "Prioritized website and local content improvements",
    },
    {
      number: "06",
      title: "Measure and Refine",
      description:
        "Compare local visibility, profile interactions and qualified enquiries against the baseline, then prioritize the next improvements.",
      deliverable: "A performance summary and next-step roadmap",
    },
  ],
};

// ============================================================
// MEASUREMENT - distinguish leading indicators from business outcomes.
// ============================================================

export const localSeoMeasurement: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  metrics: LocalSeoMetric[];
  trackingNote: string;
} = {
  id: "local-seo-measurement",
  eyebrow: "MEASURE MORE THAN MAP POSITIONS",
  h2: "Connect Local Visibility to Actions You Can Evaluate",
  intro:
    "There is no single local ranking that represents every searcher or neighbourhood. Reporting should combine visibility indicators with the actions customers take and the quality of enquiries the business can verify.",
  metrics: [
    {
      name: "Local Search Visibility",
      whatItShows:
        "How the business appears for a defined set of relevant searches and locations, based on the measurement method available.",
      howToInterpret:
        "Use a consistent sample and date range. A map grid or rank tracker is a diagnostic view, not a universal position or a guarantee of how every searcher sees results.",
    },
    {
      name: "Business Profile Interactions",
      whatItShows:
        "Available activity such as website clicks, calls or direction requests shown in Business Profile performance reporting.",
      howToInterpret:
        "Interactions show intent or activity, not necessarily answered calls, completed appointments, store visits or revenue. Compare with operational data when available.",
    },
    {
      name: "Relevant Organic Visits",
      whatItShows:
        "Visits from local-intent searches to the service and location pages that support the business's target areas.",
      howToInterpret:
        "Look at the landing page and user actions together. More sessions are not automatically more qualified demand.",
    },
    {
      name: "Qualified Enquiries and Bookings",
      whatItShows:
        "Calls, forms, bookings or quote requests that meet the business's definition of a viable lead or customer action.",
      howToInterpret:
        "This requires reliable lead handling and a way to mark quality or outcomes. Do not attribute all organic enquiries to Local SEO without evidence.",
    },
    {
      name: "Location Data Quality",
      whatItShows:
        "Progress on resolving inaccurate or duplicate listings, missing details, outdated hours and location-page mismatches.",
      howToInterpret:
        "Treat it as a quality and maintenance measure, then evaluate whether customer-facing discovery and enquiry indicators improve over time.",
    },
  ],
  trackingNote:
    "Attribution depends on available profile reporting, analytics configuration, call handling, booking tools and CRM practices. We report what can be supported by the data and flag limitations rather than imply perfect attribution.",
};

// ============================================================
// FIT - help visitors understand where the service is useful.
// ============================================================

export const localSeoFit = {
  id: "local-seo-fit",
  eyebrow: "WHEN LOCAL SEO MAKES SENSE",
  h2: "Local SEO Works Best When the Business Has a Clear Real-World Footprint",
  intro:
    "The right starting point depends on how customers receive the service, where the business can legitimately operate and whether there is enough useful information to help a local customer choose it.",
  goodFit: [
    "Clinics, practices and appointment-led businesses that want more relevant local enquiries.",
    "Retail, hospitality and other storefronts that depend on nearby discovery and visits.",
    "Home-service and field-service businesses that travel to customers within a defined area.",
    "Brands and franchises with several real, eligible business locations that need consistent local information.",
  ],
  notFirstStep: [
    "A business without an eligible physical location or service-area operating model should resolve its profile eligibility before investing in profile optimization.",
    "A business expecting an instant, guaranteed map-pack position should reset that expectation; relevance, distance, prominence and competitors affect visibility.",
    "A company whose real objective is national or international non-local search visibility may need the broader SEO programme first, with Local SEO added only where appropriate.",
    "A business with inaccurate core details or unresolved profile access should start by fixing ownership and data quality rather than creating more pages or listings.",
  ],
};

// ============================================================
// WHY BIXELTEK - describe a defensible working approach, not credentials.
// ============================================================

export const localSeoWhyChoose: LocalSeoWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Local Search Work That Respects How the Business Actually Operates",
  intro:
    "A useful local strategy reflects the real locations, services, customer journey and team responsible for handling enquiries. It should improve accuracy and relevance without creating artificial locations, low-value pages or reporting that overstates what happened.",
  points: [
    {
      title: "We Start With Real Locations and Services",
      description:
        "The plan is built around where the business is eligible to operate and what it can genuinely provide-not a long list of cities inserted for search reach.",
    },
    {
      title: "We Treat Profiles and Websites as One Journey",
      description:
        "The profile, location page, service detail and contact path should agree. A good map listing still needs a destination that answers the customer's next questions.",
    },
    {
      title: "We Fix Data Before Multiplying It",
      description:
        "We prioritize important discrepancies and duplicates before recommending more citations, locations or landing pages.",
    },
    {
      title: "We Keep Review Practices Policy-Conscious",
      description:
        "Review workflows should make it easier to share honest feedback without buying reviews, offering incentives or filtering requests based on expected sentiment.",
    },
    {
      title: "We Separate Visibility From Commercial Outcomes",
      description:
        "Map positions and profile interactions are useful signals, but qualified leads, booked appointments and sales need their own definitions and evidence.",
    },
    {
      title: "We Prioritize by Business Value",
      description:
        "The next action might be correcting hours, clarifying a service, consolidating duplicates or improving a location page. We recommend the work indicated by the evidence, not every possible tactic at once.",
    },
  ],
  closingCopy:
    "The objective is a more accurate, useful and measurable local presence-not a ranking guarantee or a report filled with activity that is difficult to connect to the business.",
  ctaText: "Discuss My Local SEO",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS - explain what affects the engagement scope.
// ============================================================

export const localSeoInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number of Real Locations",
    description:
      "A single-location business and a brand with several branches need different levels of auditing, governance, profile maintenance, page planning and reporting.",
  },
  {
    title: "Current Profile and Listing Condition",
    description:
      "Missing access, duplicate profiles, disputed ownership, inaccurate information or widespread listing conflicts may require more investigation and coordination before optimization can progress.",
  },
  {
    title: "Website and Location-Page Work",
    description:
      "Updating existing pages differs from creating useful new location pages, reorganizing site architecture, adding structured data or planning redirects for an established site.",
  },
  {
    title: "Market, Competition and Service Breadth",
    description:
      "The number of priority services, the areas served, competitors and the availability of genuine local information affect research and content needs. A larger city list alone is not a useful scope definition.",
  },
  {
    title: "Review and Listing Operations",
    description:
      "An advisory plan differs from ongoing review response coordination, recurring listing checks or a multi-location process involving branch managers and central approval.",
  },
  {
    title: "Measurement and Reporting Needs",
    description:
      "Basic profile and search reporting differs from combining website analytics, call tracking, booking records or CRM data. Tools, permissions and data quality affect what can be reported reliably.",
  },
];

// ============================================================
// RELATED SERVICES - boundaries matter; confirm routes at integration.
// ============================================================

export const localSeoRelatedServices: RelatedServiceCard[] = [
  {
    title: "SEO Services",
    description:
      "For a broader organic growth strategy covering search visibility, content, technical foundations and authority.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "Technical SEO",
    description:
      "For resolving crawlability, indexation, site architecture, rendering and technical performance issues.",
    linkText: "Explore Technical SEO",
    destination: "/technical-seo",
  },
  {
    title: "On-Page SEO",
    description:
      "For improving page relevance through search intent, content structure, metadata and internal linking.",
    linkText: "Explore On-Page SEO",
    destination: "/on-page-seo",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "For improving the journey from a relevant website visit to a call, booking or qualified enquiry.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
  {
    title: "Google Ads Management",
    description:
      "For capturing local search demand through paid campaigns while organic visibility develops.",
    linkText: "Explore Google Ads",
    destination: "/services/google-ads",
  },
  {
    title: "Analytics & Tracking",
    description:
      "For connecting website activity and available profile interactions with calls, enquiries and bookings.",
    linkText: "Explore Analytics & Tracking",
    destination: "/analytics-and-cro-services",
  },
]

// ============================================================
// FAQS - resolve scope, policy and expectation questions.
// ============================================================

export const localSeoFaqs: FAQItem[] = [
  {
    question: "What does Local SEO include?",
    answer:
      "Depending on the business, Local SEO may include Google Business Profile review and optimization, listing accuracy and duplicate cleanup, local website and location-page improvements, relevant citations, review workflows and performance measurement. The right scope depends on the business model, number of locations, current setup and available access.",
  },
  {
    question: "Can you guarantee a top-three Google Maps position?",
    answer:
      "No. Google says local results are based primarily on relevance, distance and prominence, and there is no way to request or pay for a better local ranking. We can work on the accuracy, usefulness and prominence signals within the business's control, then measure progress using an agreed baseline.",
  },
  {
    question: "Do I need a Google Business Profile for Local SEO?",
    answer:
      "A Business Profile is important for eligible businesses that have a location customers can visit or that travel to customers. Eligibility and address display depend on how the business operates. A business that serves customers at their locations but does not receive them at its own address generally needs to hide that address and set an accurate service area.",
  },
  {
    question: "Can a service-area business rank without showing its address?",
    answer:
      "Eligible service-area businesses can hide their address when customers are not served there and specify the areas they actually serve. That setting does not guarantee visibility in every area; proximity, relevance, prominence and competitors still affect the results.",
  },
  {
    question: "Should we create a page for every city or neighbourhood?",
    answer:
      "Only when each page has a genuine purpose and useful information for customers in that location. Near-identical pages created mainly to capture similar city searches can be considered doorway abuse. Often, improving a strong service page or creating a smaller number of genuinely useful location pages is the better choice.",
  },
  {
    question: "Will local citations improve rankings?",
    answer:
      "Accurate, relevant listings help keep business information consistent and make it easier for customers to find the right details. Citation quantity alone is not a reliable strategy. We prioritize important sources, corrections and duplicates rather than promising a ranking effect from bulk submissions.",
  },
  {
    question: "Can you help us get more Google reviews?",
    answer:
      "We can help plan a process that invites genuine customers to share honest feedback and defines how the business responds. Reviews must reflect real experiences. Buying reviews, offering incentives or selectively asking only happy customers to post are not acceptable practices.",
  },
  {
    question: "Does Google Business Profile optimization require weekly posts?",
    answer:
      "There is no universal posting schedule that guarantees a ranking increase. The important starting point is accurate core information and a useful profile. Updates, photos and offers can be used when they provide current value to customers and are supported by the business's operating routine.",
  },
  {
    question: "How long does Local SEO take to show results?",
    answer:
      "There is no reliable fixed timeline. Straightforward data corrections may be visible sooner than broader organic changes, which depend on the site, competition, location, indexing and ongoing work. We establish a baseline and review progress over an agreed period instead of promising a specific ranking or percentage lift by a set date.",
  },
  {
    question: "How do you measure Local SEO success?",
    answer:
      "We look at a combination of local visibility, Business Profile interactions, relevant organic visits, calls, direction requests, bookings and qualified enquiries where those outcomes can be measured. Rankings and profile interactions are useful indicators, but they are not the same as revenue.",
  },
  {
    question: "Can Local SEO support multiple branches or franchise locations?",
    answer:
      "Yes, provided each profile and page represents a real, eligible location and the business can maintain accurate details. Multi-location work usually needs a location inventory, clear ownership, shared standards and a process for local updates; it should not create duplicate profiles for the same location.",
  },
  {
    question: "Do you work on the website as well as the Business Profile?",
    answer:
      "Website work can be important because local organic results also depend on the quality and relevance of the pages customers reach. Depending on scope, work may include service and location content, internal links, contact paths and checks on relevant structured data. Larger development or tracking changes may need separate scoping.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "Usually, the priority services and locations, current website, known Business Profile URLs, existing access or ownership information, and the actions that matter to the business. If private profile, analytics or lead data is unavailable, the first review can still identify public-facing issues but should be clear about what cannot be verified.",
  },
  {
    question: "Can you fix a suspended or disabled Business Profile?",
    answer:
      "We can review available information, identify potential guideline or data issues and help organize the next steps where this work is agreed. Reinstatement decisions are made by Google, so no agency should guarantee that a profile will be restored.",
  },
];

// ============================================================
// FINAL CTA - a clear conversation, not an unverified free-audit claim.
// ============================================================

export const localSeoFinalCta: LocalSeoFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLAN YOUR LOCAL SEARCH PRIORITIES",
  h2: "Find the Local SEO Work That Will Matter Most for Your Business",
  description:
    "Tell us where you operate, which services or locations matter most and what customers currently do after finding you. We can review the starting point and identify a practical scope for improving local discovery, trust and enquiry paths.",
  primaryCta: {
    label: "Discuss My Local SEO",
    href: "/contact-us",
  },
  supportingCopy:
    "The first step is understanding your locations, current setup and business goal-not promising a map position before the work is assessed.",
};

// ============================================================
// IMPLEMENTATION / QUALITY NOTES
// ============================================================

export const localSeoImplementationNotes = {
  proposedRoute: "/local-seo",
  routeStatus: "Existing live route; confirm the new renderer uses this URL and canonical.",
  pageThesis:
    "Help real local and multi-location businesses improve accurate local discovery and connect it to meaningful customer actions, without relying on ranking promises, artificial location pages or activity-only reporting.",
  primaryBuyer:
    "Local or multi-location businesses where customers visit a location or the team travels to customers: clinics, storefronts, home-service companies and franchises.",
  pageBoundary:
    "This is the Local SEO specialist page. The broader SEO pillar should own national and non-local organic strategy, general technical SEO and wider content programmes. Local SEO owns Google Business Profile, real-location data, local citations, reviews, local landing pages and local-action measurement.",
  preservedFromLegacyPage: [
    "Google Business Profile optimization",
    "NAP and listing accuracy / duplicate cleanup",
    "Location and service-area landing pages",
    "Citations and relevant local authority references",
    "Review and reputation workflows",
    "Calls, website actions and direction-request measurement",
    "Local visibility checks for different areas or locations",
  ],
  intentionallyRemovedOrReframed: [
    "Removed unsupported numeric claims about the share of searches with local intent, map visibility lifts, review increases and results within eight weeks.",
    "Removed any promise to secure the top-three Map Pack or to double calls and direction clicks.",
    "Reframed Google Business Profile changes around real-world eligibility and accurate representation; do not add keywords to the business name or invent locations.",
    "Reframed review automation to prohibit incentives, fake engagement and review gating.",
    "Reframed citations around accuracy and relevance instead of a fixed directory count or guaranteed ranking impact.",
    "Reframed location pages around distinct customer value and documented Google's doorway-abuse policy.",
    "Made ranking grids and profile interactions diagnostic indicators rather than universal rankings or proof of revenue.",
  ],
  assumptionsToConfirm: [
    "Confirm the actual route/component mapping and renderer section IDs in the repository. Existing live canonical is https://bixeltek.com/local-seo.",
    "Confirm the exact services Bixeltek will deliver directly: ongoing profile management, listing distribution, review workflow implementation, rank-grid reporting and profile reinstatement assistance.",
    "Confirm whether multilingual local SEO (including Arabic) is an active, supported delivery option before mentioning it in published content.",
    "Confirm the actual reporting tools and whether call tracking, CRM data, or booked-appointment/sales outcomes can be accessed.",
    "Confirm internal destinations: /services/seo-services, /services/google-ads, /analytics-and-cro-services, /services/web-design, /services/conversion-rate-optimization and /contact-us.",
    "Do not add local case studies, metrics, client names, directory partnerships or ranking claims without approved evidence.",
  ],
  researchReferences: [
    "Existing Bixeltek Local SEO page: https://bixeltek.com/local-seo",
    "Bixeltek SEO pillar: https://bixeltek.com/services/seo-services",
    "Google local ranking guidance: https://support.google.com/business/answer/7091",
    "Google Business Profile guidelines: https://support.google.com/business/answer/3038177",
    "Google review-request guidance: https://support.google.com/business/answer/16816815",
    "Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business",
    "Google Search spam policies (doorway abuse): https://developers.google.com/search/docs/essentials/spam-policies",
    "BrightLocal Local SEO strategy reference: https://www.brightlocal.com/learn/local-seo-strategy/",
  ],
  sectionIdsForRenderer: [
    "local-seo-overview",
    "local-seo-problems",
    "local-seo-scope",
    "local-seo-decisions",
    "local-seo-use-cases",
    "local-seo-process",
    "local-seo-measurement",
    "local-seo-fit",
    "local-seo-investment-factors",
    "local-seo-related-services",
    "faqs",
    "final-cta",
  ],
  selfReviewScore: {
    pageSpecificInsight: 18,
    buyerUsefulness: 19,
    technicalAccuracy: 14,
    workflowDetail: 14,
    sectionDifferentiation: 9,
    credibilityAndLimitations: 10,
    seoAndInternalLinks: 4,
    languageAndScannability: 5,
    total: 93,
    note:
      "Self-review only; the final score depends on the actual component mapping, live route verification and Bixeltek confirming the operational scope. The data file has not been compiled against the real repository interfaces.",
  },
};
