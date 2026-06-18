/**
 * Site config (footer, work page) and footer nav links.
 * Header: `lib/header-nav.ts` + `components/layout/Header.tsx`
 * Hero copy: `lib/siteContent.ts`
 */
export const siteConfig = {
  name: "After Concept",
  nameDisplay: "AFTER CONCEPT",
  tagline: "You focus on vision and customers. We bring the product to life.",
  /** Footer column — two lines max */
  footerDescription:
    "After Concept builds production-ready products for founders with validated ideas; no team required. We embed as part of your team to refine concepts, and design the full UX ",
  copyrightYear: 2026,
} as const;

export type NavItem = {
  href: string;
  label: string;
  variant?: "default" | "contact";
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Get in touch", variant: "contact" },
];

export type SocialLink = {
  name: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://twitter.com" },
];

/* —— Work page —— */

export type WorkFilterId = "all" | "software" | "wordpress" | "gen-ai" | "ml";

export type WorkProjectCategory = Exclude<WorkFilterId, "all">;

export type WorkProject = {
  id: string;
  title: string;
  category: WorkProjectCategory;
  /** Top-left tag */
  categoryLabel: string;
  techTags: string[];
  /** Taller card on md+ for mosaic */
  tall?: boolean;
};

export const workFilters: { id: WorkFilterId; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "software", label: "SOFTWARE" },
  { id: "wordpress", label: "WORDPRESS" },
  { id: "gen-ai", label: "GEN AI" },
  { id: "ml", label: "ML" },
];

export const workProjects: WorkProject[] = [
  {
    id: "meridian-os",
    title: "Meridian OS",
    category: "software",
    categoryLabel: "SOFTWARE",
    techTags: ["Next.js", "Node.js", "PostgreSQL"],
    tall: true,
  },
  {
    id: "draftsmith",
    title: "Draftsmith",
    category: "gen-ai",
    categoryLabel: "GEN AI",
    techTags: ["OpenAI", "LangChain", "TypeScript"],
  },
  {
    id: "bloom-commerce",
    title: "Bloom Commerce",
    category: "wordpress",
    categoryLabel: "WORDPRESS",
    techTags: ["WooCommerce", "ACF", "PHP"],
    tall: true,
  },
  {
    id: "pulse-health",
    title: "Pulse Health",
    category: "wordpress",
    categoryLabel: "WORDPRESS",
    techTags: ["Headless", "REST", "WP Engine"],
  },
  {
    id: "signal-grid",
    title: "Signal Grid",
    category: "ml",
    categoryLabel: "ML",
    techTags: ["PyTorch", "FastAPI", "Pandas"],
  },
  {
    id: "atlas-runtime",
    title: "Atlas Runtime",
    category: "software",
    categoryLabel: "SOFTWARE",
    techTags: ["React", "GraphQL", "Kubernetes"],
  },
  {
    id: "northwind-api",
    title: "Northwind API",
    category: "software",
    categoryLabel: "SOFTWARE",
    techTags: ["Python", "REST", "Redis"],
  },
  {
    id: "vector-lab",
    title: "Vector Lab",
    category: "ml",
    categoryLabel: "ML",
    techTags: ["Computer Vision", "TensorFlow", "CUDA"],
    tall: true,
  },
  {
    id: "echo-agent",
    title: "Echo Agent",
    category: "gen-ai",
    categoryLabel: "GEN AI",
    techTags: ["RAG", "Anthropic", "Vector DB"],
  },
];