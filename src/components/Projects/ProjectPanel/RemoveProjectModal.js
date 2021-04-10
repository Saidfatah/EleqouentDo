import React,{useState,useEffect} from 'react'
import Modal from '../../common/Modal'
import { eventsService} from '../../../rxjs/SubjectService';
import useRemoveProject from '../../../hooks/projects/useRemoveProject'
import {Redirect} from 'react-router-dom'
import classnames from 'classnames'

const RemoveProjectModal = (projectId) => {
    const {mutate,isLoading,isSuccess,isError}=useRemoveProject(projectId)
    const [isModalVisible, setisModalVisible] = useState(false)
 

    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title==='REVEAL_REMOVE_PROJECT_MODAL')
            {
                setisModalVisible(true)
                console.log(eventNotification.value)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
    useEffect(() => {
        if(isSuccess)setisModalVisible(false)
        if(!isLoading)setisModalVisible(false)
    }, [isLoading,isSuccess,isError])
    
    const approve=e=>{
        mutate({id:projectId})
    }
    const deny=e=>{
        setisModalVisible(false)
    }
    

    if(isSuccess)
       return <Redirect  to="/projects" />

    const validateButtonStyle=classnames({
        "text-white rounded-md bg-red-600 mt-2 mb-2   hover:bg-red-700 ":true,
        "opacity-50":isLoading,
        "opacity-1":!isLoading || isError || isSuccess,
    })
    const cancelButtonStyle=classnames({
        "text-gray-600 rounded-md bg-gray-200 hover:bg-gray-300":true,
        "opacity-50":isLoading,
        "opacity-1":!isLoading || isError || isSuccess,
    })
   
    return (
        <Modal {...{ 
            isModalVisible, 
            overlay:true,
            setisModalVisible,title:"are you sure you want to remove this project",
            titleColor:"text-red-700"}} >
                <button 
                 disabled={isSuccess || isLoading}
                 onClick={approve} 
                 className={validateButtonStyle} >
                     Yes
                 </button>
                 <button 
                  disabled={isSuccess || isLoading}
                  onClick={deny}  
                  className={cancelButtonStyle} >
                     Cancel
                 </button>
        </Modal>
    )
}

export default RemoveProjectModal
