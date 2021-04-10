import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'
import {TodoItemModel} from './Schemas/TodoItemModel'
import {TodoListModel} from './Schemas/TodoListModel'



let newTodoList = null
const useCreateTodoList = (projectId) => {
    const createNewList=(previousData,title,todos,toJson)=>{
        let temp =[]
        if(previousData && previousData!==undefined && previousData!==null){
           if(toJson)temp=[...JSON.parse(previousData)]
           else temp=[...previousData]
        } 
        
        const orderInProject = temp.length
        let todoCreatedDate  = new Date()
        const todosMaped     = todos.map((todo,index)=>{
            const t = new Date(todoCreatedDate.getTime()+index)
            return TodoItemModel(todo,t)
        })
        newTodoList    = TodoListModel(projectId,title,todosMaped,orderInProject)
       temp.push(newTodoList)
       return temp
    }
    const createTodoList = async (values)=>{
        const {title,todos}=values
        const project_todo_Lists= localStorage.getItem('todoLists')
    
        const updatedList = createNewList(project_todo_Lists,title,todos,true)
        console.log(updatedList.length)

       //update projectcs todosCount 
       //recalculate prject progress - calculate how much the newly created todolist repsents
       //of the project and subtract that from the project's pgrgress 
       const projects= localStorage.getItem('projects')
       let temp_projects = []
       if(projects  && projects !== undefined && projects !==null){
         temp_projects=[...JSON.parse(projects)]

         const targetProject =  temp_projects.filter(p=>p.id === projectId)[0]
         const targetProjectIndex = temp_projects.indexOf(targetProject)
      
         //count all todos in projects 
         //calculate how much is the todoList of the project 
         const projectsTodosCount          = targetProject.todosCount + todos.length
         const todoListPrecentageInProject = todos.length / projectsTodosCount 

         //recalculate project's prgress by substracting todoListPrecentageInProject
         const recalculatedProgress   = parseFloat(parseFloat(temp_projects[targetProjectIndex].progress - todoListPrecentageInProject).toFixed(2))
        
         temp_projects[targetProjectIndex].todosCount =projectsTodosCount
         temp_projects[targetProjectIndex].progress  = recalculatedProgress >=0?recalculatedProgress :0

         localStorage.setItem('projects',JSON.stringify(temp_projects))
         queryClient.refetchQueries(projectId,temp_projects)
       } 

        localStorage.setItem('todoLists',JSON.stringify(updatedList))
        return  newTodoList
    };

    return useMutation(
        createTodoList,
        {
          onSuccess:(newTodoList)=>queryClient.setQueryData("TODO_LIST"+projectId,(old)=>{
              if(old && old.length) return [...old,newTodoList]
              if(!old || !old.length) return [newTodoList]
          }),
          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             queryClient.cancelQueries("TODO_LIST"+projectId)

             const previousData=queryClient.getQueryData("TODO_LIST"+projectId)
             const {title,todos}=values
             
             const updatedList = createNewList(previousData,title,todos,false)
            
             queryClient.setQueryData("TODO_LIST"+projectId,updatedList)
             return  queryClient.setQueryData("TODO_LIST"+projectId,previousData)
          },

          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useCreateTodoList

 