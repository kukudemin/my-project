/*浏览记录*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./BrowseRecords.less"
class BrowseRecords extends React.Component{


    render(){
        return <div>
            <div className="BrowseRecords-header">
                <Link to={`/Profile`}>
                     <span  className="BrowseRecords-img">
                    <img
                         src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
                         alt=""/>
                </span>
                </Link>
                <h3 className="BrowseRecords-title">浏览记录</h3>
            </div>
        </div>
        
    }
}
export default BrowseRecords;
