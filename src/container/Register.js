import React from "react";
import ReactDom from "react-dom";
import {register} from "../api/profile";
import {connect} from "react-redux"
class Register extends React.Component{


    render(){
        return<div>

            <div className="register">
                <div className="register-empty">&nbsp;</div>
                <div className="register-header">
                    <img className="register-img" src="https://image.hongbeibang.com/FvbI_v3ce7nuHZq3Cq5yd37BvjuG?94X94&imageView2/1/w/50/h/50" alt=""/>
                    <span className="register-login">注册</span>
                </div>
                <div className="register-img-s">
                    <img className="register-s-34f4f4a1" src="https://image.hongbeibang.com/FkycjRlqWYQkgF7gDYEsq1ViZiVW?750X440&imageView2/1/w/510/h/299" alt=""/>
                </div>
                <div className="register-bake">烘焙帮超有爱</div>
                <div className="register-int">
                    <input type="text" placeholder='用户名' ref='userNameInp'/>
                    <br/><br/>
                    <input type="password" placeholder='密码' ref='userPassInp'/>
                    <br/><br/>
                </div>

                    <button className="register-btn"
                            style={{
                                width:".8rem",
                                height:".4rem",
                                fontSize:".16rem",
                                borderRadius:".1rem"
                            }}
                            onClick={ev => {
                        let {userNameInp, userPassInp} = this.refs,
                            userName = userNameInp.value,
                            userPass = userPassInp.value;
                        register(userName, userPass).then(result => {
                            if (result !== '注册成功') {
                                alert('注册失败!');
                                return;
                            }
                            this.props.history.push('/login');
                        });
                    }}>
                        立即注册
                    </button>
            </div>
        </div>
        
    }
}
export default connect()(Register)