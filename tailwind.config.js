/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["yekan", "san-serif"],
      },
      colors: {
        "dark-purple": "#3B1E54",
        "light-purple": "#EEEEEE",
        "ada-purple": "#9B7EBD",
        pinky: "#DC0083",
      },
    },
  },
  plugins: [],
};
