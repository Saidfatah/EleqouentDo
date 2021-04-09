import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'



let removedTodoList=null
const useRemoveTodoList = (projectId) => {
    const createNewUpdtedTodosList=(id,previousData,toJson)=>{
        let temp =[]
        if(previousData  && previousData !== undefined && previousData !==null){
           if(!toJson)temp=[...previousData]
           else  temp=[...JSON.parse(previousData)]
        } 
        const targetTodoList=temp.filter(tds=>tds.id === id)[0]
        const targetTodoListIndex=temp.indexOf(targetTodoList)
        removedTodoList=temp.splice(targetTodoListIndex,1)[0]
        console.log(removedTodoList)
        return [...temp]
     }
     
    const RemoveTodoList = async (values)=>{
        const {id}=values
        const project_todo_Lists= localStorage.getItem('todoLists')
    
        const updatedList=createNewUpdtedTodosList(id,project_todo_Lists,true)

        
        //recalculate prject progress - calculate how much the newly created todolist repsents
       //of the project and subtract that from the project's pgrgress 
       const projects= localStorage.getItem('projects')
       if(projects  && projects !== undefined && projects !==null){
         let temp_projects = []
         temp_projects=[...JSON.parse(projects)]

         const targetProject =  temp_projects.filter(p=>p.id === projectId)[0]
         const targetProjectIndex = temp_projects.indexOf(targetProject)
      
         //count all todos in projects 
         //calculate how much is the todoList of the project 
         const projectsTodosCount          = targetProject.todosCount - removedTodoList.todos.length
         const todoListPrecentageInProject = removedTodoList.todos.length / targetProject.todosCount 
         
         //recalculate project's prgress by substracting todoListPrecentageInProject
         const recalculatedProgress   = parseFloat(parseFloat(temp_projects[targetProjectIndex].progress + todoListPrecentageInProject).toFixed(2))
        
         temp_projects[targetProjectIndex].todosCount =projectsTodosCount
         temp_projects[targetProjectIndex].progress  = recalculatedProgress >=0?recalculatedProgress :0

         localStorage.setItem('projects',JSON.stringify(temp_projects))
         queryClient.refetchQueries(projectId,temp_projects)
       } 

        localStorage.setItem('todoLists',JSON.stringify(updatedList))
        return  removedTodoList
    };

    return useMutation(
        RemoveTodoList,
        {
          onSuccess:(removedTodoList)=>{
            const {id}=removedTodoList
            const previousData=queryClient.getQueryData("TODO_LIST"+projectId)
        
            const updatedList=createNewUpdtedTodosList(id,previousData,false)
            queryClient.setQueryData("TODO_LIST"+projectId,updatedList)
            queryClient.refetchQueries("TODO_LIST"+projectId,updatedList)
          },

          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             const {id}=values
             queryClient.cancelQueries("TODO_LIST"+projectId)

             const previousData=queryClient.getQueryData("TODO_LIST"+projectId)

             //update query data
             const updatedList=createNewUpdtedTodosList(id,previousData,false)
             queryClient.setQueryData("TODO_LIST"+projectId,updatedList)
             return  queryClient.setQueryData("TODO_LIST"+projectId,previousData)
          },
          onSettled: () => {
            queryClient.invalidateQueries("TODO_LIST"+projectId)
          },
          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useRemoveTodoList

 