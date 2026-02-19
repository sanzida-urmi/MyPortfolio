import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Sansita", "sans-serif"],   // <-- এখানে extend না
    },
    extend: {
      colors: {
        primary: "#C778DD",
        "background-light": "#F5F5F5",
        "background-dark": "#120B13",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [daisyui],
}
