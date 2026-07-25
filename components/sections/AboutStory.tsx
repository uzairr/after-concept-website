"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutStoryContent } from "@/lib/about-content";
import { picsumImage } from "@/lib/images";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutStory() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section className="bg-page px-6 py-24 md:px-12 md:py-32">
      <motion.div
        className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div className="text-center md:text-left">
          <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-display text-lg font-light italic text-accent md:text-xl">
            {aboutStoryContent.label}
          </p>
          <p className="mt-8 font-display text-[20px] font-light leading-relaxed text-primary md:text-[22px] md:leading-relaxed">
            {aboutStoryContent.lead}
          </p>
          <p className="mt-8 font-sans text-[16px] leading-[1.75] text-secondary md:text-[17px]">
            {aboutStoryContent.body}
          </p>
        </div>

        <div ref={imageRef} className="relative aspect-[4/3] w-full overflow-hidden border border-[rgba(240,236,228,0.1)] bg-[#0a0c14]">
          <motion.div style={{ y }} className="absolute -inset-[35%]">
            <Image
              src={picsumImage(aboutStoryContent.imageSeed, 960, 720)}
              alt="After Concept studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-page/30 to-transparent"
            aria-hidden
          />
        </div>
      </motion.div>
    </section>
  );
}