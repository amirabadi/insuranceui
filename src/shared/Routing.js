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

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Home /></Route>
                <Route path='/home' exact><Home /></Route>
                <Route path="/LoginPage" exact><Login/></Route>
                <Route path='/about' exact><About /></Route>
                <Route path='/Person' exact><Person/></Route>
                <Route path='/product/:id' exact><Product /></Route>
                <Route path='/EPayBack' exact><EPayBack /></Route>
                <Route path='/auth' exact><NotFound /></Route>
                <Route path='*' exact><NotFound /></Route>
            </Switch>
        </Router>
    )
}

export default Routing;