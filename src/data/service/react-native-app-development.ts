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
// REACT NATIVE APP DEVELOPMENT - SPECIALIST SERVICE PAGE
// Page thesis:
// Help product owners decide whether React Native is a sensible
// fit, then show what a maintainable React Native product requires
// beyond shared screens: platform decisions, native dependencies,
// data flows, release discipline and testing.
//
// This page is intentionally a child of Mobile App Development.
// It does not claim that React Native is best for every app or that
// all projects use every library/service named below.
// ============================================================

export interface ReactNativeMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface ReactNativePoint {
  title: string;
  description: string;
}

export interface ReactNativeDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface ReactNativeProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface ReactNativeTechnologyItem {
  name: string;
  category: string;
  description: string;
  href?: string;
}

export interface ReactNativeUseCase {
  title: string;
  businessSituation: string;
  implementationConsideration: string;
  acceptanceSignal: string;
}

export interface ReactNativeFitData {
  eyebrow: string;
  h2: string;
  intro: string;
  goodFit: ReactNativePoint[];
  evaluateAlternatives: ReactNativePoint[];
  closingCopy: string;
}

export interface ReactNativeWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: ReactNativePoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface ReactNativeFinalCtaData {
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
// search-volume claims. Check the final URL against the repository
// and validate keyword demand with Search Console / keyword tools.
// ============================================================

export const reactNativeMetadata: ReactNativeMetadata = {
  title: "React Native App Development Services | Bixeltek",
  description:
    "Build React Native apps for iOS and Android around your product workflows, APIs and platform requirements. Explore custom React Native development with Bixeltek.",
  keywords: [
    "React Native app development services",
    "React Native app development company",
    "React Native developers",
    "custom React Native app development",
    "React Native mobile app development",
    "Expo app development",
    "cross-platform mobile app development",
  ],
  canonical: "https://bixeltek.com/services/custom-app-development/mobile-app-development/react-native",
};

// ============================================================
// BREADCRUMBS & JUMP LINKS
// ============================================================

export const reactNativeBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "Custom App Development",
    href: "/services/custom-app-development",
  },
  {
    label: "Mobile App Development",
    href: "/services/custom-app-development/mobile-app-development",
  },
  {
    label: "React Native App Development",
    href: "/services/custom-app-development/mobile-app-development/react-native",
  },
];

export const reactNativeJumpLinks: JumpLinkItem[] = [
  { label: "Common Challenges", href: "#react-native-problems" },
  { label: "What React Native Means", href: "#react-native-overview" },
  { label: "What We Build", href: "#react-native-capabilities" },
  { label: "Is It the Right Fit?", href: "#react-native-fit" },
  { label: "Product Use Cases", href: "#react-native-use-cases" },
  { label: "Key Engineering Decisions", href: "#react-native-decisions" },
  { label: "Our Process", href: "#react-native-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// Commercial promise: build a usable product with a maintainable
// shared codebase, without suggesting that shared code eliminates
// platform-specific engineering.
// ============================================================

export const reactNativeHero = {
  eyebrow: "REACT NATIVE APP DEVELOPMENT",
  h1: "React Native Apps Built Around Your Product, Not Just Its Screens",
  p1:
    "React Native lets teams build iOS and Android applications with React and JavaScript or TypeScript, while rendering platform-native interface components. It can be a practical choice when product logic and user journeys can be shared without forcing every platform interaction to be identical.",
  p2:
    "Bixeltek approaches React Native projects around the workflows users need to complete, the systems the app must connect to and the constraints that shape release and maintenance. The framework is a starting point; the product architecture and delivery decisions are what make the app workable after launch.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Compare Mobile App Approaches",
  secondaryLinkHref: "/services/mobile-app-development",
  microcopy:
    "Start with the required user journeys, integrations and platform constraints. Then choose the implementation approach that fits.",
};

// ============================================================
// PROBLEMS THIS PAGE SHOULD HELP THE BUYER RECOGNIZE
// These are product and delivery problems, not generic statements
// that every mobile app needs to be fast, modern or scalable.
// ============================================================

export const reactNativeProblems: ProblemCard[] = [
  {
    title: "The Team Has React Skills, but No Mobile Delivery Plan",
    description:
      "React experience provides a useful starting point, but a mobile product still needs navigation, application lifecycle handling, native permissions, device testing, build configuration and a release process. Treating mobile as web UI inside a new shell can leave those concerns unresolved until late in delivery.",
  },
  {
    title: "The Same Business Rule Is Being Rebuilt in Separate Apps",
    description:
      "When account rules, validation or core workflows are maintained independently for iOS and Android, the two versions can drift. React Native can share appropriate logic, but the project still needs clear boundaries for platform-specific components and behaviour.",
  },
  {
    title: "A Required SDK Changes the Technical Plan Late",
    description:
      "Payments, identity verification, maps, Bluetooth hardware, biometrics or a vendor-specific SDK may require native code, a development build or additional configuration. Confirming compatibility before committing to a delivery plan reduces the chance of discovering a critical blocker after interface work is underway.",
  },
  {
    title: "The App Looks Correct in Development but Struggles on Real Devices",
    description:
      "Large lists, image-heavy screens, repeated rendering, network delays and memory pressure can make a product feel sluggish. Performance needs to be assessed in release builds on representative devices rather than inferred from a fast developer machine or a development session.",
  },
  {
    title: "A Successful API Response Is Mistaken for a Finished Workflow",
    description:
      "A screen can receive data and still fail the real task when sessions expire, requests are retried, two users update the same record or the connection disappears mid-action. Mobile behaviour should be designed around loading, empty, error, stale-data and confirmation states-not just the ideal response.",
  },
  {
    title: "The First Release Has No Clear Owner for Updates",
    description:
      "The team needs to know who maintains dependencies, monitors crashes, manages app signing and handles new operating-system requirements. Some eligible JavaScript or asset changes may use an over-the-air update path, but native-code changes and store policies can still require a new binary and review.",
  },
];

// ============================================================
// OVERVIEW
// Explain what is distinctive about React Native without marketing
// it as a guaranteed shortcut or treating it as a web app wrapper.
// ============================================================

export const reactNativeOverview = {
  eyebrow: "WHAT REACT NATIVE APP DEVELOPMENT MEANS",
  h2: "Reuse Product Logic. Respect the Platform Where It Matters.",
  intro:
    "React Native brings the React programming model to native mobile apps. Teams can use JavaScript or TypeScript for much of the application logic and interface composition, while React Native maps components to native platform views rather than simply displaying a website inside a WebView.",
  body:
    "That model is useful when iOS and Android share important workflows, when a team benefits from React knowledge, or when common validation and API logic should remain aligned. It does not mean the entire codebase will be identical or that platform work disappears. Permissions, native SDKs, operating-system conventions, build configuration and testing still need to be planned.",
  closingCopy:
    "For new projects, React Native's documentation recommends starting with a framework such as Expo for most teams. Projects with unusual native constraints or existing app infrastructure may need a different setup. The right choice should be made after the app's requirements and dependencies are understood.",
};

// ============================================================
// SERVICE CAPABILITIES - 8 PANELS
// These are scoping areas, not a promise that every project needs
// all of them or that every integration is included by default.
// ============================================================

export const reactNativeScope: ScopeCard[] = [
  {
    title: "Product Discovery & First-Release Definition",
    description:
      "Map the main users, tasks, platform targets and operational dependencies before development. Separate launch-critical workflows from optional features, and turn unknowns-such as SDK feasibility, API availability or offline needs-into explicit questions to resolve before effort is estimated.",
  },
  {
    title: "React Native App Development for iOS & Android",
    description:
      "Build the agreed application flows using React Native and JavaScript or TypeScript, sharing components and business logic where doing so benefits maintainability. Keep platform-specific behaviour isolated where navigation, permissions, SDK support or interaction conventions justify a different implementation.",
  },
  {
    title: "Expo & Project Configuration",
    description:
      "Evaluate Expo and its development/build workflow against the product's native requirements, dependency choices and release needs. Expo can support apps that require custom native code; the important question is whether the required modules and configuration are compatible with the intended workflow. A non-Expo setup may be appropriate for some existing or constrained projects.",
  },
  {
    title: "Mobile UX, Navigation & State Management",
    description:
      "Structure routes, navigation, forms, session states and shared UI around how people complete real tasks on a phone. Select state and data-fetching patterns to fit the product's complexity; avoid adding libraries simply because they are popular, and avoid placing all business rules inside screen components.",
  },
  {
    title: "Backend APIs, Authentication & Data Flows",
    description:
      "Connect the app to existing services or separately scoped backend work. Confirm API contracts, authentication and session renewal, authorization rules, pagination, retry behaviour and how the interface responds to failures. Client-side controls should not be treated as a substitute for server-side access enforcement.",
  },
  {
    title: "Native SDKs & Device Capabilities",
    description:
      "Assess the required camera, location, biometrics, push notifications, maps, Bluetooth, payment or vendor SDK integrations. The implementation may rely on a maintained React Native library, Expo module, configuration plugin or custom Swift/Kotlin code. Feasibility depends on the exact feature, library support and target platforms.",
  },
  {
    title: "Performance, Testing & Diagnostics",
    description:
      "Validate important flows on representative devices and release builds. Test slow networks, large lists, image handling, session expiry, permissions and error recovery where they matter to the product. Automated tests can improve confidence, but JavaScript component tests do not replace end-to-end checks on actual platform behaviour.",
  },
  {
    title: "Builds, Store Release & Maintenance Handover",
    description:
      "Prepare the agreed build configuration, signing and release checklist, store metadata responsibilities and handover documentation. Define who owns dependency upgrades, crash investigation, certificates, platform compatibility and future releases. Store acceptance is controlled by Apple and Google, and any ongoing support or update service must be scoped explicitly.",
  },
];

// ============================================================
// FIT ASSESSMENT - A BUYER DECISION, NOT A FRAMEWORK PROMOTION
// ============================================================

export const reactNativeFit: ReactNativeFitData = {
  eyebrow: "IS REACT NATIVE THE RIGHT FIT?",
  h2: "React Native Is Most Valuable When Shared Product Work Matters",
  intro:
    "React Native can be a strong option for products that need iOS and Android apps and have meaningful logic, workflows or team skills to share. The decision should be based on the required user experience, critical native capabilities, team context and long-term ownership-not on a blanket promise that cross-platform development is always faster or cheaper.",
  goodFit: [
    {
      title: "Your Team Already Works With React or TypeScript",
      description:
        "A web team with React experience may be able to reuse its component-model knowledge, TypeScript practices and some business logic. Mobile still requires platform-specific skills, but the team's existing experience can make the learning and collaboration path more natural.",
    },
    {
      title: "iOS and Android Share the Main Product Workflows",
      description:
        "Users complete broadly similar tasks and use common business rules, data models and API contracts on both platforms. That creates a meaningful reason to share logic while retaining appropriate platform differences.",
    },
    {
      title: "The App Needs Device Features Through a Supported Ecosystem",
      description:
        "The product relies on familiar mobile capabilities and third-party SDKs that have viable React Native integrations. Confirm the exact libraries, platform coverage, maintenance status and configuration requirements before treating support as settled.",
    },
    {
      title: "The Product Will Evolve Through Ongoing Releases",
      description:
        "The team values a maintainable TypeScript codebase, repeatable builds, automated checks and an architecture that can accommodate new workflows without tightly coupling every screen to every service.",
    },
  ],
  evaluateAlternatives: [
    {
      title: "A Critical Capability Requires Deep Native Integration",
      description:
        "React Native can work with native modules, but if a product depends on specialized hardware, a vendor SDK with limited support or platform behaviour that dominates the codebase, compare a mixed or fully native approach before committing.",
    },
    {
      title: "The Main Product Is a Public, Search-Focused Website",
      description:
        "React Native is primarily a mobile application framework. A content-led marketing site, public catalogue or SEO-focused website will often be better served by a web framework and HTML-first rendering; adding React Native Web is a separate architectural decision, not an automatic inclusion.",
    },
    {
      title: "The iOS and Android Products Need Materially Different Experiences",
      description:
        "Some platform differences are easy to isolate, but if core journeys, hardware access or performance constraints diverge substantially, the amount of shared code may not justify the complexity. Compare platform-specific React Native implementations with native development.",
    },
    {
      title: "There Is No Business Case for a Dedicated Mobile App Yet",
      description:
        "If customers need only occasional access to information or a few simple transactions, a responsive website may solve the problem with less release and maintenance overhead. Validate why installation, device features, repeat use or offline access matter before building an app.",
    },
  ],
  closingCopy:
    "A good framework recommendation includes the reasons it may not fit. We should be able to explain the trade-offs against Flutter, native iOS/Android and a mobile-friendly web experience in the context of your actual requirements.",
};

// ============================================================
// PRODUCT USE CASES - ILLUSTRATIVE WORKFLOW PATTERNS
// These are not claims about past Bixeltek projects or outcomes.
// ============================================================

export const reactNativeUseCases: ReactNativeUseCase[] = [
  {
    title: "A Mobile Product for an Existing React Business",
    businessSituation:
      "A business already has a React-based web product and wants customers or staff to complete high-value tasks on mobile, rather than asking people to use a small-screen browser for every interaction.",
    implementationConsideration:
      "Identify what can genuinely be shared-such as TypeScript types, validation rules and API clients-and what must be built for native navigation, accessibility, device APIs and mobile interaction. Web components should not be assumed to run unchanged inside React Native.",
    acceptanceSignal:
      "The core mobile tasks work comfortably on target devices, business rules remain consistent with the web product, and shared code has clear ownership rather than creating hidden coupling between releases.",
  },
  {
    title: "Booking, Appointment & Customer Self-Service Apps",
    businessSituation:
      "Customers need to make or change bookings, manage their profile, receive relevant updates and check status without repeatedly contacting staff.",
    implementationConsideration:
      "Booking availability and confirmation must be based on the authoritative backend. Handle stale slots, duplicate submissions, time zones, authentication expiry and notification preferences as part of the customer journey.",
    acceptanceSignal:
      "A user can complete or change a booking, understand whether it is confirmed, and recover from a failed request without accidentally creating duplicate records.",
  },
  {
    title: "Field Operations & Workforce Apps",
    businessSituation:
      "Employees need to view assigned jobs, capture photos or notes, update statuses and record activity while moving between locations or working with unreliable connectivity.",
    implementationConsideration:
      "Define which information must be available offline, how local changes are queued, what happens when two people change the same record, and how device permissions and uploads behave when an app is backgrounded or interrupted.",
    acceptanceSignal:
      "Staff can complete the agreed job workflow on supported devices, and the system makes pending, failed and synchronized updates distinguishable rather than silently losing work.",
  },
  {
    title: "Commerce, Loyalty & Repeat-Purchase Apps",
    businessSituation:
      "A retailer or subscription business wants a dedicated channel for product discovery, saved items, offers, purchases, order status or customer loyalty interactions.",
    implementationConsideration:
      "Keep product, price, stock, discount and order state authoritative in the agreed commerce/backend system. Checkout, payment SDKs, deep links and push messages should be tested across completed, cancelled, pending and failed transaction states.",
    acceptanceSignal:
      "Customers can move from discovery to a clear transaction outcome, while order and account status match the source system rather than drifting between the app and website.",
  },
  {
    title: "Marketplace & On-Demand Service Products",
    businessSituation:
      "Customers, service providers and operations staff need separate views of one workflow-for example, request creation, provider assignment, status updates and completion.",
    implementationConsideration:
      "Define role-specific access, state transitions, location or messaging requirements, cancellation rules and what each user is allowed to see or change. Real-time updates should handle reconnects and out-of-order events where applicable.",
    acceptanceSignal:
      "Each role sees the correct actions and current status, and a change by one participant propagates to the others without relying on manual refresh or exposing restricted data.",
  },
  {
    title: "Account-Based Services & Subscription Products",
    businessSituation:
      "Users return to manage a plan, review usage, access paid functionality, renew a service or continue a task across sessions and devices.",
    implementationConsideration:
      "Agree how identity, entitlements, billing state, account recovery and cross-device data are managed. Where app-store billing rules may apply, review the business model and target markets before deciding on payment implementation.",
    acceptanceSignal:
      "The app presents the correct account state and access rights after sign-in, renewal, cancellation, device change or a temporary backend failure.",
  },
];

// ============================================================
// ENGINEERING DECISIONS THAT CHANGE DELIVERY QUALITY
// Each panel answers a decision buyers may otherwise discover late.
// ============================================================



export const reactNativeImplementationDecisions: ReactNativeDecisionItem[] = [
  {
    title: "Expo or Custom Native Setup?",
    context:
      "Expo suits most React Native projects, but native SDKs and custom modules may affect the setup.",
    consideration:
      "Validate integrations, build requirements and update constraints before choosing the workflow.",
  },
  {
    title: "What Should Be Shared Across Platforms?",
    context:
      "React Native shares business logic and UI while supporting platform-specific implementations.",
    consideration:
      "Reuse common code and isolate platform differences where needed for usability or native behaviour.",
  },
  {
    title: "How Should App Architecture Be Structured?",
    context:
      "Mixing UI, API calls, business logic and state makes growing apps harder to maintain.",
    consideration:
      "Separate responsibilities and choose navigation, data-fetching and state tools based on actual needs.",
  },
  {
    title: "How Will Performance and Releases Be Managed?",
    context:
      "Performance varies by device and workload; native changes may require a new app build.",
    consideration:
      "Test release builds on real devices and define update, rollout and rollback procedures early.",
  },
];



// ============================================================
// TECHNOLOGY CONTEXT
// This describes options to evaluate, not a promise that every
// named tool is used on every Bixeltek engagement.
// ============================================================

export const reactNativeTechnologies: ReactNativeTechnologyItem[] = [
  {
    name: "React Native",
    category: "Mobile application framework",
    description:
      "Build mobile interfaces and application flows with the React model while rendering native platform components. Platform-specific behaviour should be isolated where the product requires it.",
    href: "https://reactnative.dev/",
  },
  {
    name: "TypeScript",
    category: "Language & contracts",
    description:
      "Use typed data contracts, API models and shared business rules to make interfaces between app features and backend services easier to reason about and maintain.",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Expo",
    category: "Framework & build workflow",
    description:
      "Evaluate Expo's routing, native modules, development builds and build/release services where they fit the app's requirements. The exact workflow depends on required native capabilities and operational needs.",
    href: "https://docs.expo.dev/",
  },
  {
    name: "Navigation & Deep Linking",
    category: "Application structure",
    description:
      "Plan screen transitions, nested flows, authentication gates, external links and return paths so notifications, shared links and signed-in navigation lead users to the correct context.",
    href: "https://reactnative.dev/docs/navigation",
  },
  {
    name: "APIs & Application State",
    category: "Data and business logic",
    description:
      "Connect the app to REST, GraphQL or existing business APIs where provided, and select state/data-fetching patterns that fit the product's consistency, caching and synchronization requirements.",
  },
  {
    name: "Testing & Diagnostics",
    category: "Quality and operations",
    description:
      "Use an appropriate mix of static analysis, unit/component tests, integration checks, end-to-end tests, release-build profiling and crash diagnostics. Tools should be selected for the codebase and support plan.",
    href: "https://reactnative.dev/docs/testing-overview",
  },
];

// ============================================================
// PROCESS - 6 STAGES
// The purpose of each stage is to reduce a different type of risk.
// ============================================================

export const reactNativeProcess: ReactNativeProcessStage[] = [
  {
    number: "01",
    title: "Discover the Product and Its Constraints",
    description:
      "Identify target users, essential journeys, platforms, backend readiness, critical device capabilities and the business outcome the app should support. Record assumptions and risk areas before locking the framework setup or launch scope.",
  },
  {
    number: "02",
    title: "Define the First Release and Architecture",
    description:
      "Turn the main journeys into an ordered release scope. Agree on API boundaries, authentication, data ownership, navigation, state management, analytics needs and the approach for platform-specific code; prototype integrations that could change the plan.",
  },
  {
    number: "03",
    title: "Design the Mobile Journeys",
    description:
      "Specify navigation and the states around each important task: initial, loading, empty, validation error, failed request, success, retry and cancellation. Adapt components to platform expectations instead of translating desktop screens directly to phone layouts.",
  },
  {
    number: "04",
    title: "Build Features and Connect Systems",
    description:
      "Implement prioritized flows in reviewable increments, connecting them to agreed APIs and device services. Keep business rules testable, validate response/error contracts and flag changes to backend or third-party dependencies before they become late-stage surprises.",
  },
  {
    number: "05",
    title: "Verify Critical Flows on Real Devices",
    description:
      "Test representative iOS and Android devices, release builds, permissions, session expiry, network interruptions and high-risk interactions. Use automated tests where they provide repeatable confidence, then profile and fix observed performance problems.",
  },
  {
    number: "06",
    title: "Prepare Release and Define Ownership",
    description:
      "Confirm signing, environment configuration, store requirements, privacy disclosures, release checks and rollback/incident responsibilities. Handover should make clear who owns monitoring, SDK updates, compatibility fixes and future product changes after launch.",
  },
];

// ============================================================
// WHY BIXELTEK - WORKING PRINCIPLES, NOT UNVERIFIED SUPERLATIVES
// Keep these only if they match the real delivery model and team.
// ============================================================

export const reactNativeWhyChoose: ReactNativeWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Mobile Engineering Connected to the Product Around It",
  intro:
    "A React Native app rarely succeeds as an isolated client. Its usefulness depends on how well the user journeys, APIs, account rules, web experience and release responsibilities fit together. Bixeltek's broader web and digital-product context is relevant when those parts need to be considered as one system.",
  points: [
    {
      title: "We Start With the Product Requirement, Not the Framework",
      description:
        "The first decision is what users need to do and why a dedicated app is justified. React Native should be selected because its strengths fit the product-not because cross-platform is automatically the answer.",
    },
    {
      title: "We Treat API and Data Boundaries as Product Decisions",
      description:
        "Authentication, permissions, errors, stale data and transaction state affect how the app feels to use. These flows need to be defined alongside the screens, with server-side rules remaining authoritative where required.",
    },
    {
      title: "We Share Code Deliberately",
      description:
        "Shared components and logic are valuable when they reduce drift and simplify change. We should not force identical behaviour where iOS, Android or a device integration requires a different interaction.",
    },
    {
      title: "We Surface High-Risk Integrations Early",
      description:
        "A critical SDK, device permission or background workflow can change the technical plan. Compatibility checks and focused prototypes belong early in discovery when they can still inform scope and estimates.",
    },
    {
      title: "We Validate Behaviour Beyond the Happy Path",
      description:
        "A completed screen is not enough if a session expires, a network request fails or a user denies a permission. Testing should cover the workflows and failure states most likely to affect real users.",
    },
    {
      title: "We Make Post-Launch Responsibility Clear",
      description:
        "Dependencies, certificates, operating-system updates and production issues continue after launch. The project should identify the owner of each ongoing responsibility and make any separate maintenance arrangement explicit.",
    },
  ],
  closingCopy:
    "The goal is a product your team can operate and improve-not simply an app binary that passes a launch checklist.",
  ctaText: "Discuss Your React Native Project",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// Explain why effort varies; do not publish unsubstantiated prices
// or delivery dates in place of a scoped estimate.
// ============================================================

export const reactNativeInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number and Complexity of User Journeys",
    description:
      "A focused booking flow differs from a multi-role marketplace or operational app. Estimate effort around the rules, states and edge cases inside each workflow-not screen count alone.",
  },
  {
    title: "Backend Readiness and API Changes",
    description:
      "Existing, well-documented APIs reduce uncertainty. New authentication, admin features, data models, integrations or changes to backend workflows add work beyond the mobile interface.",
  },
  {
    title: "Native SDKs and Device Requirements",
    description:
      "Camera, Bluetooth, background processing, biometrics, payment SDKs or proprietary vendor integrations can involve platform setup, compatibility work and custom native code.",
  },
  {
    title: "Offline Use and Data Synchronization",
    description:
      "Offline access introduces local persistence, queued actions, conflict handling, data freshness and recovery scenarios. Cost depends on which workflows must work offline and what correctness they require.",
  },
  {
    title: "Design Depth and Platform Differences",
    description:
      "Effort changes with bespoke interactions, accessibility requirements, supported screen sizes, design-system readiness and the extent to which iOS and Android need distinct behaviour.",
  },
  {
    title: "Testing, Performance and Release Expectations",
    description:
      "Device coverage, automated tests, performance targets, security-sensitive workflows, build pipelines, signing, store assets and release coordination all affect delivery effort.",
  },
  {
    title: "Support, Upgrades and Future Roadmap",
    description:
      "A maintained app needs owners for crash diagnosis, dependency updates, operating-system compatibility, analytics, certificates and future feature releases. These responsibilities should be estimated separately where not included in the initial scope.",
  },
];

// ============================================================
// RELATED SERVICES
// Verify child route and current repository links before release.
// ============================================================

export const reactNativeRelatedServices: RelatedServiceCard[] = [
  {
    title: "Mobile App Development",
    description:
      "Compare React Native with Flutter and native development, or explore the broader mobile engineering service if your best-fit approach is not yet clear.",
    linkText: "Explore Mobile App Development",
    destination: "/services/mobile-app-development",
  },
  {
    title: "Web Design & Development",
    description:
      "Plan a supporting public website, product site or browser-based experience alongside the mobile app, using the right technology for each surface.",
    linkText: "Explore Web Design & Development",
    destination: "/services/web-design",
  },
  {
    title: "Ecommerce Development",
    description:
      "If the app extends an online store, define how catalogue, inventory, pricing, customer, checkout and order data stay aligned with the existing commerce system.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "Analytics & Tracking",
    description:
      "Plan measurement for acquisition, onboarding and important in-app actions so product decisions are based on properly defined events rather than downloads alone.",
    linkText: "Explore Analytics & Tracking",
    destination: "/services/analytics-tracking",
  },
];

// ============================================================
// FAQ - ANSWER BUYING QUESTIONS THAT ARE NOT FULLY SETTLED ABOVE
// ============================================================

export const reactNativeFaqs: FAQItem[] = [
  {
    question: "What is React Native app development?",
    answer:
      "React Native is a framework for building mobile applications using the React programming model and JavaScript or TypeScript. It lets teams share appropriate application logic and UI code across iOS and Android while still supporting platform-specific components and native integrations when required.",
  },
  {
    question: "Is React Native suitable for both iOS and Android?",
    answer:
      "Yes. React Native is designed to support both platforms, and many parts of an application can be shared. Whether it fits a particular product depends on its device requirements, native SDKs, interaction patterns, performance needs and the team's ability to maintain the app. Those factors should be assessed before the implementation is finalized.",
  },
  {
    question: "Should we use React Native or Flutter?",
    answer:
      "Neither framework is universally better. React Native may be attractive when React/TypeScript skills and ecosystem fit are important; Flutter may suit products whose teams prefer Dart and Flutter's UI approach. Compare the required interactions, device integrations, team skills, available libraries, release model and ongoing ownership against the actual product requirements.",
  },
  {
    question: "Does React Native mean we only need to write the app once?",
    answer:
      "It allows meaningful code reuse, but it does not guarantee one identical implementation for every feature. Platform-specific permissions, navigation, native SDKs, build settings and user expectations can require separate code or configuration. A shared-code target should not be promised before the app is assessed.",
  },
  {
    question: "Do you use Expo for React Native apps?",
    answer:
      "Expo is an option we should evaluate early because it provides a production-oriented framework and development/build tooling. It can also support projects requiring custom native code, but the exact setup depends on the required libraries and configuration. The chosen workflow should be confirmed for each project rather than assumed for every app.",
  },
  {
    question: "Can a React Native app use the camera, GPS, biometrics or Bluetooth?",
    answer:
      "These capabilities may be available through maintained libraries, Expo modules or custom native integration. Support depends on the precise requirement, device and operating-system versions, library maintenance and vendor SDK constraints. Critical device features should be verified on both target platforms before they are included as firm delivery assumptions.",
  },
  {
    question: "Can React Native connect to our existing website, CRM or backend?",
    answer:
      "It can connect to existing systems when suitable APIs or integration mechanisms are available. Discovery should confirm authentication, permissions, data contracts, rate limits, error handling and whether the current system supports the mobile workflows. Backend changes, admin functionality or third-party integration work should be separately scoped when needed.",
  },
  {
    question: "Can the app work offline?",
    answer:
      "Selected offline workflows are possible, but they need deliberate design. The team must decide what data is stored locally, which actions can be queued, how synchronization works and how conflicts or failed updates are surfaced. An app is not offline-ready simply because it is built with React Native.",
  },
  {
    question: "Will React Native deliver native performance?",
    answer:
      "React Native can deliver responsive mobile experiences, but performance depends on implementation, workload, device capabilities and native integrations. Large lists, images, rendering patterns or network-heavy screens may need profiling and optimization. Performance should be checked in release builds on representative devices rather than guaranteed from framework choice alone.",
  },
  {
    question: "Can updates be released without an App Store or Google Play update?",
    answer:
      "Some setups allow eligible JavaScript or asset changes to be delivered over the air. Changes involving native code, native dependencies or other binary configuration usually require a new native build, and all updates must follow the relevant platform and distribution rules. An update strategy should include version compatibility and rollback planning.",
  },
  {
    question: "How long does React Native app development take?",
    answer:
      "The timeline depends on the product's workflows, design readiness, backend availability, native SDK requirements, offline behaviour, testing depth and release responsibilities. A useful estimate follows a defined first-release scope and a review of technical risks; screen count or the phrase 'cross-platform' is not enough to estimate reliably.",
  },
  {
    question: "What affects the cost of React Native app development?",
    answer:
      "Cost is affected by workflow complexity, backend development, device integrations, design requirements, offline synchronization, platform-specific behaviour, testing and release needs, and post-launch support. We should review those factors before providing a project-specific estimate rather than publish an unsupported fixed price.",
  },
  {
    question: "Does React Native also build our website?",
    answer:
      "React Native primarily targets native mobile apps. A web version may be possible through additional tooling such as React Native Web, but it requires its own compatibility and architecture review. For a public, content-heavy website where SEO and HTML-first rendering are important, a dedicated web framework may be more appropriate.",
  },
  {
    question: "What happens after the app is released?",
    answer:
      "A live app needs ownership for crash investigation, dependency and SDK updates, platform compatibility, certificates, security fixes and future product changes. The project should define who handles monitoring and releases, and whether ongoing maintenance is included or contracted separately.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const reactNativeFinalCta: ReactNativeFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLANNING A CROSS-PLATFORM PRODUCT?",
  h2: "Let's Find Out Whether React Native Fits Your App",
  description:
    "Tell us what users need to do, which platforms matter, what systems the app must connect to and which device capabilities are essential. We can use those requirements to identify a realistic first release, validate technical risks and compare the delivery approach before the scope is locked.",
  primaryCta: {
    label: "Discuss Your React Native App",
    href: "/contact-us",
  },
  supportingCopy:
    "The best starting point is a clear product workflow and an honest view of technical constraints-not a promise that one framework suits every application.",
};

// ============================================================
// CONTENT / IMPLEMENTATION NOTES - NOT A PAGE SECTION
// Confirm before publishing:
// - Confirm /react-native-app-development exists or is the approved
//   new route. Its canonical above is proposed, not verified.
// - The currently indexed live parent route is
//   /services/mobile-app-development. Check the repo before linking.
// - Map every export to the actual section/component contracts and
//   verify jump-link IDs against rendered section IDs.
// - Confirm which of Expo, native modules, backend/API development,
//   UX design, testing, store submission and ongoing support Bixeltek
//   actively delivers and wants to sell for this page.
// - Confirm related-service destinations in the repository.
// - Do not add case studies, customer names, app counts, ratings,
//   delivery-time claims, code-sharing percentages or performance
//   guarantees unless evidence is approved for publication.
// - Use technologies as options to evaluate, not as an exhaustive
//   fixed stack for every engagement.
// - No verified React Native-specific Bixeltek case study was used
//   for this draft; do not imply that illustrative scenarios are past
//   client work.
//
// SECTION PURPOSES:
// Hero = define the offer and buyer decision.
// Problems = help buyers recognize delivery risks.
// Overview = explain how React Native differs from web and native-only.
// Scope = describe possible work packages.
// Fit = identify when to use it and when to consider alternatives.
// Use cases = translate architecture into real product workflows.
// Decisions = expose technical trade-offs buyers may not see.
// Technologies = clarify ecosystem roles without stack-padding.
// Process = show risk reduction in sequence.
// Why Bixeltek = describe working principles, not unsupported claims.
// Investment = explain effort variables.
// FAQs = resolve remaining procurement and technical objections.
//
// RESEARCH REFERENCES REVIEWED:
// https://reactnative.dev/docs/environment-setup
// https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps
// https://reactnative.dev/docs/platform-specific-code
// https://reactnative.dev/docs/performance
// https://reactnative.dev/docs/testing-overview
// https://reactnative.dev/architecture/landing-page
// https://docs.expo.dev/workflow/customizing/
// https://bixeltek.com/services/mobile-app-development
// ============================================================
