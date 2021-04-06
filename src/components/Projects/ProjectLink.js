import React from 'react'
import {Link} from "react-router-dom";


const ProjectLink = ({project,index}) => {
    const {title,id}=project

    
     const blockStyle=`
     w-48 
     h-48 
     border
     border-gray-200
     rounded-md
     m-1
     ml-0
     bg-white
     shadow-lg
     flex
     justify-center
     items-center
     hover:bg-gray-100
     relative
     `
    return (
    <Link style={{
          animation:`fade_in .2s ${index/18}s cubic-bezier(0.4, 0, 0.2, 1)`,
          animationFillMode:"forwards",
          }} 
          className={blockStyle+" opacity-0"}  
          to={"project/"+id} >
               <div>
                    <p className="text-gray-800  font-bold relative left--10 opacity-0  animate-fade_in_slide_in   " >{title}</p>
                    <p className="font-light text-sm relative left--10  opacity-0  animate-fade_in_slide_in  " >created <span className=" italic"  >20/10/2012</span></p>
               </div>
    </Link> 
    )
}



export default ProjectLink
