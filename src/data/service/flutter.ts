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
// FLUTTER APP DEVELOPMENT — SPECIALIST SERVICE PAGE
// Parent service: /services/mobile-app-development
// Proposed child route: /services/mobile-app-development/flutter
//
// Content strategy:
// - Make this a decision-led Flutter specialist page, not a copy
//   of the general Mobile App Development page.
// - Explain where Flutter is a good fit, where trade-offs remain,
//   and what buyers should plan beyond the shared codebase.
// - Technology/service items are possible scope, not a promise that
//   every project includes every integration.
// - Confirm component interfaces, route, delivery scope and claims
//   against the actual repository before publishing.
// ============================================================

export interface FlutterMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface FlutterPoint {
  title: string;
  description: string;
}

export interface FlutterDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface FlutterProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface FlutterTechnologyItem {
  name: string;
  category: string;
  description: string;
  icon?: string;
  href?: string;
}

export interface FlutterUseCase {
  title: string;
  businessSituation: string;
  implementationConsideration: string;
  successSignal: string;
}

export interface FlutterFitData {
  eyebrow: string;
  h2: string;
  intro: string;
  goodFit: FlutterPoint[];
  evaluateAlternatives: FlutterPoint[];
  closingCopy: string;
}

export interface FlutterWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: FlutterPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface FlutterFinalCtaData {
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

// ============================================================
// METADATA
// Keyword targets are intent-led suggestions, not verified
// search-volume claims. Validate against Search Console / keyword
// research before making volume or ranking decisions.
// ============================================================

export const flutterMetadata: FlutterMetadata = {
  title: "Flutter App Development Services | Bixeltek",
  description:
    "Build Flutter apps around real user journeys, backend requirements and platform behaviour. Explore cross-platform iOS and Android development with Bixeltek.",
  keywords: [
    "Flutter app development services",
    "Flutter app development company",
    "Flutter mobile app development",
    "custom Flutter app development",
    "Flutter developers",
    "cross-platform app development",
    "Flutter application development",
  ],
  canonical: "https://bixeltek.com/services/custom-app-development/mobile-app-development/flutter",
};

// ============================================================
// BREADCRUMBS & JUMP LINKS
// ============================================================

export const flutterBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Custom App Development", href: "/services/custom-app-development" },
  { label: "Mobile App Development", href: "/services/custom-app-development/mobile-app-development" },
  { label: "Flutter App Development", href: "/services/custom-app-development/mobile-app-development/flutter" },
];

export const flutterJumpLinks: JumpLinkItem[] = [
  { label: "Common Challenges", href: "#flutter-problems" },
  { label: "What We Build", href: "#flutter-capabilities" },
  { label: "Is Flutter the Right Fit?", href: "#flutter-fit" },
  { label: "Product Use Cases", href: "#flutter-use-cases" },
  { label: "Key Decisions", href: "#flutter-decisions" },
  { label: "Our Process", href: "#flutter-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// The copy leads with the product and business problem, while
// making the primary search intent explicit.
// ============================================================

export const flutterHero = {
  eyebrow: "FLUTTER APP DEVELOPMENT",
  h1: "Flutter App Development for Products Built Around Real User Journeys",
  p1:
    "Flutter gives teams a shared codebase for building mobile experiences across iOS and Android. That can help keep common product logic and interface work aligned—but it does not remove the need to plan for platform behaviour, device capabilities, integrations and release testing.",
  p2:
    "Bixeltek approaches Flutter development around the work users need to complete, the data the app depends on and the product's next stage of growth. The result should be a deliberate first release with a clear path for testing, launch and future changes.",
  primaryButtonText: "Discuss a Flutter App",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Compare Mobile App Options",
  secondaryLinkHref: "/services/mobile-app-development",
  microcopy:
    "Start with the product requirements. Choose the framework after the important journeys and constraints are understood.",
};

// ============================================================
// PROBLEMS THIS PAGE SHOULD HELP THE BUYER RECOGNIZE
// Keep problems specific to cross-platform product delivery.
// ============================================================

export const flutterProblems: ProblemCard[] = [
  {
    title: "The Same Product Is Drifting Across iOS and Android",
    description:
      "When screens and business rules are implemented separately, small differences can build up across releases. Flutter can share much of the interface and application logic, but teams still need to decide where platform-specific interactions or behaviours are appropriate.",
  },
  {
    title: "The First Version Works, but Every New Feature Gets Harder",
    description:
      "A prototype can hide the cost of tightly coupled screens, unclear state ownership or data logic embedded in widgets. The architecture should reflect the product's expected complexity without adding enterprise-level machinery to a small first release.",
  },
  {
    title: "The UI Is Ready Before the Data Flow Is Understood",
    description:
      "Authentication, API contracts, loading states, failed requests, pagination and permission rules shape the experience as much as the visible screens. Leaving those decisions until late can force rework across multiple journeys.",
  },
  {
    title: "The App Becomes Unreliable When Connectivity Changes",
    description:
      "For field work, travel or frequent on-the-go use, a lost connection can interrupt more than a screen load. Offline behaviour, local persistence and synchronization need to be designed explicitly where the workflow depends on them.",
  },
  {
    title: "Device Features Depend on More Than a Flutter Widget",
    description:
      "Camera access, location, biometrics, Bluetooth, push notifications or payment SDKs may involve platform permissions, plugin compatibility and native configuration. Their feasibility should be checked against the target devices and operating-system versions early.",
  },
  {
    title: "Testing Happens Too Late or Only on One Device",
    description:
      "A journey can behave differently with slow networks, denied permissions, expired sessions, older devices or a platform-specific plugin. A sensible test plan covers the paths that carry the greatest user or operational risk, not just whether each screen opens.",
  },
];

// ============================================================
// OVERVIEW: WHAT FLUTTER MEANS IN A PRODUCT CONTEXT
// ============================================================

export const flutterOverview = {
  eyebrow: "WHAT IS FLUTTER APP DEVELOPMENT?",
  h2: "One Shared Codebase, Designed Around Two Platform Experiences",
  intro:
    "Flutter is Google's UI toolkit for building applications with Dart. For a mobile product, it allows a team to share substantial parts of the interface and application code across iOS and Android instead of maintaining two entirely separate implementations.",
  body:
    "That shared foundation is useful when the product has common user journeys, business rules and design patterns. It does not mean every platform detail should be identical: permissions, operating-system behaviour, native SDKs, app-store requirements and user expectations still need deliberate handling.",
  closingCopy:
    "The practical question is not simply whether Flutter can target both platforms. It is whether the product's requirements make a shared Flutter implementation the most maintainable approach compared with native development, React Native or a browser-based experience.",
};

// ============================================================
// SERVICE CAPABILITIES — 8 PANELS
// These describe possible work packages; each project is scoped
// according to requirements, existing systems and ownership.
// ============================================================

export const flutterScope: ScopeCard[] = [
  {
    title: "Product Discovery & First-Release Scope",
    description:
      "Define the users, key tasks, business rules and dependencies that the first release must support. Separate launch-critical workflows from ideas that can be validated or added later, so scope reflects a useful product rather than a long feature wish list.",
  },
  {
    title: "Flutter App Development for iOS & Android",
    description:
      "Build shared app functionality and interfaces for the agreed iOS and Android targets. Reuse code where it benefits the product, while isolating platform-specific behaviour where the experience, SDK or operating system requires it.",
  },
  {
    title: "Product UI & Platform-Aware Interaction Design",
    description:
      "Translate the core journeys into coherent screens, navigation, forms, loading states and error handling. Maintain a recognizable product experience without ignoring platform conventions, accessibility needs or different device sizes.",
  },
  {
    title: "Backend & API Integration",
    description:
      "Connect app workflows to existing or separately scoped backend services. Confirm endpoint behaviour, authentication, data contracts, pagination, timeouts and failure states before relying on the connection in user-critical flows.",
  },
  {
    title: "Authentication, Sessions & User Permissions",
    description:
      "Implement the agreed sign-in, sign-out, session renewal and role-dependent experiences using the selected identity or backend service. Access rules must be enforced by the appropriate backend as well as reflected in the client interface.",
  },
  {
    title: "Device Capabilities & Third-Party SDKs",
    description:
      "Assess requirements such as camera, location, biometrics, push notifications, maps, Bluetooth or payment services. Confirm plugin and native SDK support, permissions, platform configuration and any external service requirements before treating a capability as straightforward.",
  },
  {
    title: "Offline Flows & Data Synchronization",
    description:
      "Where users must continue working without a reliable connection, define what is stored locally, what remains available offline, how updates sync and how conflicts or failed requests are handled. Offline-first behaviour is an explicit product requirement, not an automatic Flutter feature.",
  },
  {
    title: "Testing, Store Readiness & Release Preparation",
    description:
      "Validate important flows across target platforms, supported devices and relevant failure states. Prepare release builds and coordinate the agreed store-submission requirements, signing, configuration and handover responsibilities; store approval remains subject to each platform's review rules.",
  },
];

// ============================================================
// FLUTTER FIT: A BUYING DECISION, NOT A FRAMEWORK PROMOTION
// ============================================================

export const flutterFit: FlutterFitData = {
  eyebrow: "IS FLUTTER THE RIGHT FIT?",
  h2: "Choose Flutter When Shared Product Work Is an Advantage",
  intro:
    "Flutter can be a strong option for a custom mobile product with shared workflows across iOS and Android. The right answer depends on how closely those journeys align, which device features matter and how the application will be supported after launch.",
  goodFit: [
    {
      title: "The Core Journeys Are Common Across iOS and Android",
      description:
        "Users follow largely the same product flows, business rules and data model across both platforms, making shared implementation valuable.",
    },
    {
      title: "The Product Needs a Distinctive, Consistent Interface",
      description:
        "The experience benefits from a deliberate design system and carefully controlled visual behaviour, rather than relying entirely on default platform widgets.",
    },
    {
      title: "The App Is Connected to APIs or Business Systems",
      description:
        "The mobile client is one interface to a defined backend, account system or service layer, and the API boundaries can be agreed before development.",
    },
    {
      title: "The Product Will Grow in Deliberate Stages",
      description:
        "The first release can focus on essential journeys while the code structure leaves a sensible path for new features, integrations and supported platforms.",
    },
  ],
  evaluateAlternatives: [
    {
      title: "A Core Capability Relies on Specialized Native APIs",
      description:
        "Check the availability and maturity of required plugins or native SDKs. Native development or a mixed approach may be more appropriate when a critical feature cannot be supported reliably through the chosen Flutter stack.",
    },
    {
      title: "The Main Need Is a Searchable, Content-Led Website",
      description:
        "Flutter's web support is geared more toward app-like experiences than text-heavy public websites. For pages where crawlable content and conventional web navigation are central, an HTML-based website or web framework may be the better fit.",
    },
    {
      title: "An Existing Product or SaaS Tool Already Solves the Need",
      description:
        "A custom app adds build, store-release and maintenance responsibilities. Validate that the required user experience or workflow genuinely justifies a bespoke mobile product before committing to one.",
    },
  ],
  closingCopy:
    "We should be able to explain why Flutter fits the product's requirements—and what would make us recommend another approach—before development scope is finalized.",
};

// ============================================================
// USE CASES — GROUNDED IN DISTINCT PRODUCT WORKFLOWS
// These are illustrative patterns, not claims about past Bixeltek
// projects or guaranteed results.
// ============================================================

export const flutterUseCases: FlutterUseCase[] = [
  {
    title: "Customer Booking & Self-Service Apps",
    businessSituation:
      "Customers need to book or change appointments, manage an account, view status updates or complete repeat tasks without calling the business each time.",
    implementationConsideration:
      "The product depends on reliable identity, clear booking or transaction states, notifications where required, and safe handling of changes when data on the server has moved on.",
    successSignal:
      "Users can complete the main task, recover from an error and understand the confirmed state without needing staff to interpret the app for them.",
  },
  {
    title: "Field Service & Operations Apps",
    businessSituation:
      "Staff work across locations and need to capture job details, photos, checklists, signatures or status updates from a phone while moving between tasks.",
    implementationConsideration:
      "Connectivity, device permissions, data validation, queued updates and synchronization conflict rules need to be mapped according to the operational risk of losing or duplicating a record.",
    successSignal:
      "A field worker can complete the defined workflow in realistic network conditions, and the office team can trust the status and records that return to the system.",
  },
  {
    title: "Commerce & Repeat-Purchase Experiences",
    businessSituation:
      "A business wants a mobile channel for product discovery, saved items, purchasing, order status or loyalty interactions alongside its existing commerce operation.",
    implementationConsideration:
      "Catalogue, inventory, price, checkout, payment-provider and order data should have clear ownership. The app should not silently create a second source of truth for commerce records.",
    successSignal:
      "The customer can move from discovery to a confirmed order or a clear next step, with prices and order status reconciled against the agreed commerce system.",
  },
  {
    title: "Subscription or Account-Based Products",
    businessSituation:
      "Users return regularly to consume a service, manage a plan, review usage or access features associated with an account.",
    implementationConsideration:
      "Entitlements, account states, renewal or cancellation rules, platform billing requirements and support workflows must be confirmed for the product's markets and business model.",
    successSignal:
      "The app accurately reflects what the user can access and provides clear states when a plan, payment or account condition changes.",
  },
  {
    title: "A Mobile Interface for an Existing Platform",
    businessSituation:
      "A business already has a website, SaaS product, CRM or custom backend, but users need a mobile-friendly way to complete a small set of high-value tasks.",
    implementationConsideration:
      "Review API coverage, authentication and authorization, error handling and the workflows that genuinely benefit from a mobile app before reproducing the entire web product on a phone.",
    successSignal:
      "The mobile app makes selected tasks easier to complete while data, permissions and business rules remain consistent with the existing system.",
  },
  {
    title: "A Product MVP That Needs Real-World Validation",
    businessSituation:
      "A founder or product team needs to test a core proposition with real users before committing to a broader feature roadmap.",
    implementationConsideration:
      "Identify the smallest end-to-end user journey that can test the central assumption, while still treating authentication, data handling, failure states and release readiness as part of the product.",
    successSignal:
      "The release can answer a specific product question through user behaviour or feedback, rather than simply demonstrating a set of screens.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS
// A practical decision section, distinct from the list of services.
// ============================================================

export const flutterImplementationDecisions: FlutterDecisionItem[] = [
  {
    title: "Flutter vs Native Core",
    context:
      "Shared Dart logic accelerates dual-platform delivery across iOS and Android.",
    consideration:
      "Validate third-party native SDKs and OS-specific hardware dependencies before committing to a single codebase.",
  },
  {
    title: "Adaptive UI & Platform Conventions",
    context:
      "A unified brand identity must still feel intuitive to native mobile users.",
    consideration:
      "Align typography and styling while adhering to iOS Human Interface and Android Material guidelines for system sheets, gestures, and back navigation.",
  },
  {
    title: "Backend Readiness & Mobile APIs",
    context:
      "Web APIs often deliver unoptimized payloads that drain mobile performance and battery.",
    consideration:
      "Design mobile-specific endpoints, token refreshes, rate limits, and lean JSON structures before mobile implementation begins.",
  },
  {
    title: "Offline Sync & Local Persistence",
    context:
      "Critical field or operational tasks must continue smoothly during intermittent connectivity.",
    consideration:
      "Establish SQLite/Hive caching, background queueing, conflict resolution, and idempotent server sync upfront.",
  },
];

// ============================================================
// ENGINEERING ECOSYSTEM
// These are possible project building blocks, not a logo wall or
// a claim that every item is included in every engagement.
// ============================================================

export const flutterTechnologies: FlutterTechnologyItem[] = [
  {
    name: "Flutter",
    category: "Application framework",
    description:
      "Build the app's interface and much of its application logic from a shared codebase, while isolating platform-specific needs where required.",
    href: "https://flutter.dev/",
  },
  {
    name: "Dart",
    category: "Programming language",
    description:
      "Use Dart for application logic, models, UI composition and asynchronous work within the Flutter project.",
    href: "https://dart.dev/",
  },
  {
    name: "REST or GraphQL APIs",
    category: "Data integration",
    description:
      "Connect screens and workflows to the selected backend, with data contracts and error behaviour agreed for the use case.",
    href: "https://docs.flutter.dev/data-and-backend/networking",
  },
  {
    name: "Platform Plugins & Channels",
    category: "Device integration",
    description:
      "Evaluate supported plugins or native bridges for features such as location, camera, biometrics or connected hardware, based on platform requirements.",
    href: "https://docs.flutter.dev/platform-integration/platform-channels",
  },
  {
    name: "Backend & Identity Services",
    category: "Application services",
    description:
      "Integrate an existing backend or a separately scoped service for accounts, authorization, business data and notifications. The specific service depends on the current stack and product requirements.",
  },
  {
    name: "Flutter DevTools & Automated Tests",
    category: "Quality and diagnostics",
    description:
      "Use suitable debugging, profiling and test tools to investigate performance and verify critical behaviour before a release.",
    href: "https://docs.flutter.dev/testing/overview",
  },
];

// ============================================================
// DELIVERY PROCESS
// Six stages, each with a different purpose. Do not render these
// as six generic descriptions of "planning, coding, testing".
// ============================================================

export const flutterProcess: FlutterProcessStage[] = [
  {
    number: "01",
    title: "Define the Product and Its Critical Journey",
    description:
      "Clarify who will use the app, the task they need to finish, the business rules behind it and how the team will judge whether the first release is useful. Identify assumptions that need validating before expanding scope.",
  },
  {
    number: "02",
    title: "Check Platform Fit and Technical Dependencies",
    description:
      "Assess the target platforms, device capabilities, external SDKs, authentication, backend APIs, data constraints and release requirements. Surface high-risk dependencies before they become late-stage blockers.",
  },
  {
    number: "03",
    title: "Map the Data, State and Application Structure",
    description:
      "Define how the app obtains and updates data, owns interface state, handles errors and separates UI responsibilities from backend or business logic. Use a structure appropriate to the product's size instead of imposing a fixed pattern on every app.",
  },
  {
    number: "04",
    title: "Build Complete User Flows in Iterations",
    description:
      "Develop the agreed screens and integrations in end-to-end slices, reviewing real flows as they become available. Prioritize functional journeys and meaningful error states over disconnected screens that only look complete in a demo.",
  },
  {
    number: "05",
    title: "Validate on the Target Platforms",
    description:
      "Test important user journeys, API failures, permission choices, responsive layouts, authentication states and device-specific behaviour. Combine automated tests with manual checks appropriate to the app's risk and supported devices.",
  },
  {
    number: "06",
    title: "Prepare Release and Define Ongoing Ownership",
    description:
      "Coordinate release configuration, signing, store submission responsibilities, environment settings, analytics or crash diagnostics where scoped, and the handover plan. Clarify who owns updates, incident response and future improvements after launch.",
  },
];

// ============================================================
// WHY BIXELTEK — SIX DISTINCT REASONS
// Avoid unverified claims about years, volumes, certifications,
// guaranteed results or a named Flutter portfolio.
// ============================================================

export const flutterWhyChoose: FlutterWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Flutter Decisions Connected to the Product Behind the App",
  intro:
    "The framework is only one part of a mobile product. User journeys, data contracts, platform requirements, release readiness and future ownership need to support the same product goal.",
  points: [
    {
      title: "We Begin With the User's Task",
      description:
        "The first question is what someone needs to accomplish through the app. That keeps feature choices tied to a real workflow rather than the novelty of a framework or a checklist of screens.",
    },
    {
      title: "We Evaluate Flutter Against the Actual Requirements",
      description:
        "Cross-platform development can be useful, but it is not automatically the right answer for every product. Platform APIs, user expectations, integration needs and long-term ownership should inform the decision.",
    },
    {
      title: "We Treat API Behaviour as Part of UX",
      description:
        "Loading, stale data, validation, failed requests, access restrictions and session expiry all affect what users experience. These states need to be planned alongside the visible interface.",
    },
    {
      title: "We Make Important Trade-Offs Explicit",
      description:
        "Offline capability, custom device features, shared UI, testing depth and release responsibilities can change scope. Making those decisions early reduces the chance of unexpected work late in delivery.",
    },
    {
      title: "We Prioritize Complete Flows Over Screen Counts",
      description:
        "A usable product needs its key journey to work from start to finish, including errors and recovery. That is a more meaningful release goal than counting how many screens have been implemented.",
    },
    {
      title: "We Plan for the App After Launch",
      description:
        "A maintainable handover should make dependencies, configuration, release ownership and future change points clear. The exact support arrangement should be agreed rather than assumed.",
    },
  ],
  closingCopy:
    "The objective is not to use Flutter at any cost. It is to build a product whose platform choice, implementation and maintenance plan make sense for the people who will depend on it.",
  ctaText: "Discuss a Flutter App",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// Explain what drives scope without inventing fixed prices or
// delivery timelines before technical discovery.
// ============================================================

export const flutterInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number and Complexity of User Journeys",
    description:
      "A few connected tasks are different from an app with multiple user roles, long-running workflows, many states and complex permissions. Estimate complete journeys and edge cases, not just the number of screens.",
  },
  {
    title: "Backend Readiness and API Changes",
    description:
      "An app that can use stable, documented APIs differs from one that needs new endpoints, authentication changes, data modelling or backend development. Existing system access and ownership can affect the work significantly.",
  },
  {
    title: "Device Features and External SDKs",
    description:
      "Camera, location, Bluetooth, biometrics, payments, push notifications or specialized hardware can introduce plugin, native configuration, permission and compatibility work that needs early validation.",
  },
  {
    title: "Offline Behaviour and Data Synchronization",
    description:
      "Local storage and synchronization add design and test requirements when users must work without a reliable connection. Conflict resolution, queued actions and data freshness all affect complexity.",
  },
  {
    title: "Design System and Platform Adaptation",
    description:
      "A defined design system can speed decisions, while bespoke interactions, accessibility requirements, multiple device sizes or platform-specific patterns can increase design and validation effort.",
  },
  {
    title: "Quality Assurance and Release Requirements",
    description:
      "Supported OS versions, real-device coverage, automated test depth, security-sensitive journeys, store account readiness, signing and review requirements affect release planning.",
  },
  {
    title: "Maintenance, Analytics and Future Changes",
    description:
      "SDK updates, dependency maintenance, crash diagnostics, analytics events, new integrations and recurring feature work should be scoped separately from the initial launch where appropriate.",
  },
];

// ============================================================
// RELATED SERVICES
// Parent route and web design route are known from the current
// Bixeltek site. Validate each destination again at implementation.
// ============================================================

export const flutterRelatedServices: RelatedServiceCard[] = [
  {
    title: "Mobile App Development",
    description:
      "Explore the broader mobile app service if you are comparing Flutter with native iOS, native Android or React Native, or if the platform choice is not yet settled.",
    linkText: "Explore Mobile App Development",
    destination: "/services/mobile-app-development",
  },
  {
    title: "Web Design & Development",
    description:
      "If the main requirement is a public, searchable website rather than a mobile product, consider a web-first experience and the development approach that fits it.",
    linkText: "Explore Web Design & Development",
    destination: "/services/web-design",
  },
  {
    title: "Ecommerce Development",
    description:
      "For apps that extend a commerce operation, assess how product, pricing, inventory, checkout and order data will connect to the existing ecommerce platform.",
    linkText: "Explore Ecommerce Development",
    destination: "/ecommerce-websites",
  },
];

// ============================================================
// FAQ — ANSWER BUYING AND TECHNICAL QUESTIONS HONESTLY
// ============================================================

export const flutterFaqs: FAQItem[] = [
  {
    question: "What is Flutter app development?",
    answer:
      "Flutter app development uses Google's Flutter framework and the Dart language to build application interfaces and logic. For mobile products, Flutter allows teams to share substantial code across iOS and Android, while still handling platform-specific capabilities, configuration and testing where required.",
  },
  {
    question: "Is Flutter suitable for both iOS and Android apps?",
    answer:
      "Flutter supports building for both platforms from a shared codebase. Whether it is the best choice depends on the app's required device features, platform-specific behaviour, external SDKs, user expectations and the team's ability to maintain the product. These constraints should be checked before the implementation approach is finalized.",
  },
  {
    question: "Does one Flutter codebase mean the app will behave identically on both platforms?",
    answer:
      "No. Sharing code can keep common logic and interface work aligned, but the operating systems, permissions, native SDKs, device capabilities and store requirements still differ. Important flows should be tested on the platforms and devices the product intends to support.",
  },
  {
    question: "Should we choose Flutter or React Native?",
    answer:
      "There is no universal winner. The decision should consider the existing team's skills, the design and interaction requirements, native integrations, available libraries, maintenance expectations and the architecture of the surrounding product. We should compare those requirements before recommending a framework rather than choose by trend alone.",
  },
  {
    question: "Can a Flutter app connect to our existing backend or APIs?",
    answer:
      "Usually, when the backend provides suitable APIs and access controls. The review should confirm authentication, data contracts, error handling, pagination, rate limits and whether existing endpoints cover the mobile workflows. New or adapted backend services may need to be scoped separately.",
  },
  {
    question: "Can a Flutter app work without an internet connection?",
    answer:
      "It can support selected offline workflows, but offline behaviour must be designed. The project needs to define what data is stored locally, which actions can be queued, how updates synchronize and what happens when changes conflict or a request cannot be completed.",
  },
  {
    question: "Can Flutter use the camera, location, biometrics or Bluetooth?",
    answer:
      "Those capabilities may be available through supported plugins or platform-specific integration. Feasibility depends on the exact feature, iOS and Android requirements, plugin maintenance, permissions and any native SDKs involved. A critical device requirement should be validated before it becomes a delivery assumption.",
  },
  {
    question: "Can Flutter be used to build our website as well?",
    answer:
      "Flutter supports web deployment, especially for app-centric experiences such as interactive tools or applications that share product logic with a mobile app. For a public, text-heavy website where conventional crawlable content, document navigation and SEO are central, a web framework built around HTML may be more suitable.",
  },
  {
    question: "How long does Flutter app development take?",
    answer:
      "The timeline depends on the user journeys, design readiness, backend availability, platform integrations, offline requirements, testing depth and release responsibilities. A useful estimate follows a scoped first release and a review of key dependencies; screen count alone is not enough to predict it.",
  },
  {
    question: "What affects the cost of Flutter app development?",
    answer:
      "Cost is shaped by the number and complexity of workflows, backend changes, authentication, device features, data synchronization, design requirements, platform testing, store preparation and post-launch support. We would scope those factors before giving a project estimate rather than publish an unsupported fixed price.",
  },
  {
    question: "Does Bixeltek handle App Store and Google Play submission?",
    answer:
      "Release preparation and store submission responsibilities should be agreed in the project scope. They can involve signing, app identifiers, store assets, privacy and data disclosures, platform account access and review follow-up. Final approval is controlled by Apple and Google, so it should not be presented as guaranteed.",
  },
  {
    question: "What happens after the app launches?",
    answer:
      "A live app needs ownership for dependency and SDK updates, operating-system compatibility, bug fixes, diagnostics and future feature work. The launch plan should define who monitors issues, who can publish a release and whether ongoing maintenance is included or handled under a separate agreement.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const flutterFinalCta: FlutterFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLANNING A CROSS-PLATFORM PRODUCT?",
  h2: "Let's Assess Whether Flutter Fits Your App",
  description:
    "Tell us what users need to do, which platforms matter, what systems the app must connect with and where the product may need to grow. We can use those requirements to define a realistic first scope and identify the technical decisions that need attention before development starts.",
  primaryCta: {
    label: "Discuss Your Flutter App",
    href: "/contact-us",
  },
  supportingCopy:
    "No framework should be chosen on its name alone. Start with the user journey, technical constraints and the responsibility of maintaining the product after release.",
};

// ============================================================
// CONTENT / IMPLEMENTATION NOTES (NOT A PAGE SECTION)
// Complete these checks before publishing:
// - Confirm the proposed /services/mobile-app-development/flutter route and canonical.
// - Match every export to the real section/component interfaces.
// - Confirm the final parent route remains /services/mobile-app-development.
// - Verify destinations in flutterRelatedServices in the repository.
// - Confirm design, discovery, backend, device-plugin, QA and store
//   submission services included in the public scope.
// - Do not add Flutter case-study results unless a real project is
//   verified as Flutter-built and its evidence is approved for use.
// - Do not add fixed price, timeline, app-count, performance or
//   cost-saving claims without project-specific substantiation.
// - Keep the Flutter-vs-web caveat if the page mentions Flutter Web.
//
// Technical references reviewed for this draft:
// https://docs.flutter.dev/app-architecture/guide
// https://docs.flutter.dev/testing/overview
// https://docs.flutter.dev/platform-integration/web/faq
// https://docs.flutter.dev/platform-integration/platform-channels
// https://docs.flutter.dev/perf/best-practices
// ============================================================
