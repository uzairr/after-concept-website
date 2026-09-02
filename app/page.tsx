"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import TimelineSection from "@/components/TimelineSection";

// Reusable Counter Component
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

// Modern & Polished Cards Grid Component for Origin Section
export function OriginStackedCards() {
  const stats = [
    { num: "40+", label: "Projects Shipped", sub: "Production-ready builds" },
    { num: "2+", label: "Years Building", sub: "End-to-end expertise" },
    { num: "98%", label: "Client Retention", sub: "Long-term relationships" },
    { num: "9+", label: "Industries Served", sub: "SaaS, Fintech & AI" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        width: "100%",
        height: "100%",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="origin-stat-card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px 24px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.02)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent bar on card hover */}
          <div
            className="card-top-indicator"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: "#e05628",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          />

          <div
            style={{
              fontSize: "clamp(2.2rem, 3.2vw, 2.75rem)",
              fontWeight: 800,
              color: "#e05628",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            <AnimatedCounter value={stat.num} />
          </div>

          <div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#64748b",
                fontWeight: 400,
              }}
            >
              {stat.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Intersection-Observer Counter Component
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

// Canvas Wave & Particle Background Section
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
      if (canvas && canvas.parentElement) {
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
        />
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
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#e05628",
                }}
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

// Main Page Component Export
export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />

      <style
        dangerouslySetInnerHTML={{
          __html: `
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

        /* Origin Cards Hover Custom Animation */
        .origin-stat-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .origin-stat-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(224, 86, 40, 0.3) !important;
          box-shadow: 0 16px 30px -10px rgba(224, 86, 40, 0.12) !important;
        }
        .origin-stat-card:hover .card-top-indicator {
          opacity: 1 !important;
        }

        .outcome-section .result-card {
          transition: none !important;
          transform: none !important;
          box-shadow: none !important;
          cursor: default !important;
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(8px) !important;
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

        .hero-subheading-cogent {
          color: rgba(255, 255, 255, 0.6) !important;
          font-family: var(--font-dm-sans), sans-serif !important;
          font-size: clamp(1rem, 1.15vw, 1.05rem) !important;
          line-height: 1.55 !important;
          font-weight: 400 !important;
          text-align: left !important;
          letter-spacing: -0.01em !important;
        }

        .hero-subheading-cogent strong {
          color: #ffffff !important;
          font-weight: 700 !important;
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
          min-height: 100vh;
          height: 100vh;
        }

        @media (max-width: 991px) {
          .origin-grid-custom {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-height: 700px) {
          .hero-section-custom {
            height: auto !important;
            min-height: 100vh !important;
          }
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

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            paddingTop: "clamp(130px, 16vh, 180px)",
            paddingBottom: "40px",
            paddingLeft: "clamp(48px, 6vw, 96px)",
            paddingRight: "32px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="hero-copy"
            style={{ maxWidth: "850px", textAlign: "left" }}
          >
            <h1
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
                fontWeight: 600,
                marginTop: "0px",
                marginBottom: "24px",
                lineHeight: "1.05",
                color: "#ffffff",
                letterSpacing: "-0.035em",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              We build <br />
              products SMEs <br />
              truly need.
            </h1>

            <p
              className="hero-subheading-cogent"
              style={{
                marginBottom: "36px",
                marginTop: "0px",
                maxWidth: "480px",
              }}
            >
              <strong>Production-ready digital products.</strong> Built by an
              embedded team of design & engineering specialists. We partner with
              ambitious founders to go from vision to launch.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  padding: "0 28px",
                  backgroundColor: "#e05628",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "15px",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 20px rgba(224, 86, 40, 0.35)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="btn-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  padding: "0 24px",
                  color: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  backdropFilter: "blur(12px)",
                  fontWeight: 500,
                  fontSize: "15px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "all 0.25s ease",
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        <div
          className="marquee cogent-marquee"
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "18px 0",
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

      {/* Redesigned Origin Story Section */}
      <section
        className="origin"
        style={{
          padding: "120px 0",
          backgroundColor: "#fcfbf9",
          borderBottom: "1px solid #e7e5e4",
          position: "relative",
        }}
      >
        <div
          className="wrap origin-grid-custom"
          style={{
            alignItems: "stretch",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
          }}
        >
          {/* Left Column: Narrative Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(224, 86, 40, 0.08)",
                padding: "6px 14px",
                borderRadius: "9999px",
                width: "fit-content",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#e05628",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#e05628",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                }}
              >
                Our Origin Story
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Built to replace broken agency handoffs with end-to-end focus.
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.65",
                color: "#475569",
                marginBottom: "28px",
                fontWeight: 400,
              }}
            >
              Founders repeatedly came to us stuck with half-built agency code
              and fragmented teams. We created After Concept as one cohesive
              unit owning both product design and full-stack engineering under
              one roof.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                borderLeft: "2px solid #e2e8f0",
                paddingLeft: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#e05628", fontWeight: 800 }}>✓</span>{" "}
                Zero subcontractor relays
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#e05628", fontWeight: 800 }}>✓</span>{" "}
                Direct access to senior engineers
              </div>
            </div>
          </div>

          {/* Right Column: Modern Cards Grid */}
          <div style={{ display: "flex", width: "100%" }}>
            <OriginStackedCards />
          </div>
        </div>
      </section>

      {/* Market Context Section */}
      <section style={{ padding: "90px 0" }}>
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

      {/* Engagement Ladder Section */}
      <section
        id="ladder"
        style={{ padding: "90px 0", backgroundColor: "#fafaf9" }}
      >
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

      {/* Services Section */}
      <section
        id="services"
        style={{
          background: "#fff",
          padding: "90px 0",
          borderTop: "1px solid #e7e5e4",
          borderBottom: "1px solid #e7e5e4",
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
                Tailored web apps, SaaS products, and internal tools engineered
                for scale.
              </p>
            </div>
            <div className="service-card">
              <h3>Product Design (UI/UX)</h3>
              <p>
                Intuitive user experiences and design systems built to convert
                and retain.
              </p>
            </div>
            <div className="service-card">
              <h3>AI Integration</h3>
              <p>
                Embedding smart LLM capabilities and automation into your core
                workflows.
              </p>
            </div>
            <div className="service-card">
              <h3>Growth & Scale</h3>
              <p>
                Continuous optimization, performance tuning, and feature
                expansion post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />
      <Footer />
    </>
  );
}
