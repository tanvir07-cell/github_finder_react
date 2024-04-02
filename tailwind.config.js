/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./index.html"
],

  theme: {
    extend: {},
    colors:{
      'cranberry': {
        '50': '#fcf3f6',
        '100': '#fae9ef',
        '200': '#f6d4df',
        '300': '#f0b1c5',
        '400': '#e5819f',
        '500': '#d95b7d',
        '600': '#c63c5a',
        '700': '#ab2b43',
        '800': '#8d2739',
        '900': '#772432',
        '950': '#480f19',
    },
    
    
    }
  },
  plugins: [require("daisyui")],
}

