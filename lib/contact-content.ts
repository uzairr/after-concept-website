export const contactHeroContent = {
  eyebrow: "REACH OUT",
  headline: ["Let's Build", "Something Together"],
  subtext: "We read every message. Reach out and let's talk.",
} as const;

export const contactInfo = {
  title: "Get In Touch",
  paragraph:
    "Whether you have a brief, a rough idea, or a full roadmap — we would love to hear from you. No pitch decks required: just a real conversation.",
  email: "contact@afterconcept.io",
  location: "Karachi, Pakistan",
  responseTime: "Within 2 business days",
} as const;

export const serviceInterestOptions = [
  { value: "", label: "Select a focus" },
  { value: "software", label: "Software Development" },
  { value: "wordpress", label: "WordPress" },
  { value: "gen-ai", label: "Generative AI & LLMs" },
  { value: "ml", label: "Machine Learning" },
  { value: "general", label: "General / Not sure yet" },
] as const;

export const budgetOptions = [
  { value: "", label: "Select a range" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 – $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
  { value: "discuss", label: "Prefer to discuss" },
] as const;

export type FaqItem = { id: string; question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    id: "timeline",
    question: "How soon can you start?",
    answer:
      "We typically book 2–4 weeks ahead. For urgent or smaller scopes, we will let you know what is possible on our calendar.",
  },
  {
    id: "engagement",
    question: "What does an engagement look like?",
    answer:
      "We usually begin with a short discovery phase, then a written proposal with scope, timeline, and pricing. Once approved, we work in weekly cycles with demos and clear communication.",
  },
  {
    id: "remote",
    question: "Do you work remotely?",
    answer:
      "Yes. We collaborate with teams globally using async updates and scheduled calls — whatever fits your timezone and workflow.",
  },
  {
    id: "nda",
    question: "Will you sign an NDA?",
    answer:
      "We are happy to sign a mutual NDA before discussing sensitive details. Send us your standard or we can share ours.",
  },
];
