import React,{useState} from 'react'
import Input from '../common/Input'
import Icon from '../common/Icon'
import CardFrame from '../common/CardFrame'
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

const ProjectsSeacrhableList = () => {
     const [searchText, setsearchText] = useState("")
     const [finished, setfinished] = useState(false)
     const [selectedIndex, setselectedIndex] = useState(0)

     const setFinishedFilter=e=>{
         setfinished(!finished)
     }
     const revealCreateProjectModal =e=>{
        eventsService.sendEvent('REVEAL_MODAL',true);
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
        <div   className="w-full h-full  flex flex-col  justify-between flex-grow: 1 " > 
        
            <div style={{maxHeight:"90%"}} className="p-2 " >
               <CardFrame   ovrride='w-full h-full    '    >
                    <div  className="w-full h-full  flex flex-col     " >
                         <div className="border-b-2 border-gray-200 pb-2 p-2 "  >
                              <div className="flex flex-row justify-between items-center mb-2 " >
                                     <Input {...{value:searchText,setValue:setsearchText,placeholder:"Search projects"}}  />
                                     <button>
                                        <Icon name="search" color="text-green-300" hoverColor="text-green-500" />
                                     </button>
                              </div>
                              <button className="flex flex-row items-center" onClick={setFinishedFilter} > 
                                    <Icon name={iconName} size="h-4 w-4" color={checkIconColor} hoverColor={checkIconHoverColor} />
                                    <p className={"text-gray-500 text-xs ml-1 "+checkIconColor} >finished projects</p>
                              </button>
                         </div>
                        
                         <div   className={" w-full  overflow-y-auto  p-2    "+scrollBarStye} >
                                 { projects.map((p,index)=> <ProjectLink key={index} project={p} setselectedIndex={setselectedIndex} index={index} selected={selectedIndex===index} />)  }
                        </div>
                    </div>
              </CardFrame>
            </div>
      
            
            

            
             <div className="flex-auto   p-2 " >
                <button onClick={revealCreateProjectModal} className="w-full  group " > 
                    <CardFrame padding={true} ovrride="flex flex-row justify-between items-center  group-hover:shadow-lg  " >
                                <p className="text-green-400   group-hover:text-green-600 " >Create new project</p>
                                <Icon name={"plus"} gorupHover={true}  color={"text-green-400"} hoverColor={"text-green-500"} />
                    </CardFrame>
                </button>
            </div>
         
            
        </div>
     )
}

export default ProjectsSeacrhableList
