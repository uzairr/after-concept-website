"use client";

import React, { useState, useEffect } from "react";

const dummyCards = [
  {
    id: 1,
    tag: "Why Market Leaders Trust Us",
    title:
      "Built an Intelligent Quoting Engine for Construction & Renovation Projects",
    stats: [
      {
        value: "€17.2K",
        label: "Revenue Generated",
      },
      {
        value: "7+",
        label: "Active Estimations",
      },
    ],
    image: "/images/project-mbc-v3.jpg",
  },
  {
    id: 2,
    tag: "Why Market Leaders Trust Us",
    title:
      "Unified Analytics Platform Connecting Cities, Projects, and Development Data",
    stats: [
      {
        value: "6+",
        label: "Active Jurisdictions",
      },
      {
        value: "4,300+",
        label: "Projects Tracked",
      },
    ],
    image: "/images/project-landdesign-v4.jpg",
  },
  {
    id: 3,
    tag: "Why Market Leaders Trust Us",
    title:
      "Built a Price Intelligence Engine Tracking 120K+ Products Across 9 Retailers",
    stats: [
      {
        value: "120K+",
        label: "Products Monitored",
      },
      {
        value: "9+",
        label: "Competitor Retailers Tracked",
      },
    ],
    image: "/images/project-pricewatch-v4.jpg",
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToSlide = (nextIndex: number) => {
    setCurrent(nextIndex);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % dummyCards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + dummyCards.length) % dummyCards.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play effect: advances slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dummyCards.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="w-full bg-white pt-6 md:pt-8 pb-8 relative overflow-hidden">
      {/* Inner Container */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative flex flex-col">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-2 lg:-left-2 top-[45%] -translate-y-1/2 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 z-10 shadow-sm transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-2 lg:-right-2 top-[45%] -translate-y-1/2 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 z-10 shadow-sm transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Sliding Track with horizontal flex layout */}
        <div
          className="w-full overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {dummyCards.map((card) => (
              <div key={card.id} className="w-full flex-shrink-0 min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                  {/* Left Content */}
                  <div className="flex flex-col">
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#FFF1EB] text-[#E86A2C] text-[12px] font-semibold border-l-[3px] border-l-[#FF6B35] mb-3 rounded-r self-start">
                      {card.tag}
                    </div>

                    <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] tracking-tight text-[#0B0B0F] md:text-black max-w-[550px]">
                      {card.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-8 mt-6 md:mt-8 max-w-[400px]">
                      {card.stats?.map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex flex-col pl-4 border-l border-gray-300"
                        >
                          <span className="text-[26px] md:text-[28px] font-bold text-black leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[13px] md:text-[14px] text-gray-500 font-normal leading-[1.3] mt-1.5">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image Box */}
                  <div className="relative w-full h-[300px] md:h-[340px] lg:h-[380px] flex items-center justify-center bg-[#F9F6F0] rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[300px] md:h-[340px] lg:h-[380px] object-contain p-4 md:p-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 3 Dots */}
        <div className="flex items-center justify-center gap-[12px] mt-12">
          {dummyCards.map((_, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="flex items-center justify-center focus:outline-none p-0.5 cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive ? (
                  <div className="w-[22px] h-[22px] rounded-full border-[1.8px] border-[#0A66C2] flex items-center justify-center">
                    <div className="w-[7px] h-[7px] bg-[#0A66C2] rounded-full" />
                  </div>
                ) : (
                  <div className="w-[9px] h-[9px] rounded-full bg-[#B8D8F8] hover:bg-[#8EC2F5] transition-colors" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
