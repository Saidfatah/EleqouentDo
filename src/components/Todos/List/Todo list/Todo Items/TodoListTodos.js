import React from 'react'
import TodoItem from './TodoItem'

const LIST_HEIGHT=200


const TodoListTodos = ({todos,todoListId,projectId}) => {
    
    let arrDone=[]
    let arrNotDone=[]
    todos.forEach(element => {
        if(element.done ==true){
            arrDone.push(element)
        }else{
            arrNotDone.push(element)
        }
    });
    const sorted=[...arrDone,...arrNotDone]

    return (
        <div 
         className="pl-2  flex flex-col "
         style={{ height:LIST_HEIGHT }} 
          >
             <div className={"flex-1 w-full  overflow-y-auto scrollbar scrollbar-thin hover:scrollbar-thumb-gray-400 scrollbar-thumb-gray-200  scrollbar-track-gray-0 pr-2 "} >
                  { sorted.map((todo,index)=><TodoItem 
                  key={todo.id+index} 
                  todo={todo} 
                  projectId={projectId} 
                  todoListId={todoListId} 
                  />)}
             </div>
      </div>
    )
}

export default   TodoListTodos 
