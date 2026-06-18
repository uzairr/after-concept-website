/**
 * Client testimonials — content + types.
 * UI: @/components/sections/ClientTestimonialsSection
 *
 * Styling (digital-agency / hero refactor):
 * - Section: testimonial-stripes, bg-base, border-line, bg-theme-surface
 * - Accent: border-theme-accent, bg-theme-accent, text-theme-accent
 * - Type: font-heading / font-display, text-foreground, text-muted, text-faint
 * - Buttons: btn-sharp
 */

import { picsumImage } from "@/lib/images";

export const testimonialCategories = [
  "Technology",
  "E-Commerce",
  "Travel",
  "Healthcare",
  "Fintech",
  "Ed-Tech",
] as const;

export type TestimonialCategory = (typeof testimonialCategories)[number];

export const testimonialTabs = ["All", ...testimonialCategories] as const;

export type TestimonialTab = (typeof testimonialTabs)[number];

export type Testimonial = {
  id: string;
  company: string;
  category: TestimonialCategory;
  /** Card quote */
  text: string;
  /** Pull-quote for featured block only — omit on other entries */
  featuredQuote?: string;
  name: string;
  role: string;
  /** Path under /public; falls back to stable Picsum avatar */
  image?: string;
};

export const testimonialsSection = {
  sectionId: "testimonials",
  eyebrow: "CLIENT TESTIMONIALS",
  title: "What Our Clients Say About Us",
} as const;

/** Single source for the featured block — must match a testimonials[].id */
export const featuredTestimonialId = "bultra-bank" as const;

export const testimonials: Testimonial[] = [
  {
    id: "bultra-bank",
    company: "Bultra Bank",
    category: "Technology",
    text: "After Concept's Node.js expertise and understanding of our performance bottlenecks transformed the Mercato platform. They identified critical issues, implemented scalable solutions, and kept us informed throughout. Reliability and scalability improved beyond what we'd thought possible in that timeframe.",
    name: "Marco Visibelli",
    role: "Head of Engineering",
  },
  {
    id: "evt-saas",
    company: "EVT SaaS",
    category: "E-Commerce",
    text: "The team laid the foundations of an ambitious product with remarkable clarity. When our brief grew in scope, we restructured into a larger contract together a sign of genuine mutual trust built over the engagement. I recommend After Concept without hesitation.",
    name: "Michael",
    role: "Founder",
  },
  {
    id: "skyroutes",
    company: "SkyRoutes",
    category: "Travel",
    text: "We came to After Concept at the eleventh hour 48 hours before a major launch. The team stepped in, diagnosed the problem, fixed it, and delivered on time with no shortcuts. That's the kind of partner you keep around. We've since moved them onto a monthly retainer.",
    name: "Noah Kim",
    role: "CTO",
  },
  {
    id: "medicore",
    company: "MediCore",
    category: "Healthcare",
    text: "After Concept's TypeScript and front-end expertise was evident from the very first sprint clean, efficient, well-structured code with best practices followed throughout. Communication was seamless, deadlines were met, and the team was proactive in suggesting improvements we hadn't thought to ask for.",
    name: "Justin Cheng",
    role: "CTO",
  },
  {
    id: "finova",
    company: "Finova",
    category: "Fintech",
    text: "After Concept understood exactly what Finova needed from our very first call and adapted as requirements evolved. The final product matched our vision precisely, and the communication throughout was first-class. Looking forward to continuing the relationship into our next growth phase.",
    name: "Liam Walker",
    role: "Founder",
  },
  {
    id: "learnaxis",
    company: "LearnAxis",
    category: "Ed-Tech",
    text: "The turnaround time was impressive they delivered ahead of schedule and even provided helpful notes for the handover. If you're looking for a reliable technical partner, After Concept is exactly that. Exceptional quality at a fair price. We're already planning the next phase together.",
    name: "Emily Carter",
    role: "Product Lead",
  },
  {
    id: "corecloud",
    company: "CoreCloud",
    category: "Technology",
    text: "We came to After Concept at the eleventh hour 48 hours before a major launch. The team stepped in, diagnosed the problem, fixed it, and delivered on time with no shortcuts. That's the kind of partner you keep around. We've since moved them onto a monthly retainer.",
    name: "Jordan Hale",
    role: "Next.js Developer",
  },
  {
    id: "mercato-devops",
    company: "Mercato",
    category: "E-Commerce",
    text: "After Concept's Node.js expertise and understanding of our performance bottlenecks transformed the Mercato platform. They identified critical issues, implemented scalable solutions, and kept us informed throughout. Reliability and scalability improved beyond what we'd thought possible in that timeframe.",
    name: "Ivy Patel",
    role: "AWS Cloud & DevOps Backend Developer",
  },
  {
    id: "mercato-devops-2",
    company: "Mercato",
    category: "E-Commerce",
    text: "You did an outstanding job as our AWS Cloud & DevOps Backend Developer, demonstrating deep expertise in Node.js and cloud optimization for our SaaS platform. He efficiently streamlined our deployment pipelines, resolved performance bottlenecks, and implemented scalable solutions. His proactive problem-solving, excellent communication, and dedication to delivering high-quality work were evident throughout the project. Zakriya’s contributions significantly improved our platform's reliability and scalability. We highly recommend Zakriya for any backend or DevOps-related tasks and look forward to collaborating with him again in the future!",
    name: "Ivy Patel",
    role: "AWS Cloud & DevOps Backend Developer",
  },
  {
    id: "mercato-nodejs",
    company: "Mercato",
    category: "E-Commerce",
    text: "You has been absolutely outstanding in optimizing our Node.js application. His deep understanding of performance bottlenecks, asynchronous programming, and scalability solutions was evident from the very beginning. He not only identified critical areas for improvement but also implemented solutions that significantly enhanced the speed and reliability of our system.What sets you apart is his proactive approach, excellent communication skills, and attention to detail. He kept us updated throughout the process, explaining technical concepts clearly and providing actionable recommendations for future improvements. We couldn’t be happier with his work and highly recommend him to anyone in need of a skilled and reliable Node.js performance expert. Thank you, Zakriya, for delivering above and beyond our expectations!",
    name: "Ivy Patel",
    role: "AWS Cloud & DevOps Backend Developer",
  },
];

function resolveFeaturedEntry(): Testimonial {
  const entry = testimonials.find((t) => t.id === featuredTestimonialId);
  if (!entry) {
    throw new Error(`Featured testimonial id "${featuredTestimonialId}" not found`);
  }
  return entry;
}

const featuredEntry = resolveFeaturedEntry();

/** Derived from testimonials[] — keeps featured + card copy in sync */
export const featuredTestimonial = {
  quote: featuredEntry.featuredQuote ?? featuredEntry.text,
  name: featuredEntry.name,
  role: featuredEntry.role,
  company: featuredEntry.company,
} as const;

export function formatTestimonialAttribution(name: string, role: string): string {
  return `${name}, ${role}`;
}

export function getTestimonialAvatarUrl(item: Pick<Testimonial, "id" | "image">): string {
  if (item.image) return item.image;
  return picsumImage(`ac-testimonial-${item.id}`, 80, 80);
}

export function filterTestimonialsByTab(
  tab: TestimonialTab,
  items: readonly Testimonial[] = testimonials
): Testimonial[] {
  if (tab === "All") return [...items];
  return items.filter((item) => item.category === tab);
}
