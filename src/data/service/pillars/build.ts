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
}


/* =========================================================
   METADATA
   ========================================================= */

export const buildMetadata: BuildMetadata = {
  title:
    "Digital Product & Business Systems Development | Bixeltek",
  description:
    "Build the digital foundation your business needs with websites, ecommerce systems, mobile applications, integrations and custom business tools from Bixeltek.",
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
    "Build the Digital Foundation Your Business Needs to Grow",

  p1:
    "Your digital presence should do more than exist online. It should help customers understand your business, make important actions easier and give your team systems that can support what comes next.",

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
  eyebrow:
    "THE BUILD LAYER",

  h2:
    "Build the Parts of Your Digital Business That Customers and Teams Actually Depend On",

  intro:
    "A business rarely needs just a website, just an app or just an ecommerce store. Different parts of the digital experience often need to work together.",

  paragraphs: [
    "Your website may generate enquiries. Your ecommerce system may process orders. Your application may give customers or employees a faster way to complete important actions. APIs and integrations may connect those experiences to the systems your team already uses.",

    "We approach these as connected digital products and business systems rather than isolated development projects. The technology follows the requirements, customer journey and operational needs of the business.",

    "Some businesses need a stronger website. Others need an ecommerce platform, a mobile product, a custom internal tool or a combination of systems. The right starting point depends on what the business is trying to accomplish.",
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
    ctaHref: "#build-project",
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
    ctaHref: "/custom-cms-websites",
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
        "Websites, landing pages and content systems can share the same structure and data so your digital presence stays consistent as the business grows.",
    },

    {
      title:
        "Ecommerce & Commerce",

      description:
        "Stores can connect products, payments, orders and customer information across the systems responsible for delivering the buying experience.",
    },

    {
      title:
        "Mobile & Applications",

      description:
        "Mobile and web applications can work alongside your existing website, backend systems and APIs instead of becoming another disconnected platform.",
    },

    {
      title:
        "Customer Journeys",

      description:
        "Important customer actions can move naturally from discovery and enquiry through forms, accounts, applications, communication and follow-up.",
    },

    {
      title:
        "Business Operations",

      description:
        "Internal tools, dashboards and connected workflows can reduce unnecessary manual work while giving teams better visibility into what is happening.",
    },

    {
      title:
        "Data & Integrations",

      description:
        "APIs and system connections help information move between the tools your business already depends on instead of creating disconnected islands of data.",
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
      "We start with the business objective, users, existing systems and the problem the digital product needs to solve.",
  },
  {
    number: "02",
    title:
      "Define the Right Scope",

    description:
      "We identify what needs to be built now, what can come later and where existing systems can be reused instead of rebuilding everything.",
  },
  {
    number: "03",
    title:
      "Choose the Technology",

    description:
      "Platform and architecture decisions follow the product requirements, integrations, performance needs, content model and plans for growth.",
  },
  {
    number: "04",
    title:
      "Design the Experience",

    description:
      "We structure the user experience around the actions customers or teams actually need to complete rather than designing screens in isolation.",
  },
  {
    number: "05",
    title:
      "Build & Integrate",

    description:
      "Development covers the agreed experience, supporting systems and relevant integrations needed for the product to work as intended.",
  },
  {
    number: "06",
    title:
      "Test, Launch & Improve",

    description:
      "Before launch we test important journeys and integrations, then use real-world feedback and business priorities to guide what comes next.",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const buildWhyChoose: BuildWhyChoosePoint[] = [
  {
    title:
      "5+ Years of Engineering Experience Across 30+ Brands",

    description:
      "Over half a decade of hands-on delivery building custom web applications, ecommerce stores, and digital platforms for 30+ ambitious businesses globally.",
  },
  {
    title:
      "We Start With the Business Requirement",

    description:
      "The technology should support the business problem rather than becoming the reason the project exists.",
  },
  {
    title:
      "We Work Across Different Digital Products",

    description:
      "Websites, ecommerce systems, applications and business tools can be considered together when the project requires more than one digital layer.",
  },
  {
    title:
      "We Consider the Systems Around the Product",

    description:
      "Payments, APIs, analytics, CRM systems, content management and operational workflows can be part of the wider technical picture.",
  },
  {
    title:
      "Design and Development Stay Connected",

    description:
      "User experience decisions are considered alongside technical constraints so the final product is practical to build, use and maintain.",
  },
  {
    title:
      "We Build for What Comes Next",

    description:
      "A first release should solve the immediate problem without unnecessarily creating technical or operational limitations for future development.",
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
    "Talk to an Expert",

  primaryButtonHref:
    "#build-project",

  secondaryButtonText:
    "Explore Our Work",

  secondaryButtonHref:
    "#selected-work",
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
  "selling online is, or is about to become, a real revenue line.",
  "a workflow or product idea needs its own interface for customers or staff.",
  "your team spends hours moving data between tools by hand.",
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
      description: "A defined deliverable with an agreed scope, timeline and price.",
      bestFor: "a new website, store or first version of an app.",
      includes: ["Discovery and scoping", "Design and development", "Testing and launch", "Handover and training"],
      ctaText: "Plan a project",
      ctaHref: "#build-project",
    },
    {
      title: "Build and improve",
      description: "A launch followed by a monthly rhythm of improvements and new features.",
      bestFor: "products that need to keep evolving after release.",
      includes: ["Everything in a fixed-scope project", "Monthly improvement cycles", "Performance and security upkeep", "Priority support"],
      ctaText: "Talk about ongoing work",
      ctaHref: "#build-project",
    },
    {
      title: "Dedicated team",
      description: "Designers and engineers embedded in your roadmap for larger or longer programmes.",
      bestFor: "multi-system builds and fast-growing products.",
      includes: ["Named team lead", "Flexible capacity", "Shared roadmap and reporting", "Integration with your in-house team"],
      ctaText: "Discuss a team",
      ctaHref: "#build-project",
    },
  ],
};