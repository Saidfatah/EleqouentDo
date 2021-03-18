import React  from 'react'
import CardFrame from '../common/CardFrame'
import Icon from '../common/Icon'

const ProjectLink = ({project}) => {

  const {title}=project
  const onclick=e=>{
       console.log({title})
  }

  return <button className=" w-full mb-2" onClick={onclick} >
    <CardFrame padding={true} >
      <div className="flex flex-row items-center justify-between" >
           <h1 className="text-xs text-gray-600  " >{title} </h1>
           <Icon name="arrow_right-double" color="text-green-300"  hoverColor="text-green-500" />
      </div>
    </CardFrame>
  </button>

}

export default ProjectLink
