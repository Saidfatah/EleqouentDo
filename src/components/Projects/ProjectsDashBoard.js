import React from 'react'
import Icon from '../common/Icon'
import { eventsService} from '../../rxjs/SubjectService'
import ProjectLink from './ProjectLink'
import useFecthProjects from '../../hooks/projects/useFecthProjects'




const ProjectsDashBoard = () => {
    const {data : projects}= useFecthProjects()
 

    const revealCreateProjectModal=e=>{
        eventsService.sendEvent('REVEAL_CREATE_PROJECT_MODAL',"project id");
    }


    const blockStyle=`
      w-48 
      h-48 
      border
      border-gray-200
      rounded-md
      m-1
      ml-0
      bg-white
      shadow-lg
      flex
      justify-center
      items-center
      hover:bg-gray-100
      relative
      animate-slide_in
     `
    return (
        <div className="relative h-full overflow-y-auto flex-1" >
             
            <div className="absolute top-0 left-0 w-full h-2/4 bg-blue-600 z-0 animate-fade_in " />
            <div className=" p-28   z-9 " >
            <h1 className={"relative  text-white z-9  font-bold "} >Your Projects</h1>
                <div   className={"relative h-full w-full flex flex-wrap"} >
                 
                    <button onClick={revealCreateProjectModal} className={blockStyle} >
                            <Icon name="plus"  color="text-blue-600" gorupHover={true} hoverColor="text-blue-700" />
                           <p className="text-blue-600  font-bold group-hover:text-blue-300 " >Create new project</p>
                    </button>
                    {projects && projects.map((p,index)=> <ProjectLink key={p.id} project={p}  index={index}  />)  }
                </div>
            </div>
        </div>
    )
}

export default ProjectsDashBoard
