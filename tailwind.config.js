/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px'
      },
      colors: {
        // Taken from https://getbootstrap.com/docs/5.0/customize/color/
        primary: "#8540f5",
        secondary: "#e0cffc",
        "tertiary-super-dark": "#06281e",
        "tertiary-dark": "#0d503c",
        tertiary: "#1aa179",
        quaternary: "#d2f4ea",
        success: "#20c997",
        danger: "#b02a37",
        warning: "#ffcd39",
        info: "#3dd5f3",
        light: "#f8f9fa",
        dark: "#f8f9fa",
        base: "#495057",
        "light-dark": "#e9ecef",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
