"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Land Design Logo Component
function LandDesignLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/landdesign-card-logo-cropped.png"
        alt="Land Design"
        width={160}
        height={56}
        className="h-12 sm:h-14 w-auto object-contain"
        priority
      />
    </div>
  );
}

// Travly Logo SVG Component
function TravlyLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Origami modern flight symbol */}
        <path d="M4 16L28 4L19 28L14 18L4 16Z" fill="#0F172A" />
        <path d="M14 18L28 4L16 16L14 18Z" fill="#334155" />
        <path d="M14 18L19 28L16 20L14 18Z" fill="#64748B" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-slate-900 lowercase font-sans">
        travly
      </span>
    </div>
  );
}

// Generic Logo Badge for other case studies
function GenericBrandLogo({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0)}
      </div>
      <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
        {name}
      </span>
    </div>
  );
}

interface CaseItem {
  id: string;
  name: string;
  category: string;
  logo: React.ReactNode;
  description: string;
  href: string;
  metrics?: { label: string; value: string };
  badge?: string;
}

const allCaseStudies: CaseItem[] = [
  {
    id: "landdesign",
    name: "Land Design",
    category: "Real Estate Tech",
    logo: <LandDesignLogo />,
    description:
      "We automated contract data collection across six US jurisdictions, transforming awarded contract information into structured Excel sheets and a web dashboard for real estate business intelligence.",
    href: "/case-studies/landdesign",
    metrics: { label: "US Jurisdictions", value: "6" },
    badge: "Featured Build"
  },
  {
    id: "travly",
    name: "travly",
    category: "Travel",
    logo: <TravlyLogo />,
    description:
      "We designed and built a structured agile-driven engineering system that tripled Travly's 5-person team output.",
    href: "/case-studies/travly",
    metrics: { label: "Team Velocity", value: "3×" },
    badge: "AI Engineering"
  },
  {
    id: "swiftcart",
    name: "SwiftCart",
    category: "Retail Tech",
    logo: <GenericBrandLogo name="SwiftCart" color="#0ea5e9" />,
    description:
      "Real-time inventory sync across 12 warehouses without a single spreadsheet, quadrupling order throughput with zero overselling.",
    href: "/case-studies/swiftcart",
    metrics: { label: "Throughput", value: "4×" },
    badge: "Retail Operations"
  },
  {
    id: "northbridge-clinic",
    name: "Northbridge Clinic",
    category: "Healthcare",
    logo: <GenericBrandLogo name="Northbridge" color="#10b981" />,
    description:
      "Patient scheduling and appointment confirmations automated end-to-end across three clinics, saving 27 hours of admin work every week.",
    href: "/case-studies/northbridge-clinic",
    metrics: { label: "Time Saved", value: "27hrs/wk" },
    badge: "HealthTech"
  },
  {
    id: "ledgerly",
    name: "Ledgerly",
    category: "FinTech",
    logo: <GenericBrandLogo name="Ledgerly" color="#6366f1" />,
    description:
      "Automated multi-bank reconciliation engine and financial dashboard that condensed a 3-day month-end close down to just 2 hours.",
    href: "/case-studies/ledgerly",
    metrics: { label: "Close Time", value: "3d → 2h" },
    badge: "FinTech Automation"
  },
  {
    id: "loop-logistics",
    name: "Loop Logistics",
    category: "Logistics",
    logo: <GenericBrandLogo name="Loop Logistics" color="#f97316" />,
    description:
      "Dynamic fleet route optimization algorithm that reduced overall fuel expenditures by 18% without requiring any additional dispatch hires.",
    href: "/case-studies/loop-logistics",
    metrics: { label: "Fuel Saved", value: "18%" },
    badge: "Supply Chain"
  }
];

const categories = ["All", "Real Estate Tech", "Travel", "Retail Tech", "Healthcare", "FinTech", "Logistics"];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases = activeCategory === "All"
    ? allCaseStudies
    : allCaseStudies.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION: Creating Change for Millions Across the World
          Matches exact dark navy holographic globe reference from user screenshot
          ========================================================================= */}
      <section 
        className="hero relative w-full overflow-hidden bg-[#041033] pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center"
      >
        {/* Subtle holographic ambient glows behind globe */}
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-4 right-[25%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[500px] lg:min-h-[560px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left z-20">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14] mb-5">
                Creating Change for Millions<br />
                Across the World<span className="inline-block w-2.5 sm:w-3 h-[1.05em] bg-white ml-2 align-middle animate-pulse" />
              </h1>

              <p className="text-sm sm:text-base lg:text-[15px] text-white/80 leading-relaxed font-normal max-w-[480px]">
                From building leading travel search engines like KAYAK to partnering with global learning providers like edX, Arbisoft has spent the last two decades devising solutions and building products that drive positive change for people worldwide.
              </p>
            </div>

            {/* Right Visual Column: Holographic Globe & 3D Floating Tiles */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-[640px] xl:max-w-[720px] 2xl:max-w-[760px] aspect-[544/513] select-none transition-transform duration-700 ease-out hover:scale-[1.015]">
                <Image
                  src="/images/creating-change-globe.png"
                  alt="Creating change holographic globe with global tech solutions"
                  fill
                  priority
                  className="object-contain object-center lg:object-right drop-shadow-[0_0_40px_rgba(30,100,240,0.25)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN SECTION: Creating value for your business
          Matches the clean white 2-column section with Alfred & Travly cards
          ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[#ffffff]">
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header / Sticky Pitch */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="inline-block text-blue-600 font-bold text-xs uppercase tracking-wider mb-3">
                Proven Track Record
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Creating value for your business
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                We believe in the possibility of what can be. Our experts have been providing solutions over the last decade that have helped businesses like yours expand at a rapid scale.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Zero Spreadsheet Overhead</div>
                  <div className="text-xs text-slate-500 mt-0.5">Engineered systems built for scalable production.</div>
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Cards Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {filteredCases.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 group"
                  >
                    <div>
                      {/* Top Row: Logo & Badge */}
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                        {item.logo}
                        {item.badge && (
                          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Description Text - Verbatim matching the mock */}
                      <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal mb-8 min-h-[72px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action: Solid Blue Button connecting directly to the Case Study */}
                    <div className="pt-4 mt-auto">
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0a76db] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#0861b5] hover:shadow-md hover:shadow-blue-500/20 active:translate-y-0.5 group-hover:bg-[#0969c3]"
                      >
                        <span>View Case Study</span>
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCases.length === 0 && (
                <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm">No case studies found in this category.</p>
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="mt-3 text-blue-600 text-xs font-semibold underline"
                  >
                    View All Case Studies
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="w-full bg-slate-900 text-white py-20 px-6 sm:px-10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Want results like these for your business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your technical challenges and operational bottlenecks. We&apos;ll show you the exact architecture and systems we&apos;d build for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
            >
              Learn About Our Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
