import React,{useState,useCallback} from 'react'
import TodosList from './List/Todo list/TodosList'
import TodoListModalLink from './List/Todo list/TodoListModalLink'
import {eventsService} from '../../rxjs/SubjectService'
import Icon from '../common/Icon'
import useFetchTodosListsByProjectId from '../../hooks/todos/useFetchTodosListsByProjectId'
import useReorderTodoLists from '../../hooks/todos/useReorderTodoLists'


export const TodosListScroolPanel =({title,done,projectId,projectIsDone})=>{
     const{mutate:reorderTodoLists,isLoading,isSuccess,isError}=  useReorderTodoLists(projectId)
     const{data:todoLists,status,error}=  useFetchTodosListsByProjectId(projectId)

     //mutate the todolist's order in project here instead of updattign temp state variable 
     const moveCardList = useCallback((dragedId,hoveredId) => {
           reorderTodoLists({dragedId,hoveredId})
     }, [todoLists]);

     const revealCreateTodoListModal=(e)=>{
          eventsService.sendEvent("REVEAL_CREATE_TODOLIST_MODAL",projectId);
     }

     if(done && projectIsDone=="done") return null
     if(status === "loading" && !done) return <div>Loading</div>
     if(status ==="success" && (!todoLists || !todoLists.length)  && !done ){
     return <div >
          <p className="text-gray-600 mr-2 " >there are no todo lists in ths project ! </p>
          <button className="flex flex-row justify-start      p-1   shadow-md " onClick={revealCreateTodoListModal} > 
               <Icon name={"plus"} color={"text-green-400"}  hoverColor={"text-green-500"} />
               <span className='ml-1  text-gray-600  ' >Add a todoList </span> 
          </button>
     </div>
     }
     if(status ==="idle" && (!todoLists || !todoLists.length)   && !done){
         return <div>Loading</div>
     }
 
     if(status ==="success" && (!todoLists || !todoLists.length)  && done ){
          return null
     }
     
 
     const filteredLists= (todoLists &&todoLists.filter(td=>td.done===done).sort((a,b)=>{
                            if (a.orderInProject < b.orderInProject) { return -1; }
                            if (a.orderInProject > b.orderInProject) { return 1; }
                            return 0;
     }) )|| []

     const revealFinishProjectModal=e=>{
          eventsService.sendEvent("REVEAL_FINISH_PROJECT_MODAL",projectId);
      }

     if(filteredLists.length==0   && !done){
          return <button className=" w-fit-content inline-flex flex-row justify-start   p-1 mb-1 shadow-md "  onClick={revealFinishProjectModal} > 
            <Icon name={"check"} color={"text-green-300"}  hoverColor={"text-green-400"} />
            <span className='ml-1  text-gray-600 animate-fade_in ' >Finish Project</span> 
     </button>
     }

    const wrraperStyle="flex-1  h-screen sm:h-screen w-auto  whitespace-nowrap p-2 flex flex-col items-start relative"
    return <div   className={wrraperStyle} >
          <h1 className=" text-gray-500 text-xl mb-2 " >{title}</h1>
          <div className="hidden  sm:flex sm:flex-row " >
              {
                filteredLists.map((tl,index)=><TodosList 
                moveCardList={moveCardList}
                key={tl.id} 
                todoList={tl} 
                index={index} 
                />)
                }
             <div style={{width:200,height:200}} className=" bg-white opacity-0 " ></div>

          </div>
          <div className="flex flex-col   sm:hidden  " >
              {
                filteredLists.map((tl,index)=><TodoListModalLink 
                moveCardList={moveCardList}
                key={tl.id+tl.projectId} 
                todoList={tl} 
                index={index} 
                />)
                }
          </div>
     </div>

}

export default TodosListScroolPanel
