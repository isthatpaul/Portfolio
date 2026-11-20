import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-background)",
        surface: "var(--color-surface)",
        raised: "var(--color-surface-raised)",
        elevated: "var(--color-surface-elevated)",
        chip: "var(--color-surface-chip)",
        "footer-surface": "var(--color-surface-footer)",
        ink: "var(--color-foreground)",
        muted: "var(--color-muted-foreground)",
        "muted-strong": "var(--color-muted-strong)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        "accent-dot": "var(--color-accent-dot)",
        amber: "var(--color-highlight-amber)",
        line: "var(--color-border)",
        "footer-line": "var(--color-border-footer)",
      },
      fontFamily: {
        display: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
        script: ["var(--font-script)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        rail: "var(--shadow-rail)",
      },
      borderRadius: {
        token: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};

export default config;
