/**
 * Barrel export for header/hero refactor (Phase 2+).
 * Phase 0: no UI imports yet — use for convenient imports when implementing.
 */
export { agency, hero, homeStats, formatStatsMarquee, THEME_STORAGE_KEY } from "@/lib/siteContent";
export { themeInitScript } from "@/lib/theme-init";
export { HeroSection } from "@/components/sections/HeroSection";
export { ClientTestimonialsSection } from "@/components/sections/ClientTestimonialsSection";
export { Header } from "@/components/layout/Header";
export { HeaderBrand } from "@/components/layout/HeaderBrand";
export { ThemeToggle } from "@/components/ThemeToggle";
export {
  headerLayout,
  headerNavDesktop,
  headerNavMobile,
  headerCta,
  headerLogo,
  brandLogos,
} from "@/lib/header-nav";
export {
  testimonialsSection,
  featuredTestimonial,
  featuredTestimonialId,
  testimonialTabs,
  testimonialCategories,
  testimonials,
  filterTestimonialsByTab,
  formatTestimonialAttribution,
  getTestimonialAvatarUrl,
  type Testimonial,
  type TestimonialTab,
  type TestimonialCategory,
} from "@/lib/testimonials";
