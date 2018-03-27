import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"
import myCircle from "./container/MyCircle";
import NewHand from "./component/NewHand";
import Home from "./container/Home";
import Register from "./container/Register";
import University from "./container/University";
<<<<<<< HEAD
import Pay from "./container/university/Pay";


=======
import Profile from "./container/Profile";
>>>>>>> e2e27595be58059f835955594611a2628b67edf1
import "./common/css/reset.min.css"
import "./common/css/public.less"
import Series from "./container/university/Series";
import CourseDetail from "./container/university/CourseDetail";


import CookDetail from "./container/myCircle/CookDetail";
import RecipeDetail from "./container/myCircle/RecipeDetail";






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
<<<<<<< HEAD
                <Route path='/pay' component={Pay}/>
                <Route path='/series' component={Series}/>
                <Route path='/courseDetail' component={CourseDetail}/>

                <Redirect to="/" />
=======
                <Route path='/profile' component={Profile}/>
                <Route path='/newHand' component={NewHand}/>
                <Redirect to="/"/>
>>>>>>> e2e27595be58059f835955594611a2628b67edf1
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

