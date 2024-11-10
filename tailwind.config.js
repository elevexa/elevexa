/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
        instrument: ['InstrumentSans', 'sans-serif'],
        youngSerif: ['YoungSerif', 'serif'],
      },
    },
  },
  plugins: [],
}