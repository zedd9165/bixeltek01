import type {
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";


export interface EcommerceUseCaseCard {
  title: string;
  description: string;
  examples: string[];
}

export interface EcommerceSystemCard {
  title: string;
  description: string;
  examples: string[];
}

export interface EcommercePostLaunchPoint {
  title: string;
  description: string;
}

export interface EcommercePostLaunchData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: EcommercePostLaunchPoint[];
}

export interface EcommercePlatformComparisonRow {
  factor: string;
  platform: string;
  customCoded: string;
}

export interface EcommercePlatformComparisonData {
  eyebrow: string;
  h2: string;
  intro: string;
  platformLabel: string;
  customCodedLabel: string;
  rows: EcommercePlatformComparisonRow[];
  platformBestFor: string;
  customCodedBestFor: string;
  closingNote: string;
}

export interface ShopifyMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface ShopifyPoint {
  title: string;
  description: string;
}

export interface ShopifyProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface ShopifyTechnologyItem {
  name: string;
  category: string;
  description: string;
  // Add icon/href only when supported by the existing component
  // and verified in the repository.
  icon?: string;
  href?: string;
}

export interface ShopifyDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface ShopifyWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: ShopifyPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface ShopifyFinalCtaData {
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

export const shopifyMetadata: ShopifyMetadata = {
  title: "Shopify Development Services | Shopify Store Development | Bixeltek",
  description:
    "Build or improve your Shopify store with theme customization, storefront development, integrations and migration planning shaped around your products and operations.",
  keywords: [
    "Shopify development services",
    "Shopify store development",
    "Shopify website development",
    "Shopify theme customization",
    "custom Shopify development",
    "Shopify store redesign",
    "Shopify migration services",
    "Shopify integrations",
  ],
  canonical: "https://bixeltek.com/services/ecommerce-development/shopify",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const shopifyBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Ecommerce Development", href: "/services/ecommerce-development" },
  { label: "Shopify Development", href: "/services/ecommerce-development/shopify" },
];

// ============================================================
// JUMP LINKS
// Keep href IDs aligned with the IDs used by the page sections.
// ============================================================

export const shopifyJumpLinks: JumpLinkItem[] = [
  { label: "Shopify Challenges", href: "#shopify-challenges" },
  { label: "Platform Fit", href: "#platform-fit" },
  { label: "When You Need Help", href: "#when-to-hire" },
  { label: "What We Build", href: "#shopify-capabilities" },
  { label: "Use Cases", href: "#shopify-use-cases" },
  { label: "Decisions & Architecture", href: "#shopify-decisions" },
  { label: "Platform Comparison", href: "#shopify-comparison" },
  { label: "SEO & Quality Assurance", href: "#seo-and-qa" },
  { label: "Integrations & Tech", href: "#shopify-integrations" },
  { label: "Our Process", href: "#shopify-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment Factors", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const shopifyHero = {
  eyebrow: "SHOPIFY STORE DEVELOPMENT & CUSTOMIZATION",
  h1: "Shopify Development Built Around the Way Your Business Sells",
  p1:
    "A Shopify store needs to do more than display products. Its catalogue, product pages, customer journey and connected systems must support how your business actually sells and fulfils orders.",
  p2:
    "Bixeltek helps businesses build new Shopify stores and improve existing ones through theme customization, storefront development, integrations and carefully planned changes to the shopping experience.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Ecommerce Development",
  secondaryLinkHref: "/services/ecommerce-development",
  microcopy:
    "Starting a store, improving an existing theme or planning a migration? We can scope the work around your current setup, requirements and next stage of growth.",
};

// ============================================================
// SHOPIFY-SPECIFIC PROBLEMS
// ============================================================

export const shopifyProblems: ProblemCard[] = [
  {
    title: "Product Information Is Difficult to Navigate",
    description:
      "As a catalogue grows, inconsistent product data, unclear collections, variant complexity and weak filtering can make it harder for shoppers to find the right item. These decisions should be planned alongside the storefront, not left until after the design is complete.",
  },
  {
    title: "Apps and Integrations Are Becoming Hard to Manage",
    description:
      "Separate apps may solve individual needs, but overlapping functionality, recurring costs and disconnected data can complicate the store. We review what the business needs each system to do before deciding whether to configure, replace or connect it.",
  },
  {
    title: "The Store Needs to Connect With Daily Operations",
    description:
      "Orders, inventory, fulfilment, customer records and marketing data may need to move between Shopify and other systems. The implementation needs to account for the source of truth, data mapping, sync frequency, error handling and ownership of each workflow.",
  },
  {
    title: "The Business Has Outgrown Its Current Storefront",
    description:
      "A store that worked at launch may become harder to maintain as the catalogue, markets, content and customer expectations change. Before rebuilding everything, it is worth identifying which issues can be solved through theme improvements and which require deeper changes.",
  },
];

// ============================================================
// OVERVIEW
// ============================================================

export const shopifyOverview = {
  eyebrow: "SHOPIFY DEVELOPMENT",
  h2: "A Shopify Store Should Fit Your Commerce Workflow",
  intro:
    "Shopify provides a hosted commerce foundation, but the final store still depends on how the business organizes products, presents information, handles customer decisions and connects its operations.",
  body:
    "Our work starts by understanding the existing store or planned business model. From there, we can scope the storefront, theme changes, integrations and supporting workflows needed for the project—without assuming that every store needs a fully custom build.",
  closingCopy:
    "The aim is a maintainable Shopify implementation that supports the current business and leaves a sensible path for future improvements.",
};

// ============================================================
// BALANCED PLATFORM-FIT EVALUATION
// Helps merchants evaluate when Shopify is right vs alternatives.
// ============================================================

export const shopifyPlatformFit = {
  eyebrow: "PLATFORM-FIT EVALUATION",
  h2: "Evaluating When Shopify Fits Your Business Model",
  intro:
    "Shopify is exceptionally capable for fast-moving direct-to-consumer and retail brands, but choosing the right ecommerce architecture requires evaluating trade-offs around transaction fees, checkout customization, catalogue depth, and hosting autonomy.",
  points: [
    {
      title: "When Shopify + Standard Theme Is the Right Fit",
      description:
        "For standard direct-to-consumer (D2C) brands with uncomplicated catalogue logic, Shopify's native hosted checkout, hosted infrastructure, and Online Store 2.0 theme ecosystem offer rapid launch velocity and minimal ongoing technical overhead.",
    },
    {
      title: "When Custom Shopify Development Is Justified",
      description:
        "When your brand requires unique product configurators, tailored bundle experiences, bespoke collection filtering, ERP/CRM operational syncing, or Shopify Functions for discount and shipping logic beyond basic app settings.",
    },
    {
      title: "When an Alternative Ecommerce Stack Is Preferable",
      description:
        "If your business demands full self-hosted control, zero platform percentage fees on third-party gateways, complex multilingual/content-first publishing (such as WordPress/WooCommerce), or specialized headless commerce architectures (such as Next.js with Medusa).",
    },
  ],
  advisory: {
    title: "Need an objective platform architecture comparison?",
    description:
      "We build on Shopify, WooCommerce, and headless frameworks. If you are comparing platforms before committing to a build, explore our overarching ecommerce architecture framework.",
  },
};

// ============================================================
// WHEN SHOPIFY DEVELOPMENT WORK MAKES SENSE
// ============================================================

export const whenYouNeedShopifyDevelopment = {
  eyebrow: "WHEN TO BRING IN A SHOPIFY DEVELOPER",
  h2: "The Right Scope Depends on What Is Holding the Store Back",
  intro:
    "A new theme is not always the answer. The first step is to identify whether the main need is storefront presentation, catalogue structure, a business integration, migration work or a more fundamental technical limitation.",
  points: [
    {
      title: "You are launching a new Shopify store",
      description:
        "You need the store structure, theme, product templates, navigation and core commerce settings planned around the products and buying journey before launch.",
    },
    {
      title: "Your current theme limits the experience",
      description:
        "You want to change page layouts, product presentation or reusable sections beyond what the current theme configuration comfortably supports.",
    },
    {
      title: "Your catalogue or product options are growing",
      description:
        "Products, variants, collections and merchandising rules need a clearer structure so customers can browse and compare without unnecessary friction.",
    },
    {
      title: "Shopify needs to connect with other systems",
      description:
        "Order, inventory, fulfilment, CRM, customer support or marketing workflows need a dependable connection with the store.",
    },
    {
      title: "You are moving from another platform",
      description:
        "The migration needs a plan for product and customer data, URL mapping, redirects, integrations, analytics and launch checks—not only a visual rebuild.",
    },
    {
      title: "The store needs a measured improvement plan",
      description:
        "You want to address usability, product-page clarity, mobile experience or tracking issues in a prioritized way instead of changing the entire store without a clear diagnosis.",
    },
  ],
  notAlwaysNeeded: {
    title: "When a larger development project may not be necessary",
    description:
      "If the requirement can be handled safely through existing Shopify settings or a well-supported app, custom development may add avoidable cost and maintenance. We should establish the simplest suitable approach before defining the scope.",
  },
};

// ============================================================
// CAPABILITIES / SCOPE
// Reuses the same ScopeCard structure used by the Ecommerce data.
// ============================================================

export const shopifyScope: ScopeCard[] = [
  {
    title: "Shopify Store Setup & Development",
    description:
      "Set up the core storefront structure, navigation, collections, product templates and essential store pages around the business's catalogue and customer journey.",
  },
  {
    title: "Theme Customization",
    description:
      "Adapt an appropriate Shopify theme through layout, section, template and styling changes, keeping the implementation maintainable and aligned with the store's requirements.",
  },
  {
    title: "Custom Storefront Experiences",
    description:
      "Build more tailored storefront interactions when standard theme sections are not enough. The feasibility and approach depend on the requirements, theme architecture and relevant Shopify capabilities.",
  },
  {
    title: "Product & Collection Structure",
    description:
      "Plan product information, variants, collections, navigation and merchandising so shoppers can find and understand products as the catalogue evolves.",
  },
  {
    title: "Shopify Store Redesign",
    description:
      "Improve an existing store's structure and shopping experience while considering current URLs, product data, integrations, analytics and any functionality that must be preserved.",
  },
  {
    title: "Shopify Migration",
    description:
      "Plan a move to Shopify with data mapping, product and collection checks, URL redirects, integration review, analytics continuity and pre-launch validation.",
  },
  {
    title: "Shopify Integrations",
    description:
      "Connect Shopify with relevant business systems where supported, clarifying what data moves, which system owns it, how errors are handled and how the connection will be maintained.",
  },
  {
    title: "Storefront SEO & Measurement Readiness",
    description:
      "Implement relevant on-page SEO foundations and conversion tracking requirements as part of the build, while recognizing that rankings and commercial outcomes also depend on competition, content, offer and traffic quality.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS
// This section is intentionally decision-led rather than another
// list of services. Use a compatible existing section component.
// ============================================================


export const shopifyImplementationDecisions: ShopifyDecisionItem[] = [
  {
    title: "Theme Customization or Custom Development",
    context:
      "Shopify themes can cover many storefront requirements without extensive custom code.",
    consideration:
      "We identify where theme settings work and where custom development adds real value.",
  },
  {
    title: "Catalogue Structure and Shopping Experience",
    context:
      "Products, variants, collections and filters shape how customers browse your store.",
    consideration:
      "We plan catalogue data and navigation early to keep product discovery clear and consistent.",
  },
  {
    title: "Apps, Integrations and Checkout Limitations",
    context:
      "Apps can speed up implementation, while custom integrations can support specific workflows.",
    consideration:
      "We assess cost, compatibility, maintenance and Shopify plan restrictions before committing.",
  },
  {
    title: "Migration, Launch and Ongoing Maintenance",
    context:
      "A store launch may affect URLs, customer data, analytics and existing business workflows.",
    consideration:
      "We plan migration, redirects, tracking, testing and post-launch ownership before release.",
  },
];

// ============================================================
// SEO, MEASUREMENT & QUALITY ASSURANCE
// Actionable technical verification tasks carried out during delivery.
// ============================================================

export interface ShopifyQaItem {
  title: string;
  description: string;
}

export const shopifySeoAndQa = {
  eyebrow: "TECHNICAL VERIFICATION & QA",
  h2: "Actionable SEO, Measurement & Storefront Quality Checks",
  intro:
    "A reliable store build requires thorough pre-launch verification across discoverability, checkout mechanics, and data integrity. We test the implementation systematically rather than assuming code behaves across edge cases.",
  items: [
    {
      title: "Product & Collection SEO Architecture",
      description:
        "Validating clean collection hierarchies, canonical tag consistency across collection-aware product URLs, structured Product/Offer JSON-LD schema, and automated Open Graph tags for social channels.",
    },
    {
      title: "Migration Redirects & Indexation Safety",
      description:
        "Auditing legacy URLs, mapping 1:1 301 redirects in Shopify navigation, verifying robots.txt directives, checking XML sitemap endpoints, and confirming no broken links before traffic shifts.",
    },
    {
      title: "Responsive Storefront & Core Web Vitals",
      description:
        "Testing responsive breakpoints across mobile, tablet, and desktop viewports, reviewing image formats (WebP/AVIF), script execution delays, and layout shift stability (CLS/LCP).",
    },
    {
      title: "Cart & Checkout Journey Validation",
      description:
        "Verifying variant selections, inventory state changes, cart drawer interactions, discount application logic, shipping rate calculations, and live gateway test payments.",
    },
    {
      title: "Integration & Webhook Flow Diagnostics",
      description:
        "Ensuring order webhooks dispatch reliably to connected ERPs, 3PL fulfilment providers, and CRM pipelines, including error retry mechanisms and data field mappings.",
    },
    {
      title: "Analytics & Conversion Event Tracking",
      description:
        "Verifying GA4 ecommerce event triggers (view_item, add_to_cart, begin_checkout, purchase) via Google Tag Manager and validating server-side Meta Conversions API (CAPI) events.",
    },
  ],
  supportingNote:
    "We distinguish between verifiable technical implementation tasks and commercial outcomes. We guarantee rigorous code testing and data verification, while store conversion rates and search rankings also depend on market demand, product competitiveness, and advertising quality.",
};

// ============================================================
// SHOPIFY TECHNOLOGY & INTEGRATION ECOSYSTEM
// Keep this list aligned with technologies Bixeltek actually uses.
// These are categories to discuss, not a claim of official partnership.
// ============================================================

export const shopifyTechnologies: ShopifyTechnologyItem[] = [
  {
    name: "Shopify Themes",
    category: "Storefront",
    description:
      "Theme configuration, sections, templates and supported customization for the store's presentation and shopping journey.",
  },
  {
    name: "Shopify Admin & Store Data",
    category: "Commerce operations",
    description:
      "Product, collection, order and store data requirements that inform the implementation and any connected workflows.",
  },
  {
    name: "Apps & Third-Party Services",
    category: "Integrations",
    description:
      "Evaluate suitable apps and services against the business requirement, compatibility, data access, cost and ongoing ownership.",
  },
  {
    name: "APIs & Data Connections",
    category: "Integrations",
    description:
      "Where supported and appropriate, connect Shopify with external systems while defining data mapping, synchronization and error handling.",
  },
  {
    name: "Analytics & Conversion Tracking",
    category: "Measurement",
    description:
      "Plan measurement for important customer actions and verify events as part of quality assurance, subject to the store's consent and tracking setup.",
  },
  {
    name: "SEO Foundations",
    category: "Discoverability",
    description:
      "Review relevant page metadata, indexation, canonical handling, structured content and migration redirects as part of storefront implementation.",
  },
];

// ============================================================
// PROCESS
// ============================================================

export const shopifyProcess: ShopifyProcessStage[] = [
  {
    number: "01",
    title: "Understand the Store & Requirements",
    description:
      "Review the business model, catalogue, current store or platform, customer journey, integrations and the operational requirements the implementation must support.",
  },
  {
    number: "02",
    title: "Define the Implementation Approach",
    description:
      "Separate requirements that can be handled through Shopify settings or a suitable theme from those that need custom development, apps or integration work.",
  },
  {
    number: "03",
    title: "Structure the Storefront & Data",
    description:
      "Plan navigation, collections, product information, templates and important customer paths before building the experience.",
  },
  {
    number: "04",
    title: "Develop & Connect",
    description:
      "Implement the agreed theme and storefront changes, configure relevant features and build or connect integrations included in the project scope.",
  },
  {
    number: "05",
    title: "Test the Shopping Journey",
    description:
      "Check responsive layouts, representative products and variants, navigation, forms, cart and checkout behaviour, integrations, redirects and measurement where relevant.",
  },
  {
    number: "06",
    title: "Launch & Handover",
    description:
      "Coordinate launch checks, document important configuration and hand over the store with a clear understanding of what has been built and how it should be maintained.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const shopifyWhyChoose: ShopifyWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Development Decisions That Consider the Store Beyond the Screen",
  intro:
    "A Shopify storefront is connected to catalogue management, fulfilment, customer communication, acquisition and measurement. Development decisions should account for those relationships instead of treating the website as an isolated design project.",
  points: [
    {
      title: "We Start With the Business Requirement",
      description:
        "We clarify what the store needs to help customers do and what the business needs to manage before choosing a technical approach.",
    },
    {
      title: "We Avoid Custom Code Where It Adds No Value",
      description:
        "Themes, settings and suitable apps can be the right solution for many requirements. Customization should solve a real limitation, not simply make the build more complicated.",
    },
    {
      title: "We Consider Catalogue and Operations",
      description:
        "Product structure, variants, inventory, fulfilment and connected systems influence how the store should be planned and tested.",
    },
    {
      title: "We Treat Migration as a Continuity Project",
      description:
        "When moving an existing store, the work includes data checks, URL redirects, integration validation and measurement—not only recreating the visible pages.",
    },
    {
      title: "We Connect Development With Growth Needs",
      description:
        "Storefront SEO, analytics, campaign destinations and conversion experience can be considered within the relevant project scope and linked to deeper specialist work when needed.",
    },
    {
      title: "We Plan for Handover and Maintenance",
      description:
        "The implementation should be understandable and maintainable after launch, with clear ownership of configuration, integrations and future changes.",
    },
  ],
  closingCopy:
    "The right Shopify solution is not necessarily the most customized one. It is the approach that meets the real requirement without adding avoidable complexity.",
  ctaText: "Discuss Your Shopify Project",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// ============================================================

export const shopifyInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Storefront Complexity",
    description:
      "A theme configuration project differs from a larger redesign with custom sections, bespoke interactions or substantial template changes.",
  },
  {
    title: "Catalogue Size & Structure",
    description:
      "Product count alone does not define complexity. Variants, product relationships, collections, filters and data quality also affect planning and implementation.",
  },
  {
    title: "Migration Requirements",
    description:
      "Moving from another platform may require data mapping, URL redirects, content transfer, integration changes, validation and coordination around launch.",
  },
  {
    title: "Integrations & Business Workflows",
    description:
      "The number of connected systems, data direction, synchronization rules, error handling and external API limitations affect the effort required.",
  },
  {
    title: "Custom Functionality",
    description:
      "Requirements that go beyond supported settings, theme features or available apps may need additional investigation and development.",
  },
  {
    title: "SEO, Analytics & Quality Assurance",
    description:
      "The scope changes when the project includes redirect planning, tracking validation, structured content checks, broader device testing or more complex launch requirements.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing improvements, app updates, issue resolution and new feature work are different from a one-time store build and should be scoped clearly.",
  },
];

// ============================================================
// RELATED SERVICES
// Confirm each destination exists in the repository before release.
// ============================================================

export const shopifyRelatedServices: RelatedServiceCard[] = [
  {
    title: "Ecommerce Development",
    description:
      "Explore the broader ecommerce development approach if you are still comparing platforms, architecture, operational needs or different ways to build your store.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "WooCommerce Development",
    description:
      "If your business is evaluating a WordPress-based commerce setup, compare the implementation and operational considerations before committing to a platform.",
    linkText: "Explore WooCommerce Development",
    destination: "/services/ecommerce-development/woocommerce",
  },
  {
    title: "Web Design & Development",
    description:
      "For requirements that extend beyond the Shopify storefront or involve a broader website experience, explore Bixeltek's wider web development capability.",
    linkText: "Explore Web Design Services",
    destination: "/services/web-design",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "If a store already receives relevant traffic but shoppers struggle to progress, CRO can help diagnose product discovery, page friction and purchase-journey issues.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
];

// ============================================================
// FAQ
// ============================================================

export const shopifyFaqs: FAQItem[] = [
  {
    question: "What does Shopify development include?",
    answer:
      "Depending on the project, Shopify development can include store setup, theme customization, storefront templates, product and collection structure, integrations, migration work, technical SEO foundations and launch testing. The exact scope should follow the store's requirements rather than assume every project needs every service.",
  },
  {
    question: "Can you customize my existing Shopify theme?",
    answer:
      "Yes, theme customization can be scoped around the layouts, sections, templates and storefront behaviour the store needs. We first review the current theme and requirements to determine what can be handled cleanly within it and where custom development may be needed.",
  },
  {
    question: "Do I need a custom Shopify store or can I use a theme?",
    answer:
      "Many stores can start with a suitable theme and focused customization. A more tailored implementation may be justified when important customer journeys, design requirements or technical needs cannot be met well through the theme and supported configuration. The decision should be based on requirements, maintenance and budget.",
  },
  {
    question: "Can Shopify connect with our inventory, CRM or fulfilment systems?",
    answer:
      "Potentially, depending on the systems involved, available integrations, APIs, permissions and the required data flow. Before implementation, we define which system owns each piece of data, what needs to synchronize and how failures or mismatches should be handled.",
  },
  {
    question: "Can you migrate our existing ecommerce store to Shopify?",
    answer:
      "A migration can include product and collection data, relevant customer or order data where supported, content, URL mapping, redirects, integrations and analytics checks. The exact data that can be moved depends on the source platform, data quality, permissions and Shopify's current capabilities.",
  },
  {
    question: "Will Shopify development automatically improve SEO?",
    answer:
      "No platform or development project can guarantee rankings. A well-planned implementation can support technical foundations such as page structure, metadata, crawlability checks and migration redirects, but organic performance also depends on content quality, search intent, competition, links and the overall offer.",
  },
  {
    question: "Can you customize the Shopify checkout?",
    answer:
      "Checkout customization depends on the specific requirement and Shopify's current platform capabilities, plan entitlements and available extension points. We would verify those constraints before promising a particular checkout change.",
  },
  {
    question: "How long does a Shopify development project take?",
    answer:
      "The timeline depends on the number of templates, catalogue complexity, custom functionality, migration needs, integrations, content readiness and feedback cycles. A focused theme update is different from a full store build or migration, so timing should be estimated after reviewing the scope.",
  },
  {
    question: "What affects the cost of Shopify development?",
    answer:
      "Cost is influenced by storefront complexity, theme changes, product data, integrations, migration work, custom functionality, SEO and tracking requirements, testing and post-launch support. A clear scope helps separate essential launch requirements from later improvements.",
  },
  {
    question: "Do you provide support after the Shopify store launches?",
    answer:
      "Post-launch support and ongoing improvements can be included when agreed in the project scope. The handover should clarify what is covered, who manages store configuration and integrations, and how future fixes or feature requests will be handled.",
  },
  {
    question: "Is Shopify suitable for every ecommerce business?",
    answer:
      "Not necessarily. Suitability depends on the business model, catalogue, operational workflows, integration requirements, customization needs and budget. If your requirements are still being evaluated, the broader ecommerce development page is a useful starting point for comparing approaches.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const shopifyFinalCta: ShopifyFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLANNING A SHOPIFY STORE OR IMPROVEMENT?",
  h2: "Let's Scope the Shopify Work Your Business Actually Needs",
  description:
    "Tell us whether you are launching a store, improving an existing theme, connecting business systems or planning a migration. We can review the requirement and identify the right next step before the scope is locked in.",
  primaryCta: {
    label: "Discuss Your Shopify Project",
    href: "#contact",
  },
  supportingCopy:
    "We will start with your catalogue, current setup, operational requirements and priorities—not assume that every store needs the same build.",
};



export const shopifyUseCases: EcommerceUseCaseCard[] = [
  {
    title: "New Direct-to-Consumer Brands",
    description:
      "Launch a branded storefront with product pages, collections, payments and order management using Shopify.",
    examples: [
      "New consumer brands",
      "Fashion and lifestyle stores",
      "Beauty and personal care",
      "Single-brand online stores",
    ],
  },
  {
    title: "Growing Product Catalogues",
    description:
      "Structure larger product ranges so customers can navigate collections, compare variants and find the right products.",
    examples: [
      "Variant-rich product ranges",
      "Collection-based shopping",
      "Product bundles",
      "Seasonal catalogues",
    ],
  },
  {
    title: "Stores Expanding Their Operations",
    description:
      "Connect Shopify with the systems that manage inventory, fulfilment, customer communication and marketing.",
    examples: [
      "Inventory synchronization",
      "Shipping and fulfilment workflows",
      "CRM connections",
      "Marketing and analytics integrations",
    ],
  },
  {
    title: "Existing Stores Needing Improvement",
    description:
      "Improve an existing Shopify store's design, usability and integrations without automatically rebuilding everything.",
    examples: [
      "Theme customization",
      "Product page improvements",
      "App and integration cleanup",
      "Store performance improvements",
    ],
  },
  {
    title: "Businesses Migrating to Shopify",
    description:
      "Move an existing ecommerce operation to Shopify while planning product data, customer records, URLs and essential workflows.",
    examples: [
      "Migration from WooCommerce",
      "Product and collection migration",
      "URL redirects and SEO preservation",
      "Order and customer data planning",
    ],
  },
  {
    title: "Stores Requiring Custom Functionality",
    description:
      "Extend Shopify beyond standard theme settings with tailored storefront experiences and integrations where the platform supports them.",
    examples: [
      "Custom theme sections",
      "Advanced product experiences",
      "Third-party API integrations",
      "Custom business workflows",
    ],
  },
];


export const shopifySystems: EcommerceSystemCard[] = [
  {
    title: "Products, Orders and Inventory",
    description:
      "Structure product information and connect stock and order workflows where the business needs information shared across systems.",
    examples: [
      "Products and variants",
      "Inventory synchronization",
      "Order management",
      "Multi-location stock workflows",
    ],
  },
  {
    title: "Payments, Shipping and Fulfilment",
    description:
      "Configure supported commerce services and connect fulfilment processes to the store's order workflow.",
    examples: [
      "Payment providers",
      "Shipping integrations",
      "Fulfilment services",
      "Order status updates",
    ],
  },
  {
    title: "Marketing and Measurement",
    description:
      "Connect customer journeys to the measurement tools needed to understand traffic, product interest and purchase activity.",
    examples: [
      "Analytics",
      "Advertising conversion tracking",
      "Email marketing",
      "Customer journey events",
    ],
  },
  {
    title: "CRM and Business Applications",
    description:
      "Connect Shopify with external systems when customer, order or operational data needs to move beyond the storefront.",
    examples: [
      "CRM systems",
      "Customer support tools",
      "Accounting systems",
      "Custom APIs and webhooks",
    ],
  },
];


export const shopifyPostLaunch: EcommercePostLaunchData = {
  eyebrow: "BEYOND THE STORE LAUNCH",
  h2: "Keep Your Shopify Store Reliable as Your Business Changes",
  intro:
    "Products, promotions, apps and customer expectations change after launch. Ongoing attention helps keep the shopping experience and connected operations aligned.",
  points: [
    {
      title: "Theme and Storefront Improvements",
      description:
        "Refine product pages, navigation and reusable sections as customer needs and merchandising priorities evolve.",
    },
    {
      title: "App and Integration Compatibility",
      description:
        "Review app changes, integration failures and overlapping functionality before they disrupt store workflows.",
    },
    {
      title: "Conversion and Analytics Review",
      description:
        "Check important shopping journeys and tracking events to identify friction and understand performance.",
    },
    {
      title: "Catalogue and Campaign Updates",
      description:
        "Maintain product information, collections, landing pages and promotional content as the range changes.",
    },
    {
      title: "Operational Monitoring",
      description:
        "Check order, inventory and fulfilment handoffs so problems can be identified before they affect more customers.",
    },
    {
      title: "Planned Improvements",
      description:
        "Prioritize future integrations and store enhancements based on business needs rather than adding features without a clear purpose.",
    },
  ],
};


export const shopifyPlatformComparison: EcommercePlatformComparisonData = {
  eyebrow: "CHOOSING YOUR COMMERCE ARCHITECTURE",
  h2: "Shopify or Custom-Coded Ecommerce: Which Fits Your Business?",
  intro:
    "Shopify provides a managed commerce foundation with an established app ecosystem. Custom-coded ecommerce offers more control over architecture and business-specific workflows, but generally requires greater responsibility for development and ongoing maintenance.",
  platformLabel: "Shopify",
  customCodedLabel: "Custom-Coded Ecommerce",
  rows: [
    {
      factor: "Core commerce foundation",
      platform:
        "Hosted commerce platform with built-in store management capabilities.",
      customCoded:
        "Commerce functionality is designed and implemented around the chosen architecture.",
    },
    {
      factor: "Time to launch",
      platform:
        "Often a practical route when the business fits Shopify's existing capabilities and customization options.",
      customCoded:
        "Can require more discovery and engineering before core commerce workflows are ready.",
    },
    {
      factor: "Customization",
      platform:
        "Themes, apps and supported development options provide flexibility within platform constraints.",
      customCoded:
        "Offers greater control over bespoke storefronts, workflows and system architecture.",
    },
    {
      factor: "Integrations",
      platform:
        "Can use available apps, APIs and custom integrations, subject to compatibility and platform limitations.",
      customCoded:
        "Integrations can be designed around business requirements, with implementation and maintenance responsibility remaining part of the project.",
    },
    {
      factor: "Maintenance",
      platform:
        "Shopify manages the hosted platform, while the store still needs theme, app, integration and content maintenance.",
      customCoded:
        "The technical team must manage the application's infrastructure, dependencies, security and ongoing development.",
    },
    {
      factor: "Cost structure",
      platform:
        "Typically includes platform, subscription, app and development costs, depending on the setup.",
      customCoded:
        "Typically involves more direct responsibility for engineering, infrastructure and continuing technical support.",
    },
  ],
  platformBestFor:
    "Businesses that want a managed commerce foundation and whose requirements can be met through Shopify's features, apps and supported customization.",
  customCodedBestFor:
    "Businesses whose differentiating workflows, product experience or integration requirements justify greater architectural control and long-term engineering ownership.",
  closingNote:
    "The right choice depends on your requirements, available resources and total cost of ownership—not just the initial development budget.",
};
