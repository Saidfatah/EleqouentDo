import React from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import Menu from './Menu'
import CreateProject from '../Projects/CreateProject'


const Base = () => {
    return (
        <div className="flex  flex-row w-full h-screen bg-gray-900 flex-grow: 1" >
            <SideBar />
            <Dashboard/> 
            <Menu />
            <CreateProject />
          
        </div>
    )
}

export default Base