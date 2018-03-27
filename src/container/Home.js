import React from "react"
import Tab from "../component/Tab"
import Banner from "../component/Banner"
import NavList from "../component/NavList"
import {connect} from 'react-redux';
import "./Home.less"
import {queryBanner,getStar} from "../api/home";
class Home extends React.Component{

    constructor(){
        super();
        this.state={
            bannerData:{},
            data:[]
        }
    }

    async componentWillMount(){
        let result=await queryBanner();
        this.setState({
            bannerData:result
        });
        let data=await getStar();
        this.setState({
            data
        });
        console.log(data)
    }
    render(){
        let data=this.state.data;
        if (data.length === 0) {
            return null;
        }
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
                            {
                                data.map((item,index)=>{
                                    return <li key={index}>
                                        <div><img src={item.clientImage} alt=""/></div>
                                        <h4>{item.clientName}</h4>
                                        <p>{item.clientId}食谱</p>
                                    </li>
                                })
                            }
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