/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        bolle: ["Bolle", "sans-serif"],
      },
      colors: {
        black: "#222222",
        white: "#f5f5f5",
        yellow: {
          DEFAULT: "oklch(100% 0.22 112)",
          transparent: "oklch(100% 0.22 112 / .8)",
          light: "oklch(100% 0.14 112)",
        },
        green: {
          DEFAULT: "oklch(85% 0.26 151)",
          transparent: "oklch(85% 0.26 151 / .8)",
          light: "oklch(85% 0.20 151)",
        },
      },
    },
  },
  plugins: [],
};
