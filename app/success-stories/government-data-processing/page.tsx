"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GovernmentDataProcessingCaseStudy() {
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
            src="/case-studies/case-study-12-cover.jpg"
            alt="Government Data Processing Project"
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
                CASE STUDY · 11
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                Government Data Processing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#0066FF]">
                  Project
                </span>
              </h1>

              {/* Category Line */}
              <div className="text-sm sm:text-base font-semibold text-[#7DD3FC] tracking-wide mb-6">
                Government Services · Data Management · Research
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A Government Data Processing engagement, documented through its data extraction objective.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-950/80 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Dedicated
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    Project Support
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    Template Consistency
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Quality
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1 uppercase">
                    Data Accuracy
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
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">Government Data Processing</div>
                        <div className="text-xs text-[#0066FF] font-semibold">Data Extraction &amp; Entry</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        CLIENT / PARTNER
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Government Data Processing Project
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        INDUSTRY
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Government Services · Data Management · Research
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        SCOPE OF ENGAGEMENT
                      </div>
                      <div className="text-sm font-semibold text-slate-800 leading-relaxed">
                        Data Extraction · Data Entry · Spreadsheet Management · Government Document Processing
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        TECH &amp; CAPABILITIES
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Data Scraping",
                          "Data Extraction",
                          "Spreadsheet Entry",
                          "Research",
                          "Data Organization",
                          "Quality Assurance",
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
                      Government planning and development documents often contain large amounts of valuable information that must be collected, categorized, and organized for analysis and decision-making. Extracting this information manually requires accuracy, consistency, and close attention to detail.
                    </p>
                    <p>
                      This engagement focused on providing dedicated Data Extraction &amp; Entry support for government planning documents. The objective was to collect key information from multiple jurisdictions, identify relevant application types, and organize all extracted data into a structured spreadsheet format. By following a template-driven process, the project ensured that information remained standardized, reliable, and easy to use.
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
                  Government planning and development documents often contain large amounts of valuable information that must be collected, categorized, and organized for analysis and decision-making. Extracting this information manually requires accuracy, consistency, and close attention to detail.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  This engagement focused on providing dedicated Data Extraction &amp; Entry support for government planning documents. The objective was to collect key information from multiple jurisdictions, identify relevant application types, and organize all extracted data into a structured spreadsheet format. By following a template-driven process, the project ensured that information remained standardized, reliable, and easy to use.
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
                    Government documents are often presented in different formats and structures, making data collection a time-consuming and detail-oriented task.
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Extracting contact information from multiple local government planning documents.</li>
                    <li>Reviewing documents across different jurisdictions while maintaining consistency.</li>
                    <li>Correctly identifying and classifying each real estate development application type.</li>
                    <li>Organizing large volumes of information into a uniform spreadsheet structure.</li>
                    <li>Following detailed client instructions and predefined templates without deviations.</li>
                    <li>Maintaining a high level of accuracy throughout the data extraction process.</li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The project required careful attention to detail to ensure that every record remained accurate, complete, and useful for future analysis.
                </p>
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
                    1. <span className="text-[#0066FF]">Document Review &amp; Research</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Government planning documents were reviewed individually to identify relevant information required by the client. Each jurisdiction was examined carefully to locate the appropriate data fields.
                  </p>
                </div>

                {/* Numbered Section 2 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#0066FF]">Contact Information Extraction</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The extracted data included contact information from local government planning documents. Information was collected methodically to reduce errors and ensure completeness.
                  </p>
                </div>

                {/* Numbered Section 3 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#0066FF]">Application Classification</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Each document was analyzed to determine the specific type of real estate development application. This classification process helped organize records in a meaningful and searchable manner.
                  </p>
                </div>

                {/* Numbered Section 4 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. <span className="text-[#0066FF]">Spreadsheet Organization</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    All extracted information was entered into a structured spreadsheet format using the client&apos;s templates and instructions. This ensured that data remained consistent, standardized, and easy to review.
                  </p>
                </div>

                {/* Numbered Section 5 */}
                <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. <span className="text-[#0066FF]">Quality &amp; Consistency Checks</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    A template-driven approach was used throughout the engagement to maintain consistency across all records. This ensured that information remained uniform and ready for future use.
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
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The project delivered a well-organized dataset that enabled efficient access to government planning information.
                  </p>
                </div>

                <div className="pt-2">
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Successfully extracted contact information from government planning records.</li>
                    <li>Accurately identified and classified application types for multiple jurisdictions.</li>
                    <li>Produced organized spreadsheet records that were easy to search and analyze.</li>
                    <li>Maintained consistency using client-provided templates and guidelines.</li>
                    <li>Delivered dedicated project support focused entirely on data extraction and entry requirements.</li>
                    <li>Improved data accessibility through structured and standardized information management.</li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The engagement demonstrated the value of careful data extraction, detailed research, and structured spreadsheet management in handling large-scale government documentation projects.
                </p>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        Dedicated
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Single Engagement Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Template Consistency
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#0066FF]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
                        Verified
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Data Accuracy &amp; Quality
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
                      name: "Data Scraping",
                      desc: "Systematic data collection across public government portals and planning repositories.",
                    },
                    {
                      name: "Data Extraction",
                      desc: "Precise extraction of key fields, contact data, and filing records from diverse municipal sources.",
                    },
                    {
                      name: "Spreadsheet Entry",
                      desc: "Structured data entry into standardized sheets following client-provided specifications.",
                    },
                    {
                      name: "Microsoft Excel / Spreadsheet Management",
                      desc: "Template-driven spreadsheet organization ensuring clean, searchable, and uniform records.",
                    },
                    {
                      name: "Online Research",
                      desc: "Thorough multi-jurisdiction research to verify records and resolve missing information.",
                    },
                    {
                      name: "Data Classification",
                      desc: "Categorization of real estate development application types across diverse jurisdictions.",
                    },
                    {
                      name: "Government Document Review",
                      desc: "Detailed review of public planning notices, permits, and development filings.",
                    },
                    {
                      name: "Quality Assurance & Data Verification",
                      desc: "Multi-step quality checks and data integrity validation ensuring error-free records.",
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

                  {/* Download PDF Button - Sidebar - START */}
                  <div className="sidebar-pdf-download" style={{ marginTop: "12px" }}>
                    <a
                      href="/case-studies/Government_Data_Processing_Case_Study.pdf"
                      download="Government_Data_Processing_Case_Study.pdf"
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
            Need Dedicated Support for Your Data Processing Project?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your data extraction, entry, or document processing requirements. We&apos;ll provide dedicated support, structured templates, and reliable execution to organize your data at scale.
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
