"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FlipletEventAppScriptCaseStudy() {
  const [activeSection, setActiveSection] = useState("at-a-glance");

  const tableOfContents = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "introduction", label: "Introduction" },
    { id: "challenges", label: "The Project Challenges" },
    { id: "approach", label: "The Approach" },
    { id: "systems", label: "The Systems Behind the Support" },
    { id: "outcome", label: "The Outcome" },
    { id: "project-focus", label: "Project Focus" },
    { id: "technology", label: "Technology & Capabilities" },
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
          HERO SECTION (Exact LandDesign Template Structure with Code Editor Visual)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#051329] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0C2444] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/fliplet-event-app-hero.jpg"
            alt="Fliplet Event App Script"
            fill
            priority
            className="object-cover object-right md:object-right-center"
            quality={95}
          />
          {/* Selective blur over the left text side, smoothly dissolving before the right-side screens */}
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
                Featured Build · Fliplet Event App
              </div>

              {/* Main Heading with clean spacing */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Dedicated App Scripting Support for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0284C7]">
                  Fliplet Event App
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                We provided dedicated App Scripting support for the Fliplet Event App engagement, focusing on the project&apos;s scripting requirements and delivering focused technical support for a single engagement.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Scripting
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    App Scripting Focus
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Dedicated Support
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Single
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Engagement Scope
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kept transparent so the laptop/code screen in the background image displays in full view */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: Exact LandDesign Structure
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
                  SECTION: At a Glance
                  ----------------------------------------------------------------- */}
              <div id="at-a-glance" className="scroll-mt-28">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                  At a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Metadata Card (5 Cols) */}
                  <div className="md:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#E2E8F0] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">Fliplet Event App</div>
                        <div className="text-xs text-[#0284C7] font-semibold">Client / Project</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Project
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Fliplet Event App
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry / Domain
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        App Development
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        Dedicated App Scripting Support
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Focus &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "App Scripting",
                          "Project Support",
                          "Single Engagement",
                        ].map((focus) => (
                          <span
                            key={focus}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#CBD5E1] text-slate-800 hover:border-[#0284C7] hover:text-[#0284C7] transition-colors shadow-2xs"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Summary Description (7 Cols) - Project Overview */}
                  <div className="md:col-span-7 flex flex-col space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Project Overview
                    </h3>
                    <p>
                      The <strong>Fliplet Event App</strong> engagement required dedicated support focused on App Scripting. The objective was to provide focused technical assistance for a single project, with support centred on its app scripting requirements.
                    </p>
                    <p>
                      The engagement focused on delivering dedicated project support, maintaining attention on the Fliplet Event App and its specific scripting objectives.
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
                  The Fliplet Event App project centred on App Scripting and dedicated technical support for a single engagement.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The primary objective was to provide focused assistance for the project&apos;s app scripting work, ensuring that the engagement remained aligned with its requirements and overall project goals.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Through a dedicated support approach, the engagement established a clear focus on App Scripting, project-specific requirements, and the Fliplet Event App.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Project Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The Project <span className="text-[#0284C7]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The engagement required a focused approach to supporting a dedicated App Scripting project. Key areas of focus included:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Dedicated Technical Support:</strong> Providing focused assistance for the Fliplet Event App engagement.
                  </li>
                  <li>
                    <strong>Project-Specific Requirements:</strong> Keeping app scripting support aligned with the project&apos;s objectives.
                  </li>
                  <li>
                    <strong>Single Engagement Focus:</strong> Maintaining dedicated attention on one project rather than distributing support across unrelated engagements.
                  </li>
                  <li>
                    <strong>Scripting Requirements:</strong> Keeping App Scripting at the centre of the technical engagement.
                  </li>
                  <li>
                    <strong>Project Alignment:</strong> Ensuring the support approach remained connected to the Fliplet Event App&apos;s requirements.
                  </li>
                </ul>
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
                    We structured the engagement around dedicated App Scripting support, with a clear focus on the project&apos;s objectives.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. Dedicated App <span className="text-[#0284C7]">Scripting Support</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided dedicated support for the Fliplet Event App engagement, with App Scripting as the primary area of focus.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Project-Centred <span className="text-[#0284C7]">Assistance</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Aligned the support approach with the specific requirements and objectives of the Fliplet Event App.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Single Engagement <span className="text-[#0284C7]">Focus</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Maintained a dedicated support structure for one engagement, allowing attention to remain concentrated on the project.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Scripting-Focused <span className="text-[#0284C7]">Scope</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Kept the technical scope centred on App Scripting and the requirements associated with the project.
                  </p>
                </div>

                {/* Point 5 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. Project Objective <span className="text-[#0284C7]">Alignment</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Structured the engagement around its central objective: providing dedicated App Scripting support.
                  </p>
                </div>

                {/* Point 6 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    6. Dedicated Project <span className="text-[#0284C7]">Support</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Maintained a focused approach to supporting the Fliplet Event App throughout the engagement.
                  </p>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Systems Behind the Support (Dark Highlight Box)
                  ----------------------------------------------------------------- */}
              <div id="systems" className="scroll-mt-28">
                <div className="p-8 sm:p-10 rounded-2xl bg-[#051329] text-white border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                    <span>CORE INFRASTRUCTURE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 tracking-tight">
                    The Systems Behind the Support
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* System 1 */}
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">
                          App Scripting
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Primary technical focus of the engagement.
                        </div>
                      </div>
                    </div>

                    {/* System 2 */}
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">
                          Dedicated Technical Support
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Focused assistance for the Fliplet Event App.
                        </div>
                      </div>
                    </div>

                    {/* System 3 */}
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">
                          Project-Centred Approach
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Support aligned with the project&apos;s specific requirements.
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
                          Single Engagement Structure
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Dedicated attention to one project.
                        </div>
                      </div>
                    </div>

                    {/* System 5 */}
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">
                          Objective-Driven Support
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Technical assistance centred on the project&apos;s primary objective.
                        </div>
                      </div>
                    </div>

                    {/* System 6 */}
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7]/20 border border-[#0284C7]/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">
                          Focused Scope Management
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                          Maintaining App Scripting as the core area of engagement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Outcome
                  ----------------------------------------------------------------- */}
              <div id="outcome" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#0284C7]">Outcome</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement established a dedicated support approach for the Fliplet Event App, centred on App Scripting and its project-specific objectives.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key project outcomes include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Dedicated Support:</strong> A focused support structure for the Fliplet Event App engagement.
                  </li>
                  <li>
                    <strong>Clear Technical Focus:</strong> App Scripting established as the primary area of work.
                  </li>
                  <li>
                    <strong>Project Alignment:</strong> Support centred on the project&apos;s requirements and objectives.
                  </li>
                  <li>
                    <strong>Single Engagement Focus:</strong> Dedicated attention maintained for one project.
                  </li>
                  <li>
                    <strong>Defined Scope:</strong> A clearly identified engagement covering App Scripting and project support.
                  </li>
                  <li>
                    <strong>Objective-Driven Approach:</strong> A support structure aligned with the project&apos;s central objective.
                  </li>
                </ul>

                {/* Outcome summary note */}
                <div className="bg-[#F0F7FB] border-l-4 border-[#0284C7] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The engagement demonstrates a focused approach to app scripting support, with an emphasis on project-specific requirements and dedicated technical assistance.
                </div>

                {/* Stat Cards Grid (Branded with #0284C7 Accent Bars) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#0284C7] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Dedicated
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        support for the Fliplet Event App
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
                        single engagement focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#0284C7] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Scripting
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        project-specific requirements
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Project Focus
                  ----------------------------------------------------------------- */}
              <div id="project-focus" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Project <span className="text-[#0284C7]">Focus</span>
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Core parameters defining the scope and structure of the Fliplet Event App engagement:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Role
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Fliplet Event App
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Primary Focus
                    </div>
                    <div className="text-base font-bold text-[#0284C7]">
                      App Scripting
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Objective
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Dedicated Support
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Project Area
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Fliplet Event App
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs sm:col-span-2 lg:col-span-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Engagement Type
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Single Engagement
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Technology & Capabilities
                  ----------------------------------------------------------------- */}
              <div id="technology" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Technology &amp; <span className="text-[#0284C7]">Capabilities</span>
                </h2>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>App Scripting:</strong> Core technical area of the engagement.
                  </li>
                  <li>
                    <strong>Project Support:</strong> Dedicated assistance aligned with the Fliplet Event App.
                  </li>
                  <li>
                    <strong>Technical Engagement:</strong> Focused support for project-specific scripting requirements.
                  </li>
                  <li>
                    <strong>Scope Management:</strong> Dedicated attention to a single engagement.
                  </li>
                </ul>
              </div>

            </div>

            {/* ===================================================================
                RIGHT COLUMN: Sticky Table of Contents (4 Cols) - Exact LandDesign
                =================================================================== */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28">
              <div className="bg-white border-t-2 border-[#0284C7] p-6 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-6 tracking-tight">
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
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369a1] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#0284C7]/30 active:translate-y-0.5"
                  >
                    Discuss Your Project →
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
                  >
                    ← All Case Studies
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA SECTION (Matching LandDesign dark bottom CTA)
          ========================================================================= */}
      <section className="w-full bg-[#051329] text-white py-20 px-6 sm:px-10 border-t border-sky-950/70 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Want dedicated technical support for your next application project?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your application requirements and development goals. We&apos;ll help you identify the right technical approach and support structure for your project.
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
