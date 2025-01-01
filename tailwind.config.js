import { green } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navy: "#0a192f",
      green: "#64ffda",
      slate: "#8892b0",
      lightslate: "#a8b2d1",
      lightestslate: "#ccd6f6",
      lightnavy: "#112240",
      lightestnavy: "#233554",
      white: "#e6f1ff"
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite",
        "typing-fast": "typing 3s steps(20), blink 1s infinite" // slower typing for small screens
      }
    }
  },
  plugins: [require("tailwindcss-motion")],
  variants: {
    extend: {
      animation: ["responsive", "motion-safe"]
    }
  }
};
