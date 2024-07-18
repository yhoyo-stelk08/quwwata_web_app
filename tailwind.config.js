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
      screens: {
        xs: "425px",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.serif],
        pacifico: ["Pacifico", "cursive"],
        roboto_condensed: ["Roboto Condensed", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        "fade-slide-in": "fadeSlideIn 0.5s ease-out forwards",
        "fade-slide-out": "fadeSlideOut 0.5s ease-out forwards",
        "fade-slide-in-from-left":
          "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-from-right":
          "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-from-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards",
        flash: "flash 1s ease-in-out infinite alternate",
        "zoom-in": "zoom-in 1s ease-in-out forwards",
        "zoom-out": "zoom-out 1s ease-in-out backwards",
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        "fade-slide-in-from-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-1rem)", // Adjust as per your design
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "zoom-in": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "zoom-out": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        flash: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin(), forms, require("flowbite/plugin")],
};
