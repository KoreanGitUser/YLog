const defaultColors = require("tailwindcss/colors");
const defaultDropShadows = require("tailwindcss/defaultTheme").dropShadow;
const defaultBoxShadows = require("tailwindcss/defaultTheme").boxShadow;

module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eland: ["ELAND_Choice_M"],
        sebang: ["SEBANG_Gothic_Bold"],
      },
      colors: {
        // LIGHT
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-contra": "#262626",
        // DARK
        dark: "#262626",
        "dark-active": "#131313",
        "dark-contra": "#FBFBFB",
        // light sky
        userSetting: "#E8F3FF",
        //social login btn
        kakao: "#ffff00",
        facebook: "#3D5AFE",
        ...defaultColors,
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // smaller
      jm: { max: "424px" },
      xs: { max: "299px" },
    },
    boxShadow: {
      "main-shadow": "inset -2px 0px 6px rgba(244, 20, 222, 0.12);",
      ...defaultBoxShadows,
    },
    dropShadow: {
      ...defaultDropShadows,
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("checked-bg", "& input:checked + *");
      addVariant("checked-dot", "& input:checked + * + *");
      addVariant("unchecked-bg", "& input + *");
      addVariant("unchecked-dot", "& input + * + *");

      // === Table Children Selectors ===
      // Table section
      addVariant("head", "& thead");
      addVariant("body", "& tbody");
      // Rows
      addVariant("all-tr", "& tr");
      addVariant("head-tr", "& thead tr");
      addVariant("body-tr", "& tbody tr");
      // Cells
      addVariant("all-td", ["& th", "& td"]);
      addVariant("all-td-only", "& td");
      addVariant("head-th", "& thead th");
      addVariant("head-td", "& thead td");
      addVariant("head-td-all", ["& thead th", "& thead td"]);
      addVariant("body-th", "& tbody th");
      addVariant("body-td", "& tbody td");
      addVariant("body-td-all", ["& tbody th", "& tbody td"]);
    },
  ],
};
