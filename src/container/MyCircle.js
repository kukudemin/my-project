import React from "react"
import {connect} from "react-redux"
import {NavLink,Link,Route,Switch} from "react-router-dom"
import NewWorks from "./myCircle/NewWorks"
import MasterList from "./myCircle/MasterList"
import AttentionList from "./myCircle/AttentionList"
import Tab from "../component/Tab"
import "./MyCircle.less"
import {getNew} from "../api/circle"

class myCircle extends React.Component{
    constructor(){
        super();
        this.state={
            allNewList:[],
        }
    }
    async componentWillMount(){
        let dataNew =  await getNew();
        this.setState({
            allNewList:dataNew
        });
        //console.log(dataNew);
    }
    render(){
        let {allNewList}=this.state;
        return (
            <section className='myCircle'>

                <section className='myCircleNav'>
                    <div className='nav'>
                        <NavLink to='/circle/attention' activeClassName='activeMy'>关注</NavLink>
                        <NavLink to='/circle' exact activeClassName='activeMy' >最新</NavLink>
                        <NavLink to='/circle/Master' activeClassName='activeMy'>达人</NavLink>
                    </div>
                    <div className="header">
                        <i className='left'><img src={require("../common/image/加号.png")} alt=""/></i>
                        <i className='right'><img src={require("../common/image/闹铃.png")} alt=""/></i>
                    </div>
                </section>

                <section className='CircleList'>
                    {/* 通过switch 切换二级路由 */}
                    <Switch>
                        <Route from="/circle" exact  component={()=>{
                            return <NewWorks data={ allNewList}/>
                        }}/>
                        <Route path="/circle/attention" component={AttentionList}/>
                        <Route path="/circle/master" component={MasterList}/>
                    </Switch>
                </section>

                <section className='footer'>
                    <Tab/>
                </section>
            </section>
        )
    }
}
export default connect()(myCircle)

