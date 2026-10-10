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
// WORDPRESS DEVELOPMENT — PAGE DATA
// Content-only data for Bixeltek's reusable service-page system.
// Confirm route names and each component's expected props against
// the repository before integrating.
// ============================================================

export interface WordPressMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface WordPressPoint {
  title: string;
  description: string;
}

export interface WordPressProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface WordPressTechnologyItem {
  name: string;
  category: string;
  description: string;
  icon?: string;
  href?: string;
}

export interface WordPressDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface WordPressWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: WordPressPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface WordPressFinalCtaData {
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

export const wordpressMetadata: WordPressMetadata = {
  title: "WordPress Development Services | Custom WordPress Websites | Bixeltek",
  description:
    "Build a WordPress website around your business, content and workflows with custom development, theme customization, integrations, migration planning and ongoing improvement.",
  keywords: [
    "WordPress development services",
    "WordPress website development",
    "WordPress development company",
    "custom WordPress development",
    "WordPress theme customization",
    "WordPress website redesign",
    "WordPress migration",
    "WordPress maintenance",
  ],
  // Confirm the intended live route before release.
  canonical: "https://bixeltek.com/services/web-design/wordpress",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const wordpressBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "WordPress Development", href: "/services/web-design/wordpress" },
];

// ============================================================
// JUMP LINKS
// Match these IDs to the actual section IDs used by the page.
// ============================================================

export const wordpressJumpLinks: JumpLinkItem[] = [
  { label: "Common Challenges", href: "#wordpress-challenges" },
  { label: "What We Build", href: "#wordpress-capabilities" },
  { label: "Choosing the Right Approach", href: "#wordpress-decisions" },
  { label: "Technology & Integrations", href: "#wordpress-technology" },
  { label: "Our Process", href: "#wordpress-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const wordpressHero = {
  eyebrow: "WORDPRESS WEBSITE DEVELOPMENT & CUSTOMIZATION",
  h1: "WordPress Development Built Around Your Business",
  p1:
    "Your website should make it easier for people to understand what you offer, find the right information and take the next step. It should also give your team a practical way to keep content accurate as the business changes.",
  p2:
    "Bixeltek develops and improves WordPress websites around your content, customer journey and operational needs—from tailored theme work and integrations to redesigns and carefully planned migrations.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Web Design & Development",
  secondaryLinkHref: "/services/web-design",
  microcopy:
    "Planning a new website, improving an existing WordPress site or moving from another platform? We can start with your requirements and the setup you already have.",
};

// ============================================================
// WORDPRESS-SPECIFIC PROBLEMS
// ============================================================

export const wordpressProblems: ProblemCard[] = [
  {
    title: "Your Website Is Difficult to Update",
    description:
      "If every content change requires a developer, the editing experience may not fit the way your team works. Page structures, reusable blocks, content fields and user permissions should be planned around the updates your team actually makes.",
  },
  {
    title: "The Theme or Plugin Stack Has Become Hard to Maintain",
    description:
      "A site assembled from unrelated themes, builders and plugins can accumulate overlapping features and dependencies. Before adding another plugin or rebuilding the site, it is worth identifying what is essential, what is duplicated and what can be simplified safely.",
  },
  {
    title: "The Website No Longer Reflects the Business",
    description:
      "As services, audiences and positioning change, the original page structure may stop explaining the offer clearly. A redesign should address content hierarchy, navigation and customer journeys—not just replace colours and imagery.",
  },
  {
    title: "Performance Problems Are Difficult to Diagnose",
    description:
      "Slow pages can be caused by several factors, including hosting, theme code, plugins, images, scripts and third-party services. Measuring the actual bottlenecks first helps avoid spending money on optimizations that do not address the cause.",
  },
  {
    title: "The Website Needs to Connect With Other Systems",
    description:
      "Lead forms, booking tools, CRM platforms, analytics and internal workflows may need to share information. The right solution depends on available integrations, data ownership, access permissions and how the business will handle errors or changes.",
  },
  {
    title: "A Migration or Rebuild Feels Risky",
    description:
      "Changing a CMS or restructuring a mature website can affect content, URLs, redirects, tracking and existing functionality. A migration needs an inventory and validation plan so important pages and business workflows are not overlooked during launch.",
  },
];

// ============================================================
// OVERVIEW
// ============================================================

export const wordpressOverview = {
  eyebrow: "WORDPRESS DEVELOPMENT",
  h2: "A Website Your Team Can Use and Your Business Can Build On",
  intro:
    "WordPress can support a wide range of business websites, from service-led sites and publishing platforms to more structured content experiences. The outcome depends on how the theme, editing experience, plugins and integrations are chosen and implemented.",
  body:
    "We begin with the job the website needs to do, the content your team manages and the requirements the current setup is not meeting. That helps determine whether the right scope is a focused improvement, a theme customization, a new build, a migration or a more specialized architecture.",
  closingCopy:
    "The goal is not to make every WordPress website custom-built. It is to choose an approach that meets the real requirements without adding unnecessary complexity or maintenance.",
};

// ============================================================
// WHEN WORDPRESS DEVELOPMENT MAKES SENSE
// ============================================================

export const whenYouNeedWordPressDevelopment = {
  eyebrow: "WHEN TO INVEST IN WORDPRESS DEVELOPMENT",
  h2: "Choose the Work That Solves the Actual Website Problem",
  intro:
    "A WordPress project can mean very different things depending on the starting point. These are common situations where development or structured improvement may be worth considering.",
  points: [
    {
      title: "You need a new business website",
      description:
        "Your business needs a clear, editable website with service pages, useful content, enquiry paths and a structure that can expand as the offer develops.",
    },
    {
      title: "Your existing theme no longer fits",
      description:
        "The current design or page templates make it difficult to represent the brand, explain complex services or create the customer journeys the business needs.",
    },
    {
      title: "Your team needs better content control",
      description:
        "Editors need clearly named fields, reusable blocks or structured content types so routine updates do not depend on editing code or navigating confusing settings.",
    },
    {
      title: "You need custom functionality",
      description:
        "The website requires a workflow, integration or content feature that is not handled well by existing configuration or a suitable maintained plugin.",
    },
    {
      title: "The website needs to move platforms",
      description:
        "You are moving from another CMS or replacing an older WordPress implementation and need a plan for content, media, URL changes, redirects and tracking.",
    },
    {
      title: "The current site is slow or unstable",
      description:
        "Performance or reliability problems need diagnosis across hosting, themes, plugins, scripts and assets before deciding whether optimization or a rebuild is justified.",
    },
  ],
  notAlwaysNeeded: {
    title: "When a simpler solution may be better",
    description:
      "A small brochure website may not need a custom theme, a headless architecture or bespoke plugins. If a well-supported theme and a limited set of suitable plugins meet the requirements, that can be the more maintainable option.",
  },
};

// ============================================================
// CAPABILITIES / SCOPE
// ============================================================

export const wordpressScope: ScopeCard[] = [
  {
    title: "WordPress Website Development",
    description:
      "Build a business website with a considered page structure, responsive layouts, editable content, enquiry paths and the core functionality agreed for the project.",
  },
  {
    title: "Theme Customization & Development",
    description:
      "Adapt a suitable theme or develop tailored templates and blocks where the existing design system cannot meet the content, brand or editing requirements cleanly.",
  },
  {
    title: "WordPress Redesign & Rebuild",
    description:
      "Improve the site's information architecture, visual experience and content journeys while reviewing existing URLs, functionality, content and measurement that should be preserved.",
  },
  {
    title: "Custom Blocks & Structured Content",
    description:
      "Create reusable editing patterns or structured content types where they make routine updates clearer and help teams maintain consistency across similar pages.",
  },
  {
    title: "Plugin Selection & Custom Functionality",
    description:
      "Evaluate existing plugins before adding new dependencies, and scope custom development when a specific workflow cannot be handled suitably by a maintained solution.",
  },
  {
    title: "API & Third-Party Integrations",
    description:
      "Connect WordPress with relevant CRM, forms, booking, analytics or business systems where the required APIs, permissions and data flows support a reliable implementation.",
  },
  {
    title: "WordPress Migration",
    description:
      "Plan content and media transfer, URL mapping, redirects, integration changes and pre-launch checks when moving from another CMS or replacing an existing WordPress setup.",
  },
  {
    title: "Performance & Technical Improvements",
    description:
      "Investigate measured performance bottlenecks across themes, plugins, images, scripts and hosting, then prioritize changes based on the cause and the project's constraints.",
  },
  {
    title: "Technical SEO & Measurement Foundations",
    description:
      "Consider page structure, metadata, indexation, redirects and analytics requirements during implementation. These foundations support discoverability but do not guarantee search rankings.",
  },
  {
    title: "Maintenance & Ongoing Improvements",
    description:
      "Define an approach for core, theme and plugin updates, backups, compatibility checks and future changes so the website remains manageable after launch.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS
// Distinct from the capability list: this section helps buyers
// understand the trade-offs before choosing a technical approach.
// ============================================================



export const wordpressImplementationDecisions: WordPressDecisionItem[] = [
  {
    title: "Theme and editing approach",
    context:
      "Themes, block editors and page builders offer different levels of flexibility.",
    consideration:
      "Choose what fits your design, content needs and team's editing skills.",
  },
  {
    title: "Plugins or custom functionality",
    context:
      "Plugins add features quickly; custom code supports specific requirements.",
    consideration:
      "Evaluate security, compatibility and maintenance before choosing either approach.",
  },
  {
    title: "Optimize or rebuild",
    context:
      "An outdated or slow website may not need a complete rebuild.",
    consideration:
      "Audit the existing site before comparing targeted fixes with rebuilding costs.",
  },
  {
    title: "Architecture and migration",
    context:
      "Standard WordPress, headless setups and migrations have different requirements.",
    consideration:
      "Choose the right architecture, preserve important URLs and verify SEO tracking after migration.",
  },
];



// ============================================================
// TECHNOLOGY & INTEGRATION ECOSYSTEM
// Avoid presenting this as a technology-logo wall or implying
// every technology is included in every engagement.
// ============================================================

export const wordpressTechnologies: WordPressTechnologyItem[] = [
  {
    name: "WordPress Block Editor",
    category: "Content editing",
    description:
      "Use blocks and reusable patterns where they help the team manage page content consistently and with less developer involvement.",
    href: "https://wordpress.org/documentation/article/wordpress-editor/",
  },
  {
    name: "Block Themes & Site Editor",
    category: "Theme architecture",
    description:
      "For suitable block-theme projects, the Site Editor can manage site styles, templates, template parts and other parts of the site structure.",
    href: "https://wordpress.org/documentation/article/site-editor/",
  },
  {
    name: "Themes & Child Themes",
    category: "Presentation",
    description:
      "Choose a supported theme, customize it carefully or build tailored templates based on the site's requirements and the intended maintenance model.",
    href: "https://wordpress.org/documentation/article/work-with-themes/",
  },
  {
    name: "Plugins & Custom Extensions",
    category: "Functionality",
    description:
      "Extend WordPress with carefully selected plugins or custom functionality when the requirements justify the extra code and ongoing maintenance.",
    href: "https://wordpress.org/documentation/",
  },
  {
    name: "REST API & External Systems",
    category: "Integrations",
    description:
      "Where appropriate, use supported APIs to exchange content or connect workflows, with attention to permissions, authentication, data mapping and failure handling.",
    href: "https://developer.wordpress.org/rest-api/",
  },
  {
    name: "Analytics & Search Measurement",
    category: "Measurement",
    description:
      "Plan the events and business actions that need to be measured, then verify implementation against the site's analytics and consent requirements.",
  },
  {
    name: "Performance & Site Health",
    category: "Quality and maintenance",
    description:
      "Use diagnostics and measured testing to investigate issues involving configuration, plugins, themes, hosting and other dependencies.",
    href: "https://wordpress.org/documentation/article/site-health-screen/",
  },
];

// ============================================================
// PROCESS
// ============================================================

export const wordpressProcess: WordPressProcessStage[] = [
  {
    number: "01",
    title: "Understand the Website & Business",
    description:
      "Review the current site or planned project, target audiences, content, enquiry journeys, editing needs, integrations and the problems the website must solve.",
  },
  {
    number: "02",
    title: "Define Structure & Technical Approach",
    description:
      "Agree on the page structure and content model, then choose an appropriate theme, block-editing approach, plugins and any custom functionality required.",
  },
  {
    number: "03",
    title: "Design the Experience",
    description:
      "Shape page hierarchy, responsive layouts and key customer journeys around the content and business goals, using a design process appropriate to the agreed scope.",
  },
  {
    number: "04",
    title: "Build & Integrate",
    description:
      "Implement the agreed templates, editable content patterns, forms and integrations, keeping the editing experience and maintainability in view alongside the public-facing design.",
  },
  {
    number: "05",
    title: "Test Content, Functionality & Performance",
    description:
      "Check important templates, responsive behaviour, forms, permissions, integrations, redirects and analytics. Investigate performance issues using evidence rather than relying on a single score.",
  },
  {
    number: "06",
    title: "Launch & Handover",
    description:
      "Coordinate backups, launch checks and redirects where applicable, confirm the agreed measurement setup and provide the handover information needed to manage the site.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const wordpressWhyChoose: WordPressWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "WordPress Development That Considers the Whole Website",
  intro:
    "A WordPress website is more than a theme and a set of pages. Its content model, editing experience, plugin dependencies, integrations and maintenance approach all affect how useful it remains after launch.",
  points: [
    {
      title: "We Start With the Job the Website Must Do",
      description:
        "We clarify what visitors need to understand or do, what the business needs to manage and where the current experience is falling short before choosing the build approach.",
    },
    {
      title: "We Keep the Editing Experience Practical",
      description:
        "The backend should make common updates understandable for the people responsible for them, using suitable fields, blocks or templates rather than unnecessary complexity.",
    },
    {
      title: "We Choose Dependencies Deliberately",
      description:
        "Themes and plugins should have a clear purpose. We consider suitability, compatibility and ongoing maintenance instead of adding tools simply because they are available.",
    },
    {
      title: "We Consider Performance as an Engineering Problem",
      description:
        "Performance work should begin with diagnosis across the theme, scripts, media, plugins and hosting, so effort is directed at the factors that actually affect the experience.",
    },
    {
      title: "We Plan for Content and Search Continuity",
      description:
        "When redesigning or migrating a site, we consider page structure, important URLs, redirects and measurement as part of the delivery—not as an afterthought.",
    },
    {
      title: "We Connect the Website With Business Workflows",
      description:
        "Where the scope requires it, forms, CRM, analytics and other systems can be considered alongside the public-facing site so information can move through the intended journey.",
    },
  ],
  closingCopy:
    "The right WordPress solution is the one your team can use, your customers can navigate and your business can maintain without avoidable technical complexity.",
  ctaText: "Talk to an Expert",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// ============================================================

export const wordpressInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Page Count & Template Variety",
    description:
      "A site with a few consistent page types is different from one with many unique layouts, content types, archives or location-specific pages.",
  },
  {
    title: "Theme & Editing Requirements",
    description:
      "The effort depends on whether an existing theme can be configured, needs substantial customization or should be replaced with tailored templates and editing patterns.",
  },
  {
    title: "Custom Functionality",
    description:
      "Specialized forms, directories, member areas, booking workflows or custom admin behaviour can require additional discovery, development and testing.",
  },
  {
    title: "Plugins & Third-Party Integrations",
    description:
      "The systems involved, available APIs, data permissions, synchronization rules and responsibility for ongoing compatibility affect scope.",
  },
  {
    title: "Content Migration & URL Changes",
    description:
      "Moving content and media, restructuring pages, mapping old URLs and checking redirects can add significant work to a redesign or platform migration.",
  },
  {
    title: "Performance & Technical Remediation",
    description:
      "The level of effort depends on the measured cause of the problem, access to hosting and code, existing dependencies and whether a targeted fix or broader rebuild is needed.",
  },
  {
    title: "SEO, Analytics & Quality Assurance",
    description:
      "Redirect planning, technical checks, event validation, accessibility review and cross-device testing should be scoped according to the website's size and risk.",
  },
  {
    title: "Maintenance & Handover",
    description:
      "Training, documentation, update testing, backups and ongoing support are separate requirements from the initial build and should be agreed clearly.",
  },
];

// ============================================================
// RELATED SERVICES
// Verify these routes exist before publishing the page.
// ============================================================

export const wordpressRelatedServices: RelatedServiceCard[] = [
  {
    title: "Web Design & Development",
    description:
      "Explore the broader web development service if you are planning a new website or evaluating the overall design, structure and technology approach.",
    linkText: "Explore Web Design Services",
    destination: "/services/web-design",
  },
  {
    title: "Custom-Coded Websites",
    description:
      "If your requirements call for a more tailored application or frontend beyond a conventional WordPress setup, explore custom-coded website development.",
    linkText: "Explore Custom-Coded Websites",
    destination: "/custom-coded-websites",
  },
  {
    title: "Strapi CMS Development",
    description:
      "For structured, headless content architectures requiring custom APIs and complete frontend decoupled flexibility, explore our Strapi development services.",
    linkText: "Explore Strapi CMS",
    destination: "/services/web-design/strapi",
  },
  {
    title: "Ecommerce Development",
    description:
      "If selling online is central to the project, explore the broader ecommerce development approach and assess the platform and operational requirements first.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "SEO Services",
    description:
      "WordPress implementation can establish useful technical foundations, while a broader SEO engagement addresses search intent, content, competition and ongoing growth.",
    linkText: "Explore SEO Services",
    destination: "/services/seo-services",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "If the website receives relevant visitors but the enquiry or purchase journey is underperforming, CRO can help prioritize improvements using evidence.",
    linkText: "Explore CRO Services",
    destination: "/services/conversion-rate-optimization",
  },
];

// ============================================================
// FAQ
// ============================================================

export const wordpressFaqs: FAQItem[] = [
  {
    question: "What does WordPress development include?",
    answer:
      "Depending on the project, it can include website setup, theme customization, custom templates or blocks, plugin configuration, integrations, migration, performance improvements, technical SEO foundations and launch testing. The right scope depends on what the website needs to do and what the current setup can support.",
  },
  {
    question: "Can you customize an existing WordPress website?",
    answer:
      "Yes. We can review the current theme, plugins, content structure and functionality to identify what can be improved safely. Some sites need focused changes; others may be better served by a rebuild if the existing implementation is difficult to maintain.",
  },
  {
    question: "Should I use a WordPress theme or build a custom theme?",
    answer:
      "A suitable, well-supported theme can be a sensible starting point for many business websites. Custom theme development may be appropriate when the required design, content model or editing experience cannot be achieved cleanly with an existing theme. The choice should account for initial cost, flexibility and future maintenance.",
  },
  {
    question: "Can my team update the website without a developer?",
    answer:
      "That should be a goal of the implementation wherever practical. We can plan editable page sections, reusable blocks or structured content fields around the updates your team makes regularly, then include handover guidance for the agreed editing workflow.",
  },
  {
    question: "Can you build custom WordPress functionality or plugins?",
    answer:
      "Custom functionality can be considered when a suitable, maintained plugin or configuration does not meet the requirement. The scope should include the workflow, permissions, integrations, testing and who will maintain the code after launch.",
  },
  {
    question: "Is WordPress good for SEO?",
    answer:
      "WordPress can support an SEO-friendly website, but the platform alone does not guarantee rankings. Technical structure, content quality, search intent, performance, internal links, competition and ongoing optimization all matter. A development project can establish relevant foundations and avoid common implementation issues.",
  },
  {
    question: "Can you improve the speed of an existing WordPress website?",
    answer:
      "We can assess the current site and investigate likely causes such as hosting, theme code, plugins, images, scripts and third-party services. The recommendations should follow measured findings; the result and timeline depend on the existing setup and the changes that are feasible.",
  },
  {
    question: "Can you migrate my website from another platform to WordPress?",
    answer:
      "A migration may include page and media transfer, content restructuring, URL mapping, redirects, integration changes and analytics checks. The amount of manual work depends on the source platform, data quality and how closely the new structure matches the old one.",
  },
  {
    question: "When should I consider headless WordPress?",
    answer:
      "Headless WordPress separates content management from the frontend that displays it. It may suit specialized frontend, application or multi-channel requirements, but it also adds deployment, preview and maintenance considerations. It is worth considering when there is a clear need that a conventional WordPress implementation does not meet well.",
  },
  {
    question: "How long does a WordPress development project take?",
    answer:
      "The timeline depends on the number of page templates, content readiness, design requirements, custom functionality, integrations and migration work. A focused update is different from a new site or a complex rebuild, so timing should be estimated after the requirements are reviewed.",
  },
  {
    question: "What affects the cost of a WordPress website?",
    answer:
      "Important factors include the number and variety of page templates, theme approach, content migration, custom functionality, integrations, performance remediation, SEO and analytics requirements, testing and handover. A clear scope helps distinguish what is needed for launch from later improvements.",
  },
  {
    question: "Does WordPress need ongoing maintenance?",
    answer:
      "WordPress core, themes and plugins need appropriate updates and compatibility checks. A maintenance plan may also include backups, security review, monitoring and support. The exact routine depends on the site's complexity and risk; updates should be managed with a recovery plan rather than treated as a purely administrative task.",
  },
  {
    question: "Is WordPress suitable for ecommerce?",
    answer:
      "WordPress can support ecommerce through WooCommerce, but the right choice depends on catalogue structure, checkout and payment needs, fulfilment, integrations and ongoing operations. For a project focused on selling online, review Bixeltek's broader ecommerce development service before deciding on the implementation.",
  },
  {
    question: "Do you guarantee specific search rankings or performance scores?",
    answer:
      "No. Rankings and performance depend on multiple factors outside the website build alone. We can define technical requirements, test the implementation and address identified issues, but a responsible project should not promise a particular search position or speed score without considering the actual environment and constraints.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const wordpressFinalCta: WordPressFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLANNING A WORDPRESS WEBSITE?",
  h2: "Let's Define the WordPress Work Your Business Actually Needs",
  description:
    "Tell us whether you are starting a new website, improving an existing WordPress setup, adding functionality or planning a migration. We can review the requirements and identify a practical approach before the scope is finalized.",
  primaryCta: {
    label: "Discuss Your WordPress Project",
    href: "#contact",
  },
  supportingCopy:
    "We will start with your content, editing needs, customer journeys and current technical setup—not assume every project needs a custom theme or a complete rebuild.",
};
