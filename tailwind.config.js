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
      red: colors.red,
      green: colors.emerald,
      yellow: colors.amber,
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
