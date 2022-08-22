/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ED017F",
          secondary: "#010101",
          accent: "#37cdbe",
          neutral: "#3d4451",
          dark: "#010101",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
