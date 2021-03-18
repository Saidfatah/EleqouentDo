import React from 'react'

const Icon = ({name,color,hoverColor}) => {

    if(name === null || name ==="") return null

    let IconSvg=null
    let COLOR=color || "text-gray-300"
    let COLOR_HOVER=hoverColor || "text-gray-400"
    
    const svgProps ={ 
        className: "h-5 w-5  "+COLOR+" hover:"+COLOR_HOVER ,
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
      
        IconSvg=<svg className={"h-5 w-5 "+COLOR+" hover:"+COLOR_HOVER}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
    if(name === "arrow_right-double"){
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

    if(IconSvg === null) return null
    return (
        <div >
            {IconSvg}
        </div>
    )
}

export default Icon
