import type {
  BreadcrumbItem,
  JumpLinkItem,
  ScopeCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

// ============================================================
// WEB & MOBILE APPLICATION DEVELOPMENT - PILLAR PAGE DATA
// Parent page for the existing Web Application and Mobile
// Application service pages. Confirm the final route and shared
// component contracts before integrating into the repository.
// ============================================================

export interface ApplicationDevelopmentMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export interface ApplicationDevelopmentPoint {
  title: string;
  description: string;
}

export interface ApplicationDevelopmentStage {
  number: string;
  title: string;
  description: string;
}

export interface ApplicationDevelopmentPanel {
  title: string;
  context: string;
  consideration: string;
}

export interface ApplicationDevelopmentFinalCta {
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

export const applicationDevelopmentMetadata: ApplicationDevelopmentMetadata = {
  title: "Web & Mobile Application Development Services | Bixeltek",
  description:
    "Plan and build web and mobile applications around your users, workflows and business goals. Explore custom application development with Bixeltek.",
  keywords: [
    "web and mobile application development",
    "application development services",
    "custom application development",
    "web application development company",
    "mobile app development services",
    "business application development",
    "custom web and mobile apps",
  ],
  // Canonical route for Custom App Development
  canonical: "https://bixeltek.com/services/custom-app-development",
};

export const applicationDevelopmentBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "Custom App Development",
    href: "/services/custom-app-development",
  },
];

export const applicationDevelopmentJumpLinks: JumpLinkItem[] = [
  { label: "What We Build", href: "#application-development-overview" },
  { label: "Choose the Right Approach", href: "#application-approach" },
  { label: "When It Makes Sense", href: "#application-fit" },
  { label: "Our Process", href: "#application-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const applicationDevelopmentHero = {
  eyebrow: "WEB & MOBILE APPLICATION DEVELOPMENT",
  h1: "Applications Built Around Your Users, Workflows and Business Goals",
  p1:
    "When a standard website or off-the-shelf tool cannot support the experience you need, a custom application can bring important tasks, information and customer interactions into a purpose-built digital product.",
  p2:
    "Bixeltek helps businesses plan and develop browser-based applications, mobile apps and connected digital experiences - with the scope shaped around real users, operational requirements and the problem to solve.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Our Development Approach",
  secondaryLinkHref: "#application-process",
  microcopy:
    "Start with the user, the job they need to complete and the systems the application must work with.",
};

// ============================================================
// WHAT APPLICATION DEVELOPMENT MEANS
// ============================================================

export const applicationDevelopmentOverview = {
  eyebrow: "WHAT IS APPLICATION DEVELOPMENT?",
  h2: "Digital Products That Help People Do More Than Browse",
  intro:
    "Application development is the process of planning, designing, building and improving software that helps people complete tasks, access services or work with business information. Depending on the users and context, that software may run in a web browser, on a mobile device or across both.",
  body:
    "The right application starts with the workflow and user experience - not with a predetermined technology. That means defining what people need to do, what information the system handles, which rules it must follow and how it should connect with the rest of the business.",
  closingCopy:
    "If your main goal is to present your business and generate enquiries, a conventional website may be sufficient. Application development is most useful when people need to perform meaningful actions through a digital product.",
};

// ============================================================
// WEB, MOBILE OR BOTH
// ============================================================

export const applicationDevelopmentApproach = {
  eyebrow: "CHOOSE THE RIGHT APPLICATION APPROACH",
  h2: "Web, Mobile or Both? Start With How People Will Use It",
  intro:
    "The best delivery approach depends on where users work, how often they return, what device capabilities they need and how the application fits into existing operations. We assess those requirements before recommending a platform or architecture.",
  panels: [
    {
      title: "Web Applications",
      context:
        "A browser-based application can give teams and customers access to workflows, records, dashboards and account-specific functionality without requiring a traditional app-store installation.",
      consideration:
        "This is often a practical fit for internal tools, customer portals, administration systems and experiences used across desktop and mobile browsers.",
    },
    {
      title: "Mobile Applications",
      context:
        "A mobile app can support frequent, on-the-go tasks and experiences that benefit from device features, app-based interactions or a persistent presence on a user's phone.",
      consideration:
        "Platform choices depend on the audience, device requirements, expected usage, maintenance capacity and whether iOS, Android or both need to be supported.",
    },
    {
      title: "Connected Web and Mobile Products",
      context:
        "Some products need a shared service layer with different interfaces for customers, field teams, administrators or business partners.",
      consideration:
        "We define shared data, authentication, permissions and API responsibilities early so each interface supports its users without creating conflicting versions of the same workflow.",
    },
  ] satisfies ApplicationDevelopmentPanel[],
  supportingNote:
    "We recommend the simplest maintainable approach that meets the user and business requirements - not the largest technical solution by default.",
};

// ============================================================
// WHEN APPLICATION DEVELOPMENT MAKES SENSE
// ============================================================

export const applicationDevelopmentFit = {
  eyebrow: "WHEN DOES IT MAKE SENSE?",
  h2: "When Your Business Needs a Purpose-Built Digital Experience",
  intro:
    "Custom application development is worth exploring when a clear user or operational need cannot be handled well by a standard website, existing software or a lightweight workflow tool.",
  points: [
    {
      title: "Manual Work Is Slowing the Team Down",
      description:
        "Repeated data entry, disconnected spreadsheets, approvals and status updates are creating avoidable effort or making work difficult to track.",
    },
    {
      title: "Customers Need More Self-Service",
      description:
        "Users need to sign in, manage information, submit requests, follow progress or access features that go beyond a public-facing website.",
    },
    {
      title: "Your Product Idea Needs a Working Version",
      description:
        "You need to validate a defined user journey and core functionality before expanding the product based on feedback and real usage.",
    },
    {
      title: "Existing Systems Do Not Work Well Together",
      description:
        "Important information is spread across business tools, and supported integrations could make the workflow more consistent and visible.",
    },
    {
      title: "Users Need a Dedicated Mobile Experience",
      description:
        "Customers or staff regularly complete tasks on phones, and the use case justifies a mobile-specific interface or device capabilities.",
    },
    {
      title: "The Current Software No Longer Fits",
      description:
        "An existing tool is creating material workflow limitations, but a replacement or custom layer needs to be assessed against cost, risk and ongoing ownership.",
    },
  ] satisfies ApplicationDevelopmentPoint[],
  notAlwaysNeeded: {
    title: "When custom development may not be the right first step",
    description:
      "If a standard SaaS product, existing platform or well-designed website already meets the need, custom development may add unnecessary cost and maintenance. We first clarify the workflow, constraints and expected value before recommending a bespoke application.",
  },
};

// ============================================================
// APPLICATION CAPABILITIES
// Broad pillar-level overview; detailed service pages cover the
// web-application and mobile-application specifics.
// ============================================================

export const applicationDevelopmentScope: ScopeCard[] = [
  {
    title: "Business & Operations Applications",
    description:
      "Organize internal records, requests, approvals and recurring tasks in a role-aware workspace built around how your team operates.",
  },
  {
    title: "Customer & Partner Experiences",
    description:
      "Give users a dedicated place to manage accounts, access relevant information, submit requests and interact with your services.",
  },
  {
    title: "Mobile Apps for iOS & Android",
    description:
      "Create mobile experiences for customer-facing products or internal teams, with the platform and development approach chosen around device needs and audience expectations.",
  },
  {
    title: "Dashboards & Data-Driven Interfaces",
    description:
      "Present operational information, key records and meaningful indicators in interfaces that help users understand activity and decide what to do next.",
  },
  {
    title: "Workflow & Service Platforms",
    description:
      "Structure multi-step processes with defined statuses, responsibilities, permissions and notifications where these improve visibility and accountability.",
  },
  {
    title: "API Integrations & Connected Systems",
    description:
      "Connect supported services and existing business systems while planning for data ownership, access control, API limits and failure handling.",
  },
];

// ============================================================
// HOW WE WORK
// ============================================================

export const applicationDevelopmentProcess: ApplicationDevelopmentStage[] = [
  {
    number: "01",
    title: "Understand the Problem & Users",
    description:
      "Clarify the business objective, intended users, current workflow and points of friction. Define what a successful outcome should look like before choosing features or technology.",
  },
  {
    number: "02",
    title: "Map Requirements & User Journeys",
    description:
      "Outline key journeys, roles, permissions, data needs, integrations and important edge cases so the proposed solution reflects real operating conditions.",
  },
  {
    number: "03",
    title: "Choose the Right Scope & Platform",
    description:
      "Prioritize the first useful release and assess web, mobile or combined delivery based on user behaviour, device needs, dependencies, budget and future ownership.",
  },
  {
    number: "04",
    title: "Design & Build the Application",
    description:
      "Develop the user interface, application logic and required data connections around the agreed requirements, keeping accessibility, usability and maintainability in view.",
  },
  {
    number: "05",
    title: "Validate Workflows & Prepare Launch",
    description:
      "Test important journeys, permissions, data handling, responsive behaviour and integrations. Resolve launch-critical issues and prepare the release and handover requirements.",
  },
  {
    number: "06",
    title: "Launch, Learn & Improve",
    description:
      "Monitor the application appropriately after release, gather feedback and review usage or operational issues to prioritize future improvements based on evidence.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const applicationDevelopmentWhyChoose = {
  eyebrow: "WHY BIXELTEK",
  h2: "Application Development Grounded in Real Business Requirements",
  intro:
    "A successful application needs more than working screens. The user journey, business rules, data, integrations and long-term maintenance all need to support the same objective.",
  points: [
    {
      title: "We Start With the Problem",
      description:
        "We clarify the process, users and constraints before recommending features, helping keep the initial scope connected to a real need.",
    },
    {
      title: "Web, Mobile & Website Context",
      description:
        "We consider how the application fits alongside your public website, customer acquisition journeys and existing digital touchpoints instead of treating it as an isolated product.",
    },
    {
      title: "Integration Requirements Considered Early",
      description:
        "We assess the available APIs, data ownership, access permissions and error scenarios before relying on connections to external systems.",
    },
    {
      title: "A Focused First Release",
      description:
        "We prioritize the essential user journeys and separate immediate requirements from future enhancements, helping avoid unnecessary complexity in the first version.",
    },
    {
      title: "Maintainability Is Part of the Decision",
      description:
        "We consider how the application will be updated, supported and extended - not only what is required to get the first release live.",
    },
  ] satisfies ApplicationDevelopmentPoint[],
  closingCopy:
    "The goal is a useful, maintainable digital product whose scope and technical choices are tied to the people who use it and the work it needs to support.",
  ctaText: "Discuss Your Application",
  ctaHref: "#final-cta",
};

// ============================================================
// DETAILED SERVICE PATHS
// These links intentionally route visitors to the existing
// specialist pages rather than duplicating all their content.
// Verify routes before publishing.
// ============================================================

export const applicationDevelopmentRelatedServices: RelatedServiceCard[] = [
  {
    title: "Web Application Development",
    description:
      "Explore browser-based applications for business workflows, internal tools, customer portals, dashboards and API-connected systems.",
    linkText: "Explore Web Application Development",
    destination: "/services/custom-app-development/web-applications",
  },
  {
    title: "Mobile Application Development",
    description:
      "Explore mobile app development for iOS and Android, with the platform and experience shaped around your users and product requirements.",
    linkText: "Explore Mobile Application Development",
    destination: "/services/custom-app-development/mobile-app-development",
  },
  {
    title: "Web Design & Development",
    description:
      "For a public-facing business website focused on presenting services, explaining your offer and generating enquiries, explore the website development service.",
    linkText: "Explore Web Design & Development",
    destination: "/services/web-design",
  },
  {
    title: "Ecommerce Development",
    description:
      "For product catalogues, online purchasing and commerce operations, explore ecommerce development rather than treating a full store as a generic application build.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
];

// ============================================================
// FAQ
// ============================================================

export const applicationDevelopmentFaqs: FAQItem[] = [
  {
    question: "What is the difference between web and mobile application development?",
    answer:
      "Web applications run through a browser and can be accessed across supported devices without a traditional app-store installation. Mobile applications are designed for mobile platforms and may be better suited to frequent on-the-go use or device-specific capabilities. The right choice depends on users, workflows and product requirements.",
  },
  {
    question: "Should we build a web app, a mobile app or both?",
    answer:
      "Start with where users will perform the task, how often they will use it, whether device capabilities are important and what needs to connect to existing systems. Some products need one focused interface; others benefit from shared services with separate web and mobile experiences. We define the requirements before recommending an approach.",
  },
  {
    question: "Can the application connect with our existing software?",
    answer:
      "Integration is often possible when the existing system offers suitable APIs or another supported method. Feasibility depends on access, permissions, data formats, usage limits and reliability requirements, which should be assessed during discovery.",
  },
  {
    question: "Can we start with a smaller version and add features later?",
    answer:
      "Yes. When the product can be divided into useful stages, we can prioritize the core journeys and essential functionality for the first release. Future features can then be assessed against user feedback, operational needs and the product roadmap.",
  },
  {
    question: "How much does custom application development cost?",
    answer:
      "Cost depends on the number and complexity of user journeys, platforms, permissions, integrations, data requirements, design needs, testing and ongoing support. A focused application is different from a multi-role product serving several audiences, so a meaningful estimate follows requirements and scope definition.",
  },
  {
    question: "How long does it take to develop an application?",
    answer:
      "The timeline depends on scope, platform choices, integrations, data complexity and validation requirements. Once the first release and its dependencies are defined, the work can be estimated more realistically than from a feature list alone.",
  },
  {
    question: "Do we always need a custom application?",
    answer:
      "No. An existing SaaS product, a standard website or a configured business tool may meet the need with less cost and maintenance. Custom development is worth considering when the workflow, user experience or integration requirements justify building something tailored.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const applicationDevelopmentFinalCta: ApplicationDevelopmentFinalCta = {
  id: "final-cta",
  eyebrow: "HAVE AN APPLICATION IDEA OR WORKFLOW TO IMPROVE?",
  h2: "Let's Work Out the Right Application for Your Business",
  description:
    "Tell us who the application is for, what people need to accomplish and which systems it may need to connect with. We can help define a practical starting scope and determine whether web, mobile or a combined approach fits best.",
  primaryCta: {
    label: "Discuss Your Application",
    href: "/contact-us",
  },
  supportingCopy:
    "Start with the business need. The platform and feature list come next.",
};
