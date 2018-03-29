/*每日签到*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./SignInEveryDay.less"
export default class SignInEveryDay extends React.Component{


    render(){
        return<div>
            <div className="SignInEveryDay-header">
                <Link to={`/Profile`}>
                     <span className="SignInEveryDay-img">
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                </span>
                </Link>
                <h3 className="SignInEveryDay-title">每日签到</h3>
            </div>
        </div>
        
    }
}
