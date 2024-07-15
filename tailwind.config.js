module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-cream': {
          100: '#fbf9f6',
          200: '#f8f4f0',
          300: '#f5f0e9',
          400: '#d5d1cb',
        },
        'neutral-cream-bg': '#f5f0e9',
        'shadows': "#6C6C6C",
        'jacarta': {
          100: '#998cad',
          200: '#86779d',
          300: '#73618d',
          400: '#614d7d',
          500: '#50386e',
          600: '#3f245e',
        },
        'pia-blue': {
          100: '#c0c7d5',
          200: '#a2adc0',
          300: '#8592ac',
          400: '#697998',
          500: '#4e6084',
          600: '#354870',
          700: '#1c305c',
          800: '#061949',
          900: '#000035',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        deco: ['Allura', 'serif']
      }
    },
  },
  plugins: [],
}
