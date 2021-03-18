import React  from 'react'
import Modal from '../common/Modal'

const ModalCenter = ({children,isModalVisible, setisModalVisible}) => {
 

    return (
       <Modal {...{
           centered:true, 
           overlay:true,
           isModalVisible,
           setisModalVisible
            }} >
              {children}
       </Modal>
    )
}

export default ModalCenter
