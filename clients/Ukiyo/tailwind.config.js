const { plugins } = require("eslint-plugin-react/configs/all.js");
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        "navbar-scrolled": "white", // Adjust as needed
      },
    },
  },
  extend: {
    screens: {
      "2xl": "1536px",
    },
  },
  plugins: [],
};
