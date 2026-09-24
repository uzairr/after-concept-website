"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import TimelineSection from "@/components/TimelineSection";
import HeroComponent from "../HeroComponent";
import CarouselSection from "@/components/CarouselSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
function AnimatedCounter({ value, color = "#e05628" }: { value: string; color?: string }) {
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 800;
          const steps = 40;
          const increment = targetNum / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNum) {
              setCount(targetNum);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <span ref={elementRef} style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

// Origin Horizontal Stats Section (Replaces the vertical stacked cards)
export function OriginSection() {
  const stats = [
    {
      num: "40+",
      label: "projects shipped",
    },
    {
      num: "2+",
      label: "years of proven market experience",
    },
    {
      num: "98%",
      label: "clients rate us better than others",
    },
    {
      num: "9+",
      label: "industries served across verticals",
    },
  ];

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-[#26215C] overflow-hidden py-16">


      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-20">
        {/* Top Content: Title & Description */}
        <div className="w-full mb-24 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Why AfterConcept
          </h2>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
            After Concept gives you one team with full ownership from idea to production. We bring strategy, design, engineering, and growth together under one roof, eliminating handoffs, protecting product vision, and delivering software built to perform in the real world.
          </p>
        </div>

        {/* Bottom Content: 4 Column Horizontal Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              
              {/* Giant Stat Number */}
              <div className="text-5xl md:text-[5.5rem] font-bold text-white mb-4 lg:mb-6 tracking-tighter leading-none">
                <AnimatedCounter value={stat.num} color="#ffffff" />
              </div>
              
              {/* Short Label */}
              <div className="text-sm md:text-base text-blue-50 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter Component
function CounterStat({
  value,
  suffix = "",
}: {
  value: number | string;
  suffix?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const targetNum = parseInt(String(value), 10);

  useEffect(() => {
    let animationFrame: number;
    const duration = 450;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );

            const easeOutProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.round(easeOutProgress * targetNum);

            if (elementRef.current) {
              elementRef.current.innerText = `${currentVal}${suffix}`;
            }

            if (progress < 1) {
              animationFrame = requestAnimationFrame(step);
            }
          };

          animationFrame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [targetNum, suffix]);

  return (
    <div
      ref={elementRef}
      className="result-num"
      style={{
        color: "#E05628",
        fontWeight: 800,
        fontSize: "2.75rem",
        lineHeight: 1,
        marginBottom: "12px",
        willChange: "contents",
      }}
    >
      0{suffix}
    </div>
  );
}

// Outcome Section Component
function OutcomeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let t = 0;
    let animationFrameId: number;

    const resize = () => {
      if (canvas.parentElement) {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 32 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
      }));
    };

    const drawWaves = () => {
      const layers = [
        {
          amp: 30,
          freq: 0.006,
          speed: 0.04,
          yBase: h * 0.3,
          color: "rgba(224, 86, 40, 0.05)",
        },
        {
          amp: 22,
          freq: 0.009,
          speed: -0.05,
          yBase: h * 0.5,
          color: "rgba(220, 80, 40, 0.04)",
        },
        {
          amp: 38,
          freq: 0.005,
          speed: 0.035,
          yBase: h * 0.7,
          color: "rgba(224, 86, 40, 0.03)",
        },
      ];
      layers.forEach((l) => {
        ctx.beginPath();
        ctx.moveTo(0, l.yBase);
        for (let x = 0; x <= w; x += 8) {
          const y = l.yBase + Math.sin(x * l.freq + t * l.speed) * l.amp;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = l.color;
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      drawWaves();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.strokeStyle = `rgba(224, 86, 40, ${0.15 * (1 - d / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(224, 86, 40, 0.4)";
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      t += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    init();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="outcome-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
          }}
        ></div>
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <span className="eyebrow">WHAT CLIENTS GAIN</span>
          <h2>Outcomes That Matter</h2>
          <p>
            Real figures from real engagements, with specifics filled in as each
            case study is finished.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-card">
            <CounterStat value={40} suffix="%" />
            <div className="result-label">
              Drop in onboarding drop-off after launch
            </div>
            <div className="result-source">Bultra Bank</div>
          </div>
          <div className="result-card">
            <CounterStat value={10} suffix="K+" />
            <div className="result-label">
              Daily transactions handled by a shipped fintech backend
            </div>
            <div className="result-source">Client engagement</div>
          </div>
          <div className="result-card">
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "6px" }}
            >
              <CounterStat value={10} suffix="" />
              <span
                style={{ fontSize: "36px", fontWeight: 800, color: "#e05628" }}
              >
                Days
              </span>
            </div>
            <div className="result-label">
              Average, kickoff to first release
            </div>
            <div className="result-source">Across projects</div>
          </div>
          <div className="result-card">
            <CounterStat value={98} suffix="%" />
            <div className="result-label">
              Projects delivered on time and on budget
            </div>
            <div className="result-source">Since founding</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ScrollObserver />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hero-title-responsive {
          font-family: "Plus Jakarta Sans", "DM Sans", system-ui, -apple-system, sans-serif !important;
          font-size: clamp(2.75rem, 7vw, 5.5rem) !important;
          font-weight: 600 !important;
          margin-top: 0px !important;
          margin-bottom: 24px !important;
          line-height: 1.05 !important;
          color: #ffffff !important;
          letter-spacing: -0.03em !important;
          text-align: left !important;
          white-space: normal !important;
          max-width: 42rem !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero-section-custom .wrap {
          margin-left: 0 !important;
          margin-right: auto !important;
          padding-left: clamp(24px, 5vw, 64px) !important;
          max-width: 100% !important;
          align-items: flex-start !important;
        }

        .hero-copy {
          margin-left: 0 !important;
          margin-right: auto !important;
          text-align: left !important;
          margin-bottom: 40px !important;
          max-width: 42rem !important;
        }

        .hero-subheading-cogent {
          color: rgba(255, 255, 255, 0.55) !important;
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: clamp(1rem, 1.2vw, 1.15rem) !important;
          line-height: 1.65 !important;
          font-weight: 400 !important;
          text-align: left !important;
          letter-spacing: -0.01em !important;
          margin-top: 0px !important;
          margin-bottom: 32px !important;
          max-width: 36rem !important;
          -webkit-font-smoothing: antialiased;
        }

        .hero-subheading-cogent strong {
          color: rgba(255, 255, 255, 0.95) !important;
          font-weight: 700 !important;
        }

        .hero-section-custom .wrap {
          padding-top: clamp(140px, 18vh, 200px) !important;
          padding-bottom: 40px !important;
        }

        @media (min-width: 1024px) and (max-width: 1536px) {
          .hero-section-custom .wrap {
            padding-left: clamp(32px, 4vw, 64px) !important;
            padding-top: clamp(150px, 19vh, 210px) !important;
            padding-bottom: 40px !important;
          }

          .hero-copy {
            max-width: 42rem !important;
            margin-bottom: 36px !important;
          }

          .hero-title-responsive {
            font-size: clamp(2.75rem, 7vw, 5.5rem) !important;
            margin-bottom: 24px !important;
            line-height: 1.05 !important;
            letter-spacing: -0.03em !important;
          }

          .hero-subheading-cogent {
            font-size: 1.05rem !important;
            line-height: 1.65 !important;
            margin-bottom: 32px !important;
            max-width: 36rem !important;
          }

          .hero-actions {
            gap: 20px !important;
          }

          .hero-actions .btn-primary,
          .hero-actions .btn-ghost {
            min-width: 210px !important;
            padding: 16px 36px !important;
            font-size: 0.98rem !important;
          }
        }

        @media (min-width: 1537px) {
          .hero-section-custom {
            min-height: 100vh !important;
          }

          .hero-section-custom .wrap {
            justify-content: flex-end !important;
            padding-top: 280px !important;
            padding-bottom: 40px !important;
            padding-left: clamp(24px, 3vw, 48px) !important;
            margin-left: 0 !important;
          }

          .hero-copy {
            margin-left: 0 !important;
            padding-left: 0 !important;
            max-width: 42rem !important;
          }

          .hero-title-responsive {
            font-size: clamp(2.75rem, 7vw, 5.5rem) !important;
            line-height: 1.05 !important;
            letter-spacing: -0.03em !important;
            margin-bottom: 24px !important;
          }

          .hero-subheading-cogent {
            font-size: 1.15rem !important;
            margin-bottom: 32px !important;
            max-width: 38rem !important;
          }
        }

        .results-grid .result-card,
        .service-card,
        .testi-card,
        .work-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease !important;
        }

        .results-grid .result-card:hover,
        .service-card:hover,
        .testi-card:hover,
        .work-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 25px -5px rgba(224, 86, 40, 0.18), 0 6px 15px -4px rgba(224, 86, 40, 0.12) !important;
          border-color: rgba(224, 86, 40, 0.35) !important;
        }

        .outcome-section .result-card {
          transition: none !important;
          transform: none !important;
          box-shadow: none !important;
          cursor: default !important;
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(8px) !important;
        }
        .outcome-section .result-card:hover {
          transform: none !important;
          box-shadow: none !important;
          border-color: inherit !important;
        }

        .tier-card {
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }
        .tier-card:hover {
          transform: none !important;
        }
        .tier-card.featured {
          transform: none !important;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05) !important;
        }
        .tier-card.featured:hover {
          transform: none !important;
        }

        .tier-card .tier-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 20px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background-color: transparent;
          color: #0f172a;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          text-align: center;
          margin-top: 16px;
        }
        .tier-card:not(.featured) .tier-cta:hover {
          border-color: #e05628 !important;
          color: #e05628 !important;
        }
        .tier-card.featured .tier-cta {
          background-color: #e05628 !important;
          border-color: #e05628 !important;
          color: #ffffff !important;
        }
        .tier-card.featured .tier-cta:hover {
          color: #ffffff !important;
          opacity: 0.95;
        }

        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .cogent-marquee .marquee-track {
          display: flex;
          gap: 64px;
          align-items: center;
          width: max-content;
          animation: scrollMarquee 140s linear infinite;
        }

        .cogent-marquee span {
          font-size: 11px !important;
          font-weight: 500 !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          color: rgba(255, 255, 255, 0.45) !important;
          white-space: nowrap;
        }

        .hero-actions .btn-primary,
        .hero-actions .btn-ghost {
          min-width: 210px;
          text-align: center !important;
          justify-content: center !important;
          display: inline-flex !important;
          align-items: center !important;
          box-sizing: border-box !important;
        }

        .hero-actions .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(224, 86, 40, 0.4) !important;
          background-color: #c8481d !important;
        }

        .hero-actions .btn-ghost:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
        }

        .hero-section-custom {
          min-height: 70vh;
        }

        @media (min-width: 1024px) {
          .hero-section-custom {
            min-height: 100vh !important;
            min-height: 100dvh !important;
          }
        }
      `,
        }}
      />

      <HeroComponent />
      
      <CarouselSection />

      <OriginSection />

      <CoreCapabilities />
      <TestimonialsCarousel />


      <Footer />
    </>
  );
}
