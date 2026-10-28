"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BigQueryDataPipelineCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0284C7] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Using Provided Image as Background - LandDesign Style)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#051329] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#0C2444] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bigquery-pipeline-hero-bg.png"
            alt="Data Download Transformation Stacking for BigQuery Upload"
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
              
              {/* Client & Topic pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE]/15 border border-[#38BDF8]/40 text-[#7DD3FC] text-xs font-semibold uppercase tracking-wider mb-6 w-fit backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                Featured Build · Data Engineering
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Data Download Transformation Stacking for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0284C7]">
                  BigQuery Upload
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A Data Engineering engagement providing dedicated support for downloading source data, transforming individual files into a consistent structure, and stacking datasets into a unified table prepared for BigQuery upload.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Pipeline
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Data Engineering
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Schema Consistency
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    BigQuery
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Unified Dataset
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Transparent spacer allowing background graphics to show through */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: LandDesign Structure in BigQuery Sky-Blue Palette
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
                  <div className="md:col-span-5 bg-[#F6FAFE] border border-[#BAE6FD]/80 rounded-2xl p-6 shadow-xs flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#BAE6FD]/60 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] border border-[#7DD3FC] flex items-center justify-center text-[#0284C7] font-bold shadow-xs">
                        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-base font-bold text-slate-900 leading-tight">BigQuery Pipeline</div>
                        <div className="text-xs font-semibold text-[#0284C7]">Data Engineering</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Data Engineering Engagement
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Data Engineering · Data Integration · Cloud Data Warehousing
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        Data Download, Transformation, Dataset Stacking &amp; BigQuery Upload Preparation
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Google BigQuery",
                          "Data Download",
                          "Data Transformation",
                          "Data Cleaning",
                          "Dataset Stacking",
                          "Schema Consistency",
                          "Data Engineering",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#BAE6FD] text-slate-800 hover:border-[#0284C7] hover:text-[#0284C7] transition-colors shadow-2xs"
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
                      <strong>The project</strong> focused on providing dedicated Data Engineering support for preparing source data for Google BigQuery uploads. Data collected from client-defined sources needed to be downloaded, cleaned, transformed, and combined into a consistent structure before being prepared for upload.
                    </p>
                    <p>
                      To address these requirements, the engagement centered on establishing a structured data preparation process. Individual files were transformed into a consistent format and stacked into a unified dataset, helping maintain schema consistency, reduce the risk of upload errors, and create a reliable table for querying. Clear communication throughout the engagement also helped keep the client informed about the project&apos;s progress.
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
                  Preparing data for cloud data warehouses requires more than simply collecting files and uploading them. Source data may contain inconsistent structures, different column arrangements, and formatting variations that complicate downstream processing and querying.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  This Data Engineering engagement focused on providing dedicated support for downloading, transforming, and stacking datasets for BigQuery upload. The objective was to prepare source files in a consistent structure and combine the transformed data into a unified dataset.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The approach emphasized reliable data collection, consistent transformation, and structured dataset preparation. By addressing these requirements before upload, the project aimed to simplify data handling, reduce avoidable rework, and establish a dependable foundation for querying data in BigQuery.
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
                  Preparing multiple source files for a consistent BigQuery upload presented several data engineering challenges:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Source Data Collection:</strong> Data needed to be collected reliably from client-defined sources before transformation could begin.
                  </li>
                  <li>
                    <strong>Inconsistent File Structures:</strong> Individual files could contain differences in formatting, column arrangements, and data organization.
                  </li>
                  <li>
                    <strong>Data Cleaning Requirements:</strong> Source data required cleaning and restructuring to establish a consistent format.
                  </li>
                  <li>
                    <strong>Transformation Complexity:</strong> Each file needed to be reshaped appropriately before it could be combined with the other datasets.
                  </li>
                  <li>
                    <strong>Dataset Stacking:</strong> Combining multiple transformed files into a single unified dataset required consistent data structures.
                  </li>
                  <li>
                    <strong>Schema Consistency:</strong> Maintaining compatible columns and data types was important for preparing the dataset for BigQuery upload.
                  </li>
                  <li>
                    <strong>Upload Reliability:</strong> Inconsistent structures could cause upload errors, validation issues, and unnecessary rework.
                  </li>
                  <li>
                    <strong>Client Communication:</strong> Clear progress updates were important for keeping the client informed throughout the engagement.
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
                    We focused on a structured data preparation workflow that covered source data downloading, transformation, cleaning, dataset stacking, and preparation for BigQuery upload.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. Data Download
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Collected source data reliably from the client-defined sources, establishing the input datasets required for the subsequent processing stages.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. Data Transformation
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Transformed individual files into a consistent structure, preparing their contents for consolidation and downstream use.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. Data Cleaning and Standardization
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Cleaned and reshaped the source files to improve consistency across the datasets. This step focused on preparing the data for a unified structure before stacking.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. Dataset Stacking
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Combined the transformed datasets into a single unified dataset, bringing the prepared records together in one consistent structure.
                  </p>
                </div>

                {/* Point 5 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. Schema Consistency
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Focused on maintaining a consistent dataset structure so the combined data could be prepared for BigQuery upload and used as a reliable table for querying.
                  </p>
                </div>

                {/* Point 6 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    6. BigQuery Upload Preparation
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Prepared the consolidated dataset for the intended BigQuery upload workflow, emphasizing structural consistency and reducing the risk of avoidable upload errors.
                  </p>
                </div>

                {/* Point 7 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    7. Dedicated Project Support
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided focused Data Engineering support for the engagement, with clear communication and progress updates throughout the project.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Data Pipeline
                  (Custom Feature Card matching LandDesign layout)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#051329] border border-sky-900/60 rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-950/20 text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Data Pipeline
                </h3>

                <div className="flex flex-col space-y-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/25 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 text-[#7DD3FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 4v12m0 0l-3-3m3 3l3-3" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Source Data Download
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Collection of data from client-defined sources for downstream processing.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Data Transformation
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Cleaning and reshaping individual files into a consistent structure.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/25 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 text-[#7DD3FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Data Standardization
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Establishing consistent data organization across the source files.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Dataset Stacking
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Combining transformed datasets into one unified dataset.
                      </div>
                    </div>
                  </div>

                  {/* System 5 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0284C7]/25 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 text-[#7DD3FC]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Schema Consistency
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Maintaining a consistent structure to support reliable data handling and querying.
                      </div>
                    </div>
                  </div>

                  {/* System 6 */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        BigQuery Data Preparation
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Preparing the consolidated dataset for upload to Google BigQuery.
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
                    The engagement focused on establishing a structured process for preparing datasets for BigQuery upload. By organizing the workflow around downloading, transformation, cleaning, and stacking, the project addressed the key requirements of consistent data preparation.
                  </p>
                </div>

                <div className="text-base sm:text-lg text-slate-800 font-semibold pt-1">
                  Key outcomes and intended benefits include:
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Structured Data Collection:</strong> Source data is collected from client-defined sources for subsequent processing.
                  </li>
                  <li>
                    <strong>Consistent Data Transformation:</strong> Individual files are cleaned and reshaped into a consistent structure.
                  </li>
                  <li>
                    <strong>Unified Dataset:</strong> Transformed data is combined into a single dataset for easier downstream handling.
                  </li>
                  <li>
                    <strong>Improved Schema Consistency:</strong> Standardized structures help reduce incompatibilities when preparing data for upload.
                  </li>
                  <li>
                    <strong>Reduced Risk of Upload Errors:</strong> Consistent data organization helps prevent avoidable errors and rework.
                  </li>
                  <li>
                    <strong>Query-Ready Data Foundation:</strong> A unified dataset provides a foundation for querying after successful upload to BigQuery.
                  </li>
                  <li>
                    <strong>Dedicated Engineering Support:</strong> Focused project assistance and clear progress updates support the engagement&apos;s requirements.
                  </li>
                </ul>

                {/* Outcome summary note / callout box */}
                <div className="bg-[#F6FAFE] border-l-4 border-[#0284C7] p-5 rounded-r-xl text-base text-slate-700 leading-relaxed">
                  The primary value of the engagement was a more structured approach to data preparation, helping ensure that source files were consistently transformed and consolidated before BigQuery upload. Quantitative improvements, such as processing time saved or error reduction, would need to be validated against actual project measurements.
                </div>

                {/* 4 Outcome Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                  <div className="bg-white border border-[#BAE6FD]/80 rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#0284C7] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-lg font-bold text-slate-900 tracking-tight">
                        Data Download
                      </div>
                      <div className="text-xs text-slate-600 font-normal mt-2 leading-relaxed">
                        Reliable collection from client-defined sources.
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#BAE6FD]/80 rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#0284C7] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-lg font-bold text-slate-900 tracking-tight">
                        Data Transformation
                      </div>
                      <div className="text-xs text-slate-600 font-normal mt-2 leading-relaxed">
                        Consistent cleaning and restructuring of source files.
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#BAE6FD]/80 rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#0284C7] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-lg font-bold text-slate-900 tracking-tight">
                        Dataset Stacking
                      </div>
                      <div className="text-xs text-slate-600 font-normal mt-2 leading-relaxed">
                        Multiple transformed datasets combined into one unified dataset.
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#BAE6FD]/80 rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0284C7]/60 hover:shadow-md transition-all">
                    <div className="w-1.5 h-10 bg-[#0284C7] rounded-full absolute left-4 top-5" />
                    <div className="pl-4">
                      <div className="text-lg font-bold text-slate-900 tracking-tight">
                        BigQuery Preparation
                      </div>
                      <div className="text-xs text-slate-600 font-normal mt-2 leading-relaxed">
                        A consistent dataset prepared for the intended upload workflow.
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

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Google BigQuery:</strong> Target data warehouse for the prepared dataset.
                  </li>
                  <li>
                    <strong>Data Download:</strong> Collection of source data from client-defined sources.
                  </li>
                  <li>
                    <strong>Data Transformation:</strong> Cleaning and reshaping individual files into a consistent structure.
                  </li>
                  <li>
                    <strong>Data Standardization:</strong> Maintaining consistent organization across datasets.
                  </li>
                  <li>
                    <strong>Dataset Stacking:</strong> Combining transformed files into one unified dataset.
                  </li>
                  <li>
                    <strong>Schema Consistency:</strong> Preparing a structured dataset for reliable upload and querying.
                  </li>
                  <li>
                    <strong>Data Engineering:</strong> Coordinating the preparation workflow from source collection through upload preparation.
                  </li>
                </ul>

                <p className="text-xs sm:text-sm text-slate-500 italic pt-2">
                  Note: Google BigQuery is identified in the project information as the target platform. Specific programming languages, transformation frameworks, orchestration tools, and upload methods were not provided and should be added only after confirmation.
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
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#0284C7]/30 active:translate-y-0.5"
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
                    href="/pdfs/data-download-transformation-stacking-bigquery-case-study.pdf"
                    download="Data-Download-Transformation-Stacking-for-BigQuery-Upload-Case-Study.pdf"
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
      <section className="w-full bg-[#051329] text-white py-20 px-6 sm:px-10 border-t border-[#0C2444] relative overflow-hidden">
        {/* Subtle sky ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#7DD3FC] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Need Reliable, BigQuery-Ready Data?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Inconsistent source files and unstructured datasets can make data preparation more complicated than it needs to be.
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your data sources, transformation requirements, and data engineering challenges. We&apos;ll discuss an approach tailored to your data pipeline and reporting needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-lg shadow-[#0284C7]/35 transition-all active:translate-y-0.5"
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
