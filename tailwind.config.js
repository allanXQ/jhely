const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm:'300px',
      gsm:"315px",
      xsm:'440px',
      ssm:'460px',
      sm: '480px',
      xmd:'590px',
      md: '768px',
      lg: '976px',
      xlg:'1150px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        manrope: ['Source Sans Pro', 'sans'],
      },
      colors:{
        searchgrey:'#a2a2a2',
        inputblack:'#1F1F1F',
        white:'#ffffff',
        lineblue:"#665AEF",
        linered:"#FC364C",
        mainstart:'rgba(46, 45, 102, 0.6)',
        mainend:'rgba(58, 39, 63, 0.6)',
        pill:"rgba(13, 13, 13, 0.5)",
        pillblack:"rgba(13, 13, 13, 1)",
        accblack: "#0D0D0D80",
        achead:'#8E8B8F',
        thumb:'#56565680',
        track:'#565656'
      }
      
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              // overflowY: 'auto',
              // scrollbarColor: `${theme('colors.scroll')}  ${theme('colors.white')}`,
              // scrollbarWidth: '900px',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '2px',
              width: '2px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: ('colors.black'),
              width:'20px',
              outline: `2px solid ${theme('colors.neutral.600')}`,
              border: `2px solid ${theme('colors.track')}`
          },
          '.scrollbar::-webkit-scrollbar-track': {
            border:`0.1px solid ${theme('colors.track')}`,
              // backgroundColor: theme('colors.track'),
          },
      });
  }),
  //       require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  // variants: {
  //     scrollbar: ['rounded']
  // }
}