import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DD885F",
        secondary: "#2B3144",
        gray: "#6C757D",
        black: "#111010",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
