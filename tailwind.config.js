export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        body: {
          dark: "#0B1423",
          light: "#FDFDFD",
        },
        green: {
          1: "#6FB15F",
        },
        purple: {
          dark: "#5333F6",
          darker: "#2F365B",
        },
        blue: {
          dark: "#07193C",
        },
        black: {
          bright: "#09101B",
        },
        text: {
          white: "#FDFDFD",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
