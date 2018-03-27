import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter,Link,NavLink,Route,Switch} from "react-router-dom"
import "./CookDetail.less"

class CookDetail extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className='cookDetail'>
                <section className='detail-header'>
                    <span className='icon-fanhui'>
                        <img src={require('../../common/image/icon-fanhui.png')} alt=""/></span>

                    <span className='title'>戚风蛋糕...</span>
                    <span className='collect'>收藏</span>
                </section>
            </div>
        )
    }
}
export default withRouter(connect()(CookDetail))