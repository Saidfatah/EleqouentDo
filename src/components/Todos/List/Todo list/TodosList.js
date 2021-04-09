import React,{useRef}  from 'react'

import TodoListTodos from './Todo Items/TodoListTodos'
import TodoListHeader from './TodoListHeader'
import {useDrag,useDrop} from 'react-dnd'
import {ItemTypes} from '../../../../utils/ItemTypes'
import classnames from "classnames"
const LIST_WIDTH=180


let dragIndex = null
let hoverIndex = null
const TodosList = ({todoList,index,moveCardList }) => {
    // const [mouseX, setmouseX] = useState((LIST_WIDTH +SPACING)*index)
    // const [mouseY, setmouseY] = useState(0)
    // const [mouseIsDown, setmouseIsDown] = useState(false)
    const ref = useRef(null);
    const [{ handlerId,isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isOver: monitor.isOver(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
             dragIndex = item.index;
             hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }


            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            // Get horizontal middle
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            
            // Get pixels to the left
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

       
            // Dragging to rgiht
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // Dragging to left
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
           

            // Time to actually perform the action
             moveCardList(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return {  type:ItemTypes.CARD, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });



    drag(drop(ref));
    const opacity=isDragging ? 0 : 1 
    const {todos,id,projectId,done}=todoList
    
    const listCardWrrapperStyle=classnames({
        "shadow-xl mr-1 relative left--10  " :true,
    })
    const listCardStyle=classnames({
        "bg-white  w-full rounded-lg text-left shadow-st border border-gray-500" :true,
        "opacity-80":done,
        "opacity-1":done
    })
    return (
        <div  ref={ref} 
        style={{
            width:LIST_WIDTH+2,
            opacity,
            animation:`slide_in .2s ${index/18}s cubic-bezier(0.4, 0, 0.2, 1)`,
        }} 
        className={listCardWrrapperStyle}
        data-handler-id={handlerId} 
        >
            <div className={listCardStyle}  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}}> 
                <div className="w-full flex flex-col ">
                     <TodoListHeader todoList={todoList}   />
                     <TodoListTodos todoListId={id} todos={todos} projectId={projectId} />
                </div>
            </div>
        </div>
    )

}

export default TodosList
