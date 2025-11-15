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
        primary: {
          DEFAULT: "#0066CC",
          light: "#0099FF",
          dark: "#0052A3",
        },
        accent: {
          DEFAULT: "#00CCCC",
          light: "#33D9D9",
          dark: "#00A3A3",
        },
        white: {
          DEFAULT: "#FFFFFF",
          off: "#F8F9FA",
        },
        text: {
          dark: "#1a1a1a",
          light: "#666666",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0 2px 8px rgba(0, 0, 0, 0.1)",
        lg: "0 4px 16px rgba(0, 0, 0, 0.15)",
        xl: "0 8px 24px rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

