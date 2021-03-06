const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    content: ["*.html", "*.html", "static/js/*.jsx"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      lime: colors.lime,
      blue: colors.blue,
      green: colors.emerald,
      yellow: colors.amber,
      red: colors.red,
    },
    fontFamily: {
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
