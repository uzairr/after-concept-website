"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  workFilters,
  workProjects,
  type WorkFilterId,
} from "@/lib/constants";
import { picsumImage } from "@/lib/images";

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
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-3">
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
        <motion.div layout className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group overflow-hidden rounded-xl bg-theme-surface shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <Image
                    src={picsumImage(`${project.id}-portfolio`, 900, 540)}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-[rgba(37,99,235,0.85)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <p className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-white">
                      VIEW PROJECT →
                    </p>
                  </div>
                </div>

                <div className="border border-t-0 border-line p-5">
                  <span className="inline-flex rounded-[20px] bg-theme-accent px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-white">
                    {project.categoryLabel}
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] leading-[1.7] text-muted">
                    {descriptions[project.id] ?? "A modern digital product built for measurable outcomes."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[14px] border border-line px-2.5 py-1 font-sans text-[11px] uppercase tracking-[0.06em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-theme-accent">
                    View Project →
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
