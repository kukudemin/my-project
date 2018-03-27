import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"
import myCircle from "./container/MyCircle";
import Home from "./container/Home";
import University from "./container/University";
import Pay from "./container/university/Pay";


import "./common/css/reset.min.css"
import "./common/css/public.less"
import Series from "./container/university/Series";
import CourseDetail from "./container/university/CourseDetail";




ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/circle' component={myCircle}/>
                <Route path='/university' component={University}/>
                <Route path='/pay' component={Pay}/>
                <Route path='/series' component={Series}/>
                <Route path='/courseDetail' component={CourseDetail}/>

                <Redirect to="/" />
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

