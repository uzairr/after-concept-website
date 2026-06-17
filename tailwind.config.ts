import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        /* Legacy (existing pages) */
        page: "#ffffff",
        surface: "#f7f8fe",
        hero: {
          from: "#d8dff8",
          via: "#ebeefe",
          to: "#fbfaff",
        },
        primary: "#1a1a2e",
        secondary: "#7a7a9a",
        eyebrow: "#9090aa",
        accent: "#6c5ce7",
        "accent-light": "#f0eeff",
        border: "#e8e8f0",
        outline: "#d0d0e0",
        card: "#ffffff",
        /* Refactor / reference semantic tokens (header + hero, Phase 2+) */
        base: "var(--bg)",
        "surface-2": "var(--surface-2)",
        "theme-surface": "var(--surface)",
        foreground: "var(--text)",
        muted: "var(--text-muted)",
        faint: "var(--text-faint)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        highlight: "var(--highlight)",
        "theme-accent": "var(--accent)",
        "accent-contrast": "var(--accent-contrast)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        /** Alias for digital-agency `font-heading` (Syne / --font-syne) */
        heading: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        nav: ["13px", { lineHeight: "1.25" }],
        eyebrow: ["13px", { lineHeight: "1.3" }],
        "section-body": ["17px", { lineHeight: "1.75" }],
        "cta-sm": ["12px", { lineHeight: "1.25" }],
        hero: [
          "clamp(44px,6vw,80px)",
          { lineHeight: "1.1", fontWeight: "800" },
        ],
        h2: ["clamp(32px,4vw,52px)", { lineHeight: "1.15", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      letterSpacing: {
        nav: "0.12em",
        eyebrow: "0.14em",
        cta: "0.1em",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(165deg, #d4dcf6 0%, #e4e9fc 28%, #f0f2ff 58%, #ffffff 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #4f3fd4 0%, #6c5ce7 38%, #8b7aed 72%, #b4a7fc 100%)",
        "accent-gradient-soft":
          "linear-gradient(140deg, rgba(108,92,231,0.22) 0%, rgba(162,155,254,0.12) 55%, rgba(255,255,255,0) 100%)",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      borderRadius: {
        button: "6px",
      },
      maxWidth: {
        content: "72rem",
      },
      spacing: {
        header: "var(--header-offset)",
      },
    },
  },
  plugins: [],
};

export default config;