import type { StaticImageData } from "next/image";

// Import your local assets from /src/assets
import shopifyImg from "@/assets/shopify-industry.webp";
import wooImg from "@/assets/woocommerce-industry.webp";
import customImg from "@/assets/ecom-industry.png";
import headlessImg from "@/assets/headlessEcom-industry.webp";
import bigCommerceImg from "@/assets/bigcommerce-industry.png";
import ecomHeroImg from "@/assets/9908291_4283580.jpg";
import storeJourneyImg from "@/assets/Flowers Shop Ecommerce Website.png";
import ecomControlpanels from '@/assets/ecom-controlpanels.jpg'
import ecomPostLaunchImg from "@/assets/omacomputers.com_home_(hd screenshot).png";
import whychooseImg from "@/assets/why-choose-bixeltek-for-webdesign.jpg";

export interface EcommerceMetadata {
  title: string;
  description: string;
  url: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface WhyChoosePoint {
  title: string;
}

export interface EcommerceWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  image?: StaticImageData | string;
  points: WhyChoosePoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}



export interface CaseStudyCard {
  title: string;
  description: string;
  periodLabel?: string;
  linkText: string;
  destination: string;
  metricHighlight?: string;
  image?: any;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface ScopeCard {
  title: string;
  description: string;
}

export interface PlatformOptionCard {
  title: string;
  description: string;
  linkText?: string;
  destination?: string;
  image?: StaticImageData | string;
  badge?: string;
}


export interface StoreExperiencePanel {
  title: string;
  description: string;
}

export interface ConnectedSystemCard {
  title: string;
  description: string;
}

export interface AutomationUseCaseCard {
  title: string;
  description: string;
  examples?: string[];
}


export interface ProcessStage {
  stageNumber: string;
  title: string;
  description: string;
}

export interface InvestmentFactorCard {
  title: string;
  description: string;
}

export interface RelatedServiceCard {
  title: string;
  description: string;
  linkText: string;
  destination: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PostLaunchGrowthItem {
  title: string;
  description: string;
}

// -----------------------------------------------------------------------------
// 1. Metadata
// -----------------------------------------------------------------------------
export const ecommercePreviewMetadata: EcommerceMetadata = {
  title: "Ecommerce Website Development Services | Bixeltek",
  description:
    "Build an ecommerce store around your products, customers and business operations. Bixeltek develops Shopify, WooCommerce and custom ecommerce solutions designed to support sales and growth.",
  url: "https://bixeltek.com/services/ecommerce-development",
  canonical: "https://bixeltek.com/services/ecommerce-development",
  openGraph: {
    title: "Ecommerce Development Built Around Your Business",
    description:
      "Build an ecommerce store around your products, customers and business operations. Bixeltek develops Shopify, WooCommerce and custom ecommerce solutions designed to support sales and growth.",
  },
};

// -----------------------------------------------------------------------------
// 2. Page Navigation & Breadcrumbs
// -----------------------------------------------------------------------------
export const ecommercePageNavigationData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Ecommerce Website Development" },
  ] as BreadcrumbItem[],
  jumpLinks: [
    { label: "Our Work", href: "#selected-work" },
    { label: "Common Challenges", href: "#challenges" },
    { label: "What's Included", href: "#services" },
    { label: "Platform Options", href: "#platforms" },
    { label: "Store Experience", href: "#experience" },
    { label: "Our Process", href: "#process" },
    { label: "Beyond Launch", href: "#beyond-launch" },
    { label: "Why Bixeltek", href: "#why-bixeltek" },
    { label: "Investment", href: "#investment" },
    { label: "Related Services", href: "#related-services" },
    { label: "FAQs", href: "#faqs" },
  ] as JumpLinkItem[],
};

// -----------------------------------------------------------------------------
// 3. Hero
// -----------------------------------------------------------------------------
export const ecommerceHeroPreviewData = {
  eyebrow: "ECOMMERCE DEVELOPMENT · SHOPIFY · WOOCOMMERCE · CUSTOM",
  h1: "Build an Ecommerce System That Works From Product to Purchase",
  p1: "Your online store needs to do more than display products. It needs to help customers find what they want, understand their options and complete their purchase — while giving your team a manageable way to run the business.",
  p2: "We design and develop ecommerce websites around your catalogue, business model, operational needs and plans for growth, using Shopify, WooCommerce or custom development where appropriate.",
  primaryButtonText: "Talk to an Ecommerce Expert",
  primaryButtonHref: "#plan-project",
  secondaryLinkText: "Explore Our Work",
  secondaryLinkHref: "#selected-work",
  microcopy:
    "Launching your first store, replacing an outdated one or moving beyond your current platform? Start with the requirements, not a predetermined solution.",
  image: ecomHeroImg,
};

// -----------------------------------------------------------------------------
// 4. Selected Work
// -----------------------------------------------------------------------------
export const ecommerceSelectedWorkPreviewData = {
  eyebrow: "SELECTED WORK",
  h2: "Ecommerce Projects Start With Different Business Needs",
  intro:
    "The right solution depends on what the business is trying to achieve. Explore how digital experiences can support different products, customer journeys and operational requirements.",
  cards: [
    {
      title: "Guerr Clothing",
      description:
        "A fully custom Medusa headless ecommerce platform engineered for an apparel brand — featuring OTP-secured checkout, Razorpay payments, automated abandoned cart recovery, Shiprocket fulfillment, and an integrated influencer program.",
      linkText: "Explore the Guerr Case Study",
      destination: "/case-studies/guerr-clothing-case-study",
    },
    {
      title: "TumbleWash",
      description:
        "An ecommerce and local-service experience designed around a customer journey that moves from discovering the service to understanding the offer and taking action. The project brought the website experience and acquisition requirements closer together.",
      linkText: "Explore the TumbleWash Case Study",
      destination: "/case-studies/Tumblewash-Casestudy",
    },
    {
      title: "Business & DTC Commerce Experiences",
      description:
        "For growing brands and direct-to-consumer businesses, the challenge is building an online store that combines clear product presentation, seamless checkout, and integrated operational systems to scale smoothly.",
      linkText: "Explore Our Case Studies",
      destination: "/case-studies",
    },
  ] as CaseStudyCard[],
  supportingNote:
    "Case studies display real project requirements, implemented platform solutions and verified commercial outcomes.",
};

// -----------------------------------------------------------------------------
// 5. Common Challenges
// -----------------------------------------------------------------------------
export const ecommerceProblemPreviewData = {
  eyebrow: "WHERE STORES GET STUCK",
  h2: "What Is Holding Your Ecommerce Business Back?",
  intro:
    "The next step is not always a new website. It is identifying the problem that is making the current store harder to grow or operate.",
  cards: [
    {
      title: "Customers Visit but Do Not Purchase",
      description:
        "When product information, pricing, delivery details or trust signals leave questions unanswered, visitors have less reason to complete their order. The buying journey needs to address those questions at the right time.",
    },
    {
      title: "Managing the Store Takes Too Much Work",
      description:
        "Manual product updates, disconnected inventory and repetitive order processes can turn everyday store management into an operational burden. The right structure and integrations can reduce unnecessary work.",
    },
    {
      title: "The Current Platform Is Becoming a Limitation",
      description:
        "A store may outgrow its existing setup as the catalogue, integrations or business requirements become more complex. The important decision is whether the current platform can be extended or whether a different approach is justified.",
    },
    {
      title: "A Redesign Is Needed, but the Scope Is Unclear",
      description:
        "Not every problem requires a complete rebuild. Understanding what is working, what is underperforming and what needs to change helps prevent unnecessary development and migration costs.",
    },
  ] as ProblemCard[],
};

// -----------------------------------------------------------------------------
// 6. What's Included (Scope)
// -----------------------------------------------------------------------------
export const ecommerceScopePreviewData = {
  eyebrow: "OUR ECOMMERCE DEVELOPMENT SERVICES",
  h2: "From Product Catalogue to Completed Order",
  intro:
    "We bring the key parts of an ecommerce project together so the storefront, technology and business operations work as one system.",
  cards: [
    {
      title: "Ecommerce Strategy & Structure",
      description:
        "Define the catalogue structure, page types, customer journeys, platform requirements and project scope before development begins.",
    },
    {
      title: "UX/UI Design",
      description:
        "Design product listings, product detail pages, navigation and purchase flows around the needs of your customers and the character of your brand.",
    },
    {
      title: "Store Development",
      description:
        "Build the storefront, catalogue, cart, checkout and supporting functionality using the platform and architecture suited to the project.",
    },
    {
      title: "Payments & Integrations",
      description:
        "Connect relevant payment providers and business systems, such as inventory, shipping, CRM, analytics or ERP tools, according to the requirements.",
    },
    {
      title: "Migration & Launch",
      description:
        "Plan the transition from an existing store where needed, including products, content, URLs and other relevant data. Test important journeys and integrations before launch.",
    },
    {
      title: "Technical SEO & Analytics",
      description:
        "Establish the technical foundations for product and category discovery, alongside measurement for important customer actions and completed purchases.",
    },
  ] as ScopeCard[],
};

// -----------------------------------------------------------------------------
// 7. Platform Options
// -----------------------------------------------------------------------------
// data/ecommercePlatformsPreviewData.ts


export const ecommercePlatformsPreviewData = {
  eyebrow: "FIND THE RIGHT FOUNDATION",
  h2: "Which Ecommerce Platform Fits Your Business?",
  intro:
    "The best platform is the one that fits your requirements without adding unnecessary complexity. We evaluate the way you sell, the functionality you need and how you expect the business to develop.",
  cards: [
    {
      title: "Shopify",
      description:
        "A managed ecommerce platform suited to businesses that want established store functionality, an extensive app ecosystem and a practical way to manage products, orders and day-to-day store operations.",
      image: shopifyImg,
    },
    {
      title: "WooCommerce",
      description:
        "A flexible ecommerce option for businesses that want their store closely integrated with WordPress, particularly when content, publishing and ecommerce need to work together within the same website.",
      image: wooImg,
    },
    {
      title: "Custom Ecommerce",
      description:
        "A suitable approach for businesses with specialised workflows, complex integrations or unique commerce requirements that standard ecommerce platforms cannot support efficiently without significant compromises.",
      image: customImg,
    },
    {
      title: "Headless Commerce",
      description:
        "A specialised architecture that separates the storefront from the commerce backend. It can be valuable when a business needs greater frontend control, custom digital experiences or a more flexible technology architecture.",
      image: headlessImg,
    },
    {
      title: "BigCommerce",
      description:
        "A hosted ecommerce platform designed for businesses that need a broader set of built-in commerce capabilities, flexible catalogue management and an architecture that can support more complex ecommerce requirements.",
      image: bigCommerceImg,
    },
  ] as PlatformOptionCard[],
};

// -----------------------------------------------------------------------------
// 8. Store Experience
// -----------------------------------------------------------------------------
export const storeExperiencePreviewData = {
  eyebrow: "DESIGNED AROUND THE BUYER",
  h2: "Give Customers the Information They Need to Buy",
  intro:
    "A good ecommerce experience anticipates the decisions customers need to make. The design should make those decisions easier without overwhelming people with unnecessary content or steps.",
  image: ecomControlpanels,
  panels: [
    {
      title: "Product Discovery",
      description:
        "Organise products into useful categories and collections, with navigation, search and filtering appropriate to the size of the catalogue.",
    },
    {
      title: "Product Information",
      description:
        "Present descriptions, specifications, images, variants, availability and other relevant details in a way that helps customers evaluate their options.",
    },
    {
      title: "Cart & Checkout",
      description:
        "Make product selection, cart review, delivery information and payment steps clear and predictable, while avoiding unnecessary friction.",
    },
    {
      title: "Mobile Usability",
      description:
        "Ensure customers can browse, compare products and complete purchases comfortably across mobile devices, tablets and desktops.",
    },
  ] as StoreExperiencePanel[],
};

// -----------------------------------------------------------------------------
// 9. Connected Business Systems
// -----------------------------------------------------------------------------
export const connectedSystemsPreviewData = {
  eyebrow: "CONNECTED BUSINESS SYSTEMS",
  h2: "Your Store Is Part of a Bigger Operation",
  intro:
    "An ecommerce website does not operate in isolation. Depending on the business, its success also depends on how orders, inventory, customer information and marketing data move between systems.",
  cards: [
    {
      title: "Inventory & Order Management",
      description:
        "Connect relevant systems to help keep product availability and order information consistent.",
    },
    {
      title: "Customer & Marketing Systems",
      description:
        "Integrate CRM, email marketing, advertising platforms and analytics where they support the business's customer acquisition and retention workflows.",
    },
    {
      title: "Shipping & Fulfilment",
      description:
        "Connect appropriate shipping or fulfilment services to support the process from checkout to delivery.",
    },
    {
      title: "Business-Specific Workflows",
      description:
        "Where standard integrations are insufficient, assess whether custom APIs or development are needed to connect the store with existing business systems.",
    },
  ] as ConnectedSystemCard[],
};

// -----------------------------------------------------------------------------
// 10. Our Process
// -----------------------------------------------------------------------------
export const ecommerceProcessPreviewData = {
  eyebrow: "HOW WE WORK",
  h2: "Make the Important Decisions Before Development Begins",
  stages: [
    {
      stageNumber: "01",
      title: "Discovery",
      description:
        "Understand the business model, products, customers, current challenges and operational requirements.",
    },
    {
      stageNumber: "02",
      title: "Scope & Architecture",
      description:
        "Define the store structure, platform, integrations, functionality and project priorities.",
    },
    {
      stageNumber: "03",
      title: "Design",
      description:
        "Develop the key page layouts and buying journeys before committing to the full implementation.",
    },
    {
      stageNumber: "04",
      title: "Development",
      description:
        "Build the storefront, configure ecommerce functionality and implement the agreed integrations.",
    },
    {
      stageNumber: "05",
      title: "Testing",
      description:
        "Validate product flows, checkout, payments, mobile usability, data and integrations.",
    },
    {
      stageNumber: "06",
      title: "Launch",
      description:
        "Prepare the store for launch, verify critical journeys and establish the next steps for ongoing maintenance and improvement.",
    },
  ] as ProcessStage[],
};

// -----------------------------------------------------------------------------
// 11. Investment (Cost Factors)
// -----------------------------------------------------------------------------
export const ecommerceInvestmentPreviewData = {
  eyebrow: "PROJECT SCOPE & COST",
  h2: "What Determines the Cost of an Ecommerce Website?",
  intro:
    "The cost depends on the store you need to build, not simply the number of pages it contains.",
  cards: [
    {
      title: "Platform & Functionality",
      description:
        "A standard storefront, a customised platform and a bespoke commerce system involve different levels of development.",
    },
    {
      title: "Catalogue Complexity",
      description:
        "Product variants, filters, categories, bulk data and specialised product configurations affect the work involved.",
    },
    {
      title: "Design Requirements",
      description:
        "Custom layouts and buying journeys require different effort from adapting an existing theme.",
    },
    {
      title: "Integrations & Migration",
      description:
        "Connecting business systems or transferring products, content, URLs and order data can add substantial project work.",
    },
    {
      title: "Ongoing Requirements",
      description:
        "Maintenance, platform updates, new functionality and future improvements should be considered when planning the overall investment.",
    },
  ] as InvestmentFactorCard[],
  closingCopy:
    "We establish the scope and technical requirements before recommending an approach, so the proposed work reflects the actual needs of the business.",
  buttonText: "Discuss My Ecommerce Project",
  buttonHref: "#plan-project",
};

// -----------------------------------------------------------------------------
// 12. Related Services
// -----------------------------------------------------------------------------
export const ecommerceRelatedServicesPreviewData = {
  eyebrow: "EXPLORE OUR SERVICES",
  h2: "Looking for a Specific Ecommerce Solution?",
  intro:
    "Whether you need a complete online store or help with one part of the project, explore the service that matches your requirements.",
  cards: [
    {
      title: "Web Design & Development",
      description:
        "For businesses that need a broader website redesign, a new business website or a custom digital experience beyond the store itself.",
      linkText: "Explore Web Design",
      destination: "/services/web-design",
    },
    {
      title: "Shopify Development",
      description:
        "For Shopify store builds, theme customisation and platform-specific development.",
      linkText: "Explore Shopify Development",
      destination: "/services/ecommerce-development/shopify",
    },
    {
      title: "WooCommerce Development",
      description:
        "For WordPress-based ecommerce stores, WooCommerce customisation and related development.",
      linkText: "Explore WooCommerce Development",
      destination: "/services/ecommerce-development/woocommerce",
    },
    {
      title: "Payment Integration",
      description:
        "For businesses that need to connect payment providers or implement specific payment requirements.",
      linkText: "Explore Payment Integration",
      destination: "/payment-gateway-integrations",
    },
  ] as RelatedServiceCard[],
};

// -----------------------------------------------------------------------------
// 13. FAQs
// -----------------------------------------------------------------------------
export const ecommerceFaqPreviewData = {
  eyebrow: "ECOMMERCE DEVELOPMENT FAQ",
  h2: "What to Know Before Starting an Ecommerce Project",
  faqs: [
    {
      question: "Should I choose Shopify or WooCommerce?",
      answer:
        "The decision depends on your operating model, technical requirements, content needs and preferred approach to store management. Shopify offers a managed ecommerce environment, while WooCommerce integrates closely with WordPress. We assess the requirements before recommending a platform.",
    },
    {
      question: "When should I consider custom ecommerce development?",
      answer:
        "Consider it when your business needs functionality, workflows or integrations that standard platform features cannot reasonably support. Custom development should solve a genuine requirement, not add complexity without a clear benefit.",
    },
    {
      question: "Can you redesign my existing store without migrating platforms?",
      answer:
        "Yes. If your existing platform remains suitable, the project can focus on design, structure, usability and functionality without a platform migration.",
    },
    {
      question: "Can you migrate products and content from my current store?",
      answer:
        "Migration can include products, categories, content, URLs and other relevant data. The exact scope depends on the existing platform, destination platform and data involved.",
    },
    {
      question: "Can you integrate the store with our existing systems?",
      answer:
        "Yes. Depending on technical compatibility and requirements, we can assess integrations with payment providers, inventory systems, CRM, ERP, shipping, marketing and analytics tools.",
    },
    {
      question: "Do you build ecommerce websites with SEO in mind?",
      answer:
        "Yes. We consider technical foundations, product and category structure, URLs, metadata and internal linking as part of the development process. Search performance also depends on factors beyond website development.",
    },
    {
      question: "Can you help if our store receives traffic but generates few sales?",
      answer:
        "We can review the store's structure, product pages, buying journey and available analytics to identify potential issues. Any recommendations should be based on the evidence available rather than assuming the website is the only problem.",
    },
    {
      question: "How long does an ecommerce project take?",
      answer:
        "The timeline depends on scope, platform, catalogue complexity, integrations, migration and content readiness. We establish the requirements and dependencies before setting a project timeline.",
    },
    {
      question: "Do you provide ongoing ecommerce support?",
      answer:
        "Support and future development can be scoped according to the platform, business requirements and the level of ongoing assistance needed.",
    },
    {
      question: "Can you also help with advertising and digital growth?",
      answer:
        "Yes. Bixeltek also provides services including Google Ads, SEO and Meta Ads, which can be considered alongside ecommerce development when they fit the business's goals.",
    },
  ] as FAQItem[],
};

// -----------------------------------------------------------------------------
// 14. Final CTA
// -----------------------------------------------------------------------------
export const ecommerceFinalOfferPreviewData = {
  eyebrow: "START WITH THE RIGHT PLAN",
  h2: "Let's Work Out What Your Store Needs",
  intro:
    "Tell us what you sell, how your current store works and what you want to improve. We'll discuss the requirements, platform options and the work needed to move the project forward.",
  primaryButtonText: "Plan My Ecommerce Project",
  primaryButtonHref: "#plan-project",
  points: [
    {
      title: "Review Requirements",
      description: "Review your ecommerce requirements",
    },
    {
      title: "Platform & Integrations",
      description: "Discuss platform and integration options",
    },
    {
      title: "Scope Definition",
      description: "Identify the scope of design and development",
    },
    {
      title: "Next Steps",
      description: "Establish practical next steps",
    },
  ],
  form: {
    title: "Discuss Your Ecommerce Project",
    submitButton: "Plan My Ecommerce Project",
    microcopy:
      "No obligation. We will review your requirements and follow up with practical platform and scope options.",
    privacyText:
      "By submitting this form, you agree that Bixeltek may contact you regarding your enquiry. Review our Privacy Policy to understand how we handle your details.",
    privacyDestination: "/privacy-policy",
    successHeading: "Your Ecommerce Enquiry Has Been Received",
    successMessage:
      "Thank you for contacting Bixeltek. Our ecommerce technical specialists will review your store requirements and reach out to discuss platforms, scope, and timeline.",
    alternativeContact:
      "Prefer to speak directly? Call +91 9100032301 or email hello@bixeltek.com.",
    phoneLink: "tel:+919100032301",
    emailLink: "mailto:hello@bixeltek.com",
  },
};

// -----------------------------------------------------------------------------
// 11. Beyond the Launch
// -----------------------------------------------------------------------------

export const ecommercePostLaunchPreviewData = {
  eyebrow: "BEYOND THE LAUNCH",

  h2: "Your Ecommerce Store Should Keep Improving After Launch",

  intro:
    "Launching the store is the starting point, not the end of the project. Once customers begin using it, real behaviour can reveal where they discover products, where they hesitate and where they leave.",

  description:
    "We can use that information to identify opportunities across the buying journey — from product and category pages to checkout, mobile experience, analytics and acquisition.",

  image: ecomPostLaunchImg,

  items: [
    {
      title: "Conversion Improvements",
      description:
        "Review customer journeys, product pages, cart and checkout to identify areas where unnecessary friction may be affecting completed purchases.",
    },

    {
      title: "Product & Category Experience",
      description:
        "Improve how products are organised, presented and discovered as you learn more about what customers need to make purchase decisions.",
    },

    {
      title: "Analytics & Measurement",
      description:
        "Use relevant analytics and conversion data to understand important customer actions and make improvement decisions based on evidence.",
    },

    {
      title: "SEO & Organic Growth",
      description:
        "Continue improving product and category structures, technical foundations and content as the store grows and the search opportunity becomes clearer.",
    },

    {
      title: "Paid Acquisition",
      description:
        "Connect the ecommerce experience with Google Ads and Meta Ads when paid acquisition is part of the business's growth strategy.",
    },

    {
      title: "New Features & Integrations",
      description:
        "Extend the store as business requirements change, whether that means new functionality, integrations, automation or improvements to existing workflows.",
    },
  ] as PostLaunchGrowthItem[],
};




export const ecommerceWhyChoosePreviewData: EcommerceWhyChooseData = {
  eyebrow: "WHY BIXELTEK",

  h2: "Ecommerce Experience Built From Years of Real Projects",

  intro:
    "We have been designing and developing ecommerce experiences for 5+ years, working with different products, business models, platforms and operational requirements. That experience helps us make practical decisions that balance customer experience, technology and business growth.",
  image: whychooseImg,
  points: [
    {
      title: "5+ Years of Ecommerce Development Experience",
    },
    {
      title: "Shopify, WooCommerce, Headless & Custom Ecommerce",
    },
    {
      title: "Built Around Your Products, Customers & Operations",
    },
    {
      title: "Conversion-Focused Customer Experiences",
    },
    {
      title: "SEO, Analytics & Performance Built Into the Foundation",
    },
    {
      title: "Designed to Support Growth Beyond Launch",
    },
  ],

  closingCopy:
    "We don't believe in building ecommerce stores just to get them live. We build systems that give your business a stronger foundation for selling and growing online.",

  ctaText: "Talk to an Expert",
  ctaHref: "#plan-project",
};

// -----------------------------------------------------------------------------
// 17. Overview (What is Ecommerce Development)
// -----------------------------------------------------------------------------
export const ecommerceOverviewData = {
  eyebrow: "WHAT IS STRATEGIC ECOMMERCE DEVELOPMENT?",
  h2: "Building High-Converting Storefronts Engineered for Commercial Scale",
  intro:
    "Ecommerce development is far more than listing products online. It is the end-to-end engineering of product discovery, checkout psychology, inventory synchronization, payment gateways, and operational fulfillment into one cohesive sales system.",
  body: [
    "Most online stores underperform not due to lack of traffic, but due to friction within the purchase journey—cluttered category navigation, slow mobile page loads, unoptimized checkout funnels, and disconnected back-office inventory systems.",
    "At Bixeltek, we architect ecommerce systems tailored to your specific commercial requirements. Whether building on Shopify Plus, WooCommerce, Medusa.js, or custom headless architectures, we optimize every interaction from catalog discovery to one-click payment and automated order fulfillment."
  ],
  closingCopy:
    "Deliver frictionless shopping experiences, eliminate checkout drop-offs, and scale transaction volume with engineered reliability.",
};
