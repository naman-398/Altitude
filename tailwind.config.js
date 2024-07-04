/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0A0F1F',
        'celtic-blue': '#2673BA',
        'eerie-black': '#101629',
        'outer-space': '#313543',
        'number-bg': '#2673BA3D',
        'yankees-blue': '#152B48'
      },
      lineHeight: {
        '116': '116%',
        '130': '130%',
        '125': '125%',
      },
      screens:{
        'xxs' : '425px'
      }
    },
  },
  plugins: [],
};