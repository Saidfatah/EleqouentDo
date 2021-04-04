import React,{useRef} from 'react'
import {useDrag,useDrop} from 'react-dnd'
import {ItemTypes} from '../../../utils/ItemTypes'



let dragIndex = null
let hoverIndex = null
const TodoListModalLink = ({todoList,index,moveCardList }) => {
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
            const hoverMiddleY = (hoverBoundingRect.top - hoverBoundingRect.bottom) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            
            // Get pixels to the left
            const hoverClientY = clientOffset.y - hoverBoundingRect.bottom;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

       
            // Dragging to rgiht
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging to left
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
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


    const {todos,title,progress}=todoList
    const opacity=isDragging ? 0 : 1 
    const PROGRESS= "("+(progress*100) +"% done)"
    
    drag(drop(ref));
    return (
        <button ref={ref} style={{opacity}} data-handler-id={handlerId}  className="flex flex-row items-center justify-start p-2 bg-white rounded-lg mb-1 shadow-st border border-gray-500 " >
            <h1 className="text-gray-500 font-bold "  >{title}</h1>
            <p className="text-green-500 text-sm " >{PROGRESS}</p>
        </button>
    )
}

export default TodoListModalLink
