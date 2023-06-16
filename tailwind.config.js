/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)", //        Dark Mode Elements
        "very-dark-blue1": "hsl(207, 26%, 17%)", //  Dark Mode Background
        "very-dark-blue2": "hsl(200, 15%, 8%)", //   Light Mode Text
        "dark-gray": "hsl(0, 0%, 52%)", //           Light Mode Input
        "very-light-gray": "hsl(0, 0%, 98%)", //     Light Mode Background
        // "white"                                   Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
};
