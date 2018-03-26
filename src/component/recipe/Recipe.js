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
                               <p className='userName'>小小小鸟</p>
                               <p className='text'>
                                   <span className='time'>30秒之前</span>
                                   <span className='content'>常见的一行中超出文本宽度的内容用省略号表示就实现了,</span></p>
                           </div>
                       </div>
                    </a>

                {/*跳转到 详情*/}
                <a>
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
                </a>
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
export default connect()(Recipe)