import React,{useState,useEffect} from 'react'
import Modal from '../../../common/Modal' 
import { eventsService} from '../../../../rxjs/SubjectService';
import useRemoveTodoList from '../../../../hooks/todos/useRemoveTodoList'

 
const RemoveTodoList = ({projectId}) => {
    const {mutate,isLoading,isSuccess,isError} =useRemoveTodoList(projectId)
    const [isModalVisible, setisModalVisible] = useState(false)
   const [title, settitle] = useState("")
   const [id, setid] = useState(null)


    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title === 'REVEAL_REMOVE_TODOLIST_MODAL')
            {
                setisModalVisible(true)
                settitle(eventNotification.value.title)
                setid(eventNotification.value.id)
            }
       
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
 

    const approveRemoval=()=>{
        mutate({id})
        setisModalVisible(false)
    }
    const cancelRemoval=(e)=>{
        setisModalVisible(false)
    }
 

    return (
        <Modal {...{ 
            isModalVisible, 
            overlay:true,
            setisModalVisible,title:"are you sure you want to remove ("+title+")list",
            titleColor:"text-red-700"}} >
                <button 
                 onClick={approveRemoval} 
                 className="text-white rounded-md bg-red-600 mt-2 mb-2   hover:bg-red-700 " >
                     Yes
                 </button>
                 <button onClick={cancelRemoval}  className="text-gray-600 rounded-md bg-gray-200 hover:bg-gray-300" >
                     Cancel
                 </button>
        </Modal>
    )
}

export default RemoveTodoList
