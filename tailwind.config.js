module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        "primary-light": "#CFC8FF",
        notification: "#FF754C",
        "text-link": "#5F75EE",
        "secondary-blue": "#3F8CFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
