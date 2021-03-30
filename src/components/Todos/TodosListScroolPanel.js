import React,{useState,useCallback} from 'react'
import TodosList from './List/TodosList'
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

 ]
 const todoLists=[ 
  todoList('list 1',todos,.1),
  todoList('list 2',todos,0),
  todoList('list 3',todos,.5),
 //  todoList('list 1',todos,.3),
 //  todoList('list 1',todos,.3),
 //  todoList('list 1',todos,.3),
 //  todoList('list 1',todos,.3),
 //  todoList('list 1',todos,.3),
]

 let TodosListScroolPanelWdth=1500
 let scrollAreaWidth = TodosListScroolPanelWdth-16
 let HoverdIndex=null
export const TodosListScroolPanel =({title})=>{
    const [orderTodoLists, setorderTodoLists] = useState([...todoLists])
    const [mouseIsDown, setmouseIsDown] = useState(false)
    
    


    const moveCardList = useCallback((dragIndex, hoverIndex) => {

        const dragCard = orderTodoLists[dragIndex];
        setorderTodoLists(update(orderTodoLists, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
        }));
        
        // const tempOrderTodoLists=[...orderTodoLists]
        // const x = orderTodoLists[dragIndex]
        // tempOrderTodoLists[dragIndex] = orderTodoLists[hoverIndex]
        // tempOrderTodoLists[hoverIndex] = x

        // setorderTodoLists([...tempOrderTodoLists])
    }, [orderTodoLists]);
   
  

    return <div 
    style={{minWidth:1500}} 
    className="h-full  p-2" 
     >
          <h1 className=" text-gray-500 text-xl mb-2" >{title}</h1>

          <div 
          style={{
            width:scrollAreaWidth,height:500}} 
            className={"flex flex-row items-start  p-2 "}
          >
            {
            orderTodoLists.map((tl,index)=><TodosList 
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
