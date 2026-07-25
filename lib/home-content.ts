export const missionContent = {
  label: "OUR MISSION",
  quote:
    "We are committed to building powerful digital products — and delivering them in the most effective way possible.",
} as const;

export type ServiceCard = {
  title: string;
  description: string;
};

export const servicesPreview: ServiceCard[] = [
  {
    title: "Software Development",
    description:
      "End-to-end applications, APIs, and platforms engineered for scale and clarity.",
  },
  {
    title: "WordPress Development",
    description:
      "Custom themes, performance, and integrations that feel as good as they look.",
  },
  {
    title: "Generative AI & LLMs",
    description:
      "Practical AI features — retrieval, agents, and guardrails your users can trust.",
  },
  {
    title: "Machine Learning",
    description:
      "Models, pipelines, and MLOps that turn your data into reliable outcomes.",
  },
];

export type WorkItem = {
  id: string;
  title: string;
  tag: string;
};

export const workPreview: WorkItem[] = [
  { id: "atlas-commerce", title: "Atlas Commerce", tag: "Next.js · Node" },
  { id: "northwind-crm", title: "Northwind CRM", tag: "React · PostgreSQL" },
  { id: "pulse-health", title: "Pulse Health", tag: "WordPress · API" },
  { id: "signal-grid", title: "Signal Grid", tag: "Python · ML" },
  { id: "draftsmith", title: "Draftsmith", tag: "LLM · TypeScript" },
  { id: "meridian-os", title: "Meridian OS", tag: "Go · Kubernetes" },
];

export const ctaBannerContent = {
  headline: "Ready to Build Something Great?",
  cta: "START A CONVERSATION",
} as const;

// ─────────────────────────────────────────────────────────────────
// Home page data used in app/page.tsx
// ─────────────────────────────────────────────────────────────────

export type Service = {
  title: string;
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Custom Software",
    body: "Scalable web platforms, internal tools, and backend systems designed around your business logic — not a generic SaaS template. We've shipped fintech backends handling 10K+ daily transactions.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Cloud"],
  },
  {
    title: "AI Integrations",
    body: "Production AI — not demos. We build LLM assistants, RAG pipelines, and automation workflows that handle real user load and deliver measurable outcomes.",
    tags: ["LLMs", "RAG", "LangChain", "OpenAI", "Generative AI"],
  },
  {
    title: "Product Design",
    body: "Interface and system design that earns user trust from first login. We work from information architecture to polished UI, building design systems that scale.",
    tags: ["Figma", "Design Systems", "UX Research", "Competitive Analysis"],
  },
  {
    title: "Growth Engineering",
    body: "After launch is where most agencies disappear. We stay embedded — instrumenting analytics, running A/B tests, and iterating so your product compounds.",
    tags: ["Analytics", "A/B Testing", "SEO", "DevOps"],
  },
];

export type ProcessStep = {
  phase: string;
  title: string;
  desc: string;
};

export const processSteps: ProcessStep[] = [
  {
    phase: "Discover",
    title: "Align on what matters",
    desc: "We dig into your business context before touching the keyboard — user goals, technical constraints, timelines, and what success actually looks like. No assumptions, no surprises.",
  },
  {
    phase: "Design",
    title: "Map the product",
    desc: "Information architecture, user flows, and interface decisions are locked before engineering starts. You see and approve the full product before a line of code is written.",
  },
  {
    phase: "Build",
    title: "Focused two-week sprints",
    desc: "Weekly demos, transparent progress tracking, and zero-surprise deliveries. You're embedded with the team throughout — not waiting on status reports.",
  },
  {
    phase: "Scale",
    title: "Launch and compound",
    desc: "We monitor, optimise, and continue iterating after launch. Most clients move into a growth retainer because the work that matters most starts after the product ships.",
  },
];

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  outcome: string;
  stack: string[];
  imageSrc: string;
  imageSrcDark?: string;
  imageAlt: string;
  href: string;
};

export type MainProject = FeaturedProject;

export type MiniProject = {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  href: string;
};

export const featuredProject: FeaturedProject = {
  id: "evt-saas",
  title: "EVT SaaS",
  category: "AI SaaS",
  year: "2024",
  description:
    "Greenfield AI operations platform with intelligent automation workflows. The scope grew mid-engagement driven by the team's delivery quality and communication.",
  outcome: "→ Greenfield to live beta in 10 weeks",
  stack: ["OpenAI", "LangChain", "TypeScript", "FastAPI"],
  imageSrc: "/images/work/Gemini_Generated_Image_u3wlx8u3wlx8u3wl.png",
  imageSrcDark: "/images/work/Gemini_Generated_Image_u3wlx8u3wlx8u3wl.png",
  imageAlt: "MBC project screenshot",
  href: "/work",
};

export const mainVerticalProjects: MainProject[] = [
  {
    id: "landdesign",
    title: "Land Design",
    category: "Real Estate",
    year: "2024",
    description:
      "Digital platform for land planning and property visualisation with GIS tooling. The client needed a full-stack solution to manage land parcels, zoning data, and interactive maps.",
    outcome: "→ 30% faster land parcel processing time",
    stack: ["TypeScript", "React", "PostgreSQL"],
    imageSrc: "/images/work/Land-Design.png",
    imageAlt: "Land Design project logo",
    href: "/work",
  },
  {
    id: "bultra-bank",
    title: "Bultra Bank",
    category: "Fintech",
    year: "2024",
    description:
      "A challenger bank entering a new market needed a full digital banking experience — from secure auth and transaction APIs to a customer-facing dashboard and onboarding flow.",
    outcome: "↑ 40% reduction in onboarding drop-off",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    imageSrc: "/images/work/bultra-bank-12.png",
    imageAlt: "Bultra Bank project screenshot",
    href: "/work",
  },
];

export const miniProjects: MiniProject[] = [
  {
    id: "mercato",
    title: "Mercato",
    category: "DevOps",
    desc: "Node.js performance overhaul and AWS infrastructure rebuild for high-throughput SaaS.",
    tags: ["Node.js", "AWS", "Docker"],
    href: "/work",
  },
  {
    id: "medicore",
    title: "Medicore",
    category: "Healthcare",
    desc: "Digital health platform for patient management and telemedicine services.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "/work",
  },
  {
    id: "skyroutes",
    title: "SkyRoutes",
    category: "Logistics",
    desc: "Full-stack route optimisation tool with real-time tracking and driver assignment.",
    tags: ["React", "Node.js", "Maps API"],
    href: "/work",
  },
  {
    id: "finova",
    title: "Finova",
    category: "Fintech",
    desc: "Savings and investment SaaS with multi-currency wallet and automated rebalancing.",
    tags: ["TypeScript", "Stripe", "WebSockets"],
    href: "/work",
  },
  {
    id: "learnaxis",
    title: "LearnAxis",
    category: "EdTech",
    desc: "AI-assisted learning platform with structured content generation and adaptive quizzes.",
    tags: ["Next.js", "OpenAI", "RAG"],
    href: "/work",
  },
  {
    id: "corecloud",
    title: "CoreCloud",
    category: "Infra",
    desc: "Last-minute infrastructure rescue and deployment pipeline rebuild for major launch.",
    tags: ["AWS", "Kubernetes", "Next.js"],
    href: "/work",
  },
];
