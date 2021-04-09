import React,{useState,useEffect,useLayoutEffect,memo} from 'react'
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

const ProjectPanelHeader = ({progress,title,projectId}) => {
    const [expanded, setexpanded] = useState(true)
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [width] = useWindowSize();

    const BREAK_POINT_COND=width <= SM_BREAK_POINT
    useEffect(() => {
         if( BREAK_POINT_COND)setexpanded(true)
    }, [width])
 
 
    const revelModal=(modal_Id,value)=>e=>{
        console.log(modal_Id)
        eventsService.sendEvent(modal_Id,value);
    }
    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
    }

   

    const Button=({title,onClick,icon,color,hover_color})=>{
      return  <button className="flex flex-row justify-start  mr-2 sm:mr-0  sm:w-full p-1 mb-1 shadow-md " onClick={onClick} > 
          <Icon name={icon} color={color}  hoverColor={hover_color} />
          {expanded && <span className='ml-1  text-gray-600 animate-fade_in ' >{title}</span>}
     </button>
    }

    return <div 
     style={{
         width:!(BREAK_POINT_COND)?sidebarWidth:"100%",
         transition:"width .2s cubic-bezier(0.4, 0, 0.2, 1)"
     }}
     className={"bg-white border-b  border-r pt-4 sm:pt-0 sm:h-screen flex  justify-between border-gray-300 flex-col"}  
     >
   <div className={`pl-1  py-2 text-left  `}>
        <div className="flex  justify-between items-end maxsm:flex-col maxsm:justify-start maxsm:items-start md:flex-row "  >
           <h1 
           style={{ writingMode:!expanded &&!(BREAK_POINT_COND)?"vertical-lr":"initial",}}
           className={"mr-1 text-3xl text-gray-500 maxsm:text-xl text relative left--10 opacity-0  animate-fade_in "} > {title} </h1>
        
           
       </div>
           {
               expanded
               ?<ProjectProgress progress={progress} />
               :null
           }

         <div className="p-2 flex flex-wrap flex-row sm:block " >
             <Button
                   title="Add todoList"   
                   onClick={revelModal("REVEAL_CREATE_TODOLIST_MODAL",projectId)} 
                   icon="plus" 
                   color="text-green-300" 
                   hover_color="text-green-400"/>
             <Button
                   title="Edit Project"   
                   onClick={revelModal("REVEAL_EDIT_PROJECT_MODAL",projectId)}  
                   icon="setting" 
                   color="text-gray-300" 
                   hover_color="text-green-400"/>
             <Button

                   title="Finish Project" 
                   onClick={revelModal("REVEAL_FINISH_PROJECT_MODAL",projectId)} 
                   icon="check" 
                   color="text-green-300" 
                   hover_color="text-green-400"/>
             <Button
                   title="Remove Project" 
                   onClick={revelModal("REVEAL_REMOVE_PROJECT_MODAL",projectId) } 
                   icon="trash"  
                   color="text-red-300" 
                   hover_color="text-green-400"/>
        </div>
       
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

const compare=(prev,next)=>{
  const {progress:progressPrev,title:titlePrev,projectId:projectIdPrev}=prev
  const {progress:progressNext,title:titleNext,projectId:projectIdNext}=next
  
  if(progressPrev !== progressNext ) return true
  if(titlePrev !== titleNext ) return true
  if(projectIdPrev !== projectIdNext ) return true
  
  return false
}
export default  memo(ProjectPanelHeader,compare)
