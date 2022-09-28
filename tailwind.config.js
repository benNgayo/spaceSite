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
        destinationMobile:
          "url('/public/assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/public/assets/destination/background-destination-tablet.jpg')",
        crew: "url('/public/assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('/public/assets/crew/background-crew-tablet.jpg')",
        crewMobile: "url('/public/assets/crew/background-crew-mobile.jpg')",
        technologyDesktop:
          "url('/public/assets/technology/background-technology-desktop.jpg')",
        technologyMobile:
          "url('/public/assets/technology/background-technology-mobile.jpg')",
        technologyTablet:
          "url('/public/assets/technology/background-technology-tablet.jpg')",
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
        Barlow: "Barlow",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
