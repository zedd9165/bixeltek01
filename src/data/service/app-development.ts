import whyChoose from '@/assets/why-choose-bixeltek-for-app-development.png'


/* =========================================================
   TYPES
   ========================================================= */

export interface AppDevelopmentMetadata {
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

export interface AppDevelopmentHeroData {
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

export interface AppDevelopmentOverviewData {
  eyebrow: string;
  h2: string;
  intro: string;
  body: string;
  closingCopy: string;
}

export interface AppNeedPoint {
  title: string;
  description: string;
}

export interface AppNeedData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: AppNeedPoint[];
  notAlwaysNeeded: {
    title: string;
    description: string;
  };
}

/**
 * NEW DATA TYPE
 *
 * Use this only if there isn't already an existing generic
 * card type in your project that can represent this section.
 */
export interface AppUseCaseCard {
  title: string;
  description: string;
  examples?: string[];
}

/**
 * NEW DATA TYPE
 *
 * This is different from platform/technology cards because
 * this section is about the systems connected to the app.
 */
export interface AppSystemCard {
  title: string;
  description: string;
  examples?: string[];
}

export interface MobileExperiencePoint {
  title: string;
  description: string;
}

export interface MobileExperienceData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: MobileExperiencePoint[];
}

export interface AppPostLaunchData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: MobileExperiencePoint[];
}

export interface AppFinalCTAData {
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

/*
 * These types already exist in the broader service-page
 * architecture and should be imported from your shared
 * service types if they already exist.
 *
 * - CaseStudyCard
 * - ProblemCard
 * - ScopeCard
 * - PlatformOptionCard
 * - ProcessStage
 * - InvestmentFactorCard
 * - RelatedServiceCard
 * - FAQItem
 * - TechStackItem
 *
 * If those are already defined in your project, DO NOT
 * duplicate them here.
 */


/* =========================================================
   METADATA
   ========================================================= */

export const appDevelopmentMetadata: AppDevelopmentMetadata = {
  title:
    "Mobile App Development Services | iOS & Android App Development | Bixeltek",

  description:
    "Build custom mobile applications for iOS and Android with Bixeltek. We design and develop business apps with mobile UX, backend integration, APIs, testing and launch support.",

  keywords: [
    "mobile app development services",
    "custom mobile app development",
    "mobile application development",
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "React Native app development",
    "Flutter app development",
    "cross-platform app development",
    "mobile app development company Hyderabad",
  ],

  canonical: "https://bixeltek.com/services/mobile-app-development",
};


/* =========================================================
   BREADCRUMBS
   ========================================================= */

export const appDevelopmentBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Application Development",
    href: "/services/mobile-app-development",
  },
];


/* =========================================================
   JUMP LINKS
   ========================================================= */

export const appDevelopmentJumpLinks: JumpLinkItem[] = [
  {
    label: "What It Means",
    href: "#what-it-means",
  },
  {
    label: "When You Need an App",
    href: "#when-you-need-an-app",
  },
  {
    label: "What We Build",
    href: "#what-we-build",
  },
  {
    label: "App Types",
    href: "#app-types",
  },
  {
    label: "Technology",
    href: "#technology",
  },
  {
    label: "Systems & Integrations",
    href: "#systems-integrations",
  },
  {
    label: "Mobile Experience",
    href: "#mobile-experience",
  },
  {
    label: "Our Process",
    href: "#app-process",
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

export const appDevelopmentHeroPreviewData: AppDevelopmentHeroData = {
  eyebrow:
    "MOBILE APP DEVELOPMENT · IOS · ANDROID · CROSS-PLATFORM",

  h1:
    "Build a Mobile App Around How Your Customers Actually Use Your Business",

  p1:
    "A successful mobile application needs to do more than put your website on a smaller screen. It needs to make important actions easier, work reliably on real devices and give users a reason to keep coming back.",

  p2:
    "We design and develop custom mobile applications for iOS and Android, choosing the right combination of React Native, Flutter or native development based on your product, users, integrations, performance requirements and plans for growth.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#plan-project",

  secondaryLinkText:
    "Explore Our Work",

  secondaryLinkHref:
    "#selected-work",

  microcopy:
    "Building a new product, creating a customer app, modernizing an existing application or turning an internal workflow into a mobile experience? Start with the product requirements, not a predetermined technology.",

  // image: appHeroImg,
};


/* =========================================================
   WHAT MOBILE APP DEVELOPMENT ACTUALLY MEANS
   ========================================================= */

export const appDevelopmentOverview: AppDevelopmentOverviewData = {
  eyebrow:
    "WHAT MOBILE APP DEVELOPMENT ACTUALLY MEANS",

  h2:
    "A Mobile App Is a Product Experience, Not Just a Collection of Screens",

  intro:
    "Mobile app development covers the design, engineering, testing and release of applications built specifically for smartphones and tablets. Depending on the product, an app may connect users to accounts, payments, location services, notifications, business data, commerce systems or other digital services.",

  body:
    "The development decision is therefore bigger than choosing between iOS, Android, Flutter or React Native. The app needs an appropriate user experience, reliable application architecture, secure data flows, backend or API connections, device behaviour, testing coverage and a practical release strategy.",

  closingCopy:
    "The right architecture depends on what the application needs to do, who will use it and how the product is expected to evolve after launch.",
};


/* =========================================================
   WHEN A MOBILE APP MAKES SENSE
   ========================================================= */

export const whenYouNeedMobileApp: AppNeedData = {
  eyebrow:
    "WHEN A MOBILE APP MAKES SENSE",

  h2:
    "Not Every Business Needs an App, But Some Experiences Work Better With One",

  intro:
    "A mobile app becomes valuable when customers, employees or partners repeatedly perform actions that benefit from a dedicated mobile experience. We first look at the behaviour the app needs to support before recommending an application.",

  points: [
    {
      title:
        "Customers Use Your Service Repeatedly",

      description:
        "An app can make repeat actions such as bookings, purchases, orders, account access or service management faster and easier.",
    },

    {
      title:
        "Mobile Is Central to the Customer Journey",

      description:
        "When important interactions happen primarily on phones, a dedicated experience can provide more control than relying entirely on a mobile website.",
    },

    {
      title:
        "Your Business Needs Device Capabilities",

      description:
        "Location, camera, notifications, biometrics, Bluetooth and other device capabilities can make an app appropriate for experiences that a website cannot deliver as naturally.",
    },

    {
      title:
        "Your Team Works Away From a Desk",

      description:
        "Field teams, delivery staff, sales representatives and service workers may need mobile access to tasks, records, communication or workflows while operating away from the office.",
    },

    {
      title:
        "You Are Building a Repeat-Use Product",

      description:
        "Products based on recurring engagement, communities, subscriptions, marketplaces or ongoing services can benefit from a dedicated application experience.",
    },

    {
      title:
        "Your Existing App Needs Modernization",

      description:
        "An application that is difficult to maintain, slow to release or no longer fits current user expectations may need targeted modernization rather than a completely new product.",
    },
  ],

  notAlwaysNeeded: {
    title:
      "A mobile app may not be the right first step when…",

    description:
      "Customers only need occasional access to your business, the experience is primarily informational, there is no clear repeat-use behaviour, or a responsive website can solve the problem more efficiently. In those situations, investing in the web experience first may be the better decision.",
  },
};


/* =========================================================
   WHAT WE BUILD
   ========================================================= */

export const appDevelopmentScope = [
  {
    title:
      "Product Discovery & App Architecture",

    description:
      "We define the core user journeys, functional requirements and technical constraints before development so the first release has a clear and manageable scope.",
  },

  {
    title:
      "Mobile UI/UX Design",

    description:
      "We design navigation, screen flows, interaction patterns and mobile layouts around how users actually complete tasks on their devices.",
  },

  {
    title:
      "iOS & Android Development",

    description:
      "We build applications for iPhone and Android devices using native or cross-platform technologies based on the requirements of the product.",
  },

  {
    title:
      "Backend & API Integration",

    description:
      "We connect the application with existing systems or develop the APIs and backend services required for accounts, data, transactions and business workflows.",
  },

  {
    title:
      "Payments & Third-Party Integrations",

    description:
      "We integrate relevant payment gateways, maps, notifications, authentication, communication tools and other external services required by the application.",
  },

  {
    title:
      "Testing & Release Preparation",

    description:
      "We test important user journeys across supported devices and prepare production builds, store assets and release requirements before launch.",
  },
];


/* =========================================================
   APP TYPES / BUSINESS USE CASES
   ========================================================= */

export const appDevelopmentUseCases: AppUseCaseCard[] = [
  {
    title:
      "Customer-Facing Apps",

    description:
      "Give customers a dedicated way to browse, book, order, communicate, manage accounts or access your services.",

    examples: [
      "Booking & appointment apps",
      "Customer portals",
      "Retail & commerce apps",
      "Service management apps",
    ],
  },

  {
    title:
      "On-Demand & Marketplace Apps",

    description:
      "Connect customers with services, providers, vendors or delivery teams through coordinated mobile workflows.",

    examples: [
      "Service marketplaces",
      "Delivery platforms",
      "Vendor platforms",
      "Multi-sided applications",
    ],
  },

  {
    title:
      "Business & Internal Apps",

    description:
      "Move important operational workflows from desktops and spreadsheets into structured mobile experiences for your teams.",

    examples: [
      "Field-service apps",
      "Sales applications",
      "Internal workflow tools",
      "Employee applications",
    ],
  },

  {
    title:
      "Commerce & Loyalty Apps",

    description:
      "Create repeat-use shopping experiences with accounts, product discovery, payments, offers, notifications and customer engagement.",

    examples: [
      "Mobile commerce",
      "Loyalty programmes",
      "Subscriptions",
      "Customer rewards",
    ],
  },

  {
    title:
      "MVP & New Product Apps",

    description:
      "Turn a product concept into a focused first release that can be tested with real users before investing in a larger roadmap.",

    examples: [
      "Startup MVPs",
      "Proof-of-concept products",
      "New digital services",
      "Pilot applications",
    ],
  },

  {
    title:
      "Existing App Modernization",

    description:
      "Improve an existing application's experience, architecture or release process without automatically rebuilding everything from scratch.",

    examples: [
      "Legacy app modernization",
      "UX improvements",
      "Performance improvements",
      "Feature expansion",
    ],
  },
];


/* =========================================================
   SYSTEMS & INTEGRATIONS
   ========================================================= */

export const appDevelopmentSystems: AppSystemCard[] = [
  {
    title:
      "Backend & APIs",

    description:
      "Connect the mobile application to business data, user accounts and operational systems through secure APIs and appropriate backend services.",

    examples: [
      "REST APIs",
      "GraphQL",
      "Node.js services",
      "Existing business APIs",
    ],
  },

  {
    title:
      "Authentication & Accounts",

    description:
      "Build account and identity flows around the security, convenience and access requirements of the application.",

    examples: [
      "Email & password",
      "OTP authentication",
      "Social login",
      "Role-based access",
    ],
  },

  {
    title:
      "Payments & Transactions",

    description:
      "Connect payment and transaction workflows when the application needs customers to purchase, subscribe, book or pay within the experience.",

    examples: [
      "Payment gateways",
      "Subscriptions",
      "Wallets",
      "Order management",
    ],
  },

  {
    title:
      "Notifications & Communication",

    description:
      "Use timely mobile communication to support important events, updates, reminders and customer interactions without overwhelming users.",

    examples: [
      "Push notifications",
      "Email",
      "SMS",
      "In-app messaging",
    ],
  },

  {
    title:
      "Business Systems",

    description:
      "Connect the application to the systems your business already depends on instead of creating an isolated mobile product.",

    examples: [
      "CRM",
      "ERP",
      "Inventory",
      "Admin panels",
    ],
  },

  {
    title:
      "Location & Device Services",

    description:
      "Use relevant device capabilities when they improve the product experience or support real-world workflows.",

    examples: [
      "Maps",
      "GPS",
      "Camera",
      "Biometrics",
    ],
  },
];


/* =========================================================
   MOBILE EXPERIENCE
   ========================================================= */

export const mobileExperienceSection: MobileExperienceData = {
  eyebrow:
    "BUILT FOR REAL MOBILE USE",

  h2:
    "The App Has to Work Beyond the Prototype",

  intro:
    "A mobile application is used in different conditions from a desktop website. Users switch between apps, operate with one hand, encounter different screen sizes and may deal with inconsistent connectivity or device performance.",

  points: [
    {
      title:
        "Fast, Focused Interactions",

      description:
        "Important tasks should be easy to understand and complete without unnecessary screens or steps.",
    },

    {
      title:
        "Device-Aware Experiences",

      description:
        "Layouts, navigation and interactions need to work across the supported devices and operating-system versions.",
    },

    {
      title:
        "Reliable Data Handling",

      description:
        "The application should handle loading, errors, interruptions and connectivity changes without leaving users uncertain about what happened.",
    },

    {
      title:
        "Performance as a Product Requirement",

      description:
        "App responsiveness, startup behaviour and interaction performance influence whether users continue using the product after the first experience.",
    },
  ],
};


/* =========================================================
   PROCESS
   ========================================================= */

export const appDevelopmentProcess = [
  {
    number:
      "01",

    title:
      "Discover & Define",

    description:
      "We understand the product, users, business objectives and essential workflows before turning the idea into a defined first-release scope.",
  },

  {
    number:
      "02",

    title:
      "Plan the Product",

    description:
      "We map user journeys, functional requirements, integrations and technical constraints, then determine the platform and architecture that fit the product.",
  },

  {
    number:
      "03",

    title:
      "Design the Experience",

    description:
      "We create the mobile information architecture, wireframes and interface designs so important journeys are resolved before development begins.",
  },

  {
    number:
      "04",

    title:
      "Build & Integrate",

    description:
      "We develop the application and connect the required APIs, backend services, authentication, payments and third-party systems.",
  },

  {
    number:
      "05",

    title:
      "Test & Prepare",

    description:
      "We test important flows across supported devices, resolve issues and prepare production builds, store assets and release requirements.",
  },

  {
    number:
      "06",

    title:
      "Launch & Improve",

    description:
      "We support the store release and use post-launch feedback, performance data and product priorities to guide future improvements.",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const appDevelopmentWhyChoose = {
  eyebrow:
    "WHY BIXELTEK",

  h2:
    "Mobile Development Connected to the Rest of Your Digital Business",

  intro:
    "A mobile application rarely operates on its own. It usually connects to websites, APIs, payments, analytics, advertising, customer data and internal workflows. Our broader web and digital capabilities allow us to consider those connections while building the application itself.",

  points: [
    {
      title:
        "We Start With the Product, Not the Framework",

      description:
        "React Native, Flutter or native development should follow the product requirements rather than being selected before we understand what the application needs to do.",
    },

    {
      title:
        "We Can Build the Systems Around the App",

      description:
        "When the application needs APIs, backend services, admin functionality or integrations, the development scope can cover those supporting systems as well.",
    },

    {
      title:
        "Web & Mobile Can Work Together",

      description:
        "For businesses that already have a website, ecommerce platform or digital system, we can design the mobile experience around the existing customer and operational journey.",
    },

    {
      title:
        "We Think Beyond the First Release",

      description:
        "The first version should establish a useful foundation without unnecessarily locking the product into an architecture that becomes difficult to extend later.",
    },

    {
      title:
        "Design and Engineering Stay Connected",

      description:
        "Mobile UX decisions are considered alongside technical constraints so the final product is practical to build, maintain and use.",
    },

    {
      title:
        "Launch Is Not the End of the Product",

      description:
        "Store submission, bug fixes, performance improvements and future feature development are part of the product lifecycle rather than an afterthought.",
    },
  ],

  closingCopy:
    "The goal is not simply to get an application published. It is to build a mobile product that has a clear reason to exist and a practical foundation for what comes next.",

  ctaText:
    "Talk to an Expert",

  ctaHref:
    "#plan-project",

    image: whyChoose,
};




/* =========================================================
   INVESTMENT
   ========================================================= */

export const appDevelopmentInvestmentFactors = [
  {
    title:
      "Product Scope",

    description:
      "The number and complexity of user journeys, features, roles and workflows directly influence the amount of design and engineering required.",
  },

  {
    title:
      "Platform Strategy",

    description:
      "Building for one platform, two platforms or using a cross-platform approach changes development effort, testing requirements and long-term maintenance.",
  },

  {
    title:
      "UI/UX Requirements",

    description:
      "Custom interactions, complex flows, animations and highly tailored interfaces require more design and implementation work than straightforward application experiences.",
  },

  {
    title:
      "Backend & Integrations",

    description:
      "APIs, authentication, payments, third-party services, databases and existing business systems can significantly affect project complexity.",
  },

  {
    title:
      "Testing & Device Coverage",

    description:
      "The number of supported devices, operating-system versions and critical workflows influences QA requirements before release.",
  },

  {
    title:
      "Post-Launch Requirements",

    description:
      "Ongoing maintenance, monitoring, feature releases and product improvements should be considered when planning the application beyond its first launch.",
  },
];


/* =========================================================
   POST LAUNCH
   ========================================================= */

export const appDevelopmentPostLaunch: AppPostLaunchData = {
  eyebrow: "BEYOND THE FIRST RELEASE",

  h2: "Launch Gives You a Product to Learn From, Not a Finished Product",

  intro:
    "A mobile application changes once real users start interacting with it. Store feedback, usage patterns, crashes, support requests and business priorities can all reveal what should be improved next.",

  points: [
    {
      title: "Bug Fixes & Stability",
      description:
        "Address production issues and maintain a reliable experience as devices and operating systems evolve.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Monitor application behaviour and identify issues affecting startup time, responsiveness or reliability.",
    },
    {
      title: "Feature Iteration",
      description:
        "Use real user feedback and business priorities to decide which capabilities should be improved or added next.",
    },
    {
      title: "Store Updates",
      description:
        "Keep releases, store information and supported platform versions aligned as the product evolves.",
    },
    {
      title: "Product Growth",
      description:
        "Improve onboarding, engagement and important customer journeys as more people use the application.",
    },
    {
      title: "Security & Compatibility",
      description:
        "Address security updates and maintain compatibility with evolving devices, operating systems and third-party services.",
    },
  ],
};


/* =========================================================
   RELATED SERVICES
   ========================================================= */

export const appDevelopmentRelatedServices = [
  {
    title:
      "Web Design & Development",

    description:
      "If your mobile app needs a web experience, customer portal or supporting website, the two can be planned as connected parts of the same digital system.",

    linkText:
      "Explore Web Design Services",

    destination:
      "/services/web-design",
  },
  {
    title:
      "Google Ads Management",

    description:
      "Once the application is ready, paid acquisition can help bring qualified users into the product and support measurable growth.",

    linkText:
      "Explore Google Ads Services",

    destination:
      "/services/google-ads",
  },

  {
    title:
      "SEO Services",

    description:
      "A mobile product often needs a web presence that can attract organic discovery, explain the product and support acquisition beyond the app stores.",

    linkText:
      "Explore SEO Services",

    destination:
      "/services/seo-services",
  },

  {
    title:
      "Analytics & Conversion Tracking",

    description:
      "Understanding acquisition, onboarding and important in-app actions helps teams make better decisions after the application launches.",

    linkText:
      "Explore Analytics Services",

    destination:
      "/services/conversion-rate-optimization",
  },
];


/* =========================================================
   FAQS
   ========================================================= */

export const appDevelopmentFaqs = [
  {
    question:
      "How do I know if my business needs a mobile app?",

    answer:
      "A mobile app is usually most useful when customers, employees or partners repeatedly perform tasks that benefit from a dedicated mobile experience. If users only need occasional or informational access, a responsive website may be more appropriate.",
  },

  {
    question:
      "Do you build both Android and iOS apps?",

    answer:
      "Yes. We can build applications for Android and iOS using native or cross-platform technologies depending on the product requirements, platform-specific capabilities and long-term maintenance needs.",
  },

  {
    question:
      "Should I choose React Native, Flutter or native development?",

    answer:
      "There is no universal answer. We consider the required device capabilities, application complexity, performance requirements, existing technical ecosystem, development goals and long-term maintenance before recommending an approach.",
  },

  {
    question:
      "Can you build the backend and APIs for the mobile app?",

    answer:
      "Yes. Where required, the project can include backend services, APIs, databases, authentication, admin functionality and integrations that support the mobile application.",
  },

  {
    question:
      "Can you connect the app to our existing website or software?",

    answer:
      "Yes. Mobile applications can be connected to existing APIs, ecommerce systems, CRMs, ERPs, databases and other business systems where the necessary integration points are available.",
  },

  {
    question:
      "Can you build an MVP first?",

    answer:
      "Yes. A focused first release can be useful when the product needs to be validated with real users before a larger feature roadmap is funded. The MVP scope should be based on the core user journey rather than simply reducing the number of screens.",
  },

  {
    question:
      "Do you handle App Store and Google Play submission?",

    answer:
      "Store preparation and submission can be included in the agreed project scope, including production builds, store assets and the release requirements relevant to the application.",
  },

  {
    question:
      "Can you improve an existing mobile application?",

    answer:
      "Yes. We can assess an existing application for UX, performance, architecture, bugs, feature requirements and technical limitations before deciding whether targeted modernization or a larger rebuild makes sense.",
  },

  {
    question:
      "How much does mobile app development cost?",

    answer:
      "There is no useful single price for mobile app development. Cost depends on product scope, platforms, UX complexity, backend requirements, integrations, testing coverage and post-launch requirements. We scope those factors before providing a project estimate.",
  },

  {
    question:
      "How long does it take to build a mobile app?",

    answer:
      "The timeline depends on the application's scope, number of platforms, integrations, design requirements and testing needs. A focused MVP can be planned very differently from a mature multi-role application.",
  },

  {
    question:
      "Do you provide support after the app launches?",

    answer:
      "Post-launch support can include bug fixes, performance improvements, store updates, feature development and ongoing product improvements depending on the support arrangement agreed for the project.",
  },
];


/* =========================================================
   FINAL CTA
   ========================================================= */

export const appDevelopmentFinalCta: AppFinalCTAData = {
  id:
    "plan-project",

  eyebrow:
    "READY TO BUILD YOUR APP?",

  h2:
    "Let’s Turn the App Idea Into a Product That Can Actually Be Built",

  description:
    "Whether you have a defined product, an early-stage idea or an existing application that needs improvement, we can start by understanding the users, workflows, platforms and systems involved before recommending the right development approach.",

  primaryCta: {
    label:
      "Plan My App Project",

    href:
      "#contact",
  },

  supportingCopy:
    "We’ll start with the product requirements and business objective, not a predetermined framework or development package.",
};