"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Enhanced 3D Carousel / Stacked Cards Component (Compact Width & Interactive Dots)
function OriginStackedCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-rotate transition every 2.2 seconds, stops on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isHovered, stats.length]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "350px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Cards Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
        }}
      >
        {stats.map((stat, i) => {
          const total = stats.length;
          const position = (i - activeIndex + total) % total;

          let transformStyle = "";
          let zIndex = 0;
          let opacity = 0;
          let filter = "none";
          let isFront = false;

          if (position === 0) {
            transformStyle =
              "translateX(0px) translateY(0px) scale(1) rotateY(0deg)";
            zIndex = 10;
            opacity = 1;
            filter = "none";
            isFront = true;
          } else if (position === 1) {
            transformStyle =
              "translateX(75px) translateY(8px) scale(0.85) rotateY(-14deg)";
            zIndex = 5;
            opacity = 0.75;
            filter = "blur(1px)";
          } else if (position === 2) {
            transformStyle =
              "translateX(0px) translateY(-20px) scale(0.72) rotateY(0deg)";
            zIndex = 2;
            opacity = 0.45;
            filter = "blur(2px)";
          } else if (position === 3) {
            transformStyle =
              "translateX(-75px) translateY(8px) scale(0.85) rotateY(14deg)";
            zIndex = 5;
            opacity = 0.75;
            filter = "blur(1px)";
          }

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                position: "absolute",
                width: "100%",
                maxWidth: "290px",
                minHeight: "290px",
                padding: "24px 22px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                border: isFront
                  ? "1.5px solid rgba(224, 86, 40, 0.6)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: isFront
                  ? "0 20px 35px -10px rgba(15, 23, 42, 0.4), 0 0 20px rgba(224, 86, 40, 0.2)"
                  : "0 10px 20px -5px rgba(0, 0, 0, 0.25)",
                transform: transformStyle,
                zIndex: zIndex,
                opacity: opacity,
                filter: filter,
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: isFront ? "#e05628" : "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  Metric #{i + 1}
                </span>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isFront ? "#e05628" : "#475569",
                    boxShadow: isFront ? "0 0 8px #e05628" : "none",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.num}
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: isFront ? "#ffffff" : "#cbd5e1",
                  marginBottom: "6px",
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  fontSize: "12.5px",
                  lineHeight: "1.4",
                  color: "#94a3b8",
                  fontWeight: 400,
                }}
              >
                {stat.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        {stats.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              width: activeIndex === idx ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: activeIndex === idx ? "#e05628" : "#cbd5e1",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Instant & Ultra-Smooth Counter Component
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

// Custom Component for Outcome Section with Background Animation
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
          <h2>The typical outcome</h2>
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
            <CounterStat value={10} suffix="" />
            <div className="result-label">
              Days average, kickoff to first release
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
      <Header />

      {/* GLOBAL HOVER STYLES FOR CARDS */}
      <style>{`
        /* 1. Global Red/Orange Soft Glow on General Cards (SS1 Style) */
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

        /* 2. EXCLUSION: Outcome Section (Canvas Animation) Cards - No Red Shadow */
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

        /* 3. EXCLUSION: Ladder Section Cards - Middle Card Waisa hi rahega (SS2 style) */
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
          border-color: #e11d48 !important;
          color: #e11d48 !important;
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
      `}</style>

      <section
        className="hero"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          marginTop: "-25px",
          marginBottom: "0px",
        }}
      >
        <div className="hero-grid" style={{ alignItems: "center" }}>
          <div
            className="hero-copy"
            style={{ marginTop: "0px", paddingTop: "0px" }}
          >
            <span
              className="eyebrow brand-line"
              style={{
                display: "inline-block",
                marginBottom: "12px",
                marginTop: "-14px",
              }}
            >
              Concept is easy. After is the work.
            </span>
            <h1
              style={{
                marginTop: "0px",
                marginBottom: "18px",
                lineHeight: "1.15",
              }}
            >
              We deliver products <span className="accent">SMEs</span> actually
              need.
            </h1>
            <p
              className="hero-sub"
              style={{
                marginBottom: "24px",
                marginTop: "0px",
                lineHeight: "1.5",
              }}
            >
              Production-ready digital products for founders. Your technical
              co-pilot from vision to launch.
            </p>
            <div
              className="hero-actions"
              style={{
                marginTop: "0px",
                display: "flex",
                gap: "12px",
                alignItems: "center",
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
                  height: "44px",
                  padding: "0 20px",
                  margin: "0",
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  lineHeight: "normal",
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
                  height: "44px",
                  padding: "0 20px",
                  margin: "0",
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  lineHeight: "normal",
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="hero-stage">
            <div className="glow"></div>
            <div className="float-group">
              <div className="browser">
                <div className="browser-bar">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="url">app.afterconcept.io</div>
                </div>
                <div className="app-body">
                  <div className="sidebar">
                    <div className="chip active"></div>
                    <div className="chip"></div>
                    <div className="chip"></div>
                    <div className="chip"></div>
                  </div>
                  <div className="main-panel">
                    <div className="stat-row">
                      <div className="stat">
                        <div className="n">4×</div>
                        <div className="l">Throughput</div>
                      </div>
                      <div className="stat">
                        <div className="n">96%</div>
                        <div className="l">On-time</div>
                      </div>
                      <div className="stat">
                        <div className="n">6 wks</div>
                        <div className="l">To launch</div>
                      </div>
                    </div>
                    <div className="chart-card">
                      <div className="bars">
                        <div className="bar" style={{ height: "40%" }}></div>
                        <div className="bar" style={{ height: "55%" }}></div>
                        <div className="bar" style={{ height: "70%" }}></div>
                        <div className="bar" style={{ height: "50%" }}></div>
                        <div className="bar" style={{ height: "85%" }}></div>
                        <div className="bar" style={{ height: "65%" }}></div>
                        <div className="bar" style={{ height: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="peek-card">
                <div className="tag">Onboarding</div>
                <div className="val">-40%</div>
                <div className="sub">Drop-off after redesign</div>
                <div className="check">
                  <span className="checkdot">✓</span> Shipped &amp; live
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div
        className="marquee"
        style={{ marginTop: "-45px", position: "relative", zIndex: 10 }}
      >
        <div className="marquee-track">
          <span>Bultra Bank</span>
          <span>·</span>
          <span>Faraway Yachting</span>
          <span>·</span>
          <span>Nkosi &amp; Associates</span>
          <span>·</span>
          <span>EVT SaaS</span>
          <span>·</span>
          <span>Land Design</span>
          <span>·</span>
          <span>SkyRoutes</span>
          <span>·</span>
          <span>MediCore</span>
          <span>·</span>
          <span>Finova</span>
          <span>·</span>
          <span>Bultra Bank</span>
          <span>·</span>
          <span>Faraway Yachting</span>
          <span>·</span>
          <span>Nkosi &amp; Associates</span>
          <span>·</span>
          <span>EVT SaaS</span>
          <span>·</span>
          <span>Land Design</span>
          <span>·</span>
          <span>SkyRoutes</span>
          <span>·</span>
          <span>MediCore</span>
          <span>·</span>
          <span>Finova</span>
          <span>·</span>
        </div>
      </div>

      <section className="origin">
        <div className="wrap origin-grid" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">The origin story</span>
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

          {/* Compact 3D Circular Rotating Cards */}
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
            <h2>Evolution, not a single revolution</h2>
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
              <div className="tier-price">$3,000–$6,000</div>
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
              <div className="tier-price">$15,000–$50,000</div>
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

      <section className="process">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>Discover, design, build, scale</h2>
            <p>
              Four stages, no handoff between them: the same team stays
              accountable from first spec to post-launch growth.
            </p>
          </div>
          <div className="timeline">
            <div className="tl-step">
              <div className="tl-dot">01</div>
              <h3>Discover</h3>
              <p>
                We dig into your business context before touching the keyboard:
                user goals, technical constraints, timelines, and what success
                actually looks like.
              </p>
            </div>
            <div className="tl-step">
              <div className="tl-dot">02</div>
              <h3>Design</h3>
              <p>
                Information architecture, user flows, and interface decisions
                are locked before engineering starts.
              </p>
            </div>
            <div className="tl-step">
              <div className="tl-dot">03</div>
              <h3>Build</h3>
              <p>
                Focused two-week sprints with weekly demos, transparent progress
                tracking, and zero-surprise deliveries.
              </p>
            </div>
            <div className="tl-step is-after">
              <div className="tl-dot">04</div>
              <h3>Scale</h3>
              <p>
                We monitor, optimise, and keep iterating after launch. The work
                that matters most starts after the product ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section with Background Canvas Animation */}
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
          <a href="mailto:contact@afterconcept.io" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
