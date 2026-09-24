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
    image: "/images/project-mbc.jpg",
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
    image: "/images/project-landdesign.jpg",
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
        value: "7+",
        label: "Competitor Retailers Tracked",
      },
    ],
    image: "/images/project-pricewatch.jpg",
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (nextIndex: number, direction: 1 | -1 = 1) => {
    if (nextIndex === current || isTransitioning) return;
    setPrev(current);
    setCurrent(nextIndex);
    setDir(direction);
    setIsTransitioning(true);
  };

  const nextSlide = () => {
    goToSlide((current + 1) % dummyCards.length, 1);
  };

  const prevSlide = () => {
    goToSlide((current - 1 + dummyCards.length) % dummyCards.length, -1);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrev(null);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-play effect: advances the slide every 10 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      goToSlide((current + 1) % dummyCards.length, 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [current, isTransitioning]);

  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] bg-white relative flex flex-col justify-center border-b border-gray-200 overflow-hidden">
      {/* Fixed UI Layer for Arrows & Pagination */}
      <div className="absolute inset-0 w-full pointer-events-none z-30 flex flex-col justify-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="pointer-events-auto hidden lg:flex absolute top-1/2 left-4 lg:left-5 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 items-center justify-center hover:border-gray-800 hover:bg-gray-50 transition-colors bg-white shadow-sm"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="pointer-events-auto hidden lg:flex absolute top-1/2 right-4 lg:right-5 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-400 items-center justify-center hover:border-gray-800 hover:bg-gray-50 transition-colors bg-white shadow-sm"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Full Width Sliding Track */}
      <div className="w-full relative z-10">
        <div className="grid">
          {dummyCards.map((card, idx) => {
            const isCurrent = idx === current;
            const isPrev = idx === prev;

            let zIndex = 0;
            let transform = 'translate3d(0, 0, 0)';
            let animation = 'none';
            const isVisible = isCurrent || isPrev;

            if (isCurrent) {
              zIndex = 20;
              if (isTransitioning) {
                animation = dir === 1
                  ? 'carouselSlideInRight 800ms cubic-bezier(0.33, 1, 0.68, 1) forwards'
                  : 'carouselSlideInLeft 800ms cubic-bezier(0.33, 1, 0.68, 1) forwards';
              }
            } else if (isPrev) {
              zIndex = 10;
              transform = 'translate3d(0, 0, 0)';
            }

            return (
              <div
                key={card.id}
                className="col-start-1 row-start-1 w-full"
                style={{
                  transform,
                  animation,
                  zIndex,
                  visibility: isVisible ? 'visible' : 'hidden',
                  pointerEvents: isCurrent ? 'auto' : 'none',
                  willChange: isTransitioning ? 'transform' : 'auto',
                }}
              >
                {/* Inner Content Centered */}
                <div className="max-w-[1500px] w-full mx-auto px-8 lg:px-24 bg-white flex items-center justify-center">
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full min-h-[400px]">
                    {/* Left Content */}
                    <div className="flex-1 relative">
                      <div className="inline-block px-6 py-3 mb-6 text-[#e05628] bg-[#e05628]/10 border-l-[3px] border-[#e05628] text-base lg:text-lg font-bold tracking-wide">
                        {card.tag}
                      </div>
                      <h2 className="text-3xl lg:text-[2.6rem] font-bold text-[#26215C] mb-12 leading-[1.15] tracking-tight">
                        {card.title}
                      </h2>

                      <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
                        {card.stats?.map((stat, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col border-l border-[#26215C] pl-6 py-1"
                          >
                            <span className="text-4xl lg:text-[2.5rem] font-bold text-[#26215C] mb-2 tracking-tight">
                              {stat.value}
                            </span>
                            <span className="text-[#26215C]/70 text-lg leading-relaxed max-w-[220px]">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex-1 w-full relative">
                      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-md border border-gray-100">
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{ willChange: "transform" }}
                          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-12 h-[24px]">
        {dummyCards.map((_, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={idx}
              onClick={() => goToSlide(idx, idx > current ? 1 : -1)}
              className="relative flex items-center justify-center w-[24px] h-[24px] rounded-full focus:outline-none group"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* Outer Ring */}
              <div
                className={`absolute inset-0 rounded-full border-2 border-[#1877F2] transition-all duration-300 ease-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />

              {/* Inner Dot */}
              <div
                className={`rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-[8px] h-[8px] bg-[#1877F2]"
                    : "w-[14px] h-[14px] bg-[#bfdbfe] group-hover:bg-[#93c5fd]"
                }`}
              />
            </button>
          );
        })}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes carouselSlideInRight {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes carouselSlideInLeft {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}} />
    </section>
  );
}
