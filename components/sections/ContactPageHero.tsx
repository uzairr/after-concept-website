"use client";

import { motion } from "framer-motion";
import HeroArt from "@/components/sections/HeroArt";
import { contactHeroContent } from "@/lib/contact-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPageHero() {
  return (
    <section className="relative min-h-[52vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroArt />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[rgba(13,15,26,0.45)]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[52vh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center md:px-12 md:pt-28">
        <motion.p
          className="font-sans text-[13px] font-normal uppercase tracking-[0.3em] text-[rgba(240,236,228,0.6)]"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.65, ease: easeOut }}
        >
          {contactHeroContent.eyebrow}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-[18ch] font-display font-light leading-[1.05] text-[clamp(38px,5vw,64px)] text-primary"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.72, delay: 0.22, ease: easeOut }}
        >
          {contactHeroContent.headline[0]}
          <br />
          {contactHeroContent.headline[1]}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md font-sans text-[16px] leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48, ease: easeOut }}
        >
          {contactHeroContent.subtext}
        </motion.p>
      </div>
    </section>
  );
}
