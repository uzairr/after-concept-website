"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We dig into your business context before touching the keyboard: user goals, technical constraints, timelines, and what success actually looks like.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Information architecture, user flows, and interface decisions are locked before engineering starts.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Focused two-week sprints with weekly demos, transparent progress tracking, and zero-surprise deliveries.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "We monitor, optimise, and keep iterating after launch. The work that matters most starts after the product ships.",
  },
];

export default function TimelineSection() {
  // Default active index 0 (01 - Discover)
  const [activeIndex, setActiveIndex] = useState(0);

  // Exact distance between columns (4 columns = 25% each)
  // Index 0 = 0%, Index 1 = 25%, Index 2 = 50%, Index 3 = 75%
  const lineWidthPercentage = activeIndex * 25;

  return (
    <section
      id="how-we-work"
      className="fade-in-section"
      style={{
        background: "#1e1b4b",
        color: "#ffffff",
        padding: "80px 0",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="wrap">
        <div
          className="section-head fade-in-element"
          style={{ marginBottom: "50px" }}
        >
          <span
            className="eyebrow"
            style={{
              color: "#fb923c",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            HOW WE WORK
          </span>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              fontWeight: 700,
              marginTop: "10px",
              marginBottom: "14px",
            }}
          >
            Discover, design, build, scale
          </h2>
          <p
            style={{
              color: "#a5b4fc",
              fontSize: "1rem",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Four stages, no handoff between them — the same team stays
            accountable from first spec to post-launch growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          onMouseLeave={() => setActiveIndex(0)}
          style={{ position: "relative", width: "100%" }}
        >
          {/* Active Smooth Orange Line (01 ke center 24px se shuru ho kar exact hovered circle center par rukegi) */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "24px", // Exact center of 48px circle 01
              width: `${lineWidthPercentage}%`,
              height: "2px",
              backgroundColor: "#ea580c",
              zIndex: 1,
              transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 0 12px rgba(234, 88, 12, 0.9)",
            }}
          />

          {/* 4 Step Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    cursor: "pointer",
                    paddingRight: "20px",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Circle Step Number */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: isActive
                        ? "#ea580c"
                        : isPast
                          ? "#312e81"
                          : "#1e1b4b",
                      border: isActive
                        ? "2px solid #ea580c"
                        : isPast
                          ? "2px solid #6366f1"
                          : "2px solid rgba(255, 255, 255, 0.25)",
                      color: isActive || isPast ? "#ffffff" : "#a5b4fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 700,
                      marginBottom: "28px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(234, 88, 12, 0.8)"
                        : "none",
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      color: isActive ? "#ffffff" : "#64748b",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "10px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      color: isActive ? "#c7d2fe" : "#475569",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
