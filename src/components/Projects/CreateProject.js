import React,{useState,useEffect} from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import { eventsService} from '../../rxjs/SubjectService';
import useCreateProject from '../../hooks/projects/useCreateProject'
import Error from '../common/Error'

const CreateProjectFrom=({setisModalVisible})=>{
    const {mutate,isLoading}=useCreateProject()
    const [title, settitle] = useState("")
    const [estimated_time, setestimated_time] = useState(0)
    const [errors, seterrors] = useState([])

    const createProjectDispatch=async e=>{
        e.preventDefault()
        if(title === "" ){
            return seterrors([...errors,"title is required !"])
        }
        if(estimated_time ===0 ){
             return seterrors([...errors,"Estimated time is required"])
        }


        mutate({ id: new Date(), title,estimated_time})
        if(!isLoading) setisModalVisible(false)
    }
    const cancel=e=>{
          setisModalVisible(false)
    }

    const resetErrors=e=>{
        seterrors([])
    }
    const Errors=()=>{
        return errors.map((error,index)=><Error key={index} error={error} />)
    }
    
    return <form>
    <div  >
        <h3 className="text-gray-400" >Project title</h3>
        <Input
           value={title}
           setValue={settitle}
           hasBorder={true}
           placeholder="Project title"
           override="mb-2"
           onFocus={resetErrors}
        />
    </div>
    <div>
        <h3 className="text-gray-400" >Estimated time </h3>
        <Input
           value={estimated_time}
           setValue={setestimated_time}
           hasBorder={true}
           override="mb-2"
           placeholder="estimated time" 
           type="number"
           onFocus={resetErrors}
        />
    </div>
    <Errors />
    <div className="w-full flex flex-row justify-end items-center" >
       <button 
           type="submit"
           onClick={createProjectDispatch} 
           className="text-white rounded-md bg-green-600 mr-2 p-2   hover:bg-green-700 " >
               Confirm
       </button>
       <button 
           type="button"
           onClick={cancel}  
           className="text-gray-600 rounded-md bg-gray-200 p-2 hover:bg-gray-300" >
           Cancel
       </button>
    </div>
</form>
}

const CreateProject = () => {
    const [isModalVisible, setisModalVisible] = useState(false)

    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title==='REVEAL_CREATE_PROJECT_MODAL')
            {
                setisModalVisible(true)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
 
    return (
    <Modal {...{ 
        isModalVisible, 
        setisModalVisible , 
        overlay:true,
        title:"Create new project",
        titleColor:"text-green-500"
        }} >
          <CreateProjectFrom setisModalVisible={setisModalVisible} />   
    </Modal>
    )
}

export default CreateProject
