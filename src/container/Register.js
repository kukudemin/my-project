// import React from "react";
// import ReactDom from "react-dom";
// import "./Register.less"
// class Register extends React.Component {
//
//
//     render() {
//         return <div className="register">
//             <div className="register-title">登录</div>
//             <img className="register-img" src="https://image.hongbeibang.com/FkycjRlqWYQkgF7gDYEsq1ViZiVW?750X440&imageView2/1/w/510/h/299" alt=""/>
//             <div className="register-e">烘焙帮超有爱</div>
//             <div className="input-group">
//                 <input type="text" className="form-control" placeholder="用户姓名:"/>
//                 <input type="text" className="form-control" placeholder="用户密码:"/>
//             </div>
//             <button className="register-btn">登录</button>
//             <a className="register-f" href="#">其他登录方式</a>
//         </div>
//
//     }
// }
//
// export default Register;


import React, {Component} from 'react';
import "./Register.less"
import fetch from 'isomorphic-fetch';

class Register extends Component {
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

            <div className="register" onChange={(e) => this.stateChange(e)}>
                <div className="register-title">登录</div>
                <img className="register-img"
                     src="https://image.hongbeibang.com/FkycjRlqWYQkgF7gDYEsq1ViZiVW?750X440&imageView2/1/w/510/h/299"
                     alt=""/>
                <div className="register-e">烘焙帮超有爱</div>
                <div className="input-group">
                    <input className="form-control" value={this.state.username} type="text" placeholder="请输入用户名"/>
                    <input className="form-control" value={this.state.password} type="password" placeholder="请输入密码"/>
                </div>
                <button className="register-btn" onClick={() => this.saveUser()}>立即注册</button>
                <a className="register-f" href="#">其他登录方式</a>
            </div>
        );
    }
}

export default Register;