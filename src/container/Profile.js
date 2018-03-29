import React from "react";
import ReactDom from "react-dom";
import "./Profile.less";
import {isLogin, info} from '../api/profile';
import HeadPortrait from "../component/PersonalInformation/HeadPortrait";
import Tab from "../component/Tab"
import HeadPortraitBoy from "../component/PersonalInformation/HeadPortraitBoy";
import HeadPortraitList from "../component/PersonalInformation/HeadPortraitList";

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {data: {}};
    }
    async componentWillMount() {
        let loginId = await isLogin();
        loginId = Number(loginId);
        if (isNaN(loginId) || loginId === 0) {
            //=>没登录,跳转到登录页面
            this.props.history.push('/login');
            return;
        }
        //=>已经登录就是获取个人信息
        let data = await info();
        this.setState({
            data
        });
    }
    render() {
        return <div>

           <div className="profileBox">
               <div className="profile-set">
                    <span>
                        <img
                            src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48"
                            alt=""/>
                    </span>
               </div>
               <div className="profile">
                   <div className="profile-pro"></div>
                   <HeadPortrait/>
               </div>
               <div>
                   <HeadPortraitBoy/>
               </div>
               <div className="profileList">
                   <HeadPortraitList/>
               </div>
               <div className="profileTab">
                   <Tab/>
               </div>
           </div>
        </div>

    }
}

export default Profile;
