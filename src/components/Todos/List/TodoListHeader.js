import React,{memo} from 'react'
import Icon from '../../common/Icon'


const TodoListHeader = ({title,progress}) => {

    const PROGRESS= "("+(progress*100) +"% done)"

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

const compare=(prev,next)=>{
    const prevprogress= prev.progress
    const nextprogress= next.progress
    const prevtitle= prev.title
    const nexttitle= next.title


    if(prevprogress !== nextprogress || prevtitle !== nexttitle ) return false
    return true
 }
export default memo(TodoListHeader,compare)
