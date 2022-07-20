/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        "primary-hover": "hsl(var(--color-primary) / 70%)",
        secondary: "hsl(var(--color-secondary))",
        grey: "hsl(var(--color-grey))",
        dark: "hsl(var(--color-dark))",
      },
    },
  },
  plugins: [],
}
