import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../views/Home/Home.views";
import NotFound from "../views/NotFound/NotFound.views";
import About from "../views/About/About.views";
import Login from "../views/LoginPage/LoginPage.views";
import Product from "../views/Product/Product.views";
import EPayBack from "../views/EPayBack/EPayBack.views";
import Person from "../views/Person/Person.views";
import BaseInfo from "../views/Baseinfo/Baseinfo.views";
import Organization from "../views/Organization/Organization.views";

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path='/api' exact><Home /></Route>
                <Route path='/api/home' exact><Home /></Route>
                <Route path="/api/LoginPage" exact><Login/></Route>
                <Route path='/api/about' exact><About /></Route>
                <Route path='/api/Person' exact><Person/></Route>
                <Route path='/api/BaseInfo' exact><BaseInfo/></Route>
                <Route path='/api/Organization' exact><Organization/></Route>
                <Route path='/api/product/:id' exact><Product /></Route>
                <Route path='/api/EPayBack' exact><EPayBack /></Route>
                <Route path='/api/auth' exact><NotFound /></Route>
                <Route path='*' exact><NotFound /></Route>
            </Switch>
        </Router>
    )
}

export default Routing;