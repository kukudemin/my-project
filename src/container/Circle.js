import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class Circle extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>Circle</div>
        )
    }
}
export default connect()(Circle)