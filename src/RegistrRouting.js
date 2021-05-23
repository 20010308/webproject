import React from 'react';
import Regitr from "./components/Regitr";
import Login from "./components/Login"
import Profil from "./components/Profil"
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import PrivateRegistr from "./components/PrivateRegistr";


const RegistrRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Regitr}/>
                    <Route path="/login" exact component={Login}/>
                    <PrivateRegistr exact path="/profil" component={Profil}/>
                    <Route path="" component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default RegistrRouting;