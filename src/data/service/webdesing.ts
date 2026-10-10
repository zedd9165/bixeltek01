import type { StaticImageData } from "next/image";

// Import your custom images from /src/assets
import businessImg from "@/assets/business.jpg";
import ecommerceImg from "@/assets/ecom-industry.png";
import b2bImg from "@/assets/b2b-business-business-corporate-connection-partnership-concept.jpg";
import localImg from "@/assets/2151823041.jpg";
import landingImg from "@/assets/landing-page.png";
import customImg from "@/assets/custom'.png";
import dentalImg from "@/assets/digital marketing for health care practices.jpg";
import technologyImg from "@/assets/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import franchiseImg from "@/assets/download.png";


export interface WebsiteTypeCardItem {
  title: string;
  description: string;
  image?: StaticImageData | string;
  badge?: string;
}

export interface WebDesignMetadata {
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

export interface WebsiteTypeCard {
  title: string;
  description: string;
  supportingText?: string;
}

export interface ConversionJourneyPanel {
  title: string;
  description: string;
}

export interface TechnologyCard {
  title: string;
  description: string;
}

export interface StartingSituationCard {
  title: string;
  description: string;
}

export interface ProcessStage {
  stageNumber: string;
  title: string;
  description: string;
}

export interface InvestmentCard {
  title: string;
  description: string;
}

export interface IndustryCard {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
export interface RelatedServiceCard {
  title: string;
  description: string;
  linkText: string;
  destination: string;
}

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const webDesignMetadata: WebDesignMetadata = {
  title: "Web Design & Development Services | Bixeltek",
  description:
    "Build a website that is easier to find, trust and use. Bixeltek designs and develops conversion-focused websites, ecommerce stores and custom digital experiences.",
  url: "https://bixeltek.com/services/web-design",
  canonical: "https://bixeltek.com/services/web-design",
  openGraph: {
    title: "Web Design & Development Built Around Your Business",
    description:
      "Strategy, UX, design and development brought together to build websites that support how your business is discovered, evaluated and chosen.",
  },
};


/* =========================================================
   NAVIGATION
   ========================================================= */

export const webDesignNavigationData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Web Design & Development" },
  ],

  jumpLinks: [
    { label: "Our Work", href: "#work" },
    { label: "Problems", href: "#problems" },
    { label: "What's Included", href: "#included" },
    { label: "Website Types", href: "#website-types" },
    { label: "Conversion", href: "#conversion" },
    { label: "Technology", href: "#technology" },
    { label: "Process", href: "#process" },
    { label: "Investment", href: "#investment" },
    { label: "FAQs", href: "#faqs" },
  ],
};


/* =========================================================
   HERO
   ========================================================= */

export const webDesignHeroData = {
  eyebrow: "WEB DESIGN · DEVELOPMENT · DIGITAL GROWTH",

  h1: "Build a Website People Can Find, Trust & Choose",

  p1:
    "Your website is often the first serious interaction someone has with your business. We design and develop websites that make it easier for the right people to understand what you offer, trust your business and take the next step.",

  p2:
    "From service businesses and growing companies to ecommerce brands and custom digital platforms, we combine strategy, UX, design, development and conversion thinking around the way your business actually needs to work.",
        primaryButtonText: "Talk to An Expert",
        primaryButtonHref: "#website-project",

        secondaryLinkText: "Explore Our Work",
        secondaryLinkHref: "#work",

  microcopy:
    "Starting from scratch? Rebuilding an existing website? We can assess what you have before recommending what should change.",

  trustStrip: [
    "Websites for Growing Businesses",
    "Strategy · Design · Development",
    "Built for SEO, Conversion & Growth",
  ],
};


/* =========================================================
   SELECTED WORK
   ========================================================= */

export const selectedWebWorkData = {
  eyebrow: "SELECTED WEB & DIGITAL WORK",

  h2: "See How We Turn Business Requirements Into Digital Experiences",

  intro:
    "A website project rarely starts with the same problem twice. One business may need a stronger brand and clearer positioning. Another may need ecommerce infrastructure, better conversion paths or a completely different technical foundation. Our work adapts to the business behind the website.",

  cards: [
    {
      title: "TumbleWash",
      description:
        "An ecommerce and local-service experience designed around a customer journey that moves from discovering the service to understanding the offer and taking action. The project brought the website experience and acquisition requirements closer together.",

      linkText: "Explore the TumbleWash Case Study",
      destination: "/case-studies/Tumblewash-Casestudy",
    },

    {
      title: "Healthcare & Dental Experiences",
      description:
        "Healthcare websites need to do more than present treatments. They need to help patients understand their options, establish confidence and make contacting the practice straightforward. We approach these projects around clarity, trust and the patient's decision journey.",

      linkText: "Explore Our Healthcare Work",
      destination: "/case-studies",
    },

    {
      title: "Business & Service Websites",
      description:
        "For established businesses, the challenge is often not simply creating a better-looking website. The website needs clearer positioning, stronger service journeys, useful content and a structure that supports both search visibility and enquiries.",

      linkText: "Explore Our Case Studies",
      destination: "/case-studies",
    },
  ],

  supportingNote:
    "Every project has different requirements. Scope, platform, content, integrations and development effort depend on the business model, existing systems and goals of the website.",
};


export const showcaseContent = {
  headingHighlight: "Built for Discovery, ",
  headingPart2: "Performance & Growth",

  intro1:
    "A website has to work beyond the screen. It needs a structure that search engines can understand, pages that load efficiently and content that makes sense to both visitors and the systems discovering your business.",

  intro2:
    "We build websites with clear information architecture, semantic HTML, sensible page structures, technical SEO foundations, responsive performance and the flexibility to support content and growth as your business evolves.",

  closingHeading: "Ready to Build a Website Around Your Business Goals?",

  ctaText: "Talk To Our Web Design Team",

  ctaHref: "tel:+919100032301",
};

/* =========================================================
   BUSINESS PROBLEM
   ========================================================= */

export const websiteProblemData = {
eyebrow: "COMMON WEBSITE PROBLEMS",
h2: "A Website Can Look Good and Still Fail to Drive Business",

  intro:
    "A polished interface is only one part of a successful website. If visitors cannot quickly understand the offer, find the right information, trust the business or know what to do next, the website can create friction instead of removing it.",

  cards: [
    {
      title: "Visitors Do Not Understand What You Actually Do",

      description:
        "A website can contain all the right information and still communicate poorly. We look at the positioning, page hierarchy and messaging to make the value of the business easier to understand without forcing visitors to work it out themselves.",
    },

    {
      title: "The Website Gets Traffic but Not Enough Enquiries",

      description:
        "Traffic alone does not make a website commercially useful. We examine the journey from landing page to action, including calls to action, forms, trust signals, mobile usability and the information people need before they are ready to contact you.",
    },

    {
      title: "Every Service Is Fighting for the Same Page",

      description:
        "Businesses often grow faster than their website structure. New services, locations and offers get added until navigation becomes confusing. We organise content around how customers actually look for and evaluate those services.",
    },

    {
      title: "The Website Was Built Without the Next Stage in Mind",

      description:
        "A site may work today but become difficult to expand when new pages, integrations, campaigns or ecommerce requirements appear. We consider the underlying structure so future changes do not always require starting again.",
    },

    {
      title: "The Design Looks Modern but Does Not Feel Like the Business",

      description:
        "A collection of visual trends is not a brand experience. We use design to communicate the positioning, credibility and personality of the business while keeping the interface clear enough for people to navigate and act.",
    },

    {
      title: "Nobody Knows What Should Actually Be Rebuilt",

      description:
        "A slow or outdated website does not always need a complete rebuild. We assess the existing site first and separate problems that can be improved from problems that require a new structure, design or technical foundation.",
    },
  ],
};


/* =========================================================
   MANAGEMENT / DELIVERY SCOPE
   ========================================================= */

export const webDesignScopeData = {
  eyebrow: "THE WEBSITE BUILD",

  h2: "What Our Web Design & Development Covers",

  intro:
    "We treat the website as a connected system rather than a collection of pages. The exact scope depends on the project, but the work can span strategy, information architecture, UX, visual design, development, content structure, integrations and launch.",

  cards: [
    {
      title: "Website Strategy & Discovery",

      description:
        "We establish what the website needs to achieve, who it needs to serve and what information those people need before taking action. Existing websites, competitors, services, content and business priorities help shape the direction before design begins.",
    },

    {
      title: "Information Architecture & Page Structure",

      description:
        "We organise pages around the way people navigate the business, not simply around an internal company structure. Services, locations, industries, resources and conversion paths are given a clear relationship so the site can grow without becoming difficult to use.",
    },

    {
      title: "UX & Conversion Planning",

      description:
        "We define the important journeys through the site and identify where visitors should learn, compare, trust and act. Calls to action, forms, navigation, internal links and supporting information are considered as part of the experience rather than added at the end.",
    },

    {
      title: "UI & Visual Design",

      description:
        "We translate the strategy into a visual system that reflects the business. Typography, spacing, colour, imagery, components and responsive behaviour are designed together so the interface feels consistent instead of looking like a collection of individual sections.",
    },

    {
      title: "Custom Website Development",

      description:
        "We build the approved experience into a responsive, maintainable website. Depending on the project, development may include custom components, CMS integration, forms, APIs, authentication, ecommerce functionality and other business-specific requirements.",
    },

    {
      title: "SEO-Ready Website Architecture",

      description:
        "Search visibility starts with the structure of the website. We consider page hierarchy, URLs, metadata, internal linking, content relationships, technical foundations and the ability to create useful pages as the site grows.",
    },

    {
      title: "Integrations & Business Systems",

      description:
        "Where the website needs to connect with other systems, we plan those requirements as part of the build. Depending on scope, this can include forms, CRMs, analytics, ecommerce platforms, payment systems, automation and third-party services.",
    },

    {
      title: "Launch, Testing & Handover",

      description:
        "Before launch, we review responsive behaviour, forms, navigation, links, tracking and important user journeys. The final handover covers the agreed CMS, access and documentation so the website can be managed after launch.",
    },
  ],

  scopeNote:
    "Brand identity, professional photography, copywriting, advanced integrations, ecommerce functionality, ongoing SEO and post-launch optimisation can be included where specified in the project scope.",
};


/* =========================================================
   WEBSITE TYPES
   ========================================================= */

// @/data/service/webdesing.ts


export const websiteTypesData = {
  eyebrow: "THE RIGHT WEBSITE DEPENDS ON THE BUSINESS",
  h2: "We Build Websites Around How Your Customers Buy",
  intro:
    "A five-page service website, Enterprise Webiste, Educational Institute portal and a large ecommerce platform should not be approached as the same project. We choose the structure, experience and technical approach around what the website needs to accomplish.",
  cards: [
    {
      title: "Business & Service Websites",
      description:
        "For established service businesses that need a clearer digital presence, stronger positioning and more qualified enquiries. The focus is on explaining the offer, building trust and creating straightforward routes to contact or conversion.",
      image: businessImg,
      badge: "Lead Generation & Trust",
    },
    {
      title: "Ecommerce Websites",
      description:
        "For brands that need more than a catalogue. We consider product discovery, collections, filtering, product information, checkout, trust, mobile shopping and the operational systems behind the store.",
      image: ecommerceImg,
      badge: "Catalog & Checkout Systems",
    },
    {
      title: "Corporate & B2B Websites",
      description:
        "B2B buyers often need more information before making contact. We structure services, capabilities, industries, case studies and resources so prospective buyers can evaluate the business without getting lost in corporate content.",
      image: b2bImg,
      badge: "Enterprise Evaluation",
    },
    {
      title: "Local & Multi-Location Websites",
      description:
        "When a business serves multiple locations, the website needs to balance a consistent brand experience with useful location-specific information. We structure services and locations so users can reach the most relevant page quickly.",
      image: localImg,
      badge: "Multi-Unit Scalability",
    },
    {
      title: "Landing Pages & Campaign Experiences",
      description:
        "Paid traffic and focused campaigns often need a different experience from the main website. We build landing pages around a specific offer, audience and conversion objective while keeping the message consistent with the wider brand.",
      image: landingImg,
      badge: "High-Conversion Campaigns",
    },
    {
      title: "Custom Digital Experiences (Enterprise)",
      description:
        "Some projects require functionality that does not fit a standard website template. Where the business needs custom workflows, dashboards, portals, applications or integrations, we can design and develop the digital experience around those requirements.",
      image: customImg,
      badge: "Bespoke Workflows & APIs",
    },
  ] as WebsiteTypeCardItem[],
};


/* =========================================================
   CONVERSION JOURNEY
   ========================================================= */

export const websiteConversionData = {
  eyebrow: "BEYOND THE FIRST IMPRESSION",

  h2: "A Better Website Gives Every Visitor a Clearer Next Step",

  intro:
    "Good web design is not about pushing every visitor toward the same button. Different people arrive with different levels of intent. We design the journey so visitors can find information, build confidence and move forward at the point that makes sense for them.",

  panels: [
  {
    title: "Help People Understand the Offer",

    description:
      "The first job of the website is clarity. Visitors should quickly understand what the business does, who it helps and why the offer is relevant to them. We use hierarchy, messaging and page structure to reduce that initial uncertainty.",
  },

  {
    title: "Give High-Intent Visitors a Fast Route",

    description:
      "Someone who is ready to enquire should not have to search through the website to find a phone number, form, booking option or purchase path. Important actions remain visible and appropriate to the page and the visitor's intent.",
  },

  {
    title: "Answer the Questions That Delay Decisions",

    description:
      "People often hesitate because something is missing: pricing context, proof, process information, service details, FAQs or evidence that the business understands their situation. We identify those gaps and place useful information where it supports the decision.",
  },

  {
    title: "Make the Experience Work on Mobile",

    description:
      "Mobile visitors should not receive a compressed version of the desktop website. Navigation, typography, spacing, forms, images and conversion actions need to work naturally on smaller screens and slower connections.",
  },

  {
    title: "Connect the Website to What Happens Next",

    description:
      "A form submission is not the end of the customer journey. Where required, the website can connect to analytics, CRM systems, notifications, lead routing or automation so the business can respond to the opportunity after the visitor converts.",
  },

  {
    title: "Give Campaign Traffic a More Focused Destination",

    description:
      "Not every visitor from Google Ads, Meta Ads or another campaign needs to land on the main website. For high-intent campaigns, a focused landing page can align the message, offer, proof and call to action with what brought the visitor there, creating a more direct path toward conversion.",
  },
],

  supportingLink: {
    text: "Explore Our Digital Growth Services",
    destination: "/services",
  },
};


/* =========================================================
   TECHNOLOGY / ARCHITECTURE
   ========================================================= */

export const webTechnologyData = {
  eyebrow: "THE TECHNOLOGY SHOULD SERVE THE REQUIREMENT",

  h2: "Choose the Platform Around the Website You Actually Need",

  intro:
    "There is no single technology that is right for every business. A marketing website, ecommerce store and custom application have different requirements. We evaluate the content model, integrations, editing needs, performance expectations and future growth before recommending the technical approach.",

  cards: [
    {
      title: "Next.js & Custom-Coded Websites",

      description:
        "Useful when a project needs a high degree of control over performance, components, content structure, integrations and the frontend experience. Custom development gives us room to build around requirements rather than a predefined template.",

      stack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Vercel", icon: "vercel" },
        {name:'Nuxt.js', icon:'nuxtjs'},
        {name:'Vue.js', icon:'vuejs'},
        {name:'Node.js', icon:'nodejs'},

      ],
    },

    {
      title: "WordPress & WooCommerce",

      description:
        "A practical option when the business needs a flexible content management experience and a familiar publishing workflow. WooCommerce can support ecommerce requirements where its ecosystem and operational model fit the project.",

      stack: [
        { name: "WordPress", icon: "wordpress" },
        { name: "WooCommerce", icon: "woocommerce" },
        { name: "Elementor", icon: "elementor" },
      ],
    },

    {
      title: "Shopify",

      description:
        "A strong choice for businesses that want an established ecommerce platform with product, checkout and store-management capabilities already built into the ecosystem. We focus the custom work around the experience and requirements that differentiate the store.",

      stack: [
        { name: "Shopify", icon: "shopify" },
      ],
    },

    {
      title: "Headless CMS & Commerce",

      description:
        "For projects where content, commerce and the customer experience need more separation, a headless architecture can provide greater flexibility. The decision depends on the complexity of the project and whether that flexibility creates meaningful value.",

      stack: [
        { name: "Strapi", icon: "strapi" },
        { name: "GraphQL", icon: "graphql" },
      ],
    },

    {
      title: "Custom Integrations & APIs",

      description:
        "Websites often need to communicate with systems outside the website itself. We can plan API-based integrations and custom workflows where the project requires data to move between the website and other business systems.",

      stack: [
        { name: "Postman", icon: "postman" },
        { name: "Zapier", icon: "zapier" },
        { name: "Salesforce", icon: "salesforce" },
        {name:'Facebook', icon:'facebook'},
        {name:'WhatsApp', icon:'whatsapp'},
        {name:'n8n', icon:'n8n'},
        {name:'Google Ads', icon:'googleAds'},
        {name:'Frappe', icon:'frappe'},
        {name:'SAP', icon:'sap'},
      ],
    },

    {
      title: "CMS & Content Management",

      description:
        "The people maintaining the website matter too. We consider who will publish pages, update products, manage content and maintain the site after launch when selecting and structuring the content management approach.",

      stack: [
        { name: "Drupal", icon: "drupal" },
      ],
    },
  ],

  supportingParagraph:
    "Technology choices are made during discovery based on the project requirements. We do not recommend a platform simply because it is familiar or currently popular.",
};


/* =========================================================
   STARTING SITUATIONS
   ========================================================= */

export const webStartingSituationsData = {
  eyebrow: "START FROM WHERE YOU ARE",

  h2: "You Do Not Always Need to Start From Zero",

  intro:
    "The right answer depends on what is already working. We can assess an existing website before recommending whether to improve, restructure or rebuild it.",

  cards: [
    {
      title: "Building a New Website?",

      description:
        "We start with the business, audience and goals before moving into the page structure and design. This helps avoid creating a visually polished website that later needs major changes because the underlying strategy was never defined.",
    },

    {
      title: "Your Website Looks Outdated?",

      description:
        "An older visual style does not automatically mean the whole website is broken. We separate visual issues from structural, content, UX and technical problems to identify what actually needs to change.",
    },

    {
      title: "Getting Traffic but Few Enquiries?",

      description:
        "We look beyond the homepage. The issue may be positioning, service pages, content, trust, mobile experience, calls to action or the path between landing and enquiry. The assessment helps identify where the journey is losing people.",
    },

    {
      title: "Already Have a Website You Like?",

      description:
        "A redesign does not have to throw away everything that works. We can retain useful content, functionality and brand elements while improving the areas that are creating friction.",
    },

    {
      title: "Need a Website for Paid Ads or SEO?",

      description:
        "Campaign and search requirements can influence the website structure. We can build landing pages, service architecture and conversion paths that give advertising and organic traffic a more relevant destination.",
    },

    {
      title: "Growing Beyond the Current Platform?",

      description:
        "If the existing CMS, ecommerce platform or architecture is limiting what the business can do, we assess the actual constraint before recommending migration or a new technical foundation.",
    },
  ],

  buttonText: "Discuss My Existing Website",
  buttonHref: "#website-project",
};


/* =========================================================
   PROCESS
   ========================================================= */

export const webProcessData = {
  eyebrow: "HOW THE PROJECT WORKS",

  h2: "A Website Project Should Have a Plan Before It Has a Homepage",

  intro:
    "The most expensive website problems often begin before development starts. Our process moves from business requirements to structure, experience and implementation so important decisions are made in the right order.",

  stages: [
    {
      stageNumber: "Stage 1",

      title: "Understand the Business",

      description:
        "We establish what the business sells, who the website needs to serve, what currently works, where the existing experience falls short and what the website needs to achieve. Existing analytics, search data, content and competitor examples can inform the discussion where available.",
    },

    {
      stageNumber: "Stage 2",

      title: "Plan the Structure",

      description:
        "We define the main pages, navigation, content relationships and important user journeys. The goal is to create a structure that makes sense to visitors and gives the website room to grow.",
    },

    {
      stageNumber: "Stage 3",

      title: "Shape the Experience",

      description:
        "We work through page hierarchy, messaging, content requirements, calls to action and interaction patterns before applying the final visual treatment. This is where the website starts becoming an experience rather than a sitemap.",
    },

    {
      stageNumber: "Stage 4",

      title: "Design the Interface",

      description:
        "We translate the approved direction into the visual system: typography, spacing, colour, imagery, components and responsive layouts. Key templates are established so the website remains consistent as more pages are created.",
    },

    {
      stageNumber: "Stage 5",

      title: "Develop & Integrate",

      description:
        "The approved designs are implemented and connected to the agreed CMS, ecommerce platform, APIs, analytics and other systems. Development follows the structure established during the earlier stages rather than designing the architecture after the interface is finished.",
    },

    {
      stageNumber: "Stage 6",

      title: "Test, Launch & Improve",

      description:
        "We test important pages and journeys across screen sizes and validate forms, links, integrations, tracking and other agreed requirements before launch. After launch, the website can be improved using real user behaviour and business feedback.",
    },
  ],

  supportingParagraph:
    "The exact number of stages, deliverables and review rounds depends on project size and scope. Your proposal defines what is included before development begins.",
};


/* =========================================================
   INVESTMENT
   ========================================================= */

export const webInvestmentData = {
  eyebrow: "PLAN THE PROJECT",

  h2: "Understand What Shapes the Cost of a Website",

  intro:
    "There is no useful universal price for a website because two projects with the same number of pages can require completely different levels of strategy, design, development and integration.",

  cards: [
    {
      title: "The Website's Scope & Features",

      description:
        "The number and complexity of features, service pages, locations, products, resources and custom experiences all affect the amount of work required. A small marketing site and a large content-driven platform are fundamentally different projects.",
    },

    {
      title: "The Design & UX Requirements",

      description:
        "A project may use an established design system or require a completely new visual and interaction direction. Custom layouts, animations, responsive behaviour and complex user journeys increase the design and implementation effort.",
    },

    {
      title: "The Technical Foundation",

      description:
        "Platform selection, CMS requirements, ecommerce functionality, authentication, APIs, databases and other technical requirements influence development time and complexity.",
    },

    {
      title: "Content & Migration",

      description:
        "Existing content may need to be rewritten, reorganised, migrated or expanded. Large websites can require significant content modelling and migration work even when the visible design appears relatively simple.",
    },

    {
      title: "Integrations & Business Systems",

      description:
        "CRM connections, payment systems, forms, analytics, product feeds, third-party APIs and automation can become substantial parts of a project. We identify these requirements before development so they are not treated as surprises later.",
    },

    {
      title: "Ongoing Growth Requirements",

      description:
        "Some businesses need a launch-ready website. Others need a foundation that can support SEO, paid campaigns, ecommerce growth, new locations and additional functionality. The right architecture depends on where the business is going, not only where it is today.",
    },
  ],

  supportingParagraph:
    "Your proposal separates the agreed website scope from optional or future work so you can understand what is being built and what can be added later.",

  buttonText: "Talk to an Expert",
  buttonHref: "#website-project",
};


/* =========================================================
   CRO LANDING PAGE DEVELOPMENT (Image Left / Content Right)
   ========================================================= */

export const croLandingPageData = {
  eyebrow: "CRO LANDING PAGE DEVELOPMENT",

  h2: "Landing Pages Built Around One Clear Conversion Goal",

  image: {
    src: "/images/cro-landing-page.webp", // Replace with your image path
    alt: "CRO Landing Page Development Preview",
    width: 600,
    height: 500,
  },

  description: [
    "A landing page has a different job from a normal business website. Instead of asking visitors to explore everything you offer, it gives them a focused path toward one action — submitting an enquiry, booking an appointment, requesting a quote or making a purchase.",
    "We design and develop landing pages around the campaign, audience and offer behind the traffic. That means aligning the message, page structure, proof, CTA and conversion flow rather than simply creating another attractive page.",
  ],

  focusTitle: "What we focus on",

  focusPoints: [
    "Campaign-specific messaging",
    "Clear offer and CTA structure",
    "Mobile-first conversion experience",
    "Trust signals and relevant proof",
    "Fast, focused page experiences",
    "Analytics and conversion tracking",
  ],

  cta: {
    label: "Explore CRO Services",
    href: "/services/conversion-rate-optimization",
  },
};

/* =========================================================
   BUSINESS MODELS / INDUSTRIES
   ========================================================= */


export const webBusinessMarketsData = {
  eyebrow: "BUILT AROUND DIFFERENT BUSINESS MODELS",

  h2: "Different Businesses Need Different Website Experiences",

  intro:
    "The structure of a good website changes depending on what the visitor is trying to decide. We adapt the content hierarchy, conversion paths and functionality to the business model behind the website.",

  cards: [
    {
      title: "Dental & Healthcare Practices",

      description:
        "Patients need confidence before they enquire. Treatment information, practitioner credibility, location details, FAQs, proof and clear appointment paths work together to help someone move from researching a treatment to contacting the practice.",

      visitorQuestion: "Can I trust this practice with my treatment?",

      focus: [
        "Treatment information and FAQs",
        "Practitioner credibility and proof",
        "Clear appointment paths",
      ],

      image: dentalImg,
      imageAlt: "Dental practice website shown on a laptop",
    },

    {
      title: "Local & Multi-Location Businesses",

      description:
        "Customers often search for a specific service in a specific area. The website needs a useful relationship between services and locations while keeping navigation simple and making it easy to contact the right team.",

      visitorQuestion: "Do you cover my area, and who do I contact?",

      focus: [
        "Service and location relationships",
        "Simple, predictable navigation",
        "Contact routing to the right team",
      ],

      image: localImg,
      imageAlt: "Local business website with service area pages",
    },

    {
      title: "Ecommerce & Consumer Brands",

      description:
        "The website needs to help people discover products, compare options, understand the value of the purchase and complete checkout with confidence. Product data, collections, search, filters, reviews and merchandising all influence the experience.",

      visitorQuestion: "Is this the right product, and can I buy it with confidence?",

      focus: [
        "Collections, search and filters",
        "Product data, reviews and merchandising",
        "A confident checkout",
      ],

      image: ecommerceImg,
      imageAlt: "Ecommerce storefront with product collections",
    },

    {
      title: "B2B & Professional Services",

      description:
        "B2B buyers may evaluate capabilities, expertise, industries, case studies and delivery processes before making contact. The website needs enough depth to support that research without turning every page into a corporate brochure.",

      visitorQuestion: "Do they have the expertise for our problem?",

      focus: [
        "Capabilities and industries served",
        "Case studies and evidence",
        "A clear delivery process",
      ],

      image: b2bImg,
      imageAlt: "Professional services team reviewing a case study",
    },

    {
      title: "Growing Technology Companies",

      description:
        "Technology businesses often need to explain complex products quickly. We structure the experience around the problems solved, the people served, the product or platform and the evidence that helps buyers understand the value.",

      visitorQuestion: "What does it do, and is it right for us?",

      focus: [
        "Problems solved and people served",
        "The product or platform, explained quickly",
        "Evidence that shows the value",
      ],

      image: technologyImg,
      imageAlt: "Technology product dashboard and website",
    },

    {
      title: "Franchises & Multi-Unit Businesses",

      description:
        "Franchise and multi-unit websites need to balance a consistent brand with local relevance. Location structures, service information, lead routing and scalable page templates become important as the network grows.",

      visitorQuestion: "Where is my nearest location, and is it the brand I know?",

      focus: [
        "Consistent brand with local relevance",
        "Location structures and service information",
        "Lead routing and scalable page templates",
      ],

      image: franchiseImg,
      imageAlt: "Franchise location finder on a website",
    },
  ],
};


/* =========================================================
   SEO + GROWTH CONNECTION
   ========================================================= */


export const webGrowthConnectionData = {
  eyebrow: "BUILT FOR WHAT HAPPENS AFTER LAUNCH",

  h2: "Your Website Should Make SEO, Advertising & Growth Easier Not Difficult",

  intro:
    "A website should not become a finished project that sits apart from the rest of your marketing. Its structure affects where traffic lands, what visitors understand and how easily new campaigns, content and conversion journeys can be added.",

  panels: [
    {
      label: "SEO",

      title: "SEO Needs a Structure It Can Grow Into",

      description:
        "Search visibility depends on more than adding keywords to existing pages. A useful service, location and content architecture gives search engines and users clearer relationships between the topics the business actually serves.",
    },

    {
      label: "Paid Traffic",

      title: "Paid Traffic Needs Relevant Destinations",

      description:
        "Sending every advertising click to the homepage creates unnecessary friction. A well-structured website can support focused landing pages that continue the message from the ad and give the visitor a clear next step.",
    },

    {
      label: "Content",

      title: "Content Should Have Somewhere to Go",

      description:
        "As a business publishes guides, case studies, FAQs, service pages and other resources, the website needs a structure that keeps those assets useful instead of turning the navigation into an ever-growing list.",
    },

    {
      label: "Analytics",

      title: "Analytics Should Help You Learn",

      description:
        "Tracking should help answer useful business questions: which pages attract attention, where visitors leave, which actions people take and which acquisition sources produce meaningful engagement. Measurement requirements are considered as part of the website rather than added as an afterthought.",
    },
  ],

  supportingLink: {
    text: "Explore Our Marketing Services",
    destination: "/services/conversion-rate-optimization",
  },
};


/* =========================================================
   FAQ
   ========================================================= */

export const webDesignFaqData = {
  h2: "Questions About Web Design & Development",

  faqs: [
    {
      question: "What does a web design and development agency actually do?",

      answer:
        "A web design and development team can take a website from strategy and information architecture through UX, visual design, development, integrations and launch. At Bixeltek, we also consider how the website connects with SEO, advertising, analytics and the wider customer journey.",
    },

    {
      question: "Do you only design websites, or do you develop them too?",

      answer:
        "We handle both design and development. That allows the visual experience and the technical implementation to be planned together rather than treating development as a separate handoff after the design is finished.",
    },

    {
      question: "Do we need a completely new website?",

      answer:
        "Not necessarily. We first look at the existing website and identify what is working, what is creating friction and what is technically limiting the business. In some cases, focused improvements are enough. A rebuild makes more sense when the underlying structure or technology prevents the required changes.",
    },

    {
      question: "Can you redesign our existing website without losing everything?",

      answer:
        "Yes. Existing content, brand assets, functionality and useful page structures can be retained where they still serve the business. We can identify what should stay, what should be improved and what needs to be replaced before the rebuild begins.",
    },

    {
      question: "Will the new website be SEO-friendly?",

      answer:
        "We build with SEO requirements in mind, including site structure, URLs, metadata, internal linking, responsive behaviour and content relationships. SEO growth itself is a separate discipline, so ongoing optimisation and content work can be scoped separately where required.",
    },

    {
      question: "Which platform should we use: WordPress, Shopify or a custom website?",

      answer:
        "It depends on what the website needs to do. WordPress can be useful for content-driven websites, Shopify can be a strong fit for many ecommerce businesses, and custom development can make sense when the experience, integrations or technical requirements demand greater control. We choose the platform around the project rather than forcing every business into the same stack.",
    },

    {
      question: "Can you build an ecommerce website?",

      answer:
        "Yes. Ecommerce projects can be built around platforms such as Shopify or WooCommerce, or around a more customised architecture where the requirements justify it. The scope can include product structures, collections, search, filtering, checkout, payments, integrations and the customer journey.",
    },

    {
      question: "Can you build a custom-coded website?",

      answer:
        "Yes. Where a project needs greater control over the frontend experience, performance, content architecture or integrations, we can build a custom website using a modern development stack. The technical approach is selected based on the actual requirements rather than simply choosing custom development by default.",
    },

    {
      question: "Can you create landing pages for Google Ads and Meta Ads?",

      answer:
        "Yes. Campaign landing pages can be designed around a specific audience, offer and conversion objective. They can be built as part of a larger website or as focused campaign experiences depending on the project.",
    },

    {
      question: "Will I be able to edit the website after it launches?",

      answer:
        "Where a CMS is included, the agreed content areas can be managed through that system. The editing experience depends on the platform and the type of content being managed. We define the CMS and handover requirements during the project.",
    },

    {
      question: "How long does a website project take?",

      answer:
        "There is no reliable single timeline for every website. A focused service website and a large ecommerce or custom platform involve very different amounts of work. Timeline depends on scope, content readiness, feedback, integrations, approvals and technical requirements, and the project plan is confirmed before development begins.",
    },

    {
      question: "How much does a website cost?",

      answer:
        "The cost depends on the scope, design requirements, number of templates, content, platform, integrations, ecommerce functionality and technical complexity. We define those requirements first so the proposal reflects the actual project instead of using an arbitrary page-count price.",
    },

    {
      question: "Can you migrate our existing website to a new platform?",

      answer:
        "Yes, where migration is appropriate. The work can involve content, URLs, media, products, redirects, structured data, integrations and other existing assets. Migration requirements are assessed before the new website is built so important information is not lost during the transition.",
    },

    {
      question: "Can you connect the website to our CRM or other systems?",

      answer:
        "Yes, depending on the systems involved and the integration requirements. Forms, lead routing, analytics, ecommerce systems, APIs, CRM connections and automation can be included where the project requires them.",
    },

    {
      question: "Do you provide website maintenance after launch?",

      answer:
        "Post-launch support can be scoped around the project. Depending on the arrangement, this may include technical updates, fixes, content changes, monitoring, optimisation or further development. Ongoing work is defined separately from the initial build.",
    },

    {
      question: "Can you guarantee more leads from the new website?",

      answer:
        "No responsible website provider can guarantee a fixed number of leads because results also depend on traffic, demand, offer, market competition, sales response and other factors outside the website itself. We can design around clearer positioning, better user journeys, stronger conversion paths and measurable business goals.",
    },

    {
      question: "Do we need to buy SEO, Google Ads or other services from you?",

      answer:
        "No. Web design and development can be scoped as a standalone project. If the website would benefit from SEO, advertising, analytics or other supporting work, we explain why and give you the option to include it rather than making unrelated services a requirement.",
    },
  ],
};


export const relatedWebServicesData = {
  eyebrow: "EXPLORE WEBSITE PLATFORMS & SERVICES",

  h2: "Choose the Website Approach That Fits Your Business",

  intro:
    "Not every business needs the same website setup. Whether you need a flexible CMS, a commerce platform or a more customized content system, explore the approach that fits how your business needs to operate.",

  cards: [
        {
      title: "Custom-Coded Websites",
      description:
        "Build a website around your exact performance, functionality, content and integration requirements when an off-the-shelf platform is not the right fit.",
      linkText: "Explore Custom Web Development",
      destination: "/custom-coded-websites",
    },


    {
      title: "Ecommerce Development",
      description:
        "Build an ecommerce experience around product discovery, collections, checkout, payments, integrations and the way your customers actually shop.",
      linkText: "Explore Ecommerce Development",
      destination: "/services/ecommerce-development",
    },
       {
      title: "Payment Integration",
      description:
        "Connect your website or ecommerce experience with the payment systems and business workflows required to accept and process transactions.",
      linkText: "Explore Payment Integration",
      destination: "/payment-gateway-integrations",
    },
    {
      title: "Shopify Development",
      description:
        "Build and customize a Shopify store around your products, customer journey, operations and growth goals without forcing your business into a generic storefront.",
      linkText: "Explore Shopify Development",
      destination: "/services/ecommerce-development/shopify",
    },

    {
      title: "WordPress Development",
      description:
        "Build a flexible WordPress website that gives your team control over content while providing the design, functionality and integrations your business requires.",
      linkText: "Explore WordPress Development",
      destination: "/services/web-design/wordpress",
    },

    {
      title: "Strapi Development",
      description:
        "Use Strapi as a flexible headless CMS for structured content, custom frontends and digital experiences that need more control than a traditional CMS can provide.",
      linkText: "Explore Strapi Development",
      destination: "/services/web-design/strapi",
    },
  ],
};


/* =========================================================
   FINAL OFFER / CTA
   ========================================================= */

export const webDesignFinalOfferData = {
  eyebrow: "YOUR NEXT STEP",

  h2: "Find Out What Your Website Actually Needs",

  intro:
    "If you are planning a new website, considering a redesign or unsure whether your current site is holding the business back, start with the requirements rather than jumping straight into design.",

  points: [
    {
      title: "What We Look At",

      description:
        "Your current website or proposed requirements, business goals, audience, services, content structure, conversion journey and technical needs. Where an existing site is involved, we identify visible areas that may need attention before recommending a direction.",
    },

    {
      title: "What You Get",

      description:
        "A clearer understanding of what the website needs, the type of build that may be appropriate and the major areas that should be prioritised. Detailed design, technical specifications and implementation plans are scoped according to the project.",
    },

    {
      title: "What We Need From You",

      description:
        "Your website, business objective and a little context about what you are trying to improve. You do not need to have the sitemap, design or technology decisions figured out before starting the conversation.",
    },
  ],

  form: {
    title: "Discuss Your Website Project",

    submitButton: "Discuss My Website",

    microcopy:
      "No obligation. Tell us what you are building, rebuilding or trying to improve and we will take it from there.",

    privacyText:
      "By submitting this form, you agree that Bixeltek may contact you about your enquiry. Read our Privacy Policy to understand how we handle your information.",

    privacyDestination: "/privacy-policy",

    successHeading: "Your Project Enquiry Has Been Received",

    successMessage:
      "Thank you for contacting Bixeltek. Our team will review your project requirements and contact you about the next step.",

    alternativeContact:
      "Prefer to speak first? Call +91 9100032301 or email hello@bixeltek.com.",

    phoneLink: "tel:+919100032301",

    emailLink: "mailto:hello@bixeltek.com",
  },
};

/* =========================================================
   OVERVIEW (WHAT IS STRATEGIC WEB DESIGN & DEVELOPMENT)
   ========================================================= */

export const webDesignOverviewData = {
  eyebrow: "WHAT WEB DESIGN & DEVELOPMENT?",
  h2: "Engineering High-Performance Digital Experiences That Turn Visitors Into Pipeline",
  intro:
    "A commercial website is not an online business card or a cosmetic brochure. It is an active conversion engine designed to articulate your positioning, rank for high-intent search queries, and guide prospective clients seamlessly toward booking or purchasing.",
  body: [
    "Most business websites lose customers not because of bad visual style, but because of structural friction: confusing page navigation, generic copy that fails to address customer pain points, slow page load speeds, and poorly placed conversion mechanisms.",
    "At Bixeltek, our web design and development discipline bridges creative interface design with rigorous software engineering. We combine lightning-fast frontend frameworks like Next.js, headless CMS architectures, and conversion-centered design principles to build websites that command market authority and deliver measurable commercial ROI."
  ],
  closingCopy:
    "Design for clarity, engineer for lightning speed, and turn organic and paid traffic into qualified sales inquiries.",
};

/* =========================================================
   WHY CHOOSE BIXELTEK FOR WEB DESIGN
   ========================================================= */

export const webDesignWhyChooseData = {
  eyebrow: "WHY CHOOSE BIXELTEK",
  h2: "Technical Excellence, Commercial Clarity & Zero Template Bloat",
  intro:
    "We don't use bloated WordPress page builders or generic SaaS templates. Every line of code, layout decision, and user journey is engineered around your commercial acquisition goals.",
  points: [
    { title: "Custom engineering with modern stacks (Next.js, React, Tailwind CSS)" },
    { title: "Conversion-first UX architecture designed to maximize form fills and sales" },
    { title: "Sub-second load times optimized for Google Core Web Vitals" },
    { title: "Built-in technical SEO foundations, semantic markup & structured schemas" },
    { title: "Headless CMS and flexible content management tailored to your team" },
    { title: "100% full code and asset ownership with zero proprietary platform lock-in" },
  ],
  closingCopy:
    "Collaborate directly with senior digital engineers and UX strategists focused on building your company's strongest growth asset."
}
