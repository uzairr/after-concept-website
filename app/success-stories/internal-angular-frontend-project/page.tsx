"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InternalAngularFrontendProjectCaseStudy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const tableOfContents = [
    { id: "introduction", label: "Introduction" },
    { id: "challenges", label: "The Challenges" },
    { id: "approach", label: "The Approach" },
    { id: "outcome", label: "The Outcome" },
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#5A7A8A] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Dark background with Grey-Bluish Theme)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#0A1A1A] bg-gradient-to-r from-[#0A1A1A] via-[#0E222D] to-[#1A2E3A] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#2A4A5A]/60 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Grey-bluish ambient overlays */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: "rgba(90, 122, 138, 0.15)" }} 
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#5A7A8A]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#8AB0C0]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2] border border-[#5A7A8A]/30 text-[#4A6A7C] text-[10px] tracking-widest font-bold uppercase mb-6 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5A7A8A] animate-pulse" />
                FEATURED BUILD - INTERNAL ANGULAR FRONT-END PROJECT
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] font-bold leading-tight text-white mb-8 drop-shadow-sm">
                Dedicated <span className="text-[#8AB0C0]">Angular Front-End Development</span> for Scalable Web Applications
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                Dedicated Angular front-end engagement focused on clean, reusable, and scalable UI with TypeScript and modern front-end architecture. Providing dedicated support ensuring user interface clarity, maintainability, and responsive performance.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#2A4A5A]/50 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    1
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Single Engagement Focus
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Requirement Alignment
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Angular
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Modern Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Angular Dashboard Mockup */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center relative">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#2A4A5A] bg-[#0F1F2A]/90 backdrop-blur-md">
                <Image
                  src="/images/angular-hero.png"
                  alt="Angular Front-End Development Dashboard"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: LandDesign Layout in Grey-Bluish Palette
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
                      <div className="w-10 h-10 rounded-xl bg-[#5A7A8A] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">Internal Angular</div>
                        <div className="text-xs text-[#4A6A7C] font-semibold">Front-End Development</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Internal Angular Front-End Project
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Software Development · Web Applications
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Dedicated Angular Front-End Development · Single Engagement Focus
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Angular Framework",
                          "TypeScript",
                          "HTML/CSS",
                          "Front-End Architecture",
                          "Project Analytics",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E6EEF2] text-[#4A6A7C] border border-[#5A7A8A]/20 transition-colors shadow-2xs"
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
                      This case study documents an Angular front-end engagement where the primary objective was to provide dedicated support for a single project. The client required a front-end developer with strong Angular expertise to ensure that the application&apos;s user interface was built with clarity, scalability, and maintainability in mind.
                    </p>
                    <p>
                      The engagement was designed to focus exclusively on front-end development, ensuring that all resources were aligned with the project&apos;s requirements. By applying Angular best practices, the developer delivered a solution that was both technically robust and user-friendly.
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
                  This case study documents an Angular front-end engagement where the primary objective was to provide dedicated support for a single project. The client required a front-end developer with strong Angular expertise to ensure that the application&apos;s user interface was built with clarity, scalability, and maintainability in mind.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The engagement was designed to focus exclusively on front-end development, ensuring that all resources were aligned with the project&apos;s requirements. By applying Angular best practices, the developer delivered a solution that was both technically robust and user-friendly.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#5A7A8A]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Every project comes with its unique set of hurdles. For this Angular front-end engagement, the challenges included:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Dedicated Front-End Support:</strong> Ensuring that the engagement was focused solely on front-end development without distractions.
                  </li>
                  <li>
                    <strong>Integration with Existing Systems:</strong> Aligning new front-end components with the project&apos;s architecture.
                  </li>
                  <li>
                    <strong>Maintainability:</strong> Writing clean, reusable, and well-structured code.
                  </li>
                  <li>
                    <strong>Single Engagement Focus:</strong> Providing continuous support for one project only.
                  </li>
                  <li>
                    <strong>Clear Communication:</strong> Keeping stakeholders updated with regular progress reports.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
                  These challenges required a structured approach, clear communication, and adherence to Angular best practices.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#5A7A8A]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    To overcome these challenges, the following approach was adopted:
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. <span className="text-[#5A7A8A]">Engagement Overview</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Defined the role as Angular Developer with a clear focus on front-end development. Established dedicated support for the project&apos;s lifecycle.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#5A7A8A]">Front-End Development</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Built Angular components with modular architecture. Applied TypeScript for type safety and maintainability. Used HTML/CSS for responsive and accessible UI design.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#5A7A8A]">Delivery Model</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Adopted a single-engagement focus, ensuring quality and attention to detail. Provided regular updates and prompt replies to maintain transparency.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Intelligence (Dark Box)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#0F1F2A] border border-[#2A4A5A] rounded-xl p-6 lg:p-8 shadow-xl text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Intelligence
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2A4A5A] flex items-center justify-center shrink-0 text-[#8AB0C0]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Modular Architecture
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Implemented scalable, reusable Angular components.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2A4A5A] flex items-center justify-center shrink-0 text-[#8AB0C0]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Type Safety &amp; Contracts
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Ensured long-term maintainability with strict TypeScript.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2A4A5A] flex items-center justify-center shrink-0 text-[#8AB0C0]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Responsive &amp; Accessible UI
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Built user-friendly, responsive layouts using HTML &amp; CSS.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2A4A5A] flex items-center justify-center shrink-0 text-[#8AB0C0]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Project Analytics Tracking
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Monitored milestones with continuous progress reporting.
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
                    The <span className="text-[#5A7A8A]">Outcome</span>
                  </h2>
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Clean Codebase:</strong> Front-end code was maintainable, scalable, and well-structured.
                  </li>
                  <li>
                    <strong>Efficient Delivery:</strong> Features were implemented quickly and aligned with project requirements.
                  </li>
                  <li>
                    <strong>Improved Collaboration:</strong> Clear communication strengthened trust with stakeholders.
                  </li>
                  <li>
                    <strong>Dedicated Focus:</strong> The single-engagement model ensured quality and precision.
                  </li>
                  <li>
                    <strong>User Experience:</strong> The Angular front-end improved usability and responsiveness.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                  Overall, the project reinforced the importance of dedicated support and single-engagement focus in delivering high-quality software solutions.
                </p>

                {/* Outcome summary note */}
                <div className="bg-[#E6EEF2] border-l-4 border-[#5A7A8A] p-5 rounded-r-xl text-base text-[#4A6A7C] font-medium leading-relaxed">
                  The primary value delivered was precision execution: zero context-switching overhead, prompt resolution of requirements, and consistent adherence to Angular best practices from day one to launch.
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#5A7A8A]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#5A7A8A] tracking-tight">
                        1
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Dedicated Front-End Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#5A7A8A]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#5A7A8A] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Requirement Alignment
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#5A7A8A]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#5A7A8A] tracking-tight">
                        Zero
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Compromise on Quality
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
                  Technology <span className="text-[#5A7A8A]">Used</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#5A7A8A]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Angular Framework</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Core technology for building the front-end application and interactive components.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#5A7A8A]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">TypeScript</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Ensured type safety, clean contracts, and long-term codebase maintainability.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#5A7A8A]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">HTML/CSS</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Engineered for responsive, accessible, and high-performance UI styling.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#5A7A8A]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Front-End Architecture Tools</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Applied modular conventions and scalable build pipelines for seamless growth.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#5A7A8A]/50 shadow-xs transition-all sm:col-span-2">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Project Analytics Tools</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Used for tracking milestone progress, monitoring velocity, and ensuring technical alignment.
                    </p>
                  </div>
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
                            ? "text-[#5A7A8A] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#5A7A8A]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7A8A]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Action in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#5A7A8A] hover:bg-[#4A6A7C] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#5A7A8A]/30 active:translate-y-0.5"
                  >
                    Discuss Your Project →
                  </Link>
                  <Link
                    href="/success-stories"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 transition-colors"
                  >
                    ← All Case Studies
                  </Link>
                  <a
                    href="/pdfs/internal-angular-frontend-project-case-study.pdf"
                    download="Internal-Angular-Front-End-Project-Case-Study.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#2563EB] text-white text-[13px] font-semibold px-5 py-3 rounded-full hover:bg-[#1D4ED8] transition mt-4"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
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
          BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="w-full bg-[#0A1A24] text-white py-20 px-6 sm:px-10 border-t border-[#1A2E3A] relative overflow-hidden">
        {/* Subtle grey-bluish ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#5A7A8A]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#8AB0C0] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Looking for Dedicated Angular Front-End Development?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your technical challenges and front-end requirements. We&apos;ll show you the exact architecture and systems we&apos;d build for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#5A7A8A] hover:bg-[#4A6A7C] text-white font-semibold text-sm shadow-lg shadow-[#5A7A8A]/30 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/success-stories"
              className="px-8 py-3.5 rounded-xl bg-[#0E222D] hover:bg-[#1A2E3A] text-slate-200 font-semibold text-sm border border-[#2A4A5A] transition-all"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
