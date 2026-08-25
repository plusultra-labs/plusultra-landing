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
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "Helvetica", "ui-sans-serif", "sans-serif"],
        display: ["Newsreader", "Georgia", "ui-serif", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
      },
      transitionTimingFunction: {
        pu: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
};
