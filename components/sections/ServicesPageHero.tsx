"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServicesHeroArt from "@/components/sections/ServicesHeroArt";
import { servicesHeroContent } from "@/lib/services-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function ServicesPageHero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ServicesHeroArt />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[rgba(13,15,26,0.5)]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-6 pb-20 pt-28 text-center md:px-12 md:pt-32">
        <motion.p
          className="font-sans text-[13px] font-normal uppercase tracking-[0.3em] text-[rgba(240,236,228,0.6)]"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.72, ease: easeOut }}
        >
          {servicesHeroContent.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-[22ch] font-display font-light leading-[1.05] text-[clamp(40px,5.5vw,76px)] text-primary"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.78,
            delay: 0.26,
            ease: easeOut,
          }}
        >
          {servicesHeroContent.headline[0]}
          <br />
          {servicesHeroContent.headline[1]}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl font-sans text-[16px] leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48, ease: easeOut }}
        >
          {servicesHeroContent.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.68, ease: easeOut }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex max-w-[95vw] items-center justify-center border border-solid border-[rgba(240,236,228,0.6)] bg-transparent px-6 py-[12px] text-center font-sans text-[10px] font-normal uppercase leading-snug tracking-[0.14em] text-primary transition-colors duration-300 hover:bg-[rgba(240,236,228,0.08)] sm:px-[48px] sm:text-[12px] sm:tracking-[0.22em]"
          >
            {servicesHeroContent.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
