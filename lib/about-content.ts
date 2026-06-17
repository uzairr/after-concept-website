export const aboutHeroContent = {
  eyebrow: "WHO WE ARE",
  headline: ["We Are", "After Concept"],
} as const;

export const aboutStoryContent = {
  label: "Our Story",
  lead:
    "After Concept was built on a single belief: great software has the power to change everything. We are a digital agency specializing in Software Development, WordPress, Generative AI, and Machine Learning — helping businesses transform bold ideas into working, scalable products.",
  body:
    "We work as one studio — designers, engineers, and strategists in the same room — with curiosity, honesty, and a bias for shipping. Every engagement is a partnership: we listen first, move with clarity, and measure success by what ships and how it performs in the real world.",
  /** Picsum seed for the Our Story image */
  imageSeed: "about-our-story-studio",
} as const;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Creative Director",
    initials: "SC",
  },
  {
    id: "marcus-webb",
    name: "Marcus Webb",
    role: "Engineering Lead",
    initials: "MW",
  },
  {
    id: "elena-voss",
    name: "Elena Voss",
    role: "Product Strategy",
    initials: "EV",
  },
  {
    id: "james-okonkwo",
    name: "James Okonkwo",
    role: "ML & AI",
    initials: "JO",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "WordPress & Experience",
    initials: "PN",
  },
];

export const valuesContent = [
  {
    title: "Craft",
    description:
      "We sweat the details — from typography to latency — so what we ship feels inevitable, not improvised.",
  },
  {
    title: "Clarity",
    description:
      "Complex problems deserve plain language, honest timelines, and roadmaps everyone can understand.",
  },
  {
    title: "Impact",
    description:
      "We build for outcomes: adoption, revenue, and trust — not vanity metrics or shelf-ware.",
  },
] as const;
