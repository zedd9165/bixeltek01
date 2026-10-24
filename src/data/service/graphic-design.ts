import dentalImg from "@/assets/digital marketing for health care practices.jpg";
import localImg from "@/assets/local-business.jpg";
import ecommerceImg from "@/assets/ecom-industry.png";
import b2bImg from "@/assets/b2b-business-business-corporate-connection-partnership-concept.jpg";
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
// GRAPHIC DESIGN - SERVICE PAGE DATA
// Content-first draft for Bixeltek's graphic design service.
// Proposed route: /services/graphic-design
// Confirm route, shared component contracts and exact deliverables
// against the current repository before publishing.
// ============================================================

export interface GraphicDesignMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface GraphicDesignPoint {
  title: string;
  description: string;
}

export interface GraphicDesignDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface GraphicDesignUseCase {
  title: string;
  situation: string;
  designApproach: string;
  deliverables: string[];
  considerations: string[];
}

export interface GraphicDesignProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface GraphicDesignReadinessCheck {
  title: string;
  description: string;
}

export interface GraphicDesignWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: GraphicDesignPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface GraphicDesignFinalCtaData {
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

export const graphicDesignMetadata: GraphicDesignMetadata = {
  title: "Graphic Design Services | Brand & Marketing Design | Bixeltek",
  description:
    "Graphic design for brand identity, campaign creatives, social media, sales collateral, packaging and print-with deliverables planned around where each asset will be used.",
  keywords: [
    "graphic design services",
    "graphic design agency",
    "brand identity design",
    "social media graphic design",
    "advertising creative design",
    "marketing collateral design",
    "packaging design services",
    "print design services",
  ],
  // Proposed canonical. Confirm the final route and check for an existing
  // Graphic Design URL before publishing or migrating any older page.
  canonical: "https://bixeltek.com/services/graphic-design",
};

export const graphicDesignBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "Graphic Design",
    href: "/services/graphic-design",
  },
];

export const graphicDesignJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#graphic-design-overview" },
  { label: "Common Design Problems", href: "#graphic-design-problems" },
  { label: "Is It a Fit?", href: "#graphic-design-fit" },
  { label: "Design Scope", href: "#graphic-design-scope" },
  { label: "Key Design Decisions", href: "#graphic-design-decisions" },
  { label: "Use Cases", href: "#graphic-design-use-cases" },
  { label: "How We Work", href: "#graphic-design-process" },
  { label: "Final Asset Checks", href: "#graphic-design-readiness" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - position design as useful assets for real touchpoints,
// not as decoration or a collection of unrelated deliverables.
// ============================================================

export const graphicDesignHero = {
  eyebrow: "GRAPHIC DESIGN · BRAND ASSETS · CAMPAIGN CREATIVE",
  h1: "Graphic Design That Works Across Your Brand and Marketing",
  p1:
    "A logo, an ad creative, a product label and a sales brochure solve different problems. They still need to feel like they come from the same business-and give people the information they need in the moment they see them.",
  p2:
    "Bixeltek designs brand assets and marketing materials around their purpose, placement and next use. The scope can include identity design, campaign creatives, social media assets, sales collateral, packaging and print artwork, based on what your business actually needs.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Web Design",
  secondaryLinkHref: "/services/web-design",
  microcopy:
    "Bring the asset you need, where it will be used and any existing brand files. We can define a practical scope before design begins.",
};

// ============================================================
// OVERVIEW - explain the connected system behind individual assets.
// ============================================================

export const graphicDesignOverview = {
  id: "graphic-design-overview",
  eyebrow: "DESIGN FOR REAL TOUCHPOINTS",
  h2: "Build the Visual System, Then Create the Assets It Needs",
  intro:
    "Graphic design works best when the purpose is clear before the layout begins. A campaign creative has to communicate an offer quickly; a brochure has to organize detail; packaging has to work within its physical format; and brand identity has to remain recognizable across all of them.",
  body:
    "We start by understanding the audience, message, existing brand and destination for the design. That determines the right format, hierarchy, variations and handover requirements-rather than producing an attractive file that needs to be rebuilt for every next use.",
  points: [
    {
      title: "One recognisable identity",
      description:
        "Apply agreed colours, typography, logo use and visual cues consistently across the assets in scope.",
    },
    {
      title: "A clear job for each design",
      description:
        "Prioritize the message, information and action that matter for the specific audience and placement.",
    },
    {
      title: "Files prepared for their destination",
      description:
        "Plan dimensions, formats and production needs for digital use, print or the vendor receiving the artwork.",
    },
  ],
  closingCopy:
    "The deliverable is not just a visual. It is an asset your team can use in the channel and context it was designed for.",
};

// ============================================================
// PROBLEMS - recognizable situations that help buyers self-identify.
// ============================================================

export const graphicDesignProblems: ProblemCard[] = [
  {
    title: "Every Touchpoint Looks Like a Different Brand",
    description:
      "Different designers, vendors and internal teams may make their own choices about fonts, colour, logo placement and image style. The result is a collection of assets without a recognisable system. A practical identity guide and reusable design rules can reduce that drift.",
  },
  {
    title: "Campaign Assets Do Not Adapt Well Across Placements",
    description:
      "A design made for one size or platform can become cramped when resized. Headlines, product images, legal copy and calls to action compete for space. Campaign work should account for the placement and message hierarchy before variations are produced.",
  },
  {
    title: "The Team Recreates Routine Designs From Scratch",
    description:
      "Recurring announcements, offers and content often need fresh details but the same visual structure. Without approved templates and clear rules, routine updates consume time and gradually weaken consistency.",
  },
  {
    title: "The Artwork Looks Fine on Screen but Fails in Production",
    description:
      "Print and packaging have constraints that a screen preview cannot show: final dimensions, bleed, safe areas, image quality, colour handling, dielines and vendor requirements. Those details need to be checked against the actual production brief.",
  },
  {
    title: "Sales Materials Do Not Explain the Offer Clearly",
    description:
      "A company profile or presentation can look polished yet bury the service, proof, differentiators or next step. Information hierarchy should help the reader understand the offer, compare options and know what to do next.",
  },
  {
    title: "The Final Files Are Difficult to Reuse",
    description:
      "A flattened image may be enough for a single post but not for a future update, translation or print run. Agreeing on editable files, export formats, linked assets and usage requirements at the start avoids a handover that does not fit the team's next task.",
  },
];

// ============================================================
// FIT - help buyers understand when to commission design work
// and when another service or a different input is required.
// ============================================================

export const graphicDesignFit = {
  id: "graphic-design-fit",
  eyebrow: "WHEN GRAPHIC DESIGN MAKES SENSE",
  h2: "Start With the Asset or Consistency Problem You Need to Solve",
  intro:
    "Graphic design can be a focused one-off project or a connected set of assets. The right scope depends on what is missing today and how the designs will be approved, published, printed or reused.",
  goodFit: [
    {
      title: "Launching or refreshing a brand",
      description:
        "You need an identity or a more consistent set of assets for a new business, product or market.",
    },
    {
      title: "Preparing a campaign or offer",
      description:
        "Ads and promotional materials need a clear message and coordinated versions for the required placements.",
    },
    {
      title: "Supporting regular marketing output",
      description:
        "Your team needs reusable layouts and an agreed visual language for recurring content and announcements.",
    },
    {
      title: "Producing sales or physical materials",
      description:
        "A brochure, presentation, catalogue, label or sign needs to be designed for a real audience and production format.",
    },
  ],
  needsSeparateScoping: [
    {
      title: "The brief is really a naming or brand strategy project",
      description:
        "Research, positioning, naming and brand architecture require a broader strategy scope than visual asset design alone.",
    },
    {
      title: "The main need is photography, video or ongoing posting",
      description:
        "Original shoots, motion production, copywriting, publishing and community management are separate deliverables and should be agreed explicitly.",
    },
    {
      title: "The design depends on unapproved claims or missing information",
      description:
        "Product details, mandatory label copy, pricing, disclaimers and regulated claims need an accountable source and approval before final artwork.",
    },
  ],
  closingCopy:
    "A useful first brief can be simple: what needs to be designed, who it is for, where it will appear and what the audience should understand or do.",
};

// ============================================================
// SCOPE - deliverable families, each with a distinct job.
// Production, copywriting and strategy are confirmed per project.
// ============================================================

export const graphicDesignScope: ScopeCard[] = [
  {
    title: "Brand Identity & Logo Assets",
    description:
      "Create or refine the visual elements that identify the business: logo or wordmark, supporting lockups, colour palette, typography choices and basic usage rules. The scope should clarify whether the project is a new identity, a refresh or an application of an existing brand system.",
  },
  {
    title: "Campaign & Advertising Creatives",
    description:
      "Design visual assets around the offer, audience and campaign placement. This can include static ad concepts, promotional banners and coordinated size variations. Campaign strategy, copywriting, animation and media management should be specified separately where required.",
  },
  {
    title: "Social Media Design Systems",
    description:
      "Develop post, story, carousel and cover layouts that help recurring content remain recognisable without making every post look identical. Reusable templates are useful when the internal team will update text, offers or imagery after handover.",
  },
  {
    title: "Brochures, Profiles & Sales Collateral",
    description:
      "Organize business information into brochures, company profiles, product sheets, catalogues and sales materials. The design should establish a clear reading order and support the decision the reader needs to make, not simply fill pages with decorative elements.",
  },
  {
    title: "Packaging, Labels & Product Graphics",
    description:
      "Design labels, sleeves, boxes and product graphics around the product, shelf or unboxing context and the supplied production dieline. Final dimensions, mandatory copy, barcode placement, print vendor specifications and regulatory review must be confirmed before artwork is released.",
  },
  {
    title: "Print, Event & Retail Artwork",
    description:
      "Prepare flyers, posters, standees, signage, banners and event materials for their physical viewing distance and final dimensions. Print-ready output depends on the printer's requirements for bleed, safe areas, colour settings, resolution and file format.",
  },
  {
    title: "Presentation & Information Design",
    description:
      "Create pitch decks, proposal visuals, infographics and data-led slides that make complex information easier to follow. The work may include layout and visual explanation; subject-matter accuracy and approved underlying data remain with the client unless separately agreed.",
  },
  {
    title: "Website, Ecommerce & Digital Campaign Assets",
    description:
      "Design banners, promotional graphics, product-category visuals, icons and supporting artwork for digital experiences. This covers graphic assets, not automatically full website UX/UI, front-end development, product photography or ecommerce implementation.",
  },
];

// ============================================================
// DECISIONS - trade-offs that change the best design approach.
// ============================================================

export const graphicDesignDecisions: GraphicDesignDecisionItem[] = [
  {
    title: "Refresh the Existing Identity or Start Again?",
    context:
      "An established brand may already have recognisable elements, while a new business may need the visual foundations defined from the beginning.",
    consideration:
      "Identify what audiences already recognise and what is no longer working. Retain useful equity; replace or expand elements only where the brief supports it.",
  },
  {
    title: "Design Each Asset or Build Reusable Templates?",
    context:
      "One-off creative allows more individual treatment; recurring campaigns and content need consistency and efficient updates.",
    consideration:
      "Use templates when the format repeats and the team can maintain them. Keep bespoke design for assets with a different message, format or decision to support.",
  },
  {
    title: "Digital Artwork or Print-Ready Production?",
    context:
      "Screen and print output have different dimensions, colour handling, bleed and file requirements.",
    consideration:
      "Confirm the destination and printer specifications before artwork begins. Do not assume a social or presentation file is ready for commercial printing.",
  },
  {
    title: "How Much Variation Does the Campaign Need?",
    context:
      "Too few versions can limit placement fit; too many near-identical designs can create extra production work without testing a meaningful idea.",
    consideration:
      "Define what changes between versions-format, audience, offer, message or visual concept-and adapt only where that difference serves a purpose.",
  },
];

// ============================================================
// USE CASES - grounded scenarios, not claims about past Bixeltek work.
// ============================================================

export const graphicDesignUseCases: GraphicDesignUseCase[] = [
  {
    title: "A New Business Needs a Cohesive Identity",
    situation:
      "A new business is preparing to launch but has only a rough logo or a set of unrelated visual references.",
    designApproach:
      "Agree on the desired impression, audience and practical places the identity must work. Develop a focused visual direction and apply it to the key launch assets rather than designing unrelated items one by one.",
    deliverables: [
      "Logo or wordmark assets",
      "Colour and typography rules",
      "Priority launch applications",
    ],
    considerations: [
      "Confirm who approves the identity and what research or brand strategy is in scope.",
      "Check legibility in small, large, light and dark use cases.",
    ],
  },
  {
    title: "A Campaign Needs Consistent Creative Variations",
    situation:
      "A promotion will appear across paid ads, social placements and a landing page, each with different dimensions and space for information.",
    designApproach:
      "Establish one creative direction and a clear message hierarchy, then adapt it to the required placements without simply shrinking the same layout into every format.",
    deliverables: [
      "Core campaign concept",
      "Placement-specific image assets",
      "Agreed message or offer variations",
    ],
    considerations: [
      "Ad copy, offer terms and destination URL need approval from the campaign owner.",
      "Ad account setup, media buying and performance claims are outside the design file unless separately scoped.",
    ],
  },
  {
    title: "A Growing Team Publishes Recurring Social Content",
    situation:
      "The business publishes updates, tips, offers or announcements regularly, but each asset is created from scratch and the feed feels inconsistent.",
    designApproach:
      "Create a small set of flexible formats with clear rules for headlines, imagery, emphasis and spacing. Allow variation by content type while retaining a recognisable system.",
    deliverables: [
      "Post, story or carousel templates",
      "Cover and announcement formats",
      "Template usage notes where included",
    ],
    considerations: [
      "Define whether editable templates, final exports or both are required.",
      "Content strategy, caption writing, scheduling and community management need separate agreement.",
    ],
  },
  {
    title: "An Ecommerce Brand Is Launching a Product",
    situation:
      "A product launch needs connected packaging artwork, product graphics and promotional assets across the store and campaign channels.",
    designApproach:
      "Plan how the core product story, identifiers and visual cues carry across packaging and digital graphics while adapting each asset for its viewing and production context.",
    deliverables: [
      "Packaging or label artwork based on an approved dieline",
      "Product launch graphics",
      "Store or campaign promotional visuals",
    ],
    considerations: [
      "Product data, barcode, claims, ingredients or mandatory label text must be supplied and approved by the responsible party.",
      "Photography, 3D renders, structural packaging engineering and regulatory review are not assumed included.",
    ],
  },
  {
    title: "A B2B Team Needs Clearer Sales Materials",
    situation:
      "The product or service is complex, and sales teams rely on inconsistent decks, long documents or visuals that do not explain the offer quickly.",
    designApproach:
      "Structure the information around the reader's questions: the problem, approach, relevant evidence, scope and next step. Use diagrams and visual hierarchy to support understanding rather than decoration alone.",
    deliverables: [
      "Company profile or capability deck",
      "Service or product sheets",
      "Selected process diagrams or infographics",
    ],
    considerations: [
      "Subject-matter owners must verify technical and commercial statements.",
      "Presentation design does not automatically include sales messaging, copywriting or research.",
    ],
  },
  {
    title: "A Business Needs Print or Event Materials",
    situation:
      "The business is preparing for an event, retail promotion or offline campaign and needs artwork that will be produced in a specific physical format.",
    designApproach:
      "Design around final dimensions, viewing distance, information priority and the production supplier's specifications, then prepare the agreed exports for approval and handoff.",
    deliverables: [
      "Posters, flyers, banners or standee artwork",
      "Adaptations for agreed sizes",
      "Print-ready export where specified",
    ],
    considerations: [
      "Obtain the printer's current artwork specification and templates before finalization.",
      "Printing, installation, shipping and vendor charges are separate unless expressly included.",
    ],
  },
];

// ============================================================
// PROCESS - describe how design uncertainty and production risk reduce.
// ============================================================

export const graphicDesignProcess: GraphicDesignProcessStage[] = [
  {
    number: "01",
    title: "Define the Brief and Destination",
    description:
      "Confirm the audience, message, placement, required formats, source material, stakeholders and the action or understanding the design should support.",
    deliverable: "An agreed brief and asset list",
  },
  {
    number: "02",
    title: "Review Existing Brand and Inputs",
    description:
      "Check current identity files, reference materials, supplied copy, image rights, platform dimensions and any print or vendor specifications that affect the work.",
    deliverable: "A list of usable assets, gaps and production constraints",
  },
  {
    number: "03",
    title: "Set the Visual Direction",
    description:
      "Agree on the layout logic, visual style and message hierarchy for the main asset. A focused direction helps prevent detailed production work from starting before the design approach is aligned.",
    deliverable: "An approved design direction or key concept",
  },
  {
    number: "04",
    title: "Design the Master Asset",
    description:
      "Create the primary design using the approved content and constraints. Test readability, hierarchy, brand consistency and suitability for the intended audience.",
    deliverable: "A review-ready master design",
  },
  {
    number: "05",
    title: "Review and Adapt",
    description:
      "Gather consolidated feedback against the brief, refine the selected direction and create the agreed versions for different channels or formats. Revision rounds and extra variations should follow the proposal.",
    deliverable: "Approved artwork and agreed adaptations",
  },
  {
    number: "06",
    title: "Prepare and Hand Over Files",
    description:
      "Export the required formats, check dimensions and links, and organize approved assets for the intended use. For print jobs, validate the export against the supplied vendor specifications before release.",
    deliverable: "The agreed export set and source files or usage notes where scoped",
  },
];

// ============================================================
// READINESS CHECKS - a practical handoff checklist, not another scope grid.
// ============================================================

export const graphicDesignReadiness = {
  id: "graphic-design-readiness",
  eyebrow: "BEFORE AN ASSET IS CALLED FINAL",
  h2: "Make Sure the Design Is Ready for Its Actual Use",
  intro:
    "Approval on screen is only one part of completion. The final checks depend on the destination, the people who need to use the files and whether the asset will be edited, published or manufactured.",
  checks: [
    {
      title: "Message and hierarchy",
      description:
        "The key information is readable, the intended audience can understand the offer and the next step is clear where one is required.",
    },
    {
      title: "Brand and asset consistency",
      description:
        "Logo use, colour, typography and visual elements follow the agreed direction across the approved versions.",
    },
    {
      title: "Channel or production specifications",
      description:
        "Dimensions, safe areas, bleed, resolution and file format match the requirements provided for the intended use.",
    },
    {
      title: "Handover and usage",
      description:
        "The recipient knows which files are final, which are editable, where linked assets live and what rights or font licences apply. Editable source files and third-party assets must be handled according to the agreed scope and licence terms.",
    },
  ] as GraphicDesignReadinessCheck[],
  sourceNote:
    "For print or editable-file handoff, confirm requirements with the receiving vendor and respect software, font, image and asset licences. Adobe's packaging guidance explains how linked assets and fonts can affect transfer; the licence determines what may be shared.",
};

// ============================================================
// WHY BIXELTEK - specific working principles tied to its connected
// design, website, ecommerce and marketing capabilities.
// ============================================================

export const graphicDesignWhyBixeltek: GraphicDesignWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Design Considered Alongside Where It Will Be Used",
  intro:
    "A graphic rarely exists on its own. It may sit beside a website, support an ad campaign, explain an ecommerce product or be handed to a printer. The brief should account for that destination before design starts.",
  points: [
    {
      title: "We Clarify the Job of the Asset",
      description:
        "Define the audience, message and use case first so the layout serves a real communication need rather than decoration alone.",
    },
    {
      title: "We Consider the Destination Early",
      description:
        "Design for the actual platform, size, reading distance or production process-not as a single file expected to work everywhere.",
    },
    {
      title: "We Keep Connected Touchpoints in Mind",
      description:
        "Where the project spans web, ecommerce or advertising, plan the visual relationship between those assets so the customer does not meet unrelated experiences.",
    },
    {
      title: "We Separate Concepts from Variations",
      description:
        "Establish the main visual direction first, then produce channel adaptations based on agreed differences in format, offer or audience.",
    },
    {
      title: "We Define Deliverables Before Production",
      description:
        "Agree on formats, dimensions, revisions, source files and vendor requirements early enough to avoid an incomplete final handoff.",
    },
    {
      title: "We Account for Future Use",
      description:
        "When recurring work is expected, consider reusable templates and practical usage notes rather than designing every update as a new project.",
    },
  ],
  closingCopy:
    "The goal is design your team can apply consistently in the places customers encounter your business.",
  ctaText: "Discuss Your Design Brief",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT - explain what changes the scope rather than inventing prices.
// ============================================================

export const graphicDesignInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number and Complexity of Assets",
    description:
      "A single promotional graphic is different from a complete identity, catalogue or multi-asset campaign. Scope depends on the number of distinct designs and the work each one requires.",
  },
  {
    title: "Concept Development vs. Adaptation",
    description:
      "Creating a new visual direction takes different effort from adapting an approved design to additional sizes, languages or placements.",
  },
  {
    title: "Brand Strategy and Existing Inputs",
    description:
      "Clear brand guidelines, approved copy and usable images can simplify production. Missing inputs, identity discovery or significant rework may need a separate scope.",
  },
  {
    title: "Number of Formats and Channels",
    description:
      "Digital placements, print sizes, product variants and market-specific versions each create different layout and checking requirements.",
  },
  {
    title: "Print, Packaging and Vendor Requirements",
    description:
      "Dielines, technical specifications, multiple SKUs, proofs and coordination with a printer can add production work beyond screen design.",
  },
  {
    title: "Copy, Photography and Specialist Inputs",
    description:
      "Copywriting, original photography, illustration, motion, translation, research and regulated-content review should be identified if the project needs them.",
  },
  {
    title: "Review, Revisions and Handover",
    description:
      "The number of decision-makers, revision rounds, editable source files, template setup and usage documentation affect the total effort. Confirm these inclusions in the proposal.",
  },
];

// ============================================================
// RELATED SERVICES - confirm destinations against the current router.
// ============================================================

export const graphicDesignRelatedServices: RelatedServiceCard[] = [
  {
    title: "Web Design & Development",
    description:
      "For website structure, page layouts and the digital experience around the graphic assets.",
    linkText: "Explore Web Design",
    destination: "/services/web-design",
  },
  {
    title: "Ecommerce Development",
    description:
      "For product discovery, storefront implementation and the wider shopping experience that uses product and campaign visuals.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "Google Ads Management",
    description:
      "For campaign planning, media management and measurement when the design assets are part of a paid search or display campaign.",
    linkText: "Explore Google Ads",
    destination: "/services/google-ads",
  },
  {
    title: "Analytics & Conversion Tracking",
    description:
      "For measuring what happens after a campaign or landing-page asset attracts attention, where tracking is available and correctly configured.",
    linkText: "Explore Analytics & Tracking",
    destination: "/services/analytics-tracking",
  },
];

// ============================================================
// FAQS - address project boundaries, production and ownership.
// ============================================================

export const graphicDesignFaqs: FAQItem[] = [
  {
    question: "What does a graphic design service include?",
    answer:
      "Depending on the brief, it can include brand identity assets, advertising creatives, social media designs, brochures, presentations, packaging, print artwork and graphics for websites or ecommerce. The proposal should define the specific deliverables, formats, revisions and any additional production work.",
  },
  {
    question: "Can you design a logo and complete brand identity?",
    answer:
      "A project can cover a logo or wordmark and related identity elements such as colour, typography, supporting logo versions and usage guidance. Whether brand research, positioning, naming or a full brand strategy is included must be agreed separately.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Yes. Existing brand files and guidelines can be used as the starting point for new assets or campaign adaptations. If those rules are incomplete or inconsistent, the brief should clarify whether the work includes updating the system or simply applying it.",
  },
  {
    question: "Do you design for both digital and print?",
    answer:
      "The scope can include digital assets and print materials. They should be prepared for their actual destination: a file created for social media is not automatically ready for print, and printed artwork must follow the receiving vendor's specifications.",
  },
  {
    question: "Can you create social media and ad creative variations?",
    answer:
      "Yes, when the required platforms, placements, sizes and content variations are defined. We recommend identifying what is meant to change across versions-such as size, message, offer or audience-instead of producing many near-identical files without a clear purpose.",
  },
  {
    question: "Do you provide editable source files?",
    answer:
      "Source files can be included when specified in the project scope. Confirm the file types, linked assets, template requirements and any third-party font or image licensing restrictions before work begins; not every asset licence permits unrestricted transfer or reuse.",
  },
  {
    question: "Can you prepare packaging and product labels?",
    answer:
      "Packaging and label artwork can be scoped around the approved dieline and production requirements. The client or responsible product team should supply and approve mandatory product information, claims, barcodes and regulatory copy unless a separate qualified review is explicitly included.",
  },
  {
    question: "Do you provide printing or manufacturing?",
    answer:
      "The design scope can include production-ready files based on the specifications provided. Printing, manufacturing, shipping, installation and vendor charges are separate unless expressly included in the proposal.",
  },
  {
    question: "How many concepts and revisions are included?",
    answer:
      "That depends on the type and complexity of the work. The proposal should define the number of initial directions, the included revision rounds, who consolidates feedback and how additional directions or revisions are handled.",
  },
  {
    question: "Can you work from an existing design that needs improvement?",
    answer:
      "Yes. The work may involve refining hierarchy, readability, consistency, layout or format compatibility instead of redesigning everything. The existing source files, rights and limitations determine what can be changed efficiently.",
  },
  {
    question: "Can graphic design improve ad or sales performance?",
    answer:
      "Design can make a message easier to notice and understand, but performance also depends on the offer, audience, copy, placement, landing page and follow-up. Where measurement is available, creative variants can be evaluated against a defined goal; design alone cannot guarantee a business result.",
  },
  {
    question: "Can you provide ongoing design support?",
    answer:
      "Recurring support can be considered for campaigns, content templates or regular marketing collateral. Agree on expected volume, turnaround, review process, priority handling and what counts as a new concept versus an adaptation before setting up an ongoing arrangement.",
  },
  {
    question: "Do you also create videos and product photography?",
    answer:
      "Original photography, video shoots, animation and ongoing content production are different services from static graphic design. If the project needs them, include the requirement in the brief so availability, production responsibilities and deliverables can be scoped accurately.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "Share the business or product, audience, purpose of the asset, where it will be used, any existing brand files, approved copy and the required deadline. For print or packaging, include the printer's specifications or approved dieline if available.",
  },
];

export const graphicDesignFinalCta: GraphicDesignFinalCtaData = {
  id: "final-cta",
  eyebrow: "START WITH THE DESIGN YOU NEED",
  h2: "Let's Define the Assets Your Business Actually Needs",
  description:
    "Tell us what you are launching, promoting or improving, who the design needs to reach and where it will be used. We can discuss the right deliverables, inputs and production requirements before the creative work begins.",
  primaryCta: {
    label: "Discuss Your Design Brief",
    href: "/contact-us",
  },
  supportingCopy:
    "You do not need a fully formed brief. The asset, its audience and its intended use are a useful place to start.",
};

// ============================================================
// IMPLEMENTATION NOTES - resolve before publishing.
// ============================================================

export const graphicDesignImplementationNotes = {
  pageThesis:
    "Graphic design for businesses that need consistent, purpose-built brand and marketing assets across digital, sales and physical touchpoints-not a generic list of visual deliverables.",
  primaryBuyer:
    "Founders, marketing leads and business teams launching or refreshing a brand, preparing campaigns, producing sales materials or creating repeatable design output.",
  differentiation:
    "Position the service around the relationship between a design's purpose, its placement and its handoff. The page should not duplicate web UX/UI, content creation/production or paid campaign management pages.",
  proposedRoute: "/services/graphic-design",
  sectionIdMap: {
    overview: "graphic-design-overview",
    problems: "graphic-design-problems",
    fit: "graphic-design-fit",
    scope: "graphic-design-scope",
    decisions: "graphic-design-decisions",
    useCases: "graphic-design-use-cases",
    process: "graphic-design-process",
    readiness: "graphic-design-readiness",
    whyBixeltek: "why-bixeltek",
    investment: "investment",
    faqs: "faqs",
    finalCta: "final-cta",
  },
  routeStatus:
    "Proposed, not verified. Search the current repository and live site for an existing Graphic Design or Branding URL before setting the canonical or adding redirects.",
  canonicalStatus:
    "The canonical in metadata is a proposed route. Update it to the confirmed production URL before publication; if an existing page is being replaced, review traffic and backlinks before any migration.",
  scopeToConfirm: [
    "Whether Bixeltek currently offers logo/brand identity design, packaging, print artwork, pitch decks and editable templates as separate deliverables.",
    "Which source-file types can be provided and which font, stock-image, illustration or other third-party licences apply.",
    "Whether copywriting, photography, video, motion, printing, packaging production or printer/vendor coordination are offered or separately scoped.",
    "The approved number of concepts, revision rounds, turnaround expectations and ongoing design-support model, if any.",
  ],
  routeChecks: [
    "/services/web-design is used for the related web design link; confirm it remains the preferred URL.",
    "/ecommerce-websites is used for ecommerce; confirm it is the current parent route in the repository.",
    "/services/google-ads and /analytics-and-cro-services are used as related-service routes; confirm the current paths before release.",
    "/contact-us is used for the final CTA, based on the currently published Bixeltek contact page.",
  ],
  contentGuardrails: [
    "Do not add project metrics, client logos, campaign results or claims of original past work unless approved evidence exists.",
    "Do not promise a fixed number of concepts, revisions, source files or delivery days until commercial terms are confirmed.",
    "Do not imply that graphic design includes brand strategy, copywriting, photography, video, web UX/UI, advertising management, printing or regulatory review by default.",
    "Packaging and print deliverables must follow approved customer content and receiving vendor specifications; keep responsibility for product claims and regulatory content explicit.",
  ],
  researchNotes: [
    "Bixeltek's public Hyderabad marketing page lists Comprehensive Branding and Identity, including logo design, brand guidelines, visual identity, packaging design and brand strategy. Confirm the service scope against the current productized service before publication.",
    "Reviewed competitor service pages commonly group brand identity, social media assets, ad creatives, collateral, packaging and print. The intended Bixeltek differentiation is practical asset use, channel-specific preparation and clear handoff, rather than copying an expanded deliverables menu.",
    "Adobe Illustrator documentation explains packaging files with linked graphics and fonts for handoff, and warns that font permissions depend on applicable licences. Verify exact files and rights at project scoping.",
    "For digital visuals with text, contrast and legibility should be checked in context; WCAG guidance describes contrast thresholds for web text. Do not treat this as a blanket certification of a graphic design deliverable.",
  ],
};


export const graphicDesignBusinessMarkets = {
  eyebrow: "DESIGN SHAPED AROUND YOUR BUSINESS MODEL",
  h2: "Strategic Visual Identity for Different Market Demands",
  intro:
    "Design requirements differ dramatically depending on what you sell and how customers perceive value. We tailor brand assets, marketing collateral, and digital visuals to your industry context.",
  cards: [
    {
      title: "Dental & Healthcare Practices",
      description:
        "Clean, reassuring visual design that communicates medical professionalism, patient safety, and clinical excellence across signage, treatment brochures, and digital touchpoints.",
      visitorQuestion: "Does this clinic present the hygiene, trust, and quality I want for my care?",
      focus: [
        "Patient-facing treatment guides & brochures",
        "Clinical brand identity & interior signage systems",
        "Digital social templates & website graphic assets",
      ],
      link: "#final-cta",
      linkText: "Request Consultation →",
      image: dentalImg,
      imageAlt: "Healthcare practice branding and patient guide design",
    },
    {
      title: "Ecommerce & Consumer Brands",
      description:
        "High-impact packaging, promotional campaign assets, and conversion-focused product merchandising that stand out in crowded feeds and physical shelves.",
      visitorQuestion: "Does this product look premium, credible, and worth the price?",
      focus: [
        "Packaging design, unboxing collateral & labels",
        "Promotional banner suites & social ad variations",
        "Infographics, dimension charts & visual badges",
      ],
      link: "#final-cta",
      linkText: "Request Consultation →",
      image: ecommerceImg,
      imageAlt: "Ecommerce packaging and promotional visual design",
    },
    {
      title: "Local & Trade Services",
      description:
        "Memorable vehicle wraps, printed door hangers, uniform apparel, and localized marketing materials that build instant neighbourhood trust and recognition.",
      visitorQuestion: "Are they an established, professional company I can trust in my home?",
      focus: [
        "Fleet vehicle wrap graphics & branded apparel",
        "Direct mail flyers, door hangers & business cards",
        "Service-area banners & job-site lawn signs",
      ],
      link: "#final-cta",
      linkText: "Request Consultation →",
      image: localImg,
      imageAlt: "Local service business branding and fleet graphics",
    },
    {
      title: "B2B & Corporate Enterprises",
      description:
        "Authoritative brand systems, investor decks, whitepapers, and exhibition trade-show graphics that reflect technical competence and commercial weight.",
      visitorQuestion: "Does this organisation have the credibility to deliver enterprise-scale work?",
      focus: [
        "Executive presentation decks & annual reports",
        "Whitepaper, case-study & one-pager collateral",
        "Trade-show booth displays & large-format signage",
      ],
      link: "#final-cta",
      linkText: "Request Consultation →",
      image: b2bImg,
      imageAlt: "Corporate enterprise visual identity and presentation collateral",
    },
  ],
};
