module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
       },

      animation: {
        slide_down : 'slide_down .3s ease-out forwards',
        slide_up : 'slide_up .5s ease-in forwards',
        fade_in : 'fade_in .3s ease-in forwards',
        fade_in_fast : 'fade_in_fast .1s ease-in forwards',
      },
      keyframes: {
        fade_in_fast: {
           '0%': { opacity: '0' },
           '100%': { opacity: '.3' }
        },
        fade_in: {
           '0%': { opacity: '0' },
           '100%': { opacity: '1' }
        },
        slide_up: {
           '0%': { height: '150px' },
           '100%': { height: '0px' }
        },
        slide_down: {
           '0%': { 
             transform: 'translateY(-2%)',
             animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
           },
           '100%': {
              transform: 'translateY(0%)' ,
              animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"

            }
        }
      }, 
  
    },
  
  },
  variants: {
     extend:{
      height: ['responsive', 'hover', 'focus'],
    },
    scrollbar: ["dark","rounded"],
  
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("tailwind-heropatterns")({
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],
    
      colors: {
        default: "#9C92AC",
      },
    
      opacity: {
        default: "0.2",
        "100": "1.0"
      }
    })
  ],
  corePlugins:{
    // outline: false, 
  }
}
