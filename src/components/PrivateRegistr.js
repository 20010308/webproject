import React from 'react';
import {Route} from "react-router-dom"
import Profil from "./Profil";
import NotFound from "./NotFound";

const PrivateRegistr = (props) => {
    return localStorage.getItem("logit")  ?
        <Route {...props}/> :
        <Route component={NotFound}/>
};

export default PrivateRegistr;