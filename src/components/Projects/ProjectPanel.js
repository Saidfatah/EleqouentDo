import React from 'react'
import TodosListScroolPanel from '../Todos/TodosListScroolPanel'
import ProjectProgress from './ProjectProgress'
import CardFrame from '../common/CardFrame'
import Icon from '../common/Icon'

export const ProjectPanel = () => {

    const scrollBarStye=`
    scrollbar
    scrollbar-thin
    hover:scrollbar-thumb-gray-500
    scrollbar-thumb-gray-0
    scrollbar-track-gray-0
    `
   
    
    return  <div className=" w-full h-screen flex flex-col ">
            <CardFrame ovrride=" shadow-xl1 flex flex-row pl-4 py-2 " border_bottom={true} >
                <div >
                    <div className="flex flex-row justify-between items-end " >
                        <h1 className="mr-1 text-3xl text-gray-700 " >PROJECT TITLE</h1>

                        <div className="flex flex-row items-center  " >
                            <button onClick={e=>console.log('click')} > 
                                <Icon name="trash" color="text-gray-300 "  hoverColor="text-red-300 " />
                            </button>
                             <button onClick={e=>console.log('click')} > 
                                <Icon name="setting"  color="text-gray-300 " hoverColor="text-gray-400 " />
                            </button>
                             <button onClick={e=>console.log('click')} > 
                             <Icon name="check"  color="text-green-300 " hoverColor="text-green-400 " />
                            </button>
                       </div>
                    </div>
                   <ProjectProgress progress={.4} />
                </div>
                
            </CardFrame>
            <div className={"p-3 overflow-x-scroll h-screen   "} >
                 <TodosListScroolPanel /> 
                 <TodosListScroolPanel /> 
            </div>
    </div>  
 
}

export default ProjectPanel
