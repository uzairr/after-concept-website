"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollIndicator({ onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out indicator when user scrolls past 30px
      if (window.scrollY > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
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
        className={`scroll-indicator-root ${isVisible ? 'visible' : 'hidden'}`}
        aria-label="Scroll down"
        onClick={handleScrollClick}
      >
        <span className="scroll-text-label">SCROLL</span>
        <div className="scroll-line-track">
          <div className="scroll-glowing-dot"></div>
        </div>
      </button>

      <style jsx>{`
        .scroll-indicator-root {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          z-index: 20;
          transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        }

        .scroll-indicator-root.visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .scroll-indicator-root.hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(10px);
          pointer-events: none;
        }

        .scroll-text-label {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          user-select: none;
          line-height: 1;
        }

        .scroll-line-track {
          position: relative;
          width: 1px;
          height: 70px;
          background: rgba(255, 255, 255, 0.22);
          overflow: visible;
          display: flex;
          justify-content: center;
        }

        .scroll-glowing-dot {
          position: absolute;
          top: 0;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #7dd3fc;
          box-shadow: 0 0 10px 2px #38bdf8, 0 0 16px 4px rgba(56, 189, 248, 0.6);
          margin-left: -3px;
          animation: scrollDot 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          will-change: transform, opacity;
        }

        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(70px);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .scroll-text-label {
            font-size: 9px;
            letter-spacing: 0.22em;
            margin-bottom: 8px;
          }
          .scroll-line-track {
            height: 48px;
          }
          .scroll-glowing-dot {
            width: 5px;
            height: 5px;
            margin-left: -2.5px;
            animation: scrollDotMobile 2.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          }
          @keyframes scrollDotMobile {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateY(48px);
              opacity: 0;
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-glowing-dot {
            animation: none;
            opacity: 1;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `}</style>
    </>
  );
}
