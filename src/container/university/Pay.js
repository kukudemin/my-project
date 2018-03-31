import React, {Component} from "react"
import PropTypes from 'prop-types'
import './pay.less'
import {courseData} from "../../api/university";
import axios from 'axios'
import Fu from "./Fu";
export default class Pay extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            payFlag:false,
        };
    }
    async componentWillMount(event) {
        let uId = localStorage.universityId;
        console.log(uId);
        let result = await courseData(uId);
        this.setState({
            data: result,
        });
        console.log(result);
    };

    changePrice(ev){
        this.setState({
            payFlag:!ev,
        })
    };

    render() {
        let {data,payFlag}=this.state;
        let oFu = null;
        if(payFlag){
            oFu = <Fu changePrice={this.changePrice.bind(this)} flag={payFlag}/>
        }
        return (
            <div className="pay">
                <h1 className='payTitle'>
                    <img onClick={ev=>{
                        this.props.history.goBack()
                    }} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>
                    失败戚风蛋糕
                </h1>
                <img  className="imgBanner" src={data.img}
                     alt=""/>
                <div className='subHeader clearfix'>
                    <h2>{data.title}</h2>
                    <span>{data.type}</span>
                </div>
                <div className='subCon clearfix'>
                    <p>
                        课程费
                        <span>{data.price}</span>
                    </p>
                    <div className='btn'>
                        Live?
                    </div>
                </div>
                <div className='time'>
                    <p>开始时间</p>
                    <div className='timeBottom clearfix'>
                        <p>{data.time}</p>
                        <p>{data.hot}</p>
                    </div>
                </div>

                <div className='con'>
                    <h3>课程介绍</h3>
                    <p>1.{data.introduce}</p>
                    <p>2.示范7种易范错误性操作，导致的失败戚风蛋糕。（例如塌腰、凹陷、回缩严重、组织粗糙、严重开裂等等）</p>
                    <p>难度系数：3颗星</p>
                    <p>所需基本材料及工具：</p>
                    <p>牛奶、 大豆油、白砂糖、鸡蛋、玉米淀粉、低粉、白醋</p>
                    <p>6寸活底模</p>
                </div>
                <div className='introduce'>
                    <h3>老师介绍</h3>
                    <img src={data.teacherImg} alt=""/>
                </div>
                {oFu}
                <div className='subFooter' onClick={event => {
                    this.setState({
                        payFlag : true,
                    });
                }}>
                    付费进入  {data.price}
                </div>
            </div>
        )
    }
}
