"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** The display string e.g. "50+", "100%", "4" */
  value: string;
  /** Duration in ms (default 1800) */
  duration?: number;
}

/**
 * Parses a display value like "50+", "3+", "100%", "4"
 * into a numeric target + suffix string.
 */
function parseValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

/** Ease-out cubic */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const { target, suffix } = parseValue(value);
  const [current, setCurrent] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  // Intersection Observer — trigger when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  // Animate count up when triggered
  useEffect(() => {
    if (!triggered) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, target, duration]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
