/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#742775",
      },
      fontFamily: {
        popr: ['popr', 'sans-serif'],
        popb: ['popb', 'sans-serif'],
        popbb: ['popbb', 'sans-serif'],
        popsb: ['popsb', 'sans-serif'],
        popl: ['popl', 'sans-serif'],
      },
      backgroundImage: {
        'footer-pattern': "url('/src/assets/footer_bg.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
