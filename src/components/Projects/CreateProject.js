import React,{useState,useEffect} from 'react'
import ModalCenter from '../layout/ModalCenter'
import Input from '../common/Input'
import { eventsService} from '../../rxjs/ModalService';

const CreateProject = () => {
    const [isModalVisible, setisModalVisible] = useState(false)
    const [title, settitle] = useState("")

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
             <Input value={title} setValue={settitle} placeholder="Project title" />
             <Input placeholder="estimated time" />
    </ModalCenter>
    )
}

export default CreateProject
