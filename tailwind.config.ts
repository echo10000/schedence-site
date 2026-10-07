import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#FAFBFC",
        surface: "#FFFFFF",
        sunken: "#F3F5F8",
        ink: "#0B1B33",
        body: "#475569",
        muted: "#5B6B82",
        line: {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },
        "line-strong": "#CBD5E1",
        brand: {
          DEFAULT: "#1F4FD8",
          hover: "#1A41B8",
          subtle: "#EEF3FE",
          line: "#C7D6FB",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#0f172a",
        },
        "brand-hover": "#1A41B8",
        "brand-subtle": "#EEF3FE",
        "brand-line": "#C7D6FB",
        ok: {
          DEFAULT: "#1F7A4D",
          subtle: "#EAF5EE",
        },
        "ok-subtle": "#EAF5EE",
        warn: {
          DEFAULT: "#B45309",
          subtle: "#FEF3E2",
        },
        "warn-subtle": "#FEF3E2",
      },
      boxShadow: {
        card: "0 1px 2px rgb(11 27 51 / 0.04)",
        frame: "0 1px 2px rgb(11 27 51 / 0.05), 0 12px 32px -12px rgb(11 27 51 / 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
