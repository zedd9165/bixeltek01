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
// ON-PAGE SEO - BIXELTEK SERVICE PAGE DATA
// Purpose: improve the relevance, clarity, structure and usefulness
// of existing pages for both searchers and search engines.
// Preserve the existing live route unless a migration is approved.
// ============================================================

export interface OnPageSeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface OnPageSeoPoint {
  title: string;
  description: string;
}

export interface OnPageSeoDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface OnPageSeoUseCase {
  title: string;
  situation: string;
  approach: string;
  successSignals: string[];
}

export interface OnPageSeoProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface OnPageSeoMetric {
  name: string;
  whatItShows: string;
  howToInterpret: string;
}

export interface OnPageSeoWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: OnPageSeoPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface OnPageSeoFinalCtaData {
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

export const onPageSeoMetadata: OnPageSeoMetadata = {
  title: "On-Page SEO Services | Content & Page Optimization - Bixeltek",
  description:
    "Improve how important website pages match search intent with on-page SEO: content structure, titles, headings, internal links, metadata and relevant structured data.",
  keywords: [
    "on-page SEO services",
    "on-page SEO agency",
    "on-page optimization services",
    "SEO content optimization",
    "meta title and description optimization",
    "heading optimization",
    "internal linking strategy",
    "search intent optimization",
    "website content audit",
    "on-page SEO audit",
  ],
  // Canonical route for On-Page SEO
  canonical: "https://bixeltek.com/services/seo-services/on-page-seo",
};

export const onPageSeoBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "On-Page SEO", href: "/services/seo-services/on-page-seo" },
];

export const onPageSeoJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#on-page-seo-overview" },
  { label: "Common Problems", href: "#on-page-seo-problems" },
  { label: "What We Optimize", href: "#on-page-seo-scope" },
  { label: "Key Decisions", href: "#on-page-seo-decisions" },
  { label: "Use Cases", href: "#on-page-seo-use-cases" },
  { label: "Our Process", href: "#on-page-seo-process" },
  { label: "Measurement", href: "#on-page-seo-measurement" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - focus on making existing pages clearer and more useful.
// ============================================================

export const onPageSeoHero = {
  eyebrow: "ON-PAGE SEO · CONTENT STRUCTURE · INTERNAL LINKING",
  h1: "Make Your Website Pages More Relevant to the Searches That Matter",
  p1:
    "A page can target the right topic and still underperform when it answers the wrong question, hides key information, overlaps with another page or gives visitors no clear next step.",
  p2:
    "Bixeltek improves the on-page elements that help people and search engines understand a page-from search intent, titles and headings to content depth, internal links and relevant structured data.",
  primaryButtonText: "Talk to our seo experts",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore SEO Services",
  secondaryLinkHref: "/services/seo-services",
  microcopy:
    "For existing websites that need clearer page targeting, stronger content structure or a more useful path from organic visit to enquiry. Rankings are influenced by factors beyond on-page work alone.",
};

// ============================================================
// OVERVIEW - show how page-level optimization fits the wider SEO system.
// ============================================================

export const onPageSeoOverview = {
  id: "on-page-seo-overview",
  eyebrow: "START WITH THE PAGE'S JOB",
  h2: "Optimization Is More Than Adding Keywords to a Page",
  intro:
    "On-page SEO improves the content and page elements that communicate what a page is about, which search need it serves and what a visitor can do next. The objective is not to repeat a phrase more often; it is to make the page a clearer, more complete and more useful answer to the right question.",
  body:
    "We look at each priority URL in context: what the search results suggest people want, which page on the site should satisfy that intent, what information a credible answer requires, and how that page connects to the rest of the website. Metadata and headings matter, but they cannot compensate for content that does not meet the visitor's need.",
  points: [
    {
      title: "Intent before wording",
      description:
        "Decide whether the page needs to explain, compare, help someone choose or support a transaction. Then shape its content around that job instead of forcing every query into the same page format.",
    },
    {
      title: "Structure before expansion",
      description:
        "Make the main topic, supporting questions, key details and next steps easy to follow. Add content when it improves understanding-not to reach an arbitrary word count or keyword target.",
    },
    {
      title: "Useful connections between pages",
      description:
        "Connect related service pages, category pages, product pages and supporting guides with meaningful internal links. This helps visitors navigate the site and gives crawlers paths to discover related content.",
    },
  ],
  closingCopy:
    "On-page SEO is one part of organic search performance. Technical crawlability, competition, reputation and external signals also matter, so priorities should be based on the actual constraint rather than assuming every ranking issue is a copy problem.",
};

// ============================================================
// PROBLEMS - recognizable page-level issues and their implications.
// ============================================================

export const onPageSeoProblems: ProblemCard[] = [
  {
    title: "Pages Get Impressions but Few Clicks",
    description:
      "A result may appear for relevant searches without giving people a compelling or accurate reason to visit. We review title links, page topics and available snippets, then compare impressions and click-through rate by query and page. Google may rewrite title links and snippets, so editing tags alone cannot guarantee a particular search appearance.",
  },
  {
    title: "Visitors Land on the Page but Do Not Find Their Answer",
    description:
      "The copy may focus on what the business wants to say instead of what the searcher needs to know. We compare the page with the intent behind its priority queries, identify missing explanations or evidence, and clarify the information needed to make a decision.",
  },
  {
    title: "Several Pages Compete for the Same Search Intent",
    description:
      "Similar service pages, articles or location pages may serve overlapping purposes, leaving it unclear which URL should be the main destination. We map page intent and topic overlap before deciding whether to differentiate, consolidate, redirect or simply improve the existing content.",
  },
  {
    title: "Headings and Content Structure Are Difficult to Follow",
    description:
      "Pages may use headings for styling rather than to communicate the actual structure, bury important details or repeat sections without adding value. We reorganize the information so visitors can scan it, understand relationships and find the answer they came for.",
  },
  {
    title: "Important Pages Are Buried in the Website",
    description:
      "A valuable service, category or resource may receive few meaningful internal links, or links may use vague wording that hides the destination's purpose. We improve relevant contextual paths and anchor text without forcing exact-match phrases or adding unnecessary links.",
  },
  {
    title: "Traffic Grows, but Enquiries or Purchases Do Not",
    description:
      "A page can attract visits from queries that are informational, poorly matched to the offer or too early in the buying journey. We review intent, content clarity, trust information and the next action together, then evaluate qualified actions where tracking and business data are available.",
  },
];

// ============================================================
// SCOPE - page-level deliverables tied to the underlying decision.
// ============================================================

export const onPageSeoScope: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  items: ScopeCard[];
  scopeNote: string;
} = {
  id: "on-page-seo-scope",
  eyebrow: "WHAT WE OPTIMIZE",
  h2: "The Page Elements That Help Searchers Understand and Act",
  intro:
    "The scope depends on which URLs matter, what the current content is doing, and whether the constraint is relevance, structure, differentiation or the path to conversion. We start with prioritized pages and specific changes rather than applying the same checklist blindly to every URL.",
  items: [
    {
      title: "Search Intent & Page Mapping",
      description:
        "Review target queries and current search results to understand whether visitors need a service page, product/category page, comparison, guide or another format. Assign one clear primary job to each important URL and flag overlap that may require a separate content or architecture decision.",
    },
    {
      title: "Title Tags & Search Snippets",
      description:
        "Write distinct, accurate title tags and useful meta descriptions for priority pages. Keep titles descriptive and concise, and make descriptions specific to the page's offer or answer. Google may select other page text or generate a different title link or snippet, so these elements are guidance-not fixed display controls.",
    },
    {
      title: "Headings & Page Hierarchy",
      description:
        "Clarify the main heading, supporting sections and subordinate details so the document's structure reflects its meaning. Headings should help readers navigate the content; adding more heading levels or exact-match keywords is not an outcome by itself.",
    },
    {
      title: "Content Gaps & Topic Coverage",
      description:
        "Find unanswered buyer questions, unclear claims, missing comparisons, unexplained terms and details needed to evaluate the offer. Add relevant examples, process information, specifications or evidence where the business can support them. Avoid filler, invented expertise and copy expanded only to hit a word count.",
    },
    {
      title: "Internal Linking & Topic Connections",
      description:
        "Identify meaningful links between related pages and improve anchor text so the destination is clear in context. We consider important pages that are difficult to discover, redundant navigation and links that send visitors to the wrong stage of their journey-without pursuing arbitrary link counts or keyword-heavy anchors.",
    },
    {
      title: "Image Context & Media Details",
      description:
        "Review image filenames, alternative text where appropriate, surrounding copy and media choices. Alternative text should convey an image's purpose or relevant information; decorative images can use empty alt text. It is not a field for stuffing target phrases into every image.",
    },
    {
      title: "Structured Data Review",
      description:
        "Check whether relevant supported structured data describes the visible page accurately, whether required properties are present, and whether markup duplicates or contradicts the content. Structured data can make a page eligible for certain search features, but valid markup does not guarantee a rich result or higher ranking.",
    },
    {
      title: "Conversion Clarity & Page Experience",
      description:
        "Review whether visitors can understand the offer, evaluate fit, find trust information and complete the next useful action. This can include CTA clarity, form expectations, content sequence and mobile readability. Broader speed, template, JavaScript or Core Web Vitals issues may need a separate technical SEO or development scope.",
    },
  ],
  scopeNote:
    "Full content writing, subject-matter interviews, large-scale product copy, translation, CMS implementation, template development, technical SEO fixes and CRO experiments may need separate scoping. Recommendations that require factual input or approval from the business will be marked rather than filled with invented claims.",
};

// ============================================================
// KEY DECISIONS - trade-offs that materially change the approach.
// ============================================================

export const onPageSeoDecisions: OnPageSeoDecisionItem[] = [
  {
    title: "Improve an Existing Page or Create a New One?",
    context:
      "New pages can create overlap when an existing page already serves the same search intent.",
    consideration:
      "Review queries, page purpose and search results first. Create a new page only for a distinct user need.",
  },
  {
    title: "How Much Content Is Enough?",
    context:
      "Short pages may miss important answers, while longer pages can introduce repetition.",
    consideration:
      "Answer relevant questions clearly, explain key trade-offs and remove filler. There is no universal word-count target.",
  },
  {
    title: "How Should Keywords Be Used?",
    context:
      "Forced repetition makes content unnatural without guaranteeing better rankings.",
    consideration:
      "Use relevant search terms naturally in titles, headings and copy. Prioritize clarity over keyword density.",
  },
  {
    title: "When Are Schema and Technical Changes Needed?",
    context:
      "Structured data, canonicals and rendering often require more than a content edit.",
    consideration:
      "Use valid schema that matches visible content, and separate CMS-level improvements from developer-dependent fixes.",
  },
];

// ============================================================
// USE CASES - practical scenarios and relevant success signals.
// ============================================================

export const onPageSeoUseCases: OnPageSeoUseCase[] = [
  {
    title: "A Service Business Wants Better Organic Enquiries",
    situation:
      "Service pages attract visits but lack clear scope, useful answers or a convincing next step.",
    approach:
      "Align pages with relevant searches, clarify services, answer buying questions and improve titles, headings and enquiry paths.",
    successSignals: [
      "Relevant search impressions and clicks",
      "Organic visits to priority pages",
      "Enquiry conversion rate",
      "Qualified leads",
    ],
  },
  {
    title: "An Ecommerce Store Needs Stronger Product Pages",
    situation:
      "Thin category pages and duplicated product descriptions give shoppers little help comparing options.",
    approach:
      "Improve product details, category guidance, differentiators, titles and contextual links while accounting for catalogue constraints.",
    successSignals: [
      "Relevant non-brand clicks",
      "Organic product and category visits",
      "Add-to-cart activity",
      "Purchases and revenue where measurable",
    ],
  },
  {
    title: "A B2B Company Needs Clearer Service Pages",
    situation:
      "Buyers cannot easily understand the solution, implementation requirements, risks or differences between options.",
    approach:
      "Structure pages around buyer decisions, explain scope and dependencies, and connect relevant case studies and technical resources.",
    successSignals: [
      "Visibility for commercial queries",
      "Engagement with service pages",
      "Relevant consultation enquiries",
      "Improved lead fit",
    ],
  },
  {
    title: "Several Pages Target Similar Keywords",
    situation:
      "Overlapping pages compete for similar searches without a clear primary destination.",
    approach:
      "Review intent, query data and links before differentiating, consolidating or redirecting pages.",
    successSignals: [
      "Clearer query-to-page mapping",
      "Less avoidable content overlap",
      "More stable target-page visibility",
      "No unintended traffic loss",
    ],
  },
  {
    title: "Content Is Growing but Results Are Flat",
    situation:
      "New articles overlap, miss search intent or fail to support relevant service pages.",
    approach:
      "Audit existing content, improve or consolidate weak pages, and link useful guides to relevant services before creating more content.",
    successSignals: [
      "Relevant query coverage",
      "Organic clicks to useful pages",
      "Better internal linking",
      "Assisted enquiries where measurable",
    ],
  },
  {
    title: "A Multilingual Site Needs Clearer Targeting",
    situation:
      "Translated pages fail to reflect local search intent, terminology or market-specific needs.",
    approach:
      "Improve localized content and page relevance, then verify URL and hreflang relationships with the technical team.",
    successSignals: [
      "Relevant clicks by market and language",
      "Correct landing pages for each locale",
      "Enquiry quality by market",
      "Fewer overlapping content targets",
    ],
  },
];

// ============================================================
// PROCESS - evidence and prioritization before broad page rewrites.
// ============================================================

export const onPageSeoProcess: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  stages: OnPageSeoProcessStage[];
} = {
  id: "on-page-seo-process",
  eyebrow: "HOW THE WORK PROGRESSES",
  h2: "Find the Gaps. Improve the Right Pages.",
  intro:
    "We use search data and page-level analysis to identify gaps, prioritize changes and measure their impact.",
  stages: [
    {
      number: "01",
      title: "Select Priority Pages",
      description:
        "Identify important URLs, business goals and available performance data.",
      deliverable: "Prioritized pages and performance baseline",
    },
    {
      number: "02",
      title: "Analyze Search Intent",
      description:
        "Review target queries, search results and the purpose of each page.",
      deliverable: "Search-intent and page mapping",
    },
    {
      number: "03",
      title: "Audit On-Page Elements",
      description:
        "Check content, headings, metadata, internal links and relevant structured data.",
      deliverable: "Page-level issues and opportunities",
    },
    {
      number: "04",
      title: "Prioritize Improvements",
      description:
        "Define specific changes based on impact, effort and implementation needs.",
      deliverable: "Prioritized action plan with task owners",
    },
    {
      number: "05",
      title: "Implement and Validate",
      description:
        "Apply agreed edits and verify page content, links and relevant SEO elements.",
      deliverable: "Implemented changes and validation checklist",
    },
    {
      number: "06",
      title: "Measure and Refine",
      description:
        "Review search performance, organic visits and enquiries, then plan the next improvements.",
      deliverable: "Performance review and next steps",
    },
  ],
};

// ============================================================
// MEASUREMENT - show what changed without claiming direct causation.
// ============================================================

export const onPageSeoMeasurement: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  metrics: OnPageSeoMetric[];
  trackingNote: string;
} = {
  id: "on-page-seo-measurement",
  eyebrow: "MEASURE THE PAGE, NOT JUST THE TASK LIST",
  h2: "Track Search Visibility Alongside the Actions That Matter",
  intro:
    "A page update is a completed task, not proof of business impact. We compare relevant query and landing-page performance with the baseline, then evaluate engagement and enquiry outcomes where measurement is available.",
  metrics: [
    {
      name: "Query-Level Impressions and Clicks",
      whatItShows:
        "How often pages appear for selected searches and how many search clicks they receive in Search Console.",
      howToInterpret:
        "Segment by relevant query, page, country and device where useful. Changes can reflect demand, competition, seasonality and other site changes-not only the edit being reviewed.",
    },
    {
      name: "Click-Through Rate and Search Appearance",
      whatItShows:
        "How frequently impressions result in clicks for a selected query/page segment, alongside the titles and snippets people may see.",
      howToInterpret:
        "Compare like-for-like query groups and review the actual search result when possible. Google may rewrite title links and snippets, and CTR is affected by ranking position, brand demand, SERP features and intent.",
    },
    {
      name: "Organic Landing-Page Engagement",
      whatItShows:
        "What visitors do after entering through organic search, based on the events and engagement measures configured in analytics.",
      howToInterpret:
        "Define meaningful actions for the page first. Time or page views alone do not prove content quality, and measurement settings should be checked before drawing conclusions.",
    },
    {
      name: "Qualified Enquiries or Purchases",
      whatItShows:
        "Whether priority pages contribute to calls, forms, bookings, demos, add-to-cart actions or purchases that matter to the business.",
      howToInterpret:
        "This requires reliable tracking and, for lead quality or revenue, operational data such as CRM status or sales outcomes. Do not attribute every organic conversion to an individual content change without evidence.",
    },
    {
      name: "Implementation and Content Quality",
      whatItShows:
        "Whether agreed recommendations were implemented correctly: accurate metadata, clear page purpose, useful content, working internal links and valid applicable markup.",
      howToInterpret:
        "Use this as a quality-control measure, then evaluate search and business outcomes separately. Passing a checklist or a schema test does not guarantee rankings or rich-result display.",
    },
  ],
  trackingNote:
    "Reporting quality depends on Search Console coverage, analytics configuration, conversion definitions, release dates and access to lead or sales data. The report should identify the changes made and evidence observed while keeping causation and data gaps explicit.",
};

// ============================================================
// FIT - set expectations for when this service is useful.
// ============================================================

export const onPageSeoFit = {
  id: "on-page-seo-fit",
  eyebrow: "WHEN ON-PAGE SEO MAKES SENSE",
  h2: "Best Suited to Websites With Pages Worth Improving",
  intro:
    "On-page optimization is most useful when the website has a clear business purpose and there are identifiable pages or queries to improve. It may not be the first priority if search engines cannot crawl the site, the offer is unclear or there is little evidence about which audience matters.",
  goodFit: [
    "You have important service, product, category or resource pages that need clearer targeting.",
    "Search Console shows relevant impressions but the pages attract few clicks or the wrong visitors.",
    "Visitors reach organic landing pages but struggle to understand the offer, compare options or take the next step.",
    "The site has duplicate or overlapping content, weak internal linking or a confusing page hierarchy.",
    "Your content team needs a practical, prioritized improvement plan instead of another broad SEO checklist.",
  ],
  mayNeedAnotherFirst: [
    "The site is blocked from crawling or indexing, has widespread rendering/canonical problems or major technical errors; start with a technical SEO review.",
    "The business cannot yet explain its target customer, offer or service differentiation; clarify positioning before scaling content.",
    "The primary issue is weak market demand, a poor offer, slow sales follow-up or an unconvincing conversion journey; on-page SEO alone will not solve it.",
    "There is no access to baseline data or subject-matter input; public-page recommendations may still be possible, but conclusions and measurement will be limited.",
  ],
};

// ============================================================
// WHY BIXELTEK - explain the working approach, not unverified credentials.
// ============================================================

export const onPageSeoWhyChoose: OnPageSeoWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Page Improvements Built Around Search Intent and Business Context",
  intro:
    "The best edit is not always the one that adds more keywords. It is the change that removes a real mismatch between the search, the page, the evidence a buyer needs and the action the business wants them to take.",
  points: [
    {
      title: "We map pages to a clear purpose",
      description:
        "Priority queries are reviewed alongside the site's existing URLs so page improvements do not create unnecessary overlap or a new page for every keyword variation.",
    },
    {
      title: "We explain the reason for each change",
      description:
        "Recommendations connect a specific observation-such as an intent mismatch, missing information or weak internal path-to a proposed action and its expected role.",
    },
    {
      title: "We improve content without keyword stuffing",
      description:
        "Language is shaped around the subject and the customer's questions. Word count, exact-match repetition and the number of headings are not used as stand-ins for quality.",
    },
    {
      title: "We distinguish editorial work from technical work",
      description:
        "The plan identifies what a content editor can change and what depends on templates, developers, CMS permissions or technical SEO investigation.",
    },
    {
      title: "We keep evidence and claims accountable",
      description:
        "Business facts, expertise, specifications, testimonials and performance claims should be supported by approved source material. Gaps that need client input are clearly identified.",
    },
    {
      title: "We measure beyond ranking screenshots",
      description:
        "Search visibility is considered with organic landing-page activity and qualified conversions where data permits, so the review reflects the actual purpose of the page.",
    },
  ],
  closingCopy:
    "Recommendations are prioritized to fit the website, the available evidence and the business goal-not to maximize the size of an audit or the number of changes made.",
  ctaText: "Discuss My On-Page SEO",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS - explain what affects scope and effort.
// ============================================================

export const onPageSeoInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number and Type of Priority URLs",
    description:
      "A focused review of a handful of service pages differs from a large ecommerce catalogue, international site or website with many related landing pages. Templates and page groups affect how efficiently the work can be carried out.",
  },
  {
    title: "Existing Content and Research Quality",
    description:
      "Pages with accurate information and clear subject-matter input may need restructuring and refinement. Thin, duplicated or outdated pages may need deeper research, new copy, interviews or consolidation decisions.",
  },
  {
    title: "Intent and Topic Overlap",
    description:
      "When URLs compete or serve unclear purposes, the scope includes page mapping and decisions about differentiation, consolidation or redirects-not just individual metadata edits.",
  },
  {
    title: "CMS and Development Dependencies",
    description:
      "Content edits that an editor can safely make differ from changes to templates, metadata generation, internal navigation, structured data, canonical handling or rendered content that require developer involvement.",
  },
  {
    title: "Languages and Market Variants",
    description:
      "Each language or market version may need localized intent research, terminology review and checks on how the versions relate technically. Direct translation of keywords and metadata may not reflect local search behaviour.",
  },
  {
    title: "Measurement and Follow-Up",
    description:
      "An audit and prioritized plan differ from hands-on implementation, quality assurance, ongoing content updates, experiments and reporting that connect changes with qualified enquiries or sales.",
  },
];

// ============================================================
// RELATED SERVICES - direct visitors to adjacent work where appropriate.
// ============================================================

export const onPageSeoRelatedServices: RelatedServiceCard[] = [
  {
    title: "SEO Services",
    description:
      "For a broader organic search programme covering technical foundations, content planning, authority and ongoing performance priorities beyond individual page improvements.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "Technical SEO",
    description:
      "For crawlability, indexation, canonicalization, rendering, structured-data implementation and other issues that cannot be resolved through copy and page structure alone.",
    linkText: "Explore Technical SEO",
    destination: "/technical-seo",
  },
  {
    title: "Local SEO",
    description:
      "For Google Business Profile, local business information, location-page planning, local citations, reviews and visibility tied to real service areas or branches.",
    linkText: "Explore Local SEO",
    destination: "/services/seo-services/local-seo",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "For investigating the wider user journey when relevant organic visitors reach a page but do not complete an enquiry, booking or purchase.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
  {
    title: "Web Design & Development",
    description:
      "For deeper changes to page templates, site navigation, mobile usability, CMS implementation or the content-management workflow behind SEO improvements.",
    linkText: "Explore Web Design Services",
    destination: "/services/web-design",
  },
  {
    title: "Analytics & Tracking",
    description:
      "For improving event definitions and conversion measurement when page-level search activity needs to be connected to qualified leads, bookings or purchases.",
    linkText: "Explore Analytics & Tracking",
    destination: "/analytics-and-cro-services",
  },
];

// ============================================================
// FAQS - answer scope and expectation questions directly.
// ============================================================

export const onPageSeoFaqs: FAQItem[] = [
  {
    question: "What is on-page SEO?",
    answer:
      "On-page SEO improves the content and page-level elements that help visitors and search engines understand a page. This can include search-intent alignment, useful content, title tags, headings, internal links, image context and relevant structured data. The goal is to make important pages clearer and more useful, not simply to add keywords.",
  },
  {
    question: "What is the difference between on-page and technical SEO?",
    answer:
      "On-page SEO focuses primarily on the purpose, content, metadata, structure and contextual links of individual pages. Technical SEO covers issues such as crawling, indexation, rendering, canonicalization, site architecture, performance and implementation. The work can overlap-for example, a structured-data issue may require both content review and code changes.",
  },
  {
    question: "Do keywords still matter for on-page SEO?",
    answer:
      "Yes, natural search language can help describe what a page is about, but exact-match repetition is not a reliable quality strategy. We use query research to understand intent and terminology, then write clear content that answers the topic without forcing phrases into every heading or paragraph.",
  },
  {
    question: "How do you choose which page to optimize first?",
    answer:
      "We consider business importance, the page's purpose, relevant query impressions and clicks, conversion value, content gaps, internal links and the effort needed to make a useful improvement. The highest-priority page is not always the one with the lowest ranking; it is the page where a well-founded change has a meaningful role in the business's goals.",
  },
  {
    question: "How long should an SEO page or article be?",
    answer:
      "There is no universal word count that guarantees a ranking. The page should cover what the intended visitor needs to understand or do, with enough depth for the subject and buying decision. We remove repetition and avoid expanding copy solely to match a competitor's length.",
  },
  {
    question: "Will changing the title tag increase click-through rate?",
    answer:
      "A clearer title can help a searcher understand a result, but click-through rate also depends on query intent, ranking position, brand awareness, competition and search-result features. Google may generate a title link from other page content, so we measure the page and relevant query groups rather than promising a fixed CTR increase.",
  },
  {
    question: "Does Google always show the meta description we write?",
    answer:
      "No. Google primarily generates snippets from page content and may use the meta description when it provides a suitable summary. We write distinct, accurate descriptions for priority URLs, while recognizing that the displayed snippet can vary by query and device.",
  },
  {
    question: "What is entity SEO?",
    answer:
      "In practice, entity-oriented work means being clear and accurate about the people, products, services, places, concepts and relationships relevant to a topic. It can help make a page more complete and understandable, but it is not a hidden formula or a substitute for useful content, clear intent and sound technical foundations.",
  },
  {
    question: "How do internal links help SEO?",
    answer:
      "Internal links help people navigate related information and help search engines discover pages and understand their relationships. Links should be crawlable, relevant and described with natural anchor text. There is no universal ideal link count, and adding links that do not help users is not a strategy by itself.",
  },
  {
    question: "Should we add FAQ schema to every page?",
    answer:
      "No. Structured data should match the actual visible content and the requirements for a supported search feature. Not every page needs FAQ markup, and valid schema does not guarantee a rich result or ranking improvement. We recommend markup based on the page and current search-engine guidance, not as a default checkbox.",
  },
  {
    question: "Can on-page SEO alone improve rankings?",
    answer:
      "It can address important page-level issues, but rankings also depend on factors such as crawlability, competition, relevance, site reputation and external signals. If the main constraint is technical or the business has little evidence of demand, on-page edits alone may not solve it. The review should identify those boundaries.",
  },
  {
    question: "How do you measure on-page SEO results?",
    answer:
      "We review relevant Search Console impressions, clicks, query patterns and landing pages alongside analytics engagement and qualified enquiries or purchases where tracking is available. A checklist completion is not proof of growth, and performance changes must be interpreted in light of other site changes, demand and competition.",
  },
  {
    question: "Can you optimize a large ecommerce catalogue?",
    answer:
      "Yes, but catalogue work needs a plan for page types, product data, duplicate manufacturer descriptions, filters, variants and the CMS or commerce platform. We usually group URLs by template or category, test the approach and validate it before applying changes broadly. The exact scope depends on catalogue size and implementation constraints.",
  },
  {
    question: "Can you optimize multilingual pages?",
    answer:
      "Multilingual on-page work can include localized terminology, page intent, metadata, content and internal links. International URL structure and hreflang need technical review as well. Each language version should be useful for its intended audience; translating the same keyword list word-for-word is rarely enough.",
  },
  {
    question: "What do you need before starting?",
    answer:
      "Helpful inputs include the website and priority URLs, target services or products, important markets, business goals, access to Search Console and analytics where available, CMS access for implementation and subject-matter input for claims that need verification. We can begin with a public-page review if access is limited, but the findings and measurement will have clear limitations.",
  },
];

// ============================================================
// FINAL CTA - ask for the page-level business problem, not a vague audit.
// ============================================================

export const onPageSeoFinalCta: OnPageSeoFinalCtaData = {
  id: "final-cta",
  eyebrow: "PRIORITIZE THE PAGES THAT MATTER",
  h2: "Find Out What Your Important Pages Need Next",
  description:
    "Tell us which pages matter to your business, what you want them to achieve and what is currently underperforming. We can review the starting point and scope the right mix of page analysis, content improvements and implementation work.",
  primaryCta: {
    label: "Discuss My On-Page SEO",
    href: "/contact-us",
  },
  supportingCopy:
    "Recommendations will distinguish page-level improvements from technical or off-page issues that need a different solution.",
};

// ============================================================
// IMPLEMENTATION / QUALITY NOTES
// ============================================================

export const onPageSeoImplementationNotes = {
  proposedRoute: "/on-page-seo",
  routeStatus:
    "Existing live route. Confirm that the new data renderer preserves this URL and canonical.",
  pageThesis:
    "Help businesses make priority website pages a clearer, more complete answer to relevant searches and a more useful step in the customer journey, based on actual query intent and page evidence rather than keyword density or ranking promises.",
  primaryBuyer:
    "Marketing and SEO owners, service businesses, B2B companies, ecommerce teams and content teams with existing pages that need clearer search targeting, better structure or stronger relevance to commercial outcomes.",
  pageBoundary:
    "This is the On-Page SEO specialist page. The main SEO pillar owns the wider organic strategy and overall programme. On-Page SEO covers page purpose, intent mapping, content and headings, title tags/meta descriptions, internal links, image context and relevant structured data. Technical SEO owns crawlability, indexation, rendering, canonicalization, broad performance and other code/platform issues. Local SEO owns Google Business Profile, local citations, review workflows and local presence.",
  preservedFromLegacyPage: [
    "Search-intent discovery and mapping queries to the appropriate page purpose.",
    "Content hierarchy and heading structure organized around the reader's information needs.",
    "Title tags and meta descriptions written for clarity and relevance.",
    "Contextual internal links that connect related pages and support crawl discovery.",
    "Review of relevant structured data, including whether it accurately represents visible page content.",
    "Content-gap analysis and prioritized recommendations for important URLs.",
    "Localization considerations for multilingual or multi-market pages when those markets are genuinely served.",
  ],
  intentionallyRemovedOrReframed: [
    "Removed numerical promises of 25-60% organic CTR growth in six weeks, 40% time-on-page growth and 20% conversion lift because the legacy page provided no auditable supporting methodology or context.",
    "Removed the promise of cross-topic ranking improvement within 45 days and the implication that structured data guarantees a CTR uplift or rich result.",
    "Removed 'keyword density' and NLP sentiment tuning as target deliverables. Replaced them with intent mapping, natural terminology, useful topic coverage and readability.",
    "Reframed heading hierarchy as a usability and document-structure concern rather than a guarantee of passage-ranking eligibility.",
    "Reframed entity work as accurate explanation of the subject and its relevant concepts, not a proprietary or guaranteed ranking formula.",
    "Reframed structured data as a way to describe visible content and potentially qualify for supported search features; valid markup does not guarantee appearance or ranking gains.",
    "Removed unsupported claims about automatic AI-search inclusion, faster rankings and guaranteed authority improvements.",
    "Reframed the legacy 'free audit worth $499' and fixed 30-day roadmap as offer/operations that need confirmation before being promised in this new page.",
    "Avoided repeating the same five-step framework in several separate sections; each section now answers a different buyer question.",
  ],
  assumptionsToConfirm: [
    "Confirm the renderer's expected export names, interfaces and section IDs using the actual repository. This file uses the current local-seo.ts shared-type conventions but is not verified against Bixeltek's actual ./ecom type definitions.",
    "Confirm the live route/canonical and metadata configuration for https://bixeltek.com/on-page-seo.",
    "Confirm whether Bixeltek offers implementation as well as recommendations for title tags, content, internal links and structured data, and which CMSs are in scope.",
    "Confirm whether content writing, subject-matter interviews, multilingual editorial work and ecommerce catalogue optimization are available service deliverables or need separate scoping.",
    "Confirm the route /technical-seo and all related-service destinations before publishing; preserve existing navigation relationships.",
    "Confirm whether the CTA is a consultation request, an audit offer or a paid engagement. Do not promise a free audit, fixed audit value, 30-day roadmap or delivery timeline unless the offer is approved and operationally supported.",
    "Do not add performance metrics, client examples, certifications or ranking guarantees without approved evidence and context.",
  ],
  researchReferences: [
    "Existing Bixeltek On-Page SEO page: https://bixeltek.com/on-page-seo",
    "Bixeltek SEO pillar: https://bixeltek.com/services/seo-services",
    "Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    "Google helpful, reliable, people-first content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    "Google snippet and meta description guidance: https://developers.google.com/search/docs/appearance/snippet",
    "Google link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
    "Google structured data introduction and limitations: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    "Google general structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
  ],
  sectionIdsForRenderer: [
    "on-page-seo-overview",
    "on-page-seo-problems",
    "on-page-seo-scope",
    "on-page-seo-decisions",
    "on-page-seo-use-cases",
    "on-page-seo-process",
    "on-page-seo-measurement",
    "on-page-seo-fit",
    "on-page-seo-investment-factors",
    "on-page-seo-related-services",
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
      "Self-review only. Final readiness depends on the actual renderer/types, route checks, the agreed scope of implementation versus advisory work and Bixeltek confirming the offer. This file has not been compiled against the real repository interfaces.",
  },
};
