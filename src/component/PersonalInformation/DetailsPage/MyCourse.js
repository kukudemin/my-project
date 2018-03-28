/*我的课程*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./MyCourse.less"
export default class MyCourse extends React.Component{


    render(){
        return<div>
            <div className="MyCourse-header">
                <Link to={`/Profile`}>
                     <span className="MyCourse-img">
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                </span>
                </Link>
                <h3 className="MyCourse-title">我的课程</h3>
            </div>
        </div>
        
    }
}
