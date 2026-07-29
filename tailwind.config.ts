import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FBF9F5",
        sage: {
          50: "#f2f7f4",
          100: "#e1ede6",
          500: "#2E6F56",
          600: "#245844",
          700: "#1b4233",
        },
        charcoal: {
          800: "#1f2e29",
          900: "#16221E",
        },
        amber: {
          500: "#E89A3C",
          600: "#d48529",
        },
        cream: "#F3EFE6",
        borderTint: "#E2DDD2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(22, 34, 30, 0.08)",
        soft: "0 4px 20px -2px rgba(22, 34, 30, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
