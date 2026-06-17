import { THEME_STORAGE_KEY } from "@/lib/siteContent";

/** Inline script for <head> — prevents theme flash before hydration (Phase 2 ThemeToggle). */
export const themeInitScript = `
(function () {
  var key = "${THEME_STORAGE_KEY}";
  var root = document.documentElement;
  var preference = localStorage.getItem(key);
  if (preference === "system") {
    preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    try { localStorage.setItem(key, preference); } catch (e) {}
  }
  if (preference !== "light" && preference !== "dark") {
    preference = "dark";
  }
  root.setAttribute("data-theme", preference);
})();
`.trim();
