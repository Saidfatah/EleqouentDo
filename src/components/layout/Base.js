import React from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import Menu from './Menu'
import CreateProject from '../Projects/CreateProject'
import RemoveProjectModal from '../Projects/RemoveProjectModal'
import FinishProjectModal from '../Projects/FinishProjectModal'


const Base = () => {
    return (
        <div className="flex relative   flex-row w-full h-screen bg-gray-900 flex-grow: 1" >
            <SideBar />
            <Dashboard/> 
           
            <CreateProject />
            <RemoveProjectModal />
            <FinishProjectModal />
        </div>
    )
}

export default Base