import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "./comment.less"
import {withRouter} from "react-router-dom"
import action from "../../store/action";
import {allMaster,comment} from "../../api/circle";
import {isLogin} from "../../api/profile";
import utils from "../../common/js/utils";

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dis:false,
        }
    }
    handleDis=()=>{
        let  {handleDisplay} =this.props;
        handleDisplay("none");
    };

   handComment=()=>{
       this.props.toComment(this.props.MyData);
   };

    render(){
        console.log(this.props);
        return (
            <div className='ye-comment'>
                <div className='header-com'>
                    <span className='cancle' onClick={()=>{
                        this.handleDis()
                    }}>取消</span>
                    <span className='title-com'>评论</span>
                    <span  className='sure'
                    onClick={ async (ev)=>{
                        /*  获取输入内容  */
                        /*  执行回调函数 使详情页面的数据跟新,  用户名 头像  事件 回调函数  */
                        if(this.props.type==="cook"){
                            console.log("修改钱111",this.props.MyData);
                            let propsData= this.props.MyData.comment;
                            /*   数字+1   */
                            propsData.count=parseInt(propsData.count)+1;

                            /*  获取登录id:用户信息:头像,用户名, 时间:  */
                            let loginId = await isLogin();
                            loginId = Number(loginId);

                            let resultInfo =await allMaster();
                            let myInfo =await utils.aryFind(resultInfo,loginId);

                            /*  时间: 是点击确定的时候,还是后台返回评论成功的时候 */

                                propsData.data=[{
                                    clientName:myInfo.author,
                                    img:myInfo.icon,
                                    commentText:this.refs.content.value,commentTime:utils.formatTime(new Date())},...propsData.data];

                            /*  数据修改成功之后的渲染  此时最新的评论列表 */
                            this.handComment( );
                        }
                        /* 当前评论区域消失 */
                        this.handleDis()
                    }}>确定</span>
                </div>

                <textarea ref='content'
                    className='toComment'
                    placeholder='来说点什么吧...'/>

               {/* <input  className='toComment' type="text" placeholder='来说点什么吧...'/>*/}
            </div>
        )
    }
}

export default withRouter(connect((state)=>({...state.zan}),action.dianZan)(Comment))