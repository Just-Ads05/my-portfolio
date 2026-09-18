import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // McLaren LN4 Papaya Orange Core Palette
        papaya: {
          DEFAULT: '#FF6B00',
          glow: '#FF7A00',
          light: '#FF9442',
          dark: '#D95300',
          surface: 'rgba(255, 107, 0, 0.08)',
        },
        // Dark Mode: Deep Carbon / Matte Anthracite
        carbon: {
          950: '#0a0c10',
          900: '#0e1015',
          850: '#14171f',
          800: '#1c2029',
          700: '#282d3a',
          600: '#383f4f',
          border: '#242936'
        },
        // Light Mode: Clean Athletic Off-White & Concrete
        track: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e5e7eb',
          300: '#d1d5db',
          text: '#111827',
          subtext: '#4b5563'
        }
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', 'sans-serif'],
        body: ['var(--font-geist)', 'Geist', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;
