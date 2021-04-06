import React,{useState,useRef,memo} from 'react'
import Icon from '../../common/Icon'

const TodoItem = ({todo}) => {
    const [done, setdone] = useState(todo.done)
    const ref = useRef(0)
    const {title}=todo
    
    const iconName = done?"check_circle_full" : "check_circle_empty"


    return (
        <button 
         onClick={e=>setdone(true)}
        className="flex flex-row items-center w-full  justify-between" >
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
