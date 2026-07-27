"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { GlowCard } from "@/components/ui/GlowCard";

/**
 * Returns 1-2 uppercase initials from a name string.
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialGridCard({ item }: { item: (typeof testimonials)[number] }) {
  const initials = getInitials(item.name);
  return (
    <GlowCard className="testimonial-grid-card relative overflow-hidden rounded-2xl border border-line bg-theme-surface">
      <div className="flex flex-col h-full p-6 md:p-7">
      {/* Company badge — top-right */}
      <div className="absolute right-5 top-5 z-10">
        <span className="inline-flex items-center rounded-full border border-border bg-surface backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
          {item.company}
        </span>
      </div>

      {/* Opening quote mark */}
      <p
        className="mb-3 font-heading text-[64px] leading-none text-highlight/70 select-none"
        aria-hidden
        style={{ lineHeight: "0.8", marginBottom: "0.5rem" }}
      >
        &ldquo;
      </p>

      {/* Quote text */}
      <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-5" title={item.text}>
        {item.text}
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-xs font-bold uppercase tracking-wider text-foreground"
          style={{ background: "rgba(37,99,235,0.18)" }}
          aria-label={item.name}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
            {item.name}
          </p>
          <p className="mt-0.5 text-[11px] uppercase tracking-[0.08em] text-faint">
            {item.role}
          </p>
        </div>
      </div>
      </div>
    </GlowCard>
  );
}

/**
 * CHANGE 5 — New 2-column grid layout.
 * Section label: CLIENT FEEDBACK —
 * Heading: "What clients say after the work ships"
 * 2-col grid with glassmorphism-style dark cards.
 */
export function ClientTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section
      id="testimonials"
      className="testimonial-stripes scroll-mt-32 bg-base px-6 py-8 md:px-12 md:py-10"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-7xl">


        {/* Heading */}
        <StaggeredText 
          text="What clients say after the work ships" 
          className="mt-5 font-display text-h2 text-primary" 
        />

        {/* Carousel Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {visibleTestimonials.map((item) => (
                <TestimonialGridCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Carousel Indicators (Optional but nice UX) */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx * 2)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx * 2 ? "w-6 bg-accent" : "w-1.5 bg-line-strong hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
