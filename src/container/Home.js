import React from "react"
import Tab from "../component/Tab"
import Banner from "../component/Banner"
import NavList from "../component/NavList"
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import "./Home.less"
import {queryBanner,getStar} from "../api/home";
import action from "../store/action";


class Home extends React.Component{

    constructor(){
        super();
        this.state={
            bannerData:{},
            navData:[],
        }
    }

    async componentWillMount(){
        let result=await queryBanner();
        this.setState({
            bannerData:result
        });
        let navData=await getStar();
        this.setState({
            navData
        });

        let {homeData,getHomeList}=this.props;
        if (homeData&&homeData.length===0) {
            this.props.getHomeList()
        }
    }
    render(){
        let {homeData}=this.props;
        let {navData}=this.state;

        return <div>
            <section className="navContainer">
                <div className="header">
                    <span><img src={require("../common/image/加号.png")} alt=""/></span>
                    <span>烘焙帮</span>
                    <Link to="/information"><img src={require("../common/image/闹铃.png")} alt=""/></Link>
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
                    <div className="star-BG">
                        <div className="starTitle">
                            <p></p>
                            <h3>明星达人</h3>
                            <p></p>
                        </div>
                        <div className="starList">
                            <ul>
                                {
                                    navData.map((item,index)=>{
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
                </div>
                <div className="HomeList">
                    {
                        homeData.map((item,index)=>{
                            return <Link to={`/cookDetail?id=${item.id}&dishNum=${1}`} key={index}>
                                <div  className="list-Item" >
                                    <div className="list-Img"><img src={item.allDish[index].img} alt=""/></div>
                                    <div className="list-icon">
                                        <div className="icon-top"><img src={item.icon} alt=""/></div>
                                        <div className="icon-bottom"><img src={require("../common/image/达人.png")} alt=""/>{item.author}</div>
                                    </div>
                                    <div className="list-text">
                                        <h2>{item.allDish[index].title}</h2>
                                        <p>{item.allDish[index].introduce}</p>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </section>
            <section className="footerContainer">
                <Tab/>
            </section>
        </div>
    }
}
export default connect((state)=>({...state.home}),action.home)(Home)