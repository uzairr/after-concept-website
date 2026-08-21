"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import TimelineSection from "@/components/TimelineSection";

// Reusable Counter Component for smooth 0 to target number animation
function AnimatedCounter({ value }: { value: string }) {
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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

    return () => clearInterval(timer);
  }, [targetNum]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Compact Static Cards Grid Component
export function OriginStackedCards() {
  const stats = [
    {
      num: "40+",
      label: "Projects Shipped",
      desc: "Delivering end-to-end digital platforms, custom SaaS products, and enterprise applications with speed and precision.",
    },
    {
      num: "2+",
      label: "Years Building",
      desc: "Proven track record of turning complex technical challenges into scalable, production-ready solutions for business growth.",
    },
    {
      num: "98%",
      label: "Client Satisfaction",
      desc: "Focused on high quality, transparent execution, and continuous alignment with founder vision from day one.",
    },
    {
      num: "9+",
      label: "Industries Served",
      desc: "Building tailored software solutions across Fintech, Healthcare, Real Estate, Logistics, AI SaaS, and DevOps.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "420px",
        paddingTop: "0px",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            borderBottom: i !== stats.length - 1 ? "1px solid #e7e5e4" : "none",
            paddingBottom: i !== stats.length - 1 ? "18px" : "0",
          }}
        >
          <div
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "#e05628",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "2px",
            }}
          >
            <AnimatedCounter value={stat.num} />
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1c1917",
              marginBottom: "3px",
            }}
          >
            {stat.label}
          </div>

          <div
            style={{
              fontSize: "12.5px",
              lineHeight: "1.4",
              color: "#78716c",
              fontWeight: 400,
            }}
          >
            {stat.desc}
          </div>
        </div>
      ))}
    </div>
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
      <Header />

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
          animation: scrollMarquee 28s linear infinite;
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
      `,
        }}
      />

      {/* Hero Section */}
      <section
        className="hero hero-section-custom"
        style={{
          position: "relative",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
            filter: "none",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.6) 100%), radial-gradient(circle at 20% 50%, rgba(0,0,0,0.3) 0%, transparent 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Hero Content Container */}
        <div
          className="wrap"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="hero-copy"
            style={{ maxWidth: "42rem", textAlign: "left", width: "100%" }}
          >
            {/* MAIN HEADING */}
            <h1 className="hero-title-responsive">
              We Build Products SMEs truly need.
            </h1>

            {/* SUBHEADING */}
            <p className="hero-subheading-cogent">
              <strong>Production-ready digital products.</strong> Built by an
              embedded team of design &amp; engineering specialists. We partner
              with ambitious founders to go from vision to launch.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  backgroundColor: "#e05628",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(224, 86, 40, 0.35)",
                  borderRadius: "9999px",
                  padding: "16px 36px",
                  minWidth: "210px",
                }}
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="btn-ghost"
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "9999px",
                  padding: "16px 36px",
                  minWidth: "210px",
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Marquee Fixed to Hero Bottom */}
        <div
          className="marquee cogent-marquee"
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "16px 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track">
            <span>Landdesign</span>
            <span>MBC</span>
            <span>Lake Effect</span>
            <span>Carion</span>
            <span>Miray Group</span>
            <span>Samui</span>
            <span>Kindred Mortgage Group</span>

            <span>Landdesign</span>
            <span>MBC</span>
            <span>Lake Effect</span>
            <span>Carion</span>
            <span>Miray Group</span>
            <span>Samui</span>
            <span>Kindred Mortgage Group</span>
          </div>
        </div>
      </section>

      <section className="origin">
        <div className="wrap origin-grid" style={{ alignItems: "flex-start" }}>
          <div>
            <span className="eyebrow" style={{ color: "#e05628" }}>
              The origin story
            </span>
            <p className="origin-quote">
              "Founders came with half-built agency projects. We started After
              Concept as one team to own it all, design and engineering. No
              handoffs, no lost focus, just production delivery."
            </p>
            <p className="body">
              That's still how we work. One embedded team follows your product
              from the first discovery call through the growth work that happens
              after launch without a relay of subcontractors passing the baton.
            </p>
          </div>

          <div>
            <OriginStackedCards />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why this matters</span>
            <h2>The market you're actually competing in</h2>
            <p>
              Real, cited figures, not projections about After Concept, but the
              market context behind how we price and structure engagements.
            </p>
          </div>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-num">31%</div>
              <div className="result-label">
                Of software projects finish on time, on budget, with full scope
                industry-wide
              </div>
              <div className="result-source">
                Standish Group, CHAOS Report 2024
              </div>
            </div>
            <div className="result-card">
              <div className="result-num">$2K–15K</div>
              <div className="result-label">
                Typical cost of a clickable prototype, not a production-ready
                MVP
              </div>
              <div className="result-source">2026 MVP cost benchmarks</div>
            </div>
            <div className="result-card">
              <div className="result-num">85%</div>
              <div className="result-label">
                Of SMEs that successfully adopt new technology report increased
                sales
              </div>
              <div className="result-source">
                SME tech-adoption research, 2026
              </div>
            </div>
            <div className="result-card">
              <div className="result-num">62%</div>
              <div className="result-label">
                Of small-business digital transformations fail from buying tech
                before mapping the process
              </div>
              <div className="result-source">
                SME digitalisation research, 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ladder">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How we work together</span>
            <h2>A ladder, not a leap</h2>
            <p>
              Wherever you are, just validating an idea or ready to build,
              there's a next step sized to match.
            </p>
          </div>
          <div className="ladder-grid">
            <div className="tier-card">
              <span className="tier-num">01</span>
              <div className="tier-price">Free</div>
              <h3>Discovery call</h3>
              <p>
                A 30-minute conversation on your idea, your constraints, and
                whether we're the right technical co-pilot for it.
              </p>
              <div className="tier-meta">30 min · No obligation</div>
              <div className="tier-who">
                <b>Who it's for</b>Founders with a validated idea and a question
                about what building it actually takes.
              </div>
              <a href="#contact" className="tier-cta">
                Book the call
              </a>
            </div>
            <div className="tier-card featured">
              <span className="tier-badge">Most popular</span>
              <span className="tier-num">02</span>
              <div className="tier-price">$3K–$6K</div>
              <h3>Product sprint</h3>
              <p>
                A fixed-scope, fixed-price sprint, information architecture, UI,
                and a technical plan you can hand to any team.
              </p>
              <div className="tier-meta">2–3 weeks · Fixed price</div>
              <div className="tier-who">
                <b>Who it's for</b>Founders who need a concrete, fundable plan
                before committing to a full build.
              </div>
              <a href="#contact" className="tier-cta">
                Scope a sprint
              </a>
            </div>
            <div className="tier-card">
              <span className="tier-num">03</span>
              <div className="tier-price">$15K–$50K</div>
              <h3>Full build</h3>
              <p>
                Embedded team delivery of your product end to end, Discover,
                Design, Build, and the Scale work after launch.
              </p>
              <div className="tier-meta">Custom scope · In production</div>
              <div className="tier-who">
                <b>Who it's for</b>Founders ready to build and ship, with or
                without in-house engineers.
              </div>
              <a href="#contact" className="tier-cta">
                Start a build
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we build</span>
            <h2>Four practices, one embedded team</h2>
            <p>
              Not a generic template. Software built around your business logic,
              from first sprint to the growth work that comes after launch.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Software</h3>
              <p>
                Scalable web platforms, internal tools, and backend systems
                designed around your business logic, not a generic SaaS
                template. We've shipped fintech backends handling 10K+ daily
                transactions.
              </p>
              <div className="tag-row">
                <span className="tag-pill">Next.js</span>
                <span className="tag-pill">Node.js</span>
                <span className="tag-pill">PostgreSQL</span>
                <span className="tag-pill">Cloud</span>
              </div>
            </div>
            <div className="service-card">
              <h3>AI Integrations</h3>
              <p>
                Production AI, not demos. We build LLM assistants, RAG
                pipelines, and automation workflows that handle real user load
                and deliver measurable outcomes.
              </p>
              <div className="tag-row">
                <span className="tag-pill">LLMs</span>
                <span className="tag-pill">RAG</span>
                <span className="tag-pill">LangChain</span>
                <span className="tag-pill">OpenAI</span>
              </div>
            </div>
            <div className="service-card">
              <h3>Product Design</h3>
              <p>
                Interface and system design that earns user trust from first
                login. We work from information architecture to polished UI,
                building design systems that scale.
              </p>
              <div className="tag-row">
                <span className="tag-pill">Figma</span>
                <span className="tag-pill">Design Systems</span>
                <span className="tag-pill">UX Research</span>
              </div>
            </div>
            <div className="service-card">
              <h3>Growth Engineering</h3>
              <p>
                After launch is where most agencies disappear. We stay embedded
                to instrument analytics, run A/B tests, and iterate so your
                product compounds.
              </p>
              <div className="tag-row">
                <span className="tag-pill">Analytics</span>
                <span className="tag-pill">A/B Testing</span>
                <span className="tag-pill">SEO</span>
                <span className="tag-pill">DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />

      <OutcomeSection />

      <section
        id="work"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Projects that shipped</span>
            <h2>Continuously delivering for ambitious SME teams</h2>
            <p>
              A sample of the web apps, AI engines, and cloud platforms we've
              taken from concept to production.
            </p>
          </div>
          <div className="work-grid">
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">Bultra Bank</div>
              <div className="work-body">
                <div className="work-industry">Fintech</div>
                <h3>Bultra Bank</h3>
                <p>
                  A challenger bank entering a new market: secure auth,
                  transaction APIs, a customer dashboard, and onboarding flow.
                </p>
                <span className="work-link">Read the case study →</span>
              </div>
            </a>
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">EVT SaaS</div>
              <div className="work-body">
                <div className="work-industry">AI SaaS</div>
                <h3>EVT SaaS</h3>
                <p>
                  Greenfield AI operations platform with intelligent automation
                  workflows. Scope grew mid-engagement, driven by delivery
                  quality and communication.
                </p>
                <span className="work-link">View Project →</span>
              </div>
            </a>
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">Land Design</div>
              <div className="work-body">
                <div className="work-industry">Real Estate</div>
                <h3>Land Design</h3>
                <p>
                  Digital platform for land planning and property visualisation
                  with GIS tooling, parcels, zoning data, and interactive maps.
                </p>
                <span className="work-link">View Project →</span>
              </div>
            </a>
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">Mercato</div>
              <div className="work-body">
                <div className="work-industry">DevOps</div>
                <h3>Mercato</h3>
                <p>
                  Node.js performance overhaul and AWS infrastructure rebuild
                  for a high-throughput SaaS product.
                </p>
                <span className="work-link">View Project →</span>
              </div>
            </a>
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">Medicore</div>
              <div className="work-body">
                <div className="work-industry">Healthcare</div>
                <h3>Medicore</h3>
                <p>
                  Digital health platform for patient management and
                  telemedicine services.
                </p>
                <span className="work-link">View Project →</span>
              </div>
            </a>
            <a href="/case-studies" className="work-card">
              <div className="work-thumb">SkyRoutes</div>
              <div className="work-body">
                <div className="work-industry">Logistics</div>
                <h3>SkyRoutes</h3>
                <p>
                  Full-stack route optimisation tool with real-time tracking and
                  driver assignment.
                </p>
                <span className="work-link">View Project →</span>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <a href="/case-studies" className="btn-ghost">
              See all case studies
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">
              What clients say after the work ships
            </span>
            <h2>In their words</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-top">
                <span className="testi-mark">"</span>
                <span className="testi-company-badge">
                  Bultra Bank · Fintech
                </span>
              </div>
              <p className="testi-quote">
                They shipped a production-grade fintech product in weeks, and
                our onboarding drop-off rate fell 40% post-launch. Exceptional
                technical depth and clear communication throughout.
              </p>
              <div className="testi-footer">
                <div className="testi-photo">MV</div>
                <div>
                  <div className="testi-name">Marco Visibelli</div>
                  <div className="testi-role">Head of Engineering</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-top">
                <span className="testi-mark">"</span>
                <span className="testi-company-badge">EVT SaaS · AI</span>
              </div>
              <p className="testi-quote">
                The team laid the foundations of an ambitious product with
                remarkable clarity. When our brief grew in scope, we
                restructured into a larger contract together, a sign of genuine
                mutual trust.
              </p>
              <div className="testi-footer">
                <div className="testi-photo">M</div>
                <div>
                  <div className="testi-name">Michael</div>
                  <div className="testi-role">Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <span className="eyebrow">Ready when you are</span>
        <h2>Ready to build something great?</h2>
        <div className="flex justify-center mt-4">
          <a
            href="mailto:contact@afterconcept.io"
            className="btn-primary"
            style={{ backgroundColor: "#e05628" }}
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
