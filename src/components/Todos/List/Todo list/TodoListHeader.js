import React,{memo} from 'react'
import Icon from '../../../common/Icon'
import { eventsService} from '../../../../rxjs/SubjectService'


const TodoListHeader = ({todoList}) => {
    const {title,progress }=todoList
    const PROGRESS= "("+(progress*100) +"% done)"

    const revealTodoListEditModal=e=>{
        eventsService.sendEvent("REVEAL_EDIT_TODOLIST_MODAL",todoList);
    }
    const revealTodoListRmoveModal=e=>{
        eventsService.sendEvent("REVEAL_REMOVE_TODOLIST_MODAL",todoList);
    }

    return <div className="border-b  border-gray-500" >
           <div className="w-full flex flex-row items-end justify-between p-2  " >
                <div >
                   <h1 className="text-gray-500 font-bold "  >{title}</h1>
                   <p className="text-green-500 text-sm " >{PROGRESS}</p>
                </div>
                <div className="flex flex-row items-center  " >
                     <button onClick={revealTodoListRmoveModal} > 
                        <Icon name="trash" color="text-gray-300 "  hoverColor="text-red-300 " />
                    </button>
                     <button onClick={revealTodoListEditModal} > 
                        <Icon name="setting"  color="text-gray-300 " hoverColor="text-gray-400 " />
                    </button>
                     <button onClick={e=>console.log('click')} > 
                     <Icon name="check"  color="text-green-300 " hoverColor="text-green-400 " />
                    </button>
               </div>
          </div>
    </div>
}


export default  TodoListHeader
