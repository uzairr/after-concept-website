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
