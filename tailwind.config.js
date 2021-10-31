module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      width: {
        49: "49%",
      },
      fontFamily: {
        main: ["Nunito Sans", "sans-serif"],
      },
      textColor: {
        main: "#6A4F77",
      },
      backgroundColor: {
        main: "#6A4F77",
      },
      rotate: {
        225: "225deg",
        315: "315deg",
        "-45": "-45deg",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
