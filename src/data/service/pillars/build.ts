import heroImg from '@/assets/build-hero.jpg'
import teamImg from '@/assets/bixeltek-team-4.png'

export interface BuildMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface BuildHeroData {
  eyebrow: string;
  h1: string;
  p1: string;
  p2: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
  microcopy: string;
}

export interface BuildOverviewData {
  eyebrow: string;
  h2: string;
  intro: string;
  paragraphs: string[];
}

export interface BuildCapability {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  links: {
    label: string;
    href: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface BuildStartingPoint {
  title: string;
  description: string;
  recommendedServices: {
    label: string;
    href: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface BuildIntegrationPoint {
  title: string;
  description: string;
}

export interface BuildProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface BuildWhyChoosePoint {
  title: string;
  description: string;
}

export interface BuildRelatedService {
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BuildFinalCTAData {
  eyebrow: string;
  h2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  footnote?: string;
}


/* =========================================================
   METADATA
   ========================================================= */

export const buildMetadata: BuildMetadata = {
  title:
    "Website, Ecommerce & App Development Company | Bixeltek",
  description:
    "We design and develop business websites, ecommerce stores, mobile apps and the integrations that connect them to your CRM, payments and reporting.",
  keywords: [
    "web development services",
    "ecommerce development",
    "mobile app development",
    "custom business software",
    "API integrations",
    "digital product development",
    "business systems development",
    "custom web development",
  ],
  canonical: "https://bixeltek.com/services/build",
};


/* =========================================================
   BREADCRUMBS
   ========================================================= */

export const buildBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Build",
  },
];


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

export const buildJumpLinks: JumpLinkItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "What We Build",
    href: "#capabilities",
  },
  {
    label: "Find Your Starting Point",
    href: "#starting-point",
  },
  {
    label: "How We Build",
    href: "#process",
  },
  {
    label: "Why Bixeltek",
    href: "#why-bixeltek",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];


/* =========================================================
   HERO
   ========================================================= */

export const buildHero: BuildHeroData = {
  eyebrow:
    "BUILD · WEBSITES · ECOMMERCE · APPLICATIONS · BUSINESS SYSTEMS",

  h1:
    "Websites, Online Stores and Custom Apps, Built by One Team",

  p1:
    "We design and develop business websites, ecommerce stores, mobile apps and the integrations that connect them to your CRM, payments and reporting, so what your customers see and what your team uses work together.",

  p2:
    "We design and develop websites, ecommerce systems, mobile applications, integrations and custom business tools around the way your business actually works — rather than forcing every project into the same technology or template.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#build-project",

  secondaryLinkText:
    "Explore Our Build Work",

  secondaryLinkHref:
    "#selected-work",

  microcopy:
    "Starting from scratch, replacing an outdated system or improving what already exists? We can help identify the right starting point before recommending the technology.",
};


/* =========================================================
   OVERVIEW
   ========================================================= */

export const buildOverview: BuildOverviewData = {
  eyebrow: "THE BUILD LAYER",

  h2: "Build the Parts of Your Digital Business That Customers and Teams Actually Depend On",

  intro:
    "A business rarely needs just a website, just an app or just a store. A patient submits a booking form, the request lands in your CRM, the front desk gets an alert and the patient receives a WhatsApp confirmation. An online order triggers payment, stock, shipping and reporting. We build and connect those pieces as one system.",

  paragraphs: [
    "The goal is to make every part of your digital business work together, rather than leaving your team to manage disconnected tools and manual processes. From customer-facing websites and ecommerce stores to internal dashboards, mobile applications, APIs and third-party integrations, we build solutions around how your business actually operates. Each part is designed to support the next, helping customers move through their journey more easily while giving your team a clearer, more reliable way to manage the work behind it.",

    "Not sure where to start? Tell us what you want your customers and your team to be able to do, where your current process creates friction and which tasks take too much time. We will help you identify what needs to be built, what can be connected using your existing tools and what can wait until later. The result is a practical starting point focused on solving the right problem without adding unnecessary complexity.",
  ],
};

/* =========================================================
   WHAT WE BUILD
   ========================================================= */

export const buildCapabilities: BuildCapability[] = [
  {
    number: "01",
    label: "WEB",
    title: "Websites & Digital Experiences",

    description:
      "Build a stronger digital presence with websites designed around how customers discover, evaluate and choose your business.",

    items: [
      "Business websites",
      "Website redesigns",
      "Landing pages",
      "Conversion-focused web experiences",
      "Corporate websites",
      "Service-based websites",
    ],

    links: [
      {
        label: "Web Design & Development",
        href: "/services/web-design",
      },
    ],

    ctaText: "Explore Web Development",
    ctaHref: "/services/web-design",
  },

  {
    number: "02",
    label: "CUSTOM CODED",
    title: "Custom-Coded Websites",

    description:
      "Build websites around your exact requirements when performance, flexibility and custom functionality matter more than working within a predefined platform.",

    items: [
      "Next.js websites",
      "React-based experiences",
      "Custom frontend development",
      "Custom backend systems",
      "API integrations",
      "High-performance websites",
    ],

    links: [
      {
        label: "Custom-Coded Websites",
        href: "/custom-coded-websites",
      },
      {
        label: "Web Design & Development",
        href: "/services/web-design",
      },
    ],

    ctaText: "Explore Custom Development",
    ctaHref: "/custom-coded-websites",
  },

  {
    number: "03",
    label: "WORDPRESS",
    title: "WordPress Websites",

    description:
      "Create flexible, manageable WordPress websites for businesses that need an established CMS with room to grow and evolve.",

    items: [
      "Business websites",
      "Custom WordPress development",
      "WooCommerce",
      "Custom themes",
      "Plugin & API integrations",
      "WordPress redesigns",
    ],

    links: [
      {
        label: "Web Design & Development",
        href: "/services/web-design",
      },
      {
        label: "Ecommerce Development",
        href: "/services/ecommerce-development",
      },
    ],

    ctaText: "Discuss a WordPress Project",
    ctaHref: "/services/web-design/wordpress",
  },

  {
    number: "04",
    label: "HEADLESS CMS",
    title: "Strapi & Headless CMS",

    description:
      "Separate content management from the frontend to create flexible digital experiences that can evolve across websites, applications and other channels.",

    items: [
      "Strapi development",
      "Headless CMS architecture",
      "Custom content models",
      "Next.js frontends",
      "API-driven content",
      "Multi-channel experiences",
    ],

    links: [
      {
        label: "Custom CMS Websites",
        href: "/custom-cms-websites",
      },
      {
        label: "Web Design & Development",
        href: "/services/web-design",
      },
    ],

    ctaText: "Explore Headless Development",
    ctaHref: "/services/web-design/strapi",
  },

  {
    number: "05",
    label: "COMMERCE",
    title: "Ecommerce Systems",

    description:
      "Create ecommerce experiences that connect products, customers, transactions and the operational systems behind the store.",

    items: [
      "Shopify stores",
      "WooCommerce stores",
      "Headless commerce",
      "Custom ecommerce systems",
      "Payment integrations",
      "Commerce integrations",
    ],

    links: [
      {
        label: "Ecommerce Development",
        href: "/services/ecommerce-development",
      },
      {
        label: "Shopify Development",
        href: "/services/ecommerce-development/shopify",
      },
      {
        label: "WooCommerce Development",
        href: "/services/ecommerce-development/woocommerce",
      },
    ],

    ctaText: "Explore Ecommerce Development",
    ctaHref: "/services/ecommerce-development",
  },

  {
    number: "06",
    label: "MOBILE",
    title: "Mobile Applications",

    description:
      "Turn customer-facing products, internal workflows and new digital ideas into mobile applications built around real users and business requirements.",

    items: [
      "iOS applications",
      "Android applications",
      "Cross-platform apps",
      "Customer applications",
      "Internal business apps",
      "MVP development",
    ],

    links: [
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
    ],

    ctaText: "Explore App Development",
    ctaHref: "/services/mobile-app-development",
  },

  {
    number: "07",
    label: "SYSTEMS",
    title: "Custom Business Systems & Integrations",

    description:
      "The internal tools and connections that stop your team re-entering data between systems.",

    items: [
      "Internal tools and dashboards",
      "Customer and partner portals",
      "CRM integrations",
      "Payment, API and WhatsApp integrations",
      "Workflow automation",
    ],

    links: [
      {
        label: "Explore Automate",
        href: "/services/automate",
      },
    ],

    ctaText: "Explore Connected Systems",
    ctaHref: "/services/automate",
  },
];


/* =========================================================
   HOW THE PIECES WORK TOGETHER
   ========================================================= */

export const buildIntegrationSection = {
  eyebrow:
    "BUILT TO WORK TOGETHER",

  h2:
    "Your Website, Store, App and Business Systems Don't Have to Operate in Isolation",

  intro:
    "The strongest digital foundations are usually connected. A customer may discover your business through search, visit your website, submit an enquiry, enter your CRM and later receive a follow-up. An ecommerce customer may move from a storefront to payment, fulfilment, communication and reporting systems.",

  points: [
    {
      title:
        "Web & Content",

      description:
        "Your website, landing pages and blog share one content system, so a change is made once and appears everywhere.",
    },

    {
      title:
        "Ecommerce & Commerce",

      description:
        "Your store connects products, payments, stock and orders, so staff do not re-enter data between tools.",
    },

    {
      title:
        "Mobile & Applications",

      description:
        "Your app works with your website and backend through APIs, instead of becoming another separate system.",
    },

    {
      title:
        "Customer Journeys",

      description:
        "A form submission creates a CRM record, alerts the right person and sends the customer an automatic reply.",
    },

    {
      title:
        "Business Operations",

      description:
        "Internal tools and dashboards replace spreadsheets and manual updates, so your team sees what is happening in one place.",
    },

    {
      title:
        "Data & Integrations",

      description:
        "We connect the tools you already use (CRM, payments, analytics, WhatsApp) through APIs and webhooks.",
    },
  ] as BuildIntegrationPoint[],
};


/* =========================================================
   FIND YOUR STARTING POINT
   ========================================================= */

export const buildStartingPoints: BuildStartingPoint[] = [
  {
    title:
      "We Need a Better Website",

    description:
      "Your current website may be outdated, difficult to manage, poorly structured or simply not helping customers take the next step.",

    recommendedServices: [
      {
        label: "Web Design & Development",
        href: "/services/web-design",
      },
      {
        label: "Website Redesign",
        href: "/website-redesign",
      },
    ],

    ctaText:
      "Improve My Website",

    ctaHref:
      "/services/web-design",
  },

  {
    title:
      "We Want to Sell Online",

    description:
      "You may need a new ecommerce store, a better customer experience or a commerce system that can support more complex requirements.",

    recommendedServices: [
      {
        label: "Ecommerce Development",
        href: "/services/ecommerce-development",
      },
      {
        label: "Shopify",
        href: "/services/ecommerce-development/shopify",
      },
      {
        label: "WooCommerce",
        href: "/services/ecommerce-development/woocommerce",
      },
    ],

    ctaText:
      "Plan My Ecommerce Project",

    ctaHref:
      "/services/ecommerce-development",
  },

  {
    title:
      "We Have an App or Product Idea",

    description:
      "Turn a product idea, customer experience or internal workflow into a mobile or web application with a practical technical foundation.",

    recommendedServices: [
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
    ],

    ctaText:
      "Discuss My App Idea",

    ctaHref:
      "/services/mobile-app-development",
  },

  {
    title:
      "Our Business Needs a Custom System",

    description:
      "When your existing software does not handle the workflow, integrations or internal processes your team depends on, a custom system may make more sense.",

    recommendedServices: [
      {
        label: "APIs & Integrations",
        href: "#build-project",
      },
      {
        label: "Custom CRM",
        href: "#build-project",
      },
      {
        label: "Internal Tools",
        href: "#build-project",
      },
    ],

    ctaText:
      "Discuss My Business System",

    ctaHref:
      "#build-project",
  },
];


/* =========================================================
   PROCESS
   ========================================================= */

export const buildProcess: BuildProcessStage[] = [
  {
    number: "01",
    title:
      "Understand the Business",

    description:
      "We start with the business objective, users, existing systems and the problem the digital product needs to solve. You get: a one-page brief of goals, users and requirements.",
  },
  {
    number: "02",
    title:
      "Define the Right Scope",

    description:
      "We identify what needs to be built now, what can come later and where existing systems can be reused instead of rebuilding everything. You get: a scope document, timeline and fixed quote.",
  },
  {
    number: "03",
    title:
      "Choose the Technology",

    description:
      "Platform and architecture decisions follow the product requirements, integrations, performance needs, content model and plans for growth. You get: a platform recommendation with reasons.",
  },
  {
    number: "04",
    title:
      "Design the Experience",

    description:
      "We structure the user experience around the actions customers or teams actually need to complete rather than designing screens in isolation. You get: wireframes and designs to approve before development starts.",
  },
  {
    number: "05",
    title:
      "Build & Integrate",

    description:
      "Development covers the agreed experience, supporting systems and relevant integrations needed for the product to work as intended. You get: a staging link to review progress.",
  },
  {
    number: "06",
    title:
      "Test, Launch & Improve",

    description:
      "Before launch we test important journeys and integrations, then use real-world feedback and business priorities to guide what comes next. You get: a tested launch, handover documentation and training.",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const buildWhyChoose: BuildWhyChoosePoint[] = [
  {
    title:
      "Websites, Stores and Apps Delivered Globally",

    description:
      "Built for clients in India, Canada, the US and Saudi Arabia, including dental practices, schools, ecommerce brands, and B2B companies.",
  },
  {
    title:
      "You Own What We Build",

    description:
      "You receive full ownership of the code, designs and content, with no proprietary platform lock-in.",
  },
  {
    title:
      "Built to Be Found",

    description:
      "URLs, metadata, structured data and page speed are part of the build, not an add-on.",
  },
  {
    title:
      "Tested on Mobile Before Launch",

    description:
      "We check speed, forms, tracking and key journeys on real mobile devices before go-live.",
  },
  {
    title:
      "One Team From Build to Growth",

    description:
      "The team that builds your site can also run your Google Ads, SEO and automation, so tracking and landing pages are right from day one. We are a Google Partner agency.",
  },
  {
    title:
      "Handover and Ongoing Support",

    description:
      "You get documentation and training at launch, and can add a monthly plan for fixes, updates and improvements.",
  },
];


/* =========================================================
   RELATED SERVICES
   ========================================================= */

export const buildRelatedServices: BuildRelatedService[] = [
  {
    title:
      "Grow What You Build",

    description:
      "Once the digital foundation is in place, paid advertising, SEO, analytics and conversion optimization can help turn it into a stronger acquisition channel.",

    href:
      "/services/grow",

    ctaText:
      "Explore Grow",
  },

  {
    title:
      "Automate What Happens Next",

    description:
      "Connect enquiries, customer data, CRM workflows and operational processes so less work depends on manual handoffs.",

    href:
      "/services/automate",

    ctaText:
      "Explore Automate",
  },

  {
    title:
      "Improve the Customer Journey",

    description:
      "Websites, ecommerce experiences and applications can be improved through conversion optimization, analytics and better customer journeys.",

    href:
      "/services/conversion-rate-optimization",

    ctaText:
      "Explore CRO",
  },
];


/* =========================================================
   FAQ
   ========================================================= */

export const buildFAQs: FAQItem[] = [
  {
    question:
      "What does Bixeltek mean by Build?",

    answer:
      "Build covers the digital foundations and products we develop for businesses, including websites, ecommerce systems, applications, integrations and custom business tools.",
  },

  {
    question:
      "Do you only build new websites and applications?",

    answer:
      "No. We also work with existing websites, ecommerce systems and applications that need redesigning, rebuilding, modernizing, integrating or improving.",
  },

  {
    question:
      "How do I know which service I need?",

    answer:
      "You do not necessarily need to decide before speaking with us. We can understand the business requirement, existing systems and desired outcome first, then recommend the most appropriate starting point.",
  },

  {
    question:
      "Can you work with our existing technology?",

    answer:
      "Where the existing technology is suitable, we can work around it rather than replacing systems unnecessarily. The right approach depends on the current architecture, limitations and project requirements.",
  },

  {
    question:
      "Can you connect the systems we already use?",

    answer:
      "Yes, where the relevant platforms provide suitable integration options. This can include APIs, ecommerce systems, CRMs, payment systems, analytics and other business software.",
  },

  {
    question:
      "Can you build something custom instead of using Shopify or WordPress?",

    answer:
      "Yes. Custom development can make sense when the business has requirements that standard platforms cannot handle efficiently or when the product needs more control over its architecture and experience.",
  },

  {
    question:
      "Can you help after the initial build?",

    answer:
      "Yes. Depending on the project, ongoing work can include maintenance, improvements, new features, integrations, performance work and further development.",
  },

  {
    question:
      "What if we are not sure what needs to be built?",

    answer:
      "That is a suitable starting point. We can first understand the business problem, existing process and desired outcome before recommending whether a website, ecommerce system, application, integration or custom tool is actually required.",
  },
  {
    question:
      "Will a redesign hurt our Google rankings?",

    answer:
      "Not if it is planned. We map every existing URL, 301-redirect the ones that change, keep the pages that rank, and check Search Console after launch.",
  },
  {
    question:
      "Who owns the code and hosting?",

    answer:
      "You do. You receive full ownership of your code, designs, and content upon completion, with no proprietary platform lock-in.",
  },
  {
    question:
      "Can you take over a site someone else built?",

    answer:
      "Yes. We start with a technical review of the code, hosting and content, then tell you whether to fix, rebuild or migrate.",
  },
  {
    question:
      "What do you need from us?",

    answer:
      "Your goals, brand assets, content (or we can help write it), access to existing tools and your domain, and one person who can approve each stage.",
  },
];


/* =========================================================
   FINAL CTA
   ========================================================= */

export const buildFinalCTA: BuildFinalCTAData = {
  eyebrow:
    "READY TO BUILD?",

  h2:
    "Let's Figure Out What Your Business Actually Needs to Build",

  description:
    "Whether you need a new digital foundation, a better ecommerce experience, a mobile application or a custom business system, start with the business requirement. We can help identify the right direction before the technology is decided.",

  primaryButtonText:
    "Scope my build",

  primaryButtonHref:
    "#build-project",

  secondaryButtonText:
    "Explore Our Work",

  secondaryButtonHref:
    "#selected-work",

  footnote:
    "Tell us what you want built · You leave with a recommended approach and rough timeline · No obligation",
};


export const buildImages = {
  heroBackground: heroImg,
  overviewImage: teamImg,
  overviewAlt: "Bixeltek team planning a digital product together",
  overviewBadge: {
    title: "One team, every layer",
    text: "Website, store, app and systems planned together instead of bought separately.",
  },
};

export const buildCapabilityBestFor = [
  "your website is the first place customers judge you, and it is not doing that job yet.",
  "performance, speed, and tailored logic require complete control over the frontend and backend.",
  "your team needs a familiar, established CMS with a large plugin ecosystem.",
  "content is managed once and delivered to multiple frontends, websites, and mobile apps.",
  "selling online is, or is about to become, a real revenue line.",
  "a workflow or product idea needs its own interface for customers or staff.",
  "your team repeats the same manual work, or your tools do not share data.",
];

export const buildStartingPointSteps = [
  [
    "Review what your current site does and does not do for customers",
    "Decide whether to refresh, restructure or rebuild",
    "Agree the platform and plan the move without losing search traffic",
  ],
  [
    "Map your products, orders and how they get fulfilled",
    "Pick the platform that fits your catalogue and growth plans",
    "Plan payments, integrations and the launch",
  ],
  [
    "Define who uses it and the one job it must do well",
    "Scope a first release worth shipping",
    "Choose mobile, web or both and plan the build",
  ],
  [
    "List the manual steps and the tools involved",
    "Check what your existing software can already do",
    "Scope the smallest system that removes the pain",
  ],
];

export const buildStats = {
  heading: "A track record you can check",
  stats: [
    { value: "100+", label: "Projects delivered" },
    { value: "6+", label: "Industries served" },
    { value: "4.9/5", label: "Average client rating" },
    { value: "2021", label: "Building since" },
  ],
};

export const buildEngagement = {
  eyebrow: "WAYS TO WORK TOGETHER",
  h2: "Start Small or Go All In. Pick the Shape That Fits",
  intro: "Not every project needs the same commitment. Here is how most engagements are set up.",
  models: [
    {
      title: "Fixed-scope project",
      description: "A defined deliverable with an agreed scope, timeline and price. Fixed price agreed before development starts.",
      bestFor: "a new website, store or first version of an app.",
      includes: ["Discovery and scoping", "Design and development", "Testing and launch", "Handover and training"],
      ctaText: "Plan a project",
      ctaHref: "#build-project",
    },
    {
      title: "Build and improve",
      description: "A launch followed by a monthly rhythm of improvements and new features. Includes monthly design and development, plus hosting, security updates and backups.",
      bestFor: "products that need to keep evolving after release.",
      includes: ["Everything in a fixed-scope project", "Monthly improvement cycles", "Performance and security upkeep", "Priority support"],
      ctaText: "Talk about ongoing work",
      ctaHref: "#build-project",
    },
    {
      title: "Dedicated team",
      description: "Designers and engineers embedded in your roadmap for larger or longer programmes. A named lead plus designers and developers working on your roadmap, priced by team size.",
      bestFor: "multi-system builds and fast-growing products.",
      includes: ["Named team lead", "Flexible capacity", "Shared roadmap and reporting", "Integration with your in-house team"],
      ctaText: "Discuss a team",
      ctaHref: "#build-project",
    },
  ],
};

export const buildPlatformComparison = {
  eyebrow: "PLATFORM SELECTION",
  h2: "Which Platform Fits Your Project?",
  intro: "There is no single best platform. This is how we usually choose.",
  rows: [
    {
      need: "A content-led business website that your team edits often",
      platform: "WordPress",
      reason: "Familiar editing, large plugin ecosystem, quick to launch.",
    },
    {
      need: "A fast, fully custom website with strict performance goals",
      platform: "Custom-coded (Next.js)",
      reason: "Full control over design and speed, no plugin overhead.",
    },
    {
      need: "Structured content used across a website and apps",
      platform: "Strapi (headless CMS)",
      reason: "Content is managed once and delivered to every front end.",
    },
    {
      need: "An online store with a standard catalogue and a quick launch",
      platform: "Shopify",
      reason: "Managed hosting and a large app ecosystem.",
    },
    {
      need: "A store tied to WordPress content or needing flexible customization",
      platform: "WooCommerce",
      reason: "Integrates with WordPress and is open source.",
    },
    {
      need: "Unusual catalogue, B2B pricing or custom checkout logic",
      platform: "Custom or headless commerce (for example Medusa)",
      reason: "Full control over checkout and business rules.",
    },
    {
      need: "A mobile app",
      platform: "Native or cross-platform",
      reason: "Depends on features, budget and the devices you must support.",
    },
  ],
};