import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link,NavLink} from  "react-router-dom"


class Recipe extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className='userInfo'>
                    <div>
                        
                       <div className='infoHeader'>
                           <div className='infoLeft'>
                               <img src="" alt=""/>
                           </div>
                           <div className='infoRight'>
                               <h3>小小小鸟</h3>
                               <p><span>30秒之前</span><span>面包</span></p>
                           </div>
                       </div>

                        <div className='imgList'>
                            <div>
                                <img src="https://image.hongbeibang.com/FiwbEUpdtM1G7hmi_O5rKRzHIsWw?1728X1728&imageView2/1/w/250/h/250" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default connect()(Recipe)