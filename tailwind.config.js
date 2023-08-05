/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow":
          "0 2px 12px 10px rgba(84, 56, 93, 0.35), 0 0px 2px rgba(0, 0, 0, 0.2)",
        "another-shadow": "0 4px 10px rgba(0, 0, 0, 0.2)",
        "inner-shadow": "0px 1px 16px -5px rgba(0,0,0,0.21) inset",
        "div-shadow": "inset -25px 0px 81px -26px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
