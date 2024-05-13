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
        brandCol9: "#4CAF50",
        brandCol10: "#81C784",
        brandCol11: "#00A99D",
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
          "0%, 100%": { boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.2)" },
          "40%": { boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.4)" },
        },
        "letter-rotate": {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(-17deg)" },
        },
        "letter-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-glow": "subtle-glow 10s ease-in-out infinite",
        "letter-rotate": "letter-rotate 3s ease-in-out infinite",
        "letter-bob": "letter-bob 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
