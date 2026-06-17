/**
 * Header navigation config for the digital-agency-style Header (Phase 2+).
 * Routes only — mega menus disabled per Phase 0 spec.
 */

export const headerLayout = {
  /** Marquee + nav — matches digital-agency layout padding */
  totalHeightPx: 108,
  enableMegaMenus: false,
  enableThemeToggle: true,
} as const;

export type HeaderNavLink = {
  label: string;
  href: string;
};

/** Desktop order mirrors reference; Solutions → /services until dedicated page exists */
export const headerNavDesktop: HeaderNavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

/** Mobile drawer — includes Services + Solutions; no Industries on main site */
export const headerNavMobile: HeaderNavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Get Started",
  href: "/contact",
} as const;

/** Paths under /public/images/brand/ */
export const brandLogos = {
  /** Light mark on dark header (dark theme) */
  onDark: "/images/brand/AC_LogoWhite.svg",
  /** Dark mark on light header (light theme) */
  onLight: "/images/brand/AC_LogoBlack.svg",
} as const;

export const headerLogo = {
  href: "/",
  alt: "After Concept",
  /** Intrinsic size hint for next/image; display size via CSS */
  width: 120,
  height: 40,
  ...brandLogos,
} as const;
