module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        smallLaptop: { max: "1248px" },
        // => @media (max-width: 1248px) { ... }

        verySmallLaptop: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }
        tablet: { max: "800px" },
        // => @media (max-width: 800px) { ... }

        smallTablet: { max: "600px" },
        // => @media (max-width: 600px) { ... }

        phone: { max: "450px" },
        // => @media (max-width: 350px) { ... }
      },
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
