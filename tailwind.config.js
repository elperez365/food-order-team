/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dun: "#D7C9AA",
        skobeloff: "#0B7A75",
        midnightGreen: "#19535F",
        faluRed: "#7B2D26",
        antiFlash: "#FOF3F5",
      },
      backgroundImage: {
        wallpaper: "url('./assets/wallpaper.png')",
      },
      dropShadow: {
        white: "0 0 2px rgba(251, 251, 251, 0.952)",
      },
    },
  },
  plugins: [],
};
