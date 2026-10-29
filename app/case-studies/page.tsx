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

// Internal Angular Project Logo Component
function AngularProjectLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#5A7A8A]">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        Internal Angular
      </span>
    </div>
  );
}

// Healthcare SaaS Project Logo Component
function HealthcareSaaSLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#4A8AB8]">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6v12m-6-6h12" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        Healthcare SaaS
      </span>
    </div>
  );
}

// Angular Project — New Features Logo Component
function AngularNewFeaturesLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#5A7A8A]">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        Angular Project
      </span>
    </div>
  );
}

// Internal Angular Front-End Project Logo Component
function AngularFrontendLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#5A7A8A]">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        Angular Front-End
      </span>
    </div>
  );
}

// Connecting Apps to Third-Party Services via REST Logo Component
function RestApiIntegrationLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#4F46E5]">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        Connecting Apps
      </span>
    </div>
  );
}

// BigQuery Data Pipeline Logo Component
function BigQueryPipelineLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-sm bg-[#0284C7]">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      </div>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
        BigQuery Pipeline
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
  tags?: string[];
  statsPreview?: string;
  bgColor?: string;
  textColor?: string;
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
    id: "internal-angular-project",
    name: "Internal Angular Project",
    category: "Web Development",
    logo: <AngularProjectLogo />,
    description:
      "Provided focused technical support ensuring project requirements were met without compromise by leveraging Angular's robust ecosystem.",
    href: "/success-stories/internal-angular-project",
    metrics: { label: "Engagement", value: "Single Focus" },
    badge: "Web Development",
    tags: ["Angular", "Web Development"],
    statsPreview: "Single Focus",
    bgColor: "#E6EEF2",
    textColor: "#4A6A7C",
  },
  {
    id: "healthcare-saas-project",
    name: "Healthcare SaaS Project",
    category: "Healthcare",
    logo: <HealthcareSaaSLogo />,
    description:
      "Dedicated support combining AI consulting with React + Node.js engineering for scalable healthcare SaaS solution.",
    href: "/success-stories/healthcare-saas-project",
    metrics: { label: "Engagement", value: "AI + Full-Stack" },
    badge: "Healthcare SaaS",
    tags: ["React", "Node.js", "Healthcare SaaS"],
    statsPreview: "AI + Full-Stack",
    bgColor: "#E6F0FA",
    textColor: "#4A8AB8",
  },
  {
    id: "angular-project-new-features",
    name: "Angular Project",
    category: "New Features",
    logo: <AngularNewFeaturesLogo />,
    description:
      "A New Features engagement providing dedicated support for a single project, focused on delivering new features and maintaining clean, reusable code.",
    href: "/case-studies/angular-project-new-features",
    metrics: { label: "Focus", value: "New Features" },
    badge: "New Features",
    tags: ["Angular Project", "New Features"],
    statsPreview: "New Features",
    bgColor: "#E6EEF2",
    textColor: "#4A6A7C",
  },
  {
    id: "internal-angular-frontend-project",
    name: "Internal Angular Front-End Project",
    category: "Software Development",
    logo: <AngularFrontendLogo />,
    description:
      "Dedicated Angular front-end engagement focused on clean, reusable, and scalable UI with TypeScript and modern front-end architecture.",
    href: "/success-stories/internal-angular-frontend-project",
    metrics: { label: "Engagement", value: "Single Focus" },
    badge: "Front-End",
    tags: ["Angular", "TypeScript", "Front-End"],
    statsPreview: "Single Focus",
    bgColor: "#E6EEF2",
    textColor: "#4A6A7C",
  },
  {
    id: "connecting-apps-third-party-services-rest",
    name: "Connecting Apps to Third-Party Services via REST",
    category: "Third-Party Services",
    logo: <RestApiIntegrationLogo />,
    description:
      "A Third-Party Services engagement providing dedicated support for connecting existing applications to external services through RESTful APIs, troubleshooting integration issues, and improving system communication.",
    href: "/case-studies/connecting-apps-third-party-services-rest",
    metrics: { label: "Focus", value: "Third-Party Services" },
    badge: "Third-Party Services",
    tags: [
      "RESTful API integration",
      "Third-party service connectivity",
      "Systems integration",
    ],
    statsPreview: "Third-Party Services",
    bgColor: "#EEF2FF",
    textColor: "#4F46E5",
  },
  {
    id: "data-download-transformation-stacking-bigquery",
    name: "Data Download Transformation Stacking for BigQuery Upload",
    category: "Data Engineering",
    logo: <BigQueryPipelineLogo />,
    description:
      "A Data Engineering engagement providing dedicated support for downloading source data, transforming individual files into a consistent structure, and stacking datasets into a unified table prepared for BigQuery upload.",
    href: "/case-studies/data-download-transformation-stacking-bigquery",
    metrics: { label: "Focus", value: "BigQuery Pipeline" },
    badge: "Data Engineering",
    tags: [
      "Data Download",
      "Data Transformation",
      "Dataset Stacking",
      "BigQuery Upload",
    ],
    statsPreview: "Data Engineering",
    bgColor: "#EFF6FF",
    textColor: "#0284C7",
  }
];

const categories = [
  "All",
  "Real Estate Tech",
  "Web Development",
  "Software Development",
  "Retail Tech",
  "Healthcare",
  "FinTech",
  "Third-Party Services",
  "Data Engineering",
];

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
                          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${
                            item.id === "internal-angular-project" ||
                            item.id === "angular-project-new-features" ||
                            item.id === "internal-angular-frontend-project"
                              ? "bg-[#E6EEF2] text-[#4A6A7C] border-[#4A6A7C]/20"
                              : item.id === "healthcare-saas-project"
                              ? "bg-[#E6F0FA] text-[#4A8AB8] border-[#4A8AB8]/20"
                              : item.id === "connecting-apps-third-party-services-rest"
                              ? "bg-[#EEF2FF] text-[#4F46E5] border-[#4F46E5]/20"
                              : item.id === "data-download-transformation-stacking-bigquery"
                              ? "bg-[#E0F2FE] text-[#0284C7] border-[#0284C7]/20"
                              : "text-blue-700 bg-blue-50 border-blue-100"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Tag pills */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                item.id === "healthcare-saas-project"
                                  ? "bg-[#E6F0FA] text-[#4A8AB8]"
                                  : item.id === "connecting-apps-third-party-services-rest"
                                  ? "bg-[#EEF2FF] text-[#4F46E5]"
                                  : item.id === "data-download-transformation-stacking-bigquery"
                                  ? "bg-[#E0F2FE] text-[#0284C7]"
                                  : "bg-[#E6EEF2] text-[#4A6A7C]"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Description Text - Verbatim matching the mock */}
                      <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal mb-8 min-h-[72px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action: Solid Blue Button connecting directly to the Case Study */}
                    <div className="pt-4 mt-auto">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:translate-y-0.5 ${
                          item.id === "internal-angular-project"
                            ? "bg-[#0a76db] text-white hover:bg-[#0861b5] hover:shadow-md hover:shadow-blue-500/20 active:translate-y-0.5 group-hover:bg-[#0969c3]"
                            : item.id === "landdesign"
                            ? "bg-[#0a76db] text-white hover:bg-[#0861b5] hover:shadow-md hover:shadow-blue-500/20 active:translate-y-0.5 group-hover:bg-[#0969c3]"
                            : "bg-[#0a76db] text-white hover:bg-[#0861b5] hover:shadow-md hover:shadow-blue-500/20 active:translate-y-0.5 group-hover:bg-[#0969c3]"
                        }`}
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
