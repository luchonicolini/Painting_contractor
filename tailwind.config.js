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
          blue: "#1E3A8A",
          accent: "#D97706",
          light: "#F8FAFC",
        }
      }
    },
  },
  plugins: [],
}
