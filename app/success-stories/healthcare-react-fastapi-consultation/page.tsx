"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HealthcareReactFastApiCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0066FF] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Exact 9th Case Study Layout & Styling)
          ========================================================================= */}
      <section className="case-hero relative w-full overflow-hidden bg-[#051329] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0C2444] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/case-studies/case-study-10-cover.jpg"
            alt="Healthcare React & FastAPI Consultation"
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
                <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                CASE STUDY · 10
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Healthcare React &amp; FastAPI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0066FF]">
                  Consultation
                </span>
              </h1>

              {/* Category Line */}
              <div className="text-sm sm:text-base font-semibold text-[#7DD3FC] tracking-wide mb-6">
                Healthcare System Project · Healthcare Technology | Software Development
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A Healthcare System Project engagement, documented through its consultation objective. Healthcare applications require strong architecture, secure data handling, and reliable APIs to ensure patient information remains protected while delivering a seamless user experience.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    FastAPI
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    React &amp; FastAPI
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    Project Alignment
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Architecture
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    System Reliability
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: Exact 9th Case Study Layout & Grid
          ========================================================================= */}
      <section className="case-study-detail w-full py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ===================================================================
                LEFT / MAIN COLUMN (8 Cols)
                =================================================================== */}
            <div className="lg:col-span-8 flex flex-col space-y-16 lg:space-y-20">
              
              {/* -----------------------------------------------------------------
                  SECTION: At a Glance
                  ----------------------------------------------------------------- */}
              <div id="at-a-glance" className="at-a-glance scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  At a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Metadata Card */}
                  <div className="md:col-span-5 bg-white border border-[#D0DEE5] rounded-2xl p-6 shadow-sm flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#E6EEF2] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 10.5V8.8h-4.4V4.4h-5.2v4.4H5v5.2h4.4v4.4h5.2V14h4.4v-3.5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">Healthcare System</div>
                        <div className="text-xs text-[#0066FF] font-semibold">React &amp; FastAPI Consultation</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        CLIENT / PARTNER
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Healthcare System Project
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        INDUSTRY
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Healthcare Technology · Software Development
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        SCOPE OF ENGAGEMENT
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        React &amp; FastAPI Consultation · System Architecture Review · Code Review · Dedicated Technical Support
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        TECH &amp; CAPABILITIES
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "React",
                          "FastAPI",
                          "Healthcare Systems",
                          "API Architecture",
                          "Code Review",
                          "Security & Access Control",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E0F2FE] text-[#0066FF] border border-[#0066FF]/20 transition-colors shadow-2xs"
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
                      Healthcare applications require strong architecture, secure data handling, and reliable APIs to ensure patient information remains protected while delivering a seamless user experience. This engagement focused on providing dedicated React &amp; FastAPI consultation for a healthcare system project, offering expert guidance to strengthen both the front-end and back-end architecture.
                    </p>
                    <p>
                      The objective was to act as an experienced technical advisor, helping the client evaluate existing implementation decisions before they became costly problems. The engagement emphasized scalability, maintainability, security, and long-term system reliability while supporting a single healthcare-focused project.
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
                  Healthcare applications require strong architecture, secure data handling, and reliable APIs to ensure patient information remains protected while delivering a seamless user experience. This engagement focused on providing dedicated React &amp; FastAPI consultation for a healthcare system project, offering expert guidance to strengthen both the front-end and back-end architecture. The objective was to act as an experienced technical advisor, helping the client evaluate existing implementation decisions before they became costly problems. The engagement emphasized scalability, maintainability, security, and long-term system reliability while supporting a single healthcare-focused project.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0066FF]">Challenges</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Healthcare systems face unique architectural, performance, and security challenges that require rigorous evaluation and specialized guidance:
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>The client needed an expert second opinion on the React and FastAPI technology stack before architectural issues became expensive to fix.</li>
                    <li>The project required a clean and scalable architecture capable of supporting future growth.</li>
                    <li>Existing code needed professional review to identify maintainability concerns and potential risks.</li>
                    <li>Sensitive patient data required careful handling and privacy-focused implementation.</li>
                    <li>The system required reliable and predictable API behavior to support healthcare operations.</li>
                    <li>Access to medical records needed strong role-based access controls.</li>
                  </ul>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0066FF]">Approach</span>
                  </h2>
                </div>

                {/* Numbered Section 1 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. <span className="text-[#0066FF]">System Architecture Design</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Evaluating and designing a scalable architecture for both React front end and FastAPI back end.
                  </p>
                </div>

                {/* Numbered Section 2 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#0066FF]">Comprehensive Code Review</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Reviewed code quality, development standards, maintainability, potential technical risks, long-term scalability concerns.
                  </p>
                </div>

                {/* Numbered Section 3 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#0066FF]">Security &amp; Privacy Consultation</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Patient data privacy, secure data handling practices, risk reduction strategies, protected access to healthcare records.
                  </p>
                </div>

                {/* Numbered Section 4 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. <span className="text-[#0066FF]">API Reliability Assessment</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Predictable and validated FastAPI endpoints to ensure application stability.
                  </p>
                </div>

                {/* Numbered Section 5 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. <span className="text-[#0066FF]">Safe Deployment Strategy</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Repeatable and low-risk deployment process for reliable production updates.
                  </p>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Outcomes
                  ----------------------------------------------------------------- */}
              <div id="outcome" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0066FF]">Outcomes</span>
                  </h2>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Improved confidence in the React and FastAPI architecture.</li>
                    <li>Better understanding of scalability requirements for future system growth.</li>
                    <li>Identification of code quality and maintainability improvements.</li>
                    <li>Enhanced focus on patient data privacy and secure system design.</li>
                    <li>Stronger role-based access control recommendations for healthcare records.</li>
                    <li>More reliable API design and validation practices.</li>
                    <li>Guidance for safer and more predictable deployment processes.</li>
                  </ul>
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        Single
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Dedicated Engagement Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Architecture Confidence
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        Zero
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Security Compromises
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
                  Technology <span className="text-[#0066FF]">Used</span>
                </h2>

                <div className="tech-pills grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "React",
                      desc: "Modern reactive front-end framework, component composition, state management, and responsive medical user interfaces.",
                    },
                    {
                      name: "FastAPI",
                      desc: "High-performance Python asynchronous web framework, strict data validation with Pydantic, and automatic OpenAPI schema generation.",
                    },
                    {
                      name: "REST APIs",
                      desc: "Predictable, secure, and standardized endpoint design supporting seamless communication across healthcare services.",
                    },
                    {
                      name: "System Architecture Design",
                      desc: "Scalable separation of concerns between client and server layers, ensuring system resilience and long-term maintainability.",
                    },
                    {
                      name: "Code Review & Quality Assessment",
                      desc: "Standardized code quality audits, technical debt mitigation, and strict maintainability evaluation before production release.",
                    },
                    {
                      name: "Role-Based Access Control (RBAC)",
                      desc: "Granular authorization policies protecting patient data and medical records based on validated user roles and privileges.",
                    },
                    {
                      name: "Healthcare Data Privacy Practices",
                      desc: "Privacy-first architecture ensuring patient health information handling conforms with strict healthcare compliance and data governance.",
                    },
                    {
                      name: "Secure Deployment Strategies",
                      desc: "Repeatable, automated, and low-risk deployment pipelines ensuring zero downtime and predictable application updates.",
                    },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="p-5 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#0066FF]/50 shadow-xs transition-all flex flex-col justify-between"
                    >
                      <h3 className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
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
                            ? "text-[#0066FF] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#0066FF]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
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
            Need Expert React &amp; FastAPI Guidance for Your Healthcare Project?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Let&apos;s talk. Tell us about your healthcare system requirements and technical goals. We&apos;ll provide focused consultation, architecture review, and engineering guidance to safeguard patient data and ensure long-term reliability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all"
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
