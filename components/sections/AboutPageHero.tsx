"use client";

import { motion } from "framer-motion";
import AboutHeroArt from "@/components/sections/AboutHeroArt";
import { aboutHeroContent } from "@/lib/about-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutPageHero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AboutHeroArt />
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
          {aboutHeroContent.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-[20ch] font-display font-light leading-[1.05] text-[clamp(48px,6.5vw,88px)] text-primary"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.78,
            delay: 0.28,
            ease: easeOut,
          }}
        >
          {aboutHeroContent.headline[0]}
          <br />
          {aboutHeroContent.headline[1]}
        </motion.h1>
      </div>
    </section>
  );
}
