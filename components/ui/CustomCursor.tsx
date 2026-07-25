"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  type CursorVariant = "default" | "clickable" | "view" | "text" | "none";
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let newVariant: CursorVariant = "default";

      if (target.closest("[data-cursor='view']")) {
        newVariant = "view";
      } else if (target.closest("[data-cursor='text']") || window.getComputedStyle(target).cursor === "text") {
        newVariant = "text";
      } else if (target.closest("[data-cursor='none']")) {
        newVariant = "none";
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        newVariant = "clickable";
      }

      setVariant(newVariant);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  const variants = {
    default: { width: 12, height: 20, backgroundColor: "var(--theme-accent)", borderWidth: 0, borderRadius: "0px" },
    clickable: { width: 32, height: 32, backgroundColor: "transparent", borderColor: "var(--theme-accent)", borderWidth: 2, borderRadius: "0px" },
    view: { width: "auto", height: 32, paddingLeft: 12, paddingRight: 12, backgroundColor: "var(--theme-accent)", borderWidth: 0, borderRadius: "0px" },
    text: { width: 2, height: 24, backgroundColor: "var(--theme-accent)", borderWidth: 0, borderRadius: "0px" },
    none: { width: 0, height: 0, opacity: 0 }
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:flex items-center justify-center overflow-hidden mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={variant}
      initial="default"
      transition={{ type: "spring", stiffness: 600, damping: 40 }} // Much sharper, less bouncy physics
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: variant === "view" ? 1 : 0 }}
        className="font-mono text-[11px] font-bold text-white tracking-widest pointer-events-none select-none whitespace-nowrap"
      >
        [ EXECUTE ]
      </motion.span>
    </motion.div>
  );
}
