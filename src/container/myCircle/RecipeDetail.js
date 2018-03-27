import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter,Link,NavLink,Route,Switch} from "react-router-dom"
import Recipe from "../../component/recipe/Recipe"
import  DetailTab from "../../component/recipe/DetailTab"
import "./RecipeDetail.less"
import RecomendItem from "../../component/recipe/RecomendItem"

import NewWorks from "./NewWorks";
import MasterList from "./MasterList";
import AttentionList from "./AttentionList";

class RecipeDetail extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='RecipeDetail'>
                <section className='detail-header'>
                    <span className='icon-fanhui'>
                        <img src={require('../../common/image/icon-fanhui.png')} alt=""/></span>

                    <span className='title'>作品</span>
                </section>

                <section className='detail-content'>
                    <Recipe list='detail'/>
                    <div className='nav'>
                        <NavLink to='/recipeDetail'  exact activeClassName='activeMy'>点赞 199</NavLink>
                        <NavLink to='/recipeDetail/comment' activeClassName='activeMy'>评论 23 </NavLink>
                    </div>
                    <div className='recAndComList'>
                        <Switch>
                            <Route from="/recipeDetail" exact  component={()=>{
                                return <div>
                                    <RecomendItem />
                                    <RecomendItem />
                                </div>
                            }}/>
                            <Route from="/recipeDetail/comment" exact  component={()=>{
                                return <div>
                                    <RecomendItem bottomList='comment'/>
                                    <RecomendItem bottomList='comment'/>
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