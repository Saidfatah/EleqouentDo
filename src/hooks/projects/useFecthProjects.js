import {useQuery} from  "react-query" 
import {ProjectModel} from './Schemas/ProjectModel'
 
const projects=[
    ProjectModel("smardis db modeling",0),
]

const getProjects = async () => {
    let projectsReturn = projects

    const projects_from_cache=localStorage.getItem('projects')
    
    if(projects_from_cache != undefined) 
        projectsReturn =JSON.parse(projects_from_cache)
    else
        localStorage.setItem('projects',JSON.stringify(projects))

    return  projectsReturn 
};
const useFecthProjects = () => {
    return  useQuery("projects",getProjects,{keepPreviousData:true})
}

export default useFecthProjects

 