module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      brand: {
        1: '#00559A',
        2: '#00447B',
      },
      dark: {
        1: '#A0A0A0',
        2: '#383838',
        3: '#252525',
        4: '#1E1E1E',
        5: '#121212',
      },
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        100: '#E1F0FF',
        200: '#93C8FD',
        300: '#5AABFC',
        400: '#057DF4',
        500: '#0468CB',
        600: '#0356A8',
        700: '#023B73',
      },
      grey: {
        100: '#FFFFFF',
        200: '#EEEEEE',
        300: '#DDDDDD',
        400: '#999999',
        500: '#666666',
        600: '#333333',
        700: '#000000',
      },
      green: {
        100: '#EEFCD2',
        200: '#D9F9A6',
        300: '#97DB53',
        400: '#6AC322',
        500: '#50A718',
        600: '#3A8C11',
        700: '#1A5D06',
      },
      orange: {
        100: '#FFEECC',
        200: '#FFD999',
        300: '#FFA53F',
        400: '#FF7A00',
        500: '#DB5D00',
        600: '#B74400',
        700: '#7A2100',
      },
      red: {
        100: '#FEE1CF',
        200: '#FDBDA0',
        300: '#F7644C',
        400: '#F32013',
        500: '#D00D12',
        600: '#AE091B',
        700: '#740322',
      },
      yellow: {
        100: '#FFF9CC',
        200: '#FFF099',
        300: '#FFDC3F',
        400: '#FFCC00',
        500: '#DBAA00',
        600: '#B78B00',
        700: '#7A5700',
      },
    },
    extend: {
      spacing: {
        76: '19rem',
      },
      rotate: {
        55: '55deg',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      // Add custom font famliy
      fontFamily: {
        'pt-sans': ['"PT Sans"', 'Arial', 'Verdana', 'Helvetica', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      width: {
        106: '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
