module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   mode: "jit",
//   purge: [
//     "./assets/**/*.{css}",
//     "./components/*.{vue,js}",
//     "./components/**/*.{vue,js}",
//     "./pages/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./*.{vue,js,ts}",
//     "./nuxt.config.{js,ts}",
//   ],
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
