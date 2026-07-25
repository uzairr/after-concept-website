"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <motion.div
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "15%", "-20%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute -top-[30%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-theme-accent opacity-[0.12] mix-blend-screen blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["0%", "-20%", "15%", "0%"],
          y: ["0%", "-10%", "25%", "0%"],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute top-[20%] right-[0%] h-[60vh] w-[60vw] rounded-full bg-[#8B5CF6] opacity-[0.12] mix-blend-screen blur-[120px]"
      />
    </div>
  );
}
