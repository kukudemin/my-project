


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
         <div className="register">
             <div className="register-s7e1f0f36"></div>
             <div className="register-header">
                 <img className="register-img" src="https://image.hongbeibang.com/FvbI_v3ce7nuHZq3Cq5yd37BvjuG?94X94&imageView2/1/w/50/h/50" alt=""/>
                 <ul className="register-login">登录</ul>
             </div>
             <div className="register-s-505debda">
                 <img className="register-s-34f4f4a1" src="https://image.hongbeibang.com/FkycjRlqWYQkgF7gDYEsq1ViZiVW?750X440&imageView2/1/w/510/h/299" alt=""/>
             </div>
             <div className="register-s-5566e7c3">烘焙帮超有爱</div>
             <div className="register-s747151b9">
                 <div className="register-s-488bd9c1">
                     <img className="register-s-34f4f4a1" src="" alt=""/>
                     <div className="register-s6cdc22ab">微信登录</div>
                 </div>
                 <div className="register-s-24e0dc36">
                     <span>帮友们，抽空看看我们的</span>
                     <span style={{color:"#1976D2",textDecoration:"underline"}}>服务条款</span>
                     <span>呗</span>
                 </div>
             </div>
             <div className="register-s-51e4d797">其他登录方式</div>
         </div>

        );
    }
}

export default Register;