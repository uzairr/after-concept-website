"use client";

import { useEffect, useState } from "react";

export type ResolvedTheme = "dark" | "light";

function readResolvedTheme(): ResolvedTheme {
  if (typeof document === "undefined") {
    return "dark";
  }
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** Active `data-theme` on `<html>` (dark | light), updated when ThemeToggle changes preference. */
export function useResolvedTheme(): ResolvedTheme {
  const [theme, setTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    setTheme(readResolvedTheme());

    const observer = new MutationObserver(() => {
      setTheme(readResolvedTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}
