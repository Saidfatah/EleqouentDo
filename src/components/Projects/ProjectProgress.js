import React from 'react'

const ProjectProgress = ({progress}) => {

    const PROGRESS= (progress*100)+"%"
    return (
        <div className="pr-1 sm:w-full "  >
            <h1 className="text-green-400 font-bold text-sm " >50% of the prject is completed </h1>
            <div   className=" h-2 w-full bg-green-100 rounded-xl" >
                  <div  style={{width:PROGRESS}}   className=" bg-green-300  h-full rounded-xl" />
            </div>
        </div>
    )
}

export default ProjectProgress
