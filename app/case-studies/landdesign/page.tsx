"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandDesignCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#7BB62D] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Using Provided Image as Background)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#040C07] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-emerald-950/70 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landdesign-hero-bg.png"
            alt="LandDesign Intelligence App"
            fill
            priority
            className="object-cover object-right md:object-right-center"
            quality={95}
          />
          {/* Subtle gradient overlay to guarantee 100% crisp text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C07] via-[#040C07]/95 sm:via-[#040C07]/85 md:via-[#040C07]/70 lg:via-[#040C07]/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040C07] via-transparent to-[#040C07]/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (exact data from the second image) */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Client & Topic pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7BB62D]/20 border border-[#7BB62D]/40 text-[#8ED336] text-xs font-semibold uppercase tracking-wider mb-6 w-fit backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7BB62D] animate-pulse" />
                Featured Build · LandDesign
              </div>

              {/* Main Heading with clean spacing */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Automating Contract Data Collection Across Six US Jurisdictions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3E635] via-[#8ED336] to-[#7BB62D]">
                  LandDesign
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                We developed an automated contract intelligence platform that collects and consolidates awarded contract data, associated blueprints, and project details from six US jurisdictions into structured Excel spreadsheets and a centralized web dashboard.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-900/50 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    6
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    US jurisdictions automated
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    structured data accuracy
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    &lt;60s
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    dashboard refresh latency
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kept transparent so the hand-held phone in the background image displays in full view */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: Exact User Content + Clean Arbisoft Structure
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
                  <div className="md:col-span-5 bg-[#F9FAF6] border border-[#E3EDD6] rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#E3EDD6]">
                      <Image
                        src="/images/landdesign-card-logo-cropped.png"
                        alt="LandDesign"
                        width={140}
                        height={48}
                        className="h-12 w-auto object-contain"
                      />
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        LandDesign
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Real Estate Tech · Municipal Intelligence
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Automated Scraping, Blueprint Aggregation &amp; Web Dashboard
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Python", "Playwright", "FastAPI", "Next.js", "PostgreSQL", "Excel / openpyxl", "Tailwind"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#D5E5BD] text-slate-800 hover:border-[#7BB62D] hover:text-[#5B8920] transition-colors shadow-2xs"
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
                      <strong>Land Design</strong> required a more efficient way to collect and analyze awarded contract information across multiple US jurisdictions. Relevant contract records, blueprints, and project details were distributed across different public sources, making research time-consuming and limiting centralized visibility.
                    </p>
                    <p>
                      To address this challenge, we developed an automated contract intelligence platform that collects and consolidates data from six US jurisdictions into structured Excel spreadsheets and a centralized web dashboard. The solution streamlines contract research, improves access to project information, and provides a foundation for data-driven market analysis and opportunity assessment.
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
                  Land Design required a more efficient way to collect and analyze awarded contract information across multiple US jurisdictions. Relevant contract records, blueprints, and project details were distributed across different public sources, making research time-consuming and limiting centralized visibility.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  To address this challenge, we developed an automated contract intelligence platform that collects and consolidates data from six US jurisdictions into structured Excel spreadsheets and a centralized web dashboard. The solution streamlines contract research, improves access to project information, and provides a foundation for data-driven market analysis and opportunity assessment.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#649921]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Managing contract intelligence across multiple jurisdictions presented several challenges:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Fragmented Data Sources:</strong> Contract records and supporting documents were distributed across multiple government websites and information systems.
                  </li>
                  <li>
                    <strong>Manual Research Overhead:</strong> Collecting, extracting, and organizing contract information required repetitive effort.
                  </li>
                  <li>
                    <strong>Limited Market Visibility:</strong> Reviewing jurisdictions independently made cross-market comparisons more difficult.
                  </li>
                  <li>
                    <strong>Inconsistent Data Structures:</strong> Variations in source formats complicated the consolidation and analysis of contract records.
                  </li>
                  <li>
                    <strong>Delayed Opportunity Discovery:</strong> Manual research could delay the identification of relevant awarded projects.
                  </li>
                  <li>
                    <strong>Limited Scalability:</strong> Expanding research coverage increased the operational effort required to maintain the information.
                  </li>
                  <li>
                    <strong>Underutilized Business Intelligence:</strong> Raw contract records required structured organization to support meaningful research and strategic decisions.
                  </li>
                </ul>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#649921]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    We developed an automated contract intelligence platform that consolidates awarded contract data, associated blueprints, and relevant project details from six US jurisdictions.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. Automated Contract <span className="text-[#649921]">Data Collection</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Implemented automated scraping and aggregation workflows to collect relevant contract records and supporting project information from multiple jurisdictional sources.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Structured <span className="text-[#649921]">Excel Reporting</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Organized collected information into structured Excel spreadsheets, enabling efficient record review, filtering, comparison, and further analysis.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Centralized <span className="text-[#649921]">Web Dashboard</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Developed a centralized dashboard that provides a unified interface for accessing aggregated contract intelligence without requiring users to navigate each source independently.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Blueprint and <span className="text-[#649921]">Project Documentation</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Collected associated blueprints and project details alongside contract records, providing additional context for project research and preliminary opportunity assessment.
                  </p>
                </div>

                {/* Point 5 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. Cross-Jurisdiction <span className="text-[#649921]">Intelligence</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Consolidated information from six US jurisdictions into a unified research workflow, creating a foundation for comparing project activity, geographic markets, and awarding organizations.
                  </p>
                </div>

                {/* Point 6 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    6. Operational <span className="text-[#649921]">Efficiency</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Automated repetitive data collection and organization tasks, allowing researchers to focus more on evaluating relevant contracts and interpreting business information.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Intelligence
                  (Custom Feature Card matching the layout)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#05130A] border border-[#7BB62D]/35 rounded-2xl p-8 lg:p-10 shadow-xl shadow-[#7BB62D]/5 text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Intelligence
                </h3>

                <div className="flex flex-col space-y-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#7BB62D]/20 border border-[#7BB62D]/40 flex items-center justify-center shrink-0 text-[#8ED336]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Automated Data Collection
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Scraping and aggregation across six US jurisdictions.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Structured Data Management
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Consistent organization of contract records.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 text-teal-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Excel Reporting
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Accessible spreadsheets for detailed review and analysis.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-lime-500/20 border border-lime-500/40 flex items-center justify-center shrink-0 text-lime-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Blueprint Aggregation
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Centralized access to associated project documentation.
                      </div>
                    </div>
                  </div>

                  {/* System 5 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Web Dashboard
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Unified access to collected contract intelligence.
                      </div>
                    </div>
                  </div>

                  {/* System 6 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#7BB62D]/20 border border-[#7BB62D]/40 flex items-center justify-center shrink-0 text-[#8ED336]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Scalable Architecture
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        A foundation for expanding jurisdiction coverage and analytical capabilities.
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
                    The <span className="text-[#649921]">Outcome</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The project delivered an automated contract intelligence system that consolidates information from six US jurisdictions into a centralized research resource.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key outcomes include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Consolidated Research:</strong> Contract information from six jurisdictions is accessible through a unified workflow.
                  </li>
                  <li>
                    <strong>Reduced Manual Effort:</strong> Automated collection minimizes repetitive data gathering and organization.
                  </li>
                  <li>
                    <strong>Improved Data Accessibility:</strong> Structured Excel spreadsheets and a centralized dashboard simplify access to contract information.
                  </li>
                  <li>
                    <strong>Enhanced Opportunity Assessment:</strong> Contract records and supporting documents provide a basis for evaluating relevant projects.
                  </li>
                  <li>
                    <strong>Broader Market Visibility:</strong> Consolidated information supports comparisons across covered jurisdictions.
                  </li>
                  <li>
                    <strong>Future Business Intelligence:</strong> Structured records provide a foundation for contractor analysis, market research, and opportunity prioritization.
                  </li>
                </ul>

                {/* Outcome summary note */}
                <div className="bg-[#F8FAF4] border-l-4 border-[#7BB62D] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The immediate value is a more efficient and centralized research process. Further business impact can be assessed by measuring research time saved, relevant opportunities identified, and the contribution of contract intelligence to business development.
                </div>

                {/* Stat Cards Grid (Branded with #7BB62D Accent Bars) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#E3EDD6] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#7BB62D]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#7BB62D] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        6
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        US jurisdictions continuously consolidated
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E3EDD6] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#7BB62D]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#7BB62D] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        automated research workflow
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E3EDD6] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#7BB62D]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-12 bg-[#7BB62D] rounded-full absolute left-4 top-6" />
                    <div className="pl-4">
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Zero
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        repetitive data gathering tasks
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
                  Technology <span className="text-[#649921]">Used</span>
                </h2>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Automated Data Collection:</strong> Contract data scraping across six US jurisdictions.
                  </li>
                  <li>
                    <strong>Document Aggregation:</strong> Collection of associated blueprints and project details.
                  </li>
                  <li>
                    <strong>Data Structuring:</strong> Organized Excel reporting.
                  </li>
                  <li>
                    <strong>Web Development:</strong> Centralized contract intelligence dashboard.
                  </li>
                  <li>
                    <strong>Business Intelligence:</strong> Consolidated data supporting research, market comparisons, and opportunity assessment.
                  </li>
                </ul>
              </div>

            </div>

            {/* ===================================================================
                RIGHT / STICKY TABLE OF CONTENT (4 Cols)
                Exact match to the provided screenshot
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
                            ? "text-[#5B8920] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#5B8920]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7BB62D]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Action in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#7BB62D] hover:bg-[#6BA126] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#7BB62D]/30 active:translate-y-0.5"
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
          BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="w-full bg-[#050E09] text-white py-20 px-6 sm:px-10 border-t border-emerald-950/70 relative overflow-hidden">
        {/* Subtle green ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7BB62D]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#8ED336] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Want results like these for your business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your data bottlenecks and operational challenges. We&apos;ll show you the exact automated architecture we would build for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#7BB62D] hover:bg-[#6BA126] text-white font-semibold text-sm shadow-lg shadow-[#7BB62D]/35 transition-all active:translate-y-0.5"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-[#0C1F15] hover:bg-[#122E20] text-emerald-100 font-semibold text-sm border border-[#7BB62D]/30 transition-all"
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
