"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HeaderBrand } from "@/components/layout/HeaderBrand";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  headerCta,
  headerNavDesktop,
  headerNavMobile,
} from "@/lib/header-nav";
import { useResolvedTheme } from "@/lib/useResolvedTheme";

const navLinkClass = "site-header-nav-link transition-colors hover:text-highlight";
const navLinkActiveClass = "site-header-nav-link--active text-highlight";

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
      ? "var(--header-bg-solid)"
      : isScrolled
        ? "var(--header-bg-solid)"
        : "var(--header-bg-transparent)";

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
        className="site-header fixed left-0 top-0 z-50 w-full"
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

        <nav className="relative bg-base px-6 py-4 md:px-10" aria-label="Main">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8">
            <HeaderBrand />

            <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.12em] lg:flex">
              {headerNavDesktop.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${navLinkClass} ${isActivePath(pathname, item.href) ? navLinkActiveClass : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <ThemeToggle />
              <Link
                href={headerCta.href}
                className="cta-sharp px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] no-underline"
              >
                {headerCta.label}
              </Link>
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
                  <a href="mailto:hello@afterconcept.io" className="mt-1 block text-sm font-medium text-theme-accent hover:underline">
                    hello@afterconcept.io
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-8 h-8 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
