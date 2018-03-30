import React from "react";
import {connect} from "react-redux";
import action from "../store/action/index";
import {Link} from  "react-router-dom"
import "./Search.less"


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val:' ',
            searchList:[],
        }
    }
    componentWillMount(){
        this.setState({
            searchList:JSON.parse(window.localStorage.getItem("searchHistory"))||[],
        })
    }
    render(){
        let {val,searchList}=this.state;
        return (

                <div className="search">
                    <section className="nav">
                    <span className="" onClick={()=>{
                        this.props.history.goBack();
                    }}>返回</span>
                        <input className="inp" type="text" ref="inp" onBlur={()=>{
                            this.setState({
                                val:this.refs.inp.value,
                            })
                        }}/>
                        <Link className="" to={`/search/detail/${val}`} onClick={
                                this.saveHistory
                        }>搜索</Link>
                    </section>
                    <section className="row">
                        <p>热门搜索</p>
                        <ul onClick={(e)=>{
                            this.props.history.push(`/search/detail/${e.target.innerText}`);
                        }}>
                            <li>蛋挞</li>
                            <li >蛋糕</li>
                            <li >面包</li>
                            <li >披萨</li>
                            <li >纸杯蛋糕</li>
                            <li >曲奇</li>
                            <li >牛轧糖</li>
                        </ul>
                    </section>
                    <section className="row">
                        <div className="row1">
                            <p>最近搜索</p>
                            <p onClick={()=>{
                                window.localStorage.removeItem("searchHistory");
                                this.setState({
                                    searchList:[],
                                })
                            }}>清除历史</p>
                        </div>
                        <div >
                            {
                                searchList.map((item,index)=>{
                                    return (<Link className="recent" key={index} to={`/search/detail/${item}`}>{item}</Link>)
                                })
                            }
                        </div>
                    </section>
                </div>
            )
    }
    saveHistory=()=>{
        if (!window.localStorage.getItem("searchHistory")) {
            window.localStorage.setItem("searchHistory",JSON.stringify([]));
        }
        let ary=window.localStorage.getItem("searchHistory");
       ary=JSON.parse(ary);
       if(this.state.val){
           let status=ary.every((item)=>{
               return  item!==this.state.val
           });
           if(status){
               ary.push(this.state.val);
               window.localStorage.setItem("searchHistory",JSON.stringify(ary));
           }
       }
    }
}
export default connect((store)=>({...store}),action)(Search);