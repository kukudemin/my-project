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
        /*console.log(this.props.data);*/
        let {id,icon,author,time='',isStar,num,title,img,introduce,ingredient,steps,remindPoint,tips,comment,mark=''}=this.props.data;
        return (
            <div className='recipe-item cook-item'>
                {/*个人列表*/}
                {/* 姓名  时间 头像*/}
                <a>
                    <div className='infoHeader'>
                        <div className='infoLeft'>
                            <img src={icon} alt=""/>
                        </div>
                        <div className='infoRight'>
                            <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>{author}</p>
                            <p className='cook-text'>
                                <span className='time'>{time}</span>

                            </p>
                        </div>
                    </div>
                </a>

                {/*跳转到 详情 封面图片*/}
                <Link to={`/cookDetail?id=${id}&dishNum=${num}`}>
                    <div className='coverImg'>
                        <div className='cover'>
                            <img src={img}/>
                        </div>
                    </div>
                    <div className='dec'>
                        <h3 className='content'>{title}</h3>
                        {{mark}!==''?<span className="mark">#{mark}#</span>:null}
                        <span>{introduce}</span>
                    </div>
                </Link>
                {/* 标签,描述 */}


                {/*点赞 评论*/}
                <ul className='infoFooter'>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>{remindPoint.count}</span>
                    </li>
                    <li>
                            <div>
                                <img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                            </div>
                            <span>45</span>
                    </li>
                    <li>
                        <Link to={`/cookDetail?id=${id}&dishNum=${num}`}>
                            <div>
                                <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                            </div>
                            <span>{comment.count}</span>
                        </Link>
                    </li>
                </ul>

            </div>

        )
    }
}
export default connect()(CookBook)