import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class Comment extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className='ye-comment'>
                <header>
                    <span className='cancle'>取消</span>
                    <h3>评论</h3>
                    <span className='sure'>确定</span>
                </header>
                <input  className='toComment' type="text" placeholder='来说点什么吧...'/>
            </div>
        )
    }
}
export default connect()(Comment)