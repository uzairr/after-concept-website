"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/about-content";
import { picsumImage } from "@/lib/images";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutTeam() {
  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className="inline-block rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 font-sans text-[12px] font-normal uppercase tracking-[0.28em] text-black/30">
            OUR TEAM
          </p>
          <p className="mt-4 font-display text-lg font-light italic text-accent md:text-xl">
            Architects of Innovation
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,2.75rem)] font-light text-primary">
            Collaborators
          </h2>
        </motion.div>

        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {teamMembers.map((member, i) => (
            <motion.li
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: easeOut,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="group relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full border border-transparent bg-surface transition-colors duration-300 hover:border-accent md:h-[132px] md:w-[132px]">
                <Image
                  src={picsumImage(`about-collab-${member.id}`, 400, 400)}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 120px, 132px"
                />
              </div>
              <p className="mt-5 font-display text-[18px] font-normal text-primary">
                {member.name}
              </p>
              <p className="mt-2 font-sans text-[12px] font-normal uppercase tracking-[0.18em] text-secondary">
                {member.role}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}