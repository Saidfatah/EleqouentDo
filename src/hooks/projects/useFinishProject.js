import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'
import diff_minutes from '../../utils/diff_minutes'


let newProject
const useFinishProject = (projectId) => {
    const createUpdatedList=(previousData,toJson)=>{
        let temp =[]
        if(previousData && previousData!==undefined && previousData!==null){
           if(toJson) temp=[...JSON.parse(previousData)]
           else temp=[...previousData]
        } 
        
        //todos should mantain their state
        const targetProject=temp.filter(project=>project.id.toString() == projectId)[0]
        const targetProjectIndex=temp.indexOf(targetProject)
       
       
        temp[targetProjectIndex].status = "done"
        temp[targetProjectIndex].finished_at = new Date()

        //calculate estimation accuracy 
        const created_at         =  temp[targetProjectIndex].created_at
        const finished_at        =  temp[targetProjectIndex].finished_at
        const estimated_time     =  temp[targetProjectIndex].estimated_time
        let   project_duration_in_minutes = 0
        if(finished_at){
            const date1 = new Date(created_at );
            const date2 = new Date(finished_at);
            project_duration_in_minutes =diff_minutes( date2 ,date1 ).toString();
        }
        const accuracy = parseFloat( estimated_time/ project_duration_in_minutes ).toFixed(2)

        temp[targetProjectIndex].estimation_accuracy =accuracy


        newProject=temp[targetProjectIndex]

        return temp
    }
    const FinishProject = async (values)=>{
        const projects= localStorage.getItem('projects')
        
        const updated_list = createUpdatedList(projects,true)
   
        localStorage.setItem('projects',JSON.stringify(updated_list))
        return  newProject
    };

    return useMutation(
        FinishProject,
        {
          onSuccess:(newProject)=>{
            const previousData=queryClient.getQueryData("projects")
            queryClient.cancelQueries("projects")
            queryClient.cancelQueries(projectId)

            const updated_list = createUpdatedList(previousData,false)

            queryClient.setQueryData(projectId,newProject)
            queryClient.refetchQueries(projectId,newProject)
            
            queryClient.setQueryData("projects",updated_list)
            queryClient.refetchQueries("projects",updated_list)
          },
          onMutate:(values)=>{
            //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
            queryClient.cancelQueries("projects")
            queryClient.cancelQueries(projectId)

            const previousData=queryClient.getQueryData("projects")

            const updated_list = createUpdatedList(previousData,false)
            const targetProject = updated_list.filter(project=>project.id.toString() == projectId)[0]

            queryClient.setQueryData(projectId,targetProject)
            queryClient.setQueryData("projects",updated_list)
           return  queryClient.setQueryData("projects",previousData)
         },
         onSettled: () => {
           queryClient.invalidateQueries(projectId)
         },
         onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useFinishProject

 