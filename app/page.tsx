"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClientTestimonialsSection } from "@/components/sections/ClientTestimonialsSection";
import { HeroSection } from "@/components/sections/HeroSection";

/**
 * ANIMATION CONSTANTS
 */
const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px", amount: 0.1 as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/**
 * DATA CONSTANTS
 */
const services = [
  {
    // num: "01",
    title: "Custom Software",
    body: "Scalable web platforms, internal tools, and backend systems designed around your business logic — not a generic SaaS template. We've shipped fintech backends handling 10K+ daily transactions.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Cloud"],
  },
  {
    // num: "02",
    title: "AI Integrations",
    body: "Production AI — not demos. We build LLM assistants, RAG pipelines, and automation workflows that handle real user load and deliver measurable outcomes.",
    tags: ["LLMs", "RAG", "LangChain", "OpenAI" ,"Generative AI"],
  },
  {
    // num: "03",
    title: "Product Design",
    body: "Interface and system design that earns user trust from first login. We work from information architecture to polished UI, building design systems that scale.",
    tags: ["Figma", "Design systems", "UX research" ,"Competitive Analysis"],
  },
  {
    // num: "04",
    title: "Growth Engineering",
    body: "After launch is where most agencies disappear. We stay embedded — instrumenting analytics, running A/B tests, and iterating so your product compounds.",
    tags: ["Analytics", "A/B testing", "SEO", "DevOps"],
  },
];

const processSteps = [
  {
    num: "Discover",
    title: "Align on what matters",
    desc: "We dig into your business context before touching the keyboard — user goals, technical constraints, timelines, and what success actually looks like. No assumptions, no surprises.",
  },
  {
    num: "Design",
    title: "Map the product",
    desc: "Information architecture, user flows, and interface decisions are locked before engineering starts. You see and approve the full product before a line of code is written.",
  },
  {
    num: "Build",
    title: "Focused two-week sprints",
    desc: "Weekly demos, transparent progress tracking, and zero-surprise deliveries. You're embedded with the team throughout — not waiting on status reports.",
  },
  {
    num: "Scale",
    title: "Launch and compound",
    desc: "We monitor, optimise, and continue iterating after launch. Most clients move into a growth retainer because the work that matters most starts after the product ships.",
  },
];

const projects = {
  featured: {
    id: "evt-saas",
    title: "EVT SaaS",
    category: "AI SaaS",
    year: "2024",
    description: "Greenfield AI operations platform with intelligent automation workflows. The scope grew mid-engagement driven by the team's delivery quality and communication.",
    outcome: "→ Greenfield to live beta in 10 weeks",
    stack: ["OpenAI", "LangChain", "TypeScript", "FastAPI"],
    visual: (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/images/work/image.png"
          alt="EVT SaaS project"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  mainVertical: [
    {
      id: "landdesign",
      title: "Land Design",
      category: "Real Estate",
      year: "2024",
      description: "Digital platform for land planning and property visualisation with GIS tooling. The client needed a full-stack solution to manage land parcels, zoning data, and interactive maps.",
      outcome: "→ 30% faster land parcel processing time",
      stack: ["TypeScript", "React", "PostgreSQL"],
      visual: (
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/work/landeding.png"
            alt="Land Design project"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      id: "bultra-bank",
      title: "Bultra Bank",
      category: "Fintech",
      year: "2024",
      description: "A challenger bank entering a new market needed a full digital banking experience — from secure auth and transaction APIs to a customer-facing dashboard and onboarding flow.",
      outcome: "↑ 40% reduction in onboarding drop-off",
      stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      visual: (
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/work/bultra-bank.png"
            alt="Bultra Bank project"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
  ],
  mini: [
    { id: "mercato", title: "Mercato", category: "DevOps", desc: "Node.js performance overhaul and AWS infrastructure rebuild for high-throughput SaaS.", tags: ["Node.js", "AWS", "Docker"] },
    { id: "medicore", title: "Medicore", category: "Healthcare", desc: "Digital health platform for patient management and telemedicine services.", tags: ["React", "Node.js", "MongoDB"] },
    { id: "skyroutes", title: "SkyRoutes", category: "Logistics", desc: "Full-stack route optimisation tool with real-time tracking and driver assignment.", tags: ["React", "Node.js", "Maps API"] },
    { id: "finova", title: "Finova", category: "Fintech", desc: "Savings and investment SaaS with multi-currency wallet and automated rebalancing.", tags: ["TypeScript", "Stripe", "WebSockets"] },
    { id: "learnaxis", title: "LearnAxis", category: "EdTech", desc: "AI-assisted learning platform with structured content generation and adaptive quizzes.", tags: ["Next.js", "OpenAI", "RAG"] },
    { id: "corecloud", title: "CoreCloud", category: "Infra", desc: "Last-minute infrastructure rescue and deployment pipeline rebuild for major launch.", tags: ["AWS", "Kubernetes", "Next.js"] },
  ],
};

/**
 * MAIN PAGE COMPONENT
 */
export default function Home() {
  return (
    <div className="bg-page">
      <HeroSection />

      {/* SERVICES SECTION */}
      <motion.section
        {...sectionReveal}
        id="services"
        className="px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-black/30">OUR SERVICES</p>
          <h2 className="mt-5 font-display text-h2 text-primary">What We Build</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_rgba(108,92,231,0.1)]"
              >
                <h3 className="mt-4 font-display text-[20px] font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-4 flex-grow font-sans text-[14px] leading-[1.7] text-secondary">
                  {service.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-black/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROCESS SECTION */}
      <motion.section
        {...sectionReveal}
        id="process"
        className="bg-surface px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-black/30">HOW WE WORK</p>
          <h2 className="mt-5 font-display text-h2 text-primary">Discover. Design. Build. Scale.</h2>
          <div className="mt-12 grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-border bg-white md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.num} className={`p-8 ${idx !== processSteps.length - 1 ? 'border-b border-border lg:border-b-0 lg:border-r' : ''}`}>
                <h3 className="font-display text-[18px] font-semibold text-primary">{step.title}</h3>
                <p className="mt-4 font-sans text-[14px] leading-[1.7] text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WORK SECTION */}
      <motion.section
        {...sectionReveal}
        id="work"
        className="px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-black/30">SELECTED WORK</p>
          <h2 className="mt-5 font-display text-h2 text-primary">Projects That Shipped</h2>

          <div className="mt-12 space-y-4">
            {/* 1. MAIN BOX (EVT SaaS) */}
            <article className="overflow-hidden rounded-xl border border-border bg-white lg:flex">
              <div className="p-6 lg:w-1/2 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-black/30">
                    {projects.featured.category}
                  </span>
                  <span className="font-sans text-[11px] text-secondary/60">{projects.featured.year}</span>
                </div>
                <h3 className="mt-4 font-display text-[26px] font-bold leading-tight text-primary md:text-[32px]">
                  {projects.featured.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-[1.7] text-secondary">
                  {projects.featured.description}
                </p>
                <div className="mt-6 inline-block rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md px-4 py-2 font-sans text-[12px] font-medium text-black/30">
                  {projects.featured.outcome}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects.featured.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-3 py-1 font-sans text-[10px] text-black/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-[240px] w-full bg-page lg:h-auto lg:w-1/2">
                {projects.featured.visual}
              </div>
            </article>

            {/* 2. TWO MAIN VERTICAL BOXES (MediCore and Bultra Bank) */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {projects.mainVertical.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-xl border border-border bg-white">
                  <div className="relative h-[240px] w-full bg-page">
                    {project.visual}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-black/30">
                        {project.category}
                      </span>
                      <span className="font-sans text-[11px] text-secondary/60">{project.year}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[22px] font-bold text-primary">{project.title}</h3>
                    <p className="mt-4 font-sans text-[14px] leading-[1.7] text-secondary">{project.description}</p>
                    <div className="mt-6 inline-block rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md px-4 py-2 font-sans text-[11px] font-medium text-black/30">
                      {project.outcome}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* 3. MINI BOXES (4 per row) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.mini.map((project) => (
                <article key={project.id} className="rounded-xl border border-border bg-white p-6 transition-colors hover:bg-page">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[16px] font-bold text-primary">{project.title}</h3>
                    <span className="rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-widest text-black/30">{project.category}</span>
                  </div>
                  <p className="mt-3 font-sans text-[13px] leading-[1.6] text-secondary/80">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-3 py-0.5 font-mono text-[9px] text-black/30">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <ClientTestimonialsSection />

      {/* CTA SECTION */}
      <motion.section {...sectionReveal} className="bg-accent-gradient px-6 py-20 md:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.1] text-white">
            Ready to Build Something Great?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-button border border-white bg-transparent px-9 py-[14px] font-sans text-[13px] font-medium uppercase tracking-cta text-white transition-colors duration-200 hover:bg-white hover:text-accent"
          >
            START A CONVERSATION
          </Link>
        </div>
      </motion.section>
    </div>
  );
}