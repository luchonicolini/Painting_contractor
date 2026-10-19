/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canon source of truth: navy foundation + Sapphire conversion accent + Sky support.
        // See DESIGN.md and README.md — keep all three in sync when changing a value.
        brand: {
          // Deep Architectural Navy (primary foundation)
          navy: "#0B192C",
          "navy-dark": "#06101E",
          "navy-light": "#162842",

          // Royal Sapphire — the single conversion/CTA accent
          sapphire: "#1D4ED8",
          "sapphire-hover": "#1E40AF",
          "sapphire-light": "#EFF6FF",

          // Sky / Aegean Architectural support accent (trust marks, eyebrows)
          sky: "#0284C7",
          "sky-hover": "#0369A1",
          "sky-light": "#E0F2FE",

          slate: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          surface: "#FFFFFF",
          border: "#E2E8F0",

          // ---------------------------------------------------------------------------
          // Deprecated aliases (kept so nothing breaks). Prefer the canonical names above.
          // NOTE: "amber"/"gold" were always the Sapphire blue above — NOT Tailwind amber.
          //       Use Tailwind's `amber-*` palette when you want a real yellow/gold accent.
          // ---------------------------------------------------------------------------
          palm: "#0B192C",
          "palm-light": "#162842",
          amber: "#1D4ED8",
          "amber-hover": "#1E40AF",
          "amber-light": "#EFF6FF",
          gold: "#1D4ED8",
          "gold-hover": "#1E40AF",
          "gold-light": "#EFF6FF",
          teal: "#0284C7",
          "teal-hover": "#0369A1",
          "teal-light": "#E0F2FE",
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Inter', 'sans-serif'],
        heading: ['"Fraunces"', '"Plus Jakarta Sans"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
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
