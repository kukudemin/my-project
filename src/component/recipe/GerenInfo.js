import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "./GerenInfo.less"

class GerenInfo extends React.Component{
    constructor(){
        super();
    }

    render(){
        let {author,ico} =this.props;
        return (
            <div className='GerenInfo'>
                <a className='infoLink'>
                    <div className='infoHeader'>
                        <div className='infoLeft'>
                            <img src="https://image.hongbeibang.com/Fr_moz4Z7GkZTjZ-K5qNSBjIXtSu?132X132&imageView2/1/w/80/h/80" alt=""/>
                        </div>
                        <div className='infoRight'>
                            <p className='userName'><img  className='masterIcon' src={require("../../common/image/icon-master.png")} alt=""/>{author}
                            </p>
                            <button className='focus'>+ 关注</button>
                        </div>

                    </div>
                </a>
            </div>
        )
    }
}
export default connect()(GerenInfo)