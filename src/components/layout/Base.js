import React from 'react'
import SideBar from './SideBar'
import SlideOverSideBar from './SlideOverSideBar'
import SlideOverSideBarTriggerButton from './SlideOverSideBarTriggerButton'
import CreateProject from '../Projects/CreateProject'
import ProjectsDashBoard from '../Projects/ProjectsDashBoard'
import ProjectPanel from '../Projects/ProjectPanel'
import Account from '../Auth/Account'


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



const Base = () => {
    return (
        <Router>
             <div className="flex  flex-row   h-screen  flex-grow:1" >
                <SideBar />  
                <SlideOverSideBar />
                <SlideOverSideBarTriggerButton />
                 <Switch>
                   <Route exact path="/">
                        <div>
                            Home
                        </div>
                    </Route>
                    <Route path="/project/:id" component={ProjectPanel} />
                    <Route path="/projects" component={ProjectsDashBoard} />
                    <Route path="/stats">
                        <div>
                            stats
                        </div>
                    </Route>
                    <Route path="/account" component={Account} />
                </Switch>
                
                 <CreateProject />
             </div>
        </Router>
    )
}

export default Base