import React from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import CreateProject from '../Projects/CreateProject'
import RemoveProjectModal from '../Projects/RemoveProjectModal'
import FinishProjectModal from '../Projects/FinishProjectModal'
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
                 <RemoveProjectModal />
                 <FinishProjectModal />
             </div>
        </Router>
    )
}

export default Base