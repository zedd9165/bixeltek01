import { StaticImageData } from 'next/image';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import pet from "@/assets/groupmates-lesson.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/close-up-dentist-instruments (1).jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
  gradient: string;
  color: string;
}

export interface IndustryCard {
  id: string;
  img: StaticImageData;
  label: string;
  text: string;
  description: string;
}

export interface WebServiceSolution {
  title: string;
  description: string;
  href?: string;
  ctaText?: string;
}

export interface ArchitectureChoice {
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface EngineeringFeature {
  title: string;
  description: string;
}

export interface TechnicalCapability {
  title: string;
  description: string;
  hoverBg?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// 1. Page Metadata
export const webDesignMetadata = {
  title: "Web Design & Development Services | Custom Websites & CMS Solutions – Bixeltek",
  description:
    "Bixeltek engineers strategic business websites, custom-coded web applications, and scalable CMS platforms. Built for performance, security, and measurable conversion growth.",
  keywords:
    "Website design and development services, website development company, business website development, professional website design, custom business website development, website development agency, custom coded websites, WordPress development, Next.js web development",
  canonical: "https://bixeltek.com/services/web-design",
};

// 2. Hero Content
export const heroContent = {
  headingPart1: "Strategic Website Design & Custom Web Development ",
  headingHighlight: "Engineered to Drive Growth",
  description:
    "From business websites and custom-coded platforms to flexible CMS solutions, Bixeltek builds digital experiences around how your business operates. We combine thoughtful design, reliable engineering, and search-ready architecture to create websites that are easier to manage, built to perform, and ready to scale.",
  ctaText: "Request Your Free Web Design Consultation",
};

// 3. Why Businesses Need a Better Website (WebSection2)
export const whyWebDevContent = {
  heading: "Why Modern Businesses",
  headingHighlight: "Outgrow Their Websites",
  intro:
    "A website is rarely replaced because of visual design alone. Most businesses seek redesign or replatforming when their existing site begins actively hindering day-to-day operations, sales pipelines, and marketing agility.",
  bulletPoints: [
    {
      title: "Misaligned Market Positioning",
      text: "Your business has matured, but your website still reflects legacy messaging, creating friction with high-value prospects.",
    },
    {
      title: "Mobile Usability Breakdowns",
      text: "Critical forms, navigation menus, and page layouts perform inconsistently on mobile viewports, losing qualified inbound traffic.",
    },
    {
      title: "Inflexible Content Management",
      text: "Marketing teams depend on external developers for routine page updates, creating operational bottlenecks and delaying campaigns.",
    },
    {
      title: "Code Bloat & Slower Load Times",
      text: "Accumulated plugins, unoptimized assets, and legacy code degrade page response and increase visitor bounce rates.",
    },
    {
      title: "Disconnected Business Tools",
      text: "Leads submitted on the frontend fail to sync cleanly with CRMs, analytics tracking, or back-office operational systems.",
    },
  ],
  closing:
    "In today's digital economy, Bixeltek designs and builds websites as operational assets—engineered to solve practical bottlenecks and support steady commercial growth.",
  ctaText: "Get a Free Web Design Consultation",
  ctaHref: "/contact-us",
};

// 4. Technology Selection & Architecture (WebSection3)
export const architectureChoices: ArchitectureChoice[] = [
  {
    title: "Custom-Coded Platforms",
    description:
      "Bespoke web applications built with Next.js, React, and modular APIs for businesses requiring custom functionality, fast rendering, and complete architectural control.",
    href: "/custom-coded-websites",
    ctaText: "Explore Custom Websites",
  },
  {
    title: "Tailored Custom CMS",
    description:
      "Purpose-built content structures and streamlined administrative workflows designed specifically around your operational data requirements without plugin bloat.",
    href: "/custom-cms-websites",
    ctaText: "Learn About Custom CMS",
  },
];

export const architectureHeader = {
  headingPart1: "Choosing the Right ",
  headingHighlight: "Website Architecture",
  description:
    "No single development framework fits every commercial requirement. We evaluate your content volume, internal team workflows, and technical demands to recommend the appropriate engineering approach.",
  closing:
    "Whether your priority is straightforward editorial autonomy or complete engineering freedom, Bixeltek develops platforms tailored to your operational realities.",
};

// 5. Website Capabilities & Engineering Features (WebSection5)
export const engineeringFeatures: EngineeringFeature[] = [
  {
    title: "Responsive Frontend Architecture",
    description:
      "Fluid layouts calibrated across smartphones, tablets, and desktop displays, ensuring clear typographic hierarchy and touch-friendly navigation.",
  },
  {
    title: "Search-Engineered Foundations",
    description:
      "Semantic HTML structure, logical heading hierarchies, valid XML sitemaps, and structured schema markup configured for search engine crawlability.",
  },
  {
    title: "Optimized Performance & Asset Delivery",
    description:
      "Clean code execution, modern image formatting (WebP/AVIF), script deferral, and efficient asset delivery designed for fast page rendering.",
  },
  {
    title: "Security & Data Protection",
    description:
      "Standard HTTPS implementation, secure form processing, regular vulnerability patching, and sanitized user inputs protecting your digital assets.",
  },
  {
    title: "CRM & Third-Party Integrations",
    description:
      "Native webhook and API connections linking your website forms directly with HubSpot, Zoho, Salesforce, or proprietary backend workflows.",
  },
  {
    title: "Analytics & Event Tracking",
    description:
      "Comprehensive Google Analytics 4 (GA4) and Tag Manager implementations configured to track form completions, phone clicks, and key conversion actions.",
  },
];

export const featuresHeader = {
  headingHighlight: "Built-In Engineering Standards ",
  headingPart2: "for Every Build",
  description:
    "Every website delivered by Bixeltek is constructed according to practical performance, accessibility, and architectural standards.",
  closing:
    "With Bixeltek's engineering practices, you receive a reliable digital platform built for stability, security, and long-term business value.",
};

// 6. Our Website Development Solutions (WebSection4)
export const webServices: WebServiceSolution[] = [
  {
    title: "Custom-Coded Website Development",
    description:
      "Bespoke websites and web applications built from the ground up using React, Next.js, and Node.js. Designed for enterprises needing tailored application logic, specialized user workflows, and complete architectural control.",
    href: "/custom-coded-websites",
    ctaText: "Explore Custom Websites →",
  },
  {
    title: "CMS Website Development (WordPress & Custom)",
    description:
      "Flexible content management platforms that allow marketing teams to create, edit, and publish content without ongoing developer dependencies. Built with clean code standards, custom themes, and modular editing blocks.",
    href: "/custom-cms-websites",
    ctaText: "Explore CMS Solutions →",
  },
  {
    title: "eCommerce Website Development",
    description:
      "Digital storefronts built for intuitive product browsing, secure multi-step checkouts, and seamless payment processing. We build scalable stores on Shopify, WooCommerce, or custom headless commerce architectures.",
    href: "/ecommerce-websites",
    ctaText: "Explore eCommerce Stores →",
  },
  {
    title: "Payment Gateway Integrations",
    description:
      "Secure, compliant payment workflows integrated with trusted providers including Stripe, Razorpay, PayU, and PayPal. Engineered with automated webhooks, currency support, and clear checkout confirmation journeys.",
    href: "/payment-gateway-integrations",
    ctaText: "Explore Payment Solutions →",
  },
  {
    title: "Campaign Landing Page Development",
    description:
      "High-converting landing pages tailored specifically for paid media, Google Ads, and marketing campaigns. Fast-loading, focused layouts designed to guide prospective customers toward inquiry and conversion.",
    href: "/contact-us",
    ctaText: "Discuss Landing Pages →",
  },
  {
    title: "Website Redesign & Safe Migration",
    description:
      "Modernize outdated websites with careful preservation of existing search engine visibility. We handle comprehensive 301 URL redirect mapping, content migration, asset transfer, and structural enhancements.",
    href: "/contact-us",
    ctaText: "Plan Your Redesign →",
  },
];

export const solutionsHeader = {
  headingPart1: "Our ",
  headingHighlight: "Website Development",
  headingPart2: " Solutions",
  description:
    "As an established web development agency, Bixeltek delivers websites tailored to your commercial goals. From fully custom-coded platforms to flexible WordPress builds, our solutions combine thoughtful design with dependable engineering.",
};

// 7. Development Process (LocationProcessSection)
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Requirement Discovery & Technical Audit",
    text: "We analyze your business objectives, target audience expectations, existing technical systems, and competitive landscape to establish concrete technical and functional requirements.",
    gradient: "from-blue-500 via-blue-400 to-[black]",
    color: "text-blue-500",
  },
  {
    number: "02",
    title: "Website Strategy & Architecture",
    text: "We define the information architecture, URL taxonomies, navigation hierarchies, and technical stack to ensure a logical structure for both users and search engines.",
    gradient: "from-green-500 via-teal-400 to-[#13131333]",
    color: "text-teal-500",
  },
  {
    number: "03",
    title: "UX/UI Design & Prototyping",
    text: "We craft thoughtful interface designs aligned with your brand identity, focusing on visual hierarchy, responsive viewport adaptation, and clear call-to-action pathways.",
    gradient: "from-yellow-400 via-yellow-300 to-[#13131333]",
    color: "text-yellow-500",
  },
  {
    number: "04",
    title: "Front-End & Back-End Development",
    text: "We build standards-compliant code using Next.js, React, or WordPress, implementing modular component architectures, clean markup, and responsive stylesheets.",
    gradient: "from-pink-500 via-purple-400 to-[#13131333]",
    color: "text-purple-500",
  },
  {
    number: "05",
    title: "Integrations & Operational Pipelines",
    text: "We integrate payment gateways, lead capture forms, CRM systems, webhooks, and analytics tracking to ensure your website connects smoothly with everyday operations.",
    gradient: "from-indigo-500 via-indigo-400 to-[#13131333]",
    color: "text-indigo-500",
  },
  {
    number: "06",
    title: "Quality Assurance & Deployment",
    text: "Exhaustive cross-browser testing, mobile validation, accessibility checks, and redirect verification before production deployment ensure a reliable public launch.",
    gradient: "from-red-500 via-[#13131333] to-[#13131333]",
    color: "text-red-500",
  },
];

export const processHeader = {
  heading: "Our Engineering & Delivery Process",
  description:
    "A structured, milestone-driven development process ensuring predictable delivery, technical accuracy, and strategic alignment from kickoff to launch.",
  footerText:
    "This structured approach ensures your website is launched on solid technical foundations and configured to support long-term growth.",
  ctaText: "Talk To Our Web Design Specialist",
  ctaHref: "tel:+919100032301",
};

// 8. Related Services Bridge (WebSection7)
export const relatedServicesContent = {
  headingPart1: "A Website Alone ",
  headingHighlight: "Needs Connected Marketing & Systems",
  description:
    "A modern website is your digital foundation, but qualified traffic and automated workflows are what drive commercial outcomes. Bixeltek integrates web design with complementary digital services to build connected growth systems.",
  closing:
    "Together, web development, search visibility, paid media, and operational integrations transform your digital presence into a measurable commercial asset.",
  ctaText: "Talk to Our Specialists →",
  ctaHref: "/contact-us",
};

// 9. Advanced Technical Capabilities (BenefitsSection / WebSection6)
export const technicalCapabilities: TechnicalCapability[] = [
  {
    title: "Custom API & Webhook Integrations",
    description:
      "Connect your website with third-party web services, payment providers, and internal databases for automated data transfer.",
    hoverBg: "hover:bg-blue-600",
  },
  {
    title: "CRM & Lead Distribution Pipelines",
    description:
      "Route customer inquiries and quote requests directly into HubSpot, Salesforce, Zoho, or email pipelines in real time.",
    hoverBg: "hover:bg-green-600",
  },
  {
    title: "Customer Portals & Dashboards",
    description:
      "Secure client login areas, authenticated account portals, and self-service dashboards built with role-based access controls.",
    hoverBg: "hover:bg-yellow-500",
  },
  {
    title: "Online Booking & Scheduling Systems",
    description:
      "Interactive appointment scheduling, calendar integrations, and automated customer notifications to streamline client onboarding.",
    hoverBg: "hover:bg-pink-600",
  },
  {
    title: "Database-Driven Functionality",
    description:
      "Dynamic filtering, custom calculators, searchable product catalogs, and tailored data querying built for complex business models.",
    hoverBg: "hover:bg-indigo-600",
  },
  {
    title: "Website Migration & Redirection",
    description:
      "Safe platform migrations with comprehensive 301 URL redirect mapping, preserving historical search equity and existing backlinks.",
    hoverBg: "hover:bg-red-600",
  },
];

export const capabilitiesHeader = {
  headingPart1: "Advanced ",
  headingHighlight: "Technical Capabilities",
  headingPart2: " for Business Operations",
  description:
    "A website should not exist as an isolated brochure. We develop integrated digital systems that connect your front-facing interface directly with your day-to-day business operations.",
  ctaText: "Discuss Technical Requirements",
  ctaHref: "/contact-us",
};

// 10. Search-Ready Architecture & Showcase (WebDevShowcase)
export const showcaseContent = {
  headingHighlight: "Search-Ready Architecture ",
  headingPart2: "& Structured Content",
  intro1:
    "Modern web design extends beyond visual styling. Search engines, crawling systems, and modern discovery platforms evaluate websites based on code cleanliness, speed, and semantic clarity.",
  intro2:
    "We build websites with clean HTML5 semantics, descriptive heading hierarchies, open-graph metadata, and schema markup. This structural clarity ensures your pages are easily indexed, accurately interpreted, and correctly surfaced across search platforms.",
  closingHeading: "Are You Looking For A Reliable, High-Performing Website?",
  ctaText: "Talk To Our Web Design Team",
  ctaHref: "tel:+919100032301",
};

// 11. Technology Ecosystem (WebTech)
export const webTechContent = {
  heading: "Technology Selected Around Business Requirements",
  subheading:
    "We do not force a one-size-fits-all framework. Our engineering team selects platforms, languages, and integrations based on your performance, team capabilities, and scaling requirements.",
};

// 12. Industry Web Development Solutions (DynamicIndustrySection)
export const webDevIndustries: IndustryCard[] = [
  {
    id: "health",
    img: healthcare,
    label: "Web Development for Healthcare Practices",
    text: "Healthcare Practices",
    description:
      "Patient-focused practice websites featuring clear treatment breakdowns, doctor profiles, and secure appointment inquiry workflows.",
  },
  {
    id: "auto",
    img: blackcar,
    label: "Web Development for Automotive Businesses",
    text: "Automotive & Detailers",
    description:
      "High-performance service portals with interactive inventory catalogs, service booking forms, and location-based contact pathways.",
  },
  {
    id: "cleaning",
    img: cleaningcomp,
    label: "Web Development for Cleaning Services",
    text: "Cleaning & Maintenance",
    description:
      "Instant service estimate forms, recurring booking integrations, and localized landing pages built for rapid lead capture.",
  },
  {
    id: "roofing",
    img: roofing,
    label: "Web Development for Roofing & Contractors",
    text: "Roofing & Construction",
    description:
      "Project gallery showcases, material estimators, credential verification, and high-ticket quote request funnels.",
  },
  {
    id: "lawncare",
    img: lawncare,
    label: "Web Development for Lawn Care & Landscaping",
    text: "Lawn Care & Landscaping",
    description:
      "Visual landscaping portfolios, seasonal service packages, and straightforward service inquiry workflows.",
  },
  {
    id: "dental",
    img: dental,
    label: "Web Development for Dental Clinics",
    text: "Dental Clinics",
    description:
      "Patient education resources, emergency care contact triggers, online intake forms, and practice credibility showcases.",
  },
  {
    id: "pet",
    img: pet,
    label: "Web Development for Education & Training",
    text: "Educational Institutes",
    description:
      "Course catalog architectures, curriculum downloads, enrollment inquiries, and interactive event schedules.",
  },
  {
    id: "oil",
    img: oil,
    label: "Web Development for Industrial & B2B Services",
    text: "Industrial & B2B Services",
    description:
      "Technical specification libraries, downloadable engineering documentation, multi-tier inquiry forms, and RFQ workflows.",
  },
];

export const industriesHeader = {
  headingPart1: "Website Development Solutions ",
  headingHighlight: "Tailored for Every Industry",
  description:
    "Every industry serves distinct customer journeys and operational demands. Our team builds websites and web applications that align with each sector's specific technical, regulatory, and conversion requirements.",
};

// 13. Comprehensive FAQs (WebDevFaq)
export const webDevFaqs: FaqItem[] = [
  {
    question: "How long does a typical business website development project take?",
    answer:
      "Most business websites take between 4 to 8 weeks depending on scope, architecture (WordPress CMS vs. Custom Next.js), number of unique templates, and content readiness. Complex custom-coded web applications with custom API integrations or client portals typically range from 8 to 14 weeks.",
  },
  {
    question: "How much does a professional business website cost?",
    answer:
      "Website costs vary depending on technical architecture, custom functionality, third-party integrations, and design complexity. A structured WordPress corporate site has different technical requirements than a custom Next.js web application. We provide detailed, milestone-based proposals following an initial technical discovery session.",
  },
  {
    question: "Do you develop WordPress websites or only custom-coded websites?",
    answer:
      "We build both. If your team requires an intuitive, self-managed editorial environment with proven plugin compatibility, we build custom WordPress sites. If your business requires bespoke application logic, advanced API connections, and complete control over frontend code, we develop custom Next.js and React solutions.",
  },
  {
    question: "What is the difference between a custom CMS and standard WordPress?",
    answer:
      "Standard WordPress is a general-purpose CMS reliant on themes and pre-built plugins. A custom CMS is tailored specifically around your business's content models and operational workflows, eliminating unnecessary code bloat while providing a streamlined administrative interface.",
  },
  {
    question: "Can you develop headless CMS websites?",
    answer:
      "Yes. We build decoupled architectures that connect modern headless CMS backends (such as Strapi, WordPress REST/GraphQL, or Sanity) with high-performance Next.js frontends, providing editorial flexibility alongside modern frontend rendering.",
  },
  {
    question: "Can you integrate our existing CRM or ERP software?",
    answer:
      "Yes. We regularly connect website forms, checkout funnels, and customer touchpoints with CRM and ERP platforms including HubSpot, Salesforce, Zoho, and custom webhook endpoints to ensure smooth lead routing and data consistency.",
  },
  {
    question: "Will our internal team be able to manage website content after launch?",
    answer:
      "Yes. Every CMS or hybrid platform we build is delivered with an intuitive administrative dashboard. We organize content editing blocks and taxonomies so non-technical team members can publish articles, update text, and manage media without needing developer support.",
  },
  {
    question: "Can you redesign an existing website without losing search engine rankings?",
    answer:
      "Yes. Preserving historical search visibility is an essential part of our redesign process. We audit your existing URL structure, implement 1-to-1 301 redirect maps for every ranking page, maintain key on-page metadata, and verify indexing signals during the migration.",
  },
  {
    question: "Do your websites include search engine optimization (SEO) foundations?",
    answer:
      "Yes. All websites developed by Bixeltek are built with search-friendly technical foundations: semantic HTML5 tags, logical heading structures, mobile-responsive layouts, optimized page assets, clean XML sitemaps, and structured schema markup.",
  },
  {
    question: "Do you provide ongoing website maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance and support plans that include software updates, security patches, regular backups, uptime monitoring, and ongoing technical improvements to keep your platform secure and up to date.",
  },
  {
    question: "Can you build eCommerce websites with custom payment gateways?",
    answer:
      "Yes. We build eCommerce platforms using Shopify, WooCommerce, or custom Next.js commerce stacks, integrating secure merchant gateways such as Stripe, Razorpay, PayU, and PayPal with automated webhook verification.",
  },
  {
    question: "Can you build custom forms and customer portals?",
    answer:
      "Yes. We engineer multi-step lead capture forms, dynamic calculators, customer login areas, and authenticated account portals with secure role-based access control.",
  },
];


export interface WebsiteProjectFactor {
  number: string;
  title: string;
  description: string;
}

export const projectScopeFactors: WebsiteProjectFactor[] = [
  {
    number: "01",
    title: "Business Goals & Functionality",
    description:
      "A straightforward business website has different requirements from a platform with customer accounts, booking systems, advanced search, custom calculators, or business-specific workflows. The functionality your website needs directly influences its development scope.",
  },
  {
    number: "02",
    title: "Design Complexity & Page Structure",
    description:
      "The number of unique page layouts, custom interface components, interactive elements, and responsive design requirements all contribute to project complexity. Bespoke experiences generally require more design and development work than standard page templates.",
  },
  {
    number: "03",
    title: "Technology & CMS Architecture",
    description:
      "Choosing between WordPress, Shopify, a custom CMS, or a custom-coded Next.js application affects how your website is developed and maintained. The right architecture depends on your content management needs, functionality, internal team, and future requirements.",
  },
  {
    number: "04",
    title: "Third-Party Integrations",
    description:
      "Connecting your website with CRMs, ERP platforms, payment gateways, inventory systems, booking tools, and external APIs adds integration and testing requirements. The complexity of these connections influences the overall development effort.",
  },
  {
    number: "05",
    title: "Content, Data & Website Migration",
    description:
      "Content creation, product uploads, data migration, URL mapping, media transfer, and preserving existing SEO structures can all affect the project scope. Larger websites and complex migrations require additional planning and validation.",
  },
  {
    number: "06",
    title: "Testing, Launch & Ongoing Support",
    description:
      "Cross-device testing, browser compatibility, performance checks, security validation, deployment, and post-launch maintenance are important parts of a complete website project. These requirements should be considered when defining the project from the beginning.",
  },
];

export const projectScopeHeader = {
  headingPart1: "What Shapes Your ",
  headingHighlight: "Website Development Cost?",
  description:
    "Website development costs depend on more than the number of pages. Your required functionality, design complexity, technology, integrations, and long-term business needs all influence the scope of a project.",
  closing:
    "At Bixeltek, we evaluate these requirements before recommending an architecture and preparing a project proposal, so you understand what is being built and why.",
  ctaText: "Discuss Your Website Requirements",
  ctaHref: "/contact-us",
};

export interface TargetAudienceItem {
  number: string;
  title: string;
  description: string;
}

export const targetAudienceItems: TargetAudienceItem[] = [
  {
    number: "01",
    title: "Businesses Building Their First Professional Website",
    description:
      "For businesses moving beyond social media or offline operations and looking to establish a credible online presence with a website designed to attract and engage potential customers.",
  },
  {
    number: "02",
    title: "Businesses Ready to Redesign an Existing Website",
    description:
      "For companies whose current website feels outdated, is difficult to navigate, performs poorly on mobile devices or no longer reflects the quality of their business.",
  },
  {
    number: "03",
    title: "Businesses Looking for More Than a Basic Website",
    description:
      "For growing companies that need custom functionality, integrations, booking systems, customer portals or other features that standard website templates cannot adequately support.",
  },
  {
    number: "04",
    title: "Ecommerce Businesses Building or Scaling Online Stores",
    description:
      "For brands looking to launch or improve an online store with product management, payment integration, streamlined checkout and an ecommerce experience designed around their customers.",
  },
  {
    number: "05",
    title: "Established Businesses Planning for Growth",
    description:
      "For organisations that need a scalable digital platform that can support new services, locations, integrations, content and changing business requirements as they grow.",
  },
];

export const targetAudienceHeader = {
  badge: "Ideal Fit",
  headingPart1: "Who Is Our ",
  headingHighlight: "Web Design Service For?",
  description:
    "A website should do more than give your business an online presence. It should communicate your value, build trust and make it easier for potential customers to take the next step. Our web design and development services are suited to businesses that need a website built around their goals, customers and future plans.",
  closing:
    "Whether you need a business website, a custom web application or an ecommerce platform, the solution should fit the way your business operates.",
  ctaText: "Find the Right Solution for Your Business",
  ctaHref: "/contact-us",
};