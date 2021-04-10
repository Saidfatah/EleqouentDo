import {useMutation} from  "react-query" 
import{queryClient} from '../QueryClients/MainClient'
 





const useReorderTodoLists = (projectId) => {
    const createUpdatedList=(dragedId,hoveredId)=>{
        const todoLists= localStorage.getItem('todoLists')
        console.log({dragedId,hoveredId})
        let temp =[]
        if(todoLists  && todoLists !== undefined && todoLists !==null){
           temp=[...JSON.parse(todoLists)]
        } 


        const hoverdTodoList  = temp.filter(tds=>tds.id == hoveredId)[0]
        const hoverdTodoLisIndex  = temp.indexOf(hoverdTodoList)

        const draggedTodoList = temp.filter(tds=>tds.id == dragedId)[0]
        const draggedTodoListIndex  = temp.indexOf(draggedTodoList)
  
        console.log({hoverdTodoList,draggedTodoList})
        if(hoverdTodoList && draggedTodoList){
          const tempOrderInProject = temp[hoverdTodoLisIndex].orderInProject 
          temp[hoverdTodoLisIndex].orderInProject   = temp[draggedTodoListIndex].orderInProject 
          temp[draggedTodoListIndex].orderInProject = tempOrderInProject
        }
    
        return temp
    }

    const ReorderTodoLists = async (values)=>{
        const {dragedId,hoveredId}=values
    
        const updated_list = createUpdatedList(dragedId,hoveredId)
        // const projectTodoLists =  updated_list.filter(tds=>tds.projectId == projectId)

        localStorage.setItem('todoLists',JSON.stringify(updated_list))
        return  {dragedId,hoveredId}
    };

    return useMutation(
        ReorderTodoLists,
        {
          onSuccess:(newTodoList)=>{
            const {dragedId,hoveredId}=newTodoList
            const updated_list = createUpdatedList(dragedId,hoveredId,true)

            const projectTodoLists = updated_list.filter(tds=>tds.projectId == projectId)

            queryClient.setQueryData("TODO_LIST"+projectId,projectTodoLists)
            queryClient.refetchQueries("TODO_LIST"+projectId,projectTodoLists)
          },
          onMutate:(values)=>{
             //cancel any outgoing refecthing calls to prevent them from cllobering our optimistic update
             const {dragedId,hoveredId}=values
             queryClient.cancelQueries("TODO_LIST"+projectId)
             const previousData=queryClient.getQueryData("TODO_LIST"+projectId)

             const updated_list     = createUpdatedList(dragedId,hoveredId,true)

             const projectTodoLists = updated_list.filter(tds=>tds.projectId == projectId)

             queryClient.setQueryData("TODO_LIST"+projectId,projectTodoLists)
             return  queryClient.setQueryData("TODO_LIST"+projectId,previousData)
          },
          onSettled: () => {
            queryClient.invalidateQueries("TODO_LIST"+projectId)
          },
          onError:(err,values,rollBack)=>rollBack()
        }
    )
}  

export default useReorderTodoLists

 