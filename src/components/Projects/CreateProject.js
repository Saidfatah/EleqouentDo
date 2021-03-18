import React,{useState,useEffect} from 'react'
import ModalCenter from '../layout/ModalCenter'
import { eventsService} from '../../rxjs/ModalService';

const CreateProject = () => {
    const [isModalVisible, setisModalVisible] = useState(false)
    
    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title=='REVEAL_MODAL')
            {
                setisModalVisible(true)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])

    return (
    <ModalCenter {...{ isModalVisible, setisModalVisible}} >
             <h1>heyy</h1>
             <h1>heyy</h1>
             <h1>heyy</h1>
             <h1>heyy</h1>
             <h1>heyy</h1>
             <h1>heyy</h1>
    </ModalCenter>
    )
}

export default CreateProject
