"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HeaderBrand } from "@/components/layout/HeaderBrand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  headerCta,
  headerNavDesktop,
  headerNavMobile,
} from "@/lib/header-nav";
import { useResolvedTheme } from "@/lib/useResolvedTheme";
import { agency, social } from "@/lib/siteContent";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const navLinkClass = "site-header-nav-link text-foreground font-medium transition-colors hover:text-highlight";
const navLinkActiveClass = "site-header-nav-link--active text-highlight font-semibold";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const resolvedTheme = useResolvedTheme();
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const headerBackground =
    resolvedTheme === "dark"
      ? "rgba(11, 15, 26, 0.75)"
      : isScrolled
        ? "rgba(248, 250, 252, 0.85)"
        : "rgba(248, 250, 252, 0)";

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="site-header fixed left-0 top-0 z-50 w-full backdrop-blur-md"
        animate={{
          backgroundColor: headerBackground,
          borderBottomColor:
            resolvedTheme === "dark" || isScrolled ? "var(--header-border)" : "transparent",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}
      >
        {/* Top stats marquee — disabled for now; restore when needed */}
        {/* <div className="site-header-marquee border-b border-line bg-base text-[11px] uppercase tracking-[0.16em]">
          <div className="marquee">
            <div className="marquee-track">
              <span>{marqueeText}</span>
              <span aria-hidden>{marqueeText}</span>
            </div>
          </div>
        </div> */}

        <nav className="relative px-6 py-4 md:px-12" aria-label="Main">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8">
            <HeaderBrand />

            <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.12em] lg:flex">
              {headerNavDesktop.map((item) => (
                <MagneticButton key={item.label} className="px-4 py-3">
                  <Link
                    href={item.href}
                    className={`${navLinkClass} ${isActivePath(pathname, item.href) ? navLinkActiveClass : ""} block`}
                  >
                    {item.label}
                  </Link>
                </MagneticButton>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <ThemeToggle />
              <MagneticButton>
                <Link
                  href={headerCta.href}
                  className="cta-sharp px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] no-underline"
                >
                  {headerCta.label}
                </Link>
              </MagneticButton>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="site-header-nav-link inline-flex items-center justify-center border-2 border-line-strong p-2"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-drawer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu overlay"
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "var(--overlay)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              id="mobile-nav-drawer"
              className="fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-sm flex-col overflow-y-auto border-l border-line bg-base/95 backdrop-blur-md p-8 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-6 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <HeaderBrand textClassName="font-display text-xl font-bold uppercase tracking-[0.14em]" />
                  <button
                    type="button"
                    className="site-header-nav-link flex h-8 w-8 items-center justify-center rounded-full border border-line-strong hover:border-highlight hover:text-highlight transition-all"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-[11px] leading-[1.6] text-muted uppercase tracking-[0.06em]">
                  Production‑ready products for founders.
                </p>
              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                }}
                className="space-y-1 mt-6"
              >
                {headerNavMobile.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: 16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center justify-between py-3.5 font-display text-[15px] font-semibold uppercase tracking-[0.12em] no-underline transition-all duration-200 border-b border-line/30 ${
                        isActivePath(pathname, item.href) ? "text-highlight" : "text-foreground hover:text-highlight"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-highlight">
                        &rarr;
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto pt-8 border-t border-line/50 flex flex-col gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Get in Touch</p>
                  <a href={agency.emailHref} className="mt-1 block text-sm font-medium text-theme-accent hover:underline">
                    {agency.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <FaFacebook size={16} />
                  </a>
                </div>
                <Link
                  href={headerCta.href}
                  onClick={() => setMobileOpen(false)}
                  className="cta-sharp w-full text-center py-3.5 text-xs font-semibold uppercase tracking-[0.18em] no-underline rounded-lg"
                >
                  {headerCta.label}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
