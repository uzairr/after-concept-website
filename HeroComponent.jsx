"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';

// ============================================================
// DATA FOR LOGOS
// ============================================================
const CLIENT_LOGOS = [
  {
    name: 'Samui Luxury Boats',
    className: 'samui-box',
    svg: `<div class="samui-wrapper"><img src="/images/samui-logo.png" alt="Samui Logo" class="samui-logo-img" /><span class="samui-text">Samui Luxury Boats</span></div>`
  },
  {
    name: 'MBC',
    className: 'mbc-box',
    svg: `<div class="mbc-wrapper"><img src="/images/mbc-logo.png" alt="MBC" class="mbc-logo-img" /></div>`
  },
  {
    name: 'Kindred Mortgage Group',
    svg: `<div class="kindred-wrapper"><img src="/images/kindred-logo.png" alt="Kindred Mortgage Group" class="kindred-logo-img" /></div>`
  },
  {
    name: 'LandDesign',
    className: 'landdesign-box',
    svg: `<div class="landdesign-wrapper"><img src="/images/landdesign-logo.png" alt="LandDesign" class="landdesign-logo-img" /></div>`
  },
  {
    name: 'Lake Effect',
    svg: `<div class="lake-effect-wrapper"><img src="/images/lake-effect-logo.png" alt="Lake Effect" class="lake-effect-logo-img" /></div>`
  },
  {
    name: '2U',
    className: 'carion-box',
    svg: `<div class="two-u-wrapper"><img src="/images/two-u-logo.png" alt="2U" class="two-u-logo-img" /></div>`
  }
];

const COLORS = ["#1d70b8", "#A31F34", "#00C853", "#0A2540", "#0070B8", "#0055A5", "#0071CE"];

const SLIDES_DATA = [
  [
    { t: "We Accelerate\nWith ", cls: "" },
    { t: "AI", cls: "highlight" }
  ],
  [
    { t: "We Bridge ", cls: "" },
    { t: "Hardware", cls: "highlight highlight-hardware" },
    { t: "\nand Software", cls: "" }
  ],
  [
    { t: "We Turn Data\nInto ", cls: "" },
    { t: "Edge", cls: "highlight highlight-edge" }
  ]
];

// Ensure you copy the 'images' folder to your Next.js 'public' directory
const SLIDE_IMAGES = [
  "/images/hero-bg-ai-orig.png",
  "/images/hero-bg-hardware-orig.png",
  "/images/hero-bg-data-orig.jpg"
];

export default function HeroComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterHtml, setTypewriterHtml] = useState('<span class="cursor"></span>');

  const seqTimeoutRef = useRef(null);
  const progressTimerRef = useRef(null);
  const overlayRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');
  const rafId = useRef(null);

  // Real-time scroll handler for header and fluid opacity fade overlay
  useEffect(() => {
    const updateOverlay = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 40);

      if (currentY <= 2) {
        scrollDirection.current = 'down';
      } else if (currentY > lastScrollY.current) {
        scrollDirection.current = 'down';
      } else if (currentY < lastScrollY.current) {
        scrollDirection.current = 'up';
      }
      lastScrollY.current = currentY;

      const heroHeight = window.innerHeight || 800;
      const peakY = heroHeight * 0.65;
      const exitY = heroHeight;

      let targetOpacity = 0;

      if (currentY <= 5 || currentY >= exitY) {
        targetOpacity = 0;
      } else if (currentY <= peakY) {
        // Increases/decreases by 10% on every scroll notch (0% up to 70%)
        const step = Math.min(7, Math.max(0, Math.round((currentY / peakY) * 7)));
        targetOpacity = step * 0.10;
      } else {
        // Fades out by 10% steps towards exit of hero (70% down to 0%)
        const remaining = Math.max(0, Math.min(1, (exitY - currentY) / (exitY - peakY)));
        const step = Math.min(7, Math.max(0, Math.round(remaining * 7)));
        targetOpacity = step * 0.10;
      }

      if (overlayRef.current) {
        overlayRef.current.style.opacity = targetOpacity.toFixed(2);
      }
    };

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateOverlay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOverlay();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Handle mobile nav body overflow
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileNavOpen]);

  // Handle slide typing and progress
  useEffect(() => {
    let chunkIdx = 0;
    let charIdx = 0;
    let currentHTML = "";
    let localTyping = true;

    const chunks = SLIDES_DATA[currentSlide];

    const typeNext = () => {
      if (!localTyping) return;
      if (chunkIdx >= chunks.length) {
        // Finished typing
        localTyping = false;
        setTypewriterHtml(currentHTML); // remove cursor
        seqTimeoutRef.current = setTimeout(() => {
          startProgress();
        }, 500); // Wait a bit before loader starts
        return;
      }

      const chunk = chunks[chunkIdx];

      // normal or highlight text
      if (charIdx < chunk.t.length) {
        const char = chunk.t.charAt(charIdx);
        charIdx++;

        let buildHTML = currentHTML;
        const currentTyped = chunk.t.substring(0, charIdx).replace(/\n/g, '<br />');
        if (chunk.cls) {
          buildHTML += `<span class="${chunk.cls}">${currentTyped}</span>`;
        } else {
          buildHTML += currentTyped;
        }

        setTypewriterHtml(buildHTML + '<span class="cursor"></span>');
        seqTimeoutRef.current = setTimeout(typeNext, 40); // typing speed
      } else {
        // Finished this chunk
        const fullChunk = chunk.t.replace(/\n/g, '<br />');
        if (chunk.cls) {
          currentHTML += `<span class="${chunk.cls}">${fullChunk}</span>`;
        } else {
          currentHTML += fullChunk;
        }
        chunkIdx++;
        charIdx = 0;
        typeNext();
      }
    };

    const startProgress = () => {
      const duration = 4000; // 4 seconds loader
      const startTime = performance.now();

      const updateProgress = (now) => {
        const elapsed = now - startTime;
        let p = elapsed / duration;
        if (p > 1) p = 1;

        const offset = 62.83 - (62.83 * p);

        const circle = document.querySelector(`#indicator-${currentSlide} .progress-ring-circle`);
        if (circle) circle.style.strokeDashoffset = offset;

        if (p < 1) {
          progressTimerRef.current = requestAnimationFrame(updateProgress);
        } else {
          // Done, go next
          setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
        }
      };

      progressTimerRef.current = requestAnimationFrame(updateProgress);
    };

    // Clean up previous timeouts/animations
    if (seqTimeoutRef.current) clearTimeout(seqTimeoutRef.current);
    if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);

    // reset dash offsets
    document.querySelectorAll('.progress-ring-circle').forEach(circle => {
      circle.style.strokeDashoffset = "62.83";
    });

    setTypewriterHtml('<span class="cursor"></span>');

    seqTimeoutRef.current = setTimeout(() => {
      typeNext();
    }, 500);

    return () => {
      localTyping = false;
      if (seqTimeoutRef.current) clearTimeout(seqTimeoutRef.current);
      if (progressTimerRef.current) cancelAnimationFrame(progressTimerRef.current);
    };
  }, [currentSlide]);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero-custom-container" id="hero">
        <Header />
        <div className="hero-bg-slider" id="heroBgSlider">
          {SLIDE_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`hero-img ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${img}')` }}
              role="img"
              aria-label="Background slide"
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div
          ref={overlayRef}
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backgroundColor: '#ffffff', pointerEvents: 'none',
            opacity: 0,
            willChange: 'opacity',
            transition: 'opacity 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        ></div>

        <div className="w-full lg:max-w-none min-[2500px]:max-w-none min-[2500px]:px-[590px] !ml-0 px-8 md:px-16 lg:px-[50px] hero-content" style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "100%", left: 0, right: "auto", flexDirection: "column" }}>
          <div className="hero-subtitle-badge">
            Engineering Software Solutions Since 2016
          </div>
          <h1 className="hero-title" style={{ margin: 0, padding: 0, textAlign: "left", alignSelf: "flex-start" }} dangerouslySetInnerHTML={{ __html: typewriterHtml }}></h1>
        </div>

        <div className="hero-horizontal-line-wrapper">
          <div className="hero-traveling-track">
            <div className="hero-traveling-light"></div>
          </div>
          <button
            className="scroll-indicator-container"
            aria-label="Scroll down"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <span className="scroll-text">SCROLL</span>
            <span className="scroll-vertical-line"></span>
          </button>
          <div className="hero-center-point"></div>
        </div>

        <div className="hero-logos-strip w-full lg:max-w-none min-[2500px]:max-w-none min-[2500px]:px-[590px] !ml-0 px-8 md:px-16 lg:px-[50px]" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", left: 0, right: "auto" }}>

          {/* Dots aligned just above the border */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, transform: "translateY(-100%)", width: "100%", paddingBottom: "24px" }}>
            <div className="hero-controls w-full lg:max-w-none min-[2500px]:max-w-none min-[2500px]:px-[590px] !ml-0 px-8 md:px-16 lg:px-[50px]" style={{ display: "flex", justifyContent: "flex-start", width: "100%", margin: 0 }}>
              <div className="hero-indicators">
                {SLIDE_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    id={`indicator-${idx}`}
                    className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                  >
                    <svg className="progress-ring" width="24" height="24">
                      <circle
                        className="progress-ring-circle"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="transparent"
                        r="10"
                        cx="12"
                        cy="12"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="hero-logos-label">
            Trusted by Market Leaders Serving 500M+ People
          </p>
          <div className="hero-logos-row">
            {CLIENT_LOGOS.map((logo, i) => (
              <div
                key={i}
                className={`hero-client-box ${logo.className || ''}`}
                style={{ '--hover-color': COLORS[i % COLORS.length] }}
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              >
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMPONENT STYLES ===================== */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --navy-950: #1c1917;
          --navy-900: #0a0a0a;
          --ink: #ffffff;
          --white: #ffffff;
          --lime: #e05628;
          --lime-dark: #c8481d;
          --font-body: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --container-w: 1400px;
          --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .hero-container {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0 1.5rem; /* px-6 */
        }
        @media (min-width: 768px) {
          .hero-container { padding: 0 3rem; /* md:px-12 */ }
        }
        @media (min-width: 1024px) {
          .hero-container { padding: 0 4rem; /* lg:px-16 */ }
        }
        
        button { font-family: inherit; cursor: pointer; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          transition: transform 0.25s var(--ease), background 0.25s var(--ease), box-shadow 0.25s var(--ease);
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--lime);
          color: var(--ink);
        }
        .btn-primary:hover {
          background: var(--lime-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(198, 241, 53, 0.35);
        }
        .btn-block { width: 100%; }

        /* HERO SECTION */
        .hero-custom-container {
          position: relative; min-height: 100dvh; height: auto; display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch;
          overflow: hidden; background: var(--navy-950);
        }
        .hero-bg-slider { position: absolute; inset: 0; }
        .hero-img {
          position: absolute; inset: 0; width: 100%; height: 100%; background-size: cover;
          background-repeat: no-repeat; background-position: center right; opacity: 0;
          transition: opacity 1.2s ease-in-out, transform 8s linear; transform: scale(1.05);
        }
        .hero-img.active { opacity: 1; transform: scale(1); }
        .hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(90deg, rgba(6, 15, 28, 0.82) 0%, rgba(6, 15, 28, 0.55) 35%, rgba(6, 15, 28, 0.18) 70%, rgba(6, 15, 28, 0.12) 100%);
        }
        .hero-overlay::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(6, 15, 28, 0.5) 0%, transparent 25%, transparent 75%, rgba(6, 15, 28, 0.4) 100%);
        }
        
        .hero-content { position: relative; flex: 1; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding-top: 120px; padding-bottom: 40px; width: 100%; }
        
        .hero-subtitle-badge {
          display: inline-flex;
          align-items: center;
          margin-bottom: 24px;
          background: rgba(14, 23, 38, 0.65);
          padding: 8px 20px 8px 16px;
          border-left: 4px solid #0a76db;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.01em;
          line-height: 1.4;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .hero-title { color: #fff !important; font-size: clamp(36px, 4.5vw, 64px); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; max-width: 800px; margin: 0; text-align: left; }
        .hero-title .highlight { color: #0a76db; }
        .hero-title .highlight-hardware { color: #86efac; } /* Mint / Light Green */
        .hero-title .highlight-edge { color: #c4b5fd; } /* Light Violet */
        .hero-title .cursor {
          display: inline-block; width: 20px; height: 0.85em; background: #fff; vertical-align: text-bottom;
          margin-left: 8px; animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-controls { position: relative; z-index: 2; margin-bottom: 24px; width: 100%; }
        .hero-indicators { display: flex; gap: 16px; align-items: center; }
        .indicator {
          position: relative; width: 12px; height: 12px; border-radius: 50%; background: rgba(255, 255, 255, 0.4);
          border: none; padding: 0; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center;
        }
        .indicator.active { background: #fff; }
        .progress-ring { position: absolute; top: -6px; left: -6px; width: 24px; height: 24px; transform: rotate(-90deg); opacity: 0; pointer-events: none; }
        .indicator.active .progress-ring { opacity: 1; }
        .progress-ring-circle { stroke-dasharray: 62.83; stroke-dashoffset: 62.83; transition: opacity 0.3s ease; }

        .hero-horizontal-line-wrapper {
          position: relative; width: 100%; height: 1px;
          background: rgba(10, 118, 219, 0.4); box-shadow: 0 0 8px rgba(10, 118, 219, 0.5); z-index: 10;
          display: flex; justify-content: center; align-items: center;
        }
        .hero-traveling-track {
          position: absolute; left: 0; right: 0; top: -20px; bottom: -20px;
          overflow: hidden; pointer-events: none; z-index: 11;
        }
        .hero-traveling-light {
          position: absolute; left: 0; top: 50%; width: 250px; height: 1px;
          transform: translateY(-50%);
          background: linear-gradient(to right, transparent 0%, rgba(10, 118, 219, 0.5) 60%, rgba(255, 255, 255, 0.9) 100%);
          animation: travelLight 5.5s linear infinite;
          will-change: transform;
        }
        .hero-traveling-light::after {
          content: ""; position: absolute; right: 0; top: 50%; transform: translateY(-50%) translateX(50%);
          width: 5px; height: 5px; background-color: #ffffff; border-radius: 50%;
          box-shadow: 0 0 12px 3px rgba(10, 118, 219, 1), 0 0 24px 6px rgba(10, 118, 219, 0.6);
        }
        @keyframes travelLight {
          0% { transform: translate3d(-250px, -50%, 0); }
          100% { transform: translate3d(100vw, -50%, 0); }
        }
        .hero-center-point {
          width: 4px; height: 4px; background-color: rgba(255, 255, 255, 0.7); border-radius: 50%;
          box-shadow: 0 0 8px rgba(10, 118, 219, 0.8);
          position: relative; z-index: 12;
        }
        .scroll-indicator-container {
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center;
          margin-bottom: 2px; animation: floatScroll 3.5s ease-in-out infinite; background: none; border: none; cursor: pointer; padding: 0;
        }
        @keyframes floatScroll {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.8; }
          50% { transform: translate(-50%, -6px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-indicator-container, .hero-traveling-light { animation: none; }
        }
        .scroll-text {
          font-family: inherit; font-size: 10px; font-weight: 500; letter-spacing: 0.25em; text-transform: uppercase;
          writing-mode: vertical-rl; transform: rotate(180deg); color: #e2e8f0; text-shadow: 0 0 6px rgba(10, 118, 219, 0.5); margin-bottom: 12px;
        }
        .scroll-vertical-line {
          width: 1px; height: 60px; background: linear-gradient(to bottom, rgba(10, 118, 219, 0), rgba(10, 118, 219, 0.9));
          box-shadow: 0 0 6px rgba(10, 118, 219, 0.5);
        }
        @media (max-width: 768px) {
          .scroll-vertical-line { height: 40px; }
          .scroll-text { font-size: 9px; margin-bottom: 8px; }
        }
        @keyframes scrollDot { 0% { top: -10px; opacity: 0; } 20% { opacity: 1; } 80% { top: 42px; opacity: 1; } 100% { top: 42px; opacity: 0; } }

        /* HERO LOGOS STRIP */
        .hero-logos-strip {
          position: relative; padding-bottom: 20px; z-index: 2; width: 100%;
        }

        .hero-logos-label { 
          padding-top: 16px;
          text-align: left; font-size: 14px; font-weight: 500; color: #fff; margin-bottom: 12px; opacity: 0.9; 
        }
        
        .hero-logos-row { 
          display: flex; align-items: center; justify-content: flex-start; gap: 8px; width: 100%; 
          overflow-x: auto; overflow-y: hidden; padding-bottom: 4px;
          -ms-overflow-style: none; scrollbar-width: none;
        }
        .hero-logos-row::-webkit-scrollbar { display: none; }
        .hero-client-box {
          flex: 1 1 0; min-width: 100px; max-width: 200px; display: flex; align-items: center; justify-content: center; height: 56px; padding: 0 16px;
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 4px; background: transparent;
          color: #fff; transition: border-color 0.3s ease-out, background 0.3s ease-out, color 0.3s ease-out; box-sizing: border-box;
        }
        .hero-client-box:first-child {
          padding: 0 24px;
        }
        .hero-client-box:hover {
          border-color: #ffffff; background: #ffffff; color: var(--hover-color, #0a0a0a);
        }
        .samui-box {
          max-width: 220px;
        }
        .mbc-box {
          flex: 0 0 auto;
          min-width: 105px;
          padding: 0 24px;
        }
        .landdesign-box {
          flex: 0 0 auto;
          padding: 0 24px;
        }
        .carion-box {
          flex: 0 0 auto;
          padding: 0 24px;
        }
        .hero-client-box svg { height: 32px; width: auto; max-width: 100%; object-fit: contain; }
        .two-u-wrapper { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .two-u-logo-img { max-height: 22px; width: auto; max-width: 100%; object-fit: contain; filter: brightness(0) invert(1) drop-shadow(0 0 0.5px rgba(255,255,255,0.3)); transition: all 0.3s ease-out; }
        .hero-client-box:hover .two-u-logo-img { filter: none; }

        .lake-effect-wrapper { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .lake-effect-logo-img { max-height: 44px; width: auto; max-width: 100%; object-fit: contain; filter: brightness(0) invert(1) drop-shadow(0 0 0.5px rgba(255,255,255,0.3)); transition: all 0.3s ease-out; }
        .hero-client-box:hover .lake-effect-logo-img { filter: none; }

        .samui-wrapper { display: flex; align-items: center; gap: 8px; justify-content: center; }
        .samui-logo-img { height: 24px; width: auto; filter: brightness(0) invert(1) drop-shadow(0 0 0.5px rgba(255,255,255,0.3)); transition: filter 0.3s ease-out; }
        .hero-client-box:hover .samui-logo-img { filter: none; }
        .samui-text { font-family: Arial, sans-serif; font-weight: 900; font-size: 14px; white-space: nowrap; line-height: 1; letter-spacing: 0.01em; }

        .kindred-wrapper { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .kindred-logo-img { max-height: 36px; width: auto; max-width: 100%; object-fit: contain; filter: brightness(0) invert(1) drop-shadow(0 0 0.5px rgba(255,255,255,0.3)); transition: filter 0.3s ease-out; }
        .hero-client-box:hover .kindred-logo-img { filter: none; }

        .landdesign-wrapper { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .landdesign-logo-img { max-height: 44px; width: auto; max-width: 100%; object-fit: contain; filter: brightness(0) invert(1); transition: filter 0.3s ease-out; }
        .hero-client-box:hover .landdesign-logo-img { filter: contrast(1.2); }

        .mbc-wrapper { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .mbc-logo-img { max-height: 36px; width: auto; max-width: 100%; object-fit: contain; filter: brightness(0) invert(1) drop-shadow(0 0 0.5px rgba(255,255,255,0.3)); transition: filter 0.3s ease-out; }
        .hero-client-box:hover .mbc-logo-img { filter: none; }

        @media (max-width: 768px) {
          .hero-logos-row { justify-content: flex-start; }
          .hero-client-box { flex: 0 0 auto; }
        }
      `}} />
    </>
  );
}







