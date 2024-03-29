const { transform } = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: 'max(5%, 16px)',
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1000px',
      xl: '1300px',
      '2xl': '1460px',
      450: '450px',
    },

    fontFamily: {
      primary: 'Jost, sans-serif',
      secondary: 'Poppins, sans-serif',
    },

    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      74: '74px',
    },

    lineHeight: {
      100: '100%',
      110: '110%',
      120: '120%',
      127: '127%',
      140: '140%',
      143: '143%',
      145: '145%',
      150: '150%',
      160: '160%',
    },

    letterSpacing: {
      tightest: '0.05em',
      tight: '-0.02em',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#3b82f6',
        dark: '#1e40af',
      },
      secondary: {
        light: '#DB79B7',
        dark: '#DEDDDF',
      },
      third: {
        light: '#15131A',
        dark: 'rgba(11, 10, 12, 0.87)',
      },
      system: {
        error: '#FF4D35',
        success: '#00B67A',
        link: '#3076FF',
      },
      gray: {
        100: '#F9F9F9',
        200: 'rgba(255, 255, 255, 0.6)',
        300: 'rgba(255, 255, 255, 0.85)',
        400: 'rgba(255, 255, 255, 0.7)',
        500: 'rgba(255, 255, 255, 0.2 )',
        600: '#8F8F8F',
        700: 'rgba(0, 0, 0, 0.64)',
        800: '#525252',
        900: '#3D3D3D',
      },
      maingray: '#F7F4F1',
      black: '#000000',
      white: '#ffffff',
    },

    borderRadius: {
      DEFAULT: '8px',
      none: '0',
      43: '43px',
      full: '50%',
    },

    extend: {
      keyframes: {
        preloader: {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        preloader: 'preloader 1s ease-in-out infinite',
      },
      flex: {
        27: '1 1 27%',
        30: '0 1 30%',
        36: '1 1 36%',
        45: '0 1 45%',
        50: '0 1 50%',
        60: '0 1 60%',
        65: '0 1 65%',
        100: '0 1 100%',
      },

      transitionTimingFunction: {
        DEFAULT: 'ease',
        'fade-in': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },

      zIndex: {
        1: '1',
        2: '2',
        100: '100',
        110: '110',
        120: '120',
      },

      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        '2xl': '48px',

        60: '60px',
        80: '80px',
        96: '96px',
        160: '160px',
      },
    },
    animationDelay: {
      16: '0.16s',
      32: '0.32s',
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({}),
        addUtilities({
          '.card-shadow-s': {
            boxShadow: '0px 16px 28px rgba(0, 0, 0, 0.03)',
          },
          '.card-shadow-m': {
            boxShadow: '0px 23px 80px rgba(0, 0, 0, 0.03)',
          },
          '.card-shadow-l': {
            boxShadow: '0px 31px 80px rgba(0, 0, 0, 0.12)',
          },
          '.dropdown-shadow': {
            boxShadow: '0px 25px 60px rgba(0, 0, 0, 0.08)',
          },
          '.overlay': {
            backgroundColor: 'rgba(25, 25, 25, 0.9)',
          },
        });
    }),
  ],
};
