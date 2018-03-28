import React from "react";
import ReactDom from "react-dom";
import {withRouter, Link} from 'react-router-dom';
import "./HeadPortraitList.less";
import ApplyForPerson from "./DetailsPage/ApplyForPerson";
import MyMedal from "./DetailsPage/MyMedal";
import MyCourse from "./DetailsPage/MyCourse";
import SignInEveryDay from "./DetailsPage/SignInEveryDay";

class HeadPortraitList extends React.Component {


    render() {
        return <div>

                <ul className="HeadPortrait-list">
                    <Link to={`/MyMedal`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">勋章库</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>
                    <Link to={`/WonderfulActivities`}>
                        <li className="HeadPortrait-li" >
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">精彩活动</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>

                    <Link to={`/SignInEveryDay`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">每日签到</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>

                    <Link to={`/MyCourse`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">我的课程</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>




                </ul>
                <ul className="HeadPortrait-list">
                    <Link to={`BrowseRecords`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">浏览记录</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>
                    <Link to={`/ApplyForPerson`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">达人申请</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>
                    <Link to={`ExchangeTribute`}>
                        <li className="HeadPortrait-li">
                            <img className="HeadPortrait-img"
                                 src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48"
                                 alt=""/>
                            <span className="HeadPortrait-sp">帮贡兑换</span>
                            <img className="HeadPortrait-i" src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46"
                                 alt=""/>
                        </li>
                    </Link>
                </ul>

        </div>

    }
}

export default HeadPortraitList;
