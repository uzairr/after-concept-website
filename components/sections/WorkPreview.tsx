"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { workPreview } from "@/lib/home-content";
import { picsumImage } from "@/lib/images";

export default function WorkPreview() {
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
          RECENT WORK
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {workPreview.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/work"
                className="group relative block aspect-[4/3] overflow-hidden border border-[rgba(240,236,228,0.08)] bg-[#0a0c14] transition-transform duration-500 ease-out hover:scale-[1.02]"
              >
                <Image
                  src={picsumImage(item.id, 960, 720)}
                  alt={`${item.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 2}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-[#0d0f1a]/55 to-[#0d0f1a]/20"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,184,154,0.08),transparent_55%)]" />
                <div
                  className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <span className="font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-secondary">
                    {item.tag}
                  </span>
                  <span className="mt-2 font-display text-xl font-normal text-primary">
                    {item.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
