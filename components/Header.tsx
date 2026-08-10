"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [{ label: "Case Studies", href: "#work" }];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80; // Detect end of Hero Section (100vh)

      setIsScrolled(scrollY > 10);
      setIsPastHero(scrollY > heroHeight);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Dynamic Background style based on scroll position
  const getHeaderBgClass = () => {
    if (isPastHero) {
      // Solid Navy match when scrolled down to content sections
      return "bg-[#18153d]/90 backdrop-blur-md border-white/10 shadow-lg py-1.5";
    }
    if (isScrolled) {
      // Glassy Video overlay style while still inside Hero Section
      return "bg-black/40 backdrop-blur-md border-white/10 shadow-md py-1.5";
    }
    // Top of page (pure transparent)
    return "bg-transparent border-white/5 py-2";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${getHeaderBgClass()}`}
    >
      <nav
        ref={navRef}
        className="flex items-center justify-between px-6 md:px-12 max-w-[1280px] mx-auto relative h-14 font-sans"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="bg-white text-[#0d0d0d] text-xs font-black w-8 h-8 rounded-lg flex items-center justify-center tracking-tighter shadow-sm">
            ac
          </span>

          <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-0.5">
            <span>after</span>
            <span
              style={{
                WebkitTextStroke: "1px #ffffff",
                color: "transparent",
                opacity: 0.9,
              }}
            >
              concept
            </span>
          </span>
        </Link>

        {/* Desktop Nav Link */}
        <div className="hidden md:flex items-center gap-8 text-[14.5px] font-medium leading-none">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-gray-300/80 hover:text-white transition-colors duration-200 py-1 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action CTA Button ("Get Started") */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="bg-[#e05628] hover:bg-[#cb491f] text-white px-5 py-2.5 rounded-lg text-[14px] font-semibold tracking-tight transition-all duration-200 shadow-md hover:shadow-orange-950/30 hover:-translate-y-0.5 inline-flex items-center justify-center leading-none"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col px-8 py-6 gap-4 bg-[#18153d]/95 backdrop-blur-xl border-b border-white/10 font-sans">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-[#e05628] text-white px-5 py-3 rounded-lg text-sm font-semibold tracking-tight shadow-md"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
