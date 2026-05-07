import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bn: ["var(--font-hind)", "sans-serif"],
        bnSerif: ["var(--font-noto-serif-bn)", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0C0E12",
          elevated: "#15181E",
          high: "#1E222A",
        },
        border: {
          DEFAULT: "#2A2F38",
          strong: "#3A4150",
        },
        ink: {
          DEFAULT: "#F2EFE9",
          muted: "#9CA3AF",
          dim: "#6B7280",
        },
        gold: {
          DEFAULT: "#E8B33D",
          soft: "#F4CB6E",
          deep: "#B8861F",
        },
        emerald: {
          DEFAULT: "#10B981",
          soft: "#34D399",
        },
        crimson: "#EF4444",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F4CB6E 0%, #E8B33D 50%, #B8861F 100%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.7 0 0 0 0 0.2 0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(232,179,61,0.35)",
        gold: "0 10px 30px -10px rgba(232,179,61,0.45)",
        card: "0 12px 40px -16px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "drift": "drift 25s ease-in-out infinite",
        "shimmer": "shimmer 2.6s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        pulseSoft: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(239,68,68,0.45)" },
          "50%": { opacity: "0.85", boxShadow: "0 0 0 10px rgba(239,68,68,0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
