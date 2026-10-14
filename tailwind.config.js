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
          navy: "#0F2942",
          "navy-dark": "#0B1C2E",
          "navy-light": "#1C3854",
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          amber: "#D97706",
          "amber-hover": "#B45309",
          slate: "#475569",
          muted: "#64748B",
          light: "#F8FAFC",
          surface: "#FFFFFF",
          border: "#E2E8F0",
          teal: "#0D9488",
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
