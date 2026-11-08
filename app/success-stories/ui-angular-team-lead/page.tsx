"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UiAngularTeamLeadCaseStudy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "introduction", label: "Introduction" },
    { id: "challenges", label: "The Challenges" },
    { id: "approach", label: "The Approach" },
    { id: "outcome", label: "The Outcomes" },
    { id: "technology", label: "Technology Used" },
  ];

  // Scrollspy to update active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = tableOfContents.length - 1; i >= 0; i--) {
        const element = document.getElementById(tableOfContents[i].id);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0284C7] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Exact BigQuery Case Study Layout & Styling)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#051329] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0C2444] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-study-09.jpg"
            alt="UI + Angular Team Lead"
            fill
            priority
            className="object-cover object-right md:object-right-center"
            quality={95}
          />
          {/* Selective blur over the left text side, smoothly dissolving before the right-side diagrams */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[65%] backdrop-blur-[14px] pointer-events-none"
            style={{
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Subtle gradient overlay to guarantee 100% crisp text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/95 sm:via-[#051329]/85 md:via-[#051329]/70 lg:via-[#051329]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-[#051329]/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE]/15 border border-[#38BDF8]/40 text-[#7DD3FC] text-xs font-semibold uppercase tracking-wider mb-6 w-fit backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                SUCCESS STORY · 09
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                UI + Angular Team Lead -{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0284C7]">
                  Product Development Team
                </span>
              </h1>

              {/* Category Line */}
              <div className="text-sm sm:text-base font-semibold text-[#7DD3FC] tracking-wide mb-6">
                Software Development | Web Applications
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                Modern web applications require strong technical leadership to ensure development teams remain aligned, project goals are achieved, and user interfaces meet both business and user expectations.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Team Lead
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    UI &amp; ANGULAR
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    PROJECT ALIGNMENT
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Architecture
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    FRONT-END DELIVERY
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: White Background Rest of Page
          ========================================================================= */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ===================================================================
                LEFT / MAIN COLUMN (8 Cols)
                =================================================================== */}
            <div className="lg:col-span-8 flex flex-col space-y-16 lg:space-y-20">
              
              {/* -----------------------------------------------------------------
                  SECTION: At a Glance
                  ----------------------------------------------------------------- */}
              <div id="at-a-glance" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  At a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Metadata Card */}
                  <div className="md:col-span-5 bg-white border border-[#D0DEE5] rounded-2xl p-6 shadow-sm flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#E6EEF2] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">UI + Angular Lead</div>
                        <div className="text-xs text-[#0284C7] font-semibold">Product Development Team</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        CLIENT / PARTNER
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Product Development Team
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        INDUSTRY
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Software Development · Web Applications
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        SCOPE OF ENGAGEMENT
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        UI Leadership · Angular Development Oversight · Team Management · Project Support
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        TECH &amp; CAPABILITIES
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Angular Framework",
                          "UI Development",
                          "Front-End Architecture",
                          "Team Leadership",
                          "Project Delivery",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7]/20 transition-colors shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Summary Description */}
                  <div className="md:col-span-7 flex flex-col space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    <p>
                      Modern web applications require strong technical leadership to ensure that development teams remain aligned, project goals are achieved, and user interfaces meet both business and user expectations. This engagement focused on providing dedicated support in the role of UI + Angular Team Lead, combining technical expertise with leadership responsibilities to guide the successful execution of a project.
                    </p>
                    <p>
                      The primary objective was to deliver focused support for a single engagement while overseeing UI and Angular-related activities. Through dedicated involvement, the project benefited from clear direction, structured development practices, and continuous support aimed at maintaining quality throughout the project lifecycle.
                    </p>
                  </div>

                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Introduction
                  ----------------------------------------------------------------- */}
              <div id="introduction" className="scroll-mt-28 flex flex-col space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Introduction
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Modern web applications require strong technical leadership to ensure that development teams remain aligned, project goals are achieved, and user interfaces meet both business and user expectations. This engagement focused on providing dedicated support in the role of UI + Angular Team Lead, combining technical expertise with leadership responsibilities to guide the successful execution of a project.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The primary objective was to deliver focused support for a single engagement while overseeing UI and Angular-related activities. Through dedicated involvement, the project benefited from clear direction, structured development practices, and continuous support aimed at maintaining quality throughout the project lifecycle.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Challenges</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Leading a UI and Angular development team comes with several challenges that require both technical knowledge and effective coordination.
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Maintaining a consistent development approach across the project.</li>
                    <li>Ensuring Angular implementation aligns with project objectives.</li>
                    <li>Managing project requirements while maintaining development quality.</li>
                    <li>Providing dedicated support throughout the engagement.</li>
                    <li>Coordinating UI development efforts to ensure smooth execution.</li>
                    <li>Keeping project activities focused and aligned with business goals.</li>
                  </ul>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Approach</span>
                  </h2>
                </div>

                {/* Numbered Section 1 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. <span className="text-[#0284C7]">Technical Leadership</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided leadership for UI and Angular development activities. Supported the team with technical direction and decision-making. Ensured development efforts remained aligned with project objectives.
                  </p>
                </div>

                {/* Numbered Section 2 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#0284C7]">Dedicated Project Support</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Maintained a single-engagement focus throughout the project. Provided continuous support to project stakeholders. Ensured timely communication and project alignment.
                  </p>
                </div>

                {/* Numbered Section 3 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#0284C7]">Angular Development Oversight</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Guided Angular development practices and implementation strategies. Promoted maintainable and scalable development approaches. Supported project requirements through Angular-focused solutions.
                  </p>
                </div>

                {/* Numbered Section 4 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. <span className="text-[#0284C7]">Project Case Study Focus</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Concentrated efforts on a dedicated project engagement. Maintained attention on project requirements and expected outcomes. Ensured all activities contributed directly to project objectives.
                  </p>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Outcomes
                  ----------------------------------------------------------------- */}
              <div id="outcome" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Outcomes</span>
                  </h2>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Stronger coordination between UI and Angular development activities.</li>
                    <li>Clear technical direction throughout the project lifecycle.</li>
                    <li>Dedicated support aligned with project requirements.</li>
                    <li>Improved project focus through a single-engagement approach.</li>
                    <li>Better alignment between development efforts and business objectives.</li>
                    <li>Consistent oversight of UI and Angular implementation.</li>
                  </ul>
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight">
                        Single
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Dedicated Engagement Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Technical Alignment Achieved
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight">
                        Quality
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Structured Oversight Throughout
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Technology Used
                  ----------------------------------------------------------------- */}
              <div id="technology" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Technology <span className="text-[#0284C7]">Used</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Angular Framework",
                      desc: "Robust architecture, reactive forms, dependency injection, and modular enterprise structure.",
                    },
                    {
                      name: "TypeScript",
                      desc: "Strict type safety, interfaces, compile-time error detection, and maintainable codebase patterns.",
                    },
                    {
                      name: "UI Development Practices",
                      desc: "Modern semantic HTML, responsive CSS, accessible design patterns, and cross-browser consistency.",
                    },
                    {
                      name: "Front-End Architecture",
                      desc: "Scalable component composition, state management strategies, and performance-optimized rendering.",
                    },
                    {
                      name: "Team Leadership & Project Coordination",
                      desc: "Technical mentoring, architectural guidance, sprint alignment, and stakeholder communication.",
                    },
                    {
                      name: "Web Application Development Methodologies",
                      desc: "Agile delivery, code reviews, quality assurance oversight, and continuous delivery standards.",
                    },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="p-5 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#0284C7]/50 shadow-xs transition-all flex flex-col justify-between"
                    >
                      <h3 className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                        {tech.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ===================================================================
                RIGHT / STICKY TABLE OF CONTENT (4 Cols)
                =================================================================== */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="w-full">
                
                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b-2 border-[#0F172A]">
                  Table Of Content
                </h3>

                <nav className="flex flex-col">
                  {tableOfContents.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`text-left text-[15px] py-3.5 border-b border-slate-200 transition-colors flex items-center justify-between group ${
                          isActive
                            ? "text-[#0284C7] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#0284C7]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Action in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#0B6FA4] hover:bg-[#095b87] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#0B6FA4]/30 active:translate-y-0.5"
                  >
                    Discuss Your Project →
                  </Link>
                  <Link
                    href="/success-stories"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
                  >
                    ← All Success Stories
                  </Link>

                  {/* Download PDF Button - Sidebar - START */}
                  <div className="sidebar-pdf-download" style={{ marginTop: "12px" }}>
                    <a
                      href="/case-studies/UI_Angular_Team_Lead_Case_Study_1.pdf"
                      download="UI_Angular_Team_Lead_Case_Study.pdf"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%",
                        padding: "12px 16px",
                        background: "#0066FF",
                        color: "#ffffff",
                        borderRadius: "8px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      ⬇ Download PDF
                    </a>
                  </div>
                  {/* Download PDF Button - Sidebar - END */}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="w-full bg-[#0A1628] text-white py-20 px-6 sm:px-10 border-t border-[#1E293B] relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Need Expert UI + Angular Technical Leadership?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your web application requirements and development goals. We&apos;ll provide focused leadership and architecture to bring your project to production.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/success-stories"
              className="px-8 py-3.5 rounded-xl bg-[#1E293B] hover:bg-[#334155] text-slate-200 font-semibold text-sm border border-[#334155] transition-all"
            >
              All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
