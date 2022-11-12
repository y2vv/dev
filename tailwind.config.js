/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: {
          50: "#3fa0ff",
          100: "#3596ff",
          200: "#2b8cff",
          300: "#2182ff",
          400: "#1778ff",
          500: "#0d6efd",
          600: "#0364f3",
          700: "#005ae9",
          800: "#0050df",
          900: "#0046d5",
        },
      },
    },
  },
  plugins: [],
};
