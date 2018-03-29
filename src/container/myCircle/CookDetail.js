import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter,Link,NavLink,Route,Switch} from "react-router-dom"
import "./CookDetail.less"
import GerenInfo from "../../component/recipe/GerenInfo"
import DetailTab from "../../component/recipe/DetailTab"
import RecomendItem from "../../component/recipe/RecomendItem"
import {getOneNew,cookDetail,allMaster} from "../../api/circle";
import utils from "../../common/js/utils"

class CookDetail extends React.Component{
    constructor(){
        super();
        this.state={
            cookData:{}
        }
    }
    async componentWillMount(){
        let obj=utils.urlToObj(this.props.location.search);
        let result =await allMaster();
       let dataInfo =await utils.aryFind(result,obj.id);
        let resolute= await utils.aryFind(result,obj.id,obj['dishNum'],"allDish");
        this.setState({cookData:{...resolute,author:dataInfo.author,ico:dataInfo.ico}});
    }

    render(){
        let {history}=this.props;
        let {author,ico,num,title,img,introduce,ingredient=[],steps=[],remindPoint={"data":[]},tips,comment={"data":[]}}=this.state.cookData;

        return (
            <div className='cookDetail'>
                <section className='detail-headerc'>
                    <div className='cook-nav'>
                          <span className='icon-fanhui' onClick={(ev)=>{
                              history.goBack(1)
                          }}>
                        <img src={require('../../common/image/icon-fanhui.png')} alt=""/>
                          </span>
                        <span className='title'>{title}</span>
                        <span className='collect'>收藏</span>
                    </div>

                </section>
                <section className='cookInfo'>
                    <div className='coverimg'><img src={img} alt=""/>
                        </div>
                    <div className='cookContent'>
                        <p className='title'>{title}</p>
                         <GerenInfo author={author} ico={ico} />
                        <p className='coDetail-text'>
                            {introduce}
                        </p>
                        <div className='steps'>
                            <div className='inputNum'>
                               <div className='inputNum-con'>
                                   <span>分量</span>
                                   <div className='middle'>
                                       <span>-</span>
                                       <input type="number" className='input' value='5' onChange={()=>{}}/>
                                       <span>+</span>
                                   </div>
                                   <span>份</span>
                               </div>
                            </div>
                            {/* 材料 */}
                            <div className='cailiao'>
                                <h3>用料</h3>
                                {
                                    ingredient.map((item,ind)=>{
                                        for (let key in item){
                                            return (
                                                <p  className='hang' key={ind}>
                                                    <span className='left'>{key}</span>
                                                    <span className='right'>{item[key]}</span>
                                                </p>
                                            )
                                        }
                                    })
                                }
                            </div>

                            {
                                steps.map((item,index)=>{
                                    return  <div className='steps-item' key={index}>
                                        <h3>{item.step}</h3>
                                        <div><img  src={item.img} alt=""/></div>
                                        <p>
                                            <span>{item.explain}</span>
                                        </p>
                                    </div>
                                })
                            }
                        </div>


                    </div>
                    {/*  评论部分 */}

                    <div className='nav'>
                        <NavLink to='/cookDetail'  exact activeClassName='activeMy'>点赞 {remindPoint.count}</NavLink>
                        <NavLink to='/cookDetail/comment' activeClassName='activeMy'>评论 {comment.count} </NavLink>
                    </div>
                    <div className='recAndComList'>
                        <Switch>
                            <Route from="/cookDetail" exact  component={()=>{
                                return <div>
                                        { remindPoint.data.map((item,index)=>{
                                            return  <RecomendItem data={item} key={index}/>
                                        })}

                                </div>
                            }}/>
                            <Route from="/cookDetail/comment" exact  component={()=>{
                                return <div>
                                    { comment.data.map((item,index)=>{
                                        return  <RecomendItem bottomList='comment' data={item} key={index}/>
                                    })}

                                </div>
                            }}/>
                        </Switch>
                    </div>
                </section>

                <section className='cook-footer'>
                    <DetailTab countRed={remindPoint.count} right={comment.count}/>
                </section>
            </div>
        )
    }
}
export default withRouter(connect()(CookDetail))