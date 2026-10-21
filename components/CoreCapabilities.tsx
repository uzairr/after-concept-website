"use client";

import React, { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    num: "01",
    title: "Stack Modernization",
    content: "Our AI-accelerated development methodology allows us to rapidly transition away from outdated and outmoded software to the high-performance, open-source foundations without operational downtime risk.",
    image: "/core-capabilities-mini-1-v3.png"
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
    <section id="capabilities" className="w-full bg-white py-16 lg:py-24 border-t border-b border-gray-200">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 min-[2500px]:max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column */}
          <div className="w-full lg:w-[44%] shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-black tracking-tight leading-[1.15] mb-3 sm:mb-4">
              Core Capabilities
            </h2>
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6 sm:mb-8 max-w-md">
              Delivering technical ingenuity and rapid innovation across industries.
            </p>
            <div className="w-full aspect-[645/360] rounded-[4px] overflow-hidden bg-gray-100 cursor-pointer group shadow-sm">
              <img
                src="/core-capabilities-main.png"
                alt="Core Capabilities"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[50%] flex-1 border-t border-gray-200">
            {capabilities.map((cap, index) => {
              const isExpanded = expanded === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-gray-200 transition-colors"
                >
                  <div 
                    onClick={() => setExpanded(isExpanded ? -1 : index)}
                    className="flex items-start justify-between gap-6 cursor-pointer select-none py-5 sm:py-6"
                  >
                    {/* Left: Number + Title + Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className={`w-8 sm:w-10 text-xl sm:text-2xl shrink-0 transition-colors ${
                          isExpanded ? "font-bold text-black" : "font-medium text-[#9CA3AF]"
                        }`}>
                          {cap.num}
                        </span>
                        <h3 className={`text-xl sm:text-2xl transition-colors ${
                          isExpanded ? "font-bold text-black" : "font-medium text-black"
                        }`}>
                          {cap.title}
                        </h3>
                      </div>

                      {/* Description when expanded */}
                      {isExpanded && (
                        <div className="pl-[48px] sm:pl-[64px] pt-4 pr-4">
                          <p className="text-[14px] sm:text-[15px] text-[#4B5563] leading-[1.65] max-w-[460px]">
                            {cap.content}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right: Thumbnail image when expanded, or Downward Arrow when collapsed */}
                    {isExpanded ? (
                      <div className="w-[125px] h-[120px] sm:w-[155px] sm:h-[148px] rounded overflow-hidden shrink-0 group cursor-pointer shadow-sm">
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors flex items-center justify-center shrink-0 mt-0.5">
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="#374151" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

