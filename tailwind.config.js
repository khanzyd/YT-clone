/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1600px",
    },
    extend: {
      colors: {
        "yt-main": "#0F0F0F",
        "yt-secondary": "#222222",
        "yt-tertiary": "#121212",
      },
    },
  },
  plugins: [],
};
