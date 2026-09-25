/** @type {import('tailwindcss').Config} */
// Colours are CSS custom properties so the dark-mode block in main.css can
// re-point them without a second Tailwind palette. Opacity modifiers
// (text-ink/50) do not work on these — use a token or color-mix instead.
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--paper)",
          2: "var(--paper2)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--muted)",
        },
        muted: "var(--muted)",
        line: {
          DEFAULT: "var(--line)",
          2: "var(--line2)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          "soft-line": "var(--accent-soft-line)",
        },
        // Brand fields: the same in light and dark.
        ultra: {
          DEFAULT: "var(--ultra)",
          deep: "var(--ultra-deep)",
          line: "var(--on-ultra-line)",
          muted: "var(--on-ultra-muted)",
          soft: "var(--on-ultra-soft)",
        },
        night: {
          DEFAULT: "var(--night)",
          block: "var(--night-block)",
          line: "var(--night-line)",
          muted: "var(--night-muted)",
        },
        periwinkle: "var(--periwinkle)",
      },
      fontFamily: {
        sans: ["Archivo", "Helvetica Neue", "Arial", "ui-sans-serif", "sans-serif"],
        display: ["Archivo", "Helvetica Neue", "Arial", "ui-sans-serif", "sans-serif"],
        // Only the logo lockup uses these two: it is set in IBM Plex and the
        // brand rules forbid re-setting it.
        logo: ["IBM Plex Sans", "Helvetica", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        // Hard corners: blocks and buttons are cut square.
        DEFAULT: "0",
        sm: "0",
      },
      transitionTimingFunction: {
        pu: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
};
