import React,{useState,useCallback} from 'react'
import TodosList from './List/Todo list/TodosList'
import TodoListModalLink from './List/Todo list/TodoListModalLink'
import update from 'immutability-helper'
import useFetchTodosListsByProjectId from '../../hooks/todos/useFetchTodosListsByProjectId'
import {eventsService} from '../../rxjs/ModalService'
import Icon from '../common/Icon'



export const TodosListScroolPanel =({title,done,projectId})=>{
     const{data:todoLists,status,error}=  useFetchTodosListsByProjectId(projectId)

     //mutate the todolist's order in project here instead of updattign temp state variable 
     const moveCardList = useCallback((dragIndex, hoverIndex) => {
    // const dragCard = orderTodoLists[dragIndex];
    // setorderTodoLists(update(orderTodoLists, {
    //         $splice: [
    //             [dragIndex, 1],
    //             [hoverIndex, 0, dragCard],
    //         ],
    // }));
     }, [todoLists]);

     const revealCreateTodoListModal=(e)=>{
          eventsService.sendEvent("REVEAL_CREATE_TODOLIST_MODAL",projectId);
         
         }

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
   
    const filteredLists= (todoLists &&todoLists.filter(td=>td.done===done) )|| []
 

    const wrraperStyle="flex-1  h-screen sm:h-screen w-auto whitespace-nowrap p-2 flex flex-col items-start relative"
    return <div className={wrraperStyle} >
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
