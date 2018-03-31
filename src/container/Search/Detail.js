import React from "react";
import {connect} from "react-redux";
import action from "../../store/action/index";
import {Link} from  "react-router-dom"
import "./detail.less"
import {getResolute} from "../../api/search"

class Detail extends React.Component{
    constructor(props){
        super(props);
        let {match:{params:{key}}}=this.props;
        this.state={
            active:1,
            data:[],
            val:key,
            sel:"食谱",
        }
    }
async componentWillMount(){
    let {match:{params:{key}}}=this.props;
   let a=await getResolute("dish",key);
        this.setState({
            data:a,
        });
}
    render(){
        let  {active,data,val,sel}=this.state;
        return (
            <div className="detail-search">
                <section className="nav">
                    <span className="" onClick={()=>{
                        this.props.history.goBack();
                    }}>返回</span>
                    <input className="inp" type="text" ref="inp" value={val} onChange={async (e)=>{
                        let value=e.target.value,data;
                        console.dir(e.target.value);
                        this.setState({
                            val:value,
                        });
                        if(sel==="食谱"){
                         data= await  getResolute("dish",value);
                        }
                        if(sel==="问答"){
                          data=await  getResolute("que",value);
                        }
                        console.log(data);
                        this.setState({
                            data,
                        });
                    }}/>
                    <select name="search" id="" ref="select"  onChange={async (e)=>{
                        let val1=e.target.value,data;
                        this.setState({
                            sel:val1,
                        });
                        if(val1==="食谱"){
                           data=await  getResolute("dish",val);
                        }
                        if(val1==="问答"){
                           data= await  getResolute("que",val)
                        }
                        console.log(data);
                        this.setState({
                            data,
                        });
                    }}>
                        <option value="食谱">食谱</option>
                        <option value="达人">达人</option>
                        <option value="问答">问答</option>
                    </select>
                </section>
                <section>
                    <nav className="nav" onClick={(e)=>{
                        let num=Number(e.target.dataset.type);
                        if(num){
                            this.setState({active:num});
                        }
                        switch (num) {
                            case 1:

                                break;
                            case 2:

                                break;
                            case 3:

                                break;
                        }

                    }}>
                        <div className={`${active===1?"active":""}`} data-type="1">综合排序</div>
                        <div  className={`${active===2?"active":""}`} data-type="2">做过最多</div>
                        <div  className={`${active===3?"active":""}`} data-type="3">达人食谱</div>
                    </nav>
                        {sel==="食谱"?data.map((item,index)=>{
                            return item.allDish?item.allDish.map((itm,inx)=>{
                                return (
                                    <div key={inx} className="answer">
                                        <div className="photo">
                                            <img src={itm.img} alt=""/>
                                        </div>
                                        <div className="words">
                                            <h2>{itm.title}</h2>
                                            <p>{itm.introduce}</p>
                                            <p>{item.author}</p>
                                            <p>
                                                <span>{itm.Views}收藏</span>
                                                <span>{itm.like}人做过</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }):null;
                        }):sel==="问答"?data.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <h2>{item.question}</h2>
                                    <p>{item.answer?`${item.answer.length}个人回答`:"无人回答"}</p>
                                </div>
                            )
                        }):null}
                </section>
            </div>)
    }
}
export default connect((store)=>({...store}),action)(Detail);
