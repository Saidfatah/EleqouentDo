import React from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import CreateProject from '../Projects/CreateProject'
import RemoveProjectModal from '../Projects/RemoveProjectModal'
import FinishProjectModal from '../Projects/FinishProjectModal'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



const Base = () => {
    return (
        <Router>

             <div className="flex relative  flex-row w-full h-screen  flex-grow: 1" >
                 <SideBar />
                 
                 <Switch>
                   <Route exact path="/">
                        <div>
                            Home
                        </div>
                    </Route>
                    <Route path="/project/:id">
                        <Dashboard/> 
                    </Route>
                   
                    <Route path="/projects">
                        <div>
                            projects
                        </div>
                    </Route>
                    <Route path="/stats">
                        <div>
                            stats
                        </div>
                    </Route>
                    <Route path="/account">
                        <div>
                            account
                        </div>
                    </Route>
                </Switch>
                
                 <CreateProject />
                 <RemoveProjectModal />
                 <FinishProjectModal />
             </div>
        </Router>
    )
}

export default Base