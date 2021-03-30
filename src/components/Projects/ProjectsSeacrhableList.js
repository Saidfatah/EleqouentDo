import React,{useState} from 'react'
import Input from '../common/Input'
import Icon from '../common/Icon'
import ProjectLink from './ProjectLink'
import { eventsService} from '../../rxjs/ModalService';

const project=(title)=>({
    title
})
const projects=[
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
 
 
]

const SIDE_BAR_WIDTH=250
const ProjectsSeacrhableList = ({expanded,expandSideBar,sidebarWidth}) => {
     const [searchText, setsearchText] = useState("")
     const [finished, setfinished] = useState(false)
     const [selectedIndex, setselectedIndex] = useState(0)


     const setFinishedFilter=e=>{
         setfinished(!finished)
     }
     const revealCreateProjectModal =e=>{
        eventsService.sendEvent('REVEAL_CREATE_PROJECT_MODAL',true);
     }
     

     const scrollBarStye=`
     scrollbar
     scrollbar-thin
     hover:scrollbar-thumb-gray-300
     scrollbar-thumb-gray-200
     scrollbar-track-gray-0
     `
     const iconName = finished?"check_circle_full" : "check_circle_empty"
     const checkIconColor= !finished?"text-gray-500":"text-green-300"
     const checkIconHoverColor= !finished?"text-gray-600":"text-green-400"

 
     return (
             <div   className=" w-58 h-full  flex flex-col  justify-between flex-grow: 1 " > 
                 {
                     sidebarWidth>=SIDE_BAR_WIDTH-10
                     ?<div style={{maxHeight:"90%"}} className="p-2 " >
                         <div className={`bg-white
                                         rounded-lg
                                         text-left
                                         shadow-st
                                         w-full h-full
                                `}  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}} >
                            <div  className="w-full h-full  flex flex-col     " >
                            <div className="border-b-2 border-gray-200 pb-2 p-2 "  >
                                   <Input {...{value:searchText,setValue:setsearchText,override:"mb-2",placeholder:"Search projects"}}  />
                                      
                                 <button className="flex flex-row items-center" onClick={setFinishedFilter} > 
                                        <Icon name={iconName} size="h-4 w-4" color={checkIconColor} hoverColor={checkIconHoverColor} />
                                        <p className={"text-gray-500 text-xs ml-1 "+checkIconColor} >finished projects</p>
                                 </button>
                            </div>
                           
                            <div   className={" w-full  overflow-y-auto  p-2    "+scrollBarStye} >
                                    { projects.map((p,index)=> <ProjectLink key={index} project={p} setselectedIndex={setselectedIndex} index={index} selected={selectedIndex===index} />)  }
                           </div>
                       </div>
                      </div>
                     </div>
                     :<div  style={{height:"90%",width:"100%"}}  ></div>
                 }
                 
            
                 
                 <div className="flex-auto flex flex-row   p-2 " >
                     {
                          sidebarWidth>=SIDE_BAR_WIDTH-10
                          ?<button onClick={revealCreateProjectModal} className="w-full  group " > 
                           <div className={`bg-white
                                         rounded-lg
                                         text-left
                                         shadow-st
                                         p-2
                                         flex flex-row justify-between items-center  group-hover:shadow-lg 
                                `}  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}} >

                             <p className="text-green-400   group-hover:text-green-600 " >Create new project</p>
                             <Icon name={"plus"} gorupHover={true}  color={"text-green-400"} hoverColor={"text-green-500"} />
                           </div>
 
                          </button>
                          :null
                     }
                
                     <button onClick={expandSideBar} className="group p-2   hover:transform scale-150 " > 
                           <Icon name={expanded?"arrow_left_single":"arrow_right_single"} gorupHover={true}  color={"text-white"} hoverColor={"text-white"} />
                     </button>
                 </div>
                 
             </div>
     )
}

export default ProjectsSeacrhableList
