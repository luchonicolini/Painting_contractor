/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep Architectural Navy (Sherwin-Williams / Benjamin Moore Pro)
          navy: "#0B192C",
          "navy-dark": "#06101E",
          "navy-light": "#162842",
          palm: "#0B192C",
          "palm-light": "#162842",

          // Royal Sapphire & Pro Painter Blue (Llamadas a la acción y acentos)
          amber: "#1D4ED8",
          "amber-hover": "#1E40AF",
          "amber-light": "#EFF6FF",
          gold: "#1D4ED8",
          "gold-hover": "#1E40AF",
          "gold-light": "#EFF6FF",

          // Sky / Aegean Architectural Accent
          teal: "#0284C7",
          "teal-hover": "#0369A1",
          "teal-light": "#E0F2FE",

          slate: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          surface: "#FFFFFF",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0px 4px 20px -2px rgba(15, 41, 66, 0.05)',
        'lift': '0px 12px 28px -4px rgba(15, 41, 66, 0.08)',
        'floating': '0px 20px 40px -8px rgba(15, 41, 66, 0.12)',
      }
    },
  },
  plugins: [],
}
