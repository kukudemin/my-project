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
        return (
            <div className='recipe-item'>
                {/*个人列表*/}
                    <a>
                       <div className='infoHeader'>
                           <div className='infoLeft'>
                               <img src="https://image.hongbeibang.com/Fr_moz4Z7GkZTjZ-K5qNSBjIXtSu?132X132&imageView2/1/w/80/h/80" alt=""/>
                           </div>
                           <div className='infoRight'>
                               <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>小小小鸟</p>
                               <p className='recipe-text'>
                                   <span className='time'>30秒之前</span>
                                   <span className='content'>作品标题(长短)</span>
                               </p>
                           </div>

                       </div>
                    </a>

                {/*跳转到 详情*/}
                <Link to='/recipeDetail'>
                    <div className='dec1'>
                        <span className="mark">#很开心#</span>
                        <span>前一段时间坊间流传的网红脏脏包、脏脏卷，感觉热量太高了，一直没敢尝试，可这诱惑一直存于心中无法忘怀。今天做了一个巧克力味的夹心蛋糕，香浓的巧克力蛋糕中夹入了浓稠的老北京风味酸奶，加上一些新鲜的草莓，香甜而不腻</span>
                    </div>
                    <div className='imgList'>
                        <div>
                            <img src="https://image.hongbeibang.com/FhQvIMSglH4oqacwF4Kwbr--SfEy?1080X720&imageView2/1/w/250/h/250" alt=""/>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/FsoPcnZCx1MUEJ1k-c8W2zoqdpy0?1080X720&imageView2/1/w/250/h/250" alt=""/>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/FgWR064iVtEbCCiwKgGFE8CTkaiO?2080X1170&imageView2/1/w/600/h/337" alt=""/>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/FrNxdgHStfsaqI5kp2bcgllIL-Ok?992X744&imageView2/1/w/600/h/450" alt=""/>
                        </div>
                        <div>
                            <img src="https://image.hongbeibang.com/FrNxdgHStfsaqI5kp2bcgllIL-Ok?992X744&imageView2/1/w/600/h/450" alt=""/>
                        </div>
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
                </ul>}

            </div>

        )
    }
}
export default connect()(Recipe)