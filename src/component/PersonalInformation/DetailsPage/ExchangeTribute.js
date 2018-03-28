/*帮贡兑换*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./ExchangeTribute.less"
class ExchangeTribute extends React.Component{


    render(){
        return <div>
            <div className="ExchangeTribute-header">
                <Link to={`/Profile`}>
                     <span  className="ExchangeTribute-img">
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
                        alt=""/>
                </span>
                </Link>
                <h3 className="ExchangeTribute-title">帮贡兑换</h3>
            </div>
        </div>
        
    }
}
export default ExchangeTribute;
