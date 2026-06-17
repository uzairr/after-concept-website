"use client";

import { motion } from "framer-motion";
import HeroArt from "@/components/sections/HeroArt";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkPageHero() {
  return (
    <section className="relative min-h-[50vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroArt />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[rgba(13,15,26,0.45)]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center md:px-12 md:pt-28">
        <motion.p
          className="font-sans text-[13px] font-normal uppercase tracking-[0.3em] text-[rgba(240,236,228,0.6)]"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.65, ease: easeOut }}
        >
          OUR WORK
        </motion.p>
        <motion.h1
          className="mt-5 max-w-[16ch] font-display font-light leading-[1.05] text-[clamp(40px,5vw,64px)] text-primary"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
        >
          Projects That Speak
        </motion.h1>
      </div>
    </section>
  );
}
