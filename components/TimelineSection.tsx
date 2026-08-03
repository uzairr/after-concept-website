"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop layout
      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "+=150%", 
            scrub: true,
            pin: true,
          }
        });

        gsap.set(lineFillRef.current, { scaleX: 0, scaleY: 1, transformOrigin: "left center" });
        
        stepsRef.current.forEach((step) => {
          if (!step) return;
          const dot = step.querySelector('.tl-dot');
          const h3 = step.querySelector('h3');
          const p = step.querySelector('p');
          
          gsap.set(dot, { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", scale: 1, boxShadow: "none" });
          gsap.set([h3, p], { opacity: 0, y: 30 });
        });

        tl.to(lineFillRef.current, { scaleX: 1, ease: "none", duration: 1 }, 0);

        stepsRef.current.forEach((step, i) => {
          if (!step) return;
          const dot = step.querySelector('.tl-dot');
          const h3 = step.querySelector('h3');
          const p = step.querySelector('p');
          
          const progress = (i + 1) * 0.25; 
          const start = progress - 0.25;

          tl.to(dot, {
            backgroundColor: "var(--ember-600)",
            borderColor: "var(--ember-600)",
            color: "#fff",
            scale: 1.15,
            boxShadow: "0 0 20px rgba(216,90,48,0.5)",
            duration: 0.1,
            ease: "power2.out"
          }, start);

          tl.to(h3, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, start + 0.05);
          tl.to(p, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, start + 0.1);
        });
      });

      // Mobile/Tablet layout
      mm.add("(max-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "+=150%", 
            scrub: true,
            pin: true,
          }
        });

        gsap.set(lineFillRef.current, { scaleY: 0, scaleX: 1, transformOrigin: "top center" });
        
        stepsRef.current.forEach((step) => {
          if (!step) return;
          const dot = step.querySelector('.tl-dot');
          const h3 = step.querySelector('h3');
          const p = step.querySelector('p');
          
          gsap.set(dot, { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", scale: 1, boxShadow: "none" });
          gsap.set([h3, p], { opacity: 0, y: 30 });
        });

        tl.to(lineFillRef.current, { scaleY: 1, ease: "none", duration: 1 }, 0);

        stepsRef.current.forEach((step, i) => {
          if (!step) return;
          const dot = step.querySelector('.tl-dot');
          const h3 = step.querySelector('h3');
          const p = step.querySelector('p');
          
          const progress = (i + 1) * 0.25; 
          const start = progress - 0.25;

          tl.to(dot, {
            backgroundColor: "var(--ember-600)",
            borderColor: "var(--ember-600)",
            color: "#fff",
            scale: 1.15,
            boxShadow: "0 0 20px rgba(216,90,48,0.5)",
            duration: 0.1,
            ease: "power2.out"
          }, start);

          tl.to(h3, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, start + 0.05);
          tl.to(p, { opacity: 1, y: 0, duration: 0.1, ease: "power2.out" }, start + 0.1);
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stepsData = [
    { title: "Discover", desc: "We dig into your business context before touching the keyboard — user goals, technical constraints, timelines, and what success actually looks like." },
    { title: "Design", desc: "Information architecture, user flows, and interface decisions are locked before engineering starts." },
    { title: "Build", desc: "Focused two-week sprints with weekly demos, transparent progress tracking, and zero-surprise deliveries." },
    { title: "Scale", desc: "We monitor, optimise, and keep iterating after launch — the work that matters most starts after the product ships." }
  ];

  return (
    <section className="process" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How we work</span>
          <h2>Discover, design, build, scale</h2>
          <p>Four stages, no handoff between them — the same team stays accountable from first spec to post-launch growth.</p>
        </div>
        <div className="timeline-container">
          <div className="timeline-line-track">
            <div className="timeline-line-fill" ref={lineFillRef}></div>
          </div>
          <div className="timeline">
            {stepsData.map((step, index) => (
              <div 
                className="tl-step" 
                key={index}
                ref={el => { stepsRef.current[index] = el; }}
              >
                <div className="tl-dot">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
