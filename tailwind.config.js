/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brandBlue: "#7d91ff",
        brandCyan: "#97f0ff",
        brandGray: "#7C7C7C"
      },
    },
  },
  plugins: [],
}

