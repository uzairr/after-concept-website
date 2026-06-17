"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesPreview } from "@/lib/home-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ServicesPreview() {
  return (
    <section className="bg-page px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-content">
        <motion.p
          className="text-center font-sans text-[12px] font-normal uppercase tracking-[0.28em] text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          WHAT WE DO
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {servicesPreview.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: easeOut,
              }}
              className="group border border-[rgba(240,236,228,0.1)] bg-surface p-8 transition-colors duration-300 hover:border-[rgba(200,184,154,0.4)]"
            >
              <Link href="/services" className="block">
                <h2 className="font-display text-[22px] font-normal text-primary">
                  {item.title}
                </h2>
                <p className="mt-3 font-sans text-[14px] leading-relaxed text-secondary">
                  {item.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
