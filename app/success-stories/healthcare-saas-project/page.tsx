"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HealthcareSaaSProjectCaseStudy() {
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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#4A8AB8] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* =========================================================================
          HERO SECTION (Dark background with Healthcare Blue Theme)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#081726] bg-gradient-to-r from-[#081726] via-[#0C2236] to-[#16334D] pt-28 pb-16 lg:pt-36 lg:pb-28 border-b border-[#2A5A7E]/60 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Healthcare blue ambient overlays */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: "rgba(74, 138, 184, 0.15)" }} 
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#4A8AB8]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#72A8CE]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F0FA] border border-[#4A8AB8]/30 text-[#4A8AB8] text-[10px] tracking-widest font-bold uppercase mb-6 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#4A8AB8] animate-pulse" />
                FEATURED BUILD - HEALTHCARE SAAS PROJECT
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[40px] font-bold leading-tight text-white mb-8 drop-shadow-sm">
                Healthcare SaaS Platform with <span className="text-[#72A8CE]">AI Consulting</span> &amp; Full-Stack Engineering
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-200 leading-[1.75] font-normal max-w-xl mb-10 drop-shadow-xs">
                Dedicated support combining AI consulting with React + Node.js engineering for scalable healthcare SaaS solution. We engineered an intelligent, HIPAA-compliant system delivering sub-second clinical queries and seamless clinical workflow automation.
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#2A5A7E]/50 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    HIPAA Compliance
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    3.5×
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Query Performance
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Uptime SLA
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Healthcare Dashboard Mockup */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center relative">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#2A5A7E] bg-[#0C2236]/90 backdrop-blur-md">
                <Image
                  src="/images/case-studies/healthcare-saas.jpg"
                  alt="Healthcare SaaS Platform Dashboard"
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
          MAIN BODY SECTION: LandDesign Layout in Healthcare Blue Palette
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
                  <div className="md:col-span-5 bg-white border border-[#D0E2F0] rounded-2xl p-6 shadow-sm flex flex-col space-y-6">
                    {/* Logo Header */}
                    <div className="pb-4 border-b border-[#E6F0FA] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4A8AB8] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 6v12m-6-6h12" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base leading-tight">Healthcare SaaS</div>
                        <div className="text-xs text-[#4A8AB8] font-semibold">AI &amp; Full-Stack Platform</div>
                      </div>
                    </div>

                    {/* Metadata fields */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Client / Partner
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Healthcare SaaS Project
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Industry
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        Healthcare Technology · SaaS Platforms
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Scope of Engagement
                      </div>
                      <div className="text-sm font-semibold text-slate-800">
                        AI Consulting · Full‑Stack Engineering (React + Node.js) · Dedicated Support
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech &amp; Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "React",
                          "Node.js",
                          "AI Consulting",
                          "Healthcare SaaS Architecture",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E6F0FA] text-[#4A8AB8] border border-[#4A8AB8]/20 transition-colors shadow-2xs"
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
                      This case study highlights our dedicated engineering partnership for an innovative Healthcare SaaS Platform. Combining strategic AI consulting with robust full-stack engineering in React and Node.js, we focused on architecting a secure, compliant, and highly responsive platform capable of streamlining critical clinical workflows.
                    </p>
                    <p>
                      By delivering dedicated technical support and applying enterprise healthcare software best practices, we eliminated performance bottlenecks, protected sensitive patient records, and seamlessly integrated intelligent assistance into practitioners&apos; day-to-day operations.
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
                  Modern healthcare platforms must balance stringent regulatory requirements with the need for immediate, intuitive clinician experiences. The Healthcare SaaS Project was conceived to empower healthcare practitioners and administrators with automated intelligence and unified patient management tools.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Our engagement focused on establishing an agile, high-velocity engineering foundation. By pairing specialized AI consulting with full-stack React and Node.js expertise, our dedicated team delivered end-to-end architectural enhancements that met demanding clinical benchmarks without compromise.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Challenges
                  ----------------------------------------------------------------- */}
              <div id="challenges" className="scroll-mt-28 flex flex-col space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  The <span className="text-[#4A8AB8]">Challenges</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Delivering an enterprise-grade healthcare SaaS system required resolving several critical technical and operational challenges:
                </p>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Strict HIPAA &amp; Data Compliance:</strong> Managing protected health information (PHI) with end-to-end encryption, strict role-based access controls, and verifiable audit logging.
                  </li>
                  <li>
                    <strong>Clinical Workflow Complexity:</strong> Unifying fragmented hospital and clinic processes into a single, cohesive, sub-second interactive interface.
                  </li>
                  <li>
                    <strong>AI Integration in High-Stakes Environments:</strong> Seamlessly embedding assistive artificial intelligence into clinical note-taking and documentation without risking data leakage or inaccuracies.
                  </li>
                  <li>
                    <strong>High Availability &amp; Zero Downtime:</strong> Meeting a 99.9% uptime requirement to ensure medical providers always have uninterrupted access to crucial patient data.
                  </li>
                  <li>
                    <strong>Legacy Latency Bottlenecks:</strong> Rebuilding slow database querying routines and disparate backend endpoints into modern, performant microservices.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
                  Addressing these challenges required dedicated engineering oversight, proactive security modeling, and an unwavering commitment to software quality.
                </p>
              </div>

              {/* -----------------------------------------------------------------
                  SECTION: The Approach
                  ----------------------------------------------------------------- */}
              <div id="approach" className="scroll-mt-28 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    The <span className="text-[#4A8AB8]">Approach</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    To deliver maximum impact, our team executed a targeted 4-pillar technical strategy:
                  </p>
                </div>

                {/* Point 1 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1. <span className="text-[#4A8AB8]">Strategic AI Consulting &amp; Governance</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Evaluated clinical workflows to identify high-impact opportunities for intelligent automation. Designed privacy-first prompt pipelines and local context caches that keep patient data secure while speeding up administrative documentation.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    2. <span className="text-[#4A8AB8]">Full-Stack Modernization with React &amp; Node.js</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Architected an accessible, modular React frontend paired with TypeScript and Tailwind CSS. Built high-throughput Node.js microservices with event-driven message queuing for rapid, asynchronous processing.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3. <span className="text-[#4A8AB8]">HIPAA-Compliant Cloud Infrastructure</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Configured zero-trust security architecture featuring automated encryption at rest and in transit, tokenized authentication, multi-region database failover, and comprehensive compliance auditing.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    4. <span className="text-[#4A8AB8]">Dedicated Support &amp; Continuous Optimization</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Provided direct, dedicated developer support throughout the software lifecycle. Monitored production telemetry, conducted load tests, and refined clinical user experiences in close collaboration with stakeholders.
                  </p>
                </div>
              </div>

              {/* ===============================================================
                  SECTION: The Systems Behind the Intelligence (Dark Box)
                  =============================================================== */}
              <div id="systems" className="scroll-mt-28 w-full bg-[#081726] border border-[#2A5A7E] rounded-xl p-6 lg:p-8 shadow-xl text-white my-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
                  The Systems Behind the Intelligence
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* System 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C2236] flex items-center justify-center shrink-0 text-[#72A8CE]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        React Modular Architecture
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        High-density, intuitive clinical dashboards and real-time telemetry.
                      </div>
                    </div>
                  </div>

                  {/* System 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C2236] flex items-center justify-center shrink-0 text-[#72A8CE]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        HIPAA Security Engine
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        End-to-end cryptographic controls and automated compliance verification.
                      </div>
                    </div>
                  </div>

                  {/* System 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C2236] flex items-center justify-center shrink-0 text-[#72A8CE]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        Node.js High-Throughput Engine
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Asynchronous microservices handling concurrent medical data streams.
                      </div>
                    </div>
                  </div>

                  {/* System 4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0C2236] flex items-center justify-center shrink-0 text-[#72A8CE]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        AI Clinical Assistant
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed mt-0.5">
                        Context-aware AI models assisting with clinical documentation.
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
                    The <span className="text-[#4A8AB8]">Outcome</span>
                  </h2>
                </div>

                <ul className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Regulatory Excellence:</strong> Achieved 100% HIPAA and SOC2 compliance alignment with zero security findings.
                  </li>
                  <li>
                    <strong>Accelerated Query Speeds:</strong> Reduced clinical record search and retrieval times by over 70%, yielding 3.5× faster access.
                  </li>
                  <li>
                    <strong>Seamless Provider Adoption:</strong> Intuitive component design reduced clinician onboarding time from days to under an hour.
                  </li>
                  <li>
                    <strong>High-Availability Delivery:</strong> Maintained a 99.9% uptime track record across peak clinical operating hours.
                  </li>
                  <li>
                    <strong>Scalable Growth Foundation:</strong> Successfully supported rapid multi-facility expansion without requiring infrastructure rewrites.
                  </li>
                </ul>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                  Overall, the engagement delivered an enterprise-ready healthcare platform that combines stringent security with modern, intelligent clinician experiences.
                </p>

                {/* Outcome summary note */}
                <div className="bg-[#E6F0FA] border-l-4 border-[#4A8AB8] p-5 rounded-r-xl text-base text-[#2A5A7E] font-medium leading-relaxed">
                  The primary value delivered was transformative clinical efficiency: unified workflows, enterprise security, and tailored AI assistance that empowers providers to focus on what matters most—patient care.
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="bg-white border border-[#D0E2F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A8AB8]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#4A8AB8] tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        HIPAA Compliance Standard
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0E2F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A8AB8]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#4A8AB8] tracking-tight">
                        3.5×
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Faster Query Processing
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D0E2F0] rounded-2xl p-7 shadow-xs relative overflow-hidden flex flex-col justify-between hover:border-[#4A8AB8]/60 hover:shadow-md transition-all">
                    <div>
                      <div className="text-4xl font-extrabold text-[#4A8AB8] tracking-tight">
                        99.9%
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-snug">
                        Platform Availability SLA
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
                  Technology <span className="text-[#4A8AB8]">Used</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-[#D0E2F0] hover:border-[#4A8AB8]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">React Framework</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Core frontend technology for responsive, component-driven clinical dashboards.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0E2F0] hover:border-[#4A8AB8]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Node.js &amp; TypeScript</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Ensured high-throughput, type-safe backend microservices and API gateways.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0E2F0] hover:border-[#4A8AB8]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">AI Consulting &amp; Models</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Specialized AI workflows for clinical summarization, document parsing, and intelligence.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D0E2F0] hover:border-[#4A8AB8]/50 shadow-xs transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">Healthcare SaaS Architecture</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Zero-trust, HIPAA-compliant cloud infrastructure with enterprise audit trails.
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
                            ? "text-[#4A8AB8] font-semibold"
                            : "text-[#334155] hover:text-[#0F172A] font-normal"
                        }`}
                      >
                        <span className="transition-colors group-hover:text-[#4A8AB8]">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A8AB8]" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Action in TOC */}
                <div className="mt-8 pt-4 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-[#4A8AB8] hover:bg-[#3B7299] text-white font-semibold text-xs transition-colors shadow-sm shadow-[#4A8AB8]/30 active:translate-y-0.5"
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
                    href="/pdfs/healthcare-saas-project-case-study.pdf"
                    download="Healthcare-SaaS-Project-Case-Study.pdf"
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
      <section className="w-full bg-[#081726] text-white py-20 px-6 sm:px-10 border-t border-[#16334D] relative overflow-hidden">
        {/* Subtle healthcare blue ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#4A8AB8]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#72A8CE] text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-5 tracking-tight text-white">
            Transform Your Healthcare Platform with AI &amp; Full-Stack Engineering
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your technical challenges and operational bottlenecks. We&apos;ll show you the exact architecture and systems we&apos;d build for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#4A8AB8] hover:bg-[#3B7299] text-white font-semibold text-sm shadow-lg shadow-[#4A8AB8]/30 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/success-stories"
              className="px-8 py-3.5 rounded-xl bg-[#0C2236] hover:bg-[#16334D] text-slate-200 font-semibold text-sm border border-[#2A5A7E] transition-all"
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
