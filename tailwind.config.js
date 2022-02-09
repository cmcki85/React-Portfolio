module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],
  theme: {
    extend: {
      colors: {
        'nav-main': '#5A798C',
        'nav-hover': '#A7CBD9',
        'body-emphasize': '#8C5007',
      },
      fontFamily: {
        'nav-title': ['Playfair Display'],
        'body': ['Lato'],
      },
      backgroundImage: {
        'beach-hero': "url('/splash-bg-image.jpg')"
      }
    },
    
    
  },
  variants: {},
  plugins: [],
}
