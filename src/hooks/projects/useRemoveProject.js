import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'



let newProject=null
const useRemoveProject = (projectId) => {
    const createNewUpdtedTodosList=(previousData,toJson)=>{
        let temp =[]

        if(previousData  && previousData !== undefined && previousData !==null){
           if(!toJson)temp=[...previousData]
           else  temp=[...JSON.parse(previousData)]
        } 

        const targetProject      = temp.filter(p=>p.id === projectId)[0]
        const targetProjectIndex = temp.indexOf(targetProject)
        
        newProject = temp.splice(targetProjectIndex,1)
        return [...temp]
     }
     
    const RemoveProject = async (values)=>{
        const {id}=values
        const projectcs= localStorage.getItem('projects')
    
        const updatedList=createNewUpdtedTodosList(projectcs,true)
        localStorage.setItem('projects',JSON.stringify(updatedList))
        await new Promise(r=>setTimeout(r, (2000)))
        return  newProject
    };

    return useMutation(
        RemoveProject,
        {
          onSuccess:(newProject)=>{
            const previousData=queryClient.getQueryData("projects")
        
            const updatedList=createNewUpdtedTodosList(previousData,false)

            queryClient.setQueryData("projects",updatedList)
            queryClient.refetchQueries("projects",updatedList)
          },

          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             const {id}=values
             queryClient.cancelQueries(projectId)
             queryClient.cancelQueries("projects")

             const previousData=queryClient.getQueryData("projects")

             //update query data
             const updatedList=createNewUpdtedTodosList(previousData,false)
             queryClient.setQueryData("projects",updatedList)
             return  queryClient.setQueryData("projects",previousData)
          },
          onSettled: () => {
            queryClient.invalidateQueries("projects")
          },
          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useRemoveProject

 