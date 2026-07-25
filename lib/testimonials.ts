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
    text: "After Concept built our entire digital banking experience from the ground up — secure auth, transaction APIs, customer dashboard, and onboarding flow. They shipped a production-grade fintech product in weeks, and our onboarding drop-off rate fell 40% post-launch. Exceptional technical depth and clear communication throughout.",
    name: "Marco Visibelli",
    role: "Head of Engineering",
  },
  {
    id: "evt-saas",
    company: "EVT SaaS",
    category: "E-Commerce",
    text: "The team laid the foundations of an ambitious product with remarkable clarity. When our brief grew in scope, we restructured into a larger contract together — a sign of genuine mutual trust built over the engagement. I recommend After Concept without hesitation.",
    name: "Michael",
    role: "Founder",
  },
  {
    id: "skyroutes",
    company: "SkyRoutes",
    category: "Travel",
    text: "We came to After Concept at the eleventh hour — 48 hours before a major launch. The team stepped in, diagnosed the problem, fixed it, and delivered on time with no shortcuts. That's the kind of partner you keep around. We've since moved them onto a monthly retainer.",
    name: "Noah Kim",
    role: "CTO",
  },
  {
    id: "medicore",
    company: "MediCore",
    category: "Healthcare",
    text: "After Concept's TypeScript and front-end expertise was evident from the very first sprint — clean, efficient, well-structured code with best practices followed throughout. Communication was seamless, deadlines were met, and the team was proactive in suggesting improvements we hadn't thought to ask for.",
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
    text: "The turnaround time was impressive — they delivered ahead of schedule and even provided helpful notes for the handover. If you're looking for a reliable technical partner, After Concept is exactly that. Exceptional quality at a fair price. We're already planning the next phase together.",
    name: "Emily Carter",
    role: "Product Lead",
  },
  {
    id: "corecloud",
    company: "CoreCloud",
    category: "Technology",
    text: "When our deployment pipeline collapsed 48 hours before a major client demo, After Concept stepped in with no ramp-up time needed. They diagnosed the infrastructure issue, rebuilt the CI/CD pipeline, and had us live before the deadline. We moved them onto a monthly retainer immediately after.",
    name: "Jordan Hale",
    role: "Head of Infrastructure",
  },
  {
    id: "mercato-devops",
    company: "Mercato",
    category: "E-Commerce",
    text: "After Concept's Node.js and AWS expertise transformed our platform performance. They identified critical bottlenecks, implemented scalable solutions across our deployment pipeline, and significantly improved our system reliability — beyond what we believed achievable in that timeframe.",
    name: "Ivy Patel",
    role: "Head of Engineering",
  },
  {
    id: "nexus-retail",
    company: "Nexus Retail",
    category: "E-Commerce",
    text: "Working with After Concept was a game changer for our online storefront. They completely revamped our checkout flow, decreasing cart abandonment by over 30% within the first month. The team's attention to detail and conversion-focused design was incredible.",
    name: "Sarah Jenkins",
    role: "VP of Digital",
  },
  {
    id: "horizon-health",
    company: "Horizon Health",
    category: "Healthcare",
    text: "Building a HIPAA-compliant portal is no small task, but After Concept handled the complexity with ease. They delivered a secure, highly performant application that our staff loves using daily. Their deep understanding of modern security standards gave us complete peace of mind.",
    name: "Dr. Marcus Vance",
    role: "Chief Medical Officer",
  },
  {
    id: "acme-logistics",
    company: "Acme Logistics",
    category: "Technology",
    text: "We needed a real-time fleet tracking dashboard built from scratch. After Concept used WebSockets and React to build a blazing-fast interface that handles thousands of concurrent updates without breaking a sweat. It's easily the best vendor experience we've had.",
    name: "Elena Rodriguez",
    role: "Director of Operations",
  },
  {
    id: "lumina-learning",
    company: "Lumina",
    category: "Ed-Tech",
    text: "After Concept helped us pivot our entire platform from a monolith to a sleek microservices architecture. They guided our internal team through the transition, leaving us with a codebase that is an absolute joy to maintain. A true 10x engineering partner.",
    name: "David Chen",
    role: "CTO",
  },
  {
    id: "payflow",
    company: "PayFlow",
    category: "Fintech",
    text: "When scaling our payment processing engine, we hit massive performance walls. After Concept came in, optimized our database queries, and implemented a robust caching layer that reduced our latency by 80%. They literally saved our Q4 targets.",
    name: "Samir Hassan",
    role: "Lead Architect",
  },
  {
    id: "wanderlust-escapes",
    company: "Wanderlust",
    category: "Travel",
    text: "The beautiful, animated booking experience After Concept designed for us directly translated to a massive bump in user engagement. They didn't just write code; they cared deeply about the user experience and the final product's aesthetics.",
    name: "Chloe Dubois",
    role: "Founder",
  }
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
