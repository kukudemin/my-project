import React from "react"
import {connect} from "react-redux"
import ReactSwipe from "react-swipe"
import PropTypes from "prop-types"
class Banner extends React.Component{
    static defaultProps = {
        data: [],
        style: {},
        initSlide: 0,
        auto: 3000,
        isFocus: true
    };
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.object,
        initSlide: PropTypes.number,
        auto: PropTypes.number,
        isFocus: PropTypes.bool
    };

    constructor(){
        super()
    }
    render(){
        return <div className="bannerBox">
            <ReactSwipe>

            </ReactSwipe>
        </div>
    }
}
export default connect()(Banner)