import type {
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

// ============================================================
// WEB APPLICATION DEVELOPMENT - SUPPORTING SERVICE PAGE DATA
// Keep this page focused beneath the Web Design & Development pillar.
// Verify route names and component props against the repository.
// ============================================================

export interface WebApplicationsMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface WebApplicationsPoint {
  title: string;
  description: string;
}

export interface WebApplicationsProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface WebApplicationsWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: WebApplicationsPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface WebApplicationsFinalCtaData {
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

export const webApplicationsMetadata: WebApplicationsMetadata = {
  title: "Web Application Development Services | Bixeltek",
  description:
    "Build custom web applications around your business workflows, users and data with considered UX, API integrations and maintainable development.",
  keywords: [
    "web application development",
    "custom web application development",
    "web app development services",
    "business web applications",
    "custom web apps",
    "web application developers",
  ],
  // Canonical route under custom-app-development
  canonical: "https://bixeltek.com/services/custom-app-development/web-applications",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const webApplicationsBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Custom App Development", href: "/services/custom-app-development" },
  { label: "Web Applications", href: "/services/custom-app-development/web-applications" },
];

// ============================================================
// JUMP LINKS
// Keep the navigation short because this is a supporting page.
// ============================================================

export const webApplicationsJumpLinks: JumpLinkItem[] = [
  { label: "What We Build", href: "#web-app-overview" },
  { label: "Who It Helps", href: "#web-app-fit" },
  { label: "Our Approach", href: "#web-app-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const webApplicationsHero = {
  eyebrow: "CUSTOM WEB APPLICATION DEVELOPMENT",
  h1: "Web Applications Built Around How Your Business Works",
  p1:
    "When a website needs to do more than present information, a web application can bring your workflows, users and business data into one practical digital experience.",
  p2:
    "Bixeltek designs and develops custom web applications for defined business needs - from internal portals and customer-facing tools to workflow systems and API-connected platforms.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Web Design & Development",
  secondaryLinkHref: "/services/web-design",
  microcopy:
    "Start with the problem to solve, the people who will use it and the systems it needs to connect with.",
};

// ============================================================
// WHAT A WEB APPLICATION IS / WHAT WE BUILD
// ============================================================

export const webApplicationsOverview = {
  eyebrow: "WHAT IS A WEB APPLICATION?",
  h2: "A Digital Tool Designed to Help People Get Work Done",
  intro:
    "A web application is an interactive browser-based system that lets people complete tasks, manage information or use business functionality - not just read pages. It may include accounts, dashboards, forms, permissions, data workflows or connections to other services.",
  body:
    "Unlike a standard marketing website, a web application is shaped around the actions users need to perform and the rules the business needs the system to follow. The right solution may be a focused tool or a larger platform, depending on the workflow and users involved.",
  closingCopy:
    "If the primary need is to explain your services and generate enquiries, our Web Design & Development service may be the better starting point. A custom application makes sense when users need to do something through the product.",
};

// ============================================================
// WHO IT IS FOR / WHEN IT MAKES SENSE
// ============================================================

export const webApplicationsFit = {
  eyebrow: "WHO IT HELPS",
  h2: "For Businesses With a Workflow That Needs More Than a Website",
  intro:
    "Custom web applications are useful when an important process is difficult to manage through disconnected tools, manual work or a conventional website.",
  points: [
    {
      title: "Teams Managing Repetitive Workflows",
      description:
        "Bring recurring tasks, approvals, records or status updates into a clearer workflow with defined roles and visibility.",
    },
    {
      title: "Businesses Serving Customers Online",
      description:
        "Give customers a dedicated place to submit information, track activity, manage requests or access account-specific features.",
    },
    {
      title: "Companies Working Across Multiple Systems",
      description:
        "Create a more coherent experience when staff need to work with data from existing APIs, business platforms or internal tools.",
    },
    {
      title: "Founders Validating a Digital Product",
      description:
        "Build a focused first version around the essential user journey, then use feedback to decide what should be developed next.",
    },
  ],
  notAlwaysNeeded: {
    title: "When a custom application may be unnecessary",
    description:
      "If a standard website, existing SaaS product or well-supported off-the-shelf tool already meets the requirement, custom development may add avoidable cost and maintenance. We should validate the workflow and constraints before recommending a bespoke build.",
  },
};

// ============================================================
// COMMON APPLICATION TYPES / SCOPE
// Keep the list focused; do not turn this supporting page into
// a long catalogue of every possible software product.
// ============================================================

export const webApplicationsScope: ScopeCard[] = [
  {
    title: "Internal Business Portals",
    description:
      "Give teams a central workspace for records, requests, operational information and role-specific tasks, with access based on what each user needs to do.",
  },
  {
    title: "Customer & Partner Portals",
    description:
      "Create secure, account-based experiences for customers or partners to submit requests, view relevant information and manage interactions with your business.",
  },
  {
    title: "Workflow & Operations Tools",
    description:
      "Replace selected manual hand-offs with structured forms, status tracking, approvals and notifications where a defined workflow can make work easier to manage.",
  },
  {
    title: "Dashboards & Business Intelligence",
    description:
      "Bring operational metrics and business data into focused dashboards that help managers monitor performance, identify exceptions and make informed decisions.",
  },
  {
    title: "Reporting & Analytics Interfaces",
    description:
      "Turn application data into useful reports, searchable records and filtered views, with access controls that help users find the information relevant to their role.",
  },
  {
    title: "API-Connected Applications",
    description:
      "Connect applications to existing services when APIs, permissions and data rules support reliable integration, with data ownership and error handling defined before implementation.",
  },
];

// ============================================================
// HOW WE WORK
// ============================================================

export const webApplicationsProcess: WebApplicationsProcessStage[] = [
  {
    number: "01",
    title: "Understand the Business Workflow",
    description:
      "Clarify the users, tasks, business rules, pain points and desired outcomes. Identify where existing processes break down before deciding what the application should do.",
  },
  {
    number: "02",
    title: "Map User Journeys & Requirements",
    description:
      "Define user roles, permissions, key journeys, data requirements and integration dependencies so the application reflects how people actually work.",
  },
  {
    number: "03",
    title: "Define the First Useful Version",
    description:
      "Prioritize essential features and workflows for an achievable first release, separating must-have functionality from ideas that can wait until later.",
  },
  {
    number: "04",
    title: "Design & Develop the Application",
    description:
      "Build the interface, application logic and required data connections around the agreed scope, keeping usability, maintainability and performance in view.",
  },
  {
    number: "05",
    title: "Test Workflows & Integrations",
    description:
      "Validate core journeys, permissions, data handling, error states and connected services before launch, including scenarios where something fails or information is incomplete.",
  },
  {
    number: "06",
    title: "Launch, Monitor & Improve",
    description:
      "Release the application with appropriate monitoring and handover, then use feedback, usage patterns and operational needs to prioritize future improvements.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const webApplicationsWhyChoose: WebApplicationsWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "A Practical Application, Not Features for the Sake of Features",
  intro:
    "A useful web application starts with a clear workflow and a realistic scope. The interface, data model, permissions and integrations should work together to help people complete tasks reliably.",
  points: [
    {
      title: "Business Logic Comes First",
      description:
        "We begin with the process and its constraints so the application reflects how the work needs to happen - not just a list of requested screens.",
    },
    {
      title: "A Clear, Task-Focused Experience",
      description:
        "We organize the interface around users' goals, making common actions and important information easier to understand and use.",
    },
    {
      title: "Integrations Planned With Care",
      description:
        "We consider data ownership, permissions, API limits and failure handling before connecting the application to other systems.",
    },
    {
      title: "Scope That Can Evolve",
      description:
        "We prioritize the essential version first and keep future improvements in view, rather than assuming every possible feature belongs in the first release.",
    },
  ],
  closingCopy:
    "The aim is a maintainable tool that solves a defined business problem and can be improved as your requirements become clearer.",
  ctaText: "Discuss Your Application",
  ctaHref: "#final-cta",
};

// ============================================================
// RELATED SERVICES
// Verify these destinations against the current routes.
// ============================================================

export const webApplicationsRelatedServices: RelatedServiceCard[] = [
  {
    title: "Web Design & Development",
    description:
      "For business websites focused on communicating your offer, presenting services and generating enquiries, start with the main web development service.",
    linkText: "Explore Web Design & Development",
    destination: "/services/web-design",
  },
  {
    title: "Custom-Coded Websites",
    description:
      "Explore custom-coded website development when you need a tailored public-facing website or frontend experience.",
    linkText: "Explore Custom-Coded Websites",
    destination: "/custom-coded-websites",
  },
  {
    title: "Custom CMS Websites",
    description:
      "For content-heavy websites that need structured editing and publishing workflows, compare a custom CMS approach.",
    linkText: "Explore Custom CMS Websites",
    destination: "/custom-cms-websites",
  },
];

// ============================================================
// FAQ - concise, supporting-page coverage
// ============================================================

export const webApplicationsFaqs: FAQItem[] = [
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A conventional business website mainly presents information and helps visitors understand a company or contact it. A web application provides interactive functionality, such as accounts, dashboards, workflows or data management. Some projects need both, but the main user goal should determine the scope.",
  },
  {
    question: "What kinds of web applications can Bixeltek build?",
    answer:
      "Depending on the requirements, projects may include internal portals, customer or partner portals, workflow tools, dashboards and applications connected to existing APIs. We define the scope around the users, business rules and systems involved rather than treating every application as the same product.",
  },
  {
    question: "Can a web application integrate with our existing software?",
    answer:
      "Often, if the existing system provides suitable APIs or another supported integration method. The feasibility depends on access, permissions, data formats, limits and the reliability requirements of the workflow. These should be checked during discovery.",
  },
  {
    question: "Should we build a custom application or use existing software?",
    answer:
      "Use an existing product when it meets the workflow and operational requirements at an acceptable cost. Custom development is worth considering when important needs cannot be met cleanly, or when a tailored user experience or integration provides a clear business benefit.",
  },
  {
    question: "How long does web application development take?",
    answer:
      "The timeline depends on workflow complexity, user roles, data requirements, integrations and testing needs. A focused first version is very different from a large multi-role platform, so a realistic estimate should follow discovery and scope definition.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const webApplicationsFinalCta: WebApplicationsFinalCtaData = {
  id: "final-cta",
  eyebrow: "HAVE A WORKFLOW TO IMPROVE?",
  h2: "Let's Define the Web Application You Actually Need",
  description:
    "Tell us who will use the application, what they need to accomplish and which systems it may need to connect with. We can help define a practical first scope before development begins.",
  primaryCta: {
    label: "Discuss Your Application",
    href: "#contact",
  },
  supportingCopy:
    "We will start with the problem and workflow - not assume a custom build is always the answer.",
};


export const webApplicationsUseCases: WebApplicationsPoint[] = [
  {
    title: "Replace Spreadsheet-Driven Processes",
    description:
      "Bring scattered records, manual updates and repetitive coordination into a structured application with shared data, defined responsibilities and clearer status tracking.",
  },
  {
    title: "Give Customers a Self-Service Workspace",
    description:
      "Let customers access relevant records, submit requests, track progress or manage account-specific information without relying on every interaction being handled manually.",
  },
  {
    title: "Coordinate Teams & Approvals",
    description:
      "Structure requests, assignments, review stages and approvals so teams can understand what needs attention, who owns the next step and where work is delayed.",
  },
  {
    title: "Bring Disconnected Systems Together",
    description:
      "Connect supported APIs and business tools to reduce duplicate data entry and make important information easier to access across existing workflows.",
  },
  {
    title: "Monitor Operations in One Place",
    description:
      "Give managers and operational teams a consolidated view of relevant activity, exceptions and performance indicators without manually compiling multiple reports.",
  },
  {
    title: "Turn a Digital Product Idea into a Working Application",
    description:
      "Validate the core user journey and essential functionality with a focused first version before committing to a broader product roadmap and additional capabilities.",
  },
];


export interface WebApplicationsControlPanelItem {
  title: string;
  context: string;
  consideration: string;
}

export const webApplicationsControlPanels: WebApplicationsControlPanelItem[] = [
  {
    title: "Role-Based Access & Permissions",
    context:
      "Tailor visibility, actions and settings to each role's responsibilities.",
    consideration:
      "Protects sensitive operations without cluttering day-to-day screens.",
  },
  {
    title: "Operational Status & Exception Handling",
    context:
      "Surface pending items, bottlenecks and failed tasks in real time.",
    consideration:
      "Helps teams spot what needs attention and resolve issues quickly.",
  },
  {
    title: "Records, Filters & Bulk Actions",
    context:
      "Search, filter and navigate large datasets effortlessly.",
    consideration:
      "Streamlines repetitive updates with controlled batch actions.",
  },
  {
    title: "Configuration & Business Rules",
    context:
      "Manage operational thresholds and rules through intuitive controls.",
    consideration:
      "Allows authorized staff to adapt workflows without code changes.",
  },
];