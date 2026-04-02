import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7c3aed",
        black: "#0a0a0a",
        white: "#ffffff",
        "soft-purple": "#f3f0ff",
        gray: "#9ca3af",
      },
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
