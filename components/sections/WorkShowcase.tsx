"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { picsumImage } from "@/lib/images";
import {
  workFilters,
  workProjects,
  type WorkFilterId,
} from "@/lib/constants";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function WorkShowcase() {
  const [filter, setFilter] = useState<WorkFilterId>("all");

  const filtered = useMemo(
    () =>
      workProjects.filter(
        (p) => filter === "all" || p.category === filter,
      ),
    [filter],
  );

  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-content">
        <LayoutGroup>
          <motion.div
            layout
            className="flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-3"
            role="tablist"
            aria-label="Filter projects"
          >
            {workFilters.map((f) => {
              const active = filter === f.id;
              return (
                <motion.button
                  key={f.id}
                  layout
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`relative overflow-hidden px-4 py-2 font-sans text-[11px] font-normal uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active
                      ? "text-accent"
                      : "border border-[rgba(240,236,228,0.2)] text-secondary hover:text-primary"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="work-filter-highlight"
                      className="absolute inset-0 border border-accent"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">{f.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            key={filter}
            layout
            className="mt-14 grid grid-cols-1 gap-4 md:auto-rows-[minmax(200px,auto)] md:grid-cols-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-72px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.04 },
              },
            }}
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: easeOut },
                  },
                }}
                transition={{ layout: { duration: 0.45, ease: easeOut } }}
                className={project.tall ? "md:row-span-2" : ""}
              >
                  <Link
                    href={`#${project.id}`}
                    className={`group relative flex h-full flex-col overflow-hidden border border-[rgba(240,236,228,0.08)] bg-[#0a0c14] transition-[transform,border-color] duration-500 ease-out hover:scale-[1.02] hover:border-accent ${
                      project.tall
                        ? "min-h-[300px] md:min-h-[420px]"
                        : "min-h-[260px] md:min-h-[280px]"
                    }`}
                  >
                    <Image
                      src={picsumImage(
                        project.id,
                        project.tall ? 800 : 960,
                        project.tall ? 1000 : 640,
                      )}
                      alt={`${project.title} project`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-[#0d0f1a]/50 to-[#0d0f1a]/15"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(200,184,154,0.08),transparent_50%)]" />
                    <span className="absolute left-5 top-5 z-10 font-sans text-[10px] font-normal uppercase tracking-[0.2em] text-accent">
                      {project.categoryLabel}
                    </span>
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[rgba(13,15,26,0.55)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-sans text-[11px] font-normal uppercase tracking-[0.22em] text-primary">
                        VIEW PROJECT →
                      </span>
                    </div>
                    <div className="relative z-10 mt-auto flex flex-col justify-end p-6 pt-28">
                      <h2 className="font-display text-2xl font-normal text-primary md:text-[26px]">
                        {project.title}
                      </h2>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.techTags.map((tag) => (
                          <li key={tag}>
                            <span className="font-sans text-[11px] font-normal uppercase tracking-[0.12em] text-secondary">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
              </motion.article>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
