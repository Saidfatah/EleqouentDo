import React from 'react'
import TodosList from './List/TodosList'


const todo=(title,index)=>({
   title,
   done:false
 })
 const todoList=(title,todos,progress)=>({
   title,
   todos ,
   progress,
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
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
     todo('todo1'),
 ]
 const todoLists=[ 
     todoList('list 1',todos,.1),
     todoList('list 1',todos,0),
     todoList('list 1',todos,.5),
     todoList('list 1',todos,.3),
     todoList('list 1',todos,.3),
     todoList('list 1',todos,.3),
     todoList('list 1',todos,.3),
     todoList('list 1',todos,.3),
 ]
export const TodosListScroolPanel =(props)=>{
    // scrollbar-thin hover:scrollbar-thumb-gray-500 scrollbar-thumb-gray-0 scrollbar-track-gray-0 
    let TodosListScroolPanelWdth=1500
    let scrollAreaWidth = TodosListScroolPanelWdth-16


    return <div style={{width:1500}} className="h-full  p-2" >
          <h1 className="text-white" >Active</h1>

          <div style={{width:scrollAreaWidth,height:500}} className="relative   p-2 ">
            {
            todoLists.map((tl,index)=><TodosList key={index} todoList={tl} index={index} />)
            }
          </div>
          
     </div>

}

export default TodosListScroolPanel
