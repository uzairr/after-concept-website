"use client";

import React, { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    num: "01",
    title: "Stack Modernization",
    content: "Our AI-accelerated development methodology allows us to rapidly transition away from outdated and outmoded software to the high-performance, open-source foundations without operational downtime risk.",
    image: "/core-capabilities-mini-1.png"
  },
  {
    num: "02",
    title: "New Product Development",
    content: "We build scalable web platforms, internal tools, and backend systems designed around your business logic, not a generic SaaS template.",
    image: "/core-capabilities-mini-2.png"
  },
  {
    num: "03",
    title: "Managed Services",
    content: "We provide ongoing support and maintenance to ensure your systems remain performant, secure, and up-to-date.",
    image: "/core-capabilities-test.png"
  },
  {
    num: "04",
    title: "AI Gateways",
    content: "Integrate large language models into your existing infrastructure safely and securely.",
    image: "/core-capabilities-test.png"
  },
  {
    num: "05",
    title: "Enterprise AI",
    content: "Production AI, not demos. We build custom LLM assistants, RAG pipelines, and automation workflows that handle real user load.",
    image: "/core-capabilities-mini-5.png"
  }
];

export default function CoreCapabilities() {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="capabilities" style={{
      background: "#fff",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      padding: "80px 0"
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .main-img-container:hover .main-img {
          transform: scale(1.05);
        }
        .main-img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 100%;
          background-image: url('/core-capabilities-main.png');
          background-size: cover;
          background-position: center;
        }
        .tile-container:hover .mini-img {
          transform: scale(1.1);
        }
        .mini-img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
        }
      `}} />
      <div className="wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
          
          {/* Left Column */}
          <div style={{ flex: "1 1 40%", minWidth: "300px" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "1rem" }}>Core Capabilities</h2>
            <p style={{ fontSize: "1.25rem", color: "#4B5563", marginBottom: "2rem" }}>
              Delivering technical ingenuity and rapid innovation across industries.
            </p>
            <div className="main-img-container" style={{ position: "relative", width: "100%", height: "400px", background: "#f3f4f6", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
               {/* Main image placeholder */}
               <div className="main-img">
                 {/* This represents the left image from the mockup */}
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            {capabilities.map((cap, index) => {
              const isExpanded = expanded === index;
              return (
                <div key={index} className="tile-container" style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}>
                  <div 
                    onClick={() => setExpanded(index)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <span style={{ fontSize: "1.5rem", color: "#9ca3af", fontWeight: "500" }}>{cap.num}</span>
                      <h3 style={{ fontSize: "1.75rem", fontWeight: "500", margin: 0 }}>{cap.title}</h3>
                    </div>
                    <div style={{ 
                      width: "32px", 
                      height: "32px", 
                      borderRadius: "50%", 
                      background: "#f3f4f6", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease"
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div style={{ display: "flex", gap: "20px", marginTop: "20px", alignItems: "flex-start" }}>
                      <p style={{ flex: 1, fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.6", margin: 0 }}>
                        {cap.content}
                      </p>
                      <div style={{ width: "120px", height: "80px", borderRadius: "4px", flexShrink: 0, overflow: "hidden" }}>
                        <div className="mini-img" style={{ backgroundImage: `url(${cap.image})` }}>
                          {/* Smaller thumbnail image */}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
