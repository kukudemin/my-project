/*达人申请*/
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./ApplyForPerson.less";
import Profile from "../../../container/Profile";

class ApplyForPerson extends React.Component {


    render() {
        return <div>
            <div className="ApplyForPerson-header">
                <Link to={`/Profile`}>
                     <span className="ApplyForPerson-img">
                    <img
                         src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
                         alt=""/>
                </span>
                </Link>
                <h3 className="ApplyForPerson-title">烘焙帮</h3>
            </div>
        </div>

    }
}

export default ApplyForPerson;
