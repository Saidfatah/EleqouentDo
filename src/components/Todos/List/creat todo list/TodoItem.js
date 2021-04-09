import React from 'react'
import Icon from '../../../common/Icon'

const TodoItem = ({index,title,removeTodo}) => {
    return <div className="flex flex-row w-full justify-between items-center" >
    <span className="textga" >{title}</span>
    <button onClick={removeTodo(index)} >
         <Icon name={"trash"} color={"text-red-300"}  hoverColor={"text-red-400"}/>
    </button>
</div>
}

export default TodoItem
