module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "v-dark-blue": "hsl(207, 26%, 17%)",
        "v-dark-blue-dark": "hsl(207, 26%, 17%)",
        "v-dark-blue-light": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "v-dark-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        main: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
