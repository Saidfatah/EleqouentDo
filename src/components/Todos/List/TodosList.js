import React  from 'react'
import TodoItem from './TodoItem'
import CardFrame from '../../common/CardFrame'
import Icon from '../../common/Icon'

const LIST_WIDTH=200
const LIST_HEIGHT=200
const SPACING =32


const TodosList = ({todoList,index}) => {
   const {todos,title,progress}=todoList
     
    const PROGRESS= "("+(progress*100) +"% done)"

    const Header=()=>{   
        return <div className="border-b  border-gray-500" >
            <div className="w-full flex flex-row items-end justify-between p-2  " >
                 <div >
              <h1 className="text-gray-500 font-bold "  >{title}</h1>
              <p className="text-green-500 text-sm " >{PROGRESS}</p>
           </div>
                 <div className="flex flex-row items-center  " >
                 <button onClick={e=>console.log('click')} > 
                    <Icon name="trash" color="text-gray-300 "  hoverColor="text-red-300 " />
                </button>
                 <button onClick={e=>console.log('click')} > 
                    <Icon name="setting"  color="text-gray-300 " hoverColor="text-gray-400 " />
                </button>
                 <button onClick={e=>console.log('click')} > 
                 <Icon name="check"  color="text-green-300 " hoverColor="text-green-400 " />
                </button>
             </div>
           </div>
        </div>
    }

    const clickStart=e=>{

    }
    const clickEnd=e=>{
        
    }

    return (
        <div 
        onMouseDown={clickStart}
        onMouseUp={clickEnd}
        className="shadow-xl"
        style={{
             left:(LIST_WIDTH +SPACING)*index
        }}
        className="absolute top-0 " >
            <CardFrame  padding={0}  isRow={true} border={true} > 
            <div className="flex flex-col ">
                 <Header />
                 <div 
                 className="pl-2 flex flex-col "
                 style={{height:LIST_HEIGHT,width:LIST_WIDTH}} 
                  >
                     <div className={"flex-1 w-full  overflow-y-auto scrollbar scrollbar-thin hover:scrollbar-thumb-gray-400 scrollbar-thumb-gray-200  scrollbar-track-gray-0 pr-2 "} >
                          { todos.map((p,index)=><TodoItem key={index} todo={p} />)  }
                     </div>
                 </div>
            </div>
            </CardFrame>
        </div>
    )
}

export default TodosList
