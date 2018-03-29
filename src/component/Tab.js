import React from "react"
import {connect} from "react-redux"
import {withRouter, NavLink} from 'react-router-dom';
import "./Tab.less"
class Tab extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <footer className="footerBox">
            <ul>
                <li>
                    <NavLink to="/" exact>
                        <i className="iconfont icon-shuben"></i>
                        学烘焙
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/circle">
                        <i className="iconfont icon-tiantianquan"></i>
                        烘焙圈
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/university">
                        <i className="iconfont icon-dianshi"></i>
                        大学
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="iconfont icon-home"></i>
                        小窝
                    </NavLink>
                </li>
            </ul>
        </footer>;
    }
}
export default withRouter(connect()(Tab))