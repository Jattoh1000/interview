/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        card: "0 8px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.02)",
        "card-hover":
          "0 20px 30px -12px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
