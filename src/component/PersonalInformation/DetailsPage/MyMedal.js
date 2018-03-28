
/*我的勋章*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./MyMedal.less"
export default class MyMedal extends React.Component{


    render(){
        return<div>
            <div className="MyMedal-header">
                <Link to={`/Profile`}>
                     <span className="MyMedal-img">
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                </span>
                </Link>
                <h3 className="MyMedal-title">我的勋章</h3>
            </div>
        </div>
        
    }
}
