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
       screens: {
        'sm': '640px',
        'xsm': '500px',
        'maxsm': {'max': '640px'},
        'maxmd': {'max': '768px'},
        'maxxl': {'max': '1280px'},
        'max2xl': {'max': '1536px'},
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
       },
       animation: {
        slide_down : 'slide_down .3s  cubic-bezier(0.4, 0, 0.2, 1) forwards',
        slide_up : 'slide_up .5s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
        fade_in : 'fade_in .3s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
        fade_in_slide_in : 'fade_in_slide_in .3s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
        slide_in : 'slide_in .2s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
        fade_out : 'fade_out 1s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
        fade_in_fast : 'fade_in_fast .1s  cubic-bezier(0.4, 0, 0.2, 1)  forwards',
       },
       keyframes: {
        fade_in_fast: {
           '0%': { opacity: '0' },
           '100%': { opacity: '.3' }
        },
        fade_out: {
           '0%': { opacity: '1' },
           '100%': { opacity: '0' }
        },
        fade_in_slide_in: {
           '0%': { 
             opacity: '0',
             left:-8 
          },
           '100%': { 
             opacity: '1',
             left:0  
          }
        },
        slide_in: {
           '0%': { 
             left:-10 
          },
           '100%': { 
             left:0  
          }
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
       inset:{
        '-10': '-.5rem',
       },
       padding:{
        'half': '.25rem',
        '3quarders': '.25rem',
       },
       width:{
        'fit-content': 'fit-content'
       }
  
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
