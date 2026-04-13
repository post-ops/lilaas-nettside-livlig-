import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#061e2d",
        surface: "#0f3d52",
        field: "#0a2c3f",
        accent: "#f97316",
        accentSoft: "#fdba74",
        accentMid: "#fb923c",
        accentDeep: "#c2410c",
        accentHover: "#ea580c",
        link: "#7dd3fc",
        linkHover: "#fdba74",
        muted: "#9ec9dc"
      },
      boxShadow: {
        card: "0 22px 48px rgba(4, 30, 45, 0.45), 0 0 0 1px rgba(56, 189, 248, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
