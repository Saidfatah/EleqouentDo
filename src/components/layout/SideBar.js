import React from 'react'
import ProjectsSeacrhableList from "../Projects/ProjectsSeacrhableList"

const SideBar = () => {
    return (
        <div className="relative  w-64 h-full bg-green-300   border-r border-gray-200 shadow-lg" >
            <ProjectsSeacrhableList />
        </div>
    )
}

export default SideBar
