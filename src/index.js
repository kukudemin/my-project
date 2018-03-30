import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"
import myCircle from "./container/MyCircle";
import NewHand from "./component/NewHand";
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register"
import University from "./container/University";
import Pay from "./container/university/Pay";
import Profile from "./container/Profile";

import BZvideo from "./component/BZvideo"
import "./common/css/reset.min.css"
import "./common/css/public.less"
import Series from "./container/university/Series";
import CourseDetail from "./container/university/CourseDetail";
import CookDetail from "./container/myCircle/CookDetail";
import RecipeDetail from "./container/myCircle/RecipeDetail";
import Information from "./component/Information";
import WonderfulActivities from "./component/PersonalInformation/DetailsPage/WonderfulActivities";
import ApplyForPerson from "./component/PersonalInformation/DetailsPage/ApplyForPerson";
import BrowseRecords from "./component/PersonalInformation/DetailsPage/BrowseRecords";
import ExchangeTribute from "./component/PersonalInformation/DetailsPage/ExchangeTribute";
import MyCourse from "./component/PersonalInformation/DetailsPage/MyCourse";
import MyMedal from "./component/PersonalInformation/DetailsPage/MyMedal";
import SignInEveryDay from "./component/PersonalInformation/DetailsPage/SignInEveryDay";


import Fu from "./container/university/Fu";

import Search from "./container/Search"
import Detail from "./container/Search/Detail"






ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/circle' component={myCircle}/>
                <Route path='/login' component={Login}/>
                <Route path='/cookDetail/:id?' component={CookDetail}/>
                <Route path='/recipeDetail/:id?' component={RecipeDetail}/>
                <Route path='/university' component={University}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/pay' component={Pay}/>
                <Route path='/series' component={Series}/>
                <Route path='/courseDetail' component={CourseDetail}/>
                <Route path='/newHand' component={NewHand}/>
                <Route path='/video' component={BZvideo}/>
                <Route path='/information' component={Information}/>
                <Route path='/wonderfulActivities' component={WonderfulActivities}/>
                <Route path='/applyForPerson' component={ApplyForPerson}/>
                <Route path='/browseRecords' component={BrowseRecords}/>
                <Route path='/exchangeTribute' component={ExchangeTribute}/>
                <Route path="/register" component={Register}/>
                <Route path="/myCourse" component={MyCourse}/>
                <Route path="/myMedal" component={MyMedal}/>
                <Route path="/signInEveryDay" component={SignInEveryDay}/>

                <Route path="/fu" component={Fu}/>

                <Route path="/search" exact component={Search}/>
                <Route path="/search/detail/:key" component={Detail}/>



                <Redirect to="/"/>

            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

