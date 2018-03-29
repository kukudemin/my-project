import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter,Link,NavLink,Route,Switch} from "react-router-dom"
import Recipe from "../../component/recipe/Recipe"
import  DetailTab from "../../component/recipe/DetailTab"
import "./RecipeDetail.less"
import RecomendItem from "../../component/recipe/RecomendItem"
import {getNew,getOneNew} from "../../api/circle"

import NewWorks from "./NewWorks";
import MasterList from "./MasterList";
import AttentionList from "./AttentionList";


class RecipeDetail extends React.Component{
    constructor(){
        super();
        this.state={
            infoData:{

            }
        }
    }
    async componentWillMount(){
        console.log(this.props);
        let {match:{params:{id}}}=this.props;
        /* 根据id 获取数据 post 请求 */
        let result =await getOneNew(id);
        result=result.find((item)=>{
            return item["id"]==id;
        });
        result={...result,...result.allWorks[0]};
        this.setState({infoData:result});
        console.log(result);
    }
    render(){
        let {history}=this.props;
        let {remindPoint=[],comment=[]}=this.state.infoData;

        return (
            <div className='RecipeDetail'>
                <section className='detail-header'>
                    <div className='recipe-nav'>
                          <span className='icon-fanhui' onClick={(ev)=>{
                              history.goBack(1)
                          }}>
                        <img src={require('../../common/image/icon-fanhui.png')} alt=""/>
                          </span>
                        <span className='title'>作品</span>
                    </div>

                </section>

                <section className='detail-content'>
                    <button className='focus'>+ 关注</button>

                    <Recipe list='detail' item={this.state.infoData}/>

                    <div className='nav'>
                        <NavLink to='/recipeDetail'  exact  activeClassName='activeMy'>点赞 {remindPoint.count}</NavLink>
                        <NavLink to='/recipeDetail/comment' exact activeClassName='activeMy'>评论 {comment.count} </NavLink>
                    </div>
                    <div className='recAndComList'>
                        <Switch>
                            <Route from="/recipeDetail" exact  component={()=>{
                                return <div>
                                    {remindPoint.data.map((item,index)=>{
                                        return<RecomendItem  data={item} index={index} key={index}/>
                                    })

                                    }
                                </div>
                            }}/>
                            <Route from="/recipeDetail/comment" exact  component={()=>{
                                return <div>
                                        {
                                            comment.data.map((item,index)=>{
                                                return <RecomendItem bottomList='comment' key={index} data={item} index={index}/>
                                            })
                                        }

                                </div>
                            }}/>
                        </Switch>
                    </div>

                </section>



                <section className='detailFooter'>
                    <DetailTab/>
                </section>
            </div>
        )
    }
}
export default withRouter(connect()(RecipeDetail))