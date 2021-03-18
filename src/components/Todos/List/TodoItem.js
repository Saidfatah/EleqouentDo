import React,{useState} from 'react'
import Icon from '../../common/Icon'

const TodoItem = ({todo}) => {
    const [done, setdone] = useState(todo.done)
    const {title}=todo
    
    const iconName = done?"check_circle_full" : "check_circle_empty"

    return (
        <button 
         onClick={e=>setdone(true)}
        className="flex flex-row items-center w-full  justify-between" >
            <p  className="text-gray-600" style={{textDecoration:done?"line-through":"none"}} >{title}</p>
            <Icon name={iconName} color="text-gray-400" hoverColor="text-gray-500" />
        </button>
    )
}

export default TodoItem
