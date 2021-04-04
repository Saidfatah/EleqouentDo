import React,{useState,useCallback} from 'react'
import TodosList from './List/TodosList'
import TodoListModalLink from './List/TodoListModalLink'
import update from 'immutability-helper'

const todo=(title,index)=>({
   title,
   done:false
 })

 let _index=0
 
const todoList=(title,todos,progress)=>({
  title,
  todos ,
  progress,
  id:_index++
})
const todos=[ 
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),

 ]
 const todoLists=[ 
  todoList('list 1',todos,.1),
  todoList('list 2',todos,0),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),
  todoList('list 3',todos,.5),

]


export const TodosListScroolPanel =({title})=>{
    const [orderTodoLists, setorderTodoLists] = useState([...todoLists])

    const moveCardList = useCallback((dragIndex, hoverIndex) => {
        const dragCard = orderTodoLists[dragIndex];
        setorderTodoLists(update(orderTodoLists, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
        }));
    }, [orderTodoLists]);
   
  
   const wrraperStyle="flex-1  h-screen sm:h-screen w-auto whitespace-nowrap p-2 flex flex-col items-start relative"
    return <div className={wrraperStyle} >
          <h1 className=" text-gray-500 text-xl mb-2 " >{title}</h1>
          <div className="hidden  sm:flex sm:flex-row " >
              {
                orderTodoLists.map((tl,index)=><TodosList 
                moveCardList={moveCardList}
                key={tl.id} 
                todoList={tl} 
                index={index} 
                />)
                }
          </div>
          <div className="flex flex-col   sm:hidden  " >
              {
                orderTodoLists.map((tl,index)=><TodoListModalLink 
                moveCardList={moveCardList}
                key={tl.id} 
                todoList={tl} 
                index={index} 
                />)
                }
          </div>
     </div>

}

export default TodosListScroolPanel
