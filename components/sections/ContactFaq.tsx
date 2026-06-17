"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "@/lib/contact-content";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ContactFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-content">
        <h2 className="text-center font-sans text-[12px] font-normal uppercase tracking-[0.28em] text-secondary">
          Questions
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          {faqItems.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-[rgba(240,236,228,0.15)] last:border-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => toggle(item.id)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                >
                  <span className="font-sans text-[15px] leading-snug text-primary md:text-[16px]">
                    {item.question}
                  </span>
                  <span
                    className="relative block h-3 w-3 shrink-0"
                    aria-hidden
                  >
                    <span
                      className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-primary transition-all duration-300 ${
                        open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                      }`}
                    />
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-primary" />
                  </span>
                </button>
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-sans text-[14px] leading-relaxed text-secondary md:text-[15px]">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
