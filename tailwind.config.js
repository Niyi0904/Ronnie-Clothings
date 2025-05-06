// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      screens: {
        xs: '320px',
        sm: '640px',   // Small devices
        md: '768px',   // Medium devices
        lg: '1024px',  // Large devices
        xl: '1280px',  // Extra large
        '2xl': '1536px',
      },
      extend: {},
    },
    plugins: [],
  }