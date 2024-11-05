/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homecover':'linear-gradient(to bottom,rgb(0 0 0 / 83%), rgb(0 0 0 / 83%)),url("/cover.jpg")',
        'danger1':'linear-gradient(to bottom,rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/danger1.jpg")',
        'shelter1':'linear-gradient(to bottom,rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/shelter1.jpg")',
        'help1':'linear-gradient(to bottom,rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/help1.jpg")',

      },
    colors: {
      sky: '#25B4BF', // Add your custom color here
    },
  },
},
  plugins: [],
}

