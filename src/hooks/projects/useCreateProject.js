import React from 'react'
import {QueryCache,MutationCache,useMutation} from  "react-query" 
import {ProjectModel} from './Schemas/ProjectModel'
import useFecthProjects from "./useFecthProjects"
import{queryClient} from '../QueryClients/MainClient'




const createProject = async (values)=>{
    const dataFromClient= queryClient.getQueryData('projects')
    let projects =  JSON.parse(localStorage.getItem('projects'))
    let temp=[...projects]
    const {title,id}=values

    temp.push(ProjectModel(title,id))
    localStorage.setItem('projects',JSON.stringify(temp))
 
    return  ProjectModel(title,id)
       
};

const useCreateProject = () => {
    return useMutation(
        createProject,
        {
        //   onSuccess:()=>queryClient.refetchQueries("projects"),
          onSuccess:(newProject)=>queryClient.setQueryData("projects",(old)=>[...old,newProject]),

          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
              queryClient.cancelQueries('projects')

             const previousData=queryClient.getQueryData("projects")
             const {title,id}=values
             queryClient.setQueryData("projects",(old)=>[...old,ProjectModel(title,id)])
             return  queryClient.setQueryData("projects",previousData)
          },

          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useCreateProject

 