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
  // Pure Hover Control State (Default 0 index activated)
  const [activeIndex, setActiveIndex] = useState(0);

  // Line fill dynamic calculation
  const lineProgressWidth = `${(activeIndex / (steps.length - 1)) * 100}%`;

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
          {/* Main Heading Ka Font Size Chota Kar Diya Hai */}
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
        <div style={{ position: "relative", width: "100%" }}>
          {/* Base Track Line */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "40px",
              right: "40px",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              zIndex: 0,
            }}
          />

          {/* Active Orange Line (Animates on Hover) */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "40px",
              right: "40px",
              width: lineProgressWidth,
              height: "2px",
              backgroundColor: "#ea580c",
              zIndex: 1,
              transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 0 14px rgba(234, 88, 12, 0.9)",
            }}
          />

          {/* 4 Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
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
                  // SIRF HOVER PE STATE CHANGE HOGI:
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
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
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(234, 88, 12, 0.7)"
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
