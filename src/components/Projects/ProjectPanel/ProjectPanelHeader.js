import React,{useState,useEffect,useLayoutEffect,memo} from 'react'
import ProjectProgress from './ProjectProgress'
import Icon from '../../common/Icon'
import PanelHeaderButtons from './PanelHeaderButtons'
import useWindowSize  from '../../../hooks/util hooks/useWindowSize'


const SIDE_BAR_WIDTH=250
const SM_BREAK_POINT = 640


const ProjectPanelHeader = ({progress,title,projectId}) => {
    const [expanded, setexpanded] = useState(true)
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [width] = useWindowSize();

    const BREAK_POINT_COND=width <= SM_BREAK_POINT
    useEffect(() => {
         if( BREAK_POINT_COND)setexpanded(true)
    }, [width])
 
 
   
    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
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
         <ProjectProgress expanded={expanded} progress={progress} />
        <PanelHeaderButtons expanded={expanded} projectId={projectId} />
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

// const compare=(prev,next)=>{
//   const {progress:progressPrev,title:titlePrev,projectId:projectIdPrev}=prev
//   const {progress:progressNext,title:titleNext,projectId:projectIdNext}=next
  
//   if(progressPrev !== progressNext ) return false
//   if(titlePrev !== titleNext ) return false
//   if(projectIdPrev !== projectIdNext ) return false
  
//   return true
// }
export default ProjectPanelHeader
