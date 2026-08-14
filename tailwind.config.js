/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        paper: "#f7f7f4",
        ink: {
          DEFAULT: "#141513",
          soft: "#5c5e59",
        },
        line: "#dcddd6",
        accent: {
          DEFAULT: "#2743e0",
          soft: "#98a6ff",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1320px",
      },
    },
  },
  plugins: [],
};
