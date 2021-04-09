import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'


let newTodo=null

let todoListTodosCount=0
let projectTodoListsCount=0
let targetTodoListIndex= 0
let newTodoDoneValue=false
const useToggleTodo = (todoListId,projectId) => {
   const createNewUpdtedTodosList=(todoId,previousData,toJson,toggleListDone,doneValue,setProgress,progress)=>{
      let temp =[]
      if(previousData  && previousData !== undefined && previousData !==null){
         if(!toJson)temp=[...previousData]
         else  temp=[...JSON.parse(previousData)]
      } 
      projectTodoListsCount=temp.filter(td=>td.projectId ===projectId).length
       //get target todoList
       const targetTodoList=temp.filter(tds=>tds.id === todoListId )[0]
       if(targetTodoList){
          targetTodoListIndex=temp.indexOf(targetTodoList)
         
         if(toggleListDone && setProgress ){
            temp[targetTodoListIndex].progress = progress
            temp[targetTodoListIndex].done = doneValue
         }else if(setProgress && !toggleListDone){
            temp[targetTodoListIndex].progress = progress
         }else if(toggleListDone && !setProgress ){
            temp[targetTodoListIndex].done = doneValue
         }else if(!toggleListDone && !setProgress ){
           todoListTodosCount =targetTodoList.todos.length
           const targetTodo= targetTodoList.todos.filter(td=>td.id === todoId)[0]
           if(targetTodo){
             const targetTodoIndex=targetTodoList.todos.indexOf(targetTodo)
             newTodoDoneValue = !targetTodo.done
             temp[targetTodoListIndex].todos[targetTodoIndex].done = !targetTodo.done
           }
         }
      }
       return [...temp]
   }
   
   const ToggleTodo = async (values)=>{
       const {todoId}=values
       
       const project_todo_Lists= localStorage.getItem('todoLists')
      
       let updated_list=createNewUpdtedTodosList(todoId,project_todo_Lists,true)
   
       
       //update todoList status if all todos are done 
       todoListTodosCount=updated_list[targetTodoListIndex].todos.length
       const doneTodos = updated_list[targetTodoListIndex].todos.filter(td=>td.done)
       if(doneTodos.length === todoListTodosCount){
         //all of todos are done   set todoList progress to 1
         updated_list=createNewUpdtedTodosList(todoId,[...updated_list],false,true,true,true,1)
       }else{
         const progress=  parseFloat(doneTodos.length * (1/todoListTodosCount)).toFixed(2)
         updated_list=createNewUpdtedTodosList(todoId,[...updated_list],false,true,false,true,progress)
       }
       
     
      // update project progress 
      const doneTodoLists = updated_list.filter(td=>td.projectId === projectId && td.done)
      const projects= localStorage.getItem('projects')
      
      if(projects  && projects !== undefined && projects !==null){
        //cancel any outgoing queries
        queryClient.cancelQueries(projectId)
        let   temp_projects      = [...JSON.parse(projects)]
        const targetProject      = temp_projects.filter(p=>p.id === projectId)[0]
        const targetProjectIndex = temp_projects.indexOf(targetProject)


        if(doneTodoLists.length === projectTodoListsCount ){
          console.log("doneTodoLists.length === projectTodoListsCount")
          temp_projects[targetProjectIndex].progress  = 1
        }else{
           //count all todos in projects 
           //calculate how much is the todoList of the project 
           const projectsTodosCount=targetProject.todosCount
  
           const todoListPrecentageInProject = parseFloat(parseFloat(todoListTodosCount / projectsTodosCount ).toFixed(2))
           console.log(todoListPrecentageInProject)
           // //calculate how mucha todo from this todo list represents in the project
           const todoItemPercentageInProject = parseFloat(parseFloat( todoListPrecentageInProject /todoListTodosCount).toFixed(2))
           console.log(todoItemPercentageInProject)
           
           let progress 
           const currentProgress=  parseFloat(temp_projects[targetProjectIndex].progress)
           if(newTodoDoneValue){
             progress=currentProgress + todoItemPercentageInProject
           }else{
             const value = currentProgress -todoItemPercentageInProject
             progress= value>=0?value:0
           }
           console.log(currentProgress)
           console.log(progress)

           temp_projects[targetProjectIndex].progress  = parseFloat(progress)
        }

        localStorage.setItem('projects',JSON.stringify(temp_projects))
        queryClient.refetchQueries(projectId,temp_projects)
      } 


       localStorage.setItem('todoLists',JSON.stringify(updated_list))
       return  newTodo
   };

    return useMutation(
        ToggleTodo,
        {
          onSuccess:(newTodo)=>{
             if(!newTodo) return 
            const previousData=queryClient.getQueryData("TODO_LIST"+projectId)
         
            const updatedList=createNewUpdtedTodosList(newTodo.id,previousData,false)
            
            queryClient.setQueryData("TODO_LIST"+projectId,updatedList)
            queryClient.refetchQueries("TODO_LIST"+projectId,updatedList)
          },
          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             const {todoId}=values

             queryClient.cancelQueries("TODO_LIST"+projectId)

             const previousData=queryClient.getQueryData("TODO_LIST"+projectId)

             const updatedList=createNewUpdtedTodosList(todoId,previousData,false)
             
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

export default useToggleTodo

 