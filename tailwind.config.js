/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        layout: "rgb(250, 250, 250)",
        child: "rgb(255, 255, 255)",
        border: "rgb(242, 242, 242",
        "fainted-black": "rgba(0, 0, 0, 0.04)",
        ash: "#b8b8b8",
        plus: "rgb(153, 153, 153)",
        'deep-ash':"rgb(153, 153, 153)"
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
