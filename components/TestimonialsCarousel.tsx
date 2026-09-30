"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ed Zarecor",
    role: "Director of Engineering",
    companyLogo: "edX",
    quote: "Arbisoft has been a valued partner to edX since 2013. We work with their engineers day in and day out to advance the Open edX platform and support our learners across the world.",
    image: "/section2.png" 
  },
  {
    name: "Miki Goyal",
    role: "VP Of Engineering",
    companyLogo: "Reify HEALTH",
    quote: "Working with this team has dramatically improved our product delivery timeline and quality.",
    image: "/section2.png"
  },
  {
    name: "Jake Peters",
    role: "CEO & Co-Founder",
    companyLogo: "payperks",
    quote: "An incredible experience from start to finish. They truly understand our business needs.",
    image: "/section2.png"
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    companyLogo: "TechCorp",
    quote: "The best engineering partner we have ever worked with. Highly recommended for any complex project.",
    image: "/section2.png"
  }
];

export default function TestimonialsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full lg:h-[calc(100vh-80px)] flex flex-col justify-center box-border overflow-hidden" style={{
      background: "#fff",
      padding: "80px 0",
      position: "relative"
    }}>
      <div className="w-full lg:max-w-none mx-auto px-10 lg:px-[50px] min-[2500px]:max-w-none min-[2500px]:px-[590px] relative">
        
        <h2 style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "3rem", textAlign: "left" }}>
          In The Words of Those We Build With
        </h2>

        {/* Cards Container */}
        <div style={{ margin: "0", padding: "0" }}>
          <div style={{ 
            display: "grid", width: "100%", margin: "0", padding: "0", justifyItems: "stretch", 
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }}>
            {testimonials.map((t, i) => {
              const isHovered = hoveredIndex === i;
              
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ 
                    position: "relative",
                    background: "#0b1221",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    aspectRatio: "4 / 5",
                    width: "100%"
                  }}
                >
                  {/* Top Image Section */}
                  <div style={{ 
                    position: "relative", 
                    flex: 1, 
                    background: "#d1d5db", 
                    overflow: "hidden" 
                  }}>
                    {/* Background image placeholder */}
                    <div style={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: "url('https://placehold.co/400x500') center/cover no-repeat" // You can replace with real image logic
                    }} />

                    {/* Default bottom gradient overlay on image */}
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                      opacity: isHovered ? 0 : 1,
                      transition: "opacity 0.3s ease"
                    }} />

                    {/* Hover Blue Overlay + Quote */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(30, 64, 175, 0.85)", // Deep blue
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "80px 40px 30px 40px",
                      color: "#fff"
                    }}>
                      <p style={{ 
                        fontSize: "1.1rem", 
                        lineHeight: "1.6", 
                        margin: 0,
                        transform: isHovered ? "translateY(0)" : "translateY(10px)",
                        transition: "transform 0.4s ease",
                        fontWeight: "400"
                      }}>
                        "{t.quote}"
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom Info Section */}
                  <div style={{
                    background: isHovered ? "#0f172a" : "transparent",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    zIndex: 2,
                    padding: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    minHeight: "100px",
                    transition: "background 0.3s ease"
                  }}>
                    <div>
                      <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "4px" }}>{t.name}</div>
                      <div style={{ fontSize: "0.9rem", color: "#e5e7eb" }}>{t.role}</div>
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: "700", fontStyle: "italic", display: "flex", alignItems: "center" }}>
                      {/* Logo Placeholder */}
                      {t.companyLogo}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

