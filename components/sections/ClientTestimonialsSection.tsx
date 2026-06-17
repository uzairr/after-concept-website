"use client";

import { testimonials } from "@/lib/testimonials";

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
    <article className="testimonial-grid-card relative flex flex-col overflow-hidden rounded-2xl border border-line bg-theme-surface p-6 md:p-7">
      {/* Company badge — top-right */}
      <div className="absolute right-5 top-5 z-10">
        <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/30">
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
    </article>
  );
}

/**
 * CHANGE 5 — New 2-column grid layout.
 * Section label: CLIENT FEEDBACK —
 * Heading: "What clients say after the work ships"
 * 2-col grid with glassmorphism-style dark cards.
 */
export function ClientTestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonial-stripes scroll-mt-32 bg-base px-6 py-20 md:px-10"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-black/30">
          CLIENT FEEDBACK —
        </p>

        {/* Heading */}
        <h2
          id="testimonials-title"
          className="mt-5 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-5xl"
        >
          What clients say after the work ships
        </h2>

        {/* 2-column grid — max 6 testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.slice(0, 6).map((item) => (
            <TestimonialGridCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}