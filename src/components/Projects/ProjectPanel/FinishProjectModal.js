import React,{useState,useEffect} from 'react'
import Modal from '../../common/Modal'
import { eventsService} from '../../../rxjs/SubjectService';
import useFinishProject from '../../../hooks/projects/useFinishProject'

const FinishProjectModal = ({projectId}) => {
    const {mutate:finishProject,isLoading,isIdle,isError,isSuccess}=useFinishProject(projectId.toString())
    const [isModalVisible, setisModalVisible] = useState(false)
 

    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title==='REVEAL_FINISH_PROJECT_MODAL')
            {
                setisModalVisible(true)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
    useEffect(() => {
         if(isSuccess){
            setisModalVisible(false)
         }
    }, [isSuccess])

    
    const approve=e=>{
        finishProject({projectId})
    }
    const deny=e=>{
        setisModalVisible(false)
    }

    return (
        <Modal {...{ 
            isModalVisible, 
            overlay:true,
            setisModalVisible,
            title:"are you sure you want to finish this project",
            titleColor:"text-green-500"
            }} >
                 <button 
                 onClick={approve} 
                 className="text-white rounded-md bg-green-600 mt-2 mb-2   hover:bg-green-700 " >
                     Yes
                 </button>
                 <button onClick={deny}  className="text-gray-600 rounded-md bg-gray-200 hover:bg-gray-300" >
                     Cancel
                 </button>
        </Modal>
    )
}

export default FinishProjectModal
