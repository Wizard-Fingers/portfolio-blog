import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brandCol1: "#F5F5F5",
        brandCol2: "#0F1419",
        brandCol3: "#494D50",
        brandCol4: "#FFF07C",
        brandCol5: "#FF8C00",
        brandCol6: "#F35B04",
        brandCol7: "#CC6F00",
        brandCol8: "#FFD8B2",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "subtle-glow": {
          "0%, 100%": { boxShadow: "0 0 10px 5px rgba(255, 240, 124, 0.2)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(255, 240, 124, 0.4)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-glow": "subtle-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;