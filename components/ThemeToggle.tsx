
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { THEME_STORAGE_KEY } from "@/lib/siteContent";

export type ThemePreference = "dark" | "light";

function resolveOsTheme(): ThemePreference {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function normalizePreference(raw: string | null): ThemePreference {
  if (raw === "light" || raw === "dark") {
    return raw;
  }
  if (raw === "system") {
    return resolveOsTheme();
  }
  return "dark";
}

function applyTheme(preference: ThemePreference) {
  document.documentElement.setAttribute("data-theme", preference);
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextPreference = normalizePreference(saved);
    setPreference(nextPreference);
    applyTheme(nextPreference);
    if (saved !== nextPreference) {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    }
  }, []);

  const cycleTheme = () => {
    const nextPreference: ThemePreference = preference === "dark" ? "light" : "dark";
    setPreference(nextPreference);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    applyTheme(nextPreference);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {preference === "dark" ? (
        <motion.svg
          key="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="site-header-nav-link h-[22px] w-[22px] cursor-pointer text-foreground hover:text-highlight transition-colors duration-200"
          role="button"
          tabIndex={0}
          aria-label="Switch to light mode"
          onClick={cycleTheme}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && cycleTheme()}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      ) : (
        <motion.svg
          key="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="site-header-nav-link h-[22px] w-[22px] cursor-pointer text-foreground hover:text-highlight transition-colors duration-200"
          role="button"
          tabIndex={0}
          aria-label="Switch to dark mode"
          onClick={cycleTheme}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && cycleTheme()}
          initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}