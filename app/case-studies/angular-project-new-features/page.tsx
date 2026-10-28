"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AngularProjectNewFeaturesCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#4A6A7C] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Using Provided Image as Background - LandDesign Style)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#06100E] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#122A26] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/angular-hero-bg.png"
            alt="Angular Project New Features UI Dashboard"
            fill
            priority
            className="object-cover object-right md:object-right-center"
            quality={95}
          />
          {/* Subtle gradient overlay to guarantee 100% crisp text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06100E] via-[#06100E]/95 sm:via-[#06100E]/85 md:via-[#06100E]/70 lg:via-[#06100E]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06100E] via-transparent to-[#06100E]/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Client & Topic pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6EEF2]/15 border border-[#5A7A8A]/40 text-[#93C5FD] text-xs font-semibold uppercase tracking-wider mb-6 w-fit backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
                Featured Build · Angular Project — New Features
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Dedicated New Features Support for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] via-[#60A5FA] to-[#3B82F6]">
                  Angular Project
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A New Features engagement providing dedicated support for a single project, focused on delivering new features and maintaining clean, reusable code.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1E3547]/60 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    01
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
                    Codebase Alignment
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Angular
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    New Features Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kept transparent so the floating UI & dashboard in the background image displays in full view */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: Exact User Content + Arbisoft / LandDesign Structure
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
                  <div className="md:col-span-5 bg-[#F6F9FA] border border-[#D5E2E8] rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#D5E2E8] flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#E6EEF2] border border-[#5A7A8A]/30 flex items-center justify-center text-[#4A6A7C] font-bold shadow-xs">
                        <svg className="w-6 h-6 text-[#5A7A8A]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 2.8l6.1 2.1-1 9-5.1 2.1-5.1-2.1-1-9L12 4.8zm0 2.5L8.5 16h1.8l.7-1.8h5l.7 1.8h1.8L12 7.3zm0 2.8l1.7 4.1h-3.4l1.7-4.1z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900 leading-tight">Angular Project</div>
                        <div className="text-xs font-semibold text-[#4A6A7C]">New Features</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Angular Project
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Software Development · Front-End Engineering
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        Angular Development · New Feature Implementation · Codebase Integration · Dedicated Development Support
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Angular",
                          "TypeScript",
                          "HTML",
                          "CSS",
                          "Component-Based Development",
                          "Reusable Code",
                          "Front-End Maintenance",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#CBDCE4] text-slate-800 hover:border-[#4A6A7C] hover:text-[#4A6A7C] transition-colors shadow-2xs"
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
                      <strong>The Angular project</strong> required dedicated development support to implement new features within an existing application. The primary objective was to understand the existing codebase, align new functionality with the project&apos;s requirements, and ensure that additions followed the established structure.
                    </p>
                    <p>
                      To address this need, the engagement focused on reviewing the existing application, understanding feature requirements, and implementing new functionality using clean, maintainable, and reusable code. The approach emphasized consistency, efficient development, and clear communication throughout the engagement.
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
                  The Angular project focused on delivering dedicated support for new feature development within an existing application. Implementing new functionality requires more than writing code; it also involves understanding the current architecture, maintaining consistency, and ensuring that new components fit naturally into the existing system.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The engagement began with a review of the existing Angular codebase and the requested features. Based on this understanding, development work was structured around the project&apos;s requirements, with an emphasis on maintainable implementation, reusable code, and clear communication.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The objective was to provide focused front-end development support while keeping the application&apos;s structure organized and preparing the codebase for future enhancements.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#4A6A7C]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Implementing new features within an existing Angular application requires careful coordination between functionality, code quality, and project requirements.
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Understanding the Existing Codebase:</strong> Reviewing the application&apos;s structure and existing implementation before introducing new functionality.
                  </li>
                  <li>
                    <strong>Feature Requirement Alignment:</strong> Understanding the requested features and ensuring that implementation remains aligned with the project&apos;s objectives.
                  </li>
                  <li>
                    <strong>Consistent Code Structure:</strong> Integrating new code into the existing application without introducing unnecessary structural inconsistencies.
                  </li>
                  <li>
                    <strong>Code Maintainability:</strong> Developing well-organized code that remains understandable and manageable as the application evolves.
                  </li>
                  <li>
                    <strong>Reusable Implementation:</strong> Following suitable development patterns to support code reuse and simplify future enhancements.
                  </li>
                  <li>
                    <strong>Dedicated Development Support:</strong> Maintaining focus on the engagement&apos;s feature requirements and providing responsive development assistance.
                  </li>
                  <li>
                    <strong>Clear Communication:</strong> Sharing progress updates and responding promptly to questions throughout the development process.
                  </li>
                </ul>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#4A6A7C]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    We followed a structured development approach focused on understanding the existing application, implementing the requested functionality, and maintaining consistency with the project&apos;s established code structure.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. Codebase Review and Requirement Analysis
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Reviewed the existing Angular codebase and the requested features to understand the application&apos;s structure, identify relevant implementation areas, and establish a clear direction for development.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Feature Planning
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Organized the development work around the project&apos;s feature requirements, ensuring that implementation remained focused on the engagement&apos;s objectives.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Angular Feature Development
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Implemented new features in accordance with the existing project&apos;s structure, emphasizing clean code and integration with the application&apos;s established patterns.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Reusable Code Implementation
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Applied maintainable development practices to keep the implementation organized and make future modifications easier to manage.
                  </p>
                </div>

                {/* Point 5 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. Code Consistency and Integration
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Focused on integrating the new functionality naturally into the existing Angular application while preserving consistency across the codebase.
                  </p>
                </div>

                {/* Point 6 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    6. Communication and Development Support
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Maintained a clear communication process throughout the engagement, with an emphasis on regular progress updates, prompt responses, and dedicated support for the project&apos;s requirements.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Development
                  (Custom Feature Card matching LandDesign layout)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#0A1622] border border-[#2A4A5A]/60 rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-950/20 text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Development
                </h3>

                <div className="flex flex-col space-y-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Angular Application Review
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Understanding the existing application structure and identifying relevant areas for enhancement.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Feature Requirement Analysis
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Translating requested functionality into focused development tasks.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Component-Based Development
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Organizing front-end functionality in line with the application&apos;s established Angular structure.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Reusable Code Practices
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Writing clean, maintainable code that supports ongoing development.
                      </div>
                    </div>
                  </div>

                  {/* System 5 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Feature Integration
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Integrating new functionality into the existing application while maintaining structural consistency.
                      </div>
                    </div>
                  </div>

                  {/* System 6 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4A6A7C]/30 border border-[#5A7A8A]/40 flex items-center justify-center shrink-0 text-[#93C5FD]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Dedicated Development Support
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Providing focused assistance for the engagement&apos;s feature development requirements.
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
                    The <span className="text-[#4A6A7C]">Outcome</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement established a focused approach to new feature development within the Angular project, emphasizing code quality, consistency, and dedicated support.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key outcomes include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Focused Feature Development:</strong> Development activities aligned with the project&apos;s new feature requirements.
                  </li>
                  <li>
                    <strong>Codebase-Aware Implementation:</strong> New functionality developed with consideration for the existing Angular application structure.
                  </li>
                  <li>
                    <strong>Maintainable Code:</strong> An emphasis on clean, well-organized implementation to support future maintenance.
                  </li>
                  <li>
                    <strong>Reusable Development Practices:</strong> Code structured with maintainability and potential reuse in mind.
                  </li>
                  <li>
                    <strong>Consistent Integration:</strong> New functionality designed to fit naturally into the existing project.
                  </li>
                  <li>
                    <strong>Clear Communication:</strong> Regular updates and prompt responses supporting collaboration throughout the engagement.
                  </li>
                  <li>
                    <strong>Dedicated Project Support:</strong> Development efforts concentrated on the specific requirements of a single engagement.
                  </li>
                </ul>

                {/* Outcome summary note / callout box */}
                <div className="bg-[#F6F9FA] border-l-4 border-[#4A6A7C] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The primary value of the engagement was providing dedicated front-end development support while maintaining a strong focus on code quality and project requirements. Further impact can be evaluated through measures such as features delivered, implementation time, defect rates, and maintenance effort.
                </div>

                {/* Stat Cards Grid (Branded with #4A6A7C Accent Bars) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#D5E2E8] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A6A7C]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#4A6A7C] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        01
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Single Engagement Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D5E2E8] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A6A7C]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#4A6A7C] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Codebase Alignment
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D5E2E8] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A6A7C]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#4A6A7C] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Angular
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        New Features Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Project Highlights
                  ----------------------------------------------------------------- */}
              <div className="flex flex-col space-y-6 pt-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Project <span className="text-[#4A6A7C]">Highlights</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Angular",
                      desc: "Front-end application development and feature implementation.",
                    },
                    {
                      title: "New Features",
                      desc: "Focused development aligned with the project's requirements.",
                    },
                    {
                      title: "Maintainable Code",
                      desc: "Clean, organized implementation designed to simplify ongoing maintenance.",
                    },
                    {
                      title: "Reusable Development",
                      desc: "Code practices that support future modifications and enhancements.",
                    },
                    {
                      title: "Project Integration",
                      desc: "New functionality aligned with the existing application's structure.",
                    },
                    {
                      title: "Dedicated Support",
                      desc: "Focused development assistance and clear communication throughout the engagement.",
                    },
                  ].map((highlight) => (
                    <div
                      key={highlight.title}
                      className="bg-white border border-[#D5E2E8] rounded-xl p-5 shadow-2xs hover:border-[#4A6A7C]/40 transition-colors"
                    >
                      <div className="text-base font-bold text-slate-900 mb-1">
                        {highlight.title}
                      </div>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        {highlight.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Technology Used
                  ----------------------------------------------------------------- */}
              <div id="technology" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Technology <span className="text-[#4A6A7C]">Used</span>
                </h2>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Angular:</strong> Front-end application development and feature implementation.
                  </li>
                  <li>
                    <strong>TypeScript:</strong> Structured application logic and maintainable code.
                  </li>
                  <li>
                    <strong>HTML:</strong> Front-end content structure.
                  </li>
                  <li>
                    <strong>CSS:</strong> Styling and visual presentation.
                  </li>
                  <li>
                    <strong>Component-Based Development:</strong> Organizing application functionality into manageable components.
                  </li>
                  <li>
                    <strong>Code Maintainability:</strong> Clean, structured implementation designed to support future development.
                  </li>
                </ul>
              </div>

            </div>

            {/* ===================================================================
                RIGHT / STICKY TABLE OF CONTENT (4 Cols)
                Exact match to LandDesign screenshot
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
                            ? "text-[#4A6A7C] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#4A6A7C]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A6A7C]" />
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
                    href="/pdfs/angular-project-new-features-case-study.pdf"
                    download="Angular-Project-New-Features-Case-Study.pdf"
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
          BOTTOM CTA SECTION ("Ready to Build?")
          ========================================================================= */}
      <section className="w-full bg-[#0A1622] text-white py-20 px-6 sm:px-10 border-t border-[#1E3547] relative overflow-hidden">
        {/* Subtle grey-bluish ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#5A7A8A]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#8AB0C0] text-xs font-bold uppercase tracking-wider">
            READY TO BUILD?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Want results like these for your business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your web application challenges. We&apos;ll show you the exact dedicated engineering architecture we would build for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#5A7A8A] hover:bg-[#4A6A7C] text-white font-semibold text-sm shadow-lg shadow-[#5A7A8A]/35 transition-all active:translate-y-0.5"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-[#5A7A8A]/30 transition-all"
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

