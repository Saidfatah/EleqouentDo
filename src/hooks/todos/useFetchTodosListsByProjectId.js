import {useQuery} from  "react-query" 
import {TodoListModel} from './Schemas/TodoListModel'
import {TodoItemModel} from './Schemas/TodoItemModel'

 
 

 const todos1=[ 
      TodoItemModel("todo1"),
      TodoItemModel("todo2"),
  ]
 const todos2=[ 
    TodoItemModel("todo3"),
    TodoItemModel("todo4"),
  ]
 const todos3=[ 
    TodoItemModel("todo5"),
    TodoItemModel("todo6"),
  ]
 const todos4=[ 
    TodoItemModel("todo7"),
    TodoItemModel("todo8"),
  ]

 const todoLists=[ 
     TodoListModel(0,"List intial",todos3,0),
 ]

 const useFetchTodosListsByProjectId = (projectId) => {
    const getTodoListsByPorjectId = async(args)=> {
        try {
            let todoListReturn = null
            const todoLists_from_cache=localStorage.getItem('todoLists')
            
            if(todoLists_from_cache != undefined){
                const filter = JSON
                .parse(todoLists_from_cache)
                .filter(tl=>tl.projectId.toString() == projectId.toString())
                todoListReturn=filter.length?filter:null
            }
            else{
                localStorage.setItem('todoLists',JSON.stringify(todoLists))
            }
            
          
            if(todoListReturn === null)return undefined
            if(!todoListReturn.length)return [todoListReturn] 
            return  [...todoListReturn] 
        } catch (error) {
            console.log(error)
        }
    };


    return  useQuery("TODO_LIST"+projectId,getTodoListsByPorjectId)
}

export default useFetchTodosListsByProjectId
