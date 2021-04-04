import React,{useState} from 'react'
import { eventsService} from '../../rxjs/ModalService'
import ProjectProgress from './ProjectProgress'
import Icon from '../common/Icon'


const SIDE_BAR_WIDTH=250
const ProjectPanelHeader = ({progress}) => {
    const [expanded, setexpanded] = useState(true)
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)


    const revealRemoveProjectModal =e=>{
        eventsService.sendEvent('REVEAL_REMOVE_PROJECT_MODAL',"project id");
     }
    const revealFinishProjectModal =e=>{
        eventsService.sendEvent('REVEAL_FINISH_PROJECT_MODAL',"project id");
     }

     
    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
    }

    return <div 
     style={{
         width:sidebarWidth,
         transition:"width .3s cubic-bezier(0.4, 0, 0.2, 1)"
     }}
    className={`bg-white border-b border-r h-screen flex  justify-between border-gray-300  ${!expanded?"flex-end":"flex-col"} `}  >
   <div className={`pl-1  py-2 text-left   ${expanded?" animate-fade_in ":" animate-fade_out "} `}>
        <div className="flex  justify-between items-end maxsm:flex-col maxsm:justify-start maxsm:items-start md:flex-row "  >
           <h1 className="mr-1 text-3xl text-gray-500 maxsm:text-xl  " >PROJECT TITLE</h1>

           <div className="flex flex-row items-center maxsm:mb-4" >
           <button onClick={revealRemoveProjectModal} > 
               <Icon name="trash" color="text-gray-300 "  hoverColor="text-red-300 " />
           </button>
            <button onClick={e=>console.log('click')} > 
               <Icon name="setting"  color="text-gray-300 " hoverColor="text-gray-400 " />
           </button>
            <button onClick={revealFinishProjectModal} > 
            <Icon name="check"  color="text-green-300 " hoverColor="text-green-400 " />
           </button>
      </div>
       </div>
       <ProjectProgress progress={progress} />
   </div>
 
    <button onClick={expandSideBar} className="group w-full p-2 flex flex-row justify-end items-end " > 
            <Icon 
            name={expanded?"arrow_left_single":"arrow_right_single"} 
            gorupHover={true}  
            color={"text-blue"} 
            hoverColor={"text-blue"} 
         />
    </button>
   </div>
}

export default ProjectPanelHeader
