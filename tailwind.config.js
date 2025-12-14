/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        bolle: ["Bolle", "Comic Sans MS", "cursive", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "oklch(10% 0.07 257)",
          transparent: "oklch(10% 0.07 257 / .6)",
          light: "oklch(10% 0.03 257)",
        },
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
