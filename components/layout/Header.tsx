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
                className="site-header-nav-link inline-flex border-2 border-line-strong px-3 py-2 text-xs uppercase tracking-[0.18em]"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-drawer"
              >
                Menu
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
              className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col border-l border-line bg-base/95 backdrop-blur-md p-8 shadow-2xl lg:hidden"
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
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
