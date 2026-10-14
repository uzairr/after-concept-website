"use client";

import React, { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    num: "01",
    title: "Stack Modernization",
    content: "Our AI-accelerated development methodology allows us to rapidly transition away from outdated and outmoded software to the high-performance, open-source foundations without operational downtime risk.",
    image: "/core-capabilities-mini-1.png"
  },
  {
    num: "02",
    title: "New Product Development",
    content: "We build scalable web platforms, internal tools, and backend systems designed around your business logic, not a generic SaaS template.",
    image: "/core-capabilities-mini-2.png"
  },
  {
    num: "03",
    title: "Managed Services",
    content: "We provide ongoing support and maintenance to ensure your systems remain performant, secure, and up-to-date.",
    image: "/core-capabilities-test.png"
  },
  {
    num: "04",
    title: "AI Gateways",
    content: "Integrate large language models into your existing infrastructure safely and securely.",
    image: "/core-capabilities-test.png"
  },
  {
    num: "05",
    title: "Enterprise AI",
    content: "Production AI, not demos. We build custom LLM assistants, RAG pipelines, and automation workflows that handle real user load.",
    image: "/core-capabilities-mini-5.png"
  }
];

export default function CoreCapabilities() {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="capabilities" className="w-full bg-white border-t border-b border-gray-200 py-16 lg:py-24 box-border font-sans">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Heading, Subtitle & Main Image */}
          <div className="w-full lg:w-[48%] xl:w-[46%] shrink-0 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#101828] mb-3 tracking-tight leading-tight">
              Core Capabilities
            </h2>
            <p className="text-[#475467] text-base lg:text-lg mb-8 leading-relaxed max-w-md">
              Delivering technical ingenuity and rapid innovation across industries.
            </p>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 relative group cursor-pointer shadow-xs">
              <img
                src="/core-capabilities-main.png"
                alt="Core Capabilities"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="w-full lg:flex-1">
            <div className="border-t border-gray-200 w-full">
              {capabilities.map((cap, index) => {
                const isExpanded = expanded === index;
                return (
                  <div
                    key={index}
                    className="border-b border-gray-200 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(index)}
                      className="w-full py-5 lg:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Number: Bold Black when Open, Muted Gray when Closed */}
                        <span
                          className={`text-xl sm:text-2xl font-bold transition-colors duration-200 ${
                            isExpanded ? "text-[#101828]" : "text-[#98A2B3] group-hover:text-gray-600"
                          }`}
                        >
                          {cap.num}
                        </span>

                        {/* Title: Bold Black when Open */}
                        <h3
                          className={`text-xl sm:text-2xl font-bold transition-colors duration-200 ${
                            isExpanded ? "text-[#101828]" : "text-[#101828] group-hover:text-gray-900"
                          }`}
                        >
                          {cap.title}
                        </h3>
                      </div>

                      {/* Opening Arrow ONLY when Closed (NO closing arrow when open) */}
                      {!isExpanded && (
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F2F4F7] group-hover:bg-[#EAECF0] flex items-center justify-center text-[#344054] transition-all duration-200 shrink-0 ml-4">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
                          </svg>
                        </div>
                      )}
                    </button>

                    {/* Expanded Content with Description and Thumbnail */}
                    {isExpanded && (
                      <div className="pb-6 lg:pb-7 flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-8 transition-all duration-300">
                        <p className="flex-1 text-[#475467] text-sm sm:text-[15px] lg:text-base leading-relaxed pl-9 sm:pl-12">
                          {cap.content}
                        </p>
                        <div className="w-[120px] h-[80px] sm:w-[135px] sm:h-[90px] rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200 shadow-xs cursor-pointer group/img ml-9 sm:ml-0">
                          <img
                            src={cap.image}
                            alt={cap.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

