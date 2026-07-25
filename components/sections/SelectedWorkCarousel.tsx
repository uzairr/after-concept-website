"use client";

import Image from "next/image";
import Link from "next/link";

/* ───────────────────────────────────────────
   Type Definitions
   ─────────────────────────────────────────── */
export type ShowcaseProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  outcome?: string;
  isMbc?: boolean;
  needsWhiteBg?: boolean;
};

/* ───────────────────────────────────────────
   Data
   ─────────────────────────────────────────── */
const allProjects: ShowcaseProject[] = [
  {
    id: "evt-saas",
    title: "EVT SaaS",
    category: "AI SaaS",
    description:
      "Greenfield AI operations platform with intelligent automation workflows. The scope grew mid-engagement driven by the team's delivery quality and communication.",
    stack: ["OpenAI", "LangChain", "TypeScript", "FastAPI"],
    image: "/images/work/EVT-SAAS.png",
    outcome: "Greenfield to live beta in 10 weeks",
  },
  {
    id: "landdesign",
    title: "Land Design",
    category: "Real Estate",
    description:
      "Digital platform for land planning and property visualisation with GIS tooling. The client needed a full-stack solution to manage land parcels, zoning data, and interactive maps.",
    stack: ["TypeScript", "React", "PostgreSQL"],
    image: "/images/work/Land-Design.png",
    outcome: "30% faster land parcel processing",
    needsWhiteBg: true,
  },
  {
    id: "bultra-bank",
    title: "Bultra Bank",
    category: "Fintech",
    description:
      "A challenger bank entering a new market needed a full digital banking experience — from secure auth and transaction APIs to a customer-facing dashboard and onboarding flow.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/work/Bultra-Bank.png",
    outcome: "40% reduction in onboarding drop-off",
  },
  {
    id: "mercato",
    title: "Mercato",
    category: "DevOps",
    description:
      "Node.js performance overhaul and AWS infrastructure rebuild for high-throughput SaaS.",
    stack: ["Node.js", "AWS", "Docker"],
    image: "/images/work/EVT-SAAS.png",
  },
  {
    id: "medicore",
    title: "Medicore",
    category: "Healthcare",
    description:
      "Digital health platform for patient management and telemedicine services.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/images/work/EVT-SAAS.png",
  },
  {
    id: "skyroutes",
    title: "SkyRoutes",
    category: "Logistics",
    description:
      "Full-stack route optimisation tool with real-time tracking and driver assignment.",
    stack: ["React", "Node.js", "Maps API"],
    image: "/images/work/EVT-SAAS.png",
  },
  {
    id: "finova",
    title: "Finova",
    category: "Fintech",
    description:
      "Savings and investment SaaS with multi-currency wallet and automated rebalancing.",
    stack: ["TypeScript", "Stripe", "WebSockets"],
    image: "/images/work/Bultra-Bank.png",
  },
  {
    id: "learnaxis",
    title: "LearnAxis",
    category: "EdTech",
    description:
      "AI-assisted learning platform with structured content generation and adaptive quizzes.",
    stack: ["Next.js", "OpenAI", "RAG"],
    image: "/images/work/EVT-SAAS.png",
  },
  {
    id: "corecloud",
    title: "CoreCloud",
    category: "Infra",
    description:
      "Last-minute infrastructure rescue and deployment pipeline rebuild for major launch.",
    stack: ["AWS", "Kubernetes", "Next.js"],
    image: "/images/work/EVT-SAAS.png",
  },
];

// Duplicated for seamless infinite looping animation
const carouselItems = [...allProjects, ...allProjects];

/* ───────────────────────────────────────────
   Styles (self-contained CSS)
   ─────────────────────────────────────────── */
const carouselStyles = `
/* ── Infinite Scroll Animation ── */
@keyframes carousel-slide-1 {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.carousel-track-1 {
  display: flex;
  width: max-content;
  animation: carousel-slide-1 35s linear infinite;
  will-change: transform;
}

.carousel-container-1:hover .carousel-track-1 {
  animation-play-state: paused;
}

/* ── MBC Color Treatment ── */
.mbc-color-treatment-1 {
  filter: hue-rotate(190deg) saturate(1.2) contrast(1.1);
  mix-blend-mode: normal;
}
`;

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export function SelectedWorkCarousel() {
  return (
    <>
      {/* Inject self-contained styles */}
      <style>{carouselStyles}</style>

      <section
        id="work"
        className="carousel-section-1 relative overflow-hidden py-20 md:py-28 bg-page border-t border-line"
      >
        {/* ── Header ── */}
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 mb-12 flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl text-primary tracking-tight">
            Projects That Shipped
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary text-center">
            Continuously delivering high-impact web apps, AI engines, and cloud
            platforms for ambitious SME teams.
          </p>
        </div>

        {/* ── Desktop Infinite Carousel ── */}
        <div className="carousel-container-1 relative w-full overflow-hidden py-4 hidden sm:block">
          {/* Edge fade gradients removed */}

          <div className="carousel-track-1 flex gap-6 px-3">
            {carouselItems.map((project, idx) => (
              <article
                key={`${project.id}-${idx}`}
                className="group work-card relative flex h-[490px] w-[360px] md:w-[390px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]"
              >
                <div>
                  {/* Project Image */}
                  <div className={`relative h-[200px] w-full overflow-hidden rounded-xl border border-border ${project.needsWhiteBg ? "bg-white p-6" : "bg-transparent"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`${project.needsWhiteBg ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105 ${
                        project.isMbc ? "mbc-color-treatment-1" : ""
                      }`}
                    />
                    {/* Image fog gradient removed */}
                  </div>

                  {/* Badge & Title */}
                  <div className="mt-5 flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-foreground tracking-tight group-hover:text-theme-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-theme-accent">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 font-sans text-[13px] leading-[1.65] text-secondary line-clamp-3 min-h-[62px]">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Details & CTA */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-wider text-theme-accent/80 group-hover:text-theme-accent transition-colors"
                  >
                    <span>View Project</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── Mobile Horizontal Swipe ── */}
        <div className="sm:hidden flex gap-4 overflow-x-auto px-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none">
          {allProjects.map((project) => (
            <article
              key={`mobile-${project.id}`}
              data-cursor="project"
              className="group work-card relative flex h-[460px] w-[300px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]"
            >
              <div>
                <div className={`relative h-[180px] w-full overflow-hidden rounded-xl border border-border ${project.needsWhiteBg ? "bg-white p-6" : "bg-transparent"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.needsWhiteBg ? "object-contain" : "object-cover"} ${
                      project.isMbc ? "mbc-color-treatment-1" : ""
                    }`}
                  />
                  {/* Image fog gradient removed */}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-theme-accent">
                    {project.category}
                  </span>
                </div>

                <p className="mt-2 font-sans text-xs leading-relaxed text-secondary line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[9px] text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-cyan-400"
                >
                  <span>View Project</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}