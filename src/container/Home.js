import React from "react"
import Tab from "../component/Tab"
import Banner from "../component/Banner"
import NavList from "../component/NavList"
import {connect} from 'react-redux';
import "./Home.less"
import {queryBanner} from "../api/home";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            bannerData:{}
        }
    }

    async componentWillMount(){
        let result=await queryBanner();
        this.setState({
            bannerData:result
        });
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
                <Banner data={this.state.bannerData.banner1} auto={2000}/>
                <div className="search">
                    <div>
                        <span><img src={require("../common/image/放大镜.png")} alt=""/></span>
                        <span>搜索食谱、材料、达人</span>
                    </div>
                </div>
                <nav>
                   <NavList data={this.state.bannerData.nav}/>
                </nav>
                <div className="superstar">
                    <div className="starTitle">
                        <p></p>
                        <h3>明星达人</h3>
                        <p></p>
                    </div>
                    <div className="starList">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="footerContainer">
                <Tab/>
            </section>
        </div>
    }
}
export default connect()(Home)