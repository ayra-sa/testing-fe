/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "bg-main":
          "linear-gradient(2deg, #101010 79.11%, rgba(0, 0, 0, 0.00) 103.73%, rgba(0, 0, 0, 0.00) 103.73%), linear-gradient(174deg, #A060FA 17.25%, #C800CC 58.14%)",
        "bg-button": "linear-gradient(90deg, #A060FA 22.29%, #C800CC 81.69%)",
      },
    },
  },
  plugins: [],
};
