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
        background: "var(--background)",
        foreground: "var(--foreground)",
        void: "#040408",
        deep: "#080810",
        surface: "#0c0c18",
        elevated: "#10101e",
        neon: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          blue: "#3b82f6",
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
      backdropBlur: {
        "2xl": "40px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(99, 102, 241, 0.15), 0 0 60px rgba(99, 102, 241, 0.08)",
        "neon-lg": "0 0 40px rgba(99, 102, 241, 0.25), 0 0 100px rgba(99, 102, 241, 0.12)",
        "neon-cyan": "0 0 20px rgba(6, 182, 212, 0.15), 0 0 60px rgba(6, 182, 212, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
