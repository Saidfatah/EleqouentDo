import React,{useState} from 'react'
import Icon from '../common/Icon'



const Menu = () => {
    const [height, setheight] = useState(0)

  
    const toggle = e => {
        setheight( height === 0 ? "auto" : 0);
     };

    return (
        <div className="flex-1 flex justify-end items-end flex-col ml-2 maxsm:hidden  ">
              <div className=" flex justify-start items-center flex-row ">
                     <button   className="mb-1 flex justify-start group items-center flex-row mr-2 "  onClick={e=>console.log('click')} > 
                        <Icon name="account" color="text-gray-500" hoverColor="text-gray-700"  size={"w-4 h-4"} />
                        <p className="text-gray-500 text-sm"  >Account</p>
                    </button>
                     <button className="mb-1 flex justify-start group items-center flex-row  mr-2" onClick={e=>console.log('click')} > 
                           <Icon name="logout" color="text-gray-500" hoverColor="text-gray-700"  size={"w-4 h-4"} />
                           <p className="text-gray-500 text-sm" >Logout</p>
                    </button>
             </div>
      
        </div>
    )
   
}
export default Menu