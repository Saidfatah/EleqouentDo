import React,{useState,useEffect,useLayoutEffect} from 'react'
import { eventsService} from '../../rxjs/ModalService'
import ProjectProgress from './ProjectProgress'
import Icon from '../common/Icon'


const SIDE_BAR_WIDTH=250
const SM_BREAK_POINT = 640

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const ProjectPanelHeader = ({progress,title}) => {
    const [expanded, setexpanded] = useState(true)
    // const [width_is_under_sm_break_point, setwidth_is_under_sm_break_point] = useState(false)
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [width] = useWindowSize();

    const BREAK_POINT_COND=width <= SM_BREAK_POINT
    useEffect(() => {
         if( BREAK_POINT_COND)setexpanded(true)
    }, [width])

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

    const projectTitleStyle="mr-1 text-3xl text-gray-500 maxsm:text-xl text relative left--10 opacity-0  animate-fade_in "
    const projectHeaderStyle="bg-white border-b  border-r pt-4 sm:pt-0 sm:h-screen flex  justify-between border-gray-300 flex-col"
    return <div 
     style={{
         width:!(BREAK_POINT_COND)?sidebarWidth:"100%",
         transition:"width .2s cubic-bezier(0.4, 0, 0.2, 1)"
     }}
     className={projectHeaderStyle}  
     >
   <div className={`pl-1  py-2 text-left  `}>
        <div className="flex  justify-between items-end maxsm:flex-col maxsm:justify-start maxsm:items-start md:flex-row "  >
           <h1 
           style={{ writingMode:!expanded &&!(BREAK_POINT_COND)?"vertical-lr":"initial",}}
           className={projectTitleStyle} > {title} </h1>
           {
               expanded
               ?<div className={`flex flex-row items-center maxsm:mb-4  animate-fade_in `} >
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
               :null
           }
           
       </div>
           {
               expanded
               ?<ProjectProgress progress={progress} />
               :null
           }
       
   </div>
 
    <button onClick={expandSideBar} className="group w-full p-2 hidden sm:flex flex-row justify-end items-end  " > 
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
