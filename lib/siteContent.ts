/**

 * Content for the header/hero refactor (reference: digital-agency).

 * Phase 0: source of truth for copy used in header/hero components.
 * Testimonials copy: @/lib/testimonials (Phase 0).

 */



export const agency = {

  name: "After Concept",

  nameUpper: "AFTER CONCEPT",

  tagline: "If you can imagine it, we can build it.",

  email: "hello@afterconcept.com",

  metaDescription:

    "After Concept builds modern websites and web apps with JavaScript and Python, major frameworks and libraries, plus generative AI and machine learning.",

} as const;



export const hero = {

  /** Stable section id on home (not "about" — that route is /about) */

  sectionId: "hero",

  /** Hero headline — one string per visual line (2 / 3 / 1 words) */
  headlineLines: ["We Deliver", "Products SMEs", "Actually Need"],

  rotatingWords: [

    "Fintech",

    "HealthTech",

    "CRM Automation",

    "Agency SaaS",

    "Business Automation"

  ],

  subtext:

    "After Concept builds production-ready products for founders with validated ideas; no team required. We embed as part of your team to refine concepts, and design the full UX .You focus on vision and customers. We bring the product to life.",

  primaryCta: { label: "Start a Project", href: "/contact" },

  secondaryCta: { label: "View Our Work", href: "/work" },

  trustedLabel: "Trusted by leading brands.",

  /** Placeholder strip — replace with real logos/names in a later pass */

  trustedBrands: ["Fintech", "Vertex", "Nova", "Helix", "Orion"],

  /** Dummy client names — hero bottom marquee */

  marqueeCompanies: [
    "Bultra Bank",
    "Faraway Yachting",
    "Nkosi & Associates."
  ],

} as const;



/** Home page stats — used in stats section and header marquee */

export const homeStats = [

  { value: "50+", label: "Projects Delivered" },

  { value: "3+", label: "Years Experience" },

  { value: "4", label: "Core Services" },

  { value: "100%", label: "Client Satisfaction" },

] as const;



export type HomeStat = (typeof homeStats)[number];



export function formatStatsMarquee(stats: readonly HomeStat[]): string {

  return stats.map((stat) => `${stat.value} ${stat.label}`).join(" — ");

}



export function formatCompanyMarquee(companies: readonly string[]): string {

  return companies.join("  ·  ");

}



/** Theme storage key — must match ThemeToggle (Phase 2) */

export const THEME_STORAGE_KEY = "agency-theme" as const;


