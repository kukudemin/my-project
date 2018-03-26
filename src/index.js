import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"
import myCircle from "./container/MyCircle";
import Home from "./container/Home";


import "./common/css/reset.min.css"
import "./common/css/public.less"




ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/circle' component={myCircle}/>
                <Redirect to="/"/>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

