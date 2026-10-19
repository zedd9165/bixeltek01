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
// CONTENT CREATION - SERVICE PAGE DATA
// Content-first draft for Bixeltek's photo/video content production.
// Proposed route: /services/content-creation
// Confirm route, component contracts and production deliverables
// against the current repository before publishing.
// ============================================================

export interface ContentCreationMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface ContentCreationPoint {
  title: string;
  description: string;
}

export interface ContentCreationDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface ContentCreationUseCase {
  title: string;
  situation: string;
  approach: string;
  deliverables: string[];
  considerations: string[];
}

export interface ContentCreationProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ContentCreationReadinessCheck {
  title: string;
  description: string;
}

export interface ContentCreationWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: ContentCreationPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface ContentCreationFinalCtaData {
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

export const contentCreationMetadata: ContentCreationMetadata = {
  title: "Content Creation Services | Photo & Video Production | Bixeltek",
  description:
    "Plan and produce brand, product and short-form video content for websites, ecommerce, social media and campaigns-with each shoot built around its intended use.",
  keywords: [
    "content creation services",
    "photo and video production",
    "brand photography",
    "product photography services",
    "short-form video production",
    "social media content creation",
    "Reels production",
    "ecommerce product photography",
  ],
  // Proposed canonical. Verify this path and search for an older content
  // creation/production URL before publishing or migrating any existing page.
  canonical: "https://bixeltek.com/services/content-creation",
};

export const contentCreationBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Content Creation", href: "/services/content-creation" },
];

export const contentCreationJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#content-creation-overview" },
  { label: "Common Content Problems", href: "#content-creation-problems" },
  { label: "Is It a Fit?", href: "#content-creation-fit" },
  { label: "Production Scope", href: "#content-creation-scope" },
  { label: "Key Production Decisions", href: "#content-creation-decisions" },
  { label: "Use Cases", href: "#content-creation-use-cases" },
  { label: "How We Work", href: "#content-creation-process" },
  { label: "Before the Shoot", href: "#content-creation-readiness" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - position content as planned, usable production assets,
// not simply a shoot day or a promise to publish more often.
// ============================================================

export const contentCreationHero = {
  eyebrow: "CONTENT CREATION · PHOTO · VIDEO",
  h1: "Create Content Your Business Can Actually Use",
  p1:
    "A shoot is only useful when the final photos and videos fit the job they need to do. Product pages need clear product detail. Brand videos need a message worth remembering. Short-form content needs a strong opening and a format that suits the platform.",
  p2:
    "Bixeltek helps plan and produce photo and video assets around your brand, audience and intended use-from product and lifestyle imagery to short-form videos and service demonstrations. The exact production, editing and delivery scope is agreed before the shoot.",
  primaryButtonText: "Talk to our content creation expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Social Media Marketing",
  secondaryLinkHref: "/social-media-marketing-agency-hyderabad",
  microcopy:
    "Start with what you need to show, who needs to see it and where the content will appear. A complete script or shot list is not required to begin the conversation.",
};

// ============================================================
// OVERVIEW - make the link between the brief, shoot and final
// deliverables explicit before presenting the service menu.
// ============================================================

export const contentCreationOverview = {
  id: "content-creation-overview",
  eyebrow: "PLAN THE ASSETS BEFORE THE SHOOT",
  h2: "Start with the Story. Plan the Shoot Around the Output.",
  intro:
    "Good production starts before the camera is switched on. The audience, message, location, people or products, and intended channels all affect what needs to be captured.",
  body:
    "We define the purpose and deliverables first, then shape a practical shoot brief. That helps prevent a common waste: finishing a shoot with attractive footage but missing the product detail, vertical framing, explanation or variation the business actually needed.",
  points: [
    {
      title: "A defined job for every asset",
      description:
        "Decide whether each photo or video must explain, demonstrate, build confidence, support a product page or give a campaign a clear creative angle.",
    },
    {
      title: "A shoot plan built around real constraints",
      description:
        "Account for the product, location, people, available time, permissions and any scenes that need to be captured in a specific order.",
    },
    {
      title: "Deliverables prepared for their destination",
      description:
        "Plan the edits, aspect ratios, crops, captions and file formats required for the agreed website, ecommerce, social or advertising placements.",
    },
  ],
  closingCopy:
    "The goal is not the largest possible folder of footage. It is a usable set of assets with a clear purpose, agreed formats and a practical handover.",
};

// ============================================================
// PROBLEMS - situations that help buyers recognize their actual
// content-production problem rather than a generic need to post.
// ============================================================

export const contentCreationProblems: ProblemCard[] = [
  {
    title: "The Business Has to Reuse the Same Few Photos",
    description:
      "A limited image library gets stretched across product pages, ads, social posts and sales materials. The result can feel repetitive, and important product angles or real-world context may be missing.",
  },
  {
    title: "The Shoot Happens Before the Brief Is Clear",
    description:
      "Without an agreed message, shot list, location plan and intended formats, teams can spend production time on attractive scenes while missing the assets needed for launch or campaign deadlines.",
  },
  {
    title: "Video Looks Good but Does Not Explain Enough",
    description:
      "A polished edit can still leave viewers unsure what the product does, how a service works, who it is for or what to do next. The concept needs to serve the viewer's question-not only the visual style.",
  },
  {
    title: "One Master Video Has to Fit Every Channel",
    description:
      "A horizontal edit may not translate cleanly to vertical placements. Cropping can cut off the product, speaker or important text, and a long edit may not communicate the point quickly enough for a short-form placement.",
  },
  {
    title: "The Content Does Not Match the Real Brand Experience",
    description:
      "Over-styled scenes, outdated products, inconsistent locations or scripted claims can create a gap between what people see online and what they experience when they enquire or buy.",
  },
  {
    title: "The Files Arrive but the Team Cannot Use Them Easily",
    description:
      "Unclear filenames, missing versions, inconsistent crops or unconfirmed usage rights make it harder to find and reuse the content. Handover should be part of the production brief, not an afterthought.",
  },
];

// ============================================================
// FIT - qualify where planned production helps and where the
// buyer may actually need another service or a smaller next step.
// ============================================================

export const contentCreationFit = {
  id: "content-creation-fit",
  eyebrow: "WHEN PRODUCTION MAKES SENSE",
  h2: "Bring Us in When the Content Has a Clear Job to Do",
  intro:
    "A planned shoot is useful when your business needs original visual material that cannot be covered adequately by existing assets. The right scope depends on what is missing and how the content will be used.",
  goodFit: [
    {
      title: "A product or collection needs stronger visuals",
      description:
        "Capture useful angles, detail, scale, materials or lifestyle context for ecommerce and product marketing.",
    },
    {
      title: "Your service is easier to understand when shown",
      description:
        "Record the process, environment, team or demonstration that helps a prospective customer know what to expect.",
    },
    {
      title: "A launch or campaign needs original content",
      description:
        "Plan a defined set of images and videos around an offer, release, seasonal moment or creative concept.",
    },
    {
      title: "The team needs a repeatable content pipeline",
      description:
        "Batch related assets in a planned session, with a clear list of formats and outputs to support future publishing or campaigns.",
    },
  ],
  notBestFit: [
    {
      title: "The main need is ongoing channel management",
      description:
        "Content production can supply the assets, but calendars, posting, community replies and channel operations require a separate social media management scope.",
    },
    {
      title: "The business has not defined the message or offer",
      description:
        "A shoot may expose the gap rather than solve it. Start by agreeing on the audience, offer, required claims and core message before spending on production.",
    },
    {
      title: "Only a small design adaptation is needed",
      description:
        "A banner, carousel layout or static promotional design may be better handled through graphic design when no original photography or video is required.",
    },
  ],
  closingCopy:
    "If the scope includes social publishing, copywriting, influencer talent, animation or paid campaign management, identify those requirements separately so ownership is clear.",
};

// ============================================================
// SCOPE - production work described in terms of the resulting
// assets and decisions, not an unconditional promise of services.
// ============================================================

export const contentCreationScope: ScopeCard[] = [
  {
    title: "Content Brief & Shoot Planning",
    description:
      "Define the audience, main message, required scenes and intended use before production. Depending on the project, planning may include references, a shot list, a simple storyboard, location needs and a deliverables schedule. Extensive campaign strategy or copywriting should be scoped separately.",
  },
  {
    title: "Product & Ecommerce Photography",
    description:
      "Capture products with the angles, details, scale and context buyers need to assess them. The shot plan can distinguish clean product images from lifestyle scenes and detail shots. Product handling, styling, models, studio setup, sample shipping and SKU volume affect the production plan.",
  },
  {
    title: "Brand & Lifestyle Photography",
    description:
      "Create authentic images of the business, its environment, team, products or customer-facing experience. The aim is to give the brand usable visual context, not generic stock-style scenes. Locations, people, props, styling and permissions must be arranged before the shoot.",
  },
  {
    title: "Short-Form Video & Reels",
    description:
      "Plan and capture short videos around one clear idea-such as a product benefit, demonstration, quick explanation or brand moment. Opening frames, framing, audio, pacing and platform aspect ratio should be considered during the shoot, rather than left entirely to cropping in post-production.",
  },
  {
    title: "Product, Service & Process Demonstrations",
    description:
      "Show how a product works, what a service involves or what a customer can expect. A useful demo makes the important steps visible and avoids claims the business cannot substantiate. Technical setup, access to the process and subject-matter approval can affect the scope.",
  },
  {
    title: "Founder, Team & Expert-Led Content",
    description:
      "Capture interviews, introductions, explainers or behind-the-scenes material that puts a real person and point of view behind the business. The brief should clarify talking points, speaker availability, audio needs, consent and how the recording will be edited into final assets.",
  },
  {
    title: "Editing, Sound & Post-Production",
    description:
      "Turn selected footage into agreed final edits through trimming, sequencing, colour correction, audio cleanup, titles and captions where included. Advanced animation, visual effects, voice-over, translation, licensed music and complex retouching can add separate requirements.",
  },
  {
    title: "Channel-Ready Versions & Asset Handover",
    description:
      "Prepare agreed variants for the intended website, product page, social channel or advertising placement. Confirm aspect ratios, lengths, resolution, subtitles, file formats and naming before delivery. Extra cutdowns, raw footage, project files and future edit access should be stated in the agreement.",
  },
];

// ============================================================
// DECISIONS - the choices that materially change a production
// plan, rather than generic tips about making engaging content.
// ============================================================

export const contentCreationDecisions: ContentCreationDecisionItem[] = [
  {
    title: "One Hero Shoot or Multiple Assets?",
    context:
      "Campaign videos, product photos and recurring social content need different shot plans.",
    consideration:
      "Define deliverables first, then batch related shots and avoid unused assets.",
  },
  {
    title: "One Channel or Multiple Formats?",
    context:
      "Websites, vertical videos and ads have different framing and pacing needs.",
    consideration:
      "Plan priority formats before filming and capture extra coverage for reuse.",
  },
  {
    title: "Polished Creative or Real Demonstrations?",
    context:
      "Styled visuals build brand appeal, while demonstrations show how products or services work.",
    consideration:
      "Match the style to the buyer's needs and keep product claims accurate.",
  },
  {
    title: "What Needs Approval Before Production?",
    context:
      "People, locations, music and third-party assets may require permission or licences.",
    consideration:
      "Confirm usage rights, releases and paid-ad permissions before the shoot.",
  },
];
// ============================================================
// USE CASES - illustrative production briefs, not claims about
// Bixeltek's previous clients or completed projects.
// ============================================================

export const contentCreationUseCases: ContentCreationUseCase[] = [
  {
    title: "An Ecommerce Brand Needs More Than Packshots",
    situation:
      "A product catalogue has basic images, but shoppers cannot see the scale, texture, use or context clearly enough from those images alone.",
    approach:
      "Plan a repeatable shot list by product type: primary image, important details, scale or use context, and selected lifestyle scenes. Keep the angles and lighting consistent where products need to be compared.",
    deliverables: [
      "Agreed product image set",
      "Selected lifestyle or in-use photographs",
      "Approved crops and file formats for the store",
    ],
    considerations: [
      "SKU count and product preparation affect shoot time.",
      "Confirm marketplace or ecommerce image rules before capture.",
      "Do not assume retouching, styling or model costs are included by default.",
    ],
  },
  {
    title: "A Service Business Needs to Show How It Works",
    situation:
      "The service is difficult to explain with words alone, and prospective customers want to understand the team, process, setting or steps involved.",
    approach:
      "Map the viewer's likely questions, then capture the real process in an order that makes it easy to follow. Include the people, equipment or environment that help explain the service accurately.",
    deliverables: [
      "Process or service demonstration footage",
      "Short edited explainer or highlight video",
      "Supporting photos for web or social use",
    ],
    considerations: [
      "Arrange site access and safety requirements before filming.",
      "Confirm customer, staff and property permissions.",
      "Have a subject-matter owner verify any factual claims.",
    ],
  },
  {
    title: "A Brand Is Preparing a Launch or Campaign",
    situation:
      "A launch date is set, but the team still needs original creative material that works across campaign placements and the website.",
    approach:
      "Build the brief around the campaign message and priority placements. Plan the hero asset alongside supporting scenes and variants so the shoot covers both the main story and the additional formats actually required.",
    deliverables: [
      "Hero photo or video assets",
      "Supporting campaign images or clips",
      "Agreed placement-ready edits",
    ],
    considerations: [
      "The offer, key message and claims should be approved before production.",
      "Media buying and campaign optimization are separate from content production.",
      "Schedule review time between the shoot and launch date.",
    ],
  },
  {
    title: "The Founder or Expert Needs a Clear On-Camera Introduction",
    situation:
      "A company wants a real person to explain its point of view, expertise or service, but a long unscripted recording may be difficult to use.",
    approach:
      "Prepare talking points, record in a suitable environment and structure the interview around distinct questions. Edit the material into focused pieces without changing the speaker's intended meaning.",
    deliverables: [
      "Founder, team or expert interview footage",
      "One agreed primary edit",
      "Selected short clips or supporting stills where scoped",
    ],
    considerations: [
      "Allow time for audio checks and retakes.",
      "Confirm speaker consent and approval responsibilities.",
      "Do not imply professional, clinical or commercial endorsements without the necessary basis and permissions.",
    ],
  },
  {
    title: "A Business Needs a Reusable Library of Social Content",
    situation:
      "The team regularly runs short of usable images and videos and keeps arranging last-minute, one-off shoots.",
    approach:
      "Group repeatable themes-product details, frequently asked questions, team introductions, process clips or seasonal material-into a planned production session, then agree on the number and type of edits needed.",
    deliverables: [
      "A planned batch of photos and short clips",
      "Selected edited vertical videos",
      "Organized files for the agreed publishing workflow",
    ],
    considerations: [
      "A content library does not by itself include posting or community management.",
      "A recurring cadence requires a separate volume and scheduling agreement.",
      "Trends should not override the brand message or the audience's needs.",
    ],
  },
  {
    title: "A Paid Campaign Needs Distinct Creative Concepts",
    situation:
      "The team wants to test different ways of presenting an offer rather than running many nearly identical edits.",
    approach:
      "Define meaningful creative differences-such as demonstration versus testimonial, problem versus benefit, or product detail versus lifestyle context-and capture them deliberately. Where feasible, plan the first seconds and key visual for each concept.",
    deliverables: [
      "A small set of distinct creative concepts",
      "Placement-specific edits agreed in the brief",
      "Organized versions for campaign review",
    ],
    considerations: [
      "Content production does not guarantee ad results.",
      "Media setup, audience tests and budget management are separate scopes.",
      "Performance conclusions require adequate delivery and correctly configured measurement.",
    ],
  },
];

// ============================================================
// PROCESS - clarify what is decided at each stage and the thing
// the client should be able to approve or use at that point.
// ============================================================

export const contentCreationProcess: ContentCreationProcessStage[] = [
  {
    number: "01",
    title: "Brief & Intended Use",
    description:
      "Identify the audience, message, business context and where the content will appear. Review existing brand assets and any material that must be shown or avoided.",
    deliverable:
      "A defined objective, audience, priority channels and initial production scope.",
  },
  {
    number: "02",
    title: "Concept & Shot Plan",
    description:
      "Turn the brief into a practical plan for scenes, products, speakers, locations, formats and shoot order. Scripts, storyboards or reference boards are included where the agreed project needs them.",
    deliverable:
      "An approved shot list or production plan with key dependencies identified.",
  },
  {
    number: "03",
    title: "Production Preparation",
    description:
      "Confirm schedules, access, product availability, participants, props, permissions, equipment and the person authorized to answer production questions on the day.",
    deliverable:
      "A shoot schedule and readiness check for the confirmed production scope.",
  },
  {
    number: "04",
    title: "Photo & Video Capture",
    description:
      "Capture the approved scenes and the practical coverage needed for editing. Check framing, focus, audio and key shots on set so avoidable gaps are caught while they can still be corrected.",
    deliverable:
      "Captured material for the agreed assets, subject to the shoot plan and conditions.",
  },
  {
    number: "05",
    title: "Edit, Review & Approve",
    description:
      "Select the material, assemble edits and apply the agreed finishing. Route the draft to the nominated reviewer, gather consolidated feedback and confirm which revision rounds are included.",
    deliverable:
      "Review cuts or image selects, followed by approved finals within the agreed revision scope.",
  },
  {
    number: "06",
    title: "Export & Handover",
    description:
      "Export approved assets for the named channels and organize the delivery. Confirm what is included beyond final exports, such as raw footage, editable project files, captions or future adaptation rights.",
    deliverable:
      "A clearly organized asset handover in the formats agreed before production.",
  },
];

// ============================================================
// READINESS - practical checks to prevent avoidable reshoots,
// incomplete assets and approval delays.
// ============================================================

export const contentCreationReadiness = {
  id: "content-creation-readiness",
  eyebrow: "BEFORE THE SHOOT",
  h2: "Resolve the Important Details Before Production Day",
  intro:
    "A shoot can only capture what is available and approved. These checks help the team spend production time on the intended assets instead of resolving preventable gaps on set.",
  checks: [
    {
      title: "The Main Message Is Agreed",
      description:
        "Know what the audience should understand, remember or do after seeing the content.",
    },
    {
      title: "The Deliverables Are Specific",
      description:
        "List the required photos, videos, edits, formats and priority destinations rather than requesting a vague amount of content.",
    },
    {
      title: "Products, Locations and People Are Ready",
      description:
        "Confirm product samples, space access, staff or talent availability, styling, props and the practical running order.",
    },
    {
      title: "Scripts and Claims Have an Owner",
      description:
        "Approve required talking points, prices, offers, product details and regulated or sensitive claims before recording.",
    },
    {
      title: "Permissions and Rights Are Clear",
      description:
        "Confirm permissions for identifiable people, locations, music, third-party material and intended commercial usage.",
    },
    {
      title: "Someone Can Make Decisions on the Day",
      description:
        "Name the contact who can resolve questions about the product, message, access or shot list during production.",
    },
    {
      title: "Review and Delivery Requirements Are Known",
      description:
        "Agree on the review owner, revision rounds, deadline, file formats, aspect ratios, caption needs and handover expectations.",
    },
  ] as ContentCreationReadinessCheck[],
  closingCopy:
    "If some of these details are still undecided, make them part of planning. It is cheaper to resolve many production questions in the brief than after the shoot has ended.",
};

// ============================================================
// WHY BIXELTEK - grounded in the connection between content,
// web experiences and growth channels, without claiming outcomes.
// ============================================================

export const contentCreationWhyBixeltek: ContentCreationWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Production Planned for Where the Content Will Be Used",
  intro:
    "Content often needs to travel across a website, product page, social channel and campaign. Bixeltek works across digital experiences and marketing, so the brief can account for the destination and next use of the asset-not just the shoot itself.",
  points: [
    {
      title: "We Define the Deliverables Up Front",
      description:
        "Agree on the photos, videos, edits and formats before production so both sides know what the shoot is expected to produce.",
    },
    {
      title: "We Plan for the Intended Placement",
      description:
        "Account for vertical or horizontal framing, product-page detail, audio, captions and the way the audience will encounter the content.",
    },
    {
      title: "We Keep the Real Customer in View",
      description:
        "Prioritize the details, demonstrations and explanations that help people understand the product, service or business.",
    },
    {
      title: "We Make Production Dependencies Visible",
      description:
        "Identify the products, people, locations, approvals and rights needed before the shoot so responsibilities are clear.",
    },
    {
      title: "We Separate Production from Distribution",
      description:
        "Make clear what belongs to the content deliverables and what requires a separate scope, such as posting, ad management or ongoing community work.",
    },
    {
      title: "We Treat Handover as Part of the Job",
      description:
        "Agree on file formats, versions, rights and project-file expectations so the team knows what it can use and maintain after delivery.",
    },
  ],
  closingCopy:
    "The right production plan balances creative ambition with a useful, approved set of assets that can fit the channels and workflows your business actually uses.",
  ctaText: "Discuss Your Content Brief",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT - explain what changes production effort without
// inventing packages, rates, turnaround promises or shoot counts.
// ============================================================

export const contentCreationInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Number and Type of Deliverables",
    description:
      "A set of product photos, a founder interview and a multi-scene campaign video involve different planning, capture and editing effort. Define the outputs before comparing estimates.",
  },
  {
    title: "Shoot Duration and Location",
    description:
      "Travel, location changes, setup time, access restrictions and the number of production days affect the schedule and crew requirements.",
  },
  {
    title: "Products, Talent, Styling and Props",
    description:
      "Models, presenters, stylists, makeup, props, product preparation, set construction and sample logistics can introduce additional costs.",
  },
  {
    title: "Concept, Script and Pre-Production",
    description:
      "A straightforward product capture differs from a researched concept with scripts, storyboards, casting or extensive location planning. Specify the level of preparation needed.",
  },
  {
    title: "Editing and Post-Production Complexity",
    description:
      "Runtime, number of edits, colour work, sound cleanup, motion graphics, retouching, subtitles and language versions affect post-production effort.",
  },
  {
    title: "Formats, Variations and Revision Rounds",
    description:
      "Multiple aspect ratios, separate hooks, cutdowns and market versions can add work. Confirm what counts as an included adaptation versus a new edit or concept.",
  },
  {
    title: "Usage Rights, Travel and Third-Party Costs",
    description:
      "Talent usage, licensed music, locations, travel, equipment hire, stock material and other vendor expenses should be stated clearly in the proposal where applicable.",
  },
];

// ============================================================
// RELATED SERVICES - current live destination verified where
// possible. Confirm final URLs against the application router.
// ============================================================

export const contentCreationRelatedServices: RelatedServiceCard[] = [
  {
    title: "Social Media Marketing",
    description:
      "For channel planning, publishing and campaign management when production assets need an ongoing distribution plan.",
    linkText: "Explore Social Media Marketing",
    destination: "/social-media-marketing-agency-hyderabad",
  },
  {
    title: "Graphic Design",
    description:
      "For static campaign visuals, templates, brand assets and collateral that complement photo and video production.",
    linkText: "Explore Graphic Design",
    destination: "/services/graphic-design",
  },
  {
    title: "Meta Ads Management",
    description:
      "For campaign strategy, audience setup, media delivery and measurement when creative assets are used in paid social advertising.",
    linkText: "Explore Meta Ads",
    destination: "/services/meta-ads",
  },
  {
    title: "Web Design & Development",
    description:
      "For website and landing-page experiences that use product photography, brand videos and service visuals to explain the offer.",
    linkText: "Explore Web Design",
    destination: "/services/web-design",
  },
];

// ============================================================
// FAQS - practical questions about production, handover and
// boundaries. Terms are agreed per project rather than invented.
// ============================================================

export const contentCreationFaqs: FAQItem[] = [
  {
    question: "What does a content creation service include?",
    answer:
      "Depending on the brief, it can include shoot planning, product or brand photography, short-form video, service demonstrations, interviews, editing and channel-ready exports. The proposal should state the production days, deliverables, formats, revisions and any extra costs or responsibilities.",
  },
  {
    question: "Do you create both photos and videos?",
    answer:
      "The content scope can include photography, video or a combination of both. The right mix depends on what the business needs to show, where the assets will be used and the available production budget.",
  },
  {
    question: "Can you create Reels and short-form videos?",
    answer:
      "Short-form videos can be scoped for vertical social placements. The brief should define the concept, intended platform, runtime, captions, audio, number of edits and whether scripting or on-camera talent is required. Platform specifications should be checked before final export.",
  },
  {
    question: "Do you provide product photography for ecommerce?",
    answer:
      "Product photography can be planned around the views and details shoppers need, including primary images, close-ups and selected lifestyle scenes. Product count, styling, samples, background requirements, retouching and platform image rules should be agreed in advance.",
  },
  {
    question: "Do you handle scripting and creative direction?",
    answer:
      "The level of pre-production depends on the project. A simple shoot may need a brief and shot list; a more developed video may need concepts, scripts or storyboards. Confirm which planning deliverables are included before production begins.",
  },
  {
    question: "Can you shoot at our business location?",
    answer:
      "Location-based production can be discussed during scoping. Access, travel, working hours, lighting, noise, safety, permissions and the availability of the people or equipment being filmed all affect whether and how a location shoot can be planned.",
  },
  {
    question: "Do you provide models, actors or influencers?",
    answer:
      "Talent requirements should be identified in the brief. Casting, talent fees, influencer partnerships, usage rights, styling and availability may require separate coordination or costs; do not assume they are included in a standard shoot.",
  },
  {
    question: "Will you edit the content after the shoot?",
    answer:
      "Editing can be included when defined in the project scope. Agree on the number and length of final edits, colour and audio treatment, subtitles, graphics, music, review rounds and delivery formats before capture begins.",
  },
  {
    question: "Can one shoot produce content for multiple platforms?",
    answer:
      "Often, if the shoot is planned for those placements from the start. Some footage can be adapted into multiple formats, but framing, safe areas, pacing and aspect ratio may require extra coverage or separate edits. Not every master video will work equally well everywhere.",
  },
  {
    question: "Do you manage our social media after creating the content?",
    answer:
      "Content production and social media management are related but separate scopes. Publishing schedules, caption calendars, community management and channel reporting should be agreed as part of a social media service rather than assumed in the shoot fee.",
  },
  {
    question: "Do you create content for paid advertising?",
    answer:
      "Creative assets can be planned for paid campaigns, with distinct concepts and placement-specific versions where required. Advertising strategy, campaign setup, budget management, testing and performance reporting are separate activities unless included in the proposal.",
  },
  {
    question: "Will we receive raw footage and editable project files?",
    answer:
      "The handover should specify whether it includes final exports only, selected raw material, all camera originals or editable project files. Storage, file transfer, third-party assets and ongoing edit access should be agreed before production.",
  },
  {
    question: "Who owns the content and can we use it in ads?",
    answer:
      "Usage rights depend on the agreed contract and any third-party licences for talent, music, locations, stock assets or other materials. State the intended channels, paid-ad use, territories and usage period before production, and make sure the required permissions are documented.",
  },
  {
    question: "How much does content production cost?",
    answer:
      "Cost depends on the deliverables, shoot length, location, crew, talent, styling, equipment, editing complexity, number of versions and usage rights. A useful estimate starts with the intended outputs and production constraints rather than a generic price per video.",
  },
  {
    question: "What do you need from us before starting?",
    answer:
      "Share your business or product, target audience, the message you need to communicate, intended channels, deadline, existing brand references and any products or people that need to appear. We can use that to define the shoot brief and identify decisions that need to be made before production.",
  },
];

export const contentCreationFinalCta: ContentCreationFinalCtaData = {
  id: "final-cta",
  eyebrow: "START WITH THE CONTENT YOU NEED",
  h2: "Let's Plan a Shoot Around Your Next Business Goal",
  description:
    "Tell us what you need to show, who the content is for and where it will be used. We can define the production scope, required inputs and final deliverables before the shoot is scheduled.",
  primaryCta: {
    label: "Discuss Your Content Brief",
    href: "/contact-us",
  },
  supportingCopy:
    "A product, a service, a launch or a recurring content need is enough to start the conversation.",
};

// ============================================================
// IMPLEMENTATION NOTES - resolve route, production scope and
// component mapping before publication.
// ============================================================

export const contentCreationImplementationNotes = {
  pageThesis:
    "Content production for businesses that need planned, original photo and video assets designed around the message, the shoot constraints and the channels where the finished material will be used.",
  primaryBuyer:
    "Founders, ecommerce managers and marketing teams that need usable product, brand, service or campaign photography and video rather than a general promise to post more often.",
  searchIntent:
    "Buyers are evaluating content creation services, photo/video production, product photography and short-form video; they need to understand deliverables, production planning, shoot requirements, edits, formats and rights before asking for a quote.",
  differentiation:
    "Position this page around the path from brief to shoot to approved deliverables. Keep it distinct from graphic design (static visual assets), social media management (publishing and community operations), paid advertising (distribution and optimization), and AI automation/content generation.",
  proposedRoute: "/services/content-creation",
  sectionIdMap: {
    overview: "content-creation-overview",
    problems: "content-creation-problems",
    fit: "content-creation-fit",
    scope: "content-creation-scope",
    decisions: "content-creation-decisions",
    useCases: "content-creation-use-cases",
    process: "content-creation-process",
    readiness: "content-creation-readiness",
    whyBixeltek: "why-bixeltek",
    investment: "investment",
    faqs: "faqs",
    finalCta: "final-cta",
  },
  routeStatus:
    "Proposed, not verified. The live Bixeltek social media marketing page mentions strategic content creation and professional photo/video production, but the dedicated /services/content-creation route must be checked in the current repository and against any older content or production URL before setting the canonical.",
  canonicalStatus:
    "Canonical is a proposed route only. If a current content creation, photo/video production or social media page already targets the same intent, review its organic traffic, backlinks and internal links before consolidating or redirecting it.",
  scopeToConfirm: [
    "Confirm which production services Bixeltek currently delivers directly: studio product photography, location/brand shoots, short-form video, founder/team filming and service demonstrations.",
    "Confirm whether pre-production includes creative direction, scripting, storyboards, shot lists, location scouting, casting and production management, and which are separately scoped.",
    "Confirm editing deliverables: number of final assets, runtimes, aspect ratios, captions, motion graphics, language versions, colour/audio work and revision rounds.",
    "Confirm crew, camera/audio/lighting capability, studio access, locations, travel coverage, equipment hire and third-party costs before promising production logistics.",
    "Confirm policy for raw footage, source/project files, storage duration, usage rights, talent releases, music licences, paid-ad use and other commercial permissions.",
    "Confirm whether recurring monthly content batches, posting, caption writing, social media management or ad campaign management are actually part of the offer or separate services.",
    "Confirm the final CTA/contact route and related service routes against the current application router.",
  ],
  routeChecks: [
    "/social-media-marketing-agency-hyderabad is the currently indexed Bixeltek social media marketing page and mentions photo/video production; confirm this remains the preferred related route.",
    "/services/graphic-design is a proposed route from the companion graphic-design data file and must be verified before linking.",
    "/services/meta-ads and /services/web-design are candidate related-service routes; verify their actual paths in the repository.",
    "/contact-us is used as the final CTA based on the current content-file convention; verify the route in the application router.",
  ],
  contentGuardrails: [
    "Do not claim that Bixeltek has a dedicated studio, in-house crew, fixed equipment package, casting network, same-day edits or fixed turnaround until these facts are confirmed.",
    "Do not invent prices, number of shoot hours, outputs per package, revision rounds, client examples, performance results or production metrics.",
    "Do not imply content production includes ongoing social posting, community management, paid advertising, graphic design, brand strategy, SEO writing or AI generation by default.",
    "Do not promise that content will go viral or guarantee engagement, leads, sales or advertising performance.",
    "Confirm permissions and usage rights for identifiable people, locations, music and third-party content; client-supplied claims and regulated statements need approval from the responsible business owner.",
    "Platform export requirements change. Confirm current specs for each intended placement before production and export rather than embedding fixed dimensions or runtimes in general service copy.",
    "Use the six use cases as illustrative scenarios, not claims that Bixeltek has completed those exact projects.",
  ],
  researchNotes: [
    "Bixeltek's live social media marketing page describes strategic content creation and professional photo/video production; the new page should give these production capabilities a clearer, deliverable-led scope rather than reproducing broad social media management copy. https://bixeltek.com/social-media-marketing-agency-hyderabad",
    "Representative Hyderabad competitor service pages commonly group pre-production, production and post-production, including brief development, scripting/storyboards, capture, editing, sound and final delivery. This is market context, not evidence that every item is currently included in Bixeltek's offer. https://pscreatives.in/services/ ; https://www.productionx.in/",
    "Meta's Reels advertising guidance highlights vertical 9:16 framing and keeping key elements within safe zones for Reels placements. Confirm the current placement specifications for each campaign before final export. https://www.facebook.com/business/ads/facebook-instagram-reels-ads",
    "YouTube's official Shorts upload guidance allows square or vertical videos up to three minutes under the current stated rules. Platform rules can change; the page intentionally avoids hard-coding durations into service promises. https://support.google.com/youtube/answer/12779649?hl=en-IN",
  ],
  contentQualitySelfReview: {
    pageSpecificInsight:
      "The main angle is output-led production: planning for the assets required at each destination, instead of selling a shoot day or generic 'engaging content'.",
    sectionDifferentiation:
      "Problems describe production failure modes; fit qualifies when a shoot is the right intervention; scope defines deliverable families; decisions cover production trade-offs; readiness prevents avoidable gaps; FAQs clarify commercial and rights boundaries.",
    limitations:
      "Dedicated route, production logistics, exact deliverables, rights and package terms have not been verified in the repository and must be confirmed before publishing.",
    targetScore: 86,
  },
};
