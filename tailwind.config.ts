import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#061726",
        surface: "#0b2235",
        field: "#081b2c",
        accent: "#2aa9e0",
        accentSoft: "#9fdaf5",
        accentMid: "#66c2eb",
        accentDeep: "#0369a1",
        accentHover: "#158fc6",
        link: "#8fd4f4",
        linkHover: "#d0ecfa",
        muted: "#9eb6c9"
      },
      boxShadow: {
        card: "0 20px 42px rgba(2, 15, 26, 0.52), 0 0 0 1px rgba(143, 212, 244, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
