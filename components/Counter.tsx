"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

// Easing function for smooth count up (easeOutCubic)
const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export default function Counter({
  value,
  suffix = "",
  duration = 1500,
}: CounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Check for reduced motion preference
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (prefersReducedMotion) {
            setCurrentValue(value);
            return;
          }

          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Calculate percentage of duration completed (0 to 1)
            let percentage = progress / duration;
            if (percentage > 1) percentage = 1;

            // Apply easing
            const easedProgress = easeOut(percentage);

            // Set new value based on eased progress
            setCurrentValue(Math.floor(easedProgress * value));

            if (progress < duration) {
              requestAnimationFrame(step);
            } else {
              setCurrentValue(value); // Ensure it ends exactly on target
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {currentValue}
      {suffix}
    </span>
  );
}
