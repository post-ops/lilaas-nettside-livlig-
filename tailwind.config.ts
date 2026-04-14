import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        surface: "#1f2937",
        field: "#0f172a",
        accent: "#94a3b8",
        accentSoft: "#cbd5e1",
        accentMid: "#64748b",
        accentDeep: "#334155",
        accentHover: "#7c8ea6",
        link: "#cbd5e1",
        linkHover: "#e2e8f0",
        muted: "#94a3b8"
      },
      boxShadow: {
        card: "0 24px 44px rgba(2, 6, 23, 0.5), 0 0 0 1px rgba(148, 163, 184, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
