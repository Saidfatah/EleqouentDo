import React,{useState} from 'react'
import CardFrame from '../common/CardFrame'
import Icon from '../common/Icon'
import AnimateHeight from 'react-animate-height';


const Menu = () => {
    const [height, setheight] = useState(0)

  
    const toggle = e => {
        setheight( height === 0 ? "auto" : 0);
     };

    return (
        <div className="absolute z-60 top-3 right-3    w-50 h-50 flex justify-start items-end flex-col ">
              <div className=" flex justify-start items-center flex-row ">
                     <button   className="mb-1 flex justify-start items-center flex-row mr-2 "  onClick={e=>console.log('click')} > 
                        <Icon name="account" color="text-gray-600" hoverColor="text-gray-700"  size={"text-xl"} />
                        <p className="text-gray-600" >Account</p>
                    </button>
                     <button className="mb-1 flex justify-start items-center flex-row  mr-2" onClick={e=>console.log('click')} > 
                           <Icon name="logout" color="text-gray-600" hoverColor="text-gray-700"  size={"text-xl"} />
                           <p className="text-gray-600" >Logout</p>
                    </button>
             </div>
      
        </div>
    )
    return (
        <div className="absolute z-60 top-2 right-2    w-50 h-50 flex justify-start items-end flex-col ">
              <button 
                aria-expanded={ height !== 0 }
                aria-controls='example-panel'
                onClick={toggle} > 
                   <Icon name="account" color="text-gray-600" hoverColor="text-gray-700"  size={"text-xl"} />
              </button>
          
               
                
             <AnimateHeight
               id='example-panel'
               duration={ 250 }
               height={height} // see props documentation below
               animateOpacity={true}
             >
                <CardFrame padding={true} border={true}  >
                       <div className=" flex justify-start items-center flex-col ">
                            <button   className="mb-1"  onClick={e=>console.log('click')} > 
                               <CardFrame padding={true}>
                                   Account
                               </CardFrame>
                           </button>
                            <button className="mb-1" onClick={e=>console.log('click')} > 
                               <CardFrame padding={true}>
                                   Logout
                               </CardFrame>
                           </button>
                       </div>
                 </CardFrame>
             </AnimateHeight>
        </div>
    )
}
export default Menu