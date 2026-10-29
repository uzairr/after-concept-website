"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UiUxScreenReviewCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#6366F1] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Using Provided Image as Background - BigQuery Style)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#07172A] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#1E3A5A] min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/ui-ux-screen-review-hero.jpg"
            alt="UI/UX Consultation and Screen Review for Improved Usability and Design Consistency"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#07172A] via-[#07172A]/95 sm:via-[#07172A]/85 md:via-[#07172A]/70 lg:via-[#07172A]/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07172A] via-transparent to-[#07172A]/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#132A4A]/85 border border-[#23486B] text-[#4DB8FF] text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full w-fit mb-6 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#4DB8FF] animate-pulse" />
                FEATURED BUILD · UI/UX CONSULTATION
              </div>

              {/* Title H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-normal leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] mb-8 drop-shadow-sm">
                UI/UX Consultation and Screen Review for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FF] via-[#38BDF8] to-[#6366F1]">
                  Improved Usability
                </span>
              </h1>

              {/* Description p */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                A UI/UX consultation engagement providing dedicated support for reviewing application screens, evaluating user experience consistency, identifying usability gaps, and delivering actionable recommendations for optimized interaction flows.
              </p>

              {/* Stats row (3 cols) */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1E3A5A] max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Screen Review
                  </div>
                  <div className="text-xs sm:text-sm text-[#9AA8C0] font-medium mt-1">
                    UX Consultation
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-[#9AA8C0] font-medium mt-1">
                    Design Consistency
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    User Flows
                  </div>
                  <div className="text-xs sm:text-sm text-[#9AA8C0] font-medium mt-1">
                    Optimized Experience
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BODY SECTION: White Background Rest of Page (Same as other case studies)
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
                      <div className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">UI/UX Screen Review</div>
                        <div className="text-xs text-[#6366F1] font-semibold">Consultation &amp; Usability</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Product Team Requiring UI/UX Screen Review
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Software Development · User Experience Design
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        UI/UX Consultation · Screen Review · Usability Analysis · Design Consistency Assessment
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "UI/UX Consultation",
                          "User Experience Evaluation",
                          "Usability Improvements",
                          "Screen Review",
                          "Design Consistency Analysis",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#EEF2FF] text-[#6366F1] border border-[#6366F1]/20 transition-colors shadow-2xs"
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
                      Modern digital products depend heavily on intuitive user experiences and consistent interface design. A product may offer powerful functionality, but if users struggle to navigate screens or complete tasks efficiently, adoption and satisfaction can suffer.
                    </p>
                    <p>
                      This engagement focused on providing dedicated UI/UX consultation and screen review services for a single project. The objective was to analyze the application&apos;s existing screens, evaluate the overall user experience, identify inconsistencies, and provide actionable recommendations to improve usability. The review process aimed to ensure that screens were not only visually consistent but also optimized for user interaction and task completion.
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
                  Modern digital products depend heavily on intuitive user experiences and consistent interface design. A product may offer powerful functionality, but if users struggle to navigate screens or complete tasks efficiently, adoption and satisfaction can suffer.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  This engagement focused on providing dedicated UI/UX consultation and screen review services for a single project. The objective was to analyze the application&apos;s existing screens, evaluate the overall user experience, identify inconsistencies, and provide actionable recommendations to improve usability. The review process aimed to ensure that screens were not only visually consistent but also optimized for user interaction and task completion.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#6366F1]">Challenges</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    As products evolve, maintaining a consistent and user-friendly experience becomes increasingly challenging. The client faced several concerns regarding the usability and effectiveness of existing application screens.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Challenges</h3>
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>
                      Some screens required evaluation to ensure they were intuitive and easy to navigate.
                    </li>
                    <li>
                      User interactions needed optimization to reduce complexity and improve efficiency.
                    </li>
                    <li>
                      Design consistency across different screens required assessment and refinement.
                    </li>
                    <li>
                      The application needed clearer user flows to help users complete tasks with confidence.
                    </li>
                    <li>
                      Existing interfaces had opportunities for usability improvements that could enhance the overall user experience.
                    </li>
                    <li>
                      The client required expert feedback focused specifically on screen review and UX quality.
                    </li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                  The ultimate goal was to create a more seamless experience where users could interact with the product naturally while benefiting from enhanced clarity, consistency, and functionality.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#6366F1]">Approach</span>
                  </h2>
                </div>

                {/* Numbered Section 1 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. <span className="text-[#6366F1]">Comprehensive Screen Analysis</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Each application screen was carefully reviewed to understand:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 list-disc pl-5">
                    <li>User journeys and navigation paths</li>
                    <li>Interface structure and hierarchy</li>
                    <li>Visual consistency across screens</li>
                    <li>Accessibility and ease of interaction</li>
                    <li>Areas where users may encounter confusion or friction</li>
                  </ul>
                </div>

                {/* Numbered Section 2 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#6366F1]">User Experience Assessment</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The review focused on identifying opportunities to:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 list-disc pl-5">
                    <li>Improve usability</li>
                    <li>Streamline user interactions</li>
                    <li>Reduce unnecessary complexity</li>
                    <li>Enhance information clarity</li>
                    <li>Support intuitive navigation patterns</li>
                  </ul>
                </div>

                {/* Numbered Section 3 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#6366F1]">Consistency Evaluation</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    A detailed assessment was performed to ensure consistency in:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 list-disc pl-5">
                    <li>Layout structures</li>
                    <li>Design components</li>
                    <li>User interaction patterns</li>
                    <li>Screen behaviors</li>
                    <li>Visual presentation</li>
                  </ul>
                </div>

                {/* Numbered Section 4 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. <span className="text-[#6366F1]">Improvement Recommendations</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The engagement produced actionable recommendations aimed at:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 list-disc pl-5">
                    <li>Optimizing user interactions</li>
                    <li>Creating clearer workflows</li>
                    <li>Strengthening design consistency</li>
                    <li>Delivering easier-to-use screens</li>
                    <li>Supporting long-term UX improvements</li>
                  </ul>
                </div>

                {/* Numbered Section 5 */}
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5. <span className="text-[#6366F1]">Dedicated Project Support</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The consultation maintained a dedicated focus on a single engagement, allowing feedback and recommendations to remain aligned with the project&apos;s specific goals and requirements.
                  </p>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Outcomes
                  ----------------------------------------------------------------- */}
              <div id="outcome" className="scroll-mt-28 flex flex-col space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#6366F1]">Outcomes</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    The screen review engagement delivered valuable insights and strategic recommendations that supported the project&apos;s usability objectives.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Results Achieved</h3>
                  <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                    <li>
                      Improved understanding of UX strengths and weaknesses across the application.
                    </li>
                    <li>
                      Identification of areas requiring usability enhancements.
                    </li>
                    <li>
                      Recommendations for more intuitive user experiences.
                    </li>
                    <li>
                      Better design consistency throughout the application&apos;s screens.
                    </li>
                    <li>
                      Optimized interaction flows to support user goals more effectively.
                    </li>
                    <li>
                      Clear guidance for future UI/UX improvements.
                    </li>
                    <li>
                      Dedicated consultation support focused entirely on the project&apos;s screen review requirements.
                    </li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                  By focusing on usability and consistency, the engagement helped establish a stronger foundation for a more user-centered product experience that can improve engagement, satisfaction, and efficiency.
                </p>

                {/* Outcome summary note */}
                <div className="bg-[#EEF2FF] border-l-4 border-[#6366F1] p-5 rounded-r-xl text-base text-[#4F46E5] font-medium leading-relaxed">
                  The primary value delivered was actionable design clarity: identifying high-friction interactions, resolving inconsistent screen behaviors, and establishing a unified UX blueprint.
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#6366F1]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#6366F1] tracking-tight">
                        Screen Review
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Dedicated Consultation Focus
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#6366F1]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#6366F1] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Design Consistency Alignment
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0DEE5] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#6366F1]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#6366F1] tracking-tight">
                        Optimized
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Interaction &amp; Usability Flows
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: Technology & Methods Used
                  ----------------------------------------------------------------- */}
              <div id="technology" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Technology &amp; <span className="text-[#6366F1]">Methods Used</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "1. UI/UX Consultation",
                      desc: "Strategic advisory focused on user-centered product design principles.",
                    },
                    {
                      title: "2. Screen Review Methodology",
                      desc: "Structured audit assessing layout hierarchy, readability, and visual rhythm.",
                    },
                    {
                      title: "3. User Experience Evaluation",
                      desc: "Comprehensive evaluation of task completion velocity and interaction friction.",
                    },
                    {
                      title: "4. Usability Analysis",
                      desc: "Heuristic analysis examining ease of navigation, clarity, and error prevention.",
                    },
                    {
                      title: "5. Design Consistency Assessment",
                      desc: "Verification of design tokens, component reuse, and UI pattern harmonization.",
                    },
                    {
                      title: "6. User Interaction Optimization",
                      desc: "Refining micro-interactions, input mechanisms, and responsive transitions.",
                    },
                    {
                      title: "7. UX Improvement Recommendations",
                      desc: "Actionable, prioritized roadmap for high-impact usability upgrades.",
                    },
                    {
                      title: "8. Application Screen Auditing",
                      desc: "Thorough inspection of end-to-end user journeys and state representations.",
                    },
                  ].map((method) => (
                    <div
                      key={method.title}
                      className="p-6 rounded-2xl bg-white border border-[#D0DEE5] hover:border-[#6366F1]/50 shadow-xs transition-all"
                    >
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{method.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{method.desc}</p>
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
                            ? "text-[#6366F1] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#6366F1]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Action in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#6366F1]/30 active:translate-y-0.5"
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
                    href="/pdfs/ui-ux-screen-review-consultation-case-study.pdf"
                    download="UI-UX-Screen-Review-Consultation-Case-Study.pdf"
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
      <section className="w-full bg-[#0A1931] text-white py-20 px-6 sm:px-10 border-t border-[#1E3A5A] relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#7DD3FF] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Looking for Dedicated UI/UX Screen Review &amp; Consultation?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your application screens and usability challenges. We&apos;ll evaluate your flows and deliver an actionable design improvement roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/success-stories"
              className="px-8 py-3.5 rounded-xl bg-[#132A4A] hover:bg-[#1E3A5A] text-slate-200 font-semibold text-sm border border-[#23486B] transition-all"
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
