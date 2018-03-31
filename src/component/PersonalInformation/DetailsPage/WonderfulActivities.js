/*精彩活动
* 愚人美食:Fools-gourmet
*
*
*
*
*
* */
import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./WonderfulActivities.less"
import {connect} from "react-redux"

class WonderfulActivities extends React.Component {


    render() {
        let {history}=this.props;
        return <div className="WonderfulActivitiesBox">
            <div className="WonderfulActivities-header">
                     <span className="WonderfulActivities-img" onClick={()=>{
                         history.goBack(1)
                     }}>
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
                         alt=""/>
                </span>
                <h3 className="WonderfulActivities-title">精彩活动</h3>
            </div>
            <div style={{width:"3.2rem",height:".44rem"}}>&npsp;</div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>食谱征集令│愚人美食人人爱！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">做愚人节美食，赢ACA高端背部热风烤箱哦！</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FsCV0QvHLmpk4LttVYN5tHwD7L7T?750X350&imageView2/1/w/700/h/350"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>“升级版”一起来分享（3.26~4.1）</span>
                    </div>
                    <div className="FoolsGourmetDescribe">全新升级新规则，分享得帮贡，一起来~~~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>烘焙之星│我的吃货朋友</span>
                    </div>
                    <div className="FoolsGourmetDescribe">嘟嘟嘟~~喂！？ 我最近找了家餐厅，走起？</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/Fo9-LVjRdzm7WzjcY_3tWzbUXCRv?1417X661&imageView2/1/w/750/h/375"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[结束] </span>
                        <span>超级幸运数│关注ACA，礼品送送送！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">快来参与活动，烤箱、厨师机、打蛋器、模具等超多奖品等你赢！~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>食谱征集令│愚人美食人人爱！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">做愚人节美食，赢ACA高端背部热风烤箱哦！</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FsCV0QvHLmpk4LttVYN5tHwD7L7T?750X350&imageView2/1/w/700/h/350"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>“升级版”一起来分享（3.26~4.1）</span>
                    </div>
                    <div className="FoolsGourmetDescribe">全新升级新规则，分享得帮贡，一起来~~~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>烘焙之星│我的吃货朋友</span>
                    </div>
                    <div className="FoolsGourmetDescribe">嘟嘟嘟~~喂！？ 我最近找了家餐厅，走起？</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/Fo9-LVjRdzm7WzjcY_3tWzbUXCRv?1417X661&imageView2/1/w/750/h/375"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[结束] </span>
                        <span>超级幸运数│关注ACA，礼品送送送！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">快来参与活动，烤箱、厨师机、打蛋器、模具等超多奖品等你赢！~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>食谱征集令│愚人美食人人爱！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">做愚人节美食，赢ACA高端背部热风烤箱哦！</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FsCV0QvHLmpk4LttVYN5tHwD7L7T?750X350&imageView2/1/w/700/h/350"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>“升级版”一起来分享（3.26~4.1）</span>
                    </div>
                    <div className="FoolsGourmetDescribe">全新升级新规则，分享得帮贡，一起来~~~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>烘焙之星│我的吃货朋友</span>
                    </div>
                    <div className="FoolsGourmetDescribe">嘟嘟嘟~~喂！？ 我最近找了家餐厅，走起？</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/Fo9-LVjRdzm7WzjcY_3tWzbUXCRv?1417X661&imageView2/1/w/750/h/375"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[结束] </span>
                        <span>超级幸运数│关注ACA，礼品送送送！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">快来参与活动，烤箱、厨师机、打蛋器、模具等超多奖品等你赢！~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>食谱征集令│愚人美食人人爱！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">做愚人节美食，赢ACA高端背部热风烤箱哦！</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FsCV0QvHLmpk4LttVYN5tHwD7L7T?750X350&imageView2/1/w/700/h/350"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>“升级版”一起来分享（3.26~4.1）</span>
                    </div>
                    <div className="FoolsGourmetDescribe">全新升级新规则，分享得帮贡，一起来~~~</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/FnZz_rsOb-Mb0OCp7AUOZka9cThv?690X350&amp;imageView2/1/w/690/h/345"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[最新] </span>
                        <span>烘焙之星│我的吃货朋友</span>
                    </div>
                    <div className="FoolsGourmetDescribe">嘟嘟嘟~~喂！？ 我最近找了家餐厅，走起？</div>
                </a>
            </div>
            <div className="WonderfulActivities-content">
                <a className="Fools-gourmet" href="/activity/12343807">
                    <div className="FoolsGourmet-img">
                        <img
                            src="https://image.hongbeibang.com/Fo9-LVjRdzm7WzjcY_3tWzbUXCRv?1417X661&imageView2/1/w/750/h/375"/>
                    </div>
                    <div className="FoolsGourmet-date">04-01 23:59 截止</div>
                    <div className="FoolsGourmetRight">
                        <span>[结束] </span>
                        <span>超级幸运数│关注ACA，礼品送送送！</span>
                    </div>
                    <div className="FoolsGourmetDescribe">快来参与活动，烤箱、厨师机、打蛋器、模具等超多奖品等你赢！~</div>
                </a>
            </div>


        </div>

    }
}

export default withRouter(connect()(WonderfulActivities))
