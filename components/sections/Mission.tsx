"use client";

import { motion } from "framer-motion";
import { missionContent } from "@/lib/home-content";

export default function Mission() {
  return (
    <section className="bg-page px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[12px] font-normal uppercase tracking-[0.28em] text-secondary">
            {missionContent.label}
          </p>
          <blockquote className="mt-8 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-light italic leading-snug text-primary md:leading-relaxed">
            {missionContent.quote}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
