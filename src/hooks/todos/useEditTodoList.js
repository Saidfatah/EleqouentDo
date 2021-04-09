import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'
import {TodoItemModel} from './Schemas/TodoItemModel'
import {TodoListModel} from './Schemas/TodoListModel'





let newTodoList
const useEditTodoList = (projectId) => {
    const createUpdatedList=(previousData,todoListToBeEdited,title,todos,toJson)=>{
        let temp =[]
        if(previousData && previousData!==undefined && previousData!==null){
           if(toJson) temp=[...JSON.parse(previousData)]
           else temp=[...previousData]
        } 
        
        //todos should mantain their state
        const targetTodoList=temp.filter(tds=>tds.id === todoListToBeEdited.id)[0]
        const targetTodoListIndex=temp.indexOf(targetTodoList)
    
        let todoCreatedDate  = new Date()
        const todosMaped     = todos.map((todo,index)=>{
            const t = new Date(todoCreatedDate+index)
            return TodoItemModel(todo,t)
        })
        newTodoList    = TodoListModel(projectId,title,todosMaped,todoListToBeEdited.orderInProject)
        temp[targetTodoListIndex] = newTodoList

        return temp
    }
    const EditTodoList = async (values)=>{
        const {title,todos,todoListToBeEdited}=values
        const todoLists= localStorage.getItem('todoLists')
    
       
       const updated_list = createUpdatedList(todoLists,todoListToBeEdited,title,todos,true)
       //update projectcs todosCount 
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
         const projectsTodosCount          = (targetProject.todosCount-todoListToBeEdited.todos.length) + todos.length
         const todoListPrecentageInProject = todos.length / projectsTodosCount 
         
         //recalculate project's prgress by substracting todoListPrecentageInProject
         const recalculatedProgress   = parseFloat(parseFloat(temp_projects[targetProjectIndex].progress - todoListPrecentageInProject).toFixed(2))
        
         temp_projects[targetProjectIndex].todosCount =projectsTodosCount
         temp_projects[targetProjectIndex].progress  = recalculatedProgress >=0?recalculatedProgress :0

         localStorage.setItem('projects',JSON.stringify(temp_projects))
         queryClient.refetchQueries(projectId,temp_projects)
       } 
    
        localStorage.setItem('todoLists',JSON.stringify(updated_list))
     
        return  newTodoList
    };

    return useMutation(
        EditTodoList,
        {
          onSuccess:(newTodoList)=>{
            const {projectId,id}=newTodoList
            const previousData=queryClient.getQueryData("TODO_LIST"+projectId)
            let temp =[]
            if(previousData  && previousData !== undefined && previousData !==null){
               temp=[...previousData]
            } 
            const targetTodoList=temp.filter(tds=>tds.id ===  id)[0]
            const targetTodoListIndex=temp.indexOf(targetTodoList)
            temp[targetTodoListIndex] = newTodoList
            queryClient.setQueryData("TODO_LIST"+projectId,temp)
            queryClient.refetchQueries("TODO_LIST"+projectId,temp)
          },
          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             const {title,projectId,todos,todoListToBeEdited}=values
             queryClient.cancelQueries("TODO_LIST"+projectId)

             const previousData=queryClient.getQueryData("TODO_LIST"+projectId)

             const updated_list = createUpdatedList(previousData,todoListToBeEdited,title,todos,false)

             queryClient.setQueryData("TODO_LIST"+projectId,updated_list)
             return  queryClient.setQueryData("TODO_LIST"+projectId,previousData)
          },
          onSettled: () => {
            queryClient.invalidateQueries("TODO_LIST"+projectId)
          },
          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useEditTodoList

 