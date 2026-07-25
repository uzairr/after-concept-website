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
        page: "var(--color-page)",
        surface: "var(--color-section-alt)",
        hero: {
          from: "var(--color-hero-from)",
          via: "var(--color-hero-mid)",
          to: "var(--color-hero-to)",
        },
        primary: "var(--color-primary-text)",
        secondary: "var(--color-secondary-text)",
        eyebrow: "var(--color-eyebrow)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        border: "var(--color-border)",
        outline: "var(--color-outline)",
        card: "var(--color-card-bg)",
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
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
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
        nav: "0.15em",
        eyebrow: "0.18em",
        cta: "0.12em",
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)",
        "accent-gradient": "var(--accent-gradient)",
        "accent-gradient-soft":
          "linear-gradient(140deg, rgba(74,114,255,0.22) 0%, rgba(92,133,255,0.12) 55%, rgba(255,255,255,0) 100%)",
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