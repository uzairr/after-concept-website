"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { servicesDetail } from "@/lib/services-content";
import { picsumImage } from "@/lib/images";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ServicesDetail() {
  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-content space-y-20 md:space-y-28">
        {servicesDetail.map((service, i) => {
          const imageRight = i % 2 === 1;
          return (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: easeOut }}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden border border-[rgba(240,236,228,0.1)] bg-[#0a0c14] ${
                  imageRight ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={picsumImage(`svc-detail-${service.id}`, 960, 720)}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-page/35 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <div
                className={`max-w-2xl ${
                  imageRight ? "md:order-1 md:ml-0 md:text-right" : "md:order-2"
                }`}
              >
                <h2 className="font-display text-[32px] font-light leading-tight text-primary md:text-[32px]">
                  {service.title}
                </h2>
                <p className="mt-4 font-sans text-[16px] leading-[1.75] text-secondary md:text-[17px]">
                  {service.description}
                </p>
                <ul
                  className={`mt-6 flex flex-wrap gap-2 ${
                    imageRight ? "md:justify-end" : ""
                  }`}
                >
                  {service.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-full border border-[#e4e4e4] bg-[#f2f2f2] px-2.5 py-1 font-sans text-[11px] font-normal uppercase tracking-[0.16em] text-primary">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}