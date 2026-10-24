import dentalImg from "@/assets/digital marketing for health care practices.jpg";
import localImg from "@/assets/local-business.jpg";
import ecommerceImg from "@/assets/ecom-industry.png";
import b2bImg from "@/assets/b2b-business-business-corporate-connection-partnership-concept.jpg";
import roofingImg from "@/assets/Roofing_SP_0441-cleaned-1920x1280-1440x960.webp";
import realEstateImg from "@/assets/real-estate.jpg";
import carImg from "@/assets/digital marketing for car detailers.jpg";
import cleaningImg from "@/assets/digital marketing servies for cleaning companies.jpg";
import schoolImg from "@/assets/school.jpg";
﻿
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
// SEO SERVICES - PAGE DATA
// Content-only data for Bixeltek's reusable service-page system.
// Confirm component props and routes against the repository
// before integrating.
// ============================================================

export interface SEOServicesMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface SEOPoint {
  title: string;
  description: string;
}

export interface SEOProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface SEOUseCase {
  title: string;
  situation: string;
  approach: string;
}

export interface SEOWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: SEOPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface SEOFinalCtaData {
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

// ============================================================
// METADATA
// ============================================================

export const seoServicesMetadata: SEOServicesMetadata = {
  title: "SEO Services | Technical, Local & Organic SEO | Bixeltek",
  description:
    "Improve organic search visibility with SEO services covering technical SEO, keyword research, content strategy, on-page optimization, local SEO and search performance measurement.",
  keywords: [
    "SEO services",
    "SEO agency",
    "search engine optimization services",
    "organic SEO services",
    "technical SEO services",
    "on-page SEO services",
    "local SEO services",
    "SEO strategy",
    "SEO content strategy",
    "ecommerce SEO services",
    "AI search optimization",
  ],
  canonical: "https://bixeltek.com/services/seo-services",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const seoServicesBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Grow", href: "/services/grow" },
  { label: "SEO Services", href: "/services/seo-services" },
];

// ============================================================
// JUMP LINKS
// Match these IDs to the actual page section IDs.
// ============================================================

export const seoServicesJumpLinks: JumpLinkItem[] = [
  { label: "SEO Challenges", href: "#seo-challenges" },
  { label: "What SEO Includes", href: "#seo-overview" },
  { label: "Who Needs SEO", href: "#seo-fit" },
  { label: "Our SEO Approach", href: "#seo-process" },
  { label: "SEO Use Cases", href: "#seo-use-cases" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const seoServicesHero = {
  eyebrow: "SEO STRATEGY & SEARCH VISIBILITY",
  h1: "SEO That Connects Search Demand With Business Growth",
  p1:
    "Being visible in search matters when the right people are actively looking for your services, products or expertise. But visibility alone is not the goal. At BIXELTEK we help business get found online acquire higher visiblity and increase sales, leads and enquries",
  p2:
    "Bixeltek brings technical SEO, search-intent research, content improvements, local visibility and conversion considerations together to help businesses build a more useful organic search presence.",
  primaryButtonText: "Talk to our Seo Experts",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Our Growth Services",
  secondaryLinkHref: "/services/grow",
  microcopy:
    "For businesses improving an existing website, expanding into new markets or building organic search visibility around a clearer growth strategy.",
};

// ============================================================
// COMMON SEO CHALLENGES
// ============================================================

export const seoServicesProblems: ProblemCard[] = [
  {
    title: "Your Website Is Not Reaching the Right Searches",
    description:
      "A website can have useful services and strong expertise but still miss relevant searches when its pages do not align with the language, intent and questions potential customers use. Keyword research needs to inform page structure and content decisions, not just metadata.",
  },
  {
    title: "Visitors Arrive but Do Not Become Enquiries",
    description:
      "Organic traffic has limited commercial value when visitors land on pages that do not answer their questions, establish trust or explain what to do next. SEO should consider the journey from search result to landing page and enquiry, not traffic volume in isolation.",
  },
  {
    title: "Technical Problems Make Important Pages Hard to Find",
    description:
      "Indexation issues, confusing URL structures, duplicate pages, weak internal linking or rendering problems can interfere with search engines discovering and understanding important content. Technical work should identify which issues matter and prioritize them by impact.",
  },
  {
    title: "Your Content Does Not Reflect Search Intent",
    description:
      "Pages written around broad keywords can miss the actual decision a searcher is trying to make. Service pages, comparison content, educational resources and local landing pages serve different needs and should not all follow the same content formula.",
  },
  {
    title: "Local Competitors Appear More Often",
    description:
      "Businesses serving a defined area may struggle to appear for relevant local searches when their location signals, business information, service pages and reputation are not adequately developed. Local SEO needs to reflect genuine service coverage rather than create near-identical pages for every location.",
  },
  {
    title: "You Cannot Tell Which SEO Work Is Helping",
    description:
      "Ranking changes and traffic reports do not automatically explain whether SEO is contributing to qualified leads or sales. Measurement needs to connect search performance with useful landing-page behaviour and the conversion actions that can actually be tracked.",
  },
];

// ============================================================
// SEO OVERVIEW
// ============================================================

export const seoServicesOverview = {
  eyebrow: "WHAT SEO ACTUALLY DOES",
  h2: "Make Your Business Easier to Discover, Understand and Choose",
  intro:
    "Search engine optimization improves the way search engines discover, interpret and present relevant pages, while helping people find information that matches what they need. It combines technical foundations, useful content, site structure and ongoing analysis.",
  body:
    "For a business, SEO is not simply a ranking exercise. It can help potential customers discover a service, compare solutions, evaluate expertise and reach a relevant landing page when they are researching a purchase or looking for a provider.",
  closingCopy:
    "The right strategy depends on your market, website condition, competition, business model and customer journey. We prioritize the work that addresses your actual search opportunities rather than applying the same checklist to every website.",
};

// ============================================================
// WHO SEO IS FOR / WHEN IT MAKES SENSE
// ============================================================

export const seoServicesFit = {
  eyebrow: "WHEN SEO MAKES SENSE",
  h2: "Build Organic Visibility Around the Way Customers Find You",
  intro:
    "SEO is most useful when people search for the products, services, problems or expertise your business can genuinely provide - and your website can give them a useful answer.",
  points: [
    {
      title: "Service Businesses Generating Enquiries",
      description:
        "Build visibility around relevant services, customer questions and the locations you genuinely serve, then make it easier for qualified visitors to contact your team.",
    },
    {
      title: "Local and Multi-Location Businesses",
      description:
        "Improve the connection between your services, business information, location pages and local search presence without relying on duplicate pages or misleading location claims.",
    },
    {
      title: "Ecommerce Brands",
      description:
        "Help search engines and shoppers understand category pages, products and supporting content while addressing discoverability, site architecture and the technical needs of a growing catalogue.",
    },
    {
      title: "Businesses Entering New Markets",
      description:
        "Research the search demand, terminology, competition and landing-page requirements of a new region before expanding organic visibility into that market.",
    },
    {
      title: "Businesses With Existing Website Traffic",
      description:
        "Investigate why important pages are underperforming, where qualified visitors drop off and which technical or content changes may improve the search journey.",
    },
    {
      title: "Growing Businesses Building Long-Term Demand",
      description:
        "Develop useful service pages and topical resources that support customers through discovery and evaluation instead of depending entirely on paid acquisition.",
    },
  ],
  notAlwaysNeeded: {
    title: "When SEO may not be the immediate priority",
    description:
      "If a business needs enquiries immediately, has not established product-market fit or cannot currently serve additional demand, paid campaigns, conversion improvements or operational changes may need attention first. SEO can still be part of the wider plan, but it is not a substitute for a workable offer or sales process.",
  },
};

// ============================================================
// SEO SERVICE SCOPE
// ============================================================

export const seoServicesScope: ScopeCard[] = [
  {
    title: "SEO Audits & Prioritization",
    description:
      "Review the website's technical health, page targeting, content quality, internal links and search performance. Separate consequential problems from low-priority observations and turn the findings into an actionable roadmap.",
  },
  {
    title: "Keyword & Search-Intent Research",
    description:
      "Identify relevant search themes, customer questions, commercial terms and competing pages. Map opportunities to the right existing or new pages instead of targeting every keyword with a separate landing page.",
  },
  {
    title: "Technical SEO",
    description:
      "Investigate crawling, indexation, canonicalization, redirects, XML sitemaps, structured data, rendering and site architecture. Recommendations depend on the website's actual platform, templates and technical constraints.",
  },
  {
    title: "On-Page SEO",
    description:
      "Improve page titles, headings, metadata, content organization, contextual internal links and relevant structured information so important pages communicate their purpose clearly to users and search engines.",
  },
  {
    title: "SEO Content Strategy",
    description:
      "Plan service pages, supporting resources and topic coverage around customer needs and business priorities. Content recommendations should add useful information and expertise rather than create pages solely to target keyword variations.",
  },
  {
    title: "Local SEO",
    description:
      "Improve relevant local search signals through accurate business information, location and service content, review processes and Google Business Profile considerations where applicable to the business.",
  },
  {
    title: "Ecommerce SEO",
    description:
      "Review category and product discoverability, internal linking, indexable page selection, faceted navigation, product information and catalogue-related technical issues based on the store's platform and structure.",
  },
  {
    title: "Internal Linking & Site Architecture",
    description:
      "Help visitors and crawlers navigate between related pages using a clearer hierarchy and contextual links. Prioritize important pages and reduce situations where useful content is isolated or difficult to discover.",
  },
  {
    title: "Performance & Page Experience",
    description:
      "Investigate Core Web Vitals and other usability or loading issues where they affect the experience. Improvements depend on the actual bottlenecks, including frontend code, hosting, images, scripts and third-party tools.",
  },
  {
    title: "Authority & Link Earning",
    description:
      "Assess the website's competitive position and identify relevant opportunities to earn genuine mentions and links through useful resources, partnerships, digital PR or other legitimate activities. Avoid purchasing or creating manipulative links as a shortcut.",
  },
  {
    title: "SEO for AI-Assisted Search",
    description:
      "Strengthen the foundations that help systems understand a business and its content: clear answers, well-structured pages, consistent factual information and useful evidence. Visibility in AI-generated answers varies by platform and cannot be guaranteed.",
  },
  {
    title: "Reporting & Ongoing Improvement",
    description:
      "Monitor relevant search queries, landing pages, indexing, organic traffic and tracked conversions. Use the findings to adjust priorities, validate changes and identify new opportunities without treating any single metric as the whole business outcome.",
  },
];

// ============================================================
// SEO USE CASES
// ============================================================

export const seoServicesUseCases: SEOUseCase[] = [
  {
    title: "A Service Business Wants More Qualified Enquiries",
    situation:
      "The website describes the business broadly but has limited visibility for the specific services customers are researching.",
    approach:
      "Map commercial search intent to the right service pages, improve their usefulness and internal links, address technical barriers and measure meaningful enquiry actions where tracking is available.",
  },
  {
    title: "A Local Business Wants to Reach Nearby Customers",
    situation:
      "Potential customers search by service and location, but the business has weak or inconsistent local visibility.",
    approach:
      "Review business information, local search presence, service-area relevance, location-page quality and customer review processes. Represent only locations and services the business can genuinely support.",
  },
  {
    title: "An Ecommerce Store Has a Large Product Catalogue",
    situation:
      "Important categories and products compete with duplicate, thin or low-value URLs, making organic discovery harder to manage as the catalogue grows.",
    approach:
      "Review category hierarchy, product and category content, crawl paths, indexation rules, internal links and filtering behaviour according to the store's platform and inventory structure.",
  },
  {
    title: "A Website Receives Traffic but Few Leads",
    situation:
      "Search visitors reach the site, but the landing pages may not answer their questions or make the next step clear.",
    approach:
      "Assess the search intent behind key landing pages, content relevance, trust signals, mobile usability and conversion paths. Coordinate with analytics and CRO work where the evidence indicates a wider funnel issue.",
  },
  {
    title: "A Business Is Launching a New Website",
    situation:
      "A redesign or migration could change URL structures, page templates, internal links and how search engines access important content.",
    approach:
      "Plan SEO requirements before launch, including URL mapping, redirects, metadata, canonical rules, indexation, XML sitemaps and post-launch checks. The exact scope depends on the existing website and migration.",
  },
  {
    title: "A Company Wants to Expand Into Another Market",
    situation:
      "Existing pages may not match the terminology, intent, competition or customer expectations of the new target market.",
    approach:
      "Research the target market, determine which pages need localization or new content, assess technical and language requirements, and establish a baseline for measuring performance after launch.",
  },
];

// ============================================================
// HOW BIXELTEK APPROACHES SEO
// ============================================================

export const seoServicesProcess: SEOProcessStage[] = [
  {
    number: "01",
    title: "Understand the Business and Search Opportunity",
    description:
      "Review your services or products, target audience, market, competition, current website and commercial priorities. Establish what SEO should contribute and which conversion actions can realistically be measured.",
  },
  {
    number: "02",
    title: "Audit the Existing Website",
    description:
      "Investigate search performance, technical accessibility, indexation, page targeting, content quality, site structure and relevant user journeys. Identify what is working before recommending changes.",
  },
  {
    number: "03",
    title: "Build a Search and Content Roadmap",
    description:
      "Map search intent to existing and potential pages, prioritize technical fixes and content opportunities, and distinguish essential changes from work that can be addressed later.",
  },
  {
    number: "04",
    title: "Implement Technical and On-Page Improvements",
    description:
      "Work through the agreed priorities, which may include indexation fixes, metadata, internal linking, page structure, performance improvements, redirects or collaboration with the development team.",
  },
  {
    number: "05",
    title: "Improve Content and Search Relevance",
    description:
      "Strengthen important service, category, product or informational pages with content that answers the intended audience's questions and supports the decisions they need to make.",
  },
  {
    number: "06",
    title: "Measure, Learn and Refine",
    description:
      "Review changes in search visibility, relevant landing-page performance and tracked conversions. Use the evidence to adjust priorities while accounting for competition, seasonality, implementation time and other influences.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const seoServicesWhyChoose: SEOWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "SEO Connected to Your Website, Marketing and Business Goals",
  intro:
    "Search performance is influenced by more than a keyword list. Technical implementation, content quality, user experience, competition and the way your business converts demand all affect the value SEO can contribute.",
  points: [
    {
      title: "We Start With the Business Context",
      description:
        "We consider what you sell, who you serve, where you operate and which enquiries or sales matter before deciding which search opportunities deserve attention.",
    },
    {
      title: "We Prioritize Work That Has a Clear Purpose",
      description:
        "An audit can produce a long list of issues. We focus on the problems and opportunities that matter to the website rather than treating every recommendation as equally urgent.",
    },
    {
      title: "We Connect SEO With Website Development",
      description:
        "When technical issues require implementation, SEO recommendations can be considered alongside page templates, rendering, navigation, performance and content-management constraints.",
    },
    {
      title: "We Match Content to Search Intent",
      description:
        "Different searches call for different answers. We distinguish service pages, local landing pages, category pages and informational resources rather than repeating one format across the site.",
    },
    {
      title: "We Consider the Journey After the Click",
      description:
        "Search visibility is only part of the journey. Landing-page clarity, relevant information, trust and a useful next step can influence whether visitors become enquiries or customers.",
    },
    {
      title: "We Treat Reporting as a Decision Tool",
      description:
        "Search positions and traffic provide context, but we also consider landing-page performance and tracked business actions where reliable data is available.",
    },
  ],
  closingCopy:
    "SEO requires sustained work and results depend on your starting point, competition, market and implementation. Our focus is to make the priorities clear, the work purposeful and progress measurable where the available data allows.",
  ctaText: "Discuss Your SEO Goals",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// ============================================================

export const seoServicesInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Website Size & Complexity",
    description:
      "The number of templates, URLs, product pages, locations and technical dependencies affects how much auditing, implementation and validation the website requires.",
  },
  {
    title: "Current Technical Condition",
    description:
      "A site with clear indexation, rendering or migration problems may require more investigation and developer involvement than a technically sound website.",
  },
  {
    title: "Competition & Search Demand",
    description:
      "The competitiveness of the market, the number of relevant search themes and the strength of competing pages affect the depth of strategy and ongoing work required.",
  },
  {
    title: "Content Scope",
    description:
      "Existing content may need optimization, consolidation or restructuring. New service pages, location content and editorial resources introduce different research and production requirements.",
  },
  {
    title: "Local, National or International Reach",
    description:
      "A single-location service business has different needs from a company targeting multiple regions, languages or international markets.",
  },
  {
    title: "Platform & Development Requirements",
    description:
      "CMS limitations, custom code, ecommerce architecture, tracking and deployment processes can affect the time required to implement and validate SEO recommendations.",
  },
  {
    title: "Authority & Outreach Requirements",
    description:
      "Where relevant, competitive authority-building work may require research, useful resource creation, partnership development or digital PR beyond on-site optimization.",
  },
  {
    title: "Measurement & Reporting",
    description:
      "Analytics readiness, conversion tracking, reporting requirements and the availability of reliable historical data affect how performance can be evaluated.",
  },
];

// ============================================================
// RELATED SERVICES
// Confirm each destination exists before publishing.
// ============================================================

export const seoServicesRelatedServices: RelatedServiceCard[] = [
  {
    title: "Technical SEO",
    description:
      "Address crawling, indexation, site architecture and other technical issues that may prevent important pages from being discovered or understood.",
    linkText: "Explore Technical SEO",
    destination: "/technical-seo",
  },
  {
    title: "Local SEO",
    description:
      "Improve relevant local search visibility for businesses that depend on location-based discovery and accurate service-area information.",
    linkText: "Explore Local SEO",
    destination: "/local-seo",
  },
  {
    title: "On-Page SEO",
    description:
      "Improve the structure, relevance and clarity of individual pages so they better serve their intended search queries and visitors.",
    linkText: "Explore On-Page SEO",
    destination: "/on-page-seo",
  },
  {
    title: "Google Ads Management",
    description:
      "Use paid search to reach relevant audiences while organic visibility develops, or coordinate paid and organic insights around shared commercial goals.",
    linkText: "Explore Google Ads",
    destination: "/services/google-ads",
  },
  {
    title: "Web Design & Development",
    description:
      "Address website structure, templates, performance and implementation requirements when the SEO roadmap needs changes beyond content and metadata.",
    linkText: "Explore Web Design",
    destination: "/services/web-design",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Investigate the visitor journey when organic traffic reaches important pages but the website experience may be limiting enquiries or purchases.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
];

// ============================================================
// FAQ
// ============================================================

export const seoServicesFaqs: FAQItem[] = [
  {
    question: "What are SEO services?",
    answer:
      "SEO services improve a website's organic search visibility and usefulness for relevant searches. Depending on the project, they can include technical SEO, keyword research, on-page optimization, content strategy, local SEO, ecommerce SEO, internal linking and performance measurement.",
  },
  {
    question: "Why does a business need SEO?",
    answer:
      "SEO can help potential customers discover a business when they search for relevant services, products or information. Whether it is a priority depends on search demand, competition, customer behaviour, the website's condition and how well the business can serve the resulting demand.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "There is no universal timeline. Some technical or page-level improvements can be observed sooner, while competitive search terms, new content and authority development may take longer. Results depend on the starting point, competition, implementation quality, search demand and other factors.",
  },
  {
    question: "Can you guarantee first-page rankings?",
    answer:
      "No responsible SEO provider can guarantee specific organic rankings. Search results change, and performance depends on factors beyond an agency's control. A sound engagement focuses on improving the website, targeting relevant opportunities and measuring progress rather than promising a particular position.",
  },
  {
    question: "What is included in an SEO audit?",
    answer:
      "The scope can include crawling and indexation, URL structure, redirects, canonical tags, metadata, internal links, page targeting, content quality, performance and search data. The exact audit should reflect the platform, business goals and issues discovered rather than applying the same checklist to every website.",
  },
  {
    question: "What is the difference between technical SEO and on-page SEO?",
    answer:
      "Technical SEO addresses how search engines can access, crawl, render and interpret a website. On-page SEO focuses on individual page content, headings, metadata, internal links and relevance to the intended search. The two areas overlap and often need to be addressed together.",
  },
  {
    question: "Do you provide local SEO services?",
    answer:
      "Local SEO can include reviewing business information, Google Business Profile considerations, service-area content, location pages, local relevance and review processes. The right scope depends on the business model and the places it genuinely serves.",
  },
  {
    question: "Is SEO useful for ecommerce websites?",
    answer:
      "Yes, where customers use search to discover products or categories. Ecommerce SEO may cover category and product content, site architecture, crawlability, duplicate URLs, filtering behaviour, internal linking and platform-specific technical requirements.",
  },
  {
    question: "Can SEO help a new website?",
    answer:
      "Yes. SEO planning can help a new website establish useful page structure, search intent, internal linking, metadata, indexation and measurement from the start. A new domain still needs time to build visibility, and results depend on competition and the quality of the implementation.",
  },
  {
    question: "Do you work on existing websites or only new websites?",
    answer:
      "SEO can be planned for an existing website, a redesign or a new build. For an existing site, the first step is to understand its current performance and identify what should be retained, improved, consolidated or migrated.",
  },
  {
    question: "Can SEO improve leads and sales?",
    answer:
      "SEO can contribute by bringing relevant visitors to useful landing pages, but more traffic does not automatically mean more leads or sales. The offer, competition, visitor intent, website experience and conversion process all influence the outcome. Conversion tracking helps evaluate business actions where reliable measurement is available.",
  },
  {
    question: "What is AI search optimization?",
    answer:
      "AI search optimization refers to improving the clarity, usefulness and structure of content so it can be understood by search engines and AI-assisted discovery systems. Good foundations include accurate information, direct answers, clear page structure and demonstrable expertise. Inclusion or citation in a particular AI response cannot be guaranteed.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "Cost depends on website complexity, competition, geographic reach, content requirements, technical implementation, reporting and the amount of ongoing work. A focused local SEO engagement differs from a large ecommerce or international SEO programme, so scope should be defined before estimating cost.",
  },
  {
    question: "How do you measure SEO performance?",
    answer:
      "Measurement may include relevant search queries, organic impressions and clicks, landing-page traffic, indexation and tracked conversions. The most useful indicators depend on the business goal and data quality. Rankings or traffic alone should not be treated as proof of commercial success.",
  },
  {
    question: "Do I need ongoing SEO or a one-time audit?",
    answer:
      "A one-time audit can help identify priorities, but implementation and follow-up are often needed to address issues and evaluate the effects. Ongoing work is more relevant when competition, content, products, website structure or business goals continue to change.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const seoServicesFinalCta: SEOFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLAN YOUR SEO ROADMAP",
  h2: "Find Out What Is Holding Back Your Organic Search Growth",
  description:
    "Tell us about your website, target market and business goals. We can discuss the search opportunities worth investigating, the issues that may need attention and a practical way to prioritize the work.",
  primaryCta: {
    label: "Discuss Your SEO Goals",
    href: "#contact",
  },
  supportingCopy:
    "The starting point is your website and market - not a promise of rankings or a one-size-fits-all SEO package.",
};


export const conversionJourneyPreviewData = {
  eyebrow: "FROM SEARCH TO BUSINESS GROWTH",
  h2: "Turn Organic Search Visibility Into Meaningful Business Outcomes",
  intro:
    "SEO success is not just about ranking higher or attracting more visitors. We connect search intent with useful landing pages and measurable actions, helping businesses understand whether organic search is contributing to enquiries, qualified leads, and sales.",
  panels: [
    {
      title: "Capture the Right Search Demand",
      description:
        "We identify the searches that reflect your customers' needs, compare them with your existing content, and uncover gaps in your organic visibility. The goal is to attract people looking for the services, products, or expertise your business actually offers - not traffic that looks impressive but has little commercial relevance.",
    },
    {
      title: "Give Visitors a Relevant Next Step",
      description:
        "A strong search result needs a page that fulfils its promise. We assess whether landing pages answer the visitor's question, provide useful information, establish credibility, and make the next action clear. Where needed, we address content gaps, internal linking, technical barriers, and usability issues that weaken the journey.",
    },
    {
      title: "Measure Enquiries, Leads and Sales",
      description:
        "We use available analytics and conversion tracking to understand what visitors do after arriving through organic search. Depending on the business, this may include form submissions, tracked calls, qualified enquiries, or ecommerce purchases. The resulting data helps distinguish organic traffic growth from progress towards business goals.",
    },
  ],
  supportingLink: {
    text: "Get In Touch",
    destination: "#final-cta",
  },
};

export const startingSituationsPreviewData = {
  eyebrow: "START FROM WHERE YOU ARE",
  h2: "Building Organic Visibility or Improving What Already Exists?",
  cards: [
    {
      title: "Launch An SEO Ready Website",
      description:
        "Build a search-ready foundation before organic growth becomes harder to manage. We assess site architecture, search intent, URL structure, indexation, internal linking and measurement requirements to establish a practical SEO roadmap for launch and beyond.",
    },
    {
      title: "Existing Website Stuck or Losing Traffic?",
      description:
        "Find out what may be limiting organic performance before investing in more content or links. We investigate crawl and indexation issues, declining pages, keyword cannibalization, content gaps, migration changes and landing-page relevance to prioritize improvements based on evidence.",
    },
  ],
  buttonText: "Talk to an Expert",
  buttonHref: "#seo-review",
};


export const businessMarketsPreviewData = {
  eyebrow: "SEO BUILT AROUND YOUR BUSINESS MODEL",
  h2: "Different Businesses Need Different Search Strategies",
  intro:
    "The right SEO approach depends on how customers discover, evaluate and choose a business. We adapt keyword research, site structure, content priorities and conversion paths to your business model, target market and the intent behind each search.",
  cards: [
    {
      title: "Dental & Healthcare Practices",
      description:
        "Build visibility around relevant treatments, practitioner expertise and location-based searches. We consider local search presence, service-page relevance, useful patient information and trust signals that help prospective patients evaluate their options.",
      visitorQuestion: "Can prospective patients easily find and trust our clinic for their treatments?",
      focus: [
        "Treatment pages & localized service schema",
        "Google Business Profile & local pack visibility",
        "Patient trust signals & doctor credentials",
      ],
      image: dentalImg,
      imageAlt: "Healthcare and dental practice search optimization",
      link: "#final-cta",
      linkText: "Dental SEO Services →",
    },
    {
      title: "Roofing & Home Contractors",
      description:
        "Dominate high-ticket replacement, inspection, and emergency storm repair searches in your service territories through localized landing page hierarchies and verified local authority signals.",
      visitorQuestion: "How do we rank #1 for high-ticket roofing and contractor queries across our service area?",
      focus: [
        "Service-area architecture & location pages",
        "Emergency repair & storm damage search capture",
        "Google Map Pack & local review generation",
      ],
      image: roofingImg,
      imageAlt: "Roofing contractor and home service search engine optimization",
      link: "#final-cta",
      linkText: "Roofing SEO Strategy →",
    },
    {
      title: "Local & Multi-Location Services",
      description:
        "Help customers find the right service in the areas you serve. We focus on local search visibility, Google Business Profile relevance, location-page quality and consistent business information without relying on thin or duplicated location pages.",
      visitorQuestion: "How do we rank across multiple service territories without duplicate pages?",
      focus: [
        "Territory-tier landing page hierarchy",
        "Citation consistency & local ranking signals",
        "Click-to-call & enquiry path optimization",
      ],
      image: cleaningImg,
      imageAlt: "Local and multi-location business SEO strategy",
      link: "#final-cta",
      linkText: "Local Services SEO →",
    },
    {
      title: "Real Estate & Property Development",
      description:
        "Capture buyers, investors, and commercial tenants actively searching for developments, property types, and neighborhoods with localized architecture and rich schema markup.",
      visitorQuestion: "How do we attract qualified property buyers and investors without paying portals forever?",
      focus: [
        "Community & neighborhood search silos",
        "Property listing schema & rich snippets",
        "High-intent commercial tenant search capture",
      ],
      image: realEstateImg,
      imageAlt: "Real estate property search engine optimization",
      link: "#final-cta",
      linkText: "Real Estate SEO →",
    },
    {
      title: "Ecommerce & Product Catalogues",
      description:
        "Make products and categories easier for search engines and shoppers to discover. We assess category architecture, product-page content, internal linking, indexation controls, faceted navigation and relevant structured data across the catalogue.",
      visitorQuestion: "How do we get our collections and high-margin products discovered organically?",
      focus: [
        "Category architecture & internal linking",
        "Faceted navigation & indexation management",
        "Product schema & rich snippet integration",
      ],
      image: ecommerceImg,
      imageAlt: "Ecommerce catalogue architecture and search visibility",
      link: "#final-cta",
      linkText: "Ecommerce SEO Solutions →",
    },
    {
      title: "B2B & Corporate Services",
      description:
        "Reach buyers researching complex services, technical solutions and potential suppliers. We align content with informational and commercial search intent, strengthen relevant service pages and support evaluation through useful expertise, case studies and clear enquiry paths.",
      visitorQuestion: "How do we attract enterprise buyers researching complex technical solutions?",
      focus: [
        "Search-intent mapping across buyer journeys",
        "In-depth capability & solutions content",
        "Technical crawl health & topical authority",
      ],
      image: b2bImg,
      imageAlt: "B2B enterprise search intent and thought leadership",
      link: "#final-cta",
      linkText: "Corporate & Legal SEO →",
    },
    {
      title: "Technology & Cloud SaaS",
      description:
        "Scale organic pipeline with product-led SEO, competitor comparison hubs, feature-specific landing pages, and bottom-of-funnel keyword architectures tailored for technical decision-makers.",
      visitorQuestion: "Can SEO drive qualified product trials and demo requests from enterprise buyers?",
      focus: [
        "Comparison & alternative-to content hubs",
        "Technical buyer journey intent capture",
        "Product feature & use-case taxonomy",
      ],
      image: b2bImg,
      imageAlt: "Technology SaaS product search optimization",
      link: "#final-cta",
      linkText: "SaaS SEO Growth →",
    },
    {
      title: "Automotive & Dealerships",
      description:
        "Target high-intent vehicle service searches, maintenance bookings, and dealership showroom traffic with localized Map Pack dominance and structured vehicle inventory data.",
      visitorQuestion: "How do we capture local car repair and maintenance searches in our immediate radius?",
      focus: [
        "Local Map Pack & service bay ranking",
        "Automotive repair query optimization",
        "Mobile click-to-book conversion funnels",
      ],
      image: carImg,
      imageAlt: "Automotive repair and dealership SEO",
      link: "#final-cta",
      linkText: "Automotive SEO →",
    },
    {
      title: "Education & Academies",
      description:
        "Attract prospective students and parents during critical enrollment windows by optimizing program curriculum pages, accreditation authority signals, and campus search visibility.",
      visitorQuestion: "How do we increase prospectus downloads and student enrollments every semester?",
      focus: [
        "Program & degree pathway architecture",
        "Seasonal admission cycle search strategy",
        "Institutional authority & schema markup",
      ],
      image: schoolImg,
      imageAlt: "Education and university program search optimization",
      link: "#final-cta",
      linkText: "Education SEO →",
    },
  ],
  regionalIntro:
    "We support businesses targeting local, national and international markets, adapting SEO priorities to geographic demand, language, competition and the way customers search in each market.",
  regionalLinks: [
    { label: "Hyderabad", destination: "/seo-agency-hyderabad" },
    { label: "Toronto", destination: "/toronto/seo-services" },
    { label: "Mississauga", destination: "/mississauga/seo-services" },
    { label: "Vancouver", destination: "/vancouver/seo-services" },
  ],
};