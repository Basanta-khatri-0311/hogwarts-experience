// frontend/tailwind.config.js
module.exports = {
  // content is optional in v4 (auto detection), but we include it for clarity
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gryffindor: "#7F0909",
        slytherin: "#0D6217",
        ravenclaw: "#0E1A40",
        hufflepuff: "#EEE117",
        hogwarts: {
          bg: "#0D0D0D",
          gold: "#FFD700",
          stone: "#1C1C1C",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
