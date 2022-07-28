module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      transparent: 'rgba(0, 0 , 0, 0)',
      primary: '#F7E626',
      neutral: {
        100: '#ffffff',
        900: '#171717'
      }
    },
    extend: {
      backgroundImage: {
        'full-image': "url('/1.jpg')",
      }
    },
  },
  plugins: [],
}