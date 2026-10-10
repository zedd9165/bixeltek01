// data/services/automate.ts

export interface AutomateMetadata {
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

export interface AutomateHeroData {
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

export interface AutomateOverviewData {
  eyebrow: string;
  h2: string;
  intro: string;
  paragraphs: string[];
}

export interface AutomateCapability {
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

export interface AutomateCaseStudy {
  title: string;
  category: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
  ctaText: string;
}

export interface AutomateSystemPoint {
  title: string;
  description: string;
}

export interface AutomateProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface AutomateEngagementOption {
  title: string;
  description: string;
  bestFor: string;
  items: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

export interface AutomateWhyChoosePoint {
  title: string;
  description: string;
}

export interface AutomateRelatedService {
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AutomateFinalCTAData {
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

export const automateMetadata: AutomateMetadata = {
  title:
    "Business Automation Services | CRM, Integrations & Workflow Automation | Bixeltek",

  description:
    "Connect CRM, WhatsApp, forms, marketing, ecommerce and business systems with practical workflow automation, integrations, reporting and AI-assisted processes.",

  keywords: [
    "business automation services",
    "workflow automation services",
    "CRM automation",
    "CRM integration services",
    "business process automation",
    "workflow automation",
    "WhatsApp integration",
    "WhatsApp automation",
    "n8n automation",
    "Zapier integration",
    "API integration services",
    "lead management automation",
    "marketing automation",
    "sales automation",
    "business automation Hyderabad",
  ],

  canonical:
    "https://bixeltek.com/services/automate",
};


/* =========================================================
   BREADCRUMBS
   ========================================================= */

export const automateBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Automate",
  },
];


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

export const automateJumpLinks: JumpLinkItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "What We Automate",
    href: "#capabilities",
  },
  {
    label: "Automation Work",
    href: "#selected-work",
  },
  {
    label: "Connected Systems",
    href: "#connected-systems",
  },
  {
    label: "Our Approach",
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

export const automateHero: AutomateHeroData = {
  eyebrow:
    "AUTOMATE · CRM · INTEGRATIONS · WORKFLOWS · AI",

  h1:
    "Connect the Work Behind Your Business So Fewer Opportunities Get Lost",

  p1:
    "Your website, advertising, CRM, WhatsApp, ecommerce store and internal tools all create information. The problem starts when that information has to be copied, chased, checked or moved manually between people and systems.",

  p2:
    "We connect the systems behind your business and automate repeatable workflows — from lead routing and CRM updates to WhatsApp communication, reporting, ecommerce operations, API integrations and practical AI-assisted processes.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#automation-project",

  secondaryLinkText:
    "See What We Can Connect",

  secondaryLinkHref:
    "#connected-systems",

  microcopy:
    "Already using several tools but still relying on spreadsheets, manual follow-ups or repeated data entry? We can map where the process breaks before recommending what should be automated.",
};


/* =========================================================
   OVERVIEW
   ========================================================= */

export const automateOverview: AutomateOverviewData = {
  eyebrow:
    "THE AUTOMATION LAYER",

  h2:
    "Automation Should Connect the Work, Not Just Add More Tools",

  intro:
    "Most businesses do not need another disconnected piece of software. They need the systems they already use to communicate more reliably with each other.",

  paragraphs: [
    "A new enquiry might begin with a Google or Meta campaign, arrive through a website form, enter a CRM, need a response on WhatsApp, move through a sales pipeline and eventually become a customer. When those steps depend on manual copying and reminders, opportunities can disappear between systems and teams.",

    "We design automation around the way your business actually works. That can include CRM integrations, lead routing, WhatsApp workflows, API connections, ecommerce automation, reporting dashboards, notifications, approvals, data synchronization and AI-assisted tasks where they genuinely make the process better.",

    "The goal is not to automate everything. It is to identify repeatable work where reliable rules can reduce manual effort, improve response time, make ownership clearer and give your team better visibility into what is happening.",
  ],
};


/* =========================================================
   WHAT WE AUTOMATE
   ========================================================= */

export const automateCapabilities: AutomateCapability[] = [
  {
    number: "01",

    label: "CRM",

    title:
      "CRM Integration & Sales Workflows",

    description:
      "Connect your CRM with the systems that create, qualify and move opportunities so customer information and next steps do not depend on manual updates.",

    items: [
      "CRM integration",
      "Lead creation and enrichment",
      "Pipeline automation",
      "Task and ownership assignment",
      "Lead status workflows",
      "Sales notifications and follow-ups",
    ],

    links: [
      {
        label: "Explore Automation Services",
        href: "/services/automation",
      },
    ],

    ctaText:
      "Connect My CRM",

    ctaHref:
      "#automation-project",
  },

  {
    number: "02",

    label: "INTEGRATIONS",

    title:
      "Connect the Tools Your Business Already Uses",

    description:
      "Move important information between platforms through APIs, webhooks and integration tools instead of making your team repeatedly transfer the same data.",

    items: [
      "API integrations",
      "Webhooks",
      "Data synchronization",
      "Third-party platform connections",
      "n8n workflows",
      "Zapier integrations",
    ],

    links: [],

    ctaText:
      "Map My Integrations",

    ctaHref:
      "#automation-project",
  },
  {
    number: "03",

    label: "CUSTOMER COMMUNICATION",

    title:
      "WhatsApp, Email & Notification Workflows",

    description:
      "Automate useful customer communications around real business events while keeping the right points for human conversations and decisions.",

    items: [
      "WhatsApp integrations",
      "Email workflows",
      "Lead acknowledgements",
      "Appointment reminders",
      "Order and status notifications",
      "Internal alerts",
    ],

    links: [],

    ctaText:
      "Improve My Follow-Up",

    ctaHref:
      "#automation-project",
  },

  {
    number: "04",

    label: "ECOMMERCE",

    title:
      "Automate What Happens Around Orders",

    description:
      "Connect ecommerce events with fulfilment, customer communication, internal operations and reporting so important order activity moves without unnecessary manual coordination.",

    items: [
      "Order workflows",
      "Customer notifications",
      "Inventory and data synchronization",
      "Fulfilment workflows",
      "Abandoned-cart processes",
      "Operational reporting",
    ],

    links: [
      {
        label: "Explore Ecommerce",
        href: "/services/ecommerce-development",
      },
    ],

    ctaText:
      "Automate My Store",

    ctaHref:
      "#automation-project",
  },

  {
    number: "05",

    label: "AI WORKFLOWS",

    title:
      "Use AI Where It Actually Helps",

    description:
      "Apply AI to practical, repeatable tasks where it can reduce manual work or improve information handling without turning the entire business process into an experiment.",

    items: [
      "AI-assisted content workflows",
      "Information extraction",
      "Lead and enquiry classification",
      "Internal knowledge workflows",
      "AI-assisted reporting",
      "Human review and approval flows",
    ],

    links: [],

    ctaText:
      "Explore an AI Workflow",

    ctaHref:
      "#automation-project",
  },

  {
    number: "06",

    label: "REPORTING",

    title:
      "Reporting & Operational Visibility",

    description:
      "Bring information from relevant systems into clearer reporting workflows so teams can see what is happening without manually collecting data from multiple tools.",

    items: [
      "Reporting dashboards",
      "Data aggregation",
      "Lead and pipeline reporting",
      "Marketing performance data",
      "Operational metrics",
      "Automated reporting workflows",
    ],

    links: [],

    ctaText:
      "Improve My Reporting",

    ctaHref:
      "#automation-project",
  },

];


/* =========================================================
   SELECTED AUTOMATION WORK
   ========================================================= */

export const automateSelectedWork: AutomateCaseStudy[] = [
  // Keep empty until verified automation-specific case studies
  // are available. Do not invent automation metrics.
];


/* =========================================================
   CONNECTED SYSTEMS
   ========================================================= */

export const automateConnectedSystems = {
  eyebrow:
    "THE SYSTEMS WE CONNECT",

  h2:
    "Your Business Does Not Run Inside One Tool",

  intro:
    "Automation becomes useful when the systems involved in the customer and operational journey can exchange the right information at the right time.",

  points: [
    {
      title:
        "Marketing & Lead Sources",

      description:
        "Connect Google Ads, Meta Ads, website forms, landing pages and other enquiry sources so new opportunities can move into the right workflow automatically.",
    },

    {
      title:
        "CRM & Sales Systems",

      description:
        "Synchronize customer information, pipeline stages, tasks, ownership and follow-up actions so sales teams have a clearer view of what needs to happen next.",
    },

    {
      title:
        "WhatsApp & Communication",

      description:
        "Connect approved WhatsApp and communication workflows to meaningful customer events such as enquiries, reminders, updates and follow-ups.",
    },

    {
      title:
        "Ecommerce & Commerce Systems",

      description:
        "Connect orders, customers, products and operational events with communication, reporting and downstream business workflows.",
    },

    {
      title:
        "Business & Internal Tools",

      description:
        "Connect spreadsheets, internal applications, dashboards and operational tools where information currently has to be moved or updated manually.",
    },

    {
      title:
        "APIs, n8n & Integration Platforms",

      description:
        "Use APIs, webhooks, n8n, Zapier and other appropriate integration methods to connect systems without forcing unnecessary platform changes.",
    },
  ] as AutomateSystemPoint[],
};


/* =========================================================
   AUTOMATION PRINCIPLES
   ========================================================= */

export const automatePrinciples = {
  eyebrow:
    "HOW WE THINK ABOUT AUTOMATION",

  h2:
    "Automate the Right Work. Keep the Right Human Involved.",

  intro:
    "Good automation is not about removing people from every process. It is about making repeatable work more reliable while keeping human judgement where it adds value.",

  points: [
    {
      title:
        "Start With the Process",

      description:
        "We understand how work moves today before deciding which part should be automated.",
    },

    {
      title:
        "Automate Repeatable Work",

      description:
        "Consistent tasks and decisions are good candidates for automation when clear rules can be defined.",
    },

    {
      title:
        "Keep Ownership Clear",

      description:
        "Every workflow should make it obvious who or what is responsible for the next step.",
    },

    {
      title:
        "Design for Exceptions",

      description:
        "Missing information, failed actions and unusual cases need defined paths instead of silently breaking the workflow.",
    },

    {
      title:
        "Use AI Where It Adds Value",

      description:
        "AI can help with classification, extraction, content and information handling, but it should support a useful process rather than exist for its own sake.",
    },

    {
      title:
        "Build for Maintenance",

      description:
        "Clear logic, sensible workflow boundaries and understandable integrations make automation easier to maintain as the business changes.",
    },
  ],
};


/* =========================================================
   HOW WE BUILD AUTOMATION
   ========================================================= */

export const automateProcess: AutomateProcessStage[] = [
  {
    number: "01",

    title:
      "Map How the Work Happens",

    description:
      "We document the current process, systems involved, handoffs, repeated tasks, ownership and points where information is lost or delayed.",
  },

  {
    number: "02",

    title:
      "Find the Highest-Value Opportunities",

    description:
      "We identify processes where automation can realistically reduce manual effort, improve response time, increase visibility or reduce avoidable errors.",
  },

  {
    number: "03",

    title:
      "Design the Workflow",

    description:
      "We define triggers, actions, conditions, ownership, data movement, exceptions and human approval points before building the automation.",
  },

  {
    number: "04",

    title:
      "Connect the Systems",

    description:
      "We integrate the relevant platforms using APIs, webhooks, n8n, Zapier or other appropriate methods based on the workflow requirements.",
  },

  {
    number: "05",

    title:
      "Test the Complete Journey",

    description:
      "We test normal flows, missing information, failed actions, duplicate events and other real-world conditions before relying on the workflow in production.",
  },

  {
    number: "06",

    title:
      "Launch, Monitor & Improve",

    description:
      "Once live, workflows can be monitored, reviewed and refined as business processes, systems and customer behaviour change.",
  },
];


/* =========================================================
   WAYS TO WORK TOGETHER
   ========================================================= */

export const automateEngagementOptions: AutomateEngagementOption[] = [
  {
    title:
      "Automate One Important Process",

    description:
      "Start with a specific workflow where manual work, slow response or repeated data entry is creating a clear business problem.",

    bestFor:
      "Businesses that want to prove the value of automation before expanding it.",

    items: [
      "One defined workflow",
      "Clear business objective",
      "Focused integration scope",
      "Practical first automation",
    ],

    ctaText:
      "Automate One Process",

    ctaHref:
      "#automation-project",
  },

  {
    title:
      "Connect the Core Systems",

    description:
      "Bring CRM, lead sources, communication tools, ecommerce and internal systems together around the workflows that matter most.",

    bestFor:
      "Businesses already using multiple tools that do not work together reliably.",

    items: [
      "Multiple system integrations",
      "CRM and lead workflows",
      "Data synchronization",
      "Cross-team automation",
    ],

    ctaText:
      "Connect My Systems",

    ctaHref:
      "#automation-project",

    featured: true,
  },

  {
    title:
      "Build an Automation Roadmap",

    description:
      "Map the current operation, identify automation opportunities and create a practical sequence for what should be connected or automated first.",

    bestFor:
      "Businesses that know manual processes are slowing them down but need help deciding where to start.",

    items: [
      "Process mapping",
      "Automation opportunity review",
      "Priority recommendations",
      "Implementation roadmap",
    ],

    ctaText:
      "Map My Automation Roadmap",

    ctaHref:
      "#automation-project",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const automateWhyChoose: AutomateWhyChoosePoint[] = [
  {
    title:
      "5+ Years Architecting Workflows for 30+ Businesses",

    description:
      "Half a decade of practical systems integration, API connectivity, and marketing operations streamlining mission-critical workflows for 30+ growing companies.",
  },

  {
    title:
      "We Start With the Business Process",

    description:
      "The goal is not to add another automation tool. We first understand how work moves through the business and where the actual problem exists.",
  },

  {
    title:
      "We Can Work Across the Digital Stack",

    description:
      "Websites, ecommerce platforms, CRM systems, advertising sources, communication tools and internal applications can all form part of the same workflow.",
  },

  {
    title:
      "We Do Not Automate for the Sake of It",

    description:
      "If a manual step is occasional, unclear or better handled by a person, automation may not be the right answer. We focus on repeatable processes with a useful business outcome.",
  },

  {
    title:
      "We Consider the Customer Journey",

    description:
      "Lead capture, follow-up, communication, orders and support are connected experiences. Automation should improve that journey rather than create disconnected machine-driven interactions.",
  },

  {
    title:
      "We Design for What Happens When Things Go Wrong",

    description:
      "Good workflows need exception handling, ownership and visibility when information is missing, an integration fails or a situation requires human intervention.",
  },
];


/* =========================================================
   RELATED BUILD / GROW SERVICES
   ========================================================= */

export const automateRelatedServices: AutomateRelatedService[] = [
  {
    title:
      "Build the Digital Systems Automation Runs Through",

    description:
      "Websites, ecommerce platforms, applications and custom systems provide the foundation where many automation workflows begin.",

    href:
      "/services/build",

    ctaText:
      "Explore Build",
  },

  {
    title:
      "Generate the Demand Your Systems Need to Handle",

    description:
      "Google Ads, SEO, Meta Ads and conversion optimization can bring more qualified opportunities into the workflows behind your business.",

    href:
      "/services/grow",

    ctaText:
      "Explore Grow",
  },

  {
    title:
      "Go Deeper Into Business Automation",

    description:
      "Explore our dedicated automation service for workflow mapping, CRM automation, integrations, lead routing and practical process automation.",

    href:
      "/services/automation",

    ctaText:
      "Explore Automation Services",
  },
];


/* =========================================================
   FAQ
   ========================================================= */

export const automateFAQs: FAQItem[] = [
  {
    question:
      "What does Bixeltek mean by Automate?",

    answer:
      "Automate covers the systems, integrations and workflows that help businesses reduce repetitive manual work, move information between tools and handle customer or operational processes more consistently.",
  },

  {
    question:
      "What types of business processes can you automate?",

    answer:
      "Depending on the business, this can include lead capture and routing, CRM workflows, WhatsApp communication, email notifications, ecommerce processes, reporting, approvals, data synchronization, internal tasks and other repeatable workflows.",
  },

  {
    question:
      "Can you integrate our existing CRM?",

    answer:
      "Yes, where the CRM provides the necessary integration capabilities. We can assess how it currently fits into your process and connect relevant lead sources, communication tools, websites, ecommerce systems or other applications around it.",
  },

  {
    question:
      "Can you connect WhatsApp to our business workflows?",

    answer:
      "Yes, where the required WhatsApp Business capabilities and approved integration methods are available. Workflows can be designed around appropriate events such as enquiries, reminders, updates and customer communication.",
  },

  {
    question:
      "Do you work with n8n and Zapier?",

    answer:
      "Yes. The right integration method depends on the workflow, systems involved, data requirements, maintenance needs and level of customization. n8n, Zapier, APIs and webhooks can all be considered where appropriate.",
  },

  {
    question:
      "Can you connect systems that do not have a direct integration?",

    answer:
      "Potentially. If a system provides an API, webhook or another supported integration method, a custom connection may be possible. We assess the technical capabilities of the systems before recommending an approach.",
  },

  {
    question:
      "Can AI be part of the automation?",

    answer:
      "Yes, when it solves a useful part of the process. Examples can include classification, information extraction, content workflows, internal knowledge tasks or assisted decision-making with appropriate human review.",
  },

  {
    question:
      "Will automation remove the need for our team?",

    answer:
      "Not necessarily. The goal is usually to reduce repetitive work and improve consistency while keeping people involved where judgement, communication or exception handling adds value.",
  },

  {
    question:
      "What if our current process is messy?",

    answer:
      "That is often where process mapping becomes important. Automating a poorly understood process can simply make the same problems happen faster, so we first identify how the work currently moves and where it should improve.",
  },

  {
    question:
      "Can you automate our lead follow-up?",

    answer:
      "Yes, depending on your lead sources, CRM, communication systems and sales process. Workflows can help with lead routing, notifications, task creation, acknowledgements and defined follow-up steps while leaving appropriate conversations to the sales team.",
  },

  {
    question:
      "How do you make sure an automation does not break?",

    answer:
      "Workflows should be tested against normal and exceptional conditions before launch. After launch, monitoring, error handling, ownership and periodic review help identify problems as connected systems change.",
  },

  {
    question:
      "Do we need to replace our existing software?",

    answer:
      "Not necessarily. In many cases the better approach is to connect the systems already in use. Replacement only becomes relevant when an existing platform cannot support an important business requirement or is creating a larger operational problem.",
  },

  {
    question:
      "How do we know what to automate first?",

    answer:
      "A useful starting point is usually a repeatable process that happens frequently, involves multiple people or systems, creates delays or errors, and has a clear business outcome. We can map the workflow and prioritize opportunities before implementation.",
  },
];


/* =========================================================
   FINAL CTA
   ========================================================= */

export const automateFinalCTA: AutomateFinalCTAData = {
  eyebrow:
    "READY TO CONNECT THE WORK?",

  h2:
    "Find the Manual Steps, Missing Connections & Lost Opportunities in Your Business",

  description:
    "You do not need to automate everything. Start by identifying where information gets stuck, where your team repeats the same work and where customers or leads are waiting for the next step.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#automation-project",

  secondaryButtonText:
    "See What We Can Connect",

  secondaryButtonHref:
    "#connected-systems",
};