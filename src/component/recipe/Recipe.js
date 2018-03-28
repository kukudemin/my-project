import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link,NavLink} from  "react-router-dom"
import "./Recipe.less"

class Recipe extends React.Component{
    constructor(){
        super();

    }

    render(){
        let {item} =this.props;
        let {id,
            icon='',author,
            createTime='2017-01-02',title='',description='',imgList=[],reMark='',isRemind=0,isComment=0,isCollected=0,remindPoint=[],comment=[]}=item;
       // console.log(id);


        return (
            <div className='recipe-item'  id>
                {/*个人列表*/}
                    <a>
                       <div className='infoHeader'>
                           <div className='infoLeft'>
                               <img src={icon} alt=""/>
                           </div>
                           <div className='infoRight'>
                               <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>{author}</p>
                               <p className='recipe-text'>
                                   <span className='time'>{createTime}</span>
                                   <span className='content'>{title}</span>
                               </p>
                           </div>

                       </div>
                    </a>

                {/*跳转到 详情 */}
                <Link to={`/recipeDetail/${id+''}`} >
                    <div className='dec1'>
                        <span className="mark">#{reMark}#</span>
                        <span>{description}</span>
                    </div>
                    <div className='imgList'>
                        {imgList.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <img src={item} alt=""/>
                                </div>
                            )

                        })}
                    </div>

                </Link>

                {/*点赞 评论*/}
                {this.props.list=="detail"?
                    <div className='infoFooter1'>
                        <span className='footerTitle'>作品标题</span>
                        <span className='footerSearch'>搜索食谱 ></span>
                    </div>:
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
                        <span>打赏</span>
                    </li>
                    <li>
                        <div>
                            <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                        </div>
                        <span>{comment.count}</span>
                    </li>
                </ul>}

            </div>

        )
    }
}
export default connect()(Recipe)