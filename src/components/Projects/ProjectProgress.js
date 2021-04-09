import React from 'react'

const ProjectProgress = ({progress}) => {
  
    let PROGRESS
    if(progress ===1)PROGRESS= "100%"
    else PROGRESS= (parseFloat(progress*100).toFixed(1))+"%"
    return (
        <div className="pr-1 sm:w-full animate-fade_in "  >
            <h1 className="text-green-400 font-bold text-sm " >{PROGRESS+" of the prject is completed"} </h1>
            <div   className=" h-2 w-full bg-green-100 rounded-xl" >
                  <div  style={{width:PROGRESS}}   className=" bg-green-300  h-full rounded-xl" />
            </div>
        </div>
    )
}

export default ProjectProgress
