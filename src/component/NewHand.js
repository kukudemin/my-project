import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./NewHand.less"
class NewHand extends React.Component{
    constructor(){
        super()
    }
    render(){
        let {history}=this.props;
        return <div>
            <div className="header">
                <span className="goBack" onClick={()=>{
                    history.goBack(1)
                }}><img src={require("../common/image/返回.png")} alt=""/></span>
                <span className="collection">收藏</span>
            </div>
            <div className="into">
                <div>新手入门</div>
                <div>
                    <p>跟着我们，从新手变成烘焙达人吧！</p>
                </div>
                <div>出自：#小七@烘焙帮</div>
            </div>
            <div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手1.jpg")} alt=""/>
                        <h3>新手必做</h3>
                        <p>新手必做</p>
                    </a>
                </div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手2.jpg")} alt=""/>
                        <h3>手法技巧</h3>
                        <p>手法技巧</p>
                    </a>
                </div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手3.jpg")} alt=""/>
                        <h3>烘焙基础</h3>
                        <p>烘焙基础</p>
                    </a>
                </div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手4.jpg")} alt=""/>
                        <h3>干货文章</h3>
                        <p>干货文章</p>
                    </a>
                </div>
            </div>
        </div>
    }
}
export default withRouter(connect()(NewHand))