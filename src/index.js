import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store"


ReactDOM.render(<Provider store={store}>
        <HashRouter>
            <Switch>
                <Route/>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

