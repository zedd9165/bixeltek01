import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {   
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
        xl: "1500px"
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1500px"
    },
    extend: {
      boxShadow: {
        'custom': '0px 1px 12px 1px #6a329f', 
        'glow': "0 0 10px 0px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.6)",
        'purple-custom': '0px 4px 20px 4px rgba(140,69,255,0.5)',
        'custom-inset': 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        'bento-card': '1px 1px 20px 1px rgba(140,69,255,0.5)',
        'purple-custom2': '0px 0px 100px 10px rgba(140,69,255,0.5)',
        'purple-custom3': '0px 0px 50px 6px rgba(140,69,255,0.5)',
        'card-shadow':'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        panel: "0 1px 0 rgba(11,18,32,.04), 0 24px 48px -24px rgba(11,18,32,.18)",
        lift: "0 12px 32px -16px rgba(36,71,245,.35)",
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montaga': ['Montaga', 'serif'],
        'anton': [ 'Anton', 'sans-serif'],
        'italiana': ['Italiana', 'serif'],
        'antonio': ['Antonio', 'sans-serif'],
        'sofiasanscondensed': ['Sofia Sans Condensed', 'sans-serif'],
        display: ["'Bricolage Grotesque Variable'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff', 
        'neon-purple': '#bf00ff',
        'primary-500': '#6366f1',
        'dark-900': '#0f0f0f',
        ink: { DEFAULT: "#0B1220", 700: "#2A3344", 500: "#5B6475", 300: "#9AA2B1" },
        paper: { DEFAULT: "#FFFFFF", soft: "#F6F7F9", line: "#E4E7EC" },
        brand: { DEFAULT: "#2447F5", dark: "#1A35C4", tint: "#EDF0FF" },
        night: { DEFAULT: "#0A0F1E", card: "#111833", line: "#222B4D" },
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5.4vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 3.6vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        card: "20px",
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes:{
        'border-spin': {
          '100%':{
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation:{
        'border-spin': 'border-spin 7s linear infinite',
        // 'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
