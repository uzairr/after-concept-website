"use client";

import React from "react";
import Link from "next/link";

type InsightCard = {
  id: string;
  image: string;
  tagType: "Whitepaper" | "Executive Brief";
  title: string;
  description: string;
  tags: string[];
  hoverBg: string;
  href: string;
};

const insights: InsightCard[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tagType: "Whitepaper",
    title: "Intelligence Flow in Healthcare: Mapping the Next Wave",
    description:
      "Healthcare organizations must focus on Intelligence Flow: the seamless and governed movement of data, insight, and decisions across the entire healthcare...",
    tags: ["Data & AI", "Leadership & Governance", "Healthcare"],
    hoverBg: "#cd5b20",
    href: "/insights/article-1",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    tagType: "Executive Brief",
    title: "Modernizing Legacy Systems Is Not a Technology Decision: It's a Business One",
    description:
      "This brief reframes modernization as a business portfolio decision: where to sequence investment, how to avoid the patterns that stall well-funded programs,...",
    tags: ["Leadership & Governance", "Travel"],
    hoverBg: "#907100",
    href: "/insights/article-2",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    tagType: "Executive Brief",
    title: "Critical Developments and Obstacles Technology Leaders Need to Tackle in 2026",
    description:
      "The challenges facing technology leaders in 2026 are not new, and that is precisely the problem. The question is no longer what to tackle, but why capable, well-...",
    tags: ["Leadership & Governance", "Data & AI", "Cybersecurity", "E-commerce", "Technology"],
    hoverBg: "#907100",
    href: "/insights/article-3",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="w-full py-10 lg:py-14 bg-white font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0f172a] tracking-tight mb-6 sm:mb-8">
          Featured Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {insights.map((card) => {
            const isWhitepaper = card.tagType === "Whitepaper";
            const tagNormalText = isWhitepaper ? "text-[#e86e35]" : "text-[#9e7f09]";
            const tagNormalBg = isWhitepaper ? "bg-[#fff1eb]" : "bg-[#fef9c3]";
            const tagBorder = isWhitepaper ? "border-l-2 border-[#e86e35]" : "border-l-2 border-[#9e7f09]";

            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col h-[400px] sm:h-[415px] lg:h-[425px] bg-white border border-gray-200 overflow-hidden transition-colors duration-500 cursor-pointer block shadow-sm hover:shadow-md"
                style={{ "--hover-bg": card.hoverBg } as any}
              >
                {/* Image top section */}
                <div
                  className="w-full h-36 sm:h-40 lg:h-[155px] transition-all duration-500 group-hover:h-0 group-hover:opacity-0 bg-cover bg-center shrink-0 border-b-[3px]"
                  style={{ 
                    backgroundImage: `url(${card.image})`,
                    borderColor: card.hoverBg 
                  }}
                ></div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 transition-colors duration-500 group-hover:bg-[var(--hover-bg)]">
                  {/* Category Tag */}
                  <div className="mb-2.5 sm:mb-3">
                    <span
                      className={`inline-block text-[11px] font-semibold px-2 py-0.5 transition-colors duration-500 ${tagNormalText} ${tagNormalBg} ${tagBorder} group-hover:bg-white group-hover:border-white`}
                    >
                      {card.tagType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-[18px] font-bold mb-2 sm:mb-2.5 leading-snug transition-colors duration-500 text-gray-900 group-hover:text-white line-clamp-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed transition-colors duration-500 text-gray-500 group-hover:text-white/95 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Read More Link (Visible only on hover) */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-10 group-hover:mt-3">
                    <span className="text-white font-medium flex items-center gap-1.5 text-xs sm:text-sm">
                      Read more
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Bottom Tags */}
                  <div className="mt-auto pt-3 sm:pt-4 flex flex-wrap gap-1.5">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-[2px] transition-colors duration-500 text-gray-500 bg-gray-50 border border-gray-200 group-hover:bg-white group-hover:text-gray-900 group-hover:border-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
