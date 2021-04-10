import React,{useState} from 'react'
import Icon from '../common/Icon'
import {Link,useLocation} from "react-router-dom";


const SIDE_BAR_WIDTH=150
const SideBar = () => {
    let location = useLocation();
    const [sidebarWidth, setsidebarWidth] = useState(SIDE_BAR_WIDTH)
    const [expanded, setexpanded] = useState(true)

    const expandSideBar =e=>{
        const NEW_WIDTH= expanded ? 50 :SIDE_BAR_WIDTH 
        setsidebarWidth(NEW_WIDTH)
        setexpanded(!expanded)
    }

 
    const dispatchLogOut =e=>{
        console.log('logout')
    }


    
    const cond =sidebarWidth>=SIDE_BAR_WIDTH-10
    const LinkStye="w-full mb-1 group  flex flex-row  items-center  px-3 py-2  hover:bg-blue-200 hover:bg-opacity-30  "+(!cond?"justify-center " :"justiify-start ")
   
   
    const _Link=({title,route,icon})=>{
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
                {
                    cond
                    ?<p 
                    className={" text-xs ml-1   animate-fade_in "+(location.pathname===route?"text-blue-300":"text-white ")}>{title}</p>
                    :null
                }
                
        </Link>
      </li>
    }


    return (
        <div 
        style={{
            width:sidebarWidth,
            minWidth:sidebarWidth,
            maxWidth:sidebarWidth,
            transition:"min-width .3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}  
        className="h-full  bg-gray-700 hidden  sm:block  " 
        >
            <div className={"h-full flex-auto flex flex-col   pt-5  justify-between " }>
                     <nav>
                          <ul>
                             <_Link  title="Projects" icon="collection" route="/projects" id="PROJECTS"/>
                             <_Link  title="Stats" icon="chart" route="/stats"  id="STATS"/>
                             <_Link  title="Account" icon="account" route="/account" id="ACCOUNT"   />
                          </ul>
                     </nav>
                  
                     <div>
                        <button  onClick={dispatchLogOut}   tag={Link}    className={LinkStye} >
                                <Icon  name={"logout"}  size="h-4 w-4"  gorupHover={true}   color={ true?" text-blue-500" :"text-white" }  hoverColor={"text-grey-100"} />
                                {cond ?<p className={"text-white  text-xs ml-1   animate-fade_in "}>LogOut</p> :null }
                        </button>
                        <button onClick={expandSideBar} className="group w-full p-2 flex flex-row justify-end items-end border-gray-200 border-t " > 
                                 <Icon 
                                 name={expanded?"arrow_left_single":"arrow_right_single"} 
                                 gorupHover={true}  
                                 color={"text-white"} 
                                 hoverColor={"text-white"} 
                              />
                        </button>
                     </div>
            </div>
        </div>

    )
}

export default SideBar
