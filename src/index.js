import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"
import myCircle from "./container/MyCircle";
import Home from "./container/Home";
import Register from "./container/Register";
import University from "./container/University";


import "./common/css/reset.min.css"
import "./common/css/public.less"

import CookDetail from "./container/myCircle/CookDetail";
import RecipeDetail from "./container/myCircle/RecipeDetail";

import NewHand from "./component/NewHand";



ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/circle' component={myCircle}/>

                <Route path='/cookDetail' component={CookDetail}/>
                <Route path='/recipeDetail' component={RecipeDetail}/>

                <Route path='/register' component={Register}/>
                <Route path='/university' component={University}/>
                <Route path='/newHand' component={NewHand}/>
                <Redirect to="/"/>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

