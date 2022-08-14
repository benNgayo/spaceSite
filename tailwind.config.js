/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/public/assets/home/background-home-desktop.jpg')",
        destination:
          "url('/public/assets/destination/background-destination-desktop.jpg')",
        crew: "url('/public/assets/crew/background-crew-desktop.jpg')",
      },
      colors: {
        dark: "#0B0D17",
        primary: "#D0D6F9",
        white: "#FFFFFF",
      },
      backgroundColor: {
        black: "#000",
      },
      fontFamily: {
        body: "Bellefair",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
