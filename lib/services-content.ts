export const servicesHeroContent = {
  eyebrow: "WORK WITH US",
  headline: ["Enhance Your Project", "With Expert Engineering"],
  subtext:
    "After Concept is available for select projects. Send us your vision and we will handle the rest.",
  cta: "GET IN TOUCH FOR A QUOTE",
} as const;

export type ServiceRow = {
  /** Stable id for imagery / anchors */
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const servicesDetail: ServiceRow[] = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "We design and ship production-grade applications — from crisp frontends to resilient APIs — with performance, security, and maintainability baked in from day one.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "REST",
      "GraphQL",
    ],
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    description:
      "Custom themes, headless architectures, and commerce flows that load fast, rank well, and stay easy for your team to operate.",
    tags: [
      "Custom themes",
      "WooCommerce",
      "Headless CMS",
      "ACF",
      "PHP",
    ],
  },
  {
    id: "generative-ai-llms",
    title: "Generative AI & LLMs",
    description:
      "Practical AI features grounded in your data — retrieval, agents, evaluation, and guardrails that behave responsibly in production.",
    tags: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Anthropic Claude",
      "Hugging Face",
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "From experimentation to deployment: models, pipelines, and monitoring that turn signals into reliable outcomes.",
    tags: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "FastAPI",
      "Pandas",
      "Computer Vision",
    ],
  },
] as const;

export type ProcessStep = {
  n: string;
  title: string;
  description: string;
  /** Picsum seed for step visual */
  imageSeed: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery",
    imageSeed: "svc-process-discovery",
    description:
      "We align on goals, constraints, and success metrics — then map the shortest path to value.",
  },
  { 
    n: "02",
    title: "Proposal",
    imageSeed: "svc-process-proposal",
    description:
      "You get a clear scope, timeline, and pricing — no black boxes, no surprise scope creep.",
  },
  {
    n: "03",
    title: "Build",
    imageSeed: "svc-process-build",
    description:
      "Weekly demos, tight feedback loops, and engineering discipline until the work is shippable.",
  },
  {
    n: "04",
    title: "Launch",
    imageSeed: "svc-process-launch",
    description:
      "We deploy, harden, and hand off with docs and support so your team can own what we built.",
  },
];

/** Decorative image for the services page CTA band */
export const servicesCtaImageSeed = "services-cta-collaboration";
