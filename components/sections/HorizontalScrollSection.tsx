"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { GlowCard } from "@/components/ui/GlowCard";

export function HorizontalScrollSection({
  steps,
}: {
  steps: { phase: string; desc: string }[];
}) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress to horizontal translation
  // We use -25% so it doesn't scroll into the void on wide monitors.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section ref={targetRef} className="relative h-[120vh] bg-surface">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-12">
        
        <motion.div style={{ x }} className="flex gap-6 md:gap-10">
          {steps.map((step) => (
            <div
              key={step.phase}
              className="w-[85vw] md:w-[400px] shrink-0 flex flex-col gap-4"
            >
              <h2 className="font-display text-[clamp(22px,2.5vw,36px)] font-extrabold text-primary">
                {step.phase}
              </h2>
              
              <GlowCard className="flex-1 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent min-h-[220px]">
                <p className="font-sans text-[14px] leading-[1.7] text-secondary relative z-10">
                  {step.desc}
                </p>
              </GlowCard>
            </div>
          ))}
          {/* Small spacer to ensure the last card breathes */}
          <div className="w-[5vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
