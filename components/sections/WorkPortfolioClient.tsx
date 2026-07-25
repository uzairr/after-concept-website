"use client";

import Image from "next/image";
import { useMemo, useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  workFilters,
  workProjects,
  type WorkFilterId,
} from "@/lib/constants";
import { picsumImage } from "@/lib/images";
import { GlowCard } from "@/components/ui/GlowCard";

const descriptions: Record<string, string> = {
  "meridian-os": "A scalable operations platform for distributed product teams.",
  draftsmith: "AI-assisted editorial workflows with structured content generation.",
  "bloom-commerce": "A conversion-focused commerce rebuild with modular CMS blocks.",
  "pulse-health": "A modern healthcare web ecosystem with content and booking flows.",
  "signal-grid": "A data intelligence workspace for monitoring ML performance in real time.",
  "atlas-runtime": "Frontend infrastructure that powers high-frequency user interactions.",
  "northwind-api": "A robust backend foundation for syncing services and data streams.",
  "vector-lab": "A visual ML environment for training and comparing computer vision models.",
  "echo-agent": "A retrieval-powered assistant tailored for internal knowledge operations.",
};

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-[20%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[20px] px-5 py-2 font-sans text-[12px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${
        active
          ? "bg-theme-accent text-white"
          : "border border-line bg-transparent text-muted hover:border-theme-accent hover:text-theme-accent"
      }`}
    >
      {label}
    </button>
  );
}

export default function WorkPortfolioClient() {
  const [activeFilter, setActiveFilter] = useState<WorkFilterId>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? workProjects
        : workProjects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <section className="px-6 pb-10 pt-12 md:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3">
          {workFilters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label === "ALL" ? "All" : filter.label}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 md:pb-24">
        <motion.div layout className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
                style={{ perspective: 1000 }}
              >
                <TiltCard>
                  <GlowCard className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-theme-surface shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]">
                    <div className="relative h-[230px] shrink-0 overflow-hidden">
                      <ParallaxImage 
                        src={picsumImage(`${project.id}-portfolio`, 900, 540)} 
                        alt={project.title} 
                      />
                      <div className="absolute inset-0 grid place-items-center bg-theme-surface/85 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <p className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-theme-accent">
                          VIEW PROJECT →
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 border-t-0">
                      <div>
                        <span className="inline-flex rounded-[20px] bg-theme-accent px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-[18px] font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-3 flex-1 font-sans text-[14px] leading-[1.7] text-muted">
                        {descriptions[project.id] ?? "A modern digital product built for measurable outcomes."}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[14px] border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
