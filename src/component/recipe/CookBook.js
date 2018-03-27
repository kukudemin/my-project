import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link,NavLink} from  "react-router-dom"
import "./Recipe.less"

class CookBook extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='recipe-item cook-item'>
                {/*个人列表*/}
                {/* 姓名  时间 头像*/}
                <a>
                    <div className='infoHeader'>
                        <div className='infoLeft'>
                            <img src="https://image.hongbeibang.com/Fr_moz4Z7GkZTjZ-K5qNSBjIXtSu?132X132&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div className='infoRight'>
                            <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>小小小鸟</p>
                            <p className='text'>
                                <span className='time'>30秒之前</span>

                            </p>
                        </div>
                    </div>
                </a>

                {/*跳转到 详情 封面图片*/}
                <Link to='/cookDetail'>
                    <div className='coverImg'>
                        <div className='cover'>
                            <img src="https://image.hongbeibang.com/Fg7LN4NkFfSmpjONUogOCgQA_5Ob?1080X810&imageView2/1/w/600/h/348" alt=""/>
                        </div>
                    </div>
                    <div className='dec'>
                        <h3 className='content'>我是面包</h3>
                        <span className="mark">#很开心#</span>
                        <span>前一段时间坊间流传的网红脏脏包、脏脏卷，感觉热量太高了，一直没敢尝试，可这诱惑一直存于心中无法忘怀。今天做了一个巧克力味的夹心蛋糕，香浓的巧克力蛋糕中夹入了浓稠的老北京风味酸奶，加上一些新鲜的草莓，香甜而不腻</span>
                    </div>
                </Link>
                {/* 标签,描述 */}


                {/*点赞 评论*/}
                <ul className='infoFooter'>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>45</span>
                    </li>
                </ul>

            </div>

        )
    }
}
export default connect()(CookBook)