"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlowCard } from "@/components/ui/GlowCard";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { ClientTestimonialsSection } from "@/components/sections/ClientTestimonialsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FaCompass, FaPalette, FaCode, FaRocket } from "react-icons/fa";
import { SelectedWorkCarousel } from "@/components/sections/SelectedWorkCarousel";
import {
  services,
  processSteps,
} from "@/lib/home-content";

/**
 * ANIMATION CONSTANTS
 */
const sectionReveal = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px", amount: 0.1 as const },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
};
const stepIcons = [FaCompass, FaPalette, FaCode, FaRocket];
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
        className="px-6 py-12 md:px-12 md:py-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <StaggeredText text="What We Build" className="mt-5 font-display text-3xl font-extrabold md:text-4xl text-foreground tracking-tight text-center w-full flex justify-center" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {[
              {
                ...services[0],
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-10 w-10">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                ...services[1],
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-10 w-10">
                    <path d="M16.5 7.5h-9v9h9v-9z" />
                    <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75zM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                ...services[2],
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-10 w-10">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                ),
              },
              {
                ...services[3],
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-10 w-10">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm4.5-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}

                className="h-full"
              >
                <GlowCard className="group flex h-full flex-col items-center text-center rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]">
                  {/* Circular accent icon with glow */}
                  <div className="icon-animated relative mb-2 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-accent shadow-[0_0_15px_rgba(74,114,255,0.4)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(74,114,255,0.55)]">
                    {service.svg}
                  </div>
                  <h3 className="mt-5 font-display text-[20px] font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-sans text-[14px] leading-[1.7] text-secondary">
                    {service.body}
                  </p>
                  <div className="mt-auto pt-6 flex flex-wrap justify-center gap-2 w-full">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-surface backdrop-blur-md px-3 py-1 font-mono text-[10px] text-primary uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.article>
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
          <StaggeredText text="How We Work" className="mt-5 font-display text-3xl font-extrabold md:text-4xl text-foreground tracking-tight text-center w-full flex justify-center" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div
                  key={step.phase}
                  className="rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]"
                >
                  <span className="transform flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-theme-accent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:rotate-6 hover:bg-accent/25 hover:shadow-[0_6px_16px_rgba(92,133,255,0.35)]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="mt-6 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-theme-accent">
                    {step.phase}
                  </p>
                  <h3 className="mt-2 font-display text-[18px] font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-sans text-[14px] leading-[1.7] text-secondary">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SELECTED WORK CAROUSEL SHOWCASE */}
      <SelectedWorkCarousel />

      <ClientTestimonialsSection />

      {/* CTA SECTION */}
      <motion.section {...sectionReveal} className="bg-surface border-y border-line px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <StaggeredText 
            text="Ready to Build Something Great?" 
            className="max-w-3xl font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.1] text-primary" 
          />
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-button border border-outline bg-transparent px-9 py-[14px] font-sans text-[13px] font-medium uppercase tracking-cta text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              START A CONVERSATION
            </Link>
          </MagneticButton>
        </div>
      </motion.section>
    </div>
  );
}