import React from 'react'
import TodosListScroolPanel from '../Todos/TodosListScroolPanel'
import ProjectPanelHeader from './ProjectPanelHeader'




export const ProjectPanel = () => {

   
  
     
    return  <div className="flex-1 h-screen w-auto bg-black  flex flex-col flex-grow sm:flex-row ">
            <ProjectPanelHeader progress={.4} />


            <div className={"w-full bg-white overflow-auto h-screen w-full p-3   flex flex-row sm:flex-col "} >
                      <TodosListScroolPanel title="Active lists" /> 
                      <TodosListScroolPanel title="Done lists"/> 
            </div>
    </div>  
 
}

export default ProjectPanel
