import React, {Component} from "react"
import PropTypes from 'prop-types'
import './pay.less'

export default class Pay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pay">
                <h1>
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/>

                    失败戚风蛋糕
                </h1>
                <img  className="imgBanner" src="https://image.hongbeibang.com/FijpTmJFepqk_3FVeCYwuRVBsEx_?750X400&imageView2/1/w/599/h/400"
                     alt=""/>
                <div className='subHeader clearfix'>
                    <h2>失败戚风专题课</h2>
                    <span>预科班(新手尝鲜)</span>
                </div>
                <div className='subCon clearfix'>
                    <p>
                        课程费
                        <span>¥9.9</span>
                    </p>
                    <div className='btn'>
                        Live?
                    </div>
                </div>
                <div className='time'>
                    <p>开始时间</p>
                    <div className='timeBottom clearfix'>
                        <p>2017-3-25</p>
                        <p>1000人报名</p>
                    </div>
                </div>
                <div className='con'>
                    <h3>课程介绍</h3>
                    <p>1.示范制作任意按压不变形的戚风蛋糕</p>
                    <p>2.示范7种易范错误性操作，导致的失败戚风蛋糕。（例如塌腰、凹陷、回缩严重、组织粗糙、严重开裂等等）</p>
                    <p>难度系数：3颗星</p>
                    <p>所需基本材料及工具：</p>
                    <p>牛奶、 大豆油、白砂糖、鸡蛋、玉米淀粉、低粉、白醋</p>
                    <p>6寸活底模</p>
                </div>
                <div className='introduce'>
                    <h3>老师介绍</h3>
                    <img src="https://image.hongbeibang.com/Fo2setMNVwThvg6nBUOTrD3R_npt?1043X2000&imageView2/1/w/750/h/1438" alt=""/>
                </div>
                <div className='subFooter'>
                    付费进入  9.9
                </div>
            </div>
        )
    }
}
