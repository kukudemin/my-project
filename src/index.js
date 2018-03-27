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
<<<<<<< HEAD
import CookDetail from "./container/myCircle/CookDetail";
import RecipeDetail from "./container/myCircle/RecipeDetail";
=======
import NewHand from "./component/NewHand";
>>>>>>> 97d0af36cdb111a295749a43c94d2f5610c0e712


ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/circle' component={myCircle}/>
<<<<<<< HEAD
                <Route path='/cookDetail' component={CookDetail}/>
                <Route path='/recipeDetail' component={RecipeDetail}/>
=======
>>>>>>> 97d0af36cdb111a295749a43c94d2f5610c0e712
                <Route path='/register' component={Register}/>
                <Route path='/university' component={University}/>
                <Route path='/newHand' component={NewHand}/>
                <Redirect to="/"/>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

