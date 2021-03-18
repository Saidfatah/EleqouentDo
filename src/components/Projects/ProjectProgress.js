import React from 'react'

const ProjectProgress = ({progress}) => {

    const PROGRESS= (progress*100)+"%"
    return (
        <div   >
            <h1 className="text-green-400 font-bold text-sm " >50% of the prject is completed </h1>
            <div  style={{width:500,height:10}}   className=" bg-green-100 rounded-xl" >
                  <div  style={{width:PROGRESS}}   className=" bg-green-300  h-full rounded-xl" >
      
                 </div>
            </div>
        </div>
    )
}

export default ProjectProgress
