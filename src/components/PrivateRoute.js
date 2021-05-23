import React from 'react';
import {Route} from "react-router-dom"
import Hooks from "./Hooks";
import NotFound from "./NotFound";
const PrivateRoute = (props) => {
    return  localStorage.getItem("username") === "umid" ?
        <Route {...props}/> :
        <Route component={NotFound}/>
};

export default PrivateRoute;