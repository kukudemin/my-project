


import React, {Component} from 'react';

import "./Login.less"
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router-dom';
import {login} from '../api/profile';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { // 初始化state
            username: '',
            password: '',
            value: ""
        }
    }

    stateChange(e) {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    saveUser() {
        const {
            username,
            password
        } = this.state;
        if (!username) return alert('用户名不能为空');
        if (!password) return alert('密码不能为空');
        fetch('http://123.206.99.172:3005/reg', {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: {username, password}
        }).then(res => res.json()).then(res => {
            // 成功, 处理逻辑
            alert('恭喜您注册成功了');
        })
    }

    render() {
        let {username, password} = this.state;
        return (
         <div className="register">
             <div className="register-empty">&nbsp;</div>
             <div className="register-header">
                 <img className="register-img" src="https://image.hongbeibang.com/FvbI_v3ce7nuHZq3Cq5yd37BvjuG?94X94&imageView2/1/w/50/h/50" alt=""/>
                 <span className="register-login">登录</span>
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
             <div className="register-sp">
                 <span>帮友们，抽空看看我们的</span>
                 <span style={{color:"#1976D2",textDecoration:"underline"}}>服务条款</span>
                 <span>呗</span>
             </div>
             <button className="register-btn" onClick={ev => {
                 let {userNameInp, userPassInp} = this.refs,
                     userName = userNameInp.value,
                     userPass = userPassInp.value;
                 login(userName, userPass).then(result => {
                     if (result !== '登录成功') {
                         alert('用户名或密码错误!');
                         return;
                     }
                     this.props.history.push('/profile');
                 });
             }}>
                 立即登陆
             </button>
             <br/><br/>
             <Link to="/register" >没有注册，请立即注册</Link>
         </div>

        );
    }
}

export default Login;