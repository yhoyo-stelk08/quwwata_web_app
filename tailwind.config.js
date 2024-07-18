import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.serif],
        pacifico: ["Pacifico", "cursive"],
        roboto_condensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },

  plugins: [flowbite.plugin(), forms, require("flowbite/plugin")],
};
