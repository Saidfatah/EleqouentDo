import React,{useState} from 'react'
import Icon from '../common/Icon'
import { eventsService} from '../../rxjs/ModalService';
import {
    Link
  } from "react-router-dom";


const SIDE_BAR_WIDTH=250
const SideBar = () => {
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [expanded, setexpanded] = useState(true)

    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
    }

    const revealCreateProjectModal =e=>{
        eventsService.sendEvent('REVEAL_CREATE_PROJECT_MODAL',true);
     }



    const _Link=({title,route,icon})=>{
 
        return  <li  >
        <Link className="w-full mb-1 group  flex flex-row justify-start items-center  group-hover:shadow-lg " to={route}>
                <Icon name={icon} gorupHover={true}  color={"text-white"} hoverColor={"text-grey-100"} />
                <p className="text-white  ml-1 " >{title}</p>
        </Link>
      </li>
    }


    return (
        <div style={{width:sidebarWidth}}  className=" transition duration-500 ease-in-out  w-64 h-full overflow-x-auto bg-green-300   border-r border-gray-200 shadow-lg" >
            {/* <ProjectsSeacrhableList expanded={expanded} expandSideBar={expandSideBar} sidebarWidth={sidebarWidth} /> */}


            <div className={"h-full flex-auto flex flex-col  bg-black  p-2 "+( sidebarWidth>=SIDE_BAR_WIDTH-10?"justify-between":"justify-end") }>
                     {
                          sidebarWidth>=SIDE_BAR_WIDTH-10
                          ? <nav>
                               <ul>
                                  <_Link  title="Projects" icon="plus" route="/projects"/>
                                  <_Link  title="Stats" icon="plus" route="/stats"/>
                               </ul>
                           </nav>
                          :null
                     }
                
                     <button onClick={expandSideBar} className="group w-full p-2 flex flex-row justify-end items-end" > 
                           <Icon 
                           name={expanded?"arrow_left_single":"arrow_right_single"} 
                           gorupHover={true}  
                           color={"text-white"} 
                           hoverColor={"text-white"} 
                           />
                     </button>
            </div>
        </div>

    )
}

export default SideBar
