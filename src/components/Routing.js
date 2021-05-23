import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Students from "../Students";
import Trello from "./Trello";
import Lifecycle from "./Lifecycle";
import Hooks from "./Hooks";
import Employee from "./Employee";
import NavBar from "./NavBar";
import Posts from "./Posts";
import Postview from "./Postview";
import UserView from "./UserView";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
    return (

        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Employee} />
                <Route path="/students" exact component={Students} />
                <Route path="/lifecycle" exact component={Lifecycle}/>
                <Route path="/trello" exact component={Trello}/>
                {/*<Route path="/hooks" exact component={Hooks} />*/}
                <PrivateRoute path="/hooks" component={Hooks}/>
                <PrivateRoute path="/posts" exact component={Posts}/>
                //dinamik routing
                <Route path="/posts/:id" exact component={Postview}/>
                <Route path="/users/:id" exact component={UserView}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;