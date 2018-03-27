import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class CookDetail extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>CookDetail</div>
        )
    }
}
export default connect()(CookDetail)