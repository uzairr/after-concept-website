"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConnectingAppsThirdPartyServicesCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#4F46E5] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Using Provided Image as Background - LandDesign Style)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#001334] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0A2255]/70 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/api-integration-hero-bg.jpg"
            alt="Connecting Apps to Third-Party Services via REST"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#001334] via-[#001334]/95 sm:via-[#001334]/85 md:via-[#001334]/70 lg:via-[#001334]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001334] via-transparent to-[#001334]/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Client & Topic pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF2FF]/15 border border-[#818CF8]/40 text-[#A5B4FC] text-xs font-semibold uppercase tracking-wider mb-6 w-fit backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
                Featured Build · Third-Party Services
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Connecting Apps to Third-Party Services via{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5B4FC] via-[#818CF8] to-[#6366F1]">
                  REST
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A Third-Party Services engagement providing dedicated support for connecting existing applications to external services through RESTful APIs, troubleshooting integration issues, and improving system communication.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-blue-900/50 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    REST
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    API Integration
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Reliable Connectivity
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Direct
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Systems Integration
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kept transparent so the glowing API cloud, Stripe, AWS, Twilio, and server metrics in the background image display in full view */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: LandDesign Layout in Indigo / REST Palette
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
                  <div className="md:col-span-5 bg-[#F8F9FE] border border-[#DCE2FE] rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#DCE2FE] flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center text-[#4F46E5] font-bold shadow-xs">
                        <svg className="w-6 h-6 text-[#4F46E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900 leading-tight">Connecting Apps</div>
                        <div className="text-xs font-semibold text-[#4F46E5]">Third-Party Services</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Third-Party Services Engagement
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Software Development · Systems Integration · API Integration
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        RESTful API Integration, Third-Party Service Connectivity &amp; Integration Troubleshooting
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "RESTful APIs",
                          "API Integration",
                          "Third-Party Services",
                          "Systems Integration",
                          "Troubleshooting",
                          "Process Optimization",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#C7D2FE] text-slate-800 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors shadow-2xs"
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
                      <strong>This engagement</strong> focused on providing dedicated support for connecting existing applications to third-party services through RESTful APIs. Different data formats, authentication requirements, error handling, and performance considerations made reliable communication between systems a key challenge.
                    </p>
                    <p>
                      The objective was to support the integration process, help the development team diagnose and resolve technical issues, and improve existing integration workflows. The engagement emphasized practical API integration support and reliable communication between connected applications.
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
                  Modern applications frequently depend on external services to exchange information and support business operations. However, integrating different systems can introduce challenges involving data formats, authentication, error handling, and performance.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  This Third-Party Services engagement focused on providing dedicated API integration support for a single project. The work centered on connecting existing applications with external services through RESTful APIs, troubleshooting integration issues, and supporting improvements to existing integration processes.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  By focusing on systems integration and practical troubleshooting, the engagement aimed to help the development team address connectivity challenges and maintain more consistent communication between applications.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#4F46E5]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Connecting applications to third-party services introduces several technical considerations:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Fragmented System Communication:</strong> Existing applications and external services may use different interfaces and communication patterns.
                  </li>
                  <li>
                    <strong>Inconsistent Data Formats:</strong> Differences in request and response structures can complicate data exchange between systems.
                  </li>
                  <li>
                    <strong>Authentication Requirements:</strong> Integrations must account for the authentication mechanisms required by external services.
                  </li>
                  <li>
                    <strong>Error Handling:</strong> Failed requests, unexpected responses, and connectivity issues require appropriate investigation and resolution.
                  </li>
                  <li>
                    <strong>Performance Considerations:</strong> Integration workflows must account for response times and the reliability of external services.
                  </li>
                  <li>
                    <strong>Troubleshooting Complexity:</strong> Diagnosing issues across multiple connected systems can require collaboration between developers and integration specialists.
                  </li>
                  <li>
                    <strong>Process Optimization:</strong> Existing integration workflows may need refinement to improve maintainability and simplify ongoing support.
                  </li>
                </ul>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#4F46E5]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement focused on dedicated support for third-party service integrations, with an emphasis on RESTful APIs, troubleshooting, and systems integration.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. RESTful API Integration
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Focused on connecting existing applications to third-party services through RESTful APIs, supporting communication between systems and the exchange of relevant information.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Third-Party Service Connectivity
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Addressed integration requirements associated with connecting applications to external services, considering their communication interfaces and data exchange needs.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Authentication and Request Handling
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Focused on integration considerations involving authentication, API requests, responses, and the handling of communication errors.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Integration Troubleshooting
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Worked with the development team to investigate integration issues, identify potential causes, and support the resolution of connectivity and communication problems.
                  </p>
                </div>

                {/* Point 5 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. Systems Integration Support
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided dedicated assistance for the engagement&apos;s third-party service requirements, keeping the work focused on the project&apos;s integration objectives.
                  </p>
                </div>

                {/* Point 6 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    6. Process Optimization
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Supported improvements to existing integration processes, with the goal of making system communication and ongoing troubleshooting more manageable.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Integration
                  (Custom Feature Card matching LandDesign layout)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#0A0F1D] border border-indigo-900/60 rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-950/20 text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Integration
                </h3>

                <div className="flex flex-col space-y-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4F46E5]/25 border border-[#6366F1]/40 flex items-center justify-center shrink-0 text-[#A5B4FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        RESTful API Connectivity
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Connecting existing applications with external services through REST-based interfaces.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Third-Party Service Integration
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Supporting communication between applications and external platforms.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4F46E5]/25 border border-[#6366F1]/40 flex items-center justify-center shrink-0 text-[#A5B4FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Data Exchange
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Addressing request and response structures to support consistent information exchange.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Authentication Handling
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Considering authentication requirements when connecting to external services.
                      </div>
                    </div>
                  </div>

                  {/* System 5 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#4F46E5]/25 border border-[#6366F1]/40 flex items-center justify-center shrink-0 text-[#A5B4FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Error Investigation
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Working with developers to diagnose and resolve integration issues.
                      </div>
                    </div>
                  </div>

                  {/* System 6 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Integration Process Optimization
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Supporting improvements to existing workflows and systems communication.
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
                    The <span className="text-[#4F46E5]">Outcome</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement was structured around providing dedicated support for third-party service integration, RESTful API connectivity, and troubleshooting.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key objectives and areas of focus include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Dedicated Integration Support:</strong> Focused assistance for a single engagement and its third-party service requirements.
                  </li>
                  <li>
                    <strong>Application Connectivity:</strong> Support for connecting existing applications to external services through RESTful APIs.
                  </li>
                  <li>
                    <strong>Improved Troubleshooting:</strong> Collaboration with the development team to investigate and resolve integration issues.
                  </li>
                  <li>
                    <strong>Reliable Data Exchange:</strong> Attention to data formats, request handling, authentication, and communication errors.
                  </li>
                  <li>
                    <strong>Systems Integration:</strong> A focused approach to connecting applications and external services.
                  </li>
                  <li>
                    <strong>Process Improvement:</strong> Support for reviewing and improving existing integration workflows.
                  </li>
                </ul>

                {/* Outcome summary note / callout box */}
                <div className="bg-[#F8F9FE] border-l-4 border-[#4F46E5] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The engagement&apos;s primary objective was to provide dedicated API integration support and help address the technical challenges associated with third-party service connectivity. Specific performance improvements and quantitative results would need to be validated against project records.
                </div>

                {/* Metric Cards Grid (4 Cards as specified by user) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                  <div className="bg-white border border-[#DCE2FE] rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4F46E5]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#4F46E5] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        01
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                        Primary Focus
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5 leading-snug">
                        RESTful API Integration
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#DCE2FE] rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4F46E5]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#4F46E5] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        02
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                        Engagement Type
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5 leading-snug">
                        Dedicated Support
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#DCE2FE] rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4F46E5]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#4F46E5] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        03
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                        Integration Scope
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5 leading-snug">
                        Third-Party Services
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#DCE2FE] rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4F46E5]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#4F46E5] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        04
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2">
                        Technical Focus
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5 leading-snug">
                        Systems Integration &amp; Troubleshooting
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
                  Technology <span className="text-[#4F46E5]">Used</span>
                </h2>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>RESTful APIs:</strong> Interfaces for communication between applications and external services.
                  </li>
                  <li>
                    <strong>API Integration:</strong> Connecting existing applications to third-party platforms.
                  </li>
                  <li>
                    <strong>Authentication Handling:</strong> Addressing authentication requirements during integration.
                  </li>
                  <li>
                    <strong>Request and Response Handling:</strong> Working with API communication and data exchange.
                  </li>
                  <li>
                    <strong>Troubleshooting:</strong> Investigating integration errors and connectivity issues.
                  </li>
                  <li>
                    <strong>Systems Integration:</strong> Supporting communication between connected applications.
                  </li>
                  <li>
                    <strong>Process Optimization:</strong> Reviewing existing integration workflows and identifying opportunities for improvement.
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-slate-500 italic pt-2">
                  Note: The project information provided does not specify particular programming languages, frameworks, databases, or API platforms. These should only be added after confirming the actual technology stack.
                </p>
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
                            ? "text-[#4F46E5] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#4F46E5]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Actions in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#4F46E5]/30 active:translate-y-0.5"
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
                    href="/pdfs/connecting-apps-third-party-services-rest-case-study.pdf"
                    download="Connecting-Apps-Third-Party-Services-via-REST-Case-Study.pdf"
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
      <section className="w-full bg-[#0A0F1D] text-white py-20 px-6 sm:px-10 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle indigo ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#4F46E5]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#A5B4FC] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Need Reliable Integrations for Your Business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Connecting applications and third-party services should not create unnecessary complexity for your development team.
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your integration requirements, existing systems, and technical challenges. We can discuss an approach tailored to your systems and business needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-lg shadow-[#4F46E5]/35 transition-all active:translate-y-0.5"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-slate-700 transition-all"
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
