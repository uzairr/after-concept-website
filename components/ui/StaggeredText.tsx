"use client";

import { motion, type Variants } from "framer-motion";

export function StaggeredText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
          <motion.span variants={child} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.div>
  );
}
