"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Work with us", href: "#ladder" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const underlineRef = useRef<HTMLSpanElement>(null);

  // 1. Scroll effect for navbar height compression
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. ScrollSpy via Intersection Observer
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  // 3. Update Shared Underline Position & Width dynamically
  useEffect(() => {
    const currentTargetHref = hoveredSection || activeSection;
    const activeElement = itemsRef.current[currentTargetHref];

    if (activeElement && underlineRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      underlineRef.current.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
      underlineRef.current.style.opacity = "1";
    } else if (underlineRef.current && !currentTargetHref) {
      underlineRef.current.style.opacity = "0";
    }
  }, [activeSection, hoveredSection]);

  // Handle Resize recalculations
  useEffect(() => {
    const handleResize = () => {
      const currentTargetHref = hoveredSection || activeSection;
      const activeElement = itemsRef.current[currentTargetHref];
      if (activeElement && underlineRef.current) {
        underlineRef.current.style.transform = `translate3d(${activeElement.offsetLeft}px, 0, 0)`;
        underlineRef.current.style.width = `${activeElement.offsetWidth}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, hoveredSection]);

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
        className="flex items-center justify-between px-8 max-w-[1160px] mx-auto relative h-14"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="logo large font-space font-semibold text-xl tracking-tight flex items-center leading-none"
        >
          <span className="text-indigo-900">after</span>
          <span className="concept-outline text-transparent">concept</span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex items-center gap-9 text-[14.5px] font-medium text-charcoal-soft relative py-0 my-0 leading-none"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            const isHovered = hoveredSection === item.href;
            const isSelected = isHovered || (isActive && !hoveredSection);

            return (
              <Link
                key={item.href}
                href={`/${item.href}`}
                ref={(el) => {
                  itemsRef.current[item.href] = el;
                }}
                onMouseEnter={() => setHoveredSection(item.href)}
                className={`transition-colors duration-200 inline-block pb-0.5 pt-0 ${
                  isSelected
                    ? "text-indigo-900 font-semibold"
                    : "hover:text-indigo-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Shared Sliding Underline (Dark Indigo Blue) */}
          <span
            ref={underlineRef}
            className="absolute -bottom-1 left-0 h-[2px] bg-indigo-900 rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-0"
            style={{
              willChange: "transform, width",
            }}
          />
        </div>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="bg-ember-600 text-ember-100 px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all duration-200 hover:bg-indigo-900 hover:-translate-y-px inline-flex items-center justify-center leading-none"
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
        <div className="md:hidden flex flex-col px-8 py-4 gap-3 bg-[rgba(246,244,238,0.98)] border-b border-line">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal-soft hover:text-indigo-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 text-center bg-ember-600 text-ember-100 px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
