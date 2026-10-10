import whyChooseUs from'@/assets/why-choose-bixeltek-for--automation.jpg'

/* =========================================================
   MOBILE / AUTOMATION SERVICE PAGE DATA
   ========================================================= */

/* =========================================================
   TYPES
   ========================================================= */

export interface AutomationMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface AutomationHeroData {
  eyebrow: string;
  h1: string;
  p1: string;
  p2: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
  microcopy: string;
  image?: string;
}

export interface AutomationOverviewData {
  eyebrow: string;
  h2: string;
  intro: string;
  body: string;
  closingCopy: string;
}

export interface AutomationProblemCard {
  title: string;
  description: string;
}

export interface AutomationScopeCard {
  title: string;
  description: string;
}

export interface AutomationUseCaseCard {
  title: string;
  description: string;
  examples?: string[];
}

export interface AutomationSystemCard {
  title: string;
  description: string;
  examples?: string[];
}

export interface AutomationPrinciple {
  title: string;
  description: string;
}

export interface AutomationProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface AutomationPostLaunchData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: AutomationPrinciple[];
}

export interface AutomationFinalCTAData {
  id: string;
  eyebrow: string;
  h2: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  supportingCopy: string;
}


/* =========================================================
   METADATA
   ========================================================= */

export const automationMetadata: AutomationMetadata = {
  title:
    "Business Automation Services | CRM, Workflow & Marketing Automation | Bixeltek",

  description:
    "Connect your marketing, enquiries and operations with practical business automation. Bixeltek builds CRM integrations, lead routing, workflows, reporting and customer communication systems around how your business actually works.",

  keywords: [
    "business automation services",
    "workflow automation services",
    "CRM automation",
    "CRM integration services",
    "marketing automation services",
    "business process automation",
    "lead management automation",
    "workflow automation",
    "marketing and sales automation",
    "automation services Hyderabad",
  ],

  canonical:
    "https://bixeltek.com/services/automation",
};


/* =========================================================
   BREADCRUMBS
   ========================================================= */

export const automationBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Automation",
    href: "/services/automation",
  },
];


/* =========================================================
   JUMP NAVIGATION
   ========================================================= */

export const automationJumpLinks: JumpLinkItem[] = [
  {
    label: "What Automation Means",
    href: "#what-automation-means",
  },
  {
    label: "Where Businesses Lose Opportunities",
    href: "#where-opportunities-are-lost",
  },
  {
    label: "When Automation Makes Sense",
    href: "#when-automation-makes-sense",
  },
  {
    label: "What We Automate",
    href: "#what-we-automate",
  },
  {
    label: "CRM & Integrations",
    href: "#crm-integrations",
  },
  {
    label: "Workflows",
    href: "#workflows",
  },
  {
    label: "Measurement",
    href: "#measurement",
  },
  {
    label: "Our Process",
    href: "#automation-process",
  },
  {
    label: "Why Bixeltek",
    href: "#why-bixeltek",
  },
  {
    label: "Investment",
    href: "#investment",
  },
  {
    label: "Post Launch",
    href: "#post-launch",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];


/* =========================================================
   HERO
   ========================================================= */

export const automationHeroPreviewData: AutomationHeroData = {
  eyebrow:
    "BUSINESS AUTOMATION · CRM · WORKFLOWS · INTEGRATIONS",

  h1:
    "Connect the Systems Behind Your Business So Fewer Opportunities Get Lost",

  p1:
    "Your marketing may generate enquiries, your website may capture them and your sales team may be ready to follow up, but if those systems do not work together, important information can still disappear between the steps.",

  p2:
    "We connect marketing, enquiries and operations through practical automation, CRM integrations, lead routing, customer communication, reporting and workflow improvements. We first identify where information or manual work is creating friction, then build a more dependable process around it.",

  primaryButtonText:
    "Talk to an Automation Expert",

  primaryButtonHref:
    "#plan-project",

  secondaryLinkText:
    "Explore Our Work",

  secondaryLinkHref:
    "#selected-work",

  microcopy:
    "Already using multiple tools but still relying on spreadsheets, manual follow-ups or repeated data entry? Start by mapping where the process is breaking before adding more software.",

  // image: automationHeroImage,
};


/* =========================================================
   WHAT AUTOMATION ACTUALLY MEANS
   ========================================================= */

export const automationOverview: AutomationOverviewData = {
  eyebrow:
    "WHAT BUSINESS AUTOMATION ACTUALLY MEANS",

  h2:
    "Automation Should Connect the Work, Not Just Add More Tools",

  intro:
    "Business automation is the process of connecting repeatable tasks, information and decisions so work can move between systems with less manual intervention.",

  body:
    "For a growing business, that can mean sending a website enquiry into the CRM, assigning it to the right person, triggering an appropriate response, updating the pipeline when something happens, notifying a team member when human action is required, or bringing information from several systems into one useful report.",

  closingCopy:
    "The objective is not to automate every task. It is to identify the points where manual work, disconnected systems or slow handoffs are creating unnecessary effort, missed follow-ups or poor visibility, then automate the parts that are consistent enough to benefit from it.",
};


/* =========================================================
   WHERE OPPORTUNITIES ARE LOST
   ========================================================= */

export const automationProblems: AutomationProblemCard[] = [
  {
    title:
      "A Lead Submits a Form and Nobody Owns It",

    description:
      "An enquiry arrives through a website or campaign but is left in an inbox, spreadsheet or notification queue. Without clear routing and ownership, response time depends on someone noticing it.",
  },

  {
    title:
      "Marketing and Sales See Different Information",

    description:
      "Campaign data, lead details and sales activity can live in separate systems, making it difficult to understand where enquiries came from, what happened next and which channels are producing useful opportunities.",
  },

  {
    title:
      "Your Team Repeats the Same Data Entry",

    description:
      "Information is copied between forms, spreadsheets, CRM records, emails and other systems because the tools are not connected. The work takes time and creates more opportunities for inconsistent data.",
  },

  {
    title:
      "Follow-Up Depends on Memory",

    description:
      "A first response may happen quickly, but reminders, second follow-ups and re-engagement can disappear when sales teams are busy. Important opportunities can become inactive simply because the next action was never triggered.",
  },

  {
    title:
      "Customers Receive the Wrong Communication at the Wrong Time",

    description:
      "When customer status is not shared between systems, messages can be mistimed or duplicated. Automation should use meaningful triggers and clear conditions rather than sending communication simply because a timer has elapsed.",
  },

  {
    title:
      "Reporting Requires Manual Assembly",

    description:
      "When marketing, CRM and operational data remain disconnected, teams spend time preparing reports instead of using them. Connected data can make recurring reporting more consistent and easier to review.",
  },
];


/* =========================================================
   WHEN AUTOMATION MAKES SENSE
   ========================================================= */

export const whenAutomationMakesSense = {
  eyebrow:
    "WHEN AUTOMATION MAKES SENSE",

  h2:
    "Automate the Process When the Process Is Clear Enough to Improve",

  intro:
    "Automation is most useful when a business already has a repeatable process but too much of that process depends on manual actions, disconnected systems or people remembering what happens next.",

  points: [
    {
      title:
        "You Receive Enquiries From Multiple Sources",

      description:
        "Website forms, advertising campaigns, chat, calls and other channels can be connected so lead information reaches the right system without repeated manual entry.",
    },

    {
      title:
        "Leads Need Consistent Follow-Up",

      description:
        "When prospects require reminders, nurture or scheduled follow-up, automation can create the next action while allowing people to handle the conversations that actually need human involvement.",
    },

    {
      title:
        "Different Teams Need the Same Information",

      description:
        "Marketing, sales, customer service and operations can work from connected information rather than maintaining separate versions of the same customer record.",
    },

    {
      title:
        "Your CRM Is Being Used as a Database Instead of a Workflow",

      description:
        "A CRM becomes more useful when lead stages, ownership, reminders, notifications and reporting reflect the actual way your team works.",
    },

    {
      title:
        "Manual Reporting Is Becoming a Bottleneck",

      description:
        "Recurring reporting can often be improved by connecting the systems that already contain the required information and defining consistent reporting logic.",
    },

    {
      title:
        "Operations Depend on Repetitive Handoffs",

      description:
        "Approvals, notifications, task creation, status changes and information transfers can often be automated when the rules and ownership are well defined.",
    },
  ],

  notAlwaysNeeded: {
    title:
      "Automation may not be the right first step when…",

    description:
      "The underlying process is still changing, nobody agrees on who owns each stage, the required data is unreliable, the business does not yet have enough repeat volume, or the desired outcome has not been clearly defined. Automating a broken or unclear process can simply make the problem harder to see.",
  },
};


/* =========================================================
   WHAT OUR AUTOMATION WORK COVERS
   ========================================================= */

export const automationScope: AutomationScopeCard[] = [
  {
    title:
      "Workflow & Process Mapping",

    description:
      "We map how work moves between marketing, sales and operations to identify delays, repeated tasks, missing handoffs and practical opportunities for automation.",
  },

  {
    title:
      "CRM Integration & Workflow Automation",

    description:
      "We connect your CRM with relevant systems and build workflow logic around lead stages, ownership, tasks, notifications and repeatable sales processes.",
  },

  {
    title:
      "Lead Capture & Routing",

    description:
      "We connect lead sources to the right systems and define routing rules so enquiries reach the appropriate person or team without unnecessary manual intervention.",
  },

  {
    title:
      "Customer Communication Workflows",

    description:
      "We build communication flows around meaningful customer actions, including acknowledgements, reminders, follow-ups, notifications and other approved touchpoints.",
  },

  {
    title:
      "Data Synchronization & Integrations",

    description:
      "We connect the tools your business already uses so important information moves between systems instead of being repeatedly copied or updated by hand.",
  },

  {
    title:
      "Reporting & Business Visibility",

    description:
      "We connect relevant data sources and reporting workflows so lead activity, pipeline movement and operational information are easier to review consistently.",
  },

  {
    title:
      "Ecommerce & Order Workflows",

    description:
      "We connect ecommerce events with customer communication, order handling, operations and reporting so important actions do not depend on manual coordination.",
  },

  {
    title:
      "Practical Process Automation",

    description:
      "We automate repeatable tasks, notifications, approvals and handoffs where clear rules can reduce unnecessary manual work and make processes more dependable.",
  },
];


/* =========================================================
   AUTOMATION USE CASES
   ========================================================= */

export const automationUseCases: AutomationUseCaseCard[] = [
  {
    title:
      "Lead Management",

    description:
      "Move enquiries from first contact into a structured process where ownership, follow-up and status are easier to manage.",

    examples: [
      "Lead capture",
      "Lead routing",
      "Lead assignment",
      "Follow-up reminders",
    ],
  },

  {
    title:
      "Marketing & Sales Automation",

    description:
      "Connect campaign activity with CRM and customer journeys so marketing and sales can work from better shared information.",

    examples: [
      "Campaign-to-CRM workflows",
      "Lead nurture",
      "Lifecycle updates",
      "Sales notifications",
    ],
  },

  {
    title:
      "Customer Communication",

    description:
      "Trigger relevant communication from meaningful customer actions while keeping human involvement where it matters.",

    examples: [
      "Email workflows",
      "WhatsApp workflows",
      "Appointment reminders",
      "Status notifications",
    ],
  },

  {
    title:
      "CRM & Pipeline Automation",

    description:
      "Turn repeatable sales rules into workflow logic that helps teams keep records, ownership and next actions consistent.",

    examples: [
      "Stage updates",
      "Task creation",
      "Assignment rules",
      "Escalation reminders",
    ],
  },

  {
    title:
      "Operations Automation",

    description:
      "Reduce repetitive coordination between teams when a process has clear triggers, conditions and ownership.",

    examples: [
      "Internal notifications",
      "Approvals",
      "Task handoffs",
      "Status synchronization",
    ],
  },

  {
    title:
      "Reporting & Data Workflows",

    description:
      "Reduce the manual work involved in collecting recurring business information and create more dependable reporting flows.",

    examples: [
      "Data synchronization",
      "Automated reports",
      "Pipeline reporting",
      "Marketing attribution data",
    ],
  },
];


/* =========================================================
   CRM & INTEGRATIONS
   ========================================================= */

export const automationSystems: AutomationSystemCard[] = [
  {
    title:
      "CRM Systems",

    description:
      "Connect and configure the CRM around the actual sales process so customer information, ownership and pipeline activity remain useful to the people working with it.",

    examples: [
      "Lead records",
      "Pipeline stages",
      "Task assignment",
      "Sales activity",
    ],
  },

  {
    title:
      "Websites & Forms",

    description:
      "Connect website forms and enquiry points to the systems responsible for storing, routing and following up with new leads.",

    examples: [
      "Contact forms",
      "Lead forms",
      "Landing pages",
      "Website events",
    ],
  },

  {
    title:
      "Advertising & Lead Sources",

    description:
      "Bring relevant campaign and lead information into the customer workflow so teams can understand both the source of an enquiry and what happened after it arrived.",

    examples: [
      "Google Ads",
      "Meta campaigns",
      "Lead generation campaigns",
      "Campaign attribution",
    ],
  },

  {
    title:
      "Customer Communication Platforms",

    description:
      "Connect appropriate communication channels to customer and workflow data so messages can be triggered from real business events.",

    examples: [
      "Email",
      "WhatsApp",
      "SMS",
      "Notifications",
    ],
  },

  {
    title:
      "Business & Operational Systems",

    description:
      "Where appropriate, connect customer workflows with the operational systems that need to act on the information after a sale, enquiry or business event.",

    examples: [
      "Ecommerce",
      "Inventory",
      "Calendars",
      "Internal systems",
    ],
  },

  {
    title:
      "Custom APIs & Integrations",

    description:
      "When standard integrations are not enough, custom API work can connect systems that otherwise have no reliable way to exchange the information the workflow requires.",

    examples: [
      "REST APIs",
      "Webhooks",
      "Custom integrations",
      "Data synchronization",
    ],
  },
];


/* =========================================================
   HOW WE DESIGN AUTOMATION
   ========================================================= */

export const automationPrinciples: AutomationPrinciple[] = [
  {
    title:
      "Start With the Business Process",

    description:
      "We first understand how work moves today, who owns each step and where the process slows down before deciding what should be automated.",
  },

  {
    title:
      "Automate What Should Be Repeatable",

    description:
      "We automate consistent tasks and decisions while keeping the right points for human judgement, review and intervention.",
  },

  {
    title:
      "Build for Real-World Workflows",

    description:
      "Workflows need clear ownership and a path for missing information, failed actions, unusual cases and situations that need human attention.",
  },

  {
    title:
      "Keep It Useful and Maintainable",

    description:
      "We measure whether the process actually improved while keeping the automation understandable and practical to maintain as the business grows.",
  },
];


/* =========================================================
   MEASUREMENT
   ========================================================= */

export const automationMeasurement = {
  eyebrow:
    "MEASUREMENT & VISIBILITY",

  h2:
    "An Automation Is Only Useful If You Can Tell Whether It Improved the Process",

  intro:
    "A workflow being triggered successfully does not automatically mean the business process improved. We connect automation to practical measures that help teams understand what changed.",

  metrics: [
    {
      title:
        "Response Time",

      description:
        "How quickly does a new enquiry receive acknowledgement or reach the person responsible for follow-up?",
    },

    {
      title:
        "Lead Handling",

      description:
        "How many enquiries are successfully captured, assigned and moved into the appropriate stage?",
    },

    {
      title:
        "Follow-Up Completion",

      description:
        "Are the required follow-up actions happening consistently instead of depending on individual memory?",
    },

    {
      title:
        "Pipeline Movement",

      description:
        "Are leads progressing through the defined stages, or are they becoming inactive somewhere in the process?",
    },

    {
      title:
        "Data Quality",

      description:
        "Is the information moving between systems complete, consistent and useful enough for sales and reporting?",
    },

    {
      title:
        "Manual Work Reduced",

      description:
        "How much repetitive data entry, coordination or reporting work has been removed from the process?",
    },
  ],

  closingCopy:
    "The exact measures depend on the workflow being improved. A lead-routing system, customer communication workflow and internal operations automation should not all be judged using the same metric.",
};


/* =========================================================
   PROCESS
   ========================================================= */

export const automationProcess: AutomationProcessStage[] = [
  {
    number:
      "01",

    title:
      "Map the Current Process",

    description:
      "We document how information enters the business, where it moves, who acts on it and where delays, repeated work or missing handoffs occur.",
  },

  {
    number:
      "02",

    title:
      "Identify Automation Opportunities",

    description:
      "We separate genuine automation opportunities from processes that first need clearer ownership, better data or a different business rule.",
  },

  {
    number:
      "03",

    title:
      "Design the Workflow",

    description:
      "We define triggers, conditions, actions, ownership, exceptions and the systems that need to exchange information before implementation begins.",
  },

  {
    number:
      "04",

    title:
      "Connect & Build",

    description:
      "We configure the relevant integrations and workflows, connect the required data sources and implement the agreed automation logic.",
  },

  {
    number:
      "05",

    title:
      "Test the Complete Journey",

    description:
      "We test the workflow from its initial trigger through each system, handoff and exception path so the automation behaves as expected before it becomes part of daily operations.",
  },

  {
    number:
      "06",

    title:
      "Launch, Measure & Improve",

    description:
      "Once live, we review how the workflow performs in practice, identify issues or unnecessary steps and improve the system based on actual business usage.",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const automationWhyChoose = {
  eyebrow:
    "WHY BIXELTEK",

  h2:
    "Automation Built Around the Business, Not Around a Tool",

  intro:
    "Automation becomes difficult when it is treated as a collection of disconnected integrations. Our approach starts with the business process and considers the website, advertising, CRM, customer journey and operational systems that need to work together.",

  points: [
    {
      title:
        "We Look at the Whole Customer Journey",

      description:
        "An enquiry does not stop when someone submits a form. We consider what happens between acquisition, lead capture, routing, follow-up, sales activity and the eventual business outcome.",
    },

    {
      title:
        "We Can Build the Systems Around the Workflow",

      description:
        "Because Bixeltek also works across websites, ecommerce, advertising, analytics and digital development, automation can be considered alongside the systems generating and receiving the data.",
    },

    {
      title:
        "We Fix the Process Before Automating It",

      description:
        "If ownership, data or workflow logic is unclear, adding automation may make the problem worse. We first identify what needs to be clarified before deciding what should be automated.",
    },

    {
      title:
        "We Keep Humans Where They Add Value",

      description:
        "Automation should handle repeatable work while people remain responsible for decisions, conversations and exceptions that require judgement.",
    },

    {
      title:
        "We Focus on Practical Business Outcomes",

      description:
        "The goal may be faster lead response, fewer missed follow-ups, cleaner data, less manual reporting or more dependable operations. The automation is a means to that outcome.",
    },

    {
      title:
        "We Think About What Happens After Launch",

      description:
        "Workflows need monitoring, ownership and occasional refinement as your tools, processes, team structure and customer behaviour change.",
    },
  ],

  closingCopy:
    "The goal is not to make your business look more automated. It is to make important work move more reliably between the people and systems already responsible for your growth.",

  ctaText:
    "Get In Touch",

  ctaHref:
    "#plan-project",
    image: whyChooseUs,
};


/* =========================================================
   SELECTED WORK
   ========================================================= */

export const automationCaseStudies = [
  /*
   * Only add verified Bixeltek automation / CRM / integration
   * projects here.
   *
   * Do not invent automation metrics or project outcomes.
   *
   * Example structure:
   *
   * {
   *   title: "...",
   *   category: "Automation & Integrations",
   *   description: "...",
   *   href: "...",
   *   image: ...,
   * }
   */
];


/* =========================================================
   INVESTMENT
   ========================================================= */

export const automationInvestmentFactors = [
  {
    title:
      "Workflow Complexity",

    description:
      "The number of steps, conditions, handoffs and exceptions in the process affects how much planning and implementation is required.",
  },

  {
    title:
      "Number of Systems",

    description:
      "Connecting a small number of compatible tools is very different from coordinating data across multiple platforms with different APIs and data structures.",
  },

  {
    title:
      "Data Quality & Structure",

    description:
      "Existing customer and business data may need mapping, cleanup or validation before reliable automation can be introduced.",
  },

  {
    title:
      "CRM & Pipeline Requirements",

    description:
      "The complexity of lead stages, ownership rules, permissions, routing and reporting can significantly affect the implementation scope.",
  },

  {
    title:
      "Communication Workflows",

    description:
      "Automated email, WhatsApp, SMS or notification workflows introduce additional logic, templates, triggers and communication requirements.",
  },

  {
    title:
      "Custom Integration Requirements",

    description:
      "When standard integrations cannot connect the required systems, custom APIs, webhooks or development work may be necessary.",
  },

  {
    title:
      "Testing & Exception Handling",

    description:
      "Critical business workflows need more than a happy-path test. Failure cases, missing data and human handoffs can increase implementation and QA requirements.",
  },

  {
    title:
      "Ongoing Optimization",

    description:
      "As your business changes, workflows may need new conditions, integrations, reporting or process improvements. Ongoing support can be scoped separately where required.",
  },
];


/* =========================================================
   BEYOND LAUNCH
   ========================================================= */

export const automationPostLaunch: AutomationPostLaunchData = {
  eyebrow:
    "BEYOND THE FIRST WORKFLOW",

  h2:
    "Automation Should Improve as the Business Learns What It Actually Needs",

  intro:
    "A workflow that works in testing can still reveal new requirements once a real team starts using it. New exceptions appear, processes change and additional opportunities become visible after the first system is connected.",

  points: [
     {
    title:
      "Start With the Business Process",

    description:
      "We understand how work moves today, who owns each step and where the process slows down before deciding what should be automated.",
  },

  {
    title:
      "Automate the Repeatable Parts",

    description:
      "We identify consistent tasks and decisions that can be automated while keeping the right points for human judgement and review.",
  },

  {
    title:
      "Keep Ownership Clear",

    description:
      "Every workflow should make it clear who or what is responsible for the next step, rather than creating another layer of ambiguity.",
  },

  {
    title:
      "Design for Real-World Exceptions",

    description:
      "Workflows should account for missing information, failed actions, unusual cases and situations that require human intervention.",
  },

  {
    title:
      "Measure the Business Effect",

    description:
      "We look beyond whether an automation ran and assess whether the process became faster, more reliable or easier to manage.",
  },

  {
    title:
      "Keep the System Maintainable",

    description:
      "Clear logic, sensible workflow boundaries and practical documentation help keep automation understandable as the business and its processes grow.",
  },
  ],
};


/* =========================================================
   RELATED SERVICES
   ========================================================= */

export const automationRelatedServices = [
  {
    title:
      "Web Design & Development",

    description:
      "Your website is often the first system generating customer information. If forms, landing pages or customer journeys are creating friction, the website may need to be improved alongside the automation layer.",

    linkText:
      "Explore Web Design Services",

    destination:
      "/services/web-design",
  },

  {
    title:
      "Ecommerce Development",

    description:
      "Online stores generate product, order and customer events that may need to flow into fulfilment, communication, reporting and retention workflows.",

    linkText:
      "Explore Ecommerce Development",

    destination:
      "/services/ecommerce-development",
  },

  {
    title:
      "Conversion Rate Optimization",

    description:
      "If the automation is receiving plenty of enquiries but the customer journey still loses opportunities, CRO can help identify and improve the experience before and after the lead enters the workflow.",

    linkText:
      "Explore CRO Services",

    destination:
      "/services/conversion-rate-optimization",
  },

  {
    title:
      "Application Development",

    description:
      "When your business workflow requires a custom customer or internal application rather than connecting existing tools, application development can become part of the broader digital system.",

    linkText:
      "Explore App Development",

    destination:
      "/services/mobile-app-development",
  },
];


/* =========================================================
   FAQS
   ========================================================= */

export const automationFaqs = [
  {
    question:
      "What is business automation?",

    answer:
      "Business automation connects repeatable tasks, information and decisions so work can move between people and systems with less manual intervention. Depending on the business, that can include CRM workflows, lead routing, customer communication, reporting, data synchronization or operational processes.",
  },

  {
    question:
      "What is the difference between CRM automation and business automation?",

    answer:
      "CRM automation focuses primarily on customer and sales processes such as lead assignment, pipeline updates, reminders and follow-up. Business automation is broader and can connect those CRM workflows with marketing, ecommerce, operations, reporting and other business systems.",
  },

  {
    question:
      "Can you connect our website forms to our CRM?",

    answer:
      "Yes. Website forms can be connected to the appropriate CRM or business system so enquiries are captured, structured and routed according to the agreed workflow.",
  },

  {
    question:
      "Can you automate lead routing and follow-up?",

    answer:
      "Yes. Where the routing and follow-up rules are clear, workflows can assign leads, create tasks, send appropriate notifications and trigger approved follow-up actions without requiring every step to be handled manually.",
  },

  {
    question:
      "Can you connect our CRM with other tools?",

    answer:
      "Yes. Depending on the systems involved, integrations can connect CRMs with websites, advertising platforms, communication tools, ecommerce systems, calendars, reporting systems and other business software.",
  },

  {
    question:
      "Can you automate WhatsApp or email communication?",

    answer:
      "Communication workflows can be included where the relevant platform, permissions, templates and business rules support automation. The exact implementation depends on the communication channel and the customer journey being automated.",
  },

  {
    question:
      "Can automation replace our sales team?",

    answer:
      "Automation should reduce repetitive coordination rather than remove the human part of selling. It can capture information, route leads, create reminders and trigger appropriate communication while sales teams remain responsible for conversations, decisions and exceptions.",
  },

  {
    question:
      "Do you use AI for automation?",

    answer:
      "AI can be useful for certain workflows, but it should not be added simply because it is available. We first understand the process and determine whether a conventional rule-based workflow, integration or AI-assisted approach is the appropriate solution.",
  },

  {
    question:
      "Can you automate our existing process without changing our CRM?",

    answer:
      "Sometimes. The answer depends on the capabilities of your existing CRM, available integrations, data structure and the workflow you want to improve. We assess the current setup before recommending whether configuration, integration or a larger change is required.",
  },

  {
    question:
      "What happens if our systems do not have a direct integration?",

    answer:
      "Depending on the platforms involved, information may be exchanged through APIs, webhooks or a custom integration. The appropriate approach depends on what each system exposes and how reliably the required data can be transferred.",
  },

  {
    question:
      "How much does business automation cost?",

    answer:
      "There is no useful single price because automation complexity varies significantly. Cost depends on the number of systems, workflow complexity, CRM requirements, data quality, communication channels, custom integrations, testing and ongoing support requirements.",
  },

  {
    question:
      "How do we know what should be automated first?",

    answer:
      "We look at the current process and prioritize areas where manual work, delays, repeated data entry, missed follow-up or disconnected information create meaningful business impact. Not every process needs automation, and some processes need clarification before they should be automated.",
  },

  {
    question:
      "Can you improve automation we already have?",

    answer:
      "Yes. Existing workflows can be reviewed for reliability, unnecessary complexity, missing exception handling, data quality, ownership and business performance before deciding what should be changed or rebuilt.",
  },
];


/* =========================================================
   FINAL CTA
   ========================================================= */

export const automationFinalCta: AutomationFinalCTAData = {
  id:
    "plan-project",

  eyebrow:
    "READY TO CONNECT THE WORK?",

  h2:
    "Find the Gaps Between Your Marketing, Enquiries and Operations",

  description:
    "If leads are being lost between tools, follow-up depends on memory, reporting takes too much manual work or your teams repeatedly move the same information between systems, we can start by mapping the current process and identifying where automation would actually help.",

  primaryCta: {
    label:
      "Review My Business Workflow",

    href:
      "#contact",
  },

  supportingCopy:
    "We’ll start with the process, systems and business outcome, not with a predetermined automation tool.",
};