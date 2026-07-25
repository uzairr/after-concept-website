/**
 * Content for the header/hero refactor (reference: digital-agency).
 *
 * Phase 0: source of truth for copy used in header/hero components.
 * Testimonials copy: @/lib/testimonials (Phase 0).
 */

export const agency = {
  name: "After Concept",
  nameUpper: "AFTER CONCEPT",
  tagline: "If you can imagine it, we can build it.",

  /** Canonical contact email — use this everywhere; do not hard-code elsewhere */
  email: "contact@afterconcept.io",

  /** Ready-to-use mailto href */
  emailHref: "mailto:contact@afterconcept.io",

  metaDescription:
    "After Concept builds production-ready digital products for founders — custom software, AI integrations, product design, and growth engineering.",
} as const;

/**
 * Social media links — update to real profile URLs before launch.
 * These are the single source of truth; referenced by Header and Footer.
 */
export const social = {
  linkedin: "https://www.linkedin.com/company/afterrconcept/",
  instagram: "https://www.instagram.com/afterconcept",
  facebook: "https://www.facebook.com/afterconcept",
} as const;

export const hero = {
  /** Stable section id on home (not "about" — that route is /about) */
  sectionId: "hero",

  /** Hero headline — one string per visual line */
  headlineLines: ["We Deliver", "Products SMEs", "Actually Need"],

  rotatingWords: [
    "Fintech",
    "HealthTech",
    "CRM Automation",
    "Agency SaaS",
    "Business Automation",
  ],

  subtext:
    "After Concept builds production-ready products for founders with validated ideas; no team required. We embed as part of your team to refine concepts and design the full UX. You focus on vision and customers. We bring the product to life.",

  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },

  trustedLabel: "Trusted by leading brands.",
  trustedBrands: ["Fintech", "Vertex", "Nova", "Helix", "Orion"],

  /** Client names — hero bottom marquee */
  marqueeCompanies: [
    "Bultra Bank",
    "Faraway Yachting",
    "Nkosi & Associates",
    "EVT SaaS",
    "Land Design",
    "SkyRoutes",
    "MediCore",
    "Finova",
  ],
} as const;

/**
 * Home page stats — SINGLE source of truth.
 * Used in HeroSection counter strip, siteContent marquee, etc.
 */
export const homeStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+",  label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
] as const;

export type HomeStat = (typeof homeStats)[number];

export function formatStatsMarquee(stats: readonly HomeStat[]): string {
  return stats.map((stat) => `${stat.value} ${stat.label}`).join(" — ");
}

export function formatCompanyMarquee(companies: readonly string[]): string {
  // white-space: pre in CSS ensures these spaces never collapse
  return companies.join("   ·   ") + "   ·   ";
}

/** Theme storage key — must match ThemeToggle */
export const THEME_STORAGE_KEY = "agency-theme" as const;
