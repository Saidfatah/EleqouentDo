import React,{memo} from 'react'
import { eventsService} from '../../../rxjs/SubjectService'
import Icon from '../../common/Icon'


const PanelHeaderButtons = ({expanded,projectId}) => {

    const revelModal=(modal_Id,value)=>e=>{
        eventsService.sendEvent(modal_Id,value);
    }
    const Button=({title,onClick,icon,color,hover_color})=>{
        return  <button className="flex flex-row justify-start  mr-2 sm:mr-0  sm:w-full p-1 mb-1 shadow-md " onClick={onClick} > 
            <Icon name={icon} color={color}  hoverColor={hover_color} />
            {expanded && <span className='ml-1  text-gray-600 animate-fade_in ' >{title}</span>}
       </button>
    }

    return (
        
        <div className="p-2 flex flex-wrap flex-row sm:block " >
        <Button
              title="Add todoList"   
              onClick={revelModal("REVEAL_CREATE_TODOLIST_MODAL",projectId)} 
              icon="plus" 
              color="text-green-300" 
              hover_color="text-green-400"/>
        <Button
              title="Edit Project"   
              onClick={revelModal("REVEAL_EDIT_PROJECT_MODAL",projectId)}  
              icon="setting" 
              color="text-gray-300" 
              hover_color="text-green-400"/>
        <Button

              title="Finish Project" 
              onClick={revelModal("REVEAL_FINISH_PROJECT_MODAL",projectId)} 
              icon="check" 
              color="text-green-300" 
              hover_color="text-green-400"/>
        <Button
              title="Remove Project" 
              onClick={revelModal("REVEAL_REMOVE_PROJECT_MODAL",projectId) } 
              icon="trash"  
              color="text-red-300" 
              hover_color="text-green-400"/>
   </div>
  
    )
}

export default memo(PanelHeaderButtons) 
