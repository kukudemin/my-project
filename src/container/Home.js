import React from "react"
import Tab from "../component/Tab"
import Banner from "../component/Banner"
import {connect} from 'react-redux';
import "./Home.less"
import {queryBanner} from "../api/home";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            bannerData:[]
        }
    }

    async componentWillMount(){
        let result=await queryBanner();
        this.setState({
            bannerData:result
        })
    }
    render(){
        return <div>
            <section className="navContainer">
                <div className="header">
                    <span><img src={require("../common/image/加号.png")} alt=""/></span>
                    <span>烘焙帮</span>
                    <span><img src={require("../common/image/闹铃.png")} alt=""/></span>
                </div>
            </section>
            <section className="container">
                <Banner data={this.state.bannerData} auto={2000}/>
            </section>
            <section className="footerContainer">
                <Tab/>
            </section>
        </div>
    }
}
export default connect()(Home)