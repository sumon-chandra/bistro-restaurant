/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#D1A054",
        secondaryColor: "rgba(209, 160, 84, 0.7);",
      },
      fontFamily: {
        inter: ["Inter"],
        cinzel: ["Cinzel"]
      },
      width: {
        "1200": "1200px"
      }
    },
  },
  plugins: [require("daisyui")],
}