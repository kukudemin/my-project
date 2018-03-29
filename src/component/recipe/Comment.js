import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "./comment.less"

class Comment extends React.Component{
    constructor(){
        super();
        this.state={
            dis:false
        }
    }
    handleDis=()=>{
        let  {handleDisplay} =this.props;
        handleDisplay("none");
    };

    render(){
        return (
            <div className='ye-comment'>
                <div className='header-com'>
                    <span className='cancle' onClick={()=>{
                        this.handleDis()
                    }}>取消</span>
                    <span className='title-com'>评论</span>
                    <span className='sure'
                    onClick={()=>{
                        this.handleDis()
                    }}>确定</span>
                </div>

                <input  className='toComment' type="text" placeholder='来说点什么吧...'/>
            </div>
        )
    }
}
export default connect()(Comment)