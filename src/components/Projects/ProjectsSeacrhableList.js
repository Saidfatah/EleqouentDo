import React,{useState} from 'react'
import Input from '../common/Input'
import Icon from '../common/Icon'
import CardFrame from '../common/CardFrame'
import ProjectLink from './ProjectLink'

const project=(title)=>({
    title
})
const projects=[
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling"),
    project("smardis db modeling")
]

const ProjectsSeacrhableList = () => {
     const [searchText, setsearchText] = useState("")
     const [finished, setfinished] = useState(false)
     const [selectedIndex, setselectedIndex] = useState(0)

     const setFinishedFilter=e=>{
         setfinished(!finished)
     }
     const scrollBarStye=`
     scrollbar
     scrollbar-thin
     hover:scrollbar-thumb-green-500
     scrollbar-thumb-green-400
     scrollbar-track-gray-0
     `

     const iconName = finished?"check_circle_full" : "check_circle_empty"
     const checkIconColor= !finished?"text-gray-500":"text-green-300"
     const checkIconHoverColor= !finished?"text-gray-600":"text-green-400"

     return (
        <div   className="w-full h-full  flex flex-col " > 
            <div className=" z-10 w-full  left-0 top-0  mb-2 p-2" >
                 <CardFrame padding={true} >
                      <div className="flex flex-row justify-between items-center mb-2 " >
                             <Input {...{value:searchText,setValue:setsearchText}}  />
                             <button>
                                <Icon name="search" color="text-gray-500" hoverColor="text-green-300" />
                             </button>
                      </div>
                      <button className="flex flex-row items-center" onClick={setFinishedFilter} > 
                            <Icon name={iconName} color={checkIconColor} hoverColor={checkIconHoverColor} />
                            <p className={"text-gray-500 text-sm "+checkIconColor} >finished projects</p>
                      </button>
                 </CardFrame>
            </div>
      
            
            <div className={"flex-1 w-full  overflow-y-auto  px-2  "+scrollBarStye} >
                 { projects.map((p,index)=> <ProjectLink key={index} project={p} selected={selectedIndex===index} />)  }
            </div>
            
        </div>
     )
}

export default ProjectsSeacrhableList
