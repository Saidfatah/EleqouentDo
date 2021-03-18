import React  from 'react'
import CardFrame from '../common/CardFrame'
import Icon from '../common/Icon'

const ProjectLink = ({project,index,selected,setselectedIndex}) => {

  const {title}=project
  const onclick=e=>{
      setselectedIndex(index)
       console.log({title})
  }

  return <button className=" w-full mb-2  " onClick={onclick} >
    <CardFrame padding={true} >
      <div className="flex flex-row items-center justify-between  " >
           <h1 className={"text-xs  "+(selected?"text-green-500  font-bold ":"text-gray-600 ")} >{title} </h1>
           <Icon name={selected?"arrow_right-double":"arrow_right-single"} color="text-green-300"  hoverColor="text-green-500" />
      </div>
    </CardFrame>
  </button>

}

export default ProjectLink
