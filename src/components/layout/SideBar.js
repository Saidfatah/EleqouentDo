import React,{useState} from 'react'
import ProjectsSeacrhableList from "../Projects/ProjectsSeacrhableList"



const SIDE_BAR_WIDTH=250
const SideBar = () => {
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [expanded, setexpanded] = useState(true)

    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
    }

    return (
        <div style={{width:sidebarWidth}}  className=" transition duration-500 ease-in-out  w-64 h-full overflow-x-auto bg-green-300   border-r border-gray-200 shadow-lg" >
            <ProjectsSeacrhableList expanded={expanded} expandSideBar={expandSideBar} sidebarWidth={sidebarWidth} />
        </div>
    )
}

export default SideBar
