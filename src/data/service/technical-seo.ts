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
// TECHNICAL SEO - BIXELTEK SERVICE PAGE DATA
// Purpose: make important pages accessible, crawlable, renderable,
// indexable and technically coherent without promising rankings.
// Preserve the existing /technical-seo route unless migration is approved.
// ============================================================

export interface TechnicalSeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface TechnicalSeoPoint {
  title: string;
  description: string;
}

export interface TechnicalSeoDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface TechnicalSeoUseCase {
  title: string;
  situation: string;
  approach: string;
  successSignals: string[];
}

export interface TechnicalSeoProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface TechnicalSeoMetric {
  name: string;
  whatItShows: string;
  howToInterpret: string;
}

export interface TechnicalSeoWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: TechnicalSeoPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface TechnicalSeoFinalCtaData {
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

export const technicalSeoMetadata: TechnicalSeoMetadata = {
  title: "Technical SEO Services | Crawling, Indexing & Site Health - Bixeltek",
  description:
    "Resolve technical SEO issues across crawling, indexing, JavaScript rendering, canonical URLs, site architecture, Core Web Vitals and structured data.",
  keywords: [
    "technical SEO services",
    "technical SEO agency",
    "technical SEO audit",
    "crawlability and indexation audit",
    "Google indexing issues",
    "JavaScript SEO",
    "Core Web Vitals optimization",
    "website technical audit",
    "canonical and redirect audit",
    "structured data implementation",
    "log file analysis SEO",
    "international technical SEO",
  ],
  // Canonical route for Technical SEO
  canonical: "https://bixeltek.com/services/seo-services/technical-seo",
};

export const technicalSeoBreadcrumbs: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "Technical SEO", href: "/services/seo-services/technical-seo" },
];

export const technicalSeoJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#technical-seo-overview" },
  { label: "Common Problems", href: "#technical-seo-problems" },
  { label: "What We Fix", href: "#technical-seo-scope" },
  { label: "Key Decisions", href: "#technical-seo-decisions" },
  { label: "Use Cases", href: "#technical-seo-use-cases" },
  { label: "Our Process", href: "#technical-seo-process" },
  { label: "Measurement", href: "#technical-seo-measurement" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - technical access and reliability, not ranking promises.
// ============================================================

export const technicalSeoHero = {
  eyebrow: "TECHNICAL SEO · CRAWLING · INDEXING · PERFORMANCE",
  h1: "Fix the Technical Issues That Keep Important Pages Out of Search",
  p1:
    "A website can have useful content and a strong offer yet struggle in organic search when search engines cannot reliably access key pages, understand URL signals or render important content.",
  p2:
    "Bixeltek investigates technical barriers across crawling, indexation, JavaScript rendering, canonicalization, site architecture, performance and structured data, then turns findings into a prioritized plan your team can act on.",
  primaryButtonText: "Talk to our seo experts",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore SEO Services",
  secondaryLinkHref: "/services/seo-services",
  microcopy:
    "For websites with indexing concerns, complex templates, recent migrations, performance issues or technical changes that may affect search visibility. Fixes improve eligibility and reliability; they do not guarantee indexing or rankings.",
};

// ============================================================
// OVERVIEW - make the remit clearer than a generic technical checklist.
// ============================================================

export const technicalSeoOverview = {
  id: "technical-seo-overview",
  eyebrow: "MAKE THE WEBSITE ACCESSIBLE TO SEARCH ENGINES",
  h2: "Technical SEO Starts With What Search Engines Can Actually Access",
  intro:
    "Technical SEO examines the website systems behind search discovery: whether important URLs return the right responses, can be crawled, expose indexable content, present consistent canonical signals and work as intended when rendered.",
  body:
    "The job is not to run every tool and fix every warning. We connect technical findings to important pages, templates and business goals, identify the likely cause, and prioritize the changes that remove meaningful barriers. Some issues need configuration changes, some need code changes, and others are false positives or low-priority warnings that should not distract the team.",
  points: [
    {
      title: "Crawl and index with intent",
      description:
        "Make sure valuable public pages can be discovered and fetched, return appropriate HTTP responses, and are not unintentionally blocked or marked noindex. Sitemap submission can help discovery, but it does not force Google to crawl or index a URL.",
    },
    {
      title: "Keep technical signals consistent",
      description:
        "Review redirects, canonical annotations, sitemap URLs, internal links, language alternatives and status codes together. Conflicting signals can make it harder for search engines to select the URL intended to represent a page.",
    },
    {
      title: "Validate the rendered experience",
      description:
        "For JavaScript-heavy sites, check what the crawler can access after rendering and whether primary content and links are available as expected. Performance work is measured alongside real user experience rather than inferred from a single lab score.",
    },
  ],
  closingCopy:
    "Google's baseline technical requirements make a page eligible for indexing; they do not guarantee that it will be indexed or rank. Technical SEO is most useful when its recommendations are connected to actual crawl, indexation, template, performance or user-experience evidence.",
};

// ============================================================
// PROBLEMS - recognizable technical failure modes and their impact.
// ============================================================

export const technicalSeoProblems: ProblemCard[] = [
  {
    title: "Important Pages Are Not Indexed",
    description:
      "Priority service, category, location or product URLs may be missing from search because of access restrictions, noindex directives, weak discovery paths, duplicate signals, rendering problems or quality-related selection. We inspect representative URLs and available Search Console evidence before identifying a cause; an 'excluded' status is not automatically an error.",
  },
  {
    title: "Google May Be Seeing Incomplete JavaScript Content",
    description:
      "A page can appear complete in a browser while key text, links, product data or metadata depend on rendering behaviour that needs validation. For React, Next.js and other JavaScript-driven sites, we inspect rendered output and crawlable links, then recommend changes based on what search engines can actually access-not a blanket rule that every site needs server-side rendering.",
  },
  {
    title: "Duplicate or Conflicting URL Signals",
    description:
      "Parameters, trailing slashes, HTTP/HTTPS variants, redirects and inconsistent canonical tags can create multiple URLs for the same or similar content. We map the important variants and align redirects, canonicals, internal links and sitemap entries where the intended preferred URL is clear.",
  },
  {
    title: "Site Changes Triggered a Visibility Drop",
    description:
      "A redesign, CMS migration, URL restructure, deployment or plugin change can introduce broken redirects, missing metadata, accidental noindex rules, rendering failures or server errors. We compare the current state with available pre-change information and prioritize recovery work by page importance and evidence.",
  },
  {
    title: "Slow or Unstable Pages Create User Friction",
    description:
      "Heavy scripts, large media, layout shifts or slow server responses can make important templates frustrating to use. We separate lab diagnostics from field data, identify the templates and resources contributing to the problem, and work with development constraints rather than promising that a score alone will improve rankings.",
  },
  {
    title: "Technical Warnings Never Turn Into Clear Priorities",
    description:
      "Audit tools can produce long lists of redirects, broken links, schema warnings and low-impact issues without showing what matters commercially. We group issues by cause, affected URL/template, severity, evidence and implementation effort so the team can work through the highest-value fixes first.",
  },
];

// ============================================================
// SCOPE - tangible technical workstreams and their boundaries.
// ============================================================

export const technicalSeoScope: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  items: ScopeCard[];
  scopeNote: string;
} = {
  id: "technical-seo-scope",
  eyebrow: "WHAT WE INVESTIGATE AND FIX",
  h2: "A Technical SEO Scope Built Around the Website's Actual Constraints",
  intro:
    "The audit should connect a technical observation to affected URLs, the likely root cause and the next action. We prioritize what is relevant to this site, rather than treating every available audit check as equally important.",
  items: [
    {
      title: "Crawling, Access & HTTP Statuses",
      description:
        "Inspect priority URL groups for successful responses, redirects, 4xx/5xx errors, blocked resources and crawlable navigation. Identify whether search engines can fetch the pages and assets needed to understand the content. Review server and DNS availability issues where evidence points to them.",
    },
    {
      title: "Indexation Directives & XML Sitemaps",
      description:
        "Review robots.txt rules, meta robots directives, X-Robots-Tag headers and sitemap coverage to find accidental blocks or mismatches. Keep sitemap entries focused on preferred, indexable URLs. A sitemap is a discovery signal-not a command to index each submitted URL.",
    },
    {
      title: "Canonicalization, Redirects & Duplicate URLs",
      description:
        "Map URL variants, redirect chains and loops, canonical annotations, internal links and sitemap destinations. Recommend the right treatment for each case-redirect, canonical, noindex, removal or consolidation-rather than applying one directive to every duplicate situation.",
    },
    {
      title: "JavaScript SEO & Rendered Content",
      description:
        "Validate whether main content, metadata, links and relevant data remain accessible when pages render. Review client-side navigation, hydration-dependent output, error states and resources required to render. Choose rendering or implementation changes based on actual symptoms, framework constraints and development requirements.",
    },
    {
      title: "Core Web Vitals & Page Performance",
      description:
        "Assess loading, responsiveness and visual stability using available field and lab data. Identify expensive scripts, image delivery, layout shifts, caching, third-party requests or template-level issues. Where field data is available, use it to understand real-user experience; lab scores help diagnose but are not identical to field results.",
    },
    {
      title: "Site Architecture & Crawl Paths",
      description:
        "Review important page depth, navigational routes, internal links, orphaned pages, breadcrumb implementation and template relationships. On larger sites, investigate whether crawl patterns or URL generation create a measurable problem before recommending crawl-budget work; most small sites do not need crawl-budget engineering as a default project.",
    },
    {
      title: "Structured Data & Search Feature Eligibility",
      description:
        "Validate markup syntax, required properties, page eligibility and whether structured data accurately reflects visible content. Use relevant supported types only, such as Organization, BreadcrumbList, Product or LocalBusiness where appropriate. Valid markup may create eligibility for certain search features but does not guarantee a rich result or higher rankings.",
    },
    {
      title: "Migration, International & Log-File Diagnostics",
      description:
        "For relevant sites, review URL migration maps, redirect coverage, canonical changes, hreflang relationships, language/region targeting, sitemap updates and post-launch indexation. Log-file analysis is included when access and site scale justify it, to investigate how verified crawlers request URLs and where crawl patterns reveal a problem.",
    },
  ],
  scopeNote:
    "The engagement may end with an audit and implementation tickets, or include hands-on fixes where access and scope allow. Server configuration, code changes, platform migrations, CDN work, large-scale log processing, international URL restructuring and ongoing monitoring need to be agreed explicitly. We do not assume every technical issue can be corrected from an SEO dashboard alone.",
};

// ============================================================
// KEY DECISIONS - clarify trade-offs instead of adding more checklist cards.
// ============================================================

export const technicalSeoDecisions: TechnicalSeoDecisionItem[] = [
  {
    title: "What Should Search Engines Index?",
    context:
      "Duplicate URLs, blocked pages and crawl issues can prevent important pages from being discovered or indexed.",
    consideration:
      "Prioritize valuable URLs, then align canonicals, redirects, robots directives and sitemaps. Use crawl-budget analysis when site scale and data justify it.",
  },
  {
    title: "Does JavaScript Affect Page Visibility?",
    context:
      "Search engines may struggle when important content, links or metadata fail to render reliably.",
    consideration:
      "Test key pages first, then fix rendering failures or choose a suitable rendering approach without defaulting to a full rewrite.",
  },
  {
    title: "Which Performance Issues Matter Most?",
    context:
      "Audit scores alone do not reveal how technical issues affect real users.",
    consideration:
      "Prioritize field data, affected templates and issues impacting loading, responsiveness or layout stability.",
  },
  {
    title: "When Are Structured Data and Hreflang Needed?",
    context:
      "Structured data and language annotations solve different problems and are not universal SEO requirements.",
    consideration:
      "Use valid schema for visible content and hreflang for equivalent language or regional pages where applicable.",
  },
];

// ============================================================
// USE CASES - context-specific triggers and success signals.
// ============================================================

export const technicalSeoUseCases: TechnicalSeoUseCase[] = [
  {
    title: "A Website Relaunch Needs a Safe Migration",
    situation:
      "URL, CMS or template changes risk broken links, lost indexation and disrupted organic traffic.",
    approach:
      "Map priority URLs, validate redirects, canonicals and indexing rules, and test key templates before launch. Monitor performance after release.",
    successSignals: [
      "Priority URLs redirect correctly",
      "No unintended indexing blocks",
      "Fewer broken links and redirect chains",
      "Organic traffic and conversions monitored",
    ],
  },
  {
    title: "A JavaScript Website Has Indexing Issues",
    situation:
      "Important pages render in browsers but have inconsistent indexing, metadata or crawlable navigation.",
    approach:
      "Test rendered content, links, metadata and status codes. Fix verified rendering issues without defaulting to a full rewrite.",
    successSignals: [
      "Important content renders correctly",
      "Routes return expected status codes",
      "Internal links are crawlable",
      "Fewer recurring rendering issues",
    ],
  },
  {
    title: "An Ecommerce Site Generates Duplicate URLs",
    situation:
      "Filters, sorting and parameters create URL variants that complicate crawling and indexation.",
    approach:
      "Group URL patterns, define indexation rules, validate canonicals and crawl controls, and protect access to priority products and categories.",
    successSignals: [
      "Clear indexation rules by URL type",
      "Fewer canonical conflicts",
      "Priority pages remain discoverable",
      "More interpretable crawl reports",
    ],
  },
  {
    title: "Organic Traffic Drops After a Release",
    situation:
      "A deployment coincides with declining organic traffic, but the cause is unclear.",
    approach:
      "Compare deployment changes with Search Console, analytics, status codes, canonicals and rendered pages. Verify causes before applying fixes.",
    successSignals: [
      "Technical causes identified or ruled out",
      "Confirmed regressions corrected",
      "Affected URLs retested",
      "Recovery tracked against a baseline",
    ],
  },
  {
    title: "A Website Targets Multiple Markets",
    situation:
      "Language and regional pages risk conflicting signals or sending users to the wrong version.",
    approach:
      "Validate localized URLs, hreflang mappings, return links and canonicals against the intended market structure.",
    successSignals: [
      "Correct language and region mappings",
      "Fewer hreflang conflicts",
      "Localized pages remain indexable",
      "Search performance reviewed by market",
    ],
  },
  {
    title: "A Large Site Needs Crawl-Log Analysis",
    situation:
      "A large or frequently updated site lacks clarity on how search-engine crawlers access its URLs.",
    approach:
      "Where suitable logs are available, analyze verified crawler requests, response codes and URL patterns alongside Search Console data.",
    successSignals: [
      "Crawl activity grouped by URL type",
      "Repeated errors and low-value patterns identified",
      "Recommendations supported by evidence",
      "Post-fix crawl behaviour compared",
    ],
  },
];

// ============================================================
// PROCESS - show how findings become actionable implementation work.
// ============================================================

export const technicalSeoProcess: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  stages: TechnicalSeoProcessStage[];
} = {
  id: "technical-seo-process",
  eyebrow: "FROM DIAGNOSIS TO VERIFIED FIXES",
  h2: "Find the Cause, Fix It, and Validate the Result",
  intro:
    "We identify verified issues, prioritize fixes by impact, coordinate implementation and check whether the changes work as intended.",
  stages: [
    {
      number: "01",
      title: "Establish the Baseline",
      description:
        "Review the platform, priority URLs, recent releases, Search Console data and available crawl results.",
      deliverable: "A baseline of key issues and access gaps",
    },
    {
      number: "02",
      title: "Identify Root Causes",
      description:
        "Investigate patterns in indexing, redirects, rendering, duplicate URLs and performance.",
      deliverable: "Verified issues and affected URL groups",
    },
    {
      number: "03",
      title: "Prioritize Fixes",
      description:
        "Rank issues by impact, urgency, effort, risk and implementation dependencies.",
      deliverable: "A prioritized action plan with validation criteria",
    },
    {
      number: "04",
      title: "Implement Changes",
      description:
        "Apply agreed configuration or code fixes, coordinating with developers and platform owners where needed.",
      deliverable: "Implemented fixes or developer-ready tasks",
    },
    {
      number: "05",
      title: "Validate the Fixes",
      description:
        "Retest affected URLs, status codes, rendering, indexing directives, canonicals and relevant performance metrics.",
      deliverable: "Validated fixes and outstanding issues",
    },
    {
      number: "06",
      title: "Monitor the Outcome",
      description:
        "Track recrawling, indexation and organic performance using available Search Console and analytics data.",
      deliverable: "A follow-up report and next-step priorities",
    },
  ],
};

// ============================================================
// MEASUREMENT - separate technical state from business outcomes.
// ============================================================

export const technicalSeoMeasurement: {
  id: string;
  eyebrow: string;
  h2: string;
  intro: string;
  metrics: TechnicalSeoMetric[];
  trackingNote: string;
} = {
  id: "technical-seo-measurement",
  eyebrow: "VERIFY THE FIX, NOT JUST THE CHECKLIST",
  h2: "Measure Whether the Technical Barrier Was Removed",
  intro:
    "A completed ticket is not proof of improved search performance. We validate the technical condition first, then monitor discovery, indexing, user experience and organic outcomes where reliable data is available.",
  metrics: [
    {
      name: "Indexation of Priority URLs",
      whatItShows:
        "Whether important URL groups are reported as indexed or excluded in Search Console, with URL Inspection used to investigate representative pages.",
      howToInterpret:
        "Compare the intended indexation strategy with the reported state. Not every excluded URL is an error, and Google decides which eligible pages to index. Review patterns and sample URLs rather than chasing a 100% indexing rate for all URLs.",
    },
    {
      name: "Crawl and HTTP Response Health",
      whatItShows:
        "How priority URLs and linked resources respond, including successful requests, redirects, not-found errors, server failures and blocked resources.",
      howToInterpret:
        "Prioritize errors affecting valuable pages, repeatable template issues and key resources. A redirect or 404 can be correct in context; what matters is whether the response matches the intended user and search journey.",
    },
    {
      name: "Canonical and Sitemap Consistency",
      whatItShows:
        "Whether internal links, canonical annotations, redirects and sitemap entries point consistently toward the intended preferred URLs.",
      howToInterpret:
        "Canonical annotations are signals, not absolute commands. Validate the selected canonical where possible and investigate conflicts rather than assuming the declared tag is always chosen.",
    },
    {
      name: "Core Web Vitals and Field Experience",
      whatItShows:
        "Real-user loading, responsiveness and layout-stability data where sufficient field data is available, supplemented by lab diagnostics for investigation.",
      howToInterpret:
        "Use the 75th-percentile field measurements and review LCP, INP and CLS together. Good thresholds are LCP at or under 2.5 seconds, INP at or under 200 milliseconds and CLS at or under 0.1; meeting them supports user experience but does not guarantee rankings.",
    },
    {
      name: "Structured Data Eligibility and Errors",
      whatItShows:
        "Whether relevant structured data is technically valid and eligible for supported search features, based on current testing and Search Console reports where available.",
      howToInterpret:
        "Markup should match visible, accurate content and the rules for the selected type. Valid markup does not guarantee a rich result, AI citation or ranking improvement.",
    },
    {
      name: "Organic Landing Pages and Conversions",
      whatItShows:
        "How priority landing pages perform in Search Console and analytics after changes, including clicks, impressions, relevant organic visits and tracked enquiries or sales.",
      howToInterpret:
        "Review changes alongside demand, seasonality, competition, content releases and other site changes. Attribute business results cautiously; a technical fix can remove a barrier without being the only factor affecting traffic or revenue.",
    },
  ],
  trackingNote:
    "Reporting depth depends on Search Console and analytics access, server logs, field performance data, release history and conversion tracking. Where evidence is missing, findings and recommendations will state the limitation instead of implying certainty.",
};

// ============================================================
// FIT - help buyers recognize where technical SEO can be most useful.
// ============================================================

export const technicalSeoFit = {
  id: "technical-seo-fit",
  eyebrow: "WHEN TECHNICAL SEO MAKES SENSE",
  h2: "Start With Technical SEO When the Website's Foundations Are in Question",
  intro:
    "The service is most valuable when there is a clear technical concern to diagnose, a complex site structure to govern or a development change that needs search-focused validation.",
  goodFit: [
    "Websites with important pages missing from search or unexplained indexing patterns.",
    "Businesses preparing for a redesign, CMS change, domain move or URL restructure.",
    "JavaScript-heavy web applications where rendered content, routing or metadata needs validation.",
    "Ecommerce and catalogue sites with filters, variants, pagination or many generated URL patterns.",
    "Multi-language or multi-region websites that need coherent canonical and hreflang signals.",
    "Teams whose audit tools produce recurring warnings but lack a prioritized, implementation-ready diagnosis.",
  ],
  notFirstStep: [
    "A site whose pages are technically accessible but do not satisfy the searcher's intent may need content and on-page SEO before more technical tooling.",
    "A very small website with no evidence of crawl constraints may not need log-file analysis or advanced crawl-budget work.",
    "A website that needs only a single content update may not need a full technical SEO engagement unless a technical issue has also been identified.",
    "A team seeking a guaranteed ranking position or a fixed recovery date should understand that technical fixes do not control indexing decisions, competition or broader search demand.",
  ],
};

// ============================================================
// WHY BIXELTEK - defensible delivery principles, not unverified credentials.
// ============================================================

export const technicalSeoWhyChoose: TechnicalSeoWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Technical SEO That Connects Search Diagnostics With Real Implementation",
  intro:
    "The value is not the number of warnings found. It is identifying the causes that affect important pages, explaining the implementation needed and confirming whether the change resolved the problem.",
  points: [
    {
      title: "We Prioritize Important URLs and Templates",
      description:
        "The review starts with business-critical services, categories, products and landing pages. A template-level issue affecting hundreds of useful URLs may matter more than a warning on a low-value page.",
    },
    {
      title: "We Connect Findings to Evidence",
      description:
        "Recommendations reference observed responses, directives, rendered output, Search Console patterns or available performance data. Suspected causes are labelled as hypotheses until the relevant evidence is checked.",
    },
    {
      title: "We Separate High-Impact Fixes From Noise",
      description:
        "Tool warnings are evaluated in context. The goal is to prioritize real crawl, indexing, rendering, reliability or user-experience constraints-not to clear every audit flag regardless of its effect.",
    },
    {
      title: "We Account for the Existing Technology",
      description:
        "Recommendations consider the framework, CMS, rendering model, hosting setup, integration dependencies and release workflow. A major rebuild is not the default answer to every technical SEO problem.",
    },
    {
      title: "We Build Developer-Ready Recommendations",
      description:
        "Issues are translated into actionable changes with affected URL patterns, reason, priority and validation criteria. Where implementation is included, the work is retested after release.",
    },
    {
      title: "We Report Limits Honestly",
      description:
        "Crawl and indexation data, log files, field performance and conversions each have different coverage. We distinguish confirmed fixes from search outcomes that still depend on recrawling, site quality, competition and other factors.",
    },
  ],
  closingCopy:
    "The objective is a website that behaves predictably, exposes its important content clearly and gives search engines consistent technical signals-not a promise that a checklist will automatically produce rankings.",
  ctaText: "Discuss My Technical SEO",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS - explain what changes the level of effort.
// ============================================================

export const technicalSeoInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number of URLs and Template Types",
    description:
      "A small brochure website differs from a large catalogue, marketplace or publishing site with many URL patterns and templates. Site scale affects crawl coverage, sampling, reporting and the value of automation.",
  },
  {
    title: "Platform and Rendering Complexity",
    description:
      "Standard CMS configuration changes differ from debugging client-side routing, hydration, metadata generation, server rendering, API-driven content or custom application templates. The framework alone does not determine the effort; the actual failure mode does.",
  },
  {
    title: "Severity and Spread of Technical Issues",
    description:
      "A handful of isolated redirects differs from a sitewide canonical problem, widespread 5xx errors, accidental noindex rules or a migration that affects many high-value URLs. The number of affected templates and systems influences the diagnosis and fix plan.",
  },
  {
    title: "Available Access and Evidence",
    description:
      "A public crawl can identify some symptoms. Search Console, analytics, server logs, deployment history, staging access and developer input can support deeper diagnosis. Gaps in access affect confidence and what can be verified.",
  },
  {
    title: "Implementation Ownership and Release Process",
    description:
      "An audit and ticket backlog differ from code/configuration changes, staging QA, release coordination and post-deployment monitoring. Infrastructure, security or platform permissions may require the client's technical team to make the final change.",
  },
  {
    title: "Migration, International or Log Analysis Needs",
    description:
      "URL migrations, multi-language signals, large log files, complex ecommerce filtering and historical recovery analysis add research and validation work. These should be included only when the site needs them and the required data is available.",
  },
];

// ============================================================
// RELATED SERVICES - route boundaries are assumptions until verified.
// ============================================================

export const technicalSeoRelatedServices: RelatedServiceCard[] = [
  {
    title: "SEO Services",
    description:
      "For an overarching organic search programme connecting technical foundations with search intent, content priorities, authority development and performance review.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "On-Page SEO",
    description:
      "For search-intent mapping, page content and headings, title tags, metadata, internal links and the relevance of individual pages to their target queries.",
    linkText: "Explore On-Page SEO",
    destination: "/services/seo-services/on-page-seo",
  },
  {
    title: "Local SEO",
    description:
      "For Google Business Profile, accurate local information, local landing pages, review processes and visibility tied to real business locations or service areas.",
    linkText: "Explore Local SEO",
    destination: "/services/seo-services/local-seo",
  },
  {
    title: "Web Design & Development",
    description:
      "For implementation work involving page templates, site navigation, rendering, CMS behaviour, performance bottlenecks or changes to the underlying website architecture.",
    linkText: "Explore Web Development",
    destination: "/services/web-design",
  },
  {
    title: "Analytics & Tracking",
    description:
      "For improving measurement when search visibility and landing-page activity need to be connected with enquiries, appointments, purchases or other business outcomes.",
    linkText: "Explore Analytics & Tracking",
    destination: "/analytics-and-cro-services",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "For investigating why visitors who reach technically accessible pages still struggle to enquire, book or purchase after the page has loaded.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
];

// ============================================================
// FAQS - answer the practical questions buyers ask before engaging.
// ============================================================

export const technicalSeoFaqs: FAQItem[] = [
  {
    question: "What does Technical SEO include?",
    answer:
      "Depending on the website, Technical SEO may include crawling and indexation diagnostics, HTTP status and redirect checks, robots and sitemap review, canonicalization, JavaScript rendering checks, site architecture, Core Web Vitals, structured data, migration validation and international signals. The scope should match observed issues and the site's architecture rather than automatically include every possible workstream.",
  },
  {
    question: "Will a technical SEO audit improve my rankings?",
    answer:
      "An audit can identify barriers that limit crawling, indexing, rendering or user experience, and fixes can remove those barriers. Rankings also depend on relevance, content quality, competition, reputation and other factors. A completed audit or technical fix cannot guarantee a specific position, traffic lift or indexing outcome.",
  },
  {
    question: "Why are some important pages not indexed?",
    answer:
      "Possible causes include access restrictions, noindex directives, server errors, weak internal discovery, duplicate or canonical signals, rendering problems or Google's assessment of whether a page should be indexed. Search Console and URL Inspection help narrow the cause. An excluded status needs interpretation; not every URL should be indexed.",
  },
  {
    question: "Does my website have a crawl-budget problem?",
    answer:
      "Not necessarily. Crawl-budget management is more relevant to large or frequently updated sites with many URLs or evidence of crawl constraints. Smaller sites should usually begin with accessibility, internal links, accidental blocks, duplicate URL generation, sitemap quality and server reliability before investing in advanced crawl-budget analysis.",
  },
  {
    question: "Is JavaScript bad for SEO?",
    answer:
      "No. Google can process JavaScript, but rendering introduces additional considerations and failures can affect the content or links that are available. We test representative pages to see whether important content, metadata, status codes and crawlable links are exposed correctly. A switch to server-side rendering is only recommended when the evidence and business requirements justify it.",
  },
  {
    question: "Should every page be included in the XML sitemap?",
    answer:
      "No. A sitemap should generally list the preferred URLs the business wants considered for search, not every parameter, duplicate, redirected or intentionally excluded URL. Sitemap submission can support discovery but does not guarantee crawling or indexation. Internal links and page accessibility still matter.",
  },
  {
    question: "What is the difference between robots.txt and noindex?",
    answer:
      "robots.txt controls whether a crawler may request a URL; it is not a reliable way to remove a URL from search results. A noindex directive tells a crawler that can access the page not to index it. For noindex to be seen, the crawler must be able to fetch the URL. The correct option depends on whether the issue is crawl access or search inclusion.",
  },
  {
    question: "Does a canonical tag force Google to choose that URL?",
    answer:
      "No. A canonical annotation is a signal about the preferred representative URL, not an absolute rule. Redirects, internal links, sitemap inclusion, content similarity and other signals are also considered. We check these signals together and verify the selected canonical where reporting permits.",
  },
  {
    question: "Can structured data get us rich results or AI citations?",
    answer:
      "Structured data can help describe eligible content and may qualify a page for supported search features when it meets current guidelines. Google does not guarantee that valid markup will show a rich result, improve rankings or cause a page to be cited by an AI system. We implement markup only when it accurately represents the visible content and fits a supported use case.",
  },
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are field metrics for loading performance, responsiveness and visual stability: Largest Contentful Paint (LCP), Interaction to Next Paint (INP) and Cumulative Layout Shift (CLS). The current good thresholds are LCP at or under 2.5 seconds, INP at or under 200 milliseconds and CLS at or under 0.1, assessed at the 75th percentile. Results depend on real-user conditions; lab tests help diagnose but do not replace field data.",
  },
  {
    question: "Do good Core Web Vitals guarantee better rankings?",
    answer:
      "No. Good Core Web Vitals support a better user experience and align with Google's page-experience guidance, but they do not guarantee ranking improvements. Technical decisions should balance real-user performance with accessibility, functionality, content quality and business requirements rather than optimizing a lab score in isolation.",
  },
  {
    question: "When is log-file analysis useful?",
    answer:
      "Log-file analysis can help when a large or frequently changing site needs evidence of how verified crawlers request URLs, which responses they receive and how crawl activity is distributed across page types. It requires suitable server logs and enough scale or a specific diagnostic question. It is not a mandatory step for every small website.",
  },
  {
    question: "Can you handle a technical SEO migration?",
    answer:
      "Migration support can include URL inventories, redirect maps, canonical and robots checks, sitemap and internal-link updates, staging checks and post-launch validation. Scope depends on the platform, migration size, access and release ownership. No migration plan can remove every risk, so important URLs and outcomes should be monitored after launch.",
  },
  {
    question: "How long does Technical SEO take to show results?",
    answer:
      "There is no reliable fixed timeline. A configuration issue may be corrected quickly, while search engines need time to recrawl and reassess affected URLs; broader performance or visibility changes may take longer and depend on other factors. We focus on verifiable fixes and monitoring rather than promising a ranking recovery by a specific date.",
  },
  {
    question: "What access do you need to start?",
    answer:
      "A starting review usually benefits from the website, priority page types, Search Console access, recent release or migration details and, where available, analytics, crawl exports, hosting or server logs and developer input. A public crawl can still reveal some issues, but account-level and server-side conclusions must remain limited when supporting data is unavailable.",
  },
];

// ============================================================
// FINAL CTA - no unverified free-audit, valuation or timeline promise.
// ============================================================

export const technicalSeoFinalCta: TechnicalSeoFinalCtaData = {
  id: "final-cta",
  eyebrow: "PRIORITIZE YOUR TECHNICAL SEO FIXES",
  h2: "Find Out Which Technical Issues Deserve Attention First",
  description:
    "Tell us what changed, which pages matter to the business and what you are seeing in search. We can review the current setup, identify the evidence needed and scope a practical path from diagnosis to validated fixes.",
  primaryCta: {
    label: "Discuss My Technical SEO",
    href: "/contact-us",
  },
  supportingCopy:
    "The starting point is the actual site and available evidence-not a promise to clear every audit warning or guarantee a ranking result.",
};

// ============================================================
// IMPLEMENTATION / QUALITY NOTES
// ============================================================

export const technicalSeoImplementationNotes = {
  proposedRoute: "/technical-seo",
  routeStatus:
    "Existing live route. Preserve this URL and canonical unless the route owner approves a migration and redirect plan.",
  pageThesis:
    "Diagnose and prioritize the technical constraints that affect discovery, crawling, rendering, indexation, canonical signals and real-user experience, then give the team actionable fixes and validation criteria instead of an undifferentiated warning list.",
  primaryBuyer:
    "Marketing and SEO owners, web/product teams, ecommerce operators and businesses managing JavaScript-heavy, large, migrated or multi-market websites that need technical search issues diagnosed and resolved.",
  pageBoundary:
    "This is the Technical SEO specialist page. The main SEO pillar owns the wider organic strategy. Technical SEO owns crawl/access and indexation diagnostics, HTTP responses and redirects, robots/sitemaps, canonical signals, JavaScript rendering, site architecture, Core Web Vitals, relevant structured data, migrations and conditional log/international diagnostics. On-Page SEO owns page intent, editorial content, headings and metadata. Local SEO owns Google Business Profile, listings, reviews and local discovery operations.",
  preservedFromLegacyPage: [
    "Crawl efficiency, crawl paths and sitemap hygiene for important URLs.",
    "Indexation diagnostics and control of URLs that should or should not appear in search.",
    "Core Web Vitals and performance investigation across representative templates.",
    "Structured data validation and implementation where the markup matches visible content and supported features.",
    "Site architecture, internal linking, breadcrumbs and canonical mapping.",
    "International and multilingual URL relationships, including hreflang and canonical alignment where relevant.",
    "Server-log analysis for sites where access and scale justify deeper crawl diagnostics.",
    "Migration and post-release checks for redirects, crawlability and indexation.",
  ],
  intentionallyRemovedOrReframed: [
    "Removed the unsupported claim of a 30-50% improvement in indexation speed and promises of faster ranking updates.",
    "Removed the unsupported claim that a bilingual site's total search presence can increase by up to 40% from the outlined setup.",
    "Removed the claim that Core Web Vitals are a direct Quality Score factor; reframed performance around real-user experience and current page-experience guidance.",
    "Reframed crawl budget as a concern to validate for larger or frequently updated sites, not a universal issue for every website.",
    "Reframed structured data as eligibility for supported search features; valid JSON-LD does not guarantee rich results, rankings, AI citations or Knowledge Graph inclusion.",
    "Removed claims that schema, semantic markup, micro-content or internal knowledge graphs can guarantee AI Overview or other AI-system visibility.",
    "Reframed rendering and server-side rendering as implementation choices guided by observed crawler output and business constraints, not one framework as a universal fix.",
    "Reframed crawl prioritization and flattening around actual architecture and user needs, not a promise that a fixed click depth guarantees indexing.",
    "Separated technical validation from organic traffic or revenue changes that can also be affected by content, demand, competition and other site changes.",
    "Kept the former free-audit/value claim and fixed 30-day roadmap out of the CTA until the offer is confirmed as current and operationally supported.",
  ],
  assumptionsToConfirm: [
    "Confirm the actual route/component mapping, renderer export names, interfaces and section IDs in the repository. This file follows the current Local SEO and On-Page SEO TypeScript conventions but has not been compiled against the live ./ecom definitions.",
    "Confirm that https://bixeltek.com/technical-seo remains the approved canonical and the new renderer preserves the route.",
    "Confirm whether Bixeltek delivers implementation as well as audit/recommendations, and which levels of code, hosting, CDN, server, CMS and migration work are supported directly versus by the client's engineering team.",
    "Confirm access to Google Search Console, analytics, crawler tooling, server logs and Core Web Vitals reporting before promising any specific diagnostics or ongoing monitoring.",
    "Confirm whether international SEO and hreflang work (including Arabic, French or other languages) is an active deliverable and whether localization resources are available.",
    "Confirm related service routes: /services/seo-services, /on-page-seo, /local-seo, /services/web-design, /analytics-and-cro-services, /services/conversion-rate-optimization and /contact-us.",
    "Do not add client examples, certifications, proprietary-tool claims, performance metrics or ranking guarantees without approved evidence and context.",
  ],
  researchReferences: [
    "Existing Bixeltek Technical SEO page: https://bixeltek.com/technical-seo",
    "Bixeltek SEO pillar: https://bixeltek.com/services/seo-services",
    "Google Search technical requirements: https://developers.google.com/search/docs/essentials/technical",
    "Google Search crawling and indexing documentation: https://developers.google.com/search/docs/crawling-indexing",
    "Google JavaScript SEO basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    "Google sitemap guidelines: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
    "Google canonicalization guidance: https://developers.google.com/search/docs/crawling-indexing/canonicalization",
    "Google structured data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    "Google page experience guidance: https://developers.google.com/search/docs/appearance/page-experience",
  ],
  sectionIdsForRenderer: [
    "technical-seo-overview",
    "technical-seo-problems",
    "technical-seo-scope",
    "technical-seo-decisions",
    "technical-seo-use-cases",
    "technical-seo-process",
    "technical-seo-measurement",
    "technical-seo-fit",
    "technical-seo-investment-factors",
    "technical-seo-related-services",
    "faqs",
    "final-cta",
  ],
  selfReviewScore: {
    pageSpecificInsight: 19,
    buyerUsefulness: 19,
    technicalAccuracy: 19,
    commercialClarity: 18,
    differentiation: 19,
    total: 94,
    scale: 100,
    note:
      "Content-level self-review only. Repository integration, tool access and delivery claims remain subject to the assumptions listed above.",
  },
};
