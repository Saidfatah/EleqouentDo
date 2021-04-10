
import React,{useState,useEffect} from 'react'
import Modal from '../../../common/Modal'
import Input from '../../../common/Input'
import Icon from '../../../common/Icon'
import Error from '../../../common/Error'
import TodoItem from './TodoItem'
import { eventsService} from '../../../../rxjs/SubjectService';
import useCreateTodoList from '../../../../hooks/todos/useCreateTodoList'
import useEditTodoList from '../../../../hooks/todos/useEditTodoList'
import classnames from 'classnames'

const CreateTodoListForm=({setisModalVisible,projectId,todoListToBeEdited})=>{
    const {mutate:createTodoList,isLoading:createTodoListIsLoading}=useCreateTodoList(projectId)
    const {mutate:editTodoList,isLoading:editTodoListIsLoading}=useEditTodoList(projectId)
    
    const [title, settitle] = useState(todoListToBeEdited !=null?todoListToBeEdited.title:"")
    const [todos, settodos] = useState(todoListToBeEdited !=null?todoListToBeEdited.todos.map(td=>td.title):[])
    const [todoTitle, setTodoTitle] = useState("")
    const [errors, seterrors] = useState([])

    

    const removeTodo=index=>e=>{
           e.preventDefault()
          const temp= [...todos]
          temp.splice(index,1)
          settodos(temp)
    }
    const addTodo=e=>{
        e.preventDefault()
        setTodoTitle("")
        settodos([...todos,todoTitle])
    }
    const resetErrors=e=>{
        seterrors([])
    }
    const submitTodoList=e=>{
        e.preventDefault()
        if(title === "" ){
             return seterrors([...errors,"title is required !"])
        }
        if(todos.length ===0 ){
             return seterrors([...errors,"insert atleast one todo item"])
        }
         
        if(todoListToBeEdited === null){
            createTodoList({projectId,todos,title})
        }else{
            editTodoList({todoListToBeEdited,projectId,todos,title})
        }
        seterrors([])
        setisModalVisible(false)
    }

    const Errors=()=>{
           return errors.map((error,index)=><Error key={index} error={error} />)
    }
    
    const AddTodoButtonClass=classnames({
        "bg-white p-3quarders  shadow-md ml-2 border rounded-md border-gray-300 ":true,
        "opacity-50":todoTitle === "",
        "opacity-1":todoTitle !== "",
    })
    return <form onSubmit={submitTodoList} className="flex flex-col">
         <Input hasBorder={true} value={title} setValue={settitle} placeholder="title" override="mb-2" onFocus={resetErrors}  />
         <div className="border rounded-md border-gray-300" >
              <div  className="flex flex-row p-1 items-center justify-between w-full border-b border-gray-200" >
                  <Input value={todoTitle} setValue={setTodoTitle} placeholder="todo title" onFocus={resetErrors}   />
                  <button disabled={todoTitle === ""} type="button" className={AddTodoButtonClass} onClick={addTodo} > 
                      <Icon name={"plus"} color={"text-green-300"}  hoverColor={"text-green-400"}  />
                  </button>
              </div>
              <div  style={{height:"200px",maxHeight:"200px"}} className="p-1 overflow-y-auto " >
                  {todos.map((todo,index)=><TodoItem key={index} index={index} title={todo} removeTodo={removeTodo}  />)}
              </div>
         </div>


         <Errors />
         <button type='submit'  className="self-end bg-white shadow-md text-green-400 p-2 mt-2 border rounded-md border-gray-300" >
            {todoListToBeEdited === null?"Add todo list":"Edit todo list"}
         </button>
    </form>
}

const CreateTodoList = ({projectId}) => {
    const [isModalVisible, setisModalVisible] = useState(false)
    const [todoListToBeEdited, settodoListToBeEdited] = useState(null)

    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title === 'REVEAL_CREATE_TODOLIST_MODAL')
            {
                setisModalVisible(true)
                if(todoListToBeEdited != null) settodoListToBeEdited(null)
            }
            if(eventNotification && eventNotification.title === 'REVEAL_EDIT_TODOLIST_MODAL')
            {
                setisModalVisible(true)
                settodoListToBeEdited(eventNotification.value)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
    useEffect(() => {
         if(!isModalVisible && todoListToBeEdited != null) settodoListToBeEdited(null)
    }, [isModalVisible])

    const modaPROPS={ 
        isModalVisible, 
        overlay:true,
        setisModalVisible,
        title:todoListToBeEdited!=null?"Edit todoList":"Create todoList",
        titleColor:"text-green-500"
    }

    

    return (
        <Modal {...modaPROPS} >
            <CreateTodoListForm projectId={projectId}  todoListToBeEdited={todoListToBeEdited} setisModalVisible={setisModalVisible} />
        </Modal>
    )
}

export default CreateTodoList
