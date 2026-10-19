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
// AI AUTOMATION - SPECIALIST SERVICE PAGE DATA
// Intended to sit beneath the existing Business Automation page.
// Proposed route: /services/automation/ai-automation
// Confirm route, interface contracts and included integrations
// against the current repository before publishing.
// ============================================================

export interface AIAutomationMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface AIAutomationPoint {
  title: string;
  description: string;
}

export interface AIAutomationDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface AIAutomationUseCase {
  title: string;
  situation: string;
  aiRole: string;
  control: string;
  signals: string[];
}

export interface AIAutomationWorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface AIAutomationProcessStage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface AIAutomationMetric {
  name: string;
  whatItShows: string;
  howToInterpret: string;
}

export interface AIAutomationWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: AIAutomationPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface AIAutomationFinalCtaData {
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

export const aiAutomationMetadata: AIAutomationMetadata = {
  title: "AI Automation Services | AI Workflows for Business | Bixeltek",
  description:
    "Connect AI to practical business workflows for document handling, request triage, knowledge access and structured follow-up-with validation, system integrations and human review where needed.",
  keywords: [
    "AI automation services",
    "AI workflow automation",
    "business process AI automation",
    "AI agent development services",
    "AI integration services",
    "intelligent workflow automation",
    "AI document processing",
    "AI business process automation",
  ],
  // Proposed child route; verify against the current router before release.
  canonical: "https://bixeltek.com/services/automation/ai-automation",
};

export const aiAutomationBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  { label: "Business Automation", href: "/services/automation" },
  {
    label: "AI Automation",
    href: "/services/automation/ai-automation",
  },
];

export const aiAutomationJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#ai-automation-overview" },
  { label: "Where AI Helps", href: "#ai-automation-problems" },
  { label: "Is AI the Right Fit?", href: "#ai-automation-fit" },
  { label: "What We Build", href: "#ai-automation-scope" },
  { label: "Implementation Decisions", href: "#ai-automation-decisions" },
  { label: "Use Cases", href: "#ai-automation-use-cases" },
  { label: "How It Works", href: "#ai-automation-workflow-model" },
  { label: "Safety & Measurement", href: "#ai-automation-controls" },
  { label: "Our Process", href: "#ai-automation-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO - lead with the distinction between fixed automation and AI.
// ============================================================

export const aiAutomationHero = {
  eyebrow: "AI AUTOMATION · INTELLIGENT WORKFLOWS · INTEGRATIONS",
  h1: "Use AI Where Business Work Needs More Than Fixed Rules",
  p1:
    "Some business tasks follow clear rules. Others require someone to interpret an email, understand a document, classify a request or decide which piece of information matters. AI automation can help with those variable steps-then pass the result into a controlled workflow.",
  p2:
    "Bixeltek helps connect AI-assisted tasks with the systems and people responsible for the next step. The starting point is the workflow, the information it uses and the decision it needs to make-not adding an AI agent simply because one is available.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Business Automation",
  secondaryLinkHref: "/services/automation",
  microcopy:
    "Bring one repeated task, the tools involved and the result you need. We can assess whether AI, ordinary workflow automation or a combination is the sensible approach.",
};

// ============================================================
// OVERVIEW - what AI adds, and what it does not replace.
// ============================================================

export const aiAutomationOverview = {
  id: "ai-automation-overview",
  eyebrow: "AI INSIDE A BUSINESS WORKFLOW",
  h2: "Put AI Into the Step That Needs Interpretation",
  intro:
    "AI automation combines a model's ability to interpret information with the rules, integrations and checkpoints that move work through a business. It is useful when the input varies, but the business still needs a defined and accountable next step.",
  body:
    "For example, AI may extract details from an incoming document, summarize a customer request or classify an enquiry. A workflow can then validate the output, create a draft or record, route it to the right team and request approval where needed. The system of record-not a generated answer-should remain authoritative for important business data.",
  points: [
    {
      title: "Interpret variable information",
      description:
        "Use AI for language, documents, summaries and classification where rigid rules struggle with different wording or formats.",
    },
    {
      title: "Keep execution controlled",
      description:
        "Use workflow rules and approved integrations to decide what happens next, rather than letting generated text directly trigger unrestricted actions.",
    },
    {
      title: "Make exceptions visible",
      description:
        "Send missing information, low-confidence outputs and sensitive decisions to a person instead of silently treating every result as correct.",
    },
  ],
  closingCopy:
    "The objective is not to replace every manual task with AI. It is to reduce avoidable handling while keeping the process understandable, testable and owned by the business.",
};

// ============================================================
// PROBLEMS - specific points where unstructured work creates friction.
// ============================================================

export const aiAutomationProblems: ProblemCard[] = [
  {
    title: "Important Details Are Buried in Emails and Documents",
    description:
      "Staff repeatedly read attachments, copy fields into systems and check whether key information is missing. AI can help extract or summarize the content, while validation rules and review protect the downstream record.",
  },
  {
    title: "Incoming Requests Do Not Fit a Fixed Form",
    description:
      "Customers describe the same need in different words, combine questions or leave out context. AI can classify the request and suggest a route, but unclear or out-of-scope cases need a fallback rather than a forced answer.",
  },
  {
    title: "People Keep Summarizing the Same Context",
    description:
      "Teams spend time turning long email threads, notes or support histories into a short handover. A scoped AI step can prepare a summary and preserve source links so the next person can verify important details.",
  },
  {
    title: "Rules Have Become Difficult to Maintain",
    description:
      "A growing set of keyword checks and exceptions may fail when language changes. AI may handle interpretation at a defined step, while deterministic rules still govern permissions, required fields and consequential actions.",
  },
  {
    title: "AI Experiments Sit Outside the Real Workflow",
    description:
      "A chatbot or prompt may produce a useful response, but staff still copy the output into the CRM, ticketing tool or operations system. Integration work is needed to make the result usable in the process-and to manage errors and ownership.",
  },
  {
    title: "Nobody Can Tell When the AI Needs Help",
    description:
      "Without clear fallback rules, a workflow may proceed with incomplete or incorrect output. A production-ready design defines validation, review thresholds, action limits and a record of what happened.",
  },
];

// ============================================================
// FIT - help buyers decide whether AI is justified.
// ============================================================

export const aiAutomationFit = {
  id: "ai-automation-fit",
  eyebrow: "WHEN AI AUTOMATION MAKES SENSE",
  h2: "Use AI for Variable Inputs, Not for Every Repeated Task",
  intro:
    "AI is most useful when a recurring workflow depends on interpreting language, documents or context that is difficult to cover with fixed rules. The task should still have a clear purpose, acceptable outputs and a defined way to handle uncertainty.",
  goodFit: [
    {
      title: "The input varies, but the required output is clear",
      description:
        "Examples include classifying enquiries, extracting fields from common document types or summarizing a long request into an agreed structure.",
    },
    {
      title: "People spend repeated time interpreting information",
      description:
        "The workflow happens often enough to evaluate whether AI reduces handling time without creating more correction work downstream.",
    },
    {
      title: "The AI can work within known boundaries",
      description:
        "The task has defined data sources, allowed actions, validation rules and a human fallback for cases it cannot reliably handle.",
    },
    {
      title: "There is a way to evaluate the result",
      description:
        "The team can compare outputs against reviewed examples and track both quality and the business outcome that matters.",
    },
  ],
  notAlwaysNeeded: {
    title: "When ordinary automation is the better choice",
    description:
      "If the process is predictable-such as copying a field, sending a scheduled reminder or moving a record when a known status changes-standard rules or an API integration may be cheaper, easier to test and more consistent. AI is not a benefit by itself if it adds cost or uncertainty without improving the workflow.",
  },
  poorFit: [
    "The process and ownership are still undefined.",
    "The required source data is unavailable or unreliable.",
    "An incorrect output could cause serious harm and no suitable review or control can be built.",
    "The task is too rare or simple to justify setup, evaluation and ongoing model costs.",
  ],
};

// ============================================================
// SCOPE - eight distinct types of AI-enabled implementation work.
// ============================================================

export const aiAutomationScope: ScopeCard[] = [
  {
    title: "Workflow Discovery & AI Task Selection",
    description:
      "Map the current process, inputs, decisions, handoffs and exceptions. Identify which step genuinely needs interpretation, what can stay rule-based and how the business will judge whether the change helped.",
  },
  {
    title: "Document & Form Information Extraction",
    description:
      "Extract agreed fields or summarize content from supported documents and submissions into a reviewable structure. Accuracy depends on document quality, layout variation, language, validation rules and the types of documents in scope.",
  },
  {
    title: "Request Classification & Intelligent Routing",
    description:
      "Classify incoming messages by topic, intent or urgency, then route them through defined rules. Low-confidence, contradictory or unsupported requests should be escalated rather than forced into a category.",
  },
  {
    title: "AI-Assisted Lead & Enquiry Handling",
    description:
      "Summarize enquiries, organize supplied details, identify missing information and suggest the next team or action. Any scoring or qualification criteria must be agreed with the business and should not present an AI estimate as a confirmed sales outcome.",
  },
  {
    title: "Internal Knowledge & Information Assistants",
    description:
      "Help staff find answers across approved business documents or knowledge sources, with access boundaries and source references where supported. The system must handle missing evidence honestly rather than inventing policy or company facts.",
  },
  {
    title: "Drafting, Summarization & Handover Preparation",
    description:
      "Prepare first drafts, case summaries, meeting notes or structured handovers from supplied context. Define what may be generated automatically, what requires editing and which messages must never be sent without approval.",
  },
  {
    title: "AI Connected to CRM & Business Systems",
    description:
      "Pass validated outputs into supported CRMs, ticketing tools, databases or internal applications through available connectors, APIs or webhooks. Integration feasibility depends on access, permissions, API limits and the quality of existing records.",
  },
  {
    title: "Validation, Human Review & Monitoring",
    description:
      "Add schema checks, business rules, review queues, exception paths, logs and failure notifications so teams can see what the workflow did and intervene when required. Exact controls depend on the risk and systems involved.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS - explain choices that change risk or cost.
// ============================================================

export const aiAutomationDecisions: AIAutomationDecisionItem[] = [
  {
    title: "AI or Rule-Based Automation?",
    context:
      "Rules handle predictable tasks; AI helps interpret varied text, documents and context.",
    consideration:
      "Use AI only where it adds enough value to justify its cost and ongoing evaluation.",
  },
  {
    title: "Workflow or AI Agent?",
    context:
      "Workflows follow fixed steps; agents can choose actions, making behaviour harder to predict.",
    consideration:
      "Start with a narrow task and limited tools. Use agents only when fixed workflows fall short.",
  },
  {
    title: "What Data Can AI Access?",
    context:
      "AI needs relevant context, but connected tools may expose sensitive business or customer data.",
    consideration:
      "Limit access to necessary data and permissions. Check provider data-handling policies before deployment.",
  },
  {
    title: "When Is Human Approval Needed?",
    context:
      "Errors in summaries are easier to correct than incorrect customer commitments or record changes.",
    consideration:
      "Require review for sensitive or high-impact actions until the workflow meets agreed quality standards.",
  },
];

// ============================================================
// USE CASES - illustrative workflows, not claims about past projects.
// ============================================================

export const aiAutomationUseCases: AIAutomationUseCase[] = [
  {
    title: "Enquiry Triage for Sales Teams",
    situation:
      "Enquiries arrive through forms and email with different wording and varying levels of detail.",
    aiRole:
      "Summarize the request, extract agreed fields and suggest a category or next question using the supplied message and approved business criteria.",
    control:
      "Validate required fields, route uncertain cases for review and let the CRM or workflow rules determine assignment and follow-up ownership.",
    signals: ["Review time per enquiry", "Classification correction rate", "Time to assigned owner"],
  },
  {
    title: "Document Intake & Data Preparation",
    situation:
      "Staff receive recurring documents and manually transfer key information into a business system.",
    aiRole:
      "Extract candidate fields into a defined schema and flag missing, ambiguous or conflicting information for review.",
    control:
      "Validate formats and required fields before writing to the system of record; retain a path back to the original document for checking.",
    signals: ["Fields accepted without correction", "Manual handling time", "Exception rate by document type"],
  },
  {
    title: "Customer Support Request Routing",
    situation:
      "Support messages contain mixed questions, incomplete context or requests that belong to different teams.",
    aiRole:
      "Classify the topic, summarize the issue and suggest a queue or draft response based on approved support material.",
    control:
      "Escalate complaints, sensitive account actions and low-evidence answers. The AI should not invent policy or claim an action has completed before the system confirms it.",
    signals: ["Routing correction rate", "Time to first human action", "Escalation rate"],
  },
  {
    title: "Internal Knowledge Retrieval",
    situation:
      "Employees spend time searching policies, process documents or product information spread across approved sources.",
    aiRole:
      "Retrieve relevant material and prepare an answer grounded in the available content, with source references where the implementation supports them.",
    control:
      "Respect access permissions and return an explicit no-answer or human handoff when the source material does not support a reliable response.",
    signals: ["Answer acceptance rate", "Unsupported-answer rate", "Time to find approved information"],
  },
  {
    title: "Sales & Service Handover Summaries",
    situation:
      "A new team member needs to understand a long conversation, ticket history or meeting notes before continuing the work.",
    aiRole:
      "Create a structured summary of the request, commitments, unresolved questions and next actions from supplied records.",
    control:
      "Keep the source available, distinguish stated facts from inferred suggestions and require review before sending commitments externally.",
    signals: ["Preparation time", "Missed-detail rate in review", "Handover rework"],
  },
  {
    title: "Operations Exception Handling",
    situation:
      "Most operational cases follow a normal process, but unusual requests or mismatched records need someone to interpret the situation.",
    aiRole:
      "Summarize the exception, compare supplied details against approved criteria and recommend a route or action for a person to review.",
    control:
      "Keep final authority with deterministic validation or an authorized person for financial, contractual, access or other high-impact actions.",
    signals: ["Time to resolve exceptions", "Recommendation acceptance rate", "Incorrect-action incidents"],
  },
];

// ============================================================
// WORKFLOW MODEL - describes the running system, not the project process.
// ============================================================

export const aiAutomationWorkflowModel = {
  id: "ai-automation-workflow-model",
  eyebrow: "HOW THE PIECES FIT TOGETHER",
  h2: "AI Interprets the Input; the Workflow Controls What Happens Next",
  intro:
    "A dependable AI workflow separates the part that needs interpretation from the parts that require predictable execution, validation and ownership.",
  steps: [
    {
      number: "01",
      title: "Trigger",
      description:
        "A form, inbox, document upload, CRM event or approved schedule starts the workflow.",
    },
    {
      number: "02",
      title: "Provide Scoped Context",
      description:
        "The system passes only the relevant record, document or approved knowledge to the AI step, subject to access rules.",
    },
    {
      number: "03",
      title: "Return a Defined Output",
      description:
        "The AI produces an agreed result such as a category, summary, extracted fields or recommended next step-not an unrestricted instruction to do anything.",
    },
    {
      number: "04",
      title: "Validate & Route",
      description:
        "Rules check the output and decide whether to continue, request clarification, ask for approval or send the case to a human.",
    },
    {
      number: "05",
      title: "Record the Outcome",
      description:
        "The workflow records the action, failure or handoff so the team can inspect results and correct recurring problems.",
    },
  ] as AIAutomationWorkflowStep[],
  closingCopy:
    "The AI can help interpret uncertainty. It should not remove the business rules, access controls or accountability that make the workflow dependable.",
};

// ============================================================
// SAFETY & MEASUREMENT - reliability is part of the deliverable.
// ============================================================

export const aiAutomationControls = {
  id: "ai-automation-controls",
  eyebrow: "BEFORE A WORKFLOW GOES LIVE",
  h2: "Test the Output, Limit the Actions and Keep a Human Fallback",
  intro:
    "A successful demo shows that an AI step can work. Production readiness requires evidence about failure cases, data access, action permissions and the cost of a wrong result.",
  controls: [
    {
      title: "Test against reviewed examples",
      description:
        "Create a representative set of normal, incomplete, ambiguous and out-of-scope cases. Compare the outputs against agreed acceptance criteria before expanding use.",
    },
    {
      title: "Validate before changing records",
      description:
        "Check required fields, allowed values, formats and business constraints in code or workflow rules rather than relying on the model to follow instructions every time.",
    },
    {
      title: "Restrict tools and permissions",
      description:
        "Give the workflow only the access needed for the task. Separate read access from write actions and place approval gates around sensitive or difficult-to-reverse actions.",
    },
    {
      title: "Define fallback and failure handling",
      description:
        "Specify what happens when data is missing, the model fails, an API times out, a limit is reached or the result falls outside the accepted range.",
    },
    {
      title: "Track quality and operating cost",
      description:
        "Review corrections, escalations, task completion, latency and model or platform usage costs. Re-test when prompts, models, sources or connected systems change.",
    },
  ],
  metrics: [
    {
      name: "Acceptance and correction rate",
      whatItShows:
        "How often a result is accepted as delivered versus edited or rejected by the person responsible for it.",
      howToInterpret:
        "Segment by task and input type; a single average can hide a category that needs different rules or should be excluded.",
    },
    {
      name: "Escalation and fallback rate",
      whatItShows:
        "How often a workflow requires clarification, human review or an alternate path.",
      howToInterpret:
        "A lower rate is not automatically better. Appropriate escalation can indicate that the system is refusing to guess in uncertain cases.",
    },
    {
      name: "Time per completed task",
      whatItShows:
        "Whether the end-to-end process takes less staff time after review and correction are included.",
      howToInterpret:
        "Compare similar cases and include downstream cleanup, not just the time saved in the AI step.",
    },
    {
      name: "Cost per accepted outcome",
      whatItShows:
        "The combined running cost of model usage, orchestration, integrations and human review for a usable result.",
      howToInterpret:
        "Track by workflow and volume. A cheap model call may still be expensive if it creates frequent rework.",
    },
    {
      name: "Business outcome",
      whatItShows:
        "Whether the workflow improves the objective it was built for, such as quicker routing or fewer manual handoffs.",
      howToInterpret:
        "Set the baseline and the measurement method before launch; do not infer business impact from AI usage volume alone.",
    },
  ] as AIAutomationMetric[],
  disclaimer:
    "These are measurement options, not promised results. The appropriate metrics depend on the workflow, available baseline data and risk of an incorrect output.",
};

// ============================================================
// PROCESS - each stage reduces a concrete implementation risk.
// ============================================================

export const aiAutomationProcess: AIAutomationProcessStage[] = [
  {
    number: "01",
    title: "Select One Useful Workflow",
    description:
      "Map the current task, how often it occurs, who owns it and where interpretation or manual handling slows it down. Compare an AI option with a simpler rules-based alternative.",
    deliverable: "A scoped workflow and a baseline to improve",
  },
  {
    number: "02",
    title: "Define Inputs, Outputs and Exceptions",
    description:
      "Agree on the data the workflow can use, the output structure, acceptance criteria, unsupported cases and decisions that must remain with a person.",
    deliverable: "A workflow specification and review rules",
  },
  {
    number: "03",
    title: "Check Data and Integrations",
    description:
      "Verify source quality, account permissions, API or connector access, data handling requirements and the system that remains authoritative for each record.",
    deliverable: "A confirmed integration and access plan",
  },
  {
    number: "04",
    title: "Prototype and Evaluate",
    description:
      "Test the AI step against representative cases, including ambiguous inputs and failure paths. Adjust the prompt, model, context or workflow rules based on recorded results.",
    deliverable: "An evaluated prototype and known limitations",
  },
  {
    number: "05",
    title: "Connect Controls and Release",
    description:
      "Add validation, approval steps, action limits, retry handling, error notifications and logs. Start with human review or limited exposure where the workflow risk calls for it.",
    deliverable: "A controlled workflow ready for agreed live use",
  },
  {
    number: "06",
    title: "Monitor and Refine",
    description:
      "Review accepted outputs, corrections, escalations, task time and running costs. Reassess when source data, business policy, integrations or model behaviour changes.",
    deliverable: "A handover plan and criteria for ongoing improvement",
  },
];

// ============================================================
// WHY BIXELTEK - grounded working principles, not unverified claims.
// ============================================================

export const aiAutomationWhyBixeltek: AIAutomationWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "AI Designed Around the Workflow It Needs to Improve",
  intro:
    "AI automation sits between your information, business rules, existing systems and the people responsible for the outcome. The implementation needs to account for all four-not just the model response.",
  points: [
    {
      title: "We Start With the Task",
      description:
        "Define the repeated work, current bottleneck and desired result before selecting an AI approach or tool.",
    },
    {
      title: "We Use AI Where It Adds Value",
      description:
        "Keep predictable steps rule-based and use AI for the interpretation or variation that fixed logic handles poorly.",
    },
    {
      title: "We Consider the Existing Systems",
      description:
        "Plan how inputs arrive, where verified data lives and how an accepted result reaches the next person or application.",
    },
    {
      title: "We Keep Important Actions Controlled",
      description:
        "Define what AI may read or propose, what the workflow may execute and which cases need human approval.",
    },
    {
      title: "We Define How Success Is Checked",
      description:
        "Choose practical quality and workflow measures before launch, including correction work and exceptions-not just successful runs.",
    },
    {
      title: "We Plan for Ownership After Release",
      description:
        "Document workflow logic, escalation paths and dependencies so the system can be inspected when tools or business rules change.",
    },
  ],
  closingCopy:
    "The purpose is a business process that works more reliably-not an AI demo that still leaves your team to do the same work around it.",
  ctaText: "Discuss an AI Workflow",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT - explain actual effort drivers, not arbitrary packages.
// ============================================================

export const aiAutomationInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Workflow Ambiguity & Exceptions",
    description:
      "A process with many exceptions, unclear policies or inconsistent decisions requires more discovery and evaluation than a well-defined task with a narrow set of outcomes.",
  },
  {
    title: "Source Data & Knowledge Quality",
    description:
      "Documents may need cleanup, access rules or source selection before an AI step can use them reliably. Poor inputs can increase review and correction work.",
  },
  {
    title: "Integration Depth",
    description:
      "A supported connector may be enough for a simple workflow. Custom APIs, multiple systems, authentication, rate limits and complex data mapping require more engineering.",
  },
  {
    title: "Required Reliability & Testing",
    description:
      "The risk of a wrong result determines how much test data, validation, human review and failure handling should be designed before release.",
  },
  {
    title: "Action Permissions & Governance",
    description:
      "Read-only assistance has a different risk profile from sending customer messages, updating records or triggering financial or contractual actions.",
  },
  {
    title: "Volume, Latency & Model Usage",
    description:
      "Usage volume, document size, number of model calls and response-time requirements affect recurring operating cost as well as the architecture.",
  },
  {
    title: "Monitoring & Ongoing Ownership",
    description:
      "The workflow may need run logs, alerts, prompt or model revisions, source updates, credential maintenance and recurring quality reviews. Confirm what support is included or separately scoped.",
  },
];

// ============================================================
// RELATED SERVICES - paths are based on current Bixeltek context;
// confirm all destinations against the repository before publishing.
// ============================================================

export const aiAutomationRelatedServices: RelatedServiceCard[] = [
  {
    title: "Business Automation & Integrations",
    description:
      "For lead routing, CRM workflows, notifications and repeatable process automation that may not need an AI model.",
    linkText: "Explore Business Automation",
    destination: "/services/automation",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Use evidence from the customer journey to identify friction when automated enquiry handling or follow-up is not translating into completed business actions.",
    linkText: "Explore Conversion Rate Optimization",
    destination: "/services/conversion-rate-optimization",
  },
  {
    title: "Mobile App Development",
    description:
      "When the workflow needs a custom mobile interface that connects to the underlying business process rather than integrations alone.",
    linkText: "Explore Application Development",
    destination: "/services/mobile-app-development",
  },
  {
    title: "Ecommerce Development",
    description:
      "For AI-enabled product, order or customer workflows that depend on the underlying store, checkout or commerce data model.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
];

// ============================================================
// FAQS - resolve remaining buyer questions without restating sections.
// ============================================================

export const aiAutomationFaqs: FAQItem[] = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines AI tasks-such as interpreting messages, extracting information or summarizing documents-with workflow logic and connected systems. The AI handles the part that needs interpretation; rules, permissions and people govern what happens next.",
  },
  {
    question: "How is AI automation different from business process automation?",
    answer:
      "Business process automation can follow defined triggers and rules without AI. AI automation adds a model where input is variable or requires interpretation. Many useful systems combine both, and a predictable task may not need AI at all.",
  },
  {
    question: "Do we need an AI agent, or is a workflow enough?",
    answer:
      "A fixed workflow is usually easier to control when the steps are known. An agent may be useful when the system needs to choose among approved tools or steps based on context. Start with the smallest approach that solves the task and expand only when the evidence supports it.",
  },
  {
    question: "Can AI automation connect to our existing CRM or business tools?",
    answer:
      "Potentially, if the required system exposes a suitable API, webhook or supported connector and the necessary access is available. The exact integration depends on the product, permissions, limits, data structure and desired actions, so it should be confirmed during discovery.",
  },
  {
    question: "Can AI read and process documents?",
    answer:
      "AI can help extract, classify or summarize supported document types. Reliability depends on the document format, quality, language and fields required. Important values should be validated, and uncertain cases should be reviewed before updating a system of record.",
  },
  {
    question: "How do you reduce incorrect AI outputs?",
    answer:
      "Use defined output formats, source constraints, validation rules, representative tests, review thresholds and fallback paths. These controls reduce risk but do not make every output error-free; the workflow should make mistakes and exceptions visible.",
  },
  {
    question: "Will AI send messages or update records automatically?",
    answer:
      "That depends on the agreed permissions and risk. A workflow may prepare a draft, update a low-risk field or execute an approved action. Customer commitments, sensitive changes and difficult-to-reverse actions should have explicit controls and human approval where appropriate.",
  },
  {
    question: "Can we keep a person involved in the workflow?",
    answer:
      "Yes. Human review can be built in for uncertain outputs, exceptions or sensitive actions. The workflow should define who reviews a case, what information they see and what happens if the case is rejected or no reviewer is available.",
  },
  {
    question: "Does AI automation require replacing our current software?",
    answer:
      "Not necessarily. Many projects connect to existing systems. A change or custom application may be needed if a required integration is unavailable, the existing process cannot support the workflow or the data and permissions are not suitable.",
  },
  {
    question: "How do you measure whether AI automation is working?",
    answer:
      "Define a baseline and track a combination of output quality, correction rate, escalation rate, time per completed task, running cost and the business outcome the workflow is meant to improve. A high number of AI runs alone does not show value.",
  },
  {
    question: "What happens when the AI cannot complete a task?",
    answer:
      "A well-defined workflow should have an alternate path for missing information, unsupported requests, service outages or failed validation. Depending on the case, it can ask for clarification, retry within limits, notify an owner or send the task for human review.",
  },
  {
    question: "How is sensitive business data handled?",
    answer:
      "Data handling depends on the selected provider, deployment, connected sources and contractual requirements. Before implementation, confirm what information is sent to each service, retention and access settings, permissions, logging and applicable legal or industry obligations.",
  },
  {
    question: "What affects the cost of an AI automation project?",
    answer:
      "The main factors are workflow complexity, data quality, integration depth, testing and review needs, action permissions, usage volume and ongoing monitoring. Model usage and third-party platform fees may be separate from implementation and support costs.",
  },
  {
    question: "Can we start with one workflow and expand later?",
    answer:
      "That is often the most practical approach. Start with a clearly scoped, measurable task, test it against real examples and expand only when quality, cost and operational ownership are understood.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const aiAutomationFinalCta: AIAutomationFinalCtaData = {
  id: "final-cta",
  eyebrow: "START WITH ONE WORKFLOW",
  h2: "Find the Task Where AI Can Make a Practical Difference",
  description:
    "Tell us what your team repeats, what information it works with and which systems are involved. We can help assess whether AI, rule-based automation or a combination is appropriate-and what should be validated before it goes live.",
  primaryCta: {
    label: "Discuss an AI Workflow",
    href: "/contact-us",
  },
  supportingCopy:
    "A useful starting point is one task, its current handling time, the tools it touches and the cost of getting the result wrong.",
};

// ============================================================
// IMPLEMENTATION NOTES & RESEARCH BASIS
// ============================================================

export const aiAutomationImplementationNotes = {
  pageBoundary:
    "The live /services/automation page covers broader CRM, lead routing, communication workflows, integrations and repeatable business workflows. This specialist page should expand the AI-workflows topic with deeper guidance on interpretation, evaluation and controlled action-not duplicate the parent page's full scope.",
  routeStatus:
    "Proposed route and canonical: /services/automation/ai-automation. This is a recommendation, not a verified live route. Check the current sitemap, Next.js routing structure, parent navigation and SEO migration requirements before release.",
  scopeToConfirm: [
    "Confirm which AI models/providers, workflow platforms and integration tools Bixeltek currently implements and supports before adding product logos or naming them as delivered capabilities.",
    "Confirm whether the service includes custom application/API development, knowledge retrieval, document extraction, CRM write access, messaging channels, hosting, ongoing monitoring and post-launch support, or whether any are separately scoped.",
    "Confirm security, privacy, data residency, retention and regulatory requirements for each client's systems and selected AI provider. Do not make blanket compliance guarantees.",
    "Do not add case studies, client metrics, cost savings, accuracy rates, certifications or delivery timelines without approved evidence.",
  ],
  sectionIdsForRenderer: {
    overview: "ai-automation-overview",
    problems: "ai-automation-problems",
    fit: "ai-automation-fit",
    scope: "ai-automation-scope",
    decisions: "ai-automation-decisions",
    useCases: "ai-automation-use-cases",
    workflowModel: "ai-automation-workflow-model",
    controls: "ai-automation-controls",
    process: "ai-automation-process",
    whyBixeltek: "why-bixeltek",
    investment: "investment",
    relatedServices: "related-services",
    faqs: "faqs",
    finalCta: "final-cta",
  },
  recommendedSectionOrder: [
    "Hero",
    "Overview",
    "Problems",
    "AI Fit Assessment",
    "Service Scope",
    "Implementation Decisions",
    "Use Cases",
    "Workflow Model",
    "Safety & Measurement",
    "Process",
    "Why Bixeltek",
    "Investment",
    "Related Services",
    "FAQs",
    "Final CTA",
  ],
  researchBasis: [
    {
      title: "OpenAI - A Practical Guide to Building Agents (January 15, 2026)",
      url: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
      relevance:
        "Distinguishes conventional workflows from agents, describes when agent-style systems may be useful, and recommends bounded tools, guardrails, evaluation and human intervention.",
    },
    {
      title: "OpenAI - A Business Leader's Guide to Working with Agents",
      url: "https://cdn.openai.com/business-guides-and-resources/a-business-leaders-guide-to-working-with-agents.pdf",
      relevance:
        "Explains the difference between deterministic workflow automation, LLM-powered steps and agents; supports using simpler automation when it is sufficient.",
    },
    {
      title: "n8n - Human-in-the-loop for AI tool calls",
      url: "https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools",
      relevance:
        "Provides a concrete workflow pattern for requiring approval before sensitive tool actions. Treat as a design reference, not evidence that Bixeltek uses n8n.",
    },
    {
      title: "NIST - AI Risk Management Framework resources",
      url: "https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-resources",
      relevance:
        "Provides a risk-management reference for evaluating, governing and monitoring AI use. This page does not claim NIST certification or compliance.",
    },
    {
      title: "Competitor page review - NextPage AI Automation Services",
      url: "https://nextpageit.com/ai-automation-services",
      relevance:
        "Signals buyer interest in connecting AI to existing CRM/ERP workflows, human review and operational support. Competitor claims were not adopted as Bixeltek proof.",
    },
    {
      title: "Competitor page review - Digital Pilots AI Automation",
      url: "https://digitalpilots.in/ai-automation",
      relevance:
        "Highlights integration, approval, fallback and logging as practical buyer concerns. Used for coverage comparison only, not as technical authority.",
    },
  ],
};
