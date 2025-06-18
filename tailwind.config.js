/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rosa-claro": "#FFF0F5",
        "cinza-suave": "#A7A7A7",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
