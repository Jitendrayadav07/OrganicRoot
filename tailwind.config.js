/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#1f513f",
        brandYellow: "#f2b33d",
      },
    },
  },
  plugins: [],
}

