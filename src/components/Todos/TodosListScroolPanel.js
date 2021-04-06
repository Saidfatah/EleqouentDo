import React,{useState,useCallback} from 'react'
import TodosList from './List/TodosList'
import TodoListModalLink from './List/TodoListModalLink'
import update from 'immutability-helper'
import useFetchTodosListsByProjectId from '../../hooks/todos/useFetchTodosListsByProjectId'



export const TodosListScroolPanel =({title,projectId})=>{
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

   if(status === "loading") return <div>Loading</div>
   if(!todoLists) return <div>Loading</div>
   if(!todoLists.length) return <div>Loading</div>
  
   console.log(todoLists)
   const wrraperStyle="flex-1  h-screen sm:h-screen w-auto whitespace-nowrap p-2 flex flex-col items-start relative"
    return <div className={wrraperStyle} >
          <h1 className=" text-gray-500 text-xl mb-2 " >{title}</h1>
          <div className="hidden  sm:flex sm:flex-row " >
              {
                todoLists.map((tl,index)=><TodosList 
                moveCardList={moveCardList}
                key={tl.id} 
                todoList={tl} 
                index={index} 
                />)
                }
          </div>
          <div className="flex flex-col   sm:hidden  " >
              {
                todoLists.map((tl,index)=><TodoListModalLink 
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
