/*精彩活动*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./WonderfulActivities.less"
class WonderfulActivities extends React.Component{


    render(){
        return<div>
            <div className="WonderfulActivities-header">
                <Link to={`/Profile`}>
                     <span className="WonderfulActivities-img">
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                </span>
                </Link>
                <h3 className="WonderfulActivities-title">精彩活动</h3>
            </div>
        </div>
        
    }
}
export default WonderfulActivities;
