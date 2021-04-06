import React from 'react'
import Icon from '../common/Icon'
import { eventsService} from '../../rxjs/ModalService';

const SlideOverSideBarTriggerButton = () => {

    const trigger=e=>{
        eventsService.sendEvent('REVEAL_SLIDE_OVER_SIDE_BAR',true);
    }

    return (
        <button onClick={trigger}
         className=" absolute top-0 left  sm:hidden z-10 group w-full p-2 flex flex-row justify-start items-end " > 
            <Icon 
              name={"menu"} 
              gorupHover={true}  
              color={"text-blue"} 
              hoverColor={"text-blue"} 
            />
       </button>
    )
}

export default SlideOverSideBarTriggerButton
