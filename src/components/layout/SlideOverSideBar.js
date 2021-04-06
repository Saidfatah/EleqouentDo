import React,{useEffect,useState}  from 'react'
import Icon from '../common/Icon'
import {Link,useLocation} from "react-router-dom";
import { eventsService} from '../../rxjs/ModalService';

const SIDE_BAR_WIDTH=150
const SlideOverSideBar = () => {
    let location = useLocation();
    const [left, setleft] = useState(-SIDE_BAR_WIDTH)

    useEffect(() => {
        let subscription = eventsService.getEventNotification().subscribe((eventNotification) => 
        {
            if(eventNotification && eventNotification.title==='REVEAL_SLIDE_OVER_SIDE_BAR')
            {
                setleft(0)
            }
        });
      
        return ()=>{ subscription.unsubscribe()}
    }, [])
    
    const _Link=({title,route,icon})=>{
        const LinkStye="w-full mb-1 group  flex flex-row  items-center  px-3 py-2  hover:bg-blue-200 hover:bg-opacity-30 justiify-start "

        return  <li >
        <Link 
        className={LinkStye} 
        to={route}
        >
                <Icon 
                name={icon} 
                size="h-4 w-4" 
                gorupHover={true}  
                color={ true?" text-blue-500" :"text-white" } 
                hoverColor={"text-grey-100"} 
                />
                <p   className={" text-xs ml-1   animate-fade_in "+(location.pathname===route?"text-blue-300":"text-white ")}>{title}</p>
                
        </Link>
      </li>
    }

    
    const OverlayShadow=()=>{
        const overlaySTyle="w-full h-screen absolute top-0 left-0 z-20 bg-gray-900 bg-opacity-30 animate-fade_in_fast"
        return <div 
        style={{
            display:left>=0?"block":"none"
        }}
        onClick={e=>{
           setleft(-SIDE_BAR_WIDTH)
        }}
       className={overlaySTyle} />
    }
   
    return (
        <div>
            <OverlayShadow />

            <div 
             style={{
                 width:SIDE_BAR_WIDTH,
                 left,
                 transition:"all .3s cubic-bezier(0.4, 0, 0.2, 1)"
             }}  
             className="h-full absolute top-0  z-50 bg-gray-700 sm:hidden  " 
             >
                 <div className={"h-full flex-auto flex flex-col   pt-5  justify-between " }> 
                          <nav>
                               <ul>
                                  <_Link  title="Projects" icon="collection" route="/projects" id="PROJECTS"/>
                                  <_Link  title="Stats" icon="chart" route="/stats"  id="STATS"/>
                                  <_Link  title="Account" icon="account" route="/account" id="ACCOUNT"   />
                               </ul>
                          </nav>
                 </div>
             </div>
        </div>
    )
}

export default SlideOverSideBar
