import React from 'react'
import TodosListScroolPanel from '../Todos/TodosListScroolPanel'
import ProjectProgress from './ProjectProgress'
import Icon from '../common/Icon'
import Menu from '../layout/Menu'
import { eventsService} from '../../rxjs/ModalService'

export const ProjectPanel = () => {

    const revealRemoveProjectModal =e=>{
        eventsService.sendEvent('REVEAL_REMOVE_PROJECT_MODAL',"project id");
     }
    const revealFinishProjectModal =e=>{
        eventsService.sendEvent('REVEAL_FINISH_PROJECT_MODAL',"project id");
     }
  
     
    return  <div className=" w-full h-screen flex flex-col relative ">
            <div className={`bg-white
                              text-left
                              shadow-st
                             border-b border-gray-200 
                             shadow-xl1 flex    justify-between pl-4 py-2 md:flex-row sm:flex-col
                             `}  
            style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}} >
                <div className="flex-1" >
                    <div className="
                    flex  
                    justify-between
                    items-end
                    maxsm:flex-col 
                    maxsm:justify-start
                    maxsm:items-start
                    md:flex-row
                    sm:
                    "
                     >
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
                   <ProjectProgress progress={.4} />
                </div>
                <Menu />
            </div>
            <div className={"p-3 overflow-x-scroll h-screen  relative "} >
                 <TodosListScroolPanel title="Active lists" /> 
                 <TodosListScroolPanel title="Done lists"/> 
            </div>
    </div>  
 
}

export default ProjectPanel
