"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ctaBannerContent } from "@/lib/home-content";

type CtaBannerProps = Record<string, never>;

export default function CtaBanner({}: CtaBannerProps) {
  return (
    <section className="bg-accent-gradient px-6 py-16 md:px-12 md:py-20">
      <motion.div
        className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.15] text-white">
          {ctaBannerContent.headline}
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-button border border-white bg-transparent px-9 py-[14px] font-sans text-[13px] font-medium uppercase tracking-cta text-white transition-colors duration-200 hover:bg-white hover:text-accent"
        >
          {ctaBannerContent.cta}
        </Link>
      </motion.div>
    </section>
  );
}
