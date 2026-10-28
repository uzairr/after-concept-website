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
    aspect: "aspect-[1024/777] max-w-[530px]",
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
    aspect: "aspect-[1024/777] max-w-[530px]",
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
    aspect: "aspect-[1024/777] max-w-[530px]",
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
    <section className="w-full bg-white relative py-10 lg:py-14 border-b border-gray-200 overflow-hidden font-sans">
      {/* Outer Centered Container with Navigation Arrows */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14 relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="pointer-events-auto hidden lg:flex absolute top-1/2 left-2 xl:left-4 -translate-y-1/2 w-11 h-11 xl:w-12 xl:h-12 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all items-center justify-center bg-white shadow-sm z-30"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="pointer-events-auto hidden lg:flex absolute top-1/2 right-2 xl:right-4 -translate-y-1/2 w-11 h-11 xl:w-12 xl:h-12 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all items-center justify-center bg-white shadow-sm z-30"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Clipped Sliding Track */}
        <div className="max-w-[1140px] xl:max-w-[1180px] mx-auto w-full relative z-10 overflow-hidden">
          <div className="grid w-full">
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
                  <div className="w-full bg-white flex items-center justify-center py-2">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-16 w-full">
                      {/* Left Content */}
                      <div className="flex-1 max-w-[500px] lg:max-w-[530px] text-left">
                        {/* Tag Badge */}
                        <div className="inline-flex items-center px-3.5 py-1 mb-5 lg:mb-6 text-[#e05628] bg-[#FFF4EE] border-l-[3.5px] border-[#e05628] text-sm font-semibold tracking-[-0.01em]">
                          {card.tag}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.55rem] font-bold text-[#101828] mb-6 lg:mb-8 leading-[1.16] tracking-[-0.025em]">
                          {card.title}
                        </h2>

                        {/* Stats Row */}
                        <div className="flex flex-row items-start gap-8 sm:gap-11 lg:gap-12">
                          {card.stats?.map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex flex-col border-l border-gray-300 pl-4 lg:pl-4.5 py-0.5"
                            >
                              <span className="text-3xl lg:text-[2.35rem] xl:text-[2.5rem] font-bold text-[#101828] mb-1.5 tracking-[-0.02em] leading-none">
                                {stat.value}
                              </span>
                              <span className="text-[#475467] text-sm lg:text-[15px] font-normal leading-[1.38] tracking-normal max-w-[170px]">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Content - Image */}
                      <div className="w-full lg:w-[460px] xl:w-[500px] shrink-0 relative flex justify-end">
                        <div className={`w-full overflow-hidden bg-transparent cursor-pointer ${card.aspect || 'aspect-[16/10]'}`}>
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
        <div className="flex justify-center items-center gap-2.5 mt-8 lg:mt-10 h-[24px]">
          {dummyCards.map((_, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx, idx > current ? 1 : -1)}
                className="focus:outline-none flex items-center justify-center transition-all duration-300"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive ? (
                  /* Active Dot: Outer Ring with Centered Solid Dot */
                  <div className="w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] rounded-full border-2 border-[#0a76db] flex items-center justify-center transition-all duration-300">
                    <div className="w-[5px] h-[5px] lg:w-[6px] lg:h-[6px] rounded-full bg-[#0a76db]" />
                  </div>
                ) : (
                  /* Inactive Dot: Solid Light Blue Dot */
                  <div className="w-[7px] h-[7px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#bfdbfe] hover:bg-[#93c5fd] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>
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


