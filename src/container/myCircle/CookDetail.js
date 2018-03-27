import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter,Link,NavLink,Route,Switch} from "react-router-dom"
import "./CookDetail.less"
import GerenInfo from "../../component/recipe/GerenInfo"
import DetailTab from "../../component/recipe/DetailTab"
import RecomendItem from "../../component/recipe/RecomendItem"

class CookDetail extends React.Component{
    constructor(){
        super();
    }

    render(){
        let {history}=this.props;
        return (
            <div className='cookDetail'>
                <section className='detail-headerc'>
                    <div className='cook-nav'>
                          <span className='icon-fanhui' onClick={(ev)=>{
                              history.goBack(1)
                          }}>
                        <img src={require('../../common/image/icon-fanhui.png')} alt=""/>
                          </span>
                        <span className='title'>戚风蛋糕...</span>
                        <span className='collect'>收藏</span>
                    </div>

                </section>
                <section className='cookInfo'>
                    <div className='coverimg'><img src="https://image.hongbeibang.com/FoNCLtScqyL1SVjWtcI14wf3_wFp?1440X1080&imageView2/1/w/750/h/562|watermark/1/image/aHR0cDovL2ltYWdlLmhvbmdiZWliYW5nLmNvbS9GaXZ3UkFMS3ZpVG9XM3V2SmxmSnZvV0UtNjh2/dissolve/50/gravity/SouthEast/dx/25/dy/25/ws/0.07457627118644067" alt=""/>
                        </div>
                    <div className='cookContent'>
                        <p className='title'>一直不喜欢奶油，这次使用了山药泥做夹馅</p>
                         <GerenInfo/>
                        <p className='text'>
                            方子作了改动，用了大麦若叶粉末做的蛋糕，色彩翠绿清新，在山药泥中加入了鲜红的草莓，酸甜可口颜值更高。春天到了，一款健康养生、绿色清新的蛋糕卷做起来
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
                            <div className='cailiao'>
                                <h3>用料</h3>
                                <p  className='hang'><span className='left'>玉米油</span><span className='right'>420克</span></p>
                                <p ><span className='left'>面粉</span><span className='right'>20克</span></p>
                            </div>
                             <div className='steps-item'>
                                 <h3>step1</h3>
                                 <div><img  src="https://image.hongbeibang.com/FqG2JBtUV7gVqbu_hpCxA1lg6t0W?1440X1080&imageView2/1/w/600/h/360|watermark/1/image/aHR0cDovL2ltYWdlLmhvbmdiZWliYW5nLmNvbS9GaXZ3UkFMS3ZpVG9XM3V2SmxmSnZvV0UtNjh2/dissolve/50/gravity/SouthEast/dx/25/dy/25/ws/0.09322033898305083" alt=""/></div>
                                 <p>
                                     <span>配料称好备用，玉米油和牛奶可以倒在一起。盆里要干净无水无油，小心分离蛋白和蛋黄。白砂糖分出15克加入蛋黄里，加入盐。</span>
                                 </p>
                             </div>
                            <div className='steps-item'>
                                <h3>step1</h3>
                                <div><img  src="https://image.hongbeibang.com/FqG2JBtUV7gVqbu_hpCxA1lg6t0W?1440X1080&imageView2/1/w/600/h/360|watermark/1/image/aHR0cDovL2ltYWdlLmhvbmdiZWliYW5nLmNvbS9GaXZ3UkFMS3ZpVG9XM3V2SmxmSnZvV0UtNjh2/dissolve/50/gravity/SouthEast/dx/25/dy/25/ws/0.09322033898305083" alt=""/></div>
                                <p>
                                    <span>配料称好备用，玉米油和牛奶可以倒在一起。盆里要干净无水无油，小心分离蛋白和蛋黄。白砂糖分出15克加入蛋黄里，加入盐。</span>
                                </p>
                            </div>
                        </div>


                    </div>
                    {/*  评论部分 */}

                    <div className='nav'>
                        <NavLink to='/cookDetail'  exact activeClassName='activeMy'>点赞 199</NavLink>
                        <NavLink to='/cookDetail/comment' activeClassName='activeMy'>评论 23 </NavLink>
                    </div>
                    <div className='recAndComList'>
                        <Switch>
                            <Route from="/cookDetail" exact  component={()=>{
                                return <div>
                                    <RecomendItem />
                                    <RecomendItem />
                                </div>
                            }}/>
                            <Route from="/cookDetail/comment" exact  component={()=>{
                                return <div>
                                    <RecomendItem bottomList='comment'/>
                                    <RecomendItem bottomList='comment'/>
                                </div>
                            }}/>
                        </Switch>
                    </div>
                </section>

                <section className='cook-footer'>
                    <DetailTab/>
                </section>
            </div>
        )
    }
}
export default withRouter(connect()(CookDetail))