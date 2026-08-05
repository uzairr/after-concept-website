"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [{ label: "Case Studies", href: "#work" }];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Scroll effect for navbar background compression
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ease-out border-b border-line py-2 ${
        isScrolled
          ? "bg-[rgba(246,244,238,0.85)] backdrop-blur-md shadow-sm"
          : "bg-[rgba(246,244,238,0.95)]"
      }`}
    >
      <nav
        ref={navRef}
        className="flex items-center justify-between px-8 max-w-[1160px] mx-auto relative h-14 font-sans"
        aria-label="Main Navigation"
      >
        {/* Logo Section: Existing 'ac' badge + Text Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          {/* Existing AC Mark / Logo Icon */}
          <span className="bg-[#2e2a5e] text-white text-sm font-bold w-9 h-9 rounded-lg flex items-center justify-center leading-none tracking-tight shadow-sm">
            ac
          </span>

          {/* New Logo Text Style (after = filled/bold, concept = outlined) */}
          <span className="text-xl font-bold tracking-tight text-[#2e2a5e] flex items-center">
            <span>after</span>
            <span
              style={{
                WebkitTextStroke: "1px #2e2a5e",
                color: "transparent",
              }}
            >
              concept
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links (#3c3489 text & underline on hover) */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium relative py-0 my-0 leading-none">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="group relative text-[#64748b] hover:text-[#3c3489] transition-colors duration-200 inline-flex flex-col items-center py-2 font-medium"
            >
              <span>{item.label}</span>
              {/* Underline Bar with #3c3489 color */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3c3489] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left" />
            </Link>
          ))}
        </div>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="bg-ember-600 text-ember-100 px-6 py-2.5 rounded-lg text-[14px] font-medium tracking-tight transition-all duration-200 hover:bg-indigo-900 hover:-translate-y-px inline-flex items-center justify-center leading-none"
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
            className={`w-6 h-0.5 bg-indigo-900 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-indigo-900 transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-indigo-900 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col px-8 py-4 gap-3 bg-[rgba(246,244,238,0.98)] border-b border-line font-sans">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#64748b] hover:text-[#3c3489] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 text-center bg-ember-600 text-ember-100 px-5 py-2.5 rounded-lg text-sm font-medium tracking-tight"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
