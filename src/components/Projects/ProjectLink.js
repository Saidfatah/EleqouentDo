import React  from 'react'
import Icon from '../common/Icon'

const ProjectLink = ({project,index,selected,setselectedIndex}) => {

  const {title}=project
  const onclick=e=>{
      setselectedIndex(index)
       console.log({title})
  }

  return <button className=" w-full mb-2 group  " onClick={onclick} >
      <div className={"flex flex-row items-center justify-between   p-1 "+(selected?"bg-green-300 ":"group-hover:bg-green-200")} >
           <h1 
              className={"text-xs  "+(
                selected
                ?"text-white   "
                :" text-gray-500  ")
                } >
             {title} 
            </h1>
           <Icon 
           name={selected?"arrow_right_double":"arrow_right_single"} 
           gorupHover={true} 
           color={selected?"text-white":"text-gray-300"}  
           hoverColor={selected?"text-white" :"text-green-300"}/>
      </div>
  </button>

}

export default ProjectLink
