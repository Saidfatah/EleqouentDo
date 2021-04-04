import React from 'react'
import Icon from '../common/Icon'
import {Link} from "react-router-dom";

let i = 0
const project=(title,id)=>({
    title,
    id: i++
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
]

const blockStyle="w-48 h-48  border border-gray-200 rounded-md m-1 ml-0 bg-white shadow-lg  flex justify-center items-center hover:bg-gray-100"
const ProjectLink = ({project,index}) => {
    const {title,id}=project

    return ( <Link className={blockStyle}  to={"project/"+id} >
               <div>
                    <p className="text-gray-800  font-bold   " >{title}</p>
                    <p className="font-light text-sm " >created <span className=" italic"  >20/10/2012</span></p>
               </div>
        </Link> )
}


const ProjectsDashBoard = () => {
    return (
        <div className="relative h-full overflow-y-auto flex-1" >
             
            <div className="absolute top-0 left-0 w-full h-2/4 bg-blue-600 z-0" />
            <div className=" p-28   z-9 " >
            <h1 className={"relative  text-white z-9  font-bold "} >Your Projects</h1>
                <div   className={"relative h-full w-full flex flex-wrap"} >
                 
                    <button className={blockStyle} >
                            <Icon name="plus"  color="text-blue-600" gorupHover={true} hoverColor="text-blue-700" />
                           <p className="text-blue-600  font-bold group-hover:text-blue-300 " >Create new project</p>
                    </button>
                    { projects.map((p,index)=> <ProjectLink key={p.id} project={p}  index={index}  />)  }
                </div>
            </div>
        </div>
    )
}

export default ProjectsDashBoard
