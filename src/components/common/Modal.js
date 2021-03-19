import React from 'react'
import Icon from './Icon'
import CardFrame from './CardFrame'

const Modal = ({children,isModalVisible,setisModalVisible,overlay,centered}) => {

    
    if(!isModalVisible) return null
  
    const Overlay=()=>{
        const closeOnOverlayClick=e=>{
            setisModalVisible(false)
        }
         
       if(!overlay || overlay === undefined) return null

      return <div 
      className={"absolute  inset-0 bg-gray-700 opacity-30  animate-fade_in_fast "}  
      onClick={closeOnOverlayClick} aria-hidden="true" >

      </div>
        
    }
    
   const modalBodyClick=e=>{
         const target = e.target
         if(target.id ==="body_wrapper")
           setisModalVisible(false)
   }
   const XClick=e=>{
           setisModalVisible(false)
   }

    return (
    <div className="absolute z-50 w-full h-scree animate-fade_in "  >
      <div  className={"h-screen w-full flex items-center justify-center min-h-screen  "}>
          <div 
          id="body_wrapper" 
          onClick={modalBodyClick} 
          className={"z-40 h-screen w-full flex items-center justify-center min-h-screen  animate-slide_down"} 
          >
             <CardFrame ovrride="w-1/2 h-50 p-4 ">
               <div  className="flex flex-col " >
                  <div className="self-end" >
                      <button onClick={XClick} >
                         <Icon   name={"x"} />
                      </button>
                  </div>
                  {children}
               </div>
             </CardFrame>
           </div>
           <Overlay />
      </div>
    </div>
    )

}

export default Modal
