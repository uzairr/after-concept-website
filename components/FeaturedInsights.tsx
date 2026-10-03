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
    <section className="w-full py-20 bg-white">
      <div className="w-full lg:max-w-none mx-auto px-6 lg:px-[50px] min-[2500px]:max-w-none min-[2500px]:px-[590px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-10">
          Featured Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((card) => {
            const isWhitepaper = card.tagType === "Whitepaper";
            const tagNormalText = isWhitepaper ? "text-[#e86e35]" : "text-[#9e7f09]";
            const tagNormalBg = isWhitepaper ? "bg-[#fff1eb]" : "bg-[#fef9c3]";

            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col h-[520px] bg-white border border-gray-200 overflow-hidden transition-colors duration-500 cursor-pointer block"
                style={{ "--hover-bg": card.hoverBg } as any}
              >
                {/* Image top section */}
                <div
                  className="w-full h-48 transition-all duration-500 group-hover:h-0 group-hover:opacity-0 bg-cover bg-center shrink-0 border-b-[4px]"
                  style={{ 
                    backgroundImage: `url(${card.image})`,
                    borderColor: card.hoverBg 
                  }}
                ></div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 transition-colors duration-500 group-hover:bg-[var(--hover-bg)]">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-1 transition-colors duration-500 ${tagNormalText} ${tagNormalBg} group-hover:bg-white`}
                    >
                      {card.tagType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 transition-colors duration-500 text-gray-900 group-hover:text-white line-clamp-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm transition-colors duration-500 text-gray-500 group-hover:text-white/95 line-clamp-4">
                    {card.description}
                  </p>

                  {/* Read More Link (Visible only on hover) */}
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-12 group-hover:mt-4">
                    <span className="text-white font-medium flex items-center gap-1.5 text-sm">
                      Read more
                      <svg
                        className="w-4 h-4"
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
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-sm transition-colors duration-500 text-gray-500 bg-gray-50 border border-gray-200 group-hover:bg-white group-hover:text-gray-900 group-hover:border-white"
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
