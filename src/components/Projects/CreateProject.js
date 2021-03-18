import React,{useState} from 'react'
import ModalCenter from '../layout/ModalCenter'

const CreateProject = () => {
    const [isModalVisible, setisModalVisible] = useState(false)

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
