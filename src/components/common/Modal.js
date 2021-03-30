import React from 'react'
import Icon from './Icon'

const Modal = ({children,isModalVisible,setisModalVisible,overlay,title,titleColor}) => {

    
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
      <div  className={"h-screen w-full flex items-center justify-center min-h-screen"}>
          <div 
          id="body_wrapper" 
          onClick={modalBodyClick} 
          className={"z-40 h-screen w-full flex items-center justify-center min-h-screen group "} 
          >
            <div className={`bg-white rounded-lg text-left shadow-st w-1/2 h-50 p-4  `}  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}} > 
               <div  className="flex flex-col " >
                  <div className="flex flex-row justify-between items-center" >
                      <h1 className={"font-bold "+(titleColor ||"text-green-500")} >{title}</h1>
                      <button onClick={XClick} >
                         <Icon   name={"x"} />
                      </button>
                  </div>
                  {children}
               </div>
             </div>
           </div>
           <Overlay />
      </div>
    </div>
    )

}

export default Modal
