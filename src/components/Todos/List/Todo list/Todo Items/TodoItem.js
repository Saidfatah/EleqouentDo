import React,{memo} from 'react'
import Icon from '../../../../common/Icon'
import useToggleTodoItem from '../../../../../hooks/todos/useToggleTodoItem'

const TodoItem = ({todo,todoListId,projectId}) => {
    const {mutate:toggleTodo,isLoading}=useToggleTodoItem(todoListId,projectId)
    const {title,id,done}=todo

    const iconName = done?"check_circle_full" : "check_circle_empty"
    
    const toggleTodoDispatch=(e)=>{
         toggleTodo({todoId:id,todoListId})
    }

    return (
        <button 
         onClick={toggleTodoDispatch}
         className="flex flex-row items-center w-full  justify-between relative left-0.5 animate-slide_in " >
            <p  className="text-gray-600 " style={{textDecoration:done?"line-through":"none"}} >{title}</p>
            <Icon name={iconName} color="text-gray-400" hoverColor="text-gray-500" />
        </button>
    )
}

const compare=(prev,next)=>{
   const prevTodo= prev.todo
   const nextTodo= next.todo

   if(prevTodo.done !== nextTodo.done) return false
   return true
}
export default memo(TodoItem,compare)
