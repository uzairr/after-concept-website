"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollIndicator({ onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide on scroll down past 30px
      if (window.scrollY > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <button
        type="button"
        className={`scroll-indicator-container ${isVisible ? 'visible' : 'hidden'}`}
        aria-label="Scroll down"
        onClick={handleClick}
      >
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-vertical-line">
          <div className="scroll-dot"></div>
        </div>
      </button>

      <style jsx>{`
        .scroll-indicator-container {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          z-index: 20;
          transition: opacity 0.35s ease, transform 0.35s ease, visibility 0.35s;
        }

        .scroll-indicator-container.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .scroll-indicator-container.hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(8px);
          pointer-events: none;
        }

        .scroll-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 4.5px;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: #ffffff;
          opacity: 0.8;
          margin-bottom: 12px;
          line-height: 1;
          user-select: none;
        }

        .scroll-vertical-line {
          position: relative;
          width: 1px;
          height: 80px;
          background: rgba(255, 255, 255, 0.3);
          overflow: visible;
          display: flex;
          justify-content: center;
        }

        .scroll-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #7DD3FC;
          box-shadow: 0 0 12px rgba(125, 211, 252, 0.8), 0 0 4px rgba(125, 211, 252, 0.9);
          animation: scrollDotMove 2.2s ease-in-out infinite;
          will-change: top, opacity;
        }

        @keyframes scrollDotMove {
          0% {
            top: 0;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: calc(100% - 8px);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .scroll-text {
            font-size: 8.5px;
            letter-spacing: 3.5px;
            margin-bottom: 8px;
          }
          .scroll-vertical-line {
            height: 52px;
          }
          .scroll-dot {
            width: 7px;
            height: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-dot {
            animation: none;
            opacity: 1;
            top: calc(50% - 4.5px);
          }
        }
      `}</style>
    </>
  );
}
