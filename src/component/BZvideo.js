import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./BZvideo.less"
class BZvideo extends React.Component{
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
            <div className="video-BZ">
                <h2>帮主阿涛教烘焙</h2>
                <div className="weixin">
                    <p>我是帮主阿涛，80后乐天派，热爱烘焙和健身，经常登山和马拉松，喜欢一切挑战自我的事物。你若留言，我必知无不言，言无不尽！</p>
                    <div>
                        <p>关注烘焙帮官方公众号：hongbeibang</p>
                        <p>帮主阿涛，每天视频教大家一个新烘焙！</p>
                    </div>
                </div>
                <p>出自：#帮主阿涛</p>
            </div>
            <div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手1.jpg")} alt=""/>
                        <h3>帮主阿涛教你做“金字塔蛋糕”</h3>
                        <p>据说，烤面包是由公元前的古埃及人发明的，而后这项技艺传入欧洲，又诞生了蛋糕。
                            像古埃及这样伟大文明，连金字塔都能造出来，发明烤面包也就不足为奇了。也许是为了向伟大文明致敬，金字塔蛋糕成了一款著名的甜点。
                            如果你已经对千篇一律的蛋糕感到厌倦了，不如试试金字塔蛋糕，浓郁的巧克力香味，一定会让你欲罢不能的！</p>
                    </a>
                </div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手1.jpg")} alt=""/>
                        <h3>帮主阿涛教你做“金字塔蛋糕”</h3>
                        <p>据说，烤面包是由公元前的古埃及人发明的，而后这项技艺传入欧洲，又诞生了蛋糕。
                            像古埃及这样伟大文明，连金字塔都能造出来，发明烤面包也就不足为奇了。也许是为了向伟大文明致敬，金字塔蛋糕成了一款著名的甜点。
                            如果你已经对千篇一律的蛋糕感到厌倦了，不如试试金字塔蛋糕，浓郁的巧克力香味，一定会让你欲罢不能的！</p>
                    </a>
                </div>
                <div className="todo">
                    <a href="###">
                        <img src={require("../common/image/新手1.jpg")} alt=""/>
                        <h3>帮主阿涛教你做“金字塔蛋糕”</h3>
                        <p>据说，烤面包是由公元前的古埃及人发明的，而后这项技艺传入欧洲，又诞生了蛋糕。
                            像古埃及这样伟大文明，连金字塔都能造出来，发明烤面包也就不足为奇了。也许是为了向伟大文明致敬，金字塔蛋糕成了一款著名的甜点。
                            如果你已经对千篇一律的蛋糕感到厌倦了，不如试试金字塔蛋糕，浓郁的巧克力香味，一定会让你欲罢不能的！</p>
                    </a>
                </div>
            </div>
        </div>
    }
}
export default withRouter(connect()(BZvideo))