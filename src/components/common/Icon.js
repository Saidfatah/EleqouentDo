import React from 'react'

const Icon = ({name,color,hoverColor,size,gorupHover}) => {

    if(name === null || name ==="") return null

    let IconSvg=null
    let COLOR=color || "text-gray-300"
    let COLOR_HOVER=hoverColor || "text-gray-400"
    let SIZE=size || "h-5 w-5"
    
    const svgProps ={ 
        className: SIZE+" "+COLOR+(gorupHover?" group-hover:"+COLOR_HOVER:" hover:"+COLOR_HOVER) ,
        xmlns    : "http://www.w3.org/2000/svg" ,
        fill     : "none" ,
        viewBox  : "0 0 24 24" ,
        stroke   : "currentColor"
    }
    
    if(name === "x"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M6 18L18 6M6 6l12 12",
        }

         
        IconSvg=<svg {...svgProps} >
              <path {...pathProps}  />
        </svg>
    }
    if(name === "trash"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
        }
         
        IconSvg=<svg {...svgProps}>
        <path  {...pathProps}   />
      </svg>
    }
    if(name === "plus"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M12 6v6m0 0v6m0-6h6m-6 0H6",
        }
         
        IconSvg=<svg {...svgProps}>
        <path  {...pathProps} />
      </svg>
    }
    if(name === "check"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M5 13l4 4L19 7",
        }
         
        IconSvg=<svg {...svgProps}>
        <path  {...pathProps} />
      </svg>
     
    }
    if(name === "check_circle_empty"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        }
   
         
        IconSvg=<svg {...svgProps}>
        <path  {...pathProps} />
      </svg>
     
    }
    if(name === "check_circle_full"){
      
        IconSvg=<svg className={SIZE+" "+COLOR+" hover:"+COLOR_HOVER}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
     
    }
    if(name === "setting"){
        const path1Props ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
        }
        const path2Props ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        }
        

        IconSvg=<svg {...svgProps}>
            <path {...path1Props} />
            <path  {...path2Props} />
      </svg>
     
    }
    if(name === "search"){
  
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        }


        IconSvg=<svg {...svgProps}>
            <path  {...pathProps} />
      </svg>
     
    }
    if(name === "account"){
  
        const path1Props ={ 
            fill:"#fff",
            d:"M12 14l9-5-9-5-9 5 9 5z",
        }
        const path2Props ={ 
            fill:"#fff",
            d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
        }
        const path3Props ={ 
            fill:"#fff",
            d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
        }

        IconSvg=<svg {...svgProps}>
        <path {...path1Props} />
        <path  {...path2Props} />
        <path  {...path3Props} />
  </svg>
     
    }
    if(name === "logout"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
        }
        IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "login"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
        }
 
        IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "arrow_right_double"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M13 5l7 7-7 7M5 5l7 7-7 7",
        }
        IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "arrow_right_single"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M9 5l7 7-7 7"
        }

        IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "arrow_left_single"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M15 19l-7-7 7-7"
        }
        IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "chart"){
        const path1Props ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        }
        const path2Props ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        }
 
     IconSvg=<svg {...svgProps}>
        <path {...path1Props} />
        <path {...path2Props} />
     </svg>
     
    }
    if(name === "collection"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        }
     
     IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }
    if(name === "account"){
        const pathProps ={ 
            strokeLinecap:"round",
            strokeLinejoin:"round",
            strokeWidth:"2",
            d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        }
     IconSvg=<svg {...svgProps}>
        <path {...pathProps} />
     </svg>
     
    }

    if(IconSvg === null) return null
    return IconSvg
}

export default Icon
