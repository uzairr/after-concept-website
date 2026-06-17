"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/services-content";
import { picsumImage } from "@/lib/images";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ServicesProcess() {
  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.p
          className="text-center font-sans text-[12px] font-normal uppercase tracking-[0.28em] text-secondary"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          HOW WE WORK
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {processSteps.map((step) => (
            <div
              key={step.imageSeed}
              className="relative aspect-[4/3] overflow-hidden rounded border border-[rgba(240,236,228,0.08)] bg-[#0a0c14]"
            >
              <Image
                src={picsumImage(step.imageSeed, 520, 390)}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page/45 to-transparent"
                aria-hidden
              />
            </div>
          ))}
        </motion.div>

        {/* Desktop: horizontal timeline — line passes through dot centers */}
        <div className="relative mt-16 hidden md:block">
          <div
            className="absolute left-[8%] right-[8%] top-8 h-px bg-[rgba(240,236,228,0.22)]"
            aria-hidden
          />
          <div className="grid grid-cols-4 gap-3 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                className="relative flex flex-col items-center px-1 text-center"
              >
                <div
                  className="absolute left-1/2 top-8 z-10 flex h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-page bg-page ring-2 ring-[rgba(240,236,228,0.35)]"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <h3 className="mt-14 font-sans text-[15px] font-bold uppercase tracking-[0.12em] text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[13px] leading-relaxed text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 space-y-10 pl-2 md:hidden">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-[rgba(240,236,228,0.2)]"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
              className="relative pl-10"
            >
              <div
                className="absolute left-0 top-1 flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-page bg-page ring-2 ring-[rgba(240,236,228,0.35)]"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="mt-1 font-sans text-[15px] font-bold uppercase tracking-[0.12em] text-primary">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}