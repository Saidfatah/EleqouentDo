import React  from 'react'
import TodosListScroolPanel from '../Todos/TodosListScroolPanel'
import ProjectPanelHeader from './ProjectPanelHeader'
import {useParams} from 'react-router-dom'
import useFecthProjectById from '../../hooks/projects/useFecthProjectById'


export const ProjectPanel = () => {
    const{id}= useParams()
    const {data:project,status:projectFetchStatus}=useFecthProjectById(id)


    const IS_LOADING =projectFetchStatus !== "success" && project === undefined

    if(IS_LOADING) return <div>loading</div> 
    if(!IS_LOADING && !project) return <div>loading</div> 

    if(!IS_LOADING && project){
        const {title,progress}=project
        return  <div className="flex-1 h-screen w-auto bg-black  flex flex-col flex-grow sm:flex-row ">
                <ProjectPanelHeader progress={progress} title={title} />

                <div className={"w-full bg-white overflow-auto h-screen w-full p-3   flex flex-row sm:flex-col "} >
                          <TodosListScroolPanel title="Active lists" projectId={id} /> 
                          {/* <TodosListScroolPanel title="Done lists"/>  */}
                </div>
               
        </div>  
    }
 
}

export default ProjectPanel
