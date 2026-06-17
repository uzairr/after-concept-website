"use client";

import { motion } from "framer-motion";
import { valuesContent } from "@/lib/about-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutValues() {
  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-content">
        <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-widest text-black/30">
          OUR VALUES
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {valuesContent.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: easeOut }}
              className="text-center md:text-left"
            >
              <h3 className="font-display text-xl font-light text-primary md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-secondary md:text-[16px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}