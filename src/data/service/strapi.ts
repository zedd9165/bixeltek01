import type {
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";


export interface StrapiMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface StrapiPoint {
  title: string;
  description: string;
}

export interface StrapiProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface StrapiUseCaseCard {
  title: string;
  description: string;
  examples?: string[];
}



export interface StrapiTechnologyItem {
  name: string;
  category: string;
  description: string;
  icon?: string;
  href?: string;
}

export interface StrapiDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface StrapiWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: StrapiPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface StrapiFinalCtaData {
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

export const strapiMetadata: StrapiMetadata = {
  title: "Strapi Development Services | Headless CMS Development | Bixeltek",
  description:
    "Build a Strapi-powered content platform with structured content models, API integrations, custom frontend development, migration planning and maintainable publishing workflows.",
  keywords: [
    "Strapi development services",
    "Strapi development company",
    "Strapi CMS development",
    "headless CMS development",
    "Strapi website development",
    "Strapi API development",
    "Strapi Next.js development",
    "Strapi migration services",
  ],
  // Confirm the intended live route before release.
  canonical: "https://bixeltek.com/services/web-design/strapi",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const strapiBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "Strapi Development", href: "/services/web-design/strapi" },
];

// ============================================================
// JUMP LINKS
// Match these IDs to the actual section IDs used by the page.
// ============================================================

export const strapiJumpLinks: JumpLinkItem[] = [
  { label: "Common Challenges", href: "#strapi-challenges" },
  { label: "What We Build", href: "#strapi-capabilities" },
  { label: "Choosing the Right Approach", href: "#strapi-decisions" },
  { label: "Technology & Integrations", href: "#strapi-technology" },
  { label: "Our Process", href: "#strapi-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const strapiHero = {
  eyebrow: "STRAPI CMS & HEADLESS DEVELOPMENT",
  h1: "Strapi Development Built Around Your Content and Applications",
  p1:
    "When content needs to power more than one website—or needs a structure your team can manage reliably—a headless CMS can offer a more flexible foundation.",
  p2:
    "Bixeltek builds Strapi content models, APIs and frontend integrations around how your business publishes and uses information, from Next.js websites to application-backed content experiences.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#Contact-us",
  microcopy:
    "Planning a new headless website, connecting Strapi to an existing frontend or moving content from another CMS? Start with the content model and the job the system needs to do.",
};

// ============================================================
// STRAPI-SPECIFIC PROBLEMS
// ============================================================

export const strapiProblems: ProblemCard[] = [
  {
    title: "Your Content Is Locked Into One Frontend",
    description:
      "When the website and content system are tightly coupled, reusing the same information in an app or another digital experience can take extra work. A headless setup can separate content management from presentation when multi-channel delivery is a real requirement.",
  },
  {
    title: "Content Structures No Longer Fit the Business",
    description:
      "Generic fields can become difficult to manage when pages, products, locations or resources have different relationships and publishing needs. A considered Strapi content model makes those relationships explicit instead of leaving editors to work around the structure.",
  },
  {
    title: "Editors Depend on Developers for Routine Changes",
    description:
      "A flexible API alone does not create a good editorial workflow. Content types, components, permissions and preview need to be designed so editors can update approved content without accidentally breaking the frontend.",
  },
  {
    title: "The Frontend and CMS Do Not Stay in Sync",
    description:
      "A field change, unpublished entry or missing relation can cause unexpected frontend behaviour if the integration is loosely defined. The content model, API queries, validation and error handling need to work together.",
  },
  {
    title: "APIs and Integrations Need Better Structure",
    description:
      "Websites and applications may need content from Strapi alongside CRM, ecommerce, search or internal systems. Reliable integration requires clear data ownership, authentication, permissions and rules for how information moves between systems.",
  },
  {
    title: "A Migration or Upgrade Feels Risky",
    description:
      "Moving content or changing Strapi versions can affect schemas, relations, media, API consumers and publishing workflows. A migration plan should include data mapping, validation, integration testing and a controlled release rather than relying on a one-time export.",
  },
];

// ============================================================
// OVERVIEW
// ============================================================

export const strapiOverview = {
  eyebrow: "STRAPI HEADLESS CMS DEVELOPMENT",
  h2: "A Content Platform Designed Around How Your Business Publishes",
  intro:
    "Strapi is an open-source headless CMS that lets teams manage structured content and expose it through APIs to websites, apps and other digital experiences. The frontend can be developed separately using the framework that fits the project.",
  body:
    "The quality of a Strapi implementation depends on more than connecting an API. Content types, reusable components, relations, permissions, publishing workflows, preview and frontend data handling all need to reflect how the system will be used.",
  closingCopy:
    "Headless is not automatically the right choice for every website. We focus on whether the flexibility and separation are worth the additional frontend, deployment and maintenance responsibilities.",
};

// ============================================================
// WHEN STRAPI DEVELOPMENT MAKES SENSE
// ============================================================

export const whenYouNeedStrapiDevelopment = {
  eyebrow: "WHEN TO INVEST IN STRAPI DEVELOPMENT",
  h2: "Use Headless Architecture When the Content Has More to Do",
  intro:
    "Strapi is most useful when the content model, delivery channels or frontend requirements call for more control than a conventional website setup provides.",
  points: [
    {
      title: "One content source serves multiple experiences",
      description:
        "The same structured content needs to support a website, mobile app, portal or additional frontend without maintaining separate copies.",
    },
    {
      title: "Your content has complex relationships",
      description:
        "Resources, locations, services, authors, categories or product information need a clear model with reusable components and meaningful relationships.",
    },
    {
      title: "You need a custom frontend",
      description:
        "The public experience needs a tailored React or Next.js implementation while editors manage content separately in Strapi.",
    },
    {
      title: "Editors need structured publishing workflows",
      description:
        "Your team needs clear fields, controlled permissions, draft and publish processes, and an editing interface aligned with the content they manage.",
    },
    {
      title: "Your current CMS is limiting integrations",
      description:
        "Content needs to connect to APIs, business systems or application workflows with clearer data structures and access controls.",
    },
    {
      title: "You are replacing or consolidating a CMS",
      description:
        "You need to move existing content into a more suitable model while planning media transfer, URL continuity, frontend changes and validation.",
    },
  ],
  notAlwaysNeeded: {
    title: "When a simpler CMS may be better",
    description:
      "A small business website that mainly needs editable pages and a familiar all-in-one workflow may be easier to manage with WordPress. Strapi adds a separate frontend and deployment layer, so choose it when the content model or delivery requirements justify that complexity.",
  },
};

// ============================================================
// CAPABILITIES / SCOPE
// ============================================================

export const strapiScope: ScopeCard[] = [
  {
    title: "Strapi CMS Setup & Configuration",
    description:
      "Set up the CMS environment, core configuration and project structure around the agreed content needs, deployment model and team responsibilities.",
  },
  {
    title: "Content Types, Components & Relations",
    description:
      "Model pages, entries, reusable components and relationships so content remains structured, reusable and practical for editors to maintain.",
  },
  {
    title: "Strapi with Next.js or React",
    description:
      "Build the frontend connection, page templates and content rendering around the chosen framework, including loading, empty and error states.",
  },
  {
    title: "REST API & GraphQL Integration",
    description:
      "Use the appropriate API approach for the project, with deliberate queries, relation population, filtering and access permissions based on actual requirements.",
  },
  {
    title: "Editorial Workflows & Permissions",
    description:
      "Configure roles, content access and publishing workflows so editors can perform their tasks while sensitive or unpublished content remains protected.",
  },
  {
    title: "Preview & Publishing Experience",
    description:
      "Plan how editors can review draft content in the frontend before publication, including preview routes, access checks and the relevant framework integration.",
  },
  {
    title: "Custom APIs, Plugins & Extensions",
    description:
      "Extend Strapi where standard content types and configuration are not enough, keeping custom routes, business logic and extensions documented and maintainable.",
  },
  {
    title: "Third-Party & Business Integrations",
    description:
      "Connect relevant CRM, search, ecommerce or internal systems where the APIs and data flows support a reliable integration with clear ownership and error handling.",
  },
  {
    title: "CMS Migration & Version Upgrades",
    description:
      "Plan content mapping, media handling, schema changes, API compatibility and validation when moving from another CMS or upgrading an existing Strapi implementation.",
  },
  {
    title: "Deployment, Performance & Maintenance",
    description:
      "Prepare environments, deployment routines, monitoring and backups, then investigate API or frontend bottlenecks and define a practical ongoing maintenance approach.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS
// Four concise trade-offs to help buyers understand the choices.
// ============================================================

export const strapiImplementationDecisions: StrapiDecisionItem[] = [
  {
    title: "Strapi or a conventional CMS",
    context:
      "Strapi separates content management from the frontend; an all-in-one CMS can be simpler for a standard business website.",
    consideration:
      "Choose headless when structured content, custom frontend control or multiple channels justify the extra setup and maintenance.",
  },
  {
    title: "REST API or GraphQL",
    context:
      "Both approaches can deliver Strapi content, but they shape how the frontend requests and selects data.",
    consideration:
      "Choose based on query needs, team familiarity and integration requirements—not simply because one is newer.",
  },
  {
    title: "Standard configuration or custom extensions",
    context:
      "Content types and built-in features cover many needs; specialized workflows may require custom logic or plugins.",
    consideration:
      "Start with the simplest maintainable solution and add custom code only when a clear requirement calls for it.",
  },
  {
    title: "Hosted or self-managed deployment",
    context:
      "The hosting approach affects operational control, maintenance responsibility, deployment and infrastructure costs.",
    consideration:
      "Compare team capability, security needs, scaling expectations and ongoing ownership before choosing where Strapi runs.",
  },
];

// ============================================================
// TECHNOLOGY & INTEGRATION ECOSYSTEM
// These are possible project choices, not a promise that every
// technology is included in every engagement.
// ============================================================

export const strapiTechnologies: StrapiTechnologyItem[] = [
  {
    name: "Strapi CMS",
    category: "Content management",
    description:
      "Manage structured content through a customizable admin panel with content types, components, relations and publishing controls.",
    href: "https://docs.strapi.io/cms/intro",
  },
  {
    name: "Content-Type Builder",
    category: "Content modelling",
    description:
      "Define collection types, single types and reusable components to match the way the business creates and relates content.",
    href: "https://docs.strapi.io/cms/features/content-type-builder",
  },
  {
    name: "REST API",
    category: "Content delivery",
    description:
      "Use generated endpoints to retrieve and manage content, with explicit attention to permissions, relations and populated fields.",
    href: "https://docs.strapi.io/cms/api/rest",
  },
  {
    name: "GraphQL",
    category: "Content delivery",
    description:
      "Consider GraphQL where its query model fits the frontend's data requirements and the project's integration approach.",
    href: "https://docs.strapi.io",
  },
  {
    name: "Next.js & React",
    category: "Frontend integration",
    description:
      "Build the public website separately from the CMS, with deliberate data fetching, rendering, caching and draft preview behaviour.",
  },
  {
    name: "Roles & Permissions",
    category: "Access control",
    description:
      "Configure access for editors, administrators and API consumers so content visibility and editing capabilities match the intended workflow.",
    href: "https://docs.strapi.io/cms/features/rbac",
  },
  {
    name: "Deployment & Monitoring",
    category: "Operations",
    description:
      "Plan environment configuration, deployment, backups, logging and recovery around the chosen hosting and maintenance model.",
    href: "https://docs.strapi.io",
  },
];

// ============================================================
// PROCESS
// ============================================================

export const strapiProcess: StrapiProcessStage[] = [
  {
    number: "01",
    title: "Understand the Content & Use Cases",
    description:
      "Review the audiences, content types, publishing workflow, frontend requirements, integrations and current limitations the project needs to address.",
  },
  {
    number: "02",
    title: "Design the Content Model",
    description:
      "Define content types, components, relations, permissions and publishing rules before building the frontend around the data structure.",
  },
  {
    number: "03",
    title: "Plan the Frontend & API",
    description:
      "Choose the appropriate API approach and frontend framework, then define how pages fetch content, handle errors and preview unpublished changes.",
  },
  {
    number: "04",
    title: "Build & Integrate",
    description:
      "Implement the Strapi configuration, frontend templates and agreed integrations, keeping editor usability and long-term maintainability in view.",
  },
  {
    number: "05",
    title: "Validate Content, Access & Performance",
    description:
      "Test relationships, permissions, draft and published states, responsive pages, API behaviour, integrations and important content journeys.",
  },
  {
    number: "06",
    title: "Deploy & Hand Over",
    description:
      "Coordinate environment configuration, release checks, backups and documentation, then provide guidance for the agreed editorial and maintenance workflows.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const strapiWhyChoose: StrapiWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Strapi Development That Connects Content, APIs and Frontend",
  intro:
    "A useful headless CMS needs more than a working API. Its content model, editing workflow, frontend integration and deployment approach must fit together as one maintainable system.",
  points: [
    {
      title: "We Model Content Before Building Around It",
      description:
        "We define the content types and relationships around real publishing needs so the frontend is not forced to work around an unclear data structure.",
    },
    {
      title: "We Consider Editors as Well as Developers",
      description:
        "Fields, components, permissions and preview should make content tasks clear for the people who will use the CMS day to day.",
    },
    {
      title: "We Connect the Frontend Deliberately",
      description:
        "API queries, rendering, caching and preview behaviour are planned together instead of treating the CMS connection as a last-minute data fetch.",
    },
    {
      title: "We Avoid Unnecessary Customization",
      description:
        "We start with Strapi's existing capabilities and add custom extensions only when the requirements justify their implementation and future maintenance.",
    },
    {
      title: "We Plan for Migration and Operations",
      description:
        "Where relevant, content validation, environment setup, access controls, backups and release checks are part of the implementation discussion.",
    },
    {
      title: "We Keep the Architecture Tied to the Use Case",
      description:
        "We consider whether headless is the right fit, what the team can maintain and which channels actually need to share the same content.",
    },
  ],
  closingCopy:
    "The goal is a content system your team can operate and your applications can depend on—not complexity for its own sake.",
  ctaText: "Talk to an Expert",
  ctaHref: "#contact-us",
};

// ============================================================
// INVESTMENT FACTORS
// ============================================================

export const strapiInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Content Model Complexity",
    description:
      "The number of content types, reusable components, relations, locales and validation rules affects modelling and testing effort.",
  },
  {
    title: "Frontend Scope",
    description:
      "A single marketing website differs from multiple frontends, application interfaces or complex page templates connected to the same CMS.",
  },
  {
    title: "API & Custom Logic",
    description:
      "Custom endpoints, specialized queries, plugins and business rules add development, security review and maintenance requirements.",
  },
  {
    title: "Editorial Workflow & Preview",
    description:
      "Role design, publishing processes, preview functionality and editor training need to be scoped around how the team works.",
  },
  {
    title: "Integrations & Data Migration",
    description:
      "The number of connected systems, source data quality, media volume and validation rules can significantly affect implementation effort.",
  },
  {
    title: "Hosting & Deployment",
    description:
      "Environment setup, release automation, monitoring, backups and operational ownership vary with the hosting model and reliability needs.",
  },
  {
    title: "SEO & URL Continuity",
    description:
      "Metadata, rendering, redirects, sitemap handling and analytics checks need to be planned for the frontend and any migration work.",
  },
  {
    title: "Testing & Ongoing Support",
    description:
      "API access checks, frontend testing, documentation, upgrade planning and post-launch support should be defined separately from the initial build.",
  },
];

// ============================================================
// RELATED SERVICES
// Verify these routes exist before publishing the page.
// ============================================================

export const strapiRelatedServices: RelatedServiceCard[] = [
  {
    title: "Web Design & Development",
    description:
      "Explore the broader website service if you need the frontend experience, page structure and development approach planned alongside the CMS.",
    linkText: "Explore Web Design Services",
    destination: "/services/web-design",
  },
  {
    title: "WordPress Development",
    description:
      "Explore WordPress development when an all-in-one editorial workflow, theme-driven architecture or conventional CMS meets your publishing requirements.",
    linkText: "Explore WordPress Development",
    destination: "/services/web-design/wordpress",
  },
  {
    title: "Custom-Coded Websites",
    description:
      "Explore custom frontend and application development when the main requirement is a tailored digital experience beyond CMS configuration.",
    linkText: "Explore Custom-Coded Websites",
    destination: "/custom-coded-websites",
  },
  {
    title: "Ecommerce Development",
    description:
      "For commerce projects, assess product data, checkout, order operations and integrations before deciding how Strapi should fit into the wider system.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "Application Development",
    description:
      "If Strapi needs to supply content to a web or mobile application, explore the application development service alongside the API architecture.",
    linkText: "Explore Application Development",
    destination: "/services/mobile-app-development",
  },
  {
    title: "SEO Services",
    description:
      "A headless implementation needs appropriate rendering, metadata and URL handling; broader SEO work also addresses content, search intent and competition.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
];

// ============================================================
// FAQ
// ============================================================

export const strapiFaqs: FAQItem[] = [
  {
    question: "What is Strapi development?",
    answer:
      "Strapi development involves setting up a headless CMS, modelling content, configuring permissions and APIs, and connecting the CMS to a website or application. Depending on the project, it may also include custom extensions, migration, deployment and ongoing support.",
  },
  {
    question: "What is Strapi used for?",
    answer:
      "Strapi can manage structured content for websites, mobile applications, portals and other digital experiences through APIs. It is especially useful when content needs a tailored model or needs to be delivered to more than one frontend.",
  },
  {
    question: "Can you build a Strapi website with Next.js?",
    answer:
      "Yes. Strapi can manage the content while Next.js renders the public-facing website. The implementation needs to account for API queries, page rendering, caching, preview behaviour, metadata and how content changes reach the frontend.",
  },
  {
    question: "Is Strapi better than WordPress?",
    answer:
      "Neither is universally better. WordPress can be simpler for a conventional content-led website where an all-in-one editing and publishing workflow is preferred. Strapi is worth considering when structured content, custom frontends or multi-channel delivery justify a separate CMS and frontend architecture.",
  },
  {
    question: "Does Strapi include a website frontend?",
    answer:
      "Strapi is a headless CMS, so the public-facing frontend is typically developed separately. That frontend can use a framework such as Next.js or React, depending on the project's requirements.",
  },
  {
    question: "Can Strapi content power a website and mobile app?",
    answer:
      "It can, provided the content model and API permissions are designed for those consumers. The project should also define how each frontend handles content changes, access restrictions, errors and differences in presentation.",
  },
  {
    question: "Can you migrate an existing website to Strapi?",
    answer:
      "A migration can include content and media transfer, field and relationship mapping, frontend integration, URL redirects and validation. The effort depends on the source CMS, content quality, custom functionality and how much the new content model differs from the old one.",
  },
  {
    question: "Does Strapi support custom APIs and integrations?",
    answer:
      "Strapi provides APIs for its content types and can be extended where a project needs additional routes, business logic or integrations. Custom work should include appropriate access controls, error handling, documentation and a maintenance plan.",
  },
  {
    question: "Can editors preview content before publishing?",
    answer:
      "A preview workflow can be implemented by connecting Strapi's draft content to the frontend's preview mode. The exact setup depends on the frontend framework and should protect unpublished content from public access.",
  },
  {
    question: "Is Strapi suitable for SEO?",
    answer:
      "Strapi can support an SEO-ready website, but the CMS alone does not determine search performance. The frontend must handle crawlable content, metadata, canonical URLs, redirects and sitemap behaviour appropriately, alongside strong content and ongoing SEO work.",
  },
  {
    question: "How long does a Strapi project take?",
    answer:
      "Timing depends on the content model, frontend page types, integrations, migration work, preview requirements and deployment setup. A small CMS integration differs substantially from a multi-channel platform, so a realistic estimate requires reviewing the scope first.",
  },
  {
    question: "What affects the cost of Strapi development?",
    answer:
      "Key factors include content-model complexity, frontend scope, custom APIs, integrations, migration, permissions, preview workflows, hosting, testing and handover. The estimate should distinguish essential launch requirements from optional later improvements.",
  },
  {
    question: "Does Strapi require ongoing maintenance?",
    answer:
      "Yes. The CMS, dependencies, frontend and hosting environment need appropriate updates, backups, security checks and monitoring. Responsibility for deployment, recovery and future changes should be clear before launch.",
  },
  {
    question: "Can you guarantee faster performance or higher search rankings with Strapi?",
    answer:
      "No. Strapi gives developers control over the content and API architecture, but results depend on frontend implementation, hosting, caching, content, third-party scripts and other factors. Performance and SEO should be measured and improved against the actual project requirements.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const strapiFinalCta: StrapiFinalCtaData = {
  id: "contact-us",
  eyebrow: "PLANNING A STRAPI PROJECT?",
  h2: "Let's Define the Right Content Architecture for Your Project",
  description:
    "Tell us what your team needs to publish, which websites or applications will use the content and what your current CMS cannot handle. We can help define a practical scope for the content model, frontend integration and delivery workflow.",
  primaryCta: {
    label: "Discuss Your Strapi Project",
    href: "#contact",
  },
  supportingCopy:
    "We will start with the content and delivery requirements, then assess whether Strapi and a headless frontend are the right fit for the project.",
};


export const strapiUseCases: StrapiUseCaseCard[] = [
  {
    title: "Enterprise Websites & Content Platforms",
    description:
      "Build structured content platforms for large organizations managing multiple services, business units and digital properties.",
    examples: [
      "Corporate websites",
      "Service and location pages",
      "Department-level content",
      "Centralized publishing",
    ],
  },

  {
    title: "Arabic & English Digital Experiences",
    description:
      "Manage Arabic and English content for Saudi audiences with localized content models and frontend experiences designed for RTL and LTR layouts.",
    examples: [
      "Arabic and English websites",
      "Localized landing pages",
      "Language-specific SEO content",
      "RTL frontend support",
    ],
  },

  {
    title: "Multi-Website & Omnichannel Content",
    description:
      "Deliver structured content from one CMS to multiple websites, applications and digital experiences without maintaining unnecessary duplicates.",
    examples: [
      "Multiple brand websites",
      "Website and mobile app content",
      "Shared content libraries",
      "Centralized content updates",
    ],
  },

  {
    title: "Enterprise Portals & Digital Services",
    description:
      "Power custom portals and digital service experiences where structured content must connect with frontend applications and business APIs.",
    examples: [
      "Customer and partner portals",
      "Service directories",
      "Knowledge platforms",
      "API-driven interfaces",
    ],
  },

  {
    title: "Product Catalogues & Ecommerce",
    description:
      "Manage structured product information and supporting content across commerce storefronts and other customer-facing channels.",
    examples: [
      "Product catalogues",
      "Category and brand content",
      "Product information APIs",
      "Headless commerce integration",
    ],
  },

  {
    title: "Saudi Enterprise Digital Transformation",
    description:
      "Support Saudi enterprises modernizing their digital presence with structured content, connected frontend experiences and Arabic-English publishing workflows.",
    examples: [
      "Corporate digital platforms",
      "Multilingual service portals",
      "Cross-brand content management",
      "Connected digital experiences",
    ],
  },
];

