/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homecover':'linear-gradient(to bottom,#000000cc, rgb(0 0 0 / 83%)),url("/cover.jpg")'

      },
    colors: {
      sky: '#25B4BF', // Add your custom color here
    },
  },
},
  plugins: [],
}

