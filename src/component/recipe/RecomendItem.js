import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./RecomendItem.less"

class RecomendItem extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){

    }

    render(){
        let {data,index} =this.props;
        return (
            <div className='commentItem' key={index}>
                <Link to='/otherInfo'>
                    <div className='infoHeader'>
                        <div className='infoLeft'>
                            <img src={data.img} alt=""/>
                        </div>
                        <div className='infoRight'>
                            { this.props.bottomList=="comment"?
                                <div>
                                    <p className='userName'>
                                        <span className='user'> {data.clientName}</span>
                                        <span className='time'>{data.commentTime}</span>
                                    </p>
                                    <p className='commentItem-text'>
                                        {data.commentText}
                                    </p>
                                </div>:<div>
                                    <p className='recUser'>
                                        {data.clientName}
                                    </p>
                                </div>}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default connect()(RecomendItem)