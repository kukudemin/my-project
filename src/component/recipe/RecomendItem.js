import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./RecomendItem.less"

class RecomendItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className='commentItem'>
                <Link to='/otherInfo'>
                    <div className='infoHeader'>
                        <div className='infoLeft'>
                            <img src="https://image.hongbeibang.com/Fr_moz4Z7GkZTjZ-K5qNSBjIXtSu?132X132&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div className='infoRight'>
                            { this.props.bottomList=="comment"?
                                <div>
                                    <p className='userName'>
                                        <span className='user'> 小小小鸟</span>
                                        <span className='time'>2018-03-12</span>
                                    </p>
                                    <p className='commentItem-text'>
                                        佛卡夏是意大利面包
                                    </p>
                                </div>:<div>
                                    <p className='recUser'>
                                        据说它的起源是因为做Pizza时馅料不
                                    </p>
                                </div>}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default connect()(RecomendItem)