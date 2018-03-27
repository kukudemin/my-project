import React from "react";
import ReactDom from "react-dom";
import "./Profile.less"
import HeadPortrait from "../component/PersonalInformation/HeadPortrait";
import Tab from "../component/Tab"
import HeadPortraitBoy from "../component/PersonalInformation/HeadPortraitBoy";
import HeadPortraitList from "../component/PersonalInformation/HeadPortraitList";

class Profile extends React.Component {


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
