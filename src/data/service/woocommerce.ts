
import {
  Layers,
  Code2,
  Database,
  PlugZap,
  ShieldCheck,
  Gauge,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

import type {
  EcommerceMetadata,
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  ConnectedSystemCard,
  ProcessStage,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

/* =========================================================
   PAGE-SPECIFIC TYPES
   Reuse existing shared types where possible.
   ========================================================= */

export interface WooCommerceUseCaseCard {
  title: string;
  description: string;
  examples: string[];
}

export interface WooCommerceDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface WooCommerceComparisonRow {
  factor: string;
  woocommerce: string;
  customCoded: string;
}

export interface WooCommerceComparisonData {
  eyebrow: string;
  h2: string;
  intro: string;
  woocommerceLabel: string;
  customCodedLabel: string;
  rows: WooCommerceComparisonRow[];
  woocommerceBestFor: string;
  customCodedBestFor: string;
  closingNote: string;
}

export interface WooCommercePostLaunchData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: {
    title: string;
    description: string;
  }[];
}

export interface WooCommerceWhyChoosePoint {
  title: string;
  description: string;
}

export interface WooCommerceFinalCTAData {
  eyebrow: string;
  h2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface WooCommerceTechnologyItem {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

/* =========================================================
   1. METADATA
   ========================================================= */

export const woocommerceMetadata: EcommerceMetadata = {
  title: "WooCommerce Development Services | Bixeltek",
  description:
    "Build a WooCommerce store around your products, content and business workflows. Bixeltek develops and customizes WordPress ecommerce websites, integrations and store experiences.",
  url: "https://bixeltek.com/services/ecommerce-development/woocommerce",
  canonical: "https://bixeltek.com/services/ecommerce-development/woocommerce",
  openGraph: {
    title: "WooCommerce Development Built Around Your Business",
    description:
      "WooCommerce development, WordPress store customization, integrations and ecommerce improvements tailored to your business requirements.",
  },
};

/* =========================================================
   2. BREADCRUMBS
   ========================================================= */

export const woocommerceBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Ecommerce Website Development",
    href: "/services/ecommerce-development",
  },
  {
    label: "WooCommerce Development",
    href: "/services/ecommerce-development/woocommerce",
  },
];

/* =========================================================
   3. JUMP LINKS
   Keep each destination aligned with the rendered section ID.
   ========================================================= */

export const woocommerceJumpLinks: JumpLinkItem[] = [
  {
    label: "Overview",
    href: "#woocommerce-overview",
  },
  {
    label: "Challenges",
    href: "#woocommerce-challenges",
  },
  {
    label: "What We Build",
    href: "#woocommerce-capabilities",
  },
  {
    label: "Use Cases",
    href: "#woocommerce-use-cases",
  },
  {
    label: "Implementation Decisions",
    href: "#woocommerce-decisions",
  },
  {
    label: "Integrations",
    href: "#woocommerce-integrations",
  },
  {
    label: "Platform Comparison",
    href: "#woocommerce-comparison",
  },
  {
    label: "Our Process",
    href: "#woocommerce-process",
  },
  {
    label: "Investment",
    href: "#woocommerce-investment",
  },
  {
    label: "Beyond Launch",
    href: "#woocommerce-post-launch",
  },
  {
    label: "FAQs",
    href: "#woocommerce-faqs",
  },
];

/* =========================================================
   4. HERO
   ========================================================= */

export const woocommerceHero = {
  eyebrow: "WOOCOMMERCE DEVELOPMENT & WORDPRESS STORES",
  h1: "WooCommerce Stores Built Around Your Products, Content and Operations",
  p1:
    "Your online store needs to bring product discovery, content, checkout and order management together. WooCommerce gives businesses a flexible commerce foundation within WordPress, but the implementation still needs to fit how the business works.",
  p2:
    "Bixeltek develops and improves WooCommerce stores through storefront customization, product and catalogue setup, plugin configuration, integrations and tailored WordPress development.",
  primaryButtonText: "Talk to a WooCommerce Expert",
  primaryButtonHref: "#contact",
  secondaryLinkText: "Explore Ecommerce Development",
  secondaryLinkHref: "/services/ecommerce-development",
  microcopy:
    "Launching a new store, adding ecommerce to WordPress or improving an existing WooCommerce setup? Start with your requirements and current technical setup.",
};

/* =========================================================
   5. OVERVIEW
   ========================================================= */

export const woocommerceOverview = {
  eyebrow: "A FLEXIBLE WORDPRESS COMMERCE FOUNDATION",
  h2: "Make WordPress and WooCommerce Work as One Store Experience",
  intro:
    "WooCommerce brings ecommerce functionality into WordPress, making it useful for businesses that need product management alongside content, landing pages and a flexible website experience.",
  body:
    "The result depends on more than installing a theme and adding plugins. Product structure, extension choices, hosting, performance, checkout, integrations and maintenance all influence how reliably the store works.",
  closingCopy:
    "We plan the implementation around the store's requirements, using existing WooCommerce capabilities where they fit and custom development where the business needs something more specific.",
};

/* =========================================================
   6. COMMON WOOCOMMERCE CHALLENGES
   ========================================================= */

export const woocommerceProblems: ProblemCard[] = [
  {
    title: "Too Many Plugins Are Doing Too Much",
    description:
      "Plugins can add useful functionality, but overlapping features and incompatible extensions can make the store harder to maintain. Each addition should have a clear purpose, a compatible implementation and an ownership plan.",
  },
  {
    title: "Product and Content Structures Are Difficult to Manage",
    description:
      "Products, variations, categories, attributes and editorial content need a consistent structure. Without it, customers may struggle to find products and the internal team may spend unnecessary time maintaining the catalogue.",
  },
  {
    title: "Store Performance Changes as the Site Grows",
    description:
      "Hosting, theme code, database queries, images, caching and plugin behavior all influence performance. Slow pages should be investigated at the implementation level rather than addressed with another plugin by default.",
  },
  {
    title: "Updates Introduce Compatibility Risks",
    description:
      "WordPress core, WooCommerce, themes, extensions and custom code need to work together. Updates should be tested against important store journeys so that changes do not unexpectedly affect product pages, cart behavior or checkout.",
  },
];

/* =========================================================
   7. WHEN WOOCOMMERCE DEVELOPMENT MAKES SENSE
   ========================================================= */

export const whenYouNeedWooCommerceDevelopment = {
  eyebrow: "WHEN TO BRING IN A WOOCOMMERCE DEVELOPER",
  h2: "Start With the Store's Requirements, Not Another Plugin",
  intro:
    "The right development scope depends on whether the business needs a new store, better content and catalogue structure, custom functionality, improved performance or more reliable connections to existing systems.",
  points: [
    {
      title: "You are launching a WordPress store",
      description:
        "Plan the product structure, theme, navigation, payment setup and order workflow before the store becomes difficult to change.",
    },
    {
      title: "Your existing WordPress site needs ecommerce",
      description:
        "Add product and purchasing functionality while considering how the store should fit with existing pages, content and customer journeys.",
    },
    {
      title: "Your store relies on too many extensions",
      description:
        "Review plugin overlap, compatibility and maintenance needs to identify where configuration, replacement or custom development is more appropriate.",
    },
    {
      title: "You need store-specific functionality",
      description:
        "Extend product, pricing, booking, membership or order workflows when standard settings do not fully meet the requirement.",
    },
    {
      title: "Your store needs better performance or reliability",
      description:
        "Investigate hosting, theme code, database behavior, caching and extension conflicts before deciding what needs to change.",
    },
    {
      title: "Your store needs to connect with other systems",
      description:
        "Plan integrations for inventory, fulfilment, accounting, CRM, marketing or other business applications where data needs to move reliably.",
    },
  ],
};

/* =========================================================
   8. WHAT WE BUILD
   ========================================================= */

export const woocommerceCapabilities: ScopeCard[] = [
  {
    title: "WooCommerce Store Development",
    description:
      "Build a store with a considered product structure, navigation, page templates and purchasing journey aligned with the business and its customers.",
  },
  {
    title: "WordPress Theme Customization",
    description:
      "Adapt an appropriate theme or develop tailored templates and reusable sections to support the brand and the way customers browse products.",
  },
  {
    title: "Product and Catalogue Architecture",
    description:
      "Organize products, variations, attributes, categories and product information so the catalogue remains understandable and manageable as it grows.",
  },
  {
    title: "Plugin Configuration and Custom Features",
    description:
      "Evaluate extensions for specific requirements and develop custom functionality when available plugins do not provide a suitable, maintainable solution.",
  },
  {
    title: "Payments, Shipping and Order Workflows",
    description:
      "Configure supported payment and delivery services and improve the flow from cart and checkout through order processing.",
  },
  {
    title: "WooCommerce Integrations",
    description:
      "Connect the store with selected CRM, inventory, accounting, marketing, fulfilment or internal systems through suitable extensions and APIs.",
  },
  {
    title: "Performance and Technical Improvements",
    description:
      "Investigate loading speed, caching, theme behavior, database workload and extension conflicts to improve the store's technical foundations.",
  },
  {
    title: "Store Migration and Modernization",
    description:
      "Plan product and content migration, URL mapping, redirects and testing when moving to WooCommerce or improving an existing implementation.",
  },
];

/* =========================================================
   9. WOOCOMMERCE USE CASES
   ========================================================= */

export const woocommerceUseCases: WooCommerceUseCaseCard[] = [
  {
    title: "Content-Led Online Stores",
    description:
      "Combine editorial content, product pages and landing pages when content plays an important role in how customers discover and evaluate products.",
    examples: [
      "Content-rich brand websites",
      "Product guides and buying resources",
      "Editorial commerce",
      "Campaign landing pages",
    ],
  },
  {
    title: "Existing WordPress Websites Adding Ecommerce",
    description:
      "Introduce product and purchasing functionality into an existing WordPress site while planning how content and commerce should work together.",
    examples: [
      "Established business websites",
      "Content websites selling products",
      "Brand websites with growing catalogues",
      "Sites expanding into online sales",
    ],
  },
  {
    title: "Stores With Specific Product Requirements",
    description:
      "Configure or extend product experiences where customers need additional options or the business needs more specialized purchasing rules.",
    examples: [
      "Variable products",
      "Product add-ons",
      "Bookings and appointments",
      "Memberships and subscriptions",
    ],
  },
  {
    title: "Stores With Connected Operational Workflows",
    description:
      "Connect the store with relevant business systems when product availability, orders, customer information or fulfilment must stay aligned.",
    examples: [
      "Inventory synchronization",
      "Shipping and fulfilment",
      "CRM and accounting connections",
      "Custom API integrations",
    ],
  },
  {
    title: "B2B & Wholesale Ordering Portals",
    description:
      "Implement tiered wholesale pricing, dynamic tax exemptions, bulk purchase tables and gated customer registration within WordPress.",
    examples: [
      "Customer-specific price tiers",
      "Bulk ordering matrix tables",
      "Tax exemption validation",
      "Trade account approval workflows",
    ],
  },
  {
    title: "Multi-Currency & Global Expansion",
    description:
      "Scale across international markets with localized currencies, geo-targeted payment gateways, multilingual support and shipping rules.",
    examples: [
      "Multi-currency checkout",
      "Multilingual product catalogues",
      "Country-specific payment gateways",
      "Regional tax and customs rules",
    ],
  },
];

/* =========================================================
   10. IMPLEMENTATION DECISIONS
   ========================================================= */

export const woocommerceImplementationDecisions: WooCommerceDecisionItem[] =
  [
    {
      title: "Theme Customization vs Bespoke Templates",
      context:
        "Standard themes accelerate launch but can introduce layout rigidity.",
      consideration:
        "We build bespoke templates only where brand experience, speed, and conversion workflows demand precision.",
    },
    {
      title: "Plugin Selection vs Custom Engineering",
      context:
        "Excessive plugins cause code bloat, slow queries, and update conflicts.",
      consideration:
        "We audit plugin utility and engineer custom WordPress hooks whenever a plugin adds unnecessary overhead.",
    },
    {
      title: "Hosting, Caching & Database Performance",
      context:
        "Dynamic carts and checkouts bypass normal page caching and strain servers.",
      consideration:
        "We implement Redis object caching and database query optimization to keep high-traffic checkout sub-second.",
    },
    {
      title: "Catalogue Architecture & System Sync",
      context:
        "Complex variations, ERPs, and inventory feeds require reliable data flow.",
      consideration:
        "We architect clean taxonomy and automated REST API webhooks so stock, orders, and payments sync seamlessly.",
    },
  ];

/* =========================================================
   11. USEFUL SYSTEMS & INTEGRATIONS
   ========================================================= */

export const woocommerceSystems: ConnectedSystemCard[] = [
  {
    title: "WordPress Content and Product Data",
    description:
      "Coordinate pages, posts, product information, categories and attributes so content and commerce remain manageable together.",
  },
  {
    title: "Payments, Shipping and Orders",
    description:
      "Configure compatible payment and shipping options and connect the store to relevant order processing and fulfilment workflows.",
  },
  {
    title: "Inventory and Business Operations",
    description:
      "Connect inventory, accounting or internal systems when product availability, orders or business records need to remain consistent.",
  },
  {
    title: "CRM and Marketing",
    description:
      "Connect customer and purchase data with suitable CRM, email marketing, analytics and advertising measurement tools.",
  },
  {
    title: "APIs and Custom Integrations",
    description:
      "Assess custom integrations when standard extensions cannot support the required data exchange or business rules.",
  },
];

/* =========================================================
   12. WOOCOMMERCE VS CUSTOM-CODED ECOMMERCE
   ========================================================= */

export const woocommercePlatformComparison: WooCommerceComparisonData = {
  eyebrow: "CHOOSING YOUR COMMERCE ARCHITECTURE",
  h2: "WooCommerce or Custom-Coded Ecommerce: Which Fits Your Business?",
  intro:
    "WooCommerce combines WordPress with an extensible commerce system. Custom-coded ecommerce provides more direct control over application architecture, but also brings greater responsibility for engineering and long-term maintenance. The right choice depends on the requirements and the team that will operate the store.",
  woocommerceLabel: "WooCommerce",
  customCodedLabel: "Custom-Coded Ecommerce",
  rows: [
    {
      factor: "Core architecture",
      woocommerce:
        "Built on WordPress and WooCommerce, extended through themes, plugins and custom development.",
      customCoded:
        "Designed around a selected application architecture and the store's specific commerce requirements.",
    },
    {
      factor: "Content management",
      woocommerce:
        "WordPress provides an established interface for publishing pages, posts and other supported content.",
      customCoded:
        "Content management can be integrated or developed to suit the business's editorial workflow.",
    },
    {
      factor: "Customization",
      woocommerce:
        "Themes, extensions and custom code support a wide range of requirements, subject to compatibility and platform architecture.",
      customCoded:
        "Provides greater control over data models, storefront behavior and specialized business workflows.",
    },
    {
      factor: "Performance and infrastructure",
      woocommerce:
        "Performance depends on hosting, theme implementation, extension choices, caching and database workload.",
      customCoded:
        "Infrastructure and performance can be tailored to the application, but require engineering and operational oversight.",
    },
    {
      factor: "Integrations",
      woocommerce:
        "Can use compatible extensions, APIs and custom integrations, with attention to plugin compatibility and updates.",
      customCoded:
        "Integrations can be designed around specific business rules, with responsibility for development and maintenance.",
    },
    {
      factor: "Maintenance",
      woocommerce:
        "WordPress core, WooCommerce, themes, plugins, backups and security need coordinated maintenance.",
      customCoded:
        "Application dependencies, infrastructure, security, releases and technical support need an ongoing maintenance plan.",
    },
    {
      factor: "Cost structure",
      woocommerce:
        "Costs may include hosting, paid extensions, development, maintenance and compatibility work.",
      customCoded:
        "Costs depend on engineering scope, infrastructure, integrations and long-term development needs.",
    },
  ],
  woocommerceBestFor:
    "Businesses that value WordPress content management, benefit from the WooCommerce extension ecosystem and can maintain a well-managed hosting and plugin environment.",
  customCodedBestFor:
    "Businesses whose commerce workflows or application requirements justify deeper architectural control and the additional engineering responsibility.",
  closingNote:
    "WooCommerce is not automatically cheaper, and custom-coded ecommerce is not automatically more scalable. Compare the implementation, operational responsibilities and total cost of ownership against your actual requirements.",
};

/* =========================================================
   13. TECHNOLOGY ECOSYSTEM
   Use with the shared TechnologiesSection where compatible.
   ========================================================= */

export const woocommerceTechnologies: WooCommerceTechnologyItem[] = [
  {
    name: "WordPress",
    category: "Content Management",
    description:
      "Manage pages, publishing and supported content alongside the ecommerce experience.",
    icon: Layers,
    href: "https://wordpress.org/",
  },
  {
    name: "WooCommerce",
    category: "Commerce Platform",
    description:
      "Manage products, variations, carts, orders and core store workflows within WordPress.",
    icon: ShoppingCart,
    href: "https://woocommerce.com/",
  },
  {
    name: "Custom WordPress Development",
    category: "Storefront Development",
    description:
      "Develop tailored templates, reusable sections and functionality for specific business requirements.",
    icon: Code2,
    href: "https://developer.wordpress.org/",
  },
  {
    name: "WooCommerce REST API",
    category: "Integrations",
    description:
      "Connect supported store data and workflows with external applications through APIs.",
    icon: PlugZap,
    href: "https://woocommerce.github.io/woocommerce-rest-api-docs/",
  },
  {
    name: "Performance Optimization",
    category: "Performance",
    description:
      "Assess hosting, caching, images, database behavior and extension overhead.",
    icon: Gauge,
    href: "https://developer.wordpress.org/",
  },
  {
    name: "Security and Maintenance",
    category: "Store Operations",
    description:
      "Plan updates, backups, access controls and recovery practices for a maintainable store.",
    icon: ShieldCheck,
    href: "https://wordpress.org/about/security/",
  },
  {
    name: "Analytics and Conversion Tracking",
    category: "Measurement",
    description:
      "Measure important shopping and checkout events using appropriate analytics integrations.",
    icon: BarChart3,
    href: "https://woocommerce.com/",
  },
  {
    name: "Database and Custom Integrations",
    category: "Technical Architecture",
    description:
      "Evaluate data structures and integration approaches around the store's operational needs.",
    icon: Database,
    href: "https://developer.wordpress.org/",
  },
];

/* =========================================================
   14. DEVELOPMENT PROCESS
   ========================================================= */

export const woocommerceProcess = {
  eyebrow: "HOW WE WORK",
  h2: "Plan the Store Before Adding More Moving Parts",
  stages: [
    {
      stageNumber: "01",
      title: "Discovery and Requirements",
      description:
        "Understand the products, customers, existing WordPress setup, operational workflows and business priorities.",
    },
    {
      stageNumber: "02",
      title: "Architecture and Scope",
      description:
        "Define the store structure, theme approach, required extensions, custom functionality and integrations.",
    },
    {
      stageNumber: "03",
      title: "Store Experience Design",
      description:
        "Plan navigation, product layouts, content templates and the key journeys customers use to purchase.",
    },
    {
      stageNumber: "04",
      title: "Development and Configuration",
      description:
        "Build the agreed experience, configure WooCommerce and implement the required integrations.",
    },
    {
      stageNumber: "05",
      title: "Testing and Quality Assurance",
      description:
        "Test product variations, cart, checkout, payments, mobile usability, integrations and critical operational workflows.",
    },
    {
      stageNumber: "06",
      title: "Launch and Handover",
      description:
        "Prepare deployment, verify redirects and tracking where applicable, document key workflows and agree on ongoing ownership.",
    },
  ] as ProcessStage[],
};

/* =========================================================
   15. INVESTMENT FACTORS
   ========================================================= */

export const woocommerceInvestment = {
  eyebrow: "PROJECT SCOPE & COST",
  h2: "What Determines the Cost of WooCommerce Development?",
  intro:
    "The cost depends on the store's functionality, existing setup and ongoing operating requirements—not just the number of pages.",
  cards: [
    {
      title: "Store Design and Customization",
      description:
        "An existing theme with configuration changes differs from a custom storefront, specialized product templates or a larger redesign.",
    },
    {
      title: "Catalogue Complexity",
      description:
        "Product counts, variations, attributes, custom fields, data cleanup and migration requirements influence implementation effort.",
    },
    {
      title: "Plugins and Licensing",
      description:
        "Paid extensions, overlapping functionality and ongoing license fees can affect both the initial scope and recurring cost.",
    },
    {
      title: "Custom Features",
      description:
        "Special pricing, product options, memberships, booking flows or business-specific rules may require additional development.",
    },
    {
      title: "Integrations and Data Migration",
      description:
        "Connecting CRM, inventory, accounting, shipping or external APIs adds work based on data mapping and workflow complexity.",
    },
    {
      title: "Hosting, Performance and Maintenance",
      description:
        "Infrastructure, backups, security, monitoring, updates and post-launch support should be considered alongside the build.",
    },
  ] as InvestmentFactorCard[],
  closingNote:
    "We scope the project around the requirements and current technical setup so that the proposed work reflects the store you actually need.",
};

/* =========================================================
   16. WHY BIXELTEK
   ========================================================= */

export const woocommerceWhyChoose = {
  eyebrow: "WHY BIXELTEK",
  h2: "WooCommerce Development That Considers the Whole Store",
  intro:
    "A successful WooCommerce implementation needs to balance the storefront, WordPress content, commerce workflows and the technical setup behind them.",
  points: [
    {
      title: "Requirements Before Plugins",
      description:
        "We identify the actual requirement before deciding whether to configure an extension, replace it or build custom functionality.",
    },
    {
      title: "Content and Commerce Together",
      description:
        "We consider how WordPress content and WooCommerce product journeys should support each other.",
    },
    {
      title: "Practical Technical Decisions",
      description:
        "We weigh compatibility, performance, maintenance and operational needs rather than adding complexity without a reason.",
    },
    {
      title: "Integrations With a Clear Purpose",
      description:
        "We plan how data moves between the store and other systems, including ownership and failure handling.",
    },
    {
      title: "Launch With Testing",
      description:
        "We validate important product, cart, checkout and operational workflows before release.",
    },
    {
      title: "A Plan Beyond Launch",
      description:
        "We account for updates, security, performance and future improvements as part of the store's ongoing life.",
    },
  ] as WooCommerceWhyChoosePoint[],
  closingCopy:
    "Build a stable, high-converting WooCommerce storefront tailored to your business model with zero plugin bloat.",
};

/* =========================================================
   17. POST-LAUNCH
   ========================================================= */

export const woocommercePostLaunch: WooCommercePostLaunchData = {
  eyebrow: "AFTER YOUR STORE GOES LIVE",
  h2: "Keep Your WooCommerce Store Secure, Compatible and Manageable",
  intro:
    "A WooCommerce store depends on WordPress, WooCommerce, its theme, extensions, hosting and custom code working together. Ongoing maintenance helps keep those parts aligned as the store evolves.",
  points: [
    {
      title: "WordPress and WooCommerce Updates",
      description:
        "Plan and test core platform updates so essential store functionality continues to work as expected.",
    },
    {
      title: "Plugin and Theme Compatibility",
      description:
        "Check updates against active extensions and custom code to reduce the risk of conflicts or broken customer journeys.",
    },
    {
      title: "Performance and Hosting",
      description:
        "Review caching, database workload, page speed and hosting resources as catalogue size and traffic change.",
    },
    {
      title: "Security, Backups and Recovery",
      description:
        "Maintain appropriate security practices, reliable backups and a recovery process for important store data.",
    },
    {
      title: "Checkout and Order Testing",
      description:
        "Retest key product, cart, payment and order workflows after significant updates or configuration changes.",
    },
    {
      title: "Store Improvements",
      description:
        "Prioritize new features, content improvements and integrations according to customer feedback and operational needs.",
    },
  ],
};

/* =========================================================
   18. RELATED SERVICES
   Verify each destination exists before rendering.
   ========================================================= */

export const woocommerceRelatedServices: RelatedServiceCard[] = [
  {
    title: "Ecommerce Website Development",
    description:
      "Explore the broader ecommerce development approach, platform options and business requirements before choosing an implementation.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "Shopify Development",
    description:
      "Explore Shopify store development when a hosted commerce platform may better fit your operational needs.",
    linkText: "Explore Shopify Development",
    destination: "/services/ecommerce-development/shopify",
  },
  {
    title: "Web Design and Development",
    description:
      "Improve the wider website experience, page structure and content presentation supporting your store.",
    linkText: "Explore Web Development",
    destination: "/services/web-design",
  },
  {
    title: "SEO Services",
    description:
      "Address broader organic search visibility, technical SEO and ongoing search growth beyond store implementation.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Investigate shopping friction, landing pages and customer journeys to identify opportunities for improvement.",
    linkText: "Explore Conversion Optimization",
    destination: "/services/conversion-rate-optimization",
  },
];

/* =========================================================
   19. FAQS
   ========================================================= */

export const woocommerceFAQs: FAQItem[] = [
  {
    question: "What is WooCommerce development?",
    answer:
      "WooCommerce development involves building, customizing or improving an ecommerce store using WooCommerce and WordPress. Work can include storefront design, product setup, theme customization, extensions, integrations, performance improvements and migration.",
  },
  {
    question: "Is WooCommerce suitable for my business?",
    answer:
      "WooCommerce can suit businesses that need ecommerce alongside WordPress content management and want to use its extension ecosystem. Suitability depends on your store's functionality, technical requirements, operating resources and maintenance plan.",
  },
  {
    question: "Can you add ecommerce to an existing WordPress website?",
    answer:
      "Yes, subject to the current site's architecture and compatibility. The implementation should consider the existing theme, plugins, content structure, hosting and how the store will fit into the customer journey.",
  },
  {
    question: "Can WooCommerce support custom functionality?",
    answer:
      "WooCommerce can be extended through compatible plugins, hooks, APIs and custom development. The appropriate approach depends on the required behavior, compatibility, security and ongoing maintenance needs.",
  },
  {
    question: "Can you integrate WooCommerce with inventory, CRM or accounting software?",
    answer:
      "Integration options depend on the systems involved and the required data flows. Available extensions may be suitable for standard workflows, while some requirements need API-based custom integration and explicit error handling.",
  },
  {
    question: "How do you improve a slow WooCommerce store?",
    answer:
      "We would first investigate the implementation, hosting, theme, extensions, database workload, caching and page assets. The right improvements depend on the source of the bottleneck rather than assuming that one optimization or plugin will solve every issue.",
  },
  {
    question: "Is WooCommerce cheaper than custom-coded ecommerce?",
    answer:
      "Not in every case. WooCommerce may reduce the need to build common commerce functionality from scratch, but hosting, paid extensions, customization and maintenance all contribute to total cost. A custom-coded store has a different engineering and operating cost structure.",
  },
  {
    question: "Can you migrate an existing store to WooCommerce?",
    answer:
      "Migration can be scoped around products, categories, customer and order data where supported, content, URLs, redirects, integrations and analytics. The exact plan depends on the source platform and which records can be transferred reliably.",
  },
  {
    question: "Does WooCommerce require ongoing maintenance?",
    answer:
      "Yes. WordPress, WooCommerce, themes, extensions and custom code need coordinated updates, backups, security checks and testing. The level of support depends on the store's complexity and operational requirements.",
  },
  {
    question: "How long does WooCommerce development take?",
    answer:
      "Timelines depend on the design scope, catalogue, custom functionality, integrations, migration needs and content readiness. A straightforward store and a store with specialized workflows require different levels of planning and testing.",
  },
];

/* =========================================================
   20. FINAL CTA
   Make sure the page renders this exact section ID.
   ========================================================= */

export const woocommerceFinalCTA: WooCommerceFinalCTAData = {
  eyebrow: "PLAN YOUR WOOCOMMERCE STORE",
  h2: "Let's Work Out What Your WooCommerce Store Actually Needs",
  description:
    "Tell us about your products, current website, required functionality and operational challenges. We can help define a practical development scope before committing to a solution.",
  primaryButtonText: "Discuss Your WooCommerce Project",
  primaryButtonHref: "#contact",
  secondaryButtonText: "Compare Ecommerce Options",
  secondaryButtonHref: "/services/ecommerce-development",
};