import React,{useRef}  from 'react'

import TodoItemTodos from './TodoItemTodos'
import TodoListHeader from './TodoListHeader'
import {useDrag,useDrop} from 'react-dnd'
import {ItemTypes} from '../../../utils/ItemTypes'
const LIST_WIDTH=200


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
    const {todos,title,progress}=todoList
    return (
        <div 
        ref={ref}
        style={{width:LIST_WIDTH+2,opacity}}
        className="shadow-xl mr-1"
        data-handler-id={handlerId}
         >
            <div className='bg-white rounded-lg text-left shadow-st border border-gray-500 inline-flex '  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}}> 
                <div className="flex flex-col ">
                     <TodoListHeader progress={progress} title={title} />
                     <TodoItemTodos todos={todos} />
                </div>
            </div>
        </div>
    )

}

export default TodosList
