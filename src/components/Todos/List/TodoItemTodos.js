import React,{memo,useRef} from 'react'
import TodoItem from './TodoItem'

const LIST_WIDTH=200
const LIST_HEIGHT=200
const TodoItemTodos = ({todos}) => {
    const ref = useRef(0)

    return (
        <div 
         className="pl-2  flex flex-col "
         style={{ height:LIST_HEIGHT }} 
          >
             <div className={"flex-1 w-full  overflow-y-auto scrollbar scrollbar-thin hover:scrollbar-thumb-gray-400 scrollbar-thumb-gray-200  scrollbar-track-gray-0 pr-2 "} >
                  { todos.map((p,index)=><TodoItem key={index} todo={p} />)  }
             </div>
      </div>
    )
}

const compare=(prev,next)=>{
   const prevTodos=[...prev.todos]
   const nextTodos=[...next.todos]
   if(prevTodos.length !== nextTodos.length) return false
   return true
}


export default memo(TodoItemTodos,compare)
