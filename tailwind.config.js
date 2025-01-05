/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homecover: 'linear-gradient(to bottom, rgb(0 0 0 / 83%), rgb(0 0 0 / 83%)),url("/cover.jpg")',
        danger1: 'linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/danger1.jpg")',
        shelter1: 'linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/shelter1.jpg")',
        help1: 'linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/help1.jpg")',
        disastercover: 'linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/flood.jpg")',
        sheltercover: 'linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url("/camp.jpg")',
        logincover: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("/logincover.jpg")',
      },
      colors: {
        sky: '#25B4BF', // Custom primary color
        instagram: 'linear-gradient(to bottom, #F58529, #DD2A7B, #8134AF, #515BD4)',
      },
      animation: {
        "slide-down": "slideDown 1s ease-out",
        glow: "glow 2s infinite alternate",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.6)" }, // Light blue glow
          "100%": { boxShadow: "0 0 20px 4px rgba(59, 130, 246, 1)" }, // Intense blue glow
        },
      },
    },
  },
  plugins: [],
};
