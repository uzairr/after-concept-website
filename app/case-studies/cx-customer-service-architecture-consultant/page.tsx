"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CxArchitectureConsultantCaseStudy() {
  const [activeSection, setActiveSection] = useState("at-a-glance");

  const tableOfContents = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "introduction", label: "Introduction" },
    { id: "challenges", label: "The Challenges" },
    { id: "approach", label: "The Approach" },
    { id: "systems", label: "The Systems Behind the Experience" },
    { id: "outcome", label: "The Outcome" },
    { id: "project-focus", label: "Key Project Focus" },
    { id: "capabilities", label: "Consulting Capabilities" },
    { id: "project-summary", label: "Project Summary" },
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
          HERO SECTION (Exact LandDesign Blueprint Structure with CX Hero Visual)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#051329] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0C2444] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/cx-architecture-consultant-hero.jpg"
            alt="CX / Customer Service Architecture Consultant"
            fill
            priority
            className="object-cover object-right md:object-right-center"
            quality={95}
          />
          {/* Selective blur over the left text side, smoothly dissolving before the right-side visual */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[65%] backdrop-blur-[14px] pointer-events-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0) 100%)",
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
                Featured Build · CX Architecture Consultant
              </div>

              {/* Main Heading with clean spacing */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-6 drop-shadow-sm">
                CX / Customer Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0284C7]">
                  Architecture Consultant
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-6 drop-shadow-xs">
                This case study highlights a dedicated Architecture Consultant engagement focused on CX and Customer Service Architecture. The objective was to provide specialized consulting support for a single project, with an emphasis on understanding existing customer experiences and advising on a clear, scalable service structure.
              </p>

              {/* Prepared By Credit */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#7DD3FC] mb-10 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                Prepared by Ubaid | CX Consulting
              </div>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Advisory
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Specialist Consulting Role
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Customer-First
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    End-to-End Service Design
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Dedicated
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Single Engagement Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kept transparent so the workspace visual in the background displays in full view */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: Exact LandDesign Blueprint Structure
          Main content in left 8 cols, Sticky Table of Content in right 4 cols
          ========================================================================= */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ===================================================================
                LEFT / MAIN COLUMN (8 Cols) - Content
                =================================================================== */}
            <div className="lg:col-span-8 flex flex-col space-y-16 lg:space-y-20">
              
              {/* -----------------------------------------------------------------
                  SECTION: At a Glance (Exact LandDesign Blueprint Structure)
                  ----------------------------------------------------------------- */}
              <div id="at-a-glance" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  At a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Metadata Card (5 Cols) */}
                  <div className="md:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Header with Headset Icon */}
                    <div className="pb-4 border-b border-[#E2E8F0] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">
                          CX / Customer Service
                        </div>
                        <div className="text-xs text-[#0284C7] font-semibold">
                          Architecture Consultant
                        </div>
                      </div>
                    </div>

                    {/* Metadata: Client / Partner */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        CX Consulting Engagement
                      </div>
                    </div>

                    {/* Metadata: Industry */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        Customer Experience · Customer Service Architecture · Consulting
                      </div>
                    </div>

                    {/* Metadata: Scope of Engagement */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        CX Architecture Consulting · Customer Service Architecture · Dedicated Architecture Consultant Support
                      </div>
                    </div>

                    {/* Metadata: Tech & Capabilities */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Customer Experience (CX)",
                          "Customer Service Architecture",
                          "Architecture Consulting",
                          "Service Structure & Design",
                          "Customer-First Strategy",
                          "Dedicated Consultant Support",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#CBD5E1] text-slate-800 hover:border-[#0284C7] hover:text-[#0284C7] transition-colors shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Summary Description (7 Cols) */}
                  <div className="md:col-span-7 flex flex-col space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    <p>
                      This case study highlights a dedicated Architecture Consultant engagement focused on CX and Customer Service Architecture. The objective was to provide specialized consulting support for a single project, with an emphasis on understanding existing customer experiences and advising on a clear, scalable service structure.
                    </p>
                    <p>
                      By combining customer-first thinking with architecture-level advisory support, the engagement focused on establishing a structured approach to customer service that aligns with project requirements and supports a consistent customer experience.
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
                  Modern customer service requires more than simply responding to customer inquiries. Organizations need a well-structured service architecture that ensures customers receive consistent, accessible, and meaningful support throughout their journey.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The CX / Customer Service Architecture Consultant engagement was designed to provide dedicated architectural guidance for a specific project.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Our consulting focus centered on understanding how customers currently experience the service, identifying the project&apos;s architectural requirements, and advising on a clear structure that can support customer interactions effectively.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Through a dedicated consulting approach, the engagement prioritized customer experience, service architecture, and practical project-focused guidance.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#0284C7]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Establishing an effective customer service architecture requires understanding both customer expectations and the structure of the existing service environment.
                </p>

                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  The engagement focused on several important considerations:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Understanding Customer Experience:</strong> Evaluating how customers currently interact with the service, from their first point of contact onward.
                  </li>
                  <li>
                    <strong>Service Architecture Requirements:</strong> Establishing a clear architectural direction that reflects the project&apos;s customer service needs.
                  </li>
                  <li>
                    <strong>Customer-First Structure:</strong> Ensuring that the proposed service structure considers customer expectations and supports a consistent experience.
                  </li>
                  <li>
                    <strong>Scalable Service Organization:</strong> Advising on an organized architecture that can accommodate evolving service requirements.
                  </li>
                  <li>
                    <strong>Dedicated Architectural Guidance:</strong> Providing focused consultant support for the specific engagement and its architectural objectives.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                  Addressing these considerations required a consultative mindset, an understanding of customer service architecture, and dedicated attention to the project&apos;s requirements.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    To support the project objectives, the engagement followed a customer-first consulting approach built around four key focus areas:
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. CX &amp; Customer Service Architecture <span className="text-[#0284C7]">Advisory</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided architecture-level consulting focused on CX and customer service requirements. The objective was to establish an appropriate architectural direction for the engagement.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Customer Experience <span className="text-[#0284C7]">Understanding</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Focused on understanding how customers currently experience the service, including their interactions from the initial point of contact onward.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Structured &amp; Scalable <span className="text-[#0284C7]">Service Direction</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Advised on a clear and scalable service structure designed to support customer interactions and align with the project&apos;s requirements.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Dedicated Architecture <span className="text-[#0284C7]">Consultant Support</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided dedicated Architecture Consultant support for a single engagement, maintaining focus on its architectural objectives and consulting requirements.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Experience
                  (Exact Custom Dark Card Matching LandDesign Blueprint)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#051329] border border-[#0284C7]/30 rounded-2xl p-8 lg:p-10 shadow-xl shadow-[#0284C7]/5 text-white my-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                  <span>CORE ARCHITECTURAL FRAMEWORK</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-8">
                  The Systems Behind the Experience
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Customer Experience Architecture
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        A customer-first perspective focused on how individuals experience and interact with the service.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Customer Service Structure
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        An organized approach to understanding and structuring customer service operations.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Architecture Consulting Framework
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Architecture-level advisory support focused on project requirements and service structure.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Dedicated Consultant Engagement
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Specialized consulting support focused on delivering guidance throughout the defined engagement.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Outcome (Exact LandDesign Blueprint Structure)
                  ----------------------------------------------------------------- */}
              <div id="outcome" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Outcome</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement was structured around delivering focused architectural consulting and dedicated support.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key outcomes include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Specialist Consulting:</strong> Established a dedicated Architecture Consultant role focused on CX and customer service architecture.
                  </li>
                  <li>
                    <strong>Customer-First Thinking:</strong> Prioritized understanding the customer experience from the first point of contact onward.
                  </li>
                  <li>
                    <strong>Clear Architectural Direction:</strong> Focused on advising on an organized service structure aligned with project requirements.
                  </li>
                  <li>
                    <strong>Dedicated Project Support:</strong> Provided a consulting approach specifically centered on a single engagement.
                  </li>
                  <li>
                    <strong>Scalable Service Perspective:</strong> Emphasized a clear service architecture capable of supporting evolving customer experience requirements.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Overall, the engagement centered on providing dedicated architectural guidance, customer-first thinking, and structured consulting support for CX and customer service requirements.
                </p>

                {/* Outcome summary note */}
                <div className="bg-[#F0F7FB] border-l-4 border-[#0284C7] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The primary value of the engagement was its focused consulting approach: bringing together customer experience understanding, service architecture, and dedicated specialist support to help structure how customers experience a service.
                </div>

                {/* Stat Cards Grid (Branded with #0284C7 Accent Bars matching Blueprint) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#0284C7] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Specialist
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        dedicated Architecture Consultant role
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#0284C7] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        customer-first thinking &amp; support
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#0284C7] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Scalable
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        service architecture structure
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Key Project Focus
                  ----------------------------------------------------------------- */}
              <div id="project-focus" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Key Project <span className="text-[#0284C7]">Focus</span>
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Primary focus areas that defined the architectural engagement:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Primary Area
                    </div>
                    <div className="text-base font-bold text-slate-900 mb-1">
                      CX / Customer Service Architecture
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      The primary area of consulting, focused on understanding and structuring customer service experiences.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Consulting Role
                    </div>
                    <div className="text-base font-bold text-[#0284C7] mb-1">
                      Architecture Consultant
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      The specialist consulting role responsible for providing architecture-level guidance.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Core Principle
                    </div>
                    <div className="text-base font-bold text-slate-900 mb-1">
                      Customer Experience
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      A central consideration throughout the engagement, emphasizing customer interactions from first contact onward.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Engagement Model
                    </div>
                    <div className="text-base font-bold text-slate-900 mb-1">
                      Dedicated Support
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      Focused Architecture Consultant support for the individual project.
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Consulting Capabilities
                  ----------------------------------------------------------------- */}
              <div id="capabilities" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Consulting <span className="text-[#0284C7]">Capabilities</span>
                </h2>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Customer Experience (CX):</strong> Customer-first thinking focused on understanding and improving service interactions.
                  </li>
                  <li>
                    <strong>Customer Service Architecture:</strong> Architectural guidance for structuring customer service experiences and requirements.
                  </li>
                  <li>
                    <strong>Architecture Consulting:</strong> Specialized advisory support for project-level architecture requirements.
                  </li>
                  <li>
                    <strong>Dedicated Consultant Support:</strong> Focused consulting assistance throughout a single engagement.
                  </li>
                </ul>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Project Summary
                  ----------------------------------------------------------------- */}
              <div id="project-summary" className="p-8 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex flex-col space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-1">
                  Project <span className="text-[#0284C7]">Summary</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  The CX / Customer Service Architecture Consultant engagement demonstrates a dedicated consulting approach focused on customer experience, service architecture, and structured project support.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  By prioritizing customer-first thinking and architecture-level guidance, the engagement established a clear consulting direction centered on the project&apos;s requirements.
                </p>
                <div className="pt-2 text-sm font-semibold text-[#0284C7] tracking-wide">
                  Prepared by Ubaid | CX Consulting
                </div>
              </div>

            </div>

            {/* ===================================================================
                RIGHT / STICKY TABLE OF CONTENT (4 Cols)
                Exact match to the LandDesign Blueprint screenshot
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
                        className={`text-left text-[15px] py-3.5 border-b border-slate-200 transition-colors flex items-center justify-between group cursor-pointer ${
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

                {/* Quick Actions in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#4A6A7C] hover:bg-[#3B5767] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#4A6A7C]/30 active:translate-y-0.5"
                  >
                    Discuss Your Project →
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
                  >
                    ← All Case Studies
                  </Link>
                  <a
                    href="/pdfs/cx-customer-service-architecture-consultant.pdf"
                    download="CX-Customer-Service-Architecture-Consultant-Case-Study.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/30 active:translate-y-0.5"
                  >
                    <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 4v12m0 0l-3-3m3 3l3-3" />
                    </svg>
                    Download PDF
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA SECTION (Matching LandDesign Blueprint dark bottom CTA)
          ========================================================================= */}
      <section className="w-full bg-[#051329] text-white py-20 px-6 sm:px-10 border-t border-sky-950/70 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Need a CX architecture that scales?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Practical, customer-first consulting to structure how your customers experience your service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white font-semibold text-sm shadow-lg shadow-[#0284C7]/35 transition-all active:translate-y-0.5"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#0E3255] text-sky-100 font-semibold text-sm border border-[#0284C7]/30 transition-all"
            >
              See All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
